import View from '../views/MenuView';
import Router from '../router/router';
import MenuItems from '../models/menuItems.js';


export default class HeaderController {
  constructor (container) {
    this.view = new View(container);
    this.menuItems = new MenuItems().menuItems;
    this.router = new Router(document.getElementById('app'));
    this.render();

    this.initEvents();
  }

  initEvents() {
    let menuLinks = document.querySelectorAll('.menu-list-item');
    let app = document.getElementById('app');

    menuLinks.forEach((link) => {
      link.addEventListener('click', this.renderMenuPage.bind(this, link));
    });

    app.addEventListener('touchstart', this.startSwipe.bind(this));
    app.addEventListener('touchend', this.endSwipe.bind(this));
    app.addEventListener('touchmove', this.midSwipe.bind(this));
  }

  startSwipe(e) {
    this.startX = e.touches[0].pageX;
  }

  endSwipe() {
    if (this.startX < this.endX  && this.startX < 50){
      document.getElementById('menu').classList.add('menu-open');
    }


    if (this.startX > this.endX  && this.startX < 500) {
      document.getElementById('menu').classList.remove('menu-open');
    }
  }

  midSwipe(e) {
    this.endX = e.touches[0].pageX;
  }

  renderMenuPage(link) {
    this.router.render(link.dataset.link);
  }

  render () {
    return this.view.render();
  }
}