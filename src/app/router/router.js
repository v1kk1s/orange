import Header from '../controllers/HeaderController';
import Login from '../controllers/LoginController';

export default class Router {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	run () {
		this.render();
	}

	render () {
		//new Header(this.container);
		new Login(this.container);
	}
}