import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ active, onNav }) {
  const tabs = [
    { icon: "/icons/home.svg", label: "Bosh sahifa" },
    { icon: "/icons/search.svg", label: "Qidiruv" },
    { icon: "/icons/heart.svg", label: "Sevimlilar" },
    { icon: "/icons/cart.svg", label: "Savat" },
    { icon: "/icons/user.svg", label: "Profil" }
  ];

  return (
    <nav className={styles.nav}>
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          className={active === idx ? styles.active : ""}
          onClick={() => onNav(idx)}
        >
          <img src={tab.icon} alt={tab.label} />
        </button>
      ))}
    </nav>
  );
}
