import React from "react";
import ProductCard from "../components/ProductCard";

export default function CategoryPage({
  categories,
  products,
  setCategory,
  selectedCategory,
  onLike,
  onAddToCart,
  openProduct,
  language
}) {
  if (!selectedCategory) {
    return (
      <div>
        <div style={{ padding: "12px 16px", fontWeight: "bold", fontSize: "1.22rem" }}>
          {language === "uz" ? "Kategoriyalar" : "Категории"}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", padding: "0 12px" }}>
          {categories.map(cat => (
            <div
              key={cat.id}
              style={{
                borderRadius: 12,
                background: "#ffe000",
                padding: "20px 18px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                minWidth: 110,
                textAlign: "center",
                marginBottom: 10
              }}
              onClick={() => setCategory(cat)}
            >
              {cat.icon} <br /> {cat.name[language]}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const filtered = products.filter(p => p.category === selectedCategory.id);

  return (
    <div>
      <div style={{ padding: "12px 16px", fontWeight: "bold", fontSize: "1.22rem" }}>
        {selectedCategory.name[language]}
        <button
          style={{
            float: "right",
            background: "#ffe000",
            border: "none",
            borderRadius: 8,
            padding: "3px 11px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
          onClick={() => setCategory(null)}
        >
          {language === "uz" ? "Ortga" : "Назад"}
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {filtered.length === 0 ? (
          <div style={{ padding: 24 }}>{language === "uz" ? "Mahsulotlar yo'q" : "Нет товаров"}</div>
        ) : (
          filtered.map(p => (
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
