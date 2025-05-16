// script.js

// Kategoriyalarga mos mahsulotlar
const products = {
  Toys: [
    {
      name: "Raqsga tushadigan kaktus",
      image: "https://example.com/kaktus.jpg",
      price: "99 000 so'm",
      description: "Musiqa ostida raqsga tushadigan, quvnoq va interaktiv kaktus o'yinchog'i.",
      link: "https://market.yandex.com/product/kaktus"
    }
  ],
  Tech: [] // Yangi kategoriyalar shu yerga qo‘shiladi
};

// URL querydan category ni o‘qish
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const container = document.getElementById("product-list");
const categoryTitle = document.getElementById("category-title");

if (!category || !products[category]) {
  categoryTitle.innerText = "Kategoriya topilmadi";
} else {
  categoryTitle.innerText = category + " mahsulotlari";
  products[category].forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <a class="buy-btn" href="${product.link}" target="_blank">Marketda ko‘rish</a>
    `;
    container.appendChild(card);
  });
}

// Telegramga qaytish tugmasi (faqat WebApp orqali ochilganda ko‘rinadi)
const tgBackBtn = document.getElementById("back-to-channel");
if (window.Telegram && window.Telegram.WebApp) {
  tgBackBtn.style.display = "block";
} else {
  tgBackBtn.style.display = "none";
}
