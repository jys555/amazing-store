document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      id: "1",
      name: "Raqsga tushadigan kaktus",
      price: "129,000 so'm",
      image: "images/kaktus.jpg"
    },
    {
      id: "2",
      name: "Yumshoq to‘p",
      price: "59,000 so'm",
      image: "images/ball.jpg"
    },
    {
      id: "3",
      name: "Pultli Jeep",
      price: "199,000 so'm",
      image: "images/jeep.jpg"
    }
  ];
function openProductModal(product) {
  document.getElementById("modalImage").src = product.image;
  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalDescription").innerText = product.description;
  document.querySelector(".price-current").innerText = product.currentPrice + " so‘m";
  document.querySelector(".price-old").innerText = product.oldPrice + " so‘m";
  document.querySelector(".discount-percent").innerText = "-" + product.discount + "%";
  document.getElementById("productModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

// Modalni yopish uchun tashqi joyga bosganda yopish (optional)
window.onclick = function(event) {
  let modal = document.getElementById("productModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

  const container = document.getElementById("product-list");

  if (container) {
    products.forEach(product => {
      const liked = localStorage.getItem(`liked_${product.id}`) === "true";
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <button class="like-btn" data-id="${product.id}">
          ${liked ? "❤️" : "🤍"}
        </button>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
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

  // Sevimlilar sahifasida mahsulotlarni ko‘rsatish
  if (window.location.pathname.includes("favorites.html")) {
    const favoritesList = document.getElementById("product-list");
    const favorites = [];

    products.forEach(product => {
      const liked = localStorage.getItem(`liked_${product.id}`) === "true";
      if (liked) {
        favorites.push(product);
      }
    });

    favorites.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <button class="like-btn" data-id="${product.id}">
          ❤️
        </button>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
        </div>
      `;
      favoritesList.appendChild(card);
    });
  }
});
// Faqat like bosilgan mahsulotlarni chiqarish
function renderFavorites() {
  const favoriteItems = products.filter(product => product.liked === true);
  renderProducts(favoriteItems, "favorites-container");
}



