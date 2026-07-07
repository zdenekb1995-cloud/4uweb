/* ================= 4uweb — script.js ================= */

/* ---------- NAČÍTACÍ STRÁNKA ---------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  // krátká prodleva, ať si logo stihne "zakývat"
  setTimeout(() => loader.classList.add('hide'), 900);
});
/* pojistka: skryj loader nejpozději po 4 s */
setTimeout(() => {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
}, 4000);

/* ---------- MOBILNÍ MENU ---------- */
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
  });
}

/* ---------- POPTÁVKOVÝ FORMULÁŘ ---------- */
const form = document.getElementById('poptavka');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    /* Zde v ostrém provozu napojte odeslání (např. Formspree, PHP mail, API) */
    document.getElementById('formOk').style.display = 'block';
    form.querySelectorAll('input,textarea').forEach(i => i.value = '');
  });
}

/* ---------- COOKIES ---------- */
function getCookie(name) {
  const m = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return m ? m.pop() : null;
}
function showCookies() {
  const c = document.getElementById('cookies');
  if (c) c.classList.add('show');
}
function cookieChoice(all) {
  /* uloží volbu na 365 dní */
  document.cookie = 'cookieConsent=' + (all ? 'all' : 'necessary') +
    ';path=/;max-age=' + 60 * 60 * 24 * 365 + ';SameSite=Lax';
  document.getElementById('cookies').classList.remove('show');
  if (all) {
    /* Zde spusťte analytiku / marketingové skripty (např. Google Analytics) */
  }
}
window.addEventListener('load', () => {
  if (!getCookie('cookieConsent')) {
    setTimeout(showCookies, 1600);
  }
});
