import Header from '../controllers/HeaderController';
import Login from '../controllers/LoginController';
import Recent from '../controllers/RecentController';
import Contacts from '../controllers/ContactsController';
import NewGroup from '../controllers/NewGroupController';
import Menu from '../controllers/MenuController';

export default class Router {
	constructor (container) {
		this.container = container;
		this.content = null;
		this.routes = [];
	}

	route (path, content) {
		this.routes[path] = {content: content};
	}

	getCurrentRoute() {
		return location.pathname || '/';
	}

	run () {
		let currentURL = this.getCurrentRoute();
		this.render(currentURL);
	}

	go(route) {
		this.container.innerHTML= '';
		history.pushState({}, route, route);

		this.routes[route].content.forEach( (el) => {
			return (new el(this.container));
		} );
	}

	render (currentURL) {
		this.route('/', [Login]);
		this.route('/recent', [Menu, Header, Recent]);
		this.route('/contacts', [Menu, Header, Contacts]);
		this.route('/group', [Menu, NewGroup ]);

		this.go(currentURL);
		console.log(this.routes);
	}
}