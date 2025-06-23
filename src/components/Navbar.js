import React from "react";
import { FaHome, FaTh, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ current, onChange }) {
  return (
    <nav className="navbar">
      <button
        className={current === "home" ? "active" : ""}
        onClick={() => onChange("home")}
      >
        <FaHome />
      </button>
      <button
        className={current === "categories" ? "active" : ""}
        onClick={() => onChange("categories")}
      >
        <FaTh />
      </button>
      <button
        className={current === "favorites" ? "active" : ""}
        onClick={() => onChange("favorites")}
      >
        <FaHeart />
      </button>
      <button
        className={current === "cart" ? "active" : ""}
        onClick={() => onChange("cart")}
      >
        <FaShoppingCart />
      </button>
    </nav>
  );
}
