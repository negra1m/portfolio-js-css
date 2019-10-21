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
let infoArray = document.querySelectorAll('.projectLink');

chartsArray.forEach(function(elem) {
	elem.addEventListener('mouseenter', function(event) {
		let caller = event.toElement.innerHTML;
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

infoArray.forEach(function(elem) {
	elem.addEventListener('mouseenter', function(event) {
		let caller = event.toElement.innerHTML;
		dataChange(caller);
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

function dataChange(callerId) {
	const caller = document.getElementById(callerId.toLowerCase());
	infoArray.forEach(function(elem) {
		const e = elem.innerHTML;
		const elementInvisible = document.getElementById(e.toLowerCase());
		elementInvisible.classList.remove('-visible');
	});
	caller.classList.add('-visible');
}

function checkValidators(){
	let name = document.querySelector('#name').value;
	let subject = document.querySelector('#subject').value;
	let email = document.querySelector('#email').value;
	let message = document.querySelector('#message').value;
	console.log(name, subject, email, message);
	return name !== '' && subject !== '' && email !== '' && message !== ''
}

function displayError(condition){
	condition ? 
	document.getElementById('error').classList.add('-visible') :
	document.getElementById('error').classList.remove('-visible')
}