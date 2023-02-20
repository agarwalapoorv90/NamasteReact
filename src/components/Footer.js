import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return <h1>This site is developed by {user.name}.</h1>;
};
