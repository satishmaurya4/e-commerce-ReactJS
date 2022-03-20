import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const Nav = () => {
  return (
    <nav className='nav'>
      <Link to="/">
        <div className="logo">e-SHOP</div>
      </Link>
      <Link to="/products">
        <div className="nav-item">products</div>
      </Link>
      <Link to="/cart">
        <LocalMallOutlinedIcon className='cart'/>
      </Link>
    </nav>
  );
};

export default Nav;
