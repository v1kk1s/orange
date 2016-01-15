require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsHeaderView = require('../views/HeaderView');

var _viewsHeaderView2 = _interopRequireDefault(_viewsHeaderView);

var HeaderController = (function () {
	function HeaderController(container) {
		_classCallCheck(this, HeaderController);

		this.view = new _viewsHeaderView2['default'](container);
		this.render();
	}

	_createClass(HeaderController, [{
		key: 'render',
		value: function render() {
			return this.view.render();
		}
	}]);

	return HeaderController;
})();

exports['default'] = HeaderController;
module.exports = exports['default'];

},{"../views/HeaderView":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsLoginView = require('../views/LoginView');

var _viewsLoginView2 = _interopRequireDefault(_viewsLoginView);

var LoginController = (function () {
  function LoginController(container) {
    _classCallCheck(this, LoginController);

    this.view = new _viewsLoginView2['default'](container);
    this.render();
  }

  _createClass(LoginController, [{
    key: 'render',
    value: function render() {
      return this.view.render();
    }
  }]);

  return LoginController;
})();

exports['default'] = LoginController;
module.exports = exports['default'];

},{"../views/LoginView":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersHeaderController = require('../controllers/HeaderController');

var _controllersHeaderController2 = _interopRequireDefault(_controllersHeaderController);

var _controllersLoginController = require('../controllers/LoginController');

var _controllersLoginController2 = _interopRequireDefault(_controllersLoginController);

var Router = (function () {
	function Router(container) {
		_classCallCheck(this, Router);

		this.container = container;
		this.content = null;
	}

	_createClass(Router, [{
		key: 'run',
		value: function run() {
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			//new Header(this.container);
			new _controllersLoginController2['default'](this.container);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"../controllers/HeaderController":1,"../controllers/LoginController":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HeaderView = (function () {
	function HeaderView(container) {
		_classCallCheck(this, HeaderView);

		this.container = container;
		this.content = null;
	}

	_createClass(HeaderView, [{
		key: 'render',
		value: function render() {

			this.content = '\n\t\t\t<header id="header">\n\n\t\t\t</header>\n\t\t';

			this.container.insertAdjacentHTML('afterbegin', this.content);
		}
	}]);

	return HeaderView;
})();

exports['default'] = HeaderView;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LoginView = (function () {
  function LoginView(container) {
    _classCallCheck(this, LoginView);

    this.container = container;
    this.content = null;
  }

  _createClass(LoginView, [{
    key: 'render',
    value: function render() {

      this.content = '\n\t\t\t<div class="login" id="loginPage">\n        <a href="#" class="login-logo"></a>\n\n        <div class="login-form-wrap">\n          <h1>Welcome to orange chat</h1>\n\n          <form action="#">\n            <input type="text" class="login-username" placeholder="Username"/>\n            <input type="password" class="login-password" placeholder="Password"/>\n\n            <a href="#" class="login-pswd-forget"> Forgot your password?</a>\n\n            <a href="#" class="login-btn"> <span class="vert-align">Log in</span></a>\n          </form>\n        </div>\n\t\t\t</div>\n\t\t';

      this.container.insertAdjacentHTML('beforeend', this.content);
    }
  }]);

  return LoginView;
})();

exports['default'] = LoginView;
module.exports = exports['default'];

},{}],"start":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = start;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerRouter = require('./router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

function start() {
	var router = new _routerRouter2['default'](document.getElementById('app'));
	router.run();
}

module.exports = exports['default'];

},{"./router/router":3}]},{},[1,2,"start",3,4,5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC9jb250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvcm91dGVyL3JvdXRlci5qcyIsIi92YXIvd3d3L29yYW5nZS9zcmMvYXBwL3ZpZXdzL0hlYWRlclZpZXcuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC92aWV3cy9Mb2dpblZpZXcuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OytCQ0FpQixxQkFBcUI7Ozs7SUFFakIsZ0JBQWdCO0FBQ3hCLFVBRFEsZ0JBQWdCLENBQ3ZCLFNBQVMsRUFBRTt3QkFESixnQkFBZ0I7O0FBRW5DLE1BQUksQ0FBQyxJQUFJLEdBQUcsaUNBQVMsU0FBUyxDQUFDLENBQUM7QUFDaEMsTUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ2Q7O2NBSm1CLGdCQUFnQjs7U0FNN0Isa0JBQUc7QUFDVCxVQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDMUI7OztRQVJtQixnQkFBZ0I7OztxQkFBaEIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzhCQ0ZwQixvQkFBb0I7Ozs7SUFFaEIsZUFBZTtBQUN0QixXQURPLGVBQWUsQ0FDckIsU0FBUyxFQUFFOzBCQURMLGVBQWU7O0FBRWhDLFFBQUksQ0FBQyxJQUFJLEdBQUcsZ0NBQVMsU0FBUyxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2Y7O2VBSmtCLGVBQWU7O1dBTTNCLGtCQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzNCOzs7U0FSa0IsZUFBZTs7O3FCQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MkNDRmpCLGlDQUFpQzs7OzswQ0FDbEMsZ0NBQWdDOzs7O0lBRTdCLE1BQU07QUFDZCxVQURRLE1BQU0sQ0FDYixTQUFTLEVBQUU7d0JBREosTUFBTTs7QUFFekIsTUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsTUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDcEI7O2NBSm1CLE1BQU07O1NBTXRCLGVBQUc7QUFDTixPQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDZDs7O1NBRU0sa0JBQUc7O0FBRVQsK0NBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQzFCOzs7UUFibUIsTUFBTTs7O3FCQUFOLE1BQU07Ozs7Ozs7Ozs7Ozs7O0lDSE4sVUFBVTtBQUNsQixVQURRLFVBQVUsQ0FDakIsU0FBUyxFQUFFO3dCQURKLFVBQVU7O0FBRTdCLE1BQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE1BQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0VBQ3BCOztjQUptQixVQUFVOztTQU12QixrQkFBRzs7QUFFVCxPQUFJLENBQUMsT0FBTywwREFJWCxDQUFDOztBQUVGLE9BQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztHQUMvRDs7O1FBZm1CLFVBQVU7OztxQkFBVixVQUFVOzs7Ozs7Ozs7Ozs7OztJQ0FWLFNBQVM7QUFDaEIsV0FETyxTQUFTLENBQ2YsU0FBUyxFQUFFOzBCQURMLFNBQVM7O0FBRTFCLFFBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFFBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0dBQ3JCOztlQUprQixTQUFTOztXQU1yQixrQkFBRzs7QUFFUixVQUFJLENBQUMsT0FBTyxtbEJBaUJiLENBQUM7O0FBRUEsVUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0tBQy9EOzs7U0E1QmtCLFNBQVM7OztxQkFBVCxTQUFTOzs7Ozs7Ozs7cUJDRU4sS0FBSzs7Ozs0QkFGVixpQkFBaUI7Ozs7QUFFckIsU0FBUyxLQUFLLEdBQUk7QUFDaEMsS0FBSSxNQUFNLEdBQUcsOEJBQVcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hELE9BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXdzL0hlYWRlclZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJDb250cm9sbGVyIHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMudmlldyA9IG5ldyBWaWV3KGNvbnRhaW5lcik7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmlldy5yZW5kZXIoKTtcblx0fVxufSIsImltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXdzL0xvZ2luVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcbiAgICB0aGlzLnZpZXcgPSBuZXcgVmlldyhjb250YWluZXIpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiB0aGlzLnZpZXcucmVuZGVyKCk7XG4gIH1cbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0hlYWRlckNvbnRyb2xsZXInO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbnRyb2xsZXJzL0xvZ2luQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHR9XG5cblx0cnVuICgpIHtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHQvL25ldyBIZWFkZXIodGhpcy5jb250YWluZXIpO1xuXHRcdG5ldyBMb2dpbih0aGlzLmNvbnRhaW5lcik7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJWaWV3IHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0dGhpcy5jb250ZW50ID0gYFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRgO1xuXG5cdFx0dGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy5jb250ZW50ICk7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpblZpZXcge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibG9naW5cIiBpZD1cImxvZ2luUGFnZVwiPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibG9naW4tbG9nb1wiPjwvYT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9ybS13cmFwXCI+XG4gICAgICAgICAgPGgxPldlbGNvbWUgdG8gb3JhbmdlIGNoYXQ8L2gxPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJsb2dpbi11c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIi8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJsb2dpbi1wYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIi8+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2dpbi1wc3dkLWZvcmdldFwiPiBGb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2dpbi1idG5cIj4gPHNwYW4gY2xhc3M9XCJ2ZXJ0LWFsaWduXCI+TG9nIGluPC9zcGFuPjwvYT5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jb250ZW50ICk7XG4gIH1cbn0iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0ICgpIHtcblx0bGV0IHJvdXRlciA9IG5ldyBSb3V0ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblx0cm91dGVyLnJ1bigpO1xufSJdfQ==

//# sourceMappingURL=all.js.map