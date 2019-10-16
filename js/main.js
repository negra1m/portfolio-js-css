var imported = document.createElement('script');
imported.src = 'js/modules/data/data.js';
document.head.appendChild(imported);

let chartsArray = document.querySelectorAll('.chartLink');

chartsArray.forEach(function(elem) {
	elem.addEventListener('click', function(event) {
		const caller = event.toElement.innerHTML;
		switch (caller) {
			case 'HTML':
				buildChart(data.html);
				break;
			case 'JS':
				buildChart(data.js);
				break;
			case 'CSS':
				buildChart(data.css);
				break;
			case 'UX':
				buildChart(data.ux);
				break;
			case 'ANGULAR':
				buildChart(data.angular);
				break;
		}
	});
});

function buildChart(caller) {
	const options = {
		tooltips: {
			enabled: false
		}
	};
	var chartDiv = document.getElementById('chart');
	chartDiv.innerHTML = '';
	var chart = new Chart(chartDiv, {
		type: 'pie',
		data: caller,
		options: options
	});
}
