(function initRotators() {
  function makeRotator(root, captionEl) {
    const imgs = Array.from(root.querySelectorAll('img'));
    if (!imgs.length) return;
    let i = imgs.findIndex(img => img.classList.contains('active'));
    if (i < 0) { i = 0; imgs[0].classList.add('active'); }
    const intervalMs = parseInt(root.getAttribute('data-interval') || '3500', 10);

    function setCaption() {
      if (!captionEl) return;
      const name = imgs[i].getAttribute('data-name') || imgs[i].alt || '';
      captionEl.textContent = name;
    }
    function show(idx) {
      imgs[i].classList.remove('active');
      i = (idx + imgs.length) % imgs.length;
      imgs[i].classList.add('active');
      setCaption();
    }
    function next() { show(i + 1); }
    function prev() { show(i - 1); }

    let timer = setInterval(next, intervalMs);
    function stop()  { clearInterval(timer); }
    function start() { timer = setInterval(next, intervalMs); }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);

    root.tabIndex = 0;
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });

    setCaption();
    return { next, prev };
  }

  function wireUp() {
    const rotators = {};
    document.querySelectorAll('.photo-rotator').forEach(r => {
      const caption = document.getElementById(r.id + '-caption');
      rotators[r.id] = makeRotator(r, caption);
    });
    document.querySelectorAll('.rotator-btn').forEach(btn => {
      const tgt = btn.getAttribute('data-target');
      const action = btn.getAttribute('data-action');
      btn.addEventListener('click', () => {
        const r = rotators[tgt];
        if (!r) return;
        if (action === 'next') r.next();
        if (action === 'prev') r.prev();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireUp);
  } else {
    wireUp();
  }
  window.addEventListener('pageshow', wireUp);
})();
