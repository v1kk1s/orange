
export default class MenuView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }


  render () {
    this.content = `
			<div class="menu">

			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
