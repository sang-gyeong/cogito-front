"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/questions",{

/***/ "./src/components/Common/SideWrapper.tsx":
/*!***********************************************!*\
  !*** ./src/components/Common/SideWrapper.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SideWrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mediaQuery */ \"./src/utils/mediaQuery.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/kakaocommerce/project/cogito-front/src/components/Common/SideWrapper.tsx\";\n\n\n\nfunction SideWrapper() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Content, {\n      children: \"\\uD83D\\uDD27\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      style: {\n        fontSize: '0.8rem'\n      },\n      children: \"\\uC0C8 \\uAE30\\uB2A5 \\uC624\\uD508 \\uC900\\uBE44\\uC911\\uC785\\uB2C8\\uB2E4 (\\uB69D\\uB531\\uB69D\\uB531)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n_c = SideWrapper;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideWrapper__Wrapper\",\n  componentId: \"sc-1480gt2-0\"\n})([\"background-color:#eef1f7;min-height:100vh;width:350px;min-width:30%;padding:100px 0;text-align:center;\", \"{}\", \"{display:none;}\"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__.media.tablet, _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_0__.media.mobile);\n_c2 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"SideWrapper__Content\",\n  componentId: \"sc-1480gt2-1\"\n})([\"font-size:6rem;\"]);\n_c3 = Content;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"SideWrapper\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Content\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2lkZVdyYXBwZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsV0FBVCxHQUF1QjtFQUNwQyxvQkFDRSw4REFBQyxPQUFEO0lBQUEsd0JBQ0UsOERBQUMsT0FBRDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBRUU7TUFBTSxLQUFLLEVBQUU7UUFBQ0MsUUFBUSxFQUFFO01BQVgsQ0FBYjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUZGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBTUQ7S0FQdUJEO0FBU3hCLElBQU1FLE9BQU8sR0FBR0osd0VBQUg7RUFBQTtFQUFBO0FBQUEsd0lBUVRDLDJEQVJTLEVBYVRBLDJEQWJTLENBQWI7TUFBTUc7QUFrQk4sSUFBTUksT0FBTyxHQUFHUix3RUFBSDtFQUFBO0VBQUE7QUFBQSx1QkFBYjtNQUFNUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db21tb24vU2lkZVdyYXBwZXIudHN4P2U2MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICcuLi8uLi91dGlscy9tZWRpYVF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVdyYXBwZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8Q29udGVudD7wn5SnPC9Db250ZW50PlxuICAgICAgPHNwYW4gc3R5bGU9e3tmb250U2l6ZTogJzAuOHJlbSd9fT7sg4gg6riw64qlIOyYpO2UiCDspIDruYTspJHsnoXri4jri6QgKOuaneuUseuaneuUsSk8L3NwYW4+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZjFmNztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWluLXdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAke21lZGlhLnRhYmxldH0ge1xuICAgIC8qIHdpZHRoOiAyNzBweDtcbiAgICBtaW4td2lkdGg6IDI3MHB4OyAqL1xuICB9XG5cbiAgJHttZWRpYS5tb2JpbGV9IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiA2cmVtO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJtZWRpYSIsIlNpZGVXcmFwcGVyIiwiZm9udFNpemUiLCJXcmFwcGVyIiwiZGl2IiwidGFibGV0IiwibW9iaWxlIiwiQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Common/SideWrapper.tsx\n"));

/***/ })

});