import ContactsModel from '../models/contacts';

export default class GroupsView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.contacts = new ContactsModel().contacts;
  }

  render () {

    this.content = `

      <div>

        <div class="groups list-page">


        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}