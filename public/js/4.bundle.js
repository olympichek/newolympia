(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./js/admin/page_edit/page_editor.js":
/*!*******************************************!*\
  !*** ./js/admin/page_edit/page_editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.load = load;\n\nvar _ckeditor5BuildCustom = __webpack_require__(/*! @ckeditor/ckeditor5-build-custom */ \"./node_modules/@ckeditor/ckeditor5-build-custom/build/ckeditor.js\");\n\nvar _ckeditor5BuildCustom2 = _interopRequireDefault(_ckeditor5BuildCustom);\n\nvar _get_cookie_function = __webpack_require__(/*! ../../all/get_cookie_function */ \"./js/all/get_cookie_function.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction load() {\n    var editor = void 0;\n    function setUnsaved() {\n        var status_text = document.querySelector('#page_editing_status_span');\n        status_text.innerHTML = \"не сохранено\";\n        status_text.style.color = \"red\";\n    }\n    _ckeditor5BuildCustom2.default.create(document.querySelector('#editor')).then(function (newEditor) {\n        var toolbarContainer = document.querySelector('#toolbar-container');\n        editor = newEditor;\n        toolbarContainer.appendChild(newEditor.ui.view.toolbar.element);\n        newEditor.model.document.on('change:data', function () {\n            setUnsaved();\n        });\n    }).catch(function (error) {\n        console.error(error);\n    });\n    document.querySelector(\"#name-russian-input\").addEventListener('input', setUnsaved);\n    document.querySelector('#page_data_submit').addEventListener('click', function () {\n        var editorData = editor.getData();\n        var page = window.location.pathname.split(\"/\")[4];\n        var pageName = document.querySelector(\"#name-russian-input\").value.trim();\n        var token = (0, _get_cookie_function.getCookie)(\"client_temp_hash\");\n        var requestObj = {\n            \"page_name\": page,\n            \"page_name_rus\": pageName,\n            \"page_text\": editorData,\n            \"token\": token\n        };\n        var requestJSON = encodeURIComponent(JSON.stringify(requestObj));\n        var request = \"json=\" + requestJSON;\n        var xhr = new XMLHttpRequest();\n        xhr.open(\"POST\", \"/admin/page_admin/save\", true);\n        xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n        xhr.send(request);\n        xhr.onload = function () {\n            var status_text = document.querySelector('#page_editing_status_span');\n            status_text.innerHTML = \"сохранено\";\n            status_text.style.color = \"green\";\n        };\n    });\n}\n\n//# sourceURL=webpack:///./js/admin/page_edit/page_editor.js?");

/***/ }),

/***/ "./js/all/get_cookie_function.js":
/*!***************************************!*\
  !*** ./js/all/get_cookie_function.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCookie = getCookie;\nfunction getCookie(search_cookie_name) {\n    var cookies_string = document.cookie;\n    var cookies_array = cookies_string.split(\";\");\n    var search_cookie_value = 0;\n    for (var i = 0; i < cookies_array.length; i++) {\n        var cookie_parts = cookies_array[i].split(\"=\");\n        var cookie_name = cookie_parts[0].trim();\n        var cookie_value = cookie_parts[1].trim();\n        if (cookie_name === search_cookie_name) {\n            search_cookie_value = cookie_value;\n        }\n    }\n    return search_cookie_value;\n}\n\n//# sourceURL=webpack:///./js/all/get_cookie_function.js?");

/***/ })

}]);