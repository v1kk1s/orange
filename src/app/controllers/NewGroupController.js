import View from '../views/NewGroupView';

export default class NewGroupController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }


  render () {
    return this.view.render();
  }
}