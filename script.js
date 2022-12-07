(function () {
  const nav = document.getElementsByTagName("nav")[0];
  const body = document.getElementsByTagName("body")[0];
  var slideMode = false;

  if (window.onmousemove) {
    navigation();
  }
  window.onmousemove = navigation;

  // const scroll = document.getElementsByClassName("arrow-container")[0];
  // scroll.addEventListener("click", () => {
  //   window.scrollTo({
  //     top: window.innerHeight,
  //     behavior: "smooth",
  //   });
  // });

  //when we scroll down, the page goes down by the height of the client height
  window.onscroll = function () {
    if (window.scrollY > window.innerHeight) {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    }
  };

  function addFlake(content) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("snowflakes");
    for (let i = 0; i < 10; i++) {
      let newContent = document.createElement("div");
      newContent.classList.add("snowflake");
      newContent.innerHTML = content[getRandomInt(content.length)];
      newDiv.appendChild(newContent);
      document.body.insertBefore(newDiv, document.body.childNodes[0]);
    }
  }

  //snowing
  var date = new Date();
  if (date.getMonth() === 11) {
    let noel = ["❅", "❆", "❄"];
    addFlake(noel);
  }
  if (date.getDate() === 31 && date.getMonth() === 9) {
    let halloween = ["🕸", "🕷"];
    addFlake(halloween);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //keydown
  document.addEventListener("keydown", (e) => {
    if (e.key === "Home") {
      turnFullscreen();
    }
  });

  // 🎃🕸🕷🦇

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
