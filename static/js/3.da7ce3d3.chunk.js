/*! For license information please see 3.da7ce3d3.chunk.js.LICENSE */
(this["webpackJsonppaulkamer.nl"]=this["webpackJsonppaulkamer.nl"]||[]).push([[3],{32:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},33:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return a}))},34:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},35:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}function r(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.d(t,"a",(function(){return r}))},36:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return a}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var o=n(32),a=n(33),r=n(35),l=n(34),i=n(36),c=n(0),u=n.n(c),s=n(2),f=(n(38),function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("nav",{className:"breadcrumbtrail"},u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(s.b,{to:"/"},"Home")),this.props.trail.map((function(e,t){return u.a.createElement("li",{key:"breadcrumb_".concat(t)},e.to?u.a.createElement(s.b,{to:e.to},e.label):e.label)}))))}}]),t}(c.Component))},38:function(e,t,n){},39:function(e,t,n){var o,a;!function(r,l){"use strict";void 0===(a="function"===typeof(o=function(){var e,t,n,o,a,r={},l={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},i={},c=[],u=0,s=!1,f={},d=!1,p=/.+\.(gif|jpe?g|png|webp)/i,m={},b=[],h=null,g=function(e){-1!==e.target.id.indexOf("baguette-img")&&P()},y=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,L()},v=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,N()},w=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,P()},E=function(e){f.count++,1<f.count&&(f.multitouch=!0),f.startX=e.changedTouches[0].pageX,f.startY=e.changedTouches[0].pageY},k=function(e){if(!d&&!f.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-f.startX?(d=!0,L()):t.pageX-f.startX<-40?(d=!0,N()):100<f.startY-t.pageY&&P()}},j=function(){f.count--,f.count<=0&&(f.multitouch=!1),d=!1},C=function(){j()},S=function(t){"block"===e.style.display&&e.contains&&!e.contains(t.target)&&(t.stopPropagation(),A())};function x(e){if(m.hasOwnProperty(e)){var t=m[e].galleries;[].forEach.call(t,(function(e){[].forEach.call(e,(function(e){q(e.imageElement,"click",e.eventHandler)})),c===e&&(c=[])})),delete m[e]}}function B(e){switch(e.keyCode){case 37:L();break;case 39:N();break;case 27:P();break;case 36:!function(e){e&&e.preventDefault(),R(0)}(e);break;case 35:!function(e){e&&e.preventDefault(),R(c.length-1)}(e)}}function T(a,i){if(c!==a){for(c=a,function(a){for(var i in a||(a={}),l)r[i]=l[i],"undefined"!=typeof a[i]&&(r[i]=a[i]);t.style.transition=t.style.webkitTransition="fadeIn"===r.animation?"opacity .4s ease":"slideIn"===r.animation?"":"none","auto"===r.buttons&&("ontouchstart"in window||1===c.length)&&(r.buttons=!1),n.style.display=o.style.display=r.buttons?"":"none";try{e.style.backgroundColor=r.overlayBackgroundColor}catch(u){}}(i);t.firstChild;)t.removeChild(t.firstChild);for(var u,s=[],f=[],d=b.length=0;d<a.length;d++)(u=U("div")).className="full-image",u.id="baguette-img-"+d,b.push(u),s.push("baguetteBox-figure-"+d),f.push("baguetteBox-figcaption-"+d),t.appendChild(b[d]);e.setAttribute("aria-labelledby",s.join(" ")),e.setAttribute("aria-describedby",f.join(" "))}}function O(t){r.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==e.style.display&&(W(document,"keydown",B),f={count:0,startX:null,startY:null},_(u=t,(function(){F(u),H(u)})),D(),e.style.display="block",r.fullScreen&&(e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()),setTimeout((function(){e.className="visible",r.bodyClass&&document.body.classList&&document.body.classList.add(r.bodyClass),r.afterShow&&r.afterShow()}),50),r.onChange&&r.onChange(u,b.length),h=document.activeElement,A(),s=!0)}function A(){r.buttons?n.focus():a.focus()}function P(){r.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==e.style.display&&(q(document,"keydown",B),e.className="",setTimeout((function(){e.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),r.bodyClass&&document.body.classList&&document.body.classList.remove(r.bodyClass),r.afterHide&&r.afterHide(),h&&h.focus(),s=!1}),500))}function _(e,t){var n=b[e],o=c[e];if(void 0!==n&&void 0!==o)if(n.getElementsByTagName("img")[0])t&&t();else{var a=o.imageElement,l=a.getElementsByTagName("img")[0],i="function"==typeof r.captions?r.captions.call(c,a):a.getAttribute("data-caption")||a.title,u=function(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var a=Object.keys(n).sort((function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1})),r=window.innerWidth*window.devicePixelRatio,l=0;l<a.length-1&&a[l]<r;)l++;t=n[a[l]]||t}return t}(a),s=U("figure");if(s.id="baguetteBox-figure-"+e,s.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',r.captions&&i){var f=U("figcaption");f.id="baguetteBox-figcaption-"+e,f.innerHTML=i,s.appendChild(f)}n.appendChild(s);var d=U("img");d.onload=function(){var n=document.querySelector("#baguette-img-"+e+" .baguetteBox-spinner");s.removeChild(n),!r.async&&t&&t()},d.setAttribute("src",u),d.alt=l&&l.alt||"",r.titleTag&&i&&(d.title=i),s.appendChild(d),r.async&&t&&t()}}function N(){return R(u+1)}function L(){return R(u-1)}function R(e,t){return!s&&0<=e&&e<t.length?(T(t,r),O(e),!0):e<0?(r.animation&&I("left"),!1):e>=b.length?(r.animation&&I("right"),!1):(_(u=e,(function(){F(u),H(u)})),D(),r.onChange&&r.onChange(u,b.length),!0)}function I(e){t.className="bounce-from-"+e,setTimeout((function(){t.className=""}),400)}function D(){var e=100*-u+"%";"fadeIn"===r.animation?(t.style.opacity=0,setTimeout((function(){i.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e,t.style.opacity=1}),400)):i.transforms?t.style.transform=t.style.webkitTransform="translate3d("+e+",0,0)":t.style.left=e}function F(e){e-u>=r.preload||_(e+1,(function(){F(e+1)}))}function H(e){u-e>=r.preload||_(e-1,(function(){H(e-1)}))}function W(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,(function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)}))}function q(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function M(e){return document.getElementById(e)}function U(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,a){for(n=this,o=[],a=0;a<n.length;a++)e.call(t,n[a],a,n)&&o.push(n[a]);return o}),{run:function(r,l){return i.transforms=function(){var e=U("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),i.svg=function(){var e=U("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),i.passiveEvents=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(s){}return e}(),function(){if(e=M("baguetteBox-overlay"))return t=M("baguetteBox-slider"),n=M("previous-button"),o=M("next-button"),void(a=M("close-button"));(e=U("div")).setAttribute("role","dialog"),e.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(e),(t=U("div")).id="baguetteBox-slider",e.appendChild(t),(n=U("button")).setAttribute("type","button"),n.id="previous-button",n.setAttribute("aria-label","Previous"),n.innerHTML=i.svg?'<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&lt;",e.appendChild(n),(o=U("button")).setAttribute("type","button"),o.id="next-button",o.setAttribute("aria-label","Next"),o.innerHTML=i.svg?'<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>':"&gt;",e.appendChild(o),(a=U("button")).setAttribute("type","button"),a.id="close-button",a.setAttribute("aria-label","Close"),a.innerHTML=i.svg?'<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>':"&times;",e.appendChild(a),n.className=o.className=a.className="baguetteBox-button",function(){var r=i.passiveEvents?{passive:!0}:null;W(e,"click",g),W(n,"click",y),W(o,"click",v),W(a,"click",w),W(t,"contextmenu",C),W(e,"touchstart",E,r),W(e,"touchmove",k,r),W(e,"touchend",j),W(document,"focus",S,!0)}()}(),x(r),function(e,t){var n=document.querySelectorAll(e),o={galleries:[],nodeList:n};return m[e]=o,[].forEach.call(n,(function(e){t&&t.filter&&(p=t.filter);var n=[];if(n="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(n=[].filter.call(n,(function(e){if(-1===e.className.indexOf(t&&t.ignoreClass))return p.test(e.href)}))).length){var a=[];[].forEach.call(n,(function(e,n){var o=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,T(a,t),O(n)},r={eventHandler:o,imageElement:e};W(e,"click",o),a.push(r)})),o.galleries.push(a)}})),o.galleries}(r,l)},show:R,showNext:N,showPrevious:L,hide:P,destroy:function(){!function(){var r=i.passiveEvents?{passive:!0}:null;q(e,"click",g),q(n,"click",y),q(o,"click",v),q(a,"click",w),q(t,"contextmenu",C),q(e,"touchstart",E,r),q(e,"touchmove",k,r),q(e,"touchend",j),q(document,"focus",S,!0)}(),function(){for(var e in m)m.hasOwnProperty(e)&&x(e)}(),q(document,"keydown",B),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),m={},c=[],u=0}}})?o.call(t,n,t,e):o)||(e.exports=a)}()},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(37),l=n(32),i=n(33),c=n(35),u=n(34),s=n(36),f=n(39),d=n.n(f),p=(n(40),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){d.a.run(".screenshots")}},{key:"render",value:function(){return a.a.createElement("div",{className:"screenshots"},this.props.screenshots.map((function(e,t){return a.a.createElement("div",{key:"screenshot_".concat(t),className:"screenshots__screenshot"},a.a.createElement("a",{href:e.url,target:"_blank",title:e.title||e.alt,rel:"noopener noreferrer"},a.a.createElement("img",{src:e.thumbUrl,alt:e.alt})))})))}}]),t}(o.Component)),m=[{url:"/images/projects/worldfootball/homepage.png",thumbUrl:"/images/projects/worldfootball/homepage_thumb.png",alt:"Homepage",title:"Worldfootball.com homepage"},{url:"/images/projects/worldfootball/teampage.png",thumbUrl:"/images/projects/worldfootball/teampage_thumb.png",alt:"Team page",title:"Worldfootball.com team page"},{url:"/images/projects/worldfootball/matchpage.png",thumbUrl:"/images/projects/worldfootball/matchpage_thumb.png",alt:"Match page",title:"Match page (2018 World Cup Final)"},{url:"/images/projects/worldfootball/leaguetable.png",thumbUrl:"/images/projects/worldfootball/leaguetable_thumb.png",alt:"League table",title:"Worldfootball.com League table"}];t.default=function(){return a.a.createElement("section",null,a.a.createElement(r.a,{trail:[{to:"/projects/",label:"Projects"},{label:"Worldfootball"}]}),a.a.createElement("h1",null,"Worldfootball"),a.a.createElement("p",null,"Worldfootball.com was a collaborative project between ",a.a.createElement("a",{href:"https://datasportsgroup.com/",target:"_blank",rel:"noopener noreferrer"},"DataSportsGroup")," (DSG) and Arjen Robijn, the founder of start.me (see ",a.a.createElement("a",{href:"/#jobs"},"jobs"),") for whom I work for."),a.a.createElement("p",null,"DSG covers over 400 football competitions worldwide, and for many top leagues they have detailed player profile and career statistics available."),a.a.createElement("p",null,"All the football data covered by DSG was available on worldfootball. Besides the website itself, worldfootball also powered a widgets/white-label platform. We offered embeddable fixture and league table widgets, which were used by hundreds of websites."),a.a.createElement("p",null,"I personally took care of the development of the entire platform: design of the database, development of the front-end, back-end and data synchronization processes, and the infrastructure at Heroku and later AWS. ",a.a.createElement("br",null),"The UX/UI design was created by Arjen Robijn & ",a.a.createElement("a",{href:"http://pauldejong.info/",target:"_blank",rel:"noopener noreferrer"},"Paul de Jong"),"."),a.a.createElement("p",null,"Unfortunately, worldfootball had to be taken offline because start.me required all our time & focus."),a.a.createElement("h3",null,"Screenshots"),a.a.createElement(p,{screenshots:m}),a.a.createElement("h3",null,"Technology"),a.a.createElement("p",null,"Live results and post-match stats were synced from the DataSportsGroup API by ",a.a.createElement("a",{href:"https://github.com/resque/resque",target:"_blank",rel:"noopener noreferrer"},"Resque"),"-backed background jobs that were written in ",a.a.createElement("a",{href:"https://www.ruby-lang.org/en/",target:"_blank",rel:"noopener noreferrer"},"Ruby"),"."),a.a.createElement("p",null,"Worldfootball relied heavily on Cloudflare for edge-caching. We devised a mechanism to actively purge specific resources using Cloudflare's ",a.a.createElement("a",{href:"https://api.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},"API")," when, for example, match results were updated."),a.a.createElement("p",null,"We used an ",a.a.createElement("a",{href:"https://www.elastic.co/",target:"_blank",rel:"noopener noreferrer"},"ElasticSearch")," database for the search feature, which allowed visitors to look up competitions, teams, players and venues."),a.a.createElement("h4",null,"Technology"),a.a.createElement("ul",null,a.a.createElement("li",null,"Front-end:",a.a.createElement("ul",null,a.a.createElement("li",null,"React (incl. Redux, Jest)"),a.a.createElement("li",null,"Sass (SCSS)"),a.a.createElement("li",null,"Babel, ESLint"),a.a.createElement("li",null,"Served by Express.js with server-side rendering"))),a.a.createElement("li",null,"Back-end:",a.a.createElement("ul",null,a.a.createElement("li",null,"API: Ruby on Rails"),a.a.createElement("li",null,"Background jobs: Ruby, Redis, Resque"),a.a.createElement("li",null,"Data management: ActiveAdmin"))),a.a.createElement("li",null,"Infrastructure:",a.a.createElement("ul",null,a.a.createElement("li",null,"AWS: EC2, S3, ElasticSearch"),a.a.createElement("li",null,"Docker, docker-compose, docker-machine")))))}}}]);
//# sourceMappingURL=3.da7ce3d3.chunk.js.map