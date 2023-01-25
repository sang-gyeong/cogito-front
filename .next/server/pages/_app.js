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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uiw/react-md-editor/markdown-editor.css */ \"./node_modules/@uiw/react-md-editor/markdown-editor.css\");\n/* harmony import */ var _uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_md_editor_markdown_editor_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-markdown-preview/markdown.css */ \"./node_modules/@uiw/react-markdown-preview/markdown.css\");\n/* harmony import */ var _uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uiw_react_markdown_preview_markdown_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sb-admin-2.min.css */ \"./styles/sb-admin-2.min.css\");\n/* harmony import */ var _styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_sb_admin_2_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vendor/fontawesome-free/css/all.min.css */ \"./vendor/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vendor_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _src_components_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Modal */ \"./src/components/Modal/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _src_utils_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/utils/storage */ \"./src/utils/storage.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/Users/kakaocommerce/project/cogito-front/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => () => {\n    const prevPath = (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.getSessionStorageItem)('currentPath') ?? router.pathname;\n    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.setSessionStorageItem)('prevPath', prevPath);\n    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_13__.setSessionStorageItem)('currentPath', globalThis.location.pathname);\n  }, [router.asPath]); // queryClient는 lifeCycle 주기당 인스턴스가 1번만 생성되도록 App 외부, state, 혹은 ref 등으로 저장한다.\n\n  const {\n    0: queryClient\n  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(() => new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient({\n    defaultOptions: {\n      queries: {\n        onError: error => console.log('queryClient error : ', error),\n        refetchOnWindowFocus: false,\n        refetchOnReconnect: false,\n        // SSR 이후 useQuery()로 refetch가 일어나는 것을 비활성화고자 한다면, refetchOnMount를 false로 설정하거나 staleTime을 Infinity로 주는 등 방법이 있다.\n        refetchOnMount: false,\n        retry: false\n      }\n    }\n  }));\n\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"title\", {\n        children: \"Cogito : \\uCF54\\uAE30\\uD1A0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClientProvider, {\n      client: queryClient,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.Hydrate, {\n        state: pageProps.dehydratedState,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_10__.RecoilRoot, {\n          children: [getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 24\n          }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_src_components_Modal__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_9__.ReactQueryDevtools, {\n        initialIsOpen: false\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFlQSxTQUFTWSxLQUFULENBQWU7RUFBQ0MsU0FBRDtFQUFZQztBQUFaLENBQWYsRUFBMkQ7RUFDekQsTUFBTUMsTUFBTSxHQUFHTix1REFBUyxFQUF4QjtFQUVBVCxnREFBUyxDQUNQLE1BQU0sTUFBTTtJQUNWLE1BQU1nQixRQUFRLEdBQUdOLDBFQUFxQixDQUFDLGFBQUQsQ0FBckIsSUFBd0NLLE1BQU0sQ0FBQ0UsUUFBaEU7SUFFQU4sMEVBQXFCLENBQUMsVUFBRCxFQUFhSyxRQUFiLENBQXJCO0lBQ0FMLDBFQUFxQixDQUFDLGFBQUQsRUFBZ0JPLFVBQVUsQ0FBQ0MsUUFBWCxDQUFvQkYsUUFBcEMsQ0FBckI7RUFDRCxDQU5NLEVBT1AsQ0FBQ0YsTUFBTSxDQUFDSyxNQUFSLENBUE8sQ0FBVCxDQUh5RCxDQWF6RDs7RUFDQSxNQUFNO0lBQUEsR0FBQ0M7RUFBRCxJQUFnQnBCLCtDQUFRLENBQzVCLE1BQ0UsSUFBSUcsOERBQUosQ0FBZ0I7SUFDZGtCLGNBQWMsRUFBRTtNQUNkQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFQyxLQUFLLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaLEVBQW9DRixLQUFwQyxDQURYO1FBRVBHLG9CQUFvQixFQUFFLEtBRmY7UUFHUEMsa0JBQWtCLEVBQUUsS0FIYjtRQUlQO1FBQ0FDLGNBQWMsRUFBRSxLQUxUO1FBTVBDLEtBQUssRUFBRTtNQU5BO0lBREs7RUFERixDQUFoQixDQUYwQixDQUE5Qjs7RUFlQSxNQUFNQyxTQUFTLEdBQUduQixTQUFTLENBQUNtQixTQUFWLEtBQXdCQyxJQUFJLElBQUlBLElBQWhDLENBQWxCOztFQUVBLG9CQUNFO0lBQUEsd0JBQ0UsK0RBQUMsa0RBQUQ7TUFBQSx3QkFDRTtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQURGLGVBRUU7UUFBTSxJQUFJLEVBQUMsVUFBWDtRQUFzQixPQUFPLEVBQUM7TUFBOUI7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQURGLGVBT0UsK0RBQUMsc0VBQUQ7TUFBcUIsTUFBTSxFQUFFWixXQUE3QjtNQUFBLHdCQUNFLCtEQUFDLDBEQUFEO1FBQVMsS0FBSyxFQUFFUCxTQUFTLENBQUNvQixlQUExQjtRQUFBLHVCQUVFLCtEQUFDLCtDQUFEO1VBQUEsV0FDR0YsU0FBUyxlQUFDLCtEQUFDLFNBQUQsb0JBQWVsQixTQUFmO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFBRCxDQURaLGVBRUUsK0RBQUMsOERBQUQ7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUZGO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUZGO1FBQUE7UUFBQTtRQUFBO01BQUEsUUFERixlQVFFLCtEQUFDLDhFQUFEO1FBQW9CLGFBQWEsRUFBRTtNQUFuQztRQUFBO1FBQUE7UUFBQTtNQUFBLFFBUkY7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUEY7RUFBQSxnQkFERjtBQW9CRDs7QUFFRCxpRUFBZUYsS0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAdWl3L3JlYWN0LW1kLWVkaXRvci9tYXJrZG93bi1lZGl0b3IuY3NzJztcbmltcG9ydCAnQHVpdy9yZWFjdC1tYXJrZG93bi1wcmV2aWV3L21hcmtkb3duLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi4vc3R5bGVzL3NiLWFkbWluLTIubWluLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvci9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7XG5cbmltcG9ydCB7UmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge0h5ZHJhdGUsIERlaHlkcmF0ZWRTdGF0ZSwgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXJ9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgVGhlbWVkR2xvYmFsU3R5bGUgZnJvbSAnLi4vc3JjL3RoZW1lL1RoZW1lZEdsb2JhbFN0eWxlJztcbmltcG9ydCB7UmVhY3RRdWVyeURldnRvb2xzfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHMnO1xuaW1wb3J0IHtSZWNvaWxSb290fSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge2dldFNlc3Npb25TdG9yYWdlSXRlbSwgc2V0U2Vzc2lvblN0b3JhZ2VJdGVtfSBmcm9tICcuLi9zcmMvdXRpbHMvc3RvcmFnZSc7XG5cbnR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIGdldExheW91dDogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xufTtcblxudHlwZSBQYWdlUHJvcHMgPSB7XG4gIGRlaHlkcmF0ZWRTdGF0ZT86IERlaHlkcmF0ZWRTdGF0ZTtcbn07XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0O1xuICBwYWdlUHJvcHM6IFBhZ2VQcm9wcztcbn07XG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc306IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4gKCkgPT4ge1xuICAgICAgY29uc3QgcHJldlBhdGggPSBnZXRTZXNzaW9uU3RvcmFnZUl0ZW0oJ2N1cnJlbnRQYXRoJykgPz8gcm91dGVyLnBhdGhuYW1lO1xuXG4gICAgICBzZXRTZXNzaW9uU3RvcmFnZUl0ZW0oJ3ByZXZQYXRoJywgcHJldlBhdGgpO1xuICAgICAgc2V0U2Vzc2lvblN0b3JhZ2VJdGVtKCdjdXJyZW50UGF0aCcsIGdsb2JhbFRoaXMubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0sXG4gICAgW3JvdXRlci5hc1BhdGhdXG4gICk7XG5cbiAgLy8gcXVlcnlDbGllbnTripQgbGlmZUN5Y2xlIOyjvOq4sOuLuSDsnbjsiqTthLTsiqTqsIAgMeuyiOunjCDsg53shLHrkJjrj4TroZ0gQXBwIOyZuOu2gCwgc3RhdGUsIO2YueydgCByZWYg65Ox7Jy866GcIOyggOyepe2VnOuLpC5cbiAgY29uc3QgW3F1ZXJ5Q2xpZW50XSA9IHVzZVN0YXRlKFxuICAgICgpID0+XG4gICAgICBuZXcgUXVlcnlDbGllbnQoe1xuICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICAgIG9uRXJyb3I6IGVycm9yID0+IGNvbnNvbGUubG9nKCdxdWVyeUNsaWVudCBlcnJvciA6ICcsIGVycm9yKSxcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICAgIHJlZmV0Y2hPblJlY29ubmVjdDogZmFsc2UsXG4gICAgICAgICAgICAvLyBTU1Ig7J207ZuEIHVzZVF1ZXJ5KCnroZwgcmVmZXRjaOqwgCDsnbzslrTrgpjripQg6rKD7J2EIOu5hO2ZnOyEse2ZlOqzoOyekCDtlZzri6TrqbQsIHJlZmV0Y2hPbk1vdW5066W8IGZhbHNl66GcIOyEpOygle2VmOqxsOuCmCBzdGFsZVRpbWXsnYQgSW5maW5pdHnroZwg7KO864qUIOuTsSDrsKnrspXsnbQg7J6I64ukLlxuICAgICAgICAgICAgcmVmZXRjaE9uTW91bnQ6IGZhbHNlLFxuICAgICAgICAgICAgcmV0cnk6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KVxuICApO1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/IChwYWdlID0+IHBhZ2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29naXRvIDog7L2U6riw7YagPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICB7LyogPGxpbmsgcmVsPVwicHJlbG9hZFwiIGhyZWY9XCIvYXBpL2RhdGFcIiBhcz1cImZldGNoXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgICAgey8qIDxUaGVtZWRHbG9iYWxTdHlsZSAvPiAqL31cbiAgICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICAgIHtnZXRMYXlvdXQoPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPil9XG4gICAgICAgICAgICA8TW9kYWwgLz5cbiAgICAgICAgICA8L1JlY29pbFJvb3Q+XG4gICAgICAgIDwvSHlkcmF0ZT5cbiAgICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyBpbml0aWFsSXNPcGVuPXtmYWxzZX0gLz5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIZWFkIiwiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlJlYWN0UXVlcnlEZXZ0b29scyIsIlJlY29pbFJvb3QiLCJNb2RhbCIsInVzZVJvdXRlciIsImdldFNlc3Npb25TdG9yYWdlSXRlbSIsInNldFNlc3Npb25TdG9yYWdlSXRlbSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwicHJldlBhdGgiLCJwYXRobmFtZSIsImdsb2JhbFRoaXMiLCJsb2NhdGlvbiIsImFzUGF0aCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicmVmZXRjaE9uUmVjb25uZWN0IiwicmVmZXRjaE9uTW91bnQiLCJyZXRyeSIsImdldExheW91dCIsInBhZ2UiLCJkZWh5ZHJhdGVkU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/atoms/modal.tsx":
/*!*****************************!*\
  !*** ./src/atoms/modal.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalShowState\": () => (/* binding */ modalShowState),\n/* harmony export */   \"modalState\": () => (/* binding */ modalState)\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst modalShowState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'modalShowState',\n  default: false\n});\nconst modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n  key: 'modalState',\n  default: {\n    component: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false),\n    closeCallBack: () => {},\n    config: {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXRvbXMvbW9kYWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFFTyxNQUFNQyxjQUFjLEdBQUdELDRDQUFJLENBQUM7RUFDakNFLEdBQUcsRUFBRSxnQkFENEI7RUFFakNDLE9BQU8sRUFBRTtBQUZ3QixDQUFELENBQTNCO0FBS0EsTUFBTUMsVUFBVSxHQUFHSiw0Q0FBSSxDQUFDO0VBQzdCRSxHQUFHLEVBQUUsWUFEd0I7RUFFN0JDLE9BQU8sRUFBRTtJQUNQRSxTQUFTLGVBQUUsNklBREo7SUFFUEMsYUFBYSxFQUFFLE1BQU0sQ0FBRSxDQUZoQjtJQUdQQyxNQUFNLEVBQUU7RUFIRDtBQUZvQixDQUFELENBQXZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9hdG9tcy9tb2RhbC50c3g/ZjA4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F0b219IGZyb20gJ3JlY29pbCc7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFNob3dTdGF0ZSA9IGF0b20oe1xuICBrZXk6ICdtb2RhbFNob3dTdGF0ZScsXG4gIGRlZmF1bHQ6IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFN0YXRlID0gYXRvbSh7XG4gIGtleTogJ21vZGFsU3RhdGUnLFxuICBkZWZhdWx0OiB7XG4gICAgY29tcG9uZW50OiA8PjwvPixcbiAgICBjbG9zZUNhbGxCYWNrOiAoKSA9PiB7fSxcbiAgICBjb25maWc6IHt9LFxuICB9IGFzIE1vZGFsUHJvcHMsXG59KTtcbiJdLCJuYW1lcyI6WyJhdG9tIiwibW9kYWxTaG93U3RhdGUiLCJrZXkiLCJkZWZhdWx0IiwibW9kYWxTdGF0ZSIsImNvbXBvbmVudCIsImNsb3NlQ2FsbEJhY2siLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/atoms/modal.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorageItem\": () => (/* binding */ getLocalStorageItem),\n/* harmony export */   \"getSessionStorageItem\": () => (/* binding */ getSessionStorageItem),\n/* harmony export */   \"setLocalStorageItem\": () => (/* binding */ setLocalStorageItem),\n/* harmony export */   \"setSessionStorageItem\": () => (/* binding */ setSessionStorageItem)\n/* harmony export */ });\nconst getLocalStorageItem = (key, defaultValue) => {\n  const localStorage = globalThis?.localStorage;\n\n  if (!localStorage) {\n    return defaultValue;\n  }\n\n  return localStorage.getItem(key) ?? defaultValue;\n};\nconst setLocalStorageItem = (key, value) => {\n  const localStorage = globalThis?.localStorage;\n\n  if (!localStorage) {\n    return;\n  }\n\n  return localStorage.setItem(key, value);\n};\nconst getSessionStorageItem = key => {\n  const sessionStorage = globalThis?.sessionStorage;\n\n  if (!sessionStorage) {\n    return undefined;\n  }\n\n  return sessionStorage.getItem(key);\n};\nconst setSessionStorageItem = (key, value) => {\n  const sessionStorage = globalThis?.sessionStorage;\n\n  if (!sessionStorage) {\n    return;\n  }\n\n  return sessionStorage.setItem(key, value);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvc3RvcmFnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sTUFBTUEsbUJBQW1CLEdBQUcsQ0FBQ0MsR0FBRCxFQUFjQyxZQUFkLEtBQXVDO0VBQ3hFLE1BQU1DLFlBQVksR0FBR0MsVUFBVSxFQUFFRCxZQUFqQzs7RUFFQSxJQUFJLENBQUNBLFlBQUwsRUFBbUI7SUFDakIsT0FBT0QsWUFBUDtFQUNEOztFQUVELE9BQU9DLFlBQVksQ0FBQ0UsT0FBYixDQUFxQkosR0FBckIsS0FBNkJDLFlBQXBDO0FBQ0QsQ0FSTTtBQVVBLE1BQU1JLG1CQUFtQixHQUFHLENBQUNMLEdBQUQsRUFBY00sS0FBZCxLQUFnQztFQUNqRSxNQUFNSixZQUFZLEdBQUdDLFVBQVUsRUFBRUQsWUFBakM7O0VBRUEsSUFBSSxDQUFDQSxZQUFMLEVBQW1CO0lBQ2pCO0VBQ0Q7O0VBRUQsT0FBT0EsWUFBWSxDQUFDSyxPQUFiLENBQXFCUCxHQUFyQixFQUEwQk0sS0FBMUIsQ0FBUDtBQUNELENBUk07QUFVQSxNQUFNRSxxQkFBcUIsR0FBSVIsR0FBRCxJQUFpQjtFQUNwRCxNQUFNUyxjQUFjLEdBQUdOLFVBQVUsRUFBRU0sY0FBbkM7O0VBRUEsSUFBSSxDQUFDQSxjQUFMLEVBQXFCO0lBQ25CLE9BQU9DLFNBQVA7RUFDRDs7RUFFRCxPQUFPRCxjQUFjLENBQUNMLE9BQWYsQ0FBdUJKLEdBQXZCLENBQVA7QUFDRCxDQVJNO0FBVUEsTUFBTVcscUJBQXFCLEdBQUcsQ0FBQ1gsR0FBRCxFQUFjTSxLQUFkLEtBQWdDO0VBQ25FLE1BQU1HLGNBQWMsR0FBR04sVUFBVSxFQUFFTSxjQUFuQzs7RUFFQSxJQUFJLENBQUNBLGNBQUwsRUFBcUI7SUFDbkI7RUFDRDs7RUFFRCxPQUFPQSxjQUFjLENBQUNGLE9BQWYsQ0FBdUJQLEdBQXZCLEVBQTRCTSxLQUE1QixDQUFQO0FBQ0QsQ0FSTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvdXRpbHMvc3RvcmFnZS50cz8zNTFjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2VJdGVtID0gKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBsb2NhbFN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5sb2NhbFN0b3JhZ2U7XG5cbiAgaWYgKCFsb2NhbFN0b3JhZ2UpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPz8gZGVmYXVsdFZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldExvY2FsU3RvcmFnZUl0ZW0gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlID0gZ2xvYmFsVGhpcz8ubG9jYWxTdG9yYWdlO1xuXG4gIGlmICghbG9jYWxTdG9yYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb25TdG9yYWdlSXRlbSA9IChrZXk6IHN0cmluZykgPT4ge1xuICBjb25zdCBzZXNzaW9uU3RvcmFnZSA9IGdsb2JhbFRoaXM/LnNlc3Npb25TdG9yYWdlO1xuXG4gIGlmICghc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRTZXNzaW9uU3RvcmFnZUl0ZW0gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2Vzc2lvblN0b3JhZ2UgPSBnbG9iYWxUaGlzPy5zZXNzaW9uU3RvcmFnZTtcblxuICBpZiAoIXNlc3Npb25TdG9yYWdlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG59O1xuIl0sIm5hbWVzIjpbImdldExvY2FsU3RvcmFnZUl0ZW0iLCJrZXkiLCJkZWZhdWx0VmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnbG9iYWxUaGlzIiwiZ2V0SXRlbSIsInNldExvY2FsU3RvcmFnZUl0ZW0iLCJ2YWx1ZSIsInNldEl0ZW0iLCJnZXRTZXNzaW9uU3RvcmFnZUl0ZW0iLCJzZXNzaW9uU3RvcmFnZSIsInVuZGVmaW5lZCIsInNldFNlc3Npb25TdG9yYWdlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/storage.ts\n");

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