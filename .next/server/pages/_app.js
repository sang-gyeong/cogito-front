/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uiw/react-md-editor/markdown-editor.css */ \"./node_modules/@uiw/react-md-editor/markdown-editor.css\");\n/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-markdown-preview/markdown.css */ \"./node_modules/@uiw/react-markdown-preview/markdown.css\");\n/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sb-admin-2.min.css */ \"./styles/sb-admin-2.min.css\");\n/* harmony import */ var _styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/fontawesome-free/css/all.min.css */ \"./vendor/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _src_components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Modal */ \"./src/components/Modal/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _src_utils_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/kakaocommerce/project/cogito-front/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {\n    const prevPath = (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.getSessionStorageItem)('currentPath') ?? router.pathname;\n    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.setSessionStorageItem)('prevPath', prevPath);\n    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.setSessionStorageItem)('currentPath', globalThis.location.pathname);\n  }, [router.pathname]); // queryClient는 lifeCycle 주기당 인스턴스가 1번만 생성되도록 App 외부, state, 혹은 ref 등으로 저장한다.\n\n  const {\n    0: queryClient\n  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(() => new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient({\n    defaultOptions: {\n      queries: {\n        onError: error => console.log('queryClient error : ', error),\n        refetchOnWindowFocus: false,\n        refetchOnReconnect: false,\n        // SSR 이후 useQuery()로 refetch가 일어나는 것을 비활성화고자 한다면, refetchOnMount를 false로 설정하거나 staleTime을 Infinity로 주는 등의 방법이 있다.\n        refetchOnMount: false,\n        retry: false\n      }\n    }\n  }));\n\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"title\", {\n        children: \"Cogito : \\uCF54\\uAE30\\uD1A0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, {\n      client: queryClient,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.Hydrate, {\n        state: pageProps.dehydratedState,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_10__.RecoilRoot, {\n          children: [getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 24\n          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__.ReactQueryDevtools, {\n        initialIsOpen: false\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFlQSxTQUFTWSxLQUFULENBQWU7RUFBQ0MsU0FBRDtFQUFZQztBQUFaLENBQWYsRUFBMkQ7RUFDekQsTUFBTUMsTUFBTSxHQUFHTix1REFBUyxFQUF4QjtFQUVBVCxnREFBUyxDQUFDLE1BQU07SUFDZCxNQUFNZ0IsUUFBUSxHQUFHTiwwRUFBcUIsQ0FBQyxhQUFELENBQXJCLElBQXdDSyxNQUFNLENBQUNFLFFBQWhFO0lBRUFOLDBFQUFxQixDQUFDLFVBQUQsRUFBYUssUUFBYixDQUFyQjtJQUNBTCwwRUFBcUIsQ0FBQyxhQUFELEVBQWdCTyxVQUFVLENBQUNDLFFBQVgsQ0FBb0JGLFFBQXBDLENBQXJCO0VBQ0QsQ0FMUSxFQUtOLENBQUNGLE1BQU0sQ0FBQ0UsUUFBUixDQUxNLENBQVQsQ0FIeUQsQ0FVekQ7O0VBQ0EsTUFBTTtJQUFBLEdBQUNHO0VBQUQsSUFBZ0JuQiwrQ0FBUSxDQUM1QixNQUNFLElBQUlHLDhEQUFKLENBQWdCO0lBQ2RpQixjQUFjLEVBQUU7TUFDZEMsT0FBTyxFQUFFO1FBQ1BDLE9BQU8sRUFBRUMsS0FBSyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQ0YsS0FBcEMsQ0FEWDtRQUVQRyxvQkFBb0IsRUFBRSxLQUZmO1FBR1BDLGtCQUFrQixFQUFFLEtBSGI7UUFJUDtRQUNBQyxjQUFjLEVBQUUsS0FMVDtRQU1QQyxLQUFLLEVBQUU7TUFOQTtJQURLO0VBREYsQ0FBaEIsQ0FGMEIsQ0FBOUI7O0VBZUEsTUFBTUMsU0FBUyxHQUFHbEIsU0FBUyxDQUFDa0IsU0FBVixLQUF3QkMsSUFBSSxJQUFJQSxJQUFoQyxDQUFsQjs7RUFFQSxvQkFDRTtJQUFBLHdCQUNFLCtEQUFDLGtEQUFEO01BQUEsd0JBQ0U7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQUVFO1FBQU0sSUFBSSxFQUFDLFVBQVg7UUFBc0IsT0FBTyxFQUFDO01BQTlCO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFERixlQUtFLCtEQUFDLHNFQUFEO01BQXFCLE1BQU0sRUFBRVosV0FBN0I7TUFBQSx3QkFDRSwrREFBQywwREFBRDtRQUFTLEtBQUssRUFBRU4sU0FBUyxDQUFDbUIsZUFBMUI7UUFBQSx1QkFFRSwrREFBQywrQ0FBRDtVQUFBLFdBQ0dGLFNBQVMsZUFBQywrREFBQyxTQUFELG9CQUFlakIsU0FBZjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBQUQsQ0FEWixlQUVFLCtEQUFDLDhEQUFEO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFGRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFGRjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFRRSwrREFBQyw4RUFBRDtRQUFvQixhQUFhLEVBQUU7TUFBbkM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQVJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUxGO0VBQUEsZ0JBREY7QUFrQkQ7O0FBRUQsaUVBQWVGLEtBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHVpdy9yZWFjdC1tZC1lZGl0b3IvbWFya2Rvd24tZWRpdG9yLmNzcyc7XG5pbXBvcnQgJ0B1aXcvcmVhY3QtbWFya2Rvd24tcHJldmlldy9tYXJrZG93bi5jc3MnO1xuaW1wb3J0ICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uL2Rpc3Qvc2tlbGV0b24uY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9zYi1hZG1pbi0yLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3IvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnO1xuXG5pbXBvcnQge1JlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHtIeWRyYXRlLCBEZWh5ZHJhdGVkU3RhdGUsIFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHtSZWFjdFF1ZXJ5RGV2dG9vbHN9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeS1kZXZ0b29scyc7XG5pbXBvcnQge1JlY29pbFJvb3R9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7Z2V0U2Vzc2lvblN0b3JhZ2VJdGVtLCBzZXRTZXNzaW9uU3RvcmFnZUl0ZW19IGZyb20gJy4uL3NyYy91dGlscy9zdG9yYWdlJztcblxudHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgZ2V0TGF5b3V0OiAocGFnZTogUmVhY3RFbGVtZW50KSA9PiBSZWFjdE5vZGU7XG59O1xuXG50eXBlIFBhZ2VQcm9wcyA9IHtcbiAgZGVoeWRyYXRlZFN0YXRlPzogRGVoeWRyYXRlZFN0YXRlO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG4gIHBhZ2VQcm9wczogUGFnZVByb3BzO1xufTtcblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcHJldlBhdGggPSBnZXRTZXNzaW9uU3RvcmFnZUl0ZW0oJ2N1cnJlbnRQYXRoJykgPz8gcm91dGVyLnBhdGhuYW1lO1xuXG4gICAgc2V0U2Vzc2lvblN0b3JhZ2VJdGVtKCdwcmV2UGF0aCcsIHByZXZQYXRoKTtcbiAgICBzZXRTZXNzaW9uU3RvcmFnZUl0ZW0oJ2N1cnJlbnRQYXRoJywgZ2xvYmFsVGhpcy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICAvLyBxdWVyeUNsaWVudOuKlCBsaWZlQ3ljbGUg7KO86riw64u5IOyduOyKpO2EtOyKpOqwgCAx67KI66eMIOyDneyEseuQmOuPhOuhnSBBcHAg7Jm467aALCBzdGF0ZSwg7Zi57J2AIHJlZiDrk7HsnLzroZwg7KCA7J6l7ZWc64ukLlxuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoXG4gICAgKCkgPT5cbiAgICAgIG5ldyBRdWVyeUNsaWVudCh7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgb25FcnJvcjogZXJyb3IgPT4gY29uc29sZS5sb2coJ3F1ZXJ5Q2xpZW50IGVycm9yIDogJywgZXJyb3IpLFxuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgcmVmZXRjaE9uUmVjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFNTUiDsnbTtm4QgdXNlUXVlcnkoKeuhnCByZWZldGNo6rCAIOydvOyWtOuCmOuKlCDqsoPsnYQg67mE7Zmc7ISx7ZmU6rOg7J6QIO2VnOuLpOuptCwgcmVmZXRjaE9uTW91bnTrpbwgZmFsc2XroZwg7ISk7KCV7ZWY6rGw64KYIHN0YWxlVGltZeydhCBJbmZpbml0eeuhnCDso7zripQg65Ox7J2YIOuwqeuyleydtCDsnojri6QuXG4gICAgICAgICAgICByZWZldGNoT25Nb3VudDogZmFsc2UsXG4gICAgICAgICAgICByZXRyeTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICk7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKHBhZ2UgPT4gcGFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db2dpdG8gOiDsvZTquLDthqA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgICB7LyogPFRoZW1lZEdsb2JhbFN0eWxlIC8+ICovfVxuICAgICAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICAgICAgICAgIDxNb2RhbCAvPlxuICAgICAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICAgICAgPC9IeWRyYXRlPlxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzIGluaXRpYWxJc09wZW49e2ZhbHNlfSAvPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUmVhY3RRdWVyeURldnRvb2xzIiwiUmVjb2lsUm9vdCIsIk1vZGFsIiwidXNlUm91dGVyIiwiZ2V0U2Vzc2lvblN0b3JhZ2VJdGVtIiwic2V0U2Vzc2lvblN0b3JhZ2VJdGVtIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJwcmV2UGF0aCIsInBhdGhuYW1lIiwiZ2xvYmFsVGhpcyIsImxvY2F0aW9uIiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJyZWZldGNoT25SZWNvbm5lY3QiLCJyZWZldGNoT25Nb3VudCIsInJldHJ5IiwiZ2V0TGF5b3V0IiwicGFnZSIsImRlaHlkcmF0ZWRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/atoms/modal.tsx":
/*!*****************************!*\
  !*** ./src/atoms/modal.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalShowState\": () => (/* binding */ modalShowState),\n/* harmony export */   \"modalState\": () => (/* binding */ modalState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst modalShowState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'modalShowState',\n  default: false\n});\nconst modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'modalState',\n  default: {\n    isShow: false,\n    component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false),\n    closeCallBack: () => {},\n    config: {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXRvbXMvbW9kYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFFTyxNQUFNQyxjQUFjLEdBQUdELDRDQUFJLENBQUM7RUFDakNFLEdBQUcsRUFBRSxnQkFENEI7RUFFakNDLE9BQU8sRUFBRTtBQUZ3QixDQUFELENBQTNCO0FBS0EsTUFBTUMsVUFBVSxHQUFHSiw0Q0FBSSxDQUFDO0VBQzdCRSxHQUFHLEVBQUUsWUFEd0I7RUFFN0JDLE9BQU8sRUFBRTtJQUNQRSxNQUFNLEVBQUUsS0FERDtJQUVQQyxTQUFTLGVBQUUsNklBRko7SUFHUEMsYUFBYSxFQUFFLE1BQU0sQ0FBRSxDQUhoQjtJQUlQQyxNQUFNLEVBQUU7RUFKRDtBQUZvQixDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9hdG9tcy9tb2RhbC50c3g/ZjA4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F0b219IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFNob3dTdGF0ZSA9IGF0b20oe1xuICBrZXk6ICdtb2RhbFNob3dTdGF0ZScsXG4gIGRlZmF1bHQ6IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFN0YXRlID0gYXRvbSh7XG4gIGtleTogJ21vZGFsU3RhdGUnLFxuICBkZWZhdWx0OiB7XG4gICAgaXNTaG93OiBmYWxzZSxcbiAgICBjb21wb25lbnQ6IDw+PC8+LFxuICAgIGNsb3NlQ2FsbEJhY2s6ICgpID0+IHt9LFxuICAgIGNvbmZpZzoge30sXG4gIH0gYXMgTW9kYWxQcm9wcyxcbn0pO1xuIl0sIm5hbWVzIjpbImF0b20iLCJtb2RhbFNob3dTdGF0ZSIsImtleSIsImRlZmF1bHQiLCJtb2RhbFN0YXRlIiwiaXNTaG93IiwiY29tcG9uZW50IiwiY2xvc2VDYWxsQmFjayIsImNvbmZpZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/atoms/modal.tsx\n");

/***/ }),

/***/ "./src/components/Modal/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Modal/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/modal */ \"./src/atoms/modal.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/kakaocommerce/project/cogito-front/src/components/Modal/index.tsx\";\n\n\n\n\n\n\nfunction Modal() {\n  const [showModal, setShowModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_3__.modalShowState);\n  const {\n    title,\n    component,\n    closeCallBack,\n    config\n  } = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_modal__WEBPACK_IMPORTED_MODULE_3__.modalState);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    return () => closeCallBack();\n  }, [showModal, closeCallBack]);\n\n  const handleClose = () => setShowModal(false);\n\n  const modalConfig = {\n    size: config.size ?? 'lg',\n    closeButton: !!config?.closeButton,\n    centered: !!config?.centered\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n      size: modalConfig.size,\n      show: showModal,\n      onHide: handleClose,\n      centered: modalConfig.centered,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {\n        closeButton: modalConfig.closeButton,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {\n        children: component\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          variant: \"secondary\",\n          onClick: handleClose,\n          children: \"\\uCDE8\\uC18C\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          variant: \"primary\",\n          onClick: handleClose,\n          children: \"\\uD655\\uC778\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n} // <div\n// className=\"modal fade\"\n// id=\"logoutModal\"\n// tabIndex={-1}\n// role=\"dialog\"\n// aria-labelledby=\"exampleModalLabel\"\n// aria-hidden=\"true\">\n// <div className=\"modal-dialog\" role=\"document\">\n//   <div className=\"modal-content\">\n//     <div className=\"modal-header\">\n//       <h5 className=\"modal-title\" id=\"exampleModalLabel\">\n//         Ready to Leave?\n//       </h5>\n//       <button className=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\n//         <span aria-hidden=\"true\">×</span>\n//       </button>\n//     </div>\n//     <div className=\"modal-body\">Select Logout below if you are ready to end your current session.</div>\n//     <div className=\"modal-footer\">\n//       <button className=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">\n//         Cancel\n//       </button>\n//       <a className=\"btn btn-primary\" href=\"login.html\">\n//         Logout\n//       </a>\n//     </div>\n//   </div>\n// </div>\n// </div>//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0MsS0FBVCxHQUFpQjtFQUM5QixNQUFNLENBQUNPLFNBQUQsRUFBWUMsWUFBWixJQUE0Qkwsc0RBQWMsQ0FBQ0Usd0RBQUQsQ0FBaEQ7RUFDQSxNQUFNO0lBQUNJLEtBQUQ7SUFBUUMsU0FBUjtJQUFtQkMsYUFBbkI7SUFBa0NDO0VBQWxDLElBQTRDUixzREFBYyxDQUFDRSxvREFBRCxDQUFoRTtFQUVBUCxnREFBUyxDQUFDLE1BQU07SUFDZCxPQUFPLE1BQU1ZLGFBQWEsRUFBMUI7RUFDRCxDQUZRLEVBRU4sQ0FBQ0osU0FBRCxFQUFZSSxhQUFaLENBRk0sQ0FBVDs7RUFJQSxNQUFNRSxXQUFXLEdBQUcsTUFBTUwsWUFBWSxDQUFDLEtBQUQsQ0FBdEM7O0VBRUEsTUFBTU0sV0FBaUMsR0FBRztJQUN4Q0MsSUFBSSxFQUFFSCxNQUFNLENBQUNHLElBQVAsSUFBZSxJQURtQjtJQUV4Q0MsV0FBVyxFQUFFLENBQUMsQ0FBQ0osTUFBTSxFQUFFSSxXQUZpQjtJQUd4Q0MsUUFBUSxFQUFFLENBQUMsQ0FBQ0wsTUFBTSxFQUFFSztFQUhvQixDQUExQztFQU1BLG9CQUNFO0lBQUEsdUJBQ0UsOERBQUMsa0RBQUQ7TUFBUyxJQUFJLEVBQUVILFdBQVcsQ0FBQ0MsSUFBM0I7TUFBaUMsSUFBSSxFQUFFUixTQUF2QztNQUFrRCxNQUFNLEVBQUVNLFdBQTFEO01BQXVFLFFBQVEsRUFBRUMsV0FBVyxDQUFDRyxRQUE3RjtNQUFBLHdCQUNFLDhEQUFDLHlEQUFEO1FBQWdCLFdBQVcsRUFBRUgsV0FBVyxDQUFDRSxXQUF6QztRQUFBLHVCQUNFLDhEQUFDLHdEQUFEO1VBQUEsVUFBZ0JQO1FBQWhCO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFERjtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBREYsZUFJRSw4REFBQyx1REFBRDtRQUFBLFVBQWVDO01BQWY7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUpGLGVBS0UsOERBQUMseURBQUQ7UUFBQSx3QkFDRSw4REFBQyxtREFBRDtVQUFRLE9BQU8sRUFBQyxXQUFoQjtVQUE0QixPQUFPLEVBQUVHLFdBQXJDO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREYsZUFJRSw4REFBQyxtREFBRDtVQUFRLE9BQU8sRUFBQyxTQUFoQjtVQUEwQixPQUFPLEVBQUVBLFdBQW5DO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBTEY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFrQkQsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL01vZGFsL2luZGV4LnRzeD85ZTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01vZGFsIGFzIEJTTW9kYWwsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7dXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHttb2RhbFNob3dTdGF0ZSwgbW9kYWxTdGF0ZX0gZnJvbSAnLi4vLi4vYXRvbXMvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCgpIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsU2hvd1N0YXRlKTtcbiAgY29uc3Qge3RpdGxlLCBjb21wb25lbnQsIGNsb3NlQ2FsbEJhY2ssIGNvbmZpZ30gPSB1c2VSZWNvaWxWYWx1ZShtb2RhbFN0YXRlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBjbG9zZUNhbGxCYWNrKCk7XG4gIH0sIFtzaG93TW9kYWwsIGNsb3NlQ2FsbEJhY2tdKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSk7XG5cbiAgY29uc3QgbW9kYWxDb25maWc6IE1vZGFsUHJvcHNbJ2NvbmZpZyddID0ge1xuICAgIHNpemU6IGNvbmZpZy5zaXplID8/ICdsZycsXG4gICAgY2xvc2VCdXR0b246ICEhY29uZmlnPy5jbG9zZUJ1dHRvbixcbiAgICBjZW50ZXJlZDogISFjb25maWc/LmNlbnRlcmVkLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCU01vZGFsIHNpemU9e21vZGFsQ29uZmlnLnNpemV9IHNob3c9e3Nob3dNb2RhbH0gb25IaWRlPXtoYW5kbGVDbG9zZX0gY2VudGVyZWQ9e21vZGFsQ29uZmlnLmNlbnRlcmVkfT5cbiAgICAgICAgPEJTTW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPXttb2RhbENvbmZpZy5jbG9zZUJ1dHRvbn0+XG4gICAgICAgICAgPEJTTW9kYWwuVGl0bGU+e3RpdGxlfTwvQlNNb2RhbC5UaXRsZT5cbiAgICAgICAgPC9CU01vZGFsLkhlYWRlcj5cbiAgICAgICAgPEJTTW9kYWwuQm9keT57Y29tcG9uZW50fTwvQlNNb2RhbC5Cb2R5PlxuICAgICAgICA8QlNNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAg7Leo7IaMXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgIO2ZleyduFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JTTW9kYWwuRm9vdGVyPlxuICAgICAgPC9CU01vZGFsPlxuICAgIDwvPlxuICApO1xufVxuXG4vLyA8ZGl2XG4vLyBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCJcbi8vIGlkPVwibG9nb3V0TW9kYWxcIlxuLy8gdGFiSW5kZXg9ey0xfVxuLy8gcm9sZT1cImRpYWxvZ1wiXG4vLyBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlTW9kYWxMYWJlbFwiXG4vLyBhcmlhLWhpZGRlbj1cInRydWVcIj5cbi8vIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4vLyAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIiBpZD1cImV4YW1wbGVNb2RhbExhYmVsXCI+XG4vLyAgICAgICAgIFJlYWR5IHRvIExlYXZlP1xuLy8gICAgICAgPC9oNT5cbi8vICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2VcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbi8vICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XG4vLyAgICAgICA8L2J1dHRvbj5cbi8vICAgICA8L2Rpdj5cbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5TZWxlY3QgTG9nb3V0IGJlbG93IGlmIHlvdSBhcmUgcmVhZHkgdG8gZW5kIHlvdXIgY3VycmVudCBzZXNzaW9uLjwvZGl2PlxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4vLyAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+XG4vLyAgICAgICAgIENhbmNlbFxuLy8gICAgICAgPC9idXR0b24+XG4vLyAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBocmVmPVwibG9naW4uaHRtbFwiPlxuLy8gICAgICAgICBMb2dvdXRcbi8vICAgICAgIDwvYT5cbi8vICAgICA8L2Rpdj5cbi8vICAgPC9kaXY+XG4vLyA8L2Rpdj5cbi8vIDwvZGl2PlxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIk1vZGFsIiwiQlNNb2RhbCIsIkJ1dHRvbiIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJtb2RhbFNob3dTdGF0ZSIsIm1vZGFsU3RhdGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ0aXRsZSIsImNvbXBvbmVudCIsImNsb3NlQ2FsbEJhY2siLCJjb25maWciLCJoYW5kbGVDbG9zZSIsIm1vZGFsQ29uZmlnIiwic2l6ZSIsImNsb3NlQnV0dG9uIiwiY2VudGVyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Modal/index.tsx\n");

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorageItem\": () => (/* binding */ getLocalStorageItem),\n/* harmony export */   \"getSessionStorageItem\": () => (/* binding */ getSessionStorageItem),\n/* harmony export */   \"setLocalStorageItem\": () => (/* binding */ setLocalStorageItem),\n/* harmony export */   \"setSessionStorageItem\": () => (/* binding */ setSessionStorageItem)\n/* harmony export */ });\nconst getLocalStorageItem = (key, defaultValue) => {\n  const localStorage = globalThis?.localStorage;\n\n  if (!localStorage || localStorage.getItem(key) === null || localStorage.getItem(key) === 'undefined') {\n    return defaultValue;\n  }\n\n  return localStorage.getItem(key);\n};\nconst setLocalStorageItem = (key, value) => {\n  const localStorage = globalThis?.localStorage;\n\n  if (!localStorage) {\n    return;\n  }\n\n  return localStorage.setItem(key, value);\n};\nconst getSessionStorageItem = key => {\n  const sessionStorage = globalThis?.sessionStorage;\n\n  if (!sessionStorage) {\n    return undefined;\n  }\n\n  return sessionStorage.getItem(key);\n};\nconst setSessionStorageItem = (key, value) => {\n  const sessionStorage = globalThis?.sessionStorage;\n\n  if (!sessionStorage) {\n    return;\n  }\n\n  return sessionStorage.setItem(key, value);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3RvcmFnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsbUJBQW1CLEdBQUcsQ0FBQ0MsR0FBRCxFQUFjQyxZQUFkLEtBQXVDO0VBQ3hFLE1BQU1DLFlBQVksR0FBR0MsVUFBVSxFQUFFRCxZQUFqQzs7RUFFQSxJQUFJLENBQUNBLFlBQUQsSUFBaUJBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsTUFBOEIsSUFBL0MsSUFBdURFLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsTUFBOEIsV0FBekYsRUFBc0c7SUFDcEcsT0FBT0MsWUFBUDtFQUNEOztFQUVELE9BQU9DLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsQ0FBUDtBQUNELENBUk07QUFVQSxNQUFNSyxtQkFBbUIsR0FBRyxDQUFDTCxHQUFELEVBQWNNLEtBQWQsS0FBZ0M7RUFDakUsTUFBTUosWUFBWSxHQUFHQyxVQUFVLEVBQUVELFlBQWpDOztFQUVBLElBQUksQ0FBQ0EsWUFBTCxFQUFtQjtJQUNqQjtFQUNEOztFQUVELE9BQU9BLFlBQVksQ0FBQ0ssT0FBYixDQUFxQlAsR0FBckIsRUFBMEJNLEtBQTFCLENBQVA7QUFDRCxDQVJNO0FBVUEsTUFBTUUscUJBQXFCLEdBQUlSLEdBQUQsSUFBaUI7RUFDcEQsTUFBTVMsY0FBYyxHQUFHTixVQUFVLEVBQUVNLGNBQW5DOztFQUVBLElBQUksQ0FBQ0EsY0FBTCxFQUFxQjtJQUNuQixPQUFPQyxTQUFQO0VBQ0Q7O0VBRUQsT0FBT0QsY0FBYyxDQUFDTCxPQUFmLENBQXVCSixHQUF2QixDQUFQO0FBQ0QsQ0FSTTtBQVVBLE1BQU1XLHFCQUFxQixHQUFHLENBQUNYLEdBQUQsRUFBY00sS0FBZCxLQUFnQztFQUNuRSxNQUFNRyxjQUFjLEdBQUdOLFVBQVUsRUFBRU0sY0FBbkM7O0VBRUEsSUFBSSxDQUFDQSxjQUFMLEVBQXFCO0lBQ25CO0VBQ0Q7O0VBRUQsT0FBT0EsY0FBYyxDQUFDRixPQUFmLENBQXVCUCxHQUF2QixFQUE0Qk0sS0FBNUIsQ0FBUDtBQUNELENBUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3V0aWxzL3N0b3JhZ2UudHM/MzUxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0TG9jYWxTdG9yYWdlSXRlbSA9IChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlID0gZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlO1xuXG4gIGlmICghbG9jYWxTdG9yYWdlIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxTdG9yYWdlSXRlbSA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U7XG5cbiAgaWYgKCFsb2NhbFN0b3JhZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvblN0b3JhZ2VJdGVtID0gKGtleTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHNlc3Npb25TdG9yYWdlID0gZ2xvYmFsVGhpcz8uc2Vzc2lvblN0b3JhZ2U7XG5cbiAgaWYgKCFzZXNzaW9uU3RvcmFnZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFNlc3Npb25TdG9yYWdlSXRlbSA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlO1xuXG4gIGlmICghc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0TG9jYWxTdG9yYWdlSXRlbSIsImtleSIsImRlZmF1bHRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdsb2JhbFRoaXMiLCJnZXRJdGVtIiwic2V0TG9jYWxTdG9yYWdlSXRlbSIsInZhbHVlIiwic2V0SXRlbSIsImdldFNlc3Npb25TdG9yYWdlSXRlbSIsInNlc3Npb25TdG9yYWdlIiwidW5kZWZpbmVkIiwic2V0U2Vzc2lvblN0b3JhZ2VJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/storage.ts\n");

/***/ }),

/***/ "./node_modules/@uiw/react-markdown-preview/markdown.css":
/*!***************************************************************!*\
  !*** ./node_modules/@uiw/react-markdown-preview/markdown.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@uiw/react-md-editor/markdown-editor.css":
/*!***************************************************************!*\
  !*** ./node_modules/@uiw/react-md-editor/markdown-editor.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/sb-admin-2.min.css":
/*!***********************************!*\
  !*** ./styles/sb-admin-2.min.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./vendor/fontawesome-free/css/all.min.css":
/*!*************************************************!*\
  !*** ./vendor/fontawesome-free/css/all.min.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@tanstack/react-query-devtools":
/*!*************************************************!*\
  !*** external "@tanstack/react-query-devtools" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();