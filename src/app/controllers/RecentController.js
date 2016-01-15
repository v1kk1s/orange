import View from '../views/RecentView';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }

  render () {
    return this.view.render();
  }
}