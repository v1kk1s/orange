import View from '../views/ContactsView.js';
import $ from '../../../node_modules/jquery/dist/jquery.min.js';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }

  render () {
    return this.view.render();
  }
}