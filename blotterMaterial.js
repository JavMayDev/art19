// set up material
var material = new Blotter.RollingDistortMaterial();
material.uniforms.uSpeed.value = 0.2;
material.uniforms.uRotation.value = 90;
material.uniforms.uNoiseDistortAmplitude.value = 0;
material.uniforms.uSineDistortAmplitude.value = 0;

sectionsColors = [
    '#000',
    'rgb(141, 175, 181)',
    'rgb(242, 122, 103)',
    'rgb(55, 164, 161)',
    'rgb(157, 29, 66)',
    'rgb(60, 81, 143)',
    'rgb(5, 71, 77)',
    'rgb(61, 23, 80)',
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
            else fill = sectionsColors[i];

            var text = new Blotter.Text(
                distor.innerHTML,
                Object.assign({ fill: fill }, distor.dataset)
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
                    .item(0).style.backgroundColor = sectionsColors[i];
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
