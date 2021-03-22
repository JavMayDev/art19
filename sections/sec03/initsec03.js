
var initialized03 = false

var sec03Chart1 = document.getElementById('sec03chart1')
var sec03chartLabelDiv1 = document.getElementById('sec03chartlabeldiv1')
var toggleBarsSec03Chart1
var sec03Chart2 = document.getElementById('sec03chart2')
var sec03chartLabelDiv2 = document.getElementById('sec03chartlabeldiv2')
var toggleBarsSec03Chart2
function initsec03 () {

    if(initialized03) return

    // chart 1
    var dataset1 = [
	{ label: 'Intimidaci&oacute;n y hostigamiento', amount: 63 },
	{ label: 'Amenaza', amount: 52 },
	{ label: 'Remoci&oacute;n de contenido', amount: 19 },
	{ label: 'Dominios falsos o cuentas falsas', amount: 14 },
	{ label: 'Bloqueo o alteraci&oacute;n de contenido', amount: 11 },
	{ label: 'Acceso il&iacute;cito a cuentas en l&iacute;nea', amount: 13 },
	{ label: 'Ataques de denegaci&oacute;n de servicio (DoS, DDos)', amount: 9 },
	{ label: 'Uso ileg&iacute;timo del poder p&uacute;blico', amount: 8 },
	{ label: 'Vigilancia ilegal de comunicaciones', amount: 2 },
    ]

    toggleBarsSec03Chart1 = makeChart(
	{
	    color: sectionsColors.find(function(c){
		if(c.sectionIndex == currentSection) return c
	    }).color,
	    max: 65,
	    interval: 5,
	    svg: sec03Chart1,
	    labelDiv: sec03chartLabelDiv1
	},
	dataset1
    )

    // chart2
    var dataset2 = [
	{ label: 'Bloqueo o alteraci&oacute;n de informaci&oacute;n', amount: 37 },
	{ label: 'Intimidaci&oacute;n y hostigamiento', amount: 20 },
	{ label: 'Uso ileg&iacute;timo del poder p&uacute;blico', amount: 19 },
	{ label: 'Amenaza', amount: 13 },
	{ label: 'Ataque f&iacute;sico', amount: 10 },
	{ label: 'Privaci&oacute;n de la libertad', amount: 7 },
	{ label: 'Allanamiento', amount: 2 },
	{ label: 'Ataques de denegaci&oacute;n de servicio (DoS, DDos)', amount: 2 },
	{ label: 'Ataque a bienes materiales', amount: 1 },
    ]

    toggleBarsSec03Chart2 = makeChart(
	{
	    color: sectionsColors.find(function(c){
		if(c.sectionIndex == currentSection) return c
	    }).color,
	    max: 40,
	    interval: 5,
	    svg: sec03Chart2,
	    labelDiv: sec03chartLabelDiv2
	},
	dataset2
    )
    
    initialized03 = true
}
