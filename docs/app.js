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
/******/ 	__webpack_require__.p = "/web-explorer/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/front.entry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/prismjs/themes/prism.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/prismjs/themes/prism.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tcolor: black;\n\tbackground: none;\n\ttext-shadow: 0 1px white;\n\tfont-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n\ttext-align: left;\n\twhite-space: pre;\n\tword-spacing: normal;\n\tword-break: normal;\n\tword-wrap: normal;\n\tline-height: 1.5;\n\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\ttab-size: 4;\n\n\t-webkit-hyphens: none;\n\t-moz-hyphens: none;\n\t-ms-hyphens: none;\n\thyphens: none;\n}\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n\ttext-shadow: none;\n\tbackground: #b3d4fc;\n}\n\n@media print {\n\tcode[class*=\"language-\"],\n\tpre[class*=\"language-\"] {\n\t\ttext-shadow: none;\n\t}\n}\n\n/* Code blocks */\npre[class*=\"language-\"] {\n\tpadding: 1em;\n\tmargin: .5em 0;\n\toverflow: auto;\n}\n\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n\tbackground: #f5f2f0;\n}\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n\tpadding: .1em;\n\tborder-radius: .3em;\n\twhite-space: normal;\n}\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n\tcolor: slategray;\n}\n\n.token.punctuation {\n\tcolor: #999;\n}\n\n.namespace {\n\topacity: .7;\n}\n\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n\tcolor: #905;\n}\n\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n\tcolor: #690;\n}\n\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n\tcolor: #9a6e3a;\n\tbackground: hsla(0, 0%, 100%, .5);\n}\n\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n\tcolor: #07a;\n}\n\n.token.function,\n.token.class-name {\n\tcolor: #DD4A68;\n}\n\n.token.regex,\n.token.important,\n.token.variable {\n\tcolor: #e90;\n}\n\n.token.important,\n.token.bold {\n\tfont-weight: bold;\n}\n.token.italic {\n\tfont-style: italic;\n}\n\n.token.entity {\n\tcursor: help;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/front/scss/app.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/front/scss/app.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  --line-height: 1.5em;\n  --border-color: #ddd;\n  --bg-color-light: rgba(0, 0, 0, 0.05);\n  --bg-color: #fff;\n  --text-color: #333;\n  --link-color: dodgerblue;\n  --link-bg-color-hover: whitesmoke;\n  --link-bg-color-active: aliceblue;\n  --reverse-bg-color: #333;\n  --reverse-color: #fff;\n  --highlight-color: Ivory;\n  --transition-duration: 200ms; }\n\n.app-settings--dark {\n  --border-color: #333;\n  --bg-color-light: rgba(255, 255, 255, 0.05);\n  --bg-color: #222;\n  --text-color: #aaa;\n  --link-color: dodgerblue;\n  --link-bg-color-hover: #333;\n  --link-bg-color-active: #111;\n  --reverse-bg-color: #f5f5f5;\n  --reverse-color: #333;\n  --highlight-color: #111; }\n  .app-settings--dark code[class*=\"language-\"], .app-settings--dark pre[class*=\"language-\"] {\n    text-shadow: none; }\n\nhtml {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 16px;\n  line-height: var(--line-height);\n  background-color: var(--bg-color);\n  color: var(--text-color); }\n\nhr {\n  margin: 1rem 0;\n  border: none;\n  border-bottom: 1px solid var(--border-color); }\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  line-height: var(--line-height); }\n\nhgroup {\n  margin-top: 2rem;\n  margin-bottom: 1rem; }\n  hgroup > * {\n    margin: 0; }\n\na, .app-menu__link, .app-link {\n  cursor: pointer;\n  color: var(--link-color);\n  text-decoration: none; }\n  a:hover, .app-menu__link:hover, a:active, .app-menu__link:active, a:focus, .app-menu__link:focus, .app-link:hover, .app-link:active, .app-link:focus {\n    text-decoration: underline; }\n\np, pre {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\npre {\n  overflow: auto; }\n\ncode, samp {\n  font-family: 'Roboto Mono', monospace;\n  font-size: 0.825rem; }\n\npre, code {\n  padding: 0.25em 0.5em;\n  border-radius: 0.25em;\n  background-color: var(--bg-color-light); }\n\npre code {\n  padding: initial;\n  border-radius: initial;\n  border: initial;\n  background-color: initial; }\n\ninput, button {\n  font-family: inherit; }\n\n.app-no-margin-top {\n  margin-top: 0 !important; }\n\n.app-header {\n  display: flex;\n  justify-content: space-between;\n  line-height: 3rem;\n  background-color: var(--reverse-bg-color);\n  color: var(--reverse-color); }\n\n.app-header__toggle-sidebar {\n  margin-right: 2rem;\n  cursor: pointer; }\n  .app-header__toggle-sidebar .fas {\n    vertical-align: middle; }\n\n.app-header__brand {\n  text-decoration: none !important;\n  font-size: 1.25rem;\n  color: var(--link-color); }\n  .app-header__brand .fab {\n    margin-left: 0.25rem;\n    vertical-align: middle; }\n\n.app-menu {\n  margin: 1rem 0;\n  padding: 0;\n  list-style: none; }\n  .app-menu .app-menu {\n    margin-top: 0; }\n\n.app-menu__item {\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\n.app-menu__link {\n  display: block;\n  padding: 0.5rem 0.75rem;\n  transition: all var(--transition-duration) ease; }\n  .app-menu__link:hover {\n    background-color: var(--link-bg-color-hover); }\n  .app-menu__link, .app-menu__link:hover, .app-menu__link:active, .app-menu__link:focus {\n    text-decoration: none; }\n\n[app-menu] .app-menu__header {\n  cursor: pointer;\n  user-select: none; }\n\n.app-menu__header {\n  display: block;\n  padding: 0.5rem 0.75rem; }\n  .app-menu__header::before {\n    position: absolute;\n    font-family: Font Awesome\\ 5 Free;\n    font-weight: 900;\n    content: \"\\F107\";\n    transition: transform var(--transition-duration) ease; }\n\n.app-menu__header--closed::before {\n  transform: rotate(-90deg); }\n\n.app-menu__header--closed + .app-menu {\n  display: none; }\n\n.app-menu .app-menu__header::before {\n  left: 0.75rem; }\n\n.app-menu .app-menu__header,\n.app-menu .app-menu .app-menu__link {\n  padding-left: 2rem; }\n\n.app-menu .app-menu .app-menu__header::before {\n  left: 2.25rem; }\n\n.app-menu .app-menu .app-menu__header,\n.app-menu .app-menu .app-menu .app-menu__link {\n  padding-left: 3.5rem; }\n\n.app-menu .app-menu .app-menu .app-menu__header::before {\n  left: 3.75rem; }\n\n.app-menu .app-menu .app-menu .app-menu__header,\n.app-menu .app-menu .app-menu .app-menu .app-menu__link {\n  padding-left: 5rem; }\n\n.app-menu .app-link__active {\n  background-color: var(--link-bg-color-active);\n  color: var(--text-color); }\n\nbody {\n  margin: 0; }\n\n.app-grid--fixed {\n  height: 100%; }\n  .app-grid--fixed body {\n    height: 100%;\n    overflow: auto; }\n\n.app-grid__wrap {\n  --grid-gap: 1.25rem;\n  --grid-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.3);\n  height: 100%;\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas: \"header header\" \"sidebar content\" \"footer footer\";\n  align-items: stretch; }\n\n.app-grid__header {\n  position: relative;\n  z-index: 4;\n  grid-area: header;\n  padding: 0 var(--grid-gap);\n  box-shadow: var(--grid-shadow); }\n\n.app-grid__sidebar {\n  position: relative;\n  z-index: 3;\n  grid-area: sidebar;\n  padding: var(--grid-gap);\n  overflow: auto;\n  border-right: 1px solid var(--border-color); }\n\n.app-grid__content {\n  position: relative;\n  z-index: 1;\n  grid-area: content;\n  padding: var(--grid-gap);\n  overflow: auto;\n  box-shadow: 0 -0.375rem 0.75rem rgba(0, 0, 0, 0.15);\n  background-color: var(--bg-color-light); }\n\n.app-grid__footer {\n  position: relative;\n  z-index: 2;\n  grid-area: footer;\n  padding: 0 var(--grid-gap);\n  border-top: 1px solid var(--border-color);\n  background-color: var(--bg-color); }\n\n.app-grid__wrap--sidebar-hidden {\n  grid-template-columns: 1fr;\n  grid-template-areas: \"header\" \"content\" \"footer\"; }\n  .app-grid__wrap--sidebar-hidden .app-grid__sidebar {\n    display: none; }\n\n@media screen and (max-width: 720px) {\n  .app-grid__wrap {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr auto;\n    grid-template-areas: \"header\" \"sidebar\" \"content\" \"footer\"; }\n  .app-grid__content {\n    box-shadow: none; }\n  .app-grid__sidebar {\n    box-shadow: var(--grid-shadow); } }\n\n.app-content {\n  opacity: 0.3;\n  transition: opacity 300ms ease; }\n\n.app-content--active {\n  opacity: 1; }\n\n.app-content__error {\n  text-align: center;\n  color: #aaa; }\n\n.app-spinner {\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0; }\n\n.app-spinner--show {\n  opacity: 1; }\n\n.app-spinner__content {\n  margin: auto;\n  color: #aaa; }\n\n.app-toolbox {\n  display: flex;\n  justify-content: center;\n  line-height: 3rem; }\n  .app-toolbox a.app-action, .app-toolbox .app-action.app-menu__link {\n    padding: 0 0.5rem;\n    text-decoration: none;\n    color: var(--text-color);\n    transition: all var(--transition-duration) ease; }\n    .app-toolbox a.app-action.app-action--active, .app-toolbox .app-action.app-action--active.app-menu__link {\n      color: var(--link-color); }\n    .app-toolbox a.app-action .fas, .app-toolbox .app-action.app-menu__link .fas {\n      vertical-align: middle; }\n\n.app-code--active {\n  display: flex;\n  justify-content: space-between; }\n  .app-code--active .app-code__source,\n  .app-code--active .app-code__target {\n    flex: 1 1 0;\n    box-sizing: border-box;\n    overflow: auto;\n    margin: 0; }\n  .app-code--active .app-code__source {\n    padding-right: 1rem;\n    border: 0 solid var(--border-color);\n    border-width: 0 1px 0 0; }\n  .app-code--active .app-code__target {\n    padding-right: 0;\n    padding-left: 1rem;\n    border-radius: 0;\n    border: 0 solid var(--bg-color);\n    border-width: 0 0 0 1px;\n    background-color: transparent;\n    line-height: 1em; }\n\n@media screen and (max-width: 720px) {\n  .app-code--active {\n    display: block; }\n    .app-code--active .app-code__source {\n      padding-right: 0;\n      padding-bottom: 1rem;\n      border-width: 0 0 1px 0; }\n    .app-code--active .app-code__target {\n      padding-top: 1rem;\n      padding-left: 0;\n      border-width: 1px 0 0 0; } }\n\n.app-playground {\n  --playground-action-gap: 0.25rem;\n  --playground-demo-gap: 0.5rem;\n  position: relative;\n  margin: 1rem 0;\n  padding: 0;\n  border-radius: 0;\n  border: none;\n  background-color: transparent; }\n  .app-playground:hover .app-playground__action, .app-playground:hover.app-playground--log::after {\n    opacity: 0.5; }\n  .app-playground.app-playground--disabled .app-playground__action,\n  .app-playground.app-playground--disabled .app-playground__code {\n    opacity: 0.5; }\n  .app-playground .app-playground__action:hover {\n    opacity: 1; }\n    .app-playground .app-playground__action:hover.app-playground__action--disabled {\n      opacity: 0.5; }\n  .app-playground .app-playground__code:hover {\n    opacity: 1; }\n\n.app-playground__action,\n.app-playground--log::after {\n  position: absolute;\n  padding: var(--playground-action-gap) 0.5rem;\n  border: 1px solid var(--border-color);\n  background-color: var(--link-bg-color-active);\n  font-family: 'Open Sans', sans-serif;\n  font-size: 0.825rem;\n  text-transform: uppercase;\n  text-decoration: none !important;\n  transition: all var(--transition-duration) ease; }\n\n.app-playground__action {\n  z-index: 2;\n  right: 0;\n  bottom: 0;\n  cursor: pointer; }\n  .app-playground__action:hover {\n    background-color: var(--link-color);\n    color: var(--bg-color); }\n  .app-playground__action.app-playground__action--disabled {\n    background-color: var(--link-bg-color-active);\n    color: var(--text-color); }\n\n.app-playground__icon {\n  vertical-align: middle;\n  font-size: 1rem;\n  margin-left: 0.25rem; }\n\n.app-playground__code {\n  z-index: 1;\n  position: relative;\n  display: block;\n  overflow: auto;\n  max-height: 70vh;\n  padding: var(--playground-demo-gap) 1rem;\n  border-radius: 0;\n  border: 1px solid var(--border-color);\n  border-left-color: var(--link-color);\n  background-color: var(--bg-color);\n  transition: opacity var(--transition-duration) ease, max-height var(--transition-duration) ease; }\n\n.app-playground__code--reduce {\n  max-height: 1rem; }\n\n.app-playground--demo {\n  min-height: calc(var(--line-height) + 2 * (var(--playground-action-gap) - var(--playground-demo-gap)));\n  padding: var(--playground-demo-gap) 1rem;\n  box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--border-color);\n  background-color: var(--bg-color); }\n  .app-playground--demo .app-playground__action {\n    right: -1px;\n    bottom: -1px; }\n\n.app-playground--log {\n  min-height: calc(var(--line-height) + 2 * (var(--playground-action-gap) - var(--playground-demo-gap)));\n  margin-top: -1rem;\n  box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.05);\n  border: 1px solid var(--border-color);\n  border-top-width: 0;\n  white-space: pre; }\n\n.app-playground__log {\n  overflow: auto;\n  max-height: 70vh; }\n\n.app-playground__log-item {\n  display: block;\n  padding: var(--playground-demo-gap) 1rem;\n  border-bottom: 1px dotted var(--border-color);\n  background-color: var(--highlight-color); }\n  .app-playground__log-item:last-child {\n    border-bottom: none; }\n\n.app-playground--disabled {\n  font-style: italic; }\n\n.app-playground__action--disabled {\n  cursor: default; }\n\n.token.operator, .token.entity, .token.url, .language-css .token.string, .style .token.string {\n  background: transparent; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/* **********************************************
     Begin prism-core.js
********************************************** */

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = _self.Prism = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (_.util.type(tokens) === 'Array') {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function (o, visited) {
			var type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = {};
					visited[_.util.objId(o)] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = _.util.clone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					if (visited[_.util.objId(o)]) {
						return visited[_.util.objId(o)];
					}
					var clone = [];
					visited[_.util.objId(o)] = clone;

					o.forEach(function (v, i) {
						clone[i] = _.util.clone(v, visited);
					});

					return clone;
			}

			return o;
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need anobject and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before. If not provided, the function appends instead.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];

			if (arguments.length == 2) {
				insert = arguments[1];

				for (var newToken in insert) {
					if (insert.hasOwnProperty(newToken)) {
						grammar[newToken] = insert[newToken];
					}
				}

				return grammar;
			}

			var ret = {};

			for (var token in grammar) {

				if (grammar.hasOwnProperty(token)) {

					if (token == before) {

						for (var newToken in insert) {

							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					ret[token] = grammar[token];
				}
			}

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === root[inside] && key != inside) {
					this[key] = ret;
				}
			});

			return root[inside] = ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function(o, callback, type, visited) {
			visited = visited || {};
			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, null, visited);
					}
					else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
						visited[_.util.objId(o[i])] = true;
						_.languages.DFS(o[i], callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run("before-highlightall", env);

		var elements = env.elements || container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language, grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,''])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		_.hooks.run('before-sanity-check', env);

		if (!env.code || !env.grammar) {
			if (env.code) {
				_.hooks.run('before-highlight', env);
				env.element.textContent = env.code;
				_.hooks.run('after-highlight', env);
			}
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				env.highlightedCode = evt.data;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(env.element);
				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			callback && callback.call(element);

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		var Token = _.Token;

		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar, language) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	}
};

var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};

Token.stringify = function(o, language, parent) {
	if (typeof o == 'string') {
		return o;
	}

	if (_.util.type(o) === 'Array') {
		return o.map(function(element) {
			return Token.stringify(element, language, o);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language, parent),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language,
		parent: parent
	};

	if (o.alias) {
		var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';

};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _self.Prism;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _self.Prism;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _self.Prism;

})();

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== 'undefined') {
	global.Prism = Prism;
}


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': /<!--[\s\S]*?-->/,
	'prolog': /<\?[\s\S]+?\?>/,
	'doctype': /<!DOCTYPE[\s\S]+?>/i,
	'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/i,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'attr-value': {
				pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
				inside: {
					'punctuation': [
						/^=/,
						{
							pattern: /(^|[^\\])["']/,
							lookbehind: true
						}
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': /&#?[\da-z]{1,8};/i
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function(env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Prism.languages.xml = Prism.languages.markup;
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;


/* **********************************************
     Begin prism-css.js
********************************************** */

Prism.languages.css = {
	'comment': /\/\*[\s\S]*?\*\//,
	'atrule': {
		pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	'url': /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
	'selector': /[^{}\s][^{};]*?(?=\s*\{)/,
	'string': {
		pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
	'important': /\B!important\b/i,
	'function': /[-a-z0-9]+(?=\()/i,
	'punctuation': /[(){};:]/
};

Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'style': {
			pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
			lookbehind: true,
			inside: Prism.languages.css,
			alias: 'language-css',
			greedy: true
		}
	});

	Prism.languages.insertBefore('inside', 'attr-value', {
		'style-attr': {
			pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
			inside: {
				'attr-name': {
					pattern: /^\s*style/i,
					inside: Prism.languages.markup.tag.inside
				},
				'punctuation': /^\s*=\s*['"]|['"]\s*$/,
				'attr-value': {
					pattern: /.+/i,
					inside: Prism.languages.css
				}
			},
			alias: 'language-css'
		}
	}, Prism.languages.markup.tag);
}

/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
		lookbehind: true,
		inside: {
			punctuation: /[.\\]/
		}
	},
	'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	'boolean': /\b(?:true|false)\b/,
	'function': /[a-z0-9_]+(?=\()/i,
	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'keyword': /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
	'number': /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
	'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
		lookbehind: true,
		greedy: true
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
		alias: 'function'
	},
	'constant': /\b[A-Z][A-Z\d_]*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'template-string': {
		pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /\${[^}]+}/,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\${|}$/,
						alias: 'punctuation'
					},
					rest: null // See below
				}
			},
			'string': /[\s\S]+/
		}
	}
});
Prism.languages.javascript['template-string'].inside['interpolation'].inside.rest = Prism.languages.javascript;

if (Prism.languages.markup) {
	Prism.languages.insertBefore('markup', 'tag', {
		'script': {
			pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript,
			alias: 'language-javascript',
			greedy: true
		}
	});
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
		return;
	}

	self.Prism.fileHighlight = function() {

		var Extensions = {
			'js': 'javascript',
			'py': 'python',
			'rb': 'ruby',
			'ps1': 'powershell',
			'psm1': 'powershell',
			'sh': 'bash',
			'bat': 'batch',
			'h': 'c',
			'tex': 'latex'
		};

		Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
			var src = pre.getAttribute('data-src');

			var language, parent = pre;
			var lang = /\blang(?:uage)?-([\w-]+)\b/i;
			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (pre.className.match(lang) || [, ''])[1];
			}

			if (!language) {
				var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
				language = Extensions[extension] || extension;
			}

			var code = document.createElement('code');
			code.className = 'language-' + language;

			pre.textContent = '';

			code.textContent = 'Loading…';

			pre.appendChild(code);

			var xhr = new XMLHttpRequest();

			xhr.open('GET', src, true);

			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {

					if (xhr.status < 400 && xhr.responseText) {
						code.textContent = xhr.responseText;

						Prism.highlightElement(code);
					}
					else if (xhr.status >= 400) {
						code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
					}
					else {
						code.textContent = '✖ Error: File does not exist or is empty';
					}
				}
			};

			xhr.send(null);
		});

		if (Prism.plugins.toolbar) {
			Prism.plugins.toolbar.registerButton('download-file', function (env) {
				var pre = env.element.parentNode;
				if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
					return;
				}
				var src = pre.getAttribute('data-src');
				var a = document.createElement('a');
				a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
				a.setAttribute('download', '');
				a.href = src;
				return a;
			});
		}

	};

	document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/themes/prism.css":
/*!***********************************************!*\
  !*** ./node_modules/prismjs/themes/prism.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./prism.css */ "./node_modules/css-loader/index.js!./node_modules/prismjs/themes/prism.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SPA_URL_STATE_PREFIX = '/content';
exports.FRONT_PAGES_FOLDER = 'pages';
exports.BACK_HOST = '127.0.0.1';
exports.BACK_PORT = 3000;


/***/ }),

/***/ "./src/front.entry.ts":
/*!****************************!*\
  !*** ./src/front.entry.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../node_modules/prismjs/themes/prism.css */ "./node_modules/prismjs/themes/prism.css");
__webpack_require__(/*! ../node_modules/prismjs/prism */ "./node_modules/prismjs/prism.js");
__webpack_require__(/*! ./front/scss/app.scss */ "./src/front/scss/app.scss");
__webpack_require__(/*! ./front/ts/app */ "./src/front/ts/app.ts");


/***/ }),

/***/ "./src/front/scss/app.scss":
/*!*********************************!*\
  !*** ./src/front/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./app.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/front/scss/app.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/front/ts/_dom.ts":
/*!******************************!*\
  !*** ./src/front/ts/_dom.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _util_1 = __webpack_require__(/*! ./_util */ "./src/front/ts/_util.ts");
function querySelectorAll(selector, element) {
    return [].slice.call((element || document).querySelectorAll(selector));
}
exports.querySelectorAll = querySelectorAll;
function getParentNodes(child, untilParent) {
    const parents = [];
    let parent = child.parentNode;
    while (parent) {
        if (parent !== untilParent && parent !== document) {
            parents.unshift(parent);
        }
        else {
            break;
        }
        parent = parent.parentNode;
    }
    return parents;
}
exports.getParentNodes = getParentNodes;
function createNode(html) {
    const wrap = document.createElement('div');
    wrap.innerHTML = html || ' ';
    // FIXME: if `html` is a string then wrap.firstChild is a `Text` and not an `Element`
    return wrap.removeChild(wrap.firstChild);
}
exports.createNode = createNode;
function wrapNode(element, wrapCss = '') {
    const wrap = document.createElement('div');
    if (wrapCss)
        wrap.classList.add(wrapCss);
    if (element.parentNode) {
        element.parentNode.insertBefore(wrap, element);
    }
    wrap.appendChild(element);
    return wrap;
}
exports.wrapNode = wrapNode;
function insertAfter(target, source) {
    if (source.parentNode) {
        if (source.nextSibling) {
            source.parentNode.insertBefore(target, source.nextSibling);
        }
        else {
            source.parentNode.appendChild(target);
        }
    }
}
exports.insertAfter = insertAfter;
function makeScriptAlive(dummy) {
    const script = document.createElement('script');
    [].forEach.call(dummy.attributes, (attr) => script.setAttribute(attr.name, attr.value));
    script.innerHTML = dummy.innerHTML;
    return script;
}
exports.makeScriptAlive = makeScriptAlive;
function insertHtml(html, element) {
    element.innerHTML = html;
    element.querySelectorAll('script').forEach((dummy) => {
        if (!dummy.hasAttribute('app-script-defer') && dummy.parentNode) {
            dummy.parentNode.insertBefore(makeScriptAlive(dummy), dummy);
            dummy.parentNode.removeChild(dummy);
        }
    });
    return element.innerHTML;
}
exports.insertHtml = insertHtml;
function isScriptDeferred(element) {
    return element.hasAttribute('app-script-defer');
}
exports.isScriptDeferred = isScriptDeferred;
function resolveUrl(href) {
    if (href === undefined || href === null)
        return undefined;
    const a = document.createElement('a');
    a.setAttribute('href', href);
    return a.href;
}
exports.resolveUrl = resolveUrl;
function toggleNode(element, parentElement) {
    let toggleId = parseInt(element.getAttribute('app-toggle-id'), 10);
    if (!toggleId) {
        toggleId = _util_1.getId();
        element.setAttribute('app-toggle-id', toggleId + '');
        if (!element.parentNode && parentElement) {
            parentElement.appendChild(element); // `parent` required to insert `node` the first time
            return toggleId;
        }
    }
    let placeholder;
    if (element.parentNode) {
        placeholder = createNode(`<script type="placeholder" app-toggle-id="${toggleId}">`);
        element.parentNode.insertBefore(placeholder, element);
        element.parentNode.removeChild(element);
    }
    else {
        placeholder = document.querySelector(`[app-toggle-id="${toggleId}"]`);
        placeholder.parentNode.insertBefore(element, placeholder);
        placeholder.parentNode.removeChild(placeholder);
    }
    return toggleId;
}
exports.toggleNode = toggleNode;
function getAction(name, link, callback) {
    link.classList.add('app-action');
    const action = {
        link,
        active: false,
        handler: (event) => {
            if (event)
                event.preventDefault();
            action.active = link.classList.toggle('app-action--active');
            sessionStorage.setItem(name, action.active + '');
            callback();
        },
    };
    if (sessionStorage.getItem(name) === 'true')
        action.handler();
    link.addEventListener('click', action.handler);
    return action;
}
exports.getAction = getAction;


/***/ }),

/***/ "./src/front/ts/_fetch.ts":
/*!********************************!*\
  !*** ./src/front/ts/_fetch.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! ../../config */ "./src/config.ts");
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const noInternetAccess = `<p class="app-content__error">
  <br>
  <i class="fas fa-3x fa-exclamation"></i>
  <br>
  <br>
  No internet access
</p>`;
function fetchContent404() {
    return fetch(_dom_1.resolveUrl(`./${config_1.FRONT_PAGES_FOLDER}/error404.html`)).then(response => response.text());
}
exports.fetchContent404 = fetchContent404;
function fetchContent(url) {
    return fetch(url)
        .then((response) => {
        if (response.status !== 200) {
            return fetchContent404().then(html => html.replace('{{url}}', url));
        }
        return response.text();
    })
        .catch(() => noInternetAccess);
}
exports.fetchContent = fetchContent;


/***/ }),

/***/ "./src/front/ts/_menu.ts":
/*!*******************************!*\
  !*** ./src/front/ts/_menu.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
class Menu {
    constructor(menu) {
        this.menu = menu;
        this.closeChilds(menu);
        menu.addEventListener('click', this.clickHandler.bind(this));
        this.openActiveLinks();
        this.activeLinksHandler = (event) => this.openActiveLinks();
        this.init();
    }
    init() {
        window.addEventListener(_router_1.ON_NAVIGATE.END, this.activeLinksHandler);
    }
    destroy() {
        window.removeEventListener(_router_1.ON_NAVIGATE.END, this.activeLinksHandler);
    }
    openActiveLinks() {
        _router_1.getActiveLinks(this.menu).forEach(activeLink => this.openParents(activeLink));
    }
    clickHandler(event) {
        const header = event.target;
        if (header && header.classList.contains('app-menu__header')) {
            this.toggleMenu(header);
        }
    }
    toggleMenu(header) {
        const isOpen = !header.classList.contains('app-menu__header--closed');
        if (isOpen) {
            const menu = header.nextElementSibling;
            if (menu)
                this.closeChilds(menu);
        }
        header.classList.toggle('app-menu__header--closed');
    }
    closeChilds(menu) {
        menu.querySelectorAll('.app-menu__header').forEach(header => header.classList.add('app-menu__header--closed'));
    }
    openParents(activeLink) {
        _dom_1.getParentNodes(activeLink, this.menu).forEach((menu) => {
            if (menu.classList.contains('app-menu')) {
                const header = menu.previousElementSibling;
                if (header && header.classList.contains('app-menu__header')) {
                    header.classList.remove('app-menu__header--closed');
                }
            }
        });
    }
}
exports.Menu = Menu;
function bootstrapMenu(container) {
    container.querySelectorAll('[app-menu]').forEach(menu => new Menu(menu));
}
exports.bootstrapMenu = bootstrapMenu;


/***/ }),

/***/ "./src/front/ts/_playground.ts":
/*!*************************************!*\
  !*** ./src/front/ts/_playground.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
const _util_1 = __webpack_require__(/*! ./_util */ "./src/front/ts/_util.ts");
function playJs(playground, action) {
    if (!_dom_1.isScriptDeferred(playground)) {
        return;
    }
    action.addEventListener('click', () => {
        if (playground.parentNode) {
            playground.parentNode.insertBefore(_dom_1.makeScriptAlive(playground), playground);
            playground.parentNode.removeChild(playground);
        }
    });
}
function playCss(playground, action) {
    action.addEventListener('click', (event) => {
        /*
        // TODO: It seems that the property `HTMLStyleElement.disabled`
        // has been removed from the TypeScript dom interface!
        // But actually the property is valid:
        // https://www.w3.org/TR/cssom-1/#dom-stylesheet-disabled
    
        playground.disabled = !playground.disabled;
        */
        playground.disabled = !playground.disabled;
    });
}
function playHtml(playground, action) {
    playground.classList.add('app-playground');
    playground.classList.add('app-playground--demo');
    // Add demo label based on `app-playground` attribute.
    const content = playground.getAttribute('app-playground') || 'demo';
    const icon = cssToIcon('fa fa-coffee'); // Hum... It's coffee time!
    playground.appendChild(contentToLabel(`${content} ${icon}`));
}
function contentToLabel(content) {
    return _dom_1.createNode(`<span class="app-playground__action app-playground__action--disabled">${content}</span>`);
}
function cssToIcon(css) {
    return `<i class="app-playground__icon ${css}"></i>`;
}
function getIcon(type) {
    let css = '';
    switch (type) {
        case 'js':
            css = 'fab fa-js';
            break;
        case 'css':
            css = 'fab fa-css3';
            break;
        case 'html':
            css = 'fab fa-html5';
            break;
        case 'log':
            css = 'fa fa-trash-alt';
            break;
    }
    return cssToIcon(css);
}
function getLabel(type) {
    return contentToLabel(`${type} ${getIcon(type)}`);
}
function getAction(type, wrap, isJs = false) {
    const action = _dom_1.createNode(`<a href="#" class="app-playground__action">${type} ${getIcon(type)}</a>`);
    if (isJs) {
        wrap.classList.add('app-playground--disabled');
    }
    action.addEventListener('click', (event) => {
        event.preventDefault();
        if (isJs) {
            wrap.classList.remove('app-playground--disabled');
            action.classList.add('app-playground__action--disabled');
        }
        else {
            wrap.classList.toggle('app-playground--disabled');
        }
    });
    return action;
}
function hasAction(playground, type) {
    switch (type) {
        case 'js': return _dom_1.isScriptDeferred(playground);
        case 'css': return true;
        case 'html': return false;
        // note: no need to handle the special case 'log'...
    }
}
function insertSource(playground, type) {
    const wrap = _dom_1.createNode('<pre class="app-playground"></pre>');
    const code = _dom_1.createNode('<code class="app-playground__code"></code>');
    const action = hasAction(playground, type) ? getAction(type, wrap, type === 'js') : getLabel(type);
    const source = _util_1.formatCode(playground.innerHTML);
    code.innerHTML = prismjs_1.highlight(source, prismjs_1.languages[type], prismjs_1.languages[type]);
    code.addEventListener('dblclick', () => code.classList.toggle('app-playground__code--reduce'));
    wrap.appendChild(code);
    wrap.appendChild(action);
    let anchor = null;
    const anchorId = playground.getAttribute('app-playground') || '';
    anchor = document.querySelector(`[app-playground-anchor="${anchorId}"]`);
    _dom_1.insertAfter(wrap, anchor || playground);
    return { wrap, code, action };
}
function enablePlayground(playground) {
    const nodeName = playground.nodeName.toLowerCase();
    const type = nodeName === 'script' ? 'js' : nodeName === 'style' ? 'css' : 'html';
    const source = insertSource(playground, type);
    switch (type) {
        case 'js':
            playJs(playground, source.action);
            break;
        case 'css':
            playCss(playground, source.action);
            break;
        case 'html':
            playHtml(playground, source.action);
            break;
        // note: no need to handle the special case 'log'...
    }
}
window.Playground = window.Playground || {};
window.Playground.log = (msgHtml, anchorId = '') => {
    const playground = document.querySelector(`[app-content] [app-playground="${anchorId}"]`);
    if (playground) {
        let logWrap = playground.nextElementSibling;
        if (!logWrap || !logWrap.classList.contains('app-playground--log')) {
            logWrap = _dom_1.createNode('<div class="app-playground app-playground--log"><div class="app-playground__log"></div></div>');
            const action = getAction('log', logWrap);
            action.addEventListener('click', () => {
                if (logWrap && logWrap.parentNode) {
                    logWrap.parentNode.removeChild(logWrap);
                }
            });
            logWrap.appendChild(action);
            _dom_1.insertAfter(logWrap, playground);
        }
        if (logWrap.firstElementChild) {
            logWrap.firstElementChild.appendChild(_dom_1.createNode(`<samp class="app-playground__log-item">${msgHtml}</samp>`));
        }
    }
};
function playgroundHandler() {
    document.querySelectorAll('[app-content] [app-playground]').forEach(enablePlayground);
}
function bootstrapPlayground() {
    window.addEventListener(_router_1.ON_NAVIGATE.END, playgroundHandler);
}
exports.bootstrapPlayground = bootstrapPlayground;


/***/ }),

/***/ "./src/front/ts/_router.ts":
/*!*********************************!*\
  !*** ./src/front/ts/_router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! ../../config */ "./src/config.ts");
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _fetch_1 = __webpack_require__(/*! ./_fetch */ "./src/front/ts/_fetch.ts");
let content;
let baseUrl;
var ON_NAVIGATE;
(function (ON_NAVIGATE) {
    ON_NAVIGATE["START"] = "appNavigateStart";
    ON_NAVIGATE["CANCEL"] = "appNavigateCancel";
    ON_NAVIGATE["END"] = "appNavigateEnd";
})(ON_NAVIGATE = exports.ON_NAVIGATE || (exports.ON_NAVIGATE = {}));
function getBaseHref() {
    const baseElement = document.querySelector('base');
    const base = baseElement.getAttribute('href').replace(/\/$/, '');
    const root = _dom_1.resolveUrl(baseElement.href);
    const index = _dom_1.resolveUrl(`${root}index.html`);
    const home = _dom_1.resolveUrl(`${root}${config_1.FRONT_PAGES_FOLDER}/index.html`);
    return { base, root, index, home };
}
function addStatePrefix(url) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    if (a.pathname !== '/') {
        const { base } = getBaseHref();
        a.pathname = a.pathname.replace(new RegExp(`^${base}`), base + config_1.SPA_URL_STATE_PREFIX);
    }
    return a.href;
}
function removeStatePrefix(url) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    const { base } = getBaseHref();
    a.pathname = a.pathname.replace(new RegExp(`^${base + config_1.SPA_URL_STATE_PREFIX}`), base);
    return a.href;
}
function pushState(url) {
    window.history.pushState({ appUrl: url }, '', addStatePrefix(url));
}
function replaceState(url) {
    window.history.replaceState({ appUrl: url }, '', addStatePrefix(url));
}
function emitNavigation(type, appUrl) {
    const event = new CustomEvent(type, { detail: { appUrl } });
    window.dispatchEvent(event);
}
function showContent(yes = true) {
    content.classList[yes ? 'add' : 'remove']('app-content--active');
}
function getMainUrl(url) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.href = a.pathname; // remove "hash" and "search" from full "href"
    return a.href;
}
function replacePathname(fromUrl, toUrl) {
    const fromLink = document.createElement('a');
    const toLink = document.createElement('a');
    fromLink.setAttribute('href', fromUrl);
    toLink.setAttribute('href', toUrl);
    fromLink.pathname = toLink.pathname; // Overwrite "pathname" but preserve "hash" and "search"
    return fromLink.href;
}
let pendingUrl = '';
function navigate(url) {
    if (pendingUrl) {
        emitNavigation(ON_NAVIGATE.CANCEL, pendingUrl);
    }
    const mainUrl = getMainUrl(url);
    if (mainUrl === baseUrl.home || mainUrl === baseUrl.index) {
        replaceState(replacePathname(url, baseUrl.root));
    }
    if (mainUrl === baseUrl.index || mainUrl === baseUrl.root) {
        url = replacePathname(url, baseUrl.home);
    }
    pendingUrl = url;
    emitNavigation(ON_NAVIGATE.START, url);
    showContent(false);
    return _fetch_1.fetchContent(url).then((html) => {
        if (url !== pendingUrl) {
            return;
        }
        _dom_1.insertHtml(html, content);
        pendingUrl = '';
        emitNavigation(ON_NAVIGATE.END, url);
        showContent();
    });
}
exports.navigate = navigate;
function stateHandler(event) {
    if (event.state && event.state.appUrl) {
        navigate(event.state.appUrl);
    }
}
function linkHandler(event) {
    let target = event.target;
    try {
        const appLink = target.closest('[app-link]');
        if (appLink) {
            target = appLink;
        }
    }
    catch (ignore) {
        // Note Element.closest NOT supported on IE11
    }
    if (target.hasAttribute('app-link')) {
        const link = target.getAttribute('app-link');
        let url;
        if (link) {
            url = _dom_1.resolveUrl(link);
        }
        if (target.nodeName.toLowerCase() === 'a') {
            event.preventDefault();
            if (!link && target.href) {
                url = target.href;
            }
        }
        if (url && url !== removeStatePrefix(window.location.href)) {
            pushState(url);
            navigate(url);
        }
    }
}
function getLinks(container) {
    return _dom_1.querySelectorAll('[app-link]', container).map((element) => {
        let url = _dom_1.resolveUrl(element.getAttribute('app-link') || element.href);
        if (url === baseUrl.home || url === baseUrl.index) {
            url = baseUrl.root;
        }
        return { element, url, active: url === removeStatePrefix(window.location.href) };
    });
}
function getActiveLinks(container) {
    return getLinks(container).filter(link => link.active).map(link => link.element);
}
exports.getActiveLinks = getActiveLinks;
function updateActiveLinks() {
    getLinks().forEach(link => link.element.classList[link.active ? 'add' : 'remove']('app-link__active'));
}
exports.updateActiveLinks = updateActiveLinks;
// The "handler" version is the same because we don't rely on the provided "event" parameter...
const activeLinkHandler = updateActiveLinks;
function initRouter() {
    content = document.querySelector('[app-content]');
    baseUrl = getBaseHref();
}
exports.initRouter = initRouter;
function bootstrapRouter() {
    navigate(removeStatePrefix(window.location.href));
    window.addEventListener('popstate', stateHandler);
    window.addEventListener('click', linkHandler);
    window.addEventListener(ON_NAVIGATE.END, activeLinkHandler);
}
exports.bootstrapRouter = bootstrapRouter;


/***/ }),

/***/ "./src/front/ts/_service-worker.ts":
/*!*****************************************!*\
  !*** ./src/front/ts/_service-worker.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function register() {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => console.log('Service Worker Registered')); // tslint:disable-line:no-console
}
exports.register = register;
function unregister() {
    navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
        for (const registration of registrations) {
            registration.unregister();
            console.log('Service Worker Unregistered'); // tslint:disable-line:no-console
        }
    });
}
exports.unregister = unregister;
function bootstrapServiceWorker(enable = true) {
    if ('serviceWorker' in navigator) {
        enable ? register() : unregister();
    }
}
exports.bootstrapServiceWorker = bootstrapServiceWorker;


/***/ }),

/***/ "./src/front/ts/_sidebar.ts":
/*!**********************************!*\
  !*** ./src/front/ts/_sidebar.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __webpack_require__(/*! ../../config */ "./src/config.ts");
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _fetch_1 = __webpack_require__(/*! ./_fetch */ "./src/front/ts/_fetch.ts");
const _menu_1 = __webpack_require__(/*! ./_menu */ "./src/front/ts/_menu.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
function bootstrapSidebar({ hidden = false }) {
    const element = document.querySelector('.app-grid__wrap');
    if (element && hidden)
        element.classList.add('app-grid__wrap--sidebar-hidden');
    const sidebar = document.querySelector('[app-sidebar]');
    if (sidebar) {
        _fetch_1.fetchContent(`./${config_1.FRONT_PAGES_FOLDER}/sidebar.html`).then((html) => {
            _dom_1.insertHtml(html, sidebar);
            _menu_1.bootstrapMenu(sidebar);
            _router_1.updateActiveLinks();
        });
    }
}
exports.bootstrapSidebar = bootstrapSidebar;
function toggleSidebar() {
    const element = document.querySelector('.app-grid__wrap');
    if (element)
        element.classList.toggle('app-grid__wrap--sidebar-hidden');
}
exports.toggleSidebar = toggleSidebar;
function bootstrapToggleSidebar() {
    const toggle = document.querySelector('[app-sidebar-toggle]');
    if (toggle)
        _dom_1.getAction('view_sidebar', toggle, toggleSidebar);
}
exports.bootstrapToggleSidebar = bootstrapToggleSidebar;


/***/ }),

/***/ "./src/front/ts/_spinner.ts":
/*!**********************************!*\
  !*** ./src/front/ts/_spinner.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
class Spinner {
    constructor(element, transition = { delay: 1000, duration: 400 }) {
        this.element = element;
        this.transition = transition;
        this.spinner = _dom_1.createNode('<div class="app-spinner"><i class="app-spinner__content fas fa-3x fa-spinner fa-pulse"></i></div>');
        this.spinner.style.transition = `opacity ${this.transition.duration}ms ease`;
    }
    show() {
        if (this.pendingHide) {
            this.cancelHide();
        }
        if (!this.pendingShow) {
            this.scheduleShow();
        }
    }
    hide() {
        if (this.pendingShow) {
            this.cancelShow();
        }
        if (!this.pendingHide) {
            this.scheduleHide();
        }
    }
    addSpinner() {
        this.element.appendChild(this.spinner);
    }
    removeSpinner() {
        if (this.spinner.parentNode === this.element) {
            this.element.removeChild(this.spinner);
        }
    }
    scheduleShow() {
        this.addSpinner();
        this.pendingShow = setTimeout(() => {
            this.pendingShow = null;
            this.spinner.classList.add('app-spinner--show');
        }, this.transition.delay);
    }
    cancelShow() {
        clearTimeout(this.pendingShow);
        this.pendingShow = null;
        this.removeSpinner();
    }
    scheduleHide() {
        this.spinner.classList.remove('app-spinner--show');
        this.pendingHide = setTimeout(() => {
            this.pendingHide = null;
            this.removeSpinner();
        }, this.transition.duration);
    }
    cancelHide() {
        clearTimeout(this.pendingHide);
        this.pendingHide = null;
    }
}
exports.Spinner = Spinner;
function bootstrapSpinner() {
    const spinner = new Spinner(document.querySelector('[app-spinner]'));
    window.addEventListener(_router_1.ON_NAVIGATE.START, () => {
        spinner.show();
    });
    window.addEventListener(_router_1.ON_NAVIGATE.END, () => {
        spinner.hide();
    });
}
exports.bootstrapSpinner = bootstrapSpinner;


/***/ }),

/***/ "./src/front/ts/_toolbox.ts":
/*!**********************************!*\
  !*** ./src/front/ts/_toolbox.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
const _dom_1 = __webpack_require__(/*! ./_dom */ "./src/front/ts/_dom.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
const _util_1 = __webpack_require__(/*! ./_util */ "./src/front/ts/_util.ts");
function getLinkIcon(icon, href = '#') {
    return _dom_1.createNode(`<a href="${href}"><i class="fas fa-${icon} fa-fw fa-lg"></i></a>`);
}
function toggleGridFixed() {
    const html = document.querySelector('html');
    const action = _dom_1.getAction('toggle_grid_fixed', getLinkIcon('arrows-alt-v'), () => {
        html.classList.toggle('app-grid--fixed');
    });
    return action.link;
}
function toggleSettingsDark() {
    const html = document.querySelector('html');
    const action = _dom_1.getAction('toggle_settings_dark', getLinkIcon('image'), () => {
        html.classList.toggle('app-settings--dark');
    });
    return action.link;
}
function toggleCss() {
    const headCss = _dom_1.querySelectorAll('head [app-css-toggle]');
    let contentCss;
    const toggle = (styles) => styles.forEach((style) => {
        /*
        // TODO: It seems that the property `HTMLStyleElement.disabled`
        // has been removed from the TypeScript dom interface!
        // But actually the property is valid:
        // https://www.w3.org/TR/cssom-1/#dom-stylesheet-disabled
    
        style.disabled = !style.disabled;
        */
        style.disabled = !style.disabled;
    });
    const action = _dom_1.getAction('toggle_css', getLinkIcon('eye-slash'), () => {
        toggle(headCss);
        if (contentCss)
            toggle(contentCss);
    });
    window.addEventListener(_router_1.ON_NAVIGATE.END, () => {
        contentCss = _dom_1.querySelectorAll('[app-content] [app-css-toggle]');
        if (action.active)
            toggle(contentCss);
    });
    return action.link;
}
function getFormattedCode(source) {
    const code = source.cloneNode(true);
    code.querySelectorAll('[app-code-hidden]').forEach((hidden) => {
        if (hidden.parentNode)
            hidden.parentNode.removeChild(hidden);
    });
    return _util_1.formatCode(code.innerHTML);
}
function viewCode() {
    const source = document.querySelector('[app-content]');
    source.classList.add('app-code__source');
    const wrap = _dom_1.wrapNode(source, 'app-code');
    const code = _dom_1.createNode('<pre class="app-code__target"><code></code></pre>');
    const action = _dom_1.getAction('view_code', getLinkIcon('code'), () => {
        wrap.classList.toggle('app-code--active');
        _dom_1.toggleNode(code, wrap);
    });
    window.addEventListener(_router_1.ON_NAVIGATE.END, () => {
        code.firstChild.innerHTML = prismjs_1.highlight(getFormattedCode(source), prismjs_1.languages.html, prismjs_1.languages.html);
    });
    return action.link;
}
function bootstrapToolbox() {
    const toolbox = document.querySelector('[app-toolbox]');
    if (!toolbox)
        return;
    toolbox.classList.add('app-toolbox');
    toolbox.appendChild(toggleGridFixed());
    toolbox.appendChild(toggleSettingsDark());
    // toolbox.appendChild(toggleCss());
    toolbox.appendChild(viewCode());
}
exports.bootstrapToolbox = bootstrapToolbox;


/***/ }),

/***/ "./src/front/ts/_util.ts":
/*!*******************************!*\
  !*** ./src/front/ts/_util.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let id = 0;
function getId() {
    id += 1;
    return id;
}
exports.getId = getId;
function formatCode(code) {
    // Remove useless indentation
    let lines = code.split('\n');
    const indent = lines.reduce((idt, currLine) => {
        if (currLine) {
            const currIndent = (currLine.match(/^[\s]+/) || [''])[0].length;
            idt = idt === -1 ? currIndent : Math.min(idt, currIndent);
        }
        return idt;
    }, -1);
    if (indent > 0)
        lines = lines.map(line => line.substr(indent));
    return lines.join('\n').trim().replace(/\n{2,}/g, '\n\n');
}
exports.formatCode = formatCode;


/***/ }),

/***/ "./src/front/ts/app.ts":
/*!*****************************!*\
  !*** ./src/front/ts/app.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _playground_1 = __webpack_require__(/*! ./_playground */ "./src/front/ts/_playground.ts");
const _router_1 = __webpack_require__(/*! ./_router */ "./src/front/ts/_router.ts");
const _sidebar_1 = __webpack_require__(/*! ./_sidebar */ "./src/front/ts/_sidebar.ts");
const _spinner_1 = __webpack_require__(/*! ./_spinner */ "./src/front/ts/_spinner.ts");
const _service_worker_1 = __webpack_require__(/*! ./_service-worker */ "./src/front/ts/_service-worker.ts");
const _toolbox_1 = __webpack_require__(/*! ./_toolbox */ "./src/front/ts/_toolbox.ts");
// To fully unregister the service worker, you need first to be in development mode (`PRODUCTION = false`).
// But if a service worker is already activated, you also need to change the `cacheVersion` number in
// `./src/front/service-worker.js`.
//
// Finally, to enable the service worker in development mode,
// comment temporarily the argument `PRODUCTION`.
_service_worker_1.bootstrapServiceWorker(false);
window.addEventListener('DOMContentLoaded', () => {
    // Init the router at the begining to let the next modules use
    // `getActiveLinks` which  requires `baseUrl` to be defined.
    _router_1.initRouter();
    _sidebar_1.bootstrapSidebar({ hidden: true });
    _sidebar_1.bootstrapToggleSidebar();
    _spinner_1.bootstrapSpinner();
    _toolbox_1.bootstrapToolbox();
    _playground_1.bootstrapPlayground();
    // Bootstrap the router at the end to let the previous
    // modules react to the first `ON_NAVIGATE` event.
    _router_1.bootstrapRouter();
});
/*

Naming convention
-----------------

bootstrapFoo
  A function that modifies the DOM or binds events on it.
  The function is exported by the module.

fooHandler
  A function that is executed as an event callback.
  Usually the function is not exported by the module.

ON_FOO
  Custom event name.
  The variable is exported by the module.

*/


/***/ })

/******/ });
//# sourceMappingURL=app.js.map