import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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
          <li>Cart</li>
        </ul>
        {!loggedIn ? (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        ) : (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
