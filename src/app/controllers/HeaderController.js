import View from '../views/HeaderView';
import MenuItems from '../models/menuItems.js';
import Router from '../router/router';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class HeaderController {
	constructor (container) {
		this.view = new View(container);
		this.menuItems = new MenuItems().menuItems;
		this.router = new Router(document.getElementById('app'));
		this.render();

		this.initEvents();
	}

	initEvents() {
		$('#header-search-icon').on('click', this.toggleSearch);
		$('.nav-icon').on('click', this.openMenu);
		this.renderTitle();
	}

	renderTitle() {
		let title = document.getElementById('headerTitle');
		let current = this.router.getCurrentRoute();
		let currentHeader = this.menuItems.filter((item) => {
			return item.link == current;
		});
		title.innerHTML= currentHeader[0].title;
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