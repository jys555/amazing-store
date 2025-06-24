import React from "react";
import styles from "./ProductCard.module.css";
import cn from "classnames";

export default function ProductCard({ product, onLike, onAddToCart, isLiked }) {
  const ratioStyle = {
    aspectRatio: "3/4",
    width: "100%",
    borderRadius: 12,
    objectFit: "cover"
  };

  const discount = Math.round(100 - (product.price / product.old_price) * 100);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt={product.name_uz} style={ratioStyle} />
        <button
          className={cn(styles.likeBtn, { [styles.liked]: isLiked })}
          onClick={() => onLike(product.id)}
        >
          <img src="/icons/heart.svg" alt="Like" />
        </button>
        {discount > 0 && (
          <span className={styles.discount}>-{discount}%</span>
        )}
        <button
          className={styles.cartBtn}
          onClick={() => onAddToCart(product.id)}
        >
          <img src="/icons/cart.svg" alt="Cart" />
        </button>
      </div>
      <div className={styles.price}>{product.price.toLocaleString()} so‘m</div>
      <div className={styles.name}>{product.name_uz}</div>
    </div>
  );
}
