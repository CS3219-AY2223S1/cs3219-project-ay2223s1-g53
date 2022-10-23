import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import DifficultyPage from "./containers/DifficultyPage";
import CodePage from "./containers/CodePage";
import { Box } from "@mui/material";
import SuccessPage from "./containers/SuccessPage";
import { useUserContext } from "./hooks/useUserContext";
import { useEffect } from "react";

function App() {
  const { username } = useUserContext();

  useEffect(() => {
    console.log(username);
  }, [username]);

  return (
    <Box display={"flex"} flexDirection={"column"} padding={"4rem"}>
      <Router>
        <Routes>
          {username !== "" ? (
            <>
              <Route path="/success" element={<SuccessPage />} />
              <Route path="/difficulty" element={<DifficultyPage />} />
              <Route path="/code" element={<CodePage />} />
              {/* <Route path="*" element={<Navigate to="/difficulty" replace />} /> */}
            </>
          ) : (
            <>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
              <Route path="/code" element={<CodePage />} />
            </>
          )}
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
