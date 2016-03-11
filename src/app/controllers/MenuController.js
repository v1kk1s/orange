import View from '../views/MenuView';

export default class HeaderController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }

  render () {
    return this.view.render();
  }
}