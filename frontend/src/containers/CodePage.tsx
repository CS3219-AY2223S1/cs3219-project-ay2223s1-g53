import {
  Paper,
  Box,
  Button,
  Grid,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useUserContext } from "../hooks/useUserContext";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import Chat from "../components/Chat/Chat";
import { useLocation } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";

function CodePage() {
  const [msg, setmsg] = useState<string>("");
  const messagesEndRef = useRef(null);
  const { username } = useUserContext();
  const history: any = useLocation();
  const [roomId, setRoomId] = useState<string>("");
  const [str, setStr] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const socket = io("http://localhost:3003", {
    timeout: 10000,
    transports: ["websocket"],
    query: {
      roomId: history.state.roomId,
    },
  });

  const closeDialog = () => setIsDialogOpen(false);
  const backToDifficulty = () => navigate("/difficulty");

  const [list, setList] = useState([]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3005?difficulty=${history.state.difficulty}&seed=${history.state.seed}`
      )
      .then((res) => {
        setTitle(res.data.data.questionTitle);
        setStr(res.data.data.questionBody);
      });
    setRoomId(history.state.roomId);
  }, []);

  // on receiving a new msg, add to the list

  useEffect(() => {
    socket.on("msg2", (arg) => {
      console.log(arg);
      const obj = { id: list.length, user: arg.user, msg: arg.msg };
      setList([...list, obj]);
    });

    socket.on("friendLeft", () => {
      setIsDialogOpen(true);
    });
    return function cleanup() {
      socket.off("msg2");
    };
  }, [socket]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            marginBottom: "2rem",
          }}
        >
          <Paper
            style={{
              maxHeight: 250,
              maxWidth: 1300,
              minWidth: 1300,
              minHeight: 250,
              overflowY: "scroll",
            }}
          >
            <>{parse(title)}</>
            <>{parse(str)}</>
          </Paper>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          style={{
            maxWidth: 1300,
            minWidth: 1300,
            maxHeight: 1000,
          }}
        >
          <Box>
            <CodeEditor roomId={roomId} />
            <Button variant={"outlined"}>Submit</Button>
          </Box>

          <Box
            sx={{
              maxWidth: 500,
              minWidth: 500,
              bgcolor: "background.paper",
            }}
          >
            <Chat list={list}></Chat>
            <TextField
              label="Input text here"
              variant="standard"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
              sx={{
                maxWidth: 300,
                minWidth: 300,
                bgcolor: "background.paper",
                marginTop: "1rem",
              }}
            />
            <Button
              variant={"outlined"}
              onClick={() => {
                socket.emit("newmsg", {
                  user: username,
                  msg: msg,
                  roomId: roomId,
                });
                const obj = { id: list.length, user: "you", msg: msg };
                setList([...list, obj]);

                setmsg("");
              }}
              sx={{
                marginTop: "1rem",
                marginLeft: "1rem",
              }}
            >
              Send
            </Button>
          </Box>
          <Dialog open={isDialogOpen} onClose={closeDialog}>
            <DialogTitle>Alert</DialogTitle>
            <DialogContent>
              <DialogContentText>Your Friend Left</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog}>Continue Coding by Yourself</Button>
            </DialogActions>
            <DialogActions>
              <Button onClick={backToDifficulty}>
                Back to Difficulty Selection
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>
    </Grid>
  );
}

export default CodePage;
