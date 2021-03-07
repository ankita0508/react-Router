import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "inherit"
  };
  return (
    <nav>
      <h3>App Logo</h3>
      <ul className="list-items">
        <Link to="/about">
          <li style={navStyle}>About</li>
        </Link>
        <Link to="/shop">
          <li style={navStyle}>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
