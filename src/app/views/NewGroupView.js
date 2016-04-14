export default class NewGroupView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `

      <div>
        <header class="header">

          <div class="header-top-wrap">
            <div class="header-back header-new-group-header-btns">Back</div>
            <div class="header-title">New Group</div>
            <div class="header-create header-new-group-header-btns">Create</div>
        </header>

        <div class="new-group">

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

            <div class="new-group-contact">
              <div class="new-group-membership-indicator"></div>
              <div class="new-group-contact-info">
                <div class="recent-contact-logo">
                  <img src="public/img/contact1.png" alt="profile icon"/>
                </div>
              </div>
            </div>

          </div>

        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}