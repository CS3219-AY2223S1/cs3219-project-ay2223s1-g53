import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import DifficultyPage from "./containers/DifficultyPage";
import CodePage from "./containers/CodePage";
import { Box } from "@mui/material";
import SuccessPage from "./containers/SuccessPage";
import PasswordPage from "./containers/PasswordPage";
import FailPage from "./containers/FailPage";
import { useUserContext } from "./hooks/useUserContext";
import { useEffect } from "react";
import axios from "axios";
import { URI_USER_SVC } from "./configs";

function App() {
  const { username, updateUsername } = useUserContext();

  useEffect(() => {
    const a = axios
      .get(`${URI_USER_SVC}/auth/session`, { withCredentials: true })
      .then((res) => updateUsername(res.data.username))
      .catch((e) => alert(e.response.data.message));
  }, []);
  return (
    <Box display={"flex"} flexDirection={"column"} padding={"4rem"}>
      <Router>
        <Routes>
          {username !== "" ? (
            <>
              <Route path="/fail" element={<FailPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/difficulty" element={<DifficultyPage />} />
              <Route path="/code" element={<CodePage />} />
              <Route path="*" element={<Navigate to="/difficulty" replace />} />
              <Route path="/password" element={<PasswordPage />} />
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          )}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
