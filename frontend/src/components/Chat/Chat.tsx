import { ChatProps } from "./interface";
import { Paper, List, Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useRef } from "react";

export default function Chat({ list }: ChatProps) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [list]);
  return (
    <Box>
      <Paper
        style={{
          maxHeight: 570,
          minHeight: 570,
          overflow: "auto",
          overflowY: "scroll",
        }}
      >
        <List>
          {list.map((item) => {
            return (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.msg}
                  secondary={item.user}
                  primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
                />
              </ListItem>
            );
          })}
          <div ref={messagesEndRef} />
        </List>
      </Paper>
    </Box>
  );
}
