document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: "1",
      name: "Raqsga tushadigan kaktus",
      price: "129,000 so'm",
      image: "https://jys555.github.io/amazing-store/images/kaktus.jpg"
    },
    {
      id: "2",
      name: "Yumshoq to‘p",
      price: "59,000 so'm",
      image: "https://jys555.github.io/amazing-store/images/ball.jpg"
    },
    {
      id: "3",
      name: "Pultli Jeep",
      price: "199,000 so'm",
      image: "https://jys555.github.io/amazing-store/images/jeep.jpg"
    }
  ];

  const container = document.getElementById("product-list");

  if (container) {
    products.forEach(product => {
      const liked = localStorage.getItem(`liked_${product.id}`) === "true";
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button class="like-btn" data-id="${product.id}">
            ${liked ? "❤️" : "🤍"}
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    document.querySelectorAll(".like-btn").forEach(button => {
      button.addEventListener("click", () => {
        const id = button.dataset.id;
        const liked = localStorage.getItem(`liked_${id}`) === "true";
        localStorage.setItem(`liked_${id}`, !liked);
        button.innerText = !liked ? "❤️" : "🤍";
      });
    });
  }
});
// 🔽 Bu faylning eng pastiga qo‘shing (eng oxiriga)
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

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <div class="actions">
      <button onclick="toggleLike(${product.id}, this)">🤍</button>
      <a href="${product.link}" target="_blank">Sotib olish</a>
    </div>
  `;

  // Agar oldin like bosilgan bo‘lsa, yurak qizil bo‘lib tursin
  if (isProductLiked(product.id)) {
    card.querySelector('button').textContent = '❤️';
  }

  return card;
}
// Like bosilgan mahsulotni localStorage'ga yozish
function toggleFavorite(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = favorites.find(item => item.name === product.name);

  if (exists) {
    favorites = favorites.filter(item => item.name !== product.name);
  } else {
    favorites.push(product);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Like tugmasiga hodisa biriktirish
function createLikeButton(product) {
  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.innerHTML = "❤️";

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const isFavorited = favorites.some(item => item.name === product.name);

  if (isFavorited) {
    likeBtn.classList.add("liked");
  }

  likeBtn.addEventListener("click", () => {
    toggleFavorite(product);
    likeBtn.classList.toggle("liked");
  });

  return likeBtn;
}

// Sevimlilarni ko‘rsatish
function renderFavorites() {
  const favoritesList = document.getElementById("favorites-list");
  if (!favoritesList) return;

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="product-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
        <div class="product-actions">
          <a href="${product.link}" target="_blank" class="buy-button">🛒 Sotib olish</a>
        </div>
      </div>
    `;

    const actionsDiv = productCard.querySelector(".product-actions");
    actionsDiv.appendChild(createLikeButton(product));

    favoritesList.appendChild(productCard);
  });
}

// Sahifa turiga qarab sevimlilarni chizish
if (window.location.pathname.includes("favorites.html")) {
  renderFavorites();
}


