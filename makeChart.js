
// settings 
//     color: string
//     max: num (amount),
//     interval: num (amount),
//     svg: element
//     labelDiv: element

// dataset: array of objects with
//     label: string,
//     amount: number

function makeChart (settings, dataset) {

    var chartWidth = settings.svg.parentElement.offsetWidth
    var chartHeight = settings.svg.parentElement.offsetHeight * 0.9 // let 10% to x labels

    var intervalWidth = settings.interval * chartWidth / settings.max
    var xlabels = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'text'
        );
    xlabels.setAttribute('x', 0)
    xlabels.setAttribute('y', chartHeight)
    settings.svg.appendChild(xlabels)
    for(var i = 0; i < settings.max / settings.interval; i++) {
        var line = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'line'
        );
	var x = (i * intervalWidth) + 1
	line.setAttribute('x1', x)
	line.setAttribute('x2', x)
	line.setAttribute('y1', 0)
	line.setAttribute('y2', chartHeight)
	line.setAttribute('stroke', 'black')
	line.setAttribute('stroke-width', 1)

	settings.svg.appendChild(line)

        var xlabel = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'tspan'
        );

	xlabel.setAttribute('x', x)
	xlabel.setAttribute('y', chartHeight)
	xlabel.innerHTML = i * settings.interval

	xlabels.appendChild(xlabel)
	
    }

    var barSectionHeight = chartHeight / dataset.length
    var barHeight = barSectionHeight * 0.7
    var bars = []

    console.log( 'barSectionHeight:', barSectionHeight )

    dataset.forEach(function(bar, i){
	var y = i * barSectionHeight + (barHeight / 2)
	var barLength = (bar.amount * chartWidth) / settings.max;

        var line = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'line'
        );
	line.setAttribute('y1', y)
	line.setAttribute('y2', y)
	line.setAttribute('x1', 0)
	line.setAttribute('x2', barLength)
        line.setAttribute('stroke-dasharray', barLength);
        line.setAttribute('stroke-dashoffset', barLength);
        line.setAttribute('stroke-width', barHeight);
	line.setAttribute('stroke', settings.color)

	bars.push({
	    line: line,
	    barLength: barLength
	})

	settings.svg.appendChild(line)

	var barLabel = document.createElement('span')
	barLabel.innerHTML = bar.label
	settings.labelDiv.appendChild(barLabel)
    })

    function toggleBars () {
	console.log( 'on toggleBars, bars: ', bars )
	bars.forEach(function(bar){
	    anime({
		targets: bar.line,
		strokeDashoffset: 0,
		duration: 3000,
		easing: 'cubicBezier(.5, 0, .5, 1)',
	    })
	})
    }

    return toggleBars

}
