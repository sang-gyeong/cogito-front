"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 5485:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3991);
/* harmony import */ var _src_components_templates_UserTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6557);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _src_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5863);
/* harmony import */ var _src_api_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5158);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_UserTemplate__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _src_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_3__, _src_api_user__WEBPACK_IMPORTED_MODULE_4__]);
([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_UserTemplate__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _src_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_3__, _src_api_user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function UserPage({
  id
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_templates_UserTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    id: id
  });
}
const getServerSideProps = async context => {
  const id = Number(context.query.id);
  const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
  await queryClient.prefetchQuery([_src_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_KEY */ .l, {
    id
  }], () => (0,_src_api_user__WEBPACK_IMPORTED_MODULE_4__/* .getUserDataById */ .EC)(id));
  return {
    props: {
      dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient),
      id
    }
  };
};

UserPage.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    hasSide: false,
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6557:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserTemplate)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _queries_useUserQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5863);
/* harmony import */ var public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2955);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Modal_loginModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9056);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2754);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9244);
/* harmony import */ var _hooks_useGetDevice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2901);
/* harmony import */ var _constants_platform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8814);
/* harmony import */ var _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9641);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_2__, _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_11__]);
([_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_2__, _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function UserTemplate({
  id
}) {
  const {
    data: user,
    isLoading: isUserLoading
  } = (0,_queries_useUserQuery__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(id);
  const {
    data: mydata,
    isLoading: isMyDataLoading
  } = (0,_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_6__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_7__/* .modalState */ .e);
  const device = (0,_hooks_useGetDevice__WEBPACK_IMPORTED_MODULE_9__/* .useGetDevice */ .H)();
  const isMobile = device === _constants_platform__WEBPACK_IMPORTED_MODULE_10__/* .DEVICE_TYPE.mobile */ .me.mobile;

  if (isUserLoading || isMyDataLoading || !user || !mydata) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: "Loading..."
    });
  }

  const isMe = mydata.userId === user.userId;

  const onClickEditProfile = () => {
    setModalState({
      isShow: true,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_Modal_loginModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
      title: '로그인',
      closeCallBack: () => console.log('tada!!'),
      config: {
        size: 'lg',
        closeButton: true,
        centered: false
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Wrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(ProfileWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        alt: "profile-image",
        src: user.profileImgUrl ?? public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        width: isMobile ? 120 : 130,
        height: isMobile ? 120 : 130
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(ProfileDescriptionWrapper, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ProfileNicknameWrapper, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ProfileNickname, {
            children: user.nickname
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CreatedAt, {
          children: "\uD83C\uDF82 4\uAC1C\uC6D4 \uC804 \uAC00\uC785"
        })]
      }), isMe && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ButtonWrapper, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          href: "#",
          onClick: onClickEditProfile,
          children: "\uD504\uB85C\uD544 \uC218\uC815"
        })
      })]
    })
  });
}
const ProfileNicknameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "UserTemplate__ProfileNicknameWrapper",
  componentId: "sc-1ca1k39-0"
})(["display:flex;gap:12px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "UserTemplate__ButtonWrapper",
  componentId: "sc-1ca1k39-1"
})(["position:absolute;bottom:0;right:0;& > a{background-color:white;color:#3a4564;font-size:0.9rem;font-weight:500;width:110px;height:38px;display:flex;align-items:center;border:1px solid lightgray;box-shadow:1px 2px 4px lightgray;justify-content:center;}"]);
const ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "UserTemplate__ProfileWrapper",
  componentId: "sc-1ca1k39-2"
})(["display:flex;height:150px;width:100%;gap:20px;position:relative;"]);
const CreatedAt = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p.withConfig({
  displayName: "UserTemplate__CreatedAt",
  componentId: "sc-1ca1k39-3"
})(["margin:0;font-size:0.9rem;padding-left:2px;"]);
const ProfileNickname = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "UserTemplate__ProfileNickname",
  componentId: "sc-1ca1k39-4"
})(["font-weight:600;font-size:1.7rem;margin:0;", "{font-size:1.3rem;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_8__/* .media.tablet */ .B.tablet);
const ProfileDescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "UserTemplate__ProfileDescriptionWrapper",
  componentId: "sc-1ca1k39-5"
})(["display:flex;flex-direction:column;justify-content:center;padding-bottom:12px;", "{padding-bottom:24px;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_8__/* .media.tablet */ .B.tablet);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "UserTemplate__Wrapper",
  componentId: "sc-1ca1k39-6"
})(["display:flex;flex-direction:column;padding:30px;color:#303d62;width:100%;height:100%;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "l": () => (/* binding */ QUERY_KEY)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5158);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_user__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_api_user__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const QUERY_KEY = 'useUserQuery';

const useUserQuery = userId => {
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([QUERY_KEY, {
    id: userId
  }], () => (0,_api_user__WEBPACK_IMPORTED_MODULE_0__/* .getUserDataById */ .EC)(userId));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserQuery);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 178:
/***/ ((module) => {

module.exports = require("react-icons/fc");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,786,991], () => (__webpack_exec__(5485)));
module.exports = __webpack_exports__;

})();