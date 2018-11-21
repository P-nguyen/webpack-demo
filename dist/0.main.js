(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: login, addToDom, addImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToDom\", function() { return addToDom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addImg\", function() { return addImg; });\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst login = (username, password) => {\r\n    const user = _users__WEBPACK_IMPORTED_MODULE_0__[\"default\"][username];\r\n\r\n    if(user && user.password === password){\r\n        return \"user is looged in as: \" + user.name;\r\n    }\r\n\r\n    return \"Invalid username and/or password\";\r\n}\r\n\r\nconst addToDom = ( type, text, className = 'red') => {\r\n    const element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(`<${type}>`, { \r\n        text,\r\n        class: className \r\n    });\r\n\r\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(element);\r\n};\r\n\r\nconst addImg = (src) => {\r\n    const img = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<img>',{ src });\r\n\r\n    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#root').append(img);\r\n}\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    DiscoStu: {\r\n        password: 'asdf',\r\n        name: 'Stu Dumworth'\r\n    },\r\n    SassySally: {\r\n        password: 'qwer',\r\n        name: 'Heather Newman'\r\n    },\r\n    HopeWaits: {\r\n        password: 'zxcv',\r\n        name: 'Anna Dumworth'\r\n    },\r\n    DietCoke: {\r\n        password: 'justforthehasteofit',\r\n        name: 'ben hur'\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/users.js?");

/***/ })

}]);