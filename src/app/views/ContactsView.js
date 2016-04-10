//import RecentModel from '../models/recent.js';

export default class ContactsView {
  constructor (container) {
    this.container = container;
    this.content = null;
    //this.recentContacts = new RecentModel().recent;
  }

  render () {
    this.content = `
			<div class="contacts">

			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
