var currentPage = 0;
var prevPageArrow = document.getElementById('prevpage');
var nextPageArrow = document.getElementById('nextpage');

prevPageArrow.onclick = function () {
    changePage(currentPage - 1);
};
nextPageArrow.onclick = function () {
    changePage(currentPage + 1);
};

function changePage(targetIndex) {
    infoPages = Array.from(
        sections[currentSection].getElementsByClassName('info')
    );

    if (
        currentPage == targetIndex ||
        targetIndex > infoPages.length ||
        targetIndex < 0
    )
        return;

    anime({
        targets: sections[currentSection],
        left: targetIndex * -100 + 'vw',
        duration: 500,
        easing: 'easeInOutSine',
    });

    currentPage = targetIndex;

    // call getin function
    if (targetIndex > 0 && window[infoPages[targetIndex - 1].getAttribute('getin')])
        window[infoPages[targetIndex - 1].getAttribute('getin')]();

    // set page arrows visibility
    if (currentPage == 0) prevPageArrow.style.display = 'none';
    else prevPageArrow.style.display = 'block';
    if (infoPages.length == 0 || currentPage == infoPages.length)
        nextPageArrow.style.display = 'none';
    else nextPageArrow.style.display = 'block';
}

function setArrows() {
    infoPages = Array.from(
        sections[currentSection].getElementsByClassName('info')
    );
    if (infoPages.length == 0) nextPageArrow.style.display = 'none';
    else nextPageArrow.style.display = 'block';
}
