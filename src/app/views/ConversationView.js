import ContactsModel from '../models/contacts';

export default class ConversationView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.contacts = new ContactsModel().contacts;
  }

  getIcon(id) {
    return this.contacts.filter((contact) => {
      return contact.id == id;
    });
  }


  render (messages) {
    this.content =  messages.length ? `
			<div class="convers list-page">
        ${messages.map((msg) => {
          if(msg.userId == 999) {
            return (`
                  <div class="convers-wrap convers-me">
                    <div class="convers-msg">${msg.message}</div>
                    <div class="convers-date">${msg.time.getHours()}:${msg.time.getMinutes()}</div>
                  </div>
                `);
          } else {
            let icon = this.getIcon(msg.userId)[0].icon;
            return (`
                  <div class="convers-wrap convers-other">
                    <img src="../public/img/${icon}" class="convers-img"/img>
                    <div class="convers-msg">${msg.message}</div>
                    <div class="convers-date">${msg.time.getHours()}:${msg.time.getMinutes()}</div>
                  </div>
                `);
          }

    }).join('')}
			</div>
		` : `
      <div class="convers list-page">
        <div class="convers-none convers-msg">
            No messages in your conversation history :( <br/>
            Start messaging now!
         </div>
      </div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
