import React, { useState } from "react";
import BannerSlider from "../components/BannerSlider";
import ProductCard from "../components/ProductCard";

export default function Home({ products, onLike, onAddToCart, openProduct, language }) {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p =>
    p.title[language].toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <BannerSlider />
      <div className="search-row" style={{ margin: "8px 12px" }}>
        <input
          style={{
            width: "100%",
            padding: "9px 15px",
            borderRadius: 16,
            border: "1px solid #eee",
            fontSize: "1.04rem",
            background: "#f7f7f7"
          }}
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder={language === "uz" ? "Tovarlarni topish" : "Поиск товаров"}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {filtered.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onLike={onLike}
            onAddToCart={onAddToCart}
            openProduct={openProduct}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
