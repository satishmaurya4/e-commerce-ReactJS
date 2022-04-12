import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useProviderValue } from "../../context";
import Profile from "../profile/Profile";
import { useSignUpProviderValue } from "../form/signup/context";

const Nav = () => {
  const {
    cartCount,
    showProfile,
    setShowProfile,
    showProfileContent,
  } = useProviderValue();

  const { getFormValues: { username } } = useSignUpProviderValue();

  let activeStyle = {
    borderBottom: "2px solid goldenrod",
  };

  return (
    <div className="nav-container">
      {console.log("show profile content nav", showProfileContent)}
      <nav className="nav">
        <NavLink to="/">
          <div className="logo">e-SHOP</div>
        </NavLink>
        <div className="nav-item-container">
          <NavLink
            to="/"
            className="nav-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            products
          </NavLink>
          <div
            className="nav-item"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            hello, {showProfileContent ? username : "sign up"}
            {showProfile && <Profile />}
          </div>
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav-item cart-icon-container"
          >
            <LocalMallOutlinedIcon className="cart" />
            <div className="cart-count">{cartCount > 9 ? "9+" : cartCount}</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
