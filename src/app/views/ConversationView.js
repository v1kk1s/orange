export default class ConversationView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }


  render () {
    this.content = `
			<div class="convers list-page">

			<div class="convers-msg convers-me"></div>
			<div class="convers-msg convers-other"></div>


			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
