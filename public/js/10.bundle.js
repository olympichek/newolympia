(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./js/admin/right_banners/edit_banners_link.js":
/*!*****************************************************!*\
  !*** ./js/admin/right_banners/edit_banners_link.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.load = load;\nfunction load() {\n    var link = document.querySelector(\"#banners-page-href\");\n    link.addEventListener(\"click\", function () {\n        var pages_list = document.querySelector(\"#banners-pages-list\");\n        var href_default = \"/admin/right_banners/edit/\";\n        var page = pages_list.value;\n        window.location.href = href_default + page;\n    });\n}\n\n//# sourceURL=webpack:///./js/admin/right_banners/edit_banners_link.js?");

/***/ })

}]);