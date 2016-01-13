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
			new _controllersHeaderController2['default'](this.container);

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

			this.content = '\n\t\t\t<header id="header">\n\t\t\t\tI R Header!\n\t\t\t</header>\n\t\t';

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

      this.content = '\n\t\t\t<div class="login" id="loginPage">\n\t\t\t\tI R login!\n\t\t\t</div>\n\t\t';

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC9jb250cm9sbGVycy9IZWFkZXJDb250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLmpzIiwiL3Zhci93d3cvb3JhbmdlL3NyYy9hcHAvcm91dGVyL3JvdXRlci5qcyIsIi92YXIvd3d3L29yYW5nZS9zcmMvYXBwL3ZpZXdzL0hlYWRlclZpZXcuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC92aWV3cy9Mb2dpblZpZXcuanMiLCIvdmFyL3d3dy9vcmFuZ2Uvc3JjL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OytCQ0FpQixxQkFBcUI7Ozs7SUFFakIsZ0JBQWdCO0FBQ3hCLFVBRFEsZ0JBQWdCLENBQ3ZCLFNBQVMsRUFBRTt3QkFESixnQkFBZ0I7O0FBRW5DLE1BQUksQ0FBQyxJQUFJLEdBQUcsaUNBQVMsU0FBUyxDQUFDLENBQUM7QUFDaEMsTUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0VBQ2Q7O2NBSm1CLGdCQUFnQjs7U0FNN0Isa0JBQUc7QUFDVCxVQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDMUI7OztRQVJtQixnQkFBZ0I7OztxQkFBaEIsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzhCQ0ZwQixvQkFBb0I7Ozs7SUFFaEIsZUFBZTtBQUN0QixXQURPLGVBQWUsQ0FDckIsU0FBUyxFQUFFOzBCQURMLGVBQWU7O0FBRWhDLFFBQUksQ0FBQyxJQUFJLEdBQUcsZ0NBQVMsU0FBUyxDQUFDLENBQUM7QUFDaEMsUUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ2Y7O2VBSmtCLGVBQWU7O1dBTTNCLGtCQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQzNCOzs7U0FSa0IsZUFBZTs7O3FCQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MkNDRmpCLGlDQUFpQzs7OzswQ0FDbEMsZ0NBQWdDOzs7O0lBRTdCLE1BQU07QUFDZCxVQURRLE1BQU0sQ0FDYixTQUFTLEVBQUU7d0JBREosTUFBTTs7QUFFekIsTUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsTUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDcEI7O2NBSm1CLE1BQU07O1NBTXRCLGVBQUc7QUFDTixPQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDZDs7O1NBRU0sa0JBQUc7QUFDVCxnREFBVyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRTNCLCtDQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztHQUcxQjs7O1FBaEJtQixNQUFNOzs7cUJBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7SUNITixVQUFVO0FBQ2xCLFVBRFEsVUFBVSxDQUNqQixTQUFTLEVBQUU7d0JBREosVUFBVTs7QUFFN0IsTUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsTUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDcEI7O2NBSm1CLFVBQVU7O1NBTXZCLGtCQUFHOztBQUVULE9BQUksQ0FBQyxPQUFPLDZFQUlYLENBQUM7O0FBRUYsT0FBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0dBQy9EOzs7UUFmbUIsVUFBVTs7O3FCQUFWLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0lDQVYsU0FBUztBQUNoQixXQURPLFNBQVMsQ0FDZixTQUFTLEVBQUU7MEJBREwsU0FBUzs7QUFFMUIsUUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsUUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7R0FDckI7O2VBSmtCLFNBQVM7O1dBTXJCLGtCQUFHOztBQUVSLFVBQUksQ0FBQyxPQUFPLHVGQUliLENBQUM7O0FBRUEsVUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO0tBQy9EOzs7U0Fma0IsU0FBUzs7O3FCQUFULFNBQVM7Ozs7Ozs7OztxQkNFTixLQUFLOzs7OzRCQUZWLGlCQUFpQjs7OztBQUVyQixTQUFTLEtBQUssR0FBSTtBQUNoQyxLQUFJLE1BQU0sR0FBRyw4QkFBVyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDeEQsT0FBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ2IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlld3MvSGVhZGVyVmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlckNvbnRyb2xsZXIge1xuXHRjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG5cdFx0dGhpcy52aWV3ID0gbmV3IFZpZXcoY29udGFpbmVyKTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gdGhpcy52aWV3LnJlbmRlcigpO1xuXHR9XG59IiwiaW1wb3J0IFZpZXcgZnJvbSAnLi4vdmlld3MvTG9naW5WaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5Db250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KGNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlldy5yZW5kZXIoKTtcbiAgfVxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvSGVhZGVyQ29udHJvbGxlcic7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdH1cblxuXHRydW4gKCkge1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdG5ldyBIZWFkZXIodGhpcy5jb250YWluZXIpO1xuXG5cdFx0bmV3IExvZ2luKHRoaXMuY29udGFpbmVyKTtcblxuXG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJWaWV3IHtcblx0Y29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuY29udGVudCA9IG51bGw7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXG5cdFx0dGhpcy5jb250ZW50ID0gYFxuXHRcdFx0PGhlYWRlciBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHRJIFIgSGVhZGVyIVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0YDtcblxuXHRcdHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMuY29udGVudCApO1xuXHR9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5WaWV3IHtcbiAgY29uc3RydWN0b3IgKGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY29udGVudCA9IG51bGw7XG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgdGhpcy5jb250ZW50ID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cImxvZ2luXCIgaWQ9XCJsb2dpblBhZ2VcIj5cblx0XHRcdFx0SSBSIGxvZ2luIVxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jb250ZW50ICk7XG4gIH1cbn0iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0ICgpIHtcblx0bGV0IHJvdXRlciA9IG5ldyBSb3V0ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblx0cm91dGVyLnJ1bigpO1xufSJdfQ==

//# sourceMappingURL=all.js.map