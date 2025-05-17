let tg = window.Telegram.WebApp;
tg.expand(); // ekranni to'liq holatga o‘tkazish

const productsData = {
  "o'yinchoqlar": [
    {
      name: "Raqsga tushadigan kaktus",
      image: "https://i.ibb.co/YkYw7dx/kaktus.jpg",
      description: "Raqsga tushadigan, musiqa chaladigan va gapiradigan kaktus o'yinchog'i. Bolalar uchun ajoyib sovg'a!",
      price: "99 000 so'm",
      link: "https://market.yandex.ru/product--raqsga-tushadigan-kaktus/123456"
    }
  ],
  "texnika": [
    {
      name: "Mini Blender",
      image: "https://i.ibb.co/sCRrDzF/mini-blender.jpg",
      description: "Kichik o'lchamdagi portativ blender. Kokteyl, smuzi va bolalar uchun pyure tayyorlash uchun juda qulay.",
      price: "159 000 so'm",
      link: "https://market.yandex.ru/product--mini-blender/654321"
    }
  ]
};

function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const startAppParam = params.get("startapp");

  if (startAppParam && startAppParam.startsWith("category=")) {
    return startAppParam.split("category=")[1];
  }

  return params.get("category"); // fallback, agar `startapp` bo'lmasa
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
            <span>❤️</span>
            <span>👎</span>
          </div>
        </div>
      </div>
    `;

    productsElement.appendChild(productCard);
  });
}

const category = getCategoryFromURL();
renderProducts(category);
