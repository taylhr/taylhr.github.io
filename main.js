(function () {
  function report() {
    fetch('/api/hi', { method: 'POST', keepalive: true }).catch(function () {});
  }
  if (document.prerendering) {
    document.addEventListener('prerenderingchange', report, { once: true });
  } else {
    report();
  }
})();
