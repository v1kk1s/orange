export default class LoginView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class="login" id="loginPage">
        <a href="#" class="login-logo"></a>

        <div class="login-form-wrap">
          <h1>Welcome to orange chat</h1>

          <form action="#">
            <input type="text" class="login-username" placeholder="Username"/>
            <input type="password" class="login-password" placeholder="Password"/>
          </form>
        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}