import View from '../views/RecentView';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.startX = null;
    this.endX = null;
    this.initEvents();
  }

  initEvents() {
    let recent = document.querySelectorAll('.recent-contact-entry-wrap');
    let recentDelete = document.querySelectorAll('.recent-contact-entry-wrap');

    recent.forEach((contact) => {
      contact.addEventListener('touchstart', this.startSwipe);
      contact.addEventListener('touchend', this.endSwipe);
      contact.addEventListener('touchmove', this.midSwipe);
    });

    recentDelete.forEach((del) => {
      del.addEventListener('click', this.deleteRecent)
    });
  }

  startSwipe(e) {
    this.startX = e.touches[0].pageX;
  }

  endSwipe() {
    this.startX > this.endX
      ? this.classList.add('delete')
      : this.classList.remove('delete');
  }

  midSwipe(e) {
    this.endX = e.touches[0].pageX;
  }

  deleteRecent () {
    console.log('deleted');
    this.classList.add('deleted');
  }

  render () {
    return this.view.render();
  }
}