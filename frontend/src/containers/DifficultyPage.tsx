import Mycard from "../components/Mycard";
import {
  Grid,
  Typography,
  Container,
  CircularProgress,
  Button,
} from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import MyTimer from "../components/MyTimer";
import { useUserContext } from "../hooks/useUserContext";
import axios from "axios";
import { io } from "socket.io-client";

const Separator = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default function DifficultyPage() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const { username, updateUsername, setIsLoggedIn } = useUserContext();

  const socket = io("http://localhost:3002", {
    timeout: 10000,
    transports: ["websocket"],
  });

  const easyHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLoading(true);
    setDifficulty("easy");
  };

  const medHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLoading(true);
    console.log("m");
    setDifficulty("medium");
  };

  const hardHandleClick = (event: React.MouseEvent<HTMLElement>) => {
    setLoading(true);
    setDifficulty("hard");
    console.log(difficulty);
    console.log("h");
  };

  useEffect(() => {
    if (count == 1) {
      socket.connect();

      socket.on("connect", () => {
        socket.emit("match", { difficulty });
        console.log("match");
      });

      socket.on("matchFail", () => {
        // window.location.replace("/difficulty");
        console.log("fail");
      });

      socket.on("matchSuccess", () => {
        console.log("success");
        window.location.replace("/success");
      });

      // socket.connect();
    } else {
      setCount(1);
    }
  }, [loading]);

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
                  onClick={easyHandleClick}
                />
              </Grid>
              <Grid item sm={5} md={4} direction="column">
                <Mycard
                  title={"Medium"}
                  body={"Standard Questions"}
                  buttontext={"choose me"}
                  onClick={medHandleClick}
                />
              </Grid>
              <Grid item sm={5} md={4} direction="column">
                <Mycard
                  title={"Hard"}
                  body={"Tricky Questions"}
                  buttontext={"choose me"}
                  onClick={hardHandleClick}
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
            <MyTimer />
          </Grid>
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
