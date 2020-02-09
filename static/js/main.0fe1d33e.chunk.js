(this["webpackJsonppaulkamer.nl"]=this["webpackJsonppaulkamer.nl"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(9),r=t(10),l=t(12),s=t(11),c=t(13),o=t(0),i=t.n(o),m=t(1),u=(t(25),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.imageAlt});return this.props.imageLinkUrl?e=i.a.createElement("a",{href:this.props.imageLinkUrl,target:this.props.imageLinkTarget||"_self",rel:"noopener noreferrer"},e):this.props.imageLinkTo&&(e=i.a.createElement(m.b,{to:this.props.imageLinkTo},e)),i.a.createElement("article",{className:"intro-article"},i.a.createElement("h3",{className:"intro-article__title"},this.props.title,this.props.subTitle?i.a.createElement("span",{className:"intro-article__subtitle"},this.props.subTitle):""),i.a.createElement("section",{className:"intro-article__container"},i.a.createElement("div",{className:"intro-article__image"},e),i.a.createElement("div",{className:"intro-article__text"},this.props.articleText)))}}]),a}(o.Component))},,,,,function(e,a,t){e.exports=t(38)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),s=t.n(l),c=t(1),o=t(4),i=t(15),m=(t(31),function(){var e=[{company:"start.me",tenure:"dec 2015 - current",logo_url:"/images/logo-startme.png",website_url:"https://start.me",text:r.a.createElement("section",null,r.a.createElement("p",null,"start.me is an online start page/bookmark manager for both individuals and organisations."),r.a.createElement("p",null,"As a Senior Web Developer, and later Tech Lead, I've worked on numerous front-end, back-end and infrastructure-related projects."))},{company:"Global Sports Media / Perform Group",tenure:"jan 2010 - nov 2015",logo_url:"/images/logo-perform.svg",website_url:"https://www.statsperform.com",text:r.a.createElement("section",null,r.a.createElement("p",null,"Global Sports Media (GSM) collects and syndicates sports statistics via a REST API, FTP push service and hosted (white-label) websites and widgets."),r.a.createElement("p",null,"After being fully acquired by Perform Group, I've worked as a Software Architect on, amongst other things, a project to introduce a new sports data collection platform."))},{company:"Sport-Track / MyLaps",tenure:"may 2007 - dec 2009",logo_url:"/images/logo-mylaps.svg",website_url:"https://www.mylaps.com",text:r.a.createElement("section",null,r.a.createElement("p",null,"Sport-Track developed a GPS-based live tracking and tracing system for sporting events."),r.a.createElement("p",null,"As a web developer I worked on a back-end portal written in PHP, which was backed by an Oracle database. Using this portal, organisers could manage their sporting events. It also served as a registration portal for participants."))}];return r.a.createElement("article",{className:"home-page"},r.a.createElement("section",{id:"bio",className:"bio"},r.a.createElement("h2",null,"About me"),r.a.createElement("p",null,"I'm an experienced full-stack web developer, more inclined towards back-end development, from The Hague in The Netherlands."),r.a.createElement("p",null,"I've worked in the sports data industry for over 8 years. The last 4 years I worked as a Tech Lead for ",r.a.createElement("a",{href:"https://start.me",target:"_blank",rel:"noopener noreferrer"},"start.me"),", an online start page/bookmark manager service."),r.a.createElement("p",null,"My main interests & experience are: Ruby, Node, PHP, PostgreSQL, JS (vanilla, Vue & React), cloud & serverless."),r.a.createElement("p",null,"Download my CV: ",r.a.createElement("a",{href:"/docs/cv.pdf"},"Dutch")," | ",r.a.createElement("a",{href:"/docs/cv_en.pdf"},"English"))),r.a.createElement("section",{id:"skills",className:"skills"},r.a.createElement("h2",null,"Skills"),r.a.createElement("ul",{className:"skills__skillslist"},[{discipline:"Back-end",skills:["Ruby","Node.js","PHP","RabbitMQ","Resque"]},{discipline:"Databases",skills:["PostgreSQL","Redis","Elasticsearch","MySQL","Oracle"]},{discipline:"Infrastructure",skills:["Heroku","Cloud (AWS)","Serverless","Docker"]},{discipline:"Front-end",skills:["Vue.js","Nuxt.js","React","Riot.js"]},{discipline:"Misc",skills:["Nginx","Apache","Git","UML","CI/CD","ArchiMate"]}].map((function(e,a){return r.a.createElement("li",{key:"sk_".concat(a),className:"skillsgroup"},r.a.createElement("span",{className:"skillsgroup__discipline"},e.discipline,":"),r.a.createElement("ul",{className:"skillsgroup__skillslist"},e.skills.map((function(e,t){return r.a.createElement("li",{key:"".concat(a,"_").concat(t),className:"skillsgroup__skill"},e)}))))})))),r.a.createElement("section",{id:"jobs",className:"jobs"},r.a.createElement("h2",null,"Jobs"),e.map((function(e,a){return r.a.createElement(i.a,{key:"job_".concat(a),title:e.company,subTitle:" - ".concat(e.tenure),articleText:e.text,imageUrl:e.logo_url,imageLinkUrl:e.website_url,imageLinkTarget:"_blank",imageAlt:e.company})}))),r.a.createElement("section",{className:"projects"},r.a.createElement("h2",null,"Projects"),"For an impression of personal projects I've worked on, see the ",r.a.createElement(c.b,{to:"/projects/"},"Projects page"),"."))}),u=(t(32),function(){return r.a.createElement("div",{className:"submenu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/projects/"},"Projects"))))}),p=(t(33),function(){return r.a.createElement("header",{className:"HeaderBar"},r.a.createElement("div",{className:"HeaderBar__name"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"HeaderBar__avatar",alt:"avatar",src:"/avatar192.jpg"})),r.a.createElement(c.b,{to:"/"},r.a.createElement("h1",null,"Paul Kamer"))),r.a.createElement("div",{className:"HeaderBar__submenu"},r.a.createElement(u,null)))}),d=(t(34),function(){return r.a.createElement("footer",{className:"footerbar"},r.a.createElement("a",{href:"https://github.com/paulkamer/",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://unpkg.com/simple-icons@latest/icons/github.svg",alt:"Github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/paulkamer/",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"https://unpkg.com/simple-icons@latest/icons/linkedin.svg",alt:"LinkedIn"})),r.a.createElement("a",{href:"mailto:paulkamer@gmail.com",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"/images/mail.svg",alt:"email"}))," ","\u2013"," last updated February 2020")}),E=function(){return r.a.createElement("div",{className:"loader"},"Loading...")},g=(t(35),t(36),r.a.lazy((function(){return t.e(5).then(t.bind(null,44))}))),h=r.a.lazy((function(){return t.e(3).then(t.bind(null,46))})),b=r.a.lazy((function(){return t.e(4).then(t.bind(null,45))}));var k=function(){return r.a.createElement(c.a,null,r.a.createElement("main",{className:"app-main"},r.a.createElement(p,null),r.a.createElement("div",{className:"app-main__submenu"},r.a.createElement(u,null)),r.a.createElement(o.c,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"app-main__page-container"},r.a.createElement(n.Suspense,{fallback:r.a.createElement(E,null)},r.a.createElement(o.a,{exact:!0,path:"/",component:m}),r.a.createElement(o.a,{exact:!0,path:"/projects/worldfootball/",component:h}),r.a.createElement(o.a,{exact:!0,path:"/projects/trialsmonitor/",component:b}),r.a.createElement(o.a,{exact:!0,path:"/projects/trialmonitor/",component:b}),r.a.createElement(o.a,{exact:!0,path:"/projects/",component:g}))))),r.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(37);s.a.render(r.a.createElement(c.a,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.0fe1d33e.chunk.js.map