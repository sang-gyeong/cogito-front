"use strict";
(() => {
var exports = {};
exports.id = 456;
exports.ids = [456];
exports.modules = {

/***/ 5107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _src_constants_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9524);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(_req, res) {
  res.status(200).json(_src_constants_data__WEBPACK_IMPORTED_MODULE_0__/* .MOCK_UP_BOARDS */ .eV);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [524], () => (__webpack_exec__(5107)));
module.exports = __webpack_exports__;

})();