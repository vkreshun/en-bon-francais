/* =========================================================
   НАСТРОЙКИ САЙТА — редактируйте только этот блок
   ========================================================= */

// Контакты. Если какой-то соцсети нет — оставьте пустые кавычки "", и она исчезнет с сайта.
const CONTACTS = {
  telegram: "CmoiChris",         // личный Telegram без @
  telegramChannel: "enbonfr",    // Telegram-канал без @
  whatsapp: "79801032048",       // номер только цифрами, с кодом страны
  instagram: "",                 // ник в Instagram без @
  vk: "",                        // короткое имя страницы ВКонтакте
};

// Ссылка на бесплатный тест уровня
const LEVEL_TEST_URL = "https://coreapp.ai/app/player/lesson/6aa00a151cbb236717a8f7dd";

// Текст сообщения для записи на пробный урок
const TRIAL_MESSAGE = "Здравствуйте, Кристиан! Я хотел(а) бы записаться на пробный урок французского языка.";

// Показывать ли раздел «Материалы» (и блок «Как купить»). Поставьте true, когда материалы будут готовы.
const SHOW_MATERIALS = false;

// Материалы на продажу. Чтобы добавить новый — скопируйте любой блок { ... } и поменяйте текст.
// levels — уровни, по которым работает фильтр: "A1", "A2", "B1", "B2", "DELF"
const MATERIALS = [
  {
    title: "Рабочая тетрадь «Французский с нуля»",
    desc: "30 уроков с объяснениями, упражнениями и ключами. Подходит для самостоятельного изучения.",
    levels: ["A1"], format: "PDF · 120 страниц",
    price: 990, word: "Bonjour", emoji: "📘", label: "Хит продаж",
    color: ["#1d2b53", "#3b5aa8"],
  },
  {
    title: "Грамматика в схемах",
    desc: "Вся базовая грамматика на 45 наглядных схемах: времена, артикли, местоимения, согласование.",
    levels: ["A1", "A2", "B1"], format: "PDF · 45 схем",
    price: 690, word: "Grammaire", emoji: "🧩",
    color: ["#d64545", "#ef8a6f"],
  },
  {
    title: "300 главных глаголов в карточках",
    desc: "Карточки для печати и колода Anki: спряжение, примеры и перевод.",
    levels: ["A1", "A2", "B1"], format: "PDF + Anki",
    price: 490, word: "Verbes", emoji: "🃏",
    color: ["#2f7d6d", "#5fb39e"],
  },
  {
    title: "Видеокурс «Идеальное произношение»",
    desc: "12 видеоуроков о звуках, интонации и связывании слов, с аудио для тренировки.",
    levels: ["A1", "A2", "B1", "B2"], format: "Видео · 12 уроков",
    price: 2490, oldPrice: 2990, word: "Prononciation", emoji: "🎧", label: "−17%",
    color: ["#6a3f9e", "#a77bd6"],
  },
  {
    title: "Подготовка к DELF B1",
    desc: "4 полных пробных варианта экзамена с аудио, ответами и критериями оценки письма и устной части.",
    levels: ["B1", "DELF"], format: "PDF + аудио",
    price: 1490, word: "DELF B1", emoji: "📝",
    color: ["#b3541e", "#e0924a"],
  },
  {
    title: "Подготовка к DELF B2",
    desc: "Стратегии для каждой части экзамена, 3 пробных теста и шаблоны для эссе.",
    levels: ["B2", "DELF"], format: "PDF + аудио",
    price: 1790, word: "DELF B2", emoji: "🎓",
    color: ["#7a2e3a", "#c25a6a"],
  },
  {
    title: "Разговорник для путешествий",
    desc: "Фразы для отеля, кафе, транспорта и магазинов, с озвучкой носителем языка.",
    levels: ["A1", "A2"], format: "PDF + аудио",
    price: 390, word: "Voyage", emoji: "✈️",
    color: ["#1f6f9c", "#53a9d6"],
  },
  {
    title: "Набор «Всё для уровня A1»",
    desc: "Рабочая тетрадь, грамматика в схемах и карточки глаголов — комплектом дешевле.",
    levels: ["A1"], format: "3 материала",
    price: 1690, oldPrice: 2170, word: "Pack A1", emoji: "🎁", label: "Выгодно",
    color: ["#c9a227", "#e8c96a"],
  },
];

const FILTERS = ["Все", "A1", "A2", "B1", "B2", "DELF"];

/* =========================================================
   ДАЛЬШЕ — логика сайта, менять не нужно
   ========================================================= */

const ICONS = {
  telegram: '<svg viewBox="0 0 24 24"><path d="M21.9 4.3 2.7 11.7c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.4.8.9.8.4 0 .6-.2.8-.4l2.4-2.3 4.9 3.6c.9.5 1.5.2 1.8-.8l3.2-15.2c.3-1.3-.5-1.9-1.4-1.5ZM9.9 15.4l-.4 4-1.6-5 9.8-6.2-7.8 7.2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><path fill-rule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.3-4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"/></svg>',
  vk: '<svg viewBox="0 0 24 24"><text x="12" y="16.5" text-anchor="middle" font-size="11" font-weight="800" font-family="Arial, sans-serif" fill="#fff">VK</text></svg>',
};

const CHANNELS = [
  { key: "telegram",  name: "Telegram",  handle: v => "@" + v, color: "#229ED9", url: (v, msg) => `https://t.me/${v}${msg ? "?text=" + encodeURIComponent(msg) : ""}` },
  { key: "whatsapp",  name: "WhatsApp",  handle: v => "+" + v, color: "#25D366", url: (v, msg) => `https://wa.me/${v}${msg ? "?text=" + encodeURIComponent(msg) : ""}` },
  { key: "instagram", name: "Instagram", handle: v => "@" + v, color: "#E1306C", url: (v) => `https://ig.me/m/${v}` },
  { key: "vk",        name: "ВКонтакте", handle: v => "vk.com/" + v, color: "#0077FF", url: (v) => `https://vk.me/${v}` },
].filter(c => CONTACTS[c.key]);

const $ = (s) => document.querySelector(s);
const formatPrice = (n) => n.toLocaleString("ru-RU") + " ₽";
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));

/* ---------- Витрина материалов ---------- */
function renderFilters() {
  $("#filters").innerHTML = FILTERS.map((f, i) =>
    `<button class="filter${i === 0 ? " is-active" : ""}" data-filter="${f}" role="tab">${f}</button>`
  ).join("");
}

function renderProducts(filter = "Все") {
  const list = filter === "Все" ? MATERIALS : MATERIALS.filter(m => m.levels.includes(filter));
  $("#products").innerHTML = list.map(m => {
    const levelText = m.levels.filter(l => l !== "DELF");
    const levelChip = levelText.length > 1 ? `${levelText[0]}–${levelText[levelText.length - 1]}` : levelText[0];
    const msg = `Здравствуйте, Кристиан! Хочу купить «${m.title}» за ${formatPrice(m.price)}. Как можно оплатить?`;
    return `
      <article class="product">
        <div class="product__cover" style="background: linear-gradient(135deg, ${m.color[0]}, ${m.color[1]})">
          ${m.label ? `<span class="product__label">${escapeHtml(m.label)}</span>` : ""}
          <span class="product__emoji">${m.emoji}</span>
          <span class="product__word">${escapeHtml(m.word)}</span>
        </div>
        <div class="product__body">
          <div class="product__meta">
            <span class="chip">${levelChip}</span>
            <span class="chip">${escapeHtml(m.format)}</span>
          </div>
          <h3>${escapeHtml(m.title)}</h3>
          <p>${escapeHtml(m.desc)}</p>
          <div class="product__foot">
            <span class="product__price">${formatPrice(m.price)}${m.oldPrice ? `<s>${formatPrice(m.oldPrice)}</s>` : ""}</span>
            <button class="btn btn--primary btn--small" data-contact="${escapeHtml(msg)}" data-title="${escapeHtml(m.title)}">Купить</button>
          </div>
        </div>
      </article>`;
  }).join("");
}

$("#filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("is-active", b === btn));
  renderProducts(btn.dataset.filter);
});

/* ---------- Блок контактов ---------- */
function renderSocials() {
  $("#socials").innerHTML = CHANNELS.map(c => `
    <a class="social" href="${c.url(CONTACTS[c.key])}" target="_blank" rel="noopener">
      <span class="social__icon" style="background:${c.color}">${ICONS[c.key]}</span>
      <span>${c.name}<small>${escapeHtml(c.handle(CONTACTS[c.key]))}</small></span>
    </a>`).join("");

  if (CONTACTS.telegramChannel) {
    $("#socials").insertAdjacentHTML("beforeend", `
      <a class="social" href="https://t.me/${CONTACTS.telegramChannel}" target="_blank" rel="noopener">
        <span class="social__icon" style="background:#229ED9">${ICONS.telegram}</span>
        <span>Telegram-канал<small>@${escapeHtml(CONTACTS.telegramChannel)}</small></span>
      </a>`);
  }

  // ссылки на тест уровня и канал по всей странице
  document.querySelectorAll('[data-link="levelTest"]').forEach(a => a.href = LEVEL_TEST_URL);
  document.querySelectorAll('[data-link="channel"]').forEach(a => {
    if (CONTACTS.telegramChannel) a.href = `https://t.me/${CONTACTS.telegramChannel}`;
    else a.closest(".freebie")?.remove();
  });
}

/* ---------- Отзывы: «Читать полностью» ---------- */
function setupReviews() {
  document.querySelectorAll(".review p").forEach(p => {
    if (p.scrollHeight <= p.clientHeight + 4) return; // короткий отзыв — кнопка не нужна
    const btn = document.createElement("button");
    btn.className = "review__more";
    btn.textContent = "Читать полностью";
    btn.addEventListener("click", () => {
      const open = p.classList.toggle("is-open");
      btn.textContent = open ? "Свернуть" : "Читать полностью";
    });
    p.after(btn);
  });
}

/* ---------- Окно выбора мессенджера ---------- */
const modal = $("#modal");
let currentMsg = "";

function openModal(msg, title) {
  currentMsg = msg;
  $("#modalSub").textContent = title ? `Материал: «${title}»` : "Выберите удобный мессенджер.";
  $("#modalMsg").textContent = msg;
  $("#modalLinks").innerHTML = CHANNELS.map(c => `
    <a href="${c.url(CONTACTS[c.key], msg)}" target="_blank" rel="noopener" style="background:${c.color}" data-channel="${c.key}">
      ${ICONS[c.key]}${c.name}
    </a>`).join("");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = Object.assign(document.createElement("textarea"), { value: text });
    document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
  }
  const toast = $("#toast");
  toast.classList.add("is-visible");
  setTimeout(() => toast.classList.remove("is-visible"), 2000);
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-contact]");
  if (trigger) {
    const msg = trigger.dataset.contact === "trial" ? TRIAL_MESSAGE : trigger.dataset.contact;
    openModal(msg, trigger.dataset.title);
    return;
  }
  if (e.target.closest("[data-close]")) closeModal();
  // на всякий случай копируем текст: не все приложения подставляют его сами
  if (e.target.closest("#modalLinks a")) copyText(currentMsg);
});
$("#copyBtn").addEventListener("click", () => copyText(currentMsg));
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* ---------- Мобильное меню ---------- */
const burger = $("#burger"), nav = $("#nav");
burger.addEventListener("click", () => {
  burger.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { burger.classList.remove("is-open"); nav.classList.remove("is-open"); }
});

/* ---------- Запуск ---------- */
renderFilters();
renderProducts();
renderSocials();
setupReviews();
if (SHOW_MATERIALS) document.querySelectorAll("[data-materials]").forEach(el => el.hidden = false);
$("#year").textContent = new Date().getFullYear();
