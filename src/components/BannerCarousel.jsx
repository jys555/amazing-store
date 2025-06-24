import React, { useState, useEffect } from "react";
import styles from "./BannerCarousel.module.css";
import { banners } from "../data/banners";

export default function BannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel}>
      {banners.map((banner, idx) => (
        <img
          key={banner.id}
          src={banner.image}
          alt="banner"
          className={`${styles.banner} ${idx === active ? styles.active : ""}`}
          style={{
            aspectRatio: banner.type === "main" ? "16/5" : "16/6"
          }}
        />
      ))}
      <div className={styles.dots}>
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={idx === active ? styles.dotActive : styles.dot}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
}
