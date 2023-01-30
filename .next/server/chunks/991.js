"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 5158:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": () => (/* binding */ getMyData)
/* harmony export */ });
/* unused harmony exports getUserDataById, modifyUserData */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getMyData = () => {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.get */ .D2.get(`/users/me`).then(response => {
    return response?.data;
  });
};
const getUserDataById = userId => axiosInstanceForCSR.get(`/users/${userId}`).then(response => response?.data);
const modifyUserData = (userId, body) => axiosInstanceForCSR.patch(`/users/${userId}`, body).then(response => response?.data);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ navShowState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const navShowState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'navShowState',
  default: false
});

/***/ }),

/***/ 495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ userState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const userState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'userState',
  default: {
    userId: NaN,
    nickname: '',
    profileImgUrl: null,
    score: NaN,
    introduce: null
  }
});

/***/ }),

/***/ 7020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function SideWrapper() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_SideWrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Content, {
      children: "\uD83D\uDD27"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      style: {
        fontSize: '0.8rem'
      },
      children: "\uC0C8 \uAE30\uB2A5 \uC624\uD508 \uC900\uBE44\uC911\uC785\uB2C8\uB2E4 (\uB69D\uB531\uB69D\uB531)"
    })]
  });
}

const _SideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SideWrapper___SideWrapper",
  componentId: "sc-1480gt2-0"
})(["background-color:#eef1f7;min-height:100vh;width:350px;min-width:350px;padding:100px 0;text-align:center;", "{width:270px;min-width:270px;}", "{display:none;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .media.tablet */ .B.tablet, _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .media.mobile */ .B.mobile);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SideWrapper__Content",
  componentId: "sc-1480gt2-1"
})(["font-size:6rem;"]);

/***/ }),

/***/ 8052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
    className: "sticky-footer",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container my-auto",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "copyright text-center my-auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Copyright \xA9 Your Website 2020"
        })
      })
    })
  });
}

/***/ }),

/***/ 5651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3965);
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7029);
/* harmony import */ var _UserDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4103);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserDropdown__WEBPACK_IMPORTED_MODULE_3__]);
_UserDropdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Header() {
  const [isShowNav, setNavShowState] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_atoms_nav__WEBPACK_IMPORTED_MODULE_1__/* .navShowState */ .K);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", {
    className: "navbar navbar-expand navbar-light bg-white topbar static-top shadow",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      id: "sidebarToggleTop",
      className: "btn btn-link d-md-none rounded-circle mr-3",
      onClick: () => setNavShowState(!isShowNav),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
        className: "fa fa-bars"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_SearchInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_UserDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function SearchInput() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query?.query ?? '');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedQuery = query.trim();

    if (!trimmedQuery.length) {
      alert('검색어를 입력해 주세요');
      return;
    }

    router.push({
      pathname: '/questions',
      query: {
        query
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("form", {
    onSubmit: handleSubmit,
    className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "input-group",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
        value: query,
        type: "text",
        className: "form-control bg-light border-0 small",
        placeholder: "Search for...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: handleChange
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "input-group-append",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          className: "btn btn-primary",
          type: "submit",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
            className: "fas fa-search fa-sm"
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ 6199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3965);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function SideBar() {
  const [isShowNav, setIsShowNav] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_nav__WEBPACK_IMPORTED_MODULE_4__/* .navShowState */ .K);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
    className: `navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isShowNav ? '' : 'toggled'}`,
    id: "accordionSidebar",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
        className: "sidebar-brand d-flex align-items-center justify-content-center",
        href: "#",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "sidebar-brand-icon rotate-n-15",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(LogoIcon, {
            children: "\uD83D\uDD25"
          })
        }), isShowNav && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(LogoTitle, {
          className: "",
          children: ["COGITO ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(LogoSup, {
            children: "0.1v"
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {
      className: "sidebar-divider my-0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ButtonWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/new",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
          variant: "primary",
          href: "#",
          children: "\uC9C8\uBB38\uD558\uAE30"
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "sidebar-heading",
      children: "\uD398\uC774\uC9C0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
      className: "nav-item active",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/questions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "material-symbols-outlined",
            children: "live_help"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "label",
            children: "Questions"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
      className: "nav-item",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          onClick: () => alert('아직 개발중인 페이지입니다!'),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "material-symbols-outlined",
            children: "bookmarks"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "label",
            children: "Tags"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          onClick: () => alert('아직 개발중인 페이지입니다!'),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "material-symbols-outlined",
            children: "group"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            className: "label",
            children: "Users"
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "sidebar-heading",
      children: "\uAE30\uD0C0\uAE30\uB2A5"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Tab, {
        className: "nav-link",
        href: "#",
        onClick: () => alert('아직 개발중인 페이지입니다!'),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("i", {
          className: "fa-fw"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "material-symbols-outlined",
          children: "add_circle"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "label",
          children: "\uAE30\uD0C0 \uAE30\uB2A5 (\uBBF8\uC624\uD508)"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("hr", {
      className: "sidebar-divider d-none d-md-block"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: "text-center d-none d-md-inline",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
        className: "rounded-circle border-0",
        id: "sidebarToggle",
        onClick: () => setIsShowNav(!isShowNav)
      })
    })]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "SideBar__Wrapper",
  componentId: "sc-ae825e-0"
})(["max-width:370px;width:40%;background-color:beige;padding-left:30px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "SideBar__ButtonWrapper",
  componentId: "sc-ae825e-1"
})(["height:116px;display:flex;align-items:center;justify-content:center;& > a{background-color:white;color:#303d62;font-size:0.97rem;font-weight:600;width:180px;max-width:80%;height:50px;display:flex;align-items:center;justify-content:center;}"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_3___default().a.withConfig({
  displayName: "SideBar__Tab",
  componentId: "sc-ae825e-2"
})(["display:flex;align-items:center;& > .label{position:relative;bottom:2px;left:5px;}"]);
const LogoIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "SideBar__LogoIcon",
  componentId: "sc-ae825e-3"
})(["font-size:1.8rem;"]);
const LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "SideBar__LogoTitle",
  componentId: "sc-ae825e-4"
})(["margin-left:0.5rem;font-size:1.35rem;font-weight:700;"]);
const LogoSup = styled_components__WEBPACK_IMPORTED_MODULE_3___default().sup.withConfig({
  displayName: "SideBar__LogoSup",
  componentId: "sc-ae825e-5"
})(["font-weight:400;font-size:0.01rem;"]);

/***/ }),

/***/ 4103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserDropdown)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2955);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9263);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(542);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth__WEBPACK_IMPORTED_MODULE_6__]);
_api_auth__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function UserDropdown() {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: isSearchOpen,
    1: setIsSearchOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const userData = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_atoms_user__WEBPACK_IMPORTED_MODULE_4__/* .userState */ .K);
  const isLoggedIn = !!userData?.nickname;

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const requestLogout = async () => {
    await (0,_api_auth__WEBPACK_IMPORTED_MODULE_6__/* .logout */ .kS)();
  };

  const onClickLogout = () => {
    requestLogout(); // @TODO: 서버측에서 정의해준 토큰명으로 변경

    react_cookies__WEBPACK_IMPORTED_MODULE_7___default().remove('refreshToken');
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
      className: "navbar-nav ml-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        className: `nav-item dropdown no-arrow d-sm-none ${isSearchOpen ? 'show' : ''}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
          onClick: () => setIsSearchOpen(!isSearchOpen),
          className: "nav-link dropdown-toggle",
          href: "#",
          id: "searchDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
            className: "fas fa-search fa-fw"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: `dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${isSearchOpen ? 'show' : ''}`,
          "aria-labelledby": "searchDropdown",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("form", {
            className: "form-inline mr-auto w-100 navbar-search",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "input-group",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
                type: "text",
                className: "form-control bg-light border-0 small",
                placeholder: "Search for...",
                "aria-label": "Search",
                "aria-describedby": "basic-addon2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "input-group-append",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                  className: "btn btn-primary",
                  type: "button",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "fas fa-search fa-sm"
                  })
                })
              })]
            })
          })
        })]
      }), isLoggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
          className: "nav-item dropdown no-arrow mx-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "nav-link dropdown-toggle",
            href: "#",
            id: "alertsDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
              className: "fas fa-bell fa-fw"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
            "aria-labelledby": "alertsDropdown",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h6", {
              className: "dropdown-header",
              children: "Alerts Center"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "icon-circle bg-primary",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "fas fa-file-alt text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 12, 2019"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  className: "font-weight-bold",
                  children: "A new monthly report is ready to download!"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "icon-circle bg-success",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "fas fa-donate text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 7, 2019"
                }), "$290.29 has been deposited into your account!"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "icon-circle bg-warning",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                    className: "fas fa-exclamation-triangle text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 2, 2019"
                }), "Spending Alert: We ve noticed unusually high spending for your account."]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
              className: "dropdown-item text-center small text-gray-500",
              href: "#",
              children: "Show All Alerts"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "topbar-divider d-none d-sm-block"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
          className: `nav-item dropdown no-arrow ${isOpen ? ' show' : ''}`,
          onClick: clickHandler,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
            className: "nav-link dropdown-toggle",
            href: "#",
            id: "userDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "mr-2 d-none d-lg-inline text-gray-600 small",
              children: userData.nickname
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "img-profile rounded-circle",
              src: public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
              alt: "profile-image",
              width: 32,
              height: 32
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: `dropdown-menu dropdown-menu-right shadow animated--grow-in ${isOpen ? ' show' : ''}`,
            "aria-labelledby": "userDropdown",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/my",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
                className: "dropdown-item",
                href: "#",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                  className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
                }), "\uB9C8\uC774\uD398\uC774\uC9C0"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
              className: "dropdown-item",
              href: "#",
              onClick: onClickLogout,
              "data-toggle": "modal",
              "data-target": "#logoutModal",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("i", {
                className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
              }), "\uB85C\uADF8\uC544\uC6C3"]
            })]
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
        className: "nav-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/login",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
            className: "nav-link dark",
            children: "\uB85C\uADF8\uC778"
          })
        })
      })]
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7794);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8052);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6199);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5651);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3965);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Common_SideWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7020);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3049);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_3__]);
([_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__, _Header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function Layout({
  children
}) {
  const isShowNav = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_atoms_nav__WEBPACK_IMPORTED_MODULE_5__/* .navShowState */ .K);
  (0,_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__/* .useFetchUserData */ .l)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: isShowNav ? 'sidebar-toggled' : '',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      id: "wrapper",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_SideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        id: "content-wrapper",
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          id: "content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(MainWrapper, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(Main, {
              children: children
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Common_SideWrapper__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("a", {
      className: "scroll-to-top rounded",
      href: "#page-top",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("i", {
        className: "fas fa-angle-up"
      })
    })]
  });
}
const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "Layout__MainWrapper",
  componentId: "sc-1cw9f21-0"
})(["display:flex;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
  displayName: "Layout__Main",
  componentId: "sc-1cw9f21-1"
})(["width:70%;max-width:960px;margin:0 auto;", "{width:100%;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_8__/* .media.tablet */ .B.tablet);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useFetchUserData)
/* harmony export */ });
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5158);
/* harmony import */ var _atoms_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(495);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_user__WEBPACK_IMPORTED_MODULE_0__]);
_api_user__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function useFetchUserData() {
  const setUserState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_atoms_user__WEBPACK_IMPORTED_MODULE_1__/* .userState */ .K);

  const fetchMyUserData = async () => {
    const data = await (0,_api_user__WEBPACK_IMPORTED_MODULE_0__/* .getMyData */ .$L)();
    setUserState(data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchMyUserData();
  }, []);
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ media)
});

// UNUSED EXPORTS: mediaQuery

;// CONCATENATED MODULE: ./src/constants/platform.ts
const BREAK_POINT = {
  MOBILE: 767,
  TABLET: 1024,
  DESKTOP: 1439
};
const DEVICE_TYPE = {
  mobile: 'MOBILE',
  tablet: 'TABLET',
  desktop: 'DESKTOP'
};
;// CONCATENATED MODULE: ./src/utils/mediaQuery.ts

const mediaQuery = maxWidth => `
  @media (max-width: ${maxWidth}px)
`;
const media = {
  tablet: mediaQuery(BREAK_POINT.TABLET),
  mobile: mediaQuery(BREAK_POINT.MOBILE),
  desktop: mediaQuery(BREAK_POINT.DESKTOP)
};

/***/ }),

/***/ 2955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/undraw_profile.017101fc.svg","height":108,"width":108});

/***/ })

};
;