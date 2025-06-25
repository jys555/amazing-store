import React, { useState } from "react";
import BannerCarousel from "./components/BannerCarousel";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CategoryList from "./components/CategoryList";
import ProductDetail from "./components/ProductDetail";
import { products } from "./data/products";

function App() {
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // "Hozir sotib olish" tugmasi uchun handler
  const handleQuickBuy = (product, type) => {
    if (type === "uzum") {
      window.open("https://uzum.uz/", "_blank");
    } else if (type === "yandex") {
      window.open("https://market.yandex.ru/", "_blank");
    }
  };

  return (
    <div style={{ paddingBottom: 65, background: "#f8f8f9", minHeight: "100vh" }}>
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onLike={likeHandler}
          isLiked={liked.includes(selectedProduct.id)}
          onAddToCart={cartHandler}
          onQuickBuy={handleQuickBuy}
        />
      ) : (
        <>
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
              <div key={product.id} onClick={() => setSelectedProduct(product)}>
                <ProductCard
                  product={product}
                  onLike={likeHandler}
                  onAddToCart={cartHandler}
                  isLiked={liked.includes(product.id)}
                />
              </div>
            ))}
          </div>
        </>
      )}
      <Navbar active={activeTab} onNav={setActiveTab} />
    </div>
  );
}

export default App;
