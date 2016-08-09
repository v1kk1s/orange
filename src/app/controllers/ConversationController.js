import View from '../views/ConversationView.js';

export default class ConversationController {
  constructor (container) {
    this.view = new View(container);
    this.render();
    this.initEvents();
  }

  initEvents() {
    let convId = history.state.convId;
    console.log(convId);

  }

  render () {
    return this.view.render();
  }
}