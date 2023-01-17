(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{61386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof Promise?o.loader=function(){return e}:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=r({},o,e)),(o=r({},o,t)).suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=r({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,a(n,o);delete o.ssr}return n(o)},t.noSSR=a;var r=n(54363).Z,o=n(4858).Z,i=(o(n(82684)),o(n(41800)));function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(4858).Z)(n(82684)).default.createContext(null);t.LoadableContext=r},41800:function(e,t,n){"use strict";var r=n(71539),o=n(66745);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(54363).Z,l=(0,n(4858).Z)(n(82684)),u=n(88124),d=n(82684).useSyncExternalStore,s=[],c=[],p=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var m=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var r=null;function o(){if(!r){var t=new m(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!p){var s=n.webpack?n.webpack():n.modules;s&&c.push(function(e){var t,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}(s);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(a){n.e(a)}finally{n.f()}})}function f(){o();var e=l.default.useContext(u.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(function(t){e(t)})}var h=n.suspense?function(e,t){return f(),l.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){f();var o=d(r.subscribe,r.getCurrentValue,r.getCurrentValue);return l.default.useImperativeHandle(t,function(){return{retry:r.retry}},[]),l.default.useMemo(function(){var t;return o.loading||o.error?l.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?l.default.createElement((t=o.loaded)&&t.__esModule?t.default:t,e):null},[e,o])};return h.preload=function(){return o()},h.displayName="LoadableComponent",l.default.forwardRef(h)}(f,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return _(e,t)})}h.preloadAll=function(){return new Promise(function(e,t){_(s).then(e,t)})},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return p=!0,t()};_(c,e).then(n,n)})},window.__NEXT_PRELOADREADY=h.preloadReady,t.default=h},51774:function(e,t,n){e.exports=n(61386)},82808:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return A},default:function(){return S}});var r=n(34376),o=n(48503),i=n(51774),a=n.n(i),l=n(20185),u=n(27439),d=n(10344),s=n(9518),c=n(91699),p=n(63391),f=n(62564),m=n(28598);function h(e){var t,n=e.comment;return(0,m.jsxs)(g,{children:[(0,m.jsxs)(_,{children:[(0,m.jsx)(C,{children:"up"}),(0,m.jsx)(y,{children:n.score}),(0,m.jsx)(C,{children:"down"})]}),(0,m.jsx)(b,{children:n.content}),(0,m.jsxs)(x,{children:[(0,m.jsx)(v,{alt:"profileImg",src:n.profileImgUrl}),(0,m.jsx)("span",{children:n.nickname}),(0,m.jsx)(w,{children:(t=n.createdAt,t.replace(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/,"$1-$2-$3 $4:$5:$6"))})]})]})}var _=s.ZP.div.withConfig({displayName:"CommentItem__LikesWrapper",componentId:"sc-1chqndm-0"})(["padding:8px 12px;display:flex;flex-direction:column;"]),y=s.ZP.span.withConfig({displayName:"CommentItem__Likes",componentId:"sc-1chqndm-1"})(["font-weight:bold;font-size:1.9rem;"]),g=s.ZP.div.withConfig({displayName:"CommentItem__Wrapper",componentId:"sc-1chqndm-2"})(["display:flex;justify-content:space-between;border-bottom:1px solid lightgray;padding:12px 0;"]),v=s.ZP.img.withConfig({displayName:"CommentItem__Image",componentId:"sc-1chqndm-3"})(["width:30px;height:30px;border-radius:50%;"]),b=s.ZP.div.withConfig({displayName:"CommentItem__CommentWrapper",componentId:"sc-1chqndm-4"})(["width:60%;"]),x=s.ZP.div.withConfig({displayName:"CommentItem__ProfileWrapper",componentId:"sc-1chqndm-5"})(["width:40%;min-width:200px;display:flex;align-items:center;gap:5px;justify-content:flex-end;"]),w=s.ZP.p.withConfig({displayName:"CommentItem__Date",componentId:"sc-1chqndm-6"})(["color:gray;font-size:1.3rem;"]),C=s.ZP.button.withConfig({displayName:"CommentItem__Button",componentId:"sc-1chqndm-7"})(["background-color:#f2f2f2;border:1px solid gray;"]),j=a()(function(){return Promise.all([n.e(522),n.e(621)]).then(n.bind(n,82621))},{ssr:!1,loadableGenerated:{webpack:function(){return[82621]}}});function I(e){var t,n=(t=e.id,(0,p.a)(["getPostById",{id:t}],function(){return(0,f.u_)(t)})).data,r=(0,d.Zl)(c.b),o=(0,d.Zl)(c.e),i=function(){o({component:(0,m.jsx)("div",{children:"신고사유 선택하기"}),title:"신고하기",closeCallBack:function(){return console.log("tada!!")},config:{size:"lg",closeButton:!0,centered:!1}}),r(!0)};if(!n)return(0,m.jsx)(m.Fragment,{children:"Loading"});var a=n.title,s=n.content,_=n.tags,y=(n.files,n.score,n.createdAt),g=n.commentResponses,v=n.profileImgUrl,b=n.nickname;return(0,m.jsxs)(P,{children:[(0,m.jsx)(l.Z,{variant:"primary",href:"/new",style:{position:"absolute",right:0,border:"1px soild red"},children:"+ 새 질문 생성하기"}),(0,m.jsx)(Z,{children:a}),(0,m.jsx)(O,{children:y}),(0,m.jsx)(k,{onClick:i,children:"신고하기"}),(0,m.jsx)(B,{children:(0,m.jsx)(j,{source:s})}),(0,m.jsx)(N,{children:_.map(function(e,t){return(0,m.jsx)(u.Z,{bg:"secondary",children:e},t)})}),(0,m.jsxs)(E,{children:[(0,m.jsx)(q,{alt:"profileImg",src:v}),b]}),(0,m.jsx)(T,{children:g.map(function(e,t){return(0,m.jsx)(h,{comment:e},t)})})]})}var P=s.ZP.div.withConfig({displayName:"BoardTemplate__Wrapper",componentId:"sc-pc1m6o-0"})(["padding:30px;position:relative;"]),Z=s.ZP.p.withConfig({displayName:"BoardTemplate__Title",componentId:"sc-pc1m6o-1"})(["font-size:3rem;font-weight:bold;"]),k=s.ZP.button.withConfig({displayName:"BoardTemplate__SCButton",componentId:"sc-pc1m6o-2"})(["color:red;"]);s.ZP.p.withConfig({displayName:"BoardTemplate__Content",componentId:"sc-pc1m6o-3"})(["font-size:1.5rem;"]);var N=s.ZP.div.withConfig({displayName:"BoardTemplate__TagWrapper",componentId:"sc-pc1m6o-4"})(["display:flex;gap:4px;"]),T=s.ZP.div.withConfig({displayName:"BoardTemplate__CommentListWrapper",componentId:"sc-pc1m6o-5"})(["margin-top:20px;border-top:1px solid lightgray;display:flex;flex-direction:column;gap:10px;"]),O=s.ZP.p.withConfig({displayName:"BoardTemplate__Date",componentId:"sc-pc1m6o-6"})(["color:gray;font-size:1.5rem;"]),B=s.ZP.div.withConfig({displayName:"BoardTemplate__ContentWrapper",componentId:"sc-pc1m6o-7"})(["margin:20px 0;"]),E=s.ZP.div.withConfig({displayName:"BoardTemplate__AuthorWrapper",componentId:"sc-pc1m6o-8"})(["width:300px;height:80px;background-color:beige;"]),q=s.ZP.img.withConfig({displayName:"BoardTemplate__Image",componentId:"sc-pc1m6o-9"})(["border-radius:50%;width:50px;height:50px;"]),A=!0;function S(){var e=Number((0,r.useRouter)().query.id);return(0,m.jsx)(I,{id:e})}S.getLayout=function(e){return(0,m.jsx)(o.Z,{children:e})}},62564:function(e,t,n){"use strict";n.d(t,{Jq:function(){return o},YO:function(){return l},qb:function(){return a},u_:function(){return i}});var r=n(73380),o=function(e){var t=e.query,n=e.page;return r.ZP.get("/posts",{params:{query:t,page:n}}).then(function(e){return console.log(null==e?void 0:e.data),null==e?void 0:e.data})},i=function(e){return r.ZP.get("/posts/".concat(e)).then(function(e){return null==e?void 0:e.data})},a=function(e){return r.ZP.post("/posts",e).then(function(e){return null==e?void 0:e.data})},l=function(e,t){return r.ZP.patch("/posts/".concat(e),t)}},64392:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/questions/[id]",function(){return n(82808)}])}},function(e){e.O(0,[83,185,900,503,774,888,179],function(){return e(e.s=64392)}),_N_E=e.O()}]);