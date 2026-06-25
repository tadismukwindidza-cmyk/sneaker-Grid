/* ─── DATA ─────────────────────────────────────────────────────────────────── */
const SNEAKERS = [
  { brand:"Nike",    name:"Air Max 95",        price:"$189", category:"runner",  desc:"Engineered for the streets, built for the culture.",        color:"#e8e8e8", accent:"#3a7bd5", sole:"#222" },
  { brand:"Jordan",  name:"Jordan 1 High",      price:"$220", category:"hightop", desc:"The shoe that started a revolution. A legend reborn.",        color:"#cc2200", accent:"#111",    sole:"#111" },
  { brand:"Adidas",  name:"Yeezy 350 V2",       price:"$299", category:"collab",  desc:"Kanye's minimalist masterpiece. Primeknit perfection.",        color:"#c8b89a", accent:"#888",    sole:"#ddd" },
  { brand:"Nike",    name:"Dunk Low",            price:"$110", category:"low",     desc:"Retro court DNA meets modern street credibility.",            color:"#1a3a6b", accent:"#ffffff", sole:"#fff" },
  { brand:"NB",      name:"990v5",               price:"$185", category:"runner",  desc:"Four decades of New England craftsmanship. Still unmatched.",  color:"#888888", accent:"#cc4400", sole:"#ccc" },
  { brand:"Nike",    name:"AF1 Low",             price:"$120", category:"low",     desc:"The original. 40 years of pure white perfection.",            color:"#ffffff", accent:"#cccccc", sole:"#eee" },
  { brand:"Nike",    name:"Travis Scott SB",     price:"$450", category:"collab",  desc:"Backwards Swoosh. La Flame's most coveted collab.",            color:"#5b3a1f", accent:"#c8a96e", sole:"#444" },
  { brand:"Adidas",  name:"Ultra Boost 23",      price:"$160", category:"runner",  desc:"Boost cushioning redefined. Energy return like no other.",     color:"#111111", accent:"#00d4ff", sole:"#333" },
  { brand:"Nike",    name:"Foam RNNR",           price:"$200", category:"collab",  desc:"Alien geology. The shoe that broke the internet.",             color:"#ff6b6b", accent:"#fff",    sole:"#e55" },
  { brand:"Puma",    name:"Suede Classic",       price:"$90",  category:"heritage",desc:"The 1968 original. Soft suede, sharp edges, pure soul.",       color:"#1a5c1a", accent:"#f5e642", sole:"#111" },
  { brand:"Vans",    name:"Old Skool",           price:"$75",  category:"heritage",desc:"The sidestripe. The skate shoe that never left.",              color:"#111",    accent:"#cc0000", sole:"#fff" },
  { brand:"Converse",name:"Chuck 70 High",       price:"$95",  category:"hightop", desc:"High canvas walls. Low-fi attitude. Timeless.",               color:"#f5e8d0", accent:"#333",    sole:"#ddd" },
  { brand:"Reebok",  name:"Club C 85",           price:"$85",  category:"heritage",desc:"Tennis court origins. Minimal leather. Eternal cool.",         color:"#f0f0f0", accent:"#44aa44", sole:"#eee" },
  { brand:"ASICS",   name:"Gel-Kayano 30",       price:"$130", category:"runner",  desc:"30 seasons of stability engineering. Your long-run partner.",  color:"#0033aa", accent:"#ff6600", sole:"#00f" },
  { brand:"Nike",    name:"Blazer Mid 77",       price:"$105", category:"hightop", desc:"Vintage hoops DNA with a distressed finish.",                  color:"#f0ece0", accent:"#cc5500", sole:"#eee" },
  { brand:"Nike",    name:"Off-White AF1",       price:"$500", category:"collab",  desc:"Virgil's deconstructed classic. Design as commentary.",        color:"#e8e8d0", accent:"#ff6600", sole:"#ddd" },
  { brand:"Jordan",  name:"Air Jordan 4 Bred",  price:"$300", category:"hightop", desc:"The Bred. Michael's 1989 playoff shoe. Nothing compares.",     color:"#1a1a1a", accent:"#ff0000", sole:"#333" },
  { brand:"Nike",    name:"Sacai Waffle",        price:"$350", category:"collab",  desc:"Double everything. Chitose Abe's deconstructed DNA.",          color:"#2255aa", accent:"#ffdd00", sole:"#333" },
  { brand:"Adidas",  name:"Stan Smith",          price:"$95",  category:"heritage",desc:"The tennis shoe turned cultural cornerstone. Zero noise.",      color:"#ffffff", accent:"#44aa44", sole:"#fff" },
  { brand:"Jordan",  name:"Jordan 3 Fire Red",  price:"#265", category:"hightop", desc:"Elephant print meets fire. The shoe that kept Mike at Nike.",  color:"#ffffff", accent:"#cc2200", sole:"#eee" },
  { brand:"Nike",    name:"Air Max 1",           price:"$140", category:"runner",  desc:"Tinker's window into the sole. 1987's most radical idea.",     color:"#cc2200", accent:"#fff",    sole:"#ddd" },
  { brand:"Adidas",  name:"Gazelle",             price:"$100", category:"heritage",desc:"70s suede simplicity. The Brit-pop shoe that never died.",      color:"#663399", accent:"#ffcc00", sole:"#fff" },
  { brand:"NB",      name:"2002R",               price:"$130", category:"runner",  desc:"Retro running with N-ergy cushioning. The sleeper hit.",       color:"#aabbcc", accent:"#334466", sole:"#ccc" },
  { brand:"Nike",    name:"Cortez",              price:"$90",  category:"heritage",desc:"Phil Knight's first design. The shoe that launched Nike.",     color:"#fff",    accent:"#cc2200", sole:"#eee" },
  { brand:"Puma",    name:"RS-X Bold",           price:"$110", category:"runner",  desc:"80s running tech remixed for the 21st century.",              color:"#ff3366", accent:"#3333cc", sole:"#ddd" },
  { brand:"Adidas",  name:"Samba OG",            price:"$100", category:"heritage",desc:"The indoor court original. Gum sole, three stripes, forever.", color:"#111",    accent:"#fff",    sole:"#c8a96e" },
  { brand:"Nike",    name:"Air Force 1 Mid",     price:"$130", category:"hightop", desc:"The mid-top silhouette with 40 years of street authority.",   color:"#f5f5f0", accent:"#888",    sole:"#fff" },
  { brand:"Jordan",  name:"Air Jordan 11 Concord",price:"$225",category:"hightop",desc:"Patent leather and Jumpman. Mike's most iconic pair.",         color:"#ffffff", accent:"#1a1a5c", sole:"#fff" },
  { brand:"Adidas",  name:"NMD R1",              price:"$130", category:"runner",  desc:"Boost meets Primeknit. City running redefined.",              color:"#111",    accent:"#cc2200", sole:"#333" },
  { brand:"Nike",    name:"React Element 55",    price:"$120", category:"runner",  desc:"React foam with a translucent cage. Future on your feet.",    color:"#f0f0ff", accent:"#ff3300", sole:"#ccc" },
  { brand:"Reebok",  name:"Freestyle Hi",        price:"$80",  category:"hightop", desc:"The first dedicated aerobics shoe. A 1982 original.",         color:"#ffffff", accent:"#cc2200", sole:"#fff" },
  { brand:"Vans",    name:"Slip-On Pro",         price:"$70",  category:"heritage",desc:"No laces, no limits. The skater's easy choice since 1979.",   color:"#111",    accent:"#fff",    sole:"#fff" },
  { brand:"Nike",    name:"Zoom Vomero 5",       price:"$160", category:"runner",  desc:"2006 tech reborn. The chunky runner that Y2K forgot to kill.", color:"#aabbdd", accent:"#cc4400", sole:"#888" },
  { brand:"Adidas",  name:"Forum Low",           price:"$90",  category:"heritage",desc:"The velcro strap. The ankle strap. The 1984 Forum.",          color:"#ffffff", accent:"#1a1a9c", sole:"#fff" },
  { brand:"Jordan",  name:"Jordan 6 Infrared",  price:"$200", category:"hightop", desc:"Clear sole. Tongue pull. The 1991 championship shoe.",         color:"#111",    accent:"#ff3300", sole:"#ddd" },
  { brand:"Nike",    name:"Killshot 2",          price:"$90",  category:"heritage",desc:"Tennis heritage in suede. The quiet cool of restrained design.",color:"#f5f0e8",accent:"#557755", sole:"#eee" },
  { brand:"Adidas",  name:"Handball Spezial",    price:"#95",  category:"heritage",desc:"Warehouse aesthetics. Slim sole, suede upper, sub-cultural.",  color:"#222266", accent:"#ffffcc", sole:"#fff" },
  { brand:"NB",      name:"327",                 price:"$100", category:"heritage",desc:"70s trail racing silhouette resurrected for the modern eye.",  color:"#e8d4a0", accent:"#cc4400", sole:"#c8a96e" },
  { brand:"Nike",    name:"Air Huarache",        price:"$120", category:"runner",  desc:"Neoprene sock. Aggressive wedge. 1992 Barcelona futurism.",   color:"#111",    accent:"#cc8800", sole:"#888" },
  { brand:"Converse",name:"One Star OX",         price:"$75",  category:"heritage",desc:"The suede star. Low-top attitude, counterculture heritage.",   color:"#cc2200", accent:"#fff",    sole:"#fff" },
  { brand:"Adidas",  name:"ZX 8000",             price:"$120", category:"runner",  desc:"Torsion tech from 1989. The blueprint for modern runners.",   color:"#ffffff", accent:"#33cc99", sole:"#eee" },
  { brand:"Nike",    name:"Air Max 270",         price:"$150", category:"runner",  desc:"The largest Air heel unit ever. All-day comfort engineering.", color:"#111",    accent:"#ff6600", sole:"#333" },
  { brand:"Jordan",  name:"Jordan 5 Fire Red",  price:"$190", category:"hightop", desc:"Shark teeth sole. Lace lock. 1990's most ferocious sneaker.",  color:"#ffffff", accent:"#cc0000", sole:"#aaa" },
  { brand:"Puma",    name:"Clyde Court",         price:"#100", category:"heritage",desc:"Named for Walt 'Clyde' Frazier. Signature low-pro cool.",      color:"#333",    accent:"#ffcc00", sole:"#fff" },
  { brand:"Nike",    name:"P-6000",              price:"$110", category:"runner",  desc:"2006 Pegasus DNA. The chunky retro runner for new heights.",  color:"#ccddee", accent:"#334477", sole:"#ccc" },
];

/* ─── SVG SNEAKER GENERATOR ─────────────────────────────────────────────────── */
function buildShoeSVG(color, accent, sole, scale = 1) {
  const c  = color;
  const ac = accent;
  const sl = sole;
  return `
  <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg" class="shoe-svg">
    <!-- Shadow -->
    <ellipse cx="100" cy="122" rx="70" ry="6" fill="rgba(0,0,0,0.08)"/>
    <!-- Sole -->
    <rect x="18" y="96" width="164" height="18" rx="9" fill="${sl}"/>
    <!-- Midsole -->
    <rect x="22" y="84" width="155" height="14" rx="7" fill="#ffffff" stroke="rgba(0,0,0,0.06)" stroke-width="0.5"/>
    <!-- Air unit bubble -->
    <ellipse cx="148" cy="91" rx="18" ry="8" fill="${ac}" opacity="0.85"/>
    <!-- Upper body -->
    <path d="M30,84 C30,52 50,38 80,34 L140,34 C162,34 175,50 178,84 Z" fill="${c}" stroke="rgba(0,0,0,0.05)" stroke-width="0.5"/>
    <!-- Toe box -->
    <ellipse cx="160" cy="66" rx="22" ry="20" fill="${c}"/>
    <!-- Heel counter -->
    <path d="M30,84 C28,70 30,54 42,46 L42,84 Z" fill="${ac}" opacity="0.6"/>
    <!-- Swoosh / accent stripe -->
    <path d="M55,76 C75,52 110,48 148,60" stroke="${ac}" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.9"/>
    <!-- Collar -->
    <path d="M30,84 C30,72 34,60 42,52 L55,52 C52,60 48,72 48,84 Z" fill="${c}" stroke="rgba(0,0,0,0.04)" stroke-width="0.5"/>
    <!-- Tongue -->
    <rect x="55" y="38" width="28" height="46" rx="4" fill="${c}" opacity="0.9"/>
    <!-- Laces -->
    <line x1="56" y1="50" x2="82" y2="50" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="58" x2="82" y2="58" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="66" x2="82" y2="66" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="56" y1="74" x2="82" y2="74" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Heel tab -->
    <rect x="26" y="52" width="8" height="16" rx="3" fill="${ac}"/>
    <!-- Toe cap highlight -->
    <ellipse cx="162" cy="58" rx="10" ry="7" fill="rgba(255,255,255,0.18)"/>
  </svg>`;
}

/* ─── STATE ─────────────────────────────────────────────────────────────────── */
let activeFilter   = 'all';
let selectedCard   = null;
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;
let animFrame;

/* ─── DOM REFS ───────────────────────────────────────────────────────────────── */
const grid         = document.getElementById('sneakerGrid');
const focusOverlay = document.getElementById('focusOverlay');
const focusClose   = document.getElementById('focusClose');
const focusShoe    = document.getElementById('focusShoe');
const focusName    = document.getElementById('focusName');
const focusBrand   = document.getElementById('focusBrand');
const focusDesc    = document.getElementById('focusDesc');
const focusPrice   = document.getElementById('focusPrice');
const focusTag     = document.getElementById('focusTag');
const tooltip      = document.getElementById('tooltip');
const tooltipName  = document.getElementById('tooltipName');
const tooltipPrice = document.getElementById('tooltipPrice');
const cursor       = document.getElementById('cursor');
const cursorTrail  = document.getElementById('cursorTrail');

/* ─── BUILD GRID ────────────────────────────────────────────────────────────── */
function buildGrid() {
  grid.innerHTML = '';
  SNEAKERS.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'sneaker-card';
    card.dataset.category = s.category;
    card.dataset.index    = i;

    const floatDur   = 2.6 + Math.random() * 1.6;
    const floatDelay = Math.random() * 2;

    card.innerHTML = `
      <div class="shoe-visual floating" style="--float-dur:${floatDur}s; --float-delay:${floatDelay}s;">
        ${buildShoeSVG(s.color, s.accent, s.sole)}
      </div>
      <div class="card-info">
        <p class="card-brand">${s.brand}</p>
        <h3 class="card-name">${s.name}</h3>
        <div class="card-footer">
          <span class="card-price">${s.price}</span>
          <span class="card-tag">${s.category}</span>
        </div>
      </div>`;

    grid.appendChild(card);
    addCardListeners(card, s, i);
  });
}

/* ─── CARD 3D TILT ───────────────────────────────────────────────────────────── */
function addCardListeners(card, data, idx) {
  card.addEventListener('mouseenter', (e) => {
    cursor.classList.add('expanded');
    tooltipName.textContent  = data.name;
    tooltipPrice.textContent = data.price;
    tooltip.classList.add('visible');

    gsap.to(card, {
      boxShadow: '0 28px 60px rgba(0,0,0,0.20)',
      duration: 0.3, ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    cursor.classList.remove('expanded');
    tooltip.classList.remove('visible');

    gsap.to(card, {
      rotateX: 0, rotateY: 0, scale: 1,
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      duration: 0.5, ease: 'power3.out'
    });
  });

  card.addEventListener('mousemove', (e) => {
    const rect   = card.getBoundingClientRect();
    const cx     = rect.left + rect.width  / 2;
    const cy     = rect.top  + rect.height / 2;
    const dx     = (e.clientX - cx) / (rect.width  / 2);
    const dy     = (e.clientY - cy) / (rect.height / 2);
    const rotX   = -dy * 14;
    const rotY   =  dx * 14;

    gsap.to(card, {
      rotateX: rotX, rotateY: rotY,
      scale: 1.06,
      duration: 0.25, ease: 'power2.out',
      transformPerspective: 900,
      transformOrigin: 'center center'
    });
  });

  card.addEventListener('click', () => openFocus(data, card));
}

/* ─── FOCUS MODE ─────────────────────────────────────────────────────────────── */
function openFocus(data, card) {
  selectedCard = card;

  focusShoe.innerHTML  = buildShoeSVG(data.color, data.accent, data.sole);
  focusBrand.textContent = data.brand;
  focusName.textContent  = data.name;
  focusDesc.textContent  = data.desc;
  focusPrice.textContent = data.price;
  focusTag.textContent   = data.category;

  focusOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFocus() {
  focusOverlay.classList.remove('active');
  document.body.style.overflow = '';
  selectedCard = null;
}

focusClose.addEventListener('click', closeFocus);
focusOverlay.addEventListener('click', (e) => {
  if (e.target === focusOverlay) closeFocus();
});

document.getElementById('buyBtn').addEventListener('click', () => {
  gsap.to(document.getElementById('buyBtn'), {
    scale: 0.94, duration: 0.1, yoyo: true, repeat: 1,
    onComplete: () => {
      alert(`Added to cart! ${focusName.textContent} — ${focusPrice.textContent}`);
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeFocus();
});

/* ─── FILTER ────────────────────────────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  const cards = document.querySelectorAll('.sneaker-card');
  cards.forEach(card => {
    const match = activeFilter === 'all' || card.dataset.category === activeFilter;
    if (match) {
      card.classList.remove('filtered-out');
      gsap.to(card, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
    } else {
      card.classList.add('filtered-out');
      gsap.to(card, { opacity: 0.15, scale: 0.96, duration: 0.3, ease: 'power2.in' });
    }
  });
}

/* ─── STAGGERED ENTRANCE ─────────────────────────────────────────────────────── */
function animateIn() {
  const cards = document.querySelectorAll('.sneaker-card');
  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 32, scale: 0.88 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.55,
        ease: 'back.out(1.4)',
        delay: 0.04 * i,
        onStart: () => card.classList.add('visible')
      }
    );
  });
}

/* ─── CUSTOM CURSOR ─────────────────────────────────────────────────────────── */
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  tooltip.style.left = (mouseX + 16) + 'px';
  tooltip.style.top  = (mouseY - 36) + 'px';
});

function animateCursorTrail() {
  trailX += (mouseX - trailX) * 0.14;
  trailY += (mouseY - trailY) * 0.14;
  cursorTrail.style.left = trailX + 'px';
  cursorTrail.style.top  = trailY + 'px';
  requestAnimationFrame(animateCursorTrail);
}
animateCursorTrail();

/* ─── PARALLAX CAMERA SHIFT ─────────────────────────────────────────────────── */
document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  gsap.to(grid, {
    x: dx * -8, y: dy * -5,
    duration: 1.2, ease: 'power1.out'
  });
});

/* ─── HEADER SCROLL ─────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const h = document.getElementById('siteHeader');
  h.style.boxShadow = window.scrollY > 10
    ? '0 2px 24px rgba(0,0,0,0.08)'
    : 'none';
});

/* ─── INIT ──────────────────────────────────────────────────────────────────── */
buildGrid();
window.addEventListener('load', () => {
  setTimeout(animateIn, 120);
});
