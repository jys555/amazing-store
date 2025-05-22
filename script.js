Telegram.WebApp.ready();
Telegram.WebApp.expand();

const productsData = {
  "oyinchoqlar": [
    {
      name: "Raqsga tushadigan kaktus",
      image: "https://i.ibb.co/YkYw7dx/kaktus.jpg",
      description: "Raqsga tushadigan, musiqa chaladigan va gapiradigan kaktus o'yinchog'i.",
      price: "99 000 so'm",
      link: "https://market.yandex.ru/product--raqsga-tushadigan-kaktus/123456"
    }
  ],
  "texnika": [
    {
      name: "Mini Blender",
      image: "https://i.ibb.co/sCRrDzF/mini-blender.jpg",
      description: "Portativ blender. Kokteyl va pyure tayyorlash uchun qulay.",
      price: "159 000 so'm",
      link: "https://market.yandex.ru/product--mini-blender/654321"
    }
  ]
};

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("category");
}

function renderProducts(category) {
  const titleElement = document.getElementById("category-title");
  const productsElement = document.getElementById("products");

  const products = productsData[category];
  if (!products) {
    titleElement.textContent = "Kategoriya topilmadi";
    return;
  }

  titleElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  products.forEach(product => {
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
          <div class="reactions">
            <span>❤️ 0</span>
            <span>👎 0</span>
          </div>
        </div>
      </div>
    `;

    productsElement.appendChild(productCard);
  });
}

// Tema (yorug‘ / qorong‘i) holatini aniqlash
const theme = Telegram.WebApp.colorScheme;
if (theme === "dark") {
  document.body.classList.add("dark");
}

const category = getCategoryFromURL();
renderProducts(category);
