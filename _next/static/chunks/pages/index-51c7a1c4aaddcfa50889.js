(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,i){"use strict";var n=i(3038),r=i(862);t.default=void 0;var o=r(i(7294)),s=i(1689),a=i(2441),c=i(5749),l={};function d(e,t,i,n){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,i,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+i+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,i=(0,a.useRouter)(),r=i&&i.asPath||"/",u=o.default.useMemo((function(){var t=(0,s.resolveHref)(r,e.href,!0),i=n(t,2),o=i[0],a=i[1];return{href:o,as:e.as?(0,s.resolveHref)(r,e.as):a||o}}),[r,e.href,e.as]),p=u.href,f=u.as,h=e.children,m=e.replace,g=e.shallow,x=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var v=o.Children.only(h),y=v&&"object"===typeof v&&v.ref,b=(0,c.useIntersection)({rootMargin:"200px"}),w=n(b,2),k=w[0],_=w[1],I=o.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);(0,o.useEffect)((function(){var e=_&&t&&(0,s.isLocalURL)(p),n="undefined"!==typeof j?j:i&&i.locale,r=l[p+"%"+f+(n?"%"+n:"")];e&&!r&&d(i,p,f,{locale:n})}),[f,p,_,j,t,i]);var C={ref:I,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,i,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(i))&&(e.preventDefault(),null==a&&(a=n.indexOf("#")<0),t[r?"replace":"push"](i,n,{shallow:o,locale:c,scroll:a}))}(e,i,p,f,m,g,x,j)},onMouseEnter:function(e){(0,s.isLocalURL)(p)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),d(i,p,f,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var S="undefined"!==typeof j?j:i&&i.locale,P=i&&i.isLocaleDomain&&(0,s.getDomainLocale)(f,S,i&&i.locales,i&&i.domainLocales);C.href=P||(0,s.addBasePath)((0,s.addLocale)(f,S,i&&i.defaultLocale))}return o.default.cloneElement(v,C)};t.default=u},5749:function(e,t,i){"use strict";var n=i(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!s,c=(0,r.useRef)(),l=(0,r.useState)(!1),d=n(l,2),u=d[0],p=d[1],f=(0,r.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),i||u||e&&e.tagName&&(c.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=a.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return a.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,o=n.observer,s=n.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[i,t,u]);return(0,r.useEffect)((function(){if(!s&&!u){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[f,u]};var r=i(7294),o=i(8391),s="undefined"!==typeof IntersectionObserver;var a=new Map},2093:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return E}});var n=i(5893),r=(i(7294),i(1975)),o=i(6805),s=function(){return(0,n.jsx)(o.$0,{children:(0,n.jsx)(r.E,{src:"/images/logo.png"})})},a=i(9163),c=a.default.img.withConfig({displayName:"ProjectsStyles__Img",componentId:"l76idc-0"})(["width:100%;height:100%;object-fit:cover;overflow:hidden;border-radius:20px;"]),l=a.default.section.withConfig({displayName:"ProjectsStyles__GridContainer",componentId:"l76idc-1"})(["display:flex;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;align-items:flex-start;column-gap:4rem;row-gap:3rem;@media ","{display:flex;flex-direction:column;padding:2rem;}"],(function(e){return e.theme.breakpoints.md})),d=a.default.div.withConfig({displayName:"ProjectsStyles__BlogCard",componentId:"l76idc-2"})(["border-radius:20px;box-shadow:10px 10px 20px black;text-align:center;width:100%;background:#494848;z-index:20;"]),u=a.default.div.withConfig({displayName:"ProjectsStyles__TitleContent",componentId:"l76idc-3"})(["text-align:center;z-index:20;width:100%;font-weight:bold;"]),p=a.default.h3.withConfig({displayName:"ProjectsStyles__HeaderThree",componentId:"l76idc-4"})(["font-weight:500;letter-spacing:2px;color:white;padding:.5rem 0;font-size:",";"],(function(e){return e.title?"3rem":"2rem"})),f=a.default.hr.withConfig({displayName:"ProjectsStyles__Hr",componentId:"l76idc-5"})(["width:50px;height:3px;margin:20px auto;border:0;background:white;"]),h=(a.default.div.withConfig({displayName:"ProjectsStyles__Intro",componentId:"l76idc-6"})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]),a.default.p.withConfig({displayName:"ProjectsStyles__CardInfo",componentId:"l76idc-7"})(["width:100%;padding:0 20px;color:#ffffff;line-height:24px;text-align:center;@media ","{padding:.2rem}"],(function(e){return e.theme.breakpoints.sm}))),m=a.default.ul.withConfig({displayName:"ProjectsStyles__UtilityList",componentId:"l76idc-8"})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]),g=a.default.a.withConfig({displayName:"ProjectsStyles__CustomLink",componentId:"l76idc-9"})(["color:black;font-size:1.6rem;padding:1rem 1.5rem;background:lightblue;border-radius:15px;transition:0.5s;font-weight:bold;&:hover{background:#528AAE;}"]),x=a.default.ul.withConfig({displayName:"ProjectsStyles__TagList",componentId:"l76idc-10"})(["display:flex;justify-content:space-around;padding:2rem;"]),j=a.default.li.withConfig({displayName:"ProjectsStyles__Tag",componentId:"l76idc-11"})(["color:lightblue;font-size:1.5rem;"]),v=[{projectId:"moveit",title:"MoveIt! - Fitness Tracker",description:"MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle by allowing them to create daily entries, save custom meals and activities, and track their progress easily",image:"/images/moveit_images/moveit_img.jpg",tags:["Firebase","Java"],visit:"projects/moveit",id:0},{projectId:"sketchapp",title:"SketchApp",description:"A sketching/drawing Android app. Complete with animations, sound effects, and many features within an easy-to-use interface",image:"/images/sketchapp_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/SketchApp",id:1},{projectId:"letterrush",title:"Letter Rush",description:"A text user interface game about quickly typing valid words within a certain time limit, developed with inspiration from Word Bomb",image:"/images/letterrush_img.jpg",tags:["C/C++"],visit:"https://github.com/danielvnguyen/LetterRush",id:2}],y=[{projectId:"sfugobbles",title:"SFU Gobbles",description:"An Android game built with two others as a submission for SFU CSSS Fall Hacks 2021 Hackathon, which placed 2nd and won $300. Developed with inspiration from Gobblet Gobblers, SFU Gobbles is a version of tic-tac-toe containing different sized pieces",image:"/images/sfugobbles_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/SFU-CS-Fall-Hacks-2021",id:0},{projectId:"duckhunt",title:"Duck Hunt",description:"An Android app created for SystemHacks 2022 Hackathon with inspiration from Transit. It uses Kotlin and Google Maps APIs to list nearby bodies of water. Each location has a 'duck' button to track your duck sightings, and you can generate a route from your current position",image:"/images/duckhunt_img.jpg",tags:["Kotlin","Google APIs"],visit:"https://devpost.com/software/duck-hunt",id:1},{projectId:"practicalparentapp",title:"Practical Parent App",description:"A school project made in cooperation with 3 others. Designed to assist parents with their children in many ways. Includes a timeout timer, coin flip, task manager, and other activities",image:"/images/parentapp_img.jpg",tags:["Java"],visit:"https://github.com/danielvnguyen/PracticalParentApp",id:2}],b=function(){return(0,n.jsxs)(o.$0,{nopadding:!0,id:"projects",children:[(0,n.jsx)(o.dv,{}),(0,n.jsx)(o.NZ,{main:!0,children:" Personal Projects"}),(0,n.jsx)(l,{children:v.map((function(e){e.projectId;var t=e.id,i=e.image,r=e.title,o=e.description,s=e.tags,a=e.visit;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{src:i}),(0,n.jsxs)(u,{children:[(0,n.jsxs)(p,{title:!0,children:[" ",r]}),(0,n.jsx)(f,{})]}),(0,n.jsx)(h,{children:o}),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)(u,{children:"Technologies:"}),(0,n.jsx)(x,{children:s.map((function(e,t){return(0,n.jsx)(j,{children:e},t)}))})]}),(0,n.jsx)(m,{children:(0,n.jsx)(g,{href:a,children:"See More"})})]},t)}))}),(0,n.jsx)(o.dv,{}),(0,n.jsx)(o.NZ,{main:!0,children:" Academic Projects"}),(0,n.jsx)(l,{children:y.map((function(e){e.projectId;var t=e.id,i=e.image,r=e.title,o=e.description,s=e.tags,a=e.visit;return(0,n.jsxs)(d,{children:[(0,n.jsx)(c,{src:i}),(0,n.jsxs)(u,{children:[(0,n.jsxs)(p,{title:!0,children:[" ",r]}),(0,n.jsx)(f,{})]}),(0,n.jsx)(h,{children:o}),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)(u,{children:"Technologies:"}),(0,n.jsx)(x,{children:s.map((function(e,t){return(0,n.jsx)(j,{children:e},t)}))})]}),(0,n.jsx)(m,{children:(0,n.jsx)(g,{href:a,children:"See More"})})]},t)}))}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})},w=i(1664),k=function(){return(0,n.jsxs)(o.$0,{id:"about",children:[(0,n.jsx)(o.dv,{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(o.NZ,{children:"About Me"}),(0,n.jsxs)(o.r4,{children:["Hi! I'm Daniel, an aspiring software developer from Metro Vancouver. I am currently studying for my degree in Computing Science at Simon Fraser University, and have 8 months experience at WelTel Inc. as a Full Stack Developer.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Here, you can explore a selection of my projects. I am passionate about continuously expanding my knowledge of various technologies and honing my skills with programming tools and languages. As a result, I dedicate extra time and effort to refine and perfect these projects as much as possible.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"If you have any questions please don't hesitate to ",(0,n.jsx)(w.default,{href:"#contact",children:(0,n.jsx)("a",{style:{color:"inherit",textDecoration:"underline"},children:"reach out"})}),"!"]})]})},_=i(2821),I=i(6226),C=i(3833),S=function(){return(0,n.jsx)(C.V6,{id:"contact",children:(0,n.jsxs)(o.$0,{children:[(0,n.jsx)(o.dv,{}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(o.NZ,{children:"Contact Me"}),(0,n.jsxs)(o.r4,{children:["Feel free to send me a message here: ",(0,n.jsx)(w.default,{href:"mailto:danielnguyen604@gmail.com",children:(0,n.jsx)("a",{style:{color:"inherit",textDecoration:"underline"},children:"danielnguyen604@gmail.com"})}),", I'll try to respond as quick as I can!",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"You can also visit my GitHub and LinkedIn:"]}),(0,n.jsx)(C.qr,{children:(0,n.jsxs)(C.Gn,{children:[(0,n.jsx)(I.HE,{href:"https://github.com/danielvnguyen",children:(0,n.jsx)(_.RrF,{size:"8rem"})}),(0,n.jsx)(I.HE,{href:"https://www.linkedin.com/in/daniel-v-nguyen/",children:(0,n.jsx)(_._iD,{size:"8rem"})})]})})]})})},P=i(3689),N=i(4719),A=function(e){var t=e.children;return(0,n.jsxs)(N.W,{children:[(0,n.jsx)(P.Z,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(S,{})]})},E=function(){return(0,n.jsxs)(A,{children:[(0,n.jsx)(o.$0,{children:(0,n.jsx)(s,{})}),(0,n.jsx)(k,{}),(0,n.jsx)(b,{})]})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2093)}])},1664:function(e,t,i){e.exports=i(6071)}},function(e){e.O(0,[617,866,586,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);