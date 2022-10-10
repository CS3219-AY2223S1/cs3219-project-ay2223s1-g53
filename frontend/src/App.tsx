import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignupPage from "./containers/SignupPage";
import LoginPage from "./containers/LoginPage";
import DifficultyPage from "./containers/DifficultyPage";

import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box display={"flex"} flexDirection={"column"} padding={"4rem"}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/signup" />}></Route>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/difficulty" element={<DifficultyPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
