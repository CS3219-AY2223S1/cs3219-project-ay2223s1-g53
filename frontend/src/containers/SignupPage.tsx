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
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URL_SIGNUP_SVC } from "../configs";
import { STATUS_CODE_INCORRECT } from "../constants";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function SignupPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMsg, setDialogMsg] = useState<string>("");
  const [isSignupSuccess, setIsSignupSuccess] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const unfilledFields = () =>
    setErrorDialog("Make sure all fields are filled up!");

  const handleSignup = async () => {
    if (username.trim() == "" || password.trim() == "") {
      unfilledFields();
      return;
    } else {
      setIsSignupSuccess(false);
      const res = await axios
        .post(URL_SIGNUP_SVC, { username, password })
        .catch((err) => {
          if (err.response.status === STATUS_CODE_INCORRECT) {
            setErrorDialog(err.response.data.message);
          } else {
            setErrorDialog("Please try again later");
          }
        });
      if (res && res.data.username === username) {
        setSuccessDialog("Account successfully created");
        setIsSignupSuccess(true);
      }
    }
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setSuccessDialog = (msg: string) => {
    setIsDialogOpen(true);
    setDialogTitle("Success");
    setDialogMsg(msg);
  };

  const setErrorDialog = (msg: string) => {
    setIsDialogOpen(true);
    setDialogTitle("Error");
    setDialogMsg(msg);
  };

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        minWidth: 500,
        minHeight: "75vh",
      }}
    >
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography variant={"h3"} marginBottom={"2rem"}>
          Sign Up
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
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ marginBottom: "2rem" }}
        />
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
          <Button variant={"outlined"} onClick={handleSignup}>
            Sign up
          </Button>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          pt={3}
        >
          <Button component={Link} to="/login">
            <Typography
              variant="button"
              color="black"
              sx={{ textDecoration: "underline" }}
            >
              To Log In page
            </Typography>
          </Button>
        </Box>

        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialogMsg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {isSignupSuccess ? (
              <Button component={Link} to="/login">
                Log in
              </Button>
            ) : (
              <Button onClick={closeDialog}>Done</Button>
            )}
          </DialogActions>
        </Dialog>
      </Box>
    </Grid>
  );
}

export default SignupPage;
