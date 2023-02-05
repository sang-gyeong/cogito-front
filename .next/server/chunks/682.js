"use strict";
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 9513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bh": () => (/* binding */ dislikePost),
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "n9": () => (/* binding */ likePost),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "tz": () => (/* binding */ deletePostById),
/* harmony export */   "u_": () => (/* binding */ getPostById)
/* harmony export */ });
/* unused harmony export modifyPost */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getPosts = ({
  query,
  page
}) => {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .W.get(`/posts`, {
    params: {
      query,
      page
    }
  }).then(response => {
    return response?.data;
  });
};
const getPostById = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .W.get(`/posts/${id}`).then(response => response?.data);
const createPost = (title, content, files, tags) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D.post('/posts', {
  title,
  content,
  files,
  tags
}).then(response => response?.data);
const modifyPost = (id, body) => axiosInstanceForCSR.patch(`/posts/${id}`, body);
const deletePostById = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR["delete"] */ .D["delete"](`/posts/${id}`);
const likePost = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D.patch(`/posts/${id}/like`);
const dislikePost = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D.patch(`/posts/${id}/dislike`);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ modalState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



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

/***/ 5185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ MarkdownPreview),
/* harmony export */   "M": () => (/* binding */ MDEditor)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const MDEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1887, 23)), {
  ssr: false,
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
      height: 100
    })
  }),
  loadableGenerated: {
    modules: ["../src/libs/MDEditor.tsx -> " + '@uiw/react-md-editor']
  }
});
const MarkdownPreview = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9922, 23)), {
  ssr: false,
  loading: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
      count: 4
    })
  }),
  loadableGenerated: {
    modules: ["../src/libs/MDEditor.tsx -> " + '@uiw/react-markdown-preview']
  }
});

/***/ })

};
;