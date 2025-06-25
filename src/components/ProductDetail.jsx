import React, { useState } from "react";
import styles from "./ProductDetail.module.css";

export default function ProductDetail({ product, onBack, onLike, isLiked, onAddToCart, onQuickBuy }) {
  const [activeImg, setActiveImg] = useState(0);
  const [showBuyOptions, setShowBuyOptions] = useState(false);

  const discount = Math.round(100 - (product.price / product.old_price) * 100);

  return (
    <div className={styles.wrapper}>
      {/* Orqaga qaytish */}
      <button className={styles.backBtn} onClick={onBack}>
        <img src="/icons/back.svg" alt="Back" />
      </button>

      {/* Rasm karuseli */}
      <div className={styles.imgCarousel}>
        <img
          src={product.images[activeImg]}
          alt={product.name_uz}
          className={styles.mainImg}
          style={{ aspectRatio: "3/4" }}
        />
        {/* Layk */}
        <button
          className={`${styles.likeBtn} ${isLiked ? styles.liked : ""}`}
          onClick={() => onLike(product.id)}
        >
          <img src="/icons/heart.svg" alt="Like" />
        </button>
        {/* Chegirma foizi */}
        <span className={styles.discount}>-{discount}%</span>
        {/* Karusel uchun kichik rasmchalar */}
        <div className={styles.imgThumbs}>
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className={activeImg === idx ? styles.activeThumb : ""}
              alt=""
              onClick={() => setActiveImg(idx)}
              style={{ aspectRatio: "3/4" }}
            />
          ))}
        </div>
      </div>

      {/* Narxlar va nom */}
      <div className={styles.info}>
        <div className={styles.prices}>
          <span className={styles.price}>{product.price.toLocaleString()} so‘m</span>
          <span className={styles.oldPrice}>{product.old_price.toLocaleString()} so‘m</span>
        </div>
        <div className={styles.name}>{product.name_uz}</div>
        <div className={styles.desc}>{product.description_uz}</div>
      </div>

      {/* Qo‘zg‘almas tugmalar */}
      <div className={styles.fixedBtns}>
        <button className={styles.buyNow} onClick={() => setShowBuyOptions(true)}>
          Hozir sotib olish
        </button>
        <button className={styles.toCart} onClick={() => onAddToCart(product.id)}>
          Savatga
        </button>
      </div>

      {/* "Hozir sotib olish" variantlari */}
      {showBuyOptions && (
        <div className={styles.buyOptionsModal} onClick={() => setShowBuyOptions(false)}>
          <div className={styles.buyOptions} onClick={e => e.stopPropagation()}>
            <button onClick={() => onQuickBuy(product, "uzum")}>Uzum orqali sotib olish</button>
            <button onClick={() => onQuickBuy(product, "yandex")}>Yandex orqali sotib olish</button>
          </div>
        </div>
      )}
    </div>
  );
}
