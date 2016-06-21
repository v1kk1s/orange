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

          <div class="groups-item">
            <div class="groups-img default">
              <div class="groups-counter">4</div>
            </div>
            <div class="groups-name">Friends</div>
          </div>

        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}