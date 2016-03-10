import View from '../views/RecentView';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.initEvents();
  }

  initEvents() {
    $('.recent-contact-entry-wrap').on('click', this.handleSwipe);
  }

  handleSwipe() {
    $(this).toggleClass('delete');
  }

  render () {
    return this.view.render();
  }
}