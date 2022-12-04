(function () {
  const nav = document.getElementsByTagName("nav")[0];
  const body = document.getElementsByTagName("body")[0];
  var slideMode = false;

  if (window.onmousemove) {
    navigation();
  }
  window.onmousemove = navigation;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Home") {
      turnFullscreen();
    }
  });

  function turnFullscreen() {
    if (slideMode) {
      slideMode = false;
      document.exitFullscreen();
      nav.classList.remove("notmove");
      body.style.cursor = "default";
    } else {
      if (confirm("Voulez-vous vraiment passer en mode diaporama ?")) {
        slideMode = true;
        fullscreen();
        nav.classList.add("notmove");
        body.style.cursor = "none";
      }
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      alert("Vous avez appuyé sur la touche Echap");
      turnFullscreen();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" && slideMode) {
      alert("next");
    }
  });

  function fullscreen() {
    if (body.requestFullscreen) {
      body.requestFullscreen();
    } else if (body.mozRequestFullScreen) {
      /* Firefox */
      body.mozRequestFullScreen();
    } else if (body.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      body.webkitRequestFullscreen();
    } else if (body.msRequestFullscreen) {
      /* IE/Edge */
      body.msRequestFullscreen();
    }
  }

  var timeout;
  function navigation() {
    if (!slideMode) {
      clearTimeout(timeout);
      nav.classList.remove("notmove");
      body.style.cursor = "default";
      timeout = setTimeout(function () {
        nav.classList.add("notmove");
        body.style.cursor = "none";
      }, 3000);
    }
  }
})();
