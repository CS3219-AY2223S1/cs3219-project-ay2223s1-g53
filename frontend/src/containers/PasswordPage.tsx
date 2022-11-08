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
  Modal,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URI_USER_SVC, URL_CHANGE_SVC } from "../configs";
import { STATUS_CODE_INCORRECT, STATUS_CODE_UNAUTHORIZED } from "../constants";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useUserContext } from "../hooks/useUserContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "150px",
  height: "inherit",
  backgroundColor: "white",
  p: 4,
};
function PasswordPage() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isWarningOpen, setIsWarningOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMsg, setDialogMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const { username, updateUsername, setIsLoggedIn } = useUserContext();

  const handleDeleteAccount = async () => {
    const a = await axios
      .post(
        `${URI_USER_SVC}/users/delete`,
        { username: username },
        { withCredentials: true }
      )
      .then(() => {
        updateUsername("");
      });
    const b = await axios.get("http://localhost:3001/auth/logout", {
      withCredentials: true,
    });
    updateUsername("");
    setIsLoggedIn();
  };
  const unfilledFields = () =>
    setErrorDialog("Make sure all fields are filled up!");

  const handleLogin = async () => {
    if (oldPassword.trim() == "" || newPassword.trim() == "") {
      unfilledFields();
      return;
    } else {
      const res = await axios
        .post(
          URL_CHANGE_SVC,
          { currentPassword: oldPassword, newPassword: newPassword },
          { withCredentials: true }
        )
        .then((res) => {
          setSuccessDialog(res.data.message);
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

  const setSuccessDialog = (data: string) => {
    setIsDialogOpen(true);
    setDialogMsg(data);
    setDialogTitle("Success");
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography variant={"h3"} marginBottom={"2rem"}>
          Password Reset
        </Typography>
        <TextField
          label="Old Password"
          variant="standard"
          type="text"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
          autoFocus
        />
        <TextField
          label="New Password"
          variant="standard"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
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
          <Button variant={"outlined"} onClick={handleLogin}>
            Reset
          </Button>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          pt={3}
        >
          <Button component={Link} to="/difficulty">
            <Typography
              variant="button"
              color="black"
              sx={{ textDecoration: "underline" }}
            >
              Back to Difficulty Page
            </Typography>
          </Button>
        </Box>
        <p />

        <Button
          variant="contained"
          color="error"
          onClick={() => setIsWarningOpen(true)}
        >
          Delete account
        </Button>
        <Modal open={isWarningOpen} onClose={() => setIsWarningOpen(false)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Delete account?
            </Typography>
            <p />
            <Grid container spacing={2} direction="row">
              <Grid item xs={6}>
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleDeleteAccount}
                >
                  yes
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  onClick={() => setIsWarningOpen(false)}
                >
                  no
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
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

export default PasswordPage;
