(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./js/modules/ResizeColumns.js":
/*!*************************************!*\
  !*** ./js/modules/ResizeColumns.js ***!
  \*************************************/
/*! exports provided: ResizeColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResizeColumns\", function() { return ResizeColumns; });\nclass ResizeColumns {\n  main() {\n    const obj = this;\n    window.addEventListener(\"DOMContentLoaded\", function () {\n      obj.onHeightChange(document.getElementById(\"main\"), function () {\n        obj.resize();\n      });\n    });\n    window.addEventListener(\"load\", obj.resize);\n    window.addEventListener(\"resize\", obj.debounce(obj.resize, 200));\n  }\n\n  debounce(fn, interval) {\n    let timer;\n    return function debounced() {\n      clearTimeout(timer);\n      let args = arguments;\n      let that = this;\n      timer = setTimeout(function callOriginalFn() {\n        fn.apply(that, args);\n      }, interval);\n    };\n  }\n\n  onHeightChange(elm, callback) {\n    let lastHeight = elm.clientHeight,\n        newHeight;\n\n    (function run() {\n      newHeight = elm.clientHeight;\n      if (lastHeight !== newHeight) callback();\n      lastHeight = newHeight;\n      if (elm.heightChangeTimer) clearTimeout(elm.heightChangeTimer);\n      elm.heightChangeTimer = setTimeout(run, 200);\n    })();\n  }\n\n  resize() {\n    let left_column = document.getElementById(\"left-column-center\");\n    let right_column = document.getElementById(\"right-column-center\");\n    let center = document.getElementById(\"main\");\n    let center_height = center.offsetHeight;\n    let left_menu = document.getElementById(\"left-menu\");\n    let left_menu_height = left_menu.offsetHeight;\n    let right_menu = document.getElementById(\"right-menu\");\n    let right_menu_height = right_menu.offsetHeight;\n    let max_height = center_height;\n\n    if (left_menu_height > max_height) {\n      max_height = left_menu_height;\n    }\n\n    if (right_menu_height > max_height) {\n      max_height = right_menu_height;\n    }\n\n    let column_top = document.getElementById(\"left-column-top\");\n    let column_bottom = document.getElementById(\"left-column-bottom\");\n    let column_top_height = column_top.offsetHeight;\n    let column_bottom_height = column_bottom.offsetHeight;\n    let result_height = max_height - column_top_height - column_bottom_height + 50 + \"px\";\n    let page = document.getElementsByTagName(\"body\")[0].className;\n\n    if (page.indexOf(\"body-page\") !== -1) {\n      left_column.style.height = result_height;\n      let left_column_full = document.getElementById(\"left-column\");\n      let result_height_right = left_column_full.offsetHeight;\n      right_column.style.height = result_height_right + \"px\";\n    }\n\n    if (page.indexOf(\"body-main\") !== -1) {\n      left_column.style.height = result_height;\n      right_column.style.height = result_height;\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./js/modules/ResizeColumns.js?");

/***/ })

}]);