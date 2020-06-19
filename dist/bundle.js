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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function () {\n  function create(elem) {\n    return document.createElement(elem);\n  }\n  function append(parent, elem) {\n    parent.appendChild(elem);\n  }\n  function remove(elem) {\n    elem ? elem.parentNode.removeChild(elem) : null;\n  }\n  function selector(elem, class_name = \"default\") {\n    elem.classList.add(class_name);\n    return elem;\n  }\n  function search(selectors, all) {\n    if (all === true && selectors !== false) {\n      return document.querySelectorAll(selectors);\n    }\n    if (selectors !== false) {\n      return document.querySelector(selectors);\n    }\n  }\n  function numb(number) {\n    if (typeof Number(number) === \"number\" && isNaN(Number(number)) === false) {\n      return Number(number);\n    }\n    return false;\n  }\n\n  const doc = document.body;\n\n  append(doc, selector(create(\"input\"), \"inp_1\"));\n  append(doc, create(\"br\"));\n  append(doc, selector(create(\"input\"), \"inp_2\"));\n  append(doc, create(\"br\"));\n  append(doc, selector(create(\"button\"), \"but\"));\n\n  search(\".but\").innerHTML = \"Calculate\";\n\n  search(\".but\").onclick = function () {\n    try {\n      remove(search(\".result\") || false);\n      remove(search(\".error-message\"));\n      remove(search(\".error-message\"));\n    } catch (e) {}\n\n    const inp1 = search(\".inp_1\");\n    const inp2 = search(\".inp_2\");\n    if (\n      numb(inp1.value) === false ||\n      inp1.value.replace(/ +/g, \" \").trim() === \"\"\n    ) {\n      inp1.parentNode.insertBefore(\n        selector(create(\"span\"), \"error-message\"),\n        inp1.nextSibling\n      );\n      search(\".error-message\", true)[0].innerHTML = \" Это не число \";\n    }\n    if (\n      numb(inp2.value) === false ||\n      inp2.value.replace(/ +/g, \" \").trim() === \"\"\n    ) {\n      inp2.parentNode.insertBefore(\n        selector(create(\"span\"), \"error-message\"),\n        inp2.nextSibling\n      );\n      search(\".error-message\", true)[\n        search(\".error-message\", true).length - 1\n      ].innerHTML = \" Это не число \";\n    }\n\n    if (!search(\".error-message\")) {\n      doc.appendChild(selector(create(\"div\"), \"result\"));\n      search(\".result\").innerHTML = Number(inp1.value) + Number(inp2.value);\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });