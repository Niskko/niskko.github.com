(function () {
  const nav = document.getElementsByTagName("nav")[0];

  if (window.onmousemove) {
    navigation();
  }
  window.onmousemove = navigation;

  var timeout;
  function navigation() {
    clearTimeout(timeout);
    nav.classList.remove("notmove");
    timeout = setTimeout(function () {
      nav.classList.add("notmove");
    }, 3000);
  }
})();
