colors = {
	red: '#db5e5e',
	green: '#72ea7e',
	blue: '#50a9cb'
};

data = {
	html: {
		datasets: [
			{
				data: [50, 30, 20],
				backgroundColor: [colors.red, colors.green, colors.blue],
				borderColor: [colors.red, colors.green, colors.blue],
				borderWidth: 1
			}
		],
		labels: ['Layouts', 'HTML5', 'Performance'],
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	},
	js: {
		datasets: [
			{
				data: [50, 20, 30],
				backgroundColor: [colors.red, colors.green, colors.blue],
				borderColor: [colors.red, colors.green, colors.blue],
				borderWidth: 1
			}
		],
		labels: ['ES6', 'RX', 'Funções Nativas'],
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	},
	css: {
		datasets: [
			{
				data: [50, 20, 30],
				backgroundColor: [colors.red, colors.green, colors.blue],
				borderColor: [colors.red, colors.green, colors.blue],
				borderWidth: 1
			}
		],
		labels: ['Flex', 'Animations', 'SaaS'],
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	},
	ux: {
		datasets: [
			{
				data: [60, 40],
				backgroundColor: [colors.red, colors.green, colors.blue],
				borderColor: [colors.red, colors.green, colors.blue],
				borderWidth: 1
			}
		],
		labels: ['Design Thinking', 'Prototipagem'],
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	},
	angular: {
		datasets: [
			{
				data: [50, 20, 30],
				backgroundColor: [colors.red, colors.green, colors.blue],
				borderColor: [colors.red, colors.green, colors.blue],
				borderWidth: 1
			}
		],
		labels: ['Angular 8', 'TS', 'Componentização'],
		options: {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	}
};
