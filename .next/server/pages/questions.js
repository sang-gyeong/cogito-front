"use strict";
(() => {
var exports = {};
exports.id = 85;
exports.ids = [85];
exports.modules = {

/***/ 9721:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuestionsPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3991);
/* harmony import */ var _src_components_templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6866);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _src_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5500);
/* harmony import */ var _src_api_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9513);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _src_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_3__, _src_api_post__WEBPACK_IMPORTED_MODULE_4__]);
([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _src_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_3__, _src_api_post__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function QuestionsPage() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_templates_HomeTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
  });
}

QuestionsPage.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    hasSide: true,
    children: page
  });
};

const getServerSideProps = async context => {
  const query = context.query?.query ?? '';
  const page = context.query?.page ? Number(context.query?.page) : 0;
  const size = context.query?.size ? Number(context.query?.size) : 15;
  const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();
  await queryClient.prefetchQuery([_src_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_3__/* .QUERY_KEY */ .l, query, page, size], () => (0,_src_api_post__WEBPACK_IMPORTED_MODULE_4__/* .getPosts */ .Jq)({
    query,
    page,
    size
  }));
  return {
    props: {
      dehydratedState: (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.dehydrate)(queryClient)
    }
  };
};
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

/***/ 4348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ PostListItem)
});

// UNUSED EXPORTS: BottomWrapper, Content, ContentWrapper, CreatedAt, ProfileImage, ProfileWrapper, Status, StatusItem, StatusLabel, StatusWrapper, TagWrapper, Title, Wrapper

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/score.ts
var utils_score = __webpack_require__(3028);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/constants/text.tsx


const highlightIncludedText = (text, value) => {
  const title = text.toLowerCase();
  const searchValue = value.toLowerCase();

  if (searchValue !== '' && title.includes(searchValue)) {
    const matchText = text.split(new RegExp(`(${searchValue})`, 'gi'));
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: matchText.map((text, index) => text.toLowerCase() === searchValue.toLowerCase() ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          fontWeight: 900
        },
        children: text
      }, index) : text)
    });
  }

  return text;
};
// EXTERNAL MODULE: ./src/utils/mediaQuery.ts
var mediaQuery = __webpack_require__(9244);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/img/undraw_profile.svg
var undraw_profile = __webpack_require__(2955);
// EXTERNAL MODULE: ./src/components/Common/Tag.tsx
var Tag = __webpack_require__(1868);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./src/components/PostListItem/index.tsx











function PostListItem({
  post,
  query
}) {
  const {
    postId,
    title,
    content,
    likeCnt,
    tags,
    nickname,
    profileImgUrl,
    score,
    commentCnt,
    createdAt
  } = post;
  const statusList = [{
    label: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiOutlineLike, {}),
    value: likeCnt
  }, {
    label: /*#__PURE__*/jsx_runtime_.jsx(ai_namespaceObject.AiOutlineComment, {}),
    value: commentCnt
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/questions/${postId}`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Title, {
            children: highlightIncludedText(title, query)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: `/questions/${postId}`,
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(Content, {
            children: highlightIncludedText(content, query)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(TagWrapper, {
          children: tags.map((tag, idx) => /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
            tag: tag
          }, idx))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BottomWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileImage, {
            children: [/*#__PURE__*/jsx_runtime_.jsx((image_default()), {
              src: profileImgUrl ?? undraw_profile/* default */.Z,
              alt: "profile-image",
              width: 30,
              height: 30
            }), /*#__PURE__*/jsx_runtime_.jsx(ScoreImage, {
              children: (0,utils_score/* getScoreImage */.h)(score)
            })]
          }), nickname]
        }), "|", /*#__PURE__*/jsx_runtime_.jsx(CreatedAt, {
          children: createdAt
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(StatusWrapper, {
      children: statusList.map((status, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StatusItem, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Status, {
          children: status.value
        }), status.label]
      }, idx))
    })]
  });
}
const ScoreImage = external_styled_components_default().span.withConfig({
  displayName: "PostListItem__ScoreImage",
  componentId: "sc-1e1x6a4-0"
})(["position:absolute;right:-8px;bottom:-3px;"]);
const Status = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__Status",
  componentId: "sc-1e1x6a4-1"
})(["border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;border:1px solid #bcbfc6;font-weight:300;", "{width:44px;height:44px;}"], mediaQuery/* media.tablet */.B.tablet);
const StatusLabel = external_styled_components_default().span.withConfig({
  displayName: "PostListItem__StatusLabel",
  componentId: "sc-1e1x6a4-2"
})(["font-size:0.75rem;", "{}"], mediaQuery/* media.tablet */.B.tablet);
const StatusItem = external_styled_components_default().span.withConfig({
  displayName: "PostListItem__StatusItem",
  componentId: "sc-1e1x6a4-3"
})(["text-align:center;"]);
const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__Wrapper",
  componentId: "sc-1e1x6a4-4"
})(["width:100%;border-bottom:1px solid lightgray;padding:20px 0 18px 30px;display:flex;min-height:190px;", "{padding:20px 0 16px 24px;}"], mediaQuery/* media.mobile */.B.mobile);
const ContentWrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__ContentWrapper",
  componentId: "sc-1e1x6a4-5"
})(["display:flex;flex-direction:column;width:100%;font-size:0.9rem;color:#6f7d95;justify-content:space-between;padding-right:8px;", "{padding-right:12px;}"], mediaQuery/* media.tablet */.B.tablet);
const StatusWrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__StatusWrapper",
  componentId: "sc-1e1x6a4-6"
})(["display:flex;gap:24px;align-items:center;padding:0 16px;", "{flex-direction:column;gap:16px;}"], mediaQuery/* media.tablet */.B.tablet);
const Title = external_styled_components_default().a.withConfig({
  displayName: "PostListItem__Title",
  componentId: "sc-1e1x6a4-7"
})(["font-weight:600;font-size:1.25rem;color:#303d62;"]);
const TagWrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__TagWrapper",
  componentId: "sc-1e1x6a4-8"
})(["margin:18px 0;"]);
const Content = external_styled_components_default().a.withConfig({
  displayName: "PostListItem__Content",
  componentId: "sc-1e1x6a4-9"
})(["font-size:0.9rem;color:#6f7d95;line-height:1.4rem;min-height:1.6rem;max-height:2.8rem;text-overflow:ellipsis;word-wrap:break-word;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-bottom:12px;margin-top:6px;"]);
const BottomWrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__BottomWrapper",
  componentId: "sc-1e1x6a4-10"
})(["display:flex;gap:10px;align-items:center;justify-content:flex-end;font-size:0.85rem;flex-wrap:wrap;"]);
const CreatedAt = external_styled_components_default().span.withConfig({
  displayName: "PostListItem__CreatedAt",
  componentId: "sc-1e1x6a4-11"
})([""]);
const ProfileWrapper = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__ProfileWrapper",
  componentId: "sc-1e1x6a4-12"
})(["display:flex;gap:10px;align-items:center;justify-content:flex-end;white-space:nowrap;"]);
const ProfileImage = external_styled_components_default().div.withConfig({
  displayName: "PostListItem__ProfileImage",
  componentId: "sc-1e1x6a4-13"
})(["border-radius:50%;width:27px;height:27px;position:relative;margin-right:4px;"]);

/***/ }),

/***/ 6866:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomeTemplate)
/* harmony export */ });
/* harmony import */ var _queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5500);
/* harmony import */ var _PostListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4348);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_0__]);
_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const CONTENTS_COUNT_PER_PAGE = 1;
const MAX_COUNT_PER_PAGINATION = 15;
function HomeTemplate() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.query?.query ?? '');
  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.query?.page ? Number(router.query?.page) : 0);
  const {
    0: size,
    1: setSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(router.query?.size ? Number(router.query?.size) : MAX_COUNT_PER_PAGINATION);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const _query = router.query?.query ?? '';

    const _page = router.query?.page ? Number(router.query?.page) : 0;

    const _size = router.query?.size ? Number(router.query?.size) : MAX_COUNT_PER_PAGINATION;

    setQuery(_query);
    setPage(_page);
    setSize(_size);
  }, [router.query]);
  const {
    data,
    isLoading
  } = (0,_queries_usePostsQuery__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({
    query,
    page,
    size
  });
  const {
    0: radioValue,
    1: setRadioValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('1');
  const radios = [{
    name: '최신순',
    value: '1'
  }];

  if (isLoading || !data) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: "Loading..."
    });
  }

  const {
    posts,
    total
  } = data;
  const max = Math.floor(total / CONTENTS_COUNT_PER_PAGE);
  const pagination = Array.from({
    length: max
  }, (_, i) => i + 1);
  console.log(pagination);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Row, {
      children: "All Questions"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Filter, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(UL, {
        children: radios.map(radio => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(FilterButton, {
            type: "radio",
            name: "tab",
            value: radio.value,
            id: 'tabmenu' + radio.value,
            checked: radio.value === radioValue,
            onChange: e => setRadioValue(e.target.value)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(FilterLabel, {
            htmlFor: 'tabmenu' + radio.value,
            children: radio.name
          })]
        }, radio.value))
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(BoardListWrapper, {
        children: posts && posts.length ? posts.map((post, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_PostListItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
          post: post,
          query: query
        }, idx)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(EmptyResult, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Icon, {
            children: "\uD83E\uDDD0"
          }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Pagination, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: "col-sm-12 col-md-7",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: "dataTables_paginate paging_simple_numbers",
            id: "dataTable_paginate",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
              className: "pagination",
              children: [page !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                className: "paginate_button page-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                  "aria-controls": "dataTable",
                  className: "page-link",
                  onClick: () => setPage(page - 1),
                  children: "\u25C0"
                })
              }), pagination.map((label, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                className: `paginate_button page-item ${page === index ? 'active' : ''}`,
                onClick: () => {
                  router.push({
                    pathname: '/questions',
                    query: _objectSpread(_objectSpread({}, router.query), {}, {
                      page: index
                    })
                  });
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                  "aria-controls": "dataTable",
                  "data-dt-idx": index,
                  tabIndex: index,
                  className: "page-link",
                  children: label
                })
              }, label)), page !== max - 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                className: "paginate_button page-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                  "aria-controls": "dataTable",
                  className: "page-link",
                  onClick: () => setPage(page + 1),
                  children: "\u25B6"
                })
              })]
            })
          })
        })
      })]
    })]
  });
}
const Pagination = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__Pagination",
  componentId: "sc-1gz0pha-0"
})(["width:fit-content;margin:0 auto;margin-top:40px;"]);
const EmptyResult = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__EmptyResult",
  componentId: "sc-1gz0pha-1"
})(["margin:40px auto;width:100%;text-align:center;"]);
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__Icon",
  componentId: "sc-1gz0pha-2"
})(["font-size:5rem;"]);
const FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default().input.withConfig({
  displayName: "HomeTemplate__FilterButton",
  componentId: "sc-1gz0pha-3"
})([""]);
const FilterLabel = styled_components__WEBPACK_IMPORTED_MODULE_2___default().label.withConfig({
  displayName: "HomeTemplate__FilterLabel",
  componentId: "sc-1gz0pha-4"
})([""]);
const UL = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
  displayName: "HomeTemplate__UL",
  componentId: "sc-1gz0pha-5"
})(["display:flex;align-items:center;padding:0;margin:0;list-style:none;"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__Row",
  componentId: "sc-1gz0pha-6"
})(["width:100%;min-height:69px;border-bottom:1px solid rgba(0,0,0,0.175);display:flex;align-items:center;color:black;font-size:1.4rem;padding:0 16px;"]);
const Filter = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(Row).withConfig({
  displayName: "HomeTemplate__Filter",
  componentId: "sc-1gz0pha-7"
})(["min-height:44px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__Wrapper",
  componentId: "sc-1gz0pha-8"
})(["display:flex;flex-direction:column;width:100%;min-width:100%;"]);
const BoardListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "HomeTemplate__BoardListWrapper",
  componentId: "sc-1gz0pha-9"
})(["width:100%;display:flex;flex-direction:column;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5500:
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


const QUERY_KEY = 'usePostsQuery';

const usePostsQuery = ({
  query,
  page,
  size
}) => {
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([QUERY_KEY, query, page, size], () => (0,_api_post__WEBPACK_IMPORTED_MODULE_1__/* .getPosts */ .Jq)({
    query,
    page,
    size
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostsQuery);
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

/***/ 5429:
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,786,641,991,186], () => (__webpack_exec__(9721)));
module.exports = __webpack_exports__;

})();