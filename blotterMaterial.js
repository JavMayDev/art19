// set up material
var material = new Blotter.RollingDistortMaterial();
material.uniforms.uSpeed.value = 0.2;
material.uniforms.uRotation.value = 90;
material.uniforms.uNoiseDistortAmplitude.value = 0;
material.uniforms.uSineDistortAmplitude.value = 0;

sectionsColors = [
    { color: '#000', sectionIndex: 0 },
    { color: 'rgb(141, 175, 181)', sectionIndex: 4  },
    { color: 'rgb(242, 122, 103)', sectionIndex: 5   },
    { color: 'rgb(55, 164, 161)', sectionIndex: 6   },
    { color: 'rgb(157, 29, 66)', sectionIndex: 7   },
    { color: 'rgb(60, 81, 143)', sectionIndex: 8   },
    { color: 'rgb(5, 71, 77)' , sectionIndex: 9  },
    { color: 'rgb(61, 23, 80)', sectionIndex: 10  },
];

sections.forEach(function (section, i) {
    Array.from(section.getElementsByTagName('*'))
        .filter(function (sectionChild) {
            if (sectionChild.classList.contains('distor')) return sectionChild;
        })
        .forEach(function (distor) {
            var fill;
            var bg = distor.classList.contains('distor-bg');
            if (bg) fill = 'white';
	    else fill = sectionsColors.find(function(c) {
		if(c.sectionIndex == i) return c
	    }).color

	    var textSettings = { fill: fill }
	    if(distor.parentElement.classList.contains('cover-title') )
		textSettings.size = 70
            var text = new Blotter.Text(
                distor.innerHTML,
                Object.assign(textSettings, distor.dataset)
            );
            distor.innerHTML = '';
            var blotter = new Blotter(material, {
                texts: text,
            });
            var scope = blotter.forText(text);
            scope.appendTo(distor);

            // add background color to the canvas
            if (bg)
                distor
                    .getElementsByTagName('canvas')
		    .item(0).style.backgroundColor = sectionsColors.find(function(c){
			if(c.sectionIndex == i) return c
		    }).color
        });
});

var prevY = 0;
window.onmousemove = function (event) {
    var mouseVel = Math.abs(event.clientY - prevY) / 50;
    material.uniforms.uNoiseDistortAmplitude.value = mouseVel;
    material.uniforms.uSineDistortAmplitude.value = mouseVel;
    prevY = event.clientY;
};

function animateMaterial(materialSettings, duration) {
    Object.keys(materialSettings).forEach(function (uniform) {
        anime({
            targets: material.uniforms[uniform],
            value: materialSettings[uniform],
            duration: duration,
            easing: 'linear',
        });
    });
}
