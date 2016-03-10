import RecentModel from '../models/recent.js';

export default class RecentView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.recentContacts = new RecentModel().recent;
  }

  getItems(item) {
    return `
      <div class="recent-contact-entry-wrap">
        <div class="recent-contact">

          <div class="recent-contact-logo">
            <img src="public/img/${item.icon}" alt="profile icon"/>
          </div>

          <div class="recent-contact-caption">
            <p class="recent-contact-name"> ${item.name} </p>
            <p class="recent-contact-last-seen">${item.lastSeen}</p>
          </div>
        </div>

        <div class="recent-delete-contact">
          <div class="recent-delete-contact-icon"></div>
          <p class="recent-delete-contact-text">Delete</p>
        </div>
      </div>
    `
  }

  render () {
    this.content = `
			<div class="recent">
        ${this.recentContacts.map(this.getItems.bind(this)).join('')}
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
