"use strict";
exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 9778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ TitleSection)
/* harmony export */ });
/* unused harmony exports Wrapper, Title, Content */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function TitleSection({
  title,
  content,
  component
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, {
    children: [title && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Title, {
      children: title
    }), content && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Content, {
      children: content
    }), component]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "TitleSection__Wrapper",
  componentId: "sc-1yt3agh-0"
})(["width:100%;border-top:1px solid lightgray;padding:24px 6px 24px 32px;position:relative;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TitleSection__Title",
  componentId: "sc-1yt3agh-1"
})(["font-weight:bold;font-size:2.3rem;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "TitleSection__Content",
  componentId: "sc-1yt3agh-2"
})(["margin-top:6px;"]);

/***/ })

};
;