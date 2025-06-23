import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import LanguageSwitcher from "./components/LanguageSwitcher";
import productsData from "./data/products";
import categoriesData from "./data/categories";

function App() {
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState("uz");
  const [openedProduct, setOpenedProduct] = useState(null);

  const products = productsData.map((p) => ({
    ...p,
    liked: favorites.includes(p.id),
    inCart: cart.includes(p.id),
  }));

  const openProduct = (id) => {
    setOpenedProduct(id);
    setPage("product");
  };

  const handleLike = (id) => {
    setFavorites((favs) =>
      favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id]
    );
  };

  const handleAddToCart = (id) => {
    setCart((crt) => (crt.includes(id) ? crt : [...crt, id]));
  };

  const handleRemoveFromCart = (id) => {
    setCart((crt) => crt.filter((c) => c !== id));
  };

  let content = null;
  if (page === "home") {
    content = (
      <Home
        products={products}
        onLike={handleLike}
        onAddToCart={handleAddToCart}
        openProduct={openProduct}
        language={language}
      />
    );
  } else if (page === "categories") {
    content = (
      <CategoryPage
        categories={categoriesData}
        products={products}
        setCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
        onLike={handleLike}
        onAddToCart={handleAddToCart}
        openProduct={openProduct}
        language={language}
      />
    );
  } else if (page === "favorites") {
    content = (
      <Favorites
        products={products.filter((p) => p.liked)}
        onLike={handleLike}
        onAddToCart={handleAddToCart}
        openProduct={openProduct}
        language={language}
      />
    );
  } else if (page === "cart") {
    content = (
      <Cart
        products={products.filter((p) => p.inCart)}
        onRemove={handleRemoveFromCart}
        language={language}
      />
    );
  } else if (page === "product") {
    const product = products.find((p) => p.id === openedProduct);
    content = (
      <ProductDetail
        product={product}
        onLike={handleLike}
        onAddToCart={handleAddToCart}
        language={language}
        onBack={() => setPage(selectedCategory ? "categories" : "home")}
      />
    );
  }

  return (
    <div>
      <div style={{ position: "fixed", top: 12, right: 12, zIndex: 100 }}>
        <LanguageSwitcher lang={language} onChange={setLanguage} />
      </div>
      <div style={{ paddingTop: 12, paddingBottom: 64 }}>{content}</div>
      <Navbar current={page} onChange={setPage} />
    </div>
  );
}

export default App;
