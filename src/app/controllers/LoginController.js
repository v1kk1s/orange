import View from '../views/LoginView';
import LoginModel from '../models/login';
import Router from '../router/router';

export default class LoginController {
  constructor (container) {
    this.view = new View(container);
    this.credentials = new LoginModel().credentials;
    this.router = new Router(document.getElementById('app'));
    this.render();

    this.initEvents();
  }

  initEvents() {
    document.getElementById('login-submit').addEventListener('click', this.validateLogin.bind(this));
  }

  validateLogin() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    let valid = this.credentials.some((user)=>{
      return user.username === login && user.password === password;
    });

    if (valid) {
      this.router.render('/recent');
    }
  }

  render () {
    return this.view.render();
  }
}