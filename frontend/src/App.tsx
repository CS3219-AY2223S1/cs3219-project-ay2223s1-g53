import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import DifficultyPage from "./containers/DifficultyPage";

import { Box } from "@mui/material";
import SuccessPage from "./containers/SuccessPage";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    setUsername(window.sessionStorage.getItem("username"));
  }, []);

  useEffect(() => {
    console.log(username);
  }, [username]);
  return (
    <div className="App">
      <Box display={"flex"} flexDirection={"column"} padding={"4rem"}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={username ? <DifficultyPage /> : <LoginPage />}
            />
            {username ? (
              <>
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/difficulty" element={<DifficultyPage />} />
              </>
            ) : (
              <>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
              </>
            )}
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
