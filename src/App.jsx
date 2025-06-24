import React, { useState } from "react";
import BannerCarousel from "./components/BannerCarousel";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CategoryList from "./components/CategoryList";
import { products } from "./data/products";

function App() {
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const likeHandler = id => {
    setLiked(liked =>
      liked.includes(id) ? liked.filter(_id => _id !== id) : [...liked, id]
    );
  };
  const cartHandler = id => {
    setCart(cart =>
      cart.includes(id) ? cart : [...cart, id]
    );
  };

  let productList = products;
  if (selectedCategory) {
    productList = products.filter(p => p.category === selectedCategory);
  }

  return (
    <div style={{ paddingBottom: 65, background: "#f8f8f9", minHeight: "100vh" }}>
      <BannerCarousel />
      <CategoryList onSelect={setSelectedCategory} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3vw",
          justifyContent: "center"
        }}
      >
        {productList.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onLike={likeHandler}
            onAddToCart={cartHandler}
            isLiked={liked.includes(product.id)}
          />
        ))}
      </div>
      <Navbar active={activeTab} onNav={setActiveTab} />
    </div>
  );
}

export default App;
