import Mycard from "../components/Mycard";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Container,
  CircularProgress,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
// import MyTimer from "../components/MyTimer";
import { useUserContext } from "../hooks/useUserContext";
import { io } from "socket.io-client";
import { AccountCircle } from "@mui/icons-material";
import axios from "axios";

const Separator = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function DifficultyPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const { username, updateUsername, setIsLoggedIn } = useUserContext();
  const [seconds, setSeconds] = useState<number>(30);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
    axios.get("http://localhost:3001/auth/logout", {
      withCredentials: true,
    });
    updateUsername("");
    setIsLoggedIn();
  };

  const handleSettings = () => {
    handleClose();
    navigate("/password");
  };
  const socket = io("http://localhost:3002", {
    timeout: 10000,
    transports: ["websocket"],
  });

  const handleClick = (difficulty: string) => {
    setLoading(true);
    socket.emit("match", { difficulty, username });
  };

  socket.on("matchFail", () => {
    navigate("/fail");
  });

  // on success, send room id to next room

  socket.on("matchSuccess", (roomId: string, difficulty: string) => {
    let id = 0;

    for (let i = 0; i < roomId.length; i++) {
      id += roomId.charCodeAt(i);
    }

    navigate("/code", {
      state: { roomId: roomId, seed: id, difficulty: difficulty },
    });
  });

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);

        if (seconds <= 1) {
          // change this to an error page / alert n redirect to difficulty page
          socket.emit("matchFail", { username });
          navigate("/fail");
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, loading]);

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <Container
      style={{
        minHeight: "75vh",
        minWidth: "75vh",
      }}
    >
      {!loading ? (
        <Container>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Welcome, {username}
              </Typography>
              <IconButton
                style={{ color: "black" }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleMenuClick}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  <AccountCircle />
                </Avatar>
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleSettings}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>

          <Container sx={{ pt: 5, pb: 5 }}>
            <Typography variant="h2" align="center">
              Difficulty Levels
            </Typography>
          </Container>
          <Container>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              style={{ minWidth: "600" }}
            >
              <Mycard
                title={"Easy"}
                body={"Warm up Questions"}
                buttontext={"choose me"}
                onClick={() => handleClick("easy")}
              />
              <Mycard
                title={"Medium"}
                body={"Standard Questions"}
                buttontext={"choose me"}
                onClick={() => handleClick("medium")}
              />

              <Mycard
                title={"Hard"}
                body={"Tricky Questions"}
                buttontext={"choose me"}
                onClick={() => handleClick("hard")}
              />
            </Box>
          </Container>
        </Container>
      ) : (
        <Grid
          container
          spacing={4}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "50vh" }}
        >
          <Grid item xs={3}>
            <div>
              <span className="time">{seconds}</span>
              <span className="label"> Seconds</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
