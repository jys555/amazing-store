import React from "react";

export default function Cart({ products, onRemove, language }) {
  return (
    <div>
      <div style={{ padding: "12px 16px", fontWeight: "bold", fontSize: "1.22rem" }}>
        {language === "uz" ? "Savat" : "Корзина"}
      </div>
      <div>
        {products.length === 0 ? (
          <div style={{ padding: 24 }}>{language === "uz" ? "Savatda mahsulot yo'q" : "Корзина пуста"}</div>
        ) : (
          products.map(p => (
            <div
              key={p.id}
              style={{
                borderRadius: 12,
                background: "#fff",
                margin: "10px 14px 14px 14px",
                padding: 12,
                boxShadow: "0 1px 4px #eee",
                display: "flex",
                alignItems: "center",
                gap: 18,
                position: "relative"
              }}
            >
              <img
                src={p.imgs[0]}
                alt={p.title[language]}
                style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 12 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold", fontSize: "1.04rem" }}>
                  {p.title[language]}
                </div>
                <div style={{ color: "#e53935", fontWeight: "bold", margin: "4px 0" }}>
                  {p.price} so‘m
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <a
                    href={p.uzumLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#ffe000",
                      borderRadius: 8,
                      padding: "4px 11px",
                      textDecoration: "none",
                      color: "#222",
                      fontWeight: "bold"
                    }}
                  >
                    Uzum
                  </a>
                  <a
                    href={p.yandexLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#ffe000",
                      borderRadius: 8,
                      padding: "4px 11px",
                      textDecoration: "none",
                      color: "#222",
                      fontWeight: "bold"
                    }}
                  >
                    Yandex
                  </a>
                </div>
              </div>
              <button
                onClick={() => onRemove(p.id)}
                style={{
                  background: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 8,
                  cursor: "pointer"
                }}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
