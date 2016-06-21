import View from '../views/GroupsView';

export default class GroupsController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }

  render () {
    return this.view.render();
  }
}