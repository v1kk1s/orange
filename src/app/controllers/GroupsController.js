import View from '../views/GroupsView';
import Router from '../router/router';

export default class GroupsController {
  constructor (container) {
    this.view = new View(container);
    this.router = new Router(document.getElementById('app'));
    this.render();

    this.initEvents();
  }

  initEvents() {
    let groups = document.querySelectorAll('.groups-item');
    groups.forEach((group) => {
      group.addEventListener('click', this.goToConversation.bind(this, group));
    });

    document.getElementById('addNewGroup').addEventListener('click', this.goToNewGroup.bind(this))
  }

  goToNewGroup() {
    this.router.render('/group');
  }

  goToConversation(group) {
    this.router.render('/conversation', group.id);
  }

  render () {
    return this.view.render();
  }
}