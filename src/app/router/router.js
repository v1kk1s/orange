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
		console.log(this.routes);
	}

	getCurrentRoute() {
		return window.location.href.slice(21);
	}

	run () {
		let currentURL = this.getCurrentRoute();
		this.route('/', [Login]);
		this.route('/recent', [Menu, Header, Recent]);
		this.render(currentURL);
	}

	render (currentURL) {
		this.routes[currentURL].content.forEach((el)=> {
			return (new el(this.container));
		});


		// login page
		//new Login(this.container);

		//recent page
		//new Menu(this.container);
		//new Header(this.container);
		//new Recent(this.container);

		//contacts page
		//new Header(this.container);
		//new Menu(this.container);
		//new Contacts(this.container);

		//new group
		//new Menu(this.container);
		//new NewGroup(this.container);

	}
}