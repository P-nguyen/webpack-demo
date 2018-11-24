(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.addImg = exports.addToDom = exports.login = undefined;\n\nvar _users = __webpack_require__(/*! ./users */ \"./src/users.js\");\n\nvar _users2 = _interopRequireDefault(_users);\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar login = exports.login = function login(username, password) {\n    var user = _users2.default[username];\n\n    if (user && user.password === password) {\n        return \"user is looged in as: \" + user.name;\n    }\n\n    return \"Invalid username and/or password\";\n};\n\nvar addToDom = exports.addToDom = function addToDom(type, text) {\n    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';\n\n    var element = (0, _jquery2.default)('<' + type + '>', {\n        text: text,\n        class: className\n    });\n\n    (0, _jquery2.default)('#root').append(element);\n};\n\nvar addImg = exports.addImg = function addImg(src) {\n    var img = (0, _jquery2.default)('<img>', { src: src });\n\n    (0, _jquery2.default)('#root').append(img);\n};\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    DiscoStu: {\n        password: 'asdf',\n        name: 'Stu Dumworth'\n    },\n    SassySally: {\n        password: 'qwer',\n        name: 'Heather Newman'\n    },\n    HopeWaits: {\n        password: 'zxcv',\n        name: 'Anna Dumworth'\n    },\n    DietCoke: {\n        password: 'justforthehasteofit',\n        name: 'ben hur'\n    }\n};\n\n//# sourceURL=webpack:///./src/users.js?");

/***/ })

}]);