import React from "react";
import ProductCard from "../components/ProductCard";

export default function Favorites({ products, onLike, onAddToCart, openProduct, language }) {
  return (
    <div>
      <div style={{ padding: "12px 16px", fontWeight: "bold", fontSize: "1.22rem" }}>
        {language === "uz" ? "Sevimlilar" : "Избранное"}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {products.length === 0 ? (
          <div style={{ padding: 24 }}>{language === "uz" ? "Sevimlilar yo'q" : "Нет избранных товаров"}</div>
        ) : (
          products.map(p => (
            <ProductCard
              key={p.id}
              product={p}
              onLike={onLike}
              onAddToCart={onAddToCart}
              openProduct={openProduct}
              language={language}
            />
          ))
        )}
      </div>
    </div>
  );
}
