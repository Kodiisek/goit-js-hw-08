!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return s.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,f=setTimeout(O,t),d?p(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function O(){var e=y();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?g(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?p(e):(o=r=void 0,u)}function T(){var e=y(),n=j(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(y())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector(".feedback-form"),j=w.querySelector('input[name="email"]'),O=w.querySelector('textarea[name="message"]'),h="feedback-form-state";w.addEventListener("input",e(t)((function(){var e={email:j.value,message:O.value};localStorage.setItem(h,JSON.stringify(e)),console.log("Zapisano dane do LocalStorage:",e)}),500)),window.addEventListener("load",(function(){var e=localStorage.getItem(h);if(e){var t=JSON.parse(e);j.value=t.email||"",O.value=t.message||"",console.log("Wczytano dane z LocalStorage:",t)}})),w.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(h),j.value="",O.value="",console.log("Formularz wysłany. Usunięto dane z LocalStorage.")}))}();
//# sourceMappingURL=03-feedback.b3e34580.js.map