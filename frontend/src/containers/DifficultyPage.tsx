import Mycard from "../components/Mycard";

import { useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
// import MyTimer from "../components/MyTimer";
import { useUserContext } from "../hooks/useUserContext";
import axios from "axios";
import { io } from "socket.io-client";

const Separator = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function DifficultyPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const { username, updateUsername, setIsLoggedIn } = useUserContext();
  const [seconds, setSeconds] = useState<number>(30);

  const socket = io("http://localhost:3002", {
    timeout: 10000,
    transports: ["websocket"],
  });

  const handleClick = (difficulty: string) => {
    setLoading(true);
    socket.emit("match", { difficulty, username });
  };

  const navigate = useNavigate();

  socket.on("matchFail", () => {
    navigate("/fail");
  });

  // on success, send room id to next room
  socket.on("matchSuccess", (roomId: string) => {
    navigate("/success", { state: roomId });
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
    <Container>
      {!loading ? (
        <Container>
          <Button
            onClick={() => {
              axios.get("http://localhost:3001/auth/logout", {
                withCredentials: true,
              });
              updateUsername("");
              setIsLoggedIn();
            }}
          >
            logout
          </Button>
          <Button
            onClick={() => {
              axios.get("http://localhost:3001/users/get", {
                withCredentials: true,
              });
            }}
          >
            get shit
          </Button>
          <Container sx={{ pt: 5, pb: 5 }}>
            <Typography variant="h2" align="center">
              Difficulty Levels
            </Typography>
          </Container>
          <Container>
            <Grid container spacing={4}>
              <Grid item sm={5} md={4} xs={12}>
                <Mycard
                  title={"Easy"}
                  body={"Warm up Questions"}
                  buttontext={"choose me"}
                  onClick={() => handleClick("easy")}
                />
              </Grid>
              <Grid item sm={5} md={4} direction="column">
                <Mycard
                  title={"Medium"}
                  body={"Standard Questions"}
                  buttontext={"choose me"}
                  onClick={() => handleClick("medium")}
                />
              </Grid>
              <Grid item sm={5} md={4} direction="column">
                <Mycard
                  title={"Hard"}
                  body={"Tricky Questions"}
                  buttontext={"choose me"}
                  onClick={() => handleClick("hard")}
                />
              </Grid>
            </Grid>
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
