import Header from '../controllers/HeaderController';
import Messages from '../controllers/MessagesController';

export default class Router {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	run () {
		this.render();
	}

	render () {
		new Header(this.container);

		this.content = document.createElement('div');
		this.content.id = 'app-content';
		this.container.appendChild(this.content);

		this.content.innerHTML = `
			<p>
				I R Router Content!
			</p>
		`;
	}
}