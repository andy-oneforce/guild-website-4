/**
 * Header search over the built Pagefind index. Loads <basePath>/pagefind/pagefind.js on first
 * focus; "/" and Cmd/Ctrl-K focus the box; arrows move, Enter opens, Escape closes.
 * If the index is missing the box says so and nothing else breaks.
 */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('.site-search');
  if (!root) return;
  const input = root.querySelector('input');
  const list = root.querySelector('.site-search__results');
  const base = root.getAttribute('data-search-base') || '';
  let pf = null;
  let failed = false;
  let seq = 0;
  let active = -1;

  async function load() {
    if (pf || failed) return pf;
    try {
      pf = await import(`${base}/pagefind/pagefind.js`);
      await pf.init();
    } catch (e) { failed = true; pf = null; }
    return pf;
  }

  const items = () => Array.from(list.querySelectorAll('[role="option"]'));
  function close() { list.hidden = true; input.setAttribute('aria-expanded', 'false'); active = -1; }
  function open() { list.hidden = false; input.setAttribute('aria-expanded', 'true'); }
  function mark(i) {
    const its = items();
    active = its.length ? (i + its.length) % its.length : -1;
    its.forEach((el, n) => { el.classList.toggle('is-active', n === active); el.setAttribute('aria-selected', String(n === active)); });
    if (its[active]) { input.setAttribute('aria-activedescendant', its[active].id); its[active].scrollIntoView({ block: 'nearest' }); }
  }
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // Pagefind urls are relative to the site root, which sits under basePath.
  const href = (u) => (base && !u.startsWith(`${base}/`) && u.startsWith('/') ? base + u : u);

  async function run(q) {
    const my = ++seq;
    if (!q.trim()) { list.innerHTML = ''; close(); return; }
    const mod = await load();
    if (my !== seq) return;
    if (!mod) { list.innerHTML = '<div class="site-search__empty">Search is not available in this build.</div>'; open(); return; }
    const res = await mod.search(q);
    const top = await Promise.all(res.results.slice(0, 8).map((r) => r.data()));
    if (my !== seq) return;
    list.innerHTML = top.length ? top.map((d, n) => {
      const crumb = d.meta && d.meta.crumb ? `<span class="site-search__crumb">${esc(d.meta.crumb)}</span>` : '';
      return `<a role="option" id="sr-${n}" class="site-search__item" href="${esc(href(d.url))}"><strong>${esc((d.meta && d.meta.title) || d.url)}</strong>${crumb}<span class="site-search__snippet">${d.excerpt || ''}</span></a>`;
    }).join('') : '<div class="site-search__empty">No results.</div>';
    open(); active = -1;
  }

  let timer = 0;
  input.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => run(input.value), 120); });
  input.addEventListener('focus', () => { load(); if (list.innerHTML) open(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); mark(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); mark(active - 1); }
    else if (e.key === 'Enter') { const its = items(); const t = its[active] || its[0]; if (t) { e.preventDefault(); window.location.href = t.getAttribute('href'); } }
    else if (e.key === 'Escape') { close(); input.blur(); }
  });
  document.addEventListener('click', (e) => { if (!root.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName) || (document.activeElement && document.activeElement.isContentEditable);
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); input.focus(); input.select(); }
    else if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) { e.preventDefault(); input.focus(); }
  });
});
