/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/public/js/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/load.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Route */ \"./js/core/Route.js\");\n\n_core_Route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"].register(\"*\", \"ResizeColumns@main\");\n_core_Route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"].register(\"/admin/files\", \"FilesUpload@load\");\n_core_Route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"].register(\"/admin/page_admin/index\", \"PageAdminLinks@main\");\n_core_Route__WEBPACK_IMPORTED_MODULE_0__[\"Route\"].register(\"/admin/page_admin/edit/{page}\", \"PageEditor@load\");\n\n//# sourceURL=webpack:///./js/config.js?");

/***/ }),

/***/ "./js/core/Route.js":
/*!**************************!*\
  !*** ./js/core/Route.js ***!
  \**************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Route\", function() { return Route; });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Route {\n  static register(uri, class_method) {\n    const routes_list_length = Route.routes_list.length;\n    const class_method_parts = class_method.split(\"@\");\n    const class_name = class_method_parts[0];\n    const method_name = class_method_parts[1];\n    Route.routes_list[routes_list_length] = {\n      uri,\n      class_name,\n      method_name\n    };\n    return routes_list_length;\n  }\n\n  static explode(uri) {\n    if (uri[0] === \"/\") uri = uri.slice(1);\n    if (uri[uri.length - 1] === \"/\") uri = uri.slice(0, -1);\n    return uri.split(\"/\");\n  }\n\n  static validate(uri, route) {\n    let routes_array = Route.explode(uri);\n    let routes_check_array = Route.explode(route);\n    let check = 1;\n\n    if (routes_array.length !== routes_check_array.length) {\n      check = 0;\n    } else {\n      for (let i = 0; i < routes_array.length; i++) {\n        let var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;\n        let route_regexp = /^[a-zA-Z0-9_]+$/;\n\n        if (var_regexp.test(routes_check_array[i])) {\n          if (!route_regexp.test(routes_array[i])) {\n            check = 0;\n          }\n        } else {\n          if (!route_regexp.test(routes_array[i])) {\n            check = 0;\n          } else if (!route_regexp.test(routes_check_array[i])) {\n            check = 0;\n          } else if (routes_array[i] !== routes_check_array[i]) {\n            check = 0;\n          }\n        }\n      }\n    }\n\n    if (uri === \"/\" && route === \"/\") {\n      check = 1;\n    }\n\n    if (route === \"*\") {\n      check = 1;\n    }\n\n    return check;\n  }\n\n  static loadingError() {\n    console.log(\"Error while loading module...\");\n  }\n\n  static async start() {\n    let request = window.location.pathname;\n    let route_index = [];\n    let count = 0;\n\n    for (let i = 0; i < Route.routes_list.length; i++) {\n      if (Route.validate(request, Route.routes_list[i][\"uri\"])) {\n        route_index[count] = i;\n        count++;\n      }\n    }\n\n    if (route_index.length !== 0) {\n      for (let i = 0; i < route_index.length; i++) {\n        let route = Route.routes_list[route_index[i]][\"uri\"];\n        let request = window.location.pathname;\n        let route_parts = Route.explode(route);\n        let request_parts = Route.explode(request);\n        let request_args = {};\n\n        for (let j = 0; j < route_parts.length; j++) {\n          let var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;\n\n          if (var_regexp.test(route_parts[j])) {\n            let arg_name = route_parts[j].slice(1, -1);\n            request_args[arg_name] = request_parts[j];\n          }\n        }\n\n        const class_name = Route.routes_list[route_index[i]][\"class_name\"];\n        const method_name = Route.routes_list[route_index[i]][\"method_name\"];\n        const module = await __webpack_require__(\"./js/modules lazy recursive ^\\\\.\\\\/.*\\\\.js$\")(\"./\" + class_name + \".js\");\n        const obj = new module[class_name]();\n        obj[method_name](request_args);\n      }\n    } else {\n      Route.loadingError();\n    }\n  }\n\n}\n\n_defineProperty(Route, \"routes_list\", []);\n\n//# sourceURL=webpack:///./js/core/Route.js?");

/***/ }),

/***/ "./js/load.js":
/*!********************!*\
  !*** ./js/load.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./js/config.js\");\n/* harmony import */ var _core_Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Route */ \"./js/core/Route.js\");\n\n\n_core_Route__WEBPACK_IMPORTED_MODULE_1__[\"Route\"].start();\n\n//# sourceURL=webpack:///./js/load.js?");

/***/ }),

/***/ "./js/modules lazy recursive ^\\.\\/.*\\.js$":
/*!*******************************************************!*\
  !*** ./js/modules lazy ^\.\/.*\.js$ namespace object ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./FilesUpload.js\": [\n\t\t\"./js/modules/FilesUpload.js\",\n\t\t2\n\t],\n\t\"./PageAdminLinks.js\": [\n\t\t\"./js/modules/PageAdminLinks.js\",\n\t\t1\n\t],\n\t\"./PageEditor.js\": [\n\t\t\"./js/modules/PageEditor.js\",\n\t\t0\n\t],\n\t\"./ResizeColumns.js\": [\n\t\t\"./js/modules/ResizeColumns.js\",\n\t\t3\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(function() {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(function() {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = function webpackAsyncContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackAsyncContext.id = \"./js/modules lazy recursive ^\\\\.\\\\/.*\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack:///./js/modules_lazy_^\\.\\/.*\\.js$_namespace_object?");

/***/ })

/******/ });