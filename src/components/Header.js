import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const toggleLogin = () =>
    setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"));

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-pink-100 shadow-md sm:bg-yellow-50 lg:bg-green-50 p-4">
      {/* Logo */}
      <div className="mb-4 sm:mb-0">
        <img className="w-40 sm:w-56" src={LOGO_URL} alt="App Logo" />
      </div>

      {/* Navigation */}
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-base font-medium">
          <li className="text-sm text-gray-700">
            Online Status:{" "}
            <span className="text-lg">{onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:underline">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="font-semibold hover:underline">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={toggleLogin}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
