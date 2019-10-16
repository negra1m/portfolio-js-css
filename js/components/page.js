document.addEventListener('scroll', checkComponents);

function checkComponents() {
	const components = {
		items: document.getElementById('items'),
		header: document.getElementById('header'),
		menu: document.getElementById('menu'),
		data: document.getElementById('data')
	};
	checkScroll(components);
}

function checkScroll(components) {
	const goToTop = document.getElementById('top');

	if (window.scrollY >= 157) {
		components.items.classList.remove('invisible');
		components.header.classList.add('resize-on');
		components.menu.classList.add('display-menu');
		components.data.classList.add('invisible');
	} else {
		components.items.classList.add('invisible');
		components.header.classList.remove('resize-on');
		components.menu.classList.remove('display-menu');
		components.data.classList.remove('invisible');
	}

	if (window.scrollY > 600) {
		goToTop.classList.add('visible');
		goToTop.classList.remove('invisible');
	} else {
		goToTop.classList.add('invisible');
		goToTop.classList.remove('visible');
	}
}
