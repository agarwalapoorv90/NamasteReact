import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100">
      <div className="title">
        <Link to="/">
          <img className="p-1 h-24" src={Logo} alt="Food Logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">Categories</li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      {isOnline ? "🟢" : "🔴"}
      <span>
        {user.name} - {user.email}
      </span>
      {!loggedIn ? (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      ) : (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      )}
    </div>
  );
};

export default Header;
