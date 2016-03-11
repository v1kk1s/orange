
export default class MenuView {
  constructor (container) {
    this.container = container;
    this.content = null;
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
        

			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
