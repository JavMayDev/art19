function init00cover() {
    console.log('init 00!');
    toggleChart();
}

var dataset00 = [
    { amount: 238, label: 'line-a' },
    { amount: 207, label: 'line-b'  },
    { amount: 326, label: 'line-c'  },
    { amount: 426, label: 'line-d'  },
    { amount: 507, label: 'line-e'  },
    { amount: 609, label: 'line-f'  },
];

var chartWidth = document.getElementById('chart00-wrapper').offsetWidth
var chartHeight = document.getElementById('chart00-wrapper').offsetHeight
var chart00 = document.getElementById('chart00');
var barSection = chartHeight / dataset00.length;
var barStrokeWidth = barSection - 10;
var max = 1000;

function initChart() {
    dataset00.forEach(function (bar, i) {
        var line = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'line'
        );

        var y = i * barSection + barStrokeWidth / 2;
        var barlength = (bar.amount * chartWidth) / max;
        line.setAttribute('y1', y);
        line.setAttribute('y2', y);
        line.setAttribute('x1', 0);
        line.setAttribute('x2', barlength);
        line.setAttribute('stroke-dasharray', barlength);
        line.setAttribute('stroke-dashoffset', barlength);
        line.setAttribute('stroke-width', barStrokeWidth);
	line.setAttribute('stroke', sectionsColors.find(function(c){
	    if(c.sectionIndex == currentSection) return c
	}).color);
	line.setAttribute('id', bar.label)

        chart00.appendChild(line);
    });
}

// window.addEventListener('load', initChart)

function toggleChart () {
    console.log( 'toggleChart' )
    dataset00.forEach(function(bar) {
	console.log( 'on toggle chart forEach, bar: ', bar )
	anime({
	    targets: document.getElementById(bar.label),
	    strokeDashoffset: 0,
            duration: 3000,
            easing: 'cubicBezier(.5, 0, .5, 1)',
	})
    })
}
