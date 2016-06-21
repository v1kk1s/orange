export default class HeaderView {
	constructor (container) {
		this.container = container;
		this.content = null;
	}

	render () {

		this.content = `
			<header class="header">

				<div class="header-top-wrap">
					<div class="header-menu-wrap">
						<div class="nav-icon"> <div></div> </div>
					</div>

					<div class="header-title" id="headerTitle">  </div>

					<a href="#" type="submit" class="header-search-icon" id="header-search-icon"></a>
				</div>
				<form action="#" class="header-search">

						<input type="search" class="header-search-field" placeholder="Search"/>

				</form>
			</header>
		`;

		this.container.insertAdjacentHTML('afterbegin', this.content );
	}
}