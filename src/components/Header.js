import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <div className="title">
        <Link to="/">
          <img className="logo" src={Logo} alt="Food Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Categories</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      {isOnline ? "🟢" : "🔴"}
      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
