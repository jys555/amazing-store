import React, { useState, useEffect } from "react";
import "./BannerSlider.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const banners = [
  { id: 1, img: banner1, link: "#" },
  { id: 2, img: banner2, link: "#" },
  { id: 3, img: banner3, link: "#" }
];

export default function BannerSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setActive((a) => (a + 1) % banners.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="banner-slider">
      {banners.map((b, i) => (
        <a
          href={b.link}
          key={b.id}
          className={`banner ${active === i ? "show" : ""}`}
          style={{ display: active === i ? "block" : "none" }}
        >
          <img src={b.img} alt={`banner${i + 1}`} />
        </a>
      ))}
    </div>
  );
}
