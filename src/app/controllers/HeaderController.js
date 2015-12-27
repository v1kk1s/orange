import View from '../views/HeaderView';

export default class HeaderController {
	constructor (container) {
		this.view = new View(container);

		this.render();
	}

	render () {
		return this.view.render();
	}
}