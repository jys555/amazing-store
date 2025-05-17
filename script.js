// Telegram WebApp API chaqirilsin
Telegram.WebApp.expand();

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Har bir kategoriya uchun mahsulotlar ro‘yxati
const productsData = {
  'oyinchoqlar': [
    {
      name: 'Raqsga tushadigan kaktus',
      price: '139 000 so‘m',
      description: 'Musiqaga raqsga tushadigan interaktiv o‘yinchoq',
      image: 'https://example.com/kaktus.jpg',
      link: 'https://market.yandex.ru/product--kaktus-raqsga-tushadigan/123456'
    },
    // Shu yerga boshqa o‘yinchoqlarni qo‘shing
  ],
  'texnika': [
    {
      name: 'Blender 3-in-1',
      price: '249 000 so‘m',
      description: 'Kuchli blender, maydalagich va sharbat chiqargich',
      image: 'https://example.com/blender.jpg',
      link: 'https://market.yandex.ru/product--blender/789012'
    },
    // boshqa texnika mahsulotlari
  ]
};

const products = productsData[category];
const container = document.getElementById('products');
const title = document.getElementById('category-title');

if (!products) {
  title.textContent = 'Kategoriya topilmadi';
  container.innerHTML = `<p style="text-align:center; margin: 30px;">Bu kategoriya uchun mahsulotlar topilmadi.</p>`;
} else {
  title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <div class="actions">
        <a href="${product.link}" target="_blank">🛒 Xarid qilish</a>
      </div>
    `;
    container.appendChild(card);
  });
}
