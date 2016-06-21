import GroupModel from '../models/newGroup';

export default class NewGroupView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.groupContacts = new GroupModel().contacts;
  }

  getItems(item) {
    return `
      <div class="new-group-contact">
        <div class="new-group-membership-indicator ${item.isInGroup ? 'is-member' : ''}"></div>
        <div class="new-group-contact-info ${item.online ? 'online' : ''}">
        <img src="public/img/${item.icon}" class='new-group-contact-img' alt="profile icon"/>
        <p class="new-group-contact-name">${item.name}</p>
        </div>
      </div>
    `
  }

  render () {

    this.content = `

      <div>
        <!--<header class="header">-->

          <!--<div class="header-top-wrap">-->
            <!--<div class="header-back header-new-group-header-btns">Back</div>-->
            <!--<div class="header-title">New Group</div>-->
            <!--<div class="header-create header-new-group-header-btns">Create</div>-->
        <!--</header>-->

        <div class="new-group list-page">

          <div class="new-group-create">
            <div class="new-group-info-wrap">
              <div class="new-group-img"></div>
              <input type="text" class="new-group-input" placeholder="Group name">
            </div>

            <div class="new-group-instructions">
              <p class="new-group-set-photo">Set Group Photo</p>
              <p class="new-group-add-people">Add people to you group  <span class="new-group-counter">2/100</span></p>
              <p class="new-group-members">Name of  contact, Name of  contact,</p>
            </div>
          </div>

          <div class="new-group-contacts-list">
            ${this.groupContacts.map(this.getItems.bind(this)).join('')}
          </div>

        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}