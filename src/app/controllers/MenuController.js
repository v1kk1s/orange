import View from '../views/MenuView';
import Router from '../router/router';
import MenuItems from '../models/menuItems.js';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';


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

    menuLinks.forEach((link) => {
      link.addEventListener('click', this.renderMenuPage.bind(this, link));
    });


    $('#app')
      .on('touchstart', this.startSwipe)
      .on('touchend', this.endSwipe)
      .on('touchmove', this.midSwipe);
  }

  startSwipe(e) {
    this.startX = e.originalEvent.touches[0].pageX;
  }

  endSwipe() {
    if (this.startX < this.endX  && this.startX < 50)
      $(this).find('.menu').toggleClass('menu-open');


    if (this.startX > this.endX  && this.startX < 500)
      $(this).find('.menu').toggleClass('menu-open');
  }

  midSwipe(e) {
    this.endX = e.originalEvent.touches[0].pageX;
  }

  renderMenuPage(link) {
    this.router.render(link.dataset.link);
  }

  render () {
    return this.view.render();
  }
}