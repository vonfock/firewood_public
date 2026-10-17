
const CONFIG = {
  SITE_TITLE: {
    et: "Küttepuude müük Ida-Virumaal",
    en: "Firewood sales in Ida-Viru County",
    ru: "Продажа дров в Ида-Вирумаа",
  },

  BUSINESS_NAME: {                                                                    // [NAME]
    et: "Stellafort OÜ - küttepuude müük Ida-Virumaal",
    en: "Stellafort OÜ - firewood sales in Ida-Viru County",
    ru: "Stellafort OÜ - продажа дров в Ида-Вирумаа",
  },
  PHONE: "+372 52 77 523",                                                          // [PHONE]
  LOCATION_TEXT: { et: "Ida-Virumaa", en: "Ida-Viru County", ru: "Ида-Вирумаа" },  // [LOCATION]

  CURRENCY: "EUR",

  SPECIES: [
    { id: "must-lepp", name: { et: "Must lepp", en: "Black alder", ru: "Чёрная ольха" } },
  ],

  LENGTHS: [
    { cm: 37, price: 650 },
    { cm: 50, price: 700 },
  ],
  UNIT: { et: "10 m³", en: "10 m³", ru: "10 м³" },

  DELIVERY_AREAS: [
    { et: "Jõhvi",        en: "Jõhvi",        ru: "Йыхви" },
    { et: "Sillamäe",     en: "Sillamäe",     ru: "Силламяэ" },
    { et: "Vasknarva",    en: "Vasknarva",    ru: "Васкнарва" },
    { et: "Narva",        en: "Narva",        ru: "Нарва" },
    { et: "Narva-Jõesuu", en: "Narva-Jõesuu", ru: "Нарва-Йыэсуу" },
    { et: "Kohtla-Järve", en: "Kohtla-Järve", ru: "Кохтла-Ярве" },
    { et: "Kuremäe",      en: "Kuremäe",      ru: "Куремяэ" },
    { et: "Saka",         en: "Saka",         ru: "Сака" },
    { et: "Kohtla-Nõmme", en: "Kohtla-Nõmme", ru: "Кохтла-Нымме" },
    { et: "Voka",         en: "Voka",         ru: "Вока" },
    { et: "Toila",        en: "Toila",        ru: "Тойла" },
  ],

  MIN_DAYS_AHEAD: 7,     // varaseim tarnepäev: täna + 7 päeva
  MAX_MONTHS_AHEAD: 6,   // hiliseim tarnepäev: täna + 6 kuud


  HOLIDAYS_FIXED: ["01-01", "02-24", "05-01", "06-23", "06-24", "08-20", "12-24", "12-25", "12-26"],


  SHEETS_WEBHOOK_URL: "https://script.google.com/macros/s/AKfycbxHuK9wg73xSKWw-cmN-ufjkjZe3MhuYICGdqjjLaxdoBPAVhZXSQAWZoqA3FuLatRo/exec",


  MIN_FILL_SECONDS: 5,

  PHOTOS: [],

  DEFAULT_LANG: "et",
};


const TRANSLATIONS = {
  et: {
    langLabel: "EST",
    locale: "et-EE",
    callLabel: "Helista",

    pricesTitle: "Hinnad",
    pricesIntro: "Müüme küttepuid vaid 10 m³ kaupa. Transport on hinna sees.",
    priceRowTitle: "Küttepuud {cm} cm",
    priceAvailable: "Saadaval: {species}",
    perUnit: "/ {unit}",
    deliveryIncluded: "Transport on hinna sees.",
    deliveryAreas: "Tarnime Ida-Virumaal: {places} ja nende ümbrus.",
    payment: "Maksmine kaupa kätte saades või arvega enne kauba veo algust.",

    orderTitle: "Telli küttepuud",
    orderIntro: "Täida vorm ja vali sobiv tarnepäev. Võtame sinuga tellimuse kinnitamiseks ühendust.",
    labelSpecies: "Puuliik",
    labelLength: "Pikkus",
    lengthOption: "{cm} cm",
    totalLabel: "Kokku:",
    labelDate: "Tarnepäev",
    dateHint: "Tarnime küttepuid esmaspäevast reedeni. Riigipühadel me ei tarni. Varaseima tarnepäeva saad valida {days} päeva pärast. Tellimust saad teha kuni {months} kuud ette.",
    legendFree: "Valitav",
    legendClosed: "Nädalavahetus / püha / pole valitav",
    selectedDate: "Valitud tarnepäev: {date}. Teeme kõik endast oleneva, et tarne toimuks just sel päeval.",
    noDateSelected: "Tarnepäev on valimata.",
    dateContactHint: "Tarnepäeval võtame sinuga ühendust, et kinnitada, et oled kodus ja valmis tarnet vastu võtma.",
    labelName: "Nimi",
    labelPhone: "Telefon",
    labelEmailOptional: "E-post (vabatahtlik)",
    labelAddress: "Tarneaadress",
    addressPlaceholder: "Tänav, maja, linn või küla, sihtnumber",
    labelNotes: "Lisainfo (vabatahtlik)",
    notesPlaceholder: "Nt kuhu puud maha panna, värava kood vms.",
    submit: "Esita tellimus",
    sending: "Saadan…",

    errSummary: "Tellimust ei saadetud. Palun paranda punasega märgitud väljad.",
    errSpecies: "Palun vali puuliik.",
    errLength: "Palun vali pikkus.",
    errDate: "Palun vali kalendrist tarnepäev.",
    errDateInvalid: "Valitud tarnepäev ei sobi. Palun vali kalendrist uus päev.",
    errName: "Palun sisesta oma nimi.",
    errPhone: "Palun sisesta õige telefoninumber, näiteks +372 5123 4567.",
    errEmail: "Palun sisesta õige e-posti aadress, näiteks nimi@domeen.ee.",
    errAddress: "Palun sisesta tarneaadress.",

    successSent: "Aitäh! Tellimus on vastu võetud. Võtame sinuga ühendust.",
    sendFailed: "Tellimuse saatmine ebaõnnestus. Palun proovi uuesti või helista meile: {phone}.",
    notConnected: "Tellimine ei ole veel ühendatud. Palun helista meile: {phone}.",
    privacyNote: "Sinu andmeid kasutatakse ainult sinuga ühenduse võtmiseks. Need kustutatakse meie andmebaasist 1 aasta pärast.",

    labelLocation: "Töö piirkond",
    galleryTitle: "Pildid",
  },

  en: {
    langLabel: "ENG",
    locale: "en-GB",
    callLabel: "Call",

    pricesTitle: "Prices",
    pricesIntro: "We sell firewood only in 10 m³ loads. Delivery is included in the price.",
    priceRowTitle: "Firewood {cm} cm",
    priceAvailable: "Available: {species}",
    perUnit: "/ {unit}",
    deliveryIncluded: "Delivery is included in the price.",
    deliveryAreas: "We deliver in Ida-Viru County: {places} and the surrounding areas.",
    payment: "Payment on receipt of the goods, or by invoice before delivery starts.",

    orderTitle: "Order firewood",
    orderIntro: "Fill in the form and choose a suitable delivery day. We will contact you to confirm the order.",
    labelSpecies: "Wood type",
    labelLength: "Length",
    lengthOption: "{cm} cm",
    totalLabel: "Total:",
    labelDate: "Delivery day",
    dateHint: "We deliver firewood Monday to Friday. We do not deliver on public holidays. The earliest delivery day you can choose is {days} days from today. You can order up to {months} months ahead.",
    legendFree: "Available",
    legendClosed: "Weekend / public holiday / not available",
    selectedDate: "Selected delivery day: {date}. We will do our best to deliver on exactly that day.",
    noDateSelected: "No delivery day selected.",
    dateContactHint: "On the delivery day we will contact you to confirm that you are at home and ready to receive the delivery.",
    labelName: "Name",
    labelPhone: "Phone",
    labelEmailOptional: "Email (optional)",
    labelAddress: "Delivery address",
    addressPlaceholder: "Street, house, town or village, postcode",
    labelNotes: "Additional information (optional)",
    notesPlaceholder: "E.g. where to unload the wood, gate code, etc.",
    submit: "Place order",
    sending: "Sending…",

    errSummary: "The order was not sent. Please correct the fields marked in red.",
    errSpecies: "Please choose a wood type.",
    errLength: "Please choose a length.",
    errDate: "Please choose a delivery day in the calendar.",
    errDateInvalid: "The chosen delivery day is not available. Please choose another day in the calendar.",
    errName: "Please enter your name.",
    errPhone: "Please enter a valid phone number, e.g. +372 5123 4567.",
    errEmail: "Please enter a valid email address, e.g. name@domain.com.",
    errAddress: "Please enter the delivery address.",

    successSent: "Thank you! Your order has been received. We will contact you.",
    sendFailed: "Sending the order failed. Please try again or call us: {phone}.",
    notConnected: "Ordering is not connected yet. Please call us: {phone}.",
    privacyNote: "Your details are used only to contact you. They are deleted from our database after 1 year.",

    labelLocation: "Service area",
    galleryTitle: "Photos",
  },

  ru: {
    langLabel: "RUS",
    locale: "ru-RU",
    callLabel: "Позвонить",

    pricesTitle: "Цены",
    pricesIntro: "Продаём дрова только партиями по 10 м³. Доставка включена в цену.",
    priceRowTitle: "Дрова {cm} см",
    priceAvailable: "В наличии: {species}",
    perUnit: "/ {unit}",
    deliveryIncluded: "Доставка включена в цену.",
    deliveryAreas: "Доставляем по Ида-Вирумаа: {places} и окрестности.",
    payment: "Оплата при получении товара или по счёту до начала доставки.",

    orderTitle: "Заказать дрова",
    orderIntro: "Заполните форму и выберите удобный день доставки. Мы свяжемся с вами для подтверждения заказа.",
    labelSpecies: "Порода дерева",
    labelLength: "Длина",
    lengthOption: "{cm} см",
    totalLabel: "Итого:",
    labelDate: "День доставки",
    dateHint: "Доставляем дрова с понедельника по пятницу. В государственные праздники мы не доставляем. Самый ранний день доставки — через {days} дн. Заказ можно сделать на срок до {months} мес. вперёд.",
    legendFree: "Доступно",
    legendClosed: "Выходной / праздник / недоступно",
    selectedDate: "Выбранный день доставки: {date}. Мы сделаем всё возможное, чтобы доставить именно в этот день.",
    noDateSelected: "День доставки не выбран.",
    dateContactHint: "В день доставки мы свяжемся с вами, чтобы убедиться, что вы дома и готовы принять заказ.",
    labelName: "Имя",
    labelPhone: "Телефон",
    labelEmailOptional: "Эл. почта (необязательно)",
    labelAddress: "Адрес доставки",
    addressPlaceholder: "Улица, дом, город или деревня, почтовый индекс",
    labelNotes: "Дополнительная информация (необязательно)",
    notesPlaceholder: "Например, куда выгрузить дрова, код ворот и т. п.",
    submit: "Отправить заказ",
    sending: "Отправка…",

    errSummary: "Заказ не отправлен. Пожалуйста, исправьте поля, отмеченные красным.",
    errSpecies: "Пожалуйста, выберите породу дерева.",
    errLength: "Пожалуйста, выберите длину.",
    errDate: "Пожалуйста, выберите день доставки в календаре.",
    errDateInvalid: "Выбранный день доставки не подходит. Пожалуйста, выберите другой день в календаре.",
    errName: "Пожалуйста, введите своё имя.",
    errPhone: "Пожалуйста, введите правильный номер телефона, например +372 5123 4567.",
    errEmail: "Пожалуйста, введите правильный адрес эл. почты, например name@domain.ee.",
    errAddress: "Пожалуйста, введите адрес доставки.",

    successSent: "Спасибо! Заказ принят. Мы свяжемся с вами.",
    sendFailed: "Не удалось отправить заказ. Попробуйте ещё раз или позвоните нам: {phone}.",
    notConnected: "Приём заказов ещё не подключён. Пожалуйста, позвоните нам: {phone}.",
    privacyNote: "Ваши данные используются только для связи с вами. Они удаляются из наших баз данных через 1 год.",

    labelLocation: "Район работы",
    galleryTitle: "Фото",
  },
};


let currentLang = CONFIG.DEFAULT_LANG;
let picker = null;
let formLoadedAt = Date.now();
let isSending = false;


function t(key, vars = {}) {
  const dict = TRANSLATIONS[currentLang] || {};
  const fallback = TRANSLATIONS[CONFIG.DEFAULT_LANG];
  let text = dict[key] ?? fallback[key] ?? key;
  for (const [name, value] of Object.entries(vars)) {
    text = text.replaceAll(`{${name}}`, value);
  }
  return text;
}

function localized(obj) {
  return obj[currentLang] ?? obj[CONFIG.DEFAULT_LANG];
}

function formatMoney(amount) {
  return new Intl.NumberFormat(t("locale"), {
    style: "currency",
    currency: CONFIG.CURRENCY,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat(t("locale"), {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  }).format(date);
}

function toDateKey(date) {
  const pad = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function getSpecies(id) {
  return CONFIG.SPECIES.find((s) => s.id === id);
}

function getLength(cm) {
  return CONFIG.LENGTHS.find((l) => String(l.cm) === String(cm));
}


function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = localized(CONFIG.SITE_TITLE);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  ["placeholder", "aria-label", "title"].forEach((attr) => {
    document.querySelectorAll(`[data-i18n-${attr}]`).forEach((el) => {
      el.setAttribute(attr, t(el.getAttribute(`data-i18n-${attr}`)));
    });
  });
}

/* ---------- Ettevõtte andmed lehele ---------- */

function fillBusinessDetails() {
  document.querySelectorAll(".js-site-title").forEach((el) => (el.textContent = localized(CONFIG.SITE_TITLE)));
  document.querySelectorAll(".js-biz-name").forEach((el) => (el.textContent = localized(CONFIG.BUSINESS_NAME)));
  document.querySelectorAll(".js-phone-text").forEach((el) => (el.textContent = CONFIG.PHONE));
  document.querySelectorAll(".js-phone-link").forEach((el) => {
    el.href = "tel:" + CONFIG.PHONE.replace(/[^\d+]/g, "");
  });
  document.querySelectorAll(".js-location-text").forEach((el) => (el.textContent = localized(CONFIG.LOCATION_TEXT)));
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- Hinnakiri ---------- */

function renderPrices() {
  const list = document.getElementById("priceList");
  list.innerHTML = "";

  const speciesNames = CONFIG.SPECIES.map((s) => localized(s.name)).join(" / ");

  CONFIG.LENGTHS.forEach((length) => {
    const li = document.createElement("li");
    li.className = "price-item";

    const info = document.createElement("span");
    info.className = "price-info";

    const name = document.createElement("span");
    name.className = "price-name";
    name.textContent = t("priceRowTitle", { cm: length.cm });

    const species = document.createElement("small");
    species.className = "price-species";
    species.textContent = t("priceAvailable", { species: speciesNames });

    info.append(name, species);

    const price = document.createElement("span");
    price.className = "price-value";
    price.textContent = formatMoney(length.price);

    const unit = document.createElement("span");
    unit.className = "price-unit";
    unit.textContent = t("perUnit", { unit: localized(CONFIG.UNIT) });

    price.append(" ", unit);
    li.append(info, price);
    list.appendChild(li);
  });

  document.getElementById("deliveryAreas").textContent = t("deliveryAreas", {
    places: CONFIG.DELIVERY_AREAS.map((place) => localized(place)).join(", "),
  });
}

/* ---------- Puuliigi ja pikkuse valik, kogusumma ---------- */

function selectedValue(inputName) {
  const checked = document.querySelector(`input[name="${inputName}"]:checked`);
  return checked ? checked.value : "";
}

function renderChoiceGroup(containerId, inputName, options) {
  const container = document.getElementById(containerId);
  const previous = selectedValue(inputName);
  container.innerHTML = "";

  options.forEach(({ value, label, price }) => {
    const option = document.createElement("label");
    option.className = "product-option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = inputName;
    radio.value = value;
    radio.className = "form-check-input";
    radio.checked = value === previous;

    const name = document.createElement("span");
    name.className = "product-option-name";
    name.textContent = label;

    option.append(radio, name);

    if (price !== undefined) {
      const priceEl = document.createElement("span");
      priceEl.className = "product-option-price";
      priceEl.textContent = formatMoney(price);
      option.appendChild(priceEl);
    }
    container.appendChild(option);
  });
}

function renderChoices() {
  renderChoiceGroup("speciesChoice", "species",
    CONFIG.SPECIES.map((s) => ({ value: s.id, label: localized(s.name) })));
  renderChoiceGroup("lengthChoice", "length",
    CONFIG.LENGTHS.map((l) => ({ value: String(l.cm), label: t("lengthOption", { cm: l.cm }), price: l.price })));
}

function updateTotal() {
  const length = getLength(selectedValue("length"));
  document.getElementById("totalAmount").textContent = length ? formatMoney(length.price) : "—";
  document.getElementById("totalDetail").textContent = length ? t("deliveryIncluded") : "";
}

/* ---------- Tarnepäevad: nädalavahetus ja riigipühad ---------- */

function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return { month, day };
}

function goodFriday(year) {
  const easter = easterSunday(year);
  return new Date(year, easter.month - 1, easter.day - 2);
}

const holidayCache = new Map();

function holidaysForYear(year) {
  if (!holidayCache.has(year)) {
    const days = new Set(CONFIG.HOLIDAYS_FIXED.map((monthDay) => `${year}-${monthDay}`));
    days.add(toDateKey(goodFriday(year)));
    holidayCache.set(year, days);
  }
  return holidayCache.get(year);
}

function isHoliday(date) {
  return holidaysForYear(date.getFullYear()).has(toDateKey(date));
}

// Tarnepäev on esmaspäevast reedeni ja mitte riigipüha.
function isDeliveryDay(date) {
  const weekday = date.getDay();
  return weekday !== 0 && weekday !== 6 && !isHoliday(date);
}

function getDateLimits(now = new Date()) {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const min = new Date(today);
  min.setDate(min.getDate() + CONFIG.MIN_DAYS_AHEAD);
  const max = new Date(today);
  max.setMonth(max.getMonth() + CONFIG.MAX_MONTHS_AHEAD);
  return { min, max };
}

function isDateAllowed(date, now = new Date()) {
  const { min, max } = getDateLimits(now);
  const day = new Date(date);
  day.setHours(0, 0, 0, 0);
  return day >= min && day <= max && isDeliveryDay(day);
}

/* ---------- Kalender ---------- */

function initCalendar() {
  const selected = picker ? picker.selectedDates[0] : null;
  if (picker) picker.destroy();

  const { min, max } = getDateLimits();

  picker = flatpickr(document.getElementById("deliveryDate"), {
    inline: true,
    disableMobile: true,
    appendTo: document.getElementById("calendarWrap"),
    locale: { ...(flatpickr.l10ns[currentLang] || flatpickr.l10ns.default), firstDayOfWeek: 1 },
    dateFormat: "Y-m-d",
    minDate: min,
    maxDate: max,
    disable: [(date) => !isDeliveryDay(date)], // nädalavahetus ja riigipühad
    onChange: () => {
      updateSelectedDate();
      clearError("date");
    },
  });

  if (selected) picker.setDate(selected, false);

  document.getElementById("dateHint").textContent =
    t("dateHint", { days: CONFIG.MIN_DAYS_AHEAD, months: CONFIG.MAX_MONTHS_AHEAD });
  updateSelectedDate();
}

function updateSelectedDate() {
  const date = picker && picker.selectedDates[0];
  document.getElementById("selectedDate").textContent = date
    ? t("selectedDate", { date: formatLongDate(date) })
    : t("noDateSelected");
}

/* ---------- Pildid ---------- */

function renderGallery() {
  const section = document.getElementById("galerii");
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  section.hidden = CONFIG.PHOTOS.length === 0;

  CONFIG.PHOTOS.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = localized(photo.alt);
    img.loading = "lazy";
    grid.appendChild(img);
  });
}

function looksLikeBot() {
  const honeypotFilled = document.getElementById("website").value !== "";
  const tooFast = Date.now() - formLoadedAt < CONFIG.MIN_FILL_SECONDS * 1000;
  return honeypotFilled || tooFast;
}

const FIELD_INPUTS = {
  species: "speciesChoice",
  length: "lengthChoice",
  date: "calendarWrap",
  name: "name",
  phone: "phone",
  email: "email",
  address: "address",
};

function showError(field, message) {
  document.getElementById(`err-${field}`).textContent = message;
  const input = document.getElementById(FIELD_INPUTS[field]);
  input.classList.add("is-invalid");
  input.setAttribute("aria-invalid", "true");
  input.setAttribute("aria-describedby", `err-${field}`);
}

function clearError(field) {
  document.getElementById(`err-${field}`).textContent = "";
  const input = document.getElementById(FIELD_INPUTS[field]);
  input.classList.remove("is-invalid");
  input.removeAttribute("aria-invalid");
}

function validate() {
  const errors = {};
  const value = (id) => document.getElementById(id).value.trim();

  if (!getSpecies(selectedValue("species"))) errors.species = t("errSpecies");
  if (!getLength(selectedValue("length"))) errors.length = t("errLength");

  if (!picker.selectedDates.length) errors.date = t("errDate");
  else if (!isDateAllowed(picker.selectedDates[0])) errors.date = t("errDateInvalid");

  if (!value("name")) errors.name = t("errName");

  const phoneDigits = value("phone").replace(/[\s\-()]/g, "");
  if (!/^\+?\d{7,15}$/.test(phoneDigits)) errors.phone = t("errPhone");

  if (value("email") && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value("email"))) errors.email = t("errEmail");

  if (!value("address")) errors.address = t("errAddress");

  Object.keys(FIELD_INPUTS).forEach((field) => {
    if (errors[field]) showError(field, errors[field]);
    else clearError(field);
  });
  return errors;
}

/* ---------- Tellimuse saatmine ---------- */

function buildOrder() {
  const species = getSpecies(selectedValue("species"));
  const length = getLength(selectedValue("length"));
  const value = (id) => document.getElementById(id).value.trim();

  return {
    name: value("name"),
    phone: value("phone"),
    email: value("email"),
    address: value("address"),
    species: species.name.et,
    length_cm: length.cm,
    price_eur: length.price,
    delivery_date: toDateKey(picker.selectedDates[0]),
    notes: value("notes"),
    language: TRANSLATIONS[currentLang].langLabel,
    website: document.getElementById("website").value,
  };
}

async function sendOrder(order) {
  const response = await fetch(CONFIG.SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(order),
  });
  const data = await response.json();
  if (!response.ok || !data.ok) throw new Error(data.error || "Send failed");
}

function showStatus(type, message) {
  const box = document.getElementById("formStatus");
  box.className = `alert alert-${type} mt-4`;
  box.textContent = message;
}

function hideStatus() {
  document.getElementById("formStatus").className = "alert d-none mt-4";
}

function resetForm() {
  const form = document.getElementById("orderForm");
  form.reset();
  picker.clear();
  updateSelectedDate();
  updateTotal();
}

async function handleSubmit(event) {
  event.preventDefault();
  if (isSending) return; 
  hideStatus();

  const summary = document.getElementById("errorSummary");
  summary.classList.add("d-none");

  if (looksLikeBot()) {
    showStatus("success", t("successSent"));
    return;
  }

  const errors = validate();
  if (Object.keys(errors).length) {
    summary.textContent = t("errSummary");
    summary.classList.remove("d-none");
    summary.focus();
    return;
  }

  if (!CONFIG.SHEETS_WEBHOOK_URL) {
    console.warn("SHEETS_WEBHOOK_URL on tühi");
    showStatus("warning", t("notConnected", { phone: CONFIG.PHONE }));
    return;
  }

  const button = document.getElementById("submitBtn");
  isSending = true;
  button.disabled = true;
  button.textContent = t("sending");
  try {
    await sendOrder(buildOrder());
    resetForm();
    formLoadedAt = Date.now();
    showStatus("success", t("successSent"));
  } catch (err) {
    console.error(err);
    showStatus("danger", t("sendFailed", { phone: CONFIG.PHONE }));
  } finally {
    isSending = false;
    button.disabled = false;
    button.textContent = t("submit");
  }
}

/* ---------- Keele vahetus ---------- */

const LANG_STORAGE_KEY = "lang";

function renderLanguageButtons() {
  const group = document.getElementById("langSwitch");
  group.innerHTML = "";

  Object.entries(TRANSLATIONS).forEach(([lang, dict]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lang-btn";
    button.lang = lang;
    button.dataset.lang = lang;
    button.textContent = dict.langLabel;
    button.addEventListener("click", () => setLanguage(lang));
    group.appendChild(button);
  });
}

function savedLanguage() {
  try {
    const lang = localStorage.getItem(LANG_STORAGE_KEY);
    return TRANSLATIONS[lang] ? lang : null;
  } catch {
    return null;
  }
}

function clearMessages() {
  Object.keys(FIELD_INPUTS).forEach(clearError);
  document.getElementById("errorSummary").classList.add("d-none");
  hideStatus();
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  clearMessages();
  applyTranslations();
  fillBusinessDetails();
  renderPrices();
  renderChoices();
  updateTotal();
  initCalendar();
  renderGallery();
}


document.addEventListener("DOMContentLoaded", () => {
  renderLanguageButtons();
  setLanguage(savedLanguage() || CONFIG.DEFAULT_LANG);

  document.getElementById("speciesChoice").addEventListener("change", () => clearError("species"));
  document.getElementById("lengthChoice").addEventListener("change", () => {
    updateTotal();
    clearError("length");
  });
  ["name", "phone", "email", "address"].forEach((id) => {
    document.getElementById(id).addEventListener("input", () => clearError(id));
  });
  document.getElementById("orderForm").addEventListener("submit", handleSubmit);
});
