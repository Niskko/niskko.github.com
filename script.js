(function () {
  const nav = document.getElementsByTagName("nav")[0];
  const body = document.getElementsByTagName("body")[0];
  var slideMode = false;

  if (window.onmousemove) {
    navigation();
  }
  window.onmousemove = navigation;

  //snowing
  var date = new Date().getMonth();
  if (date === 11) {
    const snowflakes = document.querySelectorAll(".snowflake");
    snowflakes.forEach((element) => {
      element.style.display = "block";
      element.classList.add("snowflake");
    });
  }

  // if (date === 11) {
  //   document.getElementsByTagName("body")[0].classList.add("snowing");
  // }

  //keydown
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
      }
    }
  }

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
    clearTimeout(timeout);
    if (!slideMode) {
      nav.classList.remove("notmove");
    }
    body.style.cursor = "default";
    timeout = setTimeout(function () {
      nav.classList.add("notmove");
      body.style.cursor = "none";
    }, 3000);
  }
})();
