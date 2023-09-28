(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var s=r(n(7294)),a=n(1689),o=n(2441),c=n(5749),l={};function d(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.asPath||"/",u=s.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),s=n[0],o=n[1];return{href:s,as:e.as?(0,a.resolveHref)(r,e.as):o||s}}),[r,e.href,e.as]),h=u.href,p=u.as,f=e.children,g=e.replace,m=e.shallow,j=e.scroll,v=e.locale;"string"===typeof f&&(f=s.default.createElement("a",null,f));var x=s.Children.only(f),b=x&&"object"===typeof x&&x.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),k=i(y,2),w=k[0],I=k[1],_=s.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,s.useEffect)((function(){var e=I&&t&&(0,a.isLocalURL)(h),i="undefined"!==typeof v?v:n&&n.locale,r=l[h+"%"+p+(i?"%"+i:"")];e&&!r&&d(n,h,p,{locale:i})}),[p,h,I,v,t,n]);var E={ref:_,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:s,locale:c,scroll:o}))}(e,n,h,p,g,m,j,v)},onMouseEnter:function(e){(0,a.isLocalURL)(h)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(n,h,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var S="undefined"!==typeof v?v:n&&n.locale,M=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,S,n&&n.locales,n&&n.domainLocales);E.href=M||(0,a.addBasePath)((0,a.addLocale)(p,S,n&&n.defaultLocale))}return s.default.cloneElement(x,E)};t.default=u},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,c=(0,r.useRef)(),l=(0,r.useState)(!1),d=i(l,2),u=d[0],h=d[1],p=(0,r.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,s=i.observer,a=i.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),o.delete(r))}}(e,(function(e){return e&&h(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!a&&!u){var e=(0,s.requestIdleCallback)((function(){return h(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[u]),[p,u]};var r=n(7294),s=n(8391),a="undefined"!==typeof IntersectionObserver;var o=new Map},7906:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var i=n(5893),r=(n(7294),n(9163).default.img.withConfig({displayName:"HeroStyles__Img",componentId:"pbjia3-0"})(["width:80%;height:80%;"])),s=n(6805),a=function(){return(0,i.jsx)(s.$0,{children:(0,i.jsx)(r,{src:"/images/logo.png"})})},o=n(3605),c=[{projectId:"moveit",title:"MoveIt! - Fitness Tracker",description:"MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle by allowing them to create daily entries, save custom meals and activities, and track their progress easily",image:"/images/moveit_images/moveit_img.jpg",tags:["Firebase","Java"],visit:"projects/moveit",id:0},{projectId:"sketchapp",title:"SketchApp",description:"A sketching/drawing Android app. Complete with animations, sound effects, and many features within an easy-to-use interface",image:"/images/sketchapp_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/SketchApp",id:1},{projectId:"letterrush",title:"Letter Rush",description:"A text user interface game about quickly typing valid words within a certain time limit, developed with inspiration from Word Bomb",image:"/images/letterrush_img.jpg",tags:["C/C++"],visit:"https://github.com/danielvnguyen/LetterRush",id:2}],l=[{projectId:"sfugobbles",title:"SFU Gobbles",description:"An Android game built with two others as a submission for SFU CSSS Fall Hacks 2021 Hackathon, which placed 2nd and won $300. Developed with inspiration from Gobblet Gobblers, SFU Gobbles is a version of tic-tac-toe containing different sized pieces",image:"/images/sfugobbles_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/SFU-CS-Fall-Hacks-2021",id:0},{projectId:"duckhunt",title:"Duck Hunt",description:"An Android app created for SystemHacks 2022 Hackathon with inspiration from Transit. It uses Kotlin and Google Maps APIs to list nearby bodies of water. Each location has a 'duck' button to track your duck sightings, and you can generate a route from your current position",image:"/images/duckhunt_img.jpg",tags:["Kotlin","Google APIs"],visit:"https://devpost.com/software/duck-hunt",id:1},{projectId:"practicalparentapp",title:"Practical Parent App",description:"A school project made in cooperation with 3 others. Designed to assist parents with their children in many ways. Includes a timeout timer, coin flip, task manager, and other activities",image:"/images/parentapp_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/PracticalParentApp",id:2}],d=function(){return(0,i.jsxs)(s.$0,{nopadding:!0,id:"projects",children:[(0,i.jsx)(s.dv,{}),(0,i.jsx)(s.NZ,{main:!0,children:" Personal Projects"}),(0,i.jsx)(o.T5,{children:c.map((function(e){e.projectId;var t=e.id,n=e.image,r=e.title,s=e.description,a=e.tags,c=e.visit;return(0,i.jsxs)(o.$h,{children:[(0,i.jsx)(o.Ei,{src:n}),(0,i.jsxs)(o.oY,{children:[(0,i.jsxs)(o.Ef,{title:!0,children:[" ",r]}),(0,i.jsx)(o.Hr,{})]}),(0,i.jsx)(o.tg,{children:s}),(0,i.jsxs)("div",{children:[(0,i.jsx)("br",{}),(0,i.jsx)(o.oY,{children:"Technologies:"}),(0,i.jsx)(o.PS,{children:a.map((function(e,t){return(0,i.jsx)(o.Vp,{children:e},t)}))})]}),(0,i.jsx)(o.rv,{children:(0,i.jsx)(o.xb,{href:c,children:"See More"})})]},t)}))}),(0,i.jsx)(s.dv,{}),(0,i.jsx)(s.NZ,{main:!0,children:" Academic Projects"}),(0,i.jsx)(o.T5,{children:l.map((function(e){e.projectId;var t=e.id,n=e.image,r=e.title,s=e.description,a=e.tags,c=e.visit;return(0,i.jsxs)(o.$h,{children:[(0,i.jsx)(o.Ei,{src:n}),(0,i.jsxs)(o.oY,{children:[(0,i.jsxs)(o.Ef,{title:!0,children:[" ",r]}),(0,i.jsx)(o.Hr,{})]}),(0,i.jsx)(o.tg,{children:s}),(0,i.jsxs)("div",{children:[(0,i.jsx)("br",{}),(0,i.jsx)(o.oY,{children:"Technologies:"}),(0,i.jsx)(o.PS,{children:a.map((function(e,t){return(0,i.jsx)(o.Vp,{children:e},t)}))})]}),(0,i.jsx)(o.rv,{children:(0,i.jsx)(o.xb,{href:c,children:"See More"})})]},t)}))}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},u=n(1664),h=function(){return(0,i.jsxs)(s.$0,{id:"about",children:[(0,i.jsx)(s.dv,{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.NZ,{children:"About Me"}),(0,i.jsxs)(s.r4,{children:["Hi! I'm Daniel, an aspiring software developer from Metro Vancouver. I am currently studying for my degree in Computing Science at Simon Fraser University, and have 8 months experience at WelTel Inc. as a Full Stack Developer.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Here, you can explore a selection of my projects. I am passionate about continuously expanding my knowledge of various technologies and honing my skills with programming tools and languages. As a result, I dedicate extra time and effort to refine and perfect these projects as much as possible.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If you have any questions please don't hesitate to ",(0,i.jsx)(u.default,{href:"#contact",children:(0,i.jsx)("a",{style:{color:"inherit",textDecoration:"underline"},children:"reach out"})}),"!"]})]})},p=n(2821),f=n(6226),g=n(3833),m=function(){return(0,i.jsx)(g.V6,{id:"contact",children:(0,i.jsxs)(s.$0,{children:[(0,i.jsx)(s.dv,{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.NZ,{children:"Contact Me"}),(0,i.jsxs)(s.r4,{children:["Feel free to send me a message here: ",(0,i.jsx)(u.default,{href:"mailto:danielnguyen604@gmail.com",children:(0,i.jsx)("a",{style:{color:"inherit",textDecoration:"underline"},children:"danielnguyen604@gmail.com"})}),", I'll try to respond as quick as I can!",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"You can also visit my GitHub and LinkedIn:"]}),(0,i.jsx)(g.qr,{children:(0,i.jsxs)(g.Gn,{children:[(0,i.jsx)(f.HE,{href:"https://github.com/danielvnguyen",children:(0,i.jsx)(p.RrF,{size:"8rem"})}),(0,i.jsx)(f.HE,{href:"https://www.linkedin.com/in/daniel-v-nguyen/",children:(0,i.jsx)(p._iD,{size:"8rem"})})]})})]})})},j=n(3689),v=n(4719),x=function(e){var t=e.children;return(0,i.jsxs)(v.W,{children:[(0,i.jsx)(j.Z,{}),(0,i.jsx)("main",{children:t}),(0,i.jsx)(m,{})]})},b=function(){return(0,i.jsxs)(x,{children:[(0,i.jsx)(s.$0,{children:(0,i.jsx)(a,{})}),(0,i.jsx)(h,{}),(0,i.jsx)(d,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7906)}])},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[617,866,300,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);