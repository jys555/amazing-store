import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./ProductCard.css";

export default function ProductCard({ product, onLike, onAddToCart, openProduct, language }) {
  const discount =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;
  return (
    <div className="product-card" onClick={() => openProduct(product.id)}>
      <div className="img-wrap">
        <img src={product.imgs[0]} alt={product.title[language]} />
        <button className="like" onClick={e => {e.stopPropagation(); onLike(product.id);}}>
          <FaHeart color={product.liked ? "red" : "#ddd"} />
        </button>
        {discount > 0 && (
          <div className="discount">{discount}%</div>
        )}
      </div>
      <div className="price-row">
        <span className="price">{product.price} so‘m</span>
        {product.oldPrice && (
          <span className="old-price">{product.oldPrice} so‘m</span>
        )}
      </div>
      <div className="product-title">{product.title[language]}</div>
      <button className="cart-btn" onClick={e => {e.stopPropagation(); onAddToCart(product.id);}}>
        <FaShoppingCart />
      </button>
    </div>
  );
}
