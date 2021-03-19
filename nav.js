var navIcon = document.getElementById('nav-icon');
var fullscreenMenu = document.getElementById('fullscreen-menu')
var header = document.getElementById('header')

navIcon.onclick = function () {
    if (navIcon.classList.contains('open')){
	navIcon.classList.remove('open');
	fullscreenMenu.style.display = 'none'
	header.classList.remove('open')
    } else {
	navIcon.classList.add('open');
	fullscreenMenu.style.display = 'block'
	header.classList.add('open')
    }
};
