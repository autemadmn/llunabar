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
    description: "Clásicos de bar para compartir o acompañar.",
  },
  {
    id: "platos-combinados",
    title: "Platos combinados",
    description: "Platos completos con acompañamiento.",
    notices: [
      "El huevo y las patatas fritas se pueden cambiar por ensalada.",
      "Las modificaciones de los ingredientes generarán un coste adicional.",
    ],
  },
  {
    id: "platos-chinos",
    title: "Platos chinos",
    description: "Platos clásicos de cocina china sencilla.",
    introNotices: ["Ingredientes extra: gambas, pollo y ternera. Consultar precio."],
  },
  {
    id: "tapas-especiales-chinas",
    title: "Tapas especiales chinas",
    description: "Raciones de 4 unidades.",
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    description: "Opciones frescas y ligeras.",
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    description: "Hamburguesas sencillas de bar.",
  },
  {
    id: "sandwiches",
    title: "Sándwiches",
    description: "Sándwiches clásicos.",
    notices: ["Completa tu bocata con patatas por 2,50 €."],
  },
];

const makeAllergens = (contains = [], traces = []) => ({ contains, traces });

const commonTraces = [ALLERGENS.apio, ALLERGENS.sulfitos];
const sauceTraces = [ALLERGENS.mostaza, ALLERGENS.apio, ALLERGENS.sulfitos];
const chineseTraces = [ALLERGENS.soja, ALLERGENS.gluten, ALLERGENS.apio, ALLERGENS.sulfitos];

const products = [
  {
    name: "Pincho de tortilla de patatas",
    description: "",
    price: "3,20 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.lacteos]),
  },
  {
    name: "Patatas bravas",
    description: "",
    price: "5,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ...sauceTraces]),
    badge: "Clásico",
  },
  {
    name: "Morro",
    description: "",
    price: "7,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], commonTraces),
  },
  {
    name: "Champiñones a la plancha",
    description: "",
    price: "6,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.sulfitos]),
  },
  {
    name: "Puntilla rebozada",
    description: "",
    price: "8,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
  },
  {
    name: "Calamares a la romana",
    description: "",
    price: "8,80 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
    badge: "Popular",
  },
  {
    name: "Patatas fritas",
    description: "",
    price: "5,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.mostaza]),
  },
  {
    name: "Pescaditos rebozados",
    description: "",
    price: "6,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.pescado], [ALLERGENS.moluscos]),
  },
  {
    name: "Muslitos del mar",
    description: "",
    price: "6,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.pescado], [ALLERGENS.crustaceos, ALLERGENS.huevo]),
  },
  {
    name: "Croquetas",
    description: "",
    price: "6,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], commonTraces),
  },
  {
    name: "Huevo roto con jamón",
    description: "",
    price: "7,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  },
  {
    name: "Alitas de pollo",
    description: "",
    price: "7,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.soja, ...sauceTraces]),
  },
  {
    name: "Lágrimas de pollo",
    description: "",
    price: "7,20 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  },
  {
    name: "Bacon chips",
    description: "",
    price: "7,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.lacteos, ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  },
  {
    name: "Oreja a la plancha",
    description: "",
    price: "8,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], commonTraces),
  },
  {
    name: "Rabo de cerdo",
    description: "",
    price: "8,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], commonTraces),
  },
  {
    name: "Sepia a la plancha",
    description: "Precio según temporada.",
    price: "13,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.moluscos], [ALLERGENS.pescado, ALLERGENS.crustaceos]),
  },
  {
    name: "Langostino a la plancha",
    description: "",
    price: "13,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.crustaceos], [ALLERGENS.moluscos]),
  },
  {
    name: "Fingers de queso frito",
    description: "",
    price: "7,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  },
  {
    name: "Nugget",
    description: "",
    price: "6,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.soja]),
  },
  {
    name: "Pan con tomate y allioli",
    description: "",
    price: "3,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  },
  {
    name: "Tempura de langostinos",
    description: "",
    price: "13,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.crustaceos], [ALLERGENS.soja]),
  },
  {
    name: "Chispapas",
    description: "Chistorra y patatas fritas.",
    price: "7,50 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.sulfitos]),
  },
  {
    name: "Tequeños",
    description: "",
    price: "8,00 €",
    section: "tapas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], []),
  },
  {
    name: "Nugget con patatas",
    description: "",
    price: "7,00 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.soja]),
  },
  {
    name: "Lomo con huevo y patatas fritas",
    description: "",
    price: "7,80 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  },
  {
    name: "Pechuga con huevo y patatas fritas",
    description: "",
    price: "9,00 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  },
  {
    name: "Ternera con huevo y patatas fritas",
    description: "",
    price: "12,00 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.gluten, ALLERGENS.sulfitos]),
  },
  {
    name: "Pollo empanado, huevo y patatas fritas",
    description: "",
    price: "10,50 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  },
  {
    name: "Calamares con huevo y patatas fritas",
    description: "",
    price: "12,00 €",
    section: "platos-combinados",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.moluscos], [ALLERGENS.pescado]),
  },
  {
    name: "Arroz tres delicias",
    description: "",
    price: "6,00 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo], [ALLERGENS.soja, ALLERGENS.gluten, ALLERGENS.crustaceos]),
    badge: "Clásico",
  },
  {
    name: "Arroz con ternera",
    description: "",
    price: "7,80 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], chineseTraces),
  },
  {
    name: "Arroz con pollo",
    description: "",
    price: "7,00 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], chineseTraces),
  },
  {
    name: "Arroz con gambas",
    description: "",
    price: "7,80 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.crustaceos], [ALLERGENS.soja, ALLERGENS.gluten]),
  },
  {
    name: "Fideos chinos",
    description: "Fast noodles.",
    price: "6,00 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo]),
  },
  {
    name: "Pollo al limón",
    description: "",
    price: "7,50 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.sulfitos]),
    badge: "Recomendado",
  },
  {
    name: "Pollo con verduras",
    description: "",
    price: "7,50 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.apio]),
  },
  {
    name: "Ternera con verduras",
    description: "",
    price: "8,50 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.apio]),
  },
  {
    name: "Gyozas caseras a la plancha",
    description: "",
    price: "7,50 €",
    section: "platos-chinos",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo, ALLERGENS.sulfitos]),
    badge: "Especialidad china",
  },
  {
    name: "Rollitos de primavera",
    description: "",
    price: "3,00 €",
    section: "tapas-especiales-chinas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo]),
  },
  {
    name: "Triángulos de curry",
    description: "",
    price: "3,00 €",
    section: "tapas-especiales-chinas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten], [ALLERGENS.soja, ALLERGENS.lacteos]),
  },
  {
    name: "Shao mai",
    description: "",
    price: "3,00 €",
    section: "tapas-especiales-chinas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.crustaceos, ALLERGENS.huevo]),
  },
  {
    name: "Guo-Tie",
    description: "",
    price: "3,00 €",
    section: "tapas-especiales-chinas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.soja], [ALLERGENS.huevo, ALLERGENS.sulfitos]),
  },
  {
    name: "Familia feliz",
    description: "Combinados.",
    price: "6,00 €",
    section: "tapas-especiales-chinas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.soja], [ALLERGENS.gluten, ALLERGENS.crustaceos, ALLERGENS.moluscos]),
  },
  {
    name: "Ensalada mediterránea",
    description: "",
    price: "6,50 €",
    section: "ensaladas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
  },
  {
    name: "Ensalada césar",
    description: "",
    price: "8,00 €",
    section: "ensaladas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.gluten, ALLERGENS.pescado, ALLERGENS.mostaza]),
  },
  {
    name: "Ensalada de queso de cabra con pasas y nueces",
    description: "",
    price: "8,00 €",
    section: "ensaladas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.lacteos, ALLERGENS.frutosSecos, ALLERGENS.sulfitos], [ALLERGENS.mostaza]),
    badge: "Recomendado",
  },
  {
    name: "Ensalada de pollo crujiente",
    description: "",
    price: "8,00 €",
    section: "ensaladas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo], [ALLERGENS.lacteos, ALLERGENS.mostaza]),
  },
  {
    name: "Normal",
    description: "Carne, queso y mahonesa.",
    price: "5,00 €",
    section: "hamburguesas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  },
  {
    name: "Completa",
    description: "Carne, queso, lechuga, tomate, bacon, huevo y mahonesa.",
    price: "6,80 €",
    section: "hamburguesas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza, ALLERGENS.sulfitos]),
    badge: "Popular",
  },
  {
    name: "Pollo empanado",
    description: "Pechuga empanada, lechuga, tomate, queso y mahonesa.",
    price: "7,00 €",
    section: "hamburguesas",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.lacteos], [ALLERGENS.mostaza]),
  },
  {
    name: "Mixto",
    description: "York y queso.",
    price: "3,20 €",
    section: "sandwiches",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.lacteos], [ALLERGENS.huevo]),
  },
  {
    name: "Vegetal",
    description: "Atún, huevo, lechuga, tomate y mahonesa.",
    price: "5,80 €",
    section: "sandwiches",
    image: PRODUCT_IMAGE,
    allergens: makeAllergens([ALLERGENS.gluten, ALLERGENS.huevo, ALLERGENS.pescado], [ALLERGENS.mostaza]),
  },
];

const sectionNav = document.querySelector("#sectionNav");
const menuSectionsRoot = document.querySelector("#menuSections");
const productModal = document.querySelector("#productModal");
const modalContent = document.querySelector("#modalContent");
let lastFocusedElement = null;

function hasAllergens(product) {
  return product.allergens.contains.length > 0 || product.allergens.traces.length > 0;
}

function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderNavigation() {
  menuSections.forEach((section, index) => {
    const button = createElement("button", "section-chip", section.title);
    button.type = "button";
    button.dataset.target = section.id;
    button.setAttribute("aria-label", `Ir a ${section.title}`);
    if (index === 0) button.classList.add("is-active");

    button.addEventListener("click", () => {
      syncActiveNavigation(section.id, true);
      document.querySelector(`#${section.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    sectionNav.append(button);
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

function renderProductCard(product) {
  const card = createElement("article", "product-card");
  card.tabIndex = 0;
  card.setAttribute("role", "group");
  card.setAttribute("aria-label", `Ver ${product.name}`);

  const imageWrap = createElement("div", "product-card__image");
  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;
  image.loading = "lazy";
  image.decoding = "async";
  imageWrap.append(image);

  const body = createElement("div", "product-card__body");
  const top = createElement("div", "product-card__top");
  top.append(createElement("h4", "product-card__title", product.name));
  top.append(createElement("span", "price", product.price));
  body.append(top);

  if (product.description) {
    body.append(createElement("p", "product-card__description", product.description));
  }

  const actions = createElement("div", "product-card__actions");
  const badge = renderBadge(product.badge);
  if (badge) actions.append(badge);

  if (hasAllergens(product)) {
    const allergenButton = createElement("button", "allergen-button", "Ver alérgenos");
    allergenButton.type = "button";
    allergenButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openProductModal(product, "allergens");
    });
    actions.append(allergenButton);
  }

  if (actions.children.length) body.append(actions);

  card.append(imageWrap, body);

  card.addEventListener("click", () => openProductModal(product, "product"));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProductModal(product, "product");
    }
  });

  return card;
}

function renderSections() {
  menuSections.forEach((section) => {
    const sectionElement = createElement("section", "menu-section");
    sectionElement.id = section.id;
    sectionElement.dataset.section = section.id;

    const heading = createElement("div", "section-heading");
    heading.append(createElement("h3", "", section.title));
    heading.append(createElement("p", "", section.description));
    sectionElement.append(heading);

    const introNotice = renderNotice(section.introNotices);
    if (introNotice) sectionElement.append(introNotice);

    const list = createElement("div", "product-list");
    products
      .filter((product) => product.section === section.id)
      .forEach((product) => list.append(renderProductCard(product)));

    sectionElement.append(list);

    const notice = renderNotice(section.notices);
    if (notice) sectionElement.append(notice);

    menuSectionsRoot.append(sectionElement);
  });
}

function renderAllergenList(items, listClass = "") {
  const list = createElement("ul", `allergen-pills ${listClass}`.trim());
  const values = items.length ? items : ["No indicado"];
  values.forEach((item) => list.append(createElement("li", "", item)));
  return list;
}

function renderAllergenBlocks(product) {
  const wrapper = createElement("div", "allergen-blocks");

  const contains = createElement("section", "allergen-block");
  contains.append(createElement("h3", "", "Contiene"));
  contains.append(renderAllergenList(product.allergens.contains));

  const traces = createElement("section", "allergen-block");
  traces.append(createElement("h3", "", "Puede contener trazas"));
  traces.append(renderAllergenList(product.allergens.traces, "allergen-pills--traces"));

  wrapper.append(contains, traces);
  return wrapper;
}

function openProductModal(product, mode = "product") {
  lastFocusedElement = document.activeElement;
  modalContent.replaceChildren();

  if (mode === "product") {
    const imageWrap = createElement("div", "modal-product-image");
    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    imageWrap.append(image);
    modalContent.append(imageWrap);
  }

  const header = createElement("div", "modal-header");
  const badge = renderBadge(product.badge);
  if (badge) header.append(badge);
  header.append(createElement("h2", "", product.name));
  header.querySelector("h2").id = "modalTitle";

  if (mode === "product") {
    if (product.description) {
      header.append(createElement("p", "modal-description", product.description));
    }
    header.append(createElement("span", "modal-price", product.price));
  } else {
    header.append(createElement("p", "modal-description", "Información orientativa de alérgenos."));
  }

  modalContent.append(header);
  modalContent.append(renderAllergenBlocks(product));
  modalContent.append(
    createElement("p", "modal-note", "Información orientativa. Confirmar siempre con el establecimiento."),
  );

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

function syncActiveNavigation(sectionId, revealChip = false) {
  document.querySelectorAll(".section-chip").forEach((chip) => {
    const isActive = chip.dataset.target === sectionId;
    chip.classList.toggle("is-active", isActive);
    if (isActive && revealChip) chip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  });
}

function observeSections() {
  const sections = [...document.querySelectorAll(".menu-section")];
  let scrollTicking = false;

  const updateActiveSection = () => {
    const activationLine = 132;
    const activeSection =
      sections.reduce((current, section) => {
        return section.getBoundingClientRect().top <= activationLine ? section : current;
      }, sections[0]) || sections[0];

    syncActiveNavigation(activeSection.id);
    scrollTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(updateActiveSection);
    },
    { passive: true },
  );

  updateActiveSection();
}

function bindGlobalEvents() {
  document.querySelector("[data-scroll-menu]").addEventListener("click", () => {
    document.querySelector("#menu-start").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  productModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeProductModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && productModal.classList.contains("is-open")) {
      closeProductModal();
    }
  });
}

renderNavigation();
renderSections();
observeSections();
bindGlobalEvents();
