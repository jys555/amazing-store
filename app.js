// Demo mahsulotlar (har birida bir nechta rasm)
const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro",
    price: 9000000,
    old_price: 11000000,
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    favorite: false,
    category: 1,
    desc: "So‘nggi model, zamonaviy dizayn va yuqori tezlik. 120Hz ekran."
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 8500000,
    old_price: 9500000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    favorite: false,
    category: 1,
    desc: "Yangi Snapdragon, super kamera va uzoq batareya."
  },
  {
    id: 3,
    name: "Xiaomi Mi Band 8",
    price: 400000,
    old_price: 550000,
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    ],
    favorite: false,
    category: 2,
    desc: "Aqlli soat, 2 haftagacha batareya, IP68."
  },
  {
    id: 4,
    name: "HP Laptop 15",
    price: 7200000,
    old_price: 8000000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    favorite: false,
    category: 3,
    desc: "8GB RAM, SSD, 15.6 inch FullHD ekran."
  }
];

// ... (categories va favs o'zgarmaydi)

function renderProductsGrid(list) {
  const grid = document.getElementById("product-grid");
  if (!list.length) {
    grid.innerHTML = "<p>Mahsulotlar topilmadi.</p>";
    return;
  }
  grid.innerHTML = "";
  list.forEach(product => {
    const discount = calcDiscount(product);
    grid.innerHTML += `
      <div class="product-card" onclick="showProductDetail(${product.id})">
        <div class="product-img-wrap">
          <img src="${product.images[0]}" alt="${product.name}">
          <button class="badge-like" onclick="event.stopPropagation();toggleFav(${product.id})">
            ${favs.includes(product.id) ? "❤️" : "🤍"}
          </button>
          ${discount ? `<div class="badge-discount">-${discount}%</div>` : ""}
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-price">${product.price.toLocaleString('uz-UZ')} so'm</div>
        </div>
      </div>
    `;
  });
}

// ...

// Mahsulot batafsil modal: rasm galereyasi
window.showProductDetail = function(pid) {
  const p = products.find(x => x.id === pid);
  if (!p) return;
  const discount = calcDiscount(p);
  let current = 0;
  const modal = document.createElement("div");
  modal.style = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:999;background:#fff;overflow:auto;display:block;padding-bottom:20px;`;
  modal.className = "prod-modal";

  // Rasm carousel HTML
  function getGallery() {
    return `
      <div class="gallery-wrap">
        <button class="gallery-arrow left" ${current === 0 ? "disabled" : ""}>&lt;</button>
        <img src="${p.images[current]}" class="gallery-img">
        <button class="gallery-arrow right" ${current === p.images.length-1 ? "disabled" : ""}>&gt;</button>
      </div>
      <div class="gallery-dots">
        ${p.images.map((_,i) => `<span class="gallery-dot${i===current?" active":""}"></span>`).join("")}
      </div>
    `;
  }

  function updateGallery() {
    modal.querySelector('.gallery-wrap').outerHTML = getGallery();
    modal.querySelectorAll('.gallery-arrow').forEach((btn, idx) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        if (idx === 0 && current > 0) current--;
        if (idx === 1 && current < p.images.length-1) current++;
        updateGallery();
      };
    });
    modal.querySelectorAll('.gallery-dot').forEach((dot, idx) => {
      dot.onclick = (e) => {
        e.stopPropagation();
        current = idx;
        updateGallery();
      };
    });
  }

  modal.innerHTML = `
    <div style="background:#fff;width:100vw;min-height:100vh;max-width:480px;margin:0 auto;display:flex;flex-direction:column;">
      <div style="position:relative;">
        ${getGallery()}
        <button class="badge-like" style="top:16px;right:16px;position:absolute;font-size:1.45em;background:none;" onclick="event.stopPropagation();window.toggleFav(${p.id});document.body.removeChild(this.closest('.prod-modal'));">
          ${favs.includes(p.id) ? "❤️" : "🤍"}
        </button>
        ${discount ? `<div class="badge-discount" style="bottom:16px;left:16px;position:absolute;">-${discount}%</div>` : ""}
      </div>
      <div style="padding:17px 16px 16px 16px;">
        <div style="font-size:1.18em;font-weight:600;margin-bottom:9px;">${p.name}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:13px;">
          <span style="color:#ff3256;font-size:1.15em;font-weight:bold;">${p.price.toLocaleString('uz-UZ')} so'm</span>
          ${p.old_price ? `<span style="color:#888;text-decoration:line-through;font-size:1em;">${p.old_price.toLocaleString('uz-UZ')} so'm</span>` : ""}
        </div>
        <div style="color:#444;font-size:1em;line-height:1.6;">${p.desc}</div>
      </div>
      <div style="width:100%;display:flex;justify-content:center;margin-top:10px;">
        <button onclick="document.body.removeChild(this.closest('.prod-modal'))" style="padding:8px 36px;font-size:1em;border-radius:12px;background:#2196f3;color:#fff;border:none;cursor:pointer;">Yopish</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  updateGallery();
};

renderHome();
