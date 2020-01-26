(this["webpackJsonppaulkamer.nl"]=this["webpackJsonppaulkamer.nl"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(11),c=t.n(r),o=t(3),i=t(4),s=(t(19),function(){var e=[{company:"start.me",tenure:"dec 2016 - current",logo_url:"/images/logo-startme.png",website_url:"https://start.me",text:n.a.createElement("p",null,"start.me is an online start page/bookmark manager for both individuals and organisations.",n.a.createElement("br",null),"As a Senior Web Developer and later Tech Lead, I've worked on numerous front-end, backend and infrastructure-related projects.",n.a.createElement("br",null))},{company:"Global Sports Media / Perform Group",tenure:"jan 2010 - nov 2016",logo_url:"/images/logo-perform.svg",website_url:"https://www.statsperform.com",text:n.a.createElement("p",null,"Global Sports Media (GSM) collects and syndicates sports statistics, via a REST api, FTP push service and hosted (white-label) websites and widgets.",n.a.createElement("br",null),"After being fully acquired by Perform Group, I've worked, amoung other things, as a Software Architect on a project to introduce a new sports data collection platform.")},{company:"Sport-Track / MyLaps",tenure:"may 2007 - dec 2009",logo_url:"/images/logo-mylaps.svg",website_url:"https://www.mylaps.com",text:n.a.createElement("p",null,"As a web developer I worked on a back-end portal (PHP), which used an Oracle database. Using this portal, organisers could manage their sports events. Participants use it to register themselves for the purpose of the GPS-based live tracking and tracing system.")}];return n.a.createElement("article",null,n.a.createElement("p",null,"Paul Kamer - Full-stack web developer based in The Hague, Netherlands.",n.a.createElement("br",null),"Download my CV: ",n.a.createElement("a",{href:"/docs/cv.pdf"},"Dutch")," | ",n.a.createElement("a",{href:"/docs/cv_en.pdf"},"English")),n.a.createElement("section",{className:"skills"},n.a.createElement("h2",null,"Skills"),n.a.createElement("ul",{className:"skills__skillslist"},["Ruby","PostgreSQL","Node.js","Vue.js","Nuxt.js","React","Redis","Git","Elasticsearch","RabbitMQ","Resque","ArchiMate","UML","Docker","CI/CD","Nginx","PHP","MySQL","Oracle"].map((function(e,a){return n.a.createElement("li",{key:a},e)})))),n.a.createElement("section",{className:"jobs"},n.a.createElement("h2",null,"Jobs"),e.map((function(e,a){return n.a.createElement("article",{key:"job_".concat(a),className:"job"},n.a.createElement("h3",null,e.company,n.a.createElement("span",{className:"job__tenure"}," - ",e.tenure)),n.a.createElement("section",{className:"job__job-details"},n.a.createElement("div",{className:"job__company-logo"},n.a.createElement("a",{href:e.website_url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.logo_url,alt:"".concat(e.company," logo")}))),e.text))}))),n.a.createElement("section",{className:"projects"},n.a.createElement("h2",null,"Projects"),"See ",n.a.createElement(o.b,{to:"/projects/"},"Projects page")))}),m=function(){return n.a.createElement("section",null,n.a.createElement("nav",null,n.a.createElement(o.b,{to:"/"},"Home")," > Projects"),n.a.createElement("h1",null,"Projects"),n.a.createElement("article",null,n.a.createElement("h2",null,"ClinicalTrials.gov monitor (WIP)"),n.a.createElement("p",{className:"intro"},"A personal project to receive alerts when clinical trials are updated on clinicaltrials.gov."),n.a.createElement("p",null,"The clinicaltrials.gov is a website provided by the U.S. National Library of Medicine. It is a database of privately and publicly funded clinical studies conducted around the world."),n.a.createElement("p",null,"Unfortunately, looking up a particular trail and to determine what it's last changes are takes quite a bit of effort. Personally, I monitor a few dozen trials on a weekly basis, and wanted to automate this process."),n.a.createElement("p",null,"Luckily, clinicaltrials.gov provides an API, so I've built a \"clinicaltrails monitor\" to receive automatic updates of the trials that I'm interested in. An AWS Lambda function is executed several times per day to check if certain trials (stored in an AWS DynamoDB table) have been updated. The function then determines a diff of the changes last made to the trial record, and emails a summary of all the changes that were found to me."),n.a.createElement("p",null,"This project is still very much work in progress, but the basic functionality is implemented:"),n.a.createElement("ul",null,n.a.createElement("li",null,"A DynamoDB table holds a list of clinical trails that I'm interested in"),n.a.createElement("li",null,"Periodically, a Lambda function is executed to check for updated trials:",n.a.createElement("ol",null,n.a.createElement("li",null,"When an update is detected, it fetches the latest version of the trial"),n.a.createElement("li",null,"Then, the diff with the previous version is determined"),n.a.createElement("li",null,"The trial in the DynamoDB table is updated"),n.a.createElement("li",null,"A summary email is sent")))),n.a.createElement("p",null,"In the future I intend to make this a public service."),n.a.createElement("h3",null,"Technology"),n.a.createElement("ul",null,n.a.createElement("li",null,"AWS Lambda"),n.a.createElement("li",null,"NodeJS"),n.a.createElement("li",null,"Serverless Framework in combination with AWS CloudFormation"),n.a.createElement("li",null,"AWS DynamoDB"))),n.a.createElement("hr",null),n.a.createElement("article",null,n.a.createElement("h2",null,"worldfootball"),n.a.createElement("h3",null,"Technology"),n.a.createElement("ul",null,n.a.createElement("li",null,"Ruby, Ruby On Rails"),n.a.createElement("li",null,"React: Redux, Jest, server-side rendering"),n.a.createElement("li",null,"AWS (EC2, S3, ElasticSearch)"),n.a.createElement("li",null,"Docker, docker-compose, docker-machine"),n.a.createElement("li",null,"Redis, Resque"))),n.a.createElement("hr",null),n.a.createElement("article",null,n.a.createElement("h2",null,"Air-Attack"),n.a.createElement("p",{className:"intro"},"Air-Attack.com was military aviation-related hobby website that I ran for several years."),n.a.createElement("h3",null,"Technology"),n.a.createElement("ul",null,n.a.createElement("li",null,"Python, Django"),n.a.createElement("li",null,"PHP, Symfony 2"),n.a.createElement("li",null,"MySQL"),n.a.createElement("li",null,"ElasticSearch"),n.a.createElement("li",null,"Apache"))))},u=(t(25),function(){return n.a.createElement("header",{className:"HeaderBar"},n.a.createElement(o.b,{to:"/"},n.a.createElement("img",{className:"HeaderBar avatar",alt:"avatar",src:"/avatar192.jpg"})),n.a.createElement(o.b,{to:"/"},n.a.createElement("h1",null,"Paul Kamer")))}),d=(t(26),function(){return n.a.createElement("footer",{className:"footerbar"},n.a.createElement("a",{href:"https://github.com/paulkamer/",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"https://unpkg.com/simple-icons@latest/icons/github.svg",alt:"Github"})),n.a.createElement("a",{href:"https://www.linkedin.com/in/paulkamer/",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"https://unpkg.com/simple-icons@latest/icons/linkedin.svg",alt:"LinkedIn"})),n.a.createElement("a",{href:"mailto:paulkamer@gmail.com",className:"footerbar__icon",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:"/images/mail.svg",alt:"email"}))," | last updated January 2020")});t(27),t(28);var h=function(){return n.a.createElement(o.a,null,n.a.createElement(u,null),n.a.createElement("main",null,n.a.createElement(i.c,null,n.a.createElement(i.a,null,n.a.createElement(i.a,{exact:!0,path:"/",component:s}),n.a.createElement(i.a,{path:"/projects/",component:m})))),n.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);c.a.render(n.a.createElement(o.a,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.df401b0f.chunk.js.map