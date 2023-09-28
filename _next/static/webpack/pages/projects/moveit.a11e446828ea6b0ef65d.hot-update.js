self["webpackHotUpdate_N_E"]("pages/projects/moveit",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "CustomLink": function() { return /* binding */ CustomLink; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;border-radius:20px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:flex;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;align-items:flex-start;column-gap:4rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;}"], function (props) {
  return props.theme.breakpoints.md;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:20px;box-shadow:10px 10px 20px black;text-align:center;width:100%;background:#494848;z-index:20;"]);
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;font-weight:bold;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:white;padding:.5rem 0;font-size:", ";"], function (props) {
  return props.title ? '3rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:white;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 20px;color:#ffffff;line-height:24px;text-align:center;@media ", "{padding:.2rem}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var CustomLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__CustomLink",
  componentId: "l76idc-9"
})(["color:black;font-size:1.6rem;padding:1rem 1.5rem;background:lightblue;border-radius:15px;transition:0.5s;font-weight:bold;&:hover{background:#528AAE;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:lightblue;font-size:1.5rem;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/projects/moveit.js":
/*!**************************************!*\
  !*** ./src/pages/projects/moveit.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _layout_LayoutStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/LayoutStyles */ "./src/layout/LayoutStyles.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Footer/FooterStyles */ "./src/components/Footer/FooterStyles.js");
/* harmony import */ var _components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _project_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project_styles */ "./src/pages/projects/project_styles.js");
/* harmony import */ var _components_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Projects/ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\pages\\projects\\moveit.js",
    _this = undefined;











var Moveit = function Moveit() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_LayoutStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        children: " MoveIt! - Fitness Tracker "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
        src: "/images/moveit_images/moveit_img.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {
        children: "Software Used: Android Studio, Google Firebase"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {
        children: "Languages Used: Java"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle. Once a day, MoveIt! sends you a reminder to create an entry, enabling you to reflect on your day. Within each entry, you can capture your mood, record meals, log daily activities or exercises, and enhance your memories with notes or images. By fostering a daily habit of tracking meals, activities, and goals, MoveIt! assists you in building patterns that lead to a healthier lifestyle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        children: "Background"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "MoveIt! is my first significant Android project and my debut app on the Google Play Store. I created it because I wanted an easier way to track my gym progress and stay motivated when I started working out. Initially, I was using a Notes app to jot down everything related to my workouts, then I thought, \"Why not make an app to simplify this process?\""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        children: "Features"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "The standout feature of MoveIt! is its customizable daily reminder system. At the chosen time each day, MoveIt! will notify you to create an entry to reflect on your daily activities and experiences. This feature is designed to motivate you to establish and maintain a daily journaling habit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "MoveIt! also allows users to log meals and activities in entries, aiding dietary and fitness monitoring. Users can manage meal and activity details in Settings, including calorie counts for meals, which update automatically during entry creation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "In the calendar view, you can view your monthly progress, to get an idea on how you\u2019re doing with goal tracking and consistency. Click on any date to review day-specific entries. Explore additional information like the streak counter for extra motivation and a monthly mood pie chart for an overview of your month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "A feature I'm proud of is the photo gallery, allowing you to add, view, and download photos at their original resolution. It provides a dedicated space for storing gym-specific or workout-related photos, like progress pictures, separate from your phone's photo gallery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_8__.BlogCard, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
              src: "/images/moveit_images/moveit_img.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 31
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "Enjoy the app in your preferred visual style, whether it's a light or dark interface!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "See the GitHub Repository and Google Play Store page here:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_5__.SocialIconsContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_5__.SocialContainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__.SocialIcons, {
            href: "https://github.com/danielvnguyen/MoveIt",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillGithub, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__.SocialIcons, {
            href: "https://play.google.com/store/apps/details?id=com.danielvnguyen.moveit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillAndroid, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, _this);
};

_c = Moveit;
/* harmony default export */ __webpack_exports__["default"] = (Moveit);

var _c;

$RefreshReg$(_c, "Moveit");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy9tb3ZlaXQuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwic20iLCJVdGlsaXR5TGlzdCIsIkN1c3RvbUxpbmsiLCJUYWdMaXN0IiwiVGFnIiwiTW92ZWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBVDtBQVFBLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsaU9BUWpCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJpQixDQUFuQjtBQWNBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsc0hBQWQ7QUFTQSxJQUFNTyxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUFsQjtBQU9BLElBQU1RLFdBQVcsR0FBR1Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsdUZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ08sS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbEM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RUFBUjtBQVFBLElBQU1XLEtBQUssR0FBR1gscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxJQUFNWSxRQUFRLEdB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QTtBQUFBO0FBQUEsZUFGSixlQUdJLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFNSSw4REFBQyxpRkFBRDtBQUFBLCtCQUNJLDhEQUFDLDRFQUFEO0FBQUEsa0NBQ0ksOERBQUMsd0VBQUQ7QUFBYSxnQkFBSSxFQUFHLHlDQUFwQjtBQUFBLG1DQUNJLDhEQUFDLHdEQUFEO0FBQWMsa0JBQUksRUFBRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUlJLDhEQUFDLHdFQUFEO0FBQWEsZ0JBQUksRUFBRyx3RUFBcEI7QUFBQSxtQ0FDSSw4REFBQyx5REFBRDtBQUFlLGtCQUFJLEVBQUc7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVztBQUFBLENBQWY7O0tBQU1BLE07QUFxR04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvbW92ZWl0LmExMWU0NDY4MjhlYTZiMGVmNjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmc6IDNyZW07XHJcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5jb2x1bW4tZ2FwOiA0cmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbnBhZGRpbmc6IDJyZW07XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM0OTQ4NDg7XHJcbiAgei1pbmRleDogMjA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRpdGxlID8gJzNyZW0nIDogJzJyZW0nfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDNweDtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2RjZTNlNztcclxuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6LjJyZW1cclxuICBcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFV0aWxpdHlMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAyLjVyZW0gMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21MaW5rID0gc3R5bGVkLmFgXHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1zaXplOiAxLjZyZW07XHJcbnBhZGRpbmc6MXJlbSAxLjVyZW07XHJcbmJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxudHJhbnNpdGlvbjogMC41cztcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiY6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogIzUyOEFBRTtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbmNvbG9yOiBsaWdodGJsdWU7XHJcbmZvbnQtc2l6ZTogMS41cmVtO1xyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtTZWN0aW9uLCBTZWN0aW9uRGl2aWRlciwgU2VjdGlvblN1YlRleHQsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGV9IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4uLy4uL2xheW91dC9MYXlvdXRTdHlsZXNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7U29jaWFsQ29udGFpbmVyLCBTb2NpYWxJY29uc0NvbnRhaW5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclN0eWxlc1wiO1xyXG5pbXBvcnQge1NvY2lhbEljb25zfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzXCI7XHJcbmltcG9ydCB7QWlGaWxsQW5kcm9pZCwgQWlGaWxsR2l0aHVifSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHtJbWcsIExlZnRTZWN0aW9uLCBSaWdodFNlY3Rpb259IGZyb20gXCIuL3Byb2plY3Rfc3R5bGVzXCI7XHJcbmltcG9ydCB7QmxvZ0NhcmR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzXCI7XHJcblxyXG5jb25zdCBNb3ZlaXQgPSAoKSA9PiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPiBNb3ZlSXQhIC0gRml0bmVzcyBUcmFja2VyIDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvbW92ZWl0X2ltYWdlcy9tb3ZlaXRfaW1nLmpwZ1wiLz5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPFNlY3Rpb25TdWJUZXh0PlNvZnR3YXJlIFVzZWQ6IEFuZHJvaWQgU3R1ZGlvLCBHb29nbGUgRmlyZWJhc2U8L1NlY3Rpb25TdWJUZXh0PlxyXG4gICAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+TGFuZ3VhZ2VzIFVzZWQ6IEphdmE8L1NlY3Rpb25TdWJUZXh0PlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgICAgICBNb3ZlSXQhIGlzIHlvdXIgZGFpbHkgZml0bmVzcyB0cmFja2VyIGFwcCwgZGVzaWduZWQgdG8gaW5zcGlyZSBhbmQgZW1wb3dlciB1c2VycyB0byBtYWludGFpbiBhIGhlYWx0aHkgbGlmZXN0eWxlLlxyXG4gICAgICAgICAgICAgICAgT25jZSBhIGRheSwgTW92ZUl0ISBzZW5kcyB5b3UgYSByZW1pbmRlciB0byBjcmVhdGUgYW4gZW50cnksIGVuYWJsaW5nIHlvdSB0byByZWZsZWN0IG9uIHlvdXIgZGF5LlxyXG4gICAgICAgICAgICAgICAgV2l0aGluIGVhY2ggZW50cnksIHlvdSBjYW4gY2FwdHVyZSB5b3VyIG1vb2QsIHJlY29yZCBtZWFscywgbG9nIGRhaWx5IGFjdGl2aXRpZXMgb3IgZXhlcmNpc2VzLFxyXG4gICAgICAgICAgICAgICAgYW5kIGVuaGFuY2UgeW91ciBtZW1vcmllcyB3aXRoIG5vdGVzIG9yIGltYWdlcy4gQnkgZm9zdGVyaW5nIGEgZGFpbHkgaGFiaXQgb2YgdHJhY2tpbmcgbWVhbHMsIGFjdGl2aXRpZXMsIGFuZCBnb2FscyxcclxuICAgICAgICAgICAgICAgIE1vdmVJdCEgYXNzaXN0cyB5b3UgaW4gYnVpbGRpbmcgcGF0dGVybnMgdGhhdCBsZWFkIHRvIGEgaGVhbHRoaWVyIGxpZmVzdHlsZVxyXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5CYWNrZ3JvdW5kPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIE1vdmVJdCEgaXMgbXkgZmlyc3Qgc2lnbmlmaWNhbnQgQW5kcm9pZCBwcm9qZWN0IGFuZCBteSBkZWJ1dCBhcHAgb24gdGhlIEdvb2dsZSBQbGF5IFN0b3JlLlxyXG4gICAgICAgICAgICAgICAgSSBjcmVhdGVkIGl0IGJlY2F1c2UgSSB3YW50ZWQgYW4gZWFzaWVyIHdheSB0byB0cmFjayBteSBneW0gcHJvZ3Jlc3MgYW5kIHN0YXkgbW90aXZhdGVkIHdoZW5cclxuICAgICAgICAgICAgICAgIEkgc3RhcnRlZCB3b3JraW5nIG91dC4gSW5pdGlhbGx5LCBJIHdhcyB1c2luZyBhIE5vdGVzIGFwcCB0byBqb3QgZG93biBldmVyeXRoaW5nIHJlbGF0ZWQgdG8gbXkgd29ya291dHMsXHJcbiAgICAgICAgICAgICAgICB0aGVuIEkgdGhvdWdodCwgXCJXaHkgbm90IG1ha2UgYW4gYXBwIHRvIHNpbXBsaWZ5IHRoaXMgcHJvY2Vzcz9cIlxyXG4gICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZT5GZWF0dXJlczwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxSaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhlIHN0YW5kb3V0IGZlYXR1cmUgb2YgTW92ZUl0ISBpcyBpdHMgY3VzdG9taXphYmxlIGRhaWx5IHJlbWluZGVyIHN5c3RlbS5cclxuICAgICAgICAgICAgICAgICAgICBBdCB0aGUgY2hvc2VuIHRpbWUgZWFjaCBkYXksIE1vdmVJdCEgd2lsbCBub3RpZnkgeW91IHRvIGNyZWF0ZSBhbiBlbnRyeSB0byByZWZsZWN0IG9uIHlvdXIgZGFpbHkgYWN0aXZpdGllcyBhbmQgZXhwZXJpZW5jZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcyBmZWF0dXJlIGlzIGRlc2lnbmVkIHRvIG1vdGl2YXRlIHlvdSB0byBlc3RhYmxpc2ggYW5kIG1haW50YWluIGEgZGFpbHkgam91cm5hbGluZyBoYWJpdFxyXG4gICAgICAgICAgICAgICAgPC9SaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvbW92ZWl0X2ltYWdlcy9tb3ZlaXRfaW1nLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVJdCEgYWxzbyBhbGxvd3MgdXNlcnMgdG8gbG9nIG1lYWxzIGFuZCBhY3Rpdml0aWVzIGluIGVudHJpZXMsIGFpZGluZyBkaWV0YXJ5IGFuZCBmaXRuZXNzIG1vbml0b3JpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIG1hbmFnZSBtZWFsIGFuZCBhY3Rpdml0eSBkZXRhaWxzIGluIFNldHRpbmdzLCBpbmNsdWRpbmcgY2Fsb3JpZSBjb3VudHMgZm9yIG1lYWxzLCB3aGljaCB1cGRhdGUgYXV0b21hdGljYWxseSBkdXJpbmcgZW50cnkgY3JlYXRpb25cclxuICAgICAgICAgICAgICAgIDwvUmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICA8TGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvaW1hZ2VzL21vdmVpdF9pbWFnZXMvbW92ZWl0X2ltZy5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0xlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBJbiB0aGUgY2FsZW5kYXIgdmlldywgeW91IGNhbiB2aWV3IHlvdXIgbW9udGhseSBwcm9ncmVzcywgdG8gZ2V0IGFuIGlkZWEgb24gaG93IHlvdeKAmXJlIGRvaW5nIHdpdGggZ29hbCB0cmFja2luZyBhbmQgY29uc2lzdGVuY3kuXHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgb24gYW55IGRhdGUgdG8gcmV2aWV3IGRheS1zcGVjaWZpYyBlbnRyaWVzLiBFeHBsb3JlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbGlrZSB0aGUgc3RyZWFrIGNvdW50ZXIgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmEgbW90aXZhdGlvbiBhbmQgYSBtb250aGx5IG1vb2QgcGllIGNoYXJ0IGZvciBhbiBvdmVydmlldyBvZiB5b3VyIG1vbnRoXHJcbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxSaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgQSBmZWF0dXJlIEknbSBwcm91ZCBvZiBpcyB0aGUgcGhvdG8gZ2FsbGVyeSwgYWxsb3dpbmcgeW91IHRvIGFkZCwgdmlldywgYW5kIGRvd25sb2FkIHBob3RvcyBhdCB0aGVpciBvcmlnaW5hbCByZXNvbHV0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIEl0IHByb3ZpZGVzIGEgZGVkaWNhdGVkIHNwYWNlIGZvciBzdG9yaW5nIGd5bS1zcGVjaWZpYyBvciB3b3Jrb3V0LXJlbGF0ZWQgcGhvdG9zLCBsaWtlIHByb2dyZXNzIHBpY3R1cmVzLCBzZXBhcmF0ZSBmcm9tIHlvdXIgcGhvbmUncyBwaG90byBnYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nQ2FyZD48SW1nIHNyYz1cIi9pbWFnZXMvbW92ZWl0X2ltYWdlcy9tb3ZlaXRfaW1nLmpwZ1wiLz48L0Jsb2dDYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIEVuam95IHRoZSBhcHAgaW4geW91ciBwcmVmZXJyZWQgdmlzdWFsIHN0eWxlLCB3aGV0aGVyIGl0J3MgYSBsaWdodCBvciBkYXJrIGludGVyZmFjZSFcclxuICAgICAgICAgICAgICAgIDwvUmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvbkRpdmlkZXIvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgICAgICBTZWUgdGhlIEdpdEh1YiBSZXBvc2l0b3J5IGFuZCBHb29nbGUgUGxheSBTdG9yZSBwYWdlIGhlcmU6XHJcbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgIDxTb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL01vdmVJdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemUgPSBcIjhyZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZiA9IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5kYW5pZWx2bmd1eWVuLm1vdmVpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplID0gXCI4cmVtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L1NvY2lhbENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVpdDsiXSwic291cmNlUm9vdCI6IiJ9