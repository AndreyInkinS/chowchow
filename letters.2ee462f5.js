parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nhcI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startLettersAnimation=t;var e=require("gsap");function t(){new SplitType(".work_title",{types:"words, chars",tagName:"span"});var t=document.querySelectorAll(".work_link");Array.from(t).forEach(function(t){var r=t.querySelectorAll(".work_title.is-1 .char"),a=t.querySelectorAll(".work_title.is-2 .char"),o=e.gsap.timeline({paused:!0});o.to(r,{translateY:"-0.2em",rotationY:"-5.7deg",rotationX:"-90deg",stagger:{each:.08},ease:"power3.inOut",duration:.7}),o.from(a,{translateY:"0.2em",rotationY:"5.7deg",rotationX:"90deg",stagger:{each:.08},ease:"power3.inOut",duration:.7},.1),t.addEventListener("mouseenter",function(){o.restart()}),t.addEventListener("mouseleave",function(){o.reverse()})})}
},{"gsap":"TpQl"}]},{},[], null)
//# sourceMappingURL=/letters.2ee462f5.js.map