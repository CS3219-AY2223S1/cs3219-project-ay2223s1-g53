import {
  Paper,
  List,
  Box,
  Button,
  Typography,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useUserContext } from "../hooks/useUserContext";
import CodeEditor from "../components/CodeEditor/CodeEditor";
import { useLocation } from "react-router-dom";

function CodePage() {
  const [msg, setmsg] = useState<string>("");
  const messagesEndRef = useRef(null);
  const { username } = useUserContext();
  const history: any = useLocation();
  const [roomId, setRoomId] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const socket = io("http://localhost:3003", {
    timeout: 10000,
    transports: ["websocket"],
    query: {
      roomId: history.state,
    },
  });

  const setErrorDialog = (msg: string) => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => setIsDialogOpen(false);
  const backToDifficulty = () => navigate("/difficulty");

  const list2 = [];

  const [list, setList] = useState(list2);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  useEffect(() => {
    setRoomId(history.state);
  }, []);

  // on receiving a new msg, add to the list

  useEffect(() => {
    socket.on("msg2", (arg) => {
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
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Box>
        <Typography
          variant="h6"
          color="black"
          sx={{ textDecoration: "underline" }}
        >
          {username}
        </Typography>

        <Typography variant="body1" color="black">
          question body
        </Typography>
      </Box>
      <Box>
        <CodeEditor roomId={roomId} />
        <Button variant={"outlined"}>Submit</Button>
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            height: 400,
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <Paper
            style={{
              maxHeight: 380,
              minHeight: 380,
              overflow: "auto",
              overflowY: "scroll",
            }}
          >
            <List>
              {list.map((item) => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText primary={item.msg} secondary={item.user} />
                  </ListItem>
                );
              })}
              <div ref={messagesEndRef} />
            </List>
          </Paper>
        </Box>
        <TextField
          label="Input text here"
          variant="standard"
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
          sx={{ marginBottom: "2rem" }}
        />
        <Button
          variant={"outlined"}
          onClick={() => {
            socket.emit("newmsg", { user: username, msg: msg, roomId: roomId });
            const obj = { id: list.length, user: "you", msg: msg };
            setList([...list, obj]);

            setmsg("");
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
  );
}

export default CodePage;
