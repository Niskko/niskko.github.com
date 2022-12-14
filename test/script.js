var carousel = document.querySelector('.carousel');
var figure = document.querySelector('figure');
var slide = document.querySelectorAll('.slide');
document.querySelectorAll('img');
var numImages = document.querySelectorAll('img').length;
var theta = (2 * Math.PI) / numImages;
var currImage = 0;
slide[0].addEventListener('click', onClick);
slide[1].addEventListener('click', onClick);
function onClick(e) {
	console.log('test');
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
