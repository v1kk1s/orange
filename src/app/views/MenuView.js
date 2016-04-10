import MenuItems from '../models/menuItems.js';

export default class MenuView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.menuItems = new MenuItems().menuItems;
  }


  render () {
    this.content = `
			<div class="menu">

        <div class="menu-avatar-wrap">
          <div class="menu-user-info">
            <div class="menu-avatar"></div>
            <p class="menu-name">Kate Mitty</p>
          </div>
        </div>

        <div class="menu-list-wrap">
          <ul>
            ${this.menuItems.map((item) => {
              return(`<li class="menu-list-item"><a href=${item.link} class=${item.iconClass}>${item.title}</a></li>`)
            }).join('')}
          </ul>

          <div class="menu-logout">Log out</div>
        </div>

			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
