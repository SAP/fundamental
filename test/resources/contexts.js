(() => {
  if ('ontouchstart' in window) {
    document.body.classList.add("fd-for-touch");
  }
})();