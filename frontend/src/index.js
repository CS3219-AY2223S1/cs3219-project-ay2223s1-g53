import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserContextProvider from "./providers/UserContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
