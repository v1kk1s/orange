import View from '../views/ConversationView.js';
import MessagesModel from '../models/messages';
import ContactsModel from '../models/contacts';

export default class ConversationController {
  constructor (container) {
    this.view = new View(container);
    this.allMessages = new MessagesModel().messages;
    this.contacts = new ContactsModel().contacts;
    this.convId = history.state.convId;
    this.messages = this.getMessages();
    this.conversationName = this.getConversationName();
    this.render();
    this.initEvents();
  }

  initEvents() {
    document.getElementById('headerTitle').innerHTML = this.conversationName;
  }

  getMessages() {
    let allMsgsInConv =  this.allMessages.filter((msg) => {
      return msg.convId === this.convId;
    });

    return allMsgsInConv.sort((a, b) => {
      return a.time - b.time;
    });
  }

  getConversationName() {
     return this.contacts.filter((contact) => {
      return contact.id == this.convId;
    })[0].name;
  }


  render () {
    return this.view.render(this.messages);
  }
}