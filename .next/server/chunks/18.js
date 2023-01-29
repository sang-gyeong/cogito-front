"use strict";
exports.id = 18;
exports.ids = [18];
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
  return _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .We.get(`/posts`, {
    params: {
      query,
      page
    }
  }).then(response => {
    return response?.data;
  });
};
const getPostById = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .We.get(`/posts/${id}`).then(response => response?.data);
const createPost = (title, content, files, tags) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D2.post('/posts', {
  title,
  content,
  files,
  tags
}).then(response => response?.data);
const modifyPost = (id, body) => axiosInstanceForCSR.patch(`/posts/${id}`, body);
const deletePostById = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR["delete"] */ .D2["delete"](`/posts/${id}`);
const likePost = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D2.patch(`/posts/${id}/like`);
const dislikePost = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D2.patch(`/posts/${id}/dislike`);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TagItem)
/* harmony export */ });
/* unused harmony export Tag */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TagItem({
  tag
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Tag, {
    children: tag
  });
}
const Tag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "Tag",
  componentId: "sc-1f9tioe-0"
})(["background-color:cadetblue;color:white;font-size:0.7rem;padding:3px 9px;border-radius:9px;margin-right:8px;"]);

/***/ }),

/***/ 3028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getScoreImage)
/* harmony export */ });
const getScoreImage = score => {
  if (score >= 50) {
    return '🥇';
  } else if (score >= 30) {
    return '🥈';
  } else {
    return '🥉';
  }
};

/***/ })

};
;