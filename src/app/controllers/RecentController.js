import View from '../views/RecentView';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.startX = null;
    this.endX = null;
    this.initEvents();
  }

  initEvents() {
    $('.recent-contact-entry-wrap')
      .on('touchstart', this.startSwipe)
      .on('touchend', this.endSwipe)
      .on('touchmove', this.midSwipe);
    $('.recent-delete-contact').on('click', this.deleteRecent);
  }

  startSwipe(e) {
    this.startX = e.originalEvent.touches[0].pageX;
  }

  endSwipe(e) {
    if (this.startX > this.endX)
    $(this).toggleClass('delete');
    //console.log('>>>',  this.startX,   '>>>',  this.endX);
  }

  midSwipe(e) {
    this.endX = e.originalEvent.touches[0].pageX;
  }

  deleteRecent () {
    $(this).parent().slideUp();
  }

  render () {
    return this.view.render();
  }
}