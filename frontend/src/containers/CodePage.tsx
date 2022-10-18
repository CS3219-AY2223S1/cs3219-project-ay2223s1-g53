import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Box, Button, Typography } from "@mui/material";
import { okaidia } from "@uiw/codemirror-theme-okaidia";

function CodePage() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
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
          header
        </Typography>

        <Typography variant="body1" color="black">
          question body
        </Typography>
      </Box>
      <Box>
        <CodeMirror
          value="console.log('hello world!');"
          height="600px"
          width="500px"
          theme={okaidia}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
        <Button variant={"outlined"}>Submit</Button>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="black"
          sx={{ textDecoration: "underline" }}
        >
          header
        </Typography>

        <Typography variant="body1" color="black">
          question body
        </Typography>
      </Box>
    </Box>
  );
}
export default CodePage;
