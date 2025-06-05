// Mahsulotlar ro‘yxati
function getAllProducts() {
  return [
    {
      id: 1,
      name: "Raqsga tushadigan kaktus",
      price: "129 000 so‘m",
      image: "images/kaktus.jpg",
      category: "O‘yinchoqlar",
      link: "https://ya.ru/kaktus"
    },
    {
      id: 2,
      name: "Yumshoq to‘p",
      price: "79 000 so‘m",
      image: "images/ball.jpg",
      category: "O‘yinchoqlar",
      link: "https://ya.ru/ball"
    },
    {
      id: 3,
      name: "Pultli jeep",
      price: "199 000 so‘m",
      image: "images/jeep.jpg",
      category: "O‘yinchoqlar",
      link: "https://ya.ru/jeep"
    }
  ];
}

// Sevimlilarni saqlovchi va olib beruvchi funksiyalar
function toggleFavorite(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = favorites.find(item => item.id === product.id);

  if (exists) {
    favorites = favorites.filter(item => item.id !== product.id);
  } else {
    favorites.push(product);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function isFavorited(productId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.some(item => item.id === productId);
}

// Mahsulot kartasini yaratish
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <div class="actions">
        <a href="${product.link}" target="_blank" class="buy-button">🛒 Sotib olish</a>
      </div>
    </div>
  `;

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = isFavorited(product.id) ? "❤️" : "🤍";

  likeBtn.addEventListener("click", () => {
    toggleFavorite(product);
    likeBtn.textContent = isFavorited(product.id) ? "❤️" : "🤍";
  });

  card.querySelector(".actions").appendChild(likeBtn);
  return card;
}

// Sahifaga mahsulotlarni chiqarish
function renderProducts(products) {
  const container = document.getElementById("product-list");
  if (!container) return;
  container.innerHTML = "";

  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

// Sevimlilarni chiqarish
function renderFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  renderProducts(favorites);
}

// Sahifa yuklanganda bajariladigan kod
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const allProducts = getAllProducts();

  if (path.includes("index.html")) {
    renderProducts(allProducts); // Bosh sahifa: barcha mahsulot
  } else if (path.includes("category.html")) {
    // Hozircha faqat "O‘yinchoqlar" ko‘rsatiladi
    const toys = allProducts.filter(p => p.category === "O‘yinchoqlar");
    renderProducts(toys);
  } else if (path.includes("favorites.html")) {
    renderFavorites();
  }
});
