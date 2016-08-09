import Header from '../controllers/HeaderController';
import Login from '../controllers/LoginController';
import Recent from '../controllers/RecentController';
import Contacts from '../controllers/ContactsController';
import NewGroup from '../controllers/NewGroupController';
import Groups from '../controllers/GroupsController';
import Conversation from '../controllers/ConversationController';
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

	go(route, convId) {
		let stateObj = convId ? {convId: convId} : {};
		this.container.innerHTML= '';

		history.pushState(stateObj, route, route);

		this.routes[route].content.forEach( (el) => {
			return (new el(this.container));
		} );
	}

	render (currentURL, convId) {
		this.route('/', [Login]);
		this.route('/recent', [Menu, Header, Recent]);
		this.route('/contacts', [Menu, Header, Contacts]);
		this.route('/group', [Menu, Header, NewGroup ]);
		this.route('/groups', [Menu, Header, Groups ]);
		this.route('/conversation', [Menu, Header, Conversation ]);

		this.go(currentURL, convId);
	}
}