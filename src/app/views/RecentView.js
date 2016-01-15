export default class RecentView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class="recent">
        im recent
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
