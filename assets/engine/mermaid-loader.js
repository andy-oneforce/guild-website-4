// Loads the vendored Mermaid ESM bundle and renders pre.mermaid blocks. Included only when a page
// uses Mermaid and code/vendor/mermaid/mermaid.esm.min.mjs exists. Dynamic import() so it also
// works as a classic deferred script, resolved relative to this file.
(function () {
  var cur = document.currentScript;
  var url = new URL('vendor/mermaid.esm.min.mjs', cur ? cur.src : location.href).href;
  import(url).then(function (m) {
    var mermaid = m.default || m;
    function dark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
    function run() {
      mermaid.initialize({ startOnLoad: false, theme: dark() ? 'dark' : 'default' });
      return mermaid.run({ querySelector: 'pre.mermaid' });
    }
    run();
  }).catch(function () { /* fallback: the <pre class="mermaid"> source stays visible */ });
})();
