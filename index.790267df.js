var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n={},e=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,f=a||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,d=function(){return f.Date.now()};function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var a=r.test(t);return a||i.test(t)?u(t.slice(2),a?2:8):o.test(t)?NaN:+t}n=function(t,n,e){var o,r,i,u,a,c,f=0,l=!1,g=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,i=r;return o=r=void 0,f=n,u=t.apply(i,e)}function m(t){return f=t,a=setTimeout(x,n),l?h(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||g&&t-f>=i}function x(){var t=d();if(j(t))return T(t);a=setTimeout(x,function(t){var e=n-(t-c);return g?p(e,i-(t-f)):e}(t))}function T(t){return a=void 0,b&&o?h(t):(o=r=void 0,u)}function $(){var t=d(),e=j(t);if(o=arguments,r=this,c=t,e){if(void 0===a)return m(c);if(g)return a=setTimeout(x,n),h(c)}return void 0===a&&(a=setTimeout(x,n)),u}return n=y(n)||0,v(e)&&(l=!!e.leading,i=(g="maxWait"in e)?s(y(e.maxWait)||0,n):i,b="trailing"in e?!!e.trailing:b),$.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=r=a=void 0},$.flush=function(){return void 0===a?u:T(d())},$};const g=document.querySelector("#search-box"),b=document.querySelector(".country-info");g.addEventListener("input",n((function(t){t.preventDefault(),(n=t.target.value,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,population,languages,flags`).then((t=>{if(!t.ok)throw Error(t.statusText);return t.json()})).then(console.log).catch((t=>console.log(t)))).then((t=>{b.innerHTML=function({name:t,capital:n,population:e,languages:o,flags:r}){return`\n    <div class="country__head">\n        <img src="${r}" alt="" />\n    </div>\n\n    <div class="country">\n        <h1 class="country__title">${t}</h1>\n        <p class="country__text">Столица: ${n}</p>\n        <p class="country__text">Население: ${e}</p>\n        <p class="country__text">Язык: ${o}</p>\n    </div>`}({country:t})}));var n}),300));
//# sourceMappingURL=index.790267df.js.map
