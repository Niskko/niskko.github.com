var carousel = document.querySelector('.carousel');
var figure = document.querySelector('figure');
var nave = document.querySelectorAll('nav')[1];
document.querySelectorAll('img');
var numImages = document.querySelectorAll('img').length;
var theta = (2 * Math.PI) / numImages;
var currImage = 0;
nave.addEventListener('click', onClick);
function onClick(e) {
	e.stopPropagation();
	var t = e.target;
	if (t.tagName.toUpperCase() != 'BUTTON') return;
	if (t.classList.contains('next')) {
		currImage++;
	} else {
		currImage--;
	}
	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
