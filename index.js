var sections = Array.from(document.getElementsByClassName('section'));

for (var i = 1; i < sections.length; i++)
    sections[i].style.transform = 'translateY(100vh)';

// set menu to select section
var menu = document.getElementById('menu');

menuSectionIndex = [4, 5, 6, 7, 8, 9, 10]

Array.from(menu.getElementsByTagName('li')).forEach(function(li, i){
    li.onclick = function () {
	setCurrent(menuSectionIndex[i])
    }
})

// set 'scrolling' (isn't really scrolling)
function fakeScroll (event) {
    // if go down and currentSection isn't last
    if (event.deltaY >= 3 && currentSection < sections.length - 1)
        setCurrent(currentSection + 1);
    // if go up and currentSection isn't first
    if (event.deltaY <= -3 && currentSection > 0)
        setCurrent(currentSection - 1);
}

Array.from(document.getElementsByClassName('cover')).forEach(function(cover){
    cover.onwheel = fakeScroll
})

// the same fake scrolling for touch devices
var touchPrev;
window.ontouchstart = function (event) {
    touchPrev = event.changedTouches[0].clientY;
};
window.ontouchmove = function (event) {
    var touchCurrent = event.changedTouches[0].clientY;

    if (touchCurrent < touchPrev && currentSection < sections.length - 1)
        setCurrent(currentSection + 1);
    if (touchCurrent > touchPrev && currentSection > 0)
        setCurrent(currentSection - 1);

    touchPrev = touchCurrent;
};
