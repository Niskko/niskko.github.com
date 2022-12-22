(function () {
	const nav = document.getElementsByTagName('nav')[0];
	const body = document.getElementsByTagName('body')[0];

	if (window.onmousemove) {
		navigation();
	}
	window.onmousemove = navigation;

	// window.addEventListener("wheel", (e) => {
	//   console.log("wheel");
	//   if (e.deltaY > 0) {
	//     window.scrollTo({
	//       top: window.innerHeight,
	//       behavior: "smooth",
	//     });
	//   } else {
	//     window.scrollTo({
	//       top: -window.innerHeight,
	//       behavior: "smooth",
	//     });
	//   }
	// });

	function addRainDecoration(content) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('snowflakes');
		for (let i = 0; i < 10; i++) {
			let newContent = document.createElement('div');
			newContent.classList.add('snowflake');
			newContent.innerHTML = content[getRandomInt(content.length)];
			newDiv.appendChild(newContent);
			document.body.insertBefore(newDiv, document.body.childNodes[0]);
		}
	}

	var date = new Date();
	if (date.getDate() === 25 && date.getMonth() === 11) {
		let noel = ['❅', '❆', '❄'];
		addRainDecoration(noel);
	} else if (date.getDate() === 31 && date.getMonth() === 9) {
		let halloween = ['🕸', '🕷'];
		addRainDecoration(halloween);
	} else if (date.getDate() === 1 && date.getMonth() === 0) {
		let newYear = ['🎊', '🎉'];
		addRainDecoration(newYear);
	}

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}

	//keydown
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Home') {
			turnFullscreen();
		}
	});

	function turnFullscreen() {
		if (window.innerHeight == screen.height) {
			document.exitFullscreen();
			nav.classList.remove('notmove');
			body.style.cursor = 'default';
		} else {
			if (true) {
				fullscreen();
				nav.classList.add('notmove');
			}
		}
	}

	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowRight' && window.innerHeight == screen.height) {
			console.log('next');
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft' && window.innerHeight == screen.height) {
			console.log('prec');
		}
	});

	var keys = [];
	window.addEventListener('keypress', (e) => {
		console.log(e.key);
		keys.push(e.key);
		keys.splice(-6, keys.length - 5);
		if (keys.join('').includes('diapo')) {
			turnFullscreen();
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
	// function navigation() {
	// 	clearTimeout(timeout);
	// 	if (window.innerHeight == screen.height) {
	// 		nav.classList.add('notmove');
	// 		body.style.cursor = 'none';
	// 	} else {
	// 		nav.classList.remove('notmove');
	// 		body.style.cursor = 'default';
	// 		timeout = setTimeout(function () {
	// 			nav.classList.add('notmove');
	// 			body.style.cursor = 'none';
	// 		}, 3000);
	// 	}
	// }
})();
