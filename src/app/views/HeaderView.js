export default class HeaderView {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	render () {

		this.content = `
			<header id="header">

			</header>
		`;

		this.container.insertAdjacentHTML('afterbegin', this.content );
	}
}