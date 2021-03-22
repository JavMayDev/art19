
var initialized03 = false

var sec03Chart1 = document.getElementById('sec03chart1')
var sec03chartLabelDiv1 = document.getElementById('sec03chartlabeldiv1')
var toggleBarsSec03Chart1
function initsec03 () {

    if(initialized03) return

    var dataset = [
	{ label: 'lorem', amount: 29 },
	{ label: 'ipsum', amount: 15 },
	{ label: 'dolor', amount: 63 },
	{ label: 'sit', amount: 43 },
	{ label: 'amet', amount: 55 },
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
	dataset
    )
    
    initialized03 = true
}
