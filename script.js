(function () {
  const nav = document.getElementsByTagName("nav")[0];
  const body = document.getElementsByTagName("body")[0];
  var slideMode = false;

  if (window.onmousemove) {
    navigation();
  }
  window.onmousemove = navigation;

  //modal
  var modal = document.querySelector(".modal");
  var trigger = document.querySelector(".example");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
    if (event.target === modal) {
      toggleModal();
    }
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  window.addEventListener("click", windowOnClick);

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
