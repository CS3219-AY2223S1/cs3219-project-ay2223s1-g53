import React from "react";
import { Paper, List, Box, Button, Typography, TextField } from "@mui/material";
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

  const socket = io("http://localhost:3003", {
    timeout: 10000,
    transports: ["websocket"],
  });

  const list2 = [
    {
      id: 0,
      user: "a",
      msg: "1",
    },
    {
      id: 1,
      user: "b",
      msg: "2",
    },
  ];

  const [list, setList] = useState(list2);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [list]);

  useEffect(() => {
    setRoomId(history.state);
  }, []);
  // on receiving a new msg, add to the list

  useEffect(() => {
    socket.on("msg2", (arg) => {
      console.log("re");
      console.log(arg);
      const obj = { id: list.length, user: arg.user, msg: arg.msg };
      setList([...list, obj]);
      console.log(list);
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
        {/* <CodeMirror
          value="console.log('hello world!');"
          height="600px"
          width="500px"
          theme={okaidia}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        /> */}
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
            socket.emit("newmsg", { user: username, msg: msg });
            const obj = { id: list.length, user: "you", msg: msg };
            setList([...list, obj]);
            console.log(msg);

            setmsg("");
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default CodePage;
