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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.register_routes = register_routes;\n\nvar _Route = __webpack_require__(/*! ./core/Route */ \"./js/core/Route.js\");\n\nfunction register_routes() {\n    var route = new _Route.Route();\n    route.register(\"*\", \"ResizeColumns@main\", function () {\n        return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ./modules/ResizeColumns.js */ \"./js/modules/ResizeColumns.js\", 7));\n    });\n    route.register(\"/admin/files\", \"FilesUpload@load\", function () {\n        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ./modules/FilesUpload.js */ \"./js/modules/FilesUpload.js\", 7));\n    });\n    route.register(\"/admin/page_admin/index\", \"PageAdminLinks@main\", function () {\n        return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ./modules/PageAdminLinks.js */ \"./js/modules/PageAdminLinks.js\", 7));\n    });\n    route.register(\"/admin/page_admin/edit/{page}\", \"PageEditor@load\", function () {\n        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! ./modules/PageEditor.js */ \"./js/modules/PageEditor.js\", 7));\n    });\n    return route;\n}\n\n//# sourceURL=webpack:///./js/config.js?");

/***/ }),

/***/ "./js/core/Route.js":
/*!**************************!*\
  !*** ./js/core/Route.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Route = exports.Route = function () {\n    function Route() {\n        _classCallCheck(this, Route);\n\n        this.routes_list = [];\n    }\n\n    _createClass(Route, [{\n        key: \"register\",\n        value: function register(uri, class_method, import_fn) {\n            var routes_list_length = this.routes_list.length;\n            var class_method_parts = class_method.split(\"@\");\n            var class_name = class_method_parts[0];\n            var method_name = class_method_parts[1];\n            this.routes_list[routes_list_length] = { uri: uri, class_name: class_name, method_name: method_name, import_fn: import_fn };\n            return routes_list_length;\n        }\n    }, {\n        key: \"explode\",\n        value: function explode(uri) {\n            if (uri[0] === \"/\") uri = uri.slice(1);\n            if (uri[uri.length - 1] === \"/\") uri = uri.slice(0, -1);\n            return uri.split(\"/\");\n        }\n    }, {\n        key: \"validate\",\n        value: function validate(uri, route) {\n            var routes_array = this.explode(uri);\n            var routes_check_array = this.explode(route);\n            var check = 1;\n            if (routes_array.length !== routes_check_array.length) {\n                check = 0;\n            } else {\n                for (var i = 0; i < routes_array.length; i++) {\n                    var var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;\n                    var route_regexp = /^[a-zA-Z0-9_]+$/;\n                    if (var_regexp.test(routes_check_array[i])) {\n                        if (!route_regexp.test(routes_array[i])) {\n                            check = 0;\n                        }\n                    } else {\n                        if (!route_regexp.test(routes_array[i])) {\n                            check = 0;\n                        } else if (!route_regexp.test(routes_check_array[i])) {\n                            check = 0;\n                        } else if (routes_array[i] !== routes_check_array[i]) {\n                            check = 0;\n                        }\n                    }\n                }\n            }\n            if (uri === \"/\" && route === \"/\") {\n                check = 1;\n            }\n            if (route === \"*\") {\n                check = 1;\n            }\n            return check;\n        }\n    }, {\n        key: \"loadingError\",\n        value: function loadingError() {\n            console.log(\"Error while loading module...\");\n        }\n    }, {\n        key: \"start\",\n        value: async function start() {\n            var request = window.location.pathname;\n            var route_index = [];\n            var count = 0;\n            for (var i = 0; i < this.routes_list.length; i++) {\n                if (this.validate(request, this.routes_list[i][\"uri\"])) {\n                    route_index[count] = i;\n                    count++;\n                }\n            }\n            if (route_index.length !== 0) {\n                for (var _i = 0; _i < route_index.length; _i++) {\n                    var route = this.routes_list[route_index[_i]][\"uri\"];\n                    var _request = window.location.pathname;\n                    var route_parts = this.explode(route);\n                    var request_parts = this.explode(_request);\n                    var request_args = {};\n                    for (var j = 0; j < route_parts.length; j++) {\n                        var var_regexp = /^[{][a-zA-Z0-9_]+[}]$/;\n                        if (var_regexp.test(route_parts[j])) {\n                            var arg_name = route_parts[j].slice(1, -1);\n                            request_args[arg_name] = request_parts[j];\n                        }\n                    }\n                    var module = await this.routes_list[route_index[_i]][\"import_fn\"]();\n                    var class_name = this.routes_list[route_index[_i]][\"class_name\"];\n                    var method_name = this.routes_list[route_index[_i]][\"method_name\"];\n                    var obj = new module[class_name]();\n                    obj[method_name](request_args);\n                }\n            } else {\n                this.loadingError();\n            }\n        }\n    }]);\n\n    return Route;\n}();\n\n//# sourceURL=webpack:///./js/core/Route.js?");

/***/ }),

/***/ "./js/load.js":
/*!********************!*\
  !*** ./js/load.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./config */ \"./js/config.js\");\n\nvar route = (0, _config.register_routes)();\nroute.start();\n\n//# sourceURL=webpack:///./js/load.js?");

/***/ })

/******/ });