import { useContext } from "react";
import { userContext } from "../providers/UserContextProvider";

export const useUserContext = () => {
  return useContext(userContext);
};
