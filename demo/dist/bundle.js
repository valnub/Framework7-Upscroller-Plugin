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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_f7_upscroller__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_f7_upscroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_f7_upscroller__);


Framework7.use(__WEBPACK_IMPORTED_MODULE_0_f7_upscroller___default.a);

var app = new Framework7({
  root: '#app',
  name: 'Upscroller demo',
  id: 'de.timoernst.f7.upscroller',
  theme: 'ios',
  upscroller: {
    // text: 'Go down',
    // ignorePages: ['about'],
  },
});

var mainView = app.views.create('.view-main');

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	name: 'upscroller',
	params: {
		upscroller: {
			text: 'Go up',
			ignorePages: [],
		}
	},
	install() {
		var css = '.upscroller{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);transition:-webkit-transform .5s;position:fixed;left:50%;margin-left:-47px;top:-50px;z-index:9999!important;height:20px;border-radius:20px;width:100px;background:#4792e6;font-size:14px;text-align:center;padding:3px 2px 2px;color:#fff!important;cursor:pointer}.upscroller.show{-webkit-transform:translate3d(0,110px,0);transform:translate3d(0,110px,0)}';
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		head.appendChild(style);
	},
	on: {
		pageInit: function (page) {
			'use strict';

			var app = this;
			var params = app.params.upscroller;
			var $$ = Dom7;

			if (params.ignorePages.includes(page.name)) return;

			var $$btn = $$('<div class="upscroller">↑ ' + params.text + '</div>');
			$$(page.el).prepend($$btn);

			$$btn.click(function (event) {
				event.stopPropagation();
				event.preventDefault();
				var pageContent = $$('.page-content', page.el);
				pageContent.scrollTop(0, Math.round(pageContent.scrollTop() / 4));
			});

			$$(".page-content", page.el).scroll(function (event) {
				var e = $$(event.target).scrollTop();
				if (e > 300) $$btn.addClass('show');
				else $$btn.removeClass('show');
			});
		},
	}
};


/***/ })
/******/ ]);