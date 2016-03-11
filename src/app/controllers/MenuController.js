import View from '../views/MenuView';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';


export default class HeaderController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.initEvents();
  }

  initEvents() {
    $('#app')
      .on('touchstart', this.startSwipe)
      .on('touchend', this.endSwipe)
      .on('touchmove', this.midSwipe);
  }

  startSwipe(e) {
    this.startX = e.originalEvent.touches[0].pageX;
  }

  endSwipe(e) {
    if (this.startX < this.endX  && this.startX < 50)
      $(this).find('.menu').toggleClass('menu-open');


    if (this.startX > this.endX  && this.startX < 500)
      $(this).find('.menu').toggleClass('menu-open');
  }

  midSwipe(e) {
    this.endX = e.originalEvent.touches[0].pageX;
  }

  render () {
    return this.view.render();
  }
}