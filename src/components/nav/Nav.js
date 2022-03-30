import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useProviderValue } from "../../context";

const Nav = () => {
  const { cartCount } = useProviderValue();
  return (
    <nav className='nav'>
      <Link to="/">
        <div className="logo">e-SHOP</div>
      </Link>
      <Link to="/">
        <div className="nav-item">products</div>
      </Link>
      <Link to="/cart">
        <div className='cart-icon-container'>
          <LocalMallOutlinedIcon className='cart' /><div className='cart-count'>{cartCount > 9 ? "9+" : cartCount}</div>
</div>
      </Link>
    </nav>
  );
};

export default Nav;
