import ContactsModel from '../models/contacts';

export default class NewGroupView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.contacts = new ContactsModel().contacts;
  }

  getItems(item) {
    return `
      <div class="new-group-contact">
        <input type='radio' class="new-group-membership-indicator" value=${item.id} />
        <div class="new-group-added"></div>
        <div class="new-group-contact-info ${item.online ? 'online' : ''} ">
        <img src="public/img/${item.icon}" class='new-group-contact-img' alt="profile icon"/>
        <p class="new-group-contact-name">${item.name}</p>
        </div>
      </div>
    `
  }

  render () {

    this.content = `

      <div class="new-group list-page">

        <form id='addGroup'>

          <div class="new-group-create">
            <div class="new-group-info-wrap">
              <div class="new-group-img"></div>
              <input type="text" class="new-group-input" placeholder="Group name" id="groupName">
            </div>

            <div class="new-group-instructions">
              <p class="new-group-set-photo">Set Group Photo</p>
              <p class="new-group-add-people">
                Add people to you group
                <span class="new-group-counter"> <span id="newGroupCounter">0</span>/100</span>
              </p>
              <p class="new-group-members" id="newGroupMember"></p>
              <button class="new-group-submit" type="submit">Create group</button>
            </div>
          </div>

          <div class="new-group-contacts-list">
            ${this.contacts.map(this.getItems.bind(this)).join('')}
          </div>

        </form>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}