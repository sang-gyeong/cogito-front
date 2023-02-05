(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3611:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9063);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6807);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_utils_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5637);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function MyApp({
  Component,
  pageProps
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const prevPath = (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .getSessionStorageItem */ .St)('currentPath') ?? router.pathname;
    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setSessionStorageItem */ .D9)('prevPath', prevPath);
    (0,_src_utils_storage__WEBPACK_IMPORTED_MODULE_9__/* .setSessionStorageItem */ .D9)('currentPath', globalThis.location.pathname);
  }, [router.pathname]); // queryClient는 lifeCycle 주기당 인스턴스가 1번만 생성되도록 App 외부, state, 혹은 ref 등으로 저장한다.

  const {
    0: queryClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
      queries: {
        onError: error => console.log('queryClient error : ', error),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        // SSR 이후 useQuery()로 refetch가 일어나는 것을 비활성화고자 한다면, refetchOnMount를 false로 설정하거나 staleTime을 Infinity로 주는 등의 방법이 있다.
        refetchOnMount: false,
        retry: false
      }
    }
  }));

  const getLayout = Component.getLayout ?? (page => page);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
        children: "Cogito : \uCF54\uAE30\uD1A0"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
      client: queryClient,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {
        state: pageProps.dehydratedState,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(recoil__WEBPACK_IMPORTED_MODULE_5__.RecoilRoot, {
          children: [getLayout( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Component, _objectSpread({}, pageProps))), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_src_components_Modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_4__.ReactQueryDevtools, {
        initialIsOpen: false
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ modalShowState),
/* harmony export */   "e": () => (/* binding */ modalState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const modalShowState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'modalShowState',
  default: false
});
const modalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'modalState',
  default: {
    isShow: false,
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
    closeCallBack: () => {},
    config: {}
  }
});

/***/ }),

/***/ 6807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2754);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function Modal() {
  const [showModal, setShowModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalShowState */ .b);
  const {
    title,
    component,
    closeCallBack,
    config
  } = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_atoms_modal__WEBPACK_IMPORTED_MODULE_3__/* .modalState */ .e);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => closeCallBack();
  }, [showModal, closeCallBack]);

  const handleClose = () => setShowModal(false);

  const modalConfig = {
    size: config.size ?? 'lg',
    closeButton: !!config?.closeButton,
    centered: !!config?.centered
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      size: modalConfig.size,
      show: showModal,
      onHide: handleClose,
      centered: modalConfig.centered,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
        closeButton: modalConfig.closeButton,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, {
          children: title
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
        children: component
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "secondary",
          onClick: handleClose,
          children: "\uCDE8\uC18C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          onClick: handleClose,
          children: "\uD655\uC778"
        })]
      })]
    })
  });
} // <div
// className="modal fade"
// id="logoutModal"
// tabIndex={-1}
// role="dialog"
// aria-labelledby="exampleModalLabel"
// aria-hidden="true">
// <div className="modal-dialog" role="document">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h5 className="modal-title" id="exampleModalLabel">
//         Ready to Leave?
//       </h5>
//       <button className="close" type="button" data-dismiss="modal" aria-label="Close">
//         <span aria-hidden="true">×</span>
//       </button>
//     </div>
//     <div className="modal-body">Select Logout below if you are ready to end your current session.</div>
//     <div className="modal-footer">
//       <button className="btn btn-secondary" type="button" data-dismiss="modal">
//         Cancel
//       </button>
//       <a className="btn btn-primary" href="login.html">
//         Logout
//       </a>
//     </div>
//   </div>
// </div>
// </div>

/***/ }),

/***/ 5637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D$": () => (/* binding */ setLocalStorageItem),
/* harmony export */   "D9": () => (/* binding */ setSessionStorageItem),
/* harmony export */   "St": () => (/* binding */ getSessionStorageItem),
/* harmony export */   "le": () => (/* binding */ getLocalStorageItem)
/* harmony export */ });
const getLocalStorageItem = (key, defaultValue) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage || localStorage.getItem(key) === null || localStorage.getItem(key) === 'undefined') {
    return defaultValue;
  }

  return localStorage.getItem(key);
};
const setLocalStorageItem = (key, value) => {
  const localStorage = globalThis?.localStorage;

  if (!localStorage) {
    return;
  }

  return localStorage.setItem(key, value);
};
const getSessionStorageItem = key => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return undefined;
  }

  return sessionStorage.getItem(key);
};
const setSessionStorageItem = (key, value) => {
  const sessionStorage = globalThis?.sessionStorage;

  if (!sessionStorage) {
    return;
  }

  return sessionStorage.setItem(key, value);
};

/***/ }),

/***/ 6593:
/***/ (() => {



/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9063:
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
var __webpack_exports__ = (__webpack_exec__(3611));
module.exports = __webpack_exports__;

})();