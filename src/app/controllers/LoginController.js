import View from '../views/LoginView';

export default class LoginController {
  constructor (container) {
    this.view = new View(container);
    this.render();
  }

  render () {
    return this.view.render();
  }
}