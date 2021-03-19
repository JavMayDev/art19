var currentSection = 0;
var scrollLock = false;
var scrollTime = 1000;

function setMenu(target) {
    Array.from(menu.getElementsByTagName('li')).forEach(function (li) {
        li.style.backgroundColor = 'transparent';
        li.style.color = 'black';
        li.style.fontWeight = 'lighter';
    });

    if (target == 0) return;

    liTarget = menu.getElementsByTagName('li').item(target - 1);
    liTarget.style.backgroundColor = sectionsColors[target];
    liTarget.style.color = 'white';
    liTarget.style.fontWeight = 'bold';
}

function setCurrent(targetIndex) {
    if (scrollLock || currentSection == targetIndex) return;
    scrollLock = true;

    setMenu(targetIndex);

    changePage(0);

    animateMaterial(
        { uNoiseDistortAmplitude: 1, uSineDistortAmplitude: 1 },
        0,
        0
    );

    if (targetIndex > currentSection) {
        incr = 1;
        translatePrev = '-100vh';
    } else {
        incr = -1;
        translatePrev = '100vh';
    }

    animeSettings = {
        easing: 'linear',
        complete: frame,
        duration: scrollTime / Math.abs(targetIndex - currentSection),
    };

    function frame() {
        if (currentSection == targetIndex) {
            return;
        }

        // remove currentSection section
        anime(
            Object.assign(
                {
                    targets: sections[currentSection],
                    translateY: translatePrev,
                },
                animeSettings
            )
        );

        // increase or decrease currentSection index
        currentSection += incr;

        if (currentSection == targetIndex) {
            // init section
            if (window[sections[currentSection].getAttribute('getin')])
                window[sections[currentSection].getAttribute('getin')]();

	    setArrows();
            animeSettings.easing = 'easeOutExpo';
            animeSettings.complete = function () {
                scrollLock = false;
            };
            animeSettings.duration = animeSettings.duration * 2;
            animateMaterial(
                {
                    uNoiseDistortAmplitude: 0,
                    uSineDistortAmplitude: 0,
                },
                scrollTime / 2
            );
            // animateDelays(sections[currentSection], animeSettings, incr);
            // return;
        }

        // set 'next' section as currentSection
        anime(
            Object.assign(
                { targets: sections[currentSection], translateY: 0 },
                animeSettings
            )
        );
    }

    frame();
}

function animateDelays(section, animeSettings, incr) {
    Array.from(section.getElementsByClassName('delay')).forEach(function (
        delay,
        i,
        delays
    ) {
        trans = 'translateY(';
        trans += incr == 1 ? '100vh)' : '-100vh)';
        delay.style.transform = trans;

        if (delays.length - 1 == i)
            animeSettings.complete = function () {
                scrollLock = false;
            };

        anime(
            Object.assign(
                { targets: delay, delay: 300, translateY: 0 },
                animeSettings
            )
        );
    });

    anime(
        Object.assign(
            {
                targets: section,
                translateY: 0,
            },
            animeSettings
        )
    );
}
