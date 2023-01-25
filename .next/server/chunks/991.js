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

/***/ 8052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
    className: "sticky-footer bg-white",
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

/***/ 7181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layout/SearchInput.tsx




function SearchInput() {
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    router.push({
      pathname: '/questions',
      query: {
        query
      }
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    onSubmit: handleSubmit,
    className: "d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "input-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        className: "form-control bg-light border-0 small",
        placeholder: "Search for...",
        "aria-label": "Search",
        "aria-describedby": "basic-addon2",
        onChange: handleChange
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "input-group-append",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "btn btn-primary",
          type: "submit",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-search fa-sm"
          })
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./src/atoms/user.tsx
var user = __webpack_require__(495);
;// CONCATENATED MODULE: ./src/components/Layout/UserDropdown.tsx






function UserDropdown() {
  const userData = (0,external_recoil_.useRecoilValue)(user/* userState */.K);
  const isLoggedIn = !!userData?.nickname;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: isLoggedIn ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "navbar-nav ml-auto",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "nav-item dropdown no-arrow d-sm-none",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "nav-link dropdown-toggle",
            href: "#",
            id: "searchDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fas fa-search fa-fw"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
            "aria-labelledby": "searchDropdown",
            children: /*#__PURE__*/jsx_runtime_.jsx("form", {
              className: "form-inline mr-auto w-100 navbar-search",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "input-group",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  className: "form-control bg-light border-0 small",
                  placeholder: "Search for...",
                  "aria-label": "Search",
                  "aria-describedby": "basic-addon2"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "input-group-append",
                  children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "btn btn-primary",
                    type: "button",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fas fa-search fa-sm"
                    })
                  })
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "nav-item dropdown no-arrow mx-1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "nav-link dropdown-toggle",
            href: "#",
            id: "alertsDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fas fa-bell fa-fw"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
            "aria-labelledby": "alertsDropdown",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "dropdown-header",
              children: "Alerts Center"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-circle bg-primary",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fas fa-file-alt text-white"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 12, 2019"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-weight-bold",
                  children: "A new monthly report is ready to download!"
                })]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-circle bg-success",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fas fa-donate text-white"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 7, 2019"
                }), "$290.29 has been deposited into your account!"]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item d-flex align-items-center",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "icon-circle bg-warning",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fas fa-exclamation-triangle text-white"
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "small text-gray-500",
                  children: "December 2, 2019"
                }), "Spending Alert: We ve noticed unusually high spending for your account."]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "dropdown-item text-center small text-gray-500",
              href: "#",
              children: "Show All Alerts"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "topbar-divider d-none d-sm-block"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
          className: "nav-item dropdown no-arrow",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "nav-link dropdown-toggle",
            href: "#",
            id: "userDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "mr-2 d-none d-lg-inline text-gray-600 small",
              children: userData.nickname
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "img-profile rounded-circle",
              src: "img/undraw_profile.svg"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "dropdown-menu dropdown-menu-right shadow animated--grow-in",
            "aria-labelledby": "userDropdown",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-user fa-sm fa-fw mr-2 text-gray-400"
              }), "Profile"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"
              }), "Settings"]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item",
              href: "#",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-list fa-sm fa-fw mr-2 text-gray-400"
              }), "Activity Log"]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "dropdown-divider"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "dropdown-item",
              href: "#",
              "data-toggle": "modal",
              "data-target": "#logoutModal",
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
              }), "Logout"]
            })]
          })]
        })]
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/login",
      children: "\uB85C\uADF8\uC778"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/Header.tsx




function Header() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar navbar-expand navbar-light bg-white topbar static-top shadow",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      id: "sidebarToggleTop",
      className: "btn btn-link d-md-none rounded-circle mr-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "fa fa-bars"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {}), /*#__PURE__*/jsx_runtime_.jsx(UserDropdown, {})]
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function SideBar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
    className: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
    id: "accordionSidebar",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
        className: "sidebar-brand d-flex align-items-center justify-content-center",
        href: "#",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "sidebar-brand-icon rotate-n-15",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LogoIcon, {
            children: "\uD83D\uDD25"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(LogoTitle, {
          className: "",
          children: ["COGITO ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LogoSup, {
            children: "0.1v"
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("hr", {
      className: "sidebar-divider my-0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ButtonWrapper, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "primary",
        href: "/new",
        children: "+ \uC0C8 \uC9C8\uBB38 \uC0DD\uC131\uD558\uAE30"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "sidebar-heading",
      children: "\uD398\uC774\uC9C0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
      className: "nav-item active",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/questions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "material-symbols-outlined",
            children: "live_help"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "label",
            children: "Questions"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
      className: "nav-item",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          onClick: () => alert('아직 개발중인 페이지입니다!'),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "material-symbols-outlined",
            children: "bookmarks"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "label",
            children: "Tags"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "#",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Tab, {
          className: "nav-link",
          href: "#",
          onClick: () => alert('아직 개발중인 페이지입니다!'),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "fa-fw"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "material-symbols-outlined",
            children: "group"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "label",
            children: "Users"
          })]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "sidebar-heading",
      children: "\uAE30\uD0C0\uAE30\uB2A5"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Tab, {
        className: "nav-link",
        href: "#",
        onClick: () => alert('아직 개발중인 페이지입니다!'),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
          className: "fa-fw"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "material-symbols-outlined",
          children: "add_circle"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: "label",
          children: "\uAE30\uD0C0 \uAE30\uB2A5 (\uBBF8\uC624\uD508)"
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("hr", {
      className: "sidebar-divider d-none d-md-block"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "text-center d-none d-md-inline",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        className: "rounded-circle border-0",
        id: "sidebarToggle"
      })
    })]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SideBar__Wrapper",
  componentId: "sc-ae825e-0"
})(["max-width:370px;width:40%;background-color:beige;padding-left:30px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SideBar__ButtonWrapper",
  componentId: "sc-ae825e-1"
})(["height:116px;display:flex;align-items:center;justify-content:center;& > a{background-color:white;color:#303d62;font-size:0.97rem;font-weight:600;width:180px;height:50px;display:flex;align-items:center;justify-content:center;}"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_2___default().a.withConfig({
  displayName: "SideBar__Tab",
  componentId: "sc-ae825e-2"
})(["display:flex;align-items:center;& > .label{position:relative;bottom:2px;left:5px;}"]);
const LogoIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "SideBar__LogoIcon",
  componentId: "sc-ae825e-3"
})(["font-size:1.8rem;"]);
const LogoTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "SideBar__LogoTitle",
  componentId: "sc-ae825e-4"
})(["margin-left:0.5rem;font-size:1.35rem;font-weight:700;"]);
const LogoSup = styled_components__WEBPACK_IMPORTED_MODULE_2___default().sup.withConfig({
  displayName: "SideBar__LogoSup",
  componentId: "sc-ae825e-5"
})(["font-weight:400;font-size:0.01rem;"]);

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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7181);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__]);
_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Layout({
  children
}) {
  (0,_hooks_useFetchUserData__WEBPACK_IMPORTED_MODULE_0__/* .useFetchUserData */ .l)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      id: "wrapper",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_SideBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        id: "content-wrapper",
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          id: "content",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            children: children
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
      className: "scroll-to-top rounded",
      href: "#page-top",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("i", {
        className: "fas fa-angle-up"
      })
    })]
  });
}
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

/***/ })

};
;