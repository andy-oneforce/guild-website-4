/**
 * Page chrome behaviour: mobile tree drawer, tree scroll memory + current entry in view,
 * outline scroll-spy (last heading above one third of the viewport), heading copy-link.
 */
document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.nav-toggle');
  const backdrop = document.querySelector('.nav-backdrop');

  // Drawer (below 960px; above it the button is hidden by CSS and nav is a normal column).
  function setDrawer(on) {
    html.classList.toggle('nav-open', on);
    if (toggle) { toggle.setAttribute('aria-expanded', String(on)); toggle.setAttribute('aria-label', on ? 'Close navigation' : 'Open navigation'); }
    if (backdrop) backdrop.hidden = !on;
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => setDrawer(!html.classList.contains('nav-open')));
    if (backdrop) backdrop.addEventListener('click', () => setDrawer(false));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setDrawer(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && html.classList.contains('nav-open')) { setDrawer(false); toggle.focus(); } });
    window.matchMedia('(min-width: 961px)').addEventListener('change', (m) => { if (m.matches) setDrawer(false); });
  }

  // Tree scroll memory across pages, then make sure the current entry is visible.
  if (nav) {
    const KEY = 'asios-nav-scroll';
    try { const v = sessionStorage.getItem(KEY); if (v != null) nav.scrollTop = Number(v) || 0; } catch (e) { /* ignore */ }
    const cur = nav.querySelector('a[aria-current="page"]');
    if (cur) {
      const n = nav.getBoundingClientRect(); const c = cur.getBoundingClientRect();
      if (c.top < n.top || c.bottom > n.bottom) nav.scrollTop += c.top - n.top - n.height / 3;
    }
    const save = () => { try { sessionStorage.setItem(KEY, String(nav.scrollTop)); } catch (e) { /* ignore */ } };
    nav.addEventListener('click', save);
    window.addEventListener('pagehide', save);
  }

  // Scroll-spy over h2/h3 in the article.
  const links = Array.from(document.querySelectorAll('.site-toc a[href^="#"], .toc-dropdown a[href^="#"]'));
  if (links.length) {
    const byId = new Map();
    for (const a of links) { const id = decodeURIComponent(a.getAttribute('href').slice(1)); (byId.get(id) || byId.set(id, []).get(id)).push(a); }
    const heads = Array.from(byId.keys()).map((id) => document.getElementById(id)).filter(Boolean);
    let ticking = false;
    const spy = () => {
      ticking = false;
      let cur = null;
      for (const h of heads) { if (h.getBoundingClientRect().top < window.innerHeight / 3) cur = h; else break; }
      for (const a of links) a.removeAttribute('aria-current');
      if (cur) for (const a of byId.get(cur.id) || []) a.setAttribute('aria-current', 'location');
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
    spy();
  }

  // Heading copy-link: copies the absolute URL with #id, also updates the address bar.
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a.heading-anchor');
    if (!a) return;
    const url = new URL(a.getAttribute('href'), window.location.href).href;
    history.replaceState(null, '', a.getAttribute('href'));
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => {
      a.classList.add('is-copied'); setTimeout(() => a.classList.remove('is-copied'), 1500);
    }, () => {});
    e.preventDefault();
  });
});
