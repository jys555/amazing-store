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

