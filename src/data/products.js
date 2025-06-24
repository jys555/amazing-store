const products = [
  {
    id: 1,
    title: { uz: "Bluetooth quloqchin", ru: "Bluetooth наушники" },
    desc: {
      uz: "Mikrofoni bilan simsiz bluetooth quloqchin. Uzoq vaqt ishlaydi.",
      ru: "Беспроводные наушники с микрофоном. Долгая работа."
    },
    price: 99000,
    oldPrice: 129000,
    imgs: ["/assets/demo1.jpg", "/assets/demo1b.jpg"],
    category: 1,
    uzumLink: "https://uzum.uz/product/1",
    yandexLink: "https://market.yandex.ru/product/1"
  },
  {
    id: 2,
    title: { uz: "Mini kolonkalar", ru: "Мини колонки" },
    desc: {
      uz: "Kichik va kuchli bluetooth kolonkalar, har qanday joyda ishlatish uchun.",
      ru: "Маленькие мощные bluetooth колонки для любого случая."
    },
    price: 65550,
    oldPrice: 85000,
    imgs: ["/assets/demo2.jpg"],
    category: 2,
    uzumLink: "https://uzum.uz/product/2",
    yandexLink: "https://market.yandex.ru/product/2"
  },
  {
    id: 3,
    title: { uz: "O'yinchoq mashina", ru: "Игрушечная машина" },
    desc: {
      uz: "Masofadan boshqariladigan zaryadlanadigan o'yinchoq mashina.",
      ru: "Радиоуправляемая игрушечная машина с зарядкой."
    },
    price: 47992,
    oldPrice: 99000,
    imgs: ["/assets/demo3.jpg"],
    category: 3,
    uzumLink: "https://uzum.uz/product/3",
    yandexLink: "https://market.yandex.ru/product/3"
  },
  {
    id: 4,
    title: { uz: "Sport shaker", ru: "Спорт шейкер" },
    desc: {
      uz: "Proteinli ichimliklar uchun spiral shakli bilan sport shaker.",
      ru: "Шейкер для спортивного питания со спиралью."
    },
    price: 36000,
    oldPrice: 60000,
    imgs: ["/assets/demo4.jpg"],
    category: 4,
    uzumLink: "https://uzum.uz/product/4",
    yandexLink: "https://market.yandex.ru/product/4"
  }
];

export default products;
