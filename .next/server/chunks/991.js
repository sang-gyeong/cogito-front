"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

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

/***/ 3965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ navFoldState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const navFoldState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: 'navFoldState',
  default: true
});

/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Logo({
  isHeader
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
    href: "/",
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(LogoWrapper, {
      children: [!isHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "sidebar-brand-icon rotate-n-15",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(LogoIcon, {
          children: "\uD83D\uDD25"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(LogoTitleWrapper, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(LogoTitle, {
          children: "\uCF54\uAE30\uD1A0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(LogoSup, {
          children: "\uAC1C\uBC1C\uC790\uB4E4\uC758 \uC9C8\uC758\uC751\uB2F5 \uACF5\uAC04 \uD83D\uDD25"
        })]
      })]
    })
  });
}
const LogoTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Logo__LogoTitleWrapper",
  componentId: "sc-zsbb1g-0"
})([""]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
  displayName: "Logo__LogoWrapper",
  componentId: "sc-zsbb1g-1"
})(["display:inline-block;background-color:white;color:#303d62;display:flex;justify-content:flex-start;align-items:center;height:70px;gap:10px;white-space:nowrap;padding-right:30px;"]);
const LogoIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "Logo__LogoIcon",
  componentId: "sc-zsbb1g-2"
})(["font-size:2.5rem;"]);
const LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "Logo__LogoTitle",
  componentId: "sc-zsbb1g-3"
})(["font-size:1.44rem;font-weight:700;line-height:1.6rem;"]);
const LogoSup = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "Logo__LogoSup",
  componentId: "sc-zsbb1g-4"
})(["font-size:0.5rem;padding:0;margin:0;"]);

/***/ }),

/***/ 8430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function SearchInput({
  className = '',
  type = 'QUESTIONS'
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query?.query ?? '');
  const isSearchQuestions = type === 'QUESTIONS';

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); // const trimmedQuery = query.trim();
    // // if (!trimmedQuery.length) {
    // //   alert('검색어를 입력해 주세요');
    // //   return;
    // // }

    router.push({
      pathname: isSearchQuestions ? '/questions' : '/users',
      query: {
        query
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Form, {
    onSubmit: handleSubmit,
    className: className,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "input-group",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Input, {
        value: query,
        type: "text",
        className: isSearchQuestions ? 'form-control bg-light border-0 small' : 'form-control border-1 mini',
        placeholder: "Search for...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: handleChange
      }), isSearchQuestions && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "input-group-append",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
          className: "btn btn-primary",
          type: "submit",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "fas fa-search fa-sm"
          })
        })
      })]
    })
  });
}
const Form = styled_components__WEBPACK_IMPORTED_MODULE_2___default().form.withConfig({
  displayName: "SearchInput__Form",
  componentId: "sc-2p15py-0"
})(["padding-right:16px;"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "SearchInput__Input",
  componentId: "sc-2p15py-1"
})([""]);

/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBarToggleButton)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3965);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function SideBarToggleButton() {
  const [isNavFold, setIsNavFold] = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilState)(_atoms_nav__WEBPACK_IMPORTED_MODULE_1__/* .navFoldState */ .d);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
    id: "sidebarToggleTop",
    className: "btn btn-link d-md-none rounded-circle",
    onClick: () => setIsNavFold(!isNavFold),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("i", {
      className: "fa fa-bars"
    })
  });
}

/***/ }),

/***/ 7020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9244);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function SideWrapper() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrapper, {
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
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SideWrapper__Wrapper",
  componentId: "sc-1480gt2-0"
})(["background-color:#eef1f7;min-height:100vh;width:350px;min-width:30%;padding:100px 0;text-align:center;", "{display:none;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .media.laptop */ .B.laptop);
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
          children: "Copyright 2023 Cogito \xA9 All rights reserved."
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_SideBarToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2713);
/* harmony import */ var _Common_SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8430);
/* harmony import */ var _UserDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4103);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9244);
/* harmony import */ var _Common_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5645);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserDropdown__WEBPACK_IMPORTED_MODULE_3__]);
_UserDropdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Wrapper, {
    className: "navbar navbar-expand navbar-light bg-white topbar static-top shadow",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Common_SideBarToggleButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(LogoWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Common_Logo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        isHeader: true
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Common_SearchInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
      className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_UserDropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
}
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Header__LogoWrapper",
  componentId: "sc-1tvo7e2-0"
})(["display:none;", "{display:block;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_4__/* .media.tablet */ .B.tablet);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().header.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1tvo7e2-1"
})(["padding-right:4rem;z-index:900;", "{padding-right:2.5rem;}", "{padding-right:2rem;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_4__/* .media.laptop */ .B.laptop, _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_4__/* .media.tablet */ .B.tablet);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6199:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3965);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9641);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(178);
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useGetDevice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2901);
/* harmony import */ var _constants_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8814);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9244);
/* harmony import */ var _Modal_loginModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9056);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2754);
/* harmony import */ var _Common_Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5645);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_6__]);
_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



















function SideBar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const [isNavFold, setIsNavFold] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_atoms_nav__WEBPACK_IMPORTED_MODULE_4__/* .navFoldState */ .d);
  const {
    refetch
  } = (0,_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  const deviceType = (0,_hooks_useGetDevice__WEBPACK_IMPORTED_MODULE_11__/* .useGetDevice */ .H)();
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_15__/* .modalState */ .e);

  const validateUserState = async () => {
    const {
      data: user
    } = await refetch({
      queryKey: [_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_6__/* .QUERY_KEY */ .l]
    });
    const isLoggedIn = user?.userId;

    if (isLoggedIn) {
      router.push('/new');
    } else {
      window.alert('로그인이 필요합니다');
      setModalState({
        isShow: true,
        component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Modal_loginModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
        title: '로그인',
        closeCallBack: () => console.log('tada!!'),
        config: {
          size: 'lg',
          closeButton: true,
          centered: false
        }
      });
    }
  };

  const onClickAskButton = event => {
    event.preventDefault();
    validateUserState();
  };

  const alertHandler = event => {
    event.preventDefault();
    alert('아직 개발중인 페이지입니다!');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (deviceType === _constants_platform__WEBPACK_IMPORTED_MODULE_12__/* .DeviceType.desktop */ .Yi.desktop || deviceType === _constants_platform__WEBPACK_IMPORTED_MODULE_12__/* .DeviceType.laptop */ .Yi.laptop) {
      setIsNavFold(false);
    } else {
      setIsNavFold(true);
    }
  }, [deviceType, router.asPath]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(Wrapper, {
    className: `navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isNavFold ? 'toggled' : ''}`,
    id: "accordionSidebar",
    isNavFold: isNavFold,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(LogoWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_Common_Logo__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
        isHeader: false
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {
      className: "sidebar-divider my-0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(ButtonWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        href: "#",
        onClick: onClickAskButton,
        children: "\uC9C8\uBB38\uD558\uAE30"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "sidebar-heading",
      children: "\uD398\uC774\uC9C0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
      className: `nav-item ${router.pathname === '/questions' ? 'active' : ''}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/questions",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(Tab, {
          className: "nav-link",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(IconWrapper, {
            isNavFold: isNavFold,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdQuestionAnswer, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(TabLabel, {
            children: "Questions"
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
      className: `nav-item ${router.pathname === '/users' ? 'active' : ''}`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/users",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(Tab, {
          className: "nav-link",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(IconWrapper, {
            isNavFold: isNavFold,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsFillPeopleFill, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(TabLabel, {
            children: "Users"
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("hr", {
      className: "sidebar-divider",
      style: {
        margin: '1rem'
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
      className: "sidebar-heading",
      children: "\uAE30\uD0C0\uAE30\uB2A5"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(Tab, {
        className: "nav-link",
        href: "#",
        onClick: alertHandler,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(IconWrapper, {
          isNavFold: isNavFold,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcAbout, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(TabLabel, {
          children: "\uCF54\uAE30\uD1A0\uC5D0 \uBB38\uC758\uD558\uAE30 (\uC900\uBE44\uC911)"
        })]
      })
    })]
  });
}
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "SideBar__LogoWrapper",
  componentId: "sc-ae825e-0"
})(["padding-left:16px;"]);
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "SideBar__IconWrapper",
  componentId: "sc-ae825e-1"
})(["font-size:1rem;display:inline-block;padding-right:8px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().ul.withConfig({
  displayName: "SideBar__Wrapper",
  componentId: "sc-ae825e-2"
})(["position:relative;height:100%;z-index:1000;box-shadow:none;", "{position:absolute;box-shadow:", ";}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_13__/* .media.tablet */ .B.tablet, ({
  isNavFold
}) => isNavFold ? 'none' : '1rem 0 1rem rgba(0, 0, 0, 0.07)');
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
  displayName: "SideBar__ButtonWrapper",
  componentId: "sc-ae825e-3"
})(["height:116px;display:flex;align-items:center;justify-content:center;background-color:#303d62;background-image:linear-gradient(90deg,#303d62 10%,#517495 100%);& > a{background-color:white;color:#303d62;font-size:0.97rem;font-weight:600;width:180px;max-width:80%;height:50px;display:flex;align-items:center;justify-content:center;}"]);
const TabLabel = styled_components__WEBPACK_IMPORTED_MODULE_5___default().span.withConfig({
  displayName: "SideBar__TabLabel",
  componentId: "sc-ae825e-4"
})(["white-space:nowrap;"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
  displayName: "SideBar__Tab",
  componentId: "sc-ae825e-5"
})(["display:flex;flex-direction:row;color:#303d62;& > span{position:relative;}", "{display:inline-block;& > span{left:0;}}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_13__/* .media.tablet */ .B.tablet);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
/* harmony import */ var public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2955);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9263);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(542);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8430);
/* harmony import */ var _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9641);
/* harmony import */ var _Modal_loginModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9056);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2754);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_auth__WEBPACK_IMPORTED_MODULE_4__, _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_7__]);
([_api_auth__WEBPACK_IMPORTED_MODULE_4__, _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function UserDropdown() {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: isSearchOpen,
    1: setIsSearchOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    data: user
  } = (0,_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
  const isLoggedIn = !!user?.nickname;
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_9__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_10__/* .modalState */ .e);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const requestLogout = async () => {
    await (0,_api_auth__WEBPACK_IMPORTED_MODULE_4__/* .logout */ .kS)(); // @TODO: 서버측에서 정의해준 토큰명으로 변경

    react_cookies__WEBPACK_IMPORTED_MODULE_5___default().remove('refreshToken');
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  const onClickLogout = () => {
    requestLogout();
  };

  const onClickLogin = e => {
    e.preventDefault();
    setModalState({
      isShow: true,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Modal_loginModal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
      title: '로그인',
      closeCallBack: () => console.log('tada!!'),
      config: {
        size: 'lg',
        closeButton: true,
        centered: false
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("ul", {
      className: "navbar-nav ml-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
        className: `nav-item dropdown no-arrow d-sm-none ${isSearchOpen ? 'show' : ''}`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
          onClick: () => setIsSearchOpen(!isSearchOpen),
          className: "nav-link dropdown-toggle",
          id: "searchDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
            className: "fas fa-search fa-fw"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: `dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in ${isSearchOpen ? 'show' : ''}`,
          "aria-labelledby": "searchDropdown",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_SearchInput__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: "form-inline mr-auto w-100 navbar-search"
          })
        })]
      }), isLoggedIn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
          className: "nav-item dropdown no-arrow mx-1",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
            className: "nav-link dropdown-toggle",
            id: "alertsDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
              className: "fas fa-bell fa-fw"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
            "aria-labelledby": "alertsDropdown",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("h6", {
              className: "dropdown-header",
              children: "Alerts Center"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "icon-circle bg-primary",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                    className: "fas fa-file-alt text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 12, 2019"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: "font-weight-bold",
                  children: "A new monthly report is ready to download!"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "icon-circle bg-success",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                    className: "fas fa-donate text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 7, 2019"
                }), "$290.29 has been deposited into your account!"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "icon-circle bg-warning",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                    className: "fas fa-exclamation-triangle text-white"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 2, 2019"
                }), "Spending Alert: We ve noticed unusually high spending for your account."]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
              className: "dropdown-item text-center small text-gray-500",
              children: "Show All Alerts"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: "topbar-divider d-none d-sm-block"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("li", {
          className: `nav-item dropdown no-arrow ${isOpen ? ' show' : ''}`,
          onClick: clickHandler,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
            className: "nav-link dropdown-toggle",
            id: "userDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": isOpen,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
              className: "mr-2 d-none d-lg-inline text-gray-600 small",
              children: user.nickname
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
              className: "img-profile rounded-circle",
              src: public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
              alt: "profile-image",
              width: 32,
              height: 32
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: `dropdown-menu dropdown-menu-right shadow animated--grow-in ${isOpen ? ' show' : ''}`,
            "aria-labelledby": "userDropdown",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/my",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
                className: "dropdown-item",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                  className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
                }), "\uB9C8\uC774\uD398\uC774\uC9C0"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
              className: "dropdown-item",
              onClick: onClickLogout,
              "data-toggle": "modal",
              "data-target": "#logoutModal",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("i", {
                className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
              }), "\uB85C\uADF8\uC544\uC6C3"]
            })]
          })]
        })]
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("li", {
        className: "nav-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("a", {
          href: "#",
          className: "nav-link dark",
          onClick: onClickLogin,
          children: "\uB85C\uADF8\uC778"
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(973);
/* harmony import */ var _atoms_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3965);
/* harmony import */ var _queries_useMyQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9641);
/* harmony import */ var _Common_SideWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7020);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8052);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6199);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5651);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9244);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_4__, _SideBar__WEBPACK_IMPORTED_MODULE_7__, _Header__WEBPACK_IMPORTED_MODULE_8__]);
([_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_4__, _SideBar__WEBPACK_IMPORTED_MODULE_7__, _Header__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // utils, atoms, hooks


 // components










function Layout({
  children,
  hasSide
}) {
  (0,_queries_useMyQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
  const [isNavFold, setIsNavFold] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_atoms_nav__WEBPACK_IMPORTED_MODULE_3__/* .navFoldState */ .d);

  const onClickDimmed = () => {
    setIsNavFold(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const eventSource = new EventSource('https://dev.cogito.shop/api/notifications/subscribe', {
      withCredentials: true
    });

    if (typeof EventSource !== 'undefined') {
      // connection 되면
      eventSource.onopen = event => {
        console.log('connection is Open : ', event);
      };

      eventSource.onmessage = event => {
        console.log('New Message : ', event.data);
      }; // error 나면


      eventSource.onerror = event => {
        console.log('Error : ', event);
      };
    } else {
      alert('EventSource 객체를 지원하지 않는 브라우저 입니다.');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
      id: "wrapper",
      className: isNavFold ? 'sidebar-toggled' : '',
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_SideBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .ContentWrapper */ .vs, {
        id: "content-wrapper",
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
          id: "content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__/* .MainWrapper */ .rS, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_style__WEBPACK_IMPORTED_MODULE_2__/* .Main */ .or, {
              children: children
            }), hasSide && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_SideWrapper__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Dimmed, {
      onClick: onClickDimmed,
      isNavFold: isNavFold
    })]
  });
}
const Dimmed = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div.withConfig({
  displayName: "Layout__Dimmed",
  componentId: "sc-1cw9f21-0"
})(["position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;background-color:rgba(0,0,0,0.4);z-index:990;display:none;", "{display:", ";}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_10__/* .media.tablet */ .B.tablet, ({
  isNavFold
}) => isNavFold ? 'none' : 'block');
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VY": () => (/* binding */ Content),
/* harmony export */   "im": () => (/* binding */ Wrapper),
/* harmony export */   "or": () => (/* binding */ Main),
/* harmony export */   "rS": () => (/* binding */ MainWrapper),
/* harmony export */   "vs": () => (/* binding */ ContentWrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9244);

 // layout

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Wrapper",
  componentId: "sc-pxs50q-0"
})(["display:flex;height:100%;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__ContentWrapper",
  componentId: "sc-pxs50q-1"
})(["background-color:#f8f9fc;width:100%;overflow-x:hidden;position:relative;height:100%;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Content",
  componentId: "sc-pxs50q-2"
})(["flex:1 0 auto;"]);
const MainWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__MainWrapper",
  componentId: "sc-pxs50q-3"
})(["display:flex;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "style__Main",
  componentId: "sc-pxs50q-4"
})(["width:70%;max-width:1000px;margin:0 auto;", "{width:90%;}", "{width:100%;}"], _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .media.laptop */ .B.laptop, _utils_mediaQuery__WEBPACK_IMPORTED_MODULE_1__/* .media.tablet */ .B.tablet); //header
//sidebar

/***/ }),

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoginModal)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/kakao.png
/* harmony default export */ const kakao = ({"src":"/_next/static/media/kakao.3446969f.png","height":586,"width":586,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0klEQVR42j2PwQoBQRzG5yXcOLiwS0nhwGZnywNIeQHexFO4KuUhRFmlyNXBsmsXJTnsyWVm2c/8V8xh+vq+r5nfx+i8jqYeHUw79riMXS5Jk/cP3y4PEXCIvQnhmCBNHmVUsHHimI9rotcuot8pYjGpCfIoYzhb0l82wFgO5YyGSlZL9HXVoJcko+u2NlDXdJTSFOahpzQ8tgbgq4JUQLhYmI6qotsqYDgow5nVhQpBsCxSIIo+vG8MPHdNUBlB8n+oQL9LFLkOn9vwkonJzF/4Ac9BmtKn7LD+AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/img/github.png
/* harmony default export */ const github = ({"src":"/_next/static/media/github.7cef2047.png","height":800,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAYElEQVR42k2NsQ1AUABEbwnERFhAqVZR2scKIoyglOgUBjDCT+S55CvkJZeX15wUUvRhC/JQMpkyJlFwcpvTJiRmNizeOYaFHZmDNYaai4GRhwqhBNHS0NMhMvS/zVF4AbWiUa4HkMIuAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Modal/loginModal.tsx






const KAKAO_LOGIN_URL = 'https://kauth.kakao.com/oauth/authorize';
const GITHUB_LOGIN_URL = 'https://github.com/login/oauth/authorize';
const KAKAO_REDIRECT_URI = 'https://dev.cogito.shop/auth/kakao';
function LoginModal() {
  const clickKakaoLogin = () => {
    window.location.href = KAKAO_LOGIN_URL + `?client_id=${"fdd05f39c2f7d125cbc44a59911390b7"}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
  };

  const clickGithubLogin = () => {
    window.location.href = GITHUB_LOGIN_URL + `?client_id=${"69c08158b74f219d8041"}`;
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Button, {
      style: {
        backgroundColor: '#FADC3F',
        color: 'black'
      },
      onClick: clickKakaoLogin,
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: kakao,
        alt: "kakao-logo",
        width: 33,
        height: 33
      }), "\uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778\uD558\uAE30"]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Button, {
      style: {
        backgroundColor: 'black',
        color: 'white'
      },
      onClick: clickGithubLogin,
      children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
        src: github,
        alt: "github-logo",
        width: 38,
        height: 37
      }), "Github\uB85C \uB85C\uADF8\uC778\uD558\uAE30"]
    })]
  });
}
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "loginModal__Wrapper",
  componentId: "sc-1tpokle-0"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;height:200px;"]);
const Button = external_styled_components_default().div.withConfig({
  displayName: "loginModal__Button",
  componentId: "sc-1tpokle-1"
})(["width:400px;max-width:80%;height:55px;border-radius:4px;display:flex;justify-content:center;align-items:center;cursor:pointer;"]);

/***/ }),

/***/ 8814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yi": () => (/* binding */ DeviceType),
/* harmony export */   "me": () => (/* binding */ DEVICE_TYPE),
/* harmony export */   "sO": () => (/* binding */ BREAK_POINT)
/* harmony export */ });
let DeviceType;

(function (DeviceType) {
  DeviceType["mobile"] = "MOBILE";
  DeviceType["tablet"] = "TABLET";
  DeviceType["laptop"] = "LAPTOP";
  DeviceType["desktop"] = "DESKTOP";
})(DeviceType || (DeviceType = {}));

const BREAK_POINT = {
  MOBILE: 576,
  TABLET: 768,
  LAPTOP: 992,
  DESKTOP: 1200
};
const DEVICE_TYPE = {
  mobile: DeviceType.mobile,
  tablet: DeviceType.tablet,
  laptop: DeviceType.laptop,
  desktop: DeviceType.desktop
};

/***/ }),

/***/ 2901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useGetDevice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8814);


function useGetDevice() {
  const {
    0: currentDevice,
    1: setCurrentDevice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.mobile */ .me.mobile);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('load', detectWindowSize);
    window.addEventListener('resize', detectWindowSize);

    function detectWindowSize() {
      const innerWidth = document.querySelector('html').offsetWidth;
      if (innerWidth < _constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .BREAK_POINT.MOBILE */ .sO.MOBILE) return setCurrentDevice(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.mobile */ .me.mobile);
      if (innerWidth < _constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .BREAK_POINT.TABLET */ .sO.TABLET) return setCurrentDevice(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.tablet */ .me.tablet);
      if (innerWidth < _constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .BREAK_POINT.LAPTOP */ .sO.LAPTOP) return setCurrentDevice(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.laptop */ .me.laptop);
      if (innerWidth < _constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .BREAK_POINT.DESKTOP */ .sO.DESKTOP) return setCurrentDevice(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.desktop */ .me.desktop);
      return setCurrentDevice(_constants_platform__WEBPACK_IMPORTED_MODULE_1__/* .DEVICE_TYPE.desktop */ .me.desktop);
    }

    detectWindowSize();
    return () => {
      window.removeEventListener('resize', detectWindowSize);
    };
  }, []);
  return currentDevice;
}

/***/ }),

/***/ 9244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ media)
/* harmony export */ });
/* unused harmony export mediaQuery */
/* harmony import */ var _constants_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8814);

const mediaQuery = maxWidth => `
  @media (max-width: ${maxWidth}px)
`;
const media = {
  tablet: mediaQuery(_constants_platform__WEBPACK_IMPORTED_MODULE_0__/* .BREAK_POINT.TABLET */ .sO.TABLET),
  laptop: mediaQuery(_constants_platform__WEBPACK_IMPORTED_MODULE_0__/* .BREAK_POINT.LAPTOP */ .sO.LAPTOP),
  mobile: mediaQuery(_constants_platform__WEBPACK_IMPORTED_MODULE_0__/* .BREAK_POINT.MOBILE */ .sO.MOBILE),
  desktop: mediaQuery(_constants_platform__WEBPACK_IMPORTED_MODULE_0__/* .BREAK_POINT.DESKTOP */ .sO.DESKTOP)
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