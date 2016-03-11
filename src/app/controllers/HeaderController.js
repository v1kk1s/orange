import View from '../views/HeaderView';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class HeaderController {
	constructor (container) {
		this.view = new View(container);
		this.render();

		this.initEvents();
	}

	initEvents() {
		$('#header-search-icon').on('click', this.toggleSearch);
		$('.nav-icon').on('click', this.openMenu);
	}

	toggleSearch () {
		$('.header-search').slideToggle(200);
		setTimeout(() => {
			$('.header-search-field').slideToggle(200);
		}, 100);
	}

	openMenu() {
		$('.menu').toggleClass('menu-open');
	}

	render () {
		return this.view.render();
	}
}