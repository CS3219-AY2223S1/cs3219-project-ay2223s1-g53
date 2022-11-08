export interface User {
  username: string;
  isLoggedIn: boolean;
  updateUsername?: (username: string) => void;
  setIsLoggedIn?: () => void;
}
