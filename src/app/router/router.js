import Header from '../controllers/HeaderController';
import Login from '../controllers/LoginController';
import Recent from '../controllers/RecentController';
import Contacts from '../controllers/ContactsController';
import Menu from '../controllers/MenuController';

export default class Router {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	run () {
		this.render();
	}

	render () {
		// login page
		//new Login(this.container);

		//recent page
		//new Menu(this.container);
		//new Header(this.container);
		//new Recent(this.container);

		//contacts page
		new Header(this.container);
		new Menu(this.container);
		new Contacts(this.container);
	}
}