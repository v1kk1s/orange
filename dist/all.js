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

},{"../views/HeaderView":5}],2:[function(require,module,exports){
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

},{"../views/LoginView":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsRecentView = require('../views/RecentView');

var _viewsRecentView2 = _interopRequireDefault(_viewsRecentView);

var RecentController = (function () {
  function RecentController(container) {
    _classCallCheck(this, RecentController);

    this.view = new _viewsRecentView2['default'](container);
    this.render();
  }

  _createClass(RecentController, [{
    key: 'render',
    value: function render() {
      return this.view.render();
    }
  }]);

  return RecentController;
})();

exports['default'] = RecentController;
module.exports = exports['default'];

},{"../views/RecentView":7}],4:[function(require,module,exports){
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

var _controllersRecentController = require('../controllers/RecentController');

var _controllersRecentController2 = _interopRequireDefault(_controllersRecentController);

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
			// login page
			//new Login(this.container);

			//recent page
			//new Header(this.container);
			new _controllersRecentController2['default'](this.container);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"../controllers/HeaderController":1,"../controllers/LoginController":2,"../controllers/RecentController":3}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RecentView = (function () {
  function RecentView(container) {
    _classCallCheck(this, RecentView);

    this.container = container;
    this.content = null;
  }

  _createClass(RecentView, [{
    key: 'render',
    value: function render() {

      this.content = '\n\t\t\t<div class="recent">\n        im recent\n\t\t\t</div>\n\t\t';

      this.container.insertAdjacentHTML('beforeend', this.content);
    }
  }]);

  return RecentView;
})();

exports['default'] = RecentView;
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

},{"./router/router":4}]},{},[1,2,3,"start",4,5,6,7])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC9jb250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvY29udHJvbGxlcnMvUmVjZW50Q29udHJvbGxlci5qcyIsIi92YXIvd3d3L29yYW5nZS9zcmMvYXBwL3JvdXRlci9yb3V0ZXIuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC92aWV3cy9IZWFkZXJWaWV3LmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvdmlld3MvTG9naW5WaWV3LmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvdmlld3MvUmVjZW50Vmlldy5qcyIsIi92YXIvd3d3L29yYW5nZS9zcmMvYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7K0JDQWlCLHFCQUFxQjs7OztJQUVqQixnQkFBZ0I7QUFDeEIsVUFEUSxnQkFBZ0IsQ0FDdkIsU0FBUyxFQUFFO3dCQURKLGdCQUFnQjs7QUFFbkMsTUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBUyxTQUFTLENBQUMsQ0FBQztBQUNoQyxNQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7RUFDZDs7Y0FKbUIsZ0JBQWdCOztTQU03QixrQkFBRztBQUNULFVBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUMxQjs7O1FBUm1CLGdCQUFnQjs7O3FCQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OEJDRnBCLG9CQUFvQjs7OztJQUVoQixlQUFlO0FBQ3RCLFdBRE8sZUFBZSxDQUNyQixTQUFTLEVBQUU7MEJBREwsZUFBZTs7QUFFaEMsUUFBSSxDQUFDLElBQUksR0FBRyxn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Q0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RCxPQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Q0FDYiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVmlldyBmcm9tICcuLi92aWV3cy9IZWFkZXJWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcblx0XHR0aGlzLnZpZXcgPSBuZXcgVmlldyhjb250YWluZXIpO1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiB0aGlzLnZpZXcucmVuZGVyKCk7XG5cdH1cbn0iLCJpbXBvcnQgVmlldyBmcm9tICcuLi92aWV3cy9Mb2dpblZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoY29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3LnJlbmRlcigpO1xuICB9XG59IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlld3MvUmVjZW50Vmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2VudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoY29udGFpbmVyKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3LnJlbmRlcigpO1xuICB9XG59IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXInO1xuaW1wb3J0IFJlY2VudCBmcm9tICcuLi9jb250cm9sbGVycy9SZWNlbnRDb250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdH1cblxuXHRydW4gKCkge1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdC8vIGxvZ2luIHBhZ2Vcblx0XHQvL25ldyBMb2dpbih0aGlzLmNvbnRhaW5lcik7XG5cblx0XHQvL3JlY2VudCBwYWdlXG5cdFx0Ly9uZXcgSGVhZGVyKHRoaXMuY29udGFpbmVyKTtcblx0XHRuZXcgUmVjZW50KHRoaXMuY29udGFpbmVyKTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclZpZXcge1xuXHRjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG5cdFx0dGhpcy5jb250ZW50ID0gbnVsbDtcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cblx0XHR0aGlzLmNvbnRlbnQgPSBgXG5cdFx0XHQ8aGVhZGVyIGlkPVwiaGVhZGVyXCI+XG5cblx0XHRcdDwvaGVhZGVyPlxuXHRcdGA7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLmNvbnRlbnQgKTtcblx0fVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luVmlldyB7XG4gIGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcblxuICAgIHRoaXMuY29udGVudCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJsb2dpblwiIGlkPVwibG9naW5QYWdlXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsb2dpbi1sb2dvXCI+PC9hPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtLXdyYXBcIj5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byBvcmFuZ2UgY2hhdDwvaDE+XG5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImxvZ2luLXVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImxvZ2luLXBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiLz5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvZ2luLXBzd2QtZm9yZ2V0XCI+IEZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT5cblxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxvZ2luLWJ0blwiPiA8c3BhbiBjbGFzcz1cInZlcnQtYWxpZ25cIj5Mb2cgaW48L3NwYW4+PC9hPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRgO1xuXG4gICAgdGhpcy5jb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmNvbnRlbnQgKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2VudFZpZXcge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmVjZW50XCI+XG4gICAgICAgIGltIHJlY2VudFxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jb250ZW50ICk7XG4gIH1cbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQgKCkge1xuXHRsZXQgcm91dGVyID0gbmV3IFJvdXRlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXHRyb3V0ZXIucnVuKCk7XG59Il19

//# sourceMappingURL=all.js.map