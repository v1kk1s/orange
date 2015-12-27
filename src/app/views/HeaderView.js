export default class HeaderView {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	render () {

		this.content = `
			<header id="header">
				I R Header!
			</header>
		`;

		this.container.insertAdjacentHTML('afterbegin', this.content );
	}
}