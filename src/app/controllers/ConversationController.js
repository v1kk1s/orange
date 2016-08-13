import View from '../views/ConversationView.js';
import MessagesModel from '../models/messages';

export default class ConversationController {
  constructor (container) {
    this.view = new View(container);
    this.allMessages = new MessagesModel().messages;
    this.convId = history.state.convId;
    this.messages = this.getMessages();
    this.render();
    this.initEvents();
  }

  initEvents() {
    let convId = history.state.convId;
  }

  getMessages() {
    let allMsgsInConv =  this.allMessages.filter((msg) => {
      return msg.convId === this.convId;
    });

    return allMsgsInConv.sort((a, b) => {
      return a.time - b.time;
    });
  }


  render () {
    return this.view.render(this.messages);
  }
}