import View from '../views/ConversationView.js';
import MessagesModel from '../models/messages';
import ContactsModel from '../models/contacts';
import GroupsModel from '../models/groups';

export default class ConversationController {
  constructor (container) {
    this.view = new View(container);
    this.allMessages = new MessagesModel().messages;
    this.contacts = new ContactsModel().contacts;
    this.groups = new GroupsModel().groups;
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
     let contactName =  this.contacts.filter((contact) => {
      return contact.id == this.convId;
    });

    let groupName =  this.groups.filter((group) => {
      return group.id == this.convId;
    });

    return contactName.length ? contactName[0].name : groupName[0].name;
  }


  render () {
    return this.view.render(this.messages);
  }
}