import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URL_USER_SVC } from "../configs";
import { STATUS_CODE_INCORRECT, STATUS_CODE_UNAUTHORIZED } from "../constants";
import { Link } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
// const jwt = require("jsonwebtoken");

function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMsg, setDialogMsg] = useState<string>("");

  const { updateUsername, setIsLoggedIn } = useUserContext();
  const navigate = useNavigate();

  // const authorization = (req, res, next) => {
  //   const token = req.cookies.access_token;
  //   if (!token) {
  //     return res.sendStatus(403);
  //   }
  //   try {
  //     const data = jwt.verify(token, "YOUR_SECRET_KEY");
  //     req.userId = data.id;
  //     req.userRole = data.role;
  //     return next();
  //   } catch {
  //     return res.sendStatus(403);
  //   }
  // };
  const unfilledFields = () =>
    setErrorDialog("Make sure all fields are filled up!");

  const handleLogin = async () => {
    if (username.trim() == "" || password.trim() == "") {
      unfilledFields();
      return;
    } else {
      const res = await axios
        .post(URL_USER_SVC, { username, password }, { withCredentials: true })
        .then((res) => {
          const username = res.data.username;
          if (username) {
            updateUsername(username);
            setIsLoggedIn();
            navigate("/difficulty");
          }
        })
        .catch((err) => {
          if (
            err.statusCode === STATUS_CODE_INCORRECT ||
            STATUS_CODE_UNAUTHORIZED
          ) {
            setErrorDialog(err.response.data.message);
          } else {
            setErrorDialog("try again later!");
          }
        });
    }
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setErrorDialog = (data: string) => {
    setIsDialogOpen(true);
    setDialogMsg(data);
    setDialogTitle("Error");
  };

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "75vh" }}
    >
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography variant={"h3"} marginBottom={"2rem"}>
          Log in
        </Typography>
        <TextField
          label="Username"
          variant="standard"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: "1rem" }}
          autoFocus
        />
        <TextField
          label="Password"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: "2rem" }}
        />
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
          <Button variant={"outlined"} onClick={handleLogin}>
            Log in
          </Button>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          pt={3}
        >
          <Button component={Link} to="/signup">
            <Typography
              variant="button"
              color="black"
              sx={{ textDecoration: "underline" }}
            >
              To Sign Up page
            </Typography>
          </Button>
        </Box>

        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialogMsg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog}>Done</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}

export default LoginPage;
