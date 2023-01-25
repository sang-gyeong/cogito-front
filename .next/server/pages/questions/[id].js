"use strict";
(() => {
var exports = {};
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 8942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3991);
/* harmony import */ var _src_components_templates_BoardTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(394);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _src_api_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9513);
/* harmony import */ var _src_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2380);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _src_components_templates_BoardTemplate__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _src_api_post__WEBPACK_IMPORTED_MODULE_4__, _src_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__]);
([_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__, _src_components_templates_BoardTemplate__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, _src_api_post__WEBPACK_IMPORTED_MODULE_4__, _src_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function DetailPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const id = Number(router.query.id);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_src_components_templates_BoardTemplate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    id: id
  });
}
const getServerSideProps = async context => {
  const id = Number(context.query.id);
  const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();
  await queryClient.prefetchQuery([_src_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__/* .QUERY_KEY */ .l, {
    id
  }], () => (0,_src_api_post__WEBPACK_IMPORTED_MODULE_4__/* .getPostById */ .u_)(id));
  return {
    props: {
      dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.dehydrate)(queryClient)
    }
  };
};

DetailPage.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9513:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "YO": () => (/* binding */ modifyPost),
/* harmony export */   "qb": () => (/* binding */ createPost),
/* harmony export */   "tz": () => (/* binding */ deletePostById),
/* harmony export */   "u_": () => (/* binding */ getPostById)
/* harmony export */ });
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
const createPost = body => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D2.post('/posts', body).then(response => response?.data);
const modifyPost = (id, body) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D2.patch(`/posts/${id}`, body);
const deletePostById = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR["delete"] */ .D2["delete"](`/posts/${id}`);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}),
    closeCallBack: () => {},
    config: {}
  }
});

/***/ }),

/***/ 7811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CommentItem)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/utils/date.ts
const dateFormatter = _date => {
  const regex = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;

  const result = _date.replace(regex, '$1-$2-$3 $4:$5:$6'); // const date = new Date(result);


  return result;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/CommentItem/index.tsx




function CommentItem({
  comment
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LikesWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
        children: "up"
      }), /*#__PURE__*/jsx_runtime_.jsx(Likes, {
        children: comment.score
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        children: "down"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CommentWrapper, {
      children: comment.content
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
        alt: "profileImg",
        src: comment.profileImgUrl
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: comment.nickname
      }), /*#__PURE__*/jsx_runtime_.jsx(CommentItem_Date, {
        children: dateFormatter(comment.createdAt)
      })]
    })]
  });
}
const LikesWrapper = external_styled_components_default().div.withConfig({
  displayName: "CommentItem__LikesWrapper",
  componentId: "sc-1chqndm-0"
})(["padding:8px 12px;display:flex;flex-direction:column;"]);
const Likes = external_styled_components_default().span.withConfig({
  displayName: "CommentItem__Likes",
  componentId: "sc-1chqndm-1"
})(["font-weight:bold;font-size:1.9rem;"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "CommentItem__Wrapper",
  componentId: "sc-1chqndm-2"
})(["display:flex;justify-content:space-between;border-bottom:1px solid lightgray;padding:12px 0;"]);
const Image = external_styled_components_default().img.withConfig({
  displayName: "CommentItem__Image",
  componentId: "sc-1chqndm-3"
})(["width:30px;height:30px;border-radius:50%;"]);
const CommentWrapper = external_styled_components_default().div.withConfig({
  displayName: "CommentItem__CommentWrapper",
  componentId: "sc-1chqndm-4"
})(["width:60%;"]);
const ProfileWrapper = external_styled_components_default().div.withConfig({
  displayName: "CommentItem__ProfileWrapper",
  componentId: "sc-1chqndm-5"
})(["width:40%;min-width:200px;display:flex;align-items:center;gap:5px;justify-content:flex-end;"]);
const CommentItem_Date = external_styled_components_default().p.withConfig({
  displayName: "CommentItem__Date",
  componentId: "sc-1chqndm-6"
})(["color:gray;font-size:1.3rem;"]);
const Button = external_styled_components_default().button.withConfig({
  displayName: "CommentItem__Button",
  componentId: "sc-1chqndm-7"
})(["background-color:#f2f2f2;border:1px solid gray;"]);

/***/ }),

/***/ 394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoardTemplate)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2754);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2380);
/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7811);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__]);
_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const MarkdownPreview = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9922, 23)), {
  ssr: false,
  loadableGenerated: {
    modules: ["../src/components/templates/BoardTemplate/index.tsx -> " + '@uiw/react-markdown-preview']
  }
});
function BoardTemplate({
  id
}) {
  const {
    data
  } = (0,_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id);
  const setShowModal = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_4__/* .modalShowState */ .b);
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_4__/* .modalState */ .e);

  const handleModal = () => {
    setModalState({
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: "\uC2E0\uACE0\uC0AC\uC720 \uC120\uD0DD\uD558\uAE30"
      }),
      title: '신고하기',
      closeCallBack: () => console.log('tada!!'),
      config: {
        size: 'lg',
        closeButton: true,
        centered: false
      }
    });
    setShowModal(true);
  };

  if (!data) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Loading"
    });
  }

  const {
    title,
    content,
    tags,
    files,
    score,
    createdAt,
    commentResponses,
    profileImgUrl,
    nickname
  } = data;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      href: "/new",
      style: {
        position: 'absolute',
        right: 0,
        border: '1px soild red'
      },
      children: "+ \uC0C8 \uC9C8\uBB38 \uC0DD\uC131\uD558\uAE30"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Title, {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Date, {
      children: createdAt
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SCButton, {
      onClick: handleModal,
      children: "\uC2E0\uACE0\uD558\uAE30"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ContentWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MarkdownPreview, {
        source: content
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TagWrapper, {
      children: tags.map((tag, idx) =>
      /*#__PURE__*/
      // @TODO: tagId
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Badge, {
        bg: "secondary",
        children: tag
      }, idx))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(AuthorWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Image, {
        alt: "profileImg",
        src: profileImgUrl
      }), nickname]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CommentListWrapper, {
      children: commentResponses.map((comment, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_CommentItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        comment: comment
      }, idx))
    })]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BoardTemplate__Wrapper",
  componentId: "sc-pc1m6o-0"
})(["padding:30px;position:relative;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "BoardTemplate__Title",
  componentId: "sc-pc1m6o-1"
})(["font-size:3rem;font-weight:bold;"]);
const SCButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "BoardTemplate__SCButton",
  componentId: "sc-pc1m6o-2"
})(["color:red;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "BoardTemplate__Content",
  componentId: "sc-pc1m6o-3"
})(["font-size:1.5rem;"]);
const TagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BoardTemplate__TagWrapper",
  componentId: "sc-pc1m6o-4"
})(["display:flex;gap:4px;"]);
const CommentListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BoardTemplate__CommentListWrapper",
  componentId: "sc-pc1m6o-5"
})(["margin-top:20px;border-top:1px solid lightgray;display:flex;flex-direction:column;gap:10px;"]);
const Date = styled_components__WEBPACK_IMPORTED_MODULE_3___default().p.withConfig({
  displayName: "BoardTemplate__Date",
  componentId: "sc-pc1m6o-6"
})(["color:gray;font-size:1.5rem;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BoardTemplate__ContentWrapper",
  componentId: "sc-pc1m6o-7"
})(["margin:20px 0;"]);
const AuthorWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "BoardTemplate__AuthorWrapper",
  componentId: "sc-pc1m6o-8"
})(["width:300px;height:80px;background-color:beige;"]);
const Image = styled_components__WEBPACK_IMPORTED_MODULE_3___default().img.withConfig({
  displayName: "BoardTemplate__Image",
  componentId: "sc-pc1m6o-9"
})(["border-radius:50%;width:50px;height:50px;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2380:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ QUERY_KEY)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_post__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_post__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const QUERY_KEY = 'getPostById';

const usePostQuery = id => {
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([QUERY_KEY, {
    id
  }], () => (0,_api_post__WEBPACK_IMPORTED_MODULE_1__/* .getPostById */ .u_)(id));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostQuery);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9922:
/***/ ((module) => {

module.exports = require("@uiw/react-markdown-preview");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 542:
/***/ ((module) => {

module.exports = require("react-cookies");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9755:
/***/ ((module) => {

module.exports = require("recoil");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,152,786,991], () => (__webpack_exec__(8942)));
module.exports = __webpack_exports__;

})();