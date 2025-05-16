document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const products = {
    Toys: [
      {
        name: "Raqsga tushadigan kaktus",
        description: "Musiqa ostida raqsga tushadigan interaktiv o'yinchoq.",
        price: "89 000 so'm",
        image: "https://github.com/jys555/amazing-store/raw/main/assets/kaktus.jpg",
        link: "https://example.com/kaktus", // Yandex Market yoki Uzum havolasi
      },
    ],
    // Yangi kategoriyalarni bu yerga qo‘shamiz (Texnika va h.k.)
  };

  const container = document.getElementById("product-container");
  const title = document.getElementById("category-title");

  if (!category || !products[category]) {
    title.innerText = "Kategoriya topilmadi";
    return;
  }

  title.innerText = category;

  products[category].forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-img" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price}</strong></p>
      <a href="${product.link}" class="buy-button" target="_blank">Sotib olish</a>
      <div class="reaction-buttons">
        <button>👍</button>
        <button>👎</button>
      </div>
    `;
    container.appendChild(card);
  });
});
