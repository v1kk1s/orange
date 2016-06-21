import ContactsModel from '../models/contacts.js';

export default class ContactsView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.contacts = new ContactsModel().contacts;
  }

  render () {
    this.content = `
			<div class="contacts list-page">
        ${this.contacts.map((contact) => {
          return(`
            <div class="contacts-item ${contact.online ? 'contacts-online' : ''}">
               <div class="contacts-info">
                  <img
                 class="contacts-item-img"
                 src="../public/img/${contact.icon}"
                 alt="users photo"/>
                 <div class="contacts-name">${contact.name}</div>
               </div>

               <div class="contacts-group">
                 <div class="contacts-icon ${contact.group ? (`contacts-${contact.group}`) : ''}"></div>
                 <p class="contacts-item-group">${contact.group}</p>
               </div>
            </div>
          `)
        }).join('')}
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
