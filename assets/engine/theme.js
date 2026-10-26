/**
 * Theme control: three radios (light / system / dark) rendered in the HTML by parts.mjs
 * (renderThemeControl). Stores the choice under 'asios-theme' (same key the inline
 * THEME_INIT in <head> reads), flips data-theme on <html>, and follows the OS while in "system".
 */
document.addEventListener('DOMContentLoaded', () => {
  const KEY = 'asios-theme';
  const ORDER = ['light', 'system', 'dark'];
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const opts = Array.from(document.querySelectorAll('[data-theme-option]'));

  function get() {
    try { const v = localStorage.getItem(KEY); return ORDER.includes(v) ? v : 'system'; } catch (e) { return 'system'; }
  }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) { /* storage unavailable */ } }

  function apply(pref) {
    const dark = pref === 'dark' || (pref === 'system' && mql.matches);
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    for (const o of opts) {
      const on = o.getAttribute('data-theme-option') === pref;
      o.setAttribute('aria-checked', String(on));
      o.tabIndex = on ? 0 : -1; // roving tabindex
    }
  }

  function choose(v, focus) {
    set(v); apply(v);
    if (focus) { const o = opts.find((x) => x.getAttribute('data-theme-option') === v); if (o) o.focus(); }
  }

  apply(get());
  mql.addEventListener('change', () => { if (get() === 'system') apply('system'); });

  for (const o of opts) {
    o.addEventListener('click', () => choose(o.getAttribute('data-theme-option'), false));
    o.addEventListener('keydown', (e) => {
      const i = ORDER.indexOf(get());
      let n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = ORDER[(i + 1) % 3];
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = ORDER[(i + 2) % 3];
      if (n) { e.preventDefault(); choose(n, true); }
    });
  }
});
