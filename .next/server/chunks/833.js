"use strict";
exports.id = 833;
exports.ids = [833];
exports.modules = {

/***/ 1833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Layout/SideBar.tsx




function SideBar() {
  // <S.NavWrapper>
  //     <Link href="/questions">
  //       <S.NavItem isActive={router.pathname.indexOf('/questions') !== -1}>Questions</S.NavItem>
  //     </Link>
  //     <Link href="/tags">
  //       <S.NavItem isActive={router.pathname.indexOf('/tags') !== -1}>Tags</S.NavItem>
  //     </Link>
  //     <Link href="/users">
  //       <S.NavItem isActive={router.pathname.indexOf('/users') !== -1}>Users</S.NavItem>
  //     </Link>
  //   </S.NavWrapper>
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
    id: "accordionSidebar",
    children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "sidebar-brand d-flex align-items-center justify-content-center",
        href: "#",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "sidebar-brand-icon rotate-n-15",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-laugh-wink"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "sidebar-brand-text mx-3",
          children: ["COGITO ", /*#__PURE__*/jsx_runtime_.jsx("sup", {
            children: "0.1"
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "sidebar-divider my-0"
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "nav-item",
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "nav-link",
          href: "#",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-fw fa-tachometer-alt"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Home"
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sidebar-heading",
      children: "Interface"
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      className: "nav-item active",
      children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/questions",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "nav-link",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Questions"
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "nav-item",
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/tags",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "nav-link",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Tags"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/users",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "nav-link",
          href: "#",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "Users"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "sidebar-divider"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sidebar-heading",
      children: "\uAE30\uD0C0\uAE30\uB2A5"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "nav-item",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: "nav-link",
        href: "#",
        children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "fas fa-fw fa-folder"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\uAE30\uD0C0 \uAE30\uB2A5 (\uBBF8\uC624\uD508)"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        id: "collapsePages",
        className: "collapse show",
        "aria-labelledby": "headingPages",
        "data-parent": "#accordionSidebar",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bg-white py-2 collapse-inner rounded",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "collapse-header",
            children: "Login Screens:"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "collapse-item",
            href: "#",
            children: "\uD398\uC774\uC9C0 1 (\uBBF8\uC624\uD508)"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "collapse-item",
            href: "#",
            children: "\uD398\uC774\uC9C0 2 (\uBBF8\uC624\uD508)"
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "collapse-item",
            href: "#",
            children: "\uD398\uC774\uC9C0 3 (\uBBF8\uC624\uD508)"
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("hr", {
      className: "sidebar-divider d-none d-md-block"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-center d-none d-md-inline",
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "rounded-circle border-0",
        id: "sidebarToggle"
      })
    })]
  });
}
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "SideBar__Wrapper",
  componentId: "sc-ae825e-0"
})(["max-width:370px;width:40%;background-color:beige;padding-left:30px;"]);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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
;// CONCATENATED MODULE: ./src/components/Layout/TopBar.tsx




function TopBar() {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      id: "sidebarToggleTop",
      className: "btn btn-link d-md-none rounded-circle mr-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "fa fa-bars"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(SearchInput, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
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
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "nav-link dropdown-toggle",
          href: "#",
          id: "alertsDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-bell fa-fw"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "badge badge-danger badge-counter",
            children: "3+"
          })]
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
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
        className: "nav-item dropdown no-arrow mx-1",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "nav-link dropdown-toggle",
          href: "#",
          id: "messagesDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-envelope fa-fw"
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "badge badge-danger badge-counter",
            children: "7"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in",
          "aria-labelledby": "messagesDropdown",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
            className: "dropdown-header",
            children: "Message Center"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "dropdown-item d-flex align-items-center",
            href: "#",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-list-image mr-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "rounded-circle",
                src: "img/undraw_profile_1.svg",
                alt: "..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "status-indicator bg-success"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "font-weight-bold",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-truncate",
                children: "Hi there! I am wondering if you can help me with a problem I ve been having."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "small text-gray-500",
                children: "Emily Fowler \xB7 58m"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "dropdown-item d-flex align-items-center",
            href: "#",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-list-image mr-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "rounded-circle",
                src: "img/undraw_profile_2.svg",
                alt: "..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "status-indicator"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-truncate",
                children: "I have the photos that you ordered last month, how would you like them sent to you?"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "small text-gray-500",
                children: "Jae Chun \xB7 1d"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "dropdown-item d-flex align-items-center",
            href: "#",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-list-image mr-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "rounded-circle",
                src: "img/undraw_profile_3.svg",
                alt: "..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "status-indicator bg-warning"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-truncate",
                children: "Last month s report looks great, I am very happy with the progress so far, keep up the good work!"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "small text-gray-500",
                children: "Morgan Alvarez \xB7 2d"
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "dropdown-item d-flex align-items-center",
            href: "#",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "dropdown-list-image mr-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "rounded-circle",
                src: "https://source.unsplash.com/Mv9hjnEUHR4/60x60",
                alt: "..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "status-indicator bg-success"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-truncate",
                children: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren t good..."
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "small text-gray-500",
                children: "Chicken the Dog \xB7 2w"
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "dropdown-item text-center small text-gray-500",
            href: "#",
            children: "Read More Messages"
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
            children: "Douglas McGee"
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
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/Layout/index.tsx




function Layout({
  children
}) {
  // return (
  //   <>
  //     <Header />
  //     <S.Main>
  //       <Nav />
  //       <S.MainWrapper>{children}</S.MainWrapper>
  //       <SideBar />
  //     </S.Main>
  //     <Footer />
  //   </>
  // );
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx(SideBar, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "content-wrapper",
        className: "d-flex flex-column",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          id: "content",
          children: [/*#__PURE__*/jsx_runtime_.jsx(TopBar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: children
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
          className: "sticky-footer bg-white",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "copyright text-center my-auto",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Copyright \xA9 Your Website 2020"
              })
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "scroll-to-top rounded",
      href: "#page-top",
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "fas fa-angle-up"
      })
    })]
  });
}

/***/ })

};
;