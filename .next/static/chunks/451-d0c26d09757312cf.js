(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{22090:function(e,t,r){"use strict";r.d(t,{$Y:function(){return es},B0:function(){return eI},FN:function(){return ea},IX:function(){return ef},Jt:function(){return eC},UJ:function(){return z},Ym:function(){return eS},a1:function(){return eL},aF:function(){return ek},bm:function(){return L},cF:function(){return ex},g6:function(){return eP},gE:function(){return w},gH:function(){return m},iH:function(){return eT},oq:function(){return eO},pb:function(){return eA},qm:function(){return D},sd:function(){return eR},y4:function(){return v}});var n,i,a=r(75512),s=r(15258),o=r(20396);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let l="firebasestorage.googleapis.com",u="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c extends s.ZR{constructor(e,t,r=0){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,c.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function h(){return new c("unknown","An unknown error occurred, please check the error payload for server response.")}function f(){return new c("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function p(){return new c("canceled","User canceled the upload/download.")}function g(){return new c("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function m(e){return new c("invalid-argument",e)}function _(){return new c("app-deleted","The Firebase app was deleted.")}function v(e){return new c("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function b(e,t){return new c("invalid-format","String does not match format '"+e+"': "+t)}function y(e){throw new c("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){var r;let n;try{n=w.makeFromUrl(e,t)}catch(i){return new w(e,"")}if(""===n.path)return n;throw new c("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}let s=t.replace(/[.]/g,"\\."),o=RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),u=RegExp(`^https?://${t===l?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),d=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:a},{regex:u,indices:{bucket:1,path:2},postModify:a}];for(let h=0;h<d.length;h++){let f=d[h],p=f.regex.exec(e);if(p){let g=p[f.indices.bucket],m=p[f.indices.path];m||(m=""),r=new w(g,m),f.postModify(r);break}}if(null==r){var _;throw new c("invalid-url","Invalid URL '"+e+"'.")}return r}}class E{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function I(e){return"string"==typeof e||e instanceof String}function R(e){return S()&&e instanceof Blob}function S(){return"undefined"!=typeof Blob&&!(0,s.UG)()}function A(e,t,r,n){if(n<t)throw m(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw m(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function k(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function C(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function O(e,t){let r=-1!==[408,429].indexOf(e),n=-1!==t.indexOf(e);return e>=500&&e<600||r||n}(n=i||(i={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class T{constructor(e,t,r,n,i,a,s,o,l,u,c,d=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){let e=(e,t)=>{if(t){e(!1,new P(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===i.NO_ERROR,a=r.getStatus();if(!t||O(a,this.additionalRetryCodes_)&&this.retry){let s=r.getErrorCode()===i.ABORT;e(!1,new P(!1,null,s));return}let o=-1!==this.successCodes_.indexOf(a);e(!0,new P(o,r))})},t=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{var a;let s=this.callback_(i,i.getResponse());void 0!==s?r(s):r()}catch(o){n(o)}else if(null!==i){let l=h();l.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,l):l)}else if(t.canceled){let u=this.appDelete_?_():p();n(u)}else{let c=f();n(c)}};this.canceled_?t(!1,new P(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){let n=1,i=null,a=null,s=!1,o=0;function l(){return 2===o}let u=!1;function c(...e){u||(u=!0,t.apply(null,e))}function d(t){i=setTimeout(()=>{i=null,e(f,l())},t)}function h(){a&&clearTimeout(a)}function f(e,...t){if(u){h();return}if(e){h(),c.call(null,e,...t);return}let r=l()||s;if(r){h(),c.call(null,e,...t);return}n<64&&(n*=2);let i;1===o?(o=2,i=0):i=(n+Math.random())*1e3,d(i)}let p=!1;function g(e){if(!p)p=!0,h(),!u&&(null!==i?(e||(o=2),clearTimeout(i),d(0)):e||(o=1))}return d(0),a=setTimeout(()=>{s=!0,g(!0)},r),g}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){if(this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_){var t;(t=this.backoffId_)(!1)}null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class P{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function x(...e){let t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){let r=new t;for(let n=0;n<e.length;n++)r.append(e[n]);return r.getBlob()}if(S())return new Blob(e);throw new c("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class N{constructor(e,t){this.data=e,this.contentType=t||null}}function D(e,t){switch(e){case L.RAW:return new N(U(t));case L.BASE64:case L.BASE64URL:return new N(B(e,t));case L.DATA_URL:return new N(function(e){let t=new M(e);return t.base64?B(L.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(r){throw b(L.DATA_URL,"Malformed data URL.")}return U(t)}(t.rest)}(t),function(e){let t=new M(e);return t.contentType}(t))}throw h()}function U(e){let t=[];for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if((64512&n)==55296){let i=r<e.length-1&&(64512&e.charCodeAt(r+1))==56320;if(i){let a=n,s=e.charCodeAt(++r);n=65536|(1023&a)<<10|1023&s,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function B(e,t){switch(e){case L.BASE64:{let r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw b(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case L.BASE64URL:{let i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a)throw b(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}}let s;try{s=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("undefined"==typeof atob){var t;throw new c("unsupported-environment","base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.")}return atob(e)}(t)}catch(o){if(o.message.includes("polyfill"))throw o;throw b(e,"Invalid character found")}let l=new Uint8Array(s.length);for(let u=0;u<s.length;u++)l[u]=s.charCodeAt(u);return l}class M{constructor(e){this.base64=!1,this.contentType=null;let t=e.match(/^data:([^,]+)?,/);if(null===t)throw b(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let r=t[1]||null;null!=r&&(this.base64=function(e,t){let r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z{constructor(e,t){let r=0,n="";R(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(R(this.data_)){var r,n,i;let a=this.data_,s=(r=a,n=e,i=t,r.webkitSlice?r.webkitSlice(n,i):r.mozSlice?r.mozSlice(n,i):r.slice?r.slice(n,i):null);return null===s?null:new z(s)}{let o=new Uint8Array(this.data_.buffer,e,t-e);return new z(o,!0)}}static getBlob(...e){if(S()){let t=e.map(e=>e instanceof z?e.data_:e);return new z(x.apply(null,t))}{let r=e.map(e=>I(e)?D(L.RAW,e).data:e.data_),n=0;r.forEach(e=>{n+=e.byteLength});let i=new Uint8Array(n),a=0;return r.forEach(e=>{for(let t=0;t<e.length;t++)i[a++]=e[t]}),new z(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j(e){var t;let r;try{r=JSON.parse(e)}catch(n){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}function F(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H(e,t){return t}class ${constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||H}}let W=null;function V(){if(W)return W;let e=[];e.push(new $("bucket")),e.push(new $("generation")),e.push(new $("metageneration")),e.push(new $("name","fullPath",!0));let t=new $("name");t.xform=function(e,t){var r;return!I(t)||t.length<2?t:F(t)},e.push(t);let r=new $("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new $("timeCreated")),e.push(new $("updated")),e.push(new $("md5Hash",null,!0)),e.push(new $("cacheControl",null,!0)),e.push(new $("contentDisposition",null,!0)),e.push(new $("contentEncoding",null,!0)),e.push(new $("contentLanguage",null,!0)),e.push(new $("contentType",null,!0)),e.push(new $("metadata","customMetadata",!0)),W=e}function q(e,t,r){let n=j(t);return null===n?null:function(e,t,r){var n,i;let a={};a.type="file";let s=r.length;for(let o=0;o<s;o++){let l=r[o];a[l.local]=l.xform(a,t[l.server])}return Object.defineProperty(a,"ref",{get:function(){let t=a.bucket,r=a.fullPath,n=new w(t,r);return e._makeStorageReference(n)}}),a}(e,n,r)}function G(e,t){let r={},n=t.length;for(let i=0;i<n;i++){let a=t[i];a.writable&&(r[a.server]=e[a.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Z="prefixes",J="items";class X{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e){if(!e)throw h()}function K(e,t){return function(r,n){let i=q(e,n,t);return Y(null!==i),i}}function Q(e){return function(t,r){var n,i;let a;return 401===t.getStatus()?a=t.getErrorText().includes("Firebase App Check token is invalid")?new c("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new c("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,a=new c("quota-exceeded","Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,a=new c("unauthorized","User does not have permission to access '"+i+"'.")):a=r,a.status=t.getStatus(),a.serverResponse=r.serverResponse,a}}function ee(e){let t=Q(e);return function(r,n){let i=t(r,n);if(404===r.getStatus()){var a;a=e.path,i=new c("object-not-found","Object '"+a+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}function et(e,t,r){let n=t.fullServerUrl(),i=k(n,e.host,e._protocol),a=e.maxOperationRetryTime,s=new X(i,"GET",K(e,r),a);return s.errorHandler=ee(t),s}function er(e,t,r){let n=Object.assign({},r);if(n.fullPath=e.path,n.size=t.size(),!n.contentType){var i,a;n.contentType=t&&t.type()||"application/octet-stream"}return n}class en{constructor(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}}function ei(e,t){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(n){Y(!1)}return Y(!!r&&-1!==(t||["active"]).indexOf(r)),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ea={STATE_CHANGED:"state_changed"},es={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function eo(e){switch(e){case"running":case"pausing":case"canceling":return es.RUNNING;case"paused":return es.PAUSED;case"success":return es.SUCCESS;case"canceled":return es.CANCELED;default:return es.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class el{constructor(e,t,r){var n;"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=null!=t?t:void 0,this.complete=null!=r?r:void 0):(this.next=e.next,this.error=e.error,this.complete=e.complete)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class ec{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw y("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw y("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw y("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw y("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw y("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ed extends ec{initXhr(){this.xhr_.responseType="text"}}function eh(){return new ed}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ef{constructor(e,t,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=V(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{let t=this.isExponentialBackoffExpired();if(O(e.status,[])){if(t)e=f();else{this.sleepTime=Math.max(2*this.sleepTime,1e3),this._needToFetchStatus=!0,this.completeTransitions_();return}}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,r])=>{switch(this._state){case"running":e(t,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}})}_createResumable(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let a=t.bucketOnlyServerUrl(),s=er(t,n,i),o={name:s.fullPath},l=k(a,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${n.size()}`,"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},c=G(s,r),d=e.maxUploadRetryTime,h=new X(l,"POST",function(e){ei(e);let t;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Y(!1)}return Y(I(t)),t},d);return h.urlParams=o,h.headers=u,h.body=c,h.errorHandler=Q(t),h}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eh,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((t,r)=>{let n=function(e,t,r,n){let i=e.maxUploadRetryTime,a=new X(r,"POST",function(e){let t=ei(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){Y(!1)}r||Y(!1);let a=Number(r);return Y(!isNaN(a)),new en(a,n.size(),"final"===t)},i);return a.headers={"X-Goog-Upload-Command":"query"},a.errorHandler=Q(t),a}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(n,eh,t,r);this._request=i,i.getPromise().then(e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=262144*this._chunkMultiplier,t=new en(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((n,i)=>{let a;try{a=function(e,t,r,n,i,a,s,o){let l=new en(0,0);if(s?(l.current=s.current,l.total=s.total):(l.current=0,l.total=n.size()),n.size()!==l.total)throw new c("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");let u=l.total-l.current,d=u;i>0&&(d=Math.min(d,i));let h=l.current,f=h+d,p="";p=0===d?"finalize":u===d?"upload, finalize":"upload";let m={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},_=n.slice(h,f);if(null===_)throw g();let v=t.maxUploadRetryTime,b=new X(r,"POST",function(e,r){let i=ei(e,["active","final"]),s=l.current+d,o=n.size(),u;return u="final"===i?K(t,a)(e,r):null,new en(s,o,"final"===i,u)},v);return b.headers=m,b.body=_.uploadData(),b.progressCallback=o||null,b.errorHandler=Q(e),b}(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(s){this._error=s,this._transition("error");return}let o=this._ref.storage._makeRequest(a,eh,n,i,!1);this._request=o,o.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){let e=262144*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{let r=et(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(r,eh,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{let r=function(e,t,r,n,i){let a=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},o=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+o;let l=er(t,n,i),u=G(l,r),c="--"+o+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+o+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",d=z.getBlob(c,n,"\r\n--"+o+"--");if(null===d)throw g();let h={name:l.fullPath},f=k(a,e.host,e._protocol),p=e.maxUploadRetryTime,m=new X(f,"POST",K(e,r),p);return m.urlParams=h,m.headers=s,m.body=d.uploadData(),m.errorHandler=Q(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(r,eh,e,t);this._request=n,n.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=p(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){let e=eo(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,r,n){let i=new el(t||void 0,r||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();let e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(eo(this._state)){case es.SUCCESS:eu(this._resolve.bind(null,this.snapshot))();break;case es.CANCELED:case es.ERROR:let t=this._reject;eu(t.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){let t=eo(this._state);switch(t){case es.RUNNING:case es.PAUSED:e.next&&eu(e.next.bind(e,this.snapshot))();break;case es.SUCCESS:e.complete&&eu(e.complete.bind(e))();break;case es.CANCELED:case es.ERROR:default:e.error&&eu(e.error.bind(e,this._error))()}}resume(){let e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){let e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){let e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ep{constructor(e,t){this._service=e,t instanceof w?this._location=t:this._location=w.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ep(e,t)}get root(){let e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return F(this._location.path)}get storage(){return this._service}get parent(){let e=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new w(this._location.bucket,e);return new ep(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw v(e)}}async function eg(e,t,r){let n=await em(e,{pageToken:r});t.prefixes.push(...n.prefixes),t.items.push(...n.items),null!=n.nextPageToken&&await eg(e,t,n.nextPageToken)}function em(e,t){null!=t&&"number"==typeof t.maxResults&&A("options.maxResults",1,1e3,t.maxResults);let r=t||{},n=function(e,t,r,n,i){var a,s;let o={};t.isRoot?o.prefix="":o.prefix=t.path+"/",r&&r.length>0&&(o.delimiter=r),n&&(o.pageToken=n),i&&(o.maxResults=i);let l=t.bucketOnlyServerUrl(),u=k(l,e.host,e._protocol),c=e.maxOperationRetryTime,d=new X(u,"GET",(s=t.bucket,function(t,r){let n=function(e,t,r){let n=j(r);return null===n?null:function(e,t,r){let n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[Z])for(let i of r[Z]){let a=i.replace(/\/$/,""),s=e._makeStorageReference(new w(t,a));n.prefixes.push(s)}if(r[J])for(let o of r[J]){let l=e._makeStorageReference(new w(t,o.name));n.items.push(l)}return n}(e,t,n)}(e,s,r);return Y(null!==n),n}),c);return d.urlParams=o,d.errorHandler=Q(t),d}(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(n,eh)}function e_(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new w(e._location.bucket,r);return new ep(e.storage,n)}function ev(e,t){let r=null==t?void 0:t[u];return null==r?null:w.makeFromBucketSpec(r,e)}class eb{constructor(e,t,r,n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=l,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=w.makeFromBucketSpec(n,this._host):this._bucket=ev(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=ev(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){A("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ep(this,e)}_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new E(_());{let a=function(e,t,r,n,i,a,s=!0){var o,l,u,c,d,h,f,p;let g=C(e.urlParams),m=e.url+g,_=Object.assign({},e.headers);return o=_,t&&(o["X-Firebase-GMPID"]=t),u=_,null!==r&&r.length>0&&(u.Authorization="Firebase "+r),(d=_)["X-Firebase-Storage-Version"]="webjs/"+(null!=a?a:"AppManager"),f=_,null!==n&&(f["X-Firebase-AppCheck"]=n),new T(m,e.method,_,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,s)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let ey="@firebase/storage",ew="0.10.1",eE="storage";function eI(e,t,r){var n,i,a;return(n=e=(0,s.m9)(e))._throwIfRoot("uploadBytesResumable"),new ef(n,new z(t),r)}function eR(e){return function(e){e._throwIfRoot("getMetadata");let t=et(e.storage,e._location,V());return e.storage.makeRequestWithTokens(t,eh)}(e=(0,s.m9)(e))}function eS(e,t){return function(e,t){e._throwIfRoot("updateMetadata");let r=function(e,t,r,n){let i=t.fullServerUrl(),a=k(i,e.host,e._protocol),s=G(r,n),o=e.maxOperationRetryTime,l=new X(a,"PATCH",K(e,n),o);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=s,l.errorHandler=ee(t),l}(e.storage,e._location,t,V());return e.storage.makeRequestWithTokens(r,eh)}(e=(0,s.m9)(e),t)}function eA(e,t){return em(e=(0,s.m9)(e),t)}function ek(e){return function(e){let t={prefixes:[],items:[]};return eg(e,t).then(()=>t)}(e=(0,s.m9)(e))}function eC(e){return function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){var n,i;let a=t.fullServerUrl(),s=k(a,e.host,e._protocol),o=e.maxOperationRetryTime,l=new X(s,"GET",function(t,n){let i=q(e,n,r);return Y(null!==i),function(e,t,r,n){let i=j(t);if(null===i||!I(i.downloadTokens))return null;let a=i.downloadTokens;if(0===a.length)return null;let s=encodeURIComponent,o=a.split(","),l=o.map(t=>{let i=e.bucket,a=e.fullPath,o="/b/"+s(i)+"/o/"+s(a),l=k(o,r,n),u=C({alt:"media",token:t});return l+u});return l[0]}(i,n,e.host,e._protocol)},o);return l.errorHandler=ee(t),l}(e.storage,e._location,V());return e.storage.makeRequestWithTokens(t,eh).then(e=>{if(null===e)throw new c("no-download-url","The given file does not have any download URLs.");return e})}(e=(0,s.m9)(e))}function eO(e){return function(e){e._throwIfRoot("deleteObject");let t=function(e,t){let r=t.fullServerUrl(),n=k(r,e.host,e._protocol),i=e.maxOperationRetryTime,a=new X(n,"DELETE",function(e,t){},i);return a.successCodes=[200,204],a.errorHandler=ee(t),a}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,eh)}(e=(0,s.m9)(e))}function eT(e,t){return function(e,t){var r,n,i;if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return function e(t,r){if(t instanceof eb){if(null==t._bucket)throw new c("no-default-bucket","No default bucket found. Did you set the '"+u+"' property when initializing the app?");let n=new ep(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?e_(t,r):t}(e,t);if(e instanceof eb)return n=e,i=t,new ep(n,i);throw m("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,s.m9)(e),t)}function eP(e,t){return e_(e,t)}function ex(e=(0,a.getApp)(),t){e=(0,s.m9)(e);let r=(0,a._getProvider)(e,eE),n=r.getImmediate({identifier:t}),i=(0,s.P0)("storage");return i&&eL(n,...i),n}function eL(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}(e,t,r,n)}(0,a._registerComponent)(new o.wA(eE,function e(t,{instanceIdentifier:r}){let n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new eb(n,i,s,r,a.SDK_VERSION)},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(ey,ew,""),(0,a.registerVersion)(ey,ew,"esm2017")},15258:function(e,t,r){"use strict";r.d(t,{BH:function(){return b},L:function(){return l},LL:function(){return P},P0:function(){return m},Pz:function(){return v},Sg:function(){return y},UG:function(){return I},ZB:function(){return function e(t,r){if(!(r instanceof Object))return r;switch(r.constructor){case Date:return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return r}for(let n in r)r.hasOwnProperty(n)&&c(n)&&(t[n]=e(t[n],r[n]));return t}},ZR:function(){return T},aH:function(){return _},b$:function(){return A},eu:function(){return O},hl:function(){return C},jU:function(){return R},m9:function(){return H},ne:function(){return z},pd:function(){return M},r3:function(){return L},ru:function(){return S},tV:function(){return u},uI:function(){return E},vZ:function(){return function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let a of n){if(!i.includes(a))return!1;let s=t[a],o=r[a];if(D(s)&&D(o)){if(!e(s,o))return!1}else if(s!==o)return!1}for(let l of i)if(!n.includes(l))return!1;return!0}},w1:function(){return k},xO:function(){return U},xb:function(){return N},z$:function(){return w},zd:function(){return B}});var n=r(20279);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let i=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):(64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},a=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let s=e[r++],o=e[r++],l=e[r++],u=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&l)-65536;t[n++]=String.fromCharCode(55296+(u>>10)),t[n++]=String.fromCharCode(56320+(1023&u))}else{let c=e[r++],d=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&c)<<6|63&d)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let a=e[i],s=i+1<e.length,o=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=a>>2,d=(3&a)<<4|o>>4,h=(15&o)<<2|u>>6,f=63&u;l||(f=64,s||(h=64)),n.push(r[c],r[d],r[h],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):a(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let a=r[e.charAt(i++)],s=i<e.length,o=s?r[e.charAt(i)]:0;++i;let l=i<e.length,u=l?r[e.charAt(i)]:64;++i;let c=i<e.length,d=c?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==u||null==d)throw Error();let h=a<<2|o>>4;if(n.push(h),64!==u){let f=o<<4&240|u>>2;if(n.push(f),64!==d){let p=u<<6&192|d;n.push(p)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){let t=i(e);return s.encodeByteArray(t,!0)},l=function(e){return o(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function c(e){return"__proto__"!==e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,h=()=>{if(void 0===n||void 0===n.env)return;let e=n.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},f=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let r=e&&u(e[1]);return r&&JSON.parse(r)},p=()=>{try{return d()||h()||f()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},g=e=>{var t,r;return null===(r=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},m=e=>{let t=g(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},_=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function I(){var e;let t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(r.g.process)}catch(n){return!1}}function R(){return"object"==typeof self&&self.self===self}function S(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function A(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){let e=w();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function C(){try{return"object"==typeof indexedDB}catch(e){return!1}}function O(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(a){t(a)}})}class T extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var r,n;let i=t[0]||{},a=`${this.service}/${e}`,s=this.errors[e],o=s?(r=s,n=i,r.replace(x,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",l=`${this.serviceName}: ${o} (${a}).`,u=new T(a,l,i);return u}}let x=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function N(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function U(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function B(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function M(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}function z(e,t){let r=new j(e,t);return r.subscribe.bind(r)}class j{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=F),void 0===n.error&&(n.error=F),void 0===n.complete&&(n.complete=F);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}})}close(e){!this.finalized&&(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function H(e){return e&&e._delegate?e._delegate:e}},82952:function(e,t,r){"use strict";var n=r(88081),i=r(88441),a=r(72133);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.src,o=e.sizes,l=e.unoptimized,g=void 0!==l&&l,m=e.priority,y=void 0!==m&&m,S=e.loading,k=e.lazyRoot,C=e.lazyBoundary,O=e.className,T=e.quality,P=e.width,x=e.height,L=e.style,N=e.objectFit,D=e.objectPosition,U=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,z=e.blurDataURL,j=u(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=c.useContext(p.ImageConfigContext),H=c.useMemo(function(){var e=_||F||h.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort(function(e,t){return e-t}),r=e.deviceSizes.sort(function(e,t){return e-t});return s({},e,{allSizes:t,deviceSizes:r})},[F]),$=o?"responsive":"intrinsic";"layout"in j&&(j.layout&&($=j.layout),delete j.layout);var W=R;if("loader"in j){if(j.loader){var V,q=j.loader;W=function(e){e.config;var t=u(e,["config"]);return q(t)}}delete j.loader}var G="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(r)){var Z=w(r)?r.default:r;if(!Z.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(z=z||Z.blurDataURL,G=Z.src,(!$||"fill"!==$)&&(x=x||Z.height,P=P||Z.width,!Z.height||!Z.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))}r="string"==typeof r?r:G;var J=!y&&("lazy"===S||void 0===S);(r.startsWith("data:")||r.startsWith("blob:"))&&(g=!0,J=!1),v.has(r)&&(J=!1),H.unoptimized&&(g=!0);var X=i(c.useState(!1),2),Y=X[0],K=X[1],Q=f.useIntersection({rootRef:void 0===k?null:k,rootMargin:C||"200px",disabled:!J}),ee=i(Q,3),et=ee[0],er=ee[1],en=ee[2],ei=!J||er,ea={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},es={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo=!1,el=I(P),eu=I(x),ec=I(T),ed=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:D}),eh="blur"!==M||Y?{}:{backgroundSize:N||"cover",backgroundPosition:D||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(z,'")')};if("fill"===$)ea.display="block",ea.position="absolute",ea.top=0,ea.left=0,ea.bottom=0,ea.right=0;else if(void 0!==el&&void 0!==eu){var ef=eu/el,ep=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===$?(ea.display="block",ea.position="relative",eo=!0,es.paddingTop=ep):"intrinsic"===$?(ea.display="inline-block",ea.position="relative",ea.maxWidth="100%",eo=!0,es.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(eu,"%27/%3e")):"fixed"===$&&(ea.display="inline-block",ea.position="relative",ea.width=el,ea.height=eu)}var eg={src:b,srcSet:void 0,sizes:void 0};ei&&(eg=E({config:H,src:r,unoptimized:g,layout:$,width:el,quality:ec,sizes:o,loader:W}));var em=r,e_="imagesizes";e_="imageSizes";var ev=(n(V={},"imageSrcSet",eg.srcSet),n(V,e_,eg.sizes),n(V,"crossOrigin",j.crossOrigin),V),eb=c.default.useLayoutEffect,ey=c.useRef(U),ew=c.useRef(r);c.useEffect(function(){ey.current=U},[U]),eb(function(){ew.current!==r&&(en(),ew.current=r)},[en,r]);var eE=s({isLazy:J,imgAttributes:eg,heightInt:eu,widthInt:el,qualityInt:ec,layout:$,className:O,imgStyle:ed,blurStyle:eh,loading:S,config:H,unoptimized:g,placeholder:M,loader:W,srcString:em,onLoadingCompleteRef:ey,setBlurComplete:K,setIntersection:et,isVisible:ei,noscriptSizes:o},j);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:ea},eo?c.default.createElement("span",{style:es},t?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,c.default.createElement(A,Object.assign({},eE))),y?c.default.createElement(d.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+eg.src+eg.srcSet+eg.sizes,rel:"preload",as:"image",href:eg.srcSet?void 0:eg.src},ev))):null)};var s=r(54363).Z,o=r(4858).Z,l=r(27031).Z,u=r(84315).Z,c=l(r(82684)),d=o(r(71028)),h=r(4014),f=r(25149),p=r(19494);r(28458);var g=r(96116);function m(e){return"/"===e[0]?e.slice(1):e}var _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,b="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",y=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,a=new URL("".concat(t.path).concat(m(r))),s=a.searchParams;return s.set("auto",s.getAll("auto").join(",")||"format"),s.set("fit",s.get("fit")||"max"),s.set("w",s.get("w")||n.toString()),i&&s.set("q",i.toString()),a.href}],["cloudinary",function(e){var t,r=e.config,n=e.src,i=e.width,a=["f_auto","c_limit","w_"+i,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(r.path).concat(a).concat(m(n))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(m(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function E(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,s=e.width,o=e.quality,l=e.sizes,u=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var c=function(e,t,r,n){var i=e.deviceSizes,s=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var o,l=/(^|\s)(1?\d?\d)vw/g,u=[];o=l.exec(n);o)u.push(parseInt(o[2]));if(u.length){var c=.01*Math.min.apply(Math,u);return{widths:s.filter(function(e){return e>=i[0]*c}),kind:"w"}}return{widths:s,kind:"w"}}return"number"!=typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map(function(e){return s.find(function(t){return t>=e})||s[s.length-1]}))),kind:"x"}}(t,s,i,l),d=c.widths,h=c.kind,f=d.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:d.map(function(e,n){return"".concat(u({config:t,src:r,quality:o,width:e})," ").concat("w"===h?e:n+1).concat(h)}).join(", "),src:u({config:t,src:r,quality:o,width:d[f]})}}function I(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function R(e){var t,r=(null==(t=e.config)?void 0:t.loader)||"default",n=y.get(r);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(r))}function S(e,t,r,n,i,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(v.add(t),"blur"===n&&a(!0),null==i?void 0:i.current)){var r=e.naturalWidth,s=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:s})}}))}var A=function(e){var t=e.imgAttributes,r=(e.heightInt,e.widthInt),n=e.qualityInt,i=e.layout,a=e.className,o=e.imgStyle,l=e.blurStyle,d=e.isLazy,h=e.placeholder,f=e.loading,p=e.srcString,g=e.config,m=e.unoptimized,_=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,y=e.setIntersection,w=e.onLoad,I=e.onError,R=(e.isVisible,e.noscriptSizes),A=u(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return f=d?"lazy":f,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":i,className:a,style:s({},o,l),ref:c.useCallback(function(e){y(e),(null==e?void 0:e.complete)&&S(e,p,i,h,v,b)},[y,p,i,h,v,b]),onLoad:function(e){S(e.currentTarget,p,i,h,v,b),w&&w(e)},onError:function(e){"blur"===h&&b(!0),I&&I(e)}})),(d||"blur"===h)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},A,E({config:g,src:p,unoptimized:m,layout:i,width:r,quality:n,sizes:R,loader:_}),{decoding:"async","data-nimg":i,style:o,className:a,loading:f}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},61386:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default,i=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(e instanceof Promise?i.loader=function(){return e}:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=n({},i,e)),(i=n({},i,t)).suspense&&(delete i.ssr,delete i.loading),i.loadableGenerated&&delete(i=n({},i,i.loadableGenerated)).loadableGenerated,"boolean"==typeof i.ssr&&!i.suspense){if(!i.ssr)return delete i.ssr,s(r,i);delete i.ssr}return r(i)},t.noSSR=s;var n=r(54363).Z,i=r(4858).Z,a=(i(r(82684)),i(r(41800)));function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88124:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(4858).Z)(r(82684)).default.createContext(null);t.LoadableContext=n},41800:function(e,t,r){"use strict";var n=r(71539),i=r(66745);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(54363).Z,o=(0,r(4858).Z)(r(82684)),l=r(88124),u=r(82684).useSyncExternalStore,c=[],d=[],h=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(function(e){return r.loading=!1,r.loaded=e,e}).catch(function(e){throw r.loading=!1,r.error=e,e}),r}var p=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"==typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},r.delay)),"number"==typeof r.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},r.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=o.default.lazy(r.loader));var n=null;function i(){if(!n){var t=new p(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h){var c=r.webpack?r.webpack():r.modules;c&&d.push(function(e){var t,r=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}}(e))){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw s}}}}(c);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return i()}}catch(s){r.e(s)}finally{r.f()}})}function f(){i();var e=o.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(function(t){e(t)})}var g=r.suspense?function(e,t){return f(),o.default.createElement(r.lazy,s({},e,{ref:t}))}:function(e,t){f();var i=u(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(t,function(){return{retry:n.retry}},[]),o.default.useMemo(function(){var t;return i.loading||i.error?o.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?o.default.createElement((t=i.loaded)&&t.__esModule?t.default:t,e):null},[e,i])};return g.preload=function(){return i()},g.displayName="LoadableComponent",o.default.forwardRef(g)}(f,e)}function m(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then(function(){if(e.length)return m(e,t)})}g.preloadAll=function(){return new Promise(function(e,t){m(c).then(e,t)})},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var r=function(){return h=!0,t()};m(d,e).then(r,r)})},window.__NEXT_PRELOADREADY=g.preloadReady,t.default=g},88081:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},51774:function(e,t,r){e.exports=r(61386)},60071:function(e,t,r){e.exports=r(82952)},73216:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(63588),i=r.n(n),a=r(82684),s=r(38),o=r(28598);function l({min:e,now:t,max:r,label:n,visuallyHidden:a,striped:s,animated:l,className:u,style:c,variant:d,bsPrefix:h,...f},p){var g,m,_;return(0,o.jsx)("div",{ref:p,...f,role:"progressbar",className:i()(u,`${h}-bar`,{[`bg-${d}`]:d,[`${h}-bar-animated`]:l,[`${h}-bar-striped`]:l||s}),style:{width:`${Math.round((t-e)/(r-e)*1e5)/1e3}%`,...c},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":r,children:a?(0,o.jsx)("span",{className:"visually-hidden",children:n}):n})}let u=a.forwardRef(({isChild:e,...t},r)=>{var n,u;if(t.bsPrefix=(0,s.vE)(t.bsPrefix,"progress"),e)return l(t,r);let{min:c,now:d,max:h,label:f,visuallyHidden:p,striped:g,animated:m,bsPrefix:_,variant:v,className:b,children:y,...w}=t,E;return(0,o.jsx)("div",{ref:r,...w,className:i()(b,_),children:y?(u=e=>(0,a.cloneElement)(e,{isChild:!0}),E=0,a.Children.map(y,e=>a.isValidElement(e)?u(e,E++):e)):l({min:c,now:d,max:h,label:f,visuallyHidden:p,striped:g,animated:m,bsPrefix:_,variant:v},r)})});u.displayName="ProgressBar",u.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var c=u},45008:function(e,t,r){"use strict";r.d(t,{_T:function(){return a}});var n=function(e,t){return(Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},i=function(){return(Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}},74651:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(15258),i=r(20396),a=r(75512),s=r(24502);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new i.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate)))}_getService(e,t=a._DEFAULT_ENTRY_NAME){var r;this._delegate.checkDestroyed();let n=this._delegate.container.getProvider(e);return n.isInitialized()||(null===(r=n.getComponent())||void 0===r?void 0:r.instantiationMode)!=="EXPLICIT"||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let l=new n.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),u=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){let t={},r={__esModule:!0,initializeApp:function(i,s={}){let o=a.initializeApp(i,s);if((0,n.r3)(t,o.name))return t[o.name];let l=new e(o,r);return t[o.name]=l,l},app:i,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:function(t){let s=t.name,o=s.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){let u=(e=i())=>{if("function"!=typeof e[o])throw l.create("invalid-app-argument",{appName:s});return e[o]()};void 0!==t.serviceProps&&(0,n.ZB)(u,t.serviceProps),r[o]=u,e.prototype[o]=function(...e){let r=this._getService.bind(this,s);return r.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?r[o]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:a}};function i(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,n.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),i.App=e,r}(o);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,n.ZB)(t,e)},createSubscribe:n.ne,ErrorFactory:n.LL,deepExtend:n.ZB}),t}(),c=new s.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ if((0,n.jU)()&&void 0!==self.firebase){c.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let d=self.firebase.SDK_VERSION;d&&d.indexOf("LITE")>=0&&c.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let h=u;(0,a.registerVersion)("@firebase/app-compat","0.2.1",void 0)},75512:function(e,t,r){"use strict";r.r(t),r.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return M},_DEFAULT_ENTRY_NAME:function(){return A},_addComponent:function(){return T},_addOrOverwriteComponent:function(){return P},_apps:function(){return C},_clearComponents:function(){return D},_components:function(){return O},_getProvider:function(){return L},_registerComponent:function(){return x},_removeServiceInstance:function(){return N},deleteApp:function(){return H},getApp:function(){return j},getApps:function(){return F},initializeApp:function(){return z},onLog:function(){return W},registerVersion:function(){return $},setLogLevel:function(){return V}});var n,i=r(20396),a=r(24502),s=r(15258);let o=(e,t)=>t.some(t=>e instanceof t),l,u,c=new WeakMap,d=new WeakMap,h=new WeakMap,f=new WeakMap,p=new WeakMap,g={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return m(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(m(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&c.set(t,e)}).catch(()=>{}),p.set(t,e),t}(e);if(f.has(e))return f.get(e);let t=function(e){if("function"==typeof e){var t;return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(u||(u=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(_(this),t),m(c.get(this))}:function(...t){return m(e.apply(_(this),t))}:function(t,...r){let n=e.call(_(this),t,...r);return h.set(n,t.sort?t.sort():[t]),m(n)}}return(e instanceof IDBTransaction&&function(e){if(d.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});d.set(e,t)}(e),o(e,l||(l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,g):e}(e);return t!==e&&(f.set(e,t),p.set(t,e)),t}let _=e=>p.get(e),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],y=new Map;function w(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(y.get(t))return y.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=b.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),s=a.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),i&&a.done]))[0]};return y.set(t,a),a}g=(n=e=>({...e,get:(t,r,n)=>w(t,r)||e.get(t,r,n),has:(t,r)=>!!w(t,r)||e.has(t,r)}))(g);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class E{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let I="@firebase/app",R="0.9.1",S=new a.Yd("@firebase/app"),A="[DEFAULT]",k={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,O=new Map;function T(e,t){try{e.container.addComponent(t)}catch(r){S.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function P(e,t){e.container.addOrOverwriteComponent(t)}function x(e){let t=e.name;if(O.has(t))return S.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(O.set(t,e),C.values()))T(r,e);return!0}function L(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function N(e,t,r=A){L(e,t).clearInstance(r)}function D(){O.clear()}let U=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new i.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw U.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let M="9.16.0";function z(e,t={}){let r=e;if("object"!=typeof t){let n=t;t={name:n}}let a=Object.assign({name:A,automaticDataCollectionEnabled:!1},t),o=a.name;if("string"!=typeof o||!o)throw U.create("bad-app-name",{appName:String(o)});if(r||(r=(0,s.aH)()),!r)throw U.create("no-options");let l=C.get(o);if(l){if((0,s.vZ)(r,l.options)&&(0,s.vZ)(a,l.config))return l;throw U.create("duplicate-app",{appName:o})}let u=new i.H0(o);for(let c of O.values())u.addComponent(c);let d=new B(r,a,u);return C.set(o,d),d}function j(e=A){let t=C.get(e);if(!t&&e===A)return z();if(!t)throw U.create("no-app",{appName:e});return t}function F(){return Array.from(C.values())}async function H(e){let t=e.name;C.has(t)&&(C.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function $(e,t,r){var n;let a=null!==(n=k[e])&&void 0!==n?n:e;r&&(a+=`-${r}`);let s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let l=[`Unable to register library "${a}" with version "${t}":`];s&&l.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),S.warn(l.join(" "));return}x(new i.wA(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}function W(e,t){if(null!==e&&"function"!=typeof e)throw U.create("invalid-log-argument");(0,a.Am)(e,t)}function V(e){(0,a.Ub)(e)}let q="firebase-heartbeat-store",G=null;function Z(){return G||(G=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let s=indexedDB.open(e,1),o=m(s);return n&&s.addEventListener("upgradeneeded",e=>{n(m(s.result),e.oldVersion,e.newVersion,m(s.transaction))}),r&&s.addEventListener("blocked",()=>r()),o.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),o})("firebase-heartbeat-database",1,{upgrade(e,t){0===t&&e.createObjectStore(q)}}).catch(e=>{throw U.create("idb-open",{originalErrorMessage:e.message})})),G}async function J(e){try{let t=await Z();return t.transaction(q).objectStore(q).get(Y(e))}catch(n){if(n instanceof s.ZR)S.warn(n.message);else{let r=U.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});S.warn(r.message)}}}async function X(e,t){try{let r=await Z(),n=r.transaction(q,"readwrite"),i=n.objectStore(q);return await i.put(t,Y(e)),n.done}catch(o){if(o instanceof s.ZR)S.warn(o.message);else{let a=U.create("idb-set",{originalErrorMessage:null==o?void 0:o.message});S.warn(a.message)}}}function Y(e){return`${e.name}!${e.options.appId}`}class K{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ee(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=Q();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=Q(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let a=r.find(e=>e.agent===i.agent);if(a){if(a.dates.push(i.date),et(r)>t){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),et(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Q(){let e=new Date;return e.toISOString().substring(0,10)}class ee{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let t=await J(this.app);return t||{heartbeats:[]}}}async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return X(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let n=await this.read();return X(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}x(new i.wA("platform-logger",e=>new E(e),"PRIVATE")),x(new i.wA("heartbeat",e=>new K(e),"PRIVATE")),$(I,R,""),$(I,R,"esm2017"),$("fire-js","")},20396:function(e,t,r){"use strict";r.d(t,{H0:function(){return o},wA:function(){return i}});var n=r(15258);class i{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let r=new n.BH;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(a){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){var t;if(t=e,"EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(r){}for(let[n,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(n);try{let o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch(l){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[i,a]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(i);r===s&&a.resolve(n)}return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var r;let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===a?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},24502:function(e,t,r){"use strict";var n,i;r.d(t,{Am:function(){return h},Ub:function(){return d},Yd:function(){return c},in:function(){return n}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let a=[];(i=n||(n={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let s={debug:n.DEBUG,verbose:n.VERBOSE,info:n.INFO,warn:n.WARN,error:n.ERROR,silent:n.SILENT},o=n.INFO,l={[n.DEBUG]:"log",[n.VERBOSE]:"log",[n.INFO]:"info",[n.WARN]:"warn",[n.ERROR]:"error"},u=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=l[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=u,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in n))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,n.DEBUG,...e),this._logHandler(this,n.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,n.VERBOSE,...e),this._logHandler(this,n.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,n.INFO,...e),this._logHandler(this,n.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,n.WARN,...e),this._logHandler(this,n.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,n.ERROR,...e),this._logHandler(this,n.ERROR,...e)}}function d(e){a.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(let r of a){let i=null;t&&t.level&&(i=s[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...a)=>{let s=a.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");r>=(null!=i?i:t.logLevel)&&e({level:n[r].toLowerCase(),message:s,args:a,type:t.name})}}}},96540:function(e,t,r){"use strict";r.d(t,{ZF:function(){return n.initializeApp}});var n=r(75512);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ (0,n.registerVersion)("firebase","9.16.0","app")},79186:function(e,t,r){"use strict";var n,i=r(74651),a=r(24482),s=r(15258);r(75512),r(24502);var o=r(20396);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function l(){return window}async function u(e,t,r){var n;let{BuildInfo:i}=l();(0,a.ap)(t.sessionId,"AuthEvent did not contain a session ID");let s=await h(t.sessionId),o={};return(0,a.aq)()?o.ibi=i.packageName:(0,a.ar)()?o.apn=i.packageName:(0,a.as)(e,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,(0,a.at)(e,r,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,o)}async function c(e){let{BuildInfo:t}=l(),r={};(0,a.aq)()?r.iosBundleId=t.packageName:(0,a.ar)()?r.androidPackageName=t.packageName:(0,a.as)(e,"operation-not-supported-in-this-environment"),await (0,a.au)(e,r)}async function d(e,t,r){let{cordova:n}=l(),i=()=>{};try{await new Promise((s,o)=>{let l=null;function u(){var e;s();let t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==r?void 0:r.close)&&r.close()}function c(){!l&&(l=window.setTimeout(()=>{o((0,a.aw)(e,"redirect-cancelled-by-user"))},2e3))}function d(){(null==document?void 0:document.visibilityState)==="visible"&&c()}t.addPassiveListener(u),document.addEventListener("resume",c,!1),(0,a.ar)()&&document.addEventListener("visibilitychange",d,!1),i=()=>{t.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),l&&window.clearTimeout(l)}})}finally{i()}}async function h(e){let t=function(e){if((0,a.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return new TextEncoder().encode(e);let t=new ArrayBuffer(e.length),r=new Uint8Array(t);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n);return r}(e),r=await crypto.subtle.digest("SHA-256",t),n=Array.from(new Uint8Array(r));return n.map(e=>e.toString(16).padStart(2,"0")).join("")}class f extends a.ay{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function p(e){let t=await g()._get(m(e));return t&&await g()._remove(m(e)),t}function g(){return(0,a.az)(a.b)}function m(e){return(0,a.aA)("authEvent",e.config.apiKey,e.name)}function _(e){if(!(null==e?void 0:e.includes("?")))return{};let[t,...r]=e.split("?");return(0,s.zd)(r.join("?"))}let v=class{constructor(){this._redirectPersistence=a.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=a.aB,this._overrideRedirectResult=a.aC}async _initialize(e){let t=e._key(),r=this.eventManagers.get(t);return r||(r=new f(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){(0,a.as)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,n){var i,s;!function(e){var t,r,n,i,s,o,u,c,d,h;let f=l();(0,a.ax)("function"==typeof(null===(t=null==f?void 0:f.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,a.ax)(void 0!==(null===(r=null==f?void 0:f.BuildInfo)||void 0===r?void 0:r.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,a.ax)("function"==typeof(null===(s=null===(i=null===(n=null==f?void 0:f.cordova)||void 0===n?void 0:n.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.ax)("function"==typeof(null===(c=null===(u=null===(o=null==f?void 0:f.cordova)||void 0===o?void 0:o.plugins)||void 0===u?void 0:u.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.ax)("function"==typeof(null===(h=null===(d=null==f?void 0:f.cordova)||void 0===d?void 0:d.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);let o=await this._initialize(e);await o.initialized(),o.resetRedirect(),(0,a.aD)(),await this._originValidation(e);let c=function(e,t,r=null){return{type:t,eventId:r,urlResponse:null,sessionId:function(){let e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<20;r++){let n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:(0,a.aw)(e,"no-auth-event")}}(e,r,n);await g()._set(m(e),c);let h=await u(e,c,t),f=await function(e){let{cordova:t}=l();return new Promise(r=>{t.plugins.browsertab.isAvailable(n=>{let i=null;n?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,(0,a.av)()?"_blank":"_system","location=yes"),r(i)})})}(h);return d(e,o,f)}_isIframeWebStorageSupported(e,t){throw Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=c(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:r,handleOpenURL:n,BuildInfo:i}=l(),s=setTimeout(async()=>{await p(e),t.onEvent(b())},500),o=async r=>{clearTimeout(s);let n=await p(e),i=null;n&&(null==r?void 0:r.url)&&(i=function(e,t){var r,n;let i=function(e){let t=_(e),r=t.link?decodeURIComponent(t.link):void 0,n=_(r).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0,a=_(i).link;return a||i||n||r||e}(t);if(i.includes("/__/auth/callback")){let s=_(i),o=s.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(s.firebaseError)):null,l=null===(n=null===(r=null==o?void 0:o.code)||void 0===r?void 0:r.split("auth/"))||void 0===n?void 0:n[1],u=l?(0,a.aw)(l):null;return u?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}(n,r.url)),t.onEvent(i||b())};void 0!==r&&"function"==typeof r.subscribe&&r.subscribe(null,o);let u=`${i.packageName.toLowerCase()}://`;l().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(u)&&o({url:e}),"function"==typeof n)try{n(e)}catch(t){console.error(t)}}}};function b(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,a.aw)("no-auth-event")}}function y(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function w(e=(0,s.z$)()){return!!(("file:"===y()||"ionic:"===y()||"capacitor:"===y())&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function E(){try{let e=self.localStorage,t=a.aI();if(e){if(e.setItem(t,"1"),e.removeItem(t),function(e=(0,s.z$)()){return(0,s.w1)()&&(null==document?void 0:document.documentMode)===11||function(e=(0,s.z$)()){return/Edge\/\d+/.test(e)}(e)}())return(0,s.hl)();return!0}}catch(r){return I()&&(0,s.hl)()}return!1}function I(){return void 0!==r.g&&"WorkerGlobalScope"in r.g&&"importScripts"in r.g}function R(){return("http:"===y()||"https:"===y()||(0,s.ru)()||w())&&!((0,s.b$)()||(0,s.UG)())&&E()&&!I()}function S(){return w()&&"undefined"!=typeof document}async function A(){return!!S()&&new Promise(e=>{let t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let k={LOCAL:"local",NONE:"none",SESSION:"session"},C=a.ax,O="persistence";async function T(e){await e._initializationPromise;let t=P(),r=a.aA(O,e.config.apiKey,e.name);t&&t.setItem(r,e._getPersistence())}function P(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let x=a.ax;class L{constructor(){this.browserResolver=a.az(a.k),this.cordovaResolver=a.az(v),this.underlyingResolver=null,this._redirectPersistence=a.a,this._completeRedirectFn=a.aB,this._overrideRedirectResult=a.aC}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,n)}async _openRedirect(e,t,r,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return S()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return x(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;let e=await A();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function N(e){return e.unwrap()}function D(e){let{_tokenResponse:t}=e instanceof s.ZR?e.customData:e;if(!t)return null;if(!(e instanceof s.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return a.P.credentialFromResult(e);let r=t.providerId;if(!r||r===a.o.PASSWORD)return null;let n;switch(r){case a.o.GOOGLE:n=a.Q;break;case a.o.FACEBOOK:n=a.N;break;case a.o.GITHUB:n=a.T;break;case a.o.TWITTER:n=a.W;break;default:let{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:l,pendingToken:u,nonce:c}=t;if(!o&&!l&&!i&&!u)return null;if(u){if(r.startsWith("saml."))return a.aL._create(r,u);return a.J._fromParams({providerId:r,signInMethod:r,pendingToken:u,idToken:i,accessToken:o})}return new a.U(r).credential({idToken:i,accessToken:o,rawNonce:c})}return e instanceof s.ZR?n.credentialFromError(e):n.credentialFromResult(e)}function U(e,t){return t.catch(t=>{throw t instanceof s.ZR&&function(e,t){var r;let n=null===(r=t.customData)||void 0===r?void 0:r._tokenResponse;if((null==t?void 0:t.code)==="auth/multi-factor-auth-required"){let i=t;i.resolver=new M(e,a.an(e,t))}else if(n){let s=D(t),o=t;s&&(o.credential=s,o.tenantId=n.tenantId||void 0,o.email=n.email||void 0,o.phoneNumber=n.phoneNumber||void 0)}}(e,t),t}).then(e=>{var t;let r=e.operationType,n=e.user;return{operationType:r,credential:D(e),additionalUserInfo:a.al(e),user:z.getOrCreate(n)}})}async function B(e,t){let r=await t;return{verificationId:r.verificationId,confirm:t=>U(e,r.confirm(t))}}class M{constructor(e,t){var r;this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return U(N(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z{constructor(e){this._delegate=e,this.multiFactor=a.ao(e)}static getOrCreate(e){return z.USER_MAP.has(e)||z.USER_MAP.set(e,new z(e)),z.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return U(this.auth,a.Z(this._delegate,e))}async linkWithPhoneNumber(e,t){return B(this.auth,a.l(this._delegate,e,t))}async linkWithPopup(e){return U(this.auth,a.d(this._delegate,e,L))}async linkWithRedirect(e){return await T(a.aE(this.auth)),a.g(this._delegate,e,L)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return U(this.auth,a._(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return B(this.auth,a.r(this._delegate,e,t))}reauthenticateWithPopup(e){return U(this.auth,a.e(this._delegate,e,L))}async reauthenticateWithRedirect(e){return await T(a.aE(this.auth)),a.h(this._delegate,e,L)}sendEmailVerification(e){return a.ab(this._delegate,e)}async unlink(e){return await a.ak(this._delegate,e),this}updateEmail(e){return a.ag(this._delegate,e)}updatePassword(e){return a.ah(this._delegate,e)}updatePhoneNumber(e){return a.u(this._delegate,e)}updateProfile(e){return a.af(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return a.ac(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}z.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let j=a.ax;class F{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:r}=e.options;j(r,"invalid-api-key",{appName:e.name}),j(r,"invalid-api-key",{appName:e.name});let n="undefined"!=typeof window?L:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){let r=function(e,t){let r=P();if(!r)return[];let n=a.aA(O,e,t),i=r.getItem(n);switch(i){case k.NONE:return[a.L];case k.LOCAL:return[a.i,a.a];case k.SESSION:return[a.a];default:return[]}}(e,t);if("undefined"==typeof self||r.includes(a.i)||r.push(a.i),"undefined"!=typeof window)for(let n of[a.b,a.a])r.includes(n)||r.push(n);return r.includes(a.L)||r.push(a.L),r}(r,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(a.B),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?z.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){a.G(this._delegate,e,t)}applyActionCode(e){return a.a2(this._delegate,e)}checkActionCode(e){return a.a3(this._delegate,e)}confirmPasswordReset(e,t){return a.a1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return U(this._delegate,a.a5(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return a.aa(this._delegate,e)}isSignInWithEmailLink(e){return a.a8(this._delegate,e)}async getRedirectResult(){j(R(),this._delegate,"operation-not-supported-in-this-environment");let e=await a.j(this._delegate,L);return e?U(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){(0,a.aE)(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,r){let{next:n,error:i,complete:a}=H(e,t,r);return this._delegate.onAuthStateChanged(n,i,a)}onIdTokenChanged(e,t,r){let{next:n,error:i,complete:a}=H(e,t,r);return this._delegate.onIdTokenChanged(n,i,a)}sendSignInLinkToEmail(e,t){return a.a7(this._delegate,e,t)}sendPasswordResetEmail(e,t){return a.a0(this._delegate,e,t||void 0)}async setPersistence(e){!function(e,t){if(C(Object.values(k).includes(t),e,"invalid-persistence-type"),(0,s.b$)()){C(t!==k.SESSION,e,"unsupported-persistence-type");return}if((0,s.UG)()){C(t===k.NONE,e,"unsupported-persistence-type");return}if(I()){C(t===k.NONE||t===k.LOCAL&&(0,s.hl)(),e,"unsupported-persistence-type");return}C(t===k.NONE||E(),e,"unsupported-persistence-type")}(this._delegate,e);let t;switch(e){case k.SESSION:t=a.a;break;case k.LOCAL:let r=await a.az(a.i)._isAvailable();t=r?a.i:a.b;break;case k.NONE:t=a.L;break;default:return a.as("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return U(this._delegate,a.X(this._delegate))}signInWithCredential(e){return U(this._delegate,a.Y(this._delegate,e))}signInWithCustomToken(e){return U(this._delegate,a.$(this._delegate,e))}signInWithEmailAndPassword(e,t){return U(this._delegate,a.a6(this._delegate,e,t))}signInWithEmailLink(e,t){return U(this._delegate,a.a9(this._delegate,e,t))}signInWithPhoneNumber(e,t){return B(this._delegate,a.s(this._delegate,e,t))}async signInWithPopup(e){return j(R(),this._delegate,"operation-not-supported-in-this-environment"),U(this._delegate,a.c(this._delegate,e,L))}async signInWithRedirect(e){return j(R(),this._delegate,"operation-not-supported-in-this-environment"),await T(this._delegate),a.f(this._delegate,e,L)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return a.a4(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function H(e,t,r){let n=e;"function"!=typeof e&&({next:n,error:t,complete:r}=e);let i=n,a=e=>i(e&&z.getOrCreate(e));return{next:a,error:t,complete:r}}F.Persistence=k;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ${constructor(){this.providerId="phone",this._delegate=new a.P(N(i.Z.auth()))}static credential(e,t){return a.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}$.PHONE_SIGN_IN_METHOD=a.P.PHONE_SIGN_IN_METHOD,$.PROVIDER_ID=a.P.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let W=a.ax;(n=i.Z).INTERNAL.registerComponent(new o.wA("auth-compat",e=>{let t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new F(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:a.A.EMAIL_SIGNIN,PASSWORD_RESET:a.A.PASSWORD_RESET,RECOVER_EMAIL:a.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:a.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:a.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:a.A.VERIFY_EMAIL}},EmailAuthProvider:a.M,FacebookAuthProvider:a.N,GithubAuthProvider:a.T,GoogleAuthProvider:a.Q,OAuthProvider:a.U,SAMLAuthProvider:a.V,PhoneAuthProvider:$,PhoneMultiFactorGenerator:a.m,RecaptchaVerifier:class e{constructor(e,t,r=i.Z.app()){var n;W(null===(n=r.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new a.R(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}},TwitterAuthProvider:a.W,Auth:F,AuthCredential:a.H,Error:s.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion("@firebase/auth-compat","0.3.1")},42708:function(e,t,r){"use strict";var n=r(74651),i=r(22090),a=r(20396);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class s{constructor(e,t,r){this._delegate=e,this.task=t,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class o{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new s(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new s(t,this,this._ref))},t)}on(e,t,r,n){let i;return t&&(i="function"==typeof t?e=>t(new s(e,this,this._ref)):{next:t.next?e=>t.next(new s(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)}}class l{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new u(e,this._service))}get items(){return this._delegate.items.map(e=>new u(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class u{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){let t=(0,i.g6)(this._delegate,e);return new u(t,this.storage)}get root(){return new u(this._delegate.root,this.storage)}get parent(){let e=this._delegate.parent;return null==e?null:new u(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new o((0,i.B0)(this._delegate,e,t),this)}putString(e,t=i.bm.RAW,r){this._throwIfRoot("putString");let n=(0,i.qm)(t,e),a=Object.assign({},r);return null==a.contentType&&null!=n.contentType&&(a.contentType=n.contentType),new o(new i.IX(this._delegate,new i.UJ(n.data,!0),a),this)}listAll(){return(0,i.aF)(this._delegate).then(e=>new l(e,this.storage))}list(e){return(0,i.pb)(this._delegate,e||void 0).then(e=>new l(e,this.storage))}getMetadata(){return(0,i.sd)(this._delegate)}updateMetadata(e){return(0,i.Ym)(this._delegate,e)}getDownloadURL(){return(0,i.Jt)(this._delegate)}delete(){return this._throwIfRoot("delete"),(0,i.oq)(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw(0,i.y4)(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(d(e))throw(0,i.gH)("ref() expected a child path but got a URL, use refFromURL instead.");return new u((0,i.iH)(this._delegate,e),this)}refFromURL(e){if(!d(e))throw(0,i.gH)("refFromURL() expected a full URL but got a child path, use ref() instead.");try{i.gE.makeFromUrl(e,this._delegate.host)}catch(t){throw(0,i.gH)("refFromUrl() expected a valid full URL but got an invalid one.")}return new u((0,i.iH)(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,r={}){(0,i.a1)(this._delegate,e,t,r)}}function d(e){return/^[A-Za-z]+:\/\//.test(e)}function h(e,{instanceIdentifier:t}){let r=e.getProvider("app-compat").getImmediate(),n=e.getProvider("storage").getImmediate({identifier:t}),i=new c(r,n);return i}!function(e){let t={TaskState:i.$Y,TaskEvent:i.FN,StringFormat:i.bm,Storage:c,Reference:u};e.INTERNAL.registerComponent(new a.wA("storage-compat",h,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.2.1")}(n.Z)},38957:function(e,t,r){"use strict";r.d(t,{B0:function(){return n.B0},Jt:function(){return n.Jt},cF:function(){return n.cF},iH:function(){return n.iH}});var n=r(22090)},85674:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(82684);let i=n.createContext({});function a({count:e=1,wrapper:t,className:r,containerClassName:a,containerTestId:s,circle:o=!1,style:l,...u}){var c,d,h;let f=n.useContext(i),p={...u};for(let[g,m]of Object.entries(u))void 0===m&&delete p[g];let _={...f,...p,circle:o},v={...l,...function({baseColor:e,highlightColor:t,width:r,height:n,borderRadius:i,circle:a,direction:s,duration:o,enableAnimation:l=!0}){let u={};return"rtl"===s&&(u["--animation-direction"]="reverse"),"number"==typeof o&&(u["--animation-duration"]=`${o}s`),l||(u["--pseudo-element-display"]="none"),("string"==typeof r||"number"==typeof r)&&(u.width=r),("string"==typeof n||"number"==typeof n)&&(u.height=n),("string"==typeof i||"number"==typeof i)&&(u.borderRadius=i),a&&(u.borderRadius="50%"),void 0!==e&&(u["--base-color"]=e),void 0!==t&&(u["--highlight-color"]=t),u}(_)},b="react-loading-skeleton";r&&(b+=` ${r}`);let y=null!==(c=_.inline)&&void 0!==c&&c,w=[],E=Math.ceil(e);for(let I=0;I<E;I++){let R=v;if(E>e&&I===E-1){let S=null!==(d=R.width)&&void 0!==d?d:"100%",A=e%1,k="number"==typeof S?S*A:`calc(${S} * ${A})`;R={...R,width:k}}let C=n.createElement("span",{className:b,style:R,key:I},"‌");y?w.push(C):w.push(n.createElement(n.Fragment,{key:I},C,n.createElement("br",null)))}return n.createElement("span",{className:a,"data-testid":s,"aria-live":"polite","aria-busy":null===(h=_.enableAnimation)||void 0===h||h},t?w.map((e,r)=>n.createElement(t,{key:r},e)):w)}}}]);