// Fills each <image-slot> from the page's folder (meta bt-image-folder) when <slot-id>.<ext> exists there.
(() => {
  const EXTS = ['jpg', 'jpeg', 'png', 'webp'];
  const probe = (base, i, done) => {
    if (i >= EXTS.length) return;
    const u = base + '.' + EXTS[i], im = new Image();
    im.onload = () => done(u);
    im.onerror = () => probe(base, i + 1, done);
    im.src = u;
  };
  const scan = () => {
    const m = document.querySelector('meta[name="bt-image-folder"]');
    if (!m) return;
    const dir = m.getAttribute('content').replace(/\/$/, '');
    document.querySelectorAll('image-slot[id]:not([data-folder-probed])').forEach(s => {
      const id = s.getAttribute('id');
      if (!id || id.indexOf('{') > -1) return;
      s.setAttribute('data-folder-probed', '');
      probe(dir + '/' + id, 0, u => s.setAttribute('src', u));
    });
  };
  let q = 0;
  new MutationObserver(() => { if (!q) q = requestAnimationFrame(() => { q = 0; scan(); }); }).observe(document.documentElement, { childList: true, subtree: true });
  scan();
})();
