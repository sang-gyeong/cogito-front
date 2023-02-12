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
    hasSide: true,
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YF": () => (/* binding */ deleteComment),
/* harmony export */   "Yr": () => (/* binding */ createComment),
/* harmony export */   "x4": () => (/* binding */ dislikeComment),
/* harmony export */   "xG": () => (/* binding */ likeComment)
/* harmony export */ });
/* unused harmony exports modifyComment, selectComment */
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_0__]);
_index__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createComment = ({
  postId,
  parentId,
  content
}) => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.post */ .D.post(`/comments`, {
  postId,
  parentId,
  content
}).then(response => response?.data);
const modifyComment = (id, content) => axiosInstanceForCSR.patch(`/comments/${id}`, content);
const deleteComment = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR["delete"] */ .D["delete"](`/comments/${id}/status`);
const likeComment = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D.patch(`/comments/${id}/like`);
const dislikeComment = id => _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForCSR.patch */ .D.patch(`/comments/${id}/dislike`);
const selectComment = id => axiosInstanceForCSR.patch(`/comments/${id}/selection`);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AutoHeightImage)
/* harmony export */ });
/* unused harmony export AutoHeightImageWrapper */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function AutoHeightImage(_ref) {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AutoHeightImageWrapper, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), _objectSpread({
      layout: "fill",
      className: "autoImage"
    }, props))
  });
}
const AutoHeightImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "AutoHeightImage__AutoHeightImageWrapper",
  componentId: "sc-g76m3p-0"
})(["width:100%;& > span{position:unset !important;& .autoImage{object-fit:contain !important;position:relative !important;height:auto !important;}}"]);

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

/***/ 6092:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoardComments)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2955);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_score__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3028);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2754);
/* harmony import */ var _mutations_useAddCommentMutation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9401);
/* harmony import */ var _mutations_useDeleteCommentMutation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3498);
/* harmony import */ var _mutations_useLikeCommentMutation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6563);
/* harmony import */ var _mutations_useDislikeCommentMutation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7231);
/* harmony import */ var _libs_MDEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1140);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mutations_useAddCommentMutation__WEBPACK_IMPORTED_MODULE_7__, _mutations_useDeleteCommentMutation__WEBPACK_IMPORTED_MODULE_8__, _mutations_useLikeCommentMutation__WEBPACK_IMPORTED_MODULE_9__, _mutations_useDislikeCommentMutation__WEBPACK_IMPORTED_MODULE_10__]);
([_mutations_useAddCommentMutation__WEBPACK_IMPORTED_MODULE_7__, _mutations_useDeleteCommentMutation__WEBPACK_IMPORTED_MODULE_8__, _mutations_useLikeCommentMutation__WEBPACK_IMPORTED_MODULE_9__, _mutations_useDislikeCommentMutation__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const contentStyle = {
  fontSize: '0.95rem',
  color: '#6f7d95',
  lineHeight: '1.4rem',
  padding: '0.5rem'
};
function BoardComments({
  isMe,
  postId,
  commentResponses
}) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    mutate: mutateCreateComment
  } = (0,_mutations_useAddCommentMutation__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(postId);
  const {
    mutate: mutateDeleteComment
  } = (0,_mutations_useDeleteCommentMutation__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(postId);
  const {
    mutate: mutateLikeComment
  } = (0,_mutations_useLikeCommentMutation__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(postId);
  const {
    mutate: mutateDislikeComment
  } = (0,_mutations_useDislikeCommentMutation__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(postId);
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_6__/* .modalState */ .e);

  const handleModal = () => {
    setModalState({
      isShow: true,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
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
  };

  const onClickReport = () => {
    if (window.confirm('신고하시겠습니까?')) {// 신고하기
    }
  };

  const commentScoreHandler = (isLike, comment) => {
    const {
      isMe,
      commentId
    } = comment;

    if (isMe) {
      window.alert(`자기 자신의 댓글에는 ${isLike ? '추천' : '비추천'}할 수 없습니다`);
      return;
    }

    isLike ? mutateLikeComment({
      commentId
    }) : mutateDislikeComment({
      commentId
    });
  };

  const onClickDeleteComment = commentId => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      mutateDeleteComment({
        commentId
      });
    }
  };

  const onClickCreateComment = () => {
    if (!value) {
      alert('댓글을 입력해주세요.');
      return;
    }

    mutateCreateComment({
      postId,
      parentId: null,
      content: value
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(CommentWrapper, {
    children: [commentResponses.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(SubTitle, {
        children: ["\uD83D\uDD25 ", commentResponses.length, "\uAC1C\uC758 \uB2F5\uBCC0\uC774 \uB2EC\uB838\uC2B5\uB2C8\uB2E4"]
      }), commentResponses.map((comment, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Comment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(ScoreWrapper, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => commentScoreHandler(true, comment),
            children: "\u25B2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
            children: [" ", comment.likeCnt, " "]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => commentScoreHandler(false, comment),
            children: "\u25BC"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(CommentContentWrapper, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownPreview */ .D, {
            source: comment.content,
            style: _objectSpread({
              backgroundColor: 'transparent',
              marginBottom: '2rem'
            }, contentStyle)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CommentButtonWrapper, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ButtonWrapper, {
              children: comment.isMe ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Button, {
                  children: "\uC218\uC815"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Button, {
                  onClick: () => onClickDeleteComment(comment.commentId),
                  children: "\uC0AD\uC81C"
                })]
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Button, {
                onClick: onClickReport,
                children: "\uC2E0\uACE0"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(BottomWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(ProfileWrapper, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(ProfileImage, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                  src: comment.profileImgUrl ?? public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                  alt: "profile-image",
                  width: 30,
                  height: 30
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ScoreImage, {
                  children: (0,_utils_score__WEBPACK_IMPORTED_MODULE_13__/* .getScoreImage */ .h)(comment.score)
                })]
              }), comment.nickname]
            }), "|", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(CreatedAt, {
              children: comment.createdAt
            })]
          })]
        })]
      }, idx))]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(EmptyView, {
      children: "\uC791\uC131\uB41C \uB313\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
    }), !isMe && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      style: {
        marginTop: '32px'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(SubTitle, {
        children: "\uD83D\uDD25 \uB098\uC758 \uB2F5\uBCC0"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_11__/* .MDEditor */ .M, {
        style: {
          width: '100%',
          marginTop: '20px'
        },
        preview: "edit",
        value: value,
        onChange: setValue,
        previewOptions: {}
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownPreview */ .D, {
        source: value,
        style: {
          backgroundColor: 'transparent',
          fontSize: '0.98rem',
          marginBottom: '2rem'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
        style: {
          textAlign: 'right'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
          variant: "primary",
          onClick: onClickCreateComment,
          children: "\uB2F5\uBCC0 \uC81C\uCD9C\uD558\uAE30"
        })
      })]
    })]
  });
}
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
  displayName: "BoardComments__Button",
  componentId: "sc-nt7b02-0"
})(["border:none;background-color:transparent;font-size:0.8rem;color:black;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__ButtonWrapper",
  componentId: "sc-nt7b02-1"
})(["display:flex;gap:4px;text-align:right;"]);
const EmptyView = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__EmptyView",
  componentId: "sc-nt7b02-2"
})(["border:1px solid lightslategray;width:100%;color:lightslategray;border-radius:10px;text-align:center;padding:20px;font-size:0.85rem;"]);
const CommentButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__CommentButtonWrapper",
  componentId: "sc-nt7b02-3"
})(["width:100%;text-align:right;display:flex;justify-content:flex-end;"]);
const CommentContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__CommentContentWrapper",
  componentId: "sc-nt7b02-4"
})(["display:flex;flex-direction:column;width:100%;border-bottom:1px solid lightgray;padding:0.5rem 0 1rem 0;"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h5.withConfig({
  displayName: "BoardComments__SubTitle",
  componentId: "sc-nt7b02-5"
})(["font-weight:600;font-size:1.3rem;"]);
const Comment = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__Comment",
  componentId: "sc-nt7b02-6"
})(["display:flex;"]);
const CommentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__CommentWrapper",
  componentId: "sc-nt7b02-7"
})(["display:flex;flex-direction:column;gap:20px;margin-top:64px;padding-top:30px;border-top:1px solid lightgray;"]);
const ScoreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__ScoreWrapper",
  componentId: "sc-nt7b02-8"
})(["justify-content:flex-start;align-items:center;width:65px;font-size:1.3rem;height:100%;font-weight:600;display:flex;flex-direction:column;& > button{border:none;background-color:transparent;color:lightslategray;}"]);
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__ProfileImage",
  componentId: "sc-nt7b02-9"
})(["border-radius:50%;width:27px;height:27px;box-shadow:px 0px 1px gray;position:relative;margin-right:8px;"]);
const ScoreImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "BoardComments__ScoreImage",
  componentId: "sc-nt7b02-10"
})(["position:absolute;right:-8px;bottom:-3px;"]);
const ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__ProfileWrapper",
  componentId: "sc-nt7b02-11"
})(["display:flex;align-items:center;justify-content:flex-end;gap:4px;"]);
const BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "BoardComments__BottomWrapper",
  componentId: "sc-nt7b02-12"
})(["display:flex;gap:10px;align-items:center;justify-content:flex-end;font-size:0.83rem;"]);
const CreatedAt = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "BoardComments__CreatedAt",
  componentId: "sc-nt7b02-13"
})([""]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BoardTemplate)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2955);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9513);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2754);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2380);
/* harmony import */ var _utils_score__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3028);
/* harmony import */ var _Common_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1868);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Common_AutoHeightImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1183);
/* harmony import */ var _BoardComments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6092);
/* harmony import */ var _libs_MDEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1140);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_post__WEBPACK_IMPORTED_MODULE_3__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__, _BoardComments__WEBPACK_IMPORTED_MODULE_9__]);
([_api_post__WEBPACK_IMPORTED_MODULE_3__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__, _BoardComments__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const contentStyle = {
  fontSize: '0.95rem',
  color: '#6f7d95',
  lineHeight: '1.4rem',
  padding: '0.5rem'
};
function BoardTemplate({
  id
}) {
  const {
    data,
    refetch
  } = (0,_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id);
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_4__/* .modalState */ .e);

  const handleModal = () => {
    setModalState({
      isShow: true,
      component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
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
  };

  const onClickReport = () => {
    if (window.confirm('신고하시겠습니까?')) {// 신고하기
    }
  };

  const clickHandler = async isLike => {
    if (isMe) {
      window.alert(`자기 자신의 글에는 ${isLike ? '추천' : '비추천'}할 수 없습니다`);
      return;
    }

    isLike ? await (0,_api_post__WEBPACK_IMPORTED_MODULE_3__/* .likePost */ .n9)(id) : await (0,_api_post__WEBPACK_IMPORTED_MODULE_3__/* .dislikePost */ .Bh)(id);
    refetch();
  };

  if (!data) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
      children: "Loading"
    });
  }

  const {
    commentResponses,
    content,
    createdAt,
    files,
    likeCnt,
    isMe,
    nickname,
    postId,
    profileImgUrl,
    score,
    tags,
    title
  } = data;

  const onClickModifyPost = () => {};

  const onClickDeletePost = async () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      await (0,_api_post__WEBPACK_IMPORTED_MODULE_3__/* .deletePostById */ .tz)(postId);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Title, {
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(SubTitleArea, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(SubText, {
          children: createdAt ?? '2023-01-26 03:22:49'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ButtonWrapper, {
          children: isMe ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Button, {
              onClick: onClickModifyPost,
              children: "\uC218\uC815"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Button, {
              onClick: onClickDeletePost,
              children: "\uC0AD\uC81C"
            })]
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Button, {
            onClick: onClickReport,
            children: "\uC2E0\uACE0"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(MiddleWrapper, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ScoreWrapper, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
          onClick: () => clickHandler(true),
          children: "\u25B2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
          children: [" ", likeCnt, " "]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("button", {
          onClick: () => clickHandler(false),
          children: "\u25BC"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ContentWrapper, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_10__/* .MarkdownPreview */ .D, {
          source: content,
          style: _objectSpread({
            backgroundColor: 'transparent',
            marginBottom: '2rem'
          }, contentStyle)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(FilesWrapper, {
          children: files.map(file => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_AutoHeightImage__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            src: file,
            alt: "upload-img",
            placeholder: "blur",
            blurDataURL: file
          }, file))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(TagWrapper, {
          children: tags.map((tag, idx) =>
          /*#__PURE__*/
          // @TODO: tagId
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_Common_Tag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            tag: tag
          }, idx))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(BottomWrapper, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ProfileWrapper, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ProfileImage, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                src: profileImgUrl ?? public_img_undraw_profile_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                alt: "profile-image",
                width: 30,
                height: 30
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ScoreImage, {
                children: (0,_utils_score__WEBPACK_IMPORTED_MODULE_12__/* .getScoreImage */ .h)(score)
              })]
            }), nickname]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_BoardComments__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      isMe: isMe,
      postId: postId,
      commentResponses: commentResponses
    })]
  });
}
const FilesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__FilesWrapper",
  componentId: "sc-pc1m6o-0"
})(["display:flex;flex-direction:column;gap:12px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
  displayName: "BoardTemplate__Button",
  componentId: "sc-pc1m6o-1"
})(["border:none;background-color:transparent;font-size:0.8rem;color:black;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__ButtonWrapper",
  componentId: "sc-pc1m6o-2"
})(["display:flex;gap:4px;text-align:right;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__Wrapper",
  componentId: "sc-pc1m6o-3"
})(["display:flex;flex-direction:column;padding:30px;color:#303d62;width:100%;height:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
  displayName: "BoardTemplate__Title",
  componentId: "sc-pc1m6o-4"
})(["font-size:1.8rem;font-weight:600;"]);
const SubTitleArea = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__SubTitleArea",
  componentId: "sc-pc1m6o-5"
})(["display:flex;width:100%;border-bottom:1px solid lightgray;padding-bottom:0.5rem;justify-content:space-between;"]);
const SubText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "BoardTemplate__SubText",
  componentId: "sc-pc1m6o-6"
})([""]);
const MiddleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__MiddleWrapper",
  componentId: "sc-pc1m6o-7"
})(["display:flex;margin-top:12px;"]);
const ScoreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__ScoreWrapper",
  componentId: "sc-pc1m6o-8"
})(["justify-content:flex-start;align-items:center;width:65px;font-size:1.3rem;height:100%;font-weight:600;display:flex;flex-direction:column;& > button{border:none;background-color:transparent;color:lightslategray;}"]);
const TagWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__TagWrapper",
  componentId: "sc-pc1m6o-9"
})(["display:flex;gap:4px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__ContentWrapper",
  componentId: "sc-pc1m6o-10"
})(["width:100%;display:flex;gap:12px;flex-direction:column;height:100%;"]);
const ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__ProfileImage",
  componentId: "sc-pc1m6o-11"
})(["border-radius:50%;width:27px;height:27px;box-shadow:px 0px 1px gray;position:relative;margin-right:8px;"]);
const ScoreImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "BoardTemplate__ScoreImage",
  componentId: "sc-pc1m6o-12"
})(["position:absolute;right:-8px;bottom:-3px;"]);
const ProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__ProfileWrapper",
  componentId: "sc-pc1m6o-13"
})(["display:flex;align-items:center;justify-content:flex-end;gap:4px;"]);
const BottomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "BoardTemplate__BottomWrapper",
  componentId: "sc-pc1m6o-14"
})(["display:flex;gap:10px;align-items:center;justify-content:flex-end;font-size:0.8rem;"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ MDEditor),
  "D": () => (/* binding */ MarkdownPreview)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "react-loading-skeleton"
const external_react_loading_skeleton_namespaceObject = require("react-loading-skeleton");
var external_react_loading_skeleton_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_skeleton_namespaceObject);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/libs/MDEditor.tsx




const MDEditor = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 1887, 23)), {
  ssr: false,
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
      height: 100
    })
  }),
  loadableGenerated: {
    modules: ["../src/libs/MDEditor.tsx -> " + '@uiw/react-md-editor']
  }
});
const MarkdownPreview = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 9922, 23)), {
  ssr: false,
  loading: () => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_loading_skeleton_default()), {
      count: 4
    })
  }),
  loadableGenerated: {
    modules: ["../src/libs/MDEditor.tsx -> " + '@uiw/react-markdown-preview']
  }
});

/***/ }),

/***/ 9401:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useAddTodoMutation)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useAddTodoMutation(postId) {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(async ({
    postId,
    parentId,
    content
  }) => await (0,_api_comment__WEBPACK_IMPORTED_MODULE_1__/* .createComment */ .Yr)({
    postId,
    parentId,
    content
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY */ .l, {
          id: postId
        }]
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3498:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDeleteCommentMutation)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useDeleteCommentMutation(postId) {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
    mutationFn: async ({
      commentId
    }) => await (0,_api_comment__WEBPACK_IMPORTED_MODULE_1__/* .deleteComment */ .YF)(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY */ .l, {
          id: postId
        }]
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7231:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useDislikeCommentMutation)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useDislikeCommentMutation(postId) {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
    mutationFn: async ({
      commentId
    }) => await (0,_api_comment__WEBPACK_IMPORTED_MODULE_1__/* .dislikeComment */ .x4)(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY */ .l, {
          id: postId
        }]
      });
    }
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6563:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLikeCommentMutation)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5616);
/* harmony import */ var _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2380);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _api_comment__WEBPACK_IMPORTED_MODULE_1__, _queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function useLikeCommentMutation(postId) {
  const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQueryClient)();
  return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)({
    mutationFn: async ({
      commentId
    }) => await (0,_api_comment__WEBPACK_IMPORTED_MODULE_1__/* .likeComment */ .xG)(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [_queries_usePostQuery__WEBPACK_IMPORTED_MODULE_2__/* .QUERY_KEY */ .l, {
          id: postId
        }]
      });
    }
  });
}
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

/***/ 1887:
/***/ ((module) => {

module.exports = require("@uiw/react-md-editor");

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

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,61,152,786,641,991,186], () => (__webpack_exec__(8942)));
module.exports = __webpack_exports__;

})();