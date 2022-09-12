import Container from "@mui/material/Container";
import MyTimer from "../components/MyTimer";
import { io } from "socket.io-client";
import { useEffect } from "react";

export default function LoadingPage() {
  const socket = io("http://localhost:8001", {
    timeout: 10000,
    transports: ["websocket"],
  });

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      socket.emit("matchEvent");
      console.log("match");
    });

    socket.on("matchfail", () => {
      window.location.replace("/difficulty");
    });

    socket.on("matchsuccess", () => {
      console.log("b");
      window.location.replace("/signup");
    });

    socket.connect();
  });
  return (
    <Container>
      <MyTimer></MyTimer>
    </Container>
  );
}
