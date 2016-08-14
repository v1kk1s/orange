import View from '../views/ContactsView.js';
import Router from '../router/router';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.router = new Router(document.getElementById('app'));
    this.render();
    this.initEvents()
  }

  initEvents() {
    let contacts = document.querySelectorAll('.contacts-item');

    contacts.forEach((contact) => {
      contact.addEventListener('click', this.goToConversation.bind(this, contact));
    });
  }

  goToConversation(contact) {
    this.router.render('/conversation', contact.id);
  }

  render () {
    return this.view.render();
  }
}