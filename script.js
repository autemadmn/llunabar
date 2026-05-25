const PRODUCT_IMAGE = "assets/mockup.webp";

const ALLERGENS = {
  gluten: "Gluten",
  huevo: "Huevo",
  lacteos: "Lácteos",
  pescado: "Pescado",
  crustaceos: "Crustáceos",
  moluscos: "Moluscos",
  soja: "Soja",
  frutosSecos: "Frutos secos",
  mostaza: "Mostaza",
  apio: "Apio",
  sulfitos: "Sulfitos",
};

const menuSections = [
  {
    id: "tapas",
    title: "Tapas",
    tabLabel: "Tapas",
    description: "Clásicos de bar para compartir o acompañar.",
  },
  {
    id: "platos-combinados",
    title: "Platos combinados",
    tabLabel: "Platos combinados",
    description: "Platos completos con acompañamiento.",
    notices: [
      "El huevo y las patatas fritas se pueden cambiar por ensalada.",
      "Las modificaciones de los ingredientes generarán un coste adicional.",
    ],
  },
  {
    id: "platos-chinos",
    title: "Platos chinos",
    tabLabel: "Platos chinos",
    description: "Platos clásicos de cocina china sencilla.",
    notices: ["Ingredientes extra: gambas, pollo y ternera. Consultar precio."],
  },
  {
    id: "tapas-especiales-chinas",
    title: "Tapas chinas",
    tabLabel: "Tapas chinas",
    description: "Raciones de 4 unidades.",
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    tabLabel: "Ensaladas",
    description: "Opciones frescas y ligeras.",
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    tabLabel: "Hamburguesas",
    description: "Hamburguesas sencillas de bar.",
  },
  {
    id: "sandwiches",
    title: "Sándwiches",
    tabLabel: "Sándwiches",
    description: "Sándwiches clásicos.",
    notices: ["Completa tu bocata con patatas por 2,50 €."],
  },
];

const makeAllergens = (contains = [], traces = []) => ({ contains, traces });
const commonTraces = [ALLERGENS.apio, ALLERGENS.sulfitos];
const sauceTraces = [ALLERGENS.mostaza, ALLERGENS.apio, ALLERGENS.sulfitos];
const chineseTraces = [ALLERGENS.soja, ALLERGENS.gluten, ALLERGENS.apio, ALLERGENS.sulfitos];

function product(id, name, price, section, options = {}) {
  return {
    id,
    name,
    description: options.description || "",
    price,
    section,
    image: PRODUCT_IMAGE,
    allergens: options.allergens || makeAllergens(),
    badge: options.badge,
  };
}

const products = [
  product("tapas-pincho-tortilla", "Pincho de tortilla de patatas", "3,20 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.lacteos]),
  }),
  product("tapas-patatas-bravas", "Patatas bravas", "5,50 €", "tapas", {
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ...sauceTraces]),
    badge: "Clásico",
  }),
  product("tapas-morro", "Morro", "7,00 €", "tapas", {
    allergens: makeAllergens([], commonTraces),
  }),
  product("tapas-champinones", "Champiñones a la plancha", "6,00 €", "tapas", {
    allergens: makeAllergens([], [ALLERGENS.sulfitos]),
  }),
  product("tapas-puntilla", "Puntilla rebozada", "8,50 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
  }),
  product("tapas-calamares-romana", "Calamares a la romana", "8,80 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
    badge: "Popular",
  }),
  product("tapas-patatas-fritas", "Patatas fritas", "5,50 €", "tapas", {
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.mostaza]),
  }),
  product("tapas-pescaditos", "Pescaditos rebozados", "6,50 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.pescado], [ALLERGENS.moluscos]),
  }),
  product("tapas-muslitos-mar", "Muslitos del mar", "6,50 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.pescado], [ALLERGENS.crustaceos, ALLERGENS.huevo]),
  }),
  product("tapas-croquetas", "Croquetas", "6,50 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], commonTraces),
  }),
  product("tapas-huevo-roto", "Huevo roto con jamón", "7,50 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  }),
  product("tapas-alitas", "Alitas de pollo", "7,00 €", "tapas", {
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.soja, ...sauceTraces]),
  }),
  product("tapas-lagrimas", "Lágrimas de pollo", "7,20 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  }),
  product("tapas-bacon-chips", "Bacon chips", "7,50 €", "tapas", {
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.lacteos, ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  }),
  product("tapas-oreja", "Oreja a la plancha", "8,00 €", "tapas", {
    allergens: makeAllergens([], commonTraces),
  }),
  product("tapas-rabo", "Rabo de cerdo", "8,50 €", "tapas", {
    allergens: makeAllergens([], commonTraces),
  }),
  product("tapas-sepia", "Sepia a la plancha", "13,50 €", "tapas", {
    description: "Precio según temporada.",
    allergens: makeAllergens([ALLERGENS.moluscos], [ALLERGENS.pescado, ALLERGENS.crustaceos]),
  }),
  product("tapas-langostino", "Langostino a la plancha", "13,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.crustaceos], [ALLERGENS.moluscos]),
  }),
  product("tapas-fingers-queso", "Fingers de queso frito", "7,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  }),
  product("tapas-nugget", "Nugget", "6,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.soja]),
  }),
  product("tapas-pan-tomate-allioli", "Pan con tomate y allioli", "3,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  }),
  product("tapas-tempura-langostinos", "Tempura de langostinos", "13,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.crustaceos], [ALLERGENS.soja]),
  }),
  product("tapas-chispapas", "Chispapas", "7,50 €", "tapas", {
    description: "Chistorra y patatas fritas.",
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.sulfitos]),
  }),
  product("tapas-tequenos", "Tequeños", "8,00 €", "tapas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], []),
  }),
  product("combinados-nugget-patatas", "Nugget con patatas", "7,00 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.soja]),
  }),
  product("combinados-lomo-huevo", "Lomo con huevo y patatas fritas", "7,80 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  }),
  product("combinados-pechuga-huevo", "Pechuga con huevo y patatas fritas", "9,00 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  }),
  product("combinados-ternera-huevo", "Ternera con huevo y patatas fritas", "12,00 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  }),
  product("combinados-pollo-empanado", "Pollo empanado, huevo y patatas fritas", "10,50 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  }),
  product("combinados-calamares-huevo", "Calamares con huevo y patatas fritas", "12,00 €", "platos-combinados", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
  }),
  product("chinos-arroz-tres-delicias", "Arroz tres delicias", "6,00 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.soja, ALLERGENS.gluten, ALLERGENS.crustaceos]),
    badge: "Clásico",
  }),
  product("chinos-arroz-ternera", "Arroz con ternera", "7,80 €", "platos-chinos", {
    allergens: makeAllergens([], chineseTraces),
  }),
  product("chinos-arroz-pollo", "Arroz con pollo", "7,00 €", "platos-chinos", {
    allergens: makeAllergens([], chineseTraces),
  }),
  product("chinos-arroz-gambas", "Arroz con gambas", "7,80 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.crustaceos], [ALLERGENS.soja, ALLERGENS.gluten]),
  }),
  product("chinos-fideos", "Fideos chinos", "6,00 €", "platos-chinos", {
    description: "Fast noodles.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo]),
  }),
  product("chinos-pollo-limon", "Pollo al limón", "7,50 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.sulfitos]),
    badge: "Recomendado",
  }),
  product("chinos-pollo-verduras", "Pollo con verduras", "7,50 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.apio]),
  }),
  product("chinos-ternera-verduras", "Ternera con verduras", "8,50 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.apio]),
  }),
  product("chinos-gyozas", "Gyozas caseras a la plancha", "7,50 €", "platos-chinos", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo, ALLERGENS.sulfitos]),
    badge: "Especialidad china",
  }),
  product("tapas-chinas-rollitos", "Rollitos de primavera", "3,00 €", "tapas-especiales-chinas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo]),
  }),
  product("tapas-chinas-curry", "Triángulos de curry", "3,00 €", "tapas-especiales-chinas", {
    allergens: makeAllergens([ALLERGENS.gluten], [ALLERGENS.soja, ALLERGENS.lacteos]),
  }),
  product("tapas-chinas-shao-mai", "Shao mai", "3,00 €", "tapas-especiales-chinas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.crustaceos, ALLERGENS.huevo]),
  }),
  product("tapas-chinas-guo-tie", "Guo-Tie", "3,00 €", "tapas-especiales-chinas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo, ALLERGENS.sulfitos]),
  }),
  product("tapas-chinas-familia-feliz", "Familia feliz", "6,00 €", "tapas-especiales-chinas", {
    description: "Combinados.",
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.crustaceos, ALLERGENS.moluscos]),
  }),
  product("ensaladas-mediterranea", "Ensalada mediterránea", "6,50 €", "ensaladas", {
    allergens: makeAllergens([], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  }),
  product("ensaladas-cesar", "Ensalada césar", "8,00 €", "ensaladas", {
    allergens: makeAllergens([ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.gluten, ALLERGENS.pescado, ALLERGENS.mostaza]),
  }),
  product("ensaladas-queso-cabra", "Ensalada de queso de cabra con pasas y nueces", "8,00 €", "ensaladas", {
    allergens: makeAllergens([ALLERGENS.lacteos, ALLERGENS.frutosSecos, ALLERGENS.sulfitos], [ALLERGENS.mostaza]),
    badge: "Recomendado",
  }),
  product("ensaladas-pollo-crujiente", "Ensalada de pollo crujiente", "8,00 €", "ensaladas", {
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  }),
  product("hamburguesas-normal", "Normal", "5,00 €", "hamburguesas", {
    description: "Carne, queso y mahonesa.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  }),
  product("hamburguesas-completa", "Completa", "6,80 €", "hamburguesas", {
    description: "Carne, queso, lechuga, tomate, bacon, huevo y mahonesa.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
    badge: "Popular",
  }),
  product("hamburguesas-pollo-empanado", "Pollo empanado", "7,00 €", "hamburguesas", {
    description: "Pechuga empanada, lechuga, tomate, queso y mahonesa.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  }),
  product("sandwiches-mixto", "Mixto", "3,20 €", "sandwiches", {
    description: "York y queso.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.lacteos], [ALLERGENS.huevo]),
  }),
  product("sandwiches-vegetal", "Vegetal", "5,80 €", "sandwiches", {
    description: "Atún, huevo, lechuga, tomate y mahonesa.",
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.pescado], [ALLERGENS.mostaza]),
  }),
];

const featuredItems = [
  {
    title: "Tapas",
    description: "Clásicos de bar con formato visual.",
    image: PRODUCT_IMAGE,
  },
  {
    title: "Platos combinados",
    description: "Platos completos para comer bien.",
    image: PRODUCT_IMAGE,
  },
  {
    title: "Platos chinos",
    description: "Cocina china sencilla y cercana.",
    image: PRODUCT_IMAGE,
  },
  {
    title: "Hamburguesas",
    description: "Opciones informales de bar.",
    image: PRODUCT_IMAGE,
  },
];

const landingScreen = document.querySelector("#landingScreen");
const menuScreen = document.querySelector("#menuScreen");
const openMenuButton = document.querySelector("#openMenuButton");
const homeButton = document.querySelector("#homeButton");
const featuredSlider = document.querySelector("#featuredSlider");
const bottomTabs = document.querySelector("#bottomTabs");
const sectionSummary = document.querySelector("#sectionSummary");
const productGrid = document.querySelector("#productGrid");
const sectionNotice = document.querySelector("#sectionNotice");
const productModal = document.querySelector("#productModal");
const modalContent = document.querySelector("#modalContent");

let currentSection = menuSections[0].id;
let featuredIndex = 0;
let featuredTimer = null;
let lastFocusedElement = null;

function hasAllergens(item) {
  return item.allergens.contains.length > 0 || item.allergens.traces.length > 0;
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function getSection(sectionId) {
  return menuSections.find((section) => section.id === sectionId) || menuSections[0];
}

function getSectionProducts(sectionId) {
  return products.filter((item) => item.section === sectionId);
}

function setView(view) {
  const showMenu = view === "menu";
  landingScreen.classList.toggle("is-active", !showMenu);
  menuScreen.classList.toggle("is-active", showMenu);
  landingScreen.setAttribute("aria-hidden", String(showMenu));
  menuScreen.setAttribute("aria-hidden", String(!showMenu));
  landingScreen.inert = showMenu;
  menuScreen.inert = !showMenu;
}

function renderFeaturedSlider() {
  featuredSlider.replaceChildren();

  featuredItems.forEach((item, index) => {
    const card = createElement("article", "featured-card");
    if (index === featuredIndex) card.classList.add("is-active");

    const imageWrap = createElement("div", "featured-card__image");
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    imageWrap.append(image);

    const copy = createElement("div", "featured-card__copy");
    copy.append(createElement("span", "featured-card__label", "Destacado"));
    copy.append(createElement("h2", "", item.title));
    copy.append(createElement("p", "", item.description));

    card.append(imageWrap, copy);
    featuredSlider.append(card);
  });

  startFeaturedRotation();
}

function startFeaturedRotation() {
  window.clearInterval(featuredTimer);
  featuredTimer = window.setInterval(() => {
    featuredIndex = (featuredIndex + 1) % featuredItems.length;
    document.querySelectorAll(".featured-card").forEach((card, index) => {
      card.classList.toggle("is-active", index === featuredIndex);
    });
  }, 3600);
}

function renderTabs() {
  bottomTabs.replaceChildren();

  menuSections.forEach((section) => {
    const button = createElement("button", "tab-button", section.tabLabel || section.title);
    button.type = "button";
    button.dataset.section = section.id;
    button.setAttribute("aria-label", `Ver ${section.tabLabel || section.title}`);
    button.classList.toggle("is-active", section.id === currentSection);

    button.addEventListener("click", () => {
      if (currentSection === section.id) return;
      currentSection = section.id;
      renderTabs();
      renderCurrentSection();
    });

    bottomTabs.append(button);
  });
}

function renderNotice(messages) {
  if (!messages?.length) return null;

  const notice = createElement("div", "section-notice");
  messages.forEach((message) => notice.append(createElement("p", "", message)));
  return notice;
}

function renderBadge(text) {
  if (!text) return null;

  const badge = createElement("span", "badge", text);
  if (text === "Especialidad china") badge.classList.add("badge--asian");
  return badge;
}

function renderProductCard(item) {
  const card = createElement("article", "product-card");
  card.tabIndex = 0;
  card.setAttribute("role", "group");
  card.setAttribute("aria-label", `Ver ${item.name}`);

  const imageWrap = createElement("div", "product-card__image");
  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  image.loading = "lazy";
  image.decoding = "async";
  imageWrap.append(image);

  const body = createElement("div", "product-card__body");
  const top = createElement("div", "product-card__top");
  top.append(createElement("h4", "product-card__title", item.name));
  top.append(createElement("span", "price", item.price));
  body.append(top);

  if (item.description) {
    body.append(createElement("p", "product-card__description", item.description));
  }

  const footer = createElement("div", "product-card__footer");
  const badge = renderBadge(item.badge);
  if (badge) footer.append(badge);

  if (hasAllergens(item)) {
    const allergenButton = createElement("button", "allergen-button", "Ver alérgenos");
    allergenButton.type = "button";
    allergenButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openAllergenModal(item);
    });
    footer.append(allergenButton);
  }

  if (footer.children.length) body.append(footer);
  card.append(imageWrap, body);

  card.addEventListener("click", () => openProductModal(item));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProductModal(item);
    }
  });

  return card;
}

function renderCurrentSection(animate = true) {
  const section = getSection(currentSection);
  const sectionProducts = getSectionProducts(section.id);

  const update = () => {
    sectionSummary.replaceChildren();
    sectionSummary.append(createElement("p", "section-summary__eyebrow", "Carta"));
    sectionSummary.append(createElement("h3", "", section.title));
    sectionSummary.append(createElement("p", "", section.description));

    productGrid.replaceChildren();
    sectionProducts.forEach((item) => productGrid.append(renderProductCard(item)));

    sectionNotice.replaceChildren();
    const notice = renderNotice(section.notices);
    if (notice) sectionNotice.append(notice);

    productGrid.classList.remove("is-changing");
  };

  if (!animate) {
    update();
    return;
  }

  productGrid.classList.add("is-changing");
  window.setTimeout(update, 150);
}

function renderAllergenList(items, listClass = "") {
  const list = createElement("ul", `allergen-pills ${listClass}`.trim());
  const values = items.length ? items : ["No indicado"];
  values.forEach((item) => list.append(createElement("li", "", item)));
  return list;
}

function renderAllergenBlocks(item) {
  const wrapper = createElement("div", "allergen-blocks");

  const contains = createElement("section", "allergen-block");
  contains.append(createElement("h3", "", "Contiene"));
  contains.append(renderAllergenList(item.allergens.contains));

  const traces = createElement("section", "allergen-block");
  traces.append(createElement("h3", "", "Puede contener trazas"));
  traces.append(renderAllergenList(item.allergens.traces, "allergen-pills--traces"));

  wrapper.append(contains, traces);
  return wrapper;
}

function openProductModal(item) {
  lastFocusedElement = document.activeElement;
  modalContent.replaceChildren();

  const imageWrap = createElement("div", "modal-product-image");
  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  imageWrap.append(image);
  modalContent.append(imageWrap);

  const header = createElement("div", "modal-header");
  const badge = renderBadge(item.badge);
  if (badge) header.append(badge);
  header.append(createElement("h2", "", item.name));
  header.querySelector("h2").id = "modalTitle";

  if (item.description) {
    header.append(createElement("p", "modal-description", item.description));
  }

  header.append(createElement("span", "modal-price", item.price));
  header.append(createElement("p", "modal-hint", "Producto de la carta Luna Bar."));

  modalContent.append(header);
  openModal();
}

function openAllergenModal(item) {
  lastFocusedElement = document.activeElement;
  modalContent.replaceChildren();

  const header = createElement("div", "modal-header");
  const badge = renderBadge(item.badge);
  if (badge) header.append(badge);
  header.append(createElement("h2", "", item.name));
  header.querySelector("h2").id = "modalTitle";
  header.append(createElement("p", "modal-description", "Información orientativa de alérgenos."));

  modalContent.append(header);
  modalContent.append(renderAllergenBlocks(item));
  modalContent.append(
    createElement("p", "modal-note", "Información orientativa. Confirmar siempre con el establecimiento."),
  );

  openModal();
}

function openModal() {
  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("body-locked");
  productModal.querySelector("[data-close-modal]").focus();
}

function closeProductModal() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("body-locked");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function bindGlobalEvents() {
  openMenuButton.addEventListener("click", () => setView("menu"));
  homeButton.addEventListener("click", () => setView("landing"));

  productModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeProductModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productModal.classList.contains("is-open")) {
      closeProductModal();
    }
  });
}

renderFeaturedSlider();
renderTabs();
renderCurrentSection(false);
bindGlobalEvents();
