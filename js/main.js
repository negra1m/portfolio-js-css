var imported = document.createElement('script');
imported.src = 'js/modules/data/data.js';
document.head.appendChild(imported);
/**
 * data object importado como 'data'.
 * Modulos nao foram usados por que nao funcionam localmente devido
 * a politica de Croos Origin CORS do Chrome.
 */

/**
 * Event Listeners
 */
let chartsArray = document.querySelectorAll('.chartLink');

chartsArray.forEach(function(elem) {
	elem.addEventListener('mouseenter', function(event) {
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

let infoArray = document.querySelectorAll('.projectLink');

infoArray.forEach(function(elem) {
	elem.addEventListener('mouseenter', function(event) {
		const caller = event.toElement.innerHTML;
		switch (caller) {
			case 'WEBSITES':
				dataChange(caller);
				break;
			case 'IONIC APPS':
				dataChange(caller);
				break;
			case 'ANGULAR':
				dataChange(caller);
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
	let chartDiv = document.getElementById('chart');
	chartDiv.innerHTML = '';
	const chart = new Chart(chartDiv, {
		type: 'pie',
		data: caller,
		options: options
	});
}

function dataChange(caller) {}
