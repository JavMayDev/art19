var sections = Array.from(document.getElementsByClassName('section'));

for (var i = 1; i < sections.length; i++)
    sections[i].style.transform = 'translateY(100vh)';

// set menu to select section
var menu = document.getElementById('menu');

sections.forEach(function (_, i){
    if (i == sections.length - 1) return // skip last

    var li = document.createElement('li');
    li.innerHTML = '0' + (i);
    li.onclick = function (_) {
        setCurrent(i + 1);
    };
    menu.appendChild(li);
})

// set 'scrolling' (isn't really scrolling)
window.addEventListener('wheel', function (event) {
    // if go down and currentSection isn't last
    if (event.deltaY >= 10 && currentSection < sections.length - 1)
        setCurrent(currentSection + 1);
    // if go up and currentSection isn't first
    if (event.deltaY <= -10 && currentSection > 0)
        setCurrent(currentSection - 1);
});

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
