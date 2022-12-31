import { ConfirmModal, ErrorModal, SuccessModal, InfoModal } from './modal.js';

(function () {
	const nav = document.getElementsByTagName('nav')[0];
	const body = document.getElementsByTagName('body')[0];
	var deviceMobile;
	windowsize();
	window.onresize = windowsize;
	function windowsize() {
		if (window.innerWidth <= 768) {
			deviceMobile = true;
		} else {
			deviceMobile = false;
		}
	}

	//mouse movement
	// window.onmousemove = navigation;
	// window.onscroll = navigation;

	var timeout;
	function navigation() {
		console.log('navigation');
		clearTimeout(timeout);
		if (window.innerHeight == screen.height) {
			nav.classList.add('notmove');
			body.style.cursor = 'none';
		} else {
			nav.classList.remove('notmove');
			body.style.cursor = 'default';
			timeout = setTimeout(function () {
				nav.classList.add('notmove');
				body.style.cursor = 'none';
			}, 3000);
		}
	}

	const svgnavbar = document.querySelector('.phonenavbar');
	const phonenavsvg = document.querySelector('.phonenavbar img');
	const phonetext = document.querySelector('.phonenavbar p');
	const navbar = document.querySelector('.navbar');
	svgnavbar.onclick = function () {
		phonenavsvg.classList.add('rotatesvg');
		svgnavbar.classList.toggle('navbar-opened');
		if (navbar.style.display === 'flex') {
			phonetext.style.display = 'none';
			navbar.style.display = 'none';
		} else {
			phonetext.style.display = 'block';
			navbar.style.display = 'flex';
		}

		setTimeout(() => {
			phonenavsvg.classList.remove('rotatesvg');
		}, 500);
	};

	//decorations
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
		if (e.key === 'Home' && window.innerHeight != screen.height) {
			let newConfirmModal2 = new ConfirmModal(
				'Etes vous sûr de vouloir passez en plein écran ?',
				null,
				'Confirmer',
				'Annuler'
			);
			let confirmButton = document.querySelector('#btnmodal-0');
			confirmButton.addEventListener('click', function () {
				turnFullscreen();
			});
		}
	});

	// var newConfirmModal2 = new ConfirmModal(
	// 	'Etes vous sûr de vouloir passez en plein écran ?',
	// 	null,
	// 	'Confirmer',
	// 	'Annuler'
	// );
	// let confirmButton = document.querySelector('#btnmodal-0');
	// confirmButton.addEventListener('click', function () {
	// 	console.log('Confirm');
	// });
	// var newErrorModal = new ErrorModal(
	// 	'⚠ - Error',
	// 	"L'accès à la base de donnée est impossible actuellement, veuillez réessayer plus tard !",
	// 	3
	// );
	// var newSuccessModal = new SuccessModal(
	// 	'Inscription réussie',
	// 	'Nous vous souhaitons la bienvenue sur notre site !',
	// 	3
	// );
	// var newInfoModal = new InfoModal(
	// 	'Maintenance en cours',
	// 	'Le site est en maintenance, Veuillez attendre la fin du processus',
	// 	3
	// );

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
			window.scrollTo(0, scrollY + window.innerHeight);
			console.log('next');
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft' && window.innerHeight == screen.height) {
			window.scrollTo(0, scrollY - window.innerHeight);
			console.log('prec');
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
})();
