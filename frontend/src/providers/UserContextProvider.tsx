import { ReactElement, useState, createContext } from "react";
import { User } from "../types/User";

const defaultUser: User = { username: "", isLoggedIn: false };
const userContext = createContext(defaultUser);

const UserContextProvider = ({ children }): ReactElement => {
  const [username, setUsername] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const changeLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const updateUsername = (username: string) => {
    setUsername(username);
  };
  return (
    <userContext.Provider
      value={{
        username,
        updateUsername,
        isLoggedIn,
        setIsLoggedIn: changeLogin,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export { userContext };
export default UserContextProvider;
