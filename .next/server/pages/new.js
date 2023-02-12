"use strict";
(() => {
var exports = {};
exports.id = 971;
exports.ids = [971];
exports.modules = {

/***/ 5180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewPage)
/* harmony export */ });
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3991);
/* harmony import */ var _src_components_templates_NewTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9393);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_NewTemplate__WEBPACK_IMPORTED_MODULE_1__]);
([_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__, _src_components_templates_NewTemplate__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function NewPage() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_src_components_templates_NewTemplate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
}

NewPage.getLayout = function getLayout(page) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z, {
    hasSide: false,
    children: page
  });
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1735:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export app */
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4826);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(451);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3745);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_compat_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const firebaseConfig = {
  apiKey: 'AIzaSyBFIuelg9CP4P2BCsDauLr0HNNWqjJPLoI',
  authDomain: 'cogito-cde5b.firebaseapp.com',
  projectId: 'cogito-cde5b',
  storageBucket: 'cogito-cde5b.appspot.com',
  messagingSenderId: '179904954165',
  appId: '1:179904954165:web:f182a9e0fccf24f708167c',
  measurementId: 'G-KZZNVQ4H2C' // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  //   REACT_APP_FIREBASE_API_KEY= ...
  // REACT_APP_FIREBASE_AUTH_DOMAIN= ...
  // REACT_APP_FIREBASE_PROJECT_ID= ...
  // REACT_APP_FIREBASE_STORAGE_BUCKET= ...
  // REACT_APP_FIREBASE_MESSAGING_SENDER_ID= ...
  // REACT_APP_FIREBASE_APP_ID= ...
  // REACT_APP_FIREBASE_MEASUREMENT_ID= ...

};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(firebaseConfig);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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
  page,
  size
}) => {
  return _index__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstanceForSSR.get */ .W.get(`/posts`, {
    params: {
      query,
      page,
      size
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

/***/ 8991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GuideModal)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function GuideModal() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, {
    children: ["Cogito\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), " \uAC1C\uBC1C\uACFC \uAD00\uB828\uB41C \uBAA8\uB4E0 \uC758\uACAC \uBC0F \uC9C8\uBB38\uC740 \uD658\uC601\uC785\uB2C8\uB2E4. ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), "\uC758\uACAC \uACF5\uC720\uC758 \uBAA9\uC801\uC774 \uC544\uB2CC \uBE44\uBC29\uC131, \uD64D\uBCF4\uC131 \uBAA9\uC801\uC758 \uAE00\uC740 \uC608\uACE0\uC5C6\uC774 \uC0AD\uC81C\uB420 \uC218 \uC788\uC73C\uB2C8 \uC8FC\uC758\uD574\uC8FC\uC138\uC694!", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("br", {}), "\uC790\uC138\uD55C \uC0AC\uD56D\uC740 \uCF54\uAE30\uD1A0 \uBE14\uB85C\uADF8\uB97C \uD655\uC778\uD574\uC8FC\uC138\uC694."]
  });
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "guideModal__Wrapper",
  componentId: "sc-1hf2mhz-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;"]);

/***/ }),

/***/ 9393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewPage)
/* harmony export */ });
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5110);
/* harmony import */ var react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2754);
/* harmony import */ var _Modal_guideModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8991);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3392);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1735);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5637);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9513);
/* harmony import */ var _libs_MDEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1140);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_storage__WEBPACK_IMPORTED_MODULE_7__, _api_firebase__WEBPACK_IMPORTED_MODULE_8__, _api_post__WEBPACK_IMPORTED_MODULE_11__]);
([firebase_storage__WEBPACK_IMPORTED_MODULE_7__, _api_firebase__WEBPACK_IMPORTED_MODULE_8__, _api_post__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















const STORAGE_KEY = 'show-guide-modal';
const MAX_UPLOAD_COUNT = 7;
function NewPage() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: files,
    1: setFiles
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: progressPercent,
    1: setProgressPercent
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const setModalState = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useSetRecoilState)(_atoms_modal__WEBPACK_IMPORTED_MODULE_5__/* .modalState */ .e);

  const onImageChange = e => {
    e.preventDefault();

    if (files.length >= MAX_UPLOAD_COUNT) {
      alert(`파일은 최대 ${MAX_UPLOAD_COUNT}개까지 업로드할 수 있습니다.`);
      return;
    }

    const file = e.target.files;

    if (!file) {
      return;
    } // Firebase storage에 files이란 폴더를 만들고 그 안에 업로드할 이미지의 이름으로 이미지를 저장
    // @TODO: 파일명에 timestamp 추가


    const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_7__.ref)(_api_firebase__WEBPACK_IMPORTED_MODULE_8__/* .storage */ .t, `files/${file[0].name}`);
    const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_7__.uploadBytesResumable)(storageRef, file[0]);
    uploadTask.on('state_changed', snapshot => {
      const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgressPercent(progress);
    }, error => {
      alert('이미지 업로드에 실패했습니다.');
      console.log(error);
    }, () => {
      e.target.value = '';
      (0,firebase_storage__WEBPACK_IMPORTED_MODULE_7__.getDownloadURL)(storageRef).then(downloadURL => {
        setFiles([...files, downloadURL]);
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const hasModalShowed = (0,_utils_storage__WEBPACK_IMPORTED_MODULE_14__/* .getSessionStorageItem */ .St)(STORAGE_KEY);

    if (!hasModalShowed) {
      setModalState({
        isShow: true,
        component: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_Modal_guideModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
        title: 'Guide',
        closeCallBack: () => {},
        config: {
          size: 'lg',
          closeButton: true,
          centered: false
        }
      });
      (0,_utils_storage__WEBPACK_IMPORTED_MODULE_14__/* .setSessionStorageItem */ .D9)(STORAGE_KEY, 'true');
    }
  }, [setModalState]);

  const onClickCancel = () => {
    if (window.confirm('글 작성을 취소하시겠습니까? 작성된 내용은 저장되지 않습니다.')) {
      router.back();
    }
  };

  const requestCreatePost = async () => {
    const result = await (0,_api_post__WEBPACK_IMPORTED_MODULE_11__/* .createPost */ .qb)(title, value ?? '', files, []);

    if (result) {
      // @TODO: 수정버전에서는 뒤로가기
      router.push('/');
    }
  };

  const onClickSubmit = () => {
    requestCreatePost();
  };

  const changeHandler = event => {
    const targetEl = event.target;
    setTitle(targetEl.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(Title, {
      children: "\uC9C8\uBB38 \uAE00 \uC791\uC131\uD558\uAE30"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(TitleInput, {
      type: "text",
      value: title,
      placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694",
      onChange: changeHandler
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_12__/* .MDEditor */ .M, {
      style: {
        width: '100%'
      },
      preview: "edit",
      value: value,
      onChange: setValue,
      previewOptions: {}
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(SubText, {
      children: "\u2B07 \uC544\uB798\uC5D0 \uBBF8\uB9AC\uBCF4\uAE30\uAC00 \uB098\uC635\uB2C8\uB2E4"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(_libs_MDEditor__WEBPACK_IMPORTED_MODULE_12__/* .MarkdownPreview */ .D, {
      style: {
        width: '100%',
        backgroundColor: 'transparent',
        fontSize: '0.95rem',
        color: '#6f7d95',
        lineHeight: '1.4rem'
      },
      source: value
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(UploadWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(SubText, {
        children: `⇪ 이미지 첨부 (최대 ${MAX_UPLOAD_COUNT}개)`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(UploadInput, {
        type: "file",
        accept: "image/*",
        onChange: onImageChange
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_0___default()), {
        now: progressPercent,
        label: `${progressPercent}%`
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(FilesWrapper, {
        children: files.map((file, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(FileWrapper, {
          onClick: () => setFiles(files.filter((_, i) => i !== idx)),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
            src: file,
            alt: "upload",
            width: 120,
            height: 120
          }), "x"]
        }, file))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(ButtonWrapper, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "outline-secondary",
        size: "lg",
        onClick: onClickCancel,
        children: "\uCDE8\uC18C"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "primary",
        size: "lg",
        onClick: onClickSubmit,
        children: "\uC81C\uCD9C\uD558\uAE30"
      })]
    })]
  });
}
const FilesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "NewTemplate__FilesWrapper",
  componentId: "sc-1j5coaq-0"
})(["display:flex;gap:10px;margin-top:1rem;"]);
const FileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "NewTemplate__FileWrapper",
  componentId: "sc-1j5coaq-1"
})(["cursor:pointer;color:transparent;&:hover{color:black;}"]);
const TitleInput = styled_components__WEBPACK_IMPORTED_MODULE_4___default().input.withConfig({
  displayName: "NewTemplate__TitleInput",
  componentId: "sc-1j5coaq-2"
})(["width:100%;height:2rem;padding-left:0.5rem;border:1px solid lightgray;outline:none;font-size:0.9rem;"]);
const UploadInput = styled_components__WEBPACK_IMPORTED_MODULE_4___default().input.withConfig({
  displayName: "NewTemplate__UploadInput",
  componentId: "sc-1j5coaq-3"
})(["font-size:0.95rem;margin-bottom:1rem;cursor:pointer;"]);
const UploadWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "NewTemplate__UploadWrapper",
  componentId: "sc-1j5coaq-4"
})(["width:100%;margin-top:24px;"]);
const SubText = styled_components__WEBPACK_IMPORTED_MODULE_4___default().p.withConfig({
  displayName: "NewTemplate__SubText",
  componentId: "sc-1j5coaq-5"
})(["font-size:0.8rem;color:#517495;text-align:center;margin:20px 0;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default().p.withConfig({
  displayName: "NewTemplate__Title",
  componentId: "sc-1j5coaq-6"
})(["font-size:1.5rem;font-weight:600;text-align:left;width:100%;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "NewTemplate__Wrapper",
  componentId: "sc-1j5coaq-7"
})(["color:#303d62;width:100%;padding:30px;display:flex;flex-direction:column;align-items:center;gap:20px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "NewTemplate__ButtonWrapper",
  componentId: "sc-1j5coaq-8"
})(["display:flex;gap:12px;"]);
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

/***/ 9922:
/***/ ((module) => {

module.exports = require("@uiw/react-markdown-preview");

/***/ }),

/***/ 1887:
/***/ ((module) => {

module.exports = require("@uiw/react-md-editor");

/***/ }),

/***/ 7082:
/***/ ((module) => {

module.exports = require("event-source-polyfill");

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

/***/ 5110:
/***/ ((module) => {

module.exports = require("react-bootstrap/ProgressBar");

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

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 4826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 451:
/***/ ((module) => {

module.exports = import("firebase/compat/storage");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,152,786,641,991], () => (__webpack_exec__(5180)));
module.exports = __webpack_exports__;

})();