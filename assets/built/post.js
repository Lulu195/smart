!function(){"use strict";
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t=function(e){return"IMG"===e.tagName},o=function(e){return e&&1===e.nodeType},n=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},i=function(e){try{return Array.isArray(e)?e.filter(t):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(t):o(e)?[e].filter(t):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(t):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},r=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},d=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+c+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},a=function(t,o){var n=e({bubbles:!1,cancelable:!1,detail:void 0},o);if("function"==typeof window.CustomEvent)return new CustomEvent(t,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var c=function t(c){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=window.Promise||function(e){function t(){}e(t,t)},s=function(e){var t=e.target;t!==T?-1!==S.indexOf(t)&&w({target:t}):E()},u=function(){if(!x&&q.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(O-e)>k.scrollOffset&&setTimeout(E,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||E()},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t;if(t.background&&(T.style.background=t.background),t.container&&t.container instanceof Object&&(n.container=e({},k.container,t.container)),t.template){var i=o(t.template)?t.template:document.querySelector(t.template);n.template=i}return k=e({},k,n),S.forEach((function(e){e.dispatchEvent(a("medium-zoom:update",{detail:{zoom:N}}))})),N},g=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(e({},k,o))},h=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,i(t))}),[]);return n.filter((function(e){return-1===S.indexOf(e)})).forEach((function(e){S.push(e),e.classList.add("medium-zoom-image")})),A.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),N},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];q.zoomed&&E();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,i(t))}),[]):S;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(a("medium-zoom:detach",{detail:{zoom:N}}))})),S=S.filter((function(e){return-1===n.indexOf(e)})),N},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),A.push({type:"medium-zoom:"+e,listener:t,options:o}),N},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),A=A.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),N},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.target,r=function(){var t={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},i=void 0,r=void 0;if(k.container)if(k.container instanceof Object)i=(t=e({},t,k.container)).width-t.left-t.right-2*k.margin,r=t.height-t.top-t.bottom-2*k.margin;else{var d=(o(k.container)?k.container:document.querySelector(k.container)).getBoundingClientRect(),a=d.width,c=d.height,m=d.left,l=d.top;t=e({},t,{width:a,height:c,left:m,top:l})}i=i||t.width-2*k.margin,r=r||t.height-2*k.margin;var s=q.zoomedHd||q.original,u=n(s)?i:s.naturalWidth||i,f=n(s)?r:s.naturalHeight||r,p=s.getBoundingClientRect(),g=p.top,h=p.left,v=p.width,z=p.height,y=Math.min(Math.max(v,u),i)/v,b=Math.min(Math.max(z,f),r)/z,E=Math.min(y,b),w="scale("+E+") translate3d("+((i-v)/2-h+k.margin+t.left)/E+"px, "+((r-z)/2-g+k.margin+t.top)/E+"px, 0)";q.zoomed.style.transform=w,q.zoomedHd&&(q.zoomedHd.style.transform=w)};return new l((function(e){if(i&&-1===S.indexOf(i))e(N);else{if(q.zoomed)e(N);else{if(i)q.original=i;else{if(!(S.length>0))return void e(N);var t=S;q.original=t[0]}if(q.original.dispatchEvent(a("medium-zoom:open",{detail:{zoom:N}})),O=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,x=!0,q.zoomed=d(q.original),document.body.appendChild(T),k.template){var n=o(k.template)?k.template:document.querySelector(k.template);q.template=document.createElement("div"),q.template.appendChild(n.content.cloneNode(!0)),document.body.appendChild(q.template)}if(q.original.parentElement&&"PICTURE"===q.original.parentElement.tagName&&q.original.currentSrc&&(q.zoomed.src=q.original.currentSrc),document.body.appendChild(q.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),q.original.classList.add("medium-zoom-image--hidden"),q.zoomed.classList.add("medium-zoom-image--opened"),q.zoomed.addEventListener("click",E),q.zoomed.addEventListener("transitionend",(function t(){x=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(a("medium-zoom:opened",{detail:{zoom:N}})),e(N)})),q.original.getAttribute("data-zoom-src")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("srcset"),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.removeAttribute("loading"),q.zoomedHd.src=q.zoomed.getAttribute("data-zoom-src"),q.zoomedHd.onerror=function(){clearInterval(c),console.warn("Unable to reach the zoom image target "+q.zoomedHd.src),q.zoomedHd=null,r()};var c=setInterval((function(){q.zoomedHd.complete&&(clearInterval(c),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",E),document.body.appendChild(q.zoomedHd),r())}),10)}else if(q.original.hasAttribute("srcset")){q.zoomedHd=q.zoomed.cloneNode(),q.zoomedHd.removeAttribute("sizes"),q.zoomedHd.removeAttribute("loading");var m=q.zoomedHd.addEventListener("load",(function(){q.zoomedHd.removeEventListener("load",m),q.zoomedHd.classList.add("medium-zoom-image--opened"),q.zoomedHd.addEventListener("click",E),document.body.appendChild(q.zoomedHd),r()}))}else r()}}}))},E=function(){return new l((function(e){if(!x&&q.original){x=!0,document.body.classList.remove("medium-zoom--opened"),q.zoomed.style.transform="",q.zoomedHd&&(q.zoomedHd.style.transform=""),q.template&&(q.template.style.transition="opacity 150ms",q.template.style.opacity=0),q.original.dispatchEvent(a("medium-zoom:close",{detail:{zoom:N}})),q.zoomed.addEventListener("transitionend",(function t(){q.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(q.zoomed),q.zoomedHd&&document.body.removeChild(q.zoomedHd),document.body.removeChild(T),q.zoomed.classList.remove("medium-zoom-image--opened"),q.template&&document.body.removeChild(q.template),x=!1,q.zoomed.removeEventListener("transitionend",t),q.original.dispatchEvent(a("medium-zoom:closed",{detail:{zoom:N}})),q.original=null,q.zoomed=null,q.zoomedHd=null,q.template=null,e(N)}))}else e(N)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return q.original?E():b({target:t})},L=function(){return k},C=function(){return S},H=function(){return q.original},S=[],A=[],x=!1,O=0,k=m,q={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(c)?k=c:(c||"string"==typeof c)&&h(c),k=e({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},k);var T=r(k.background);document.addEventListener("click",s),document.addEventListener("keyup",f),document.addEventListener("scroll",u),window.addEventListener("resize",E);var N={open:b,close:E,toggle:w,update:p,clone:g,attach:h,detach:v,on:z,off:y,getOptions:L,getImages:C,getZoomedImage:H};return N};const m=document.querySelectorAll(".sm-post-content > table");!function(){const e=[...document.querySelectorAll(".sm-post-content > img"),...document.querySelectorAll(".sm-post-content > p > img"),...document.querySelectorAll(".kg-image-card > img"),...document.querySelectorAll(".kg-gallery-image > img")];c(e,{background:"rgba(0,0,0,0.75)"})}(),m.forEach((e=>function(e){const t=document.createElement("div");t.setAttribute("style","width: 100%; overflow-x: auto; margin: 2rem 0;"),t.setAttribute("class","sm-table-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)}(e))),function(){const e=document.querySelector(".sm-author-website");e&&(e.lastChild.textContent=new URL(e.textContent).hostname)}(),function(){const e=document.querySelector(".post"),t=document.querySelector(".sm-post-toc"),o=document.querySelector(".sm-post-toc-contents");if(!t||!e)return;const n=e.querySelectorAll("h2, h3, h4, h5, h6");if(n.length<3)return void(t.style.display="none");t.classList.add("toc-enabled"),document.querySelector(".sm-post-toc-btn").addEventListener("click",(()=>{o.classList.toggle("toc-show")})),n.forEach((e=>{const t=function(e){const t=document.createElement("a");return t.classList.add("sm-toc-link"),t.setAttribute("href",`#${e.id}`),t.textContent=e.textContent,t}(e);o.append(t)}));const i=new IntersectionObserver((e=>{e.forEach((e=>{const o=e.target.getAttribute("id"),n=t.querySelector(`a[href="#${o}"]`);e.isIntersecting&&(n.classList.add("sm-toc-active"),t.querySelectorAll("a").forEach((e=>{e!==n&&e.classList.remove("sm-toc-active")})))}))}),{root:null,rootMargin:"0px",threshold:.5});n.forEach((e=>{i.observe(e)}))}()}();
//# sourceMappingURL=post.js.map
