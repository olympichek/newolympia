(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./js/admin/page_edit/edit_page_link.js":
/*!**********************************************!*\
  !*** ./js/admin/page_edit/edit_page_link.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.load = load;\nfunction load() {\n    var pages_list = document.getElementById(\"pages-list-edit\");\n    var loading_page = pages_list.value;\n    var href_value = \"/admin/page_admin/edit/\" + loading_page;\n    var link = document.getElementById(\"page-edit-href\");\n    link.addEventListener(\"click\", function () {\n        window.open(href_value);\n    });\n}\n\n//# sourceURL=webpack:///./js/admin/page_edit/edit_page_link.js?");

/***/ })

}]);