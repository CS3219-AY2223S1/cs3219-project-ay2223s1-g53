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
import { URL_CHANGE_SVC } from "../configs";
import { STATUS_CODE_INCORRECT, STATUS_CODE_UNAUTHORIZED } from "../constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordPage() {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMsg, setDialogMsg] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate();

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
