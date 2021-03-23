var navIcon = document.getElementById('nav-icon');
var fullscreenMenu = document.getElementById('fullscreen-menu')
var header = document.getElementById('header')

var sectionIndexList = [ 0, 5, 6, 7, 8, 9, 10 ]

navIcon.onclick = setFullScreenMenu;

function setFullScreenMenu () {
    if (navIcon.classList.contains('open')){
	navIcon.classList.remove('open');
	fullscreenMenu.style.display = 'none'
	header.classList.remove('open')
    } else {
	navIcon.classList.add('open');
	fullscreenMenu.style.display = 'block'
	header.classList.add('open')
	setCurrentLi()
    }
}

var fullscreenMenuItems = Array.from(fullscreenMenu.getElementsByTagName('span')).map(function(span, i){ 
    span.onclick = function () {
	setFullScreenMenu()
	setCurrent(sectionIndexList[i])
    }
    return { span: span, sectionIndex: sectionIndexList[i] }
})

function setCurrentLi () {
    fullscreenMenuItems.forEach(function(li){
	li.span.style.backgroundColor = 'transparent'
	li.span.style.color = 'white'
    })
    var currentLi = fullscreenMenuItems.find(function(mi){
	if(mi.sectionIndex == currentSection)
	    return mi
    })
    if(!currentLi) return
    currentLi.span.style.backgroundColor = 'white'
    currentLi.span.style.color = 'black'
}
