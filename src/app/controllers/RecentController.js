import View from '../views/RecentView';
import Router from '../router/router';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.router = new Router(document.getElementById('app'));
    this.render();

    this.startX = null;
    this.endX = null;
    this.initEvents();
  }

  initEvents() {
    let recent = document.querySelectorAll('.recent-contact-entry-wrap');
    let recentDelete = document.querySelectorAll('.recent-delete-contact');

    recent.forEach((contact) => {
      contact.addEventListener('touchstart', this.startSwipe);
      contact.addEventListener('touchend', this.endSwipe);
      contact.addEventListener('touchmove', this.midSwipe);

      contact.addEventListener('click', this.goToConversation.bind(this, contact));
    });

    recentDelete.forEach((del) => {
      del.addEventListener('click', this.deleteRecent)
    });
  }

  goToConversation(contact) {
    console.log(contact);
    this.router.render('/conversation', contact.id);
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
    this.parentElement.classList.add('deleted');
  }

  render () {
    return this.view.render();
  }
}