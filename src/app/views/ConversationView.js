export default class ConversationView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }


  render () {
    this.content = `
			<div class="convers">


			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
