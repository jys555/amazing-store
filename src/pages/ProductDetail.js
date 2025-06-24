import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function ProductDetail({ product, onLike, onAddToCart, language, onBack }) {
  const [imgIdx, setImgIdx] = useState(0);
  if (!product) return null;
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

  return (
    <div>
      <button
        onClick={onBack}
        style={{
          background: "#ffe000",
          border: "none",
          borderRadius: 8,
          padding: "7px 14px",
          margin: "12px 0 6px 12px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {language === "uz" ? "Ortga" : "Назад"}
      </button>
      <div style={{ position: "relative", margin: "0 12px", borderRadius: 16, overflow: "hidden" }}>
        <img
          src={product.imgs[imgIdx]}
          alt={product.title[language]}
          style={{ width: "100%", height: 220, objectFit: "cover" }}
        />
        <button
          onClick={() => onLike(product.id)}
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "#fff",
            border: "none",
            borderRadius: "50%",
            padding: 7,
            fontSize: 22,
            zIndex: 10,
          }}
        >
          <FaHeart color={product.liked ? "red" : "#ddd"} />
        </button>
        {discount > 0 && (
          <div
            style={{
              position: "absolute",
              left: 12,
              bottom: 12,
              background: "#e53935",
              color: "#fff",
              borderRadius: 8,
              fontWeight: "bold",
              padding: "3px 9px",
              fontSize: 16,
            }}
          >
            {discount}%
          </div>
        )}
        {product.imgs.length > 1 && (
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 7,
              right: 18,
              gap: 7,
            }}
          >
            {product.imgs.map((img, i) => (
              <span
                key={i}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: imgIdx === i ? "#ffe000" : "#fff",
                  border: "1.5px solid #eee",
                  cursor: "pointer",
                  display: "inline-block"
                }}
                onClick={() => setImgIdx(i)}
              />
            ))}
          </div>
        )}
      </div>
      <div style={{ padding: "16px 18px" }}>
        <div style={{ color: "#e53935", fontWeight: "bold", fontSize: 22 }}>
          {product.price} so‘m
          {product.oldPrice && (
            <span style={{ color: "#888", fontSize: 17, textDecoration: "line-through", marginLeft: 9 }}>
              {product.oldPrice} so‘m
            </span>
          )}
        </div>
        <div style={{ fontWeight: "bold", fontSize: 21, margin: "7px 0" }}>
          {product.title[language]}
        </div>
        <div style={{ color: "#444", marginBottom: 18 }}>
          {product.desc[language]}
        </div>
        <div style={{
          display: "flex",
          gap: 10,
          margin: "30px 0 7px 0",
          position: "sticky",
          bottom: 60
        }}>
          <button
            onClick={() => onAddToCart(product.id)}
            style={{
              flex: 1,
              background: "#ffe000",
              border: "none",
              borderRadius: 10,
              fontWeight: "bold",
              fontSize: 17,
              padding: "11px 0",
              cursor: "pointer"
            }}
          >
            {language === "uz" ? "Savatga" : "В корзину"}
          </button>
          <div style={{ flex: 2, position: "relative" }}>
            <button
              style={{
                width: "100%",
                background: "#fff",
                border: "2px solid #ffe000",
                borderRadius: 10,
                fontWeight: "bold",
                fontSize: 17,
                padding: "11px 0",
                cursor: "pointer"
              }}
              onClick={() => {
                document.getElementById("buy-now-modal").style.display = "block";
              }}
            >
              {language === "uz" ? "Hozir sotib olish" : "Купить сейчас"}
            </button>
            {/* Modal */}
            <div
              id="buy-now-modal"
              style={{
                display: "none",
                position: "absolute",
                top: 45,
                left: 0,
                right: 0,
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 2px 12px #ddd",
                zIndex: 100,
                padding: "12px 0"
              }}
            >
              <a
                href={product.uzumLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  padding: "9px 0",
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
                onClick={() => { document.getElementById("buy-now-modal").style.display = "none"; }}
              >
                Uzum orqali sotib olish
              </a>
              <a
                href={product.yandexLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  padding: "9px 0",
                  color: "#222",
                  textDecoration: "none",
                  fontWeight: "bold"
                }}
                onClick={() => { document.getElementById("buy-now-modal").style.display = "none"; }}
              >
                Yandex orqali sotib olish
              </a>
              <button
                onClick={() => { document.getElementById("buy-now-modal").style.display = "none"; }}
                style={{
                  background: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 13px",
                  marginTop: 8,
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                {language === "uz" ? "Bekor qilish" : "Отмена"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
