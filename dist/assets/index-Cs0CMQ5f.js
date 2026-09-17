(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const l of u.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=t(a);fetch(a.href,u)}})();function Hs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qu={exports:{}},wo={},Gu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function yk(){if(om)return Ce;om=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=m&&D[m]||D["@@iterator"],typeof D=="function"?D:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function E(D,$,A){this.props=D,this.context=$,this.refs=T,this.updater=A||v}E.prototype.isReactComponent={},E.prototype.setState=function(D,$){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,$,"setState")},E.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=E.prototype;function _(D,$,A){this.props=D,this.context=$,this.refs=T,this.updater=A||v}var j=_.prototype=new S;j.constructor=_,b(j,E.prototype),j.isPureReactComponent=!0;var V=Array.isArray,B=Object.prototype.hasOwnProperty,M={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function U(D,$,A){var ge,ke={},pe=null,Ie=null;if($!=null)for(ge in $.ref!==void 0&&(Ie=$.ref),$.key!==void 0&&(pe=""+$.key),$)B.call($,ge)&&!X.hasOwnProperty(ge)&&(ke[ge]=$[ge]);var Se=arguments.length-2;if(Se===1)ke.children=A;else if(1<Se){for(var Ne=Array(Se),Xe=0;Xe<Se;Xe++)Ne[Xe]=arguments[Xe+2];ke.children=Ne}if(D&&D.defaultProps)for(ge in Se=D.defaultProps,Se)ke[ge]===void 0&&(ke[ge]=Se[ge]);return{$$typeof:e,type:D,key:pe,ref:Ie,props:ke,_owner:M.current}}function re(D,$){return{$$typeof:e,type:D.type,key:$,ref:D.ref,props:D.props,_owner:D._owner}}function O(D){return typeof D=="object"&&D!==null&&D.$$typeof===e}function ee(D){var $={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(A){return $[A]})}var ne=/\/+/g;function ye(D,$){return typeof D=="object"&&D!==null&&D.key!=null?ee(""+D.key):$.toString(36)}function ie(D,$,A,ge,ke){var pe=typeof D;(pe==="undefined"||pe==="boolean")&&(D=null);var Ie=!1;if(D===null)Ie=!0;else switch(pe){case"string":case"number":Ie=!0;break;case"object":switch(D.$$typeof){case e:case n:Ie=!0}}if(Ie)return Ie=D,ke=ke(Ie),D=ge===""?"."+ye(Ie,0):ge,V(ke)?(A="",D!=null&&(A=D.replace(ne,"$&/")+"/"),ie(ke,$,A,"",function(Xe){return Xe})):ke!=null&&(O(ke)&&(ke=re(ke,A+(!ke.key||Ie&&Ie.key===ke.key?"":(""+ke.key).replace(ne,"$&/")+"/")+D)),$.push(ke)),1;if(Ie=0,ge=ge===""?".":ge+":",V(D))for(var Se=0;Se<D.length;Se++){pe=D[Se];var Ne=ge+ye(pe,Se);Ie+=ie(pe,$,A,Ne,ke)}else if(Ne=x(D),typeof Ne=="function")for(D=Ne.call(D),Se=0;!(pe=D.next()).done;)pe=pe.value,Ne=ge+ye(pe,Se++),Ie+=ie(pe,$,A,Ne,ke);else if(pe==="object")throw $=String(D),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Ie}function J(D,$,A){if(D==null)return D;var ge=[],ke=0;return ie(D,ge,"","",function(pe){return $.call(A,pe,ke++)}),ge}function be(D){if(D._status===-1){var $=D._result;$=$(),$.then(function(A){(D._status===0||D._status===-1)&&(D._status=1,D._result=A)},function(A){(D._status===0||D._status===-1)&&(D._status=2,D._result=A)}),D._status===-1&&(D._status=0,D._result=$)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},K={transition:null},se={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:K,ReactCurrentOwner:M};function C(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:J,forEach:function(D,$,A){J(D,function(){$.apply(this,arguments)},A)},count:function(D){var $=0;return J(D,function(){$++}),$},toArray:function(D){return J(D,function($){return $})||[]},only:function(D){if(!O(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=E,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=_,Ce.StrictMode=o,Ce.Suspense=f,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Ce.act=C,Ce.cloneElement=function(D,$,A){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var ge=b({},D.props),ke=D.key,pe=D.ref,Ie=D._owner;if($!=null){if($.ref!==void 0&&(pe=$.ref,Ie=M.current),$.key!==void 0&&(ke=""+$.key),D.type&&D.type.defaultProps)var Se=D.type.defaultProps;for(Ne in $)B.call($,Ne)&&!X.hasOwnProperty(Ne)&&(ge[Ne]=$[Ne]===void 0&&Se!==void 0?Se[Ne]:$[Ne])}var Ne=arguments.length-2;if(Ne===1)ge.children=A;else if(1<Ne){Se=Array(Ne);for(var Xe=0;Xe<Ne;Xe++)Se[Xe]=arguments[Xe+2];ge.children=Se}return{$$typeof:e,type:D.type,key:ke,ref:pe,props:ge,_owner:Ie}},Ce.createContext=function(D){return D={$$typeof:l,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},Ce.createElement=U,Ce.createFactory=function(D){var $=U.bind(null,D);return $.type=D,$},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:c,render:D}},Ce.isValidElement=O,Ce.lazy=function(D){return{$$typeof:p,_payload:{_status:-1,_result:D},_init:be}},Ce.memo=function(D,$){return{$$typeof:h,type:D,compare:$===void 0?null:$}},Ce.startTransition=function(D){var $=K.transition;K.transition={};try{D()}finally{K.transition=$}},Ce.unstable_act=C,Ce.useCallback=function(D,$){return ce.current.useCallback(D,$)},Ce.useContext=function(D){return ce.current.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},Ce.useEffect=function(D,$){return ce.current.useEffect(D,$)},Ce.useId=function(){return ce.current.useId()},Ce.useImperativeHandle=function(D,$,A){return ce.current.useImperativeHandle(D,$,A)},Ce.useInsertionEffect=function(D,$){return ce.current.useInsertionEffect(D,$)},Ce.useLayoutEffect=function(D,$){return ce.current.useLayoutEffect(D,$)},Ce.useMemo=function(D,$){return ce.current.useMemo(D,$)},Ce.useReducer=function(D,$,A){return ce.current.useReducer(D,$,A)},Ce.useRef=function(D){return ce.current.useRef(D)},Ce.useState=function(D){return ce.current.useState(D)},Ce.useSyncExternalStore=function(D,$,A){return ce.current.useSyncExternalStore(D,$,A)},Ce.useTransition=function(){return ce.current.useTransition()},Ce.version="18.3.1",Ce}var am;function hd(){return am||(am=1,Gu.exports=yk()),Gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function xk(){if(sm)return wo;sm=1;var e=hd(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,h){var p,m={},x=null,v=null;h!==void 0&&(x=""+h),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(v=f.ref);for(p in f)o.call(f,p)&&!u.hasOwnProperty(p)&&(m[p]=f[p]);if(c&&c.defaultProps)for(p in f=c.defaultProps,f)m[p]===void 0&&(m[p]=f[p]);return{$$typeof:n,type:c,key:x,ref:v,props:m,_owner:a.current}}return wo.Fragment=t,wo.jsx=l,wo.jsxs=l,wo}var lm;function vk(){return lm||(lm=1,qu.exports=xk()),qu.exports}var k=vk(),P=hd();const wk=Hs(P);var ms={},Ku={exports:{}},Pn={},Yu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function bk(){return um||(um=1,(function(e){function n(K,se){var C=K.length;K.push(se);e:for(;0<C;){var D=C-1>>>1,$=K[D];if(0<a($,se))K[D]=se,K[C]=$,C=D;else break e}}function t(K){return K.length===0?null:K[0]}function o(K){if(K.length===0)return null;var se=K[0],C=K.pop();if(C!==se){K[0]=C;e:for(var D=0,$=K.length,A=$>>>1;D<A;){var ge=2*(D+1)-1,ke=K[ge],pe=ge+1,Ie=K[pe];if(0>a(ke,C))pe<$&&0>a(Ie,ke)?(K[D]=Ie,K[pe]=C,D=pe):(K[D]=ke,K[ge]=C,D=ge);else if(pe<$&&0>a(Ie,C))K[D]=Ie,K[pe]=C,D=pe;else break e}}return se}function a(K,se){var C=K.sortIndex-se.sortIndex;return C!==0?C:K.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var f=[],h=[],p=1,m=null,x=3,v=!1,b=!1,T=!1,E=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(K){for(var se=t(h);se!==null;){if(se.callback===null)o(h);else if(se.startTime<=K)o(h),se.sortIndex=se.expirationTime,n(f,se);else break;se=t(h)}}function V(K){if(T=!1,j(K),!b)if(t(f)!==null)b=!0,be(B);else{var se=t(h);se!==null&&ce(V,se.startTime-K)}}function B(K,se){b=!1,T&&(T=!1,S(U),U=-1),v=!0;var C=x;try{for(j(se),m=t(f);m!==null&&(!(m.expirationTime>se)||K&&!ee());){var D=m.callback;if(typeof D=="function"){m.callback=null,x=m.priorityLevel;var $=D(m.expirationTime<=se);se=e.unstable_now(),typeof $=="function"?m.callback=$:m===t(f)&&o(f),j(se)}else o(f);m=t(f)}if(m!==null)var A=!0;else{var ge=t(h);ge!==null&&ce(V,ge.startTime-se),A=!1}return A}finally{m=null,x=C,v=!1}}var M=!1,X=null,U=-1,re=5,O=-1;function ee(){return!(e.unstable_now()-O<re)}function ne(){if(X!==null){var K=e.unstable_now();O=K;var se=!0;try{se=X(!0,K)}finally{se?ye():(M=!1,X=null)}}else M=!1}var ye;if(typeof _=="function")ye=function(){_(ne)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,J=ie.port2;ie.port1.onmessage=ne,ye=function(){J.postMessage(null)}}else ye=function(){E(ne,0)};function be(K){X=K,M||(M=!0,ye())}function ce(K,se){U=E(function(){K(e.unstable_now())},se)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,be(B))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(f)},e.unstable_next=function(K){switch(x){case 1:case 2:case 3:var se=3;break;default:se=x}var C=x;x=se;try{return K()}finally{x=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var C=x;x=K;try{return se()}finally{x=C}},e.unstable_scheduleCallback=function(K,se,C){var D=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?D+C:D):C=D,K){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=C+$,K={id:p++,callback:se,priorityLevel:K,startTime:C,expirationTime:$,sortIndex:-1},C>D?(K.sortIndex=C,n(h,K),t(f)===null&&K===t(h)&&(T?(S(U),U=-1):T=!0,ce(V,C-D))):(K.sortIndex=$,n(f,K),b||v||(b=!0,be(B))),K},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(K){var se=x;return function(){var C=x;x=se;try{return K.apply(this,arguments)}finally{x=C}}}})(Ju)),Ju}var cm;function kk(){return cm||(cm=1,Yu.exports=bk()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Sk(){if(dm)return Pn;dm=1;var e=hd(),n=kk();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function u(r,i){l(r,i),l(r+"Capture",i)}function l(r,i){for(a[r]=i,r=0;r<i.length;r++)o.add(i[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function x(r){return f.call(m,r)?!0:f.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function v(r,i,s,d){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return d?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,i,s,d){if(i===null||typeof i>"u"||v(r,i,s,d))return!0;if(d)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(r,i,s,d,g,y,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=s,this.propertyName=r,this.type=i,this.sanitizeURL=y,this.removeEmptyString=w}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){E[r]=new T(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];E[i]=new T(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){E[r]=new T(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){E[r]=new T(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){E[r]=new T(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){E[r]=new T(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){E[r]=new T(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){E[r]=new T(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){E[r]=new T(r,5,!1,r.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function _(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(S,_);E[i]=new T(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(S,_);E[i]=new T(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(S,_);E[i]=new T(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){E[r]=new T(r,1,!1,r.toLowerCase(),null,!1,!1)}),E.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){E[r]=new T(r,1,!1,r.toLowerCase(),null,!0,!0)});function j(r,i,s,d){var g=E.hasOwnProperty(i)?E[i]:null;(g!==null?g.type!==0:d||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,s,g,d)&&(s=null),d||g===null?x(i)&&(s===null?r.removeAttribute(i):r.setAttribute(i,""+s)):g.mustUseProperty?r[g.propertyName]=s===null?g.type===3?!1:"":s:(i=g.attributeName,d=g.attributeNamespace,s===null?r.removeAttribute(i):(g=g.type,s=g===3||g===4&&s===!0?"":""+s,d?r.setAttributeNS(d,i,s):r.setAttribute(i,s))))}var V=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),M=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),ee=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),K=Symbol.iterator;function se(r){return r===null||typeof r!="object"?null:(r=K&&r[K]||r["@@iterator"],typeof r=="function"?r:null)}var C=Object.assign,D;function $(r){if(D===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+r}var A=!1;function ge(r,i){if(!r||A)return"";A=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var d=z}Reflect.construct(r,[],i)}else{try{i.call()}catch(z){d=z}r.call(i.prototype)}else{try{throw Error()}catch(z){d=z}r()}}catch(z){if(z&&d&&typeof z.stack=="string"){for(var g=z.stack.split(`
`),y=d.stack.split(`
`),w=g.length-1,R=y.length-1;1<=w&&0<=R&&g[w]!==y[R];)R--;for(;1<=w&&0<=R;w--,R--)if(g[w]!==y[R]){if(w!==1||R!==1)do if(w--,R--,0>R||g[w]!==y[R]){var I=`
`+g[w].replace(" at new "," at ");return r.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",r.displayName)),I}while(1<=w&&0<=R);break}}}finally{A=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?$(r):""}function ke(r){switch(r.tag){case 5:return $(r.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return r=ge(r.type,!1),r;case 11:return r=ge(r.type.render,!1),r;case 1:return r=ge(r.type,!0),r;default:return""}}function pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case X:return"Fragment";case M:return"Portal";case re:return"Profiler";case U:return"StrictMode";case ye:return"Suspense";case ie:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ee:return(r.displayName||"Context")+".Consumer";case O:return(r._context.displayName||"Context")+".Provider";case ne:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case J:return i=r.displayName||null,i!==null?i:pe(r.type)||"Memo";case be:i=r._payload,r=r._init;try{return pe(r(i))}catch{}}return null}function Ie(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(i);case 8:return i===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ne(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(r){var i=Ne(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),d=""+r[i];if(!r.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var g=s.get,y=s.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return g.call(this)},set:function(w){d=""+w,y.call(this,w)}}),Object.defineProperty(r,i,{enumerable:s.enumerable}),{getValue:function(){return d},setValue:function(w){d=""+w},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function wt(r){r._valueTracker||(r._valueTracker=Xe(r))}function ra(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var s=i.getValue(),d="";return r&&(d=Ne(r)?r.checked?"true":"false":r.value),r=d,r!==s?(i.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ni(r,i){var s=i.checked;return C({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??r._wrapperState.initialChecked})}function Mi(r,i){var s=i.defaultValue==null?"":i.defaultValue,d=i.checked!=null?i.checked:i.defaultChecked;s=Se(i.value!=null?i.value:s),r._wrapperState={initialChecked:d,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Di(r,i){i=i.checked,i!=null&&j(r,"checked",i,!1)}function Vr(r,i){Di(r,i);var s=Se(i.value),d=i.type;if(s!=null)d==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(d==="submit"||d==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?Wr(r,i.type,s):i.hasOwnProperty("defaultValue")&&Wr(r,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function ia(r,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var d=i.type;if(!(d!=="submit"&&d!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,s||i===r.value||(r.value=i),r.defaultValue=i}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function Wr(r,i,s){(i!=="number"||Br(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var Ft=Array.isArray;function zt(r,i,s,d){if(r=r.options,i){i={};for(var g=0;g<s.length;g++)i["$"+s[g]]=!0;for(s=0;s<r.length;s++)g=i.hasOwnProperty("$"+r[s].value),r[s].selected!==g&&(r[s].selected=g),g&&d&&(r[s].defaultSelected=!0)}else{for(s=""+Se(s),i=null,g=0;g<r.length;g++){if(r[g].value===s){r[g].selected=!0,d&&(r[g].defaultSelected=!0);return}i!==null||r[g].disabled||(i=r[g])}i!==null&&(i.selected=!0)}}function Li(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return C({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function oa(r,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(t(92));if(Ft(s)){if(1<s.length)throw Error(t(93));s=s[0]}i=s}i==null&&(i=""),s=i}r._wrapperState={initialValue:Se(s)}}function aa(r,i){var s=Se(i.value),d=Se(i.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),i.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),d!=null&&(r.defaultValue=""+d)}function sa(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function W(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Z(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?W(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var xe,Te=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,d,g){MSApp.execUnsafeLocalFunction(function(){return r(i,s,d,g)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(xe=xe||document.createElement("div"),xe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=xe.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Ae(r,i){if(i){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=i;return}}r.textContent=i}var an={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bt=["Webkit","ms","Moz","O"];Object.keys(an).forEach(function(r){bt.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),an[i]=an[r]})});function zn(r,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||an.hasOwnProperty(r)&&an[r]?(""+i).trim():i+"px"}function Bt(r,i){r=r.style;for(var s in i)if(i.hasOwnProperty(s)){var d=s.indexOf("--")===0,g=zn(s,i[s],d);s==="float"&&(s="cssFloat"),d?r.setProperty(s,g):r[s]=g}}var hr=C({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sn(r,i){if(i){if(hr[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jn=null;function sl(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ll=null,Ur=null,$r=null;function kf(r){if(r=io(r)){if(typeof ll!="function")throw Error(t(280));var i=r.stateNode;i&&(i=ja(i),ll(r.stateNode,r.type,i))}}function Sf(r){Ur?$r?$r.push(r):$r=[r]:Ur=r}function Tf(){if(Ur){var r=Ur,i=$r;if($r=Ur=null,kf(r),i)for(r=0;r<i.length;r++)kf(i[r])}}function Cf(r,i){return r(i)}function Ef(){}var ul=!1;function Pf(r,i,s){if(ul)return r(i,s);ul=!0;try{return Cf(r,i,s)}finally{ul=!1,(Ur!==null||$r!==null)&&(Ef(),Tf())}}function Oi(r,i){var s=r.stateNode;if(s===null)return null;var d=ja(s);if(d===null)return null;s=d[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(r=r.type,d=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!d;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(t(231,i,typeof s));return s}var cl=!1;if(c)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{cl=!1}function Sw(r,i,s,d,g,y,w,R,I){var z=Array.prototype.slice.call(arguments,3);try{i.apply(s,z)}catch(q){this.onError(q)}}var zi=!1,la=null,ua=!1,dl=null,Tw={onError:function(r){zi=!0,la=r}};function Cw(r,i,s,d,g,y,w,R,I){zi=!1,la=null,Sw.apply(Tw,arguments)}function Ew(r,i,s,d,g,y,w,R,I){if(Cw.apply(this,arguments),zi){if(zi){var z=la;zi=!1,la=null}else throw Error(t(198));ua||(ua=!0,dl=z)}}function pr(r){var i=r,s=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(s=i.return),r=i.return;while(r)}return i.tag===3?s:null}function Rf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Af(r){if(pr(r)!==r)throw Error(t(188))}function Pw(r){var i=r.alternate;if(!i){if(i=pr(r),i===null)throw Error(t(188));return i!==r?null:r}for(var s=r,d=i;;){var g=s.return;if(g===null)break;var y=g.alternate;if(y===null){if(d=g.return,d!==null){s=d;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===s)return Af(g),r;if(y===d)return Af(g),i;y=y.sibling}throw Error(t(188))}if(s.return!==d.return)s=g,d=y;else{for(var w=!1,R=g.child;R;){if(R===s){w=!0,s=g,d=y;break}if(R===d){w=!0,d=g,s=y;break}R=R.sibling}if(!w){for(R=y.child;R;){if(R===s){w=!0,s=y,d=g;break}if(R===d){w=!0,d=y,s=g;break}R=R.sibling}if(!w)throw Error(t(189))}}if(s.alternate!==d)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?r:i}function jf(r){return r=Pw(r),r!==null?If(r):null}function If(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=If(r);if(i!==null)return i;r=r.sibling}return null}var _f=n.unstable_scheduleCallback,Nf=n.unstable_cancelCallback,Rw=n.unstable_shouldYield,Aw=n.unstable_requestPaint,Ke=n.unstable_now,jw=n.unstable_getCurrentPriorityLevel,fl=n.unstable_ImmediatePriority,Mf=n.unstable_UserBlockingPriority,ca=n.unstable_NormalPriority,Iw=n.unstable_LowPriority,Df=n.unstable_IdlePriority,da=null,lt=null;function _w(r){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(da,r,void 0,(r.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:Dw,Nw=Math.log,Mw=Math.LN2;function Dw(r){return r>>>=0,r===0?32:31-(Nw(r)/Mw|0)|0}var fa=64,ha=4194304;function Bi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function pa(r,i){var s=r.pendingLanes;if(s===0)return 0;var d=0,g=r.suspendedLanes,y=r.pingedLanes,w=s&268435455;if(w!==0){var R=w&~g;R!==0?d=Bi(R):(y&=w,y!==0&&(d=Bi(y)))}else w=s&~g,w!==0?d=Bi(w):y!==0&&(d=Bi(y));if(d===0)return 0;if(i!==0&&i!==d&&(i&g)===0&&(g=d&-d,y=i&-i,g>=y||g===16&&(y&4194240)!==0))return i;if((d&4)!==0&&(d|=s&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=d;0<i;)s=31-Jn(i),g=1<<s,d|=r[s],i&=~g;return d}function Lw(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ow(r,i){for(var s=r.suspendedLanes,d=r.pingedLanes,g=r.expirationTimes,y=r.pendingLanes;0<y;){var w=31-Jn(y),R=1<<w,I=g[w];I===-1?((R&s)===0||(R&d)!==0)&&(g[w]=Lw(R,i)):I<=i&&(r.expiredLanes|=R),y&=~R}}function hl(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Lf(){var r=fa;return fa<<=1,(fa&4194240)===0&&(fa=64),r}function pl(r){for(var i=[],s=0;31>s;s++)i.push(r);return i}function Vi(r,i,s){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Jn(i),r[i]=s}function Fw(r,i){var s=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var d=r.eventTimes;for(r=r.expirationTimes;0<s;){var g=31-Jn(s),y=1<<g;i[g]=0,d[g]=-1,r[g]=-1,s&=~y}}function ml(r,i){var s=r.entangledLanes|=i;for(r=r.entanglements;s;){var d=31-Jn(s),g=1<<d;g&i|r[d]&i&&(r[d]|=i),s&=~g}}var Me=0;function Of(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Ff,gl,zf,Bf,Vf,yl=!1,ma=[],Vt=null,Wt=null,Ut=null,Wi=new Map,Ui=new Map,$t=[],zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(r,i){switch(r){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Wi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(i.pointerId)}}function $i(r,i,s,d,g,y){return r===null||r.nativeEvent!==y?(r={blockedOn:i,domEventName:s,eventSystemFlags:d,nativeEvent:y,targetContainers:[g]},i!==null&&(i=io(i),i!==null&&gl(i)),r):(r.eventSystemFlags|=d,i=r.targetContainers,g!==null&&i.indexOf(g)===-1&&i.push(g),r)}function Bw(r,i,s,d,g){switch(i){case"focusin":return Vt=$i(Vt,r,i,s,d,g),!0;case"dragenter":return Wt=$i(Wt,r,i,s,d,g),!0;case"mouseover":return Ut=$i(Ut,r,i,s,d,g),!0;case"pointerover":var y=g.pointerId;return Wi.set(y,$i(Wi.get(y)||null,r,i,s,d,g)),!0;case"gotpointercapture":return y=g.pointerId,Ui.set(y,$i(Ui.get(y)||null,r,i,s,d,g)),!0}return!1}function Uf(r){var i=mr(r.target);if(i!==null){var s=pr(i);if(s!==null){if(i=s.tag,i===13){if(i=Rf(s),i!==null){r.blockedOn=i,Vf(r.priority,function(){zf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ga(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var s=vl(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var d=new s.constructor(s.type,s);jn=d,s.target.dispatchEvent(d),jn=null}else return i=io(s),i!==null&&gl(i),r.blockedOn=s,!1;i.shift()}return!0}function $f(r,i,s){ga(r)&&s.delete(i)}function Vw(){yl=!1,Vt!==null&&ga(Vt)&&(Vt=null),Wt!==null&&ga(Wt)&&(Wt=null),Ut!==null&&ga(Ut)&&(Ut=null),Wi.forEach($f),Ui.forEach($f)}function Hi(r,i){r.blockedOn===i&&(r.blockedOn=null,yl||(yl=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Vw)))}function qi(r){function i(g){return Hi(g,r)}if(0<ma.length){Hi(ma[0],r);for(var s=1;s<ma.length;s++){var d=ma[s];d.blockedOn===r&&(d.blockedOn=null)}}for(Vt!==null&&Hi(Vt,r),Wt!==null&&Hi(Wt,r),Ut!==null&&Hi(Ut,r),Wi.forEach(i),Ui.forEach(i),s=0;s<$t.length;s++)d=$t[s],d.blockedOn===r&&(d.blockedOn=null);for(;0<$t.length&&(s=$t[0],s.blockedOn===null);)Uf(s),s.blockedOn===null&&$t.shift()}var Hr=V.ReactCurrentBatchConfig,ya=!0;function Ww(r,i,s,d){var g=Me,y=Hr.transition;Hr.transition=null;try{Me=1,xl(r,i,s,d)}finally{Me=g,Hr.transition=y}}function Uw(r,i,s,d){var g=Me,y=Hr.transition;Hr.transition=null;try{Me=4,xl(r,i,s,d)}finally{Me=g,Hr.transition=y}}function xl(r,i,s,d){if(ya){var g=vl(r,i,s,d);if(g===null)Ll(r,i,d,xa,s),Wf(r,d);else if(Bw(g,r,i,s,d))d.stopPropagation();else if(Wf(r,d),i&4&&-1<zw.indexOf(r)){for(;g!==null;){var y=io(g);if(y!==null&&Ff(y),y=vl(r,i,s,d),y===null&&Ll(r,i,d,xa,s),y===g)break;g=y}g!==null&&d.stopPropagation()}else Ll(r,i,d,null,s)}}var xa=null;function vl(r,i,s,d){if(xa=null,r=sl(d),r=mr(r),r!==null)if(i=pr(r),i===null)r=null;else if(s=i.tag,s===13){if(r=Rf(i),r!==null)return r;r=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return xa=r,null}function Hf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jw()){case fl:return 1;case Mf:return 4;case ca:case Iw:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Ht=null,wl=null,va=null;function qf(){if(va)return va;var r,i=wl,s=i.length,d,g="value"in Ht?Ht.value:Ht.textContent,y=g.length;for(r=0;r<s&&i[r]===g[r];r++);var w=s-r;for(d=1;d<=w&&i[s-d]===g[y-d];d++);return va=g.slice(r,1<d?1-d:void 0)}function wa(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function ba(){return!0}function Gf(){return!1}function In(r){function i(s,d,g,y,w){this._reactName=s,this._targetInst=g,this.type=d,this.nativeEvent=y,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(s=r[R],this[R]=s?s(y):y[R]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?ba:Gf,this.isPropagationStopped=Gf,this}return C(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),i}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=In(qr),Gi=C({},qr,{view:0,detail:0}),$w=In(Gi),kl,Sl,Ki,ka=C({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ki&&(Ki&&r.type==="mousemove"?(kl=r.screenX-Ki.screenX,Sl=r.screenY-Ki.screenY):Sl=kl=0,Ki=r),kl)},movementY:function(r){return"movementY"in r?r.movementY:Sl}}),Kf=In(ka),Hw=C({},ka,{dataTransfer:0}),qw=In(Hw),Gw=C({},Gi,{relatedTarget:0}),Tl=In(Gw),Kw=C({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yw=In(Kw),Jw=C({},qr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xw=In(Jw),Qw=C({},qr,{data:0}),Yf=In(Qw),Zw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tb(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=nb[r])?!!i[r]:!1}function Cl(){return tb}var rb=C({},Gi,{key:function(r){if(r.key){var i=Zw[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=wa(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?eb[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(r){return r.type==="keypress"?wa(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?wa(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),ib=In(rb),ob=C({},ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=In(ob),ab=C({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),sb=In(ab),lb=C({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ub=In(lb),cb=C({},ka,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),db=In(cb),fb=[9,13,27,32],El=c&&"CompositionEvent"in window,Yi=null;c&&"documentMode"in document&&(Yi=document.documentMode);var hb=c&&"TextEvent"in window&&!Yi,Xf=c&&(!El||Yi&&8<Yi&&11>=Yi),Qf=" ",Zf=!1;function eh(r,i){switch(r){case"keyup":return fb.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Gr=!1;function pb(r,i){switch(r){case"compositionend":return nh(i);case"keypress":return i.which!==32?null:(Zf=!0,Qf);case"textInput":return r=i.data,r===Qf&&Zf?null:r;default:return null}}function mb(r,i){if(Gr)return r==="compositionend"||!El&&eh(r,i)?(r=qf(),va=wl=Ht=null,Gr=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function th(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!gb[r.type]:i==="textarea"}function rh(r,i,s,d){Sf(d),i=Pa(i,"onChange"),0<i.length&&(s=new bl("onChange","change",null,s,d),r.push({event:s,listeners:i}))}var Ji=null,Xi=null;function yb(r){bh(r,0)}function Sa(r){var i=Qr(r);if(ra(i))return r}function xb(r,i){if(r==="change")return i}var ih=!1;if(c){var Pl;if(c){var Rl="oninput"in document;if(!Rl){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Rl=typeof oh.oninput=="function"}Pl=Rl}else Pl=!1;ih=Pl&&(!document.documentMode||9<document.documentMode)}function ah(){Ji&&(Ji.detachEvent("onpropertychange",sh),Xi=Ji=null)}function sh(r){if(r.propertyName==="value"&&Sa(Xi)){var i=[];rh(i,Xi,r,sl(r)),Pf(yb,i)}}function vb(r,i,s){r==="focusin"?(ah(),Ji=i,Xi=s,Ji.attachEvent("onpropertychange",sh)):r==="focusout"&&ah()}function wb(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Sa(Xi)}function bb(r,i){if(r==="click")return Sa(i)}function kb(r,i){if(r==="input"||r==="change")return Sa(i)}function Sb(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Xn=typeof Object.is=="function"?Object.is:Sb;function Qi(r,i){if(Xn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var s=Object.keys(r),d=Object.keys(i);if(s.length!==d.length)return!1;for(d=0;d<s.length;d++){var g=s[d];if(!f.call(i,g)||!Xn(r[g],i[g]))return!1}return!0}function lh(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function uh(r,i){var s=lh(r);r=0;for(var d;s;){if(s.nodeType===3){if(d=r+s.textContent.length,r<=i&&d>=i)return{node:s,offset:i-r};r=d}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=lh(s)}}function ch(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?ch(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function dh(){for(var r=window,i=Br();i instanceof r.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)r=i.contentWindow;else break;i=Br(r.document)}return i}function Al(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function Tb(r){var i=dh(),s=r.focusedElem,d=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&ch(s.ownerDocument.documentElement,s)){if(d!==null&&Al(s)){if(i=d.start,r=d.end,r===void 0&&(r=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(r,s.value.length);else if(r=(i=s.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var g=s.textContent.length,y=Math.min(d.start,g);d=d.end===void 0?y:Math.min(d.end,g),!r.extend&&y>d&&(g=d,d=y,y=g),g=uh(s,y);var w=uh(s,d);g&&w&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(g.node,g.offset),r.removeAllRanges(),y>d?(r.addRange(i),r.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),r.addRange(i)))}}for(i=[],r=s;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)r=i[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Cb=c&&"documentMode"in document&&11>=document.documentMode,Kr=null,jl=null,Zi=null,Il=!1;function fh(r,i,s){var d=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Il||Kr==null||Kr!==Br(d)||(d=Kr,"selectionStart"in d&&Al(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Zi&&Qi(Zi,d)||(Zi=d,d=Pa(jl,"onSelect"),0<d.length&&(i=new bl("onSelect","select",null,i,s),r.push({event:i,listeners:d}),i.target=Kr)))}function Ta(r,i){var s={};return s[r.toLowerCase()]=i.toLowerCase(),s["Webkit"+r]="webkit"+i,s["Moz"+r]="moz"+i,s}var Yr={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},_l={},hh={};c&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Ca(r){if(_l[r])return _l[r];if(!Yr[r])return r;var i=Yr[r],s;for(s in i)if(i.hasOwnProperty(s)&&s in hh)return _l[r]=i[s];return r}var ph=Ca("animationend"),mh=Ca("animationiteration"),gh=Ca("animationstart"),yh=Ca("transitionend"),xh=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(r,i){xh.set(r,i),u(i,[r])}for(var Nl=0;Nl<vh.length;Nl++){var Ml=vh[Nl],Eb=Ml.toLowerCase(),Pb=Ml[0].toUpperCase()+Ml.slice(1);qt(Eb,"on"+Pb)}qt(ph,"onAnimationEnd"),qt(mh,"onAnimationIteration"),qt(gh,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(yh,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function wh(r,i,s){var d=r.type||"unknown-event";r.currentTarget=s,Ew(d,i,void 0,r),r.currentTarget=null}function bh(r,i){i=(i&4)!==0;for(var s=0;s<r.length;s++){var d=r[s],g=d.event;d=d.listeners;e:{var y=void 0;if(i)for(var w=d.length-1;0<=w;w--){var R=d[w],I=R.instance,z=R.currentTarget;if(R=R.listener,I!==y&&g.isPropagationStopped())break e;wh(g,R,z),y=I}else for(w=0;w<d.length;w++){if(R=d[w],I=R.instance,z=R.currentTarget,R=R.listener,I!==y&&g.isPropagationStopped())break e;wh(g,R,z),y=I}}}if(ua)throw r=dl,ua=!1,dl=null,r}function ze(r,i){var s=i[Wl];s===void 0&&(s=i[Wl]=new Set);var d=r+"__bubble";s.has(d)||(kh(i,r,2,!1),s.add(d))}function Dl(r,i,s){var d=0;i&&(d|=4),kh(s,r,d,i)}var Ea="_reactListening"+Math.random().toString(36).slice(2);function no(r){if(!r[Ea]){r[Ea]=!0,o.forEach(function(s){s!=="selectionchange"&&(Rb.has(s)||Dl(s,!1,r),Dl(s,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Ea]||(i[Ea]=!0,Dl("selectionchange",!1,i))}}function kh(r,i,s,d){switch(Hf(i)){case 1:var g=Ww;break;case 4:g=Uw;break;default:g=xl}s=g.bind(null,i,s,r),g=void 0,!cl||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(g=!0),d?g!==void 0?r.addEventListener(i,s,{capture:!0,passive:g}):r.addEventListener(i,s,!0):g!==void 0?r.addEventListener(i,s,{passive:g}):r.addEventListener(i,s,!1)}function Ll(r,i,s,d,g){var y=d;if((i&1)===0&&(i&2)===0&&d!==null)e:for(;;){if(d===null)return;var w=d.tag;if(w===3||w===4){var R=d.stateNode.containerInfo;if(R===g||R.nodeType===8&&R.parentNode===g)break;if(w===4)for(w=d.return;w!==null;){var I=w.tag;if((I===3||I===4)&&(I=w.stateNode.containerInfo,I===g||I.nodeType===8&&I.parentNode===g))return;w=w.return}for(;R!==null;){if(w=mr(R),w===null)return;if(I=w.tag,I===5||I===6){d=y=w;continue e}R=R.parentNode}}d=d.return}Pf(function(){var z=y,q=sl(s),G=[];e:{var H=xh.get(r);if(H!==void 0){var te=bl,ae=r;switch(r){case"keypress":if(wa(s)===0)break e;case"keydown":case"keyup":te=ib;break;case"focusin":ae="focus",te=Tl;break;case"focusout":ae="blur",te=Tl;break;case"beforeblur":case"afterblur":te=Tl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=qw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=sb;break;case ph:case mh:case gh:te=Yw;break;case yh:te=ub;break;case"scroll":te=$w;break;case"wheel":te=db;break;case"copy":case"cut":case"paste":te=Xw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=Jf}var le=(i&4)!==0,Ye=!le&&r==="scroll",L=le?H!==null?H+"Capture":null:H;le=[];for(var N=z,F;N!==null;){F=N;var Q=F.stateNode;if(F.tag===5&&Q!==null&&(F=Q,L!==null&&(Q=Oi(N,L),Q!=null&&le.push(to(N,Q,F)))),Ye)break;N=N.return}0<le.length&&(H=new te(H,ae,null,s,q),G.push({event:H,listeners:le}))}}if((i&7)===0){e:{if(H=r==="mouseover"||r==="pointerover",te=r==="mouseout"||r==="pointerout",H&&s!==jn&&(ae=s.relatedTarget||s.fromElement)&&(mr(ae)||ae[kt]))break e;if((te||H)&&(H=q.window===q?q:(H=q.ownerDocument)?H.defaultView||H.parentWindow:window,te?(ae=s.relatedTarget||s.toElement,te=z,ae=ae?mr(ae):null,ae!==null&&(Ye=pr(ae),ae!==Ye||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(te=null,ae=z),te!==ae)){if(le=Kf,Q="onMouseLeave",L="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(le=Jf,Q="onPointerLeave",L="onPointerEnter",N="pointer"),Ye=te==null?H:Qr(te),F=ae==null?H:Qr(ae),H=new le(Q,N+"leave",te,s,q),H.target=Ye,H.relatedTarget=F,Q=null,mr(q)===z&&(le=new le(L,N+"enter",ae,s,q),le.target=F,le.relatedTarget=Ye,Q=le),Ye=Q,te&&ae)n:{for(le=te,L=ae,N=0,F=le;F;F=Jr(F))N++;for(F=0,Q=L;Q;Q=Jr(Q))F++;for(;0<N-F;)le=Jr(le),N--;for(;0<F-N;)L=Jr(L),F--;for(;N--;){if(le===L||L!==null&&le===L.alternate)break n;le=Jr(le),L=Jr(L)}le=null}else le=null;te!==null&&Sh(G,H,te,le,!1),ae!==null&&Ye!==null&&Sh(G,Ye,ae,le,!0)}}e:{if(H=z?Qr(z):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ue=xb;else if(th(H))if(ih)ue=kb;else{ue=wb;var de=vb}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ue=bb);if(ue&&(ue=ue(r,z))){rh(G,ue,s,q);break e}de&&de(r,H,z),r==="focusout"&&(de=H._wrapperState)&&de.controlled&&H.type==="number"&&Wr(H,"number",H.value)}switch(de=z?Qr(z):window,r){case"focusin":(th(de)||de.contentEditable==="true")&&(Kr=de,jl=z,Zi=null);break;case"focusout":Zi=jl=Kr=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,fh(G,s,q);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":fh(G,s,q)}var fe;if(El)e:{switch(r){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Gr?eh(r,s)&&(ve="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(ve="onCompositionStart");ve&&(Xf&&s.locale!=="ko"&&(Gr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gr&&(fe=qf()):(Ht=q,wl="value"in Ht?Ht.value:Ht.textContent,Gr=!0)),de=Pa(z,ve),0<de.length&&(ve=new Yf(ve,r,null,s,q),G.push({event:ve,listeners:de}),fe?ve.data=fe:(fe=nh(s),fe!==null&&(ve.data=fe)))),(fe=hb?pb(r,s):mb(r,s))&&(z=Pa(z,"onBeforeInput"),0<z.length&&(q=new Yf("onBeforeInput","beforeinput",null,s,q),G.push({event:q,listeners:z}),q.data=fe))}bh(G,i)})}function to(r,i,s){return{instance:r,listener:i,currentTarget:s}}function Pa(r,i){for(var s=i+"Capture",d=[];r!==null;){var g=r,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=Oi(r,s),y!=null&&d.unshift(to(r,y,g)),y=Oi(r,i),y!=null&&d.push(to(r,y,g))),r=r.return}return d}function Jr(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Sh(r,i,s,d,g){for(var y=i._reactName,w=[];s!==null&&s!==d;){var R=s,I=R.alternate,z=R.stateNode;if(I!==null&&I===d)break;R.tag===5&&z!==null&&(R=z,g?(I=Oi(s,y),I!=null&&w.unshift(to(s,I,R))):g||(I=Oi(s,y),I!=null&&w.push(to(s,I,R)))),s=s.return}w.length!==0&&r.push({event:i,listeners:w})}var Ab=/\r\n?/g,jb=/\u0000|\uFFFD/g;function Th(r){return(typeof r=="string"?r:""+r).replace(Ab,`
`).replace(jb,"")}function Ra(r,i,s){if(i=Th(i),Th(r)!==i&&s)throw Error(t(425))}function Aa(){}var Ol=null,Fl=null;function zl(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bl=typeof setTimeout=="function"?setTimeout:void 0,Ib=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(r){return Ch.resolve(null).then(r).catch(Nb)}:Bl;function Nb(r){setTimeout(function(){throw r})}function Vl(r,i){var s=i,d=0;do{var g=s.nextSibling;if(r.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(d===0){r.removeChild(g),qi(i);return}d--}else s!=="$"&&s!=="$?"&&s!=="$!"||d++;s=g}while(s);qi(i)}function Gt(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Eh(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return r;i--}else s==="/$"&&i++}r=r.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),ut="__reactFiber$"+Xr,ro="__reactProps$"+Xr,kt="__reactContainer$"+Xr,Wl="__reactEvents$"+Xr,Mb="__reactListeners$"+Xr,Db="__reactHandles$"+Xr;function mr(r){var i=r[ut];if(i)return i;for(var s=r.parentNode;s;){if(i=s[kt]||s[ut]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(r=Eh(r);r!==null;){if(s=r[ut])return s;r=Eh(r)}return i}r=s,s=r.parentNode}return null}function io(r){return r=r[ut]||r[kt],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Qr(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function ja(r){return r[ro]||null}var Ul=[],Zr=-1;function Kt(r){return{current:r}}function Be(r){0>Zr||(r.current=Ul[Zr],Ul[Zr]=null,Zr--)}function Oe(r,i){Zr++,Ul[Zr]=r.current,r.current=i}var Yt={},fn=Kt(Yt),kn=Kt(!1),gr=Yt;function ei(r,i){var s=r.type.contextTypes;if(!s)return Yt;var d=r.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===i)return d.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in s)g[y]=i[y];return d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=g),g}function Sn(r){return r=r.childContextTypes,r!=null}function Ia(){Be(kn),Be(fn)}function Ph(r,i,s){if(fn.current!==Yt)throw Error(t(168));Oe(fn,i),Oe(kn,s)}function Rh(r,i,s){var d=r.stateNode;if(i=i.childContextTypes,typeof d.getChildContext!="function")return s;d=d.getChildContext();for(var g in d)if(!(g in i))throw Error(t(108,Ie(r)||"Unknown",g));return C({},s,d)}function _a(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Yt,gr=fn.current,Oe(fn,r),Oe(kn,kn.current),!0}function Ah(r,i,s){var d=r.stateNode;if(!d)throw Error(t(169));s?(r=Rh(r,i,gr),d.__reactInternalMemoizedMergedChildContext=r,Be(kn),Be(fn),Oe(fn,r)):Be(kn),Oe(kn,s)}var St=null,Na=!1,$l=!1;function jh(r){St===null?St=[r]:St.push(r)}function Lb(r){Na=!0,jh(r)}function Jt(){if(!$l&&St!==null){$l=!0;var r=0,i=Me;try{var s=St;for(Me=1;r<s.length;r++){var d=s[r];do d=d(!0);while(d!==null)}St=null,Na=!1}catch(g){throw St!==null&&(St=St.slice(r+1)),_f(fl,Jt),g}finally{Me=i,$l=!1}}return null}var ni=[],ti=0,Ma=null,Da=0,Bn=[],Vn=0,yr=null,Tt=1,Ct="";function xr(r,i){ni[ti++]=Da,ni[ti++]=Ma,Ma=r,Da=i}function Ih(r,i,s){Bn[Vn++]=Tt,Bn[Vn++]=Ct,Bn[Vn++]=yr,yr=r;var d=Tt;r=Ct;var g=32-Jn(d)-1;d&=~(1<<g),s+=1;var y=32-Jn(i)+g;if(30<y){var w=g-g%5;y=(d&(1<<w)-1).toString(32),d>>=w,g-=w,Tt=1<<32-Jn(i)+g|s<<g|d,Ct=y+r}else Tt=1<<y|s<<g|d,Ct=r}function Hl(r){r.return!==null&&(xr(r,1),Ih(r,1,0))}function ql(r){for(;r===Ma;)Ma=ni[--ti],ni[ti]=null,Da=ni[--ti],ni[ti]=null;for(;r===yr;)yr=Bn[--Vn],Bn[Vn]=null,Ct=Bn[--Vn],Bn[Vn]=null,Tt=Bn[--Vn],Bn[Vn]=null}var _n=null,Nn=null,Ve=!1,Qn=null;function _h(r,i){var s=Hn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=r,i=r.deletions,i===null?(r.deletions=[s],r.flags|=16):i.push(s)}function Nh(r,i){switch(r.tag){case 5:var s=r.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,_n=r,Nn=Gt(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,_n=r,Nn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=yr!==null?{id:Tt,overflow:Ct}:null,r.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Hn(18,null,null,0),s.stateNode=i,s.return=r,r.child=s,_n=r,Nn=null,!0):!1;default:return!1}}function Gl(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Kl(r){if(Ve){var i=Nn;if(i){var s=i;if(!Nh(r,i)){if(Gl(r))throw Error(t(418));i=Gt(s.nextSibling);var d=_n;i&&Nh(r,i)?_h(d,s):(r.flags=r.flags&-4097|2,Ve=!1,_n=r)}}else{if(Gl(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ve=!1,_n=r}}}function Mh(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;_n=r}function La(r){if(r!==_n)return!1;if(!Ve)return Mh(r),Ve=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!zl(r.type,r.memoizedProps)),i&&(i=Nn)){if(Gl(r))throw Dh(),Error(t(418));for(;i;)_h(r,i),i=Gt(i.nextSibling)}if(Mh(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(i===0){Nn=Gt(r.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}r=r.nextSibling}Nn=null}}else Nn=_n?Gt(r.stateNode.nextSibling):null;return!0}function Dh(){for(var r=Nn;r;)r=Gt(r.nextSibling)}function ri(){Nn=_n=null,Ve=!1}function Yl(r){Qn===null?Qn=[r]:Qn.push(r)}var Ob=V.ReactCurrentBatchConfig;function oo(r,i,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var d=s.stateNode}if(!d)throw Error(t(147,r));var g=d,y=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===y?i.ref:(i=function(w){var R=g.refs;w===null?delete R[y]:R[y]=w},i._stringRef=y,i)}if(typeof r!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,r))}return r}function Oa(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Lh(r){var i=r._init;return i(r._payload)}function Oh(r){function i(L,N){if(r){var F=L.deletions;F===null?(L.deletions=[N],L.flags|=16):F.push(N)}}function s(L,N){if(!r)return null;for(;N!==null;)i(L,N),N=N.sibling;return null}function d(L,N){for(L=new Map;N!==null;)N.key!==null?L.set(N.key,N):L.set(N.index,N),N=N.sibling;return L}function g(L,N){return L=ir(L,N),L.index=0,L.sibling=null,L}function y(L,N,F){return L.index=F,r?(F=L.alternate,F!==null?(F=F.index,F<N?(L.flags|=2,N):F):(L.flags|=2,N)):(L.flags|=1048576,N)}function w(L){return r&&L.alternate===null&&(L.flags|=2),L}function R(L,N,F,Q){return N===null||N.tag!==6?(N=Bu(F,L.mode,Q),N.return=L,N):(N=g(N,F),N.return=L,N)}function I(L,N,F,Q){var ue=F.type;return ue===X?q(L,N,F.props.children,Q,F.key):N!==null&&(N.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===be&&Lh(ue)===N.type)?(Q=g(N,F.props),Q.ref=oo(L,N,F),Q.return=L,Q):(Q=ss(F.type,F.key,F.props,null,L.mode,Q),Q.ref=oo(L,N,F),Q.return=L,Q)}function z(L,N,F,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==F.containerInfo||N.stateNode.implementation!==F.implementation?(N=Vu(F,L.mode,Q),N.return=L,N):(N=g(N,F.children||[]),N.return=L,N)}function q(L,N,F,Q,ue){return N===null||N.tag!==7?(N=Er(F,L.mode,Q,ue),N.return=L,N):(N=g(N,F),N.return=L,N)}function G(L,N,F){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Bu(""+N,L.mode,F),N.return=L,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case B:return F=ss(N.type,N.key,N.props,null,L.mode,F),F.ref=oo(L,null,N),F.return=L,F;case M:return N=Vu(N,L.mode,F),N.return=L,N;case be:var Q=N._init;return G(L,Q(N._payload),F)}if(Ft(N)||se(N))return N=Er(N,L.mode,F,null),N.return=L,N;Oa(L,N)}return null}function H(L,N,F,Q){var ue=N!==null?N.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ue!==null?null:R(L,N,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case B:return F.key===ue?I(L,N,F,Q):null;case M:return F.key===ue?z(L,N,F,Q):null;case be:return ue=F._init,H(L,N,ue(F._payload),Q)}if(Ft(F)||se(F))return ue!==null?null:q(L,N,F,Q,null);Oa(L,F)}return null}function te(L,N,F,Q,ue){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return L=L.get(F)||null,R(N,L,""+Q,ue);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case B:return L=L.get(Q.key===null?F:Q.key)||null,I(N,L,Q,ue);case M:return L=L.get(Q.key===null?F:Q.key)||null,z(N,L,Q,ue);case be:var de=Q._init;return te(L,N,F,de(Q._payload),ue)}if(Ft(Q)||se(Q))return L=L.get(F)||null,q(N,L,Q,ue,null);Oa(N,Q)}return null}function ae(L,N,F,Q){for(var ue=null,de=null,fe=N,ve=N=0,on=null;fe!==null&&ve<F.length;ve++){fe.index>ve?(on=fe,fe=null):on=fe.sibling;var _e=H(L,fe,F[ve],Q);if(_e===null){fe===null&&(fe=on);break}r&&fe&&_e.alternate===null&&i(L,fe),N=y(_e,N,ve),de===null?ue=_e:de.sibling=_e,de=_e,fe=on}if(ve===F.length)return s(L,fe),Ve&&xr(L,ve),ue;if(fe===null){for(;ve<F.length;ve++)fe=G(L,F[ve],Q),fe!==null&&(N=y(fe,N,ve),de===null?ue=fe:de.sibling=fe,de=fe);return Ve&&xr(L,ve),ue}for(fe=d(L,fe);ve<F.length;ve++)on=te(fe,L,ve,F[ve],Q),on!==null&&(r&&on.alternate!==null&&fe.delete(on.key===null?ve:on.key),N=y(on,N,ve),de===null?ue=on:de.sibling=on,de=on);return r&&fe.forEach(function(or){return i(L,or)}),Ve&&xr(L,ve),ue}function le(L,N,F,Q){var ue=se(F);if(typeof ue!="function")throw Error(t(150));if(F=ue.call(F),F==null)throw Error(t(151));for(var de=ue=null,fe=N,ve=N=0,on=null,_e=F.next();fe!==null&&!_e.done;ve++,_e=F.next()){fe.index>ve?(on=fe,fe=null):on=fe.sibling;var or=H(L,fe,_e.value,Q);if(or===null){fe===null&&(fe=on);break}r&&fe&&or.alternate===null&&i(L,fe),N=y(or,N,ve),de===null?ue=or:de.sibling=or,de=or,fe=on}if(_e.done)return s(L,fe),Ve&&xr(L,ve),ue;if(fe===null){for(;!_e.done;ve++,_e=F.next())_e=G(L,_e.value,Q),_e!==null&&(N=y(_e,N,ve),de===null?ue=_e:de.sibling=_e,de=_e);return Ve&&xr(L,ve),ue}for(fe=d(L,fe);!_e.done;ve++,_e=F.next())_e=te(fe,L,ve,_e.value,Q),_e!==null&&(r&&_e.alternate!==null&&fe.delete(_e.key===null?ve:_e.key),N=y(_e,N,ve),de===null?ue=_e:de.sibling=_e,de=_e);return r&&fe.forEach(function(gk){return i(L,gk)}),Ve&&xr(L,ve),ue}function Ye(L,N,F,Q){if(typeof F=="object"&&F!==null&&F.type===X&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case B:e:{for(var ue=F.key,de=N;de!==null;){if(de.key===ue){if(ue=F.type,ue===X){if(de.tag===7){s(L,de.sibling),N=g(de,F.props.children),N.return=L,L=N;break e}}else if(de.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===be&&Lh(ue)===de.type){s(L,de.sibling),N=g(de,F.props),N.ref=oo(L,de,F),N.return=L,L=N;break e}s(L,de);break}else i(L,de);de=de.sibling}F.type===X?(N=Er(F.props.children,L.mode,Q,F.key),N.return=L,L=N):(Q=ss(F.type,F.key,F.props,null,L.mode,Q),Q.ref=oo(L,N,F),Q.return=L,L=Q)}return w(L);case M:e:{for(de=F.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===F.containerInfo&&N.stateNode.implementation===F.implementation){s(L,N.sibling),N=g(N,F.children||[]),N.return=L,L=N;break e}else{s(L,N);break}else i(L,N);N=N.sibling}N=Vu(F,L.mode,Q),N.return=L,L=N}return w(L);case be:return de=F._init,Ye(L,N,de(F._payload),Q)}if(Ft(F))return ae(L,N,F,Q);if(se(F))return le(L,N,F,Q);Oa(L,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,N!==null&&N.tag===6?(s(L,N.sibling),N=g(N,F),N.return=L,L=N):(s(L,N),N=Bu(F,L.mode,Q),N.return=L,L=N),w(L)):s(L,N)}return Ye}var ii=Oh(!0),Fh=Oh(!1),Fa=Kt(null),za=null,oi=null,Jl=null;function Xl(){Jl=oi=za=null}function Ql(r){var i=Fa.current;Be(Fa),r._currentValue=i}function Zl(r,i,s){for(;r!==null;){var d=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,d!==null&&(d.childLanes|=i)):d!==null&&(d.childLanes&i)!==i&&(d.childLanes|=i),r===s)break;r=r.return}}function ai(r,i){za=r,Jl=oi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Tn=!0),r.firstContext=null)}function Wn(r){var i=r._currentValue;if(Jl!==r)if(r={context:r,memoizedValue:i,next:null},oi===null){if(za===null)throw Error(t(308));oi=r,za.dependencies={lanes:0,firstContext:r}}else oi=oi.next=r;return i}var vr=null;function eu(r){vr===null?vr=[r]:vr.push(r)}function zh(r,i,s,d){var g=i.interleaved;return g===null?(s.next=s,eu(i)):(s.next=g.next,g.next=s),i.interleaved=s,Et(r,d)}function Et(r,i){r.lanes|=i;var s=r.alternate;for(s!==null&&(s.lanes|=i),s=r,r=r.return;r!==null;)r.childLanes|=i,s=r.alternate,s!==null&&(s.childLanes|=i),s=r,r=r.return;return s.tag===3?s.stateNode:null}var Xt=!1;function nu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Pt(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function Qt(r,i,s){var d=r.updateQueue;if(d===null)return null;if(d=d.shared,(je&2)!==0){var g=d.pending;return g===null?i.next=i:(i.next=g.next,g.next=i),d.pending=i,Et(r,s)}return g=d.interleaved,g===null?(i.next=i,eu(d)):(i.next=g.next,g.next=i),d.interleaved=i,Et(r,s)}function Ba(r,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var d=i.lanes;d&=r.pendingLanes,s|=d,i.lanes=s,ml(r,s)}}function Vh(r,i){var s=r.updateQueue,d=r.alternate;if(d!==null&&(d=d.updateQueue,s===d)){var g=null,y=null;if(s=s.firstBaseUpdate,s!==null){do{var w={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};y===null?g=y=w:y=y.next=w,s=s.next}while(s!==null);y===null?g=y=i:y=y.next=i}else g=y=i;s={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:d.shared,effects:d.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=i:r.next=i,s.lastBaseUpdate=i}function Va(r,i,s,d){var g=r.updateQueue;Xt=!1;var y=g.firstBaseUpdate,w=g.lastBaseUpdate,R=g.shared.pending;if(R!==null){g.shared.pending=null;var I=R,z=I.next;I.next=null,w===null?y=z:w.next=z,w=I;var q=r.alternate;q!==null&&(q=q.updateQueue,R=q.lastBaseUpdate,R!==w&&(R===null?q.firstBaseUpdate=z:R.next=z,q.lastBaseUpdate=I))}if(y!==null){var G=g.baseState;w=0,q=z=I=null,R=y;do{var H=R.lane,te=R.eventTime;if((d&H)===H){q!==null&&(q=q.next={eventTime:te,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ae=r,le=R;switch(H=i,te=s,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){G=ae.call(te,G,H);break e}G=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,H=typeof ae=="function"?ae.call(te,G,H):ae,H==null)break e;G=C({},G,H);break e;case 2:Xt=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,H=g.effects,H===null?g.effects=[R]:H.push(R))}else te={eventTime:te,lane:H,tag:R.tag,payload:R.payload,callback:R.callback,next:null},q===null?(z=q=te,I=G):q=q.next=te,w|=H;if(R=R.next,R===null){if(R=g.shared.pending,R===null)break;H=R,R=H.next,H.next=null,g.lastBaseUpdate=H,g.shared.pending=null}}while(!0);if(q===null&&(I=G),g.baseState=I,g.firstBaseUpdate=z,g.lastBaseUpdate=q,i=g.shared.interleaved,i!==null){g=i;do w|=g.lane,g=g.next;while(g!==i)}else y===null&&(g.shared.lanes=0);kr|=w,r.lanes=w,r.memoizedState=G}}function Wh(r,i,s){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var d=r[i],g=d.callback;if(g!==null){if(d.callback=null,d=s,typeof g!="function")throw Error(t(191,g));g.call(d)}}}var ao={},ct=Kt(ao),so=Kt(ao),lo=Kt(ao);function wr(r){if(r===ao)throw Error(t(174));return r}function tu(r,i){switch(Oe(lo,i),Oe(so,r),Oe(ct,ao),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Z(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Z(i,r)}Be(ct),Oe(ct,i)}function si(){Be(ct),Be(so),Be(lo)}function Uh(r){wr(lo.current);var i=wr(ct.current),s=Z(i,r.type);i!==s&&(Oe(so,r),Oe(ct,s))}function ru(r){so.current===r&&(Be(ct),Be(so))}var Ue=Kt(0);function Wa(r){for(var i=r;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var iu=[];function ou(){for(var r=0;r<iu.length;r++)iu[r]._workInProgressVersionPrimary=null;iu.length=0}var Ua=V.ReactCurrentDispatcher,au=V.ReactCurrentBatchConfig,br=0,$e=null,en=null,tn=null,$a=!1,uo=!1,co=0,Fb=0;function hn(){throw Error(t(321))}function su(r,i){if(i===null)return!1;for(var s=0;s<i.length&&s<r.length;s++)if(!Xn(r[s],i[s]))return!1;return!0}function lu(r,i,s,d,g,y){if(br=y,$e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=r===null||r.memoizedState===null?Wb:Ub,r=s(d,g),uo){y=0;do{if(uo=!1,co=0,25<=y)throw Error(t(301));y+=1,tn=en=null,i.updateQueue=null,Ua.current=$b,r=s(d,g)}while(uo)}if(Ua.current=Ga,i=en!==null&&en.next!==null,br=0,tn=en=$e=null,$a=!1,i)throw Error(t(300));return r}function uu(){var r=co!==0;return co=0,r}function dt(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?$e.memoizedState=tn=r:tn=tn.next=r,tn}function Un(){if(en===null){var r=$e.alternate;r=r!==null?r.memoizedState:null}else r=en.next;var i=tn===null?$e.memoizedState:tn.next;if(i!==null)tn=i,en=r;else{if(r===null)throw Error(t(310));en=r,r={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},tn===null?$e.memoizedState=tn=r:tn=tn.next=r}return tn}function fo(r,i){return typeof i=="function"?i(r):i}function cu(r){var i=Un(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=r;var d=en,g=d.baseQueue,y=s.pending;if(y!==null){if(g!==null){var w=g.next;g.next=y.next,y.next=w}d.baseQueue=g=y,s.pending=null}if(g!==null){y=g.next,d=d.baseState;var R=w=null,I=null,z=y;do{var q=z.lane;if((br&q)===q)I!==null&&(I=I.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),d=z.hasEagerState?z.eagerState:r(d,z.action);else{var G={lane:q,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};I===null?(R=I=G,w=d):I=I.next=G,$e.lanes|=q,kr|=q}z=z.next}while(z!==null&&z!==y);I===null?w=d:I.next=R,Xn(d,i.memoizedState)||(Tn=!0),i.memoizedState=d,i.baseState=w,i.baseQueue=I,s.lastRenderedState=d}if(r=s.interleaved,r!==null){g=r;do y=g.lane,$e.lanes|=y,kr|=y,g=g.next;while(g!==r)}else g===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function du(r){var i=Un(),s=i.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=r;var d=s.dispatch,g=s.pending,y=i.memoizedState;if(g!==null){s.pending=null;var w=g=g.next;do y=r(y,w.action),w=w.next;while(w!==g);Xn(y,i.memoizedState)||(Tn=!0),i.memoizedState=y,i.baseQueue===null&&(i.baseState=y),s.lastRenderedState=y}return[y,d]}function $h(){}function Hh(r,i){var s=$e,d=Un(),g=i(),y=!Xn(d.memoizedState,g);if(y&&(d.memoizedState=g,Tn=!0),d=d.queue,fu(Kh.bind(null,s,d,r),[r]),d.getSnapshot!==i||y||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,ho(9,Gh.bind(null,s,d,g,i),void 0,null),rn===null)throw Error(t(349));(br&30)!==0||qh(s,i,g)}return g}function qh(r,i,s){r.flags|=16384,r={getSnapshot:i,value:s},i=$e.updateQueue,i===null?(i={lastEffect:null,stores:null},$e.updateQueue=i,i.stores=[r]):(s=i.stores,s===null?i.stores=[r]:s.push(r))}function Gh(r,i,s,d){i.value=s,i.getSnapshot=d,Yh(i)&&Jh(r)}function Kh(r,i,s){return s(function(){Yh(i)&&Jh(r)})}function Yh(r){var i=r.getSnapshot;r=r.value;try{var s=i();return!Xn(r,s)}catch{return!0}}function Jh(r){var i=Et(r,1);i!==null&&tt(i,r,1,-1)}function Xh(r){var i=dt();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:r},i.queue=r,r=r.dispatch=Vb.bind(null,$e,r),[i.memoizedState,r]}function ho(r,i,s,d){return r={tag:r,create:i,destroy:s,deps:d,next:null},i=$e.updateQueue,i===null?(i={lastEffect:null,stores:null},$e.updateQueue=i,i.lastEffect=r.next=r):(s=i.lastEffect,s===null?i.lastEffect=r.next=r:(d=s.next,s.next=r,r.next=d,i.lastEffect=r)),r}function Qh(){return Un().memoizedState}function Ha(r,i,s,d){var g=dt();$e.flags|=r,g.memoizedState=ho(1|i,s,void 0,d===void 0?null:d)}function qa(r,i,s,d){var g=Un();d=d===void 0?null:d;var y=void 0;if(en!==null){var w=en.memoizedState;if(y=w.destroy,d!==null&&su(d,w.deps)){g.memoizedState=ho(i,s,y,d);return}}$e.flags|=r,g.memoizedState=ho(1|i,s,y,d)}function Zh(r,i){return Ha(8390656,8,r,i)}function fu(r,i){return qa(2048,8,r,i)}function ep(r,i){return qa(4,2,r,i)}function np(r,i){return qa(4,4,r,i)}function tp(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function rp(r,i,s){return s=s!=null?s.concat([r]):null,qa(4,4,tp.bind(null,i,r),s)}function hu(){}function ip(r,i){var s=Un();i=i===void 0?null:i;var d=s.memoizedState;return d!==null&&i!==null&&su(i,d[1])?d[0]:(s.memoizedState=[r,i],r)}function op(r,i){var s=Un();i=i===void 0?null:i;var d=s.memoizedState;return d!==null&&i!==null&&su(i,d[1])?d[0]:(r=r(),s.memoizedState=[r,i],r)}function ap(r,i,s){return(br&21)===0?(r.baseState&&(r.baseState=!1,Tn=!0),r.memoizedState=s):(Xn(s,i)||(s=Lf(),$e.lanes|=s,kr|=s,r.baseState=!0),i)}function zb(r,i){var s=Me;Me=s!==0&&4>s?s:4,r(!0);var d=au.transition;au.transition={};try{r(!1),i()}finally{Me=s,au.transition=d}}function sp(){return Un().memoizedState}function Bb(r,i,s){var d=tr(r);if(s={lane:d,action:s,hasEagerState:!1,eagerState:null,next:null},lp(r))up(i,s);else if(s=zh(r,i,s,d),s!==null){var g=wn();tt(s,r,d,g),cp(s,i,d)}}function Vb(r,i,s){var d=tr(r),g={lane:d,action:s,hasEagerState:!1,eagerState:null,next:null};if(lp(r))up(i,g);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=i.lastRenderedReducer,y!==null))try{var w=i.lastRenderedState,R=y(w,s);if(g.hasEagerState=!0,g.eagerState=R,Xn(R,w)){var I=i.interleaved;I===null?(g.next=g,eu(i)):(g.next=I.next,I.next=g),i.interleaved=g;return}}catch{}finally{}s=zh(r,i,g,d),s!==null&&(g=wn(),tt(s,r,d,g),cp(s,i,d))}}function lp(r){var i=r.alternate;return r===$e||i!==null&&i===$e}function up(r,i){uo=$a=!0;var s=r.pending;s===null?i.next=i:(i.next=s.next,s.next=i),r.pending=i}function cp(r,i,s){if((s&4194240)!==0){var d=i.lanes;d&=r.pendingLanes,s|=d,i.lanes=s,ml(r,s)}}var Ga={readContext:Wn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Wb={readContext:Wn,useCallback:function(r,i){return dt().memoizedState=[r,i===void 0?null:i],r},useContext:Wn,useEffect:Zh,useImperativeHandle:function(r,i,s){return s=s!=null?s.concat([r]):null,Ha(4194308,4,tp.bind(null,i,r),s)},useLayoutEffect:function(r,i){return Ha(4194308,4,r,i)},useInsertionEffect:function(r,i){return Ha(4,2,r,i)},useMemo:function(r,i){var s=dt();return i=i===void 0?null:i,r=r(),s.memoizedState=[r,i],r},useReducer:function(r,i,s){var d=dt();return i=s!==void 0?s(i):i,d.memoizedState=d.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},d.queue=r,r=r.dispatch=Bb.bind(null,$e,r),[d.memoizedState,r]},useRef:function(r){var i=dt();return r={current:r},i.memoizedState=r},useState:Xh,useDebugValue:hu,useDeferredValue:function(r){return dt().memoizedState=r},useTransition:function(){var r=Xh(!1),i=r[0];return r=zb.bind(null,r[1]),dt().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,s){var d=$e,g=dt();if(Ve){if(s===void 0)throw Error(t(407));s=s()}else{if(s=i(),rn===null)throw Error(t(349));(br&30)!==0||qh(d,i,s)}g.memoizedState=s;var y={value:s,getSnapshot:i};return g.queue=y,Zh(Kh.bind(null,d,y,r),[r]),d.flags|=2048,ho(9,Gh.bind(null,d,y,s,i),void 0,null),s},useId:function(){var r=dt(),i=rn.identifierPrefix;if(Ve){var s=Ct,d=Tt;s=(d&~(1<<32-Jn(d)-1)).toString(32)+s,i=":"+i+"R"+s,s=co++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Fb++,i=":"+i+"r"+s.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},Ub={readContext:Wn,useCallback:ip,useContext:Wn,useEffect:fu,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:np,useMemo:op,useReducer:cu,useRef:Qh,useState:function(){return cu(fo)},useDebugValue:hu,useDeferredValue:function(r){var i=Un();return ap(i,en.memoizedState,r)},useTransition:function(){var r=cu(fo)[0],i=Un().memoizedState;return[r,i]},useMutableSource:$h,useSyncExternalStore:Hh,useId:sp,unstable_isNewReconciler:!1},$b={readContext:Wn,useCallback:ip,useContext:Wn,useEffect:fu,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:np,useMemo:op,useReducer:du,useRef:Qh,useState:function(){return du(fo)},useDebugValue:hu,useDeferredValue:function(r){var i=Un();return en===null?i.memoizedState=r:ap(i,en.memoizedState,r)},useTransition:function(){var r=du(fo)[0],i=Un().memoizedState;return[r,i]},useMutableSource:$h,useSyncExternalStore:Hh,useId:sp,unstable_isNewReconciler:!1};function Zn(r,i){if(r&&r.defaultProps){i=C({},i),r=r.defaultProps;for(var s in r)i[s]===void 0&&(i[s]=r[s]);return i}return i}function pu(r,i,s,d){i=r.memoizedState,s=s(d,i),s=s==null?i:C({},i,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var Ka={isMounted:function(r){return(r=r._reactInternals)?pr(r)===r:!1},enqueueSetState:function(r,i,s){r=r._reactInternals;var d=wn(),g=tr(r),y=Pt(d,g);y.payload=i,s!=null&&(y.callback=s),i=Qt(r,y,g),i!==null&&(tt(i,r,g,d),Ba(i,r,g))},enqueueReplaceState:function(r,i,s){r=r._reactInternals;var d=wn(),g=tr(r),y=Pt(d,g);y.tag=1,y.payload=i,s!=null&&(y.callback=s),i=Qt(r,y,g),i!==null&&(tt(i,r,g,d),Ba(i,r,g))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var s=wn(),d=tr(r),g=Pt(s,d);g.tag=2,i!=null&&(g.callback=i),i=Qt(r,g,d),i!==null&&(tt(i,r,d,s),Ba(i,r,d))}};function dp(r,i,s,d,g,y,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(d,y,w):i.prototype&&i.prototype.isPureReactComponent?!Qi(s,d)||!Qi(g,y):!0}function fp(r,i,s){var d=!1,g=Yt,y=i.contextType;return typeof y=="object"&&y!==null?y=Wn(y):(g=Sn(i)?gr:fn.current,d=i.contextTypes,y=(d=d!=null)?ei(r,g):Yt),i=new i(s,y),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,r.stateNode=i,i._reactInternals=r,d&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=y),i}function hp(r,i,s,d){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,d),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,d),i.state!==r&&Ka.enqueueReplaceState(i,i.state,null)}function mu(r,i,s,d){var g=r.stateNode;g.props=s,g.state=r.memoizedState,g.refs={},nu(r);var y=i.contextType;typeof y=="object"&&y!==null?g.context=Wn(y):(y=Sn(i)?gr:fn.current,g.context=ei(r,y)),g.state=r.memoizedState,y=i.getDerivedStateFromProps,typeof y=="function"&&(pu(r,i,y,s),g.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(i=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),i!==g.state&&Ka.enqueueReplaceState(g,g.state,null),Va(r,s,g,d),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function li(r,i){try{var s="",d=i;do s+=ke(d),d=d.return;while(d);var g=s}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:i,stack:g,digest:null}}function gu(r,i,s){return{value:r,source:null,stack:s??null,digest:i??null}}function yu(r,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var Hb=typeof WeakMap=="function"?WeakMap:Map;function pp(r,i,s){s=Pt(-1,s),s.tag=3,s.payload={element:null};var d=i.value;return s.callback=function(){ns||(ns=!0,_u=d),yu(r,i)},s}function mp(r,i,s){s=Pt(-1,s),s.tag=3;var d=r.type.getDerivedStateFromError;if(typeof d=="function"){var g=i.value;s.payload=function(){return d(g)},s.callback=function(){yu(r,i)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(s.callback=function(){yu(r,i),typeof d!="function"&&(er===null?er=new Set([this]):er.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),s}function gp(r,i,s){var d=r.pingCache;if(d===null){d=r.pingCache=new Hb;var g=new Set;d.set(i,g)}else g=d.get(i),g===void 0&&(g=new Set,d.set(i,g));g.has(s)||(g.add(s),r=ok.bind(null,r,i,s),i.then(r,r))}function yp(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function xp(r,i,s,d,g){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Pt(-1,1),i.tag=2,Qt(s,i,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var qb=V.ReactCurrentOwner,Tn=!1;function vn(r,i,s,d){i.child=r===null?Fh(i,null,s,d):ii(i,r.child,s,d)}function vp(r,i,s,d,g){s=s.render;var y=i.ref;return ai(i,g),d=lu(r,i,s,d,y,g),s=uu(),r!==null&&!Tn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~g,Rt(r,i,g)):(Ve&&s&&Hl(i),i.flags|=1,vn(r,i,d,g),i.child)}function wp(r,i,s,d,g){if(r===null){var y=s.type;return typeof y=="function"&&!zu(y)&&y.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=y,bp(r,i,y,d,g)):(r=ss(s.type,null,d,i,i.mode,g),r.ref=i.ref,r.return=i,i.child=r)}if(y=r.child,(r.lanes&g)===0){var w=y.memoizedProps;if(s=s.compare,s=s!==null?s:Qi,s(w,d)&&r.ref===i.ref)return Rt(r,i,g)}return i.flags|=1,r=ir(y,d),r.ref=i.ref,r.return=i,i.child=r}function bp(r,i,s,d,g){if(r!==null){var y=r.memoizedProps;if(Qi(y,d)&&r.ref===i.ref)if(Tn=!1,i.pendingProps=d=y,(r.lanes&g)!==0)(r.flags&131072)!==0&&(Tn=!0);else return i.lanes=r.lanes,Rt(r,i,g)}return xu(r,i,s,d,g)}function kp(r,i,s){var d=i.pendingProps,g=d.children,y=r!==null?r.memoizedState:null;if(d.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(ci,Mn),Mn|=s;else{if((s&1073741824)===0)return r=y!==null?y.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Oe(ci,Mn),Mn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:s,Oe(ci,Mn),Mn|=d}else y!==null?(d=y.baseLanes|s,i.memoizedState=null):d=s,Oe(ci,Mn),Mn|=d;return vn(r,i,g,s),i.child}function Sp(r,i){var s=i.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function xu(r,i,s,d,g){var y=Sn(s)?gr:fn.current;return y=ei(i,y),ai(i,g),s=lu(r,i,s,d,y,g),d=uu(),r!==null&&!Tn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~g,Rt(r,i,g)):(Ve&&d&&Hl(i),i.flags|=1,vn(r,i,s,g),i.child)}function Tp(r,i,s,d,g){if(Sn(s)){var y=!0;_a(i)}else y=!1;if(ai(i,g),i.stateNode===null)Ja(r,i),fp(i,s,d),mu(i,s,d,g),d=!0;else if(r===null){var w=i.stateNode,R=i.memoizedProps;w.props=R;var I=w.context,z=s.contextType;typeof z=="object"&&z!==null?z=Wn(z):(z=Sn(s)?gr:fn.current,z=ei(i,z));var q=s.getDerivedStateFromProps,G=typeof q=="function"||typeof w.getSnapshotBeforeUpdate=="function";G||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==d||I!==z)&&hp(i,w,d,z),Xt=!1;var H=i.memoizedState;w.state=H,Va(i,d,w,g),I=i.memoizedState,R!==d||H!==I||kn.current||Xt?(typeof q=="function"&&(pu(i,s,q,d),I=i.memoizedState),(R=Xt||dp(i,s,R,d,H,I,z))?(G||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=d,i.memoizedState=I),w.props=d,w.state=I,w.context=z,d=R):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),d=!1)}else{w=i.stateNode,Bh(r,i),R=i.memoizedProps,z=i.type===i.elementType?R:Zn(i.type,R),w.props=z,G=i.pendingProps,H=w.context,I=s.contextType,typeof I=="object"&&I!==null?I=Wn(I):(I=Sn(s)?gr:fn.current,I=ei(i,I));var te=s.getDerivedStateFromProps;(q=typeof te=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==G||H!==I)&&hp(i,w,d,I),Xt=!1,H=i.memoizedState,w.state=H,Va(i,d,w,g);var ae=i.memoizedState;R!==G||H!==ae||kn.current||Xt?(typeof te=="function"&&(pu(i,s,te,d),ae=i.memoizedState),(z=Xt||dp(i,s,z,d,H,ae,I)||!1)?(q||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(d,ae,I),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(d,ae,I)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&H===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&H===r.memoizedState||(i.flags|=1024),i.memoizedProps=d,i.memoizedState=ae),w.props=d,w.state=ae,w.context=I,d=z):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&H===r.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&H===r.memoizedState||(i.flags|=1024),d=!1)}return vu(r,i,s,d,y,g)}function vu(r,i,s,d,g,y){Sp(r,i);var w=(i.flags&128)!==0;if(!d&&!w)return g&&Ah(i,s,!1),Rt(r,i,y);d=i.stateNode,qb.current=i;var R=w&&typeof s.getDerivedStateFromError!="function"?null:d.render();return i.flags|=1,r!==null&&w?(i.child=ii(i,r.child,null,y),i.child=ii(i,null,R,y)):vn(r,i,R,y),i.memoizedState=d.state,g&&Ah(i,s,!0),i.child}function Cp(r){var i=r.stateNode;i.pendingContext?Ph(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(r,i.context,!1),tu(r,i.containerInfo)}function Ep(r,i,s,d,g){return ri(),Yl(g),i.flags|=256,vn(r,i,s,d),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function bu(r){return{baseLanes:r,cachePool:null,transitions:null}}function Pp(r,i,s){var d=i.pendingProps,g=Ue.current,y=!1,w=(i.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(g&2)!==0),R?(y=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),Oe(Ue,g&1),r===null)return Kl(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=d.children,r=d.fallback,y?(d=i.mode,y=i.child,w={mode:"hidden",children:w},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=w):y=ls(w,d,0,null),r=Er(r,d,s,null),y.return=i,r.return=i,y.sibling=r,i.child=y,i.child.memoizedState=bu(s),i.memoizedState=wu,r):ku(i,w));if(g=r.memoizedState,g!==null&&(R=g.dehydrated,R!==null))return Gb(r,i,w,d,R,g,s);if(y){y=d.fallback,w=i.mode,g=r.child,R=g.sibling;var I={mode:"hidden",children:d.children};return(w&1)===0&&i.child!==g?(d=i.child,d.childLanes=0,d.pendingProps=I,i.deletions=null):(d=ir(g,I),d.subtreeFlags=g.subtreeFlags&14680064),R!==null?y=ir(R,y):(y=Er(y,w,s,null),y.flags|=2),y.return=i,d.return=i,d.sibling=y,i.child=d,d=y,y=i.child,w=r.child.memoizedState,w=w===null?bu(s):{baseLanes:w.baseLanes|s,cachePool:null,transitions:w.transitions},y.memoizedState=w,y.childLanes=r.childLanes&~s,i.memoizedState=wu,d}return y=r.child,r=y.sibling,d=ir(y,{mode:"visible",children:d.children}),(i.mode&1)===0&&(d.lanes=s),d.return=i,d.sibling=null,r!==null&&(s=i.deletions,s===null?(i.deletions=[r],i.flags|=16):s.push(r)),i.child=d,i.memoizedState=null,d}function ku(r,i){return i=ls({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Ya(r,i,s,d){return d!==null&&Yl(d),ii(i,r.child,null,s),r=ku(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function Gb(r,i,s,d,g,y,w){if(s)return i.flags&256?(i.flags&=-257,d=gu(Error(t(422))),Ya(r,i,w,d)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(y=d.fallback,g=i.mode,d=ls({mode:"visible",children:d.children},g,0,null),y=Er(y,g,w,null),y.flags|=2,d.return=i,y.return=i,d.sibling=y,i.child=d,(i.mode&1)!==0&&ii(i,r.child,null,w),i.child.memoizedState=bu(w),i.memoizedState=wu,y);if((i.mode&1)===0)return Ya(r,i,w,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var R=d.dgst;return d=R,y=Error(t(419)),d=gu(y,d,void 0),Ya(r,i,w,d)}if(R=(w&r.childLanes)!==0,Tn||R){if(d=rn,d!==null){switch(w&-w){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(d.suspendedLanes|w))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,Et(r,g),tt(d,r,g,-1))}return Fu(),d=gu(Error(t(421))),Ya(r,i,w,d)}return g.data==="$?"?(i.flags|=128,i.child=r.child,i=ak.bind(null,r),g._reactRetry=i,null):(r=y.treeContext,Nn=Gt(g.nextSibling),_n=i,Ve=!0,Qn=null,r!==null&&(Bn[Vn++]=Tt,Bn[Vn++]=Ct,Bn[Vn++]=yr,Tt=r.id,Ct=r.overflow,yr=i),i=ku(i,d.children),i.flags|=4096,i)}function Rp(r,i,s){r.lanes|=i;var d=r.alternate;d!==null&&(d.lanes|=i),Zl(r.return,i,s)}function Su(r,i,s,d,g){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:d,tail:s,tailMode:g}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=s,y.tailMode=g)}function Ap(r,i,s){var d=i.pendingProps,g=d.revealOrder,y=d.tail;if(vn(r,i,d.children,s),d=Ue.current,(d&2)!==0)d=d&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Rp(r,s,i);else if(r.tag===19)Rp(r,s,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}d&=1}if(Oe(Ue,d),(i.mode&1)===0)i.memoizedState=null;else switch(g){case"forwards":for(s=i.child,g=null;s!==null;)r=s.alternate,r!==null&&Wa(r)===null&&(g=s),s=s.sibling;s=g,s===null?(g=i.child,i.child=null):(g=s.sibling,s.sibling=null),Su(i,!1,g,s,y);break;case"backwards":for(s=null,g=i.child,i.child=null;g!==null;){if(r=g.alternate,r!==null&&Wa(r)===null){i.child=g;break}r=g.sibling,g.sibling=s,s=g,g=r}Su(i,!0,s,null,y);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ja(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Rt(r,i,s){if(r!==null&&(i.dependencies=r.dependencies),kr|=i.lanes,(s&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,s=ir(r,r.pendingProps),i.child=s,s.return=i;r.sibling!==null;)r=r.sibling,s=s.sibling=ir(r,r.pendingProps),s.return=i;s.sibling=null}return i.child}function Kb(r,i,s){switch(i.tag){case 3:Cp(i),ri();break;case 5:Uh(i);break;case 1:Sn(i.type)&&_a(i);break;case 4:tu(i,i.stateNode.containerInfo);break;case 10:var d=i.type._context,g=i.memoizedProps.value;Oe(Fa,d._currentValue),d._currentValue=g;break;case 13:if(d=i.memoizedState,d!==null)return d.dehydrated!==null?(Oe(Ue,Ue.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Pp(r,i,s):(Oe(Ue,Ue.current&1),r=Rt(r,i,s),r!==null?r.sibling:null);Oe(Ue,Ue.current&1);break;case 19:if(d=(s&i.childLanes)!==0,(r.flags&128)!==0){if(d)return Ap(r,i,s);i.flags|=128}if(g=i.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),Oe(Ue,Ue.current),d)break;return null;case 22:case 23:return i.lanes=0,kp(r,i,s)}return Rt(r,i,s)}var jp,Tu,Ip,_p;jp=function(r,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Tu=function(){},Ip=function(r,i,s,d){var g=r.memoizedProps;if(g!==d){r=i.stateNode,wr(ct.current);var y=null;switch(s){case"input":g=Ni(r,g),d=Ni(r,d),y=[];break;case"select":g=C({},g,{value:void 0}),d=C({},d,{value:void 0}),y=[];break;case"textarea":g=Li(r,g),d=Li(r,d),y=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(r.onclick=Aa)}sn(s,d);var w;s=null;for(z in g)if(!d.hasOwnProperty(z)&&g.hasOwnProperty(z)&&g[z]!=null)if(z==="style"){var R=g[z];for(w in R)R.hasOwnProperty(w)&&(s||(s={}),s[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(a.hasOwnProperty(z)?y||(y=[]):(y=y||[]).push(z,null));for(z in d){var I=d[z];if(R=g!=null?g[z]:void 0,d.hasOwnProperty(z)&&I!==R&&(I!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||I&&I.hasOwnProperty(w)||(s||(s={}),s[w]="");for(w in I)I.hasOwnProperty(w)&&R[w]!==I[w]&&(s||(s={}),s[w]=I[w])}else s||(y||(y=[]),y.push(z,s)),s=I;else z==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,R=R?R.__html:void 0,I!=null&&R!==I&&(y=y||[]).push(z,I)):z==="children"?typeof I!="string"&&typeof I!="number"||(y=y||[]).push(z,""+I):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(a.hasOwnProperty(z)?(I!=null&&z==="onScroll"&&ze("scroll",r),y||R===I||(y=[])):(y=y||[]).push(z,I))}s&&(y=y||[]).push("style",s);var z=y;(i.updateQueue=z)&&(i.flags|=4)}},_p=function(r,i,s,d){s!==d&&(i.flags|=4)};function po(r,i){if(!Ve)switch(r.tailMode){case"hidden":i=r.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:d.sibling=null}}function pn(r){var i=r.alternate!==null&&r.alternate.child===r.child,s=0,d=0;if(i)for(var g=r.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)s|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=d,r.childLanes=s,i}function Yb(r,i,s){var d=i.pendingProps;switch(ql(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Sn(i.type)&&Ia(),pn(i),null;case 3:return d=i.stateNode,si(),Be(kn),Be(fn),ou(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(r===null||r.child===null)&&(La(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qn!==null&&(Du(Qn),Qn=null))),Tu(r,i),pn(i),null;case 5:ru(i);var g=wr(lo.current);if(s=i.type,r!==null&&i.stateNode!=null)Ip(r,i,s,d,g),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!d){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(r=wr(ct.current),La(i)){d=i.stateNode,s=i.type;var y=i.memoizedProps;switch(d[ut]=i,d[ro]=y,r=(i.mode&1)!==0,s){case"dialog":ze("cancel",d),ze("close",d);break;case"iframe":case"object":case"embed":ze("load",d);break;case"video":case"audio":for(g=0;g<eo.length;g++)ze(eo[g],d);break;case"source":ze("error",d);break;case"img":case"image":case"link":ze("error",d),ze("load",d);break;case"details":ze("toggle",d);break;case"input":Mi(d,y),ze("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},ze("invalid",d);break;case"textarea":oa(d,y),ze("invalid",d)}sn(s,y),g=null;for(var w in y)if(y.hasOwnProperty(w)){var R=y[w];w==="children"?typeof R=="string"?d.textContent!==R&&(y.suppressHydrationWarning!==!0&&Ra(d.textContent,R,r),g=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(y.suppressHydrationWarning!==!0&&Ra(d.textContent,R,r),g=["children",""+R]):a.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&ze("scroll",d)}switch(s){case"input":wt(d),ia(d,y,!0);break;case"textarea":wt(d),sa(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=Aa)}d=g,i.updateQueue=d,d!==null&&(i.flags|=4)}else{w=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=W(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof d.is=="string"?r=w.createElement(s,{is:d.is}):(r=w.createElement(s),s==="select"&&(w=r,d.multiple?w.multiple=!0:d.size&&(w.size=d.size))):r=w.createElementNS(r,s),r[ut]=i,r[ro]=d,jp(r,i,!1,!1),i.stateNode=r;e:{switch(w=st(s,d),s){case"dialog":ze("cancel",r),ze("close",r),g=d;break;case"iframe":case"object":case"embed":ze("load",r),g=d;break;case"video":case"audio":for(g=0;g<eo.length;g++)ze(eo[g],r);g=d;break;case"source":ze("error",r),g=d;break;case"img":case"image":case"link":ze("error",r),ze("load",r),g=d;break;case"details":ze("toggle",r),g=d;break;case"input":Mi(r,d),g=Ni(r,d),ze("invalid",r);break;case"option":g=d;break;case"select":r._wrapperState={wasMultiple:!!d.multiple},g=C({},d,{value:void 0}),ze("invalid",r);break;case"textarea":oa(r,d),g=Li(r,d),ze("invalid",r);break;default:g=d}sn(s,g),R=g;for(y in R)if(R.hasOwnProperty(y)){var I=R[y];y==="style"?Bt(r,I):y==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Te(r,I)):y==="children"?typeof I=="string"?(s!=="textarea"||I!=="")&&Ae(r,I):typeof I=="number"&&Ae(r,""+I):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?I!=null&&y==="onScroll"&&ze("scroll",r):I!=null&&j(r,y,I,w))}switch(s){case"input":wt(r),ia(r,d,!1);break;case"textarea":wt(r),sa(r);break;case"option":d.value!=null&&r.setAttribute("value",""+Se(d.value));break;case"select":r.multiple=!!d.multiple,y=d.value,y!=null?zt(r,!!d.multiple,y,!1):d.defaultValue!=null&&zt(r,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Aa)}switch(s){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(r&&i.stateNode!=null)_p(r,i,r.memoizedProps,d);else{if(typeof d!="string"&&i.stateNode===null)throw Error(t(166));if(s=wr(lo.current),wr(ct.current),La(i)){if(d=i.stateNode,s=i.memoizedProps,d[ut]=i,(y=d.nodeValue!==s)&&(r=_n,r!==null))switch(r.tag){case 3:Ra(d.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Ra(d.nodeValue,s,(r.mode&1)!==0)}y&&(i.flags|=4)}else d=(s.nodeType===9?s:s.ownerDocument).createTextNode(d),d[ut]=i,i.stateNode=d}return pn(i),null;case 13:if(Be(Ue),d=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ve&&Nn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Dh(),ri(),i.flags|=98560,y=!1;else if(y=La(i),d!==null&&d.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=i.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[ut]=i}else ri(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),y=!1}else Qn!==null&&(Du(Qn),Qn=null),y=!0;if(!y)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(d=d!==null,d!==(r!==null&&r.memoizedState!==null)&&d&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ue.current&1)!==0?nn===0&&(nn=3):Fu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return si(),Tu(r,i),r===null&&no(i.stateNode.containerInfo),pn(i),null;case 10:return Ql(i.type._context),pn(i),null;case 17:return Sn(i.type)&&Ia(),pn(i),null;case 19:if(Be(Ue),y=i.memoizedState,y===null)return pn(i),null;if(d=(i.flags&128)!==0,w=y.rendering,w===null)if(d)po(y,!1);else{if(nn!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(w=Wa(r),w!==null){for(i.flags|=128,po(y,!1),d=w.updateQueue,d!==null&&(i.updateQueue=d,i.flags|=4),i.subtreeFlags=0,d=s,s=i.child;s!==null;)y=s,r=d,y.flags&=14680066,w=y.alternate,w===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=w.childLanes,y.lanes=w.lanes,y.child=w.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=w.memoizedProps,y.memoizedState=w.memoizedState,y.updateQueue=w.updateQueue,y.type=w.type,r=w.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return Oe(Ue,Ue.current&1|2),i.child}r=r.sibling}y.tail!==null&&Ke()>di&&(i.flags|=128,d=!0,po(y,!1),i.lanes=4194304)}else{if(!d)if(r=Wa(w),r!==null){if(i.flags|=128,d=!0,s=r.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),po(y,!0),y.tail===null&&y.tailMode==="hidden"&&!w.alternate&&!Ve)return pn(i),null}else 2*Ke()-y.renderingStartTime>di&&s!==1073741824&&(i.flags|=128,d=!0,po(y,!1),i.lanes=4194304);y.isBackwards?(w.sibling=i.child,i.child=w):(s=y.last,s!==null?s.sibling=w:i.child=w,y.last=w)}return y.tail!==null?(i=y.tail,y.rendering=i,y.tail=i.sibling,y.renderingStartTime=Ke(),i.sibling=null,s=Ue.current,Oe(Ue,d?s&1|2:s&1),i):(pn(i),null);case 22:case 23:return Ou(),d=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==d&&(i.flags|=8192),d&&(i.mode&1)!==0?(Mn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Jb(r,i){switch(ql(i),i.tag){case 1:return Sn(i.type)&&Ia(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return si(),Be(kn),Be(fn),ou(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return ru(i),null;case 13:if(Be(Ue),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ri()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Be(Ue),null;case 4:return si(),null;case 10:return Ql(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var Xa=!1,mn=!1,Xb=typeof WeakSet=="function"?WeakSet:Set,oe=null;function ui(r,i){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(d){qe(r,i,d)}else s.current=null}function Cu(r,i,s){try{s()}catch(d){qe(r,i,d)}}var Np=!1;function Qb(r,i){if(Ol=ya,r=dh(),Al(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var d=s.getSelection&&s.getSelection();if(d&&d.rangeCount!==0){s=d.anchorNode;var g=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{s.nodeType,y.nodeType}catch{s=null;break e}var w=0,R=-1,I=-1,z=0,q=0,G=r,H=null;n:for(;;){for(var te;G!==s||g!==0&&G.nodeType!==3||(R=w+g),G!==y||d!==0&&G.nodeType!==3||(I=w+d),G.nodeType===3&&(w+=G.nodeValue.length),(te=G.firstChild)!==null;)H=G,G=te;for(;;){if(G===r)break n;if(H===s&&++z===g&&(R=w),H===y&&++q===d&&(I=w),(te=G.nextSibling)!==null)break;G=H,H=G.parentNode}G=te}s=R===-1||I===-1?null:{start:R,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Fl={focusedElem:r,selectionRange:s},ya=!1,oe=i;oe!==null;)if(i=oe,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,oe=r;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,Ye=ae.memoizedState,L=i.stateNode,N=L.getSnapshotBeforeUpdate(i.elementType===i.type?le:Zn(i.type,le),Ye);L.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Q){qe(i,i.return,Q)}if(r=i.sibling,r!==null){r.return=i.return,oe=r;break}oe=i.return}return ae=Np,Np=!1,ae}function mo(r,i,s){var d=i.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&r)===r){var y=g.destroy;g.destroy=void 0,y!==void 0&&Cu(i,s,y)}g=g.next}while(g!==d)}}function Qa(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&r)===r){var d=s.create;s.destroy=d()}s=s.next}while(s!==i)}}function Eu(r){var i=r.ref;if(i!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof i=="function"?i(r):i.current=r}}function Mp(r){var i=r.alternate;i!==null&&(r.alternate=null,Mp(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[ut],delete i[ro],delete i[Wl],delete i[Mb],delete i[Db])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Dp(r){return r.tag===5||r.tag===3||r.tag===4}function Lp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Dp(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Pu(r,i,s){var d=r.tag;if(d===5||d===6)r=r.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(r,i):s.insertBefore(r,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(r,s)):(i=s,i.appendChild(r)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Aa));else if(d!==4&&(r=r.child,r!==null))for(Pu(r,i,s),r=r.sibling;r!==null;)Pu(r,i,s),r=r.sibling}function Ru(r,i,s){var d=r.tag;if(d===5||d===6)r=r.stateNode,i?s.insertBefore(r,i):s.appendChild(r);else if(d!==4&&(r=r.child,r!==null))for(Ru(r,i,s),r=r.sibling;r!==null;)Ru(r,i,s),r=r.sibling}var ln=null,et=!1;function Zt(r,i,s){for(s=s.child;s!==null;)Op(r,i,s),s=s.sibling}function Op(r,i,s){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(da,s)}catch{}switch(s.tag){case 5:mn||ui(s,i);case 6:var d=ln,g=et;ln=null,Zt(r,i,s),ln=d,et=g,ln!==null&&(et?(r=ln,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):ln.removeChild(s.stateNode));break;case 18:ln!==null&&(et?(r=ln,s=s.stateNode,r.nodeType===8?Vl(r.parentNode,s):r.nodeType===1&&Vl(r,s),qi(r)):Vl(ln,s.stateNode));break;case 4:d=ln,g=et,ln=s.stateNode.containerInfo,et=!0,Zt(r,i,s),ln=d,et=g;break;case 0:case 11:case 14:case 15:if(!mn&&(d=s.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var y=g,w=y.destroy;y=y.tag,w!==void 0&&((y&2)!==0||(y&4)!==0)&&Cu(s,i,w),g=g.next}while(g!==d)}Zt(r,i,s);break;case 1:if(!mn&&(ui(s,i),d=s.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=s.memoizedProps,d.state=s.memoizedState,d.componentWillUnmount()}catch(R){qe(s,i,R)}Zt(r,i,s);break;case 21:Zt(r,i,s);break;case 22:s.mode&1?(mn=(d=mn)||s.memoizedState!==null,Zt(r,i,s),mn=d):Zt(r,i,s);break;default:Zt(r,i,s)}}function Fp(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new Xb),i.forEach(function(d){var g=sk.bind(null,r,d);s.has(d)||(s.add(d),d.then(g,g))})}}function nt(r,i){var s=i.deletions;if(s!==null)for(var d=0;d<s.length;d++){var g=s[d];try{var y=r,w=i,R=w;e:for(;R!==null;){switch(R.tag){case 5:ln=R.stateNode,et=!1;break e;case 3:ln=R.stateNode.containerInfo,et=!0;break e;case 4:ln=R.stateNode.containerInfo,et=!0;break e}R=R.return}if(ln===null)throw Error(t(160));Op(y,w,g),ln=null,et=!1;var I=g.alternate;I!==null&&(I.return=null),g.return=null}catch(z){qe(g,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,r),i=i.sibling}function zp(r,i){var s=r.alternate,d=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(nt(i,r),ft(r),d&4){try{mo(3,r,r.return),Qa(3,r)}catch(le){qe(r,r.return,le)}try{mo(5,r,r.return)}catch(le){qe(r,r.return,le)}}break;case 1:nt(i,r),ft(r),d&512&&s!==null&&ui(s,s.return);break;case 5:if(nt(i,r),ft(r),d&512&&s!==null&&ui(s,s.return),r.flags&32){var g=r.stateNode;try{Ae(g,"")}catch(le){qe(r,r.return,le)}}if(d&4&&(g=r.stateNode,g!=null)){var y=r.memoizedProps,w=s!==null?s.memoizedProps:y,R=r.type,I=r.updateQueue;if(r.updateQueue=null,I!==null)try{R==="input"&&y.type==="radio"&&y.name!=null&&Di(g,y),st(R,w);var z=st(R,y);for(w=0;w<I.length;w+=2){var q=I[w],G=I[w+1];q==="style"?Bt(g,G):q==="dangerouslySetInnerHTML"?Te(g,G):q==="children"?Ae(g,G):j(g,q,G,z)}switch(R){case"input":Vr(g,y);break;case"textarea":aa(g,y);break;case"select":var H=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var te=y.value;te!=null?zt(g,!!y.multiple,te,!1):H!==!!y.multiple&&(y.defaultValue!=null?zt(g,!!y.multiple,y.defaultValue,!0):zt(g,!!y.multiple,y.multiple?[]:"",!1))}g[ro]=y}catch(le){qe(r,r.return,le)}}break;case 6:if(nt(i,r),ft(r),d&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,y=r.memoizedProps;try{g.nodeValue=y}catch(le){qe(r,r.return,le)}}break;case 3:if(nt(i,r),ft(r),d&4&&s!==null&&s.memoizedState.isDehydrated)try{qi(i.containerInfo)}catch(le){qe(r,r.return,le)}break;case 4:nt(i,r),ft(r);break;case 13:nt(i,r),ft(r),g=r.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Iu=Ke())),d&4&&Fp(r);break;case 22:if(q=s!==null&&s.memoizedState!==null,r.mode&1?(mn=(z=mn)||q,nt(i,r),mn=z):nt(i,r),ft(r),d&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!q&&(r.mode&1)!==0)for(oe=r,q=r.child;q!==null;){for(G=oe=q;oe!==null;){switch(H=oe,te=H.child,H.tag){case 0:case 11:case 14:case 15:mo(4,H,H.return);break;case 1:ui(H,H.return);var ae=H.stateNode;if(typeof ae.componentWillUnmount=="function"){d=H,s=H.return;try{i=d,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){qe(d,s,le)}}break;case 5:ui(H,H.return);break;case 22:if(H.memoizedState!==null){Wp(G);continue}}te!==null?(te.return=H,oe=te):Wp(G)}q=q.sibling}e:for(q=null,G=r;;){if(G.tag===5){if(q===null){q=G;try{g=G.stateNode,z?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(R=G.stateNode,I=G.memoizedProps.style,w=I!=null&&I.hasOwnProperty("display")?I.display:null,R.style.display=zn("display",w))}catch(le){qe(r,r.return,le)}}}else if(G.tag===6){if(q===null)try{G.stateNode.nodeValue=z?"":G.memoizedProps}catch(le){qe(r,r.return,le)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===r)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===r)break e;for(;G.sibling===null;){if(G.return===null||G.return===r)break e;q===G&&(q=null),G=G.return}q===G&&(q=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:nt(i,r),ft(r),d&4&&Fp(r);break;case 21:break;default:nt(i,r),ft(r)}}function ft(r){var i=r.flags;if(i&2){try{e:{for(var s=r.return;s!==null;){if(Dp(s)){var d=s;break e}s=s.return}throw Error(t(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Ae(g,""),d.flags&=-33);var y=Lp(r);Ru(r,y,g);break;case 3:case 4:var w=d.stateNode.containerInfo,R=Lp(r);Pu(r,R,w);break;default:throw Error(t(161))}}catch(I){qe(r,r.return,I)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function Zb(r,i,s){oe=r,Bp(r)}function Bp(r,i,s){for(var d=(r.mode&1)!==0;oe!==null;){var g=oe,y=g.child;if(g.tag===22&&d){var w=g.memoizedState!==null||Xa;if(!w){var R=g.alternate,I=R!==null&&R.memoizedState!==null||mn;R=Xa;var z=mn;if(Xa=w,(mn=I)&&!z)for(oe=g;oe!==null;)w=oe,I=w.child,w.tag===22&&w.memoizedState!==null?Up(g):I!==null?(I.return=w,oe=I):Up(g);for(;y!==null;)oe=y,Bp(y),y=y.sibling;oe=g,Xa=R,mn=z}Vp(r)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,oe=y):Vp(r)}}function Vp(r){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Qa(5,i);break;case 1:var d=i.stateNode;if(i.flags&4&&!mn)if(s===null)d.componentDidMount();else{var g=i.elementType===i.type?s.memoizedProps:Zn(i.type,s.memoizedProps);d.componentDidUpdate(g,s.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=i.updateQueue;y!==null&&Wh(i,y,d);break;case 3:var w=i.updateQueue;if(w!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Wh(i,w,s)}break;case 5:var R=i.stateNode;if(s===null&&i.flags&4){s=R;var I=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&s.focus();break;case"img":I.src&&(s.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var q=z.memoizedState;if(q!==null){var G=q.dehydrated;G!==null&&qi(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Eu(i)}catch(H){qe(i,i.return,H)}}if(i===r){oe=null;break}if(s=i.sibling,s!==null){s.return=i.return,oe=s;break}oe=i.return}}function Wp(r){for(;oe!==null;){var i=oe;if(i===r){oe=null;break}var s=i.sibling;if(s!==null){s.return=i.return,oe=s;break}oe=i.return}}function Up(r){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Qa(4,i)}catch(I){qe(i,s,I)}break;case 1:var d=i.stateNode;if(typeof d.componentDidMount=="function"){var g=i.return;try{d.componentDidMount()}catch(I){qe(i,g,I)}}var y=i.return;try{Eu(i)}catch(I){qe(i,y,I)}break;case 5:var w=i.return;try{Eu(i)}catch(I){qe(i,w,I)}}}catch(I){qe(i,i.return,I)}if(i===r){oe=null;break}var R=i.sibling;if(R!==null){R.return=i.return,oe=R;break}oe=i.return}}var ek=Math.ceil,Za=V.ReactCurrentDispatcher,Au=V.ReactCurrentOwner,$n=V.ReactCurrentBatchConfig,je=0,rn=null,Qe=null,un=0,Mn=0,ci=Kt(0),nn=0,go=null,kr=0,es=0,ju=0,yo=null,Cn=null,Iu=0,di=1/0,At=null,ns=!1,_u=null,er=null,ts=!1,nr=null,rs=0,xo=0,Nu=null,is=-1,os=0;function wn(){return(je&6)!==0?Ke():is!==-1?is:is=Ke()}function tr(r){return(r.mode&1)===0?1:(je&2)!==0&&un!==0?un&-un:Ob.transition!==null?(os===0&&(os=Lf()),os):(r=Me,r!==0||(r=window.event,r=r===void 0?16:Hf(r.type)),r)}function tt(r,i,s,d){if(50<xo)throw xo=0,Nu=null,Error(t(185));Vi(r,s,d),((je&2)===0||r!==rn)&&(r===rn&&((je&2)===0&&(es|=s),nn===4&&rr(r,un)),En(r,d),s===1&&je===0&&(i.mode&1)===0&&(di=Ke()+500,Na&&Jt()))}function En(r,i){var s=r.callbackNode;Ow(r,i);var d=pa(r,r===rn?un:0);if(d===0)s!==null&&Nf(s),r.callbackNode=null,r.callbackPriority=0;else if(i=d&-d,r.callbackPriority!==i){if(s!=null&&Nf(s),i===1)r.tag===0?Lb(Hp.bind(null,r)):jh(Hp.bind(null,r)),_b(function(){(je&6)===0&&Jt()}),s=null;else{switch(Of(d)){case 1:s=fl;break;case 4:s=Mf;break;case 16:s=ca;break;case 536870912:s=Df;break;default:s=ca}s=Zp(s,$p.bind(null,r))}r.callbackPriority=i,r.callbackNode=s}}function $p(r,i){if(is=-1,os=0,(je&6)!==0)throw Error(t(327));var s=r.callbackNode;if(fi()&&r.callbackNode!==s)return null;var d=pa(r,r===rn?un:0);if(d===0)return null;if((d&30)!==0||(d&r.expiredLanes)!==0||i)i=as(r,d);else{i=d;var g=je;je|=2;var y=Gp();(rn!==r||un!==i)&&(At=null,di=Ke()+500,Tr(r,i));do try{rk();break}catch(R){qp(r,R)}while(!0);Xl(),Za.current=y,je=g,Qe!==null?i=0:(rn=null,un=0,i=nn)}if(i!==0){if(i===2&&(g=hl(r),g!==0&&(d=g,i=Mu(r,g))),i===1)throw s=go,Tr(r,0),rr(r,d),En(r,Ke()),s;if(i===6)rr(r,d);else{if(g=r.current.alternate,(d&30)===0&&!nk(g)&&(i=as(r,d),i===2&&(y=hl(r),y!==0&&(d=y,i=Mu(r,y))),i===1))throw s=go,Tr(r,0),rr(r,d),En(r,Ke()),s;switch(r.finishedWork=g,r.finishedLanes=d,i){case 0:case 1:throw Error(t(345));case 2:Cr(r,Cn,At);break;case 3:if(rr(r,d),(d&130023424)===d&&(i=Iu+500-Ke(),10<i)){if(pa(r,0)!==0)break;if(g=r.suspendedLanes,(g&d)!==d){wn(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=Bl(Cr.bind(null,r,Cn,At),i);break}Cr(r,Cn,At);break;case 4:if(rr(r,d),(d&4194240)===d)break;for(i=r.eventTimes,g=-1;0<d;){var w=31-Jn(d);y=1<<w,w=i[w],w>g&&(g=w),d&=~y}if(d=g,d=Ke()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ek(d/1960))-d,10<d){r.timeoutHandle=Bl(Cr.bind(null,r,Cn,At),d);break}Cr(r,Cn,At);break;case 5:Cr(r,Cn,At);break;default:throw Error(t(329))}}}return En(r,Ke()),r.callbackNode===s?$p.bind(null,r):null}function Mu(r,i){var s=yo;return r.current.memoizedState.isDehydrated&&(Tr(r,i).flags|=256),r=as(r,i),r!==2&&(i=Cn,Cn=s,i!==null&&Du(i)),r}function Du(r){Cn===null?Cn=r:Cn.push.apply(Cn,r)}function nk(r){for(var i=r;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var d=0;d<s.length;d++){var g=s[d],y=g.getSnapshot;g=g.value;try{if(!Xn(y(),g))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(r,i){for(i&=~ju,i&=~es,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var s=31-Jn(i),d=1<<s;r[s]=-1,i&=~d}}function Hp(r){if((je&6)!==0)throw Error(t(327));fi();var i=pa(r,0);if((i&1)===0)return En(r,Ke()),null;var s=as(r,i);if(r.tag!==0&&s===2){var d=hl(r);d!==0&&(i=d,s=Mu(r,d))}if(s===1)throw s=go,Tr(r,0),rr(r,i),En(r,Ke()),s;if(s===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Cr(r,Cn,At),En(r,Ke()),null}function Lu(r,i){var s=je;je|=1;try{return r(i)}finally{je=s,je===0&&(di=Ke()+500,Na&&Jt())}}function Sr(r){nr!==null&&nr.tag===0&&(je&6)===0&&fi();var i=je;je|=1;var s=$n.transition,d=Me;try{if($n.transition=null,Me=1,r)return r()}finally{Me=d,$n.transition=s,je=i,(je&6)===0&&Jt()}}function Ou(){Mn=ci.current,Be(ci)}function Tr(r,i){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,Ib(s)),Qe!==null)for(s=Qe.return;s!==null;){var d=s;switch(ql(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ia();break;case 3:si(),Be(kn),Be(fn),ou();break;case 5:ru(d);break;case 4:si();break;case 13:Be(Ue);break;case 19:Be(Ue);break;case 10:Ql(d.type._context);break;case 22:case 23:Ou()}s=s.return}if(rn=r,Qe=r=ir(r.current,null),un=Mn=i,nn=0,go=null,ju=es=kr=0,Cn=yo=null,vr!==null){for(i=0;i<vr.length;i++)if(s=vr[i],d=s.interleaved,d!==null){s.interleaved=null;var g=d.next,y=s.pending;if(y!==null){var w=y.next;y.next=g,d.next=w}s.pending=d}vr=null}return r}function qp(r,i){do{var s=Qe;try{if(Xl(),Ua.current=Ga,$a){for(var d=$e.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}$a=!1}if(br=0,tn=en=$e=null,uo=!1,co=0,Au.current=null,s===null||s.return===null){nn=1,go=i,Qe=null;break}e:{var y=r,w=s.return,R=s,I=i;if(i=un,R.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var z=I,q=R,G=q.tag;if((q.mode&1)===0&&(G===0||G===11||G===15)){var H=q.alternate;H?(q.updateQueue=H.updateQueue,q.memoizedState=H.memoizedState,q.lanes=H.lanes):(q.updateQueue=null,q.memoizedState=null)}var te=yp(w);if(te!==null){te.flags&=-257,xp(te,w,R,y,i),te.mode&1&&gp(y,z,i),i=te,I=z;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(I),i.updateQueue=le}else ae.add(I);break e}else{if((i&1)===0){gp(y,z,i),Fu();break e}I=Error(t(426))}}else if(Ve&&R.mode&1){var Ye=yp(w);if(Ye!==null){(Ye.flags&65536)===0&&(Ye.flags|=256),xp(Ye,w,R,y,i),Yl(li(I,R));break e}}y=I=li(I,R),nn!==4&&(nn=2),yo===null?yo=[y]:yo.push(y),y=w;do{switch(y.tag){case 3:y.flags|=65536,i&=-i,y.lanes|=i;var L=pp(y,I,i);Vh(y,L);break e;case 1:R=I;var N=y.type,F=y.stateNode;if((y.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(er===null||!er.has(F)))){y.flags|=65536,i&=-i,y.lanes|=i;var Q=mp(y,R,i);Vh(y,Q);break e}}y=y.return}while(y!==null)}Yp(s)}catch(ue){i=ue,Qe===s&&s!==null&&(Qe=s=s.return);continue}break}while(!0)}function Gp(){var r=Za.current;return Za.current=Ga,r===null?Ga:r}function Fu(){(nn===0||nn===3||nn===2)&&(nn=4),rn===null||(kr&268435455)===0&&(es&268435455)===0||rr(rn,un)}function as(r,i){var s=je;je|=2;var d=Gp();(rn!==r||un!==i)&&(At=null,Tr(r,i));do try{tk();break}catch(g){qp(r,g)}while(!0);if(Xl(),je=s,Za.current=d,Qe!==null)throw Error(t(261));return rn=null,un=0,nn}function tk(){for(;Qe!==null;)Kp(Qe)}function rk(){for(;Qe!==null&&!Rw();)Kp(Qe)}function Kp(r){var i=Qp(r.alternate,r,Mn);r.memoizedProps=r.pendingProps,i===null?Yp(r):Qe=i,Au.current=null}function Yp(r){var i=r;do{var s=i.alternate;if(r=i.return,(i.flags&32768)===0){if(s=Yb(s,i,Mn),s!==null){Qe=s;return}}else{if(s=Jb(s,i),s!==null){s.flags&=32767,Qe=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{nn=6,Qe=null;return}}if(i=i.sibling,i!==null){Qe=i;return}Qe=i=r}while(i!==null);nn===0&&(nn=5)}function Cr(r,i,s){var d=Me,g=$n.transition;try{$n.transition=null,Me=1,ik(r,i,s,d)}finally{$n.transition=g,Me=d}return null}function ik(r,i,s,d){do fi();while(nr!==null);if((je&6)!==0)throw Error(t(327));s=r.finishedWork;var g=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=s.lanes|s.childLanes;if(Fw(r,y),r===rn&&(Qe=rn=null,un=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||ts||(ts=!0,Zp(ca,function(){return fi(),null})),y=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||y){y=$n.transition,$n.transition=null;var w=Me;Me=1;var R=je;je|=4,Au.current=null,Qb(r,s),zp(s,r),Tb(Fl),ya=!!Ol,Fl=Ol=null,r.current=s,Zb(s),Aw(),je=R,Me=w,$n.transition=y}else r.current=s;if(ts&&(ts=!1,nr=r,rs=g),y=r.pendingLanes,y===0&&(er=null),_w(s.stateNode),En(r,Ke()),i!==null)for(d=r.onRecoverableError,s=0;s<i.length;s++)g=i[s],d(g.value,{componentStack:g.stack,digest:g.digest});if(ns)throw ns=!1,r=_u,_u=null,r;return(rs&1)!==0&&r.tag!==0&&fi(),y=r.pendingLanes,(y&1)!==0?r===Nu?xo++:(xo=0,Nu=r):xo=0,Jt(),null}function fi(){if(nr!==null){var r=Of(rs),i=$n.transition,s=Me;try{if($n.transition=null,Me=16>r?16:r,nr===null)var d=!1;else{if(r=nr,nr=null,rs=0,(je&6)!==0)throw Error(t(331));var g=je;for(je|=4,oe=r.current;oe!==null;){var y=oe,w=y.child;if((oe.flags&16)!==0){var R=y.deletions;if(R!==null){for(var I=0;I<R.length;I++){var z=R[I];for(oe=z;oe!==null;){var q=oe;switch(q.tag){case 0:case 11:case 15:mo(8,q,y)}var G=q.child;if(G!==null)G.return=q,oe=G;else for(;oe!==null;){q=oe;var H=q.sibling,te=q.return;if(Mp(q),q===z){oe=null;break}if(H!==null){H.return=te,oe=H;break}oe=te}}}var ae=y.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var Ye=le.sibling;le.sibling=null,le=Ye}while(le!==null)}}oe=y}}if((y.subtreeFlags&2064)!==0&&w!==null)w.return=y,oe=w;else e:for(;oe!==null;){if(y=oe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:mo(9,y,y.return)}var L=y.sibling;if(L!==null){L.return=y.return,oe=L;break e}oe=y.return}}var N=r.current;for(oe=N;oe!==null;){w=oe;var F=w.child;if((w.subtreeFlags&2064)!==0&&F!==null)F.return=w,oe=F;else e:for(w=N;oe!==null;){if(R=oe,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Qa(9,R)}}catch(ue){qe(R,R.return,ue)}if(R===w){oe=null;break e}var Q=R.sibling;if(Q!==null){Q.return=R.return,oe=Q;break e}oe=R.return}}if(je=g,Jt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(da,r)}catch{}d=!0}return d}finally{Me=s,$n.transition=i}}return!1}function Jp(r,i,s){i=li(s,i),i=pp(r,i,1),r=Qt(r,i,1),i=wn(),r!==null&&(Vi(r,1,i),En(r,i))}function qe(r,i,s){if(r.tag===3)Jp(r,r,s);else for(;i!==null;){if(i.tag===3){Jp(i,r,s);break}else if(i.tag===1){var d=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(er===null||!er.has(d))){r=li(s,r),r=mp(i,r,1),i=Qt(i,r,1),r=wn(),i!==null&&(Vi(i,1,r),En(i,r));break}}i=i.return}}function ok(r,i,s){var d=r.pingCache;d!==null&&d.delete(i),i=wn(),r.pingedLanes|=r.suspendedLanes&s,rn===r&&(un&s)===s&&(nn===4||nn===3&&(un&130023424)===un&&500>Ke()-Iu?Tr(r,0):ju|=s),En(r,i)}function Xp(r,i){i===0&&((r.mode&1)===0?i=1:(i=ha,ha<<=1,(ha&130023424)===0&&(ha=4194304)));var s=wn();r=Et(r,i),r!==null&&(Vi(r,i,s),En(r,s))}function ak(r){var i=r.memoizedState,s=0;i!==null&&(s=i.retryLane),Xp(r,s)}function sk(r,i){var s=0;switch(r.tag){case 13:var d=r.stateNode,g=r.memoizedState;g!==null&&(s=g.retryLane);break;case 19:d=r.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(i),Xp(r,s)}var Qp;Qp=function(r,i,s){if(r!==null)if(r.memoizedProps!==i.pendingProps||kn.current)Tn=!0;else{if((r.lanes&s)===0&&(i.flags&128)===0)return Tn=!1,Kb(r,i,s);Tn=(r.flags&131072)!==0}else Tn=!1,Ve&&(i.flags&1048576)!==0&&Ih(i,Da,i.index);switch(i.lanes=0,i.tag){case 2:var d=i.type;Ja(r,i),r=i.pendingProps;var g=ei(i,fn.current);ai(i,s),g=lu(null,i,d,r,g,s);var y=uu();return i.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Sn(d)?(y=!0,_a(i)):y=!1,i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,nu(i),g.updater=Ka,i.stateNode=g,g._reactInternals=i,mu(i,d,r,s),i=vu(null,i,d,!0,y,s)):(i.tag=0,Ve&&y&&Hl(i),vn(null,i,g,s),i=i.child),i;case 16:d=i.elementType;e:{switch(Ja(r,i),r=i.pendingProps,g=d._init,d=g(d._payload),i.type=d,g=i.tag=uk(d),r=Zn(d,r),g){case 0:i=xu(null,i,d,r,s);break e;case 1:i=Tp(null,i,d,r,s);break e;case 11:i=vp(null,i,d,r,s);break e;case 14:i=wp(null,i,d,Zn(d.type,r),s);break e}throw Error(t(306,d,""))}return i;case 0:return d=i.type,g=i.pendingProps,g=i.elementType===d?g:Zn(d,g),xu(r,i,d,g,s);case 1:return d=i.type,g=i.pendingProps,g=i.elementType===d?g:Zn(d,g),Tp(r,i,d,g,s);case 3:e:{if(Cp(i),r===null)throw Error(t(387));d=i.pendingProps,y=i.memoizedState,g=y.element,Bh(r,i),Va(i,d,null,s);var w=i.memoizedState;if(d=w.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=y,i.memoizedState=y,i.flags&256){g=li(Error(t(423)),i),i=Ep(r,i,d,s,g);break e}else if(d!==g){g=li(Error(t(424)),i),i=Ep(r,i,d,s,g);break e}else for(Nn=Gt(i.stateNode.containerInfo.firstChild),_n=i,Ve=!0,Qn=null,s=Fh(i,null,d,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ri(),d===g){i=Rt(r,i,s);break e}vn(r,i,d,s)}i=i.child}return i;case 5:return Uh(i),r===null&&Kl(i),d=i.type,g=i.pendingProps,y=r!==null?r.memoizedProps:null,w=g.children,zl(d,g)?w=null:y!==null&&zl(d,y)&&(i.flags|=32),Sp(r,i),vn(r,i,w,s),i.child;case 6:return r===null&&Kl(i),null;case 13:return Pp(r,i,s);case 4:return tu(i,i.stateNode.containerInfo),d=i.pendingProps,r===null?i.child=ii(i,null,d,s):vn(r,i,d,s),i.child;case 11:return d=i.type,g=i.pendingProps,g=i.elementType===d?g:Zn(d,g),vp(r,i,d,g,s);case 7:return vn(r,i,i.pendingProps,s),i.child;case 8:return vn(r,i,i.pendingProps.children,s),i.child;case 12:return vn(r,i,i.pendingProps.children,s),i.child;case 10:e:{if(d=i.type._context,g=i.pendingProps,y=i.memoizedProps,w=g.value,Oe(Fa,d._currentValue),d._currentValue=w,y!==null)if(Xn(y.value,w)){if(y.children===g.children&&!kn.current){i=Rt(r,i,s);break e}}else for(y=i.child,y!==null&&(y.return=i);y!==null;){var R=y.dependencies;if(R!==null){w=y.child;for(var I=R.firstContext;I!==null;){if(I.context===d){if(y.tag===1){I=Pt(-1,s&-s),I.tag=2;var z=y.updateQueue;if(z!==null){z=z.shared;var q=z.pending;q===null?I.next=I:(I.next=q.next,q.next=I),z.pending=I}}y.lanes|=s,I=y.alternate,I!==null&&(I.lanes|=s),Zl(y.return,s,i),R.lanes|=s;break}I=I.next}}else if(y.tag===10)w=y.type===i.type?null:y.child;else if(y.tag===18){if(w=y.return,w===null)throw Error(t(341));w.lanes|=s,R=w.alternate,R!==null&&(R.lanes|=s),Zl(w,s,i),w=y.sibling}else w=y.child;if(w!==null)w.return=y;else for(w=y;w!==null;){if(w===i){w=null;break}if(y=w.sibling,y!==null){y.return=w.return,w=y;break}w=w.return}y=w}vn(r,i,g.children,s),i=i.child}return i;case 9:return g=i.type,d=i.pendingProps.children,ai(i,s),g=Wn(g),d=d(g),i.flags|=1,vn(r,i,d,s),i.child;case 14:return d=i.type,g=Zn(d,i.pendingProps),g=Zn(d.type,g),wp(r,i,d,g,s);case 15:return bp(r,i,i.type,i.pendingProps,s);case 17:return d=i.type,g=i.pendingProps,g=i.elementType===d?g:Zn(d,g),Ja(r,i),i.tag=1,Sn(d)?(r=!0,_a(i)):r=!1,ai(i,s),fp(i,d,g),mu(i,d,g,s),vu(null,i,d,!0,r,s);case 19:return Ap(r,i,s);case 22:return kp(r,i,s)}throw Error(t(156,i.tag))};function Zp(r,i){return _f(r,i)}function lk(r,i,s,d){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(r,i,s,d){return new lk(r,i,s,d)}function zu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function uk(r){if(typeof r=="function")return zu(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ne)return 11;if(r===J)return 14}return 2}function ir(r,i){var s=r.alternate;return s===null?(s=Hn(r.tag,i,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=i,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,i=r.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function ss(r,i,s,d,g,y){var w=2;if(d=r,typeof r=="function")zu(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case X:return Er(s.children,g,y,i);case U:w=8,g|=8;break;case re:return r=Hn(12,s,i,g|2),r.elementType=re,r.lanes=y,r;case ye:return r=Hn(13,s,i,g),r.elementType=ye,r.lanes=y,r;case ie:return r=Hn(19,s,i,g),r.elementType=ie,r.lanes=y,r;case ce:return ls(s,g,y,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case O:w=10;break e;case ee:w=9;break e;case ne:w=11;break e;case J:w=14;break e;case be:w=16,d=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Hn(w,s,i,g),i.elementType=r,i.type=d,i.lanes=y,i}function Er(r,i,s,d){return r=Hn(7,r,d,i),r.lanes=s,r}function ls(r,i,s,d){return r=Hn(22,r,d,i),r.elementType=ce,r.lanes=s,r.stateNode={isHidden:!1},r}function Bu(r,i,s){return r=Hn(6,r,null,i),r.lanes=s,r}function Vu(r,i,s){return i=Hn(4,r.children!==null?r.children:[],r.key,i),i.lanes=s,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function ck(r,i,s,d,g){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Wu(r,i,s,d,g,y,w,R,I){return r=new ck(r,i,s,R,I),i===1?(i=1,y===!0&&(i|=8)):i=0,y=Hn(3,null,null,i),r.current=y,y.stateNode=r,y.memoizedState={element:d,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(y),r}function dk(r,i,s){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:d==null?null:""+d,children:r,containerInfo:i,implementation:s}}function em(r){if(!r)return Yt;r=r._reactInternals;e:{if(pr(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Sn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var s=r.type;if(Sn(s))return Rh(r,s,i)}return i}function nm(r,i,s,d,g,y,w,R,I){return r=Wu(s,d,!0,r,g,y,w,R,I),r.context=em(null),s=r.current,d=wn(),g=tr(s),y=Pt(d,g),y.callback=i??null,Qt(s,y,g),r.current.lanes=g,Vi(r,g,d),En(r,d),r}function us(r,i,s,d){var g=i.current,y=wn(),w=tr(g);return s=em(s),i.context===null?i.context=s:i.pendingContext=s,i=Pt(y,w),i.payload={element:r},d=d===void 0?null:d,d!==null&&(i.callback=d),r=Qt(g,i,w),r!==null&&(tt(r,g,w,y),Ba(r,g,w)),w}function cs(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function tm(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<i?s:i}}function Uu(r,i){tm(r,i),(r=r.alternate)&&tm(r,i)}function fk(){return null}var rm=typeof reportError=="function"?reportError:function(r){console.error(r)};function $u(r){this._internalRoot=r}ds.prototype.render=$u.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));us(r,i,null,null)},ds.prototype.unmount=$u.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Sr(function(){us(null,r,null,null)}),i[kt]=null}};function ds(r){this._internalRoot=r}ds.prototype.unstable_scheduleHydration=function(r){if(r){var i=Bf();r={blockedOn:null,target:r,priority:i};for(var s=0;s<$t.length&&i!==0&&i<$t[s].priority;s++);$t.splice(s,0,r),s===0&&Uf(r)}};function Hu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function fs(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function im(){}function hk(r,i,s,d,g){if(g){if(typeof d=="function"){var y=d;d=function(){var z=cs(w);y.call(z)}}var w=nm(i,d,r,0,null,!1,!1,"",im);return r._reactRootContainer=w,r[kt]=w.current,no(r.nodeType===8?r.parentNode:r),Sr(),w}for(;g=r.lastChild;)r.removeChild(g);if(typeof d=="function"){var R=d;d=function(){var z=cs(I);R.call(z)}}var I=Wu(r,0,!1,null,null,!1,!1,"",im);return r._reactRootContainer=I,r[kt]=I.current,no(r.nodeType===8?r.parentNode:r),Sr(function(){us(i,I,s,d)}),I}function hs(r,i,s,d,g){var y=s._reactRootContainer;if(y){var w=y;if(typeof g=="function"){var R=g;g=function(){var I=cs(w);R.call(I)}}us(i,w,r,g)}else w=hk(s,i,r,g,d);return cs(w)}Ff=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var s=Bi(i.pendingLanes);s!==0&&(ml(i,s|1),En(i,Ke()),(je&6)===0&&(di=Ke()+500,Jt()))}break;case 13:Sr(function(){var d=Et(r,1);if(d!==null){var g=wn();tt(d,r,1,g)}}),Uu(r,1)}},gl=function(r){if(r.tag===13){var i=Et(r,134217728);if(i!==null){var s=wn();tt(i,r,134217728,s)}Uu(r,134217728)}},zf=function(r){if(r.tag===13){var i=tr(r),s=Et(r,i);if(s!==null){var d=wn();tt(s,r,i,d)}Uu(r,i)}},Bf=function(){return Me},Vf=function(r,i){var s=Me;try{return Me=r,i()}finally{Me=s}},ll=function(r,i,s){switch(i){case"input":if(Vr(r,s),i=s.name,s.type==="radio"&&i!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var d=s[i];if(d!==r&&d.form===r.form){var g=ja(d);if(!g)throw Error(t(90));ra(d),Vr(d,g)}}}break;case"textarea":aa(r,s);break;case"select":i=s.value,i!=null&&zt(r,!!s.multiple,i,!1)}},Cf=Lu,Ef=Sr;var pk={usingClientEntryPoint:!1,Events:[io,Qr,ja,Sf,Tf,Lu]},vo={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mk={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=jf(r),r===null?null:r.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||fk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{da=ps.inject(mk),lt=ps}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pk,Pn.createPortal=function(r,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return dk(r,i,null,s)},Pn.createRoot=function(r,i){if(!Hu(r))throw Error(t(299));var s=!1,d="",g=rm;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(d=i.identifierPrefix),i.onRecoverableError!==void 0&&(g=i.onRecoverableError)),i=Wu(r,1,!1,null,null,s,!1,d,g),r[kt]=i.current,no(r.nodeType===8?r.parentNode:r),new $u(i)},Pn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=jf(i),r=r===null?null:r.stateNode,r},Pn.flushSync=function(r){return Sr(r)},Pn.hydrate=function(r,i,s){if(!fs(i))throw Error(t(200));return hs(null,r,i,!0,s)},Pn.hydrateRoot=function(r,i,s){if(!Hu(r))throw Error(t(405));var d=s!=null&&s.hydratedSources||null,g=!1,y="",w=rm;if(s!=null&&(s.unstable_strictMode===!0&&(g=!0),s.identifierPrefix!==void 0&&(y=s.identifierPrefix),s.onRecoverableError!==void 0&&(w=s.onRecoverableError)),i=nm(i,null,r,1,s??null,g,!1,y,w),r[kt]=i.current,no(r),d)for(r=0;r<d.length;r++)s=d[r],g=s._getVersion,g=g(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,g]:i.mutableSourceEagerHydrationData.push(s,g);return new ds(i)},Pn.render=function(r,i,s){if(!fs(i))throw Error(t(200));return hs(null,r,i,!1,s)},Pn.unmountComponentAtNode=function(r){if(!fs(r))throw Error(t(40));return r._reactRootContainer?(Sr(function(){hs(null,null,r,!1,function(){r._reactRootContainer=null,r[kt]=null})}),!0):!1},Pn.unstable_batchedUpdates=Lu,Pn.unstable_renderSubtreeIntoContainer=function(r,i,s,d){if(!fs(s))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return hs(r,i,s,!1,d)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var fm;function Tk(){if(fm)return Ku.exports;fm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),Ku.exports=Sk(),Ku.exports}var hm;function Ck(){if(hm)return ms;hm=1;var e=Tk();return ms.createRoot=e.createRoot,ms.hydrateRoot=e.hydrateRoot,ms}var Ek=Ck();const Pk=Hs(Ek);/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var pd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Gy=/^[\\/]{2}/;function Rk(e,n){return n+e.replace(/\\/g,"/")}var pm="popstate";function mm(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function Ak(e={}){function n(o,a){var h;let u=(h=a.state)==null?void 0:h.masked,{pathname:l,search:c,hash:f}=u||o.location;return Oc("",{pathname:l,search:c,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function t(o,a){return typeof a=="string"?a:wi(a)}return Ik(n,t,null,e)}function He(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function gt(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function jk(){return Math.random().toString(36).substring(2,10)}function gm(e,n){return{usr:e.state,key:e.key,idx:n,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Oc(e,n,t=null,o,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?Pi(n):n,state:t,key:n&&n.key||o||jk(),mask:a}}function wi({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function Pi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let o=e.indexOf("?");o>=0&&(n.search=e.substring(o),e=e.substring(0,o)),e&&(n.pathname=e)}return n}function Ik(e,n,t,o={}){let{window:a=document.defaultView,v5Compat:u=!1}=o,l=a.history,c="POP",f=null,h=p();h==null&&(h=0,l.replaceState({...l.state,idx:h},""));function p(){return(l.state||{idx:null}).idx}function m(){c="POP";let E=p(),S=E==null?null:E-h;h=E,f&&f({action:c,location:T.location,delta:S})}function x(E,S){c="PUSH";let _=mm(E)?E:Oc(T.location,E,S);h=p()+1;let j=gm(_,h),V=T.createHref(_.mask||_);try{l.pushState(j,"",V)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;a.location.assign(V)}u&&f&&f({action:c,location:T.location,delta:1})}function v(E,S){c="REPLACE";let _=mm(E)?E:Oc(T.location,E,S);h=p();let j=gm(_,h),V=T.createHref(_.mask||_);l.replaceState(j,"",V),u&&f&&f({action:c,location:T.location,delta:0})}function b(E){return _k(a,E)}let T={get action(){return c},get location(){return e(a,l)},listen(E){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(pm,m),f=E,()=>{a.removeEventListener(pm,m),f=null}},createHref(E){return n(a,E)},createURL:b,encodeLocation(E){let S=b(E);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:v,go(E){return l.go(E)}};return T}function _k(e,n,t=!1){let o="http://localhost";e&&(o=e.location.origin!=="null"?e.location.origin:e.location.href),He(o,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:wi(n);return a=a.replace(/ $/,"%20"),!t&&Gy.test(a)&&(a=o+a),new URL(a,o)}function Ky(e,n,t="/"){return Nk(e,n,t,!1)}function Nk(e,n,t,o,a){let u=typeof n=="string"?Pi(n):n,l=_t(u.pathname||"/",t);if(l==null)return null;let c=Mk(e),f=null,h=Hk(l);for(let p=0;f==null&&p<c.length;++p)f=$k(c[p],h,o);return f}function Mk(e){let n=Yy(e);return Dk(n),n}function Yy(e,n=[],t=[],o="",a=!1){let u=(l,c,f=a,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(o)&&f)return;He(p.relativePath.startsWith(o),`Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(o.length)}let m=it([o,p.relativePath]),x=t.concat(p);l.children&&l.children.length>0&&(He(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Yy(l.children,n,x,m,f)),!(l.path==null&&!l.index)&&n.push({path:m,score:Wk(m,l.index),routesMeta:x.map((v,b)=>{let[T,E]=Qy(v.relativePath,v.caseSensitive,b===x.length-1);return{...v,matcher:T,compiledParams:E}})})};return e.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))u(l,c);else for(let h of Jy(l.path))u(l,c,!0,h)}),n}function Jy(e){let n=e.split("/");if(n.length===0)return[];let[t,...o]=n,a=t.endsWith("?"),u=t.replace(/\?$/,"");if(o.length===0)return a?[u,""]:[u];let l=Jy(o.join("/")),c=[];return c.push(...l.map(f=>f===""?u:[u,f].join("/"))),a&&c.push(...l),c.map(f=>e.startsWith("/")&&f===""?"/":f)}function Dk(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Uk(n.routesMeta.map(o=>o.childrenIndex),t.routesMeta.map(o=>o.childrenIndex)))}var Lk=/^:[\w-]+$/,Ok=3,Fk=2,zk=1,Bk=10,Vk=-2,ym=e=>e==="*";function Wk(e,n){let t=e.split("/"),o=t.length;return t.some(ym)&&(o+=Vk),n&&(o+=Fk),t.filter(a=>!ym(a)).reduce((a,u)=>a+(Lk.test(u)?Ok:u===""?zk:Bk),o)}function Uk(e,n){return e.length===n.length&&e.slice(0,-1).every((o,a)=>o===n[a])?e[e.length-1]-n[n.length-1]:0}function $k(e,n,t=!1){let{routesMeta:o}=e,a={},u="/",l=[];for(let c=0;c<o.length;++c){let f=o[c],h=c===o.length-1,p=u==="/"?n:n.slice(u.length)||"/",m={path:f.relativePath,caseSensitive:f.caseSensitive,end:h},x=f.matcher&&f.compiledParams?Xy(m,p,f.matcher,f.compiledParams):Ns(m,p),v=f.route;if(!x&&h&&t&&!o[o.length-1].route.index&&(x=Ns({path:f.relativePath,caseSensitive:f.caseSensitive,end:!1},p)),!x)return null;Object.assign(a,x.params),l.push({params:a,pathname:it([u,x.pathname]),pathnameBase:Kk(it([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=it([u,x.pathnameBase]))}return l}function Ns(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,o]=Qy(e.path,e.caseSensitive,e.end);return Xy(e,n,t,o)}function Xy(e,n,t,o){let a=n.match(t);if(!a)return null;let u=a[0],l=bi(u,1),c=a.slice(1);return{params:o.reduce((h,{paramName:p,isOptional:m},x)=>{if(p==="*"){let b=c[x]||"";l=bi(u.slice(0,u.length-b.length),1)}const v=c[x];return m&&!v?h[p]=void 0:h[p]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:l,pattern:e}}function Qy(e,n=!1,t=!0){gt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let o=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f,h,p)=>{if(o.push({paramName:c,isOptional:f!=null}),f){let m=p.charAt(h+l.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(o.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),o]}function Hk(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return gt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function _t(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,o=e.charAt(t);return o&&o!=="/"?null:e.slice(t)||"/"}function qk(e,n="/"){let{pathname:t,search:o="",hash:a=""}=typeof e=="string"?Pi(e):e,u;return t?(t=e0(t),t.startsWith("/")||t.startsWith("\\")?u=xm(t.substring(1),"/"):u=xm(t,n)):u=n,{pathname:u,search:Yk(o),hash:Jk(a)}}function xm(e,n){let t=bi(n).split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Xu(e,n,t,o){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gk(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Zy(e){let n=Gk(e);return n.map((t,o)=>o===n.length-1?t.pathname:t.pathnameBase)}function md(e,n,t,o=!1){let a;typeof e=="string"?a=Pi(e):(a={...e},He(!a.pathname||!a.pathname.includes("?"),Xu("?","pathname","search",a)),He(!a.pathname||!a.pathname.includes("#"),Xu("#","pathname","hash",a)),He(!a.search||!a.search.includes("#"),Xu("#","search","hash",a)));let u=e===""||a.pathname==="",l=u?"/":a.pathname,c;if(l==null)c=t;else{let m=n.length-1;if(!o&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),m-=1;a.pathname=x.join("/")}c=m>=0?n[m]:"/"}let f=qk(a,c),h=l&&l!=="/"&&l.endsWith("/"),p=(u||l===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(h||p)&&(f.pathname+="/"),f}var e0=e=>e.replace(/[\\/]{2,}/g,"/"),it=e=>e0(e.join("/"));function bi(e,n=0){let t=e.length;for(;t>n&&e.charCodeAt(t-1)===47;)t--;return t===e.length?e:e.slice(0,t)}var Kk=e=>bi(e).replace(/^\/*/,"/"),Yk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Xk=class{constructor(e,n,t,o=!1){this.status=e,this.statusText=n||"",this.internal=o,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Qk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Zk(e){let n=e.map(t=>t.route.path).filter(Boolean);return it(n)||"/"}var n0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function t0(e,n){let t=e;if(typeof t!="string"||!pd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let o=t,a=!1;if(n0)try{let u=new URL(window.location.href),l=Gy.test(t)?new URL(Rk(t,u.protocol)):new URL(t),c=_t(l.pathname,n);l.origin===u.origin&&c!=null?t=c+l.search+l.hash:a=!0}catch{gt(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var vm=new URL("http://localhost");function r0(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),vm)}catch{return vm}}function Qu(e,n){return e.origin===n.origin&&(e.origin!=="null"||e.protocol===n.protocol&&e.host===n.host)}function e1(e,n){if(e.startsWith("//"))return!0;let t=n.protocol.toLowerCase();return e.toLowerCase().startsWith(t)?n.host===""||e.slice(t.length).startsWith("//"):!1}function i0(e,n,t,o){let a=null;try{a=e==null?null:new URL(e,t)}catch{}let u=new URL(n,t),l=a!=null&&!Qu(a,t),c=!Qu(u,t);if(o==="reject"){if(l||c)throw new Error("External navigation is not allowed")}else if(c&&(a==null||!e1(e,a)||!Qu(a,u)))throw new Error("External navigation is not allowed")}var o0=["POST","PUT","PATCH","DELETE"];new Set(o0);var n1=["GET",...o0];new Set(n1);var t1=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function r1(e){try{return t1.includes(new URL(e).protocol)}catch{return!1}}var Ri=P.createContext(null);Ri.displayName="DataRouter";var qs=P.createContext(null);qs.displayName="DataRouterState";var a0=P.createContext(!1);function i1(){return P.useContext(a0)}var s0=P.createContext({isTransitioning:!1});s0.displayName="ViewTransition";var o1=P.createContext(new Map);o1.displayName="Fetchers";var a1=P.createContext(null);a1.displayName="Await";var Yn=P.createContext(null);Yn.displayName="Navigation";var Go=P.createContext(null);Go.displayName="Location";var xt=P.createContext({outlet:null,matches:[],isDataRoute:!1});xt.displayName="Route";var gd=P.createContext(null);gd.displayName="RouteError";var l0="REACT_ROUTER_ERROR",s1="REDIRECT",l1="ROUTE_ERROR_RESPONSE";function u1(e){if(e.startsWith(`${l0}:${s1}:{`))try{let n=JSON.parse(e.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function c1(e){if(e.startsWith(`${l0}:${l1}:{`))try{let n=JSON.parse(e.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new Xk(n.status,n.statusText,n.data)}catch{}}function d1(e,{relative:n}={}){He(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:o}=P.useContext(Yn),{hash:a,pathname:u,search:l}=Yo(e,{relative:n}),c=u;return t!=="/"&&(c=u==="/"?t:it([t,u])),o.createHref({pathname:c,search:l,hash:a})}function Ko(){return P.useContext(Go)!=null}function Lt(){return He(Ko(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(Go).location}var u0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function c0(e){P.useContext(Yn).static||P.useLayoutEffect(e)}function f1(){let{isDataRoute:e}=P.useContext(xt);return e?C1():h1()}function h1(){He(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let e=P.useContext(Ri),{basename:n,navigator:t}=P.useContext(Yn),{matches:o}=P.useContext(xt),{pathname:a}=Lt(),u=JSON.stringify(Zy(o)),l=P.useRef(!1);return c0(()=>{l.current=!0}),P.useCallback((f,h={})=>{if(gt(l.current,u0),!l.current)return;if(typeof f=="number"){t.go(f);return}let p=md(f,JSON.parse(u),a,h.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:it([n,p.pathname])),i0(typeof f=="string"?f:wi(f),t.createHref(p),r0(t),"reject"),(h.replace?t.replace:t.push)(p,h.state,h)},[n,t,u,a,e])}P.createContext(null);function d0(){let{matches:e}=P.useContext(xt),n=e[e.length-1];return(n==null?void 0:n.params)??{}}function Yo(e,{relative:n}={}){let{matches:t}=P.useContext(xt),{pathname:o}=Lt(),a=JSON.stringify(Zy(t));return P.useMemo(()=>md(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function p1(e,n){return f0(e,n)}function f0(e,n,t){var E;He(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(Yn),{matches:a}=P.useContext(xt),u=a[a.length-1],l=u?u.params:{},c=u?u.pathname:"/",f=u?u.pathnameBase:"/",h=u&&u.route;{let S=h&&h.path||"";p0(c,!h||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let p=Lt(),m;if(n){let S=typeof n=="string"?Pi(n):n;He(f==="/"||((E=S.pathname)==null?void 0:E.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${S.pathname}" was given in the \`location\` prop.`),m=S}else m=p;let x=m.pathname||"/",v=x;if(f!=="/"){let S=f.replace(/^\//,"").split("/");v="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=t&&t.state.matches.length?t.state.matches.map(S=>Object.assign(S,{route:t.manifest[S.route.id]||S.route})):Ky(e,{pathname:v});gt(h||b!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),gt(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=v1(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:it([f,o.encodeLocation?o.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:it([f,o.encodeLocation?o.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),a,t);return n&&T?P.createElement(Go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},T):T}function m1(){let e=T1(),n=Qk(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:u},"ErrorBoundary")," or"," ",P.createElement("code",{style:u},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},n),t?P.createElement("pre",{style:a},t):null,l)}var g1=P.createElement(m1,null),h0=class extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const t=c1(e.digest);t&&(e=t)}let n=e!==void 0?P.createElement(xt.Provider,{value:this.props.routeContext},P.createElement(gd.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?P.createElement(y1,{error:e},n):n}};h0.contextType=a0;var Zu=new WeakMap;function y1({children:e,error:n}){let{basename:t,navigator:o}=P.useContext(Yn);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let a=u1(n.digest);if(a){let u=Zu.get(n);if(u)throw u;let l=t0(a.location,t),c=l.absoluteURL||l.to;if(i0(a.location,c,r0(o),"allow-explicit"),r1(c))throw new Error("Invalid redirect location");if(n0&&!Zu.get(n))if(l.isExternal||a.reloadDocument)window.location.href=c;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw Zu.set(n,f),f}return P.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return e}function x1({routeContext:e,match:n,children:t}){let o=P.useContext(Ri);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(xt.Provider,{value:e},t)}function v1(e,n=[],t){let o=t==null?void 0:t.state;if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,u=o==null?void 0:o.errors;if(u!=null){let p=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);He(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let l=!1,c=-1;if(t&&o){l=o.renderFallback;for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=p),m.route.id){let{loaderData:x,errors:v}=o,b=m.route.loader&&!x.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||b){t.isStatic&&(l=!0),c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}}let f=t==null?void 0:t.onError,h=o&&f?(p,m)=>{var x,v;f(p,{location:o.location,params:((v=(x=o.matches)==null?void 0:x[0])==null?void 0:v.params)??{},pattern:Zk(o.matches),errorInfo:m})}:void 0;return a.reduceRight((p,m,x)=>{let v,b=!1,T=null,E=null;o&&(v=u&&m.route.id?u[m.route.id]:void 0,T=m.route.errorElement||g1,l&&(c<0&&x===0?(p0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,E=null):c===x&&(b=!0,E=m.route.hydrateFallbackElement||null)));let S=n.concat(a.slice(0,x+1)),_=()=>{let j;return v?j=T:b?j=E:m.route.Component?j=P.createElement(m.route.Component,null):m.route.element?j=m.route.element:j=p,P.createElement(x1,{match:m,routeContext:{outlet:p,matches:S,isDataRoute:o!=null},children:j})};return o&&(m.route.ErrorBoundary||m.route.errorElement||x===0)?P.createElement(h0,{location:o.location,revalidation:o.revalidation,component:T,error:v,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):_()},null)}function yd(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function w1(e){let n=P.useContext(Ri);return He(n,yd(e)),n}function b1(e){let n=P.useContext(qs);return He(n,yd(e)),n}function k1(e){let n=P.useContext(xt);return He(n,yd(e)),n}function xd(e){let n=k1(e),t=n.matches[n.matches.length-1];return He(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function S1(){return xd("useRouteId")}function T1(){var o;let e=P.useContext(gd),n=b1("useRouteError"),t=xd("useRouteError");return e!==void 0?e:(o=n.errors)==null?void 0:o[t]}function C1(){let{router:e}=w1("useNavigate"),n=xd("useNavigate"),t=P.useRef(!1);return c0(()=>{t.current=!0}),P.useCallback(async(a,u={})=>{gt(t.current,u0),t.current&&(typeof a=="number"?await e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var wm={};function p0(e,n,t){!n&&!wm[e]&&(wm[e]=!0,gt(!1,t))}P.memo(E1);function E1({routes:e,manifest:n,future:t,state:o,isStatic:a,onError:u}){return f0(e,void 0,{manifest:n,state:o,isStatic:a,onError:u})}function Ao(e){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P1({basename:e="/",children:n=null,location:t,navigationType:o="POP",navigator:a,static:u=!1,useTransitions:l}){He(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),f=P.useMemo(()=>({basename:c,navigator:a,static:u,useTransitions:l,future:{}}),[c,a,u,l]);typeof t=="string"&&(t=Pi(t));let{pathname:h="/",search:p="",hash:m="",state:x=null,key:v="default",mask:b}=t,T=P.useMemo(()=>{let E=_t(h,c);return E==null?null:{location:{pathname:E,search:p,hash:m,state:x,key:v,mask:b},navigationType:o}},[c,h,p,m,x,v,o,b]);return gt(T!=null,`<Router basename="${c}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:P.createElement(Yn.Provider,{value:f},P.createElement(Go.Provider,{children:n,value:T}))}function R1({children:e,location:n}){return p1(Fc(e),n)}function Fc(e,n=[]){let t=[];return P.Children.forEach(e,(o,a)=>{if(!P.isValidElement(o))return;let u=[...n,a];if(o.type===P.Fragment){t.push.apply(t,Fc(o.props.children,u));return}He(o.type===Ao,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!o.props.index||!o.props.children,"An index route cannot have child routes.");let l={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(l.children=Fc(o.props.children,u)),t.push(l)}),t}var Ps="get",Rs="application/x-www-form-urlencoded";function Gs(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function A1(e){return Gs(e)&&e.tagName.toLowerCase()==="button"}function j1(e){return Gs(e)&&e.tagName.toLowerCase()==="form"}function I1(e){return Gs(e)&&e.tagName.toLowerCase()==="input"}function _1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N1(e,n){return e.button===0&&(!n||n==="_self")&&!_1(e)}var gs=null;function M1(){if(gs===null)try{new FormData(document.createElement("form"),0),gs=!1}catch{gs=!0}return gs}var D1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ec(e){return e!=null&&!D1.has(e)?(gt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Rs}"`),null):e}function L1(e,n){let t,o,a,u,l;if(j1(e)){let c=e.getAttribute("action");o=c?_t(c,n):null,t=e.getAttribute("method")||Ps,a=ec(e.getAttribute("enctype"))||Rs,u=new FormData(e)}else if(A1(e)||I1(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let f=e.getAttribute("formaction")||c.getAttribute("action");if(o=f?_t(f,n):null,t=e.getAttribute("formmethod")||c.getAttribute("method")||Ps,a=ec(e.getAttribute("formenctype"))||ec(c.getAttribute("enctype"))||Rs,u=new FormData(c,e),!M1()){let{name:h,type:p,value:m}=e;if(p==="image"){let x=h?`${h}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else h&&u.append(h,m)}}else{if(Gs(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ps,o=null,a=Rs,l=e}return u&&a==="text/plain"&&(l=u,u=void 0),{action:o,method:t.toLowerCase(),encType:a,formData:u,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vd(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function m0(e,n,t,o){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${o}`:a.pathname=`${a.pathname}.${o}`:a.pathname==="/"?a.pathname=`_root.${o}`:n&&_t(a.pathname,n)==="/"?a.pathname=`${bi(n)}/_root.${o}`:a.pathname=`${bi(a.pathname)}.${o}`,a}async function O1(e,n){if(e.id in n)return n[e.id];try{let t=await import(e.module);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function F1(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function z1(e,n,t){let o=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let l=await O1(u,t);return l.links?l.links():[]}return[]}));return U1(o.flat(1).filter(F1).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function bm(e,n,t,o,a,u){let l=(f,h)=>t[h]?f.route.id!==t[h].route.id:!0,c=(f,h)=>{var p;return t[h].pathname!==f.pathname||((p=t[h].route.path)==null?void 0:p.endsWith("*"))&&t[h].params["*"]!==f.params["*"]};return u==="assets"?n.filter((f,h)=>l(f,h)||c(f,h)):u==="data"?n.filter((f,h)=>{var m;let p=o.routes[f.route.id];if(!p||!p.hasLoader)return!1;if(l(f,h)||c(f,h))return!0;if(f.route.shouldRevalidate){let x=f.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:f.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function B1(e,n,{includeHydrateFallback:t}={}){return V1(e.map(o=>{let a=n.routes[o.route.id];if(!a)return[];let u=[a.module];return a.clientActionModule&&(u=u.concat(a.clientActionModule)),a.clientLoaderModule&&(u=u.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(u=u.concat(a.hydrateFallbackModule)),a.imports&&(u=u.concat(a.imports)),u}).flat(1))}function V1(e){return[...new Set(e)]}function W1(e){let n={},t=Object.keys(e).sort();for(let o of t)n[o]=e[o];return n}function U1(e,n){let t=new Set;return new Set(n),e.reduce((o,a)=>{let u=JSON.stringify(W1(a));return t.has(u)||(t.add(u),o.push({key:u,link:a})),o},[])}function wd(){let e=P.useContext(Ri);return vd(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function $1(){let e=P.useContext(qs);return vd(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var bd=P.createContext(void 0);bd.displayName="FrameworkContext";function Ks(){let e=P.useContext(bd);return vd(e,"You must render this element inside a <HydratedRouter> element"),e}function H1(e,n){let t=P.useContext(bd),[o,a]=P.useState(!1),[u,l]=P.useState(!1),{onFocus:c,onBlur:f,onMouseEnter:h,onMouseLeave:p,onTouchStart:m}=n,x=P.useRef(null);P.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let T=S=>{S.forEach(_=>{l(_.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[e]),P.useEffect(()=>{if(o){let T=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(T)}}},[o]);let v=()=>{a(!0)},b=()=>{a(!1),l(!1)};return t?e!=="intent"?[u,x,{}]:[u,x,{onFocus:bo(c,v),onBlur:bo(f,b),onMouseEnter:bo(h,v),onMouseLeave:bo(p,b),onTouchStart:bo(m,v)}]:[!1,x,{}]}function bo(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function q1({page:e,...n}){let t=i1(),{nonce:o}=Ks(),{router:a}=wd(),u=P.useMemo(()=>Ky(a.routes,e,a.basename),[a.routes,e,a.basename]);return u?(n.nonce==null&&o&&(n={...n,nonce:o}),t?P.createElement(K1,{page:e,matches:u,...n}):P.createElement(Y1,{page:e,matches:u,...n})):null}function G1(e){let{manifest:n,routeModules:t}=Ks(),[o,a]=P.useState([]);return P.useEffect(()=>{let u=!1;return z1(e,n,t).then(l=>{u||a(l)}),()=>{u=!0}},[e,n,t]),o}function K1({page:e,matches:n,...t}){let o=Lt(),{future:a}=Ks(),{basename:u}=wd(),l=P.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let c=m0(e,u,a.v8_trailingSlashAwareDataRequests,"rsc"),f=!1,h=[];for(let p of n)typeof p.route.shouldRevalidate=="function"?f=!0:h.push(p.route.id);return f&&h.length>0&&c.searchParams.set("_routes",h.join(",")),[c.pathname+c.search]},[u,a.v8_trailingSlashAwareDataRequests,e,o,n]);return P.createElement(P.Fragment,null,l.map(c=>P.createElement("link",{key:c,rel:"prefetch",as:"fetch",href:c,...t})))}function Y1({page:e,matches:n,...t}){let o=Lt(),{future:a,manifest:u,routeModules:l}=Ks(),{basename:c}=wd(),{loaderData:f,matches:h}=$1(),p=P.useMemo(()=>bm(e,n,h,u,o,"data"),[e,n,h,u,o]),m=P.useMemo(()=>bm(e,n,h,u,o,"assets"),[e,n,h,u,o]),x=P.useMemo(()=>{if(e===o.pathname+o.search+o.hash)return[];let T=new Set,E=!1;if(n.forEach(_=>{var V;let j=u.routes[_.route.id];!j||!j.hasLoader||(!p.some(B=>B.route.id===_.route.id)&&_.route.id in f&&((V=l[_.route.id])!=null&&V.shouldRevalidate)||j.hasClientLoader?E=!0:T.add(_.route.id))}),T.size===0)return[];let S=m0(e,c,a.v8_trailingSlashAwareDataRequests,"data");return E&&T.size>0&&S.searchParams.set("_routes",n.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[c,a.v8_trailingSlashAwareDataRequests,f,o,u,p,n,e,l]),v=P.useMemo(()=>B1(m,u),[m,u]),b=G1(m);return P.createElement(P.Fragment,null,x.map(T=>P.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...t})),v.map(T=>P.createElement("link",{key:T,rel:"modulepreload",href:T,...t})),b.map(({key:T,link:E})=>P.createElement("link",{key:T,nonce:t.nonce,...E,crossOrigin:E.crossOrigin??t.crossOrigin})))}function J1(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X1&&(window.__reactRouterVersion="7.18.3")}catch{}function Q1({basename:e,children:n,useTransitions:t,window:o}){let a=P.useRef();a.current==null&&(a.current=Ak({window:o,v5Compat:!0}));let u=a.current,[l,c]=P.useState({action:u.action,location:u.location}),f=P.useCallback(h=>{t===!1?c(h):P.startTransition(()=>c(h))},[t]);return P.useLayoutEffect(()=>u.listen(f),[u,f]),P.createElement(P1,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:u,useTransitions:t})}var yt=P.forwardRef(function({onClick:n,discover:t="render",prefetch:o="none",relative:a,reloadDocument:u,replace:l,mask:c,state:f,target:h,to:p,preventScrollReset:m,viewTransition:x,defaultShouldRevalidate:v,...b},T){let{basename:E,navigator:S,useTransitions:_}=P.useContext(Yn),j=typeof p=="string"&&pd.test(p),V=t0(p,E);p=V.to;let B=d1(p,{relative:a}),M=Lt(),X=null;if(c){let J=md(c,[],M.mask?M.mask.pathname:"/",!0);E!=="/"&&(J.pathname=J.pathname==="/"?E:it([E,J.pathname])),X=S.createHref(J)}let[U,re,O]=H1(o,b),ee=tS(p,{replace:l,mask:c,state:f,target:h,preventScrollReset:m,relative:a,viewTransition:x,defaultShouldRevalidate:v,useTransitions:_});function ne(J){n&&n(J),J.defaultPrevented||ee(J)}let ye=!(V.isExternal||u),ie=P.createElement("a",{...b,...O,href:(ye?X:void 0)||V.absoluteURL||B,onClick:ye?ne:n,ref:J1(T,re),target:h,"data-discover":!j&&t==="render"?"true":void 0});return U&&!j?P.createElement(P.Fragment,null,ie,P.createElement(q1,{page:B})):ie});yt.displayName="Link";var Z1=P.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:o="",end:a=!1,style:u,to:l,viewTransition:c,children:f,...h},p){let m=Yo(l,{relative:h.relative}),x=Lt(),v=P.useContext(qs),{navigator:b,basename:T}=P.useContext(Yn),E=v!=null&&sS(m)&&c===!0,S=b.encodeLocation?b.encodeLocation(m).pathname:m.pathname,_=x.pathname,j=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;t||(_=_.toLowerCase(),j=j?j.toLowerCase():null,S=S.toLowerCase()),j&&T&&(j=_t(j,T)||j);const V=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let B=_===S||!a&&_.startsWith(S)&&_.charAt(V)==="/",M=j!=null&&(j===S||!a&&j.startsWith(S)&&j.charAt(S.length)==="/"),X={isActive:B,isPending:M,isTransitioning:E},U=B?n:void 0,re;typeof o=="function"?re=o(X):re=[o,B?"active":null,M?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(X):u;return P.createElement(yt,{...h,"aria-current":U,className:re,ref:p,style:O,to:l,viewTransition:c},typeof f=="function"?f(X):f)});Z1.displayName="NavLink";var eS=P.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:o,replace:a,state:u,method:l=Ps,action:c,onSubmit:f,relative:h,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:x,...v},b)=>{let{useTransitions:T}=P.useContext(Yn),E=oS(),S=aS(c,{relative:h}),_=l.toLowerCase()==="get"?"get":"post",j=typeof c=="string"&&pd.test(c),V=B=>{if(f&&f(B),B.defaultPrevented)return;B.preventDefault();let M=B.nativeEvent.submitter,X=(M==null?void 0:M.getAttribute("formmethod"))||l,U=()=>E(M||B.currentTarget,{fetcherKey:n,method:X,navigate:t,replace:a,state:u,relative:h,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:x});T&&t!==!1?P.startTransition(()=>U()):U()};return P.createElement("form",{ref:b,method:_,action:S,onSubmit:o?f:V,...v,"data-discover":!j&&e==="render"?"true":void 0})});eS.displayName="Form";function nS(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function g0(e){let n=P.useContext(Ri);return He(n,nS(e)),n}function tS(e,{target:n,replace:t,mask:o,state:a,preventScrollReset:u,relative:l,viewTransition:c,defaultShouldRevalidate:f,useTransitions:h}={}){let p=f1(),m=Lt(),x=Yo(e,{relative:l});return P.useCallback(v=>{if(N1(v,n)){v.preventDefault();let b=t!==void 0?t:wi(m)===wi(x),T=()=>p(e,{replace:b,mask:o,state:a,preventScrollReset:u,relative:l,viewTransition:c,defaultShouldRevalidate:f});h?P.startTransition(()=>T()):T()}},[m,p,x,t,o,a,n,e,u,l,c,f,h])}var rS=0,iS=()=>`__${String(++rS)}__`;function oS(){let{router:e}=g0("useSubmit"),{basename:n}=P.useContext(Yn),t=S1(),o=e.fetch,a=e.navigate;return P.useCallback(async(u,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=L1(u,n);if(l.navigate===!1){let x=l.fetcherKey||iS();await o(x,t,l.action||c,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a(l.action||c,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:t,flushSync:l.flushSync,viewTransition:l.viewTransition})},[o,a,n,t])}function aS(e,{relative:n}={}){let{basename:t}=P.useContext(Yn),o=P.useContext(xt);He(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),u={...Yo(e||".",{relative:n})},l=Lt();if(e==null){u.search=l.search;let c=new URLSearchParams(u.search),f=c.getAll("index");if(f.some(p=>p==="")){c.delete("index"),f.filter(m=>m).forEach(m=>c.append("index",m));let p=c.toString();u.search=p?`?${p}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:it([t,u.pathname])),wi(u)}function sS(e,{relative:n}={}){let t=P.useContext(s0);He(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=g0("useViewTransitionState"),a=Yo(e,{relative:n});if(!t.isTransitioning)return!1;let u=_t(t.currentLocation.pathname,o)||t.currentLocation.pathname,l=_t(t.nextLocation.pathname,o)||t.nextLocation.pathname;return Ns(a.pathname,l)!=null||Ns(a.pathname,u)!=null}const kd=P.createContext({});function Or(e){const n=P.useRef(null);return n.current===null&&(n.current=e()),n.current}const Ys=P.createContext(null),Js=P.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class lS extends P.Component{getSnapshotBeforeUpdate(n){const t=this.props.childRef.current;if(t&&n.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function uS({children:e,isPresent:n}){const t=P.useId(),o=P.useRef(null),a=P.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=P.useContext(Js);return P.useInsertionEffect(()=>{const{width:l,height:c,top:f,left:h}=a.current;if(n||!o.current||!l||!c)return;o.current.dataset.motionPopId=t;const p=document.createElement("style");return u&&(p.nonce=u),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${c}px !important;
            top: ${f}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[n]),k.jsx(lS,{isPresent:n,childRef:o,sizeRef:a,children:P.cloneElement(e,{ref:o})})}const cS=({children:e,initial:n,isPresent:t,onExitComplete:o,custom:a,presenceAffectsLayout:u,mode:l})=>{const c=Or(dS),f=P.useId(),h=P.useCallback(m=>{c.set(m,!0);for(const x of c.values())if(!x)return;o&&o()},[c,o]),p=P.useMemo(()=>({id:f,initial:n,isPresent:t,custom:a,onExitComplete:h,register:m=>(c.set(m,!1),()=>c.delete(m))}),u?[Math.random(),h]:[t,h]);return P.useMemo(()=>{c.forEach((m,x)=>c.set(x,!1))},[t]),P.useEffect(()=>{!t&&!c.size&&o&&o()},[t]),l==="popLayout"&&(e=k.jsx(uS,{isPresent:t,children:e})),k.jsx(Ys.Provider,{value:p,children:e})};function dS(){return new Map}function y0(e=!0){const n=P.useContext(Ys);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:o,register:a}=n,u=P.useId();P.useEffect(()=>{e&&a(u)},[e]);const l=P.useCallback(()=>e&&o&&o(u),[u,o,e]);return!t&&o?[!1,l]:[!0]}const ys=e=>e.key||"";function km(e){const n=[];return P.Children.forEach(e,t=>{P.isValidElement(t)&&n.push(t)}),n}const Sd=typeof window<"u",Td=Sd?P.useLayoutEffect:P.useEffect,at=({children:e,custom:n,initial:t=!0,onExitComplete:o,presenceAffectsLayout:a=!0,mode:u="sync",propagate:l=!1})=>{const[c,f]=y0(l),h=P.useMemo(()=>km(e),[e]),p=l&&!c?[]:h.map(ys),m=P.useRef(!0),x=P.useRef(h),v=Or(()=>new Map),[b,T]=P.useState(h),[E,S]=P.useState(h);Td(()=>{m.current=!1,x.current=h;for(let V=0;V<E.length;V++){const B=ys(E[V]);p.includes(B)?v.delete(B):v.get(B)!==!0&&v.set(B,!1)}},[E,p.length,p.join("-")]);const _=[];if(h!==b){let V=[...h];for(let B=0;B<E.length;B++){const M=E[B],X=ys(M);p.includes(X)||(V.splice(B,0,M),_.push(M))}u==="wait"&&_.length&&(V=_),S(km(V)),T(h);return}const{forceRender:j}=P.useContext(kd);return k.jsx(k.Fragment,{children:E.map(V=>{const B=ys(V),M=l&&!c?!1:h===E||p.includes(B),X=()=>{if(v.has(B))v.set(B,!0);else return;let U=!0;v.forEach(re=>{re||(U=!1)}),U&&(j==null||j(),S(x.current),l&&(f==null||f()),o&&o())};return k.jsx(cS,{isPresent:M,initial:!m.current||t?void 0:!1,custom:M?void 0:n,presenceAffectsLayout:a,mode:u,onExitComplete:M?void 0:X,children:V},B)})})},Ln=e=>e;let x0=Ln;function Cd(e){let n;return()=>(n===void 0&&(n=e()),n)}const ki=(e,n,t)=>{const o=n-e;return o===0?1:(t-e)/o},jt=e=>e*1e3,It=e=>e/1e3,fS={useManualTiming:!1};function hS(e){let n=new Set,t=new Set,o=!1,a=!1;const u=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(h){u.has(h)&&(f.schedule(h),e()),h(l)}const f={schedule:(h,p=!1,m=!1)=>{const v=m&&o?n:t;return p&&u.add(h),v.has(h)||v.add(h),h},cancel:h=>{t.delete(h),u.delete(h)},process:h=>{if(l=h,o){a=!0;return}o=!0,[n,t]=[t,n],n.forEach(c),n.clear(),o=!1,a&&(a=!1,f.process(h))}};return f}const xs=["read","resolveKeyframes","update","preRender","render","postRender"],pS=40;function v0(e,n){let t=!1,o=!0;const a={delta:0,timestamp:0,isProcessing:!1},u=()=>t=!0,l=xs.reduce((S,_)=>(S[_]=hS(u),S),{}),{read:c,resolveKeyframes:f,update:h,preRender:p,render:m,postRender:x}=l,v=()=>{const S=performance.now();t=!1,a.delta=o?1e3/60:Math.max(Math.min(S-a.timestamp,pS),1),a.timestamp=S,a.isProcessing=!0,c.process(a),f.process(a),h.process(a),p.process(a),m.process(a),x.process(a),a.isProcessing=!1,t&&n&&(o=!1,e(v))},b=()=>{t=!0,o=!0,a.isProcessing||e(v)};return{schedule:xs.reduce((S,_)=>{const j=l[_];return S[_]=(V,B=!1,M=!1)=>(t||b(),j.schedule(V,B,M)),S},{}),cancel:S=>{for(let _=0;_<xs.length;_++)l[xs[_]].cancel(S)},state:a,steps:l}}const{schedule:Fe,cancel:Nt,state:cn,steps:nc}=v0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ln,!0),w0=P.createContext({strict:!1}),Sm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Si={};for(const e in Sm)Si[e]={isEnabled:n=>Sm[e].some(t=>!!n[t])};function mS(e){for(const n in e)Si[n]={...Si[n],...e[n]}}const gS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ms(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||gS.has(e)}let b0=e=>!Ms(e);function yS(e){e&&(b0=n=>n.startsWith("on")?!Ms(n):e(n))}try{yS(require("@emotion/is-prop-valid").default)}catch{}function xS(e,n,t){const o={};for(const a in e)a==="values"&&typeof e.values=="object"||(b0(a)||t===!0&&Ms(a)||!n&&!Ms(a)||e.draggable&&a.startsWith("onDrag"))&&(o[a]=e[a]);return o}function vS(e){if(typeof Proxy>"u")return e;const n=new Map,t=(...o)=>e(...o);return new Proxy(t,{get:(o,a)=>a==="create"?e:(n.has(a)||n.set(a,e(a)),n.get(a))})}const Xs=P.createContext({});function Vo(e){return typeof e=="string"||Array.isArray(e)}function Qs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Ed=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Pd=["initial",...Ed];function Zs(e){return Qs(e.animate)||Pd.some(n=>Vo(e[n]))}function k0(e){return!!(Zs(e)||e.variants)}function wS(e,n){if(Zs(e)){const{initial:t,animate:o}=e;return{initial:t===!1||Vo(t)?t:void 0,animate:Vo(o)?o:void 0}}return e.inherit!==!1?n:{}}function bS(e){const{initial:n,animate:t}=wS(e,P.useContext(Xs));return P.useMemo(()=>({initial:n,animate:t}),[Tm(n),Tm(t)])}function Tm(e){return Array.isArray(e)?e.join(" "):e}const kS=Symbol.for("motionComponentSymbol");function mi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function SS(e,n,t){return P.useCallback(o=>{o&&e.onMount&&e.onMount(o),n&&(o?n.mount(o):n.unmount()),t&&(typeof t=="function"?t(o):mi(t)&&(t.current=o))},[n])}const Rd=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),TS="framerAppearId",S0="data-"+Rd(TS),{schedule:Ad}=v0(queueMicrotask,!1),T0=P.createContext({});function CS(e,n,t,o,a){var u,l;const{visualElement:c}=P.useContext(Xs),f=P.useContext(w0),h=P.useContext(Ys),p=P.useContext(Js).reducedMotion,m=P.useRef(null);o=o||f.renderer,!m.current&&o&&(m.current=o(e,{visualState:n,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const x=m.current,v=P.useContext(T0);x&&!x.projection&&a&&(x.type==="html"||x.type==="svg")&&ES(m.current,t,a,v);const b=P.useRef(!1);P.useInsertionEffect(()=>{x&&b.current&&x.update(t,h)});const T=t[S0],E=P.useRef(!!T&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,T))&&((l=window.MotionHasOptimisedAnimation)===null||l===void 0?void 0:l.call(window,T)));return Td(()=>{x&&(b.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),Ad.render(x.render),E.current&&x.animationState&&x.animationState.animateChanges())}),P.useEffect(()=>{x&&(!E.current&&x.animationState&&x.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)===null||S===void 0||S.call(window,T)}),E.current=!1))}),x}function ES(e,n,t,o){const{layoutId:a,layout:u,drag:l,dragConstraints:c,layoutScroll:f,layoutRoot:h}=n;e.projection=new t(e.latestValues,n["data-framer-portal-id"]?void 0:C0(e.parent)),e.projection.setOptions({layoutId:a,layout:u,alwaysMeasureLayout:!!l||c&&mi(c),visualElement:e,animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:h})}function C0(e){if(e)return e.options.allowProjection!==!1?e.projection:C0(e.parent)}function PS({preloadedFeatures:e,createVisualElement:n,useRender:t,useVisualState:o,Component:a}){var u,l;e&&mS(e);function c(h,p){let m;const x={...P.useContext(Js),...h,layoutId:RS(h)},{isStatic:v}=x,b=bS(h),T=o(h,v);if(!v&&Sd){AS();const E=jS(x);m=E.MeasureLayout,b.visualElement=CS(a,T,x,n,E.ProjectionNode)}return k.jsxs(Xs.Provider,{value:b,children:[m&&b.visualElement?k.jsx(m,{visualElement:b.visualElement,...x}):null,t(a,h,SS(T,b.visualElement,p),T,v,b.visualElement)]})}c.displayName=`motion.${typeof a=="string"?a:`create(${(l=(u=a.displayName)!==null&&u!==void 0?u:a.name)!==null&&l!==void 0?l:""})`}`;const f=P.forwardRef(c);return f[kS]=a,f}function RS({layoutId:e}){const n=P.useContext(kd).id;return n&&e!==void 0?n+"-"+e:e}function AS(e,n){P.useContext(w0).strict}function jS(e){const{drag:n,layout:t}=Si;if(!n&&!t)return{};const o={...n,...t};return{MeasureLayout:n!=null&&n.isEnabled(e)||t!=null&&t.isEnabled(e)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const IS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function jd(e){return typeof e!="string"||e.includes("-")?!1:!!(IS.indexOf(e)>-1||/[A-Z]/u.test(e))}function Cm(e){const n=[{},{}];return e==null||e.values.forEach((t,o)=>{n[0][o]=t.get(),n[1][o]=t.getVelocity()}),n}function Id(e,n,t,o){if(typeof n=="function"){const[a,u]=Cm(o);n=n(t!==void 0?t:e.custom,a,u)}if(typeof n=="string"&&(n=e.variants&&e.variants[n]),typeof n=="function"){const[a,u]=Cm(o);n=n(t!==void 0?t:e.custom,a,u)}return n}const zc=e=>Array.isArray(e),_S=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),NS=e=>zc(e)?e[e.length-1]||0:e,dn=e=>!!(e&&e.getVelocity);function As(e){const n=dn(e)?e.get():e;return _S(n)?n.toValue():n}function MS({scrapeMotionValuesFromProps:e,createRenderState:n,onUpdate:t},o,a,u){const l={latestValues:DS(o,a,u,e),renderState:n()};return t&&(l.onMount=c=>t({props:o,current:c,...l}),l.onUpdate=c=>t(c)),l}const E0=e=>(n,t)=>{const o=P.useContext(Xs),a=P.useContext(Ys),u=()=>MS(e,n,o,a);return t?u():Or(u)};function DS(e,n,t,o){const a={},u=o(e,{});for(const x in u)a[x]=As(u[x]);let{initial:l,animate:c}=e;const f=Zs(e),h=k0(e);n&&h&&!f&&e.inherit!==!1&&(l===void 0&&(l=n.initial),c===void 0&&(c=n.animate));let p=t?t.initial===!1:!1;p=p||l===!1;const m=p?c:l;if(m&&typeof m!="boolean"&&!Qs(m)){const x=Array.isArray(m)?m:[m];for(let v=0;v<x.length;v++){const b=Id(e,x[v]);if(b){const{transitionEnd:T,transition:E,...S}=b;for(const _ in S){let j=S[_];if(Array.isArray(j)){const V=p?j.length-1:0;j=j[V]}j!==null&&(a[_]=j)}for(const _ in T)a[_]=T[_]}}}return a}const Ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fr=new Set(Ai),P0=e=>n=>typeof n=="string"&&n.startsWith(e),R0=P0("--"),LS=P0("var(--"),_d=e=>LS(e)?OS.test(e.split("/*")[0].trim()):!1,OS=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,A0=(e,n)=>n&&typeof e=="number"?n.transform(e):e,Mt=(e,n,t)=>t>n?n:t<e?e:t,ji={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Wo={...ji,transform:e=>Mt(0,1,e)},vs={...ji,default:1},Jo=e=>({test:n=>typeof n=="string"&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),lr=Jo("deg"),pt=Jo("%"),me=Jo("px"),FS=Jo("vh"),zS=Jo("vw"),Em={...pt,parse:e=>pt.parse(e)/100,transform:e=>pt.transform(e*100)},BS={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,radius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,backgroundPositionX:me,backgroundPositionY:me},VS={rotate:lr,rotateX:lr,rotateY:lr,rotateZ:lr,scale:vs,scaleX:vs,scaleY:vs,scaleZ:vs,skew:lr,skewX:lr,skewY:lr,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:Wo,originX:Em,originY:Em,originZ:me},Pm={...ji,transform:Math.round},Nd={...BS,...VS,zIndex:Pm,size:me,fillOpacity:Wo,strokeOpacity:Wo,numOctaves:Pm},WS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},US=Ai.length;function $S(e,n,t){let o="",a=!0;for(let u=0;u<US;u++){const l=Ai[u],c=e[l];if(c===void 0)continue;let f=!0;if(typeof c=="number"?f=c===(l.startsWith("scale")?1:0):f=parseFloat(c)===0,!f||t){const h=A0(c,Nd[l]);if(!f){a=!1;const p=WS[l]||l;o+=`${p}(${h}) `}t&&(n[l]=h)}}return o=o.trim(),t?o=t(n,a?"":o):a&&(o="none"),o}function Md(e,n,t){const{style:o,vars:a,transformOrigin:u}=e;let l=!1,c=!1;for(const f in n){const h=n[f];if(Fr.has(f)){l=!0;continue}else if(R0(f)){a[f]=h;continue}else{const p=A0(h,Nd[f]);f.startsWith("origin")?(c=!0,u[f]=p):o[f]=p}}if(n.transform||(l||t?o.transform=$S(n,e.transform,t):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:h="50%",originZ:p=0}=u;o.transformOrigin=`${f} ${h} ${p}`}}const HS={offset:"stroke-dashoffset",array:"stroke-dasharray"},qS={offset:"strokeDashoffset",array:"strokeDasharray"};function GS(e,n,t=1,o=0,a=!0){e.pathLength=1;const u=a?HS:qS;e[u.offset]=me.transform(-o);const l=me.transform(n),c=me.transform(t);e[u.array]=`${l} ${c}`}function Rm(e,n,t){return typeof e=="string"?e:me.transform(n+t*e)}function KS(e,n,t){const o=Rm(n,e.x,e.width),a=Rm(t,e.y,e.height);return`${o} ${a}`}function Dd(e,{attrX:n,attrY:t,attrScale:o,originX:a,originY:u,pathLength:l,pathSpacing:c=1,pathOffset:f=0,...h},p,m){if(Md(e,h,m),p){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:v,dimensions:b}=e;x.transform&&(b&&(v.transform=x.transform),delete x.transform),b&&(a!==void 0||u!==void 0||v.transform)&&(v.transformOrigin=KS(b,a!==void 0?a:.5,u!==void 0?u:.5)),n!==void 0&&(x.x=n),t!==void 0&&(x.y=t),o!==void 0&&(x.scale=o),l!==void 0&&GS(x,l,c,f,!1)}const Ld=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),j0=()=>({...Ld(),attrs:{}}),Od=e=>typeof e=="string"&&e.toLowerCase()==="svg";function I0(e,{style:n,vars:t},o,a){Object.assign(e.style,n,a&&a.getProjectionStyles(o));for(const u in t)e.style.setProperty(u,t[u])}const _0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function N0(e,n,t,o){I0(e,n,void 0,o);for(const a in n.attrs)e.setAttribute(_0.has(a)?a:Rd(a),n.attrs[a])}const Ds={};function YS(e){Object.assign(Ds,e)}function M0(e,{layout:n,layoutId:t}){return Fr.has(e)||e.startsWith("origin")||(n||t!==void 0)&&(!!Ds[e]||e==="opacity")}function Fd(e,n,t){var o;const{style:a}=e,u={};for(const l in a)(dn(a[l])||n.style&&dn(n.style[l])||M0(l,e)||((o=t==null?void 0:t.getValue(l))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(u[l]=a[l]);return u}function D0(e,n,t){const o=Fd(e,n,t);for(const a in e)if(dn(e[a])||dn(n[a])){const u=Ai.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[u]=e[a]}return o}function JS(e,n){try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}const Am=["x","y","width","height","cx","cy","r"],XS={useVisualState:E0({scrapeMotionValuesFromProps:D0,createRenderState:j0,onUpdate:({props:e,prevProps:n,current:t,renderState:o,latestValues:a})=>{if(!t)return;let u=!!e.drag;if(!u){for(const c in a)if(Fr.has(c)){u=!0;break}}if(!u)return;let l=!n;if(n)for(let c=0;c<Am.length;c++){const f=Am[c];e[f]!==n[f]&&(l=!0)}l&&Fe.read(()=>{JS(t,o),Fe.render(()=>{Dd(o,a,Od(t.tagName),e.transformTemplate),N0(t,o)})})}})},QS={useVisualState:E0({scrapeMotionValuesFromProps:Fd,createRenderState:Ld})};function L0(e,n,t){for(const o in n)!dn(n[o])&&!M0(o,t)&&(e[o]=n[o])}function ZS({transformTemplate:e},n){return P.useMemo(()=>{const t=Ld();return Md(t,n,e),Object.assign({},t.vars,t.style)},[n])}function eT(e,n){const t=e.style||{},o={};return L0(o,t,e),Object.assign(o,ZS(e,n)),o}function nT(e,n){const t={},o=eT(e,n);return e.drag&&e.dragListener!==!1&&(t.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(t.tabIndex=0),t.style=o,t}function tT(e,n,t,o){const a=P.useMemo(()=>{const u=j0();return Dd(u,n,Od(o),e.transformTemplate),{...u.attrs,style:{...u.style}}},[n]);if(e.style){const u={};L0(u,e.style,e),a.style={...u,...a.style}}return a}function rT(e=!1){return(t,o,a,{latestValues:u},l)=>{const f=(jd(t)?tT:nT)(o,u,l,t),h=xS(o,typeof t=="string",e),p=t!==P.Fragment?{...h,...f,ref:a}:{},{children:m}=o,x=P.useMemo(()=>dn(m)?m.get():m,[m]);return P.createElement(t,{...p,children:x})}}function iT(e,n){return function(o,{forwardMotionProps:a}={forwardMotionProps:!1}){const l={...jd(o)?XS:QS,preloadedFeatures:e,useRender:rT(a),createVisualElement:n,Component:o};return PS(l)}}function O0(e,n){if(!Array.isArray(n))return!1;const t=n.length;if(t!==e.length)return!1;for(let o=0;o<t;o++)if(n[o]!==e[o])return!1;return!0}function el(e,n,t){const o=e.getProps();return Id(o,n,t!==void 0?t:o.custom,e)}const oT=Cd(()=>window.ScrollTimeline!==void 0);class aT{constructor(n){this.stop=()=>this.runAll("stop"),this.animations=n.filter(Boolean)}get finished(){return Promise.all(this.animations.map(n=>"finished"in n?n.finished:n))}getAll(n){return this.animations[0][n]}setAll(n,t){for(let o=0;o<this.animations.length;o++)this.animations[o][n]=t}attachTimeline(n,t){const o=this.animations.map(a=>{if(oT()&&a.attachTimeline)return a.attachTimeline(n);if(typeof t=="function")return t(a)});return()=>{o.forEach((a,u)=>{a&&a(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(n){this.setAll("time",n)}get speed(){return this.getAll("speed")}set speed(n){this.setAll("speed",n)}get startTime(){return this.getAll("startTime")}get duration(){let n=0;for(let t=0;t<this.animations.length;t++)n=Math.max(n,this.animations[t].duration);return n}runAll(n){this.animations.forEach(t=>t[n]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class sT extends aT{then(n,t){return Promise.all(this.animations).then(n).catch(t)}}function zd(e,n){return e?e[n]||e.default||e:void 0}const Bc=2e4;function F0(e){let n=0;const t=50;let o=e.next(n);for(;!o.done&&n<Bc;)n+=t,o=e.next(n);return n>=Bc?1/0:n}function Bd(e){return typeof e=="function"}function jm(e,n){e.timeline=n,e.onfinish=null}const Vd=e=>Array.isArray(e)&&typeof e[0]=="number",lT={linearEasing:void 0};function uT(e,n){const t=Cd(e);return()=>{var o;return(o=lT[n])!==null&&o!==void 0?o:t()}}const Ls=uT(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),z0=(e,n,t=10)=>{let o="";const a=Math.max(Math.round(n/t),2);for(let u=0;u<a;u++)o+=e(ki(0,a-1,u))+", ";return`linear(${o.substring(0,o.length-2)})`};function B0(e){return!!(typeof e=="function"&&Ls()||!e||typeof e=="string"&&(e in Vc||Ls())||Vd(e)||Array.isArray(e)&&e.every(B0))}const jo=([e,n,t,o])=>`cubic-bezier(${e}, ${n}, ${t}, ${o})`,Vc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:jo([0,.65,.55,1]),circOut:jo([.55,0,1,.45]),backIn:jo([.31,.01,.66,-.59]),backOut:jo([.33,1.53,.69,.99])};function V0(e,n){if(e)return typeof e=="function"&&Ls()?z0(e,n):Vd(e)?jo(e):Array.isArray(e)?e.map(t=>V0(t,n)||Vc.easeOut):Vc[e]}const rt={x:!1,y:!1};function W0(){return rt.x||rt.y}function cT(e,n,t){var o;if(e instanceof Element)return[e];if(typeof e=="string"){let a=document;const u=(o=void 0)!==null&&o!==void 0?o:a.querySelectorAll(e);return u?Array.from(u):[]}return Array.from(e)}function U0(e,n){const t=cT(e),o=new AbortController,a={passive:!0,...n,signal:o.signal};return[t,a,()=>o.abort()]}function Im(e){return n=>{n.pointerType==="touch"||W0()||e(n)}}function dT(e,n,t={}){const[o,a,u]=U0(e,t),l=Im(c=>{const{target:f}=c,h=n(c);if(typeof h!="function"||!f)return;const p=Im(m=>{h(m),f.removeEventListener("pointerleave",p)});f.addEventListener("pointerleave",p,a)});return o.forEach(c=>{c.addEventListener("pointerenter",l,a)}),u}const $0=(e,n)=>n?e===n?!0:$0(e,n.parentElement):!1,Wd=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,fT=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function hT(e){return fT.has(e.tagName)||e.tabIndex!==-1}const Io=new WeakSet;function _m(e){return n=>{n.key==="Enter"&&e(n)}}function tc(e,n){e.dispatchEvent(new PointerEvent("pointer"+n,{isPrimary:!0,bubbles:!0}))}const pT=(e,n)=>{const t=e.currentTarget;if(!t)return;const o=_m(()=>{if(Io.has(t))return;tc(t,"down");const a=_m(()=>{tc(t,"up")}),u=()=>tc(t,"cancel");t.addEventListener("keyup",a,n),t.addEventListener("blur",u,n)});t.addEventListener("keydown",o,n),t.addEventListener("blur",()=>t.removeEventListener("keydown",o),n)};function Nm(e){return Wd(e)&&!W0()}function mT(e,n,t={}){const[o,a,u]=U0(e,t),l=c=>{const f=c.currentTarget;if(!Nm(c)||Io.has(f))return;Io.add(f);const h=n(c),p=(v,b)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",x),!(!Nm(v)||!Io.has(f))&&(Io.delete(f),typeof h=="function"&&h(v,{success:b}))},m=v=>{p(v,t.useGlobalTarget||$0(f,v.target))},x=v=>{p(v,!1)};window.addEventListener("pointerup",m,a),window.addEventListener("pointercancel",x,a)};return o.forEach(c=>{!hT(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",l,a),c.addEventListener("focus",h=>pT(h,a),a)}),u}function gT(e){return e==="x"||e==="y"?rt[e]?null:(rt[e]=!0,()=>{rt[e]=!1}):rt.x||rt.y?null:(rt.x=rt.y=!0,()=>{rt.x=rt.y=!1})}const H0=new Set(["width","height","top","left","right","bottom",...Ai]);let js;function yT(){js=void 0}const mt={now:()=>(js===void 0&&mt.set(cn.isProcessing||fS.useManualTiming?cn.timestamp:performance.now()),js),set:e=>{js=e,queueMicrotask(yT)}};function Ud(e,n){e.indexOf(n)===-1&&e.push(n)}function $d(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function xT([...e],n,t){const o=n<0?e.length+n:n;if(o>=0&&o<e.length){const a=t<0?e.length+t:t,[u]=e.splice(n,1);e.splice(a,0,u)}return e}class Hd{constructor(){this.subscriptions=[]}add(n){return Ud(this.subscriptions,n),()=>$d(this.subscriptions,n)}notify(n,t,o){const a=this.subscriptions.length;if(a)if(a===1)this.subscriptions[0](n,t,o);else for(let u=0;u<a;u++){const l=this.subscriptions[u];l&&l(n,t,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function q0(e,n){return n?e*(1e3/n):0}const Mm=30,vT=e=>!isNaN(parseFloat(e)),No={current:void 0};class wT{constructor(n,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,a=!0)=>{const u=mt.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),a&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(n),this.owner=t.owner}setCurrent(n){this.current=n,this.updatedAt=mt.now(),this.canTrackVelocity===null&&n!==void 0&&(this.canTrackVelocity=vT(this.current))}setPrevFrameValue(n=this.current){this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt}onChange(n){return this.on("change",n)}on(n,t){this.events[n]||(this.events[n]=new Hd);const o=this.events[n].add(t);return n==="change"?()=>{o(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const n in this.events)this.events[n].clear()}attach(n,t){this.passiveEffect=n,this.stopPassiveEffect=t}set(n,t=!0){!t||!this.passiveEffect?this.updateAndNotify(n,t):this.passiveEffect(n,this.updateAndNotify)}setWithVelocity(n,t,o){this.set(t),this.prev=void 0,this.prevFrameValue=n,this.prevUpdatedAt=this.updatedAt-o}jump(n,t=!0){this.updateAndNotify(n),this.prev=n,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return No.current&&No.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const n=mt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||n-this.updatedAt>Mm)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Mm);return q0(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(n){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=n(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ti(e,n){return new wT(e,n)}function bT(e,n,t){e.hasValue(n)?e.getValue(n).set(t):e.addValue(n,Ti(t))}function kT(e,n){const t=el(e,n);let{transitionEnd:o={},transition:a={},...u}=t||{};u={...u,...o};for(const l in u){const c=NS(u[l]);bT(e,l,c)}}function ST(e){return!!(dn(e)&&e.add)}function Wc(e,n){const t=e.getValue("willChange");if(ST(t))return t.add(n)}function G0(e){return e.props[S0]}const K0=(e,n,t)=>(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e,TT=1e-7,CT=12;function ET(e,n,t,o,a){let u,l,c=0;do l=n+(t-n)/2,u=K0(l,o,a)-e,u>0?t=l:n=l;while(Math.abs(u)>TT&&++c<CT);return l}function Xo(e,n,t,o){if(e===n&&t===o)return Ln;const a=u=>ET(u,0,1,e,t);return u=>u===0||u===1?u:K0(a(u),n,o)}const Y0=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,J0=e=>n=>1-e(1-n),X0=Xo(.33,1.53,.69,.99),qd=J0(X0),Q0=Y0(qd),Z0=e=>(e*=2)<1?.5*qd(e):.5*(2-Math.pow(2,-10*(e-1))),Gd=e=>1-Math.sin(Math.acos(e)),ex=J0(Gd),nx=Y0(Gd),tx=e=>/^0[^.\s]+$/u.test(e);function PT(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||tx(e):!0}const Mo=e=>Math.round(e*1e5)/1e5,Kd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function RT(e){return e==null}const AT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yd=(e,n)=>t=>!!(typeof t=="string"&&AT.test(t)&&t.startsWith(e)||n&&!RT(t)&&Object.prototype.hasOwnProperty.call(t,n)),rx=(e,n,t)=>o=>{if(typeof o!="string")return o;const[a,u,l,c]=o.match(Kd);return{[e]:parseFloat(a),[n]:parseFloat(u),[t]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},jT=e=>Mt(0,255,e),rc={...ji,transform:e=>Math.round(jT(e))},Nr={test:Yd("rgb","red"),parse:rx("red","green","blue"),transform:({red:e,green:n,blue:t,alpha:o=1})=>"rgba("+rc.transform(e)+", "+rc.transform(n)+", "+rc.transform(t)+", "+Mo(Wo.transform(o))+")"};function IT(e){let n="",t="",o="",a="";return e.length>5?(n=e.substring(1,3),t=e.substring(3,5),o=e.substring(5,7),a=e.substring(7,9)):(n=e.substring(1,2),t=e.substring(2,3),o=e.substring(3,4),a=e.substring(4,5),n+=n,t+=t,o+=o,a+=a),{red:parseInt(n,16),green:parseInt(t,16),blue:parseInt(o,16),alpha:a?parseInt(a,16)/255:1}}const Uc={test:Yd("#"),parse:IT,transform:Nr.transform},gi={test:Yd("hsl","hue"),parse:rx("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:t,alpha:o=1})=>"hsla("+Math.round(e)+", "+pt.transform(Mo(n))+", "+pt.transform(Mo(t))+", "+Mo(Wo.transform(o))+")"},gn={test:e=>Nr.test(e)||Uc.test(e)||gi.test(e),parse:e=>Nr.test(e)?Nr.parse(e):gi.test(e)?gi.parse(e):Uc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Nr.transform(e):gi.transform(e)},_T=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function NT(e){var n,t;return isNaN(e)&&typeof e=="string"&&(((n=e.match(Kd))===null||n===void 0?void 0:n.length)||0)+(((t=e.match(_T))===null||t===void 0?void 0:t.length)||0)>0}const ix="number",ox="color",MT="var",DT="var(",Dm="${}",LT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Uo(e){const n=e.toString(),t=[],o={color:[],number:[],var:[]},a=[];let u=0;const c=n.replace(LT,f=>(gn.test(f)?(o.color.push(u),a.push(ox),t.push(gn.parse(f))):f.startsWith(DT)?(o.var.push(u),a.push(MT),t.push(f)):(o.number.push(u),a.push(ix),t.push(parseFloat(f))),++u,Dm)).split(Dm);return{values:t,split:c,indexes:o,types:a}}function ax(e){return Uo(e).values}function sx(e){const{split:n,types:t}=Uo(e),o=n.length;return a=>{let u="";for(let l=0;l<o;l++)if(u+=n[l],a[l]!==void 0){const c=t[l];c===ix?u+=Mo(a[l]):c===ox?u+=gn.transform(a[l]):u+=a[l]}return u}}const OT=e=>typeof e=="number"?0:e;function FT(e){const n=ax(e);return sx(e)(n.map(OT))}const ur={test:NT,parse:ax,createTransformer:sx,getAnimatableNone:FT},zT=new Set(["brightness","contrast","saturate","opacity"]);function BT(e){const[n,t]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=t.match(Kd)||[];if(!o)return e;const a=t.replace(o,"");let u=zT.has(n)?1:0;return o!==t&&(u*=100),n+"("+u+a+")"}const VT=/\b([a-z-]*)\(.*?\)/gu,$c={...ur,getAnimatableNone:e=>{const n=e.match(VT);return n?n.map(BT).join(" "):e}},WT={...Nd,color:gn,backgroundColor:gn,outlineColor:gn,fill:gn,stroke:gn,borderColor:gn,borderTopColor:gn,borderRightColor:gn,borderBottomColor:gn,borderLeftColor:gn,filter:$c,WebkitFilter:$c},Jd=e=>WT[e];function lx(e,n){let t=Jd(e);return t!==$c&&(t=ur),t.getAnimatableNone?t.getAnimatableNone(n):void 0}const UT=new Set(["auto","none","0"]);function $T(e,n,t){let o=0,a;for(;o<e.length&&!a;){const u=e[o];typeof u=="string"&&!UT.has(u)&&Uo(u).values.length&&(a=e[o]),o++}if(a&&t)for(const u of n)e[u]=lx(t,a)}const Lm=e=>e===ji||e===me,Om=(e,n)=>parseFloat(e.split(", ")[n]),Fm=(e,n)=>(t,{transform:o})=>{if(o==="none"||!o)return 0;const a=o.match(/^matrix3d\((.+)\)$/u);if(a)return Om(a[1],n);{const u=o.match(/^matrix\((.+)\)$/u);return u?Om(u[1],e):0}},HT=new Set(["x","y","z"]),qT=Ai.filter(e=>!HT.has(e));function GT(e){const n=[];return qT.forEach(t=>{const o=e.getValue(t);o!==void 0&&(n.push([t,o.get()]),o.set(t.startsWith("scale")?1:0))}),n}const Ci={width:({x:e},{paddingLeft:n="0",paddingRight:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),height:({y:e},{paddingTop:n="0",paddingBottom:t="0"})=>e.max-e.min-parseFloat(n)-parseFloat(t),top:(e,{top:n})=>parseFloat(n),left:(e,{left:n})=>parseFloat(n),bottom:({y:e},{top:n})=>parseFloat(n)+(e.max-e.min),right:({x:e},{left:n})=>parseFloat(n)+(e.max-e.min),x:Fm(4,13),y:Fm(5,14)};Ci.translateX=Ci.x;Ci.translateY=Ci.y;const Mr=new Set;let Hc=!1,qc=!1;function ux(){if(qc){const e=Array.from(Mr).filter(o=>o.needsMeasurement),n=new Set(e.map(o=>o.element)),t=new Map;n.forEach(o=>{const a=GT(o);a.length&&(t.set(o,a),o.render())}),e.forEach(o=>o.measureInitialState()),n.forEach(o=>{o.render();const a=t.get(o);a&&a.forEach(([u,l])=>{var c;(c=o.getValue(u))===null||c===void 0||c.set(l)})}),e.forEach(o=>o.measureEndState()),e.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}qc=!1,Hc=!1,Mr.forEach(e=>e.complete()),Mr.clear()}function cx(){Mr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qc=!0)})}function KT(){cx(),ux()}class Xd{constructor(n,t,o,a,u,l=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...n],this.onComplete=t,this.name=o,this.motionValue=a,this.element=u,this.isAsync=l}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Mr.add(this),Hc||(Hc=!0,Fe.read(cx),Fe.resolveKeyframes(ux))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:n,name:t,element:o,motionValue:a}=this;for(let u=0;u<n.length;u++)if(n[u]===null)if(u===0){const l=a==null?void 0:a.get(),c=n[n.length-1];if(l!==void 0)n[0]=l;else if(o&&t){const f=o.readValue(t,c);f!=null&&(n[0]=f)}n[0]===void 0&&(n[0]=c),a&&l===void 0&&a.set(n[0])}else n[u]=n[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Mr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Mr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const dx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),YT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function JT(e){const n=YT.exec(e);if(!n)return[,];const[,t,o,a]=n;return[`--${t??o}`,a]}function fx(e,n,t=1){const[o,a]=JT(e);if(!o)return;const u=window.getComputedStyle(n).getPropertyValue(o);if(u){const l=u.trim();return dx(l)?parseFloat(l):l}return _d(a)?fx(a,n,t+1):a}const hx=e=>n=>n.test(e),XT={test:e=>e==="auto",parse:e=>e},px=[ji,me,pt,lr,zS,FS,XT],zm=e=>px.find(hx(e));class mx extends Xd{constructor(n,t,o,a,u){super(n,t,o,a,u,!0)}readKeyframes(){const{unresolvedKeyframes:n,element:t,name:o}=this;if(!t||!t.current)return;super.readKeyframes();for(let f=0;f<n.length;f++){let h=n[f];if(typeof h=="string"&&(h=h.trim(),_d(h))){const p=fx(h,t.current);p!==void 0&&(n[f]=p),f===n.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!H0.has(o)||n.length!==2)return;const[a,u]=n,l=zm(a),c=zm(u);if(l!==c)if(Lm(l)&&Lm(c))for(let f=0;f<n.length;f++){const h=n[f];typeof h=="string"&&(n[f]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:n,name:t}=this,o=[];for(let a=0;a<n.length;a++)PT(n[a])&&o.push(a);o.length&&$T(n,o,t)}measureInitialState(){const{element:n,unresolvedKeyframes:t,name:o}=this;if(!n||!n.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ci[o](n.measureViewportBox(),window.getComputedStyle(n.current)),t[0]=this.measuredOrigin;const a=t[t.length-1];a!==void 0&&n.getValue(o,a).jump(a,!1)}measureEndState(){var n;const{element:t,name:o,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const u=t.getValue(o);u&&u.jump(this.measuredOrigin,!1);const l=a.length-1,c=a[l];a[l]=Ci[o](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((n=this.removedTransforms)===null||n===void 0)&&n.length&&this.removedTransforms.forEach(([f,h])=>{t.getValue(f).set(h)}),this.resolveNoneKeyframes()}}const Bm=(e,n)=>n==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ur.test(e)||e==="0")&&!e.startsWith("url("));function QT(e){const n=e[0];if(e.length===1)return!0;for(let t=0;t<e.length;t++)if(e[t]!==n)return!0}function ZT(e,n,t,o){const a=e[0];if(a===null)return!1;if(n==="display"||n==="visibility")return!0;const u=e[e.length-1],l=Bm(a,n),c=Bm(u,n);return!l||!c?!1:QT(e)||(t==="spring"||Bd(t))&&o}const eC=e=>e!==null;function nl(e,{repeat:n,repeatType:t="loop"},o){const a=e.filter(eC),u=n&&t!=="loop"&&n%2===1?0:a.length-1;return!u||o===void 0?a[u]:o}const nC=40;class gx{constructor({autoplay:n=!0,delay:t=0,type:o="keyframes",repeat:a=0,repeatDelay:u=0,repeatType:l="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=mt.now(),this.options={autoplay:n,delay:t,type:o,repeat:a,repeatDelay:u,repeatType:l,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>nC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&KT(),this._resolved}onKeyframesResolved(n,t){this.resolvedAt=mt.now(),this.hasAttemptedResolve=!0;const{name:o,type:a,velocity:u,delay:l,onComplete:c,onUpdate:f,isGenerator:h}=this.options;if(!h&&!ZT(n,o,a,u))if(l)this.options.duration=0;else{f&&f(nl(n,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const p=this.initPlayback(n,t);p!==!1&&(this._resolved={keyframes:n,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(n,t){return this.currentFinishedPromise.then(n,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(n=>{this.resolveFinishedPromise=n})}}const We=(e,n,t)=>e+(n-e)*t;function ic(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+(n-e)*6*t:t<1/2?n:t<2/3?e+(n-e)*(2/3-t)*6:e}function tC({hue:e,saturation:n,lightness:t,alpha:o}){e/=360,n/=100,t/=100;let a=0,u=0,l=0;if(!n)a=u=l=t;else{const c=t<.5?t*(1+n):t+n-t*n,f=2*t-c;a=ic(f,c,e+1/3),u=ic(f,c,e),l=ic(f,c,e-1/3)}return{red:Math.round(a*255),green:Math.round(u*255),blue:Math.round(l*255),alpha:o}}function Os(e,n){return t=>t>0?n:e}const oc=(e,n,t)=>{const o=e*e,a=t*(n*n-o)+o;return a<0?0:Math.sqrt(a)},rC=[Uc,Nr,gi],iC=e=>rC.find(n=>n.test(e));function Vm(e){const n=iC(e);if(!n)return!1;let t=n.parse(e);return n===gi&&(t=tC(t)),t}const Wm=(e,n)=>{const t=Vm(e),o=Vm(n);if(!t||!o)return Os(e,n);const a={...t};return u=>(a.red=oc(t.red,o.red,u),a.green=oc(t.green,o.green,u),a.blue=oc(t.blue,o.blue,u),a.alpha=We(t.alpha,o.alpha,u),Nr.transform(a))},oC=(e,n)=>t=>n(e(t)),Qo=(...e)=>e.reduce(oC),Gc=new Set(["none","hidden"]);function aC(e,n){return Gc.has(e)?t=>t<=0?e:n:t=>t>=1?n:e}function sC(e,n){return t=>We(e,n,t)}function Qd(e){return typeof e=="number"?sC:typeof e=="string"?_d(e)?Os:gn.test(e)?Wm:cC:Array.isArray(e)?yx:typeof e=="object"?gn.test(e)?Wm:lC:Os}function yx(e,n){const t=[...e],o=t.length,a=e.map((u,l)=>Qd(u)(u,n[l]));return u=>{for(let l=0;l<o;l++)t[l]=a[l](u);return t}}function lC(e,n){const t={...e,...n},o={};for(const a in t)e[a]!==void 0&&n[a]!==void 0&&(o[a]=Qd(e[a])(e[a],n[a]));return a=>{for(const u in o)t[u]=o[u](a);return t}}function uC(e,n){var t;const o=[],a={color:0,var:0,number:0};for(let u=0;u<n.values.length;u++){const l=n.types[u],c=e.indexes[l][a[l]],f=(t=e.values[c])!==null&&t!==void 0?t:0;o[u]=f,a[l]++}return o}const cC=(e,n)=>{const t=ur.createTransformer(n),o=Uo(e),a=Uo(n);return o.indexes.var.length===a.indexes.var.length&&o.indexes.color.length===a.indexes.color.length&&o.indexes.number.length>=a.indexes.number.length?Gc.has(e)&&!a.values.length||Gc.has(n)&&!o.values.length?aC(e,n):Qo(yx(uC(o,a),a.values),t):Os(e,n)};function xx(e,n,t){return typeof e=="number"&&typeof n=="number"&&typeof t=="number"?We(e,n,t):Qd(e)(e,n)}const dC=5;function vx(e,n,t){const o=Math.max(n-dC,0);return q0(t-e(o),n-o)}const Ge={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},ac=.001;function fC({duration:e=Ge.duration,bounce:n=Ge.bounce,velocity:t=Ge.velocity,mass:o=Ge.mass}){let a,u,l=1-n;l=Mt(Ge.minDamping,Ge.maxDamping,l),e=Mt(Ge.minDuration,Ge.maxDuration,It(e)),l<1?(a=h=>{const p=h*l,m=p*e,x=p-t,v=Kc(h,l),b=Math.exp(-m);return ac-x/v*b},u=h=>{const m=h*l*e,x=m*t+t,v=Math.pow(l,2)*Math.pow(h,2)*e,b=Math.exp(-m),T=Kc(Math.pow(h,2),l);return(-a(h)+ac>0?-1:1)*((x-v)*b)/T}):(a=h=>{const p=Math.exp(-h*e),m=(h-t)*e+1;return-ac+p*m},u=h=>{const p=Math.exp(-h*e),m=(t-h)*(e*e);return p*m});const c=5/e,f=pC(a,u,c);if(e=jt(e),isNaN(f))return{stiffness:Ge.stiffness,damping:Ge.damping,duration:e};{const h=Math.pow(f,2)*o;return{stiffness:h,damping:l*2*Math.sqrt(o*h),duration:e}}}const hC=12;function pC(e,n,t){let o=t;for(let a=1;a<hC;a++)o=o-e(o)/n(o);return o}function Kc(e,n){return e*Math.sqrt(1-n*n)}const mC=["duration","bounce"],gC=["stiffness","damping","mass"];function Um(e,n){return n.some(t=>e[t]!==void 0)}function yC(e){let n={velocity:Ge.velocity,stiffness:Ge.stiffness,damping:Ge.damping,mass:Ge.mass,isResolvedFromDuration:!1,...e};if(!Um(e,gC)&&Um(e,mC))if(e.visualDuration){const t=e.visualDuration,o=2*Math.PI/(t*1.2),a=o*o,u=2*Mt(.05,1,1-(e.bounce||0))*Math.sqrt(a);n={...n,mass:Ge.mass,stiffness:a,damping:u}}else{const t=fC(e);n={...n,...t,mass:Ge.mass},n.isResolvedFromDuration=!0}return n}function wx(e=Ge.visualDuration,n=Ge.bounce){const t=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:n}:e;let{restSpeed:o,restDelta:a}=t;const u=t.keyframes[0],l=t.keyframes[t.keyframes.length-1],c={done:!1,value:u},{stiffness:f,damping:h,mass:p,duration:m,velocity:x,isResolvedFromDuration:v}=yC({...t,velocity:-It(t.velocity||0)}),b=x||0,T=h/(2*Math.sqrt(f*p)),E=l-u,S=It(Math.sqrt(f/p)),_=Math.abs(E)<5;o||(o=_?Ge.restSpeed.granular:Ge.restSpeed.default),a||(a=_?Ge.restDelta.granular:Ge.restDelta.default);let j;if(T<1){const B=Kc(S,T);j=M=>{const X=Math.exp(-T*S*M);return l-X*((b+T*S*E)/B*Math.sin(B*M)+E*Math.cos(B*M))}}else if(T===1)j=B=>l-Math.exp(-S*B)*(E+(b+S*E)*B);else{const B=S*Math.sqrt(T*T-1);j=M=>{const X=Math.exp(-T*S*M),U=Math.min(B*M,300);return l-X*((b+T*S*E)*Math.sinh(U)+B*E*Math.cosh(U))/B}}const V={calculatedDuration:v&&m||null,next:B=>{const M=j(B);if(v)c.done=B>=m;else{let X=0;T<1&&(X=B===0?jt(b):vx(j,B,M));const U=Math.abs(X)<=o,re=Math.abs(l-M)<=a;c.done=U&&re}return c.value=c.done?l:M,c},toString:()=>{const B=Math.min(F0(V),Bc),M=z0(X=>V.next(B*X).value,B,30);return B+"ms "+M}};return V}function $m({keyframes:e,velocity:n=0,power:t=.8,timeConstant:o=325,bounceDamping:a=10,bounceStiffness:u=500,modifyTarget:l,min:c,max:f,restDelta:h=.5,restSpeed:p}){const m=e[0],x={done:!1,value:m},v=U=>c!==void 0&&U<c||f!==void 0&&U>f,b=U=>c===void 0?f:f===void 0||Math.abs(c-U)<Math.abs(f-U)?c:f;let T=t*n;const E=m+T,S=l===void 0?E:l(E);S!==E&&(T=S-m);const _=U=>-T*Math.exp(-U/o),j=U=>S+_(U),V=U=>{const re=_(U),O=j(U);x.done=Math.abs(re)<=h,x.value=x.done?S:O};let B,M;const X=U=>{v(x.value)&&(B=U,M=wx({keyframes:[x.value,b(x.value)],velocity:vx(j,U,x.value),damping:a,stiffness:u,restDelta:h,restSpeed:p}))};return X(0),{calculatedDuration:null,next:U=>{let re=!1;return!M&&B===void 0&&(re=!0,V(U),X(U)),B!==void 0&&U>=B?M.next(U-B):(!re&&V(U),x)}}}const xC=Xo(.42,0,1,1),vC=Xo(0,0,.58,1),bx=Xo(.42,0,.58,1),wC=e=>Array.isArray(e)&&typeof e[0]!="number",bC={linear:Ln,easeIn:xC,easeInOut:bx,easeOut:vC,circIn:Gd,circInOut:nx,circOut:ex,backIn:qd,backInOut:Q0,backOut:X0,anticipate:Z0},Hm=e=>{if(Vd(e)){x0(e.length===4);const[n,t,o,a]=e;return Xo(n,t,o,a)}else if(typeof e=="string")return bC[e];return e};function kC(e,n,t){const o=[],a=t||xx,u=e.length-1;for(let l=0;l<u;l++){let c=a(e[l],e[l+1]);if(n){const f=Array.isArray(n)?n[l]||Ln:n;c=Qo(f,c)}o.push(c)}return o}function kx(e,n,{clamp:t=!0,ease:o,mixer:a}={}){const u=e.length;if(x0(u===n.length),u===1)return()=>n[0];if(u===2&&n[0]===n[1])return()=>n[1];const l=e[0]===e[1];e[0]>e[u-1]&&(e=[...e].reverse(),n=[...n].reverse());const c=kC(n,o,a),f=c.length,h=p=>{if(l&&p<e[0])return n[0];let m=0;if(f>1)for(;m<e.length-2&&!(p<e[m+1]);m++);const x=ki(e[m],e[m+1],p);return c[m](x)};return t?p=>h(Mt(e[0],e[u-1],p)):h}function SC(e,n){const t=e[e.length-1];for(let o=1;o<=n;o++){const a=ki(0,n,o);e.push(We(t,1,a))}}function TC(e){const n=[0];return SC(n,e.length-1),n}function CC(e,n){return e.map(t=>t*n)}function EC(e,n){return e.map(()=>n||bx).splice(0,e.length-1)}function Fs({duration:e=300,keyframes:n,times:t,ease:o="easeInOut"}){const a=wC(o)?o.map(Hm):Hm(o),u={done:!1,value:n[0]},l=CC(t&&t.length===n.length?t:TC(n),e),c=kx(l,n,{ease:Array.isArray(a)?a:EC(n,a)});return{calculatedDuration:e,next:f=>(u.value=c(f),u.done=f>=e,u)}}const PC=e=>{const n=({timestamp:t})=>e(t);return{start:()=>Fe.update(n,!0),stop:()=>Nt(n),now:()=>cn.isProcessing?cn.timestamp:mt.now()}},RC={decay:$m,inertia:$m,tween:Fs,keyframes:Fs,spring:wx},AC=e=>e/100;class Zd extends gx{constructor(n){super(n),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:t,motionValue:o,element:a,keyframes:u}=this.options,l=(a==null?void 0:a.KeyframeResolver)||Xd,c=(f,h)=>this.onKeyframesResolved(f,h);this.resolver=new l(u,c,t,o,a),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(n){const{type:t="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u,velocity:l=0}=this.options,c=Bd(t)?t:RC[t]||Fs;let f,h;c!==Fs&&typeof n[0]!="number"&&(f=Qo(AC,xx(n[0],n[1])),n=[0,100]);const p=c({...this.options,keyframes:n});u==="mirror"&&(h=c({...this.options,keyframes:[...n].reverse(),velocity:-l})),p.calculatedDuration===null&&(p.calculatedDuration=F0(p));const{calculatedDuration:m}=p,x=m+a,v=x*(o+1)-a;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:f,calculatedDuration:m,resolvedDuration:x,totalDuration:v}}onPostResolved(){const{autoplay:n=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!n?this.pause():this.state=this.pendingPlayState}tick(n,t=!1){const{resolved:o}=this;if(!o){const{keyframes:U}=this.options;return{done:!0,value:U[U.length-1]}}const{finalKeyframe:a,generator:u,mirroredGenerator:l,mapPercentToKeyframes:c,keyframes:f,calculatedDuration:h,totalDuration:p,resolvedDuration:m}=o;if(this.startTime===null)return u.next(0);const{delay:x,repeat:v,repeatType:b,repeatDelay:T,onUpdate:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,n):this.speed<0&&(this.startTime=Math.min(n-p/this.speed,this.startTime)),t?this.currentTime=n:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(n-this.startTime)*this.speed;const S=this.currentTime-x*(this.speed>=0?1:-1),_=this.speed>=0?S<0:S>p;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let j=this.currentTime,V=u;if(v){const U=Math.min(this.currentTime,p)/m;let re=Math.floor(U),O=U%1;!O&&U>=1&&(O=1),O===1&&re--,re=Math.min(re,v+1),!!(re%2)&&(b==="reverse"?(O=1-O,T&&(O-=T/m)):b==="mirror"&&(V=l)),j=Mt(0,1,O)*m}const B=_?{done:!1,value:f[0]}:V.next(j);c&&(B.value=c(B.value));let{done:M}=B;!_&&h!==null&&(M=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return X&&a!==void 0&&(B.value=nl(f,this.options,a)),E&&E(B.value),X&&this.finish(),B}get duration(){const{resolved:n}=this;return n?It(n.calculatedDuration):0}get time(){return It(this.currentTime)}set time(n){n=jt(n),this.currentTime=n,this.holdTime!==null||this.speed===0?this.holdTime=n:this.driver&&(this.startTime=this.driver.now()-n/this.speed)}get speed(){return this.playbackSpeed}set speed(n){const t=this.playbackSpeed!==n;this.playbackSpeed=n,t&&(this.time=It(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:n=PC,onPlay:t,startTime:o}=this.options;this.driver||(this.driver=n(u=>this.tick(u))),t&&t();const a=this.driver.now();this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=a):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var n;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(n=this.currentTime)!==null&&n!==void 0?n:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:n}=this.options;n&&n()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(n){return this.startTime=0,this.tick(n,!0)}}const jC=new Set(["opacity","clipPath","filter","transform"]);function IC(e,n,t,{delay:o=0,duration:a=300,repeat:u=0,repeatType:l="loop",ease:c="easeInOut",times:f}={}){const h={[n]:t};f&&(h.offset=f);const p=V0(c,a);return Array.isArray(p)&&(h.easing=p),e.animate(h,{delay:o,duration:a,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:u+1,direction:l==="reverse"?"alternate":"normal"})}const _C=Cd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zs=10,NC=2e4;function MC(e){return Bd(e.type)||e.type==="spring"||!B0(e.ease)}function DC(e,n){const t=new Zd({...n,keyframes:e,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:e[0]};const a=[];let u=0;for(;!o.done&&u<NC;)o=t.sample(u),a.push(o.value),u+=zs;return{times:void 0,keyframes:a,duration:u-zs,ease:"linear"}}const Sx={anticipate:Z0,backInOut:Q0,circInOut:nx};function LC(e){return e in Sx}class qm extends gx{constructor(n){super(n);const{name:t,motionValue:o,element:a,keyframes:u}=this.options;this.resolver=new mx(u,(l,c)=>this.onKeyframesResolved(l,c),t,o,a),this.resolver.scheduleResolve()}initPlayback(n,t){let{duration:o=300,times:a,ease:u,type:l,motionValue:c,name:f,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof u=="string"&&Ls()&&LC(u)&&(u=Sx[u]),MC(this.options)){const{onComplete:m,onUpdate:x,motionValue:v,element:b,...T}=this.options,E=DC(n,T);n=E.keyframes,n.length===1&&(n[1]=n[0]),o=E.duration,a=E.times,u=E.ease,l="keyframes"}const p=IC(c.owner.current,f,n,{...this.options,duration:o,times:a,ease:u});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(jm(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:m}=this.options;c.set(nl(n,this.options,t)),m&&m(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:o,times:a,type:l,ease:u,keyframes:n}}get duration(){const{resolved:n}=this;if(!n)return 0;const{duration:t}=n;return It(t)}get time(){const{resolved:n}=this;if(!n)return 0;const{animation:t}=n;return It(t.currentTime||0)}set time(n){const{resolved:t}=this;if(!t)return;const{animation:o}=t;o.currentTime=jt(n)}get speed(){const{resolved:n}=this;if(!n)return 1;const{animation:t}=n;return t.playbackRate}set speed(n){const{resolved:t}=this;if(!t)return;const{animation:o}=t;o.playbackRate=n}get state(){const{resolved:n}=this;if(!n)return"idle";const{animation:t}=n;return t.playState}get startTime(){const{resolved:n}=this;if(!n)return null;const{animation:t}=n;return t.startTime}attachTimeline(n){if(!this._resolved)this.pendingTimeline=n;else{const{resolved:t}=this;if(!t)return Ln;const{animation:o}=t;jm(o,n)}return Ln}play(){if(this.isStopped)return;const{resolved:n}=this;if(!n)return;const{animation:t}=n;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:n}=this;if(!n)return;const{animation:t}=n;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:n}=this;if(!n)return;const{animation:t,keyframes:o,duration:a,type:u,ease:l,times:c}=n;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:m,element:x,...v}=this.options,b=new Zd({...v,keyframes:o,duration:a,type:u,ease:l,times:c,isGenerator:!0}),T=jt(this.time);h.setWithVelocity(b.sample(T-zs).value,b.sample(T).value,zs)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:n}=this;n&&n.animation.finish()}cancel(){const{resolved:n}=this;n&&n.animation.cancel()}static supports(n){const{motionValue:t,name:o,repeatDelay:a,repeatType:u,damping:l,type:c}=n;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:f,transformTemplate:h}=t.owner.getProps();return _C()&&o&&jC.has(o)&&!f&&!h&&!a&&u!=="mirror"&&l!==0&&c!=="inertia"}}const OC={type:"spring",stiffness:500,damping:25,restSpeed:10},FC=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),zC={type:"keyframes",duration:.8},BC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},VC=(e,{keyframes:n})=>n.length>2?zC:Fr.has(e)?e.startsWith("scale")?FC(n[1]):OC:BC;function WC({when:e,delay:n,delayChildren:t,staggerChildren:o,staggerDirection:a,repeat:u,repeatType:l,repeatDelay:c,from:f,elapsed:h,...p}){return!!Object.keys(p).length}const ef=(e,n,t,o={},a,u)=>l=>{const c=zd(o,e)||{},f=c.delay||o.delay||0;let{elapsed:h=0}=o;h=h-jt(f);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:n.getVelocity(),...c,delay:-h,onUpdate:x=>{n.set(x),c.onUpdate&&c.onUpdate(x)},onComplete:()=>{l(),c.onComplete&&c.onComplete()},name:e,motionValue:n,element:u?void 0:a};WC(c)||(p={...p,...VC(e,p)}),p.duration&&(p.duration=jt(p.duration)),p.repeatDelay&&(p.repeatDelay=jt(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(m=!0)),m&&!u&&n.get()!==void 0){const x=nl(p.keyframes,c);if(x!==void 0)return Fe.update(()=>{p.onUpdate(x),p.onComplete()}),new sT([])}return!u&&qm.supports(p)?new qm(p):new Zd(p)};function UC({protectedKeys:e,needsAnimating:n},t){const o=e.hasOwnProperty(t)&&n[t]!==!0;return n[t]=!1,o}function Tx(e,n,{delay:t=0,transitionOverride:o,type:a}={}){var u;let{transition:l=e.getDefaultTransition(),transitionEnd:c,...f}=n;o&&(l=o);const h=[],p=a&&e.animationState&&e.animationState.getState()[a];for(const m in f){const x=e.getValue(m,(u=e.latestValues[m])!==null&&u!==void 0?u:null),v=f[m];if(v===void 0||p&&UC(p,m))continue;const b={delay:t,...zd(l||{},m)};let T=!1;if(window.MotionHandoffAnimation){const S=G0(e);if(S){const _=window.MotionHandoffAnimation(S,m,Fe);_!==null&&(b.startTime=_,T=!0)}}Wc(e,m),x.start(ef(m,x,v,e.shouldReduceMotion&&H0.has(m)?{type:!1}:b,e,T));const E=x.animation;E&&h.push(E)}return c&&Promise.all(h).then(()=>{Fe.update(()=>{c&&kT(e,c)})}),h}function Yc(e,n,t={}){var o;const a=el(e,n,t.type==="exit"?(o=e.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:u=e.getDefaultTransition()||{}}=a||{};t.transitionOverride&&(u=t.transitionOverride);const l=a?()=>Promise.all(Tx(e,a,t)):()=>Promise.resolve(),c=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:x}=u;return $C(e,n,p+h,m,x,t)}:()=>Promise.resolve(),{when:f}=u;if(f){const[h,p]=f==="beforeChildren"?[l,c]:[c,l];return h().then(()=>p())}else return Promise.all([l(),c(t.delay)])}function $C(e,n,t=0,o=0,a=1,u){const l=[],c=(e.variantChildren.size-1)*o,f=a===1?(h=0)=>h*o:(h=0)=>c-h*o;return Array.from(e.variantChildren).sort(HC).forEach((h,p)=>{h.notify("AnimationStart",n),l.push(Yc(h,n,{...u,delay:t+f(p)}).then(()=>h.notify("AnimationComplete",n)))}),Promise.all(l)}function HC(e,n){return e.sortNodePosition(n)}function qC(e,n,t={}){e.notify("AnimationStart",n);let o;if(Array.isArray(n)){const a=n.map(u=>Yc(e,u,t));o=Promise.all(a)}else if(typeof n=="string")o=Yc(e,n,t);else{const a=typeof n=="function"?el(e,n,t.custom):n;o=Promise.all(Tx(e,a,t))}return o.then(()=>{e.notify("AnimationComplete",n)})}const GC=Pd.length;function Cx(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent?Cx(e.parent)||{}:{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}const n={};for(let t=0;t<GC;t++){const o=Pd[t],a=e.props[o];(Vo(a)||a===!1)&&(n[o]=a)}return n}const KC=[...Ed].reverse(),YC=Ed.length;function JC(e){return n=>Promise.all(n.map(({animation:t,options:o})=>qC(e,t,o)))}function XC(e){let n=JC(e),t=Gm(),o=!0;const a=f=>(h,p)=>{var m;const x=el(e,p,f==="exit"?(m=e.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(x){const{transition:v,transitionEnd:b,...T}=x;h={...h,...T,...b}}return h};function u(f){n=f(e)}function l(f){const{props:h}=e,p=Cx(e.parent)||{},m=[],x=new Set;let v={},b=1/0;for(let E=0;E<YC;E++){const S=KC[E],_=t[S],j=h[S]!==void 0?h[S]:p[S],V=Vo(j),B=S===f?_.isActive:null;B===!1&&(b=E);let M=j===p[S]&&j!==h[S]&&V;if(M&&o&&e.manuallyAnimateOnMount&&(M=!1),_.protectedKeys={...v},!_.isActive&&B===null||!j&&!_.prevProp||Qs(j)||typeof j=="boolean")continue;const X=QC(_.prevProp,j);let U=X||S===f&&_.isActive&&!M&&V||E>b&&V,re=!1;const O=Array.isArray(j)?j:[j];let ee=O.reduce(a(S),{});B===!1&&(ee={});const{prevResolvedValues:ne={}}=_,ye={...ne,...ee},ie=ce=>{U=!0,x.has(ce)&&(re=!0,x.delete(ce)),_.needsAnimating[ce]=!0;const K=e.getValue(ce);K&&(K.liveStyle=!1)};for(const ce in ye){const K=ee[ce],se=ne[ce];if(v.hasOwnProperty(ce))continue;let C=!1;zc(K)&&zc(se)?C=!O0(K,se):C=K!==se,C?K!=null?ie(ce):x.add(ce):K!==void 0&&x.has(ce)?ie(ce):_.protectedKeys[ce]=!0}_.prevProp=j,_.prevResolvedValues=ee,_.isActive&&(v={...v,...ee}),o&&e.blockInitialAnimation&&(U=!1),U&&(!(M&&X)||re)&&m.push(...O.map(ce=>({animation:ce,options:{type:S}})))}if(x.size){const E={};x.forEach(S=>{const _=e.getBaseTarget(S),j=e.getValue(S);j&&(j.liveStyle=!0),E[S]=_??null}),m.push({animation:E})}let T=!!m.length;return o&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(T=!1),o=!1,T?n(m):Promise.resolve()}function c(f,h){var p;if(t[f].isActive===h)return Promise.resolve();(p=e.variantChildren)===null||p===void 0||p.forEach(x=>{var v;return(v=x.animationState)===null||v===void 0?void 0:v.setActive(f,h)}),t[f].isActive=h;const m=l(f);for(const x in t)t[x].protectedKeys={};return m}return{animateChanges:l,setActive:c,setAnimateFunction:u,getState:()=>t,reset:()=>{t=Gm(),o=!0}}}function QC(e,n){return typeof n=="string"?n!==e:Array.isArray(n)?!O0(n,e):!1}function Pr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Gm(){return{animate:Pr(!0),whileInView:Pr(),whileHover:Pr(),whileTap:Pr(),whileDrag:Pr(),whileFocus:Pr(),exit:Pr()}}class cr{constructor(n){this.isMounted=!1,this.node=n}update(){}}class ZC extends cr{constructor(n){super(n),n.animationState||(n.animationState=XC(n))}updateAnimationControlsSubscription(){const{animate:n}=this.node.getProps();Qs(n)&&(this.unmountControls=n.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:n}=this.node.getProps(),{animate:t}=this.node.prevProps||{};n!==t&&this.updateAnimationControlsSubscription()}unmount(){var n;this.node.animationState.reset(),(n=this.unmountControls)===null||n===void 0||n.call(this)}}let eE=0;class nE extends cr{constructor(){super(...arguments),this.id=eE++}update(){if(!this.node.presenceContext)return;const{isPresent:n,onExitComplete:t}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||n===o)return;const a=this.node.animationState.setActive("exit",!n);t&&!n&&a.then(()=>t(this.id))}mount(){const{register:n}=this.node.presenceContext||{};n&&(this.unmount=n(this.id))}unmount(){}}const tE={animation:{Feature:ZC},exit:{Feature:nE}};function $o(e,n,t,o={passive:!0}){return e.addEventListener(n,t,o),()=>e.removeEventListener(n,t)}function Zo(e){return{point:{x:e.pageX,y:e.pageY}}}const rE=e=>n=>Wd(n)&&e(n,Zo(n));function Do(e,n,t,o){return $o(e,n,rE(t),o)}const Km=(e,n)=>Math.abs(e-n);function iE(e,n){const t=Km(e.x,n.x),o=Km(e.y,n.y);return Math.sqrt(t**2+o**2)}class Ex{constructor(n,t,{transformPagePoint:o,contextWindow:a,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=lc(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,v=iE(m.offset,{x:0,y:0})>=3;if(!x&&!v)return;const{point:b}=m,{timestamp:T}=cn;this.history.push({...b,timestamp:T});const{onStart:E,onMove:S}=this.handlers;x||(E&&E(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,m)},this.handlePointerMove=(m,x)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=sc(x,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(m,x)=>{this.end();const{onEnd:v,onSessionEnd:b,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=lc(m.type==="pointercancel"?this.lastMoveEventInfo:sc(x,this.transformPagePoint),this.history);this.startEvent&&v&&v(m,E),b&&b(m,E)},!Wd(n))return;this.dragSnapToOrigin=u,this.handlers=t,this.transformPagePoint=o,this.contextWindow=a||window;const l=Zo(n),c=sc(l,this.transformPagePoint),{point:f}=c,{timestamp:h}=cn;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=t;p&&p(n,lc(c,this.history)),this.removeListeners=Qo(Do(this.contextWindow,"pointermove",this.handlePointerMove),Do(this.contextWindow,"pointerup",this.handlePointerUp),Do(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(n){this.handlers=n}end(){this.removeListeners&&this.removeListeners(),Nt(this.updatePoint)}}function sc(e,n){return n?{point:n(e.point)}:e}function Ym(e,n){return{x:e.x-n.x,y:e.y-n.y}}function lc({point:e},n){return{point:e,delta:Ym(e,Px(n)),offset:Ym(e,oE(n)),velocity:aE(n,.1)}}function oE(e){return e[0]}function Px(e){return e[e.length-1]}function aE(e,n){if(e.length<2)return{x:0,y:0};let t=e.length-1,o=null;const a=Px(e);for(;t>=0&&(o=e[t],!(a.timestamp-o.timestamp>jt(n)));)t--;if(!o)return{x:0,y:0};const u=It(a.timestamp-o.timestamp);if(u===0)return{x:0,y:0};const l={x:(a.x-o.x)/u,y:(a.y-o.y)/u};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}const Rx=1e-4,sE=1-Rx,lE=1+Rx,Ax=.01,uE=0-Ax,cE=0+Ax;function Fn(e){return e.max-e.min}function dE(e,n,t){return Math.abs(e-n)<=t}function Jm(e,n,t,o=.5){e.origin=o,e.originPoint=We(n.min,n.max,e.origin),e.scale=Fn(t)/Fn(n),e.translate=We(t.min,t.max,e.origin)-e.originPoint,(e.scale>=sE&&e.scale<=lE||isNaN(e.scale))&&(e.scale=1),(e.translate>=uE&&e.translate<=cE||isNaN(e.translate))&&(e.translate=0)}function Lo(e,n,t,o){Jm(e.x,n.x,t.x,o?o.originX:void 0),Jm(e.y,n.y,t.y,o?o.originY:void 0)}function Xm(e,n,t){e.min=t.min+n.min,e.max=e.min+Fn(n)}function fE(e,n,t){Xm(e.x,n.x,t.x),Xm(e.y,n.y,t.y)}function Qm(e,n,t){e.min=n.min-t.min,e.max=e.min+Fn(n)}function Oo(e,n,t){Qm(e.x,n.x,t.x),Qm(e.y,n.y,t.y)}function hE(e,{min:n,max:t},o){return n!==void 0&&e<n?e=o?We(n,e,o.min):Math.max(e,n):t!==void 0&&e>t&&(e=o?We(t,e,o.max):Math.min(e,t)),e}function Zm(e,n,t){return{min:n!==void 0?e.min+n:void 0,max:t!==void 0?e.max+t-(e.max-e.min):void 0}}function pE(e,{top:n,left:t,bottom:o,right:a}){return{x:Zm(e.x,t,a),y:Zm(e.y,n,o)}}function eg(e,n){let t=n.min-e.min,o=n.max-e.max;return n.max-n.min<e.max-e.min&&([t,o]=[o,t]),{min:t,max:o}}function mE(e,n){return{x:eg(e.x,n.x),y:eg(e.y,n.y)}}function gE(e,n){let t=.5;const o=Fn(e),a=Fn(n);return a>o?t=ki(n.min,n.max-o,e.min):o>a&&(t=ki(e.min,e.max-a,n.min)),Mt(0,1,t)}function yE(e,n){const t={};return n.min!==void 0&&(t.min=n.min-e.min),n.max!==void 0&&(t.max=n.max-e.min),t}const Jc=.35;function xE(e=Jc){return e===!1?e=0:e===!0&&(e=Jc),{x:ng(e,"left","right"),y:ng(e,"top","bottom")}}function ng(e,n,t){return{min:tg(e,n),max:tg(e,t)}}function tg(e,n){return typeof e=="number"?e:e[n]||0}const rg=()=>({translate:0,scale:1,origin:0,originPoint:0}),yi=()=>({x:rg(),y:rg()}),ig=()=>({min:0,max:0}),Je=()=>({x:ig(),y:ig()});function Gn(e){return[e("x"),e("y")]}function jx({top:e,left:n,right:t,bottom:o}){return{x:{min:n,max:t},y:{min:e,max:o}}}function vE({x:e,y:n}){return{top:n.min,right:e.max,bottom:n.max,left:e.min}}function wE(e,n){if(!n)return e;const t=n({x:e.left,y:e.top}),o=n({x:e.right,y:e.bottom});return{top:t.y,left:t.x,bottom:o.y,right:o.x}}function uc(e){return e===void 0||e===1}function Xc({scale:e,scaleX:n,scaleY:t}){return!uc(e)||!uc(n)||!uc(t)}function jr(e){return Xc(e)||Ix(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ix(e){return og(e.x)||og(e.y)}function og(e){return e&&e!=="0%"}function Bs(e,n,t){const o=e-t,a=n*o;return t+a}function ag(e,n,t,o,a){return a!==void 0&&(e=Bs(e,a,o)),Bs(e,t,o)+n}function Qc(e,n=0,t=1,o,a){e.min=ag(e.min,n,t,o,a),e.max=ag(e.max,n,t,o,a)}function _x(e,{x:n,y:t}){Qc(e.x,n.translate,n.scale,n.originPoint),Qc(e.y,t.translate,t.scale,t.originPoint)}const sg=.999999999999,lg=1.0000000000001;function bE(e,n,t,o=!1){const a=t.length;if(!a)return;n.x=n.y=1;let u,l;for(let c=0;c<a;c++){u=t[c],l=u.projectionDelta;const{visualElement:f}=u.options;f&&f.props.style&&f.props.style.display==="contents"||(o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vi(e,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),l&&(n.x*=l.x.scale,n.y*=l.y.scale,_x(e,l)),o&&jr(u.latestValues)&&vi(e,u.latestValues))}n.x<lg&&n.x>sg&&(n.x=1),n.y<lg&&n.y>sg&&(n.y=1)}function xi(e,n){e.min=e.min+n,e.max=e.max+n}function ug(e,n,t,o,a=.5){const u=We(e.min,e.max,a);Qc(e,n,t,u,o)}function vi(e,n){ug(e.x,n.x,n.scaleX,n.scale,n.originX),ug(e.y,n.y,n.scaleY,n.scale,n.originY)}function Nx(e,n){return jx(wE(e.getBoundingClientRect(),n))}function kE(e,n,t){const o=Nx(e,t),{scroll:a}=n;return a&&(xi(o.x,a.offset.x),xi(o.y,a.offset.y)),o}const Mx=({current:e})=>e?e.ownerDocument.defaultView:null,SE=new WeakMap;class TE{constructor(n){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Je(),this.visualElement=n}start(n,{snapToCursor:t=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Zo(p).point)},u=(p,m)=>{const{drag:x,dragPropagation:v,onDragStart:b}=this.getProps();if(x&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=gT(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gn(E=>{let S=this.getAxisMotionValue(E).get()||0;if(pt.test(S)){const{projection:_}=this.visualElement;if(_&&_.layout){const j=_.layout.layoutBox[E];j&&(S=Fn(j)*(parseFloat(S)/100))}}this.originPoint[E]=S}),b&&Fe.postRender(()=>b(p,m)),Wc(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},l=(p,m)=>{const{dragPropagation:x,dragDirectionLock:v,onDirectionLock:b,onDrag:T}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:E}=m;if(v&&this.currentDirection===null){this.currentDirection=CE(E),this.currentDirection!==null&&b&&b(this.currentDirection);return}this.updateAxis("x",m.point,E),this.updateAxis("y",m.point,E),this.visualElement.render(),T&&T(p,m)},c=(p,m)=>this.stop(p,m),f=()=>Gn(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Ex(n,{onSessionStart:a,onStart:u,onMove:l,onSessionEnd:c,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Mx(this.visualElement)})}stop(n,t){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:a}=t;this.startAnimation(a);const{onDragEnd:u}=this.getProps();u&&Fe.postRender(()=>u(n,t))}cancel(){this.isDragging=!1;const{projection:n,animationState:t}=this.visualElement;n&&(n.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(n,t,o){const{drag:a}=this.getProps();if(!o||!ws(n,a,this.currentDirection))return;const u=this.getAxisMotionValue(n);let l=this.originPoint[n]+o[n];this.constraints&&this.constraints[n]&&(l=hE(l,this.constraints[n],this.elastic[n])),u.set(l)}resolveConstraints(){var n;const{dragConstraints:t,dragElastic:o}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(n=this.visualElement.projection)===null||n===void 0?void 0:n.layout,u=this.constraints;t&&mi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=pE(a.layoutBox,t):this.constraints=!1,this.elastic=xE(o),u!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Gn(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=yE(a.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:n,onMeasureDragConstraints:t}=this.getProps();if(!n||!mi(n))return!1;const o=n.current,{projection:a}=this.visualElement;if(!a||!a.layout)return!1;const u=kE(o,a.root,this.visualElement.getTransformPagePoint());let l=mE(a.layout.layoutBox,u);if(t){const c=t(vE(l));this.hasMutatedConstraints=!!c,c&&(l=jx(c))}return l}startAnimation(n){const{drag:t,dragMomentum:o,dragElastic:a,dragTransition:u,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),f=this.constraints||{},h=Gn(p=>{if(!ws(p,t,this.currentDirection))return;let m=f&&f[p]||{};l&&(m={min:0,max:0});const x=a?200:1e6,v=a?40:1e7,b={type:"inertia",velocity:o?n[p]:0,bounceStiffness:x,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...u,...m};return this.startAxisValueAnimation(p,b)});return Promise.all(h).then(c)}startAxisValueAnimation(n,t){const o=this.getAxisMotionValue(n);return Wc(this.visualElement,n),o.start(ef(n,o,0,t,this.visualElement,!1))}stopAnimation(){Gn(n=>this.getAxisMotionValue(n).stop())}pauseAnimation(){Gn(n=>{var t;return(t=this.getAxisMotionValue(n).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(n){var t;return(t=this.getAxisMotionValue(n).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(n){const t=`_drag${n.toUpperCase()}`,o=this.visualElement.getProps(),a=o[t];return a||this.visualElement.getValue(n,(o.initial?o.initial[n]:void 0)||0)}snapToCursor(n){Gn(t=>{const{drag:o}=this.getProps();if(!ws(t,o,this.currentDirection))return;const{projection:a}=this.visualElement,u=this.getAxisMotionValue(t);if(a&&a.layout){const{min:l,max:c}=a.layout.layoutBox[t];u.set(n[t]-We(l,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:n,dragConstraints:t}=this.getProps(),{projection:o}=this.visualElement;if(!mi(t)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};Gn(l=>{const c=this.getAxisMotionValue(l);if(c&&this.constraints!==!1){const f=c.get();a[l]=gE({min:f,max:f},this.constraints[l])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Gn(l=>{if(!ws(l,n,null))return;const c=this.getAxisMotionValue(l),{min:f,max:h}=this.constraints[l];c.set(We(f,h,a[l]))})}addListeners(){if(!this.visualElement.current)return;SE.set(this.visualElement,this);const n=this.visualElement.current,t=Do(n,"pointerdown",f=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(f)}),o=()=>{const{dragConstraints:f}=this.getProps();mi(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,u=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Fe.read(o);const l=$o(window,"resize",()=>this.scalePositionWithinConstraints()),c=a.addEventListener("didUpdate",(({delta:f,hasLayoutChanged:h})=>{this.isDragging&&h&&(Gn(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=f[p].translate,m.set(m.get()+f[p].translate))}),this.visualElement.render())}));return()=>{l(),t(),u(),c&&c()}}getProps(){const n=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:o=!1,dragPropagation:a=!1,dragConstraints:u=!1,dragElastic:l=Jc,dragMomentum:c=!0}=n;return{...n,drag:t,dragDirectionLock:o,dragPropagation:a,dragConstraints:u,dragElastic:l,dragMomentum:c}}}function ws(e,n,t){return(n===!0||n===e)&&(t===null||t===e)}function CE(e,n=10){let t=null;return Math.abs(e.y)>n?t="y":Math.abs(e.x)>n&&(t="x"),t}class EE extends cr{constructor(n){super(n),this.removeGroupControls=Ln,this.removeListeners=Ln,this.controls=new TE(n)}mount(){const{dragControls:n}=this.node.getProps();n&&(this.removeGroupControls=n.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ln}unmount(){this.removeGroupControls(),this.removeListeners()}}const cg=e=>(n,t)=>{e&&Fe.postRender(()=>e(n,t))};class PE extends cr{constructor(){super(...arguments),this.removePointerDownListener=Ln}onPointerDown(n){this.session=new Ex(n,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mx(this.node)})}createPanHandlers(){const{onPanSessionStart:n,onPanStart:t,onPan:o,onPanEnd:a}=this.node.getProps();return{onSessionStart:cg(n),onStart:cg(t),onMove:o,onEnd:(u,l)=>{delete this.session,a&&Fe.postRender(()=>a(u,l))}}}mount(){this.removePointerDownListener=Do(this.node.current,"pointerdown",n=>this.onPointerDown(n))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Is={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function dg(e,n){return n.max===n.min?0:e/(n.max-n.min)*100}const ko={correct:(e,n)=>{if(!n.target)return e;if(typeof e=="string")if(me.test(e))e=parseFloat(e);else return e;const t=dg(e,n.target.x),o=dg(e,n.target.y);return`${t}% ${o}%`}},RE={correct:(e,{treeScale:n,projectionDelta:t})=>{const o=e,a=ur.parse(e);if(a.length>5)return o;const u=ur.createTransformer(e),l=typeof a[0]!="number"?1:0,c=t.x.scale*n.x,f=t.y.scale*n.y;a[0+l]/=c,a[1+l]/=f;const h=We(c,f,.5);return typeof a[2+l]=="number"&&(a[2+l]/=h),typeof a[3+l]=="number"&&(a[3+l]/=h),u(a)}};class AE extends P.Component{componentDidMount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:o,layoutId:a}=this.props,{projection:u}=n;YS(jE),u&&(t.group&&t.group.add(u),o&&o.register&&a&&o.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),Is.hasEverUpdated=!0}getSnapshotBeforeUpdate(n){const{layoutDependency:t,visualElement:o,drag:a,isPresent:u}=this.props,l=o.projection;return l&&(l.isPresent=u,a||n.layoutDependency!==t||t===void 0?l.willUpdate():this.safeToRemove(),n.isPresent!==u&&(u?l.promote():l.relegate()||Fe.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:n}=this.props.visualElement;n&&(n.root.didUpdate(),Ad.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:n,layoutGroup:t,switchLayoutGroup:o}=this.props,{projection:a}=n;a&&(a.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(a),o&&o.deregister&&o.deregister(a))}safeToRemove(){const{safeToRemove:n}=this.props;n&&n()}render(){return null}}function Dx(e){const[n,t]=y0(),o=P.useContext(kd);return k.jsx(AE,{...e,layoutGroup:o,switchLayoutGroup:P.useContext(T0),isPresent:n,safeToRemove:t})}const jE={borderRadius:{...ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ko,borderTopRightRadius:ko,borderBottomLeftRadius:ko,borderBottomRightRadius:ko,boxShadow:RE};function IE(e,n,t){const o=dn(e)?e:Ti(e);return o.start(ef("",o,n,t)),o.animation}function _E(e){return e instanceof SVGElement&&e.tagName!=="svg"}const NE=(e,n)=>e.depth-n.depth;class ME{constructor(){this.children=[],this.isDirty=!1}add(n){Ud(this.children,n),this.isDirty=!0}remove(n){$d(this.children,n),this.isDirty=!0}forEach(n){this.isDirty&&this.children.sort(NE),this.isDirty=!1,this.children.forEach(n)}}function DE(e,n){const t=mt.now(),o=({timestamp:a})=>{const u=a-t;u>=n&&(Nt(o),e(u-n))};return Fe.read(o,!0),()=>Nt(o)}const Lx=["TopLeft","TopRight","BottomLeft","BottomRight"],LE=Lx.length,fg=e=>typeof e=="string"?parseFloat(e):e,hg=e=>typeof e=="number"||me.test(e);function OE(e,n,t,o,a,u){a?(e.opacity=We(0,t.opacity!==void 0?t.opacity:1,FE(o)),e.opacityExit=We(n.opacity!==void 0?n.opacity:1,0,zE(o))):u&&(e.opacity=We(n.opacity!==void 0?n.opacity:1,t.opacity!==void 0?t.opacity:1,o));for(let l=0;l<LE;l++){const c=`border${Lx[l]}Radius`;let f=pg(n,c),h=pg(t,c);if(f===void 0&&h===void 0)continue;f||(f=0),h||(h=0),f===0||h===0||hg(f)===hg(h)?(e[c]=Math.max(We(fg(f),fg(h),o),0),(pt.test(h)||pt.test(f))&&(e[c]+="%")):e[c]=h}(n.rotate||t.rotate)&&(e.rotate=We(n.rotate||0,t.rotate||0,o))}function pg(e,n){return e[n]!==void 0?e[n]:e.borderRadius}const FE=Ox(0,.5,ex),zE=Ox(.5,.95,Ln);function Ox(e,n,t){return o=>o<e?0:o>n?1:t(ki(e,n,o))}function mg(e,n){e.min=n.min,e.max=n.max}function qn(e,n){mg(e.x,n.x),mg(e.y,n.y)}function gg(e,n){e.translate=n.translate,e.scale=n.scale,e.originPoint=n.originPoint,e.origin=n.origin}function yg(e,n,t,o,a){return e-=n,e=Bs(e,1/t,o),a!==void 0&&(e=Bs(e,1/a,o)),e}function BE(e,n=0,t=1,o=.5,a,u=e,l=e){if(pt.test(n)&&(n=parseFloat(n),n=We(l.min,l.max,n/100)-l.min),typeof n!="number")return;let c=We(u.min,u.max,o);e===u&&(c-=n),e.min=yg(e.min,n,t,c,a),e.max=yg(e.max,n,t,c,a)}function xg(e,n,[t,o,a],u,l){BE(e,n[t],n[o],n[a],n.scale,u,l)}const VE=["x","scaleX","originX"],WE=["y","scaleY","originY"];function vg(e,n,t,o){xg(e.x,n,VE,t?t.x:void 0,o?o.x:void 0),xg(e.y,n,WE,t?t.y:void 0,o?o.y:void 0)}function wg(e){return e.translate===0&&e.scale===1}function Fx(e){return wg(e.x)&&wg(e.y)}function bg(e,n){return e.min===n.min&&e.max===n.max}function UE(e,n){return bg(e.x,n.x)&&bg(e.y,n.y)}function kg(e,n){return Math.round(e.min)===Math.round(n.min)&&Math.round(e.max)===Math.round(n.max)}function zx(e,n){return kg(e.x,n.x)&&kg(e.y,n.y)}function Sg(e){return Fn(e.x)/Fn(e.y)}function Tg(e,n){return e.translate===n.translate&&e.scale===n.scale&&e.originPoint===n.originPoint}class $E{constructor(){this.members=[]}add(n){Ud(this.members,n),n.scheduleRender()}remove(n){if($d(this.members,n),n===this.prevLead&&(this.prevLead=void 0),n===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(n){const t=this.members.findIndex(a=>n===a);if(t===0)return!1;let o;for(let a=t;a>=0;a--){const u=this.members[a];if(u.isPresent!==!1){o=u;break}}return o?(this.promote(o),!0):!1}promote(n,t){const o=this.lead;if(n!==o&&(this.prevLead=o,this.lead=n,n.show(),o)){o.instance&&o.scheduleRender(),n.scheduleRender(),n.resumeFrom=o,t&&(n.resumeFrom.preserveOpacity=!0),o.snapshot&&(n.snapshot=o.snapshot,n.snapshot.latestValues=o.animationValues||o.latestValues),n.root&&n.root.isUpdating&&(n.isLayoutDirty=!0);const{crossfade:a}=n.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(n=>{const{options:t,resumingFrom:o}=n;t.onExitComplete&&t.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(n=>{n.instance&&n.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function HE(e,n,t){let o="";const a=e.x.translate/n.x,u=e.y.translate/n.y,l=(t==null?void 0:t.z)||0;if((a||u||l)&&(o=`translate3d(${a}px, ${u}px, ${l}px) `),(n.x!==1||n.y!==1)&&(o+=`scale(${1/n.x}, ${1/n.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:m,rotateY:x,skewX:v,skewY:b}=t;h&&(o=`perspective(${h}px) ${o}`),p&&(o+=`rotate(${p}deg) `),m&&(o+=`rotateX(${m}deg) `),x&&(o+=`rotateY(${x}deg) `),v&&(o+=`skewX(${v}deg) `),b&&(o+=`skewY(${b}deg) `)}const c=e.x.scale*n.x,f=e.y.scale*n.y;return(c!==1||f!==1)&&(o+=`scale(${c}, ${f})`),o||"none"}const Ir={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},_o=typeof window<"u"&&window.MotionDebug!==void 0,cc=["","X","Y","Z"],qE={visibility:"hidden"},Cg=1e3;let GE=0;function dc(e,n,t,o){const{latestValues:a}=n;a[e]&&(t[e]=a[e],n.setStaticValue(e,0),o&&(o[e]=0))}function Bx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:n}=e.options;if(!n)return;const t=G0(n);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:a,layoutId:u}=e.options;window.MotionCancelOptimisedAnimation(t,"transform",Fe,!(a||u))}const{parent:o}=e;o&&!o.hasCheckedOptimisedAppear&&Bx(o)}function Vx({attachResizeListener:e,defaultParent:n,measureScroll:t,checkIsScrollRoot:o,resetTransform:a}){return class{constructor(l={},c=n==null?void 0:n()){this.id=GE++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,_o&&(Ir.totalNodes=Ir.resolvedTargetDeltas=Ir.recalculatedProjection=0),this.nodes.forEach(JE),this.nodes.forEach(nP),this.nodes.forEach(tP),this.nodes.forEach(XE),_o&&window.MotionDebug.record(Ir)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new ME)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new Hd),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const f=this.eventHandlers.get(l);f&&f.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=_E(l),this.instance=l;const{layoutId:f,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||f)&&(this.isLayoutDirty=!0),e){let m;const x=()=>this.root.updateBlockedByResize=!1;e(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=DE(x,250),Is.hasAnimatedSinceResize&&(Is.hasAnimatedSinceResize=!1,this.nodes.forEach(Pg))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:x,hasRelativeTargetChanged:v,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||p.getDefaultTransition()||sP,{onLayoutAnimationStart:E,onLayoutAnimationComplete:S}=p.getProps(),_=!this.targetLayout||!zx(this.targetLayout,b)||v,j=!x&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||j||x&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,j);const V={...zd(T,"layout"),onPlay:E,onComplete:S};(p.shouldReduceMotion||this.options.layoutRoot)&&(V.delay=0,V.type=!1),this.startAnimation(V)}else x||Pg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Nt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(rP),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Bx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:c,layout:f}=this.options;if(c===void 0&&!f)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Eg);return}this.isUpdating||this.nodes.forEach(ZE),this.isUpdating=!1,this.nodes.forEach(eP),this.nodes.forEach(KE),this.nodes.forEach(YE),this.clearAllSnapshots();const c=mt.now();cn.delta=Mt(0,1e3/60,c-cn.timestamp),cn.timestamp=c,cn.isProcessing=!0,nc.update.process(cn),nc.preRender.process(cn),nc.render.process(cn),cn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ad.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(QE),this.sharedNodes.forEach(iP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Je(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c){const f=o(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:f,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!a)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!Fx(this.projectionDelta),f=this.getTransformTemplate(),h=f?f(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;l&&(c||jr(this.latestValues)||p)&&(a(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let f=this.removeElementScroll(c);return l&&(f=this.removeTransform(f)),lP(f),{animationId:this.root.animationId,measuredBox:c,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var l;const{visualElement:c}=this.options;if(!c)return Je();const f=c.measureViewportBox();if(!(((l=this.scroll)===null||l===void 0?void 0:l.wasRoot)||this.path.some(uP))){const{scroll:p}=this.root;p&&(xi(f.x,p.offset.x),xi(f.y,p.offset.y))}return f}removeElementScroll(l){var c;const f=Je();if(qn(f,l),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:m,options:x}=p;p!==this.root&&m&&x.layoutScroll&&(m.wasRoot&&qn(f,l),xi(f.x,m.offset.x),xi(f.y,m.offset.y))}return f}applyTransform(l,c=!1){const f=Je();qn(f,l);for(let h=0;h<this.path.length;h++){const p=this.path[h];!c&&p.options.layoutScroll&&p.scroll&&p!==p.root&&vi(f,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),jr(p.latestValues)&&vi(f,p.latestValues)}return jr(this.latestValues)&&vi(f,this.latestValues),f}removeTransform(l){const c=Je();qn(c,l);for(let f=0;f<this.path.length;f++){const h=this.path[f];if(!h.instance||!jr(h.latestValues))continue;Xc(h.latestValues)&&h.updateSnapshot();const p=Je(),m=h.measurePageBox();qn(p,m),vg(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return jr(this.latestValues)&&vg(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==cn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var c;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==f;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:x}=this.options;if(!(!this.layout||!(m||x))){if(this.resolvedRelativeTargetAt=cn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),Oo(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),qn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Je(),this.targetWithTransforms=Je()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qn(this.target,this.layout.layoutBox),_x(this.target,this.targetDelta)):qn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Je(),this.relativeTargetOrigin=Je(),Oo(this.relativeTargetOrigin,this.target,v.target),qn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}_o&&Ir.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Xc(this.parent.latestValues)||Ix(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(h=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===cn.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;qn(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,v=this.treeScale.y;bE(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Je());const{target:b}=c;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gg(this.prevProjectionDelta.x,this.projectionDelta.x),gg(this.prevProjectionDelta.y,this.projectionDelta.y)),Lo(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==v||!Tg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Tg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b)),_o&&Ir.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),l){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yi(),this.projectionDelta=yi(),this.projectionDeltaWithTransform=yi()}setAnimationOrigin(l,c=!1){const f=this.snapshot,h=f?f.latestValues:{},p={...this.latestValues},m=yi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const x=Je(),v=f?f.source:void 0,b=this.layout?this.layout.source:void 0,T=v!==b,E=this.getStack(),S=!E||E.members.length<=1,_=!!(T&&!S&&this.options.crossfade===!0&&!this.path.some(aP));this.animationProgress=0;let j;this.mixTargetDelta=V=>{const B=V/1e3;Rg(m.x,l.x,B),Rg(m.y,l.y,B),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Oo(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),oP(this.relativeTarget,this.relativeTargetOrigin,x,B),j&&UE(this.relativeTarget,j)&&(this.isProjectionDirty=!1),j||(j=Je()),qn(j,this.relativeTarget)),T&&(this.animationValues=p,OE(p,h,this.latestValues,B,_,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=B},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Nt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{Is.hasAnimatedSinceResize=!0,this.currentAnimation=IE(0,Cg,{...l,onUpdate:c=>{this.mixTargetDelta(c),l.onUpdate&&l.onUpdate(c)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Cg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:f,layout:h,latestValues:p}=l;if(!(!c||!f||!h)){if(this!==l&&this.layout&&h&&Wx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){f=this.target||Je();const m=Fn(this.layout.layoutBox.x);f.x.min=l.target.x.min,f.x.max=f.x.min+m;const x=Fn(this.layout.layoutBox.y);f.y.min=l.target.y.min,f.y.max=f.y.min+x}qn(c,f),vi(c,p),Lo(this.projectionDeltaWithTransform,this.layoutCorrected,c,p)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new $E),this.sharedNodes.get(l).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:c}=this.options;return c?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:c}=this.options;return c?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:f}={}){const h=this.getStack();h&&h.promote(this,f),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:f}=l;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(c=!0),!c)return;const h={};f.z&&dc("z",l,h,this.animationValues);for(let p=0;p<cc.length;p++)dc(`rotate${cc[p]}`,l,h,this.animationValues),dc(`skew${cc[p]}`,l,h,this.animationValues);l.render();for(const p in h)l.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);l.scheduleRender()}getProjectionStyles(l){var c,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return qE;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=As(l==null?void 0:l.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=As(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!jr(this.latestValues)&&(T.transform=p?p({},""):"none",this.hasProjected=!1),T}const x=m.animationValues||m.latestValues;this.applyTransformsToTarget(),h.transform=HE(this.projectionDeltaWithTransform,this.treeScale,x),p&&(h.transform=p(x,h.transform));const{x:v,y:b}=this.projectionDelta;h.transformOrigin=`${v.origin*100}% ${b.origin*100}% 0`,m.animationValues?h.opacity=m===this?(f=(c=x.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:h.opacity=m===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const T in Ds){if(x[T]===void 0)continue;const{correct:E,applyTo:S}=Ds[T],_=h.transform==="none"?x[T]:E(x[T],m);if(S){const j=S.length;for(let V=0;V<j;V++)h[S[V]]=_}else h[T]=_}return this.options.layoutId&&(h.pointerEvents=m===this?As(l==null?void 0:l.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Eg),this.root.sharedNodes.clear()}}}function KE(e){e.updateLayout()}function YE(e){var n;const t=((n=e.resumeFrom)===null||n===void 0?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:a}=e.layout,{animationType:u}=e.options,l=t.source!==e.layout.source;u==="size"?Gn(m=>{const x=l?t.measuredBox[m]:t.layoutBox[m],v=Fn(x);x.min=o[m].min,x.max=x.min+v}):Wx(u,t.layoutBox,o)&&Gn(m=>{const x=l?t.measuredBox[m]:t.layoutBox[m],v=Fn(o[m]);x.max=x.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+v)});const c=yi();Lo(c,o,t.layoutBox);const f=yi();l?Lo(f,e.applyTransform(a,!0),t.measuredBox):Lo(f,o,t.layoutBox);const h=!Fx(c);let p=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:x,layout:v}=m;if(x&&v){const b=Je();Oo(b,t.layoutBox,x.layoutBox);const T=Je();Oo(T,o,v.layoutBox),zx(b,T)||(p=!0),m.options.layoutRoot&&(e.relativeTarget=T,e.relativeTargetOrigin=b,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:o,snapshot:t,delta:f,layoutDelta:c,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(e.isLead()){const{onExitComplete:o}=e.options;o&&o()}e.options.transition=void 0}function JE(e){_o&&Ir.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function XE(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function QE(e){e.clearSnapshot()}function Eg(e){e.clearMeasurements()}function ZE(e){e.isLayoutDirty=!1}function eP(e){const{visualElement:n}=e.options;n&&n.getProps().onBeforeLayoutMeasure&&n.notify("BeforeLayoutMeasure"),e.resetTransform()}function Pg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function nP(e){e.resolveTargetDelta()}function tP(e){e.calcProjection()}function rP(e){e.resetSkewAndRotation()}function iP(e){e.removeLeadSnapshot()}function Rg(e,n,t){e.translate=We(n.translate,0,t),e.scale=We(n.scale,1,t),e.origin=n.origin,e.originPoint=n.originPoint}function Ag(e,n,t,o){e.min=We(n.min,t.min,o),e.max=We(n.max,t.max,o)}function oP(e,n,t,o){Ag(e.x,n.x,t.x,o),Ag(e.y,n.y,t.y,o)}function aP(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const sP={duration:.45,ease:[.4,0,.1,1]},jg=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ig=jg("applewebkit/")&&!jg("chrome/")?Math.round:Ln;function _g(e){e.min=Ig(e.min),e.max=Ig(e.max)}function lP(e){_g(e.x),_g(e.y)}function Wx(e,n,t){return e==="position"||e==="preserve-aspect"&&!dE(Sg(n),Sg(t),.2)}function uP(e){var n;return e!==e.root&&((n=e.scroll)===null||n===void 0?void 0:n.wasRoot)}const cP=Vx({attachResizeListener:(e,n)=>$o(e,"resize",n),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fc={current:void 0},Ux=Vx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!fc.current){const e=new cP({});e.mount(window),e.setOptions({layoutScroll:!0}),fc.current=e}return fc.current},resetTransform:(e,n)=>{e.style.transform=n!==void 0?n:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),dP={pan:{Feature:PE},drag:{Feature:EE,ProjectionNode:Ux,MeasureLayout:Dx}};function Ng(e,n,t){const{props:o}=e;e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t==="Start");const a="onHover"+t,u=o[a];u&&Fe.postRender(()=>u(n,Zo(n)))}class fP extends cr{mount(){const{current:n}=this.node;n&&(this.unmount=dT(n,t=>(Ng(this.node,t,"Start"),o=>Ng(this.node,o,"End"))))}unmount(){}}class hP extends cr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let n=!1;try{n=this.node.current.matches(":focus-visible")}catch{n=!0}!n||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Qo($o(this.node.current,"focus",()=>this.onFocus()),$o(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Mg(e,n,t){const{props:o}=e;e.animationState&&o.whileTap&&e.animationState.setActive("whileTap",t==="Start");const a="onTap"+(t==="End"?"":t),u=o[a];u&&Fe.postRender(()=>u(n,Zo(n)))}class pP extends cr{mount(){const{current:n}=this.node;n&&(this.unmount=mT(n,t=>(Mg(this.node,t,"Start"),(o,{success:a})=>Mg(this.node,o,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Zc=new WeakMap,hc=new WeakMap,mP=e=>{const n=Zc.get(e.target);n&&n(e)},gP=e=>{e.forEach(mP)};function yP({root:e,...n}){const t=e||document;hc.has(t)||hc.set(t,{});const o=hc.get(t),a=JSON.stringify(n);return o[a]||(o[a]=new IntersectionObserver(gP,{root:e,...n})),o[a]}function xP(e,n,t){const o=yP(n);return Zc.set(e,t),o.observe(e),()=>{Zc.delete(e),o.unobserve(e)}}const vP={some:0,all:1};class wP extends cr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:n={}}=this.node.getProps(),{root:t,margin:o,amount:a="some",once:u}=n,l={root:t?t.current:void 0,rootMargin:o,threshold:typeof a=="number"?a:vP[a]},c=f=>{const{isIntersecting:h}=f;if(this.isInView===h||(this.isInView=h,u&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),x=h?p:m;x&&x(f)};return xP(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:n,prevProps:t}=this.node;["amount","margin","root"].some(bP(n,t))&&this.startObserver()}unmount(){}}function bP({viewport:e={}},{viewport:n={}}={}){return t=>e[t]!==n[t]}const kP={inView:{Feature:wP},tap:{Feature:pP},focus:{Feature:hP},hover:{Feature:fP}},SP={layout:{ProjectionNode:Ux,MeasureLayout:Dx}},ed={current:null},$x={current:!1};function TP(){if($x.current=!0,!!Sd)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),n=()=>ed.current=e.matches;e.addListener(n),n()}else ed.current=!1}const CP=[...px,gn,ur],EP=e=>CP.find(hx(e)),Dg=new WeakMap;function PP(e,n,t){for(const o in n){const a=n[o],u=t[o];if(dn(a))e.addValue(o,a);else if(dn(u))e.addValue(o,Ti(a,{owner:e}));else if(u!==a)if(e.hasValue(o)){const l=e.getValue(o);l.liveStyle===!0?l.jump(a):l.hasAnimated||l.set(a)}else{const l=e.getStaticValue(o);e.addValue(o,Ti(l!==void 0?l:a,{owner:e}))}}for(const o in t)n[o]===void 0&&e.removeValue(o);return n}const Lg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class RP{scrapeMotionValuesFromProps(n,t,o){return{}}constructor({parent:n,props:t,presenceContext:o,reducedMotionConfig:a,blockInitialAnimation:u,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xd,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=mt.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Fe.render(this.render,!1,!0))};const{latestValues:f,renderState:h,onUpdate:p}=l;this.onUpdate=p,this.latestValues=f,this.baseTarget={...f},this.initialValues=t.initial?{...f}:{},this.renderState=h,this.parent=n,this.props=t,this.presenceContext=o,this.depth=n?n.depth+1:0,this.reducedMotionConfig=a,this.options=c,this.blockInitialAnimation=!!u,this.isControllingVariants=Zs(t),this.isVariantNode=k0(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(n&&n.current);const{willChange:m,...x}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in x){const b=x[v];f[v]!==void 0&&dn(b)&&b.set(f[v],!1)}}mount(n){this.current=n,Dg.set(n,this),this.projection&&!this.projection.instance&&this.projection.mount(n),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,o)=>this.bindToMotionValue(o,t)),$x.current||TP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ed.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dg.delete(this.current),this.projection&&this.projection.unmount(),Nt(this.notifyUpdate),Nt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const t=this.features[n];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(n,t){this.valueSubscriptions.has(n)&&this.valueSubscriptions.get(n)();const o=Fr.has(n),a=t.on("change",c=>{this.latestValues[n]=c,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),u=t.on("renderRequest",this.scheduleRender);let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,n,t)),this.valueSubscriptions.set(n,()=>{a(),u(),l&&l(),t.owner&&t.stop()})}sortNodePosition(n){return!this.current||!this.sortInstanceNodePosition||this.type!==n.type?0:this.sortInstanceNodePosition(this.current,n.current)}updateFeatures(){let n="animation";for(n in Si){const t=Si[n];if(!t)continue;const{isEnabled:o,Feature:a}=t;if(!this.features[n]&&a&&o(this.props)&&(this.features[n]=new a(this)),this.features[n]){const u=this.features[n];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Je()}getStaticValue(n){return this.latestValues[n]}setStaticValue(n,t){this.latestValues[n]=t}update(n,t){(n.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=n,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let o=0;o<Lg.length;o++){const a=Lg[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const u="on"+a,l=n[u];l&&(this.propEventSubscriptions[a]=this.on(a,l))}this.prevMotionValues=PP(this,this.scrapeMotionValuesFromProps(n,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(n){return this.props.variants?this.props.variants[n]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(n){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(n),()=>t.variantChildren.delete(n)}addValue(n,t){const o=this.values.get(n);t!==o&&(o&&this.removeValue(n),this.bindToMotionValue(n,t),this.values.set(n,t),this.latestValues[n]=t.get())}removeValue(n){this.values.delete(n);const t=this.valueSubscriptions.get(n);t&&(t(),this.valueSubscriptions.delete(n)),delete this.latestValues[n],this.removeValueFromRenderState(n,this.renderState)}hasValue(n){return this.values.has(n)}getValue(n,t){if(this.props.values&&this.props.values[n])return this.props.values[n];let o=this.values.get(n);return o===void 0&&t!==void 0&&(o=Ti(t===null?void 0:t,{owner:this}),this.addValue(n,o)),o}readValue(n,t){var o;let a=this.latestValues[n]!==void 0||!this.current?this.latestValues[n]:(o=this.getBaseTargetFromProps(this.props,n))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,n,this.options);return a!=null&&(typeof a=="string"&&(dx(a)||tx(a))?a=parseFloat(a):!EP(a)&&ur.test(t)&&(a=lx(n,t)),this.setBaseTarget(n,dn(a)?a.get():a)),dn(a)?a.get():a}setBaseTarget(n,t){this.baseTarget[n]=t}getBaseTarget(n){var t;const{initial:o}=this.props;let a;if(typeof o=="string"||typeof o=="object"){const l=Id(this.props,o,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);l&&(a=l[n])}if(o&&a!==void 0)return a;const u=this.getBaseTargetFromProps(this.props,n);return u!==void 0&&!dn(u)?u:this.initialValues[n]!==void 0&&a===void 0?void 0:this.baseTarget[n]}on(n,t){return this.events[n]||(this.events[n]=new Hd),this.events[n].add(t)}notify(n,...t){this.events[n]&&this.events[n].notify(...t)}}class Hx extends RP{constructor(){super(...arguments),this.KeyframeResolver=mx}sortInstanceNodePosition(n,t){return n.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(n,t){return n.style?n.style[t]:void 0}removeValueFromRenderState(n,{vars:t,style:o}){delete t[n],delete o[n]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:n}=this.props;dn(n)&&(this.childSubscription=n.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function AP(e){return window.getComputedStyle(e)}class jP extends Hx{constructor(){super(...arguments),this.type="html",this.renderInstance=I0}readValueFromInstance(n,t){if(Fr.has(t)){const o=Jd(t);return o&&o.default||0}else{const o=AP(n),a=(R0(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(n,{transformPagePoint:t}){return Nx(n,t)}build(n,t,o){Md(n,t,o.transformTemplate)}scrapeMotionValuesFromProps(n,t,o){return Fd(n,t,o)}}class IP extends Hx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Je}getBaseTargetFromProps(n,t){return n[t]}readValueFromInstance(n,t){if(Fr.has(t)){const o=Jd(t);return o&&o.default||0}return t=_0.has(t)?t:Rd(t),n.getAttribute(t)}scrapeMotionValuesFromProps(n,t,o){return D0(n,t,o)}build(n,t,o){Dd(n,t,this.isSVGTag,o.transformTemplate)}renderInstance(n,t,o,a){N0(n,t,o,a)}mount(n){this.isSVGTag=Od(n.tagName),super.mount(n)}}const _P=(e,n)=>jd(e)?new IP(n):new jP(n,{allowProjection:e!==P.Fragment}),NP=iT({...tE,...kP,...dP,...SP},_P),Ee=vS(NP);function qx(e){const n=Or(()=>Ti(e)),{isStatic:t}=P.useContext(Js);if(t){const[,o]=P.useState(e);P.useEffect(()=>n.on("change",o),[])}return n}function Gx(e,n){const t=qx(n()),o=()=>t.set(n());return o(),Td(()=>{const a=()=>Fe.preRender(o,!1,!0),u=e.map(l=>l.on("change",a));return()=>{u.forEach(l=>l()),Nt(o)}}),t}const MP=e=>e&&typeof e=="object"&&e.mix,DP=e=>MP(e)?e.mix:void 0;function LP(...e){const n=!Array.isArray(e[0]),t=n?0:-1,o=e[0+t],a=e[1+t],u=e[2+t],l=e[3+t],c=kx(a,u,{mixer:DP(u[0]),...l});return n?c(o):c}function OP(e){No.current=[],e();const n=Gx(No.current,e);return No.current=void 0,n}function FP(e,n,t,o){if(typeof e=="function")return OP(e);const a=typeof n=="function"?n:LP(n,t,o);return Array.isArray(e)?Og(e,a):Og([e],([u])=>a(u))}function Og(e,n){const t=Or(()=>[]);return Gx(e,()=>{t.length=0;const o=e.length;for(let a=0;a<o;a++)t[a]=e[a].get();return n(t)})}const Kx=P.createContext(null);function zP(e,n,t,o){if(!o)return e;const a=e.findIndex(p=>p.value===n);if(a===-1)return e;const u=o>0?1:-1,l=e[a+u];if(!l)return e;const c=e[a],f=l.layout,h=We(f.min,f.max,.5);return u===1&&c.layout.max+t>h||u===-1&&c.layout.min+t<h?xT(e,a,a+u):e}function BP({children:e,as:n="ul",axis:t="y",onReorder:o,values:a,...u},l){const c=Or(()=>Ee[n]),f=[],h=P.useRef(!1),p={axis:t,registerItem:(m,x)=>{const v=f.findIndex(b=>m===b.value);v!==-1?f[v].layout=x[t]:f.push({value:m,layout:x[t]}),f.sort(UP)},updateOrder:(m,x,v)=>{if(h.current)return;const b=zP(f,m,x,v);f!==b&&(h.current=!0,o(b.map(WP).filter(T=>a.indexOf(T)!==-1)))}};return P.useEffect(()=>{h.current=!1}),k.jsx(c,{...u,ref:l,ignoreStrict:!0,children:k.jsx(Kx.Provider,{value:p,children:e})})}const VP=P.forwardRef(BP);function WP(e){return e.value}function UP(e,n){return e.layout.min-n.layout.min}function Fg(e,n=0){return dn(e)?e:qx(n)}function $P({children:e,style:n={},value:t,as:o="li",onDrag:a,layout:u=!0,...l},c){const f=Or(()=>Ee[o]),h=P.useContext(Kx),p={x:Fg(n.x),y:Fg(n.y)},m=FP([p.x,p.y],([T,E])=>T||E?1:"unset"),{axis:x,registerItem:v,updateOrder:b}=h;return k.jsx(f,{drag:x,...l,dragSnapToOrigin:!0,style:{...n,x:p.x,y:p.y,zIndex:m},layout:u,onDrag:(T,E)=>{const{velocity:S}=E;S[x]&&b(t,p[x].get(),S[x]),a&&a(T,E)},onLayoutMeasure:T=>v(t,T),ref:c,ignoreStrict:!0,children:e})}const HP=P.forwardRef($P);function Yx({autoPlay:e=!1}){const[n,t]=P.useState(!1);return P.useEffect(()=>{if(!e)return;const o=setTimeout(()=>t(!0),300);return()=>clearTimeout(o)},[e]),k.jsx("div",{onClick:()=>t(!n),className:`flex w-16 h-9 p-1 rounded-full cursor-pointer ${n?"bg-green-500 justify-end":"bg-gray-300 justify-start"}`,children:k.jsx(Ee.div,{className:"w-7 h-7 bg-white rounded-full shadow-md",layout:!0,transition:{type:"spring",stiffness:700,damping:30}})})}const qP=Object.freeze(Object.defineProperty({__proto__:null,default:Yx},Symbol.toStringTag,{value:"Module"})),zg=["Commit","Analytics","Upgrade"];function GP(){const[e,n]=P.useState(zg[0]);return k.jsx("div",{className:"flex gap-2 p-1 bg-neutral-200 dark:bg-neutral-800 rounded-full w-fit",children:zg.map(t=>k.jsxs("button",{onClick:()=>n(t),className:"relative px-4 py-2 text-sm font-medium rounded-full",children:[e===t&&k.jsx(Ee.div,{layoutId:"active-pill",className:"absolute inset-0 bg-neutral-900 dark:bg-white rounded-full",transition:{type:"spring",stiffness:500,damping:35}}),k.jsx("span",{className:`relative z-10 ${e===t?"text-white dark:text-black":"text-neutral-600 dark:text-neutral-400"}`,children:t})]},t))})}const KP=Object.freeze(Object.defineProperty({__proto__:null,default:GP},Symbol.toStringTag,{value:"Module"})),YP=[{question:"What is Framer Motion?",answer:"A React animation library for building smooth, physics-based UI motion."},{question:"What is GSAP?",answer:"A JavaScript animation library known for complex timelines and scroll-based effects."},{question:"What is Three.js?",answer:"A JavaScript library for building 3D graphics in the browser using WebGL."}];function JP(){const[e,n]=P.useState(null);return k.jsx("div",{className:"w-80 flex flex-col gap-2",children:YP.map((t,o)=>{const a=e===o;return k.jsxs("div",{className:"rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden",children:[k.jsxs("button",{onClick:()=>n(a?null:o),className:"w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-900 dark:text-white text-left",children:[t.question,k.jsx(Ee.span,{animate:{rotate:a?45:0},transition:{duration:.2},children:"+"})]}),k.jsx(at,{initial:!1,children:a&&k.jsx(Ee.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:"easeInOut"},children:k.jsx("p",{className:"px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-400",children:t.answer})})})]},t.question)})})}const XP=Object.freeze(Object.defineProperty({__proto__:null,default:JP},Symbol.toStringTag,{value:"Module"}));function QP(){const[e,n]=P.useState(!1),[t,o]=P.useState({x:0,y:0});function a(u){const l=u.currentTarget.getBoundingClientRect();o({x:u.clientX-l.left,y:u.clientY-l.top})}return k.jsxs("div",{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onMouseMove:a,className:"relative w-72 h-40 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 text-sm cursor-none",children:["Hover over this box",k.jsx(at,{children:e&&k.jsx(Ee.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},transition:{duration:.15},style:{left:t.x,top:t.y},className:"pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium text-black",children:"👀 Watching"})})]})}const ZP=Object.freeze(Object.defineProperty({__proto__:null,default:QP},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function nR(e,n,t=[]){if(n==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:eR(e),size:24,node:n,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=e=>{let n="",t=!1;for(const o of e){if(o==="-"||o==="_"||o<=" "){t=n.length>0;continue}n.length===0?n+=o.toLowerCase():n+=t?o.toUpperCase():o,t=!1}return n};/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=e=>{const n=tR(e);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=(...e)=>e.filter((n,t,o)=>!!n&&n.trim()!==""&&o.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pc(e){return e!=null}function iR(e,n={}){var x,v;const t=n.attributeNames??{},o=b=>t[b]??b,a=e.size??e.width??Rr.width,u=e.size??e.height??Rr.height,l=((x=e.aliases)==null?void 0:x.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],c=[...e.name?[`lucide-${e.name}`]:[],...l],f=((v=n.className)==null?void 0:v.split(" ").filter(Boolean))??[],h=n.includeDefaultClasses===!1?nd(...f):nd("lucide",...c,...f),p=n.absoluteStrokeWidth?Number(n.strokeWidth??Rr["stroke-width"])*Number(e.size??e.width??Rr.width)/Number(n.size??n.width??Rr.width):n.strokeWidth??Rr["stroke-width"];return["svg",{...Object.entries(Rr).reduce((b,[T,E])=>(b[o(T)]=E,b),{}),..."color"in n&&n.color&&{[o("stroke")]:n.color},..."size"in n&&pc(n.size)&&{[o("width")]:n.size,[o("height")]:n.size},..."width"in n&&pc(n.width)&&{[o("width")]:n.width},..."height"in n&&pc(n.height)&&{[o("height")]:n.height},[o("stroke-width")]:p,...h&&{[o("class")]:h},[o("viewBox")]:`0 0 ${a} ${u}`,...n.hasA11yProp===!1?{[o("aria-hidden")]:"true"}:{},..."attributes"in n&&n.attributes},e.node.map(b=>{const[T,E,S]=b,_=n.nonScalingStroke?{[o("vector-effect")]:"non-scaling-stroke",...E}:E;return S?[T,_,S]:[T,_]})]}/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function oR(e,n={}){return iR(e,{...n,attributeNames:{...n.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=e=>{for(const n in e)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1},sR=P.createContext({}),lR=()=>P.useContext(sR),uR=P.forwardRef(({color:e,size:n,width:t,height:o,strokeWidth:a,absoluteStrokeWidth:u,nonScalingStroke:l,className:c="",children:f,iconNode:h=[],icon:p={node:h,aliases:[],size:24},...m},x)=>{const{size:v=24,strokeWidth:b=2,absoluteStrokeWidth:T=!1,nonScalingStroke:E=!1,color:S="currentColor",className:_=""}=lR()??{},j=!!f||aR(m),[V,B,M=[]]=oR(p,{color:e??S,width:t??n??v,height:o??n??v,strokeWidth:a??b,absoluteStrokeWidth:u??T,nonScalingStroke:l??E,className:nd(_,c),hasA11yProp:j,attributes:m});return P.createElement(V,{ref:x,...B},[...M.map(([X,U])=>P.createElement(X,U)),...Array.isArray(f)?f:[f]])});/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function dr(e,n=[],t=[]){const o=typeof e=="string"?nR(e,n,t):e,a=P.forwardRef(({className:u,...l},c)=>P.createElement(uR,{ref:c,icon:o,className:u,...l}));return o.name&&(a.displayName=rR(o.name)),a}/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Jx.node;const nf=dr(Jx);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Xx.node;const Qx=dr(Xx);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};Zx.node;const cR=dr(Zx);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};ev.node;const dR=dr(ev);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};nv.node;const fR=dr(nv);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};tv.node;const tf=dr(tv);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};rv.node;const hR=dr(rv);/**
 * @license lucide-react v1.44.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};iv.node;const pR=dr(iv);function ov({autoPlay:e=!1}){const[n,t]=P.useState(!1);return P.useEffect(()=>{if(!e)return;const o=setTimeout(()=>t(!0),300);return()=>clearTimeout(o)},[e]),k.jsx("button",{onClick:()=>t(o=>!o),"aria-label":n?"Unlike":"Like",className:"flex h-10 w-10 items-center justify-center",children:k.jsx(Ee.span,{initial:{scale:.6},animate:{scale:1},transition:{type:"spring",stiffness:700,damping:15},children:k.jsx(cR,{className:n?"h-6 w-6 text-red-500":"h-6 w-6 text-neutral-400",fill:n?"currentColor":"none"})},n)})}const mR=Object.freeze(Object.defineProperty({__proto__:null,default:ov},Symbol.toStringTag,{value:"Module"}));function gR(){const[e,n]=P.useState(!0);return P.useEffect(()=>{const t=setTimeout(()=>{n(!1)},2e3);return()=>clearTimeout(t)},[]),k.jsx("div",{className:"w-72 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4",children:k.jsx(at,{mode:"wait",children:e?k.jsxs(Ee.div,{exit:{opacity:0},transition:{duration:.3},className:"flex flex-col gap-3",children:[k.jsx("div",{className:"h-24 w-full animate-pulse rounded-lg bg-neutral-300 dark:bg-neutral-700"}),k.jsx("div",{className:"h-4 w-3/4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"}),k.jsx("div",{className:"h-4 w-1/2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"})]},"skeleton"):k.jsxs(Ee.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},className:"flex flex-col gap-3",children:[k.jsx("img",{src:"https://picsum.photos/300/150",className:"h-24 w-full rounded-lg object-cover"}),k.jsx("h3",{className:"text-sm font-medium text-neutral-900 dark:text-white",children:"Loaded Content Title"}),k.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:"This content appeared after the simulated network delay finished."})]},"content")})})}const yR=Object.freeze(Object.defineProperty({__proto__:null,default:gR},Symbol.toStringTag,{value:"Module"}));function xR(){const[e,n]=P.useState([]);function t(){const o=Date.now();n(a=>[...a,{id:o,message:"Changes saved successfully"}]),setTimeout(()=>{n(a=>a.filter(u=>u.id!==o))},3e3)}return k.jsxs("div",{className:"flex flex-col items-center gap-6",children:[k.jsx("button",{onClick:t,className:"rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black",children:"Trigger Toast"}),k.jsx("div",{className:"fixed bottom-6 right-6 flex flex-col gap-2",children:k.jsx(at,{children:e.map(o=>k.jsx(Ee.div,{layout:!0,initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,x:100,scale:.9},transition:{duration:.25,ease:"easeOut"},className:"rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white",children:o.message},o.id))})})]})}const vR=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"}));function wR(){const[e,n]=P.useState(!1),t=()=>n(!1),o="Drawer",a=k.jsx("p",{className:"text-sm text-neutral-500 dark:text-neutral-400",children:"This is the drawer content. Drag the handle down, click the backdrop, or press Escape to close it."});return P.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),P.useEffect(()=>{const u=l=>{l.key==="Escape"&&t()};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[t]),k.jsxs(k.Fragment,{children:[k.jsx("button",{onClick:()=>n(!0),className:"rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black",children:"Open Drawer"}),k.jsx(at,{children:e&&k.jsxs(k.Fragment,{children:[k.jsx(Ee.div,{className:"fixed inset-0 bg-black/50 z-40",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:t}),k.jsxs(Ee.div,{className:"fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 rounded-t-2xl shadow-xl max-h-[85vh] flex flex-col",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:300},drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.5},onDragEnd:(u,l)=>{(l.offset.y>100||l.velocity.y>500)&&t()},role:"dialog","aria-modal":"true","aria-label":o,children:[k.jsx("div",{className:"flex justify-center pt-3 pb-1 shrink-0",children:k.jsx("div",{className:"w-10 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700"})}),k.jsx("div",{className:"px-5 pb-3 shrink-0",children:k.jsx("h2",{className:"text-lg font-semibold",children:o})}),k.jsx("div",{className:"px-5 pb-6 overflow-y-auto",children:a})]})]})})]})}const bR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),kR=["Profile","Settings","Billing","Sign out"],SR={hidden:{opacity:0,scale:.95,y:-8},visible:{opacity:1,scale:1,y:0,transition:{duration:.15,staggerChildren:.05,delayChildren:.05}},exit:{opacity:0,scale:.95,y:-8,transition:{duration:.1}}},TR={hidden:{opacity:0,x:-8},visible:{opacity:1,x:0}};function CR(){const[e,n]=P.useState(!1);return k.jsxs("div",{className:"relative inline-block",children:[k.jsx("button",{onClick:()=>n(t=>!t),className:"rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black",children:"Options"}),k.jsx(at,{children:e&&k.jsxs(k.Fragment,{children:[k.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>n(!1)}),k.jsx(Ee.ul,{variants:SR,initial:"hidden",animate:"visible",exit:"exit",className:"absolute left-0 top-full z-20 mt-2 w-44 rounded-lg bg-neutral-100 p-1 shadow-xl dark:bg-neutral-800",children:kR.map(t=>k.jsx(Ee.li,{variants:TR,children:k.jsx("button",{onClick:()=>n(!1),className:"w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700",children:t})},t))})]})})]})}const ER=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),PR=["Write daily component","Review pull requests","Ship the release","Reply to feedback"];function av({autoPlay:e=!1}){const[n,t]=P.useState(PR);return P.useEffect(()=>{if(!e)return;const o=setTimeout(()=>{t(a=>{const u=[...a],l=u[0];return u[0]=u[2],u[2]=l,u})},300);return()=>clearTimeout(o)},[e]),k.jsx(VP,{axis:"y",values:n,onReorder:t,className:"flex w-72 flex-col gap-2",children:n.map(o=>k.jsx(HP,{value:o,whileDrag:{scale:1.03,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},className:"cursor-grab rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-700 active:cursor-grabbing dark:bg-neutral-800 dark:text-neutral-200",children:o},o))})}const RR=Object.freeze(Object.defineProperty({__proto__:null,default:av},Symbol.toStringTag,{value:"Module"})),mc=[{id:"1",url:"https://picsum.photos/seed/one/400/300"},{id:"2",url:"https://picsum.photos/seed/two/400/300"},{id:"3",url:"https://picsum.photos/seed/three/400/300"},{id:"4",url:"https://picsum.photos/seed/four/400/300"}];function AR({autoPlay:e=!1}){const[n,t]=P.useState(null),o=mc.find(a=>a.id===n);return P.useEffect(()=>{if(!e)return;const a=setTimeout(()=>t(mc[0].id),300);return()=>clearTimeout(a)},[e]),k.jsxs("div",{className:"w-80",children:[k.jsx("div",{className:"grid grid-cols-2 gap-2",children:mc.map(a=>k.jsx(Ee.img,{layoutId:a.id,src:a.url,onClick:()=>t(a.id),className:"h-24 w-full cursor-pointer rounded-lg object-cover"},a.id))}),k.jsx(at,{children:o&&k.jsx(Ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-40 flex items-center justify-center bg-black/70",onClick:()=>t(null),children:k.jsx(Ee.img,{layoutId:o.id,src:o.url,className:"max-h-[80vh] max-w-[80vw] rounded-xl object-cover"})})})]})}const jR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),So=["Account","Profile","Payment","Confirm"];function sv({autoPlay:e=!1}){const[n,t]=P.useState(0);return P.useEffect(()=>{if(!e)return;const o=setInterval(()=>{t(a=>a>=So.length-1?(clearInterval(o),a):a+1)},700);return()=>clearInterval(o)},[e]),k.jsxs("div",{className:"w-96",children:[k.jsx("div",{className:"flex items-center",children:So.map((o,a)=>k.jsxs("div",{className:"flex flex-1 items-center last:flex-none",children:[k.jsxs("div",{className:"flex flex-col items-center gap-2",children:[k.jsx("div",{className:`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 ${a<=n?"bg-neutral-900 text-white dark:bg-white dark:text-neutral-900":"bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500"}`,children:a<n?"✓":a+1}),k.jsx("span",{className:"text-xs text-neutral-600 dark:text-neutral-400",children:o})]}),a<So.length-1&&k.jsx("div",{className:"relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-200 dark:bg-neutral-800",children:k.jsx(Ee.div,{animate:{width:a<n?"100%":"0%"},transition:{duration:.3},className:"absolute inset-y-0 left-0 bg-neutral-900 dark:bg-white"})})]},o))}),k.jsxs("div",{className:"mt-8 flex justify-center gap-3",children:[k.jsx("button",{onClick:()=>t(o=>Math.max(0,o-1)),disabled:n===0,className:"rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-700 disabled:opacity-40 dark:bg-neutral-800 dark:text-neutral-200",children:"Back"}),k.jsx("button",{onClick:()=>t(o=>Math.min(So.length-1,o+1)),disabled:n===So.length-1,className:"rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-black",children:"Next"})]})]})}const IR=Object.freeze(Object.defineProperty({__proto__:null,default:sv},Symbol.toStringTag,{value:"Module"}));function lv({options:e,value:n,onChange:t,layoutId:o}){const a=P.useId(),u=o??a;return k.jsx("div",{className:"inline-flex gap-0.5 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800",children:e.map(l=>{const c=typeof l=="string"?l:l.value,f=typeof l=="string"?l:l.label,h=n===c;return k.jsxs("button",{onClick:()=>t(c),className:"relative rounded-full px-4 py-1.5 text-sm font-medium",children:[h&&k.jsx(Ee.div,{layoutId:`segmented-pill-${u}`,className:"absolute inset-0 rounded-full bg-neutral-900 dark:bg-white",transition:{type:"spring",stiffness:500,damping:35}}),k.jsx("span",{className:`relative z-10 ${h?"text-white dark:text-black":"text-neutral-600 dark:text-neutral-400"}`,children:f})]},c)})})}const Bg=["Day","Week","Month","Year"];function _R(){const[e,n]=P.useState(Bg[0]);return k.jsx(lv,{options:Bg,value:e,onChange:n})}const NR=Object.freeze(Object.defineProperty({__proto__:null,Segmented:lv,default:_R},Symbol.toStringTag,{value:"Module"})),ar={id:"notes-card",title:"Weekly Notes",summary:"Ideas and reminders from this week.",detail:"Ship the progress stepper, fix the drawer's controlled-props issue, and start the drag-to-reorder list. Remember to update meta.js descriptions before Friday."};function MR({autoPlay:e=!1}){const[n,t]=P.useState(!1);return P.useEffect(()=>{if(!e)return;const o=setTimeout(()=>t(!0),300);return()=>clearTimeout(o)},[e]),k.jsxs("div",{className:"relative flex w-80 items-center justify-center",children:[!n&&k.jsxs(Ee.button,{layoutId:ar.id,onClick:()=>t(!0),className:"w-full rounded-xl bg-neutral-100 p-5 text-left dark:bg-neutral-800",children:[k.jsx(Ee.h3,{layoutId:`${ar.id}-title`,className:"text-sm font-medium text-neutral-900 dark:text-white",children:ar.title}),k.jsx("p",{className:"mt-1 text-sm text-neutral-600 dark:text-neutral-400",children:ar.summary})]}),k.jsx(at,{children:n&&k.jsxs(k.Fragment,{children:[k.jsx(Ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-40 bg-black/60",onClick:()=>t(!1)}),k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-6",children:k.jsxs(Ee.div,{layoutId:ar.id,className:"relative w-80 rounded-xl bg-yellow-400 p-6 text-left",children:[k.jsx("button",{onClick:()=>t(!1),"aria-label":"Close",className:"absolute right-4 top-4 rounded-full p-1 text-neutral-900/60 transition-colors hover:bg-black/10 hover:text-neutral-900",children:k.jsx(pR,{className:"h-4 w-4"})}),k.jsx(Ee.h3,{layoutId:`${ar.id}-title`,className:"text-base font-medium text-neutral-900",children:ar.title}),k.jsx(Ee.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.15},className:"mt-3 pr-6 text-sm leading-relaxed text-neutral-800",children:ar.detail})]})})]})})]})}const DR=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),Vg=[{id:1,title:"Mountain Hike",color:"bg-emerald-500"},{id:2,title:"Coffee Break",color:"bg-amber-500"},{id:3,title:"City Lights",color:"bg-indigo-500"},{id:4,title:"Ocean Breeze",color:"bg-sky-500"}];function LR(){const[e,n]=P.useState(Vg),[t,o]=P.useState({});function a(l,c){(Math.abs(c.offset.x)>100||Math.abs(c.velocity.x)>500)&&(o(h=>({...h,[l]:c.offset.x>0?1:-1})),n(h=>h.filter(p=>p.id!==l)))}const u=e.slice(0,3);return k.jsx("div",{className:"relative h-72 w-64",children:k.jsx(at,{children:u.length===0?k.jsxs(Ee.div,{initial:{opacity:0},animate:{opacity:1},className:"flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400",children:[k.jsx("p",{children:"All caught up"}),k.jsx("button",{onClick:()=>n(Vg),className:"rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black",children:"Reset"})]},"empty"):u.slice().reverse().map((l,c)=>{const f=u.length-1-c,h=f===0,p=t[l.id]??1;return k.jsx(Ee.div,{className:`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg ${l.color}`,style:{zIndex:10-f},initial:!1,animate:{scale:1-f*.05,y:f*10},exit:{x:p*300,opacity:0,rotate:p*15},transition:{type:"spring",stiffness:300,damping:25},drag:h?"x":!1,dragConstraints:{left:0,right:0},dragElastic:.9,whileDrag:{rotate:8,cursor:"grabbing"},onDragEnd:(m,x)=>a(l.id,x),children:k.jsx("h3",{className:"text-lg font-semibold",children:l.title})},l.id)})})})}const OR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),FR=["New message from Sam","Your order has shipped","3 people liked your post","Weekly summary is ready"],gc=70;function zR(){const[e,n]=P.useState(0),[t,o]=P.useState(!1);function a(l,c){n(Math.min(Math.max(c.offset.y,0)/gc,1))}function u(l,c){c.offset.y>gc?(o(!0),n(1),setTimeout(()=>{o(!1),n(0)},1200)):n(0)}return k.jsxs("div",{className:"relative h-80 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900",children:[k.jsx("div",{className:"pointer-events-none absolute inset-x-0 top-0 flex h-14 items-center justify-center",style:{opacity:e},children:k.jsx(Ee.div,{animate:t?{rotate:360}:{rotate:e*360},transition:t?{duration:.7,repeat:1/0,ease:"linear"}:{duration:0},children:k.jsx(fR,{className:"h-5 w-5 text-neutral-500 dark:text-neutral-400"})})}),k.jsx(Ee.div,{drag:t?!1:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.6},onDrag:a,onDragEnd:u,animate:{y:t?gc:0},transition:{type:"spring",stiffness:400,damping:30},className:"flex flex-col gap-2 p-4",children:FR.map(l=>k.jsx("div",{className:"rounded-lg bg-neutral-100 px-3 py-2.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200",children:l},l))})]})}const BR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),To={open:0,half:170,closed:310},Wg=["open","half","closed"];function VR(){const[e,n]=P.useState("half");function t(o,a){const u=To[e]+a.offset.y+a.velocity.y*.15;let l=Wg[0],c=1/0;for(const f of Wg){const h=Math.abs(To[f]-u);h<c&&(c=h,l=f)}n(l)}return k.jsxs("div",{className:"relative h-96 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950",children:[k.jsx("p",{className:"absolute inset-x-0 top-4 text-center text-xs text-neutral-400 dark:text-neutral-600",children:"underlying content"}),k.jsxs(Ee.div,{drag:"y",dragConstraints:{top:To.open,bottom:To.closed},dragElastic:.05,animate:{y:To[e]},transition:{type:"spring",stiffness:300,damping:32},onDragEnd:t,className:"absolute inset-x-0 top-0 h-full rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900",children:[k.jsx("div",{className:"flex justify-center pb-2 pt-3",children:k.jsx("div",{className:"h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700"})}),k.jsxs("div",{className:"px-5 pb-5",children:[k.jsx("h3",{className:"text-sm font-semibold text-neutral-900 dark:text-white",children:"Sheet content"}),k.jsx("p",{className:"mt-1 text-sm text-neutral-500 dark:text-neutral-400",children:"Drag the handle up or down — it snaps to open, half, or closed."})]})]})]})}const WR=Object.freeze(Object.defineProperty({__proto__:null,default:VR},Symbol.toStringTag,{value:"Module"})),yc=[{test:e=>e.length>=8,label:"At least 8 characters"},{test:e=>/[A-Z]/.test(e),label:"An uppercase letter"},{test:e=>/[0-9]/.test(e),label:"A number"},{test:e=>/[^A-Za-z0-9]/.test(e),label:"A special character"}],UR=[{label:"Very weak",color:"bg-red-500"},{label:"Weak",color:"bg-orange-500"},{label:"Fair",color:"bg-yellow-500"},{label:"Good",color:"bg-lime-500"},{label:"Strong",color:"bg-green-500"}];function $R(){const[e,n]=P.useState(""),t=P.useMemo(()=>yc.filter(a=>a.test(e)).length,[e]),o=e?UR[t]:null;return k.jsxs("div",{className:"w-72",children:[k.jsx("input",{type:"text",value:e,onChange:a=>n(a.target.value),placeholder:"Type a password...",className:"w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600"}),k.jsx("div",{className:"mt-3 flex gap-1",children:yc.map((a,u)=>k.jsx("div",{className:"h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",children:k.jsx(Ee.div,{className:`h-full ${o?o.color:""}`,initial:!1,animate:{width:t>u?"100%":"0%"},transition:{duration:.25,ease:"easeOut"}})},u))}),k.jsx("p",{className:"mt-2 text-xs text-neutral-500 dark:text-neutral-400",children:o?o.label:"Start typing to see strength"}),k.jsx("ul",{className:"mt-3 flex flex-col gap-1",children:yc.map(a=>{const u=a.test(e);return k.jsxs("li",{className:`flex items-center gap-1.5 text-xs transition-colors ${u?"text-green-600 dark:text-green-400":"text-neutral-400 dark:text-neutral-600"}`,children:[k.jsx(nf,{className:`h-3 w-3 ${u?"opacity-100":"opacity-0"}`}),a.label]},a.label)})})]})}const HR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),Ug="npm install component-lab";function qR(){const[e,n]=P.useState(!1);async function t(){try{await navigator.clipboard.writeText(Ug),n(!0),setTimeout(()=>n(!1),1500)}catch{}}return k.jsxs("div",{className:"flex w-80 items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/40",children:[k.jsx("code",{className:"truncate text-sm text-neutral-700 dark:text-neutral-300",children:Ug}),k.jsx("button",{onClick:t,"aria-label":"Copy to clipboard",className:"flex h-8 w-8 flex-none items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100",children:e?k.jsx(nf,{className:"h-4 w-4 text-green-500"}):k.jsx(Qx,{className:"h-4 w-4"})})]})}const GR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),$g=5;function KR(){const[e,n]=P.useState(0),[t,o]=P.useState(null),a=t??e;return k.jsxs("div",{className:"flex flex-col items-center gap-2",children:[k.jsx("div",{className:"flex gap-1",onMouseLeave:()=>o(null),children:Array.from({length:$g},(u,l)=>l+1).map(u=>{const l=u<=a;return k.jsx(Ee.button,{type:"button",onMouseEnter:()=>o(u),onClick:()=>n(u),whileTap:{scale:.85},animate:{scale:l?1.1:1},transition:{type:"spring",stiffness:500,damping:20},"aria-label":`Rate ${u} star${u===1?"":"s"}`,className:"p-0.5",children:k.jsx(tf,{className:l?"h-6 w-6 text-yellow-400":"h-6 w-6 text-neutral-300 dark:text-neutral-700",fill:l?"currentColor":"none"})},u)})}),k.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:e>0?`You rated this ${e} out of ${$g}`:"Hover to preview, click to rate"})]})}const YR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR=`import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch({ autoPlay = false }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsOn(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`flex w-16 h-9 p-1 rounded-full cursor-pointer \${
        isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      }\`}
    >
      <motion.div
        className="w-7 h-7 bg-white rounded-full shadow-md"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </div>
  );
}
`,XR=`import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Commit", "Analytics", "Upgrade"];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex gap-2 p-1 bg-neutral-200 dark:bg-neutral-800 rounded-full w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative px-4 py-2 text-sm font-medium rounded-full"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-neutral-900 dark:bg-white rounded-full"
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            />
          )}
          <span
            className={\`relative z-10 \${
              activeTab === tab ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-400"
            }\`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
`,QR=`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What is Framer Motion?", answer: "A React animation library for building smooth, physics-based UI motion." },
  { question: "What is GSAP?", answer: "A JavaScript animation library known for complex timelines and scroll-based effects." },
  { question: "What is Three.js?", answer: "A JavaScript library for building 3D graphics in the browser using WebGL." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-80 flex flex-col gap-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question} className="rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-neutral-900 dark:text-white text-left"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
`,ZR=`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CursorTooltip() {
  const [isHovering, setIsHovering] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      className="relative w-72 h-40 flex items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 text-sm cursor-none"
    >
      Hover over this box

      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{ left: coords.x, top: coords.y }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-2 py-1 text-xs font-medium text-black"
          >
            👀 Watching
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`,eA=`import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton({ autoPlay = false }) {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsLiked(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
      aria-label={isLiked ? "Unlike" : "Like"}
      className="flex h-10 w-10 items-center justify-center"
    >
      <motion.span
        key={isLiked}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 15 }}
      >
        <Heart
          className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
          fill={isLiked ? "currentColor" : "none"}
        />
      </motion.span>
    </button>
  );
}
`,nA=`import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-72 rounded-xl bg-neutral-100 dark:bg-neutral-800 p-4">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <div className="h-24 w-full animate-pulse rounded-lg bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <img
              src="https://picsum.photos/300/150"
              className="h-24 w-full rounded-lg object-cover"
            />
            <h3 className="text-sm font-medium text-neutral-900 dark:text-white">Loaded Content Title</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              This content appeared after the simulated network delay finished.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`,tA=`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  function addToast() {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message: "Changes saved successfully" }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={addToast}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Trigger Toast
      </button>

      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-900 shadow-lg dark:bg-neutral-800 dark:text-white"
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
`,rA=`
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DrawerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const title = "Drawer";
  const children = (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      This is the drawer content. Drag the handle down, click the backdrop, or press Escape to close it.
    </p>
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Open Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 rounded-t-2xl shadow-xl max-h-[85vh] flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 100 || info.velocity.y > 500) {
                  onClose();
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label={title ?? "Drawer"}
            >
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>

              {title && (
                <div className="px-5 pb-3 shrink-0">
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
              )}

              <div className="px-5 pb-6 overflow-y-auto">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
`,iA=`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = ["Profile", "Settings", "Billing", "Sign out"];

const menuVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: { duration: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-black"
      >
        Options
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg bg-neutral-100 p-1 shadow-xl dark:bg-neutral-800"
            >
              {items.map((item) => (
                <motion.li key={item} variants={itemVariants}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-200 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
`,oA=`import { useEffect, useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = ["Write daily component", "Review pull requests", "Ship the release", "Reply to feedback"];

export default function DragReorderList({ autoPlay = false }) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next[0];
        next[0] = next[2];
        next[2] = first;
        return next;
      });
    }, 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="flex w-72 flex-col gap-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
          className="cursor-grab rounded-lg bg-neutral-100 px-4 py-3 text-sm text-neutral-700 active:cursor-grabbing dark:bg-neutral-800 dark:text-neutral-200"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
`,aA=`import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: "1", url: "https://picsum.photos/seed/one/400/300" },
  { id: "2", url: "https://picsum.photos/seed/two/400/300" },
  { id: "3", url: "https://picsum.photos/seed/three/400/300" },
  { id: "4", url: "https://picsum.photos/seed/four/400/300" },
];

export default function ImageGalleryLayout({ autoPlay = false }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = images.find((img) => img.id === selectedId);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setSelectedId(images[0].id), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <div className="w-80">
      <div className="grid grid-cols-2 gap-2">
        {images.map((img) => (
          <motion.img
            key={img.id}
            layoutId={img.id}
            src={img.url}
            onClick={() => setSelectedId(img.id)}
            className="h-24 w-full cursor-pointer rounded-lg object-cover"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedId(null)}
          >
            <motion.img
              layoutId={selected.id}
              src={selected.url}
              className="max-h-[80vh] max-w-[80vw] rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`,sA=`import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = ["Account", "Profile", "Payment", "Confirm"];

export default function ProgressStepper({ autoPlay = false }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((c) => {
        if (c >= steps.length - 1) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="w-96">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={\`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors duration-300 \${
                  index <= current
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                    : "bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500"
                }\`}
              >
                {index < current ? "✓" : index + 1}
              </div>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">{step}</span>
            </div>

            {index < steps.length - 1 && (
              <div className="relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-200 dark:bg-neutral-800">
                <motion.div
                  animate={{ width: index < current ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-neutral-900 dark:bg-white"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() => setCurrent((c) => Math.max(0, c - 1))}
          disabled={current === 0}
          className="rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-700 disabled:opacity-40 dark:bg-neutral-800 dark:text-neutral-200"
        >
          Back
        </button>
        <button
          onClick={() => setCurrent((c) => Math.min(steps.length - 1, c + 1))}
          disabled={current === steps.length - 1}
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40 dark:bg-white dark:text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
}
`,lA=`import { useId, useState } from "react";
import { motion } from "framer-motion";

export function Segmented({ options, value, onChange, layoutId }) {
  const autoId = useId();
  const pillId = layoutId ?? autoId;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-200 p-1 dark:bg-neutral-800">
      {options.map((option) => {
        const optValue = typeof option === "string" ? option : option.value;
        const optLabel = typeof option === "string" ? option : option.label;
        const isActive = value === optValue;

        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium"
          >
            {isActive && (
              <motion.div
                layoutId={\`segmented-pill-\${pillId}\`}
                className="absolute inset-0 rounded-full bg-neutral-900 dark:bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className={\`relative z-10 \${isActive ? "text-white dark:text-black" : "text-neutral-600 dark:text-neutral-400"}\`}>
              {optLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const demoOptions = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(demoOptions[0]);

  return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
}
`,uA=`import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const card = {
  id: "notes-card",
  title: "Weekly Notes",
  summary: "Ideas and reminders from this week.",
  detail:
    "Ship the progress stepper, fix the drawer's controlled-props issue, and start the drag-to-reorder list. Remember to update meta.js descriptions before Friday.",
};

export default function CardExpandDetail({ autoPlay = false }) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setTimeout(() => setIsExpanded(true), 300);
    return () => clearTimeout(timer);
  }, [autoPlay]);

  return (
    <div className="relative flex w-80 items-center justify-center">
      {!isExpanded && (
        <motion.button
          layoutId={card.id}
          onClick={() => setIsExpanded(true)}
          className="w-full rounded-xl bg-neutral-100 p-5 text-left dark:bg-neutral-800"
        >
          <motion.h3 layoutId={\`\${card.id}-title\`} className="text-sm font-medium text-neutral-900 dark:text-white">
            {card.title}
          </motion.h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{card.summary}</p>
        </motion.button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setIsExpanded(false)}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div layoutId={card.id} className="relative w-80 rounded-xl bg-yellow-400 p-6 text-left">
                <button
                  onClick={() => setIsExpanded(false)}
                  aria-label="Close"
                  className="absolute right-4 top-4 rounded-full p-1 text-neutral-900/60 transition-colors hover:bg-black/10 hover:text-neutral-900"
                >
                  <X className="h-4 w-4" />
                </button>
                <motion.h3 layoutId={\`\${card.id}-title\`} className="text-base font-medium text-neutral-900">
                  {card.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 pr-6 text-sm leading-relaxed text-neutral-800"
                >
                  {card.detail}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
`,cA=`import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Mountain Hike", color: "bg-emerald-500" },
  { id: 2, title: "Coffee Break", color: "bg-amber-500" },
  { id: 3, title: "City Lights", color: "bg-indigo-500" },
  { id: 4, title: "Ocean Breeze", color: "bg-sky-500" },
];

export default function SwipeableCardStack() {
  const [stack, setStack] = useState(cards);
  const [exitDirections, setExitDirections] = useState({});

  function handleDragEnd(id, info) {
    const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
    if (!passedThreshold) return;

    setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
    setStack((prev) => prev.filter((card) => card.id !== id));
  }

  const visible = stack.slice(0, 3);

  return (
    <div className="relative h-72 w-64">
      <AnimatePresence>
        {visible.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
          >
            <p>All caught up</p>
            <button
              onClick={() => setStack(cards)}
              className="rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black"
            >
              Reset
            </button>
          </motion.div>
        ) : (
          visible
            .slice()
            .reverse()
            .map((card, i) => {
              const position = visible.length - 1 - i;
              const isTop = position === 0
              const direction = exitDirections[card.id] ?? 1

              return (
                <motion.div
                  key={card.id}
                  className={\`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg \${card.color}\`}
                  style={{ zIndex: 10 - position }}
                  initial={false}
                  animate={{ scale: 1 - position * 0.05, y: position * 10 }}
                  exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  whileDrag={{ rotate: 8, cursor: "grabbing" }}
                  onDragEnd={(_, info) => handleDragEnd(card.id, info)}
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </motion.div>
              )
            })
        )}
      </AnimatePresence>
    </div>
  );
}
`,dA=`import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const items = [
  "New message from Sam",
  "Your order has shipped",
  "3 people liked your post",
  "Weekly summary is ready",
];

const THRESHOLD = 70;

export default function PullToRefresh() {
  const [pullProgress, setPullProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleDrag(_, info) {
    setPullProgress(Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1));
  }

  function handleDragEnd(_, info) {
    if (info.offset.y > THRESHOLD) {
      setIsRefreshing(true);
      setPullProgress(1);
      setTimeout(() => {
        setIsRefreshing(false);
        setPullProgress(0);
      }, 1200);
    } else {
      setPullProgress(0);
    }
  }

  return (
    <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex h-14 items-center justify-center"
        style={{ opacity: pullProgress }}
      >
        <motion.div
          animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
          transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          <RefreshCw className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </motion.div>
      </div>

      <motion.div
        drag={isRefreshing ? false : "y"}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ y: isRefreshing ? THRESHOLD : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col gap-2 p-4"
      >
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg bg-neutral-100 px-3 py-2.5 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
`,fA=`import { useState } from "react";
import { motion } from "framer-motion";

const SNAPS = { open: 0, half: 170, closed: 310 };
const ORDER = ["open", "half", "closed"];

export default function DraggableBottomSheet() {
  const [snap, setSnap] = useState("half");

  function handleDragEnd(_, info) {
    const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;

    let closest = ORDER[0];
    let closestDistance = Infinity;
    for (const key of ORDER) {
      const distance = Math.abs(SNAPS[key] - projected);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = key;
      }
    }
    setSnap(closest);
  }

  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="absolute inset-x-0 top-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
        underlying content
      </p>

      <motion.div
        drag="y"
        dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
        dragElastic={0.05}
        animate={{ y: SNAPS[snap] }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 top-0 h-full rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
      >
        <div className="flex justify-center pb-2 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Sheet content</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Drag the handle up or down — it snaps to open, half, or closed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
`,hA=`import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[A-Z]/.test(v), label: "An uppercase letter" },
  { test: (v) => /[0-9]/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A special character" },
];

const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-orange-500" },
  { label: "Fair", color: "bg-yellow-500" },
  { label: "Good", color: "bg-lime-500" },
  { label: "Strong", color: "bg-green-500" },
];

export default function PasswordStrengthMeter() {
  const [value, setValue] = useState("");

  const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
  const level = value ? LEVELS[score] : null;

  return (
    <div className="w-72">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type a password..."
        className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600"
      />

      <div className="mt-3 flex gap-1">
        {RULES.map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className={\`h-full \${level ? level.color : ""}\`}
              initial={false}
              animate={{ width: score > i ? "100%" : "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {level ? level.label : "Start typing to see strength"}
      </p>

      <ul className="mt-3 flex flex-col gap-1">
        {RULES.map((rule) => {
          const passed = rule.test(value);
          return (
            <li
              key={rule.label}
              className={\`flex items-center gap-1.5 text-xs transition-colors \${
                passed ? "text-green-600 dark:text-green-400" : "text-neutral-400 dark:text-neutral-600"
              }\`}
            >
              <Check className={\`h-3 w-3 \${passed ? "opacity-100" : "opacity-0"}\`} />
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
`,pA=`import { useState } from "react";
import { Copy, Check } from "lucide-react";

const SNIPPET = "npm install component-lab";

export default function CopyToClipboard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  }

  return (
    <div className="flex w-80 items-center justify-between gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900/40">
      <code className="truncate text-sm text-neutral-700 dark:text-neutral-300">{SNIPPET}</code>
      <button
        onClick={handleCopy}
        aria-label="Copy to clipboard"
        className="flex h-8 w-8 flex-none items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
`,mA=`import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MAX = 5;

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const display = hovered ?? rating;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
        {Array.from({ length: MAX }, (_, i) => i + 1).map((value) => {
          const filled = value <= display;
          return (
            <motion.button
              key={value}
              type="button"
              onMouseEnter={() => setHovered(value)}
              onClick={() => setRating(value)}
              whileTap={{ scale: 0.85 }}
              animate={{ scale: filled ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              aria-label={\`Rate \${value} star\${value === 1 ? "" : "s"}\`}
              className="p-0.5"
            >
              <Star
                className={filled ? "h-6 w-6 text-yellow-400" : "h-6 w-6 text-neutral-300 dark:text-neutral-700"}
                fill={filled ? "currentColor" : "none"}
              />
            </motion.button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {rating > 0 ? \`You rated this \${rating} out of \${MAX}\` : "Hover to preview, click to rate"}
      </p>
    </div>
  );
}
`,gA={day:"001",name:"Toggle Switch",description:"A toggle switch that animates between on and off states using spring physics.",tags:["react","tailwindcss","framer motion"],prerequisites:[]},yA=Object.freeze(Object.defineProperty({__proto__:null,meta:gA},Symbol.toStringTag,{value:"Module"})),xA={day:"002",name:"Tab Switcher",description:"A tab switcher with a pill background that slides between tabs using Framer Motion's shared layout animation.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion layoutId"]},vA=Object.freeze(Object.defineProperty({__proto__:null,meta:xA},Symbol.toStringTag,{value:"Module"})),wA={day:"003",name:"Accordion FAQ",description:"An FAQ accordion where each answer expands and collapses with an animated height transition.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion AnimatePresence"]},bA=Object.freeze(Object.defineProperty({__proto__:null,meta:wA},Symbol.toStringTag,{value:"Module"})),kA={day:"004",name:"Tooltip Follow Cursor",description:"A tooltip that appears and tracks the cursor's position as it moves within a hover area.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","mouse events"]},SA=Object.freeze(Object.defineProperty({__proto__:null,meta:kA},Symbol.toStringTag,{value:"Module"})),TA={day:"005",name:"Like Heart Button",description:"A heart button that toggles filled and outline states with a springy scale animation on each click.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion transitions"]},CA=Object.freeze(Object.defineProperty({__proto__:null,meta:TA},Symbol.toStringTag,{value:"Module"})),EA={day:"006",name:"Skeleton Loader",description:"A skeleton loader that fades into the real content after a simulated network delay.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","useEffect","setTimeout"]},PA=Object.freeze(Object.defineProperty({__proto__:null,meta:EA},Symbol.toStringTag,{value:"Module"})),RA={day:"007",name:"Toast Notification",description:"A toast system where clicking a button queues a message that animates in, then slides out after a few seconds.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","arrays as state","setTimeout"]},AA=Object.freeze(Object.defineProperty({__proto__:null,meta:RA},Symbol.toStringTag,{value:"Module"})),jA={day:"008",name:"Drawer Modal",description:"A bottom drawer that slides up from the edge of the screen and closes on backdrop click, Escape, or a downward drag past a threshold.",tags:["react","tailwindcss","framer motion"],prerequisites:["useEffect","Framer Motion AnimatePresence","Framer Motion drag"]},IA=Object.freeze(Object.defineProperty({__proto__:null,meta:jA},Symbol.toStringTag,{value:"Module"})),_A={day:"009",name:"Dropdown Menu",description:"A dropdown menu whose items animate in with a staggered entrance and close on selection or an outside click.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion stagger"]},NA=Object.freeze(Object.defineProperty({__proto__:null,meta:_A},Symbol.toStringTag,{value:"Module"})),MA={day:"010",name:"Drag Reorder List",description:"A list whose items can be dragged and dropped to reorder them, using Framer Motion's Reorder component.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion Reorder"]},DA=Object.freeze(Object.defineProperty({__proto__:null,meta:MA},Symbol.toStringTag,{value:"Module"})),LA={day:"011",name:"Image Gallery Layout",description:"An image grid where clicking a thumbnail morphs it into a full-screen lightbox using a shared layout animation.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion layoutId"]},OA=Object.freeze(Object.defineProperty({__proto__:null,meta:LA},Symbol.toStringTag,{value:"Module"})),FA={day:"012",name:"Progress Stepper",description:"A multi-step progress indicator where the connecting line and step circles animate as you move forward or back.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState"]},zA=Object.freeze(Object.defineProperty({__proto__:null,meta:FA},Symbol.toStringTag,{value:"Module"})),BA={day:"013",name:"Segmented Control",description:"A pill-style segmented control where the active-selection background slides between options, built as a reusable primitive.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion layoutId","useId"]},VA=Object.freeze(Object.defineProperty({__proto__:null,meta:BA},Symbol.toStringTag,{value:"Module"})),WA={day:"014",name:"Card Expand Detail",description:"A card that morphs into a full-screen detail view on click, using a shared layout animation between the two layouts.",tags:["react","tailwindcss","framer motion"],prerequisites:["Framer Motion layoutId","Framer Motion AnimatePresence"]},UA=Object.freeze(Object.defineProperty({__proto__:null,meta:WA},Symbol.toStringTag,{value:"Module"})),$A={day:"015",name:"Swipeable Card Stack",description:"A stack of cards that can be swiped left or right to dismiss, revealing the next card underneath.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion drag","Framer Motion AnimatePresence"]},HA=Object.freeze(Object.defineProperty({__proto__:null,meta:$A},Symbol.toStringTag,{value:"Module"})),qA={day:"016",name:"Pull To Refresh",description:"A pull-to-refresh list where dragging the content down past a threshold triggers a spinning refresh animation.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion drag"]},GA=Object.freeze(Object.defineProperty({__proto__:null,meta:qA},Symbol.toStringTag,{value:"Module"})),KA={day:"017",name:"Draggable Bottom Sheet",description:"A draggable bottom sheet that snaps to open, half, or closed positions based on drag distance and velocity.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion drag"]},YA=Object.freeze(Object.defineProperty({__proto__:null,meta:KA},Symbol.toStringTag,{value:"Module"})),JA={day:"018",name:"Password Strength Meter",description:"A password field with a live strength meter that fills and changes color as your input satisfies more of the listed rules.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","useMemo","regex"]},XA=Object.freeze(Object.defineProperty({__proto__:null,meta:JA},Symbol.toStringTag,{value:"Module"})),QA={day:"019",name:"Copy To Clipboard",description:"A copy-to-clipboard button whose icon morphs into a checkmark for a moment after copying, then reverts.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","async/await","try/catch"]},ZA=Object.freeze(Object.defineProperty({__proto__:null,meta:QA},Symbol.toStringTag,{value:"Module"})),ej={day:"020",name:"Rating Stars",description:"A five-star rating input where hovering previews a rating and clicking locks it in, with a springy pop on each filled star.",tags:["react","tailwindcss","framer motion"],prerequisites:["useState","Framer Motion animate"]},nj=Object.freeze(Object.defineProperty({__proto__:null,meta:ej},Symbol.toStringTag,{value:"Module"})),Hg=["preview","code"],tj=[{value:"preview",label:"Preview"},{value:"code",label:"Code"}],qg={enter:e=>({x:e>0?24:-24,opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?-24:24,opacity:0})};function uv({preview:e,code:n,language:t="jsx"}){const[o,a]=P.useState("preview"),[u,l]=P.useState(0),[c,f]=P.useState(!1);function h(m){const x=Hg.indexOf(m),v=Hg.indexOf(o);l(x>v?1:-1),a(m)}async function p(){try{await navigator.clipboard.writeText(n),f(!0),setTimeout(()=>f(!1),1500)}catch{}}return k.jsxs("div",{className:"w-full min-w-0",children:[k.jsx("div",{className:"flex",children:tj.map(m=>{const x=o===m.value;return k.jsx("button",{onClick:()=>h(m.value),className:`-mb-px rounded-t-lg border px-4 py-2 text-sm font-medium transition-colors ${x?"border-neutral-200 border-b-transparent bg-neutral-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-100":"border-transparent text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"}`,children:m.label},m.value)})}),k.jsx("div",{className:"relative overflow-hidden rounded-b-xl rounded-tr-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/30",children:k.jsx(at,{mode:"popLayout",initial:!1,custom:u,children:o==="preview"?k.jsx(Ee.div,{custom:u,variants:qg,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:"easeOut"},className:"flex min-h-[200px] items-center justify-center p-10",children:e},"preview"):k.jsxs(Ee.div,{custom:u,variants:qg,initial:"enter",animate:"center",exit:"exit",transition:{duration:.2,ease:"easeOut"},className:"relative min-h-[200px] overflow-auto p-4",children:[k.jsx("button",{onClick:p,"aria-label":"Copy code",className:"absolute right-3 top-3 rounded-md border border-neutral-200 bg-white p-1.5 text-neutral-500 transition-colors hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",children:c?k.jsx(nf,{className:"h-3.5 w-3.5"}):k.jsx(Qx,{className:"h-3.5 w-3.5"})}),k.jsx("pre",{className:"pr-8 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300",children:k.jsx("code",{"data-language":t,children:n})})]},"code")})})]})}function rj(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const ij=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,oj=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,aj={};function Gg(e,n){return(aj.jsx?oj:ij).test(e)}const sj=/[ \t\n\f\r]/g;function lj(e){return typeof e=="object"?e.type==="text"?Kg(e.value):!1:Kg(e)}function Kg(e){return e.replace(sj,"")===""}class ea{constructor(n,t,o){this.normal=t,this.property=n,o&&(this.space=o)}}ea.prototype.normal={};ea.prototype.property={};ea.prototype.space=void 0;function cv(e,n){const t={},o={};for(const a of e)Object.assign(t,a.property),Object.assign(o,a.normal);return new ea(t,o,n)}function td(e){return e.toLowerCase()}class An{constructor(n,t){this.attribute=t,this.property=n}}An.prototype.attribute="";An.prototype.booleanish=!1;An.prototype.boolean=!1;An.prototype.commaOrSpaceSeparated=!1;An.prototype.commaSeparated=!1;An.prototype.defined=!1;An.prototype.mustUseProperty=!1;An.prototype.number=!1;An.prototype.overloadedBoolean=!1;An.prototype.property="";An.prototype.spaceSeparated=!1;An.prototype.space=void 0;let uj=0;const we=zr(),Ze=zr(),rd=zr(),Y=zr(),De=zr(),Dr=zr(),Dn=zr();function zr(){return 2**++uj}const id=Object.freeze(Object.defineProperty({__proto__:null,boolean:we,booleanish:Ze,commaOrSpaceSeparated:Dn,commaSeparated:Dr,number:Y,overloadedBoolean:rd,spaceSeparated:De},Symbol.toStringTag,{value:"Module"})),xc=Object.keys(id);class rf extends An{constructor(n,t,o,a){let u=-1;if(super(n,t),Yg(this,"space",a),typeof o=="number")for(;++u<xc.length;){const l=xc[u];Yg(this,xc[u],(o&id[l])===id[l])}}}rf.prototype.defined=!0;function Yg(e,n,t){t&&(e[n]=t)}function Ii(e){const n={},t={};for(const[o,a]of Object.entries(e.properties)){const u=new rf(o,e.transform(e.attributes||{},o),a,e.space);e.mustUseProperty&&e.mustUseProperty.includes(o)&&(u.mustUseProperty=!0),n[o]=u,t[td(o)]=o,t[td(u.attribute)]=o}return new ea(n,t,e.space)}const dv=Ii({properties:{ariaActiveDescendant:null,ariaAtomic:Ze,ariaAutoComplete:null,ariaBusy:Ze,ariaChecked:Ze,ariaColCount:Y,ariaColIndex:Y,ariaColSpan:Y,ariaControls:De,ariaCurrent:null,ariaDescribedBy:De,ariaDetails:null,ariaDisabled:Ze,ariaDropEffect:De,ariaErrorMessage:null,ariaExpanded:Ze,ariaFlowTo:De,ariaGrabbed:Ze,ariaHasPopup:null,ariaHidden:Ze,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:De,ariaLevel:Y,ariaLive:null,ariaModal:Ze,ariaMultiLine:Ze,ariaMultiSelectable:Ze,ariaOrientation:null,ariaOwns:De,ariaPlaceholder:null,ariaPosInSet:Y,ariaPressed:Ze,ariaReadOnly:Ze,ariaRelevant:null,ariaRequired:Ze,ariaRoleDescription:De,ariaRowCount:Y,ariaRowIndex:Y,ariaRowSpan:Y,ariaSelected:Ze,ariaSetSize:Y,ariaSort:null,ariaValueMax:Y,ariaValueMin:Y,ariaValueNow:Y,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function fv(e,n){return n in e?e[n]:n}function hv(e,n){return fv(e,n.toLowerCase())}const cj=Ii({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Dr,acceptCharset:De,accessKey:De,action:null,allow:null,allowFullScreen:we,allowPaymentRequest:we,allowUserMedia:we,alpha:we,alt:null,as:null,async:we,autoCapitalize:null,autoComplete:De,autoFocus:we,autoPlay:we,blocking:De,capture:null,charSet:null,checked:we,cite:null,className:De,closedBy:null,colorSpace:null,cols:Y,colSpan:Y,command:null,commandFor:null,content:null,contentEditable:Ze,controls:we,controlsList:De,coords:Y|Dr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:we,defer:we,dir:null,dirName:null,disabled:we,download:rd,draggable:Ze,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:we,formTarget:null,headers:De,height:Y,hidden:rd,high:Y,href:null,hrefLang:null,htmlFor:De,httpEquiv:De,id:null,imageSizes:null,imageSrcSet:null,inert:we,inputMode:null,integrity:null,is:null,isMap:we,itemId:null,itemProp:De,itemRef:De,itemScope:we,itemType:De,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:we,low:Y,manifest:null,max:null,maxLength:Y,media:null,method:null,min:null,minLength:Y,multiple:we,muted:we,name:null,nonce:null,noModule:we,noValidate:we,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:we,optimum:Y,pattern:null,ping:De,placeholder:null,playsInline:we,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:we,referrerPolicy:null,rel:De,required:we,reversed:we,rows:Y,rowSpan:Y,sandbox:De,scope:null,scoped:we,seamless:we,selected:we,shadowRootClonable:we,shadowRootCustomElementRegistry:we,shadowRootDelegatesFocus:we,shadowRootMode:null,shadowRootSerializable:we,shape:null,size:Y,sizes:null,slot:null,span:Y,spellCheck:Ze,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Y,step:null,style:null,tabIndex:Y,target:null,title:null,translate:null,type:null,typeMustMatch:we,useMap:null,value:Ze,width:Y,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:De,axis:null,background:null,bgColor:null,border:Y,borderColor:null,bottomMargin:Y,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:we,declare:we,event:null,face:null,frame:null,frameBorder:null,hSpace:Y,leftMargin:Y,link:null,longDesc:null,lowSrc:null,marginHeight:Y,marginWidth:Y,noResize:we,noHref:we,noShade:we,noWrap:we,object:null,profile:null,prompt:null,rev:null,rightMargin:Y,rules:null,scheme:null,scrolling:Ze,standby:null,summary:null,text:null,topMargin:Y,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Y,allowTransparency:null,autoCorrect:null,autoSave:null,credentialless:we,disablePictureInPicture:we,disableRemotePlayback:we,exportParts:Dr,part:De,prefix:null,property:null,results:Y,security:null,unselectable:null},space:"html",transform:hv}),dj=Ii({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",maskType:"mask-type",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Dn,accentHeight:Y,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Y,amplitude:Y,arabicForm:null,ascent:Y,attributeName:null,attributeType:null,azimuth:Y,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Y,by:null,calcMode:null,capHeight:Y,className:De,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Y,diffuseConstant:Y,direction:null,display:null,dur:null,divisor:Y,dominantBaseline:null,download:we,dx:null,dy:null,edgeMode:null,editable:null,elevation:Y,enableBackground:null,end:null,event:null,exponent:Y,externalResourcesRequired:null,fill:null,fillOpacity:Y,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Dr,g2:Dr,glyphName:Dr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Y,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Y,horizOriginX:Y,horizOriginY:Y,id:null,ideographic:Y,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Y,k:Y,k1:Y,k2:Y,k3:Y,k4:Y,kernelMatrix:Dn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Y,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskType:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Y,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Y,overlineThickness:Y,paintOrder:null,panose1:null,path:null,pathLength:Y,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:De,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Y,pointsAtY:Y,pointsAtZ:Y,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Dn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Dn,rev:Dn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Dn,requiredFeatures:Dn,requiredFonts:Dn,requiredFormats:Dn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Y,specularExponent:Y,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Y,strikethroughThickness:Y,string:null,stroke:null,strokeDashArray:Dn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Y,strokeOpacity:Y,strokeWidth:null,style:null,surfaceScale:Y,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dn,tabIndex:Y,tableValues:null,target:null,targetX:Y,targetY:Y,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Dn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Y,underlineThickness:Y,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Y,values:null,vAlphabetic:Y,vMathematical:Y,vectorEffect:null,vHanging:Y,vIdeographic:Y,version:null,vertAdvY:Y,vertOriginX:Y,vertOriginY:Y,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Y,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fv}),pv=Ii({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),mv=Ii({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:hv}),gv=Ii({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),fj={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},hj=/[A-Z]/g,Jg=/-[a-z]/g,pj=/^data[-\w.:]+$/i;function mj(e,n){const t=td(n);let o=n,a=An;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&pj.test(n)){if(n.charAt(4)==="-"){const u=n.slice(5).replace(Jg,yj);o="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=n.slice(4);if(!Jg.test(u)){let l=u.replace(hj,gj);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}a=rf}return new a(o,n)}function gj(e){return"-"+e.toLowerCase()}function yj(e){return e.charAt(1).toUpperCase()}const xj=cv([dv,cj,pv,mv,gv],"html"),of=cv([dv,dj,pv,mv,gv],"svg");function vj(e){return e.join(" ").trim()}var hi={},vc,Xg;function wj(){if(Xg)return vc;Xg=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,c=/^\s+|\s+$/g,f=`
`,h="/",p="*",m="",x="comment",v="declaration";function b(E,S){if(typeof E!="string")throw new TypeError("First argument must be a string");if(!E)return[];S=S||{};var _=1,j=1;function V(ie){var J=ie.match(n);J&&(_+=J.length);var be=ie.lastIndexOf(f);j=~be?ie.length-be:j+ie.length}function B(){var ie={line:_,column:j};return function(J){return J.position=new M(ie),re(),J}}function M(ie){this.start=ie,this.end={line:_,column:j},this.source=S.source}M.prototype.content=E;function X(ie){var J=new Error(S.source+":"+_+":"+j+": "+ie);if(J.reason=ie,J.filename=S.source,J.line=_,J.column=j,J.source=E,!S.silent)throw J}function U(ie){var J=ie.exec(E);if(J){var be=J[0];return V(be),E=E.slice(be.length),J}}function re(){U(t)}function O(ie){var J;for(ie=ie||[];J=ee();)J!==!1&&ie.push(J);return ie}function ee(){var ie=B();if(!(h!=E.charAt(0)||p!=E.charAt(1))){for(var J=2;m!=E.charAt(J)&&(p!=E.charAt(J)||h!=E.charAt(J+1));)++J;if(J+=2,m===E.charAt(J-1))return X("End of comment missing");var be=E.slice(2,J-2);return j+=2,V(be),E=E.slice(J),j+=2,ie({type:x,comment:be})}}function ne(){var ie=B(),J=U(o);if(J){if(ee(),!U(a))return X("property missing ':'");var be=U(u),ce=ie({type:v,property:T(J[0].replace(e,m)),value:be?T(be[0].replace(e,m)):m});return U(l),ce}}function ye(){var ie=[];O(ie);for(var J;J=ne();)J!==!1&&(ie.push(J),O(ie));return ie}return re(),ye()}function T(E){return E?E.replace(c,m):m}return vc=b,vc}var Qg;function bj(){if(Qg)return hi;Qg=1;var e=hi&&hi.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(hi,"__esModule",{value:!0}),hi.default=t;const n=e(wj());function t(o,a){let u=null;if(!o||typeof o!="string")return u;const l=(0,n.default)(o),c=typeof a=="function";return l.forEach(f=>{if(f.type!=="declaration")return;const{property:h,value:p}=f;c?a(h,p,f):p&&(u=u||{},u[h]=p)}),u}return hi}var Co={},Zg;function kj(){if(Zg)return Co;Zg=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,u=function(h){return!h||t.test(h)||e.test(h)},l=function(h,p){return p.toUpperCase()},c=function(h,p){return"".concat(p,"-")},f=function(h,p){return p===void 0&&(p={}),u(h)?h:(h=h.toLowerCase(),p.reactCompat?h=h.replace(a,c):h=h.replace(o,c),h.replace(n,l))};return Co.camelCase=f,Co}var Eo,ey;function Sj(){if(ey)return Eo;ey=1;var e=Eo&&Eo.__importDefault||function(a){return a&&a.__esModule?a:{default:a}},n=e(bj()),t=kj();function o(a,u){var l={};return!a||typeof a!="string"||(0,n.default)(a,function(c,f){c&&f&&(l[(0,t.camelCase)(c,u)]=f)}),l}return o.default=o,Eo=o,Eo}var Tj=Sj();const Cj=Hs(Tj),yv=xv("end"),af=xv("start");function xv(e){return n;function n(t){const o=t&&t.position&&t.position[e]||{};if(typeof o.line=="number"&&o.line>0&&typeof o.column=="number"&&o.column>0)return{line:o.line,column:o.column,offset:typeof o.offset=="number"&&o.offset>-1?o.offset:void 0}}}function Ej(e){const n=af(e),t=yv(e);if(n&&t)return{start:n,end:t}}function Fo(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ny(e.position):"start"in e||"end"in e?ny(e):"line"in e||"column"in e?od(e):""}function od(e){return ty(e&&e.line)+":"+ty(e&&e.column)}function ny(e){return od(e&&e.start)+"-"+od(e&&e.end)}function ty(e){return e&&typeof e=="number"?e:1}class xn extends Error{constructor(n,t,o){super(),typeof t=="string"&&(o=t,t=void 0);let a="",u={},l=!1;if(t&&("line"in t&&"column"in t?u={place:t}:"start"in t&&"end"in t?u={place:t}:"type"in t?u={ancestors:[t],place:t.position}:u={...t}),typeof n=="string"?a=n:!u.cause&&n&&(l=!0,a=n.message,u.cause=n),!u.ruleId&&!u.source&&typeof o=="string"){const f=o.indexOf(":");f===-1?u.ruleId=o:(u.source=o.slice(0,f),u.ruleId=o.slice(f+1))}if(!u.place&&u.ancestors&&u.ancestors){const f=u.ancestors[u.ancestors.length-1];f&&(u.place=f.position)}const c=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file="",this.message=a,this.line=c?c.line:void 0,this.name=Fo(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=l&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}xn.prototype.file="";xn.prototype.name="";xn.prototype.reason="";xn.prototype.message="";xn.prototype.stack="";xn.prototype.column=void 0;xn.prototype.line=void 0;xn.prototype.ancestors=void 0;xn.prototype.cause=void 0;xn.prototype.fatal=void 0;xn.prototype.place=void 0;xn.prototype.ruleId=void 0;xn.prototype.source=void 0;const sf={}.hasOwnProperty,Pj=new Map,Rj=/[A-Z]/g,Aj=new Set(["table","tbody","thead","tfoot","tr"]),jj=new Set(["td","th"]),vv="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ij(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let o;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");o=zj(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");o=Fj(t,n.jsx,n.jsxs)}const a={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:o,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?of:xj,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},u=wv(a,e,void 0);return u&&typeof u!="string"?u:a.create(e,a.Fragment,{children:u||void 0},void 0)}function wv(e,n,t){if(n.type==="element")return _j(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return Nj(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return Dj(e,n,t);if(n.type==="mdxjsEsm")return Mj(e,n);if(n.type==="root")return Lj(e,n,t);if(n.type==="text")return Oj(e,n)}function _j(e,n,t){const o=e.schema;let a=o;n.tagName.toLowerCase()==="svg"&&o.space==="html"&&(a=of,e.schema=a),e.ancestors.push(n);const u=kv(e,n.tagName,!1),l=Bj(e,n);let c=uf(e,n);return Aj.has(n.tagName)&&(c=c.filter(function(f){return typeof f=="string"?!lj(f):!0})),bv(e,l,u,n),lf(l,c),e.ancestors.pop(),e.schema=o,e.create(n,u,l,t)}function Nj(e,n){if(n.data&&n.data.estree&&e.evaluater){const o=n.data.estree.body[0];return o.type,e.evaluater.evaluateExpression(o.expression)}Ho(e,n.position)}function Mj(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);Ho(e,n.position)}function Dj(e,n,t){const o=e.schema;let a=o;n.name==="svg"&&o.space==="html"&&(a=of,e.schema=a),e.ancestors.push(n);const u=n.name===null?e.Fragment:kv(e,n.name,!0),l=Vj(e,n),c=uf(e,n);return bv(e,l,u,n),lf(l,c),e.ancestors.pop(),e.schema=o,e.create(n,u,l,t)}function Lj(e,n,t){const o={};return lf(o,uf(e,n)),e.create(n,e.Fragment,o,t)}function Oj(e,n){return n.value}function bv(e,n,t,o){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=o)}function lf(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function Fj(e,n,t){return o;function o(a,u,l,c){const h=Array.isArray(l.children)?t:n;return c?h(u,l,c):h(u,l)}}function zj(e,n){return t;function t(o,a,u,l){const c=Array.isArray(u.children),f=af(o);return n(a,u,l,c,{columnNumber:f?f.column-1:void 0,fileName:e,lineNumber:f?f.line:void 0},void 0)}}function Bj(e,n){const t={};let o,a;for(a in n.properties)if(a!=="children"&&sf.call(n.properties,a)){const u=Wj(e,a,n.properties[a]);if(u){const[l,c]=u;e.tableCellAlignToStyle&&l==="align"&&typeof c=="string"&&jj.has(n.tagName)?o=c:t[l]=c}}if(o){const u=t.style||(t.style={});u[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=o}return t}function Vj(e,n){const t={};for(const o of n.attributes)if(o.type==="mdxJsxExpressionAttribute")if(o.data&&o.data.estree&&e.evaluater){const u=o.data.estree.body[0];u.type;const l=u.expression;l.type;const c=l.properties[0];c.type,Object.assign(t,e.evaluater.evaluateExpression(c.argument))}else Ho(e,n.position);else{const a=o.name;let u;if(o.value&&typeof o.value=="object")if(o.value.data&&o.value.data.estree&&e.evaluater){const c=o.value.data.estree.body[0];c.type,u=e.evaluater.evaluateExpression(c.expression)}else Ho(e,n.position);else u=o.value===null?!0:o.value;t[a]=u}return t}function uf(e,n){const t=[];let o=-1;const a=e.passKeys?new Map:Pj;for(;++o<n.children.length;){const u=n.children[o];let l;if(e.passKeys){const f=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(f){const h=a.get(f)||0;l=f+"-"+h,a.set(f,h+1)}}const c=wv(e,u,l);c!==void 0&&t.push(c)}return t}function Wj(e,n,t){const o=mj(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=o.commaSeparated?rj(t):vj(t)),o.property==="style"){let a=typeof t=="object"?t:Uj(e,String(t));return e.stylePropertyNameCase==="css"&&(a=$j(a)),["style",a]}return[e.elementAttributeNameCase==="react"&&o.space?fj[o.property]||o.property:o.attribute,t]}}function Uj(e,n){try{return Cj(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const o=t,a=new xn("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw a.file=e.filePath||void 0,a.url=vv+"#cannot-parse-style-attribute",a}}function kv(e,n,t){let o;if(!t)o={type:"Literal",value:n};else if(n.includes(".")){const a=n.split(".");let u=-1,l;for(;++u<a.length;){const c=Gg(a[u])?{type:"Identifier",name:a[u]}:{type:"Literal",value:a[u]};l=l?{type:"MemberExpression",object:l,property:c,computed:!!(u&&c.type==="Literal"),optional:!1}:c}o=l}else o=Gg(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(o.type==="Literal"){const a=o.value;return sf.call(e.components,a)?e.components[a]:a}if(e.evaluater)return e.evaluater.evaluateExpression(o);Ho(e)}function Ho(e,n){const t=new xn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=vv+"#cannot-handle-mdx-estrees-without-createevaluater",t}function $j(e){const n={};let t;for(t in e)sf.call(e,t)&&(n[Hj(t)]=e[t]);return n}function Hj(e){let n=e.replace(Rj,qj);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function qj(e){return"-"+e.toLowerCase()}const wc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Gj={};function cf(e,n){const t=Gj,o=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,a=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Sv(e,o,a)}function Sv(e,n,t){if(Kj(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ry(e.children,n,t)}return Array.isArray(e)?ry(e,n,t):""}function ry(e,n,t){const o=[];let a=-1;for(;++a<e.length;)o[a]=Sv(e[a],n,t);return o.join("")}function Kj(e){return!!(e&&typeof e=="object")}const iy=document.createElement("i");function df(e){const n="&"+e+";";iy.innerHTML=n;const t=iy.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function On(e,n,t,o){const a=e.length;let u=0,l;if(n<0?n=-n>a?0:a+n:n=n>a?a:n,t=t>0?t:0,o.length<1e4)l=Array.from(o),l.unshift(n,t),e.splice(...l);else for(t&&e.splice(n,t);u<o.length;)l=o.slice(u,u+1e4),l.unshift(n,0),e.splice(...l),u+=1e4,n+=1e4}function Kn(e,n){return e.length>0?(On(e,e.length,0,n),e):n}const oy={}.hasOwnProperty;function Tv(e){const n={};let t=-1;for(;++t<e.length;)Yj(n,e[t]);return n}function Yj(e,n){let t;for(t in n){const a=(oy.call(e,t)?e[t]:void 0)||(e[t]={}),u=n[t];let l;if(u)for(l in u){oy.call(a,l)||(a[l]=[]);const c=u[l];Jj(a[l],Array.isArray(c)?c:c?[c]:[])}}}function Jj(e,n){let t=-1;const o=[];for(;++t<n.length;)(n[t].add==="after"?e:o).push(n[t]);On(e,0,0,o)}function Cv(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function ot(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const bn=fr(/[A-Za-z]/),yn=fr(/[\dA-Za-z]/),Xj=fr(/[#-'*+\--9=?A-Z^-~]/);function Vs(e){return e!==null&&(e<32||e===127)}const ad=fr(/\d/),Qj=fr(/[\dA-Fa-f]/),Zj=fr(/[!-/:-@[-`{-~]/);function he(e){return e!==null&&e<-2}function Le(e){return e!==null&&(e<0||e===32)}function Pe(e){return e===-2||e===-1||e===32}const tl=fr(new RegExp("\\p{P}|\\p{S}","u")),Lr=fr(/\s/);function fr(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function _i(e){const n=[];let t=-1,o=0,a=0;for(;++t<e.length;){const u=e.charCodeAt(t);let l="";if(u===37&&yn(e.charCodeAt(t+1))&&yn(e.charCodeAt(t+2)))a=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(l=String.fromCharCode(u));else if(u>55295&&u<57344){const c=e.charCodeAt(t+1);u<56320&&c>56319&&c<57344?(l=String.fromCharCode(u,c),a=1):l="�"}else l=String.fromCharCode(u);l&&(n.push(e.slice(o,t),encodeURIComponent(l)),o=t+a+1,l=""),a&&(t+=a,a=0)}return n.join("")+e.slice(o)}function Re(e,n,t,o){const a=o?o-1:Number.POSITIVE_INFINITY;let u=0;return l;function l(f){return Pe(f)?(e.enter(t),c(f)):n(f)}function c(f){return Pe(f)&&u++<a?(e.consume(f),c):(e.exit(t),n(f))}}const e2={tokenize:n2};function n2(e){const n=e.attempt(this.parser.constructs.contentInitial,o,a);let t;return n;function o(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),Re(e,n,"linePrefix")}function a(c){return e.enter("paragraph"),u(c)}function u(c){const f=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=f),t=f,l(c)}function l(c){if(c===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(c);return}return he(c)?(e.consume(c),e.exit("chunkText"),u):(e.consume(c),l)}}const t2={tokenize:r2},ay={tokenize:i2};function r2(e){const n=this,t=[];let o=0,a,u,l;return c;function c(j){if(o<t.length){const V=t[o];return n.containerState=V[1],e.attempt(V[0].continuation,f,h)(j)}return h(j)}function f(j){if(o++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,a&&_();const V=n.events.length;let B=V,M;for(;B--;)if(n.events[B][0]==="exit"&&n.events[B][1].type==="chunkFlow"){M=n.events[B][1].end;break}S(o);let X=V;for(;X<n.events.length;)n.events[X][1].end={...M},X++;return On(n.events,B+1,0,n.events.slice(V)),n.events.length=X,h(j)}return c(j)}function h(j){if(o===t.length){if(!a)return x(j);if(a.currentConstruct&&a.currentConstruct.concrete)return b(j);n.interrupt=!!(a.currentConstruct&&!a._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(ay,p,m)(j)}function p(j){return a&&_(),S(o),x(j)}function m(j){return n.parser.lazy[n.now().line]=o!==t.length,l=n.now().offset,b(j)}function x(j){return n.containerState={},e.attempt(ay,v,b)(j)}function v(j){return o++,t.push([n.currentConstruct,n.containerState]),x(j)}function b(j){if(j===null){a&&_(),S(0),e.consume(j);return}return a=a||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:a,contentType:"flow",previous:u}),T(j)}function T(j){if(j===null){E(e.exit("chunkFlow"),!0),S(0),e.consume(j);return}return he(j)?(e.consume(j),E(e.exit("chunkFlow")),o=0,n.interrupt=void 0,c):(e.consume(j),T)}function E(j,V){const B=n.sliceStream(j);if(V&&B.push(null),j.previous=u,u&&(u.next=j),u=j,a.defineSkip(j.start),a.write(B),n.parser.lazy[j.start.line]){let M=a.events.length;for(;M--;)if(a.events[M][1].start.offset<l&&(!a.events[M][1].end||a.events[M][1].end.offset>l))return;const X=n.events.length;let U=X,re,O;for(;U--;)if(n.events[U][0]==="exit"&&n.events[U][1].type==="chunkFlow"){if(re){O=n.events[U][1].end;break}re=!0}for(S(o),M=X;M<n.events.length;)n.events[M][1].end={...O},M++;On(n.events,U+1,0,n.events.slice(X)),n.events.length=M}}function S(j){let V=t.length;for(;V-- >j;){const B=t[V];n.containerState=B[1],B[0].exit.call(n,e)}t.length=j}function _(){a.write([null]),u=void 0,a=void 0,n.containerState._closeFlow=void 0}}function i2(e,n,t){return Re(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ei(e){if(e===null||Le(e)||Lr(e))return 1;if(tl(e))return 2}function rl(e,n,t){const o=[];let a=-1;for(;++a<e.length;){const u=e[a].resolveAll;u&&!o.includes(u)&&(n=u(n,t),o.push(u))}return n}const sd={name:"attention",resolveAll:o2,tokenize:a2};function o2(e,n){let t=-1,o,a,u,l,c,f,h,p;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(o=t;o--;)if(e[o][0]==="exit"&&e[o][1].type==="attentionSequence"&&e[o][1]._open&&n.sliceSerialize(e[o][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[o][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[o][1].end.offset-e[o][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;f=e[o][1].end.offset-e[o][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const m={...e[o][1].end},x={...e[t][1].start};sy(m,-f),sy(x,f),l={type:f>1?"strongSequence":"emphasisSequence",start:m,end:{...e[o][1].end}},c={type:f>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:x},u={type:f>1?"strongText":"emphasisText",start:{...e[o][1].end},end:{...e[t][1].start}},a={type:f>1?"strong":"emphasis",start:{...l.start},end:{...c.end}},e[o][1].end={...l.start},e[t][1].start={...c.end},h=[],e[o][1].end.offset-e[o][1].start.offset&&(h=Kn(h,[["enter",e[o][1],n],["exit",e[o][1],n]])),h=Kn(h,[["enter",a,n],["enter",l,n],["exit",l,n],["enter",u,n]]),h=Kn(h,rl(n.parser.constructs.insideSpan.null,e.slice(o+1,t),n)),h=Kn(h,[["exit",u,n],["enter",c,n],["exit",c,n],["exit",a,n]]),e[t][1].end.offset-e[t][1].start.offset?(p=2,h=Kn(h,[["enter",e[t][1],n],["exit",e[t][1],n]])):p=0,On(e,o-1,t-o+3,h),t=o+h.length-p-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function a2(e,n){const t=this.parser.constructs.attentionMarkers.null,o=this.previous,a=Ei(o);let u;return l;function l(f){return u=f,e.enter("attentionSequence"),c(f)}function c(f){if(f===u)return e.consume(f),c;const h=e.exit("attentionSequence"),p=Ei(f),m=!p||p===2&&a||t.includes(f),x=!a||a===2&&p||t.includes(o);return h._open=!!(u===42?m:m&&(a||!x)),h._close=!!(u===42?x:x&&(p||!m)),n(f)}}function sy(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const s2={name:"autolink",tokenize:l2};function l2(e,n,t){let o=0;return a;function a(v){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),u}function u(v){return bn(v)?(e.consume(v),l):v===64?t(v):h(v)}function l(v){return v===43||v===45||v===46||yn(v)?(o=1,c(v)):h(v)}function c(v){return v===58?(e.consume(v),o=0,f):(v===43||v===45||v===46||yn(v))&&o++<32?(e.consume(v),c):(o=0,h(v))}function f(v){return v===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):v===null||v===32||v===60||Vs(v)?t(v):(e.consume(v),f)}function h(v){return v===64?(e.consume(v),p):Xj(v)?(e.consume(v),h):t(v)}function p(v){return yn(v)?m(v):t(v)}function m(v){return v===46?(e.consume(v),o=0,p):v===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(v),e.exit("autolinkMarker"),e.exit("autolink"),n):x(v)}function x(v){if((v===45||yn(v))&&o++<63){const b=v===45?x:m;return e.consume(v),b}return t(v)}}const na={partial:!0,tokenize:u2};function u2(e,n,t){return o;function o(u){return Pe(u)?Re(e,a,"linePrefix")(u):a(u)}function a(u){return u===null||he(u)?n(u):t(u)}}const Ev={continuation:{tokenize:d2},exit:f2,name:"blockQuote",tokenize:c2};function c2(e,n,t){const o=this;return a;function a(l){if(l===62){const c=o.containerState;return c.open||(e.enter("blockQuote",{_container:!0}),c.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),u}return t(l)}function u(l){return Pe(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(l))}}function d2(e,n,t){const o=this;return a;function a(l){return Pe(l)?Re(e,u,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):u(l)}function u(l){return e.attempt(Ev,n,t)(l)}}function f2(e){e.exit("blockQuote")}const Pv={name:"characterEscape",tokenize:h2};function h2(e,n,t){return o;function o(u){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(u),e.exit("escapeMarker"),a}function a(u){return Zj(u)?(e.enter("characterEscapeValue"),e.consume(u),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(u)}}const Rv={name:"characterReference",tokenize:p2};function p2(e,n,t){const o=this;let a=0,u,l;return c;function c(m){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),f}function f(m){return m===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(m),e.exit("characterReferenceMarkerNumeric"),h):(e.enter("characterReferenceValue"),u=31,l=yn,p(m))}function h(m){return m===88||m===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(m),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),u=6,l=Qj,p):(e.enter("characterReferenceValue"),u=7,l=ad,p(m))}function p(m){if(m===59&&a){const x=e.exit("characterReferenceValue");return l===yn&&!df(o.sliceSerialize(x))?t(m):(e.enter("characterReferenceMarker"),e.consume(m),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return l(m)&&a++<u?(e.consume(m),p):t(m)}}const ly={partial:!0,tokenize:g2},uy={concrete:!0,name:"codeFenced",tokenize:m2};function m2(e,n,t){const o=this,a={partial:!0,tokenize:B};let u=0,l=0,c;return f;function f(M){return h(M)}function h(M){const X=o.events[o.events.length-1];return u=X&&X[1].type==="linePrefix"?X[2].sliceSerialize(X[1],!0).length:0,c=M,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(M)}function p(M){return M===c?(l++,e.consume(M),p):l<3?t(M):(e.exit("codeFencedFenceSequence"),Pe(M)?Re(e,m,"whitespace")(M):m(M))}function m(M){return M===null||he(M)?(e.exit("codeFencedFence"),o.interrupt?n(M):e.check(ly,T,V)(M)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),x(M))}function x(M){return M===null||he(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),m(M)):Pe(M)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Re(e,v,"whitespace")(M)):M===96&&M===c?t(M):(e.consume(M),x)}function v(M){return M===null||he(M)?m(M):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),b(M))}function b(M){return M===null||he(M)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),m(M)):M===96&&M===c?t(M):(e.consume(M),b)}function T(M){return e.attempt(a,V,E)(M)}function E(M){return e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),S}function S(M){return u>0&&Pe(M)?Re(e,_,"linePrefix",u+1)(M):_(M)}function _(M){return M===null||he(M)?e.check(ly,T,V)(M):(e.enter("codeFlowValue"),j(M))}function j(M){return M===null||he(M)?(e.exit("codeFlowValue"),_(M)):(e.consume(M),j)}function V(M){return e.exit("codeFenced"),n(M)}function B(M,X,U){let re=0;return O;function O(J){return M.enter("lineEnding"),M.consume(J),M.exit("lineEnding"),ee}function ee(J){return M.enter("codeFencedFence"),Pe(J)?Re(M,ne,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(J):ne(J)}function ne(J){return J===c?(M.enter("codeFencedFenceSequence"),ye(J)):U(J)}function ye(J){return J===c?(re++,M.consume(J),ye):re>=l?(M.exit("codeFencedFenceSequence"),Pe(J)?Re(M,ie,"whitespace")(J):ie(J)):U(J)}function ie(J){return J===null||he(J)?(M.exit("codeFencedFence"),X(J)):U(J)}}}function g2(e,n,t){const o=this;return a;function a(l){return l===null?t(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),u)}function u(l){return o.parser.lazy[o.now().line]?t(l):n(l)}}const bc={name:"codeIndented",tokenize:x2},y2={partial:!0,tokenize:v2};function x2(e,n,t){const o=this;return a;function a(h){return e.enter("codeIndented"),Re(e,u,"linePrefix",5)(h)}function u(h){const p=o.events[o.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(h):t(h)}function l(h){return h===null?f(h):he(h)?e.attempt(y2,l,f)(h):(e.enter("codeFlowValue"),c(h))}function c(h){return h===null||he(h)?(e.exit("codeFlowValue"),l(h)):(e.consume(h),c)}function f(h){return e.exit("codeIndented"),n(h)}}function v2(e,n,t){const o=this;return a;function a(l){return o.parser.lazy[o.now().line]?t(l):he(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a):Re(e,u,"linePrefix",5)(l)}function u(l){const c=o.events[o.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):he(l)?a(l):t(l)}}const w2={name:"codeText",previous:k2,resolve:b2,tokenize:S2};function b2(e){let n=e.length-4,t=3,o,a;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(o=t;++o<n;)if(e[o][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(o=t-1,n++;++o<=n;)a===void 0?o!==n&&e[o][1].type!=="lineEnding"&&(a=o):(o===n||e[o][1].type==="lineEnding")&&(e[a][1].type="codeTextData",o!==a+2&&(e[a][1].end=e[o-1][1].end,e.splice(a+2,o-a-2),n-=o-a-2,o=a+2),a=void 0);return e}function k2(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function S2(e,n,t){let o=0,a,u;return l;function l(m){return e.enter("codeText"),e.enter("codeTextSequence"),c(m)}function c(m){return m===96?(e.consume(m),o++,c):(e.exit("codeTextSequence"),f(m))}function f(m){return m===null?t(m):m===32?(e.enter("space"),e.consume(m),e.exit("space"),f):m===96?(u=e.enter("codeTextSequence"),a=0,p(m)):he(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),f):(e.enter("codeTextData"),h(m))}function h(m){return m===null||m===32||m===96||he(m)?(e.exit("codeTextData"),f(m)):(e.consume(m),h)}function p(m){return m===96?(e.consume(m),a++,p):a===o?(e.exit("codeTextSequence"),e.exit("codeText"),n(m)):(u.type="codeTextData",h(m))}}class T2{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const o=t??Number.POSITIVE_INFINITY;return o<this.left.length?this.left.slice(n,o):n>this.left.length?this.right.slice(this.right.length-o+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-o+this.left.length).reverse())}splice(n,t,o){const a=t||0;this.setCursor(Math.trunc(n));const u=this.right.splice(this.right.length-a,Number.POSITIVE_INFINITY);return o&&Po(this.left,o),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Po(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Po(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Po(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Po(this.left,t.reverse())}}}function Po(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Av(e){const n={};let t=-1,o,a,u,l,c,f,h;const p=new T2(e);for(;++t<p.length;){for(;t in n;)t=n[t];if(o=p.get(t),t&&o[1].type==="chunkFlow"&&p.get(t-1)[1].type==="listItemPrefix"&&(f=o[1]._tokenizer.events,u=0,u<f.length&&f[u][1].type==="lineEndingBlank"&&(u+=2),u<f.length&&f[u][1].type==="content"))for(;++u<f.length&&f[u][1].type!=="content";)f[u][1].type==="chunkText"&&(f[u][1]._isInFirstContentOfListItem=!0,u++);if(o[0]==="enter")o[1].contentType&&(Object.assign(n,C2(p,t)),t=n[t],h=!0);else if(o[1]._container){for(u=t,a=void 0;u--;)if(l=p.get(u),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(a&&(p.get(a)[1].type="lineEndingBlank"),l[1].type="lineEnding",a=u);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;a&&(o[1].end={...p.get(a)[1].start},c=p.slice(a,t),c.unshift(o),p.splice(a,t-a+1,c))}}return On(e,0,Number.POSITIVE_INFINITY,p.slice(0)),!h}function C2(e,n){const t=e.get(n)[1],o=e.get(n)[2];let a=n-1;const u=[];let l=t._tokenizer;l||(l=o.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const c=l.events,f=[],h={};let p,m,x=-1,v=t,b=0,T=0;const E=[T];for(;v;){for(;e.get(++a)[1]!==v;);u.push(a),v._tokenizer||(p=o.sliceStream(v),v.next||p.push(null),m&&l.defineSkip(v.start),v._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),v._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),m=v,v=v.next}for(v=t;++x<c.length;)c[x][0]==="exit"&&c[x-1][0]==="enter"&&c[x][1].type===c[x-1][1].type&&c[x][1].start.line!==c[x][1].end.line&&(T=x+1,E.push(T),v._tokenizer=void 0,v.previous=void 0,v=v.next);for(l.events=[],v?(v._tokenizer=void 0,v.previous=void 0):E.pop(),x=E.length;x--;){const S=c.slice(E[x],E[x+1]),_=u.pop();f.push([_,_+S.length-1]),e.splice(_,2,S)}for(f.reverse(),x=-1;++x<f.length;)h[b+f[x][0]]=b+f[x][1],b+=f[x][1]-f[x][0]-1;return h}const E2={resolve:R2,tokenize:A2},P2={partial:!0,tokenize:j2};function R2(e){return Av(e),e}function A2(e,n){let t;return o;function o(c){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),a(c)}function a(c){return c===null?u(c):he(c)?e.check(P2,l,u)(c):(e.consume(c),a)}function u(c){return e.exit("chunkContent"),e.exit("content"),n(c)}function l(c){return e.consume(c),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,a}}function j2(e,n,t){const o=this;return a;function a(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Re(e,u,"linePrefix")}function u(l){if(l===null||he(l))return t(l);const c=o.events[o.events.length-1];return!o.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(l):e.interrupt(o.parser.constructs.flow,t,n)(l)}}function jv(e,n,t,o,a,u,l,c,f){const h=f||Number.POSITIVE_INFINITY;let p=0;return m;function m(S){return S===60?(e.enter(o),e.enter(a),e.enter(u),e.consume(S),e.exit(u),x):S===null||S===32||S===41||Vs(S)?t(S):(e.enter(o),e.enter(l),e.enter(c),e.enter("chunkString",{contentType:"string"}),T(S))}function x(S){return S===62?(e.enter(u),e.consume(S),e.exit(u),e.exit(a),e.exit(o),n):(e.enter(c),e.enter("chunkString",{contentType:"string"}),v(S))}function v(S){return S===62?(e.exit("chunkString"),e.exit(c),x(S)):S===null||S===60||he(S)?t(S):(e.consume(S),S===92?b:v)}function b(S){return S===60||S===62||S===92?(e.consume(S),v):v(S)}function T(S){return!p&&(S===null||S===41||Le(S))?(e.exit("chunkString"),e.exit(c),e.exit(l),e.exit(o),n(S)):p<h&&S===40?(e.consume(S),p++,T):S===41?(e.consume(S),p--,T):S===null||S===32||S===40||Vs(S)?t(S):(e.consume(S),S===92?E:T)}function E(S){return S===40||S===41||S===92?(e.consume(S),T):T(S)}}function Iv(e,n,t,o,a,u){const l=this;let c=0,f;return h;function h(v){return e.enter(o),e.enter(a),e.consume(v),e.exit(a),e.enter(u),p}function p(v){return c>999||v===null||v===91||v===93&&!f||v===94&&!c&&"_hiddenFootnoteSupport"in l.parser.constructs?t(v):v===93?(e.exit(u),e.enter(a),e.consume(v),e.exit(a),e.exit(o),n):he(v)?(e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),m(v))}function m(v){return v===null||v===91||v===93||he(v)||c++>999?(e.exit("chunkString"),p(v)):(e.consume(v),f||(f=!Pe(v)),v===92?x:m)}function x(v){return v===91||v===92||v===93?(e.consume(v),c++,m):m(v)}}function _v(e,n,t,o,a,u){let l;return c;function c(x){return x===34||x===39||x===40?(e.enter(o),e.enter(a),e.consume(x),e.exit(a),l=x===40?41:x,f):t(x)}function f(x){return x===l?(e.enter(a),e.consume(x),e.exit(a),e.exit(o),n):(e.enter(u),h(x))}function h(x){return x===l?(e.exit(u),f(l)):x===null?t(x):he(x)?(e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),Re(e,h,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(x))}function p(x){return x===l||x===null||he(x)?(e.exit("chunkString"),h(x)):(e.consume(x),x===92?m:p)}function m(x){return x===l||x===92?(e.consume(x),p):p(x)}}function zo(e,n){let t;return o;function o(a){return he(a)?(e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t=!0,o):Pe(a)?Re(e,o,t?"linePrefix":"lineSuffix")(a):n(a)}}const I2={name:"definition",tokenize:N2},_2={partial:!0,tokenize:M2};function N2(e,n,t){const o=this;let a;return u;function u(v){return e.enter("definition"),l(v)}function l(v){return Iv.call(o,e,c,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(v)}function c(v){return a=ot(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)),v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),f):t(v)}function f(v){return Le(v)?zo(e,h)(v):h(v)}function h(v){return jv(e,p,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(v)}function p(v){return e.attempt(_2,m,m)(v)}function m(v){return Pe(v)?Re(e,x,"whitespace")(v):x(v)}function x(v){return v===null||he(v)?(e.exit("definition"),o.parser.defined.push(a),n(v)):t(v)}}function M2(e,n,t){return o;function o(c){return Le(c)?zo(e,a)(c):t(c)}function a(c){return _v(e,u,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function u(c){return Pe(c)?Re(e,l,"whitespace")(c):l(c)}function l(c){return c===null||he(c)?n(c):t(c)}}const D2={name:"hardBreakEscape",tokenize:L2};function L2(e,n,t){return o;function o(u){return e.enter("hardBreakEscape"),e.consume(u),a}function a(u){return he(u)?(e.exit("hardBreakEscape"),n(u)):t(u)}}const O2={name:"headingAtx",resolve:F2,tokenize:z2};function F2(e,n){let t=e.length-2,o=3,a,u;return e[o][1].type==="whitespace"&&(o+=2),t-2>o&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(o===t-1||t-4>o&&e[t-2][1].type==="whitespace")&&(t-=o+1===t?2:4),t>o&&(a={type:"atxHeadingText",start:e[o][1].start,end:e[t][1].end},u={type:"chunkText",start:e[o][1].start,end:e[t][1].end,contentType:"text"},On(e,o,t-o+1,[["enter",a,n],["enter",u,n],["exit",u,n],["exit",a,n]])),e}function z2(e,n,t){let o=0;return a;function a(p){return e.enter("atxHeading"),u(p)}function u(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&o++<6?(e.consume(p),l):p===null||Le(p)?(e.exit("atxHeadingSequence"),c(p)):t(p)}function c(p){return p===35?(e.enter("atxHeadingSequence"),f(p)):p===null||he(p)?(e.exit("atxHeading"),n(p)):Pe(p)?Re(e,c,"whitespace")(p):(e.enter("atxHeadingText"),h(p))}function f(p){return p===35?(e.consume(p),f):(e.exit("atxHeadingSequence"),c(p))}function h(p){return p===null||p===35||Le(p)?(e.exit("atxHeadingText"),c(p)):(e.consume(p),h)}}const B2=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],cy=["pre","script","style","textarea"],V2={concrete:!0,name:"htmlFlow",resolveTo:$2,tokenize:H2},W2={partial:!0,tokenize:G2},U2={partial:!0,tokenize:q2};function $2(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function H2(e,n,t){const o=this;let a,u,l,c,f;return h;function h(A){return p(A)}function p(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),m}function m(A){return A===33?(e.consume(A),x):A===47?(e.consume(A),u=!0,T):A===63?(e.consume(A),a=3,o.interrupt?n:C):bn(A)?(e.consume(A),l=String.fromCharCode(A),E):t(A)}function x(A){return A===45?(e.consume(A),a=2,v):A===91?(e.consume(A),a=5,c=0,b):bn(A)?(e.consume(A),a=4,o.interrupt?n:C):t(A)}function v(A){return A===45?(e.consume(A),o.interrupt?n:C):t(A)}function b(A){const ge="CDATA[";return A===ge.charCodeAt(c++)?(e.consume(A),c===ge.length?o.interrupt?n:ne:b):t(A)}function T(A){return bn(A)?(e.consume(A),l=String.fromCharCode(A),E):t(A)}function E(A){if(A===null||A===47||A===62||Le(A)){const ge=A===47,ke=l.toLowerCase();return!ge&&!u&&cy.includes(ke)?(a=1,o.interrupt?n(A):ne(A)):B2.includes(l.toLowerCase())?(a=6,ge?(e.consume(A),S):o.interrupt?n(A):ne(A)):(a=7,o.interrupt&&!o.parser.lazy[o.now().line]?t(A):u?_(A):j(A))}return A===45||yn(A)?(e.consume(A),l+=String.fromCharCode(A),E):t(A)}function S(A){return A===62?(e.consume(A),o.interrupt?n:ne):t(A)}function _(A){return Pe(A)?(e.consume(A),_):O(A)}function j(A){return A===47?(e.consume(A),O):A===58||A===95||bn(A)?(e.consume(A),V):Pe(A)?(e.consume(A),j):O(A)}function V(A){return A===45||A===46||A===58||A===95||yn(A)?(e.consume(A),V):B(A)}function B(A){return A===61?(e.consume(A),M):Pe(A)?(e.consume(A),B):j(A)}function M(A){return A===null||A===60||A===61||A===62||A===96?t(A):A===34||A===39?(e.consume(A),f=A,X):Pe(A)?(e.consume(A),M):U(A)}function X(A){return A===f?(e.consume(A),f=null,re):A===null||he(A)?t(A):(e.consume(A),X)}function U(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||Le(A)?B(A):(e.consume(A),U)}function re(A){return A===47||A===62||Pe(A)?j(A):t(A)}function O(A){return A===62?(e.consume(A),ee):t(A)}function ee(A){return A===null||he(A)?ne(A):Pe(A)?(e.consume(A),ee):t(A)}function ne(A){return A===45&&a===2?(e.consume(A),be):A===60&&a===1?(e.consume(A),ce):A===62&&a===4?(e.consume(A),D):A===63&&a===3?(e.consume(A),C):A===93&&a===5?(e.consume(A),se):he(A)&&(a===6||a===7)?(e.exit("htmlFlowData"),e.check(W2,$,ye)(A)):A===null||he(A)?(e.exit("htmlFlowData"),ye(A)):(e.consume(A),ne)}function ye(A){return e.check(U2,ie,$)(A)}function ie(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),J}function J(A){return A===null||he(A)?ye(A):(e.enter("htmlFlowData"),ne(A))}function be(A){return A===45?(e.consume(A),C):ne(A)}function ce(A){return A===47?(e.consume(A),l="",K):ne(A)}function K(A){if(A===62){const ge=l.toLowerCase();return cy.includes(ge)?(e.consume(A),D):ne(A)}return bn(A)&&l.length<8?(e.consume(A),l+=String.fromCharCode(A),K):ne(A)}function se(A){return A===93?(e.consume(A),C):ne(A)}function C(A){return A===62?(e.consume(A),D):A===45&&a===2?(e.consume(A),C):ne(A)}function D(A){return A===null||he(A)?(e.exit("htmlFlowData"),$(A)):(e.consume(A),D)}function $(A){return e.exit("htmlFlow"),n(A)}}function q2(e,n,t){const o=this;return a;function a(l){return he(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),u):t(l)}function u(l){return o.parser.lazy[o.now().line]?t(l):n(l)}}function G2(e,n,t){return o;function o(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),e.attempt(na,n,t)}}const K2={name:"htmlText",tokenize:Y2};function Y2(e,n,t){const o=this;let a,u,l;return c;function c(C){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(C),f}function f(C){return C===33?(e.consume(C),h):C===47?(e.consume(C),B):C===63?(e.consume(C),j):bn(C)?(e.consume(C),U):t(C)}function h(C){return C===45?(e.consume(C),p):C===91?(e.consume(C),u=0,b):bn(C)?(e.consume(C),_):t(C)}function p(C){return C===45?(e.consume(C),v):t(C)}function m(C){return C===null?t(C):C===45?(e.consume(C),x):he(C)?(l=m,ce(C)):(e.consume(C),m)}function x(C){return C===45?(e.consume(C),v):m(C)}function v(C){return C===62?be(C):C===45?x(C):m(C)}function b(C){const D="CDATA[";return C===D.charCodeAt(u++)?(e.consume(C),u===D.length?T:b):t(C)}function T(C){return C===null?t(C):C===93?(e.consume(C),E):he(C)?(l=T,ce(C)):(e.consume(C),T)}function E(C){return C===93?(e.consume(C),S):T(C)}function S(C){return C===62?be(C):C===93?(e.consume(C),S):T(C)}function _(C){return C===null||C===62?be(C):he(C)?(l=_,ce(C)):(e.consume(C),_)}function j(C){return C===null?t(C):C===63?(e.consume(C),V):he(C)?(l=j,ce(C)):(e.consume(C),j)}function V(C){return C===62?be(C):j(C)}function B(C){return bn(C)?(e.consume(C),M):t(C)}function M(C){return C===45||yn(C)?(e.consume(C),M):X(C)}function X(C){return he(C)?(l=X,ce(C)):Pe(C)?(e.consume(C),X):be(C)}function U(C){return C===45||yn(C)?(e.consume(C),U):C===47||C===62||Le(C)?re(C):t(C)}function re(C){return C===47?(e.consume(C),be):C===58||C===95||bn(C)?(e.consume(C),O):he(C)?(l=re,ce(C)):Pe(C)?(e.consume(C),re):be(C)}function O(C){return C===45||C===46||C===58||C===95||yn(C)?(e.consume(C),O):ee(C)}function ee(C){return C===61?(e.consume(C),ne):he(C)?(l=ee,ce(C)):Pe(C)?(e.consume(C),ee):re(C)}function ne(C){return C===null||C===60||C===61||C===62||C===96?t(C):C===34||C===39?(e.consume(C),a=C,ye):he(C)?(l=ne,ce(C)):Pe(C)?(e.consume(C),ne):(e.consume(C),ie)}function ye(C){return C===a?(e.consume(C),a=void 0,J):C===null?t(C):he(C)?(l=ye,ce(C)):(e.consume(C),ye)}function ie(C){return C===null||C===34||C===39||C===60||C===61||C===96?t(C):C===47||C===62||Le(C)?re(C):(e.consume(C),ie)}function J(C){return C===47||C===62||Le(C)?re(C):t(C)}function be(C){return C===62?(e.consume(C),e.exit("htmlTextData"),e.exit("htmlText"),n):t(C)}function ce(C){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),K}function K(C){return Pe(C)?Re(e,se,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):se(C)}function se(C){return e.enter("htmlTextData"),l(C)}}const ff={name:"labelEnd",resolveAll:Z2,resolveTo:eI,tokenize:nI},J2={tokenize:tI},X2={tokenize:rI},Q2={tokenize:iI};function Z2(e){let n=-1;const t=[];for(;++n<e.length;){const o=e[n][1];if(t.push(e[n]),o.type==="labelImage"||o.type==="labelLink"||o.type==="labelEnd"){const a=o.type==="labelImage"?4:2;o.type="data",n+=a}}return e.length!==t.length&&On(e,0,e.length,t),e}function eI(e,n){let t=e.length,o=0,a,u,l,c;for(;t--;)if(a=e[t][1],u){if(a.type==="link"||a.type==="labelLink"&&a._inactive)break;e[t][0]==="enter"&&a.type==="labelLink"&&(a._inactive=!0)}else if(l){if(e[t][0]==="enter"&&(a.type==="labelImage"||a.type==="labelLink")&&!a._balanced&&(u=t,a.type!=="labelLink")){o=2;break}}else a.type==="labelEnd"&&(l=t);const f={type:e[u][1].type==="labelLink"?"link":"image",start:{...e[u][1].start},end:{...e[e.length-1][1].end}},h={type:"label",start:{...e[u][1].start},end:{...e[l][1].end}},p={type:"labelText",start:{...e[u+o+2][1].end},end:{...e[l-2][1].start}};return c=[["enter",f,n],["enter",h,n]],c=Kn(c,e.slice(u+1,u+o+3)),c=Kn(c,[["enter",p,n]]),c=Kn(c,rl(n.parser.constructs.insideSpan.null,e.slice(u+o+4,l-3),n)),c=Kn(c,[["exit",p,n],e[l-2],e[l-1],["exit",h,n]]),c=Kn(c,e.slice(l+1)),c=Kn(c,[["exit",f,n]]),On(e,u,e.length,c),e}function nI(e,n,t){const o=this;let a=o.events.length,u,l;for(;a--;)if((o.events[a][1].type==="labelImage"||o.events[a][1].type==="labelLink")&&!o.events[a][1]._balanced){u=o.events[a][1];break}return c;function c(x){return u?u._inactive?m(x):(l=o.parser.defined.includes(ot(o.sliceSerialize({start:u.end,end:o.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(x),e.exit("labelMarker"),e.exit("labelEnd"),f):t(x)}function f(x){return x===40?e.attempt(J2,p,l?p:m)(x):x===91?e.attempt(X2,p,l?h:m)(x):l?p(x):m(x)}function h(x){return e.attempt(Q2,p,m)(x)}function p(x){return n(x)}function m(x){return u._balanced=!0,t(x)}}function tI(e,n,t){return o;function o(m){return e.enter("resource"),e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),a}function a(m){return Le(m)?zo(e,u)(m):u(m)}function u(m){return m===41?p(m):jv(e,l,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(m)}function l(m){return Le(m)?zo(e,f)(m):p(m)}function c(m){return t(m)}function f(m){return m===34||m===39||m===40?_v(e,h,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(m):p(m)}function h(m){return Le(m)?zo(e,p)(m):p(m)}function p(m){return m===41?(e.enter("resourceMarker"),e.consume(m),e.exit("resourceMarker"),e.exit("resource"),n):t(m)}}function rI(e,n,t){const o=this;return a;function a(c){return Iv.call(o,e,u,l,"reference","referenceMarker","referenceString")(c)}function u(c){return o.parser.defined.includes(ot(o.sliceSerialize(o.events[o.events.length-1][1]).slice(1,-1)))?n(c):t(c)}function l(c){return t(c)}}function iI(e,n,t){return o;function o(u){return e.enter("reference"),e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),a}function a(u){return u===93?(e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),e.exit("reference"),n):t(u)}}const oI={name:"labelStartImage",resolveAll:ff.resolveAll,tokenize:aI};function aI(e,n,t){const o=this;return a;function a(c){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(c),e.exit("labelImageMarker"),u}function u(c){return c===91?(e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelImage"),l):t(c)}function l(c){return c===94&&"_hiddenFootnoteSupport"in o.parser.constructs?t(c):n(c)}}const sI={name:"labelStartLink",resolveAll:ff.resolveAll,tokenize:lI};function lI(e,n,t){const o=this;return a;function a(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),u}function u(l){return l===94&&"_hiddenFootnoteSupport"in o.parser.constructs?t(l):n(l)}}const kc={name:"lineEnding",tokenize:uI};function uI(e,n){return t;function t(o){return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),Re(e,n,"linePrefix")}}const _s={name:"thematicBreak",tokenize:cI};function cI(e,n,t){let o=0,a;return u;function u(h){return e.enter("thematicBreak"),l(h)}function l(h){return a=h,c(h)}function c(h){return h===a?(e.enter("thematicBreakSequence"),f(h)):o>=3&&(h===null||he(h))?(e.exit("thematicBreak"),n(h)):t(h)}function f(h){return h===a?(e.consume(h),o++,f):(e.exit("thematicBreakSequence"),Pe(h)?Re(e,c,"whitespace")(h):c(h))}}const Rn={continuation:{tokenize:pI},exit:gI,name:"list",tokenize:hI},dI={partial:!0,tokenize:yI},fI={partial:!0,tokenize:mI};function hI(e,n,t){const o=this,a=o.events[o.events.length-1];let u=a&&a[1].type==="linePrefix"?a[2].sliceSerialize(a[1],!0).length:0,l=0;return c;function c(v){const b=o.containerState.type||(v===42||v===43||v===45?"listUnordered":"listOrdered");if(b==="listUnordered"?!o.containerState.marker||v===o.containerState.marker:ad(v)){if(o.containerState.type||(o.containerState.type=b,e.enter(b,{_container:!0})),b==="listUnordered")return e.enter("listItemPrefix"),v===42||v===45?e.check(_s,t,h)(v):h(v);if(!o.interrupt||v===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(v)}return t(v)}function f(v){return ad(v)&&++l<10?(e.consume(v),f):(!o.interrupt||l<2)&&(o.containerState.marker?v===o.containerState.marker:v===41||v===46)?(e.exit("listItemValue"),h(v)):t(v)}function h(v){return e.enter("listItemMarker"),e.consume(v),e.exit("listItemMarker"),o.containerState.marker=o.containerState.marker||v,e.check(na,o.interrupt?t:p,e.attempt(dI,x,m))}function p(v){return o.containerState.initialBlankLine=!0,u++,x(v)}function m(v){return Pe(v)?(e.enter("listItemPrefixWhitespace"),e.consume(v),e.exit("listItemPrefixWhitespace"),x):t(v)}function x(v){return o.containerState.size=u+o.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(v)}}function pI(e,n,t){const o=this;return o.containerState._closeFlow=void 0,e.check(na,a,u);function a(c){return o.containerState.furtherBlankLines=o.containerState.furtherBlankLines||o.containerState.initialBlankLine,Re(e,n,"listItemIndent",o.containerState.size+1)(c)}function u(c){return o.containerState.furtherBlankLines||!Pe(c)?(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,l(c)):(o.containerState.furtherBlankLines=void 0,o.containerState.initialBlankLine=void 0,e.attempt(fI,n,l)(c))}function l(c){return o.containerState._closeFlow=!0,o.interrupt=void 0,Re(e,e.attempt(Rn,n,t),"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function mI(e,n,t){const o=this;return Re(e,a,"listItemIndent",o.containerState.size+1);function a(u){const l=o.events[o.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===o.containerState.size?n(u):t(u)}}function gI(e){e.exit(this.containerState.type)}function yI(e,n,t){const o=this;return Re(e,a,"listItemPrefixWhitespace",o.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function a(u){const l=o.events[o.events.length-1];return!Pe(u)&&l&&l[1].type==="listItemPrefixWhitespace"?n(u):t(u)}}const dy={name:"setextUnderline",resolveTo:xI,tokenize:vI};function xI(e,n){let t=e.length,o,a,u;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){o=t;break}e[t][1].type==="paragraph"&&(a=t)}else e[t][1].type==="content"&&e.splice(t,1),!u&&e[t][1].type==="definition"&&(u=t);const l={type:"setextHeading",start:{...e[o][1].start},end:{...e[e.length-1][1].end}};return e[a][1].type="setextHeadingText",u?(e.splice(a,0,["enter",l,n]),e.splice(u+1,0,["exit",e[o][1],n]),e[o][1].end={...e[u][1].end}):e[o][1]=l,e.push(["exit",l,n]),e}function vI(e,n,t){const o=this;let a;return u;function u(h){let p=o.events.length,m;for(;p--;)if(o.events[p][1].type!=="lineEnding"&&o.events[p][1].type!=="linePrefix"&&o.events[p][1].type!=="content"){m=o.events[p][1].type==="paragraph";break}return!o.parser.lazy[o.now().line]&&(o.interrupt||m)?(e.enter("setextHeadingLine"),a=h,l(h)):t(h)}function l(h){return e.enter("setextHeadingLineSequence"),c(h)}function c(h){return h===a?(e.consume(h),c):(e.exit("setextHeadingLineSequence"),Pe(h)?Re(e,f,"lineSuffix")(h):f(h))}function f(h){return h===null||he(h)?(e.exit("setextHeadingLine"),n(h)):t(h)}}const wI={tokenize:bI};function bI(e){const n=this,t=e.attempt(na,o,e.attempt(this.parser.constructs.flowInitial,a,Re(e,e.attempt(this.parser.constructs.flow,a,e.attempt(E2,a)),"linePrefix")));return t;function o(u){if(u===null){e.consume(u);return}return e.enter("lineEndingBlank"),e.consume(u),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function a(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const kI={resolveAll:Mv()},SI=Nv("string"),TI=Nv("text");function Nv(e){return{resolveAll:Mv(e==="text"?CI:void 0),tokenize:n};function n(t){const o=this,a=this.parser.constructs[e],u=t.attempt(a,l,c);return l;function l(p){return h(p)?u(p):c(p)}function c(p){if(p===null){t.consume(p);return}return t.enter("data"),t.consume(p),f}function f(p){return h(p)?(t.exit("data"),u(p)):(t.consume(p),f)}function h(p){if(p===null)return!0;const m=a[p];let x=-1;if(m)for(;++x<m.length;){const v=m[x];if(!v.previous||v.previous.call(o,o.previous))return!0}return!1}}}function Mv(e){return n;function n(t,o){let a=-1,u;for(;++a<=t.length;)u===void 0?t[a]&&t[a][1].type==="data"&&(u=a,a++):(!t[a]||t[a][1].type!=="data")&&(a!==u+2&&(t[u][1].end=t[a-1][1].end,t.splice(u+2,a-u-2),a=u+2),u=void 0);return e?e(t,o):t}}function CI(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const o=e[t-1][1],a=n.sliceStream(o);let u=a.length,l=-1,c=0,f;for(;u--;){const h=a[u];if(typeof h=="string"){for(l=h.length;h.charCodeAt(l-1)===32;)c++,l--;if(l)break;l=-1}else if(h===-2)f=!0,c++;else if(h!==-1){u++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(c=0),c){const h={type:t===e.length||f||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?l:o.start._bufferIndex+l,_index:o.start._index+u,line:o.end.line,column:o.end.column-c,offset:o.end.offset-c},end:{...o.end}};o.end={...h.start},o.start.offset===o.end.offset?Object.assign(o,h):(e.splice(t,0,["enter",h,n],["exit",h,n]),t+=2)}t++}return e}const EI={42:Rn,43:Rn,45:Rn,48:Rn,49:Rn,50:Rn,51:Rn,52:Rn,53:Rn,54:Rn,55:Rn,56:Rn,57:Rn,62:Ev},PI={91:I2},RI={[-2]:bc,[-1]:bc,32:bc},AI={35:O2,42:_s,45:[dy,_s],60:V2,61:dy,95:_s,96:uy,126:uy},jI={38:Rv,92:Pv},II={[-5]:kc,[-4]:kc,[-3]:kc,33:oI,38:Rv,42:sd,60:[s2,K2],91:sI,92:[D2,Pv],93:ff,95:sd,96:w2},_I={null:[sd,kI]},NI={null:[42,95]},MI={null:[]},DI=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:NI,contentInitial:PI,disable:MI,document:EI,flow:AI,flowInitial:RI,insideSpan:_I,string:jI,text:II},Symbol.toStringTag,{value:"Module"}));function LI(e,n,t){let o={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const a={},u=[];let l=[],c=[];const f={attempt:X(B),check:X(M),consume:_,enter:j,exit:V,interrupt:X(M,{interrupt:!0})},h={code:null,containerState:{},defineSkip:T,events:[],now:b,parser:e,previous:null,sliceSerialize:x,sliceStream:v,write:m};let p=n.tokenize.call(h,f);return n.resolveAll&&u.push(n),h;function m(ee){return l=Kn(l,ee),E(),l[l.length-1]!==null?[]:(U(n,0),h.events=rl(u,h.events,h),h.events)}function x(ee,ne){return FI(v(ee),ne)}function v(ee){return OI(l,ee)}function b(){const{_bufferIndex:ee,_index:ne,line:ye,column:ie,offset:J}=o;return{_bufferIndex:ee,_index:ne,line:ye,column:ie,offset:J}}function T(ee){a[ee.line]=ee.column,O()}function E(){let ee;for(;o._index<l.length;){const ne=l[o._index];if(typeof ne=="string")for(ee=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===ee&&o._bufferIndex<ne.length;)S(ne.charCodeAt(o._bufferIndex));else S(ne)}}function S(ee){p=p(ee)}function _(ee){he(ee)?(o.line++,o.column=1,o.offset+=ee===-3?2:1,O()):ee!==-1&&(o.column++,o.offset++),o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===l[o._index].length&&(o._bufferIndex=-1,o._index++)),h.previous=ee}function j(ee,ne){const ye=ne||{};return ye.type=ee,ye.start=b(),h.events.push(["enter",ye,h]),c.push(ye),ye}function V(ee){const ne=c.pop();return ne.end=b(),h.events.push(["exit",ne,h]),ne}function B(ee,ne){U(ee,ne.from)}function M(ee,ne){ne.restore()}function X(ee,ne){return ye;function ye(ie,J,be){let ce,K,se,C;return Array.isArray(ie)?$(ie):"tokenize"in ie?$([ie]):D(ie);function D(pe){return Ie;function Ie(Se){const Ne=Se!==null&&pe[Se],Xe=Se!==null&&pe.null,wt=[...Array.isArray(Ne)?Ne:Ne?[Ne]:[],...Array.isArray(Xe)?Xe:Xe?[Xe]:[]];return $(wt)(Se)}}function $(pe){return ce=pe,K=0,pe.length===0?be:A(pe[K])}function A(pe){return Ie;function Ie(Se){return C=re(),se=pe,pe.partial||(h.currentConstruct=pe),pe.name&&h.parser.constructs.disable.null.includes(pe.name)?ke():pe.tokenize.call(ne?Object.assign(Object.create(h),ne):h,f,ge,ke)(Se)}}function ge(pe){return ee(se,C),J}function ke(pe){return C.restore(),++K<ce.length?A(ce[K]):be}}}function U(ee,ne){ee.resolveAll&&!u.includes(ee)&&u.push(ee),ee.resolve&&On(h.events,ne,h.events.length-ne,ee.resolve(h.events.slice(ne),h)),ee.resolveTo&&(h.events=ee.resolveTo(h.events,h))}function re(){const ee=b(),ne=h.previous,ye=h.currentConstruct,ie=h.events.length,J=Array.from(c);return{from:ie,restore:be};function be(){o=ee,h.previous=ne,h.currentConstruct=ye,h.events.length=ie,c=J,O()}}function O(){o.line in a&&o.column<2&&(o.column=a[o.line],o.offset+=a[o.line]-1)}}function OI(e,n){const t=n.start._index,o=n.start._bufferIndex,a=n.end._index,u=n.end._bufferIndex;let l;if(t===a)l=[e[t].slice(o,u)];else{if(l=e.slice(t,a),o>-1){const c=l[0];typeof c=="string"?l[0]=c.slice(o):l.shift()}u>0&&l.push(e[a].slice(0,u))}return l}function FI(e,n){let t=-1;const o=[];let a;for(;++t<e.length;){const u=e[t];let l;if(typeof u=="string")l=u;else switch(u){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&a)continue;l=" ";break}default:l=String.fromCharCode(u)}a=u===-2,o.push(l)}return o.join("")}function zI(e){const o={constructs:Tv([DI,...(e||{}).extensions||[]]),content:a(e2),defined:[],document:a(t2),flow:a(wI),lazy:{},string:a(SI),text:a(TI)};return o;function a(u){return l;function l(c){return LI(o,u,c)}}}function BI(e){for(;!Av(e););return e}const fy=/[\0\t\n\r]/g;function VI(){let e=1,n="",t=!0,o;return a;function a(u,l,c){const f=[];let h,p,m,x,v;for(u=n+(typeof u=="string"?u.toString():new TextDecoder(l||void 0).decode(u)),m=0,n="",t&&(u.charCodeAt(0)===65279&&m++,t=void 0);m<u.length;){if(fy.lastIndex=m,h=fy.exec(u),x=h&&h.index!==void 0?h.index:u.length,v=u.charCodeAt(x),!h){n=u.slice(m);break}if(v===10&&m===x&&o)f.push(-3),o=void 0;else switch(o&&(f.push(-5),o=void 0),m<x&&(f.push(u.slice(m,x)),e+=x-m),v){case 0:{f.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,f.push(-2);e++<p;)f.push(-1);break}case 10:{f.push(-4),e=1;break}default:o=!0,e=1}m=x+1}return c&&(o&&f.push(-5),n&&f.push(n),f.push(null)),f}}const WI=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function UI(e){return e.replace(WI,$I)}function $I(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const a=t.charCodeAt(1),u=a===120||a===88;return Cv(t.slice(u?2:1),u?16:10)}return df(t)||e}const Dv={}.hasOwnProperty;function HI(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),qI(t)(BI(zI(t).document().write(VI()(e,n,!0))))}function qI(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(Wr),autolinkProtocol:re,autolinkEmail:re,atxHeading:u(Mi),blockQuote:u(Xe),characterEscape:re,characterReference:re,codeFenced:u(wt),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:u(wt,l),codeText:u(ra,l),codeTextData:re,data:re,codeFlowValue:re,definition:u(Br),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:u(Ni),hardBreakEscape:u(Di),hardBreakTrailing:u(Di),htmlFlow:u(Vr,l),htmlFlowData:re,htmlText:u(Vr,l),htmlTextData:re,image:u(ia),label:l,link:u(Wr),listItem:u(zt),listItemValue:x,listOrdered:u(Ft,m),listUnordered:u(Ft),paragraph:u(Li),reference:A,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:u(Mi),strong:u(oa),thematicBreak:u(sa)},exit:{atxHeading:f(),atxHeadingSequence:B,autolink:f(),autolinkEmail:Ne,autolinkProtocol:Se,blockQuote:f(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:ke,characterReferenceMarkerNumeric:ke,characterReferenceValue:pe,characterReference:Ie,codeFenced:f(E),codeFencedFence:T,codeFencedFenceInfo:v,codeFencedFenceMeta:b,codeFlowValue:O,codeIndented:f(S),codeText:f(J),codeTextData:O,data:O,definition:f(),definitionDestinationString:V,definitionLabelString:_,definitionTitleString:j,emphasis:f(),hardBreakEscape:f(ne),hardBreakTrailing:f(ne),htmlFlow:f(ye),htmlFlowData:O,htmlText:f(ie),htmlTextData:O,image:f(ce),label:se,labelText:K,lineEnding:ee,link:f(be),listItem:f(),listOrdered:f(),listUnordered:f(),paragraph:f(),referenceString:ge,resourceDestinationString:C,resourceTitleString:D,resource:$,setextHeading:f(U),setextHeadingLineSequence:X,setextHeadingText:M,strong:f(),thematicBreak:f()}};Lv(n,(e||{}).mdastExtensions||[]);const t={};return o;function o(W){let Z={type:"root",children:[]};const xe={stack:[Z],tokenStack:[],config:n,enter:c,exit:h,buffer:l,resume:p,data:t},Te=[];let Ae=-1;for(;++Ae<W.length;)if(W[Ae][1].type==="listOrdered"||W[Ae][1].type==="listUnordered")if(W[Ae][0]==="enter")Te.push(Ae);else{const an=Te.pop();Ae=a(W,an,Ae)}for(Ae=-1;++Ae<W.length;){const an=n[W[Ae][0]];Dv.call(an,W[Ae][1].type)&&an[W[Ae][1].type].call(Object.assign({sliceSerialize:W[Ae][2].sliceSerialize},xe),W[Ae][1])}if(xe.tokenStack.length>0){const an=xe.tokenStack[xe.tokenStack.length-1];(an[1]||hy).call(xe,void 0,an[0])}for(Z.position={start:sr(W.length>0?W[0][1].start:{line:1,column:1,offset:0}),end:sr(W.length>0?W[W.length-2][1].end:{line:1,column:1,offset:0})},Ae=-1;++Ae<n.transforms.length;)Z=n.transforms[Ae](Z)||Z;return Z}function a(W,Z,xe){let Te=Z-1,Ae=-1,an=!1,bt,zn,Bt,hr;for(;++Te<=xe;){const sn=W[Te];switch(sn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{sn[0]==="enter"?Ae++:Ae--,hr=void 0;break}case"lineEndingBlank":{sn[0]==="enter"&&(bt&&!hr&&!Ae&&!Bt&&(Bt=Te),hr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:hr=void 0}if(!Ae&&sn[0]==="enter"&&sn[1].type==="listItemPrefix"||Ae===-1&&sn[0]==="exit"&&(sn[1].type==="listUnordered"||sn[1].type==="listOrdered")){if(bt){let st=Te;for(zn=void 0;st--;){const jn=W[st];if(jn[1].type==="lineEnding"||jn[1].type==="lineEndingBlank"){if(jn[0]==="exit")continue;zn&&(W[zn][1].type="lineEndingBlank",an=!0),jn[1].type="lineEnding",zn=st}else if(!(jn[1].type==="linePrefix"||jn[1].type==="blockQuotePrefix"||jn[1].type==="blockQuotePrefixWhitespace"||jn[1].type==="blockQuoteMarker"||jn[1].type==="listItemIndent"))break}Bt&&(!zn||Bt<zn)&&(bt._spread=!0),bt.end=Object.assign({},zn?W[zn][1].start:sn[1].end),W.splice(zn||Te,0,["exit",bt,sn[2]]),Te++,xe++}if(sn[1].type==="listItemPrefix"){const st={type:"listItem",_spread:!1,start:Object.assign({},sn[1].start),end:void 0};bt=st,W.splice(Te,0,["enter",st,sn[2]]),Te++,xe++,Bt=void 0,hr=!0}}}return W[Z][1]._spread=an,xe}function u(W,Z){return xe;function xe(Te){c.call(this,W(Te),Te),Z&&Z.call(this,Te)}}function l(){this.stack.push({type:"fragment",children:[]})}function c(W,Z,xe){this.stack[this.stack.length-1].children.push(W),this.stack.push(W),this.tokenStack.push([Z,xe||void 0]),W.position={start:sr(Z.start),end:void 0}}function f(W){return Z;function Z(xe){W&&W.call(this,xe),h.call(this,xe)}}function h(W,Z){const xe=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==W.type&&(Z?Z.call(this,W,Te[0]):(Te[1]||hy).call(this,W,Te[0]));else throw new Error("Cannot close `"+W.type+"` ("+Fo({start:W.start,end:W.end})+"): it’s not open");xe.position.end=sr(W.end)}function p(){return cf(this.stack.pop())}function m(){this.data.expectingFirstListItemValue=!0}function x(W){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(W),10),this.data.expectingFirstListItemValue=void 0}}function v(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=W}function b(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=W}function T(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function E(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.value=W.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function S(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.value=W.replace(/(\r?\n|\r)$/g,"")}function _(W){const Z=this.resume(),xe=this.stack[this.stack.length-1];xe.label=Z,xe.identifier=ot(this.sliceSerialize(W)).toLowerCase()}function j(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.title=W}function V(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.url=W}function B(W){const Z=this.stack[this.stack.length-1];if(!Z.depth){const xe=this.sliceSerialize(W).length;Z.depth=xe}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function X(W){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(W).codePointAt(0)===61?1:2}function U(){this.data.setextHeadingSlurpLineEnding=void 0}function re(W){const xe=this.stack[this.stack.length-1].children;let Te=xe[xe.length-1];(!Te||Te.type!=="text")&&(Te=aa(),Te.position={start:sr(W.start),end:void 0},xe.push(Te)),this.stack.push(Te)}function O(W){const Z=this.stack.pop();Z.value+=this.sliceSerialize(W),Z.position.end=sr(W.end)}function ee(W){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const xe=Z.children[Z.children.length-1];xe.position.end=sr(W.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(Z.type)&&(re.call(this,W),O.call(this,W))}function ne(){this.data.atHardBreak=!0}function ye(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.value=W}function ie(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.value=W}function J(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.value=W}function be(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=Z,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function ce(){const W=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";W.type+="Reference",W.referenceType=Z,delete W.url,delete W.title}else delete W.identifier,delete W.label;this.data.referenceType=void 0}function K(W){const Z=this.sliceSerialize(W),xe=this.stack[this.stack.length-2];xe.label=UI(Z),xe.identifier=ot(Z).toLowerCase()}function se(){const W=this.stack[this.stack.length-1],Z=this.resume(),xe=this.stack[this.stack.length-1];if(this.data.inReference=!0,xe.type==="link"){const Te=W.children;xe.children=Te}else xe.alt=Z}function C(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.url=W}function D(){const W=this.resume(),Z=this.stack[this.stack.length-1];Z.title=W}function $(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function ge(W){const Z=this.resume(),xe=this.stack[this.stack.length-1];xe.label=Z,xe.identifier=ot(this.sliceSerialize(W)).toLowerCase(),this.data.referenceType="full"}function ke(W){this.data.characterReferenceType=W.type}function pe(W){const Z=this.sliceSerialize(W),xe=this.data.characterReferenceType;let Te;xe?(Te=Cv(Z,xe==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=df(Z);const Ae=this.stack[this.stack.length-1];Ae.value+=Te}function Ie(W){const Z=this.stack.pop();Z.position.end=sr(W.end)}function Se(W){O.call(this,W);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(W)}function Ne(W){O.call(this,W);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(W)}function Xe(){return{type:"blockquote",children:[]}}function wt(){return{type:"code",lang:null,meta:null,value:""}}function ra(){return{type:"inlineCode",value:""}}function Br(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ni(){return{type:"emphasis",children:[]}}function Mi(){return{type:"heading",depth:0,children:[]}}function Di(){return{type:"break"}}function Vr(){return{type:"html",value:""}}function ia(){return{type:"image",title:null,url:"",alt:null}}function Wr(){return{type:"link",title:null,url:"",children:[]}}function Ft(W){return{type:"list",ordered:W.type==="listOrdered",start:null,spread:W._spread,children:[]}}function zt(W){return{type:"listItem",spread:W._spread,checked:null,children:[]}}function Li(){return{type:"paragraph",children:[]}}function oa(){return{type:"strong",children:[]}}function aa(){return{type:"text",value:""}}function sa(){return{type:"thematicBreak"}}}function sr(e){return{line:e.line,column:e.column,offset:e.offset}}function Lv(e,n){let t=-1;for(;++t<n.length;){const o=n[t];Array.isArray(o)?Lv(e,o):GI(e,o)}}function GI(e,n){let t;for(t in n)if(Dv.call(n,t))switch(t){case"canContainEols":{const o=n[t];o&&e[t].push(...o);break}case"transforms":{const o=n[t];o&&e[t].push(...o);break}case"enter":case"exit":{const o=n[t];o&&Object.assign(e[t],o);break}}}function hy(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Fo({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Fo({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Fo({start:n.start,end:n.end})+") is still open")}function KI(e){const n=this;n.parser=t;function t(o){return HI(o,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function YI(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function JI(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function XI(e,n){const t=n.value?n.value+`
`:"",o={},a=n.lang?n.lang.split(/\s+/):[];a.length>0&&(o.className=["language-"+a[0]]);let u={type:"element",tagName:"code",properties:o,children:[{type:"text",value:t}]};return n.meta&&(u.data={meta:n.meta}),e.patch(n,u),u=e.applyData(n,u),u={type:"element",tagName:"pre",properties:{},children:[u]},e.patch(n,u),u}function QI(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ZI(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function e_(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",o=String(n.identifier).toUpperCase(),a=_i(o.toLowerCase()),u=e.footnoteOrder.indexOf(o);let l,c=e.footnoteCounts.get(o);c===void 0?(c=0,e.footnoteOrder.push(o),l=e.footnoteOrder.length):l=u+1,c+=1,e.footnoteCounts.set(o,c);const f={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+a,id:t+"fnref-"+a+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(n,f);const h={type:"element",tagName:"sup",properties:{},children:[f]};return e.patch(n,h),e.applyData(n,h)}function n_(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function t_(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Ov(e,n){const t=n.referenceType;let o="]";if(t==="collapsed"?o+="[]":t==="full"&&(o+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+o}];const a=e.all(n),u=a[0];u&&u.type==="text"?u.value="["+u.value:a.unshift({type:"text",value:"["});const l=a[a.length-1];return l&&l.type==="text"?l.value+=o:a.push({type:"text",value:o}),a}function r_(e,n){const t=String(n.identifier).toUpperCase(),o=e.definitionById.get(t);if(!o)return Ov(e,n);const a={src:_i(o.url||""),alt:n.alt};o.title!==null&&o.title!==void 0&&(a.title=o.title);const u={type:"element",tagName:"img",properties:a,children:[]};return e.patch(n,u),e.applyData(n,u)}function i_(e,n){const t={src:_i(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const o={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,o),e.applyData(n,o)}function o_(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const o={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,o),e.applyData(n,o)}function a_(e,n){const t=String(n.identifier).toUpperCase(),o=e.definitionById.get(t);if(!o)return Ov(e,n);const a={href:_i(o.url||"")};o.title!==null&&o.title!==void 0&&(a.title=o.title);const u={type:"element",tagName:"a",properties:a,children:e.all(n)};return e.patch(n,u),e.applyData(n,u)}function s_(e,n){const t={href:_i(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const o={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function l_(e,n,t){const o=e.all(n),a=t?u_(t):Fv(n),u={},l=[];if(typeof n.checked=="boolean"){const p=o[0];let m;p&&p.type==="element"&&p.tagName==="p"?m=p:(m={type:"element",tagName:"p",properties:{},children:[]},o.unshift(m)),m.children.length>0&&m.children.unshift({type:"text",value:" "}),m.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let c=-1;for(;++c<o.length;){const p=o[c];(a||c!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!a?l.push(...p.children):l.push(p)}const f=o[o.length-1];f&&(a||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`});const h={type:"element",tagName:"li",properties:u,children:l};return e.patch(n,h),e.applyData(n,h)}function u_(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let o=-1;for(;!n&&++o<t.length;)n=Fv(t[o])}return n}function Fv(e){const n=e.spread;return n??e.children.length>1}function c_(e,n){const t={},o=e.all(n);let a=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++a<o.length;){const l=o[a];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const u={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(o,!0)};return e.patch(n,u),e.applyData(n,u)}function d_(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function f_(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function h_(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function p_(e,n){const t=e.all(n),o=t.shift(),a=[];if(o){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([o],!0)};e.patch(n.children[0],l),a.push(l)}if(t.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},c=af(n.children[1]),f=yv(n.children[n.children.length-1]);c&&f&&(l.position={start:c,end:f}),a.push(l)}const u={type:"element",tagName:"table",properties:{},children:e.wrap(a,!0)};return e.patch(n,u),e.applyData(n,u)}function m_(e,n,t){const o=t?t.children:void 0,u=(o?o.indexOf(n):1)===0?"th":"td",l=t&&t.type==="table"?t.align:void 0,c=l?l.length:n.children.length;let f=-1;const h=[];for(;++f<c;){const m=n.children[f],x={},v=l?l[f]:void 0;v&&(x.align=v);let b={type:"element",tagName:u,properties:x,children:[]};m&&(b.children=e.all(m),e.patch(m,b),b=e.applyData(m,b)),h.push(b)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(h,!0)};return e.patch(n,p),e.applyData(n,p)}function g_(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const py=9,my=32;function y_(e){const n=String(e),t=/\r?\n|\r/g;let o=t.exec(n),a=0;const u=[];for(;o;)u.push(gy(n.slice(a,o.index),a>0,!0),o[0]),a=o.index+o[0].length,o=t.exec(n);return u.push(gy(n.slice(a),a>0,!1)),u.join("")}function gy(e,n,t){let o=0,a=e.length;if(n){let u=e.codePointAt(o);for(;u===py||u===my;)o++,u=e.codePointAt(o)}if(t){let u=e.codePointAt(a-1);for(;u===py||u===my;)a--,u=e.codePointAt(a-1)}return a>o?e.slice(o,a):""}function x_(e,n){const t={type:"text",value:y_(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function v_(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const w_={blockquote:YI,break:JI,code:XI,delete:QI,emphasis:ZI,footnoteReference:e_,heading:n_,html:t_,imageReference:r_,image:i_,inlineCode:o_,linkReference:a_,link:s_,listItem:l_,list:c_,paragraph:d_,root:f_,strong:h_,table:p_,tableCell:g_,tableRow:m_,text:x_,thematicBreak:v_,toml:bs,yaml:bs,definition:bs,footnoteDefinition:bs};function bs(){}const zv=-1,il=0,Bo=1,Ws=2,hf=3,pf=4,mf=5,gf=6,Bv=7,Vv=8,{defineProperty:b_}=Object,Wv=typeof self=="object"?self:globalThis,yy=(e,n)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Wv[e](n)},k_=(e,n)=>{const t=(a,u)=>(e.set(u,a),a),o=a=>{if(e.has(a))return e.get(a);const[u,l]=n[a];switch(u){case il:case zv:return t(l,a);case Bo:{const c=t([],a);for(const f of l)c.push(o(f));return c}case Ws:{const c=t({},a);for(const[f,h]of l){const p=o(f),m=o(h);p==="__proto__"?b_(c,p,{value:m,configurable:!0,enumerable:!0,writable:!0}):c[p]=m}return c}case hf:return t(new Date(l),a);case pf:{const{source:c,flags:f}=l;return t(new RegExp(c,f),a)}case mf:{const c=t(new Map,a);for(const[f,h]of l)c.set(o(f),o(h));return c}case gf:{const c=t(new Set,a);for(const f of l)c.add(o(f));return c}case Bv:{const{name:c,message:f}=l;return t(typeof Wv[c]=="function"?yy(c,f):new Error(f),a)}case Vv:return t(BigInt(l),a);case"BigInt":return t(Object(BigInt(l)),a);case"ArrayBuffer":return t(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:c}=new Uint8Array(l);return t(new DataView(c),l)}case"-0":return-0}return t(yy(u,l),a)};return o},xy=e=>k_(new Map,e)(0),_r="",{toString:S_}={},{keys:T_,is:C_}=Object,Ro=e=>{const n=typeof e;if(n!=="object"||!e)return[il,n];const t=S_.call(e).slice(8,-1);switch(t){case"Array":return[Bo,_r];case"Object":return[Ws,_r];case"Date":return[hf,_r];case"RegExp":return[pf,_r];case"Map":return[mf,_r];case"Set":return[gf,_r];case"DataView":return[Bo,t]}return t.includes("Array")?[Bo,t]:e instanceof Error?[Bv,e.name||"Error"]:[Ws,t]},ks=([e,n])=>e===il&&(n==="function"||n==="symbol"),E_=(e,n,t,o)=>{const a=(l,c)=>{const f=o.push(l)-1;return t.set(c,f),f},u=l=>{if(t.has(l))return t.get(l);let[c,f]=Ro(l);switch(c){case il:{let p=l;switch(f){case"bigint":c=Vv,p=l.toString();break;case"number":if(!l&&C_(l,-0))return o.push(["-0"])-1;break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);p=null;break;case"undefined":return a([zv],l)}return a([c,p],l)}case Bo:{if(f){let x=l;return f==="DataView"?x=new Uint8Array(l.buffer):f==="ArrayBuffer"&&(x=new Uint8Array(l)),a([f,[...x]],l)}const p=[],m=a([c,p],l);for(const x of l)p.push(u(x));return m}case Ws:{if(f)switch(f){case"BigInt":return a([f,l.toString()],l);case"Boolean":case"Number":case"String":return a([f,l.valueOf()],l)}if(n&&"toJSON"in l)return u(l.toJSON());const p=[],m=a([c,p],l);for(const x of T_(l))(e||!ks(Ro(l[x])))&&p.push([u(x),u(l[x])]);return m}case hf:return a([c,isNaN(l.getTime())?_r:l.toISOString()],l);case pf:{const{source:p,flags:m}=l;return a([c,{source:p,flags:m}],l)}case mf:{const p=[],m=a([c,p],l);for(const[x,v]of l)(e||!(ks(Ro(x))||ks(Ro(v))))&&p.push([u(x),u(v)]);return m}case gf:{const p=[],m=a([c,p],l);for(const x of l)(e||!ks(Ro(x)))&&p.push(u(x));return m}}const{message:h}=l;return a([c,{name:f,message:h}],l)};return u},vy=(e,{json:n,lossy:t}={})=>{const o=[];return E_(!(n||t),!!n,new Map,o)(e),o},Us=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?xy(vy(e,n)):structuredClone(e):(e,n)=>xy(vy(e,n));function P_(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function R_(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function A_(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||P_,o=e.options.footnoteBackLabel||R_,a=e.options.footnoteLabel||"Footnotes",u=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let f=-1;for(;++f<e.footnoteOrder.length;){const h=e.footnoteById.get(e.footnoteOrder[f]);if(!h)continue;const p=e.all(h),m=String(h.identifier).toUpperCase(),x=_i(m.toLowerCase());let v=0;const b=[],T=e.footnoteCounts.get(m);for(;T!==void 0&&++v<=T;){b.length>0&&b.push({type:"text",value:" "});let _=typeof t=="string"?t:t(f,v);typeof _=="string"&&(_={type:"text",value:_}),b.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+x+(v>1?"-"+v:""),dataFootnoteBackref:"",ariaLabel:typeof o=="string"?o:o(f,v),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const E=p[p.length-1];if(E&&E.type==="element"&&E.tagName==="p"){const _=E.children[E.children.length-1];_&&_.type==="text"?_.value+=" ":E.children.push({type:"text",value:" "}),E.children.push(...b)}else p.push(...b);const S={type:"element",tagName:"li",properties:{id:n+"fn-"+x},children:e.wrap(p,!0)};e.patch(h,S),c.push(S)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...Us(l),id:"footnote-label"},children:[{type:"text",value:a}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(c,!0)},{type:"text",value:`
`}]}}const ol=(function(e){if(e==null)return N_;if(typeof e=="function")return al(e);if(typeof e=="object")return Array.isArray(e)?j_(e):I_(e);if(typeof e=="string")return __(e);throw new Error("Expected function, string, or object as test")});function j_(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=ol(e[t]);return al(o);function o(...a){let u=-1;for(;++u<n.length;)if(n[u].apply(this,a))return!0;return!1}}function I_(e){const n=e;return al(t);function t(o){const a=o;let u;for(u in e)if(a[u]!==n[u])return!1;return!0}}function __(e){return al(n);function n(t){return t&&t.type===e}}function al(e){return n;function n(t,o,a){return!!(M_(t)&&e.call(this,t,typeof o=="number"?o:void 0,a||void 0))}}function N_(){return!0}function M_(e){return e!==null&&typeof e=="object"&&"type"in e}const Uv=[],D_=!0,ld=!1,L_="skip";function $v(e,n,t,o){let a;typeof n=="function"&&typeof t!="function"?(o=t,t=n):a=n;const u=ol(a),l=o?-1:1;c(e,void 0,[])();function c(f,h,p){const m=f&&typeof f=="object"?f:{};if(typeof m.type=="string"){const v=typeof m.tagName=="string"?m.tagName:typeof m.name=="string"?m.name:void 0;Object.defineProperty(x,"name",{value:"node ("+(f.type+(v?"<"+v+">":""))+")"})}return x;function x(){let v=Uv,b,T,E;if((!n||u(f,h,p[p.length-1]||void 0))&&(v=O_(t(f,p)),v[0]===ld))return v;if("children"in f&&f.children){const S=f;if(S.children&&v[0]!==L_)for(T=(o?S.children.length:-1)+l,E=p.concat(S);T>-1&&T<S.children.length;){const _=S.children[T];if(b=c(_,T,E)(),b[0]===ld)return b;T=typeof b[1]=="number"?b[1]:T+l}}return v}}}function O_(e){return Array.isArray(e)?e:typeof e=="number"?[D_,e]:e==null?Uv:[e]}function yf(e,n,t,o){let a,u,l;typeof n=="function"&&typeof t!="function"?(u=void 0,l=n,a=t):(u=n,l=t,a=o),$v(e,u,c,a);function c(f,h){const p=h[h.length-1],m=p?p.children.indexOf(f):void 0;return l(f,m,p)}}const ud={}.hasOwnProperty,F_={};function z_(e,n){const t=n||F_,o=new Map,a=new Map,u=new Map,l={...w_,...t.handlers},c={all:h,applyData:V_,definitionById:o,footnoteById:a,footnoteCounts:u,footnoteOrder:[],handlers:l,one:f,options:t,patch:B_,wrap:U_};return yf(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const m=p.type==="definition"?o:a,x=String(p.identifier).toUpperCase();m.has(x)||m.set(x,p)}}),c;function f(p,m){const x=p.type,v=c.handlers[x];if(ud.call(c.handlers,x)&&v)return v(c,p,m);if(c.options.passThrough&&c.options.passThrough.includes(x)){if("children"in p){const{children:T,...E}=p,S=Us(E);return S.children=c.all(p),S}return Us(p)}return(c.options.unknownHandler||W_)(c,p,m)}function h(p){const m=[];if("children"in p){const x=p.children;let v=-1;for(;++v<x.length;){const b=c.one(x[v],p);if(b){if(v&&x[v-1].type==="break"&&(!Array.isArray(b)&&b.type==="text"&&(b.value=wy(b.value)),!Array.isArray(b)&&b.type==="element")){const T=b.children[0];T&&T.type==="text"&&(T.value=wy(T.value))}Array.isArray(b)?m.push(...b):m.push(b)}}}return m}}function B_(e,n){e.position&&(n.position=Ej(e))}function V_(e,n){let t=n;if(e&&e.data){const o=e.data.hName,a=e.data.hChildren,u=e.data.hProperties;if(typeof o=="string")if(t.type==="element")t.tagName=o;else{const l="children"in t?t.children:[t];t={type:"element",tagName:o,properties:{},children:l}}t.type==="element"&&u&&Object.assign(t.properties,Us(u)),"children"in t&&t.children&&a!==null&&a!==void 0&&(t.children=a)}return t}function W_(e,n){const t=n.data||{},o="value"in n&&!(ud.call(t,"hProperties")||ud.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function U_(e,n){const t=[];let o=-1;for(n&&t.push({type:"text",value:`
`});++o<e.length;)o&&t.push({type:"text",value:`
`}),t.push(e[o]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function wy(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function by(e,n){const t=z_(e,n),o=t.one(e,void 0),a=A_(t),u=Array.isArray(o)?{type:"root",children:o}:o||{type:"root",children:[]};return a&&u.children.push({type:"text",value:`
`},a),u}function $_(e,n){return e&&"run"in e?async function(t,o){const a=by(t,{file:o,...n});await e.run(a,o)}:function(t,o){return by(t,{file:o,...e||n})}}function ky(e){if(e)throw e}var Sc,Sy;function H_(){if(Sy)return Sc;Sy=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=function(h){return typeof Array.isArray=="function"?Array.isArray(h):n.call(h)==="[object Array]"},u=function(h){if(!h||n.call(h)!=="[object Object]")return!1;var p=e.call(h,"constructor"),m=h.constructor&&h.constructor.prototype&&e.call(h.constructor.prototype,"isPrototypeOf");if(h.constructor&&!p&&!m)return!1;var x;for(x in h);return typeof x>"u"||e.call(h,x)},l=function(h,p){t&&p.name==="__proto__"?t(h,p.name,{enumerable:!0,configurable:!0,value:p.newValue,writable:!0}):h[p.name]=p.newValue},c=function(h,p){if(p==="__proto__")if(e.call(h,p)){if(o)return o(h,p).value}else return;return h[p]};return Sc=function f(){var h,p,m,x,v,b,T=arguments[0],E=1,S=arguments.length,_=!1;for(typeof T=="boolean"&&(_=T,T=arguments[1]||{},E=2),(T==null||typeof T!="object"&&typeof T!="function")&&(T={});E<S;++E)if(h=arguments[E],h!=null)for(p in h)m=c(T,p),x=c(h,p),T!==x&&(_&&x&&(u(x)||(v=a(x)))?(v?(v=!1,b=m&&a(m)?m:[]):b=m&&u(m)?m:{},l(T,{name:p,newValue:f(_,b,x)})):typeof x<"u"&&l(T,{name:p,newValue:x}));return T},Sc}var q_=H_();const Tc=Hs(q_);function cd(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function G_(){const e=[],n={run:t,use:o};return n;function t(...a){let u=-1;const l=a.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);c(null,...a);function c(f,...h){const p=e[++u];let m=-1;if(f){l(f);return}for(;++m<a.length;)(h[m]===null||h[m]===void 0)&&(h[m]=a[m]);a=h,p?K_(p,c)(...h):l(null,...h)}}function o(a){if(typeof a!="function")throw new TypeError("Expected `middelware` to be a function, not "+a);return e.push(a),n}}function K_(e,n){let t;return o;function o(...l){const c=e.length>l.length;let f;c&&l.push(a);try{f=e.apply(this,l)}catch(h){const p=h;if(c&&t)throw p;return a(p)}c||(f&&f.then&&typeof f.then=="function"?f.then(u,a):f instanceof Error?a(f):u(f))}function a(l,...c){t||(t=!0,n(l,...c))}function u(l){a(null,l)}}const ht={basename:Y_,dirname:J_,extname:X_,join:Q_,sep:"/"};function Y_(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');ta(e);let t=0,o=-1,a=e.length,u;if(n===void 0||n.length===0||n.length>e.length){for(;a--;)if(e.codePointAt(a)===47){if(u){t=a+1;break}}else o<0&&(u=!0,o=a+1);return o<0?"":e.slice(t,o)}if(n===e)return"";let l=-1,c=n.length-1;for(;a--;)if(e.codePointAt(a)===47){if(u){t=a+1;break}}else l<0&&(u=!0,l=a+1),c>-1&&(e.codePointAt(a)===n.codePointAt(c--)?c<0&&(o=a):(c=-1,o=l));return t===o?o=l:o<0&&(o=e.length),e.slice(t,o)}function J_(e){if(ta(e),e.length===0)return".";let n=-1,t=e.length,o;for(;--t;)if(e.codePointAt(t)===47){if(o){n=t;break}}else o||(o=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function X_(e){ta(e);let n=e.length,t=-1,o=0,a=-1,u=0,l;for(;n--;){const c=e.codePointAt(n);if(c===47){if(l){o=n+1;break}continue}t<0&&(l=!0,t=n+1),c===46?a<0?a=n:u!==1&&(u=1):a>-1&&(u=-1)}return a<0||t<0||u===0||u===1&&a===t-1&&a===o+1?"":e.slice(a,t)}function Q_(...e){let n=-1,t;for(;++n<e.length;)ta(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Z_(t)}function Z_(e){ta(e);const n=e.codePointAt(0)===47;let t=eN(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function eN(e,n){let t="",o=0,a=-1,u=0,l=-1,c,f;for(;++l<=e.length;){if(l<e.length)c=e.codePointAt(l);else{if(c===47)break;c=47}if(c===47){if(!(a===l-1||u===1))if(a!==l-1&&u===2){if(t.length<2||o!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(f=t.lastIndexOf("/"),f!==t.length-1){f<0?(t="",o=0):(t=t.slice(0,f),o=t.length-1-t.lastIndexOf("/")),a=l,u=0;continue}}else if(t.length>0){t="",o=0,a=l,u=0;continue}}n&&(t=t.length>0?t+"/..":"..",o=2)}else t.length>0?t+="/"+e.slice(a+1,l):t=e.slice(a+1,l),o=l-a-1;a=l,u=0}else c===46&&u>-1?u++:u=-1}return t}function ta(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const nN={cwd:tN};function tN(){return"/"}function dd(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function rN(e){if(typeof e=="string")e=new URL(e);else if(!dd(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return iN(e)}function iN(e){if(e.hostname!==""){const o=new TypeError('File URL host must be "localhost" or empty on darwin');throw o.code="ERR_INVALID_FILE_URL_HOST",o}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const o=n.codePointAt(t+2);if(o===70||o===102){const a=new TypeError("File URL path must not include encoded / characters");throw a.code="ERR_INVALID_FILE_URL_PATH",a}}return decodeURIComponent(n)}const Cc=["history","path","basename","stem","extname","dirname"];class Hv{constructor(n){let t;n?dd(n)?t={path:n}:typeof n=="string"||oN(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":nN.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let o=-1;for(;++o<Cc.length;){const u=Cc[o];u in t&&t[u]!==void 0&&t[u]!==null&&(this[u]=u==="history"?[...t[u]]:t[u])}let a;for(a in t)Cc.includes(a)||(this[a]=t[a])}get basename(){return typeof this.path=="string"?ht.basename(this.path):void 0}set basename(n){Pc(n,"basename"),Ec(n,"basename"),this.path=ht.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?ht.dirname(this.path):void 0}set dirname(n){Ty(this.basename,"dirname"),this.path=ht.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?ht.extname(this.path):void 0}set extname(n){if(Ec(n,"extname"),Ty(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ht.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){dd(n)&&(n=rN(n)),Pc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?ht.basename(this.path,this.extname):void 0}set stem(n){Pc(n,"stem"),Ec(n,"stem"),this.path=ht.join(this.dirname||"",n+(this.extname||""))}fail(n,t,o){const a=this.message(n,t,o);throw a.fatal=!0,a}info(n,t,o){const a=this.message(n,t,o);return a.fatal=void 0,a}message(n,t,o){const a=new xn(n,t,o);return this.path&&(a.name=this.path+":"+a.name,a.file=this.path),a.fatal=!1,this.messages.push(a),a}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Ec(e,n){if(e&&e.includes(ht.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+ht.sep+"`")}function Pc(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function Ty(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function oN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const aN=(function(e){const o=this.constructor.prototype,a=o[e],u=function(){return a.apply(u,arguments)};return Object.setPrototypeOf(u,o),u}),sN={}.hasOwnProperty;class xf extends aN{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=G_()}copy(){const n=new xf;let t=-1;for(;++t<this.attachers.length;){const o=this.attachers[t];n.use(...o)}return n.data(Tc(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(jc("data",this.frozen),this.namespace[n]=t,this):sN.call(this.namespace,n)&&this.namespace[n]||void 0:n?(jc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...o]=this.attachers[this.freezeIndex];if(o[0]===!1)continue;o[0]===!0&&(o[0]=void 0);const a=t.call(n,...o);typeof a=="function"&&this.transformers.use(a)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ss(n),o=this.parser||this.Parser;return Rc("parse",o),o(String(t),t)}process(n,t){const o=this;return this.freeze(),Rc("process",this.parser||this.Parser),Ac("process",this.compiler||this.Compiler),t?a(void 0,t):new Promise(a);function a(u,l){const c=Ss(n),f=o.parse(c);o.run(f,c,function(p,m,x){if(p||!m||!x)return h(p);const v=m,b=o.stringify(v,x);cN(b)?x.value=b:x.result=b,h(p,x)});function h(p,m){p||!m?l(p):u?u(m):t(void 0,m)}}}processSync(n){let t=!1,o;return this.freeze(),Rc("processSync",this.parser||this.Parser),Ac("processSync",this.compiler||this.Compiler),this.process(n,a),Ey("processSync","process",t),o;function a(u,l){t=!0,ky(u),o=l}}run(n,t,o){Cy(n),this.freeze();const a=this.transformers;return!o&&typeof t=="function"&&(o=t,t=void 0),o?u(void 0,o):new Promise(u);function u(l,c){const f=Ss(t);a.run(n,f,h);function h(p,m,x){const v=m||n;p?c(p):l?l(v):o(void 0,v,x)}}}runSync(n,t){let o=!1,a;return this.run(n,t,u),Ey("runSync","run",o),a;function u(l,c){ky(l),a=c,o=!0}}stringify(n,t){this.freeze();const o=Ss(t),a=this.compiler||this.Compiler;return Ac("stringify",a),Cy(n),a(n,o)}use(n,...t){const o=this.attachers,a=this.namespace;if(jc("use",this.frozen),n!=null)if(typeof n=="function")f(n,t);else if(typeof n=="object")Array.isArray(n)?c(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function u(h){if(typeof h=="function")f(h,[]);else if(typeof h=="object")if(Array.isArray(h)){const[p,...m]=h;f(p,m)}else l(h);else throw new TypeError("Expected usable value, not `"+h+"`")}function l(h){if(!("plugins"in h)&&!("settings"in h))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(h.plugins),h.settings&&(a.settings=Tc(!0,a.settings,h.settings))}function c(h){let p=-1;if(h!=null)if(Array.isArray(h))for(;++p<h.length;){const m=h[p];u(m)}else throw new TypeError("Expected a list of plugins, not `"+h+"`")}function f(h,p){let m=-1,x=-1;for(;++m<o.length;)if(o[m][0]===h){x=m;break}if(x===-1)o.push([h,...p]);else if(p.length>0){let[v,...b]=p;const T=o[x][1];cd(T)&&cd(v)&&(v=Tc(!0,T,v)),o[x]=[h,v,...b]}}}}const lN=new xf().freeze();function Rc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ac(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function jc(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Cy(e){if(!cd(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Ey(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ss(e){return uN(e)?e:new Hv(e)}function uN(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function cN(e){return typeof e=="string"||dN(e)}function dN(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const fN="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Py=[],Ry={allowDangerousHtml:!0},hN=/^(https?|ircs?|mailto|xmpp)$/i,pN=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function mN(e){const n=gN(e),t=yN(e);return xN(n.runSync(n.parse(t),t),e)}function gN(e){const n=e.rehypePlugins||Py,t=e.remarkPlugins||Py,o=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Ry}:Ry;return lN().use(KI).use(t).use($_,o).use(n)}function yN(e){const n=e.children||"",t=new Hv;return typeof n=="string"&&(t.value=n),t}function xN(e,n){const t=n.allowedElements,o=n.allowElement,a=n.components,u=n.disallowedElements,l=n.skipHtml,c=n.unwrapDisallowed,f=n.urlTransform||vN;for(const p of pN)Object.hasOwn(n,p.from)&&(""+p.from+(p.to?"use `"+p.to+"` instead":"remove it")+fN+p.id,void 0);return yf(e,h),Ij(e,{Fragment:k.Fragment,components:a,ignoreInvalidStyle:!0,jsx:k.jsx,jsxs:k.jsxs,passKeys:!0,passNode:!0});function h(p,m,x){if(p.type==="raw"&&x&&typeof m=="number")return l?x.children.splice(m,1):x.children[m]={type:"text",value:p.value},m;if(p.type==="element"){let v;for(v in wc)if(Object.hasOwn(wc,v)&&Object.hasOwn(p.properties,v)){const b=p.properties[v],T=wc[v];(T===null||T.includes(p.tagName))&&(p.properties[v]=f(String(b||""),v,p))}}if(p.type==="element"){let v=t?!t.includes(p.tagName):u?u.includes(p.tagName):!1;if(!v&&o&&typeof m=="number"&&(v=!o(p,m,x)),v&&x&&typeof m=="number")return c&&p.children?x.children.splice(m,1,...p.children):x.children.splice(m,1),m}}}function vN(e){const n=e.indexOf(":"),t=e.indexOf("?"),o=e.indexOf("#"),a=e.indexOf("/");return n===-1||a!==-1&&n>a||t!==-1&&n>t||o!==-1&&n>o||hN.test(e.slice(0,n))?e:""}function Ay(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let o=0,a=t.indexOf(n);for(;a!==-1;)o++,a=t.indexOf(n,a+n.length);return o}function wN(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function bN(e,n,t){const a=ol((t||{}).ignore||[]),u=kN(n);let l=-1;for(;++l<u.length;)$v(e,"text",c);function c(h,p){let m=-1,x;for(;++m<p.length;){const v=p[m],b=x?x.children:void 0;if(a(v,b?b.indexOf(v):void 0,x))return;x=v}if(x)return f(h,p)}function f(h,p){const m=p[p.length-1],x=u[l][0],v=u[l][1];let b=0;const E=m.children.indexOf(h);let S=!1,_=[];x.lastIndex=0;let j=x.exec(h.value);for(;j;){const V=j.index,B={index:j.index,input:j.input,stack:[...p,h]};let M=v(...j,B);if(typeof M=="string"&&(M=M.length>0?{type:"text",value:M}:void 0),M===!1?x.lastIndex=V+1:(b!==V&&_.push({type:"text",value:h.value.slice(b,V)}),Array.isArray(M)?_.push(...M):M&&_.push(M),b=V+j[0].length,S=!0),!x.global)break;j=x.exec(h.value)}return S?(b<h.value.length&&_.push({type:"text",value:h.value.slice(b)}),m.children.splice(E,1,..._)):_=[h],E+_.length}}function kN(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let o=-1;for(;++o<t.length;){const a=t[o];n.push([SN(a[0]),TN(a[1])])}return n}function SN(e){return typeof e=="string"?new RegExp(wN(e),"g"):e}function TN(e){return typeof e=="function"?e:function(){return e}}const Ic="phrasing",_c=["autolink","link","image","label"];function CN(){return{transforms:[_N],enter:{literalAutolink:PN,literalAutolinkEmail:Nc,literalAutolinkHttp:Nc,literalAutolinkWww:Nc},exit:{literalAutolink:IN,literalAutolinkEmail:jN,literalAutolinkHttp:RN,literalAutolinkWww:AN}}}function EN(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Ic,notInConstruct:_c},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Ic,notInConstruct:_c},{character:":",before:"[ps]",after:"\\/",inConstruct:Ic,notInConstruct:_c}]}}function PN(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Nc(e){this.config.enter.autolinkProtocol.call(this,e)}function RN(e){this.config.exit.autolinkProtocol.call(this,e)}function AN(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function jN(e){this.config.exit.autolinkEmail.call(this,e)}function IN(e){this.exit(e)}function _N(e){bN(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,NN],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),MN]],{ignore:["link","linkReference"]})}function NN(e,n,t,o,a){let u="";if(!qv(a)||(/^w/i.test(n)&&(t=n+t,n="",u="http://"),!DN(t)))return!1;const l=LN(t+o);if(!l[0])return!1;const c={type:"link",title:null,url:u+n+l[0],children:[{type:"text",value:n+l[0]}]};return l[1]?[c,{type:"text",value:l[1]}]:c}function MN(e,n,t,o){return!qv(o,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function DN(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function LN(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],o=t.indexOf(")");const a=Ay(e,"(");let u=Ay(e,")");for(;o!==-1&&a>u;)e+=t.slice(0,o+1),t=t.slice(o+1),o=t.indexOf(")"),u++;return[e,t]}function qv(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||Lr(t)||tl(t))&&(!n||t!==47)}Gv.peek=HN;function ON(){this.buffer()}function FN(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function zN(){this.buffer()}function BN(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function VN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=ot(this.sliceSerialize(e)).toLowerCase(),t.label=n}function WN(e){this.exit(e)}function UN(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=ot(this.sliceSerialize(e)).toLowerCase(),t.label=n}function $N(e){this.exit(e)}function HN(){return"["}function Gv(e,n,t,o){const a=t.createTracker(o);let u=a.move("[^");const l=t.enter("footnoteReference"),c=t.enter("reference");return u+=a.move(t.safe(t.associationId(e),{after:"]",before:u})),c(),l(),u+=a.move("]"),u}function qN(){return{enter:{gfmFootnoteCallString:ON,gfmFootnoteCall:FN,gfmFootnoteDefinitionLabelString:zN,gfmFootnoteDefinition:BN},exit:{gfmFootnoteCallString:VN,gfmFootnoteCall:WN,gfmFootnoteDefinitionLabelString:UN,gfmFootnoteDefinition:$N}}}function GN(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:Gv},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(o,a,u,l){const c=u.createTracker(l);let f=c.move("[^");const h=u.enter("footnoteDefinition"),p=u.enter("label");return f+=c.move(u.safe(u.associationId(o),{before:f,after:"]"})),p(),f+=c.move("]:"),o.children&&o.children.length>0&&(c.shift(4),f+=c.move((n?`
`:" ")+u.indentLines(u.containerFlow(o,c.current()),n?Kv:KN))),h(),f}}function KN(e,n,t){return n===0?e:Kv(e,n,t)}function Kv(e,n,t){return(t?"":"    ")+e}const YN=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Yv.peek=eM;function JN(){return{canContainEols:["delete"],enter:{strikethrough:QN},exit:{strikethrough:ZN}}}function XN(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:YN}],handlers:{delete:Yv}}}function QN(e){this.enter({type:"delete",children:[]},e)}function ZN(e){this.exit(e)}function Yv(e,n,t,o){const a=t.createTracker(o),u=t.enter("strikethrough");let l=a.move("~~");return l+=t.containerPhrasing(e,{...a.current(),before:l,after:"~"}),l+=a.move("~~"),u(),l}function eM(){return"~"}function nM(e){return e.length}function tM(e,n){const t=n||{},o=(t.align||[]).concat(),a=t.stringLength||nM,u=[],l=[],c=[],f=[];let h=0,p=-1;for(;++p<e.length;){const T=[],E=[];let S=-1;for(e[p].length>h&&(h=e[p].length);++S<e[p].length;){const _=rM(e[p][S]);if(t.alignDelimiters!==!1){const j=a(_);E[S]=j,(f[S]===void 0||j>f[S])&&(f[S]=j)}T.push(_)}l[p]=T,c[p]=E}let m=-1;if(typeof o=="object"&&"length"in o)for(;++m<h;)u[m]=jy(o[m]);else{const T=jy(o);for(;++m<h;)u[m]=T}m=-1;const x=[],v=[];for(;++m<h;){const T=u[m];let E="",S="";T===99?(E=":",S=":"):T===108?E=":":T===114&&(S=":");let _=t.alignDelimiters===!1?1:Math.max(1,f[m]-E.length-S.length);const j=E+"-".repeat(_)+S;t.alignDelimiters!==!1&&(_=E.length+_+S.length,_>f[m]&&(f[m]=_),v[m]=_),x[m]=j}l.splice(1,0,x),c.splice(1,0,v),p=-1;const b=[];for(;++p<l.length;){const T=l[p],E=c[p];m=-1;const S=[];for(;++m<h;){const _=T[m]||"";let j="",V="";if(t.alignDelimiters!==!1){const B=f[m]-(E[m]||0),M=u[m];M===114?j=" ".repeat(B):M===99?B%2?(j=" ".repeat(B/2+.5),V=" ".repeat(B/2-.5)):(j=" ".repeat(B/2),V=j):V=" ".repeat(B)}t.delimiterStart!==!1&&!m&&S.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&_==="")&&(t.delimiterStart!==!1||m)&&S.push(" "),t.alignDelimiters!==!1&&S.push(j),S.push(_),t.alignDelimiters!==!1&&S.push(V),t.padding!==!1&&S.push(" "),(t.delimiterEnd!==!1||m!==h-1)&&S.push("|")}b.push(t.delimiterEnd===!1?S.join("").replace(/ +$/,""):S.join(""))}return b.join(`
`)}function rM(e){return e==null?"":String(e)}function jy(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function iM(e,n,t,o){const a=t.enter("blockquote"),u=t.createTracker(o);u.move("> "),u.shift(2);const l=t.indentLines(t.containerFlow(e,u.current()),oM);return a(),l}function oM(e,n,t){return">"+(t?"":" ")+e}function aM(e,n){return Iy(e,n.inConstruct,!0)&&!Iy(e,n.notInConstruct,!1)}function Iy(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let o=-1;for(;++o<n.length;)if(e.includes(n[o]))return!0;return!1}function _y(e,n,t,o){let a=-1;for(;++a<t.unsafe.length;)if(t.unsafe[a].character===`
`&&aM(t.stack,t.unsafe[a]))return/[ \t]/.test(o.before)?"":" ";return`\\
`}function sM(e,n){const t=String(e);let o=t.indexOf(n),a=o,u=0,l=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;o!==-1;)o===a?++u>l&&(l=u):u=1,a=o+n.length,o=t.indexOf(n,a);return l}function lM(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function uM(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function cM(e,n,t,o){const a=uM(t),u=e.value||"",l=a==="`"?"GraveAccent":"Tilde";if(lM(e,t)){const m=t.enter("codeIndented"),x=t.indentLines(u,dM);return m(),x}const c=t.createTracker(o),f=a.repeat(Math.max(sM(u,a)+1,3)),h=t.enter("codeFenced");let p=c.move(f);if(e.lang){const m=t.enter(`codeFencedLang${l}`);p+=c.move(t.safe(e.lang,{before:p,after:" ",encode:["`"],...c.current()})),m()}if(e.lang&&e.meta){const m=t.enter(`codeFencedMeta${l}`);p+=c.move(" "),p+=c.move(t.safe(e.meta,{before:p,after:`
`,encode:["`"],...c.current()})),m()}return p+=c.move(`
`),u&&(p+=c.move(u+`
`)),p+=c.move(f),h(),p}function dM(e,n,t){return(t?"":"    ")+e}function vf(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function fM(e,n,t,o){const a=vf(t),u=a==='"'?"Quote":"Apostrophe",l=t.enter("definition");let c=t.enter("label");const f=t.createTracker(o);let h=f.move("[");return h+=f.move(t.safe(t.associationId(e),{before:h,after:"]",...f.current()})),h+=f.move("]: "),c(),!e.url||/[\0- \u007F]/.test(e.url)?(c=t.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(t.safe(e.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(c=t.enter("destinationRaw"),h+=f.move(t.safe(e.url,{before:h,after:e.title?" ":`
`,...f.current()}))),c(),e.title&&(c=t.enter(`title${u}`),h+=f.move(" "+a),h+=f.move(t.safe(e.title,{before:h,after:a,...f.current()})),h+=f.move(a),c()),l(),h}function hM(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function qo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function $s(e,n,t){const o=Ei(e),a=Ei(n);return o===void 0?a===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:o===1?a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:a===void 0?{inside:!1,outside:!1}:a===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Jv.peek=pM;function Jv(e,n,t,o){const a=hM(t),u=t.enter("emphasis"),l=t.createTracker(o),c=l.move(a);let f=l.move(t.containerPhrasing(e,{after:a,before:c,...l.current()}));const h=f.charCodeAt(0),p=$s(o.before.charCodeAt(o.before.length-1),h,a);p.inside&&(f=qo(h)+f.slice(1));const m=f.charCodeAt(f.length-1),x=$s(o.after.charCodeAt(0),m,a);x.inside&&(f=f.slice(0,-1)+qo(m));const v=l.move(a);return u(),t.attentionEncodeSurroundingInfo={after:x.outside,before:p.outside},c+f+v}function pM(e,n,t){return t.options.emphasis||"*"}function mM(e,n){let t=!1;return yf(e,function(o){if("value"in o&&/\r?\n|\r/.test(o.value)||o.type==="break")return t=!0,ld}),!!((!e.depth||e.depth<3)&&cf(e)&&(n.options.setext||t))}function gM(e,n,t,o){const a=Math.max(Math.min(6,e.depth||1),1),u=t.createTracker(o);if(mM(e,t)){const p=t.enter("headingSetext"),m=t.enter("phrasing"),x=t.containerPhrasing(e,{...u.current(),before:`
`,after:`
`});return m(),p(),x+`
`+(a===1?"=":"-").repeat(x.length-(Math.max(x.lastIndexOf("\r"),x.lastIndexOf(`
`))+1))}const l="#".repeat(a),c=t.enter("headingAtx"),f=t.enter("phrasing");u.move(l+" ");let h=t.containerPhrasing(e,{before:"# ",after:`
`,...u.current()});return/^[\t ]/.test(h)&&(h=qo(h.charCodeAt(0))+h.slice(1)),h=h?l+" "+h:l,t.options.closeAtx&&(h+=" "+l),f(),c(),h}Xv.peek=yM;function Xv(e){return e.value||""}function yM(){return"<"}Qv.peek=xM;function Qv(e,n,t,o){const a=vf(t),u=a==='"'?"Quote":"Apostrophe",l=t.enter("image");let c=t.enter("label");const f=t.createTracker(o);let h=f.move("![");return h+=f.move(t.safe(e.alt,{before:h,after:"]",...f.current()})),h+=f.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=t.enter("destinationLiteral"),h+=f.move("<"),h+=f.move(t.safe(e.url,{before:h,after:">",...f.current()})),h+=f.move(">")):(c=t.enter("destinationRaw"),h+=f.move(t.safe(e.url,{before:h,after:e.title?" ":")",...f.current()}))),c(),e.title&&(c=t.enter(`title${u}`),h+=f.move(" "+a),h+=f.move(t.safe(e.title,{before:h,after:a,...f.current()})),h+=f.move(a),c()),h+=f.move(")"),l(),h}function xM(){return"!"}Zv.peek=vM;function Zv(e,n,t,o){const a=e.referenceType,u=t.enter("imageReference");let l=t.enter("label");const c=t.createTracker(o);let f=c.move("![");const h=t.safe(e.alt,{before:f,after:"]",...c.current()});f+=c.move(h+"]["),l();const p=t.stack;t.stack=[],l=t.enter("reference");const m=t.safe(t.associationId(e),{before:f,after:"]",...c.current()});return l(),t.stack=p,u(),a==="full"||!h||h!==m?f+=c.move(m+"]"):a==="shortcut"?f=f.slice(0,-1):f+=c.move("]"),f}function vM(){return"!"}ew.peek=wM;function ew(e,n,t){let o=e.value||"",a="`",u=-1;for(;new RegExp("(^|[^`])"+a+"([^`]|$)").test(o);)a+="`";for(/[^ \r\n]/.test(o)&&(/^[ \r\n]/.test(o)&&/[ \r\n]$/.test(o)||/^`|`$/.test(o))&&(o=" "+o+" ");++u<t.unsafe.length;){const l=t.unsafe[u],c=t.compilePattern(l);let f;if(l.atBreak)for(;f=c.exec(o);){let h=f.index;o.charCodeAt(h)===10&&o.charCodeAt(h-1)===13&&h--,o=o.slice(0,h)+" "+o.slice(f.index+1)}}return a+o+a}function wM(){return"`"}function nw(e,n){const t=cf(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}tw.peek=bM;function tw(e,n,t,o){const a=vf(t),u=a==='"'?"Quote":"Apostrophe",l=t.createTracker(o);let c,f;if(nw(e,t)){const p=t.stack;t.stack=[],c=t.enter("autolink");let m=l.move("<");return m+=l.move(t.containerPhrasing(e,{before:m,after:">",...l.current()})),m+=l.move(">"),c(),t.stack=p,m}c=t.enter("link"),f=t.enter("label");let h=l.move("[");return h+=l.move(t.containerPhrasing(e,{before:h,after:"](",...l.current()})),h+=l.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=t.enter("destinationLiteral"),h+=l.move("<"),h+=l.move(t.safe(e.url,{before:h,after:">",...l.current()})),h+=l.move(">")):(f=t.enter("destinationRaw"),h+=l.move(t.safe(e.url,{before:h,after:e.title?" ":")",...l.current()}))),f(),e.title&&(f=t.enter(`title${u}`),h+=l.move(" "+a),h+=l.move(t.safe(e.title,{before:h,after:a,...l.current()})),h+=l.move(a),f()),h+=l.move(")"),c(),h}function bM(e,n,t){return nw(e,t)?"<":"["}rw.peek=kM;function rw(e,n,t,o){const a=e.referenceType,u=t.enter("linkReference");let l=t.enter("label");const c=t.createTracker(o);let f=c.move("[");const h=t.containerPhrasing(e,{before:f,after:"]",...c.current()});f+=c.move(h+"]["),l();const p=t.stack;t.stack=[],l=t.enter("reference");const m=t.safe(t.associationId(e),{before:f,after:"]",...c.current()});return l(),t.stack=p,u(),a==="full"||!h||h!==m?f+=c.move(m+"]"):a==="shortcut"?f=f.slice(0,-1):f+=c.move("]"),f}function kM(){return"["}function wf(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function SM(e){const n=wf(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function TM(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function iw(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function CM(e,n,t,o){const a=t.enter("list"),u=t.bulletCurrent;let l=e.ordered?TM(t):wf(t);const c=e.ordered?l==="."?")":".":SM(t);let f=n&&t.bulletLastUsed?l===t.bulletLastUsed:!1;if(!e.ordered){const p=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&p&&(!p.children||!p.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(f=!0),iw(t)===l&&p){let m=-1;for(;++m<e.children.length;){const x=e.children[m];if(x&&x.type==="listItem"&&x.children&&x.children[0]&&x.children[0].type==="thematicBreak"){f=!0;break}}}}f&&(l=c),t.bulletCurrent=l;const h=t.containerFlow(e,o);return t.bulletLastUsed=l,t.bulletCurrent=u,a(),h}function EM(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function PM(e,n,t,o){const a=EM(t);let u=t.bulletCurrent||wf(t);n&&n.type==="list"&&n.ordered&&(u=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+u);let l=u.length+1;(a==="tab"||a==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(l=Math.ceil(l/4)*4);const c=t.createTracker(o);c.move(u+" ".repeat(l-u.length)),c.shift(l);const f=t.enter("listItem"),h=t.indentLines(t.containerFlow(e,c.current()),p);return f(),h;function p(m,x,v){return x?(v?"":" ".repeat(l))+m:(v?u:u+" ".repeat(l-u.length))+m}}function RM(e,n,t,o){const a=t.enter("paragraph"),u=t.enter("phrasing"),l=t.containerPhrasing(e,o);return u(),a(),l}const AM=ol(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function jM(e,n,t,o){return(e.children.some(function(l){return AM(l)})?t.containerPhrasing:t.containerFlow).call(t,e,o)}function IM(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}ow.peek=_M;function ow(e,n,t,o){const a=IM(t),u=t.enter("strong"),l=t.createTracker(o),c=l.move(a+a);let f=l.move(t.containerPhrasing(e,{after:a,before:c,...l.current()}));const h=f.charCodeAt(0),p=$s(o.before.charCodeAt(o.before.length-1),h,a);p.inside&&(f=qo(h)+f.slice(1));const m=f.charCodeAt(f.length-1),x=$s(o.after.charCodeAt(0),m,a);x.inside&&(f=f.slice(0,-1)+qo(m));const v=l.move(a+a);return u(),t.attentionEncodeSurroundingInfo={after:x.outside,before:p.outside},c+f+v}function _M(e,n,t){return t.options.strong||"*"}function NM(e,n,t,o){return t.safe(e.value,o)}function MM(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function DM(e,n,t){const o=(iw(t)+(t.options.ruleSpaces?" ":"")).repeat(MM(t));return t.options.ruleSpaces?o.slice(0,-1):o}const aw={blockquote:iM,break:_y,code:cM,definition:fM,emphasis:Jv,hardBreak:_y,heading:gM,html:Xv,image:Qv,imageReference:Zv,inlineCode:ew,link:tw,linkReference:rw,list:CM,listItem:PM,paragraph:RM,root:jM,strong:ow,text:NM,thematicBreak:DM};function LM(){return{enter:{table:OM,tableData:Ny,tableHeader:Ny,tableRow:zM},exit:{codeText:BM,table:FM,tableData:Mc,tableHeader:Mc,tableRow:Mc}}}function OM(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function FM(e){this.exit(e),this.data.inTable=void 0}function zM(e){this.enter({type:"tableRow",children:[]},e)}function Mc(e){this.exit(e)}function Ny(e){this.enter({type:"tableCell",children:[]},e)}function BM(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,VM));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function VM(e,n){return n==="|"?n:e}function WM(e){const n=e||{},t=n.tableCellPadding,o=n.tablePipeAlign,a=n.stringLength,u=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:x,table:l,tableCell:f,tableRow:c}};function l(v,b,T,E){return h(p(v,T,E),v.align)}function c(v,b,T,E){const S=m(v,T,E),_=h([S]);return _.slice(0,_.indexOf(`
`))}function f(v,b,T,E){const S=T.enter("tableCell"),_=T.enter("phrasing"),j=T.containerPhrasing(v,{...E,before:u,after:u});return _(),S(),j}function h(v,b){return tM(v,{align:b,alignDelimiters:o,padding:t,stringLength:a})}function p(v,b,T){const E=v.children;let S=-1;const _=[],j=b.enter("table");for(;++S<E.length;)_[S]=m(E[S],b,T);return j(),_}function m(v,b,T){const E=v.children;let S=-1;const _=[],j=b.enter("tableRow");for(;++S<E.length;)_[S]=f(E[S],v,b,T);return j(),_}function x(v,b,T){let E=aw.inlineCode(v,b,T);return T.stack.includes("tableCell")&&(E=E.replace(/\|/g,"\\$&")),E}}function UM(){return{exit:{taskListCheckValueChecked:My,taskListCheckValueUnchecked:My,paragraph:HM}}}function $M(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:qM}}}function My(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function HM(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const o=t.children[0];if(o&&o.type==="text"){const a=n.children;let u=-1,l;for(;++u<a.length;){const c=a[u];if(c.type==="paragraph"){l=c;break}}l===t&&(o.value=o.value.slice(1),o.value.length===0?t.children.shift():t.position&&o.position&&typeof o.position.start.offset=="number"&&(o.position.start.column++,o.position.start.offset++,t.position.start=Object.assign({},o.position.start)))}}this.exit(e)}function qM(e,n,t,o){const a=e.children[0],u=typeof e.checked=="boolean"&&a&&a.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",c=t.createTracker(o);u&&c.move(l);let f=aw.listItem(e,n,t,{...o,...c.current()});return u&&(f=f.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,h)),f;function h(p){return p+l}}function GM(){return[CN(),qN(),JN(),LM(),UM()]}function KM(e){return{extensions:[EN(),GN(e),XN(),WM(e),$M()]}}const YM={tokenize:nD,partial:!0},sw={tokenize:tD,partial:!0},lw={tokenize:rD,partial:!0},uw={tokenize:iD,partial:!0},JM={tokenize:oD,partial:!0},cw={name:"wwwAutolink",tokenize:ZM,previous:fw},dw={name:"protocolAutolink",tokenize:eD,previous:hw},Ot={name:"emailAutolink",tokenize:QM,previous:pw},vt={};function XM(){return{text:vt}}let Ar=48;for(;Ar<123;)vt[Ar]=Ot,Ar++,Ar===58?Ar=65:Ar===91&&(Ar=97);vt[43]=Ot;vt[45]=Ot;vt[46]=Ot;vt[95]=Ot;vt[72]=[Ot,dw];vt[104]=[Ot,dw];vt[87]=[Ot,cw];vt[119]=[Ot,cw];function QM(e,n,t){const o=this;let a,u;return l;function l(m){return!fd(m)||!pw.call(o,o.previous)||bf(o.events)?t(m):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),c(m))}function c(m){return fd(m)?(e.consume(m),c):m===64?(e.consume(m),f):t(m)}function f(m){return m===46?e.check(JM,p,h)(m):m===45||m===95||yn(m)?(u=!0,e.consume(m),f):p(m)}function h(m){return e.consume(m),a=!0,f}function p(m){return u&&a&&bn(o.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(m)):t(m)}}function ZM(e,n,t){const o=this;return a;function a(l){return l!==87&&l!==119||!fw.call(o,o.previous)||bf(o.events)?t(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(YM,e.attempt(sw,e.attempt(lw,u),t),t)(l))}function u(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(l)}}function eD(e,n,t){const o=this;let a="",u=!1;return l;function l(m){return(m===72||m===104)&&hw.call(o,o.previous)&&!bf(o.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),a+=String.fromCodePoint(m),e.consume(m),c):t(m)}function c(m){if(bn(m)&&a.length<5)return a+=String.fromCodePoint(m),e.consume(m),c;if(m===58){const x=a.toLowerCase();if(x==="http"||x==="https")return e.consume(m),f}return t(m)}function f(m){return m===47?(e.consume(m),u?h:(u=!0,f)):t(m)}function h(m){return m===null||Vs(m)||Le(m)||Lr(m)||tl(m)?t(m):e.attempt(sw,e.attempt(lw,p),t)(m)}function p(m){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(m)}}function nD(e,n,t){let o=0;return a;function a(l){return(l===87||l===119)&&o<3?(o++,e.consume(l),a):l===46&&o===3?(e.consume(l),u):t(l)}function u(l){return l===null?t(l):n(l)}}function tD(e,n,t){let o,a,u;return l;function l(h){return h===46||h===95?e.check(uw,f,c)(h):h===null||Le(h)||Lr(h)||h!==45&&tl(h)?f(h):(u=!0,e.consume(h),l)}function c(h){return h===95?o=!0:(a=o,o=void 0),e.consume(h),l}function f(h){return a||o||!u?t(h):n(h)}}function rD(e,n){let t=0,o=0;return a;function a(l){return l===40?(t++,e.consume(l),a):l===41&&o<t?u(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(uw,n,u)(l):l===null||Le(l)||Lr(l)?n(l):(e.consume(l),a)}function u(l){return l===41&&o++,e.consume(l),a}}function iD(e,n,t){return o;function o(c){return c===33||c===34||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===63||c===95||c===126?(e.consume(c),o):c===38?(e.consume(c),u):c===93?(e.consume(c),a):c===60||c===null||Le(c)||Lr(c)?n(c):t(c)}function a(c){return c===null||c===40||c===91||Le(c)||Lr(c)?n(c):o(c)}function u(c){return bn(c)?l(c):t(c)}function l(c){return c===59?(e.consume(c),o):bn(c)?(e.consume(c),l):t(c)}}function oD(e,n,t){return o;function o(u){return e.consume(u),a}function a(u){return yn(u)?t(u):n(u)}}function fw(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||Le(e)}function hw(e){return!bn(e)}function pw(e){return!(e===47||fd(e))}function fd(e){return e===43||e===45||e===46||e===95||yn(e)}function bf(e){let n=e.length,t=!1;for(;n--;){const o=e[n][1];if((o.type==="labelLink"||o.type==="labelImage")&&!o._balanced){t=!0;break}if(o._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const aD={tokenize:pD,partial:!0};function sD(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:dD,continuation:{tokenize:fD},exit:hD}},text:{91:{name:"gfmFootnoteCall",tokenize:cD},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:lD,resolveTo:uD}}}}function lD(e,n,t){const o=this;let a=o.events.length;const u=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let l;for(;a--;){const f=o.events[a][1];if(f.type==="labelImage"){l=f;break}if(f.type==="gfmFootnoteCall"||f.type==="labelLink"||f.type==="label"||f.type==="image"||f.type==="link")break}return c;function c(f){if(!l||!l._balanced)return t(f);const h=ot(o.sliceSerialize({start:l.end,end:o.now()}));return h.codePointAt(0)!==94||!u.includes(h.slice(1))?t(f):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),n(f))}}function uD(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const o={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},a={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};a.end.column++,a.end.offset++,a.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},a.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},c=[e[t+1],e[t+2],["enter",o,n],e[t+3],e[t+4],["enter",a,n],["exit",a,n],["enter",u,n],["enter",l,n],["exit",l,n],["exit",u,n],e[e.length-2],e[e.length-1],["exit",o,n]];return e.splice(t,e.length-t+1,...c),e}function cD(e,n,t){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u=0,l;return c;function c(m){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),f}function f(m){return m!==94?t(m):(e.enter("gfmFootnoteCallMarker"),e.consume(m),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",h)}function h(m){if(u>999||m===93&&!l||m===null||m===91||Le(m))return t(m);if(m===93){e.exit("chunkString");const x=e.exit("gfmFootnoteCallString");return a.includes(ot(o.sliceSerialize(x)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(m),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(m)}return Le(m)||(l=!0),u++,e.consume(m),m===92?p:h}function p(m){return m===91||m===92||m===93?(e.consume(m),u++,h):h(m)}}function dD(e,n,t){const o=this,a=o.parser.gfmFootnotes||(o.parser.gfmFootnotes=[]);let u,l=0,c;return f;function f(b){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),h}function h(b){return b===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",p):t(b)}function p(b){if(l>999||b===93&&!c||b===null||b===91||Le(b))return t(b);if(b===93){e.exit("chunkString");const T=e.exit("gfmFootnoteDefinitionLabelString");return u=ot(o.sliceSerialize(T)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(b),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),x}return Le(b)||(c=!0),l++,e.consume(b),b===92?m:p}function m(b){return b===91||b===92||b===93?(e.consume(b),l++,p):p(b)}function x(b){return b===58?(e.enter("definitionMarker"),e.consume(b),e.exit("definitionMarker"),a.includes(u)||a.push(u),Re(e,v,"gfmFootnoteDefinitionWhitespace")):t(b)}function v(b){return n(b)}}function fD(e,n,t){return e.check(na,n,e.attempt(aD,n,t))}function hD(e){e.exit("gfmFootnoteDefinition")}function pD(e,n,t){const o=this;return Re(e,a,"gfmFootnoteDefinitionIndent",5);function a(u){const l=o.events[o.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?n(u):t(u)}}function mD(e){let t=(e||{}).singleTilde;const o={name:"strikethrough",tokenize:u,resolveAll:a};return t==null&&(t=!0),{text:{126:o},insideSpan:{null:[o]},attentionMarkers:{null:[126]}};function a(l,c){let f=-1;for(;++f<l.length;)if(l[f][0]==="enter"&&l[f][1].type==="strikethroughSequenceTemporary"&&l[f][1]._close){let h=f;for(;h--;)if(l[h][0]==="exit"&&l[h][1].type==="strikethroughSequenceTemporary"&&l[h][1]._open&&l[f][1].end.offset-l[f][1].start.offset===l[h][1].end.offset-l[h][1].start.offset){l[f][1].type="strikethroughSequence",l[h][1].type="strikethroughSequence";const p={type:"strikethrough",start:Object.assign({},l[h][1].start),end:Object.assign({},l[f][1].end)},m={type:"strikethroughText",start:Object.assign({},l[h][1].end),end:Object.assign({},l[f][1].start)},x=[["enter",p,c],["enter",l[h][1],c],["exit",l[h][1],c],["enter",m,c]],v=c.parser.constructs.insideSpan.null;v&&On(x,x.length,0,rl(v,l.slice(h+1,f),c)),On(x,x.length,0,[["exit",m,c],["enter",l[f][1],c],["exit",l[f][1],c],["exit",p,c]]),On(l,h-1,f-h+3,x),f=h+x.length-2;break}}for(f=-1;++f<l.length;)l[f][1].type==="strikethroughSequenceTemporary"&&(l[f][1].type="data");return l}function u(l,c,f){const h=this.previous,p=this.events;let m=0;return x;function x(b){return h===126&&p[p.length-1][1].type!=="characterEscape"?f(b):(l.enter("strikethroughSequenceTemporary"),v(b))}function v(b){const T=Ei(h);if(b===126)return m>1?f(b):(l.consume(b),m++,v);if(m<2&&!t)return f(b);const E=l.exit("strikethroughSequenceTemporary"),S=Ei(b);return E._open=!S||S===2&&!!T,E._close=!T||T===2&&!!S,c(b)}}}class gD{constructor(){this.map=[],this.index=new Map}add(n,t,o){yD(this,n,t,o)}consume(n){if(this.map.sort(function(u,l){return u[0]-l[0]}),this.map.length===0)return;let t=this.map.length;const o=[];for(;t>0;)t-=1,o.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];o.push(n.slice()),n.length=0;let a=o.pop();for(;a;){for(const u of a)n.push(u);a=o.pop()}this.map.length=0,this.index.clear()}}function yD(e,n,t,o){if(t===0&&o.length===0)return;const a=e.index.get(n);if(a){a[1]+=t,a[2].push(...o);return}const u=[n,t,o];e.map.push(u),e.index.set(n,u)}function xD(e,n){let t=!1;const o=[];for(;n<e.length;){const a=e[n];if(t){if(a[0]==="enter")a[1].type==="tableContent"&&o.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(a[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const u=o.length-1;o[u]=o[u]==="left"?"center":"right"}}else if(a[1].type==="tableDelimiterRow")break}else a[0]==="enter"&&a[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return o}function vD(){return{flow:{null:{name:"table",tokenize:wD,resolveAll:bD}}}}function wD(e,n,t){const o=this;let a=0,u=0,l;return c;function c(O){let ee=o.events.length-1;for(;ee>-1;){const{type:ie}=o.events[ee][1];if(ie==="lineEnding"||ie==="linePrefix")ee--;else break}const ne=ee>-1?o.events[ee][1].type:null,ye=ne==="tableHead"||ne==="tableRow"?M:f;return ye===M&&o.parser.lazy[o.now().line]?t(O):ye(O)}function f(O){return e.enter("tableHead"),e.enter("tableRow"),h(O)}function h(O){return O===124||(l=!0,u+=1),p(O)}function p(O){return O===null?t(O):he(O)?u>1?(u=0,o.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(O),e.exit("lineEnding"),v):t(O):Pe(O)?Re(e,p,"whitespace")(O):(u+=1,l&&(l=!1,a+=1),O===124?(e.enter("tableCellDivider"),e.consume(O),e.exit("tableCellDivider"),l=!0,p):(e.enter("data"),m(O)))}function m(O){return O===null||O===124||Le(O)?(e.exit("data"),p(O)):(e.consume(O),O===92?x:m)}function x(O){return O===92||O===124?(e.consume(O),m):m(O)}function v(O){return o.interrupt=!1,o.parser.lazy[o.now().line]?t(O):(e.enter("tableDelimiterRow"),l=!1,Pe(O)?Re(e,b,"linePrefix",o.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):b(O))}function b(O){return O===45||O===58?E(O):O===124?(l=!0,e.enter("tableCellDivider"),e.consume(O),e.exit("tableCellDivider"),T):B(O)}function T(O){return Pe(O)?Re(e,E,"whitespace")(O):E(O)}function E(O){return O===58?(u+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(O),e.exit("tableDelimiterMarker"),S):O===45?(u+=1,S(O)):O===null||he(O)?V(O):B(O)}function S(O){return O===45?(e.enter("tableDelimiterFiller"),_(O)):B(O)}function _(O){return O===45?(e.consume(O),_):O===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(O),e.exit("tableDelimiterMarker"),j):(e.exit("tableDelimiterFiller"),j(O))}function j(O){return Pe(O)?Re(e,V,"whitespace")(O):V(O)}function V(O){return O===124?b(O):O===null||he(O)?!l||a!==u?B(O):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(O)):B(O)}function B(O){return t(O)}function M(O){return e.enter("tableRow"),X(O)}function X(O){return O===124?(e.enter("tableCellDivider"),e.consume(O),e.exit("tableCellDivider"),X):O===null||he(O)?(e.exit("tableRow"),n(O)):Pe(O)?Re(e,X,"whitespace")(O):(e.enter("data"),U(O))}function U(O){return O===null||O===124||Le(O)?(e.exit("data"),X(O)):(e.consume(O),O===92?re:U)}function re(O){return O===92||O===124?(e.consume(O),U):U(O)}}function bD(e,n){let t=-1,o=!0,a=0,u=[0,0,0,0],l=[0,0,0,0],c=!1,f=0,h,p,m;const x=new gD;for(;++t<e.length;){const v=e[t],b=v[1];v[0]==="enter"?b.type==="tableHead"?(c=!1,f!==0&&(Dy(x,n,f,h,p),p=void 0,f=0),h={type:"table",start:Object.assign({},b.start),end:Object.assign({},b.end)},x.add(t,0,[["enter",h,n]])):b.type==="tableRow"||b.type==="tableDelimiterRow"?(o=!0,m=void 0,u=[0,0,0,0],l=[0,t+1,0,0],c&&(c=!1,p={type:"tableBody",start:Object.assign({},b.start),end:Object.assign({},b.end)},x.add(t,0,[["enter",p,n]])),a=b.type==="tableDelimiterRow"?2:p?3:1):a&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")?(o=!1,l[2]===0&&(u[1]!==0&&(l[0]=l[1],m=Ts(x,n,u,a,void 0,m),u=[0,0,0,0]),l[2]=t)):b.type==="tableCellDivider"&&(o?o=!1:(u[1]!==0&&(l[0]=l[1],m=Ts(x,n,u,a,void 0,m)),u=l,l=[u[1],t,0,0])):b.type==="tableHead"?(c=!0,f=t):b.type==="tableRow"||b.type==="tableDelimiterRow"?(f=t,u[1]!==0?(l[0]=l[1],m=Ts(x,n,u,a,t,m)):l[1]!==0&&(m=Ts(x,n,l,a,t,m)),a=0):a&&(b.type==="data"||b.type==="tableDelimiterMarker"||b.type==="tableDelimiterFiller")&&(l[3]=t)}for(f!==0&&Dy(x,n,f,h,p),x.consume(n.events),t=-1;++t<n.events.length;){const v=n.events[t];v[0]==="enter"&&v[1].type==="table"&&(v[1]._align=xD(n.events,t))}return e}function Ts(e,n,t,o,a,u){const l=o===1?"tableHeader":o===2?"tableDelimiter":"tableData",c="tableContent";t[0]!==0&&(u.end=Object.assign({},pi(n.events,t[0])),e.add(t[0],0,[["exit",u,n]]));const f=pi(n.events,t[1]);if(u={type:l,start:Object.assign({},f),end:Object.assign({},f)},e.add(t[1],0,[["enter",u,n]]),t[2]!==0){const h=pi(n.events,t[2]),p=pi(n.events,t[3]),m={type:c,start:Object.assign({},h),end:Object.assign({},p)};if(e.add(t[2],0,[["enter",m,n]]),o!==2){const x=n.events[t[2]],v=n.events[t[3]];if(x[1].end=Object.assign({},v[1].end),x[1].type="chunkText",x[1].contentType="text",t[3]>t[2]+1){const b=t[2]+1,T=t[3]-t[2]-1;e.add(b,T,[])}}e.add(t[3]+1,0,[["exit",m,n]])}return a!==void 0&&(u.end=Object.assign({},pi(n.events,a)),e.add(a,0,[["exit",u,n]]),u=void 0),u}function Dy(e,n,t,o,a){const u=[],l=pi(n.events,t);a&&(a.end=Object.assign({},l),u.push(["exit",a,n])),o.end=Object.assign({},l),u.push(["exit",o,n]),e.add(t+1,0,u)}function pi(e,n){const t=e[n],o=t[0]==="enter"?"start":"end";return t[1][o]}const kD={name:"tasklistCheck",tokenize:TD};function SD(){return{text:{91:kD}}}function TD(e,n,t){const o=this;return a;function a(f){return o.previous!==null||!o._gfmTasklistFirstContentOfListItem?t(f):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),u)}function u(f){return Le(f)?(e.enter("taskListCheckValueUnchecked"),e.consume(f),e.exit("taskListCheckValueUnchecked"),l):f===88||f===120?(e.enter("taskListCheckValueChecked"),e.consume(f),e.exit("taskListCheckValueChecked"),l):t(f)}function l(f){return f===93?(e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),c):t(f)}function c(f){return he(f)?n(f):Pe(f)?e.check({tokenize:CD},n,t)(f):t(f)}}function CD(e,n,t){return Re(e,o,"whitespace");function o(a){return a===null?t(a):n(a)}}function ED(e){return Tv([XM(),sD(),mD(e),vD(),SD()])}const PD={};function RD(e){const n=this,t=e||PD,o=n.data(),a=o.micromarkExtensions||(o.micromarkExtensions=[]),u=o.fromMarkdownExtensions||(o.fromMarkdownExtensions=[]),l=o.toMarkdownExtensions||(o.toMarkdownExtensions=[]);a.push(ED(t)),u.push(GM()),l.push(KM(t))}const AD=`An accordion is a list of items where clicking an item reveals or hides its content.

The goal isn't just to build an accordion. The goal is to understand how React can use **one piece of state to control a collection of items**.

---

## What are we building?

\`\`\`text
What is React?
────────────────────────

How does state work?
────────────────────────

What is Framer Motion?
────────────────────────
\`\`\`

When the user clicks an item:

\`\`\`text
What is React?
────────────────────────
React is a library...
────────────────────────

How does state work?
────────────────────────

What is Framer Motion?
────────────────────────
\`\`\`

Clicking the same item again closes it.

---

## The mental model

The first question is:

> How do we know which item is open?

We could store a boolean for every item:

\`\`\`text
item 1 → true
item 2 → false
item 3 → false
\`\`\`

But there's a simpler way.

We store:

\`\`\`text
openIndex
\`\`\`

For example:

\`\`\`text
openIndex = 0
\`\`\`

means:

> item 0 is open.

Or:

\`\`\`text
openIndex = 2
\`\`\`

means:

> item 2 is open.

And:

\`\`\`text
openIndex = null
\`\`\`

means:

> nothing is open.

---

## The complete flow

\`\`\`text
openIndex = null
       ↓
nothing is open
       ↓
user clicks item 1
       ↓
setOpenIndex(1)
       ↓
openIndex = 1
       ↓
React re-renders
       ↓
item 1 shows its answer
\`\`\`

Click item 1 again:

\`\`\`text
item 1 is already open
       ↓
setOpenIndex(null)
       ↓
nothing is open
\`\`\`

---

## Step 1 — the data

We have an array of FAQ objects:

\`\`\`jsx
const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building interfaces.",
  },
  {
    question: "What is state?",
    answer: "State is information that can change over time.",
  },
];
\`\`\`

Each item contains:

\`\`\`text
question
answer
\`\`\`

This is a JavaScript [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

---

## Step 2 — the state

\`\`\`jsx
const [openIndex, setOpenIndex] = useState(null);
\`\`\`

Initially:

\`\`\`text
openIndex = null
\`\`\`

Nothing is open.

Why \`null\`?

Because \`null\` can represent:

> there is currently no selected item.

---

## Step 3 — \`.map()\` creates each FAQ

\`\`\`jsx
{faqs.map((faq, index) => (
  ...
))}
\`\`\`

We get both:

\`\`\`text
faq
index
\`\`\`

For example:

\`\`\`text
faq = first question
index = 0
\`\`\`

Then:

\`\`\`text
faq = second question
index = 1
\`\`\`

Then:

\`\`\`text
faq = third question
index = 2
\`\`\`

The [\`.map()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) creates one piece of UI for every FAQ.

---

## Step 4 — figure out whether this item is open

Inside \`.map()\`:

\`\`\`jsx
const isOpen = openIndex === index;
\`\`\`

This is **derived information**.

We're not storing:

\`\`\`text
isOpen
\`\`\`

in state.

We're calculating it.

For example:

\`\`\`text
openIndex = 1
index = 0

1 === 0
   ↓
false
\`\`\`

For the second item:

\`\`\`text
openIndex = 1
index = 1

1 === 1
   ↓
true
\`\`\`

So:

\`\`\`text
FAQ 0 → false
FAQ 1 → true
FAQ 2 → false
\`\`\`

Only one item is open.

---

## Step 5 — clicking an item

\`\`\`jsx
onClick={() => setOpenIndex(isOpen ? null : index)}
\`\`\`

This uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Read it as:

> if this item is already open, close it. Otherwise, open it.

So:

\`\`\`text
isOpen = true
    ↓
setOpenIndex(null)
\`\`\`

But:

\`\`\`text
isOpen = false
    ↓
setOpenIndex(index)
\`\`\`

This gives us the toggle behaviour.

---

## Step 6 — conditionally render the answer

\`\`\`jsx
{isOpen && (
  <div>
    {faq.answer}
  </div>
)}
\`\`\`

This uses \`&&\` for [conditional rendering](https://react.dev/learn/conditional-rendering).

Read it as:

> if this item is open, render the answer.

So:

\`\`\`text
isOpen = true
    ↓
answer exists


isOpen = false
    ↓
answer doesn't exist
\`\`\`

---

## Step 7 — animate the answer

Without animation, the answer would simply appear/disappear.

We use:

\`\`\`jsx
<AnimatePresence>
\`\`\`

because the answer is conditionally rendered.

When:

\`\`\`text
isOpen = true
\`\`\`

the answer enters.

When:

\`\`\`text
isOpen = false
\`\`\`

the answer is removed.

\`AnimatePresence\` allows Framer Motion to play the exit animation before the element is removed.

---

## Step 8 — the plus icon

The icon can also use the same \`isOpen\` value:

\`\`\`jsx
animate={{
  rotate: isOpen ? 45 : 0
}}
\`\`\`

So:

\`\`\`text
closed
rotate = 0°


open
rotate = 45°
\`\`\`

The plus sign therefore becomes visually closer to an \`×\`.

We don't need another state for the icon.

Why?

Because the icon's state can be derived from:

\`\`\`text
isOpen
\`\`\`

---

## What belongs to what?

### React

- \`useState\`
    
- state
    
- \`.map()\` rendering
    
- conditional rendering
    
- re-render
    

### JavaScript

- arrays
    
- objects
    
- \`.map()\`
    
- \`index\`
    
- \`===\`
    
- ternary
    
- \`null\`
    

### Framer Motion

- \`motion\`
    
- \`AnimatePresence\`
    
- \`initial\`
    
- \`animate\`
    
- \`exit\`
    

### Tailwind

- spacing
    
- borders
    
- layout
    
- typography
    
- overflow
    

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is state?",
    answer: "State is information that can change over time.",
  },
  {
    question: "What is Framer Motion?",
    answer: "Framer Motion is a library for adding animations and interactions to React interfaces.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-96">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="border-b border-neutral-800"
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-medium text-white">
                {faq.question}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                className="text-xl text-neutral-400"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm text-neutral-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
\`\`\`

---

## Things to understand

### Why \`openIndex\` instead of \`isOpen\`?

Because there are multiple FAQ items.

A single:

\`\`\`text
isOpen = true
\`\`\`

wouldn't tell us **which** FAQ is open.

But:

\`\`\`text
openIndex = 2
\`\`\`

does.

---

### Why is \`isOpen\` inside \`.map()\`?

Because each FAQ needs to ask:

> Am I the open one?

For each item:

\`\`\`jsx
const isOpen = openIndex === index;
\`\`\`

So the same logic works for every item.

---

### Is \`isOpen\` state?

No.

It's **derived data**.

The actual state is:

\`\`\`text
openIndex
\`\`\`

We calculate:

\`\`\`text
isOpen
\`\`\`

from it.

This is an important React concept:

> Don't store information that you can calculate from existing state.

---

### What does \`&&\` mean here?

\`\`\`jsx
{isOpen && <Answer />}
\`\`\`

It means:

\`\`\`text
isOpen = true
     ↓
render Answer


isOpen = false
     ↓
render nothing
\`\`\`

It's a common React pattern for [conditional rendering](https://react.dev/learn/conditional-rendering).

---

### What does \`index\` mean?

When \`.map()\` goes through the array:

\`\`\`text
first item  → index 0
second item → index 1
third item  → index 2
\`\`\`

So \`index\` gives each item a position.

---

## Try changing it

1. Make multiple items stay open at the same time.
    
2. Add an arrow instead of \`+\`.
    
3. Rotate the arrow.
    
4. Change the animation.
    
5. Add a second level of nested questions.
    
6. Move the FAQ data into a separate file.
    
7. Turn the accordion into a reusable component that receives \`faqs\` as a prop.
    
8. Build a controlled version where the parent decides which item is open.
    

The first exercise is particularly useful.

It forces you to ask:

> If more than one item can be open, is one \`openIndex\` still enough?

The answer is no.

That is how you start thinking about **choosing the right shape of state** instead of memorising patterns.

---

## What this component teaches

The bigger pattern is:

\`\`\`text
collection of data
       ↓
.map()
       ↓
each item gets an index
       ↓
compare index with state
       ↓
derive item state
       ↓
conditionally render UI
\`\`\`

And the deeper React idea is:

\`\`\`text
state
 ↓
derived information
 ↓
UI
\`\`\`

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [React state](https://react.dev/learn/state-a-components-memory)
    
- [JavaScript arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    
- [JavaScript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
    
- [JavaScript \`map()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    
- [JavaScript ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)`,jD=`A card that expands into a larger detail view when clicked.

This component is mainly about understanding **UI states** & how React switches between them.

---

## What are we building?

Initially we have a small card:

\`\`\`text
┌──────────────────────┐
│ Weekly Notes         │
│ Ideas from this week │
└──────────────────────┘
\`\`\`

When we click it:

\`\`\`text
┌─────────────────────────────┐
│ Weekly Notes             ✕  │
│                             │
│ Full details about the      │
│ notes appear here...        │
│                             │
└─────────────────────────────┘
\`\`\`

There are really **two UI states**:

\`\`\`text
collapsed
    ↓
expanded
\`\`\`

---

## The mental model

We need one piece of information:

\`\`\`jsx
const [isExpanded, setIsExpanded] = useState(false);
\`\`\`

Think of it as a switch:

\`\`\`text
isExpanded = false
        ↓
show small card


isExpanded = true
        ↓
show expanded card
\`\`\`

The complete flow:

\`\`\`text
isExpanded = false
       ↓
small card is shown
       ↓
user clicks card
       ↓
setIsExpanded(true)
       ↓
React re-renders
       ↓
small card disappears
       ↓
expanded card appears
\`\`\`

When the user closes it:

\`\`\`text
click the ✕ button
       ↓
setIsExpanded(false)
       ↓
React re-renders
       ↓
expanded card disappears
       ↓
small card appears again
\`\`\`

---

## The most important part of the code

### Small card

\`\`\`jsx
{!isExpanded && (
  <motion.button>
    ...
  </motion.button>
)}
\`\`\`

Read this as:

> If \`isExpanded\` is false, show the small card.

conditionally rendering already learned in tab switching. 


\`\`\`text
isExpanded = false

!isExpanded
    ↓
!false
    ↓
true
\`\`\`

So the small card renders.

---

## After clicking

The small card has:

\`\`\`jsx
onClick={() => setIsExpanded(true)}
\`\`\`

So:

\`\`\`text
click
  ↓
setIsExpanded(true)
  ↓
isExpanded = true
\`\`\`

Now:

\`\`\`jsx
!isExpanded
\`\`\`

becomes:

\`\`\`text
!true
 ↓
false
\`\`\`

So React does not render the small card.

---

## The expanded card

The other part says:

\`\`\`jsx
{isExpanded && (
  ...
)}
\`\`\`

Read this as:

> If \`isExpanded\` is true, render the expanded version.

So after clicking:

\`\`\`text
isExpanded = true

true && (...)
      ↓
expanded card renders
\`\`\`

This means the component is essentially:

\`\`\`text
                  isExpanded
                      │
              ┌───────┴───────┐
              │               │
            false            true
              │               │
              ▼               ▼
         small card      expanded card
\`\`\`

This is the React logic.

**Everything else comes after this.**

---

# So why do we have two cards?

This is an important question.

We're not actually taking one HTML element & magically making it bigger.

We have:

\`\`\`text
small card
\`\`\`

and:

\`\`\`text
expanded card
\`\`\`

They are two different rendered elements.

React switches between them.

Without animation, this would simply be:

\`\`\`text
small card
     ↓
remove it
     ↓
show expanded card
\`\`\`

---

# Then what is \`layoutId\` doing?

Now we introduce Framer Motion.

Small card:

\`\`\`jsx
<motion.button layoutId={card.id}>
\`\`\`

Expanded card:

\`\`\`jsx
<motion.div layoutId={card.id}>
\`\`\`

Assume:

\`\`\`jsx
card.id = "notes-card"
\`\`\`

So both elements have:

\`\`\`text
layoutId = "notes-card"
\`\`\`

This tells Framer Motion:

> These two elements represent the same visual object.

React is still responsible for:

\`\`\`text
which version exists?
\`\`\`

Framer Motion is responsible for:

\`\`\`text
how do we visually transition between them?
\`\`\`

So:

\`\`\`text
REACT

small card
    ↓
expanded card


FRAMER MOTION

"these have the same layoutId"
    ↓
animate the change
\`\`\`

---

# The title has its own layoutId

The small card contains:

\`\`\`jsx
<motion.h3
  layoutId={\`\${card.id}-title\`}
>
  {card.title}
</motion.h3>
\`\`\`

The expanded card contains the same:

\`\`\`jsx
<motion.h3
  layoutId={\`\${card.id}-title\`}
>
  {card.title}
</motion.h3>
\`\`\`

If:

\`\`\`text
card.id = "notes-card"
\`\`\`

then:

\`\`\`text
notes-card-title
\`\`\`

identifies the title.

So Framer Motion can also animate:

\`\`\`text
Weekly Notes
\`\`\`

from its position in the small card to its position in the expanded card.

---

# What about the detail text?

The detail text does NOT have a \`layoutId\`.

Instead:

\`\`\`jsx
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.15 }}
>
\`\`\`

It simply fades in.

Why?

Because there wasn't a detail paragraph in the small card.

There is nothing to connect.

So:

\`\`\`text
CARD
layoutId
   ↓
small card → expanded card


TITLE
layoutId
   ↓
small title → expanded title


DETAIL
no layoutId
   ↓
just fade in
\`\`\`

---

# What is AnimatePresence doing?

When:

\`\`\`text
isExpanded = false
\`\`\`

the expanded card doesn't exist.

When:

\`\`\`text
isExpanded = true
\`\`\`

it gets rendered.

When it changes back to false, React wants to remove it.

\`AnimatePresence\` lets Framer Motion animate an element **when it is being removed**.

So:

\`\`\`text
isExpanded = false
        ↓
React says:
"expanded card should go away"
        ↓
AnimatePresence:
"let it play its exit animation first"
\`\`\`

---

# The whole thing

\`\`\`text
                isExpanded
                     │
                     ▼
              ┌─────────────┐
              │    false    │
              └──────┬──────┘
                     │
                     ▼
                 small card
                     │
                   click
                     │
                     ▼
             setIsExpanded(true)
                     │
                     ▼
              ┌─────────────┐
              │    true     │
              └──────┬──────┘
                     │
                     ▼
               expanded card
                     │
                     │
              layoutId connects
                     │
                     ▼
          Framer Motion animates
                     │
                     ▼
             small → expanded
\`\`\`

---

## New concepts in this component

### React

- \`useState\`
- conditional rendering
- \`&&\`
- \`!\`
- re-render
- component state


### JavaScript
- template literals
- object properties
- boolean values

### Framer Motion
- \`motion\`
- \`layoutId\`
- \`AnimatePresence\`
- \`initial\`
- \`animate\`
- \`exit\`
- \`transition\`

### CSS / Tailwind

- \`fixed\` 
- \`inset-0\`
- \`z-index\`
- positioning
- overlay


---

## Things I initially need to understand

**Does \`layoutId\` decide which card appears?**

No.

\`isExpanded\` decides that.

**Does Framer Motion create the expanded card?**

No.

React renders the expanded card.

**Why are there two card elements?**

Because we're representing two different UI states.

**Why does the transition look like one card expanding?**

Because both versions share the same \`layoutId\`.

---

## Two small revisions worth calling out

The expanded card went through two changes after the version described above:

**The "Close" text button became an X icon.** A text button reads fine, but expanded detail views — cards, modals, drawers — conventionally close via a small icon in the corner rather than a labeled button competing for space with the actual content. The button is now:

\`\`\`jsx
<button
  onClick={() => setIsExpanded(false)}
  aria-label="Close"
  className="absolute right-4 top-4 rounded-full p-1 text-neutral-900/60 transition-colors hover:bg-black/10 hover:text-neutral-900"
>
  <X className="h-4 w-4" />
</button>
\`\`\`

\`aria-label="Close"\` matters here specifically because the button no longer has any visible text — without it, the button would be announced to assistive technology as unlabeled.

**The expanded card's background became yellow** (\`bg-yellow-400\`), a deliberate style choice rather than a default. Notice the text colors changed alongside it — \`text-neutral-900\` / \`text-neutral-800\` instead of white/gray — because dark text needed enough contrast against a light, saturated background. This is a small but real lesson: changing a background color usually means re-checking every text color layered on top of it, not just the background itself.

---

## Try changing it

1. Remove \`layoutId\` from both cards.
    
2. Keep \`layoutId\` on the cards but remove it from the title.
    
3. Remove \`AnimatePresence\`.
    
4. Remove the detail fade animation.
    
5. Change the card's expanded width.
    
6. Add an icon to the small card & connect it with \`layoutId\`.
    
7. Add a second card & make each card expand independently.
    

The last one is especially useful because it forces you to think about **state per item**.

---

## What this component teaches

The bigger React pattern is:

\`\`\`text
UI state
   ↓
conditional rendering
   ↓
different UI
\`\`\`

The bigger Framer Motion pattern is:

\`\`\`text
two related layouts
   ↓
same layoutId
   ↓
visual transition between them
\`\`\`

These are two separate concepts working together.

---

## Next concepts

- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Shared layout animations (layoutId)](https://motion.dev/docs/react-layout-animations)
- [AnimatePresence](https://motion.dev/docs/react-animate-presence)
- [ARIA labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [Color contrast basics](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)`,ID=`A copy-to-clipboard button whose icon morphs into a checkmark for a moment after copying, then reverts.

## What are we building?

A button that:

- copies a fixed string to the system clipboard using a real browser API
- swaps its icon from a copy icon to a checkmark the instant the copy succeeds
- reverts back to the copy icon automatically after 1.5 seconds
- fails silently and safely if the browser refuses the copy (no crash, no error shown to the user)

The important part: this is the **shortest** component in the series, but it's the first one that talks to an *asynchronous* browser API instead of a synchronous one like \`document.body.style\` or \`addEventListener\`.

---

## Mental model

\`\`\`text
user clicks the button
        │
        ▼
  handleCopy() runs
        │
        ▼
await navigator.clipboard.writeText(SNIPPET)
        │
   ┌────┴────┐
 succeeds    fails
   │           │
   ▼           ▼
setCopied(true)   (caught, ignored)
   │
   ▼
icon becomes ✓
   │
(1500ms later, via setTimeout)
   │
   ▼
setCopied(false)
   │
   ▼
icon becomes copy-icon again
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const SNIPPET = "npm install component-lab";

export default function CopyToClipboard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SNIPPET);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (permissions, insecure context, etc.) — copy silently no-ops.
    }
  }

  return (
    <div>
      <code>{SNIPPET}</code>
      <button onClick={handleCopy} aria-label="Copy to clipboard">
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}
\`\`\`

---

## 1. \`navigator.clipboard\` is a browser API, not a React one

\`\`\`jsx
await navigator.clipboard.writeText(SNIPPET);
\`\`\`

\`navigator\` is a global object the browser gives every page — it's how JavaScript reaches out to things outside the page itself (the clipboard, geolocation, battery status, and more). React never wraps or replaces this; it's called directly, the same way you'd call it in plain JavaScript with no framework at all. This is worth noticing because it's easy to assume "if it's in a \`.jsx\` file, it must be a React thing" — it isn't. \`useState\` is React. \`navigator.clipboard\` is the browser.

---

## 2. Why \`async\` and \`await\`

\`\`\`jsx
async function handleCopy() {
  await navigator.clipboard.writeText(SNIPPET);
  ...
}
\`\`\`

Writing to the clipboard isn't instant from the browser's point of view — it may need to check permissions first, which takes an unknown amount of time. \`writeText\` reflects that by returning a **Promise** (a placeholder for "a value that will exist later") instead of finishing immediately.

\`async\` marks a function as one that's allowed to \`await\` something. \`await\` pauses *that function* — not the whole page — until the Promise settles, then continues with whatever comes next. Without \`await\`, \`setCopied(true)\` would run immediately, before the browser had actually confirmed the copy succeeded.

---

## 3. \`try\`/\`catch\` around an API that might refuse

\`\`\`jsx
try {
  await navigator.clipboard.writeText(SNIPPET);
  setCopied(true);
  setTimeout(() => setCopied(false), 1500);
} catch {
  // Clipboard API unavailable (permissions, insecure context, etc.) — copy silently no-ops.
}
\`\`\`

\`writeText\` can fail — the user might have denied clipboard permission, or the page might not be served over HTTPS (the Clipboard API refuses to work on insecure origins). When an \`await\`ed Promise fails, it *throws*, the same way a regular synchronous error would. \`try\`/\`catch\` catches that: if the copy fails, execution jumps straight to \`catch\`, skipping \`setCopied(true)\` entirely — so the icon simply never changes, rather than the app crashing or showing a scary error for something the user can't really fix from inside your UI.

---

## 4. Reverting automatically with \`setTimeout\`

\`\`\`jsx
setCopied(true);
setTimeout(() => setCopied(false), 1500);
\`\`\`

This is the same idea used in the Toast Notification — flip state on, then schedule flipping it back off after a fixed delay. There's no cleanup function here (unlike the Drawer Modal's \`useEffect\`-based listeners) because this isn't tied to a mount/unmount lifecycle — it's a one-off timer kicked off by a single click, which is fine for something this short-lived.

---

## 5. Two icons, one ternary

\`\`\`jsx
{copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
\`\`\`

Both \`Copy\` and \`Check\` are imported from \`lucide-react\` (the same icon set used for \`Heart\`, \`RefreshCw\`, \`X\`, and \`Star\` elsewhere in this project). The ternary swaps between them based on one boolean — no animation library needed for this particular swap, since it's an instant icon replacement rather than a morph. Compare this to the Like Heart Button, which *does* animate its icon change with a \`motion.span\` — the difference is a deliberate choice per component, not a rule.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`copied\` | React |
| \`async\`/\`await\`, \`try\`/\`catch\`, \`setTimeout\` | JavaScript |
| \`navigator.clipboard.writeText\` | Browser API |
| \`Copy\`, \`Check\` icons | lucide-react |
| layout classes | Tailwind |

---

## Things to understand

- the difference between a React API (\`useState\`) and a browser API (\`navigator.clipboard\`)
- Promises, \`async\`, and \`await\` at a basic level
- why \`await\` needs to live inside an \`async\` function
- \`try\`/\`catch\` for a Promise that might reject
- ternaries for swapping between two icons

---

## Try changing it

1. Make \`SNIPPET\` a prop instead of a hardcoded constant, so the button can copy anything.
2. Change the revert delay from \`1500\` to \`3000\` and notice how it changes the feel.
3. Add a visible error state for when the \`catch\` block runs, instead of failing silently.
4. Replace the icon swap with an animated one, like the Like Heart Button's \`motion.span\`.
5. Add a \`title="Copied!"\` tooltip that also appears/disappears with \`copied\`.

---

## What this component teaches

This is the first component to reach past \`useState\` and \`useEffect\` into **asynchronous JavaScript** — Promises, \`async\`/\`await\`, and \`try\`/\`catch\` around something that can genuinely fail for reasons outside your control (permissions, browser support, context). That combination — call an async browser API, handle both success and failure, update state accordingly — is the exact same shape you'll use later for real network requests (\`fetch\`), not just the clipboard.

---

## Next concepts

After this, you should understand:

- Promises, \`async\`, \`await\`
- \`try\`/\`catch\` for asynchronous failures
- distinguishing React APIs from plain browser/JavaScript APIs
- graceful degradation when a browser feature isn't available
`,_D=`# Drag Reorder List

A list where the user can drag items up & down to change their order. This component is important because the state is no longer just controlling whether something is open or closed.

**The state represents actual data that changes.**

---

## What are we building?

A list where:

- items can be dragged vertically
- dragging changes their order
- the new order becomes React state
- the UI re-renders using the new order
- Framer Motion handles the dragging interaction


---

## Mental model

\`\`\`text
             DRAG REORDER LIST
                     │
                     ▼
          items = [A, B, C, D]
                     │
                     ▼
              React renders
                     │
                user drags C
                     │
                     ▼
          Framer Motion detects
              new position
                     │
                     ▼
             onReorder(newItems)
                     │
                     ▼
              setItems(newItems)
                     │
                     ▼
              React re-renders
                     │
                     ▼
          items = [C, A, B, D]
                     │
                     ▼
              new order shown
\`\`\`

The important idea:

> **The drag interaction changes the data.**

---

## The code

\`\`\`jsx
import { useState } from "react";
import { Reorder } from "framer-motion";

const initialItems = [
  "Write daily component",
  "Review pull requests",
  "Ship the release",
  "Reply to feedback",
];

export default function DragReorderList() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      className="flex w-72 flex-col gap-2"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          whileDrag={{
            scale: 1.03,
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
          className="cursor-grab rounded-lg bg-neutral-800 px-4 py-3 text-sm text-neutral-200 active:cursor-grabbing"
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
\`\`\`

---

## 1. The initial data

\`\`\`jsx
const initialItems = [
  "Write daily component",
  "Review pull requests",
  "Ship the release",
  "Reply to feedback",
];
\`\`\`

This is just JavaScript.

It's an array.

At the beginning:

\`\`\`text
[A, B, C, D]
\`\`\`

The order matters.

---

## 2. Store the order in state

\`\`\`jsx
const [items, setItems] = useState(initialItems);
\`\`\`

Now React owns the current order.

Initially:

\`\`\`text
items
↓
[A, B, C, D]
\`\`\`

After dragging:

\`\`\`text
items
↓
[C, A, B, D]
\`\`\`

This is different from something like:

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);
\`\`\`

There, state represented a UI condition.

Here, state represents **actual application data**.

---

## 3. \`Reorder.Group\`

\`\`\`jsx
<Reorder.Group
  axis="y"
  values={items}
  onReorder={setItems}
>
\`\`\`

This is Framer Motion's reorder container.

It needs to know:

### Which direction?

\`\`\`jsx
axis="y"
\`\`\`

Vertical.

### What is the current order?

\`\`\`jsx
values={items}
\`\`\`

We give it the current array.

### What should happen when the order changes?

\`\`\`jsx
onReorder={setItems}
\`\`\`

This is the most important line.

It means:

> When the user creates a new order, put that new order into React state.

---

## 4. Why is \`onReorder={setItems}\` so powerful?

Usually you see:

\`\`\`jsx
onClick={() => setSomething(...)}
\`\`\`

Here we're passing the state setter directly:

\`\`\`jsx
onReorder={setItems}
\`\`\`

Framer Motion calls it with the new array.

Conceptually:

\`\`\`text
Framer Motion
      ↓
new order detected
      ↓
setItems(newOrder)
      ↓
React state changes
      ↓
React re-renders
\`\`\`

So Framer Motion doesn't permanently "own" the order.

React does.

---

## 5. \`.map()\` renders the items

\`\`\`jsx
items.map((item) => (
  <Reorder.Item>
    {item}
  </Reorder.Item>
))
\`\`\`

If:

\`\`\`jsx
items = ["A", "B", "C"]
\`\`\`

then React renders:

\`\`\`text
A
B
C
\`\`\`

If the state changes to:

\`\`\`jsx
items = ["C", "A", "B"]
\`\`\`

the same \`.map()\` now renders:

\`\`\`text
C
A
B
\`\`\`

This is why the UI follows the state.

---

## 6. \`Reorder.Item\`

Each item is wrapped in:

\`\`\`jsx
<Reorder.Item>
\`\`\`

This tells Framer Motion:

> This is one reorderable item inside the group.

We give it:

\`\`\`jsx
value={item}
\`\`\`

The value identifies what this item represents.

And:

\`\`\`jsx
key={item}
\`\`\`

gives React the item's identity.

---

## 7. \`key\` vs \`value\`

These look similar but have different jobs.

\`\`\`jsx
key={item}
\`\`\`

is for **React**.

It helps React identify list elements.

\`\`\`jsx
value={item}
\`\`\`

is for **Framer Motion's reorder system**.

It tells the reorder system what value belongs to that item.

Think:

\`\`\`text
key
↓
React identity

value
↓
reorder identity
\`\`\`

---

## 8. \`whileDrag\`

\`\`\`jsx
whileDrag={{
  scale: 1.03,
  boxShadow: "...",
}}
\`\`\`

This is purely visual feedback.

While the user is dragging:

\`\`\`text
normal
 ↓
slightly larger
 ↓
shadow appears
\`\`\`

This doesn't change the actual data.

It just makes the interaction feel better.

---

## 9. What happens when you drag?

Imagine:

\`\`\`text
A
B
C
D
\`\`\`

You drag C above A.

Framer Motion detects:

\`\`\`text
C
A
B
D
\`\`\`

Then:

\`\`\`text
onReorder(newItems)
        ↓
setItems(newItems)
        ↓
React state changes
        ↓
React re-renders
        ↓
items.map(...)
        ↓
C
A
B
D
\`\`\`

That is the complete loop.

---

## React vs Framer Motion

This distinction is important.

### React

Owns:

\`\`\`text
current order
state
rendering
data
\`\`\`

### Framer Motion

Owns:

\`\`\`text
drag interaction
position
movement
reordering mechanics
drag animation
\`\`\`

### JavaScript

Owns:

\`\`\`text
array
.map()
data manipulation
\`\`\`

### Tailwind

Owns:

\`\`\`text
layout
spacing
colors
cursor
visual styling
\`\`\`

---

## The full architecture

\`\`\`text
              initialItems
                   │
                   ▼
             React state
               items
                   │
                   ▼
             Reorder.Group
                   │
                   ▼
                .map()
                   │
                   ▼
             Reorder.Item
                   │
              user drags
                   │
                   ▼
           Framer Motion
                   │
                   ▼
             new order
                   │
                   ▼
             setItems()
                   │
                   ▼
             React state
                   │
                   └──────────→ re-render
\`\`\`

---

## Things to understand

Make sure these concepts are clear:

- array state
- \`.map()\`
- \`key\`
- state representing data
- passing a state setter as a callback
- controlled data flow
- Framer Motion \`Reorder.Group\`
- \`Reorder.Item\`
- \`axis\`
- \`value\`
- \`whileDrag\`

---

## Try changing it

1. Add 5 more items.
2. Change the list from tasks to favourite movies.
3. Add an ID to each item.
4. Add a delete button.
5. Add a checkbox for completed tasks.
6. Make completed tasks look different.
7. Try storing objects instead of strings:


\`\`\`jsx
const initialItems = [
  {
    id: 1,
    title: "Write daily component",
    completed: false,
  },
];
\`\`\`

Then render:

\`\`\`jsx
{item.title}
\`\`\`

This is a particularly useful exercise because real applications rarely contain only strings.

---

## What this component teaches

This is where you should start seeing an important React pattern:

\`\`\`text
STATE
  ↓
UI
  ↓
USER INTERACTION
  ↓
STATE CHANGES
  ↓
UI UPDATES
\`\`\`

React is essentially maintaining this relationship:

> **The UI is a representation of the current state.**

You don't manually tell the list:

> "Move C above A."

Instead, the interaction produces new data:

\`\`\`text
[A, B, C, D]
        ↓
[C, A, B, D]
\`\`\`

React then renders whatever the current data says.

---

## Next concepts

This naturally leads into:

- props
- callbacks
- lifting state up
- immutable updates
- objects inside arrays
- controlled components
- derived state
- reusable list components`,ND=`A draggable bottom sheet that snaps to open, half, or closed positions based on drag distance and velocity.

## What are we building?

A sheet with:

- three resting positions instead of the Drawer Modal's simple open/closed
- a drag handle that can be released anywhere, and snaps to the *nearest* position
- velocity-aware snapping — a fast flick can jump two positions, not just the nearest one

The important part: this builds directly on the Drawer Modal's ideas (\`drag="y"\`, \`onDragEnd\`, spring transitions) but replaces a single boolean (\`isOpen\`) with **one of several named positions**, and replaces "did you drag far enough" with **"which position is now closest."**

---

## Mental model

\`\`\`text
SNAPS = { open: 0, half: 170, closed: 310 }
ORDER = ["open", "half", "closed"]

                snap = "half"   (current resting position)
                       │
                 user drags sheet
                       │
                       ▼
                 onDragEnd fires
                       │
                       ▼
   projected = SNAPS[snap] + offset.y + velocity.y * 0.15
                       │
                       ▼
     for each key in ORDER, measure:
        distance = |SNAPS[key] - projected|
                       │
                       ▼
        keep whichever key has the
           smallest distance
                       │
                       ▼
              setSnap(closest)
                       │
                       ▼
       animate={{ y: SNAPS[snap] }}
       springs the sheet to that position
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";

const SNAPS = { open: 0, half: 170, closed: 310 };
const ORDER = ["open", "half", "closed"];

export default function DraggableBottomSheet() {
  const [snap, setSnap] = useState("half");

  function handleDragEnd(_, info) {
    const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;

    let closest = ORDER[0];
    let closestDistance = Infinity;
    for (const key of ORDER) {
      const distance = Math.abs(SNAPS[key] - projected);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = key;
      }
    }
    setSnap(closest);
  }

  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950">
      <p className="absolute inset-x-0 top-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
        underlying content
      </p>

      <motion.div
        drag="y"
        dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
        dragElastic={0.05}
        animate={{ y: SNAPS[snap] }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onDragEnd={handleDragEnd}
        className="absolute inset-x-0 top-0 h-full rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
      >
        <div className="flex justify-center pb-2 pt-3">
          <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        <div className="px-5 pb-5">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Sheet content</h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Drag the handle up or down — it snaps to open, half, or closed.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
\`\`\`

---

## 1. Positions as named values, not booleans

\`\`\`jsx
const SNAPS = { open: 0, half: 170, closed: 310 };
const [snap, setSnap] = useState("half");
\`\`\`

\`SNAPS\` maps a human-readable name to a pixel value — how far down (\`y\`) the sheet sits at that position. State itself just stores which *name* is active (\`"open"\`, \`"half"\`, or \`"closed"\`), not the raw pixel number. This is the same "derive, don't duplicate" idea from other components: \`SNAPS[snap]\` always gives you the correct pixel value, computed from the name, so the name and its position can never drift apart.

\`ORDER\` exists separately from \`SNAPS\` because object key order isn't something you should rely on for iteration — an explicit array says exactly which positions exist and in what order to check them.

---

## 2. Predicting where the drag would land

\`\`\`jsx
const projected = SNAPS[snap] + info.offset.y + info.velocity.y * 0.15;
\`\`\`

This is the trickiest line in the file, so read it piece by piece:

\`\`\`text
SNAPS[snap]        → where the sheet started this drag
+ info.offset.y     → how far it was actually dragged
+ info.velocity.y * 0.15  → a nudge in the direction it was moving
\`\`\`

Without the velocity term, releasing the sheet mid-flick would only ever snap to the *nearest* position by distance — even if you clearly flicked it hard toward a farther one. Multiplying velocity by a small factor (\`0.15\`) and adding it to the projected landing spot lets a fast flick "overshoot" toward the next position, the way real bottom sheets (iOS, Android) behave.

---

## 3. Finding the closest snap point

\`\`\`jsx
let closest = ORDER[0];
let closestDistance = Infinity;
for (const key of ORDER) {
  const distance = Math.abs(SNAPS[key] - projected);
  if (distance < closestDistance) {
    closestDistance = distance;
    closest = key;
  }
}
\`\`\`

This is a manual "find the minimum" loop — a pattern you'll see constantly outside of React too. Start by assuming the first item is the answer (\`closest = ORDER[0]\`, \`closestDistance = Infinity\` so anything beats it), then check each candidate: if this one's distance is smaller than the best one found so far, it becomes the new best.

By the end of the loop, \`closest\` holds whichever named position (\`"open"\`, \`"half"\`, or \`"closed"\`) is nearest to \`projected\`.

---

## 4. Comparing this to the Drawer Modal

The Drawer Modal asked one yes/no question:

\`\`\`jsx
if (info.offset.y > 100 || info.velocity.y > 500) onClose();
\`\`\`

This component asks "which of N options is closest," which can't be a single \`if\`. The loop above is what a boolean threshold check turns into once there are more than two possible outcomes. Same underlying gesture data (\`info.offset\`, \`info.velocity\`) — a fundamentally different question being asked of it.

---

## 5. \`dragElastic\` vs \`dragConstraints\`

\`\`\`jsx
dragConstraints={{ top: SNAPS.open, bottom: SNAPS.closed }}
dragElastic={0.05}
\`\`\`

\`dragConstraints\` sets the hard boundaries — the sheet physically cannot be dragged above \`SNAPS.open\` or below \`SNAPS.closed\`. \`dragElastic\` (a value from \`0\` to \`1\`) controls how much it's allowed to *stretch past* those boundaries before snapping back, like a rubber band. \`0.05\` here means "almost no give" — the sheet feels close to rigid at its limits, unlike the Drawer Modal's backdrop-drag which allowed a softer \`0.5\` on one side.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`snap\` | React |
| \`Math.abs\`, \`for...of\`, object lookups | JavaScript |
| \`drag\`, \`dragConstraints\`, \`dragElastic\` | Framer Motion |
| \`onDragEnd\`, \`info.offset.y\`, \`info.velocity.y\` | Framer Motion |
| \`animate\`, spring \`transition\` | Framer Motion |
| \`absolute\`, \`rounded-t-2xl\`, layout classes | Tailwind |

---

## Things to understand

- naming positions instead of storing raw pixel values
- combining drag offset *and* velocity to predict intent
- the "find the minimum" loop pattern
- the difference between a 2-state and an N-state drag interaction
- \`dragConstraints\` (hard limits) vs \`dragElastic\` (how much give at the limits)

---

## Try changing it

1. Add a fourth snap position, \`"peek"\`, between \`open\` and \`half\`.
2. Remove the \`* 0.15\` velocity term — notice how much harder it gets to flick between distant positions.
3. Make \`dragElastic\` larger (e.g. \`0.3\`) and feel the difference at the boundaries.
4. Replace the manual "find the minimum" loop with \`Array.prototype.reduce\`.
5. Log \`projected\` to the console on every drag end to see the number behind the decision.

---

## What this component teaches

The real lesson here is **how a two-outcome decision generalizes to N outcomes**. The Drawer Modal's \`if (farEnough || fastEnough)\` is really a special case of "which of these outcomes is the drag closest to" — it just happens to only have two outcomes (open, closed), so a single \`if\` was enough. The moment there's a third option, the same underlying gesture data needs a loop instead of a condition. Recognizing that shape — "this \`if/else\` is actually a 2-item version of a more general pattern" — is a genuinely useful instinct once you're writing more complex interactions.

---

## Next concepts

After this, you should understand:

- combining multiple signals (offset + velocity) into one decision
- iterative "find the best match" logic
- generalizing a 2-state interaction into an N-state one
- physical-feeling constraints (\`dragElastic\`) vs hard limits (\`dragConstraints\`)
`,MD=`A bottom sheet that opens from the bottom of the screen, locks page scrolling, closes when you click outside, press Escape, or drag it down.

## What are we building?

A drawer with:

- an open/close state
- a backdrop
- Escape key support
- locked body scrolling
- drag-to-close interaction
- enter & exit animations

The important part is that this component combines **React state + browser effects + Framer Motion interactions**.

---

## Mental model

\`\`\`text
                 DRAWER
                    │
                    ▼
             isOpen = false
                    │
              user clicks
             "Open Drawer"
                    │
                    ▼
             setIsOpen(true)
                    │
                    ▼
             React re-renders
                    │
                    ▼
              isOpen = true
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
    render drawer        render backdrop
          │                   │
          │              click outside
          │                   │
          │                   ▼
          │               onClose()
          │
          ├── press Escape
          │       ↓
          │    onClose()
          │
          └── drag down
                  ↓
             enough distance
             or velocity?
                  ↓
              onClose()
                  │
                  ▼
            isOpen = false
                  │
                  ▼
             drawer exits
\`\`\`

There are actually **three different jobs** happening here:

\`\`\`text
React
↓
decides whether drawer exists

Browser / JavaScript
↓
handles body scroll + keyboard events

Framer Motion
↓
handles animation + dragging
\`\`\`

---

## The code

\`\`\`jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DrawerModal() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const title = "Drawer";

  const children = (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
      This is the drawer content. Drag the handle down, click the backdrop,
      or press Escape to close it.
    </p>
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 flex max-h-[85vh] flex-col rounded-t-2xl bg-white shadow-xl dark:bg-neutral-900"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.5 }}
              onDragEnd={(_, info) => {
                if (
                  info.offset.y > 100 ||
                  info.velocity.y > 500
                ) {
                  onClose();
                }
              }}
              role="dialog"
              aria-modal="true"
              aria-label={title}
            >
              <div className="flex shrink-0 justify-center pb-1 pt-3">
                <div className="h-1.5 w-10 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>

              {title && (
                <div className="shrink-0 px-5 pb-3">
                  <h2 className="text-lg font-semibold">{title}</h2>
                </div>
              )}

              <div className="overflow-y-auto px-5 pb-6">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
\`\`\`

---

## 1. \`isOpen\` is the source of truth

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);
\`\`\`

The drawer only needs to know one thing:

> Should I be open?

So we use a boolean.

\`\`\`text
false → closed
true  → open
\`\`\`

When the button is clicked:

\`\`\`jsx
setIsOpen(true)
\`\`\`

React re-renders.

Now this:

\`\`\`jsx
{isOpen && (...)}
\`\`\`

becomes:

\`\`\`text
true && drawer
\`\`\`

So the drawer is rendered.

---

## 2. What does \`&&\` mean?

You have already seen this pattern many times:

\`\`\`jsx
{isOpen && <Drawer />}
\`\`\`

It means:

> Render \`<Drawer />\` only when \`isOpen\` is true.

Think:

\`\`\`text
condition && thing

false && thing → nothing
true && thing  → thing
\`\`\`

This is called **conditional rendering**.

---

## 3. \`AnimatePresence\`

Normally, when React stops rendering something:

\`\`\`jsx
{isOpen && <Drawer />}
\`\`\`

the element disappears immediately.

\`AnimatePresence\` allows Framer Motion to animate that removal.

\`\`\`text
isOpen = true
↓
drawer enters

isOpen = false
↓
drawer exits
↓
then removed
\`\`\`

That is why we use:

\`\`\`jsx
<AnimatePresence>
  {isOpen && (...)}
</AnimatePresence>
\`\`\`

---

## 4. The drawer animation

\`\`\`jsx
initial={{ y: "100%" }}
animate={{ y: 0 }}
exit={{ y: "100%" }}
\`\`\`

The drawer starts below the screen:

\`\`\`text
y: 100%
     ↓
     ┌─────────────┐
     │             │
     │    screen   │
     │             │
     └─────────────┘
             drawer
\`\`\`

Then:

\`\`\`text
y: 0
\`\`\`

moves it into place.

When closing:

\`\`\`text
y: 0
 ↓
y: 100%
\`\`\`

So the drawer slides back down.

---

## 5. The backdrop

The backdrop is a completely separate element:

\`\`\`jsx
<motion.div
  className="fixed inset-0 ..."
  onClick={onClose}
/>
\`\`\`

Its job is simple:

\`\`\`text
user clicks outside drawer
        ↓
      onClose()
        ↓
  setIsOpen(false)
\`\`\`

It also fades:

\`\`\`jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
\`\`\`

---

## 6. Why \`useEffect\`?

This component needs to affect things **outside React's rendered UI**.

For example:

\`\`\`jsx
document.body.style.overflow = "hidden";
\`\`\`

We're changing the browser's page, not a React element.

That's a **side effect**.

\`useEffect\` is React's mechanism for handling side effects.

\`\`\`jsx
useEffect(() => {
  // side effect
}, [dependency]);
\`\`\`

---

## 7. Locking page scrolling

When the drawer opens:

\`\`\`jsx
document.body.style.overflow = "hidden";
\`\`\`

The page behind the drawer can't scroll.

When it closes:

\`\`\`jsx
document.body.style.overflow = "";
\`\`\`

Scrolling is restored.

The dependency:

\`\`\`jsx
[isOpen]
\`\`\`

means:

> Run this effect whenever \`isOpen\` changes.

So:

\`\`\`text
isOpen changes
     ↓
effect runs
     ↓
lock/unlock body scroll
\`\`\`

---

## 8. Cleanup

This part:

\`\`\`jsx
return () => {
  document.body.style.overflow = "";
};
\`\`\`

is cleanup.

React runs cleanup when the effect needs to be cleaned up.

Cleanup is especially important for things like:

- timers
    
- event listeners
    
- subscriptions
    
- browser changes
    

You don't want effects from an old component state hanging around.

---

## 9. Escape key

We can listen to browser keyboard events:

\`\`\`jsx
window.addEventListener("keydown", handleKey);
\`\`\`

Then:

\`\`\`jsx
const handleKey = (e) => {
  if (e.key === "Escape") {
    onClose();
  }
};
\`\`\`

The browser gives us an event object \`e\`.

We inspect:

\`\`\`jsx
e.key
\`\`\`

to find out which key was pressed.

---

## 10. Why remove the listener?

We add:

\`\`\`jsx
window.addEventListener("keydown", handleKey);
\`\`\`

So we also need:

\`\`\`jsx
window.removeEventListener("keydown", handleKey);
\`\`\`

Otherwise, the listener can remain active after it is no longer needed.

This is another example of effect cleanup.

---

## 11. Dragging

Framer Motion gives us:

\`\`\`jsx
drag="y"
\`\`\`

This means:

> Allow the element to be dragged vertically.

Then:

\`\`\`jsx
dragConstraints={{ top: 0, bottom: 0 }}
\`\`\`

limits where the drawer can normally settle.

And:

\`\`\`jsx
dragElastic={{ top: 0, bottom: 0.5 }}
\`\`\`

allows some elastic movement.

---

## 12. \`onDragEnd\`

When dragging finishes:

\`\`\`jsx
onDragEnd={(_, info) => {
  if (
    info.offset.y > 100 ||
    info.velocity.y > 500
  ) {
    onClose();
  }
}}
\`\`\`

We ask:

> Did the user drag it far enough OR fast enough?

\`info.offset.y\` tells us how far it moved.

\`info.velocity.y\` tells us how quickly it was moving.

So:

\`\`\`text
drag down a lot
      OR
drag down quickly
      ↓
     close
\`\`\`

This is a good example of combining **interaction data + React state**.

---

## 13. What is \`role="dialog"\`?

\`\`\`jsx
role="dialog"
\`\`\`

tells assistive technology:

> This is a dialog-like interface.

And:

\`\`\`jsx
aria-modal="true"
\`\`\`

communicates that the dialog is currently modal.

Accessibility isn't separate from UI engineering. It is part of building the component correctly.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|\`isOpen\`|React|
|\`useState\`|React|
|\`useEffect\`|React|
|\`document.body\`|Browser / JavaScript|
|\`addEventListener\`|Browser / JavaScript|
|\`if\`|JavaScript|
|\`&&\`|JavaScript|
|\`drag\`|Framer Motion|
|\`animate\`|Framer Motion|
|\`AnimatePresence\`|Framer Motion|
|\`fixed\`, \`z-50\`, \`p-6\`|Tailwind|
|\`role\`, \`aria-modal\`|HTML / Accessibility|

---

## Things to understand

Before moving on, make sure these make sense:

- boolean state
- conditional rendering
- \`&&\`
- \`useEffect\`
- dependency arrays
- cleanup functions
- browser event listeners
- event objects
- \`AnimatePresence\`
- drag interactions
- accessibility attributes


---

## Try changing it

1. Make the drawer open from the **right** instead of the bottom.
2. Change the opening animation from a spring to a tween.
3. Add a close button.
4. Make the drawer 50% of the screen height.
5. Change the drag threshold from \`100\` to \`200\`.
6. Add a second piece of content.
7. Try removing \`AnimatePresence\` and see what changes.


---

## What this component teaches

This is an important jump from the earlier components.

You are no longer just changing visual state.

You are learning how React interacts with the **browser itself**:

\`\`\`text
React state
    ↓
UI

React effect
    ↓
browser

Framer Motion
    ↓
interaction + animation
\`\`\`

That pattern appears everywhere in real product interfaces.

---

## Next concepts

After this, you should understand:

- controlled components
- props
- composition
- \`children\`
- lifting state up
- reusable component APIs`,DD=`A button that opens a list of actions or options.

This component is useful because it combines **state + data + conditional rendering + animation + positioning**.

---

## What are we building?

A dropdown that:

- opens when the button is clicked
- renders menu items from an array
- closes when an item is selected
- closes when you click outside
- animates when entering & exiting
- animates its children one by one


---

## Mental model

\`\`\`text
                 DROPDOWN
                    │
                    ▼
             isOpen = false
                    │
              user clicks
               "Options"
                    │
                    ▼
             setIsOpen(true)
                    │
                    ▼
             React re-renders
                    │
                    ▼
              isOpen = true
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      render menu        render backdrop
          │                   │
        .map()            click outside
          │                   │
          ▼                   ▼
 Profile / Settings      setIsOpen(false)
 Billing / Sign out
          │
     click item
          │
          ▼
   setIsOpen(false)
\`\`\`

The key idea:

> **State answers what should exist. Data answers what should be rendered. Events change the state.**

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  "Profile",
  "Settings",
  "Billing",
  "Sign out",
];

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: -8,
  },

  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    scale: 0.95,
    y: -8,
    transition: {
      duration: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -8,
  },

  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
      >
        Options
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />

            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-20 mt-2 w-44 rounded-lg bg-neutral-800 p-1 shadow-xl"
            >
              {items.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-neutral-200 hover:bg-neutral-700"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\`

---

## 1. The state

\`\`\`jsx
const [isOpen, setIsOpen] = useState(false);
\`\`\`

Again, this is a boolean.

\`\`\`text
false → closed
true  → open
\`\`\`

When the button is clicked:

\`\`\`jsx
setIsOpen((prev) => !prev)
\`\`\`

This means:

> Take the previous value & flip it.

So:

\`\`\`text
false → true
true → false
\`\`\`

---

## 2. Why \`(prev) => !prev\`?

You could write:

\`\`\`jsx
setIsOpen(!isOpen)
\`\`\`

You will often see that.

But:

\`\`\`jsx
setIsOpen((prev) => !prev)
\`\`\`

explicitly says:

> Calculate the new state from the previous state.

This pattern is especially useful when the new state depends on the old state.

---

## 3. The menu data

\`\`\`jsx
const items = [
  "Profile",
  "Settings",
  "Billing",
  "Sign out",
];
\`\`\`

This is just JavaScript.

React doesn't know what an array is specifically for.

We are simply storing our menu data in an array.

Then:

\`\`\`jsx
items.map(...)
\`\`\`

turns that data into UI.

---

## 4. \`.map()\`

This:

\`\`\`jsx
items.map((item) => (
  <button>{item}</button>
))
\`\`\`

means:

> For every item in the array, create this piece of UI.

If:

\`\`\`jsx
items = ["Profile", "Settings", "Billing"]
\`\`\`

then \`.map()\` produces:

\`\`\`text
Profile
Settings
Billing
\`\`\`

This is one of the most important JavaScript concepts for React.

---

## 5. Why \`key={item}\`?

\`\`\`jsx
<motion.li key={item}>
\`\`\`

React needs a stable identity for each item in a list.

Here:

\`\`\`text
Profile
Settings
Billing
Sign out
\`\`\`

are unique, so the item itself works as the key.

The key helps React understand which item is which when the list changes.

---

## 6. Conditional rendering

This:

\`\`\`jsx
{isOpen && (
  <Menu />
)}
\`\`\`

means:

\`\`\`text
isOpen = false
↓
don't render menu

isOpen = true
↓
render menu
\`\`\`

Again:

\`\`\`text
condition && thing
\`\`\`

is a very common React pattern.

---

## 7. Click outside

We create an invisible element:

\`\`\`jsx
<div
  className="fixed inset-0 z-10"
  onClick={() => setIsOpen(false)}
/>
\`\`\`

It covers the screen.

So when the user clicks anywhere outside the dropdown:

\`\`\`text
click
 ↓
setIsOpen(false)
 ↓
React removes menu
\`\`\`

This is commonly called **click-away behavior**.

---

## 8. Why \`relative\` + \`absolute\`?

The wrapper:

\`\`\`jsx
<div className="relative">
\`\`\`

creates the positioning context.

The menu:

\`\`\`jsx
className="absolute left-0 top-full"
\`\`\`

is positioned relative to that wrapper.

Think:

\`\`\`text
button
  ↓
parent = relative
  ↓
menu = absolute
  ↓
position menu relative to parent
\`\`\`

\`top-full\` means:

> Put the top of the menu at the bottom of the parent.

That's why it appears underneath the button.

---

## 9. Variants

Instead of writing every animation directly:

\`\`\`jsx
initial={{ ... }}
animate={{ ... }}
exit={{ ... }}
\`\`\`

we define named states:

\`\`\`jsx
const menuVariants = {
  hidden: {...},
  visible: {...},
  exit: {...},
};
\`\`\`

Think of variants as **animation presets**.

\`\`\`text
hidden
↓
what should closed look like?

visible
↓
what should open look like?

exit
↓
what should disappearing look like?
\`\`\`

Then:

\`\`\`jsx
variants={menuVariants}
initial="hidden"
animate="visible"
exit="exit"
\`\`\`

connects those names to the animation.

---

## 10. Child animations

The menu itself has:

\`\`\`jsx
staggerChildren: 0.05
\`\`\`

That means:

> Don't animate all children at exactly the same time.

So:

\`\`\`text
Profile
   ↓
Settings
   ↓
Billing
   ↓
Sign out
\`\`\`

appear slightly after one another.

Each child uses:

\`\`\`jsx
variants={itemVariants}
\`\`\`

The parent controls **when** the children appear.

The child controls **how it appears**.

---

## 11. Parent → children relationship

This is a useful Framer Motion concept:

\`\`\`text
menuVariants
      │
      ├── controls menu
      │
      └── controls timing of children
                    │
                    ├── Profile
                    ├── Settings
                    ├── Billing
                    └── Sign out
\`\`\`

The React structure and animation structure are working together.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|\`isOpen\`|React|
|\`useState\`|React|
|\`items\`|JavaScript|
|\`.map()\`|JavaScript|
|\`key\`|React|
|\`&&\`|JavaScript|
|\`relative\` / \`absolute\`|CSS / Tailwind|
|\`variants\`|Framer Motion|
|\`staggerChildren\`|Framer Motion|
|\`AnimatePresence\`|Framer Motion|

---

## Things to understand

Make sure these concepts are becoming familiar:

- boolean state
    
- functional state updates
    
- \`.map()\`
    
- \`key\`
    
- conditional rendering
    
- click-away behavior
    
- \`relative\` + \`absolute\`
    
- Framer Motion variants
    
- parent/child animation
    
- \`staggerChildren\`
    

---

## Try changing it

1. Add an icon beside every item.
    
2. Change the menu to open toward the right.
    
3. Add a selected state.
    
4. Pass the items into the component as props.
    
5. Make clicking "Sign out" behave differently from the other items.
    
6. Change the animation direction.
    
7. Remove \`staggerChildren\` & compare the result.
    

---

## What this component teaches

This is your first strong example of **data-driven UI**.

Instead of manually writing:

\`\`\`jsx
<button>Profile</button>
<button>Settings</button>
<button>Billing</button>
<button>Sign out</button>
\`\`\`

you write:

\`\`\`jsx
items.map(...)
\`\`\`

Now the UI comes from data.

That's a fundamental React pattern:

\`\`\`text
data
 ↓
map
 ↓
UI
\`\`\`

---

## Next concepts

That leads directly into props, callbacks, controlled components, & reusable component APIs:

- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Responding to events](https://react.dev/learn/responding-to-events)
- [Framer Motion variants](https://motion.dev/docs/react-animation#variants)
- [Sharing state between components](https://react.dev/learn/sharing-state-between-components)
`,LD=`A gallery where clicking a thumbnail opens a larger version of that same image.

This component is useful for understanding **selected state, derived data, conditional rendering, \`find()\`, & Framer Motion's \`layoutId\`**.

---

## What are we building?

A gallery with:

- multiple image thumbnails
    
- a selected image
    
- a large image view
    
- a backdrop
    
- an enter/exit animation
    
- a shared layout animation between thumbnail & large image
    

---

## Mental model

\`\`\`text
             IMAGE GALLERY
                    │
                    ▼
            selectedId = null
                    │
                    ▼
             show thumbnails
                    │
              user clicks
                image 2
                    │
                    ▼
          setSelectedId("2")
                    │
                    ▼
             React re-renders
                    │
                    ▼
       selected = images.find(...)
                    │
                    ▼
          render large image
                    │
                    ▼
       same layoutId = "2"
                    │
                    ▼
          Framer Motion sees
          thumbnail + large image
          as the same visual thing
\`\`\`

The important thing here is:

> We store **which image is selected**, not the entire selected image.

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    id: "1",
    url: "https://picsum.photos/seed/one/400/300",
  },
  {
    id: "2",
    url: "https://picsum.photos/seed/two/400/300",
  },
  {
    id: "3",
    url: "https://picsum.photos/seed/three/400/300",
  },
  {
    id: "4",
    url: "https://picsum.photos/seed/four/400/300",
  },
];

export default function ImageGalleryLayout() {
  const [selectedId, setSelectedId] = useState(null);

  const selected = images.find(
    (img) => img.id === selectedId
  );

  return (
    <div className="w-80">
      <div className="grid grid-cols-2 gap-2">
        {images.map((img) => (
          <motion.img
            key={img.id}
            layoutId={img.id}
            src={img.url}
            onClick={() => setSelectedId(img.id)}
            className="h-24 w-full cursor-pointer rounded-lg object-cover"
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70"
            onClick={() => setSelectedId(null)}
          >
            <motion.img
              layoutId={selected.id}
              src={selected.url}
              className="max-h-[80vh] max-w-[80vw] rounded-xl object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\`

---

## 1. The image data

Each image is an object:

\`\`\`jsx
{
  id: "1",
  url: "..."
}
\`\`\`

So our array looks like:

\`\`\`text
images
  ↓
[
  { id: "1", url: "..." },
  { id: "2", url: "..." },
  { id: "3", url: "..." },
  { id: "4", url: "..." }
]
\`\`\`

This is JavaScript data.

React doesn't create this data.

We give the data to React.

---

## 2. \`selectedId\`

\`\`\`jsx
const [selectedId, setSelectedId] = useState(null);
\`\`\`

Initially:

\`\`\`text
selectedId = null
\`\`\`

That means:

> No image is selected.

When the user clicks image 2:

\`\`\`jsx
setSelectedId(img.id)
\`\`\`

Now:

\`\`\`text
selectedId = "2"
\`\`\`

Notice that we store:

\`\`\`text
"2"
\`\`\`

not:

\`\`\`text
{
  id: "2",
  url: "..."
}
\`\`\`

We only need the identity of the selected image.

---

## 3. Derived data with \`find()\`

Now we need the actual image object.

\`\`\`jsx
const selected = images.find(
  (img) => img.id === selectedId
);
\`\`\`

\`.find()\` is JavaScript.

It means:

> Look through the array & return the first item that matches this condition.

If:

\`\`\`text
selectedId = "2"
\`\`\`

then:

\`\`\`text
images.find(...)
       ↓
{ id: "2", url: "..." }
\`\`\`

So:

\`\`\`jsx
selected
\`\`\`

is the complete selected image object.

---

## 4. Why not store \`selected\` directly?

You could technically store the whole object.

But then you'd have two pieces of information:

\`\`\`text
selectedId
selected
\`\`\`

which can potentially get out of sync.

Instead:

\`\`\`text
selectedId
   ↓
images.find(...)
   ↓
selected
\`\`\`

There is only one source of truth.

This is called **derived state**.

The selected image can be calculated from the selected ID, so we don't need to store both.

---

## 5. Rendering the thumbnails

\`\`\`jsx
{images.map((img) => (
  <motion.img
    key={img.id}
    src={img.url}
    onClick={() => setSelectedId(img.id)}
  />
))}
\`\`\`

The process is:

\`\`\`text
images array
    ↓
.map()
    ↓
one image element per object
\`\`\`

Each image gets:

\`\`\`jsx
src={img.url}
\`\`\`

so the browser knows what image to display.

---

## 6. Clicking an image

This:

\`\`\`jsx
onClick={() => setSelectedId(img.id)}
\`\`\`

means:

> When this image is clicked, store its ID as the selected ID.

For image 3:

\`\`\`text
click image 3
    ↓
img.id = "3"
    ↓
setSelectedId("3")
    ↓
React re-renders
\`\`\`

---

## 7. Conditional rendering

The large image only exists when there is a selected image:

\`\`\`jsx
{selected && (
  <motion.div>
    ...
  </motion.div>
)}
\`\`\`

Remember:

\`\`\`text
null && thing
    ↓
nothing

object && thing
    ↓
thing
\`\`\`

So:

\`\`\`text
selected = null
↓
no large image

selected = image object
↓
large image exists
\`\`\`

---

## 8. Closing the image

The backdrop has:

\`\`\`jsx
onClick={() => setSelectedId(null)}
\`\`\`

So:

\`\`\`text
click backdrop
     ↓
setSelectedId(null)
     ↓
selected = undefined
     ↓
selected && (...)
     ↓
nothing
\`\`\`

\`AnimatePresence\` then allows the large image view to animate out.

---

## 9. The important \`layoutId\`

The thumbnail has:

\`\`\`jsx
layoutId={img.id}
\`\`\`

The large image has:

\`\`\`jsx
layoutId={selected.id}
\`\`\`

Suppose image 2 is selected.

Both become:

\`\`\`text
layoutId="2"
\`\`\`

Framer Motion sees:

\`\`\`text
thumbnail
layoutId="2"

      ↓

large image
layoutId="2"
\`\`\`

and understands:

> These represent the same visual element across two different layouts.

So instead of simply:

\`\`\`text
thumbnail disappears
large image appears
\`\`\`

you get a visual transition:

\`\`\`text
thumbnail
   ↓
expands
   ↓
large image
\`\`\`

---

## 10. React vs Framer Motion

This distinction is important.

React decides:

\`\`\`text
which image is selected?
should the large image exist?
\`\`\`

JavaScript decides:

\`\`\`text
which object matches the ID?
\`\`\`

Framer Motion decides:

\`\`\`text
how does the selected image visually move
from one layout to another?
\`\`\`

---

## What belongs to what?

|Concept|Technology|
|---|---|
|\`selectedId\`|React|
|\`useState\`|React|
|conditional rendering|React|
|\`images\`|JavaScript|
|\`.map()\`|JavaScript|
|\`.find()\`|JavaScript|
|\`layoutId\`|Framer Motion|
|\`AnimatePresence\`|Framer Motion|
|\`grid\`|CSS / Tailwind|
|\`fixed\`|CSS / Tailwind|

---

## Things to understand

- objects inside arrays
    
- \`.map()\`
    
- \`.find()\`
    
- selected state
    
- derived state
    
- conditional rendering
    
- \`layoutId\`
    
- \`AnimatePresence\`
    
- source of truth
    

---

## Try changing it

1. Add 4 more images.
    
2. Add captions to each image.
    
3. Show the caption in the expanded view.
    
4. Add a close button.
    
5. Add Previous / Next buttons.
    
6. Store image objects with:
    

\`\`\`jsx
{
  id: "1",
  url: "...",
  title: "Mountain",
  category: "Travel"
}
\`\`\`

7. Try changing \`layoutId={img.id}\` to a static value and observe what happens.
    

---

## What this component teaches

This component introduces an important principle:

> **Don't store something in state if you can calculate it from existing state.**

Instead of:

\`\`\`text
selectedImage
selectedId
\`\`\`

we have:

\`\`\`text
selectedId
    ↓
find()
    ↓
selectedImage
\`\`\`

One source of truth. Everything else is derived.

---

## Next concepts

This leads naturally into:

- derived state
    
- lifting state up
    
- props
    
- controlled components
    
- reusable component APIs`,OD=`## Why Component Lab?

**Learn on the go, learn by doing.**

There's a real gap for designers who want to learn to code: most resources assume you're starting from zero or already deep in engineering, nothing in between. The best way to learn anything is to get your hands dirty: build things, get stuck, sob a little, figure it out.

If vibe-coding alone isn't cutting it and you want to actually understand what's happening, this is for you. Web only, for now: React, Framer Motion.

This project is an attempt to:

1. Dissect the logic behind the code: not just copy it, understand why it works
2. Show what belongs where: what's Tailwind, what's React, what's plain JavaScript
3. Point you toward what to learn next to build a stronger foundation
4. Stay alive: this is a living document, not a finished one. Feedback and questions welcome on Twitter or by email.

## How this project is organized

\`\`\`
component-lab/
├── breakdown/                  ← the lesson write-up for each component (this file included)
├── src/
│   └── components/
│       ├── 001-toggle-switch/
│       │   ├── ToggleSwitch.jsx
│       │   ├── meta.js         ← day, name, description, tags
│       │   └── notes.md        ← your own scratch notes as you go
│       ├── 002-tab-switcher/
│       │   ├── TabSwitcher.jsx
│       │   ├── meta.js
│       │   └── notes.md
│       └── 003-.../
\`\`\`

Each numbered folder is one day's build. The number in the folder name (\`001\`, \`002\`, ...) is the actual build order: the category sections further down group the *same* components by concept instead, which is a different lens on the same list, not a different list.

## What each lesson breakdown covers

Every write-up in \`/breakdown\` (including this index) tries to work through the same shape:

1. What are we building?
2. What problem does it solve?
3. Mental model
4. How the pieces work together
5. What belongs to React / JS / Tailwind / Framer Motion
6. The code
7. Concept-by-concept walkthrough
8. What belongs to what (a quick reference table)
9. Things to understand before moving on
10. Try changing it
11. What this component teaches / what to learn next

Not every early breakdown hits every one of these exactly: the format itself got more consistent as the project went on.

## How the categories below are organized

Grouped by **what you're learning**, not the order things were built in. The day number (001, 002, ...) still tells you the actual build sequence and matches the folder in \`src/components/\` — this grouping is just a different lens on the same components, for going back to study a concept rather than a specific day.

---

### 01 — State & Rendering

1. Toggle Switch — a boolean driving what's on screen
2. Tab switcher — state as a value, not just true/false
3. Accordion — derived state (\`isOpen\` calculated, not stored, per item)

### 02 — Interaction

4. Tooltip — responding to real-time browser events (mouse position)
5. Like Button — one boolean driving both appearance *and* animation replay
6. Toast — state as an array of independent, timed items
7. Rating Stars — hover-driven fill, preview vs. commit state
8. Password Strength Meter — live feedback as you type, data-driven rules

### 03 — Effects & Browser APIs

9. Skeleton Loader — \`useEffect\`, timers, cleanup
10. Drawer Modal — \`useEffect\` reaching outside React (scroll lock, keyboard listener)
11. Copy To Clipboard — the Clipboard API, async/await

### 04 — Data & Lists

12. Dropdown Menu — data → \`.map()\` → UI, staggered children
13. Drag Reorder — state that represents real data, not just UI condition
14. Image gallery — selected-ID pattern + shared layout transitions (\`layoutId\`)
15. Search — filtering a list as you type, *upcoming*

### 05 — Layout & Motion

16. Progress Stepper — one piece of state driving many visual details
17. Segmented control — shared layout animation; later became a reusable primitive
18. Card that expands — \`layoutId\` morphing between two different layouts
19. Swipeable Card Stack — drag gestures + exit direction
20. Draggable Bottom Sheet — drag with multiple snap points
21. Pull To Refresh — drag distance driving a threshold-triggered action

### 06 — Component Architecture

22. Modal *(same build as Drawer Modal — revisited here for composition/reuse rather than its effects)*
23. Controlled Dropdown *(same build as Dropdown Menu — revisited here for the controlled-component pattern, the way \`Segmented\` was extracted from Segmented Control)*
24. Forms — *upcoming*
25. Async Data — *upcoming*

---

## Later (GSAP → Three.js, not yet categorized like the above)

**Week 4 — GSAP (timeline, scroll)**  
21. Scroll-triggered fade/slide-in sections  
22. Animated number counter (stats section)  
23. Text split-and-reveal (letters/words stagger in)  
24. SVG line-draw animation (logo or icon draws itself)  
25. Sticky horizontal scroll section  
26. Cursor-follow blob/magnetic button  
27. Parallax hero section

**Week 5 — GSAP, more complex**  
28. Marquee/infinite scroll ticker  
29. Image hover distortion (simple, no shader yet — just scale/clip-path)  
30. Animated navbar that shrinks on scroll  
31. Timeline-based loading sequence (like an app intro)  
32. Draggable slider/carousel with GSAP Draggable

**Week 6 — Three.js/WebGL start**  
33. Rotating 3D shape that responds to mouse  
34. Particle field background (mouse-reactive)  
35. 3D card tilt on hover (react-three-fiber)  
36. Image plane with basic shader (grayscale-to-color on hover)  
37. Simple dither/noise shader pass `,FD=`A heart icon that toggles between liked & unliked, with a small spring bounce — the same feel as liking a post on X/Twitter.

The goal isn't just to make a heart change color. This component introduces an important idea:

> **the same piece of state can drive both a visual change (color/fill) and an animation, at the same time.**

---

## What are we building?

Initially:

\`\`\`text
♡  (outline, gray)
\`\`\`

After clicking:

\`\`\`text
♥  (filled, red, with a little pop)
\`\`\`

Click again:

\`\`\`text
♡  (outline, gray)
\`\`\`

One boolean decides everything — the icon's fill, its color, and whether the bounce replays.

---

## The mental model

We only need one thing:

\`\`\`text
isLiked
\`\`\`

\`\`\`jsx
const [isLiked, setIsLiked] = useState(false);
\`\`\`

The flow:

\`\`\`text
isLiked = false
    ↓
outline heart, gray
    ↓
user clicks
    ↓
setIsLiked(prev => !prev)
    ↓
isLiked = true
    ↓
React re-renders
    ↓
filled heart, red
    ↓
bounce plays
\`\`\`

Click again and it runs the same flow in reverse.

---

## Step 1 — the liked state

\`\`\`jsx
const [isLiked, setIsLiked] = useState(false);
\`\`\`

Same boolean pattern as the Toggle Switch — one value, two possible states.

\`\`\`text
false → true → false
\`\`\`

---

## Step 2 — using a real icon instead of an emoji

Early drafts of this component used emoji (🤍 / ❤️) for the heart. Emoji render inconsistently across operating systems and can't be styled — no controlling their exact size, stroke width, or color.

Instead, we use an actual icon component from [lucide-react](https://lucide.dev/):

\`\`\`jsx
import { Heart } from "lucide-react";
\`\`\`

\`Heart\` is just an SVG under the hood, which means it accepts normal SVG props — \`className\` for size/color via Tailwind, and \`fill\` to control whether it's outlined or solid:

\`\`\`jsx
<Heart
  className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
  fill={isLiked ? "currentColor" : "none"}
/>
\`\`\`

\`\`\`text
isLiked = false
    ↓
fill="none", gray outline

isLiked = true
    ↓
fill="currentColor", red fill
\`\`\`

\`fill="currentColor"\` means "fill with whatever the current text color is" — so it automatically matches \`text-red-500\` without hardcoding a second color value.

---

## Step 3 — the bounce

\`\`\`jsx
<motion.span
  key={isLiked}
  initial={{ scale: 0.6 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 700, damping: 15 }}
>
\`\`\`

The important part here is \`key={isLiked}\`.

Normally, React reuses the same DOM element across re-renders and just updates its props. But when the \`key\` changes, React treats it as a **brand new element** — it unmounts the old one and mounts a fresh one. Framer Motion sees a fresh mount and replays \`initial → animate\` from scratch.

\`\`\`text
isLiked: false → true
    ↓
key changes (false → true)
    ↓
React treats this as a new element
    ↓
Framer Motion replays the pop
\`\`\`

That's why the bounce plays **both when liking and unliking** — every change to \`isLiked\` is a new \`key\`, so the animation restarts every time, in either direction.

---

## What belongs to what?

### React
- \`useState\`
- state
- \`key\` and why changing it forces a remount

### JavaScript
- boolean toggling with \`!\`
- ternary \`? :\`

### Tailwind
- \`text-red-500\` / \`text-neutral-400\`
- sizing (\`h-6 w-6\`)

### Framer Motion
- \`motion.span\`
- \`initial\` / \`animate\`
- spring transition
- replaying an animation via \`key\`

### lucide-react
- \`Heart\` icon component
- \`fill\` and \`className\` as normal SVG props

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked((prev) => !prev)}
      aria-label={isLiked ? "Unlike" : "Like"}
      className="flex h-10 w-10 items-center justify-center"
    >
      <motion.span
        key={isLiked}
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 700, damping: 15 }}
      >
        <Heart
          className={isLiked ? "h-6 w-6 text-red-500" : "h-6 w-6 text-neutral-400"}
          fill={isLiked ? "currentColor" : "none"}
        />
      </motion.span>
    </button>
  );
}
\`\`\`

---

## Things to understand

### Why not just animate the \`Heart\` icon directly, instead of wrapping it in \`motion.span\`?

You could \`motion.svg\` or wrapping the icon differently both work. Wrapping in a plain element keeps the icon itself simple (just styling props) and puts all the animation concerns in one place, which becomes handy if you later want to animate something the icon itself doesn't expose (like a background glow).

### Why \`key={isLiked}\` instead of using \`whileTap\` or an \`animate\` array like \`[1, 1.4, 1]\`?

Both approaches work and you'll see both in the wild. \`key\`-based remounting is useful when you want a full, clean restart of the animation from \`initial\` every single time — no risk of it looking different depending on what mid-animation state it interrupted. An \`animate\` keyframe array is more compact but can look slightly different if the user clicks again before the previous animation finished.

### What happened to the burst/particle effect?

An earlier version of this component spawned 8 small particles flying outward when liked, using a \`burstKey\` counter to force a fresh set of particles each time. It was cut for being visually noisy — the icon swap + bounce alone reads clearly as "liked," which is closer to how X's own like button behaves. The core lesson (state driving both appearance and animation) doesn't need the extra complexity to teach.

---

## Try changing it

1. Swap \`Heart\` for a different lucide icon (\`Star\`, \`Bookmark\`) and see the same pattern still applies.
2. Change the spring's \`stiffness\`/\`damping\` and feel how it changes the bounce.
3. Make the bounce only play when *liking*, not unliking (hint: you'll need a second piece of state, similar to how \`burstKey\` used to work).
4. Add a like counter that increments/decrements alongside \`isLiked\`.

---

## What this component teaches

\`\`\`text
one boolean
      ↓
drives visual state (fill, color)
      ↓
AND drives animation (via key remount)
\`\`\`

The same state variable can simultaneously answer "what does this look like?" and "should an animation replay?" — you don't need separate state for each.

---

## Next concepts

- [React state](https://react.dev/learn/state-a-components-memory)
- [Keys and why they force remounts](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
- [Functional state updates](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [SVG \`fill\` attribute](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)
`,zD=`A password field with a live strength meter that fills and changes color as your input satisfies more of the listed rules.

## What are we building?

A password input with:

- a segmented strength bar that fills, segment by segment, as you type
- a color that shifts from red through to green as strength increases
- a checklist of rules that check themselves off live
- everything derived from one array of rule objects — no hardcoded "if 8 characters and uppercase then..." chain

The important part: **the rules are data, not a chain of \`if\` statements.** Adding a fifth rule means adding one object to an array — nothing else in the component changes.

---

## Mental model

\`\`\`text
RULES = [
  { test: v => v.length >= 8,      label: "At least 8 characters" },
  { test: v => /[A-Z]/.test(v),    label: "An uppercase letter" },
  { test: v => /[0-9]/.test(v),    label: "A number" },
  { test: v => /[^A-Za-z0-9]/.test(v), label: "A special character" },
]

user types → value changes
                │
                ▼
     score = RULES.filter(rule => rule.test(value)).length
                │
                ▼
        level = LEVELS[score]
                │
        ┌───────┼────────┐
        ▼       ▼        ▼
   bar segments  label   each rule's
   (score > i)  text    checkmark
                         (rule.test(value))
\`\`\`

---

## The code

\`\`\`jsx
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  { test: (v) => /[A-Z]/.test(v), label: "An uppercase letter" },
  { test: (v) => /[0-9]/.test(v), label: "A number" },
  { test: (v) => /[^A-Za-z0-9]/.test(v), label: "A special character" },
];

const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-orange-500" },
  { label: "Fair", color: "bg-yellow-500" },
  { label: "Good", color: "bg-lime-500" },
  { label: "Strong", color: "bg-green-500" },
];

export default function PasswordStrengthMeter() {
  const [value, setValue] = useState("");

  const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
  const level = value ? LEVELS[score] : null;

  return (
    <div className="w-72">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type a password..." />

      <div className="mt-3 flex gap-1">
        {RULES.map((_, i) => (
          <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className={\`h-full \${level ? level.color : ""}\`}
              initial={false}
              animate={{ width: score > i ? "100%" : "0%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {level ? level.label : "Start typing to see strength"}
      </p>

      <ul className="mt-3 flex flex-col gap-1">
        {RULES.map((rule) => {
          const passed = rule.test(value);
          return (
            <li key={rule.label}>
              <Check className={\`h-3 w-3 \${passed ? "opacity-100" : "opacity-0"}\`} />
              {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
\`\`\`

---

## 1. A rule is a function, stored in an array

\`\`\`jsx
const RULES = [
  { test: (v) => v.length >= 8, label: "At least 8 characters" },
  ...
];
\`\`\`

Each rule pairs a **function** (\`test\`) with a **label**. \`test\` takes the current password value and returns \`true\` or \`false\`. This is a step up from earlier components — instead of state driving a fixed piece of UI, here a piece of *data* (the \`RULES\` array) drives both the logic and the list of checkboxes rendered underneath. Functions being stored as ordinary values in an array — not called immediately, just held onto — is what makes that possible.

---

## 2. Turning rules into a score

\`\`\`jsx
const score = useMemo(() => RULES.filter((rule) => rule.test(value)).length, [value]);
\`\`\`

Read inside-out:

\`\`\`text
RULES.filter(rule => rule.test(value))
  → keep only the rules whose test() returns true for the current value
  → e.g. if only length and number pass, this returns 2 rule objects

.length
  → how many rules passed → the score (0 to 4)
\`\`\`

Nothing here mentions "8 characters" or "uppercase" by name. The score is just "how many rules currently return true" — completely generic to whatever's in \`RULES\`.

---

## 3. \`useMemo\` — recompute only when it matters

\`\`\`jsx
useMemo(() => RULES.filter(...).length, [value]);
\`\`\`

\`useMemo\` caches the result of a calculation and only re-runs it when something in the dependency array (\`[value]\`) changes. Without it, this component would still *work* — \`RULES.filter(...)\` is cheap enough that recalculating it on every render wouldn't be noticeable here. But it's the right habit to build: any derived value that's more expensive than "map over 4 short strings" (a large list, a heavy regex, a sort) should be wrapped in \`useMemo\` so it isn't recalculated on renders that have nothing to do with it.

---

## 4. Deriving the level from the score

\`\`\`jsx
const level = value ? LEVELS[score] : null;
\`\`\`

\`LEVELS\` is a 5-item array (\`score\` can be \`0\` through \`4\`), so \`LEVELS[score]\` always lands on a valid entry — no separate \`if/else if/else\` chain deciding "weak vs fair vs strong." The \`value ?\` guard exists so an *empty* input shows neither a color nor a label — \`LEVELS[0]\` ("Very weak") would otherwise show even before the user has typed anything.

---

## 5. Turning the score into a filled bar

\`\`\`jsx
{RULES.map((_, i) => (
  <div key={i}>
    <motion.div animate={{ width: score > i ? "100%" : "0%" }} />
  </div>
))}
\`\`\`

There's one bar segment *per rule* — mapping over \`RULES\` just to get 4 items, ignoring the rule itself (\`_\`) and using only its index (\`i\`). Each segment asks one question: "is the score greater than my position?" Segment \`0\` fills once \`score >= 1\`, segment \`1\` once \`score >= 2\`, and so on. This is the same idea as the Progress Stepper's \`index <= current\` check, applied to a strength meter instead of a wizard.

---

## 6. Reusing the test functions for the checklist

\`\`\`jsx
{RULES.map((rule) => {
  const passed = rule.test(value);
  return (
    <li key={rule.label}>
      <Check className={passed ? "opacity-100" : "opacity-0"} />
      {rule.label}
    </li>
  );
})}
\`\`\`

Notice \`rule.test(value)\` is called *again* here, separately from the \`score\` calculation above. Each rule doesn't just contribute to a total — its individual pass/fail state also drives its own checkmark. Rather than toggling the checkmark icon's *presence*, its \`opacity\` is toggled between \`0\` and \`100\` — the icon is always in the DOM, just invisible when the rule hasn't passed yet, which keeps the list from visibly reflowing as items pop in and out.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`value\` | React |
| \`useMemo\` | React |
| functions stored in an array, \`.filter()\`, \`.map()\`, regex \`.test()\` | JavaScript |
| \`motion.div\`, \`animate\`, \`width\` transition | Framer Motion |
| \`opacity-0\` / \`opacity-100\`, layout classes | Tailwind |

---

## Things to understand

- storing functions as data inside an array
- \`.filter()\` combined with a function stored on each item
- \`useMemo\` and when it's actually worth reaching for
- deriving a "level" from a numeric score via array indexing
- reusing the same test function for two different purposes (scoring and checklist)

---

## Try changing it

1. Add a fifth rule — nothing else in the component should need to change.
2. Add a length-based bonus: make very long passwords (16+ characters) count as two rules.
3. Swap the regex rules for a real password-strength library and compare results.
4. Make the input \`type="password"\` and add a show/hide toggle.
5. Animate the label text itself, not just the bar, when the level changes.

---

## What this component teaches

This is the first component in the series where **the rules themselves are configuration, not code**. Every previous component's logic was written directly into the JSX or a handler function. Here, the actual "what counts as a strong password" decision lives entirely in the \`RULES\` array — the rendering logic (\`.filter()\`, \`.map()\`) doesn't know or care what the rules check for. This pattern — data-driven logic instead of hardcoded conditionals — is what makes components scale past a handful of cases without turning into an unreadable chain of \`if\`s.

---

## Next concepts

After this, you should understand:

- data-driven UI (rules/config as arrays, not conditionals)
- \`useMemo\` and derived state
- calling the same function for two different purposes
- regex basics (\`.test()\`)
`,BD=`
A component that shows where a user currently is in a multi-step process.

For example
 
\`\`\`text
Account → Profile → Payment → Confirm
\`\`\`

This component teaches an important React idea:

> **One piece of state can control many parts of the UI.**

---

## What are we building?

A stepper with:

- multiple steps
- a current step
- completed steps
- progress lines
- Back & Next buttons
- disabled states
- animated transitions

---

## Mental model

\`\`\`text
             STEPPER
                │
                ▼
           current = 0
                │
                ▼
          React renders
                │
                ▼
      every visual state is
       calculated from current
                │
          user clicks Next
                │
                ▼
        setCurrent(c + 1)
                │
                ▼
           current = 1
                │
                ▼
          React re-renders
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
   step 1    step 2    line
   done      current    fills
\`\`\`

The key idea is:

\`\`\`text
current
  ↓
everything else is derived
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  "Account",
  "Profile",
  "Payment",
  "Confirm",
];

export default function ProgressStepper() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-96">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center last:flex-none"
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{
                  backgroundColor:
                    index <= current ? "#ffffff" : "#262626",
                  color:
                    index <= current ? "#000000" : "#737373",
                }}
                transition={{ duration: 0.25 }}
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium"
              >
                {index < current ? "✓" : index + 1}
              </motion.div>

              <span className="text-xs text-neutral-400">
                {step}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="relative mx-2 h-0.5 flex-1 -translate-y-3 bg-neutral-800">
                <motion.div
                  animate={{
                    width: index < current ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-white"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          onClick={() =>
            setCurrent((c) => Math.max(0, c - 1))
          }
          disabled={current === 0}
          className="rounded-lg bg-neutral-800 px-4 py-2 text-sm text-neutral-200 disabled:opacity-40"
        >
          Back
        </button>

        <button
          onClick={() =>
            setCurrent((c) =>
              Math.min(steps.length - 1, c + 1)
            )
          }
          disabled={current === steps.length - 1}
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
\`\`\`

---

## 1. The steps

\`\`\`jsx
const steps = [
  "Account",
  "Profile",
  "Payment",
  "Confirm",
];
\`\`\`

This is just JavaScript data.

The array gives us four steps.

Because we're using \`.map()\`, we don't need to manually write each step.

---

## 2. The current step

\`\`\`jsx
const [current, setCurrent] = useState(0);
\`\`\`

The number represents the current position.

\`\`\`text
0 → Account
1 → Profile
2 → Payment
3 → Confirm
\`\`\`

So initially:

\`\`\`text
current = 0
\`\`\`

means Account is the current step.

---

## 3. One state controls everything

This is the most important concept.

We don't store:

\`\`\`text
accountIsComplete
profileIsComplete
paymentIsComplete
confirmIsCurrent
\`\`\`

Instead we store only:

\`\`\`text
current
\`\`\`

Then we calculate everything else.

For example:

\`\`\`jsx
index < current
\`\`\`

means:

> This step has already been completed.

And:

\`\`\`jsx
index <= current
\`\`\`

means:

> This step has been reached.

---

## 4. Understanding \`index\`

\`.map()\` gives us both:

\`\`\`jsx
steps.map((step, index) => ...)
\`\`\`

For our array:

\`\`\`text
Account   → index 0
Profile   → index 1
Payment   → index 2
Confirm   → index 3
\`\`\`

So we can compare \`index\` with \`current\`.

---

## 5. Completed vs current vs upcoming

Suppose:

\`\`\`text
current = 2
\`\`\`

Then:

\`\`\`text
index 0 → completed
index 1 → completed
index 2 → current
index 3 → upcoming
\`\`\`

Because:

\`\`\`text
index < current
\`\`\`

is true for 0 & 1.

But:

\`\`\`text
index === current
\`\`\`

is true for 2.

---

## 6. Why \`index <= current\`?

For the circle's visual styling:

\`\`\`jsx
index <= current
\`\`\`

We want the current step to look active too.

So if:

\`\`\`text
current = 2
\`\`\`

then:

\`\`\`text
0 <= 2 → true
1 <= 2 → true
2 <= 2 → true
3 <= 2 → false
\`\`\`

Therefore the first three circles get the active appearance.

---

## 7. Why \`index < current\` for the checkmark?

For the text inside the circle:

\`\`\`jsx
{index < current ? "✓" : index + 1}
\`\`\`

If the step is before the current step:

\`\`\`text
show ✓
\`\`\`

Otherwise:

\`\`\`text
show step number
\`\`\`

So:

\`\`\`text
✓   ✓   3   4
\`\`\`

---

## 8. The connector line

We don't want a line after the final step.

So:

\`\`\`jsx
index < steps.length - 1
\`\`\`

Our array has length 4.

Therefore:

\`\`\`text
steps.length - 1
= 4 - 1
= 3
\`\`\`

The condition becomes:

\`\`\`text
index < 3
\`\`\`

So lines appear after:

\`\`\`text
0
1
2
\`\`\`

but not after:

\`\`\`text
3
\`\`\`

---

## 9. Filling the connector

\`\`\`jsx
width: index < current ? "100%" : "0%"
\`\`\`

Suppose:

\`\`\`text
current = 2
\`\`\`

Then:

\`\`\`text
line after step 0 → 100%
line after step 1 → 100%
line after step 2 → 0%
\`\`\`

So the progress visually matches the current state.

---

## 10. The Next button

\`\`\`jsx
setCurrent((c) =>
  Math.min(steps.length - 1, c + 1)
)
\`\`\`

We want:

\`\`\`text
current + 1
\`\`\`

but we don't want to go past the final step.

\`Math.min()\` gives us the smaller value.

So:

\`\`\`text
Math.min(3, 2 + 1)
→ 3
\`\`\`

But:

\`\`\`text
Math.min(3, 3 + 1)
→ 3
\`\`\`

So the state can never become 4.

---

## 11. The Back button

Same idea:

\`\`\`jsx
Math.max(0, c - 1)
\`\`\`

We don't want the value to become negative.

So:

\`\`\`text
Math.max(0, 0 - 1)
→ 0
\`\`\`

The state stays within:

\`\`\`text
0 → 3
\`\`\`

---

## 12. Disabled buttons

\`\`\`jsx
disabled={current === 0}
\`\`\`

The Back button is disabled when we're at the first step.

And:

\`\`\`jsx
disabled={current === steps.length - 1}
\`\`\`

disables Next at the final step.

Again, these are derived from the same \`current\` state.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|\`current\`|React|
|\`useState\`|React|
|\`steps\`|JavaScript|
|\`.map()\`|JavaScript|
|\`index\`|JavaScript|
|\`Math.min()\`|JavaScript|
|\`Math.max()\`|JavaScript|
|\`animate\`|Framer Motion|
|\`flex\`, \`gap\`, \`w-96\`|Tailwind|
|\`disabled\`|HTML|

---

## Things to understand
- array \`.map()\`
- index
- derived UI
- comparison operators
- \`<\`
- \`<=\`
- \`===\`
- \`Math.min()\`
- \`Math.max()\`
- disabled states
- one source of truth

---

## Try changing it

1. Add a fifth step.
2. Change the labels.
3. Add a "Finish" button on the final step.
4. Make clicking a completed step go back to that step.
5. Add different content below the stepper based on \`current\`.
6. Make the stepper horizontal on desktop & vertical on mobile.
7. Try replacing the number with an icon.

---

## What this component teaches

This is one of the most important patterns you've learned so far:

\`\`\`text
ONE PIECE OF STATE
       ↓
DERIVED UI
       ↓
many visual changes
\`\`\`

You don't need separate state for every visual detail.

If the current step is known, you can calculate:

- which steps are complete
    
- which step is current
    
- which lines are filled
    
- whether Back is disabled
    
- whether Next is disabled
    
- what content should be shown
    

That's **derived UI**.

---

## Next concepts

This leads naturally into:

- derived state
- controlled components
- lifting state up
- props
- forms
- reusable component APIs`,VD=`A pull-to-refresh list where dragging the content down past a threshold triggers a spinning refresh animation.

## What are we building?

A list with:

- a drag-down gesture on the content itself (not a separate handle)
- a spinner that appears above the list and rotates in sync with how far you've pulled
- a threshold — pull far enough and it locks into a "refreshing" state
- a simulated network delay (\`setTimeout\`) before it resets

The important part: **one number (\`pullProgress\`) drives three different things at once** — the spinner's opacity, its rotation, and (indirectly) whether the list has crossed the refresh threshold.

---

## Mental model

\`\`\`text
user drags list down
        │
        ▼
   onDrag fires repeatedly
        │
        ▼
pullProgress = clamp(offset.y / THRESHOLD, 0, 1)
        │
   ┌────┴─────────────────┐
   ▼                       ▼
spinner opacity      spinner rotation
= pullProgress        = pullProgress * 360°

user releases
        │
        ▼
   onDragEnd fires
        │
        ▼
  offset.y > THRESHOLD?
        │
   ┌────┴────┐
   no         yes
   │           │
   ▼           ▼
reset to 0   isRefreshing = true
             pullProgress = 1 (pinned)
             spinner spins continuously
                   │
              (1200ms later)
                   │
                   ▼
             isRefreshing = false
             pullProgress = 0
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const items = [
  "New message from Sam",
  "Your order has shipped",
  "3 people liked your post",
  "Weekly summary is ready",
];

const THRESHOLD = 70;

export default function PullToRefresh() {
  const [pullProgress, setPullProgress] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  function handleDrag(_, info) {
    setPullProgress(Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1));
  }

  function handleDragEnd(_, info) {
    if (info.offset.y > THRESHOLD) {
      setIsRefreshing(true);
      setPullProgress(1);
      setTimeout(() => {
        setIsRefreshing(false);
        setPullProgress(0);
      }, 1200);
    } else {
      setPullProgress(0);
    }
  }

  return (
    <div className="relative h-80 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex h-14 items-center justify-center"
        style={{ opacity: pullProgress }}
      >
        <motion.div
          animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
          transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        >
          <RefreshCw className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
        </motion.div>
      </div>

      <motion.div
        drag={isRefreshing ? false : "y"}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.6 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        animate={{ y: isRefreshing ? THRESHOLD : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="flex flex-col gap-2 p-4"
      >
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </motion.div>
    </div>
  );
}
\`\`\`

---

## 1. \`pullProgress\` is a number, not a boolean

\`\`\`jsx
const [pullProgress, setPullProgress] = useState(0);
\`\`\`

Most of the components before this one used booleans (\`isOpen\`, \`isLiked\`) — a light switch, on or off. This one needs something that can be *partway* true, because the spinner should fade and rotate progressively as you drag, not snap on at some arbitrary point. A number from \`0\` to \`1\` (0% to 100%) is the natural type for "how far along is this."

---

## 2. Clamping with \`Math.min\` / \`Math.max\`

\`\`\`jsx
Math.min(Math.max(info.offset.y, 0) / THRESHOLD, 1)
\`\`\`

Read from the inside out:

\`\`\`text
Math.max(info.offset.y, 0)
  → never let this go below 0
  → (dragging up would give a negative offset — ignore that)

... / THRESHOLD
  → convert "pixels dragged" into "0 to 1+ progress"

Math.min( ..., 1)
  → never let this go above 1
  → (dragging way past the threshold shouldn't overshoot 100%)
\`\`\`

This "clamp between a floor and a ceiling" pattern — \`Math.min(Math.max(value, min), max)\` — comes up constantly whenever a raw input (pixels dragged, scroll position, mouse coordinates) needs to be squeezed into a predictable range.

---

## 3. One value, driving two unrelated-looking things

\`\`\`jsx
style={{ opacity: pullProgress }}
\`\`\`
\`\`\`jsx
animate={{ rotate: pullProgress * 360 }}
\`\`\`

Opacity wants a \`0\`–\`1\` number — \`pullProgress\` already is one, so it's used directly. Rotation wants degrees, \`0\`–\`360\` — so \`pullProgress\` is multiplied by \`360\`. Same underlying number, two different units, because CSS opacity and CSS rotation just happen to use different scales. This is a common trick: keep *one* source of truth (\`0\` to \`1\`) and scale it differently for each thing that consumes it, rather than tracking "opacity" and "rotation" as separate pieces of state that could drift apart.

---

## 4. Two different animations for the same element

\`\`\`jsx
animate={isRefreshing ? { rotate: 360 } : { rotate: pullProgress * 360 }}
transition={isRefreshing ? { duration: 0.7, repeat: Infinity, ease: "linear" } : { duration: 0 }}
\`\`\`

While dragging, rotation is a direct, instant (\`duration: 0\`) reflection of finger position — no animation, just following your thumb 1:1. Once refreshing starts, that stops mattering (there's no more drag), and it switches to a real animation: spin to \`360°\`, \`repeat: Infinity\`, forever, until the refresh finishes. Same \`rotate\` property, completely different behavior, picked with a ternary based on \`isRefreshing\`.

---

## 5. Disabling drag mid-refresh

\`\`\`jsx
drag={isRefreshing ? false : "y"}
\`\`\`

Once a refresh is in progress, dragging is turned off entirely. Otherwise a user could yank the list around *while* the fake network request is "in flight," which would fight with the \`animate={{ y: isRefreshing ? THRESHOLD : 0 }}\` pinning it in place.

---

## 6. Simulating a network request

\`\`\`jsx
setIsRefreshing(true);
setPullProgress(1);
setTimeout(() => {
  setIsRefreshing(false);
  setPullProgress(0);
}, 1200);
\`\`\`

There's no real API call here — \`setTimeout\` stands in for "waiting on the network." This is a common technique when building or demoing a component before the real data layer exists: fake the delay, wire up the real \`fetch\`/API call later, and none of the animation logic around it has to change.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`pullProgress\`, \`isRefreshing\` | React |
| \`Math.min\`, \`Math.max\`, \`setTimeout\` | JavaScript |
| \`drag\`, \`dragConstraints\`, \`dragElastic\` | Framer Motion |
| \`onDrag\`, \`onDragEnd\`, \`info.offset.y\` | Framer Motion |
| \`animate\`, \`transition\`, \`repeat: Infinity\` | Framer Motion |
| \`pointer-events-none\`, layout classes | Tailwind |

---

## Things to understand

- state as a continuous number (\`0\`–\`1\`) instead of a boolean
- the clamp pattern: \`Math.min(Math.max(value, min), max)\`
- driving multiple visual properties from one source value
- swapping between "follow the gesture directly" and "run a real animation"
- \`repeat: Infinity\` for indefinite looping animations
- \`setTimeout\` as a placeholder for a real async request

---

## Try changing it

1. Lower \`THRESHOLD\` to \`40\` and see how much less you need to pull.
2. Change the spinner icon to something else from \`lucide-react\`.
3. Make the list items themselves fade in as \`pullProgress\` increases.
4. Replace the \`setTimeout\` with a real \`fetch\` to a placeholder API.
5. Add a "Pull to refresh" / "Release to refresh" text label that swaps based on whether \`pullProgress\` has crossed \`1\`.

---

## What this component teaches

The core idea worth taking with you: **a single continuous value can replace several booleans**. Before reaching for \`isHalfway\`, \`isAlmostThere\`, \`isPastThreshold\` as separate pieces of state, ask whether one number and a few comparisons (\`pullProgress > 1\`, \`pullProgress === 0\`) could express the same thing with less state to keep in sync.

---

## Next concepts

After this, you should understand:

- deriving multiple UI properties from one shared value
- clamped/normalized values (\`0\`–\`1\` ranges)
- temporarily disabling interaction during an async operation
- faking async delays during development
`,WD=`A five-star rating input where hovering previews a rating and clicking locks it in, with a springy pop on each filled star.

## What are we building?

A star rating with:

- five stars, generated from a number rather than written out one by one
- a hover preview — moving your mouse over the 4th star shows 4 stars filled, without committing anything
- a click that locks in the actual rating
- the hover preview disappearing (reverting to the real rating) the moment your mouse leaves

The important part: **two pieces of state represent two different ideas that look identical on screen** — "what's committed" and "what's being previewed" — and a third, computed value decides which one to actually show.

---

## Mental model

\`\`\`text
rating = 0        (committed — what the user has actually chosen)
hovered = null    (preview — what the mouse is currently over)

display = hovered ?? rating
                │
     ┌──────────┴──────────┐
     ▼                     ▼
hovered is not null   hovered is null
(mouse is over a star)  (mouse isn't hovering)
     │                     │
     ▼                     ▼
show the preview      show the real rating

user moves mouse over star #4
        │
        ▼
  setHovered(4)
        │
        ▼
  display = 4 → stars 1-4 fill

user clicks star #4
        │
        ▼
  setRating(4)   (display was already 4, nothing visually changes)

user moves mouse away from the whole row
        │
        ▼
  onMouseLeave → setHovered(null)
        │
        ▼
  display = rating again → shows the committed value
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const MAX = 5;

export default function RatingStars() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);

  const display = hovered ?? rating;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
        {Array.from({ length: MAX }, (_, i) => i + 1).map((value) => {
          const filled = value <= display;
          return (
            <motion.button
              key={value}
              type="button"
              onMouseEnter={() => setHovered(value)}
              onClick={() => setRating(value)}
              whileTap={{ scale: 0.85 }}
              animate={{ scale: filled ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              aria-label={\`Rate \${value} star\${value === 1 ? "" : "s"}\`}
            >
              <Star
                className={filled ? "h-6 w-6 text-yellow-400" : "h-6 w-6 text-neutral-300 dark:text-neutral-700"}
                fill={filled ? "currentColor" : "none"}
              />
            </motion.button>
          );
        })}
      </div>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {rating > 0 ? \`You rated this \${rating} out of \${MAX}\` : "Hover to preview, click to rate"}
      </p>
    </div>
  );
}
\`\`\`

---

## 1. Two states for two different questions

\`\`\`jsx
const [rating, setRating] = useState(0);
const [hovered, setHovered] = useState(null);
\`\`\`

It might seem like one state variable should be enough — "the rating" — but \`rating\` and \`hovered\` answer genuinely different questions: *"what has the user decided?"* versus *"what is the user currently looking at?"* Merging them into one variable would mean hovering would permanently overwrite the actual chosen rating the instant your mouse passed over a star, with no way to preview without committing. Two states let the component tell those two ideas apart.

---

## 2. \`??\` — the nullish coalescing operator

\`\`\`jsx
const display = hovered ?? rating;
\`\`\`

\`??\` returns its left side *unless that left side is \`null\` or \`undefined\`*, in which case it falls back to the right side. Since \`hovered\` starts as \`null\` and only ever becomes a number while actively hovering, \`display\` reads as: "show what I'm hovering, or if I'm not hovering anything, fall back to the real rating."

This is different from \`||\`, which many people reach for instead:

\`\`\`jsx
hovered || rating    // WRONG here
\`\`\`

\`||\` falls back whenever the left side is *falsy* — and \`0\` is falsy in JavaScript. If \`hovered\` were ever legitimately \`0\`, \`||\` would incorrectly skip it and show \`rating\` instead. \`??\` only cares about \`null\`/\`undefined\`, so a hovered value of \`0\` (not used in this component, but worth knowing) would still be respected. This distinction — falsy vs. nullish — is a common source of subtle bugs once numeric state can be \`0\`.

---

## 3. Generating a list of numbers instead of writing them out

\`\`\`jsx
Array.from({ length: MAX }, (_, i) => i + 1)
\`\`\`

\`Array.from\` can build an array from something that *isn't* already an array — here, \`{ length: 5 }\` (an object with just a length, not real array data) plus a mapping function that runs once per slot. \`i\` is the index (\`0\` through \`4\`); adding \`1\` shifts it to \`1\` through \`5\` — five stars, without writing \`[1, 2, 3, 4, 5]\` by hand or needing a separate \`.map()\` afterward. This scales to any \`MAX\` by changing one number.

---

## 4. Hover to preview, click to commit

\`\`\`jsx
onMouseEnter={() => setHovered(value)}
onClick={() => setRating(value)}
\`\`\`

Each star button has two separate handlers doing two separate things. Hovering over star \`3\` sets \`hovered\` to \`3\` — a *preview*, nothing permanent. Only a click calls \`setRating\`, which is the actual commit. This separation — preview vs. commit — is a pattern that shows up anywhere a UI wants to let you "try before you buy": color pickers, drag-and-drop reordering previews, and here, a star rating.

---

## 5. Resetting the preview on mouse-leave

\`\`\`jsx
<div className="flex gap-1" onMouseLeave={() => setHovered(null)}>
\`\`\`

\`onMouseLeave\` is attached to the *row wrapping all five stars*, not to each individual star. If it were on each star instead, moving your mouse from star 3 to star 4 would trigger star 3's \`onMouseLeave\` between the two \`onMouseEnter\` calls, causing a flicker back to the real rating for a frame. Putting it on the parent means the preview only resets once the mouse leaves the *entire* row, not while moving between stars within it.

---

## 6. A spring pop per star, without extra state

\`\`\`jsx
animate={{ scale: filled ? 1.1 : 1 }}
transition={{ type: "spring", stiffness: 500, damping: 20 }}
\`\`\`

No new state was added to make stars "pop" — \`filled\` (already computed from \`display\`) is reused directly to drive the scale. Framer Motion's \`animate\` prop watches for that value changing and animates between \`1\` and \`1.1\` automatically; there was no need to manually track "which stars are currently animating."

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`rating\`, \`hovered\` | React |
| \`??\` (nullish coalescing), \`Array.from\` | JavaScript |
| \`motion.button\`, \`animate\`, \`whileTap\`, spring \`transition\` | Framer Motion |
| \`Star\` icon, \`fill\` prop | lucide-react |
| \`onMouseEnter\`, \`onMouseLeave\`, \`onClick\` | DOM events (via React) |

---

## Try changing it

1. Change \`MAX\` from \`5\` to \`10\` — nothing else should need to change.
2. Swap \`??\` for \`||\` and try hovering to see if you can spot a difference (hint: you won't, until \`rating\` can be \`0\` in a way that matters — think about why).
3. Add half-star support by tracking mouse X position within each star.
4. Make the color scale with the rating (red for 1-2, yellow for 3, green for 4-5).
5. Persist the chosen rating to \`localStorage\`, the way Quick Notes does elsewhere in this app.

---

## What this component teaches

The main idea worth keeping: **when "what's shown" and "what's committed" can differ, they need separate state** — and a small derived value (\`display\`) reconciles them for rendering. It also introduces \`??\` at the exact moment it matters (a value that could legitimately be \`0\`), which is a more durable lesson than memorizing "use \`??\` instead of \`||\`" in the abstract.

---

## Next concepts

After this, you should understand:

- preview vs. commit state (hover-to-preview patterns)
- \`??\` vs \`||\` and why the difference matters for numeric state
- \`Array.from\` for generating sequences
- event handler placement (parent vs. child) affecting behavior
`,UD=`A group of options where exactly one option is selected at a time.

For example:

\`\`\`text
Day | Week | Month | Year
\`\`\`

This is conceptually very similar to the Tab Switcher you already built. The difference is useful because it shows that the same React pattern can power many different UI components — and, as you'll see below, this component eventually became more than just a demo: it turned into a **reusable piece used elsewhere in this project**.

---

## What are we building?

A segmented control with:

- multiple options
- one selected value
- click interaction
- conditional styling
- an animated active pill

---

## Mental model

\`\`\`text
             OPTIONS
                │
                ▼
     ["Day", "Week", "Month", "Year"]
                │
                ▼
          selected = "Day"
                │
                ▼
          render all options
                │
        selected === option?
          │              │
         YES             NO
          │              │
          ▼              ▼
      active pill      no pill
      black text       grey text
                │
          user clicks
             Month
                │
                ▼
        setSelected("Month")
                │
                ▼
          React re-renders
                │
                ▼
          pill moves to Month
\`\`\`

---

## The code

This component actually now lives as **two things in one file**: a reusable primitive, and a small demo that uses it.

\`\`\`jsx
import { useId, useState } from "react";
import { motion } from "framer-motion";

export function Segmented({ options, value, onChange, layoutId }) {
  const autoId = useId();
  const pillId = layoutId ?? autoId;

  return (
    <div className="inline-flex gap-0.5 rounded-full bg-neutral-800 p-1">
      {options.map((option) => {
        const optValue = typeof option === "string" ? option : option.value;
        const optLabel = typeof option === "string" ? option : option.label;
        const isActive = value === optValue;

        return (
          <button
            key={optValue}
            onClick={() => onChange(optValue)}
            className="relative rounded-full px-4 py-1.5 text-sm font-medium"
          >
            {isActive && (
              <motion.div
                layoutId={\`segmented-pill-\${pillId}\`}
                className="absolute inset-0 rounded-full bg-white"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span className={\`relative z-10 \${isActive ? "text-black" : "text-neutral-400"}\`}>
              {optLabel}
            </span>
          </button>
        );
      })}
    </div>
  );
}

const demoOptions = ["Day", "Week", "Month", "Year"];

export default function SegmentedControl() {
  const [selected, setSelected] = useState(demoOptions[0]);

  return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
}
\`\`\`

---

## 1. Why did this change from one component into two?

The original version (what you'll still recognize from the Tab Switcher) managed its own state internally — you couldn't reuse the pill-switcher part without also getting the hardcoded \`Day/Week/Month/Year\` options baked in.

Later, this project needed the exact same "sliding pill between options" behavior somewhere else entirely: the Preview/Code tab switcher used on every component's page in this app. Rather than write that logic twice, the pill-switcher itself was pulled out into its own function — \`Segmented\` — that takes its options and its state as **props**, instead of owning them.

\`\`\`text
before
  ↓
SegmentedControl owns everything (options + state + rendering)

after
  ↓
Segmented owns only rendering
SegmentedControl (this demo) owns the options + state, and hands them to Segmented
\`\`\`

This is the same idea as "lifting state up," just applied to a whole component instead of a single value.

---

## 2. Reading \`Segmented\`'s props

\`\`\`jsx
export function Segmented({ options, value, onChange, layoutId }) {
\`\`\`

- \`options\` — the list of choices to render (either plain strings, or \`{ value, label }\` objects — see below).
- \`value\` — which option is currently selected. \`Segmented\` doesn't decide this; whoever renders \`Segmented\` decides it.
- \`onChange\` — a function \`Segmented\` calls when a user clicks an option, handing back that option's value.
- \`layoutId\` — an optional identifier explained in the next section.

This is called a **controlled component**: \`Segmented\` never stores "what's selected" itself. It just displays whatever \`value\` it's given, and reports clicks via \`onChange\`. The demo below supplies both:

\`\`\`jsx
const [selected, setSelected] = useState(demoOptions[0]);

return <Segmented options={demoOptions} value={selected} onChange={setSelected} />;
\`\`\`

\`setSelected\` is passed directly as \`onChange\` — when \`Segmented\` calls \`onChange(newValue)\`, it's really calling \`setSelected(newValue)\`.

---

## 3. Supporting both strings and objects

\`\`\`jsx
const optValue = typeof option === "string" ? option : option.value;
const optLabel = typeof option === "string" ? option : option.label;
\`\`\`

This lets \`Segmented\` accept either:

\`\`\`jsx
["Day", "Week", "Month", "Year"]
\`\`\`

or:

\`\`\`jsx
[
  { value: "preview", label: "Preview" },
  { value: "code", label: "Code" },
]
\`\`\`

\`typeof option === "string"\` checks which shape you gave it. If it's a plain string, that string is both the value and the label. If it's an object, \`.value\` and \`.label\` are read out separately. This flexibility is exactly what let the *same* \`Segmented\` component power both this demo (plain strings) and the Preview/Code switcher elsewhere in the app (which needed a value like \`"preview"\` distinct from the label \`"Preview"\`).

---

## 4. Why does \`layoutId\` need a fallback?

\`\`\`jsx
const autoId = useId();
const pillId = layoutId ?? autoId;
\`\`\`

The original version hardcoded \`layoutId="segmented-pill"\` directly. That's fine when only one \`Segmented\` exists on the page at a time — but once \`Segmented\` became reusable, nothing stops two instances from being mounted simultaneously (for example: this very demo, sitting inside the Preview panel of *its own* Preview/Code page, while the Preview/Code switcher itself is also a \`Segmented\`, both visible at once).

If both used the exact same \`layoutId\`, Framer Motion would think their pills were *the same element* and try to animate one pill jumping between two unrelated controls — visibly broken.

[\`useId()\`](https://react.dev/reference/react/useId) generates a unique, stable ID per component instance. \`layoutId ?? autoId\` means: "use whatever \`layoutId\` was passed in, but if none was, fall back to this instance's own unique ID." So every \`Segmented\` on the page gets its own isolated pill animation unless you deliberately want two of them to share one (which the fallback still allows, by passing \`layoutId\` explicitly).

---

## 5. The rest is the same pattern as before

Once you're inside the \`options.map(...)\`, everything is the same logic the original version had:

\`\`\`jsx
const isActive = value === optValue;
\`\`\`

\`\`\`text
value = "Month"

optValue = "Day"    → false
optValue = "Week"   → false
optValue = "Month"  → true
optValue = "Year"   → false
\`\`\`

Only one option can be active. The pill only renders for that one:

\`\`\`jsx
{isActive && (
  <motion.div layoutId={\`segmented-pill-\${pillId}\`} ... />
)}
\`\`\`

And \`relative\` / \`absolute\` position the pill behind the label text (\`z-10\`) exactly as before — see the earlier version of this file (or the Tab Switcher notes) if you want the positioning explained from scratch.

---

## What belongs to what?

|Concept|Technology|
|---|---|
|\`value\`, \`onChange\` props|React (controlled component pattern)|
|\`useState\` (in the demo)|React|
|\`useId\`|React|
|\`options.map()\`|JavaScript|
|\`typeof\` check|JavaScript|
|nullish coalescing \`??\`|JavaScript|
|\`layoutId\`|Framer Motion|
|\`transition\`|Framer Motion|
|\`relative\` / \`absolute\`, \`z-10\`|CSS / Tailwind|

---

## Things to understand

- controlled components (\`value\` + \`onChange\`, not internal state)
- why extracting a reusable piece means moving state *out*, not in
- \`typeof\` as a way to accept more than one input shape
- \`useId()\` and why shared \`layoutId\`s can collide
- everything from before: \`.map()\`, \`===\`, conditional rendering, shared layout animation

---

## Try changing it

1. Render two \`<Segmented>\` controls on the same page and confirm their pills don't interfere with each other.
2. Deliberately pass the same \`layoutId\` to both, and watch the pill incorrectly jump between them.
3. Pass an \`options\` array mixing plain strings and \`{ value, label }\` objects.
4. Add a \`disabled\` option to the array and skip rendering its pill/click handler.
5. Try removing the \`??\` fallback and see what breaks when \`layoutId\` isn't passed.

---

## What this component teaches

The React lesson from before still holds:

\`\`\`text
options
   ↓
selected value
   ↓
compare
   ↓
render
\`\`\`

But the bigger lesson is about **when and why to extract a reusable component**: not upfront, but the moment you actually need the same behavior in a second place. \`Segmented\` didn't start reusable  it became reusable once there was a real second use case (the Preview/Code switcher), and the props it ended up needing (\`options\`, \`value\`, \`onChange\`, \`layoutId\`) were shaped by what that second use case actually required, not guessed in advance.

---

## Next concepts

- [Controlled and uncontrolled components](https://react.dev/learn/sharing-state-between-components)
- [useId](https://react.dev/reference/react/useId)
- [Lifting state up](https://react.dev/learn/sharing-state-between-components)
- [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
- [Nullish coalescing operator (\`??\`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
`,$D=`

A placeholder UI that appears while content is loading.

The goal isn't just to make a skeleton. This component introduces **effects**, timers, cleanup, & the idea that a UI can move through multiple states.

---

## What are we building?

While content is loading:

\`\`\`text
┌─────────────────────────┐
│ ████████████████        │
│ ███████████████████     │
│ ██████████              │
└─────────────────────────┘
\`\`\`

After loading:

\`\`\`text
┌─────────────────────────┐
│ Weekly Notes            │
│ Ideas from this week.   │
│                         │
│ Read more →             │
└─────────────────────────┘
\`\`\`

---

## The mental model

We have one important piece of state:

\`\`\`text
isLoading
\`\`\`

Initially:

\`\`\`text
isLoading = true
\`\`\`

So we show the skeleton.

After some time:

\`\`\`text
isLoading = false
\`\`\`

So we show the content.

The flow:

\`\`\`text
component renders
       ↓
isLoading = true
       ↓
show skeleton
       ↓
useEffect runs
       ↓
start timer
       ↓
2 seconds pass
       ↓
setIsLoading(false)
       ↓
React re-renders
       ↓
show content
\`\`\`

---

## Step 1 — loading state

\`\`\`jsx
const [isLoading, setIsLoading] = useState(true);
\`\`\`

We start with:

\`\`\`text
true
\`\`\`

because the component begins in a loading state.

Later:

\`\`\`jsx
setIsLoading(false);
\`\`\`

changes it.

---

## Step 2 — why \`useEffect\`?

We want to start a timer after the component appears.

That is a **side effect**.

A side effect is something the component does outside simply calculating what UI to render.

Examples include:

- timers
    
- network requests
    
- subscriptions
    
- browser APIs
    

React provides [\`useEffect\`](https://react.dev/reference/react/useEffect) for this.

\`\`\`jsx
useEffect(() => {
  ...
}, []);
\`\`\`

---

## Step 3 — start the timer

\`\`\`jsx
const timer = setTimeout(() => {
  setIsLoading(false);
}, 2000);
\`\`\`

\`setTimeout\` is JavaScript.

It means:

> run this function after 2000 milliseconds.

So:

\`\`\`text
2000 ms
   ↓
2 seconds
\`\`\`

After two seconds:

\`\`\`jsx
setIsLoading(false);
\`\`\`

runs.

---

## Step 4 — the dependency array

At the end:

\`\`\`jsx
}, []);
\`\`\`

The empty array tells React that this effect should run when the component mounts rather than after every render.

Think:

\`\`\`text
component appears
      ↓
effect runs
      ↓
timer starts
\`\`\`

The dependency array is part of understanding how [\`useEffect\`](https://react.dev/reference/react/useEffect) decides when an effect should run again.

---

## Step 5 — cleanup

We return:

\`\`\`jsx
return () => clearTimeout(timer);
\`\`\`

This is cleanup.

If the component disappears before the timer finishes, we don't want the timer hanging around.

So:

\`\`\`text
effect starts
   ↓
timer starts
   ↓
component goes away
   ↓
cleanup runs
   ↓
clearTimeout()
\`\`\`

Think of it as:

> if I start something, I should clean it up when I'm done with it.

---

## Step 6 — conditional rendering

We can decide which UI to show:

\`\`\`jsx
{isLoading ? (
  <Skeleton />
) : (
  <Content />
)}
\`\`\`

This uses a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

Read it as:

> if loading, show the skeleton. Otherwise, show the content.

So:

\`\`\`text
isLoading = true
       ↓
Skeleton


isLoading = false
       ↓
Content
\`\`\`

---

## Step 7 — AnimatePresence

We could switch instantly between the two.

Instead:

\`\`\`jsx
<AnimatePresence mode="wait">
\`\`\`

lets Framer Motion animate the transition.

The skeleton has:

\`\`\`jsx
key="skeleton"
\`\`\`

The content has:

\`\`\`jsx
key="content"
\`\`\`

The keys help identify the two different UI elements.

\`mode="wait"\` tells Framer Motion to wait for the exiting element before entering the next one.

---

## What belongs to what?

### React

- \`useState\`
    
- \`useEffect\`
    
- conditional rendering
    
- re-render
    
- cleanup
    

### JavaScript

- \`setTimeout\`
    
- \`clearTimeout\`
    
- functions
    

### Framer Motion

- \`AnimatePresence\`
    
- \`initial\`
    
- \`animate\`
    
- \`exit\`
    
- \`mode="wait"\`
    

### Tailwind

- layout
    
- spacing
    
- sizing
    
- background
    
- typography
    

---

## The code

\`\`\`jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkeletonLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-80">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-neutral-800 p-5"
          >
            <div className="h-4 w-32 rounded bg-neutral-700" />
            <div className="mt-3 h-3 w-full rounded bg-neutral-700" />
            <div className="mt-2 h-3 w-4/5 rounded bg-neutral-700" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-xl bg-neutral-800 p-5"
          >
            <h3 className="text-sm font-medium text-white">
              Weekly Notes
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              Ideas and reminders from this week.
            </p>

            <button className="mt-4 text-sm text-white">
              Read more →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\`

---

## Things to understand

### Is \`useEffect\` responsible for rendering the content?

No.

React state controls what gets rendered.

\`useEffect\` only starts the timer.

\`\`\`text
useEffect
   ↓
timer
   ↓
setIsLoading(false)
   ↓
state changes
   ↓
React renders content
\`\`\`

---

### Why not just use \`setTimeout\` directly in the component?

Because rendering should stay predictable.

Putting side effects directly into the component body can cause them to run repeatedly whenever React renders.

\`useEffect\` gives us a place to manage the side effect.

---

### Why do we need cleanup?

Because effects can create things that continue running:

\`\`\`text
timer
subscription
event listener
request
\`\`\`

When the component no longer needs them, they should be cleaned up.

---

## Try changing it

1. Change the loading time.
    
2. Add a skeleton avatar.
    
3. Add a button that manually finishes loading.
    
4. Add an error state.
    
5. Add a retry state.
    
6. Replace the fake timer with a real \`fetch()\`.
    
7. Remove \`AnimatePresence\` & see what changes.
    

The last exercise is important:

> understand what React does without Framer Motion.

---

## What this component teaches

The bigger pattern is:

\`\`\`text
initial state
     ↓
side effect
     ↓
state changes
     ↓
React re-renders
     ↓
different UI
\`\`\`

This pattern becomes extremely important when working with real data.

A real API request follows almost the same structure:

\`\`\`text
loading
   ↓
request
   ↓
success / error
   ↓
render result
\`\`\`

---

## Next concepts

- [useEffect](https://react.dev/reference/react/useEffect)
    
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [JavaScript \`setTimeout\`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout)
    
- [JavaScript \`clearTimeout\`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearTimeout)
    
- [React state](https://react.dev/learn/state-a-components-memory)`,HD=`A stack of cards that can be swiped left or right to dismiss, revealing the next card underneath — like a Tinder-style deck.

## What are we building?

A card stack with:

- a queue of cards, only the top 3 ever rendered
- drag-to-dismiss on the top card only
- cards underneath scaled down and offset, so the stack reads as a stack
- the dismissed card exits in whichever direction it was thrown
- an empty state with a reset button once the deck is cleared

The important part: **the array order *is* the UI**. There's no separate "which card is on top" flag — whichever card is first in the array is the top card, full stop.

---

## Mental model

\`\`\`text
              stack = [card1, card2, card3, card4]
                            │
                            ▼
              visible = stack.slice(0, 3)
                            │
                            ▼
          reverse, then map with index → position
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
         position 2    position 1    position 0
        (bottom card)  (middle card)  (top card, draggable)
\`\`\`

Dismissing the top card:

\`\`\`text
user drags top card
        │
        ▼
   onDragEnd fires
        │
        ▼
far enough OR fast enough?
        │
   ┌────┴────┐
   no         yes
   │           │
   ▼           ▼
snap back   remember exit direction
            for this card's id
                │
                ▼
        remove it from \`stack\`
                │
                ▼
        React re-renders
                │
                ▼
     AnimatePresence animates
     the removed card flying out
                │
                ▼
     the next card is now
     first in the array →
     it becomes the top card
\`\`\`

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, title: "Mountain Hike", color: "bg-emerald-500" },
  { id: 2, title: "Coffee Break", color: "bg-amber-500" },
  { id: 3, title: "City Lights", color: "bg-indigo-500" },
  { id: 4, title: "Ocean Breeze", color: "bg-sky-500" },
];

export default function SwipeableCardStack() {
  const [stack, setStack] = useState(cards);
  const [exitDirections, setExitDirections] = useState({});

  function handleDragEnd(id, info) {
    const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
    if (!passedThreshold) return;

    setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
    setStack((prev) => prev.filter((card) => card.id !== id));
  }

  const visible = stack.slice(0, 3);

  return (
    <div className="relative h-72 w-64">
      <AnimatePresence>
        {visible.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-300 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400"
          >
            <p>All caught up</p>
            <button onClick={() => setStack(cards)}>Reset</button>
          </motion.div>
        ) : (
          visible
            .slice()
            .reverse()
            .map((card, i) => {
              const position = visible.length - 1 - i; // 0 = top of the stack
              const isTop = position === 0;
              const direction = exitDirections[card.id] ?? 1;

              return (
                <motion.div
                  key={card.id}
                  className={\`absolute inset-0 flex items-end rounded-2xl p-5 text-white shadow-lg \${card.color}\`}
                  style={{ zIndex: 10 - position }}
                  initial={false}
                  animate={{ scale: 1 - position * 0.05, y: position * 10 }}
                  exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.9}
                  whileDrag={{ rotate: 8, cursor: "grabbing" }}
                  onDragEnd={(_, info) => handleDragEnd(card.id, info)}
                >
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                </motion.div>
              );
            })
        )}
      </AnimatePresence>
    </div>
  );
}
\`\`\`

---

## 1. The array order *is* the stack order

\`\`\`jsx
const [stack, setStack] = useState(cards);
\`\`\`

There's no \`topCardId\` or \`currentIndex\` variable anywhere. The component never asks "which card is on top?" — it just looks at \`stack[0]\`.

Dismissing a card means removing it from the array:

\`\`\`jsx
setStack((prev) => prev.filter((card) => card.id !== id));
\`\`\`

Whatever was second becomes first automatically. This is simpler than tracking an index, and it can never go out of sync with what's actually rendered.

---

## 2. Only rendering 3 cards at a time

\`\`\`jsx
const visible = stack.slice(0, 3);
\`\`\`

Even if the deck starts with 40 cards, only 3 DOM nodes ever exist. You don't need to render cards the user can't see or interact with yet — you only need enough underneath to sell the illusion of a deck.

---

## 3. Reverse, then map with index

\`\`\`jsx
visible
  .slice()
  .reverse()
  .map((card, i) => {
    const position = visible.length - 1 - i;
    ...
  })
\`\`\`

This looks backwards on purpose. \`visible[0]\` is the top card, but in the DOM it needs to be painted **last** so it stacks visually above the others (later siblings paint on top of earlier ones). Reversing the array before mapping puts the bottom card first in the JSX and the top card last.

\`.slice()\` before \`.reverse()\` matters: \`.reverse()\` mutates the array it's called on. Without \`.slice()\` first, it would silently reverse \`visible\` itself — and since \`visible\` was built from \`stack\` with \`.slice(0, 3)\` (a copy), this particular case is *safe*, but it's a habit worth having: never mutate an array you didn't explicitly make a throwaway copy of.

\`position\` converts the reversed index back into "distance from the top" — \`0\` is always the top card, \`1\` is the one behind it, and so on, regardless of how the array happened to be ordered going in.

---

## 4. Faking depth with scale and offset

\`\`\`jsx
animate={{ scale: 1 - position * 0.05, y: position * 10 }}
\`\`\`

The top card (\`position: 0\`) renders at full scale with no offset. Each card behind it shrinks by 5% and shifts down by 10px per position. There's no 3D or perspective involved — it's plain 2D scale and translate, but paired with \`zIndex: 10 - position\` (so closer-to-top cards paint over farther ones), it reads as a physical stack.

---

## 5. Only the top card is draggable

\`\`\`jsx
drag={isTop ? "x" : false}
\`\`\`

\`drag\` isn't just \`true\`/\`false\` — passing \`"x"\` constrains dragging to the horizontal axis only. Passing \`false\` disables it entirely. Only \`position === 0\` gets \`drag="x"\`; every card behind it is locked in place until it becomes the top card itself.

---

## 6. The dismiss threshold

\`\`\`jsx
const passedThreshold = Math.abs(info.offset.x) > 100 || Math.abs(info.velocity.x) > 500;
\`\`\`

Same pattern as the Drawer Modal and Bottom Sheet: a swipe counts as *either* dragged far enough *or* thrown fast enough. \`Math.abs\` matters here because a swipe can be dismissed in either direction — left or right, both should count.

If the threshold isn't met, \`handleDragEnd\` returns early and does nothing — Framer Motion's \`animate\` prop (still \`{ scale, y }\` for \`position: 0\`) snaps the card back into place automatically, since no \`x\` value was ever set to move it away.

---

## 7. Remembering which way a card left

\`\`\`jsx
const [exitDirections, setExitDirections] = useState({});
...
setExitDirections((prev) => ({ ...prev, [id]: info.offset.x > 0 ? 1 : -1 }));
\`\`\`

Here's a subtlety: by the time a card's \`exit\` animation runs, it has *already been removed from \`stack\`*. Its own drag \`info\` is gone. So before removing it, the direction it was swiped (\`1\` for right, \`-1\` for left) is stashed in a separate object, keyed by the card's \`id\`.

\`\`\`jsx
exit={{ x: direction * 300, opacity: 0, rotate: direction * 15 }}
\`\`\`

reads that stored direction to decide whether the card should fly off to the right or the left as it exits — matching the direction the user actually swiped, instead of always exiting the same way.

---

## 8. \`AnimatePresence\` for the exit

Same role as in the Drawer Modal: without it, a card removed from \`stack\` would just vanish the instant React re-renders. \`AnimatePresence\` holds it in the DOM long enough to run its \`exit\` animation first.

The empty state (\`key="empty"\`) is inside the *same* \`AnimatePresence\`, so it fades in smoothly right as the last card finishes exiting, instead of popping in abruptly.

---

## What belongs to what?

| Concept | Technology |
|---|---|
| \`stack\`, \`exitDirections\` | React |
| \`.slice()\`, \`.reverse()\`, \`.map()\`, \`.filter()\` | JavaScript |
| \`drag\`, \`dragConstraints\`, \`whileDrag\` | Framer Motion |
| \`onDragEnd\`, \`info.offset\`, \`info.velocity\` | Framer Motion |
| \`AnimatePresence\`, \`exit\` | Framer Motion |
| \`absolute inset-0\`, \`zIndex\` via \`style\` | Tailwind / CSS |

---

## Things to understand

- why array order can replace a separate "index" state
- \`.slice()\` vs \`.reverse()\` and why order of operations matters
- rendering only a slice of a larger dataset
- conditional \`drag\` prop (\`"x"\` vs \`false\`)
- offset-or-velocity dismiss thresholds
- storing per-item metadata (\`exitDirections\`) keyed by id
- \`AnimatePresence\` holding an element through its exit

---

## Try changing it

1. Increase \`visible\` from 3 cards to 5 — do you need to change anything else?
2. Make the dismiss threshold easier by lowering \`100\` to \`50\`.
3. Add a fourth exit direction based on vertical swipes too.
4. Show a colored border on the top card while dragging, based on direction.
5. Instead of \`Reset\`, add an "Undo" that puts the last dismissed card back on top.

---

## What this component teaches

This component is a good example of **deriving UI state instead of storing it**. There's no \`currentCardIndex\`, no \`isTopCard\` flag stored per card — \`position\` is computed fresh every render from \`stack\`'s order and each card's index. When state can be computed instead of stored, storing it anyway is usually a bug waiting to happen (the two can drift out of sync). Compute it instead.

---

## Next concepts

After this, you should understand:

- keyed metadata objects (\`{ [id]: value }\`) as a lightweight alternative to a \`Map\`
- derived vs stored state
- multi-directional gesture thresholds
- \`AnimatePresence\` with dynamic lists (not just a single boolean)
`,qD=`A group of tabs where one tab is active at a time.

The goal isn't just to make tabs. The goal is to understand how **React state can hold a value**, how [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) become UI using \`.map()\`, & how one piece of state can control multiple parts of the interface.

---

## What are we building?

\`\`\`text
┌────────┬───────────┬────────┐
│ Commit │ Analytics │ Upgrade│
└────────┴───────────┴────────┘
   ↑
 active
\`\`\`

When the user clicks Analytics:

\`\`\`text
┌────────┬───────────┬────────┐
│ Commit │ Analytics │ Upgrade│
└────────┴───────────┴────────┘
            ↑
          active
\`\`\`

Only one tab is selected at a time.

---

## The mental model

This time we don't need a boolean. We need to remember:

> **which tab is selected?**

So our state is:

\`\`\`jsx
const [activeTab, setActiveTab] = useState("Commit");
\`\`\`

The state contains a value:

\`\`\`text
activeTab = "Commit"
\`\`\`

After clicking Analytics:

\`\`\`text
activeTab = "Analytics"
\`\`\`

The flow is:

\`\`\`text
activeTab = "Commit"
       ↓
render all tabs
       ↓
Commit is active
       ↓
user clicks Analytics
       ↓
setActiveTab("Analytics")
       ↓
activeTab = "Analytics"
       ↓
React re-renders
       ↓
Analytics is now active
\`\`\`

---

## The important idea

In the Toggle Switch, our state was:

\`\`\`text
true / false
\`\`\`

Here our state is:

\`\`\`text
"Commit"
"Analytics"
"Upgrade"
\`\`\`

So state doesn't always mean on/off. It can represent a **value**.

---

## Step 1 — store the tab data

\`\`\`jsx
const tabs = ["Commit", "Analytics", "Upgrade"];
\`\`\`

This is a ==JavaScript array.==

Instead of manually writing:

\`\`\`jsx
<button>Commit</button>
<button>Analytics</button>
<button>Upgrade</button>
\`\`\`

we can create the buttons from the array.

---

## Step 2 — use \`.map()\`

\`\`\`jsx
{tabs.map((tab) => (
  <button key={tab}>
    {tab}
  </button>
))}
\`\`\`

[\`.map()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) goes through an array and creates something for every item.

So:

\`\`\`text
["Commit", "Analytics", "Upgrade"]
             ↓
            map()
             ↓
┌────────┐ ┌───────────┐ ┌────────┐
│ Commit │ │ Analytics │ │ Upgrade│
└────────┘ └───────────┘ └────────┘
\`\`\`

This is JavaScript doing the work. React is simply rendering the result.

---

## Step 3 — why \`key\`?

\`\`\`jsx
key={tab}
\`\`\`

React needs a way to identify each item in a list.

So:

\`\`\`text
Commit → key "Commit"
Analytics → key "Analytics"
Upgrade → key "Upgrade"
\`\`\`

This is a [React key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key). For simple static values like these, the tab itself can be the key.

---

## Step 4 — clicking a tab changes state

\`\`\`jsx
onClick={() => setActiveTab(tab)}
\`\`\`

Notice that \`tab\` comes from \`.map()\`.

When we're rendering:

\`\`\`text
Commit
\`\`\`

the click becomes:

\`\`\`jsx
setActiveTab("Commit")
\`\`\`

For Analytics:

\`\`\`jsx
setActiveTab("Analytics")
\`\`\`

For Upgrade:

\`\`\`jsx
setActiveTab("Upgrade")
\`\`\`

So the same component logic works for every tab.

---

## Step 5 — determine which tab is active

We can ask:

\`\`\`jsx
activeTab === tab
\`\`\`

This is a comparison.

For example:

\`\`\`text
activeTab = "Analytics"
tab = "Commit"

"Analytics" === "Commit"
        ↓
      false
\`\`\`

But:

\`\`\`text
activeTab = "Analytics"
tab = "Analytics"

"Analytics" === "Analytics"
        ↓
       true
\`\`\`

So every tab can figure out whether **it** is active.

---

## Step 6 — conditional rendering

We can use:

\`\`\`jsx
{activeTab === tab && (
  <motion.div />
)}
\`\`\`

This uses \`&&\` for [conditional rendering](https://react.dev/learn/conditional-rendering).

Read it as:

> if this tab is active, render the active pill.

So:

\`\`\`text
Commit
   ↓
is it active?
   ↓
yes → render pill
no  → don't render pill
\`\`\`

---

## Step 7 — conditional styling

We can also change the text:

\`\`\`jsx
activeTab === tab
  ? "text-black"
  : "text-neutral-400"
\`\`\`

This is the [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

So the active tab gets one style & the inactive tabs get another.

---

## Step 8 — Framer Motion

The active background uses:

\`\`\`jsx
<motion.div
  layoutId="active-pill"
/>
\`\`\`

Every active tab renders a pill with the same:

\`\`\`text
layoutId = "active-pill"
\`\`\`

When the active tab changes:

\`\`\`text
Commit
   ↓
Analytics
\`\`\`

React changes which pill exists.

Framer Motion sees the same \`layoutId\` move from one tab to another.

So instead of:

\`\`\`text
pill disappears
pill appears
\`\`\`

it visually becomes:

\`\`\`text
pill
 ↓
moves
 ↓
new tab
\`\`\`

This is the same **shared visual identity** idea you'll see later in Card Expand & Image Gallery.

---

## What belongs to what?

### React

- \`useState\`
    
- state
    
- event handlers
    
- \`.map()\` rendering
    
- conditional rendering
    
- \`key\`
    

### JavaScript

- arrays
    
- \`.map()\`
    
- \`===\`
    
- arrow functions
    

### Tailwind

- spacing
    
- colours
    
- positioning
    
- \`relative\`
    
- \`absolute\`
    
- \`z-10\`
    

### Framer Motion

- \`motion.div\`
    
- \`layoutId\`
    
- \`transition\`
    

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Commit", "Analytics", "Upgrade"];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex w-fit gap-2 rounded-full bg-neutral-800 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative rounded-full px-4 py-2 text-sm font-medium"
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 rounded-full bg-white"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}

          <span
            className={\`relative z-10 \${
              activeTab === tab
                ? "text-black"
                : "text-neutral-400"
            }\`}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
}
\`\`\`

---

## Things to understand

### Why use an array?

Because the tabs are a collection of similar things.

\`\`\`text
tabs
 ↓
map()
 ↓
buttons
\`\`\`

If we add:

\`\`\`jsx
"Settings"
\`\`\`

to the array, another tab automatically appears.

---

### Why only one piece of state?

We could theoretically have:

\`\`\`text
commitIsActive
analyticsIsActive
upgradeIsActive
\`\`\`

But that creates unnecessary state.

Instead:

\`\`\`text
activeTab = "Analytics"
\`\`\`

already tells us everything we need.

Every tab can derive:

\`\`\`text
am I active?
\`\`\`

from that value.

---

### Does \`layoutId\` select the tab?

No.

React state selects the tab:

\`\`\`jsx
setActiveTab(tab)
\`\`\`

\`layoutId\` only helps Framer Motion animate the active indicator between tabs.

---

## Try changing it

1. Add a fourth tab.
    
2. Change the active indicator from a pill to an underline.
    
3. Make the tabs vertical.
    
4. Add an icon to each tab.
    
5. Change the animation from spring to tween.
    
6. Remove \`layoutId\` & see what changes.
    
7. Replace the strings with objects:
    

\`\`\`jsx
const tabs = [
  { label: "Commit", icon: "..." },
  { label: "Analytics", icon: "..." },
  { label: "Upgrade", icon: "..." },
];
\`\`\`

This is a good exercise because you're now changing the **data structure**, not just the styling.

---

## What this component teaches

The bigger pattern is:

\`\`\`text
data
 ↓
.map()
 ↓
UI
\`\`\`

combined with:

\`\`\`text
selected value
 ↓
compare with each item
 ↓
derive active state
 ↓
change UI
\`\`\`

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
- [JavaScript \`map()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [React state](https://react.dev/learn/state-a-components-memory)
- [React keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
- [JavaScript strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)`,GD=`A toast is a small temporary notification that appears after an action.

For example:

\`\`\`text
┌─────────────────────────────┐
│ ✓ Changes saved             │
└─────────────────────────────┘
\`\`\`

The goal isn't just to make a notification. This component introduces an important new idea:

> **state can be an array of objects.**

---

## What are we building?

Clicking a button creates a toast.

\`\`\`text
click
 ↓
┌─────────────────────────────┐
│ Changes saved successfully  │
└─────────────────────────────┘
\`\`\`

After three seconds, it disappears.

Multiple toasts can exist at the same time.

\`\`\`text
┌─────────────────────────────┐
│ Changes saved               │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Profile updated             │
└─────────────────────────────┘
┌─────────────────────────────┐
│ Settings saved              │
└─────────────────────────────┘
\`\`\`

---

## The mental model

Our state is not a boolean.

It is an array:

\`\`\`jsx
const [toasts, setToasts] = useState([]);
\`\`\`

Initially:

\`\`\`text
toasts = []
\`\`\`

No notifications exist.

After clicking:

\`\`\`text
toasts = [
  {
    id: 123,
    message: "Changes saved successfully"
  }
]
\`\`\`

Click again:

\`\`\`text
toasts = [
  {
    id: 123,
    message: "Changes saved successfully"
  },
  {
    id: 124,
    message: "Changes saved successfully"
  }
]
\`\`\`

So the state represents the **current collection of toasts**.

---

## The complete flow

\`\`\`text
user clicks
     ↓
create a toast object
     ↓
add object to toasts array
     ↓
React re-renders
     ↓
.map() creates a UI element
     ↓
toast appears
     ↓
3 seconds pass
     ↓
remove that toast from array
     ↓
React re-renders
     ↓
AnimatePresence plays exit animation
\`\`\`

---

## Step 1 — array state

\`\`\`jsx
const [toasts, setToasts] = useState([]);
\`\`\`

The initial value is an empty array.

This means:

> currently, there are no toasts.

This is different from our previous components.

\`\`\`text
Toggle
state → boolean


Tabs
state → string


Accordion
state → number/null


Toast
state → array
\`\`\`

---

## Step 2 — create a toast

\`\`\`jsx
function addToast() {
  const id = Date.now();

  setToasts((prev) => [
    ...prev,
    {
      id,
      message: "Changes saved successfully",
    },
  ]);
}
\`\`\`

First:

\`\`\`jsx
const id = Date.now();
\`\`\`

We create an identifier.

We need this because each toast needs to be distinguishable from the others.

---

## Step 3 — the spread operator

This part is important:

\`\`\`jsx
[
  ...prev,
  newToast
]
\`\`\`

The \`...\` is the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

If:

\`\`\`text
prev = [A, B]
\`\`\`

then:

\`\`\`jsx
[...prev, C]
\`\`\`

creates:

\`\`\`text
[A, B, C]
\`\`\`

We are creating a **new array** rather than changing the existing one directly.

This is an important React pattern.

---

## Step 4 — why \`prev\`?

\`\`\`jsx
setToasts((prev) => ...)
\`\`\`

\`prev\` is the previous value of \`toasts\`.

We're using it because the new array depends on the previous array.

\`\`\`text
previous toasts
      ↓
add another toast
      ↓
new toasts
\`\`\`

---

## Step 5 — render the toasts

\`\`\`jsx
{toasts.map((toast) => (
  <motion.div key={toast.id}>
    {toast.message}
  </motion.div>
))}
\`\`\`

Again, \`.map()\` converts data into UI.

\`\`\`text
toasts array
    ↓
.map()
    ↓
toast UI
toast UI
toast UI
\`\`\`

Each object becomes one visual notification.

---

## Step 6 — why the key?

\`\`\`jsx
key={toast.id}
\`\`\`

React needs to distinguish between the toast items.

Imagine:

\`\`\`text
Toast A → id 123
Toast B → id 124
Toast C → id 125
\`\`\`

The IDs give React stable identities.

This becomes particularly important when we remove one item.

---

## Step 7 — remove a toast

When we create a toast, we also start a timer:

\`\`\`jsx
setTimeout(() => {
  setToasts((prev) =>
    prev.filter((toast) => toast.id !== id)
  );
}, 3000);
\`\`\`

After three seconds we remove the toast.

The important part is:

\`\`\`jsx
filter((toast) => toast.id !== id)
\`\`\`

[\`filter()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) creates a new array containing only the items that pass the condition.

So if:

\`\`\`text
toasts = [A, B, C]
\`\`\`

and we want to remove B:

\`\`\`text
toast.id !== B.id
\`\`\`

gives:

\`\`\`text
[A, C]
\`\`\`

---

## Step 8 — React notices the array changed

Before:

\`\`\`text
[A, B, C]
\`\`\`

After:

\`\`\`text
[A, C]
\`\`\`

React re-renders.

\`.map()\` now only renders:

\`\`\`text
A
C
\`\`\`

B is no longer rendered.

---

## Step 9 — AnimatePresence

Because the toast is disappearing:

\`\`\`jsx
<AnimatePresence>
\`\`\`

allows Framer Motion to play its exit animation.

So:

\`\`\`text
toast removed from state
       ↓
React stops rendering it
       ↓
AnimatePresence
       ↓
exit animation
       ↓
toast disappears
\`\`\`

---

## What belongs to what?

### React

- \`useState\`
    
- array state
    
- event handlers
    
- re-render
    
- \`key\`
    

### JavaScript

- arrays
    
- objects
    
- spread syntax
    
- \`.map()\`
    
- \`.filter()\`
    
- \`Date.now()\`
    
- \`setTimeout\`
    

### Framer Motion

- \`motion\`
    
- \`AnimatePresence\`
    
- \`layout\`
    
- \`initial\`
    
- \`animate\`
    
- \`exit\`
    

### Tailwind

- positioning
    
- spacing
    
- sizing
    
- colours
    
- typography
    

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  function addToast() {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        message: "Changes saved successfully",
      },
    ]);

    setTimeout(() => {
      setToasts((prev) =>
        prev.filter((toast) => toast.id !== id)
      );
    }, 3000);
  }

  return (
    <div>
      <button
        onClick={addToast}
        className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
      >
        Save changes
      </button>

      <div className="fixed bottom-6 right-6 z-50 flex w-80 flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="rounded-lg bg-neutral-800 px-4 py-3 text-sm text-white shadow-xl"
            >
              {toast.message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
\`\`\`

---

## Things to understand

### Why is the state an array?

Because multiple toasts can exist.

\`\`\`text
one toast

[toast]


three toasts

[toast, toast, toast]
\`\`\`

The array represents the current collection.

---

### Why not just use \`isToastVisible\`?

That would only tell us:

\`\`\`text
yes/no
\`\`\`

It wouldn't tell us:

\`\`\`text
how many?
which ones?
what message?
which one should disappear?
\`\`\`

The array gives us all that information.

---

### Why don't we use \`push()\`?

You might be tempted to do:

\`\`\`jsx
prev.push(newToast)
\`\`\`

But React state should generally be treated as immutable.

Instead, create a new array:

\`\`\`jsx
[...prev, newToast]
\`\`\`

This gives React a new value to work with.

---

### Why do we use \`filter()\` to remove the toast?

Because we don't want to mutate the existing array.

We create a new array containing everything **except** the toast we want to remove.

---

## Try changing it

1. Add different messages.
    
2. Add a \`type\` property:
    

\`\`\`jsx
{
  id,
  type: "success",
  message: "Saved!"
}
\`\`\`

3. Add error & warning toasts.
    
4. Add a close button.
    
5. Give each toast a different duration.
    
6. Add a progress bar showing the remaining time.
    
7. Make the newest toast appear at the top.
    
8. Add a maximum of 3 visible toasts.
    

The important exercise is adding a \`type\`.

You will then have to think about:

\`\`\`text
toast.type
     ↓
what should this particular toast look like?
\`\`\`

That's another example of **data driving UI**.

---

## What this component teaches

The bigger pattern is:

\`\`\`text
data stored in state
       ↓
.map()
       ↓
UI
\`\`\`

And when the data changes:

\`\`\`text
array changes
     ↓
React re-renders
     ↓
UI reflects the new array
\`\`\`

This pattern is everywhere in real applications:

\`\`\`text
notifications
messages
shopping cart items
comments
tasks
search results
table rows
\`\`\`

---

## Next concepts

- [Rendering lists](https://react.dev/learn/rendering-lists)
    
- [React state](https://react.dev/learn/state-a-components-memory)
    
- [Updating arrays in state](https://react.dev/learn/updating-arrays-in-state)
    
- [JavaScript \`map()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    
- [JavaScript \`filter()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    
- [JavaScript spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    
- [JavaScript \`Date.now()\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
    
- [React keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)`,KD=`A small switch that changes between two states: on & off.
understand one of the most basic React patterns:

> **state changes → UI changes**


Understanding this can be divided into 3 parts 
1. Logic ( state changed)
2. Colour ( Tailwind)
3. Motion ( Farmer)

---

## What are we building?

A switch with two visual states.

\`\`\`text
OFF

┌──────────────┐
│ ●            │
└──────────────┘
\`\`\`

After clicking:

\`\`\`text
ON

┌──────────────┐
│            ● │
└──────────────┘
\`\`\`

==The circle moves because the state has changed.==

---

## The mental model

We only need to remember one thing:

\`\`\`text
isOn
\`\`\`

It can be:

\`\`\`text
false
\`\`\`

or:

\`\`\`text
true
\`\`\`

So the component works like this:

\`\`\`text
isOn = false
    ↓
show OFF state
    ↓
user clicks
    ↓
setIsOn(!isOn)
    ↓
isOn = true
    ↓
React re-renders
    ↓
show ON state
\`\`\`

When we click again:

\`\`\`text
true
 ↓
false
\`\`\`

---

## Step 1 — create the state

\`\`\`jsx
const [isOn, setIsOn] = useState(false);
\`\`\`

This is [React state](https://react.dev/learn/state-a-components-memory).

There are two parts:

\`\`\`text
isOn
\`\`\`

The current value.

And:

\`\`\`text
setIsOn
\`\`\`

The function that changes it.

We start with:

\`\`\`text
isOn = false
\`\`\`

So the switch starts off. // and look like this add image here// 

---

## Step 2 — respond to a click

\`\`\`jsx
onClick={() => setIsOn(!isOn)}
\`\`\`

When the user clicks, we change the state.

The \`!\` means **not**.

So:

\`\`\`text
!false → true
!true → false
\`\`\`

Therefore:

\`\`\`text
false
  ↓
!false
  ↓
true
\`\`\`

and:

\`\`\`text
true
  ↓
!true
  ↓
false
\`\`\`

This is a [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean). A boolean can only either be true or false

\`\`\`text
true
false
\`\`\`

---

## Step 3 — React re-renders

After:

\`\`\`jsx
setIsOn(!isOn)
\`\`\`

React runs the component again with the new state.

This is called a [re-render](https://react.dev/learn/render-and-commit).

The flow is:

\`\`\`text
click
 ↓
setIsOn()
 ↓
state changes
 ↓
React re-renders
 ↓
new state is used
 ↓
UI changes
\`\`\`

This is one of the most important React patterns to understand.

---

## Step 4 change the styling based on state

We can use a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator):

\`\`\`jsx
isOn ? "bg-green-500" : "bg-gray-300"
\`\`\`

Read this as:

> if \`isOn\` is true, use the first value. Otherwise use the second.

So:

\`\`\`text
isOn = true
    ↓
bg-green-500
\`\`\`

and:

\`\`\`text
isOn = false
    ↓
bg-gray-300
\`\`\`

The same idea is used for the circle position:

\`\`\`jsx
isOn ? "justify-end" : "justify-start"
\`\`\`

So:

\`\`\`text
OFF
justify-start
     ↓
●────────


ON
justify-end
     ↓
────────●
\`\`\`

---

## Step 5 — where Framer Motion comes in

React has already done its job.

React decides:

\`\`\`text
OFF layout
   ↓
ON layout
\`\`\`

But without animation, that change would happen immediately.

Framer Motion makes the change feel physical.

\`\`\`jsx
<motion.div
  layout
  transition={{
    type: "spring",
    stiffness: 700,
    damping: 30
  }}
/>
\`\`\`

The important part here is:

\`\`\`jsx
layout
\`\`\`

It tells Framer Motion to animate layout changes.

So:

\`\`\`text
React

"the circle should now be on the right."

        ↓

Framer Motion

"I'll animate it from the old position to the new position."
\`\`\`

---

## What belongs to what?

### React 
(useState,  state, setIsOn, onClick,  re-render) 


### JavaScript

- booleans, !, ternary \`? : , arrow functions

### Tailwind

- \`bg-*\`
    
- \`justify-start\`
    
- \`justify-end\`
    
- sizing
    
- spacing
    
- rounded corners
    

### Framer Motion

- \`motion.div\`
    
- \`layout\`
    
- \`transition\`
    
- spring animation
    

---

## The code

\`\`\`jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      onClick={() => setIsOn(!isOn)}
      className={\`flex h-9 w-16 cursor-pointer rounded-full p-1 \${
        isOn
          ? "justify-end bg-green-500"
          : "justify-start bg-gray-300"
      }\`}
    >
      <motion.div
        className="h-7 w-7 rounded-full bg-white shadow-md"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </div>
  );
}
\`\`\`

---

## Things to understand

### Does \`setIsOn()\` move the circle?

No.

It changes the state.

\`\`\`text
setIsOn()
   ↓
state changes
   ↓
React re-renders
   ↓
Tailwind classes change
   ↓
layout changes
   ↓
Framer Motion animates it
\`\`\`

### Why don't we store the position separately?

We don't need:

\`\`\`text
circlePosition = "right"
\`\`\`

The position is already determined by:

\`\`\`text
isOn
\`\`\`

So we have one source of truth.

---

## Try changing it

Don't just copy the component.

Try:

1. Change the switch from green/grey to another visual treatment.
    
2. Add an \`OFF\` & \`ON\` label.
    
3. Make the switch bigger.
    
4. Change the spring stiffness.
    
5. Change the damping.
    
6. Remove \`layout\` & see what happens.
    
7. Remove Framer Motion completely & see what React still does.
    
8. Add a disabled state.
    

The goal is to understand **which part of the component is responsible for what**.

---

## What this component teaches

The bigger pattern is:

\`\`\`text
user interaction
      ↓
event
      ↓
state update
      ↓
React re-render
      ↓
UI reflects state
\`\`\`

This pattern appears everywhere in interactive interfaces.

---

## Next concepts

After understanding this component, useful concepts to learn are:

- [React state](https://react.dev/learn/state-a-components-memory)
    
- [Event handlers](https://react.dev/learn/responding-to-events)
    
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
    
- [JavaScript booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
    
- [Ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)`,YD=`A tooltip that follows your mouse cursor.

The goal isn't just to make a tooltip. The goal is to understand how React can respond to **browser events** and use that information to update the UI.

---

## What are we building?

When the user moves their mouse inside a container, a small tooltip follows the cursor.

\`\`\`text
┌─────────────────────────────────┐
│                                 │
│       move your cursor →        │
│                         [info]  │
│                                 │
└─────────────────────────────────┘
\`\`\`

When the cursor leaves the container, the tooltip disappears.

---

## The mental model

There are two things we need to know:

1. Is the cursor inside the container?
2. Where is the cursor?

So we keep two pieces of state:

\`\`\`text
isHovering
    ↓
should the tooltip exist?

coords
    ↓
where should the tooltip be?
\`\`\`

The overall flow:

\`\`\`text
mouse enters
    ↓
isHovering = true
    ↓
show tooltip

mouse moves
    ↓
browser gives us cursor position
    ↓
save position in coords
    ↓
React re-renders
    ↓
tooltip moves

mouse leaves
    ↓
isHovering = false
    ↓
hide tooltip
\`\`\`

---

## What belongs to what?

### JavaScript

JavaScript gives us things like:

- the mouse event
- \`getBoundingClientRect()\`
- \`clientX\` & \`clientY\`
- objects
- calculations

### React

React gives us:

- \`useState\`
- event handlers
- re-rendering
- conditional rendering


### Tailwind

Tailwind controls:

- size
- spacing
- positioiing
- colours
- typography

### Framer Motion

Framer Motion controls:

- the tooltip's entrance
- the tooltip's exit
- animation


This separation is useful because React isn't doing everything.

---

## Step 1 — tracking whether we're hovering

\`\`\`jsx
const [isHovering, setIsHovering] = useState(false);
\`\`\`

We start with:

\`\`\`text
isHovering = false
\`\`\`

When the mouse enters:

\`\`\`jsx
onMouseEnter={() => setIsHovering(true)}
\`\`\`

When it leaves:

\`\`\`jsx
onMouseLeave={() => setIsHovering(false)}
\`\`\`

So:

\`\`\`text
mouse enters
    ↓
setIsHovering(true)
    ↓
isHovering = true
    ↓
React re-renders
\`\`\`

---

## Step 2 — tracking the cursor position

A boolean isn't enough.

We also need to know:

\`\`\`text
x = ?
y = ?
\`\`\`

So we use an object:

\`\`\`jsx
const [coords, setCoords] = useState({
  x: 0,
  y: 0,
});
\`\`\`

When the mouse moves:

\`\`\`jsx
function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();

  setCoords({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  });
}
\`\`\`

There are a few new concepts here.

### \`e\`

\`e\` is the **event object**.

The browser gives it to our event handler.

It contains information about the event that happened.

### \`e.clientX\`

The cursor's X position relative to the browser viewport.

### \`e.clientY\`

The cursor's Y position relative to the browser viewport.

### \`getBoundingClientRect()\`

This gives us information about the element's position and size.

We use it because we don't want the tooltip position relative to the entire browser window.

We want it relative to our container.

So:

\`\`\`text
browser cursor position
        ↓
clientX / clientY
        ↓
subtract container position
        ↓
local x / y
        ↓
position tooltip
\`\`\`

---

## Step 3 — conditionally render the tooltip

We only want the tooltip when the user is hovering.

\`\`\`jsx
{isHovering && (
  <motion.div>
    ...
  </motion.div>
)}
\`\`\`

This is **conditional rendering**.

You can read it as:

> if \`isHovering\` is true, render this.

The \`&&\` here is a JavaScript pattern commonly used in React for conditional rendering.

---

## Step 4 — position the tooltip

The tooltip uses:

\`\`\`jsx
style={{
  left: coords.x,
  top: coords.y,
}}
\`\`\`

So if:

\`\`\`text
coords = {
  x: 120,
  y: 80
}
\`\`\`

the tooltip gets positioned at:

\`\`\`text
left: 120px
top: 80px
\`\`\`

Every mouse movement updates \`coords\`.

That causes React to render the tooltip at the new position.

---

## Step 5 — animate it

React answers:

> should the tooltip exist?

Framer Motion answers:

> how should it appear/disappear?

\`\`\`jsx
<AnimatePresence>
  {isHovering && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      ...
    </motion.div>
  )}
</AnimatePresence>
\`\`\`

---

## New concepts in this component

### React

- \`useState\`
    
- event handlers
    
- conditional rendering
    
- re-render
    

### JavaScript

- objects
    
- function parameters
    
- event objects
    
- \`&&\`
    
- calculations
    

### Browser APIs

- \`getBoundingClientRect()\`
    
- \`clientX\`
    
- \`clientY\`
    

### Framer Motion

- \`motion.div\`
    
- \`AnimatePresence\`
    
- \`initial\`
    
- \`animate\`
    
- \`exit\`
    

### CSS / Tailwind

- \`relative\`
    
- \`absolute\`
    
- positioning
    
- \`pointer-events-none\`
    

---

## Things I need to understand before moving on

Don't just memorise this component.

Make sure you can answer:

**Why do we need \`coords\`?**

Because the tooltip needs to know where to go.

**Why is \`coords\` an object?**

Because we're storing two related values: \`x\` & \`y\`.

**Why does changing \`coords\` move the tooltip?**

Because state changes → React re-renders → the new coordinates are applied.

**Why do we need \`AnimatePresence\`?**

Because the tooltip is conditionally removed from the DOM, and we want Framer Motion to control its exit animation.

---

## Try changing it

Before moving to the next component, try:

1. Make the tooltip follow only the X position.
    
2. Offset it by \`10px\`.
    
3. Make it appear below the cursor instead of directly on it.
    
4. Change the enter animation.
    
5. Remove Framer Motion completely & see what React still does.
    
6. Remove \`coords\` & understand why the tooltip can no longer follow the cursor.
    

The goal is not to copy the component.

The goal is to be able to break it & understand why it broke.

---

## What this component teaches

The bigger idea is:

\`\`\`text
browser event
    ↓
event data
    ↓
React state
    ↓
re-render
    ↓
updated UI
\`\`\`

This is one of the most important patterns in interactive UI.`,JD=Object.assign({"../breakdown/Accordion.md":AD,"../breakdown/Card that expands.md":jD,"../breakdown/Copy To Clipboard.md":ID,"../breakdown/Drag Reorder.md":_D,"../breakdown/Draggable Bottom Sheet.md":ND,"../breakdown/Drawer Modal.md":MD,"../breakdown/Dropdown Menu.md":DD,"../breakdown/Image gallery.md":LD,"../breakdown/Index of learning react one component at a time.md":OD,"../breakdown/Like Button.md":FD,"../breakdown/Password Strength Meter.md":zD,"../breakdown/Progress Stepper.md":BD,"../breakdown/Pull To Refresh.md":VD,"../breakdown/Rating Stars.md":WD,"../breakdown/Segmented control.md":UD,"../breakdown/Skeleton Loader.md":$D,"../breakdown/Swipeable Card Stack.md":HD,"../breakdown/Tab switcher.md":qD,"../breakdown/Toast.md":GD,"../breakdown/Toggle Switch.md":KD,"../breakdown/Tooltip.md":YD});function Ly(e){return JD[`../breakdown/${e}.md`]??""}const mw={"001-toggle-switch":"Toggle Switch","002-tab-switcher":"Tab switcher","003-accordion-faq":"Accordion","004-tooltip-follow-cursor":"Tooltip","005-like-heart-button":"Like Button","006-skeleton-loader":"Skeleton Loader","007-toast-notification":"Toast","008-drawer-modal":"Drawer Modal","009-dropdown-menu":"Dropdown Menu","010-drag-reorder-list":"Drag Reorder","011-image-gallery-layout":"Image gallery","012-progress-stepper":"Progress Stepper","013-segmented-control":"Segmented control","014-card-expand-detail":"Card that expands","015-swipeable-card-stack":"Swipeable Card Stack","016-pull-to-refresh":"Pull To Refresh","017-draggable-bottom-sheet":"Draggable Bottom Sheet","018-password-strength-meter":"Password Strength Meter","019-copy-to-clipboard":"Copy To Clipboard","020-rating-stars":"Rating Stars"},XD="Index of learning react one component at a time";function QD(e){if(e==="index")return Ly(XD);const n=mw[e];return n?Ly(n):""}function gw(e){return e==="index"||!!mw[e]}function ZD(e){return[{slug:"index",day:null,name:"Index"},...e.map(({slug:n,day:t,name:o})=>({slug:n,day:t,name:o}))]}const eL=[{title:"01 — State & Rendering",items:["001-toggle-switch","002-tab-switcher","003-accordion-faq"]},{title:"02 — Interaction",items:["004-tooltip-follow-cursor","005-like-heart-button","007-toast-notification","020-rating-stars","018-password-strength-meter"]},{title:"03 — Effects & Browser APIs",items:["006-skeleton-loader","008-drawer-modal","019-copy-to-clipboard"]},{title:"04 — Data & Lists",items:["009-dropdown-menu","010-drag-reorder-list","011-image-gallery-layout"]},{title:"05 — Layout & Motion",items:["012-progress-stepper","013-segmented-control","014-card-expand-detail","015-swipeable-card-stack","017-draggable-bottom-sheet","016-pull-to-refresh"]},{title:"06 — Component Architecture",items:[{slug:"008-drawer-modal",label:"Modal"},{slug:"009-dropdown-menu",label:"Controlled Dropdown"}]}];function nL(e){const n=Object.fromEntries(e.map(t=>[t.slug,t]));return eL.map(({title:t,items:o})=>{const a=o.map(u=>{const l=typeof u=="string"?{slug:u}:u,c=n[l.slug];return c?{slug:c.slug,day:c.day,name:l.label??c.name,prerequisites:c.prerequisites??[]}:null}).filter(Boolean).sort((u,l)=>u.day.localeCompare(l.day));return{title:t,items:a.map((u,l)=>({...u,isFirstInCategory:l===0}))}})}function yw(e){return P.Children.toArray(e).map(n=>{var t;return typeof n=="string"?n:(t=n==null?void 0:n.props)!=null&&t.children?yw(n.props.children):""}).join("")}function xw(e){return e.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}function tL(e){return e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").trim()}function rL(e){const n=[];for(const t of e.split(`
`)){const o=t.match(/^##\s+(.+)$/);if(o){const a=tL(o[1]);n.push({id:xw(a),text:a})}}return n}const iL={h1:({children:e})=>k.jsx("h1",{className:"mb-4 mt-8 text-2xl font-semibold text-neutral-900 first:mt-0 dark:text-neutral-100",children:e}),h2:({children:e})=>k.jsx("h2",{id:xw(yw(e)),className:"mb-3 mt-8 scroll-mt-20 border-b border-neutral-200 pb-2 text-xl font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100",children:e}),h3:({children:e})=>k.jsx("h3",{className:"mb-2 mt-6 text-base font-semibold text-neutral-900 dark:text-neutral-100",children:e}),p:({children:e})=>k.jsx("p",{className:"my-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300",children:e}),a:({href:e,children:n})=>k.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white",children:n}),ul:({children:e})=>k.jsx("ul",{className:"my-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300",children:e}),ol:({children:e})=>k.jsx("ol",{className:"my-3 list-decimal space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300",children:e}),li:({children:e})=>k.jsx("li",{className:"leading-relaxed",children:e}),blockquote:({children:e})=>k.jsx("blockquote",{className:"my-4 border-l-2 border-neutral-300 pl-4 text-sm italic text-neutral-600 dark:border-neutral-700 dark:text-neutral-400",children:e}),hr:()=>k.jsx("hr",{className:"my-8 border-neutral-200 dark:border-neutral-800"}),strong:({children:e})=>k.jsx("strong",{className:"font-semibold text-neutral-900 dark:text-neutral-100",children:e}),table:({children:e})=>k.jsx("div",{className:"my-4 overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800",children:k.jsx("table",{className:"w-full text-left text-sm",children:e})}),thead:({children:e})=>k.jsx("thead",{className:"bg-neutral-100 dark:bg-neutral-900/60",children:e}),th:({children:e})=>k.jsx("th",{className:"border-b border-neutral-200 px-3 py-2 font-medium text-neutral-800 dark:border-neutral-800 dark:text-neutral-200",children:e}),td:({children:e})=>k.jsx("td",{className:"border-b border-neutral-200/60 px-3 py-2 text-neutral-700 dark:border-neutral-800/60 dark:text-neutral-300",children:e}),pre:({children:e})=>k.jsx("pre",{className:"my-4 overflow-x-auto rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-300",children:e}),code:({className:e,children:n})=>/language-/.test(e||"")?k.jsx("code",{className:e,children:n}):k.jsx("code",{className:"rounded bg-neutral-100 px-1.5 py-0.5 text-[0.85em] text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",children:n})};function Oy({slug:e,day:n,name:t,isActive:o}){return k.jsxs(yt,{to:e==="index"?"/lessons":`/lessons/${e}`,className:`rounded-md px-2.5 py-1.5 text-sm transition-colors ${o?"bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100":"text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900/60 dark:hover:text-neutral-200"}`,children:[n&&k.jsx("span",{className:"mr-1.5 text-sm text-[#3fb950]/80 dark:text-[#3fb950]/60",style:{fontFamily:'"Dokdo", cursive'},children:n}),t]})}function Fy({lessonList:e,lessonCategories:n,entries:t=[]}){var _;const{slug:o="index"}=d0(),a=QD(o),u=e.find(j=>j.slug===o),l=t.find(j=>j.slug===o),c=o==="index",f=P.useRef(null),[h,p]=P.useState(""),[m,x]=P.useState(0),[v,b]=P.useState(""),T=rL(a),E=v.trim().toLowerCase(),S=E?n.map(j=>({...j,items:j.items.filter(V=>V.name.toLowerCase().includes(E)||V.slug.includes(E))})).filter(j=>j.items.length>0):n;return P.useEffect(()=>{p("");const j=()=>{const V=document.documentElement.scrollHeight-window.innerHeight;x(V>0?Math.min(100,Math.max(0,window.scrollY/V*100)):0);const B=f.current?Array.from(f.current.querySelectorAll("h2[id]")):[];let M="";for(const X of B)X.getBoundingClientRect().top<=120&&(M=X.id);p(M)};return j(),window.addEventListener("scroll",j,{passive:!0}),()=>window.removeEventListener("scroll",j)},[o,a]),k.jsxs("div",{className:"min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",children:[k.jsx("div",{className:"fixed left-0 top-0 z-50 h-0.5 w-full bg-transparent",children:k.jsx("div",{className:"h-full bg-neutral-900 dark:bg-neutral-100",style:{width:`${m}%`,transition:"width 100ms linear"}})}),k.jsxs("div",{className:"mx-auto flex min-h-screen max-w-7xl gap-8 px-6 py-16",children:[k.jsx("div",{className:"hidden w-56 flex-none border-r border-neutral-200 pr-8 dark:border-neutral-800 lg:block",children:k.jsxs("div",{className:"sticky top-16",children:[k.jsx("nav",{className:"flex flex-col gap-0.5",children:k.jsx(Oy,{slug:"index",day:null,name:"Index",isActive:c})}),k.jsx("p",{className:"mt-3 text-xs leading-relaxed text-neutral-400 dark:text-neutral-600",children:"Grouped by concept, not day number: the numbers still mark build order."}),k.jsx("input",{type:"text",value:v,onChange:j=>b(j.target.value),placeholder:"Search lessons...",className:"mt-4 w-full rounded-md border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600"}),S.length===0&&k.jsxs("p",{className:"mt-4 text-xs text-neutral-400 dark:text-neutral-600",children:['No lessons match "',v,'".']}),S.map(j=>k.jsxs("div",{className:"mt-5",children:[k.jsx("p",{className:"text-xs font-medium uppercase tracking-wide text-neutral-500",children:j.title}),k.jsx("nav",{className:"mt-2 flex flex-col gap-0.5",children:j.items.map(V=>k.jsx(Oy,{slug:V.slug,day:V.day,name:V.name,isActive:V.slug===o},`${j.title}-${V.slug}-${V.name}`))})]},j.title))]})}),k.jsxs("div",{className:"min-w-0 flex-1",children:[k.jsxs("nav",{className:"flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400",children:[k.jsx(yt,{to:"/",className:"transition-colors hover:text-neutral-900 dark:hover:text-white",children:"Component Lab"}),k.jsx("span",{children:"→"}),k.jsx(yt,{to:"/lessons",className:"transition-colors hover:text-neutral-900 dark:hover:text-white",children:"Lessons"}),!c&&k.jsxs(k.Fragment,{children:[k.jsx("span",{children:"→"}),k.jsx("span",{className:"text-neutral-900 dark:text-neutral-100",children:(u==null?void 0:u.name)??"Component"})]})]}),!c&&((_=l==null?void 0:l.prerequisites)==null?void 0:_.length)>0&&k.jsxs("p",{className:"mt-4 text-sm text-neutral-500 dark:text-neutral-400",children:[k.jsx("span",{className:"font-medium text-neutral-700 dark:text-neutral-300",children:"Builds on:"})," ",l.prerequisites.join(", ")]}),!c&&(l==null?void 0:l.component)&&k.jsx("div",{className:"mt-6",children:k.jsx(uv,{preview:k.jsx(l.component,{}),code:l.source,language:"jsx"})}),k.jsx("article",{ref:f,className:"mt-8",children:gw(o)&&a?k.jsx(mN,{components:iL,remarkPlugins:[RD],children:a}):k.jsx("p",{className:"text-sm text-neutral-500",children:"No lesson breakdown yet for this component."})})]}),T.length>0&&k.jsx("div",{className:"hidden w-48 flex-none border-l border-neutral-200 pl-8 dark:border-neutral-800 xl:block",children:k.jsxs("div",{className:"sticky top-16",children:[k.jsxs("a",{href:"https://github.com/Diwyani/componentlab",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-sm font-semibold text-[#3fb950]/80 transition-colors hover:text-[#3fb950]",children:[k.jsx(tf,{className:"h-4 w-4"}),"Star on GitHub"]}),k.jsx("p",{className:"mt-5 text-xs font-medium uppercase tracking-wide text-neutral-500",children:"On this page"}),k.jsx("nav",{className:"mt-2 flex flex-col gap-0.5 border-l border-neutral-200 dark:border-neutral-800",children:T.map(j=>k.jsx("a",{href:`#${j.id}`,className:`-ml-px border-l px-3 py-1 text-sm transition-colors ${h===j.id?"border-neutral-900 font-medium text-neutral-900 dark:border-neutral-100 dark:text-neutral-100":"border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-neutral-300"}`,children:j.text},j.id))})]})})]})]})}const vw="component-lab:theme";function ww(){try{const e=localStorage.getItem(vw);if(e==="light"||e==="dark")return e}catch{}return"dark"}function bw(e){document.documentElement.classList.toggle("dark",e==="dark");try{localStorage.setItem(vw,e)}catch{}}function oL(){const[e,n]=P.useState(ww);function t(){const o=e==="dark"?"light":"dark";n(o),bw(o)}return k.jsx("button",{onClick:t,"aria-label":e==="dark"?"Switch to light mode":"Switch to dark mode",className:"relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",children:k.jsx(at,{mode:"wait",initial:!1,children:k.jsx(Ee.span,{className:"absolute inset-0 flex items-center justify-center",initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.18,ease:"easeInOut"},children:e==="dark"?k.jsx(dR,{className:"h-3.5 w-3.5"}):k.jsx(hR,{className:"h-3.5 w-3.5"})},e)})})}const Dc=3200,zy=[{Component:Yx,duration:1600,label:"useState",position:"bottom"},{Component:av,duration:Dc,label:"Reorder",position:"top-right"},{Component:ov,duration:Dc,label:"animate",position:"bottom-curvy"},{Component:sv,duration:Dc,label:"ease",position:"top"}],Cs={fontFamily:'"Dokdo", cursive'};function Es({className:e="",style:n,curvy:t=!1}){const o=t?"M20 2 C 36 10, 4 20, 30 30 C 38 36, 4 40, 19 50":"M20 3 C 28 15, 12 28, 23 40 C 26 44, 21 47, 19 50";return k.jsxs("svg",{viewBox:"0 0 40 60",className:e,style:n,fill:"none",children:[k.jsx("path",{d:o,stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),k.jsx("path",{d:"M11 42 C 14 45, 17 48, 19 50 C 22 47, 25 44, 28 41",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function aL({text:e,position:n}){return n==="top-right"?k.jsxs("div",{className:"absolute left-1/2 top-1/2 flex flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70",style:{transform:"translate(calc(-50% + 4rem), calc(-50% - 8rem))"},children:[k.jsx("span",{className:"text-base",style:{...Cs,transform:"rotate(-6deg)"},children:e}),k.jsx(Es,{className:"h-9 w-6",style:{transform:"rotate(-135deg)"}})]}):n==="top"?k.jsxs("div",{className:"absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-32 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70",children:[k.jsx("span",{className:"text-base",style:{...Cs,transform:"rotate(-6deg)"},children:e}),k.jsx(Es,{className:"h-9 w-6 rotate-180"})]}):n==="bottom-curvy"?k.jsxs("div",{className:"absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-9 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70",children:[k.jsx(Es,{className:"h-9 w-6",curvy:!0}),k.jsx("span",{className:"text-base",style:Cs,children:e})]}):k.jsxs("div",{className:"absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-9 flex-col items-center text-[#3fb950]/80 dark:text-[#3fb950]/70",children:[k.jsx(Es,{className:"h-9 w-6"}),k.jsx("span",{className:"text-base",style:Cs,children:e})]})}function sL(){const[e,n]=P.useState(0),t=zy[e%zy.length];P.useEffect(()=>{const a=setTimeout(()=>n(u=>u+1),t.duration);return()=>clearTimeout(a)},[e,t.duration]);const o=t.Component;return k.jsxs("div",{className:"relative h-96 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40",children:[k.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:k.jsx(Ee.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.35,ease:"easeOut"},children:k.jsx(o,{autoPlay:!0})},e)}),k.jsx(aL,{text:t.label,position:t.position})]})}var lL=150,Lc=2,By=6,Vy=3,uL=7,cL=5,dL=42,fL=30,hL=28,pL=16,mL="#262626",gL="#e5e5e5",yL=(()=>{const e=[];for(let n=1;n<=5;n++)for(let t=1;t<=5;t++)e.push(n*7+t);return e})();function xL(e){return yL.map(n=>e[n])}function vL(e,n=!1){const t=n?e.map(xL):e,o=t.length,a=n?cL:uL,u=n?fL:dL,l=t[0].length,c=`${(o*lL/1e3).toFixed(3)}s`,f=Array.from({length:l},(x,v)=>t.map(b=>b[v])),h=new Map;for(const x of f){const v=x.map(b=>b?"1":"0").join("");x.some(b=>b)&&!x.every(b=>b)&&!h.has(v)&&h.set(v,x)}const p=Array.from(h.entries()).map(([x,v])=>({key:x,stops:wL(v,o)})),m=[];for(let x=0;x<l;x++){const v=x%a*By+Vy,b=Math.floor(x/a)*By+Vy,T=f[x],E=T.map(j=>j?"1":"0").join(""),S=T.every(j=>!j),_=T.every(j=>j);S?m.push({cx:v,cy:b,kind:"off",key:"",initialOn:!1}):_?m.push({cx:v,cy:b,kind:"on-static",key:"",initialOn:!0}):m.push({cx:v,cy:b,kind:"on-anim",key:E,initialOn:T[0]})}return{cols:a,viewBox:u,n:o,duration:c,dots:m,keyframes:p}}function wL(e,n){const t=[`0% { opacity: ${e[0]?1:0}; }`];for(let o=1;o<n;o++){const a=o*100/n;e[o]!==e[o-1]&&(t.push(`${(a-.01).toFixed(2)}% { opacity: ${e[o-1]?1:0}; }`),t.push(`${a.toFixed(2)}% { opacity: ${e[o]?1:0}; }`))}return t.push(`100% { opacity: ${e[n-1]?1:0}; }`),t}var bL={contain:"xMidYMid meet",cover:"xMidYMid slice",fill:"none"};function kL({grids:e,onColor:n,offColor:t,theme:o,variant:a="7x7",size:u,playing:l=!0,speed:c=1,reverse:f=!1,fit:h="contain",title:p="Loading",className:m,style:x}){const v=a==="5x5",b=vL(e,v),T=u??(v?pL:hL),E=n??(o==null?void 0:o.on)??mL,S=t??(o==null?void 0:o.off)??gL,_=c>0?c:1,j=`${(parseFloat(b.duration)/_).toFixed(3)}s`,V="fk"+P.useId().replace(/[^a-zA-Z0-9]/g,""),B=U=>`${V}_${U}`,M={animationPlayState:l?"running":"paused",...f?{animationDirection:"reverse"}:null},X=`[data-fk="${V}"] circle{fill:var(--off)}[data-fk="${V}"] circle.on{fill:var(--on)}@media (prefers-reduced-motion: reduce){[data-fk="${V}"] circle{animation:none!important}}`+b.keyframes.map(U=>`@keyframes ${B(U.key)}{${U.stops.join(" ")}}`).join("");return k.jsxs("svg",{"data-fk":V,width:T,height:T,viewBox:`0 0 ${b.viewBox} ${b.viewBox}`,preserveAspectRatio:bL[h],xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":p,className:m,style:{"--on":E,"--off":S,"--dur":j,...x},children:[k.jsx("title",{children:p}),k.jsx("style",{children:X}),b.dots.map((U,re)=>k.jsx("circle",{cx:U.cx,cy:U.cy,r:Lc},`b${re}`)),b.dots.map((U,re)=>U.kind==="off"?null:U.kind==="on-static"?k.jsx("circle",{className:"on",cx:U.cx,cy:U.cy,r:Lc},`o${re}`):k.jsx("circle",{className:"on",cx:U.cx,cy:U.cy,r:Lc,opacity:U.initialOn?1:0,style:{animation:`${B(U.key)} var(--dur) linear infinite`,...M}},`o${re}`))]})}const SL=[[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]],TL=500,CL=2e3;function EL({children:e}){const[n,t]=P.useState(!1);return P.useEffect(()=>{var c;const o=Date.now();let a=!1;function u(){if(a)return;a=!0;const f=Math.max(0,TL-(Date.now()-o));setTimeout(()=>t(!0),f)}const l=setTimeout(u,CL);return(c=document.fonts)!=null&&c.ready?document.fonts.ready.then(u):u(),()=>clearTimeout(l)},[]),n?e:k.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950",children:k.jsx(kL,{grids:SL,onColor:"#91B51D",offColor:"#212121"})})}const Wy=Object.assign({"./components/001-toggle-switch/ToggleSwitch.jsx":qP,"./components/002-tab-switcher/TabSwitcher.jsx":KP,"./components/003-accordion-faq/AccordionFaq.jsx":XP,"./components/004-tooltip-follow-cursor/TooltipFollowCursor.jsx":ZP,"./components/005-like-heart-button/LikeHeartButton.jsx":mR,"./components/006-skeleton-loader/SkeletonLoader.jsx":yR,"./components/007-toast-notification/ToastNotification.jsx":vR,"./components/008-drawer-modal/DrawerModal.jsx":bR,"./components/009-dropdown-menu/DropdownMenu.jsx":ER,"./components/010-drag-reorder-list/DragReorderList.jsx":RR,"./components/011-image-gallery-layout/ImageGalleryLayout.jsx":jR,"./components/012-progress-stepper/ProgressStepper.jsx":IR,"./components/013-segmented-control/SegmentedControl.jsx":NR,"./components/014-card-expand-detail/CardExpandDetail.jsx":DR,"./components/015-swipeable-card-stack/SwipeableCardStack.jsx":OR,"./components/016-pull-to-refresh/PullToRefresh.jsx":BR,"./components/017-draggable-bottom-sheet/DraggableBottomSheet.jsx":WR,"./components/018-password-strength-meter/PasswordStrengthMeter.jsx":HR,"./components/019-copy-to-clipboard/CopyToClipboard.jsx":GR,"./components/020-rating-stars/RatingStars.jsx":YR}),PL=Object.assign({"./components/001-toggle-switch/ToggleSwitch.jsx":JR,"./components/002-tab-switcher/TabSwitcher.jsx":XR,"./components/003-accordion-faq/AccordionFaq.jsx":QR,"./components/004-tooltip-follow-cursor/TooltipFollowCursor.jsx":ZR,"./components/005-like-heart-button/LikeHeartButton.jsx":eA,"./components/006-skeleton-loader/SkeletonLoader.jsx":nA,"./components/007-toast-notification/ToastNotification.jsx":tA,"./components/008-drawer-modal/DrawerModal.jsx":rA,"./components/009-dropdown-menu/DropdownMenu.jsx":iA,"./components/010-drag-reorder-list/DragReorderList.jsx":oA,"./components/011-image-gallery-layout/ImageGalleryLayout.jsx":aA,"./components/012-progress-stepper/ProgressStepper.jsx":sA,"./components/013-segmented-control/SegmentedControl.jsx":lA,"./components/014-card-expand-detail/CardExpandDetail.jsx":uA,"./components/015-swipeable-card-stack/SwipeableCardStack.jsx":cA,"./components/016-pull-to-refresh/PullToRefresh.jsx":dA,"./components/017-draggable-bottom-sheet/DraggableBottomSheet.jsx":fA,"./components/018-password-strength-meter/PasswordStrengthMeter.jsx":hA,"./components/019-copy-to-clipboard/CopyToClipboard.jsx":pA,"./components/020-rating-stars/RatingStars.jsx":mA}),Uy=Object.assign({"./components/001-toggle-switch/meta.js":yA,"./components/002-tab-switcher/meta.js":vA,"./components/003-accordion-faq/meta.js":bA,"./components/004-tooltip-follow-cursor/meta.js":SA,"./components/005-like-heart-button/meta.js":CA,"./components/006-skeleton-loader/meta.js":PA,"./components/007-toast-notification/meta.js":AA,"./components/008-drawer-modal/meta.js":IA,"./components/009-dropdown-menu/meta.js":NA,"./components/010-drag-reorder-list/meta.js":DA,"./components/011-image-gallery-layout/meta.js":OA,"./components/012-progress-stepper/meta.js":zA,"./components/013-segmented-control/meta.js":VA,"./components/014-card-expand-detail/meta.js":UA,"./components/015-swipeable-card-stack/meta.js":HA,"./components/016-pull-to-refresh/meta.js":GA,"./components/017-draggable-bottom-sheet/meta.js":YA,"./components/018-password-strength-meter/meta.js":XA,"./components/019-copy-to-clipboard/meta.js":ZA,"./components/020-rating-stars/meta.js":nj}),Dt=Object.keys(Uy).map(e=>{const n=e.split("/")[2],t=Object.keys(Wy).find(o=>o.split("/")[2]===n);return{slug:n,...Uy[e].meta,component:t?Wy[t].default:null,source:t?PL[t]:""}}).sort((e,n)=>e.day.localeCompare(n.day));function kw({children:e}){return k.jsx("span",{className:"rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400",children:e})}const RL=[{label:"LinkedIn",href:"https://www.linkedin.com/in/diwyani-vajpayee-9b2270213/",external:!0,icon:k.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"h-3.5 w-3.5",children:k.jsx("path",{d:"M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z"})})},{label:"Twitter/X",href:"https://x.com/DiwyaniVajpayee",external:!0,icon:k.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:"h-3.5 w-3.5",children:k.jsx("path",{d:"M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.6 22H1.5l8.1-9.3L1 2h7.1l4.9 6.1zm-1.2 18h1.9L6.4 4H4.4z"})})},{label:"Email",href:"mailto:diwyani.vajpayee@gmail.com",external:!1,icon:k.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"h-3.5 w-3.5",children:[k.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),k.jsx("path",{d:"m3 7 9 6 9-6"})]})}];function AL(){return k.jsx("div",{className:"flex items-center gap-3",children:RL.map(({label:e,href:n,external:t,icon:o})=>k.jsx("a",{href:n,"aria-label":e,target:t?"_blank":void 0,rel:t?"noopener noreferrer":void 0,className:"text-neutral-500 transition-all hover:text-neutral-900 hover:brightness-75 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:brightness-150",children:o},e))})}const jL=[{label:"All",tag:null},{label:"Framer Motion",tag:"framer motion"},{label:"GSAP",tag:"gsap"},{label:"Three.js",tag:"three.js"}];function IL(){return k.jsxs("div",{className:"fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs text-neutral-600 backdrop-blur transition-transform duration-200 hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-400",children:[k.jsxs("span",{children:[Dt.length," Component",Dt.length===1?"":"s"]}),k.jsx("span",{className:"h-3.5 w-px bg-neutral-300 dark:bg-neutral-700"}),k.jsx(AL,{}),k.jsx("span",{className:"h-3.5 w-px bg-neutral-300 dark:bg-neutral-700"}),k.jsx(oL,{})]})}function _L(){const[e,n]=P.useState(jL[0].tag),t=e===null?Dt:Dt.filter(o=>o.tags.some(a=>a.toLowerCase()===e));return k.jsx("div",{className:"min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",children:k.jsxs("div",{className:"mx-auto max-w-5xl px-6 py-16",children:[k.jsxs("div",{className:"grid grid-cols-1 items-start gap-10 lg:grid-cols-2",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs text-neutral-500 dark:text-neutral-400",style:{fontFamily:'"Dokdo", cursive'},children:"Learn on the go"}),k.jsx("h1",{className:"mt-1 text-2xl font-semibold tracking-tight",children:"Component Lab"}),k.jsx("p",{className:"mt-4 max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",children:"There's a real gap for designers who want to learn to code: most resources assume you're starting from zero or already deep in engineering, nothing in between. The best way to learn anything is to get your hands dirty: build things, get stuck, sob a little, figure it out."}),k.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-5",style:{fontFamily:'"Dokdo", cursive'},children:[k.jsxs("a",{href:"https://github.com/Diwyani/componentlab",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-base font-semibold text-[#3fb950]/80 transition-colors hover:text-[#3fb950]",children:[k.jsx(tf,{className:"h-4 w-4"}),"Star on GitHub"]}),k.jsx(yt,{to:"/lessons",className:"text-base text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",children:"Learn lesson"})]})]}),k.jsx("div",{children:k.jsx(sL,{})})]}),k.jsx("div",{id:"components",className:"mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2",children:t.map(({slug:o,day:a,name:u,description:l,tags:c},f)=>k.jsxs(P.Fragment,{children:[f>0&&f%7===0&&k.jsx("div",{className:"col-span-full my-2 border-t border-neutral-200 dark:border-neutral-800"}),k.jsxs(yt,{to:`/components/${o}`,className:"rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-left transition-colors hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/40 dark:hover:border-neutral-700 dark:hover:bg-neutral-900",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("h2",{className:"text-sm font-medium text-neutral-900 dark:text-neutral-100",children:u}),k.jsx("span",{className:"text-sm text-[#3fb950]/80 dark:text-[#3fb950]/60",style:{fontFamily:'"Dokdo", cursive'},children:a})]}),k.jsx("p",{className:"mt-2 text-sm text-neutral-600 dark:text-neutral-400",children:l}),k.jsx("div",{className:"mt-4 flex flex-wrap gap-1.5",children:c.map(h=>k.jsx(kw,{children:h},h))})]})]},o))}),t.length===0&&k.jsx("p",{className:"mt-10 text-sm text-neutral-500",children:"No components match this filter yet."})]})})}function $y(e){return`component-lab:notes:${e}`}function NL({slug:e}){const[n,t]=P.useState(""),[o,a]=P.useState(null);P.useEffect(()=>{try{t(localStorage.getItem($y(e))??"")}catch{t("")}a(null)},[e]);function u(l){const c=l.target.value;t(c);try{localStorage.setItem($y(e),c),a(new Date)}catch{}}return k.jsxs("div",{className:"mt-8",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("h2",{className:"text-xs font-medium uppercase tracking-wide text-neutral-500",children:"Quick Notes"}),o&&k.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-600",children:"Saved"})]}),k.jsx("textarea",{value:n,onChange:u,placeholder:"Scratch thoughts, todos, what you'll do next...",rows:8,className:"mt-2 w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900/40 dark:text-neutral-200 dark:placeholder:text-neutral-600 dark:focus:border-neutral-700"}),k.jsx("p",{className:"mt-1.5 text-xs text-neutral-500 dark:text-neutral-600",children:"Saved locally in this browser only — separate from notes.md."})]})}function ML({entry:e}){const{slug:n,name:t,description:o,tags:a,component:u,source:l}=e;return k.jsx("div",{className:"min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",children:k.jsxs("div",{className:"mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row",children:[k.jsxs("div",{className:"lg:w-72 lg:flex-none",children:[k.jsx(yt,{to:"/",className:"text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",children:"← Back"}),k.jsx("h1",{className:"mt-6 text-lg font-semibold tracking-tight",children:t}),k.jsx("p",{className:"mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400",children:o}),k.jsx("div",{className:"mt-6 flex flex-wrap gap-1.5",children:a.map(c=>k.jsx(kw,{children:c},c))}),gw(n)&&k.jsx(yt,{to:`/lessons/${n}`,className:"mt-4 inline-flex items-center gap-1 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-neutral-950 dark:text-neutral-300 dark:decoration-neutral-700 dark:hover:text-white",children:"View lesson breakdown →"}),k.jsx(NL,{slug:n})]}),k.jsx("div",{className:"min-w-0 flex-1",children:u?k.jsx(uv,{preview:k.jsx(u,{}),code:l,language:"jsx"}):k.jsx("div",{className:"flex min-h-[200px] items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-10 dark:border-neutral-800 dark:bg-neutral-900/30",children:k.jsx("p",{className:"text-sm text-neutral-500",children:"Component not found."})})})]})})}function DL(){const{slug:e}=d0(),n=Dt.find(t=>t.slug===e);return n?k.jsx(ML,{entry:n}):k.jsx("div",{className:"flex min-h-screen items-center justify-center bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100",children:k.jsxs("div",{className:"text-center",children:[k.jsx("p",{className:"text-sm text-neutral-500",children:"No component at this link."}),k.jsx(yt,{to:"/",className:"mt-3 inline-block text-sm text-neutral-700 underline hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white",children:"← Back to Component Lab"})]})})}const Hy=ZD(Dt),qy=nL(Dt);function LL(){return k.jsxs(EL,{children:[k.jsxs(R1,{children:[k.jsx(Ao,{path:"/",element:k.jsx(_L,{})}),k.jsx(Ao,{path:"/components/:slug",element:k.jsx(DL,{})}),k.jsx(Ao,{path:"/lessons",element:k.jsx(Fy,{lessonList:Hy,lessonCategories:qy,entries:Dt})}),k.jsx(Ao,{path:"/lessons/:slug",element:k.jsx(Fy,{lessonList:Hy,lessonCategories:qy,entries:Dt})})]}),k.jsx(IL,{})]})}bw(ww());Pk.createRoot(document.getElementById("root")).render(k.jsx(wk.StrictMode,{children:k.jsx(Q1,{children:k.jsx(LL,{})})}));
