(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./js/all/all.js":
/*!***********************!*\
  !*** ./js/all/all.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.load = load;\n\nvar _columns_height = __webpack_require__(/*! ./columns_height.js */ \"./js/all/columns_height.js\");\n\nfunction load() {\n    (0, _columns_height.changeColumnsHeight)();\n}\n\n//# sourceURL=webpack:///./js/all/all.js?");

/***/ }),

/***/ "./js/all/columns_height.js":
/*!**********************************!*\
  !*** ./js/all/columns_height.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.changeColumnsHeight = changeColumnsHeight;\nfunction changeColumnsHeight() {\n    function debounce(fn, interval) {\n        var timer = void 0;\n        return function debounced() {\n            clearTimeout(timer);\n            var args = arguments;\n            var that = this;\n            timer = setTimeout(function callOriginalFn() {\n                fn.apply(that, args);\n            }, interval);\n        };\n    }\n\n    function resize_columns() {\n        var left_column = document.getElementById(\"left-column-center\");\n        var right_column = document.getElementById(\"right-column-center\");\n        var center = document.getElementById(\"main\");\n        var center_height = center.offsetHeight;\n        var left_menu = document.getElementById(\"left-menu\");\n        var left_menu_height = left_menu.offsetHeight;\n        var right_menu = document.getElementById(\"right-menu\");\n        var right_menu_height = right_menu.offsetHeight;\n        var max_height = center_height;\n        if (left_menu_height > max_height) {\n            max_height = left_menu_height;\n        }\n        if (right_menu_height > max_height) {\n            max_height = right_menu_height;\n        }\n        var column_top = document.getElementById(\"left-column-top\");\n        var column_bottom = document.getElementById(\"left-column-bottom\");\n        var column_top_height = column_top.offsetHeight;\n        var column_bottom_height = column_bottom.offsetHeight;\n        var result_height = max_height - column_top_height - column_bottom_height + 50 + \"px\";\n        var page = document.getElementsByTagName(\"body\")[0].className;\n        if (page.indexOf(\"body-page\") !== -1) {\n            left_column.style.height = result_height;\n            var left_column_full = document.getElementById(\"left-column\");\n            var result_height_right = left_column_full.offsetHeight;\n            right_column.style.height = result_height_right + \"px\";\n        }\n        if (page.indexOf(\"body-main\") !== -1) {\n            left_column.style.height = result_height;\n            right_column.style.height = result_height;\n        }\n    }\n\n    function contentHeightChange(elm, callback) {\n        var lastHeight = elm.clientHeight,\n            newHeight = void 0;\n        (function run() {\n            newHeight = elm.clientHeight;\n            if (lastHeight !== newHeight) callback();\n            lastHeight = newHeight;\n\n            if (elm.heightChangeTimer) clearTimeout(elm.heightChangeTimer);\n\n            elm.heightChangeTimer = setTimeout(run, 200);\n        })();\n    }\n\n    contentHeightChange(document.getElementById(\"center\"), function () {\n        resize_columns();\n    });\n    window.addEventListener(\"load\", resize_columns);\n    window.addEventListener(\"resize\", debounce(resize_columns, 200));\n}\n\n//# sourceURL=webpack:///./js/all/columns_height.js?");

/***/ })

}]);