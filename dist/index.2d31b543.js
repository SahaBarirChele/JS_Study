var e,t,r,n,i,o,a,s,c,u,l,d,p,h,f,m,v,g,y,b=globalThis;function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
k=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof b&&b)||E("object"==typeof k&&k)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||Function("return this")();var S={},O={};// Detect IE8's incomplete defineProperty implementation
S=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var P={},j={};j=!O(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var F=Function.prototype.call;P=j?F.bind(F):function(){return F.apply(F,arguments)};var L={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;o=x&&!L.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:L;var $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var M={},T={},q={},I=Function.prototype,H=I.call,R=j&&I.bind.bind(H,H),N={},C=(q=j?R:function(e){return function(){return H.apply(e,arguments)}})({}.toString),D=q("".slice);N=function(e){return D(C(e),8,-1)};var U=Object,A=q("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
T=O(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!U("z").propertyIsEnumerable(0)})?function(e){return"String"===N(e)?A(e,""):U(e)}:U;var W={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(e){return null==e};var G=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
W=function(e){if(z(e))throw new G("Can't call method on "+e);return e},M=function(e){return T(W(e))};var B={},Q={},J={},Y={},V="object"==typeof document&&document.all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
Y=void 0===V&&void 0!==V?function(e){return"function"==typeof e||e===V}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:Y(e)};var K={},X={};X=function(e,t){var r;return arguments.length<2?(r=k[e],Y(r)?r:void 0):k[e]&&k[e][t]};var Z={};Z=q({}.isPrototypeOf);var ee={},et={},er={},en={};en="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,eo=k.Deno,ea=ei&&ei.versions||eo&&eo.version,es=ea&&ea.v8;es&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=es.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&en&&(!(a=en.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=en.match(/Chrome\/(\d+)/))&&(s=+a[1]),er=s;var ec=k.String;ee=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(et=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ec(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&er&&er<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eu=Object;K=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Y(t)&&Z(t.prototype,eu(e))};var el={},ed={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ef=TypeError;// `Assert: IsCallable(argument) is true`
ed=function(e){if(Y(e))return e;throw new ef(ep(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
el=function(e,t){var r=e[t];return z(r)?void 0:ed(r)};var em={},ev=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&Y(r=e.toString)&&!J(n=P(r,e))||Y(r=e.valueOf)&&!J(n=P(r,e))||"string"!==t&&Y(r=e.toString)&&!J(n=P(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},ey={};ey=!1;var eb={},e_={},ew=Object.defineProperty;e_=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(r){k[e]=t}return t};var ek="__core-js_shared__";eb=k[ek]||e_(ek,{}),(eg=function(e,t){return eb[e]||(eb[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:ey?"pure":"global",copyright:"\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"});var eE={},eS={},eO=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eS=function(e){return eO(W(e))};var eP=q({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eE=Object.hasOwn||function(e,t){return eP(eS(e),t)};var ej={},eF=0,eL=Math.random(),ex=q(1..toString);ej=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++eF+eL,36)};var e$=k.Symbol,eM=eg("wks"),eT=ee?e$.for||e$:e$&&e$.withoutSetter||ej,eq=TypeError,eI=(eE(eM,e="toPrimitive")||(eM[e]=et&&eE(e$,e)?e$[e]:eT("Symbol."+e)),eM[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Q=function(e,t){if(!J(e)||K(e))return e;var r,n=el(e,eI);if(n){if(void 0===t&&(t="default"),r=P(n,e,t),!J(r)||K(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
B=function(e){var t=Q(e,"string");return K(t)?t:t+""};var eH={},eR={},eN=k.document,eC=J(eN)&&J(eN.createElement);eR=function(e){return eC?eN.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eH=!S&&!O(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eR("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eD=Object.getOwnPropertyDescriptor;i=S?eD:function(e,t){if(e=M(e),t=B(t),eH)try{return eD(e,t)}catch(e){}if(eE(e,t))return $(!P(o,e,t),e[t])};var eU={},eA={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eA=S&&O(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},ez=String,eG=TypeError;// `Assert: Type(argument) is Object`
eW=function(e){if(J(e))return e;throw new eG(ez(e)+" is not an object")};var eB=TypeError,eQ=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eY="enumerable",eV="configurable",eK="writable";c=S?eA?function(e,t,r){if(eW(e),t=B(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eJ(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eY in r?r[eY]:n[eY],writable:!1})}return eQ(e,t,r)}:eQ:function(e,t,r){if(eW(e),t=B(t),eW(r),eH)try{return eQ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eB("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eU=S?function(e,t,r){return c(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=S&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!S||S&&e1(e0,"name").configurable),e3={},e4=q(Function.toString);Y(eb.inspectSource)||(eb.inspectSource=function(e){return e4(e)}),e3=eb.inspectSource;var e7={},e9={},e8=k.WeakMap;e9=Y(e8)&&/native code/.test(String(e8));var e5={},e6=eg("keys");e5=function(e){return e6[e]||(e6[e]=ej(e))};var te={};te={};var tt="Object already initialized",tr=k.TypeError,tn=k.WeakMap;if(e9||eb.state){var ti=eb.state||(eb.state=new tn);/* eslint-disable no-self-assign -- prototype methods protection */ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},l=function(e){return ti.get(e)||{}},d=function(e){return ti.has(e)}}else{var to=e5("state");te[to]=!0,u=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,eU(e,to,t),t},l=function(e){return eE(e,to)?e[to]:{}},d=function(e){return eE(e,to)}}var ta=(e7={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e7.get,tc=String,tu=Object.defineProperty,tl=q("".slice),tp=q("".replace),th=q([].join),tf=S&&!O(function(){return 8!==tu(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+tp(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(S?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?S&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=th(tm,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tv(function(){return Y(this)&&ts(this).source||e3(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(Y(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tb={},t_={},tw={},tk={},tE=Math.ceil,tS=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tk=Math.trunc||function(e){var t=+e;return(t>0?tS:tE)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tw=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tk(t)};var tO=Math.max,tP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
t_=function(e,t){var r=tw(e);return r<0?tO(r+t,0):tP(r,t)};var tj={},tF={},tL=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tF=function(e){var t=tw(e);return t>0?tL(t,9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tj=function(e){return tF(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tx=function(e){return function(t,r,n){var i,o=M(t),a=tj(o),s=t_(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},t$={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tx(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tx(!1)}.indexOf,tM=q([].push);tb=function(e,t){var r,n=M(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tM(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eE(n,r=t[i++])&&(~t$(o,r)||tM(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tb(e,tT)},h=Object.getOwnPropertySymbols;var tq=q([].concat);// all object keys, includes non-enumerable and symbols
ty=X("Reflect","ownKeys")||function(e){var t=p(eW(e));return h?tq(t,h(e)):t},tg=function(e,t,r){for(var n=ty(t),o=0;o<n.length;o++){var a=n[o];eE(e,a)||r&&eE(r,a)||c(e,a,i(t,a))}};var tI={},tH=/#|\.prototype\./,tR=function(e,t){var r=tC[tN(e)];return r===tU||r!==tD&&(Y(t)?O(t):!!t)},tN=tR.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tC=tR.data={},tD=tR.NATIVE="N",tU=tR.POLYFILL="P";tI=tR,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?k:l?k[c]||e_(c,{}):k[c]&&k[c].prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tI(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&eU(a,"sham",!0),eX(r,n,a,e)}};var tA={},tW={},tz=Function.prototype,tG=tz.apply,tB=tz.call;// eslint-disable-next-line es/no-reflect -- safe
tW="object"==typeof Reflect&&Reflect.apply||(j?tB.bind(tG):function(){return tB.apply(tG,arguments)});var tQ={},tJ={},tY=(tJ=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===N(e))return q(e)})(tJ.bind);// optional / simple context binding
tQ=function(e,t){return ed(e),void 0===t?e:j?tY(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=X("document","documentElement");var tK={};tK=q([].slice);var tX={},tZ=TypeError;tX=function(e,t){if(e<t)throw new tZ("Not enough arguments");return e};var t0={};// eslint-disable-next-line redos/no-vulnerable -- safe
t0=/(?:ipad|iphone|ipod).*applewebkit/i.test(en);var t1={};t1="process"===N(k.process);var t2=k.setImmediate,t3=k.clearImmediate,t4=k.process,t7=k.Dispatch,t9=k.Function,t8=k.MessageChannel,t5=k.String,t6=0,re={},rt="onreadystatechange";O(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
f=k.location});var rr=function(e){if(eE(re,e)){var t=re[e];delete re[e],t()}},rn=function(e){return function(){rr(e)}},ri=function(e){rr(e.data)},ro=function(e){// old engines have not location.origin
k.postMessage(t5(e),f.protocol+"//"+f.host)};t2&&t3||(t2=function(e){tX(arguments.length,1);var t=Y(e)?e:t9(e),r=tK(arguments,1);return re[++t6]=function(){tW(t,void 0,r)},m(t6),t6},t3=function(e){delete re[e]},t1?m=function(e){t4.nextTick(rn(e))}:t7&&t7.now?m=function(e){t7.now(rn(e))}:t8&&!t0?(g=(v=new t8).port2,v.port1.onmessage=ri,m=tQ(g.postMessage,g)):k.addEventListener&&Y(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!O(ro)?(m=ro,k.addEventListener("message",ri,!1)):m=rt in eR("script")?function(e){tV.appendChild(eR("script"))[rt]=function(){tV.removeChild(this),rr(e)}}:function(e){setTimeout(rn(e),0)});var ra=(tA={set:t2,clear:t3}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ra},{clearImmediate:ra});var rs=tA.set,rc={},ru={};/* global Bun -- Bun case */ru="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rl=k.Function,rd=/MSIE .\./.test(en)||ru&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rc=function(e,t){var r=t?2:1;return rd?function(n,i/* , ...arguments */){var o=tX(arguments.length,1)>r,a=Y(n)?n:rl(n),s=o?tK(arguments,r):[],c=o?function(){tW(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var rp=k.setImmediate?rc(rs,!1):rs;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==rp},{setImmediate:rp});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof v?r:v).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new j(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===r)throw i;// Be forgiving, per GeneratorResume behavior specified since ES2015:
// ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
// Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next method, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),m);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,m;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,m):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,m)}(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=f,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?f:"suspendedYield",u.arg===m)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=f,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",m={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function v(){}function g(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(F([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=v.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function F(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=F,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;P(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),m}},e}({});try{regeneratorRuntime=rh}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rh:Function("r","regeneratorRuntime = r")(rh)}const rf="https://forkify-api.herokuapp.com/api/v2/recipes/",rm="7ffd23c9-2ffc-4f77-8c58-7846fd79633a",rv=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rg=async function(e){try{let t=await Promise.race([fetch(e),rv(10)]),r=await t.json();//console.log(data);
if("success"!==r.status)throw Error(`${r.message}`);return r}catch(e){throw e}},ry=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rv(10)]),i=await n.json();//console.log(data);
if("success"!==i.status)throw Error(`${i.message}`);return i}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],resultCount:"",resultPerPage:10,currentPage:1},bookmarks:[]},r_=function(e){//console.log(data);
rb.recipe={id:e.id,publisher:e.publisher,cookingTime:e.cooking_time,imageUrl:e.image_url,ingredients:e.ingredients,servings:e.servings,sourceUrl:e.source_url,title:e.title,...e.key&&{key:e.key}};//console.log(state.recipe);
},rw=async function(e){try{let t=await rg(`${rf}${e}?key=${rm}`),{recipe:r}=t.data;r_(r),rb.bookmarks.some(t=>t.id===e)&&(rb.recipe.bookmarked=!0)}catch(e){throw console.error(e),e}},rk=function(e){rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},rE=async function(e){rb.search.query=e,rb.search.currentPage=1;try{//1. Get search data from server using query parameter
let t=await rg(`${rf}?search=${e}&key=${rm}`);//console.log(data);
if(!t.results)throw Error(`No Records Found for ${e}`);//2. Populate state variable with search results.
rb.search.results=t.data.recipes.map(e=>({id:e.id,publisher:e.publisher,imageUrl:e.image_url,title:e.title,key:e.key}))}catch(e){throw console.error(e),e}},rS=function(e=rb.search.currentPage){//pagination code.
rb.search.currentPage=e,rb.search.resultCount=rb.search.results.length;let t=(e-1)*rb.search.resultPerPage,r=e*rb.search.resultPerPage;return rb.search.results.slice(t,r)},rO=function(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rP=function(e){// add into bookmark array
rb.bookmarks.push(e),// mark current recipe as bookmarked
rb.recipe.bookmarked=!0,rO()},rj=function(e){let t=rb.bookmarks.findIndex(t=>t.id===e);//delete from bbokmark array
rb.bookmarks.splice(t,1),rb.recipe.bookmarked=!1,rO()},rF=async function(e){//console.log(uploadRecipe);
try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!=e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong Ingredient format.");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={publisher:e.publisher,cooking_time:e.cookingTime,image_url:e.image,ingredients:t,servings:e.servings,source_url:e.sourceUrl,title:e.title},n=await ry(`${rf}?key=${rm}`,r);r_(n.data.recipe),rP(rb.recipe);//console.log(state.recipe);
}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))}();var rL={};rL=new URL("icons.c14567a0.svg",import.meta.url).toString();class rx{//_parentElement = ''; //if the property is defined in Child class, then also fine.
_errorMessage="Receipe not found. Please try again.";_message="";_data;/**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered.
   * @param {Boolean} [render=true] If false, create markup string insted of render into DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @extends {} This is the Parent View class
   */render(e,t=!0){//console.log(data);
//if(data.isArray())
this._data=e;let r=this._generateMarkup();//console.log(markup);
if(!t)return r;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",r)}//these are JS Documentation. Refer Jsdoc.app
/**
   * JS Documentation
   * @param {Object | Object[]} data Updated data will be rendered into DOM
   * @returns {undefined}
   */update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}renderSpinner(){let e=`
    <div class="spinner">
    <svg>
      <use href="${/*@__PURE__*/_(rL)}#icon-loader"></use>
    </svg>
    </div>`;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clearHTML(){this._parentElement.innerHTML=""}_generateMarkup(){}//when no parameter is passed, default 'this._errorMessage' will be the argument.
renderError(e=this._errorMessage){let t=`
              <div class="error">
                <div>
                  <svg>
                    <use href="${/*@__PURE__*/_(rL)}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${e}</p>
              </div>
        `;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",t)}//when no parameter is passed, default 'this._message' will be the argument.
renderSuccess(e=this._message){let t=`
              <div class="error">
                <div>
                  <svg>
                    <use href="${/*@__PURE__*/_(rL)}#icon-smile"></use>
                  </svg>
                </div>
                <p>${e}</p>
              </div>
        `;this._clearHTML(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;//console.log(Fraction);
class r$ extends rx{_parentElement=document.querySelector(".recipe");addHandleRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e));//console.log('Test1');
}addUpdateRecipeHandle(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");r&&(0>=+r.dataset.updateTo||e(+r.dataset.updateTo))});//console.log('Test1');
}addDeleteBookmarkHandle(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
    <img src=${this._data.imageUrl} alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/_(rL)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/_(rL)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>
          <svg>
            <use href="${/*@__PURE__*/_(rL)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>
          <svg>
            <use href="${/*@__PURE__*/_(rL)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated">
      <svg>
      ${this._data.key?`<use href="${/*@__PURE__*/_(rL)}#icon-user"></use>`:""}
      </svg>
    </div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${/*@__PURE__*/_(rL)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this.#e).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href=${this._data.sourceUrl}
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rL)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`}#e(e){return`<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${/*@__PURE__*/_(rL)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>${e.description}
        </div>
      </li>`}}var rM=new r$;class rT{_parentElement=document.querySelector(".search");#t="";#r(){this.#t=this._parentElement.querySelector(".search__field").value,this.#n();//return query;
}#n(){this._parentElement.querySelector(".search__field").value=""}addHandleRender(e){let t=this;//assigning 'this' into 'self'
this._parentElement.addEventListener("submit",function(r){r.preventDefault(),t.#r(),e(t.#t)})}}var rq=new rT,rI=new class extends rx{_generateMarkup(){//console.log(this._data);
//console.log(item);
let e=window.location.hash.slice(1);return`
    <li class="preview">
     <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.imageUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated">
          <svg>
             ${this._data.key?`<use href="${/*@__PURE__*/_(rL)}#icon-user"></use>`:""}
          </svg>
        </div>
      </div>
     </a>
    </li>`}};class rH extends rx{_parentElement=document.querySelector(".results");_generateMarkup(){//console.log(this._data);
return`${this._data.map(e=>rI.render(e,!1)).join()}`}}var rR=new rH;class rN extends rx{_parentElement=document.querySelector(".pagination");addHandleRender(e){this._parentElement.addEventListener("click",function(t){//console.log(e.target);
//console.log(e.target.closest('.btn--inline').dataset.page);
t.target.closest(".btn--inline")&&e(+t.target.closest(".btn--inline").dataset.page);//console.log(this._parentElement.closest('.btn--inline'));
})}_generateMarkup(){//console.log(this._data);
let e=Math.ceil(this._data.resultCount/this._data.resultPerPage);return(//1. First page and other pages available
1===this._data.currentPage&&e>this._data.currentPage?this.#i("next"):this._data.currentPage>1&&e>this._data.currentPage?[this.#i("next"),this.#i("prev")].join(""):this._data.currentPage===e&&e>1?this.#i("prev"):"")}/*   #nextPage() {
    return `        
        <button data-page=${
          this._data.currentPage + 1
        } class="btn--inline pagination__btn--next">
          <span>Page ${this._data.currentPage + 1}</span>
          <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
       `;
  }
  #prevPage() {
    return `
        <button data-page=${
          this._data.currentPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.currentPage - 1}</span>
        </button>`;
  } */#i(e){return`        
        <button data-page=${"next"===e?this._data.currentPage+1:this._data.currentPage-1} class="btn--inline pagination__btn--${e}">
          <span>Page ${"next"===e?this._data.currentPage+1:this._data.currentPage-1}</span>
          <svg class="search__icon">
             <use href="${/*@__PURE__*/_(rL)}#icon-arrow-${"next"===e?"right":"left"}"></use>
          </svg>
        </button>
       `}}var rC=new rN;class rD extends rx{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";bookmarkOnLoadHandle(e){window.addEventListener("load",e)}_generateMarkup(){//console.log(this._data);
return`${this._data.map(e=>rI.render(e,!1)).join()}`}}var rU=new rD;class rA extends rx{_parentElement=document.querySelector(".upload");_modalWindow=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnClose=document.querySelector(".btn--close-modal");_btnOpen=document.querySelector(".nav__btn--add-recipe");_message="Recipe added successfully.";constructor(){super(),this._openModalWindow(),this._closeModalWindow()}toggleWindow(){this._modalWindow.classList.toggle("hidden"),this._overlay.classList.toggle("hidden")}uploadButtonHandler(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault();//get form data into variable using FormData() method and spread operator
let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_openModalWindow(){//console.log(this._btnOpen);
let e=this;this._btnOpen.addEventListener("click",function(t){t.preventDefault(),e.render("",!0),e.toggleWindow()})}_closeModalWindow(){//console.log(this._btnClose);
this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_generateMarkup(){return`<div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="TEST123" required name="title" type="text" />
    <label>URL</label>
    <input value="TEST123" required name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="TEST123" required name="image" type="text" />
    <label>Publisher</label>
    <input value="TEST123" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="23" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="23" required name="servings" type="number" />
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input
      value="0.5,kg,Rice"
      type="text"
      required
      name="ingredient-1"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 2</label>
    <input
      value="1,,Avocado"
      type="text"
      name="ingredient-2"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 3</label>
    <input
      value=",,salt"
      type="text"
      name="ingredient-3"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 4</label>
    <input
      type="text"
      name="ingredient-4"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 5</label>
    <input
      type="text"
      name="ingredient-5"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 6</label>
    <input
      type="text"
      name="ingredient-6"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="src/img/icons.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>`}}var rW=new rA;// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const rz=async function(){let e=window.location.hash.slice(1);//console.log(id);
if(e){rM.renderSpinner();try{await rw(e),rR.update(rS()),rM.render(rb.recipe),rU.update(rb.bookmarks);//console.log(modal.state.recipe);
}catch(e){rM.renderError(),console.log(e)}}},rG=async function(e){if(rR.renderSpinner(),e)//load recipe
//recipeView.renderSpinner();
try{//1. get search results
await rE(e),rR.render(rS()),rC.render(rb.search);//console.log(modal.state.search.results);
}catch(e){rR.renderError(e)}},rB=async function(e){try{await rF(e),rM.render(rb.recipe),rW.renderSuccess(),rU.render(rb.bookmarks),//update new recipe ID in the URL
window.history.pushState(null,"",`#${rb.recipe.id}`),setTimeout(function(){rW.toggleWindow()},2e3)}catch(e){rW.renderError(e)}};rU.bookmarkOnLoadHandle(function(){rb.bookmarks.length>0?rU.render(rb.bookmarks):rU.renderError()}),rM.addHandleRender(rz),rM.addUpdateRecipeHandle(function(e){rk(e),rM.update(rb.recipe)}),rM.addDeleteBookmarkHandle(function(){rb.recipe.bookmarked?rj(rb.recipe.id):rP(rb.recipe),rM.update(rb.recipe),rU.render(rb.bookmarks)}),rq.addHandleRender(rG),rC.addHandleRender(function(e){rR.render(rS(e)),rC.render(rb.search)}),rW.uploadButtonHandler(rB);//# sourceMappingURL=index.2d31b543.js.map

//# sourceMappingURL=index.2d31b543.js.map
