export default class HeaderView {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	render () {

		this.content = `
			<header class="header">

				<div class="header-menu-wrap">
					<div class="nav-icon"> <div></div> </div>
				</div>

				<div class="header-title"> Recent </div>

				<form action="#" class="header-search">
					<div class="header-field-wrap">
						<input type="search" class="header-search-field" placeholder="Search"/>
					</div>
					<input type="submit" class="header-search-icon" value=""/>
				</form>
			</header>
		`;

		this.container.insertAdjacentHTML('afterbegin', this.content );
	}
}