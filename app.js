/* ═══════════════════════════════════════════
   MAISON PÉTALE — App
   ═══════════════════════════════════════════ */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const fmt = n => n.toFixed(2).replace('.', ',') + ' fc';
const labelOf = id => (CATEGORIES.find(c => c.id === id)?.label || id);

/* ─── LIEN WHATSAPP ─── */
function whatsappLink(product){
  const message =
    `Bonjour Grâce Nak ✿\n\n` +
    `Je suis intéressée par cette pièce :\n` +
    `• ${product.name}\n` +
    `• Référence : ${product.id}\n` +
    `• Prix : ${fmt(product.promo)}\n\n` +
    `Voici la photo :\n${product.image}`;

  return `https://wa.me/${product.whatsapp}?text=${encodeURIComponent(message)}`;
}

/* ─── FILTRES ─── */
let activeFilter = "all";

function renderFilters(){
  $("#filters").innerHTML = CATEGORIES.map(c => `
    <button class="filter ${c.id === activeFilter ? 'is-active' : ''}"
            data-cat="${c.id}">${c.label}</button>
  `).join("");

  $$(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.cat === activeFilter) return;
      activeFilter = btn.dataset.cat;
      $$(".filter").forEach(b => b.classList.toggle("is-active", b === btn));
      renderGrid();
    });
  });
}

/* ─── GRILLE PRODUITS ─── */
function renderGrid(){
  const list = activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  const grid = $("#grid");
  grid.innerHTML = list.map((p, i) => `
    <article class="card" data-id="${p.id}" style="--card-delay:${i * 70}ms">
      <div class="card__media">
        ${p.badge ? `<span class="card__badge">${p.badge}</span>` : ""}
        <img class="card__img"
             src="${p.image}"
             alt="${p.name}"
             loading="lazy"
             decoding="async">
      </div>
      <div class="card__info">
        <span class="card__cat">${labelOf(p.category)}</span>
        <h3 class="card__name">${p.name}</h3>
        <div class="card__prices">
          <span class="card__price">${fmt(p.promo)}</span>
          ${p.price ? `<span class="card__price-old">${fmt(p.price)}</span>` : ""}
        </div>
        <a class="card__btn"
           href="${whatsappLink(p)}"
           target="_blank"
           rel="noopener noreferrer">
          <span>
            Commander
            <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </a>
      </div>
    </article>
  `).join("");

  $("#empty").hidden = list.length > 0;

  // Révélation au scroll
  requestAnimationFrame(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold:.12, rootMargin:"0px 0px -40px 0px" });

    $$(".card").forEach(card => io.observe(card));
  });
}

/* ─── RÉVÉLATION DES EN-TÊTES DE SECTION ─── */
function initSectionReveals(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    });
  }, { threshold:.15, rootMargin:"0px 0px -60px 0px" });

  $$(".collection__head, .filters").forEach(el => io.observe(el));
}

/* ─── INIT ─── */
renderFilters();
renderGrid();
initSectionReveals();

/* ═══════════════════════════════════════════
   MODALE STUDIO
   ═══════════════════════════════════════════ */
(function(){
  const modal    = document.getElementById('studio');
  const openBtn  = document.getElementById('openStudio');
  const closers  = modal.querySelectorAll('[data-close]');

  function open(){
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  }
  function close(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  }

  openBtn.addEventListener('click', open);
  closers.forEach(el => el.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) close();
  });
})();