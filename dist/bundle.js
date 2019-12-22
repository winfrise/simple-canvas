/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Block\", function() { return Block; });\n/* harmony import */ var _utils_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/event-emitter */ \"./src/utils/event-emitter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Block =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(Block, _EventEmitter);\n\n  function Block(ctx, x, y, w, h, color) {\n    var _this;\n\n    _classCallCheck(this, Block);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Block).call(this));\n    _this.ctx = ctx;\n    _this.x = x;\n    _this.y = y;\n    _this.w = w;\n    _this.h = h;\n    _this.color = color;\n    return _this;\n  }\n  /**\n   * 检查坐标是否在块的元素范围内\n   */\n\n\n  _createClass(Block, [{\n    key: \"checkBoundary\",\n    value: function checkBoundary(x, y) {\n      return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var ctx = this.ctx,\n          x = this.x,\n          y = this.y,\n          w = this.w,\n          h = this.h,\n          color = this.color;\n      ctx.save();\n      ctx.beginPath();\n\n      if (color) {\n        ctx.fillStyle = color;\n      }\n\n      ctx.rect(x, y, w, h);\n      ctx.closePath();\n      ctx.fill();\n      ctx.restore();\n    }\n  }]);\n\n  return Block;\n}(_utils_event_emitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block */ \"./src/block.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/index */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar SimpleCanvas =\n/*#__PURE__*/\nfunction () {\n  function SimpleCanvas(canvas) {\n    var _this = this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, SimpleCanvas);\n\n    var DEFAULT_OPTIONS = {\n      autoStart: false\n    };\n    this.options = Object.assign({}, DEFAULT_OPTIONS, options);\n    this.canvas = typeof canvas === 'string' ? document.querySelector(canvas) : canvas;\n    this.canvasRect = this.canvas.getBoundingClientRect();\n    this.ctx = this.canvas.getContext('2d');\n    this.blockList = [];\n    this.renderList = [];\n    this.canvas.addEventListener('click', function (e) {\n      var x = e.offsetX;\n      var y = e.offsetY;\n\n      _this.blockList.forEach(function (block) {\n        if (block.checkBoundary(x, y)) block.trigger('click');\n      });\n    });\n\n    if (this.options.autoStart) {\n      this.start();\n    }\n  }\n\n  _createClass(SimpleCanvas, [{\n    key: \"createBlock\",\n    value: function createBlock(x, y, w, h, color) {\n      var ctx = this.ctx;\n      var block = new _block__WEBPACK_IMPORTED_MODULE_0__[\"Block\"](ctx, x, y, w, h, color);\n      this.blockList.push(block);\n      return block;\n    }\n  }, {\n    key: \"addStage\",\n    value: function addStage(block) {\n      this.renderList.push(block);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      var _this2 = this;\n\n      var updater = function updater() {\n        _this2.renderList.forEach(function (block) {\n          block.draw();\n        });\n\n        Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__[\"raf\"])(updater);\n      };\n\n      updater();\n    }\n  }]);\n\n  return SimpleCanvas;\n}();\n\nwindow.SimpleCanvas = SimpleCanvas;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/event-emitter.js":
/*!************************************!*\
  !*** ./src/utils/event-emitter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EventEmitter; });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventEmitter =\n/*#__PURE__*/\nfunction () {\n  function EventEmitter() {\n    _classCallCheck(this, EventEmitter);\n\n    this.events = {};\n  }\n\n  _createClass(EventEmitter, [{\n    key: \"on\",\n    value: function on(type, fn, context) {\n      if (!this.events[type]) {\n        this.events[type] = [];\n      }\n\n      this.events[type].push([fn, context]);\n      return this;\n    }\n  }, {\n    key: \"once\",\n    value: function once(type, fn, context) {\n      var _this = this;\n\n      var magic = function magic() {\n        _this.off(type, magic);\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        fn.apply(context, args);\n      };\n\n      magic.fn = fn;\n      this.on(type, magic);\n      return this;\n    }\n  }, {\n    key: \"off\",\n    value: function off(type, fn) {\n      if (!type && !fn) {\n        this.events = {};\n        return this;\n      }\n\n      if (type && !fn) {\n        this.events[type] = [];\n        return this;\n      }\n\n      var events = this.events[type];\n\n      if (!events) {\n        return this;\n      }\n\n      var count = events.length;\n\n      while (count--) {\n        if (events[count][0] === fn || events[count][0] && events[count][0].fn === fn) {\n          events.splice(count, 1);\n        }\n      }\n\n      return this;\n    }\n  }, {\n    key: \"trigger\",\n    value: function trigger(type) {\n      var events = this.events[type];\n\n      if (!events) {\n        return;\n      }\n\n      var len = events.length;\n\n      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      for (var i = 0; i < len; i++) {\n        var _events$i = _slicedToArray(events[i], 2),\n            fn = _events$i[0],\n            context = _events$i[1];\n\n        if (fn) {\n          return fn.apply(context, args);\n        }\n      }\n    }\n  }]);\n\n  return EventEmitter;\n}();\n\n\n\n//# sourceURL=webpack:///./src/utils/event-emitter.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: raf, rafCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf */ \"./src/utils/raf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"raf\", function() { return _raf__WEBPACK_IMPORTED_MODULE_0__[\"raf\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rafCancel\", function() { return _raf__WEBPACK_IMPORTED_MODULE_0__[\"rafCancel\"]; });\n\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./src/utils/raf.js":
/*!**************************!*\
  !*** ./src/utils/raf.js ***!
  \**************************/
/*! exports provided: raf, rafCancel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raf\", function() { return raf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rafCancel\", function() { return rafCancel; });\nvar raf = window.requestAnimationFrame;\nvar rafCancel = window.cancelAnimationFrame;\n\n//# sourceURL=webpack:///./src/utils/raf.js?");

/***/ })

/******/ });