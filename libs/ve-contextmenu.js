module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=185)}([,function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(73))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(1),o=n(29),i=n(4),c=n(33),u=n(40),a=n(56),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)&&(u||"string"==typeof s[t])||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(12),o={}.hasOwnProperty;t.exports=function(t,e){return o.call(r(t),e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(7),o=n(47),i=n(9),c=n(17),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(1),o=n(19).f,i=n(10),c=n(14),u=n(32),a=n(61),s=n(51);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(7),o=n(6),i=n(18);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(35),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(1),o=n(10),i=n(4),c=n(32),u=n(46),a=n(26),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,s=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(a=f(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(s?!d&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(7),o=n(42),i=n(18),c=n(11),u=n(17),a=n(4),s=n(47),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return i}));var r={BACK_SPACE:8,TAB:9,ENTER:13,SHIFT:16,SPACE:32,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,F2:113},o={FILTER:"filter",DOUBLE_RIGHT_ARROW:"double-right-arrow",DOUBLE_LEFT_ARROW:"double-left-arrow",TOP_ARROW:"top-arrow",RIGHT_ARROW:"right-arrow",BOTTOM_ARROW:"bottom-arrow",LEFT_ARROW:"left-arrow",SORT_TOP_ARROW:"sort-top-arrow",SORT_BOTTOM_ARROW:"sort-bottom-arrow",SEARCH:"search"},i={LEFT_MOUSE:1,MIDDLE_MOUSE:2,RIGHT_MOUSE:2}},function(t,e){t.exports={}},function(t,e,n){var r=n(53),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(29),o=n(33),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r,o,i,c=n(80),u=n(1),a=n(5),s=n(10),f=n(4),l=n(30),p=n(23),d=n(21),v=u.WeakMap;if(c||l.state){var h=l.state||(l.state=new v),g=h.get,m=h.has,y=h.set;r=function(t,e){if(m.call(h,t))throw new TypeError("Object already initialized");return e.facade=t,y.call(h,t,e),e},o=function(t){return g.call(h,t)||{}},i=function(t){return m.call(h,t)}}else{var x=p("state");d[x]=!0,r=function(t,e){if(f(t,x))throw new TypeError("Object already initialized");return e.facade=t,s(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(48),o=n(31).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r,o=n(9),i=n(81),c=n(31),u=n(21),a=n(74),s=n(45),f=n(23),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete v.prototype[c[n]];return v()};u[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(24),o=n(30);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.13.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(1),o=n(32),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(1),o=n(10);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(69),o=n(35),i=n(12),c=n(16),u=n(55),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=7==t,d=5==t||l;return function(v,h,g,m){for(var y,x,b=i(v),O=o(b),E=r(h,g,3),S=c(O.length),w=0,P=m||u,T=e?P(v,S):n||p?P(v,0):void 0;S>w;w++)if((d||w in O)&&(x=E(y=O[w],w,b),t))if(e)T[w]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return w;case 2:a.call(T,y)}else switch(t){case 4:return!1;case 7:a.call(T,y)}return l?-1:s||f?f:T}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},function(t,e,n){var r=n(2),o=n(15),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(48),o=n(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r,o,i=n(1),c=n(82),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]<4?1:r[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},,function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(37),o=n(2);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())||!Symbol.sham&&r&&r<41}))},function(t,e,n){var r=n(7),o=n(6).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(6).f,o=n(4),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r={};r[n(3)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(1),o=n(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(30),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(7),o=n(2),i=n(45);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(4),o=n(11),i=n(62).indexOf,c=n(21);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},,function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(2),o=n(3),i=n(37),c=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(1),o=n(66),i=n(98),c=n(10);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){var r=n(5),o=n(39),i=n(3)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(40);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},,,function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(4),o=n(83),i=n(19),c=n(6);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},function(t,e,n){var r=n(11),o=n(16),i=n(59),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(3);e.f=r},function(t,e,n){var r=n(44),o=n(14),i=n(100);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r=n(3),o=n(28),i=n(6),c=r("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(53),o=n(4),i=n(63),c=n(6).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e){t.exports=require("vue-easytable/libs/ve-icon")},function(t,e,n){var r=n(60);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},,function(t,e,n){"use strict";var r=n(17),o=n(6),i=n(18);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e){t.exports=require("lodash")},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(22);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(8),o=n(1),i=n(22),c=n(24),u=n(7),a=n(40),s=n(56),f=n(2),l=n(4),p=n(39),d=n(5),v=n(9),h=n(12),g=n(11),m=n(17),y=n(18),x=n(28),b=n(36),O=n(27),E=n(99),S=n(49),w=n(19),P=n(6),T=n(42),R=n(10),C=n(14),I=n(29),j=n(23),A=n(21),L=n(33),_=n(3),M=n(63),D=n(67),k=n(43),N=n(26),B=n(34).forEach,F=j("hidden"),W=_("toPrimitive"),H=N.set,U=N.getterFor("Symbol"),$=Object.prototype,G=o.Symbol,q=i("JSON","stringify"),Y=w.f,V=P.f,X=E.f,z=T.f,K=I("symbols"),J=I("op-symbols"),Q=I("string-to-symbol-registry"),Z=I("symbol-to-string-registry"),tt=I("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=u&&f((function(){return 7!=x(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Y($,e);r&&delete $[e],V(t,e,n),r&&t!==$&&V($,e,r)}:V,ot=function(t,e){var n=K[t]=x(G.prototype);return H(n,{type:"Symbol",tag:t,description:e}),u||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof G},ct=function(t,e,n){t===$&&ct(J,e,n),v(t);var r=m(e,!0);return v(n),l(K,r)?(n.enumerable?(l(t,F)&&t[F][r]&&(t[F][r]=!1),n=x(n,{enumerable:y(0,!1)})):(l(t,F)||V(t,F,y(1,{})),t[F][r]=!0),rt(t,r,n)):V(t,r,n)},ut=function(t,e){v(t);var n=g(e),r=b(n).concat(lt(n));return B(r,(function(e){u&&!at.call(n,e)||ct(t,e,n[e])})),t},at=function(t){var e=m(t,!0),n=z.call(this,e);return!(this===$&&l(K,e)&&!l(J,e))&&(!(n||!l(this,e)||!l(K,e)||l(this,F)&&this[F][e])||n)},st=function(t,e){var n=g(t),r=m(e,!0);if(n!==$||!l(K,r)||l(J,r)){var o=Y(n,r);return!o||!l(K,r)||l(n,F)&&n[F][r]||(o.enumerable=!0),o}},ft=function(t){var e=X(g(t)),n=[];return B(e,(function(t){l(K,t)||l(A,t)||n.push(t)})),n},lt=function(t){var e=t===$,n=X(e?J:g(t)),r=[];return B(n,(function(t){!l(K,t)||e&&!l($,t)||r.push(K[t])})),r};(a||(C((G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===$&&n.call(J,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),rt(this,e,y(1,t))};return u&&nt&&rt($,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return U(this).tag})),C(G,"withoutSetter",(function(t){return ot(L(t),t)})),T.f=at,P.f=ct,w.f=st,O.f=E.f=ft,S.f=lt,M.f=function(t){return ot(_(t),t)},u&&(V(G.prototype,"description",{configurable:!0,get:function(){return U(this).description}}),c||C($,"propertyIsEnumerable",at,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:G}),B(b(tt),(function(t){D(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(Q,e))return Q[e];var n=G(e);return Q[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,e){return void 0===e?x(t):ut(x(t),e)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),q)&&r({target:"JSON",stat:!0,forced:!a||f((function(){var t=G();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,q.apply(null,o)}});G.prototype[W]||R(G.prototype,W,G.prototype.valueOf),k(G,"Symbol"),A[F]=!0},,,,function(t,e,n){var r=n(1),o=n(46),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(7),o=n(6),i=n(9),c=n(36);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),u=r.length,a=0;u>a;)o.f(t,n=r[a++],e[n]);return t}},function(t,e,n){var r=n(22);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(22),o=n(27),i=n(49),c=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},,function(t,e,n){"use strict";var r=n(8),o=n(34).map;r({target:"Array",proto:!0,forced:!n(52)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r,o,i=n(113),c=n(112),u=n(29),a=RegExp.prototype.exec,s=u("native-string-replace",String.prototype.replace),f=a,l=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(l||d||p)&&(f=function(t){var e,n,r,o,c=this,u=p&&c.sticky,f=i.call(c),v=c.source,h=0,g=t;return u&&(-1===(f=f.replace("y","")).indexOf("g")&&(f+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",f)),d&&(n=new RegExp("^"+v+"$(?!\\s)",f)),l&&(e=c.lastIndex),r=a.call(u?n:c,g),u?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),d&&r&&r.length>1&&s.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return s})),n.d(e,"g",(function(){return f}));n(101),n(117),n(118);function r(t,e){if(t){for(var n=t.className,r=(e||"").split(" "),o=0,c=r.length;o<c;o++){var u=r[o];u&&(t.classList?t.classList.add(u):i(t,u)||(n+=" "+u))}t.classList||(t.className=n)}}function o(t,e){if(t&&e){for(var n=e.split(" "),r=" "+t.className+" ",o=0,c=n.length;o<c;o++){var u=n[o];u&&(t.classList?t.classList.remove(u):i(t,u)&&(r=r.replace(" "+u+" "," ")))}t.classList||(t.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}}function i(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}function c(t){var e=document.documentElement,n=void 0!==t.getBoundingClientRect?t.getBoundingClientRect():0,r=(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0),o=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),i=n.left+window.pageXOffset,c=n.top+window.pageYOffset,u=i-r,a=c-o;return{offsetTop:c,offsetLeft:i,left:u,top:a,right:window.document.documentElement.clientWidth-n.width-u,bottom:window.document.documentElement.clientHeight-n.height-a,right2:window.document.documentElement.clientWidth-u,bottom2:window.document.documentElement.clientHeight-a}}function u(t,e){var n=c(t),r=n.offsetTop,o=n.offsetLeft,i=n.left,u=n.top,a=n.right,s=n.bottom,f=n.right2,l=n.bottom2,p=c(e);return{offsetTop:r-p.offsetTop,offsetLeft:o-p.offsetLeft,left:i-p.left,top:u-p.top,right:a-p.right,bottom:s-p.bottom,right2:f-p.right2,bottom2:l-p.bottom2}}function a(t){var e=0,n=0,r=document.documentElement,o=document.body;return t||(t=window.event),window.pageYoffset?(e=window.pageXOffset,n=window.pageYOffset):(e=(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r&&r.clientLeft||o&&o.clientLeft||0),n=(r&&r.scrollTop||o&&o.scrollTop||0)-(r&&r.clientTop||o&&o.clientTop||0)),{left:e+=t.clientX,top:n+=t.clientY,right:r.clientWidth-t.clientX,bottom:r.clientHeight-t.clientY}}function s(t){var e=document;if(t.selectionStart)return t.selectionStart;if(e.selection){t.focus();var n=e.selection.createRange();if(null===n)return 0;var r=t.createTextRange(),o=r.duplicate();return r.moveToBookmark(n.getBookmark()),o.setEndPoint("EndToStart",r),o.text.length}return 0}function f(t,e,n){if(void 0===n&&(n=e),t.setSelectionRange){t.focus();try{t.setSelectionRange(e,n)}catch(i){var r=t.parentNode,o=r.style.display;r.style.display="block",t.setSelectionRange(e,n),r.style.display=o}}}},,function(t,e,n){var r=n(25),o=n(13),i=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},,,,,function(t,e,n){var r=n(44),o=n(15),i=n(3)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},,,,function(t,e,n){"use strict";var r=n(34).forEach,o=n(75)("forEach");t.exports=o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(11),o=n(27).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,e,n){"use strict";var r=n(44),o=n(94);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r=n(8),o=n(86);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},,,function(t,e,n){"use strict";var r=n(8),o=n(34).filter;r({target:"Array",proto:!0,forced:!n(52)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){"use strict";var r=n(8),o=n(62).includes,i=n(65);r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},function(t,e,n){"use strict";var r=n(8),o=n(115),i=n(13);r({target:"String",proto:!0,forced:!n(116)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},function(t,e,n){var r=n(5),o=n(15),i=n(3)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},function(t,e,n){"use strict";n(101);var r=n(14),o=n(86),i=n(2),c=n(3),u=n(10),a=c("species"),s=RegExp.prototype,f=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),p=c("replace"),d=!!/./[p]&&""===/./[p]("a","$0"),v=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var h=c(t),g=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!g||!m||"replace"===t&&(!f||!l||d)||"split"===t&&!v){var y=/./[h],x=n(h,""[t],(function(t,e,n,r,i){var c=e.exec;return c===o||c===s.exec?g&&!i?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],O=x[1];r(String.prototype,t,b),r(s,h,2==e?function(t,e){return O.call(t,this,e)}:function(t){return O.call(t,this)})}p&&u(s[h],"sham",!0)}},function(t,e,n){"use strict";var r=n(89).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(15),o=n(86);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},,function(t,e,n){"use strict";var r=n(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(8),o=n(34).findIndex,i=n(65),c=!0;"findIndex"in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},function(t,e,n){var r=n(107);t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},function(t,e,n){"use strict";var r=n(108),o=n(9),i=n(16),c=n(25),u=n(13),a=n(109),s=n(126),f=n(110),l=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var d=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,h=d?"$":"$0";return[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!d&&v||"string"==typeof r&&-1===r.indexOf(h)){var u=n(e,t,this,r);if(u.done)return u.value}var g=o(t),m=String(this),y="function"==typeof r;y||(r=String(r));var x=g.global;if(x){var b=g.unicode;g.lastIndex=0}for(var O=[];;){var E=f(g,m);if(null===E)break;if(O.push(E),!x)break;""===String(E[0])&&(g.lastIndex=a(m,i(g.lastIndex),b))}for(var S,w="",P=0,T=0;T<O.length;T++){E=O[T];for(var R=String(E[0]),C=l(p(c(E.index),m.length),0),I=[],j=1;j<E.length;j++)I.push(void 0===(S=E[j])?S:String(S));var A=E.groups;if(y){var L=[R].concat(I,C,m);void 0!==A&&L.push(A);var _=String(r.apply(void 0,L))}else _=s(R,m,C,I,A,r);C>=P&&(w+=m.slice(P,C)+_,P=C+R.length)}return w+m.slice(P)}]}))},function(t,e,n){"use strict";var r=n(108),o=n(107),i=n(9),c=n(13),u=n(121),a=n(109),s=n(16),f=n(110),l=n(86),p=n(112).UNSUPPORTED_Y,d=[].push,v=Math.min;r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var u,a,s,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,p+"g");(u=l.call(h,r))&&!((a=h.lastIndex)>v&&(f.push(r.slice(v,u.index)),u.length>1&&u.index<r.length&&d.apply(f,u.slice(1)),s=u[0].length,v=a,f.length>=i));)h.lastIndex===u.index&&h.lastIndex++;return v===r.length?!s&&h.test("")||f.push(""):f.push(r.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=c(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var c=n(r,t,this,o,r!==e);if(c.done)return c.value;var l=i(t),d=String(this),h=u(l,RegExp),g=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"g":"y"),y=new h(p?"^(?:"+l.source+")":l,m),x=void 0===o?4294967295:o>>>0;if(0===x)return[];if(0===d.length)return null===f(y,d)?[d]:[];for(var b=0,O=0,E=[];O<d.length;){y.lastIndex=p?0:O;var S,w=f(y,p?d.slice(O):d);if(null===w||(S=v(s(y.lastIndex+(p?O:0)),d.length))===b)O=a(d,O,g);else{if(E.push(d.slice(b,O)),E.length===x)return E;for(var P=1;P<=w.length-1;P++)if(E.push(w[P]),E.length===x)return E;O=b=S}}return E.push(d.slice(b)),E}]}),p)},,,function(t,e,n){var r=n(9),o=n(60),i=n(3)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(64),n(131);function r(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}},function(t,e,n){"use strict";var r=n(8),o=n(59),i=n(25),c=n(16),u=n(12),a=n(55),s=n(71),f=n(52)("splice"),l=Math.max,p=Math.min;r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,f,d,v,h,g=u(this),m=c(g.length),y=o(t,m),x=arguments.length;if(0===x?n=r=0:1===x?(n=0,r=m-y):(n=x-2,r=p(l(i(e),0),m-y)),m+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(f=a(g,r),d=0;d<r;d++)(v=y+d)in g&&s(f,d,g[v]);if(f.length=r,n<r){for(d=y;d<m-r;d++)h=d+n,(v=d+r)in g?g[h]=g[v]:delete g[h];for(d=m;d>m-r+n;d--)delete g[d-1]}else if(n>r)for(d=m-r;d>y;d--)h=d+n-1,(v=d+r-1)in g?g[h]=g[v]:delete g[h];for(d=0;d<n;d++)g[d+y]=arguments[d+2];return g.length=m-r+n,f}})},function(t,e,n){var r=n(8),o=n(12),i=n(36);r({target:"Object",stat:!0,forced:n(2)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,n){var r=n(12),o=Math.floor,i="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,a,s,f){var l=n+t.length,p=a.length,d=u;return void 0!==s&&(s=r(s),d=c),i.call(f,d,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>p){var f=o(u/10);return 0===f?r:f<=p?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):r}c=a[u-1]}return void 0===c?"":c}))}},,,,,function(t,e,n){"use strict";var r=n(14),o=n(9),i=n(2),c=n(113),u=RegExp.prototype,a=u.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n)}),{unsafe:!0})},,,,function(t,e,n){var r=n(8),o=n(2),i=n(11),c=n(19).f,u=n(7),a=o((function(){c(1)}));r({target:"Object",stat:!0,forced:!u||a,sham:!u},{getOwnPropertyDescriptor:function(t,e){return c(i(t),e)}})},function(t,e,n){var r=n(8),o=n(7),i=n(83),c=n(11),u=n(19),a=n(71);r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var e,n,r=c(t),o=u.f,s=i(r),f={},l=0;s.length>l;)void 0!==(n=o(r,e=s[l++]))&&a(f,e,n);return f}})},,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(8),o=n(39),i=[].reverse,c=[1,2];r({target:"Array",proto:!0,forced:String(c)===String(c.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(41),n(85),n(114),n(160),n(104),n(124),n(54),n(105),n(106),n(125),n(76),n(135),n(136);var r="on-node-click",o=-1,i="SEPARATOR";function c(t){return"ve-contextmenu-"+t}var u=n(68),a=n.n(u),s=n(20),f=n(87),l=n(123),p=n(72);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h={name:"VeContextmenu",directives:{"events-outside":{bind:function(t,e,n){var r=e.value,o=r.events,i=r.callback;if(Array.isArray(o)&&o.length&&"function"==typeof i){var c=function(e){if(t.contains(e.target)||t===e.target)return!1;i(e)};t.__eventsOutside__=c,o.forEach((function(t){document.addEventListener(t,c,!0)}))}else{var u=n.context.name;console.error("[events-outside] Please provided 'events' and 'callback' in ".concat(u))}},unbind:function(t,e,n){e.value.events.forEach((function(e){document.removeEventListener(e,t.__eventsOutside__,!0)})),t.__eventsOutside__=null}}},props:{options:{type:Array,required:!0},eventTarget:{type:[String,HTMLElement],required:!0}},data:function(){return{internalOptions:[],panelOptions:[],eventTargetEl:"",rootContextmenuId:"",isChildrenPanelsClicked:!1,isPanelRightDirection:!0,isPanelsEmptyed:!0}},computed:{activeMenuIds:function(){return this.panelOptions.map((function(t){return t.parentId}))}},watch:{options:{handler:function(t){Array.isArray(t)&&t.length>0&&(this.removeOrEmptyPanels(!0),this.rootContextmenuId=this.getRandomIdWithPrefix(),this.createInternalOptions(),this.createPanelOptions({options:this.internalOptions}),this.resetContextmenu(),this.addRootContextmenuPanelToBody())},immediate:!0},eventTarget:{handler:function(t){t&&this.registerContextmenuEvent()},immediate:!0}},methods:v({getRandomIdWithPrefix:function(){return c(Object(l.a)())},hasChildren:function(t){return Array.isArray(t.children)&&t.children.length},getPanelOptionByMenuId:function(t,e){for(var n=0;n<t.length;n++){if(t[n].id===e)return t[n].children;if(t[n].children){var r=this.getPanelOptionByMenuId(t[n].children,e);if(r)return r}}},getParentContextmenuPanelEl:function(t){var e,n=this.panelOptions,r=n.findIndex((function(e){return e.parentId===t}));if(r>0){var o=n[r-1].parentId;e=document.querySelector("#".concat(o))}return e},createPanelByHover:function(t){var e=this,n=t.event,r=t.menu,o=this.internalOptions,i=this.panelOptions;if(this.isPanelsEmptyed)return!1;if(i.findIndex((function(t){return t.parentId===r.id}))>-1)return!1;var c=i.filter((function(t){return t.parentDeep>=r.deep})).map((function(t){return t.parentDeep})).reverse();if(c.length)for(var u=function(t){var n=i.findIndex((function(e){return e.parentDeep===c[t]}));n>-1&&e.panelOptions.splice(n,1)},a=c.length-1;a>=0;a--)u(a);var s=this.getPanelOptionByMenuId(o,r.id);s&&(this.createPanelOptions({options:s,currentMenu:r}),this.$nextTick((function(){e.addContextmenuPanelToBody({contextmenuId:r.id}),e.showContextmenuPanel({event:n,contextmenuId:r.id})})))},createPanelOptions:function(t){var e=t.options,n=t.currentMenu,r=this.hasChildren,i=this.rootContextmenuId;if(Array.isArray(e)){var c=e.map((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({hasChildren:r(t)},t)}));this.panelOptions.push({parentId:n?n.id:i,parentDeep:n?n.deep:o,menus:c})}},createInternalOptionsRecursion:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.id=this.getRandomIdWithPrefix(),t.deep=n,n++,Array.isArray(t.children)&&t.children.map((function(t){return e.createInternalOptionsRecursion(t,n)})),t},createInternalOptions:function(){var t=this;this.internalOptions=Object(p.cloneDeep)(this.options).map((function(e){return t.createInternalOptionsRecursion(e)}))},showRootContextmenuPanel:function(t){t.preventDefault();var e=this.rootContextmenuId;e&&(this.resetContextmenu(),this.showContextmenuPanel({event:t,contextmenuId:e,isRootContextmenu:!0}),this.isPanelsEmptyed=!1)},showContextmenuPanel:function(t){var e=t.event,n=t.contextmenuId,r=t.isRootContextmenu,o=this.getParentContextmenuPanelEl,i=document.querySelector("#".concat(n));if(i){i.innerHTML="",i.appendChild(this.$refs[n]),i.style.position="absolute",i.classList.add(c("popper"));var u=i.getBoundingClientRect(),a=u.width,s=u.height;if(r){var l=Object(f.c)(e),p=l.left,d=l.top,v=l.right,h=l.bottom,g=0,m=0;v>=a?(g=p,this.isPanelRightDirection=!0):(g=p-a,this.isPanelRightDirection=!1),m=h>=s?d:d-s,i.style.left=g+"px",i.style.top=m+"px"}else{var y=o(n);if(y){var x=Object(f.d)(y),b=x.left,O=x.right,E=Object(f.c)(e),S=E.top,w=E.bottom,P=y.getBoundingClientRect().width,T=0,R=0;T=this.isPanelRightDirection?O>=a?b+P:b-P:b>=a?b-P:b+P,R=w>=s?S:S-s,i.style.left=T+"px",i.style.top=R+"px"}}}},emptyContextmenuPanels:function(){var t=this;setTimeout((function(){t.isChildrenPanelsClicked?t.isChildrenPanelsClicked=!1:(t.removeOrEmptyPanels(),t.isPanelsEmptyed=!0)}))},removeOrEmptyPanels:function(t){this.panelOptions.forEach((function(e){var n=document.querySelector("#".concat(e.parentId));n&&(t?n.remove():n.innerHTML="")}))},resetContextmenu:function(){this.panelOptions=[],this.createPanelOptions({options:this.internalOptions})},addContextmenuPanelToBody:function(t){var e=t.contextmenuId;if(document.querySelector("#".concat(e)))return!1;var n=document.createElement("div");n.setAttribute("id",e),document.body.appendChild(n)},addRootContextmenuPanelToBody:function(){this.rootContextmenuId&&this.addContextmenuPanelToBody({contextmenuId:this.rootContextmenuId})},registerContextmenuEvent:function(){var t=this.eventTarget;"string"==typeof t&&t.length>0?this.eventTargetEl=document.querySelector(t):this.eventTargetEl=t,this.eventTargetEl&&this.eventTargetEl.addEventListener("contextmenu",this.showRootContextmenuPanel)},removeContextmenuEvent:function(){this.eventTargetEl&&this.eventTargetEl.removeEventListener("contextmenu",this.showRootContextmenuPanel)}},"hideContextmenu",(function(){this.emptyContextmenuPanels()})),created:function(){this.debounceCreatePanelByHover=Object(p.debounce)(this.createPanelByHover,300)},mounted:function(){this.addRootContextmenuPanelToBody()},destroyed:function(){this.removeContextmenuEvent(),this.removeOrEmptyPanels(!0)},render:function(){var t=this,e=arguments[0],n=this.panelOptions,o=this.activeMenuIds,u=this.hasChildren,f=this.emptyContextmenuPanels,l=this.debounceCreatePanelByHover,p={class:["ve-contextmenu"],style:{display:"none"}};return e("div",p,[n.map((function(n,p){var d={ref:n.parentId,class:v({},c("panel"),!0),directives:[{name:"events-outside",value:{events:["click"],callback:function(t){0===p&&f()}}}],on:{click:function(){0!==p&&(t.isChildrenPanelsClicked=!0)},contextmenu:function(t){t.preventDefault()}}};return e("div",d,[e("ul",{class:c("list")},[n.menus.map((function(n){var p,d;n.type!==i?p={class:(d={},v(d,c("node"),!0),v(d,c("node-active"),o.includes(n.id)),v(d,c("node-disabled"),n.disabled),d),on:{mouseover:function(t){n.disabled||l({event:t,menu:n})},click:function(){n.disabled||u(n)||(t.$emit(r,n.type),setTimeout((function(){f()}),50))}}}:p={class:v({},c("node-separator"),!0)};return n.type!==i?e("li",p,[e("span",{class:c("node-label")},[n.label]),n.hasChildren&&e(a.a,{class:c("node-icon-postfix"),attrs:{name:s.a.RIGHT_ARROW}})]):e("li",p)}))])])}))])},install:function(t){t.component(h.name,h)}};e.default=h}]);