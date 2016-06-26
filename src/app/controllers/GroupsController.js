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
    document.getElementById('addNewGroup').addEventListener('click', this.goToNewGroup.bind(this))
  }

  goToNewGroup() {
    this.router.render('/group');
  }

  render () {
    return this.view.render();
  }
}