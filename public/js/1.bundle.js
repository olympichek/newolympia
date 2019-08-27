(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/modules/Cookie.js":
/*!******************************!*\
  !*** ./js/modules/Cookie.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Cookie = exports.Cookie = function () {\n    function Cookie(cookie_name, cookie_value) {\n        _classCallCheck(this, Cookie);\n\n        this.cookie_name = cookie_name;\n        this.cookie_value = cookie_value;\n    }\n\n    _createClass(Cookie, [{\n        key: \"name\",\n        get: function get() {\n            return this.cookie_name;\n        }\n    }, {\n        key: \"value\",\n        get: function get() {\n            return this.cookie_value;\n        }\n    }], [{\n        key: \"getCookieByName\",\n        value: function getCookieByName(cookie_name) {\n            var cookies_string = document.cookie;\n            var cookies_array = cookies_string.split(\";\");\n            var cookie_value = null;\n            for (var i = 0; i < cookies_array.length; i++) {\n                var current_cookie_parts = cookies_array[i].split(\"=\");\n                var current_cookie_name = current_cookie_parts[0].trim();\n                var current_cookie_value = current_cookie_parts[1].trim();\n                if (current_cookie_name === cookie_name) {\n                    cookie_value = current_cookie_value;\n                }\n            }\n            return new Cookie(cookie_name, cookie_value);\n        }\n    }]);\n\n    return Cookie;\n}();\n\n//# sourceURL=webpack:///./js/modules/Cookie.js?");

/***/ }),

/***/ "./js/modules/PageAdminLinks.js":
/*!**************************************!*\
  !*** ./js/modules/PageAdminLinks.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.PageAdminLinks = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Cookie = __webpack_require__(/*! ./Cookie */ \"./js/modules/Cookie.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PageAdminLinks = exports.PageAdminLinks = function () {\n    function PageAdminLinks() {\n        _classCallCheck(this, PageAdminLinks);\n    }\n\n    _createClass(PageAdminLinks, [{\n        key: \"main\",\n        value: function main() {\n            var _this = this;\n\n            var create_link = document.getElementById(\"page-create-href\");\n            create_link.addEventListener(\"click\", function () {\n                _this.createLinkClicked();\n            });\n\n            var edit_link = document.getElementById(\"page-edit-href\");\n            edit_link.addEventListener(\"click\", function () {\n                _this.editLinkClicked();\n            });\n\n            var delete_link = document.getElementById(\"page-delete-href\");\n            delete_link.addEventListener(\"click\", function () {\n                _this.deleteLinkClicked();\n            });\n        }\n    }, {\n        key: \"createLinkClicked\",\n        value: function createLinkClicked() {\n            var _this2 = this;\n\n            var page_name = document.getElementById(\"create-page-name\").value;\n            var xhr = new XMLHttpRequest();\n            var token = _Cookie.Cookie.getCookieByName(\"temp_hash\").value;\n            var request = \"name=\" + encodeURIComponent(page_name) + \"&token=\" + encodeURIComponent(token);\n            var check = /^[a-zA-Z0-9_]+$/;\n            var href_value = \"/admin/page_admin/edit/\" + page_name;\n            if (page_name.match(check)) {\n                var editWindow = window.open(\"\", \"_blank\");\n                xhr.open(\"POST\", \"/admin/page_admin/create\", true);\n                xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n                xhr.send(request);\n                xhr.onload = function () {\n                    _this2.reloadEditList();\n                    _this2.reloadDeleteList();\n                    editWindow.location.replace(href_value);\n                };\n            } else {\n                window.open(\"/admin/page_admin/create_error\", \"_blank\");\n            }\n        }\n    }, {\n        key: \"editLinkClicked\",\n        value: function editLinkClicked() {\n            var pages_list = document.getElementById(\"pages-list-edit\");\n            var loading_page = pages_list.value;\n            var href_value = \"/admin/page_admin/edit/\" + loading_page;\n            window.open(href_value, \"_blank\");\n        }\n    }, {\n        key: \"deleteLinkClicked\",\n        value: function deleteLinkClicked() {\n            var _this3 = this;\n\n            var pages_list = document.getElementById(\"pages-list-delete\");\n            var page_name = pages_list.value;\n            var xhr = new XMLHttpRequest();\n            var token = _Cookie.Cookie.getCookieByName(\"temp_hash\").value;\n            var request = \"name=\" + encodeURIComponent(page_name) + \"&token=\" + encodeURIComponent(token);\n            xhr.open(\"POST\", \"/admin/page_admin/delete\", true);\n            xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n            xhr.send(request);\n            xhr.onload = function () {\n                _this3.reloadEditList();\n                _this3.reloadDeleteList();\n            };\n        }\n    }, {\n        key: \"reloadEditList\",\n        value: function reloadEditList() {\n            var _this4 = this;\n\n            var pages_list_edit = document.getElementById(\"pages-list-edit\");\n            var xhr = new XMLHttpRequest();\n            xhr.open(\"GET\", \"/admin/page_admin/pages_list/edit\", true);\n            xhr.send();\n            xhr.onload = function () {\n                pages_list_edit.innerHTML = _this4.buildList(xhr.responseText);\n            };\n        }\n    }, {\n        key: \"reloadDeleteList\",\n        value: function reloadDeleteList() {\n            var _this5 = this;\n\n            var pages_list_delete = document.getElementById(\"pages-list-delete\");\n            var xhr = new XMLHttpRequest();\n            xhr.open(\"GET\", \"/admin/page_admin/pages_list/delete\", true);\n            xhr.send();\n            xhr.onload = function () {\n                pages_list_delete.innerHTML = _this5.buildList(xhr.responseText);\n            };\n        }\n    }, {\n        key: \"buildList\",\n        value: function buildList(responseText) {\n            var arr = JSON.parse(responseText);\n            var html = \"\";\n            for (var i = 0; i < arr.length; i++) {\n                html += \"<option value=\\\"\" + arr[i][0] + \"\\\">\" + arr[i][1] + \"</option>\";\n            }\n            return html;\n        }\n    }]);\n\n    return PageAdminLinks;\n}();\n\n//# sourceURL=webpack:///./js/modules/PageAdminLinks.js?");

/***/ })

}]);