import { useState } from "react";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="title">
        <a href="/">
          <img
            className="logo"
            src="https://images.hindustantimes.com/img/2022/09/22/1600x900/Swiggy_1663839495104_1663839495282_1663839495282.jpg"
            alt="Food Logo"
          />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Categories</li>
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
