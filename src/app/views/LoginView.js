export default class LoginView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class="login" id="loginPage">
				I R login!
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}