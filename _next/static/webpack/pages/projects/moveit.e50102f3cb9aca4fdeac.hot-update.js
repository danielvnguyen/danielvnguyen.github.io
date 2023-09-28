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
          children: "MoveIt! also allows users to log meals and activities in entries, aiding dietary and fitness monitoring. Users can manage meal and activity details in Settings, including calorie counts for meals, which update automatically during entry creation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_ProjectsStyles__WEBPACK_IMPORTED_MODULE_8__.BlogCard, {
            children: "In the calendar view, you can view your monthly progress, to get an idea on how you\u2019re doing with goal tracking and consistency. Click on any date to review day-specific entries. Explore additional information like the streak counter for extra motivation and a monthly mood pie chart for an overview of your month"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 21
          }, _this)
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
        lineNumber: 74,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: "A feature I'm proud of is the photo gallery, allowing you to add, view, and download photos at their original resolution. It provides a dedicated space for storing gym-specific or workout-related photos, like progress pictures, separate from your phone's photo gallery"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
        row: true,
        nopadding: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.LeftSection, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.Img, {
            src: "/images/moveit_images/moveit_img.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_project_styles__WEBPACK_IMPORTED_MODULE_7__.RightSection, {
          children: "Enjoy the app in your preferred visual style, whether it's a light or dark interface!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "See the GitHub Repository and Google Play Store page here:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_5__.SocialIconsContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_5__.SocialContainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__.SocialIcons, {
            href: "https://github.com/danielvnguyen/MoveIt",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillGithub, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_6__.SocialIcons, {
            href: "https://play.google.com/store/apps/details?id=com.danielvnguyen.moveit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillAndroid, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0cy9tb3ZlaXQuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwic20iLCJVdGlsaXR5TGlzdCIsIkN1c3RvbUxpbmsiLCJUYWdMaXN0IiwiVGFnIiwiTW92ZWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBVDtBQVFBLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsaU9BUWpCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJpQixDQUFuQjtBQWNBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsc0hBQWQ7QUFTQSxJQUFNTyxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUFsQjtBQU9BLElBQU1RLFdBQVcsR0FBR1Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsdUZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ08sS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbEM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RUFBUjtBQVFBLElBQU1XLEtBQUssR0FBR1gscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxJQUFNWSxRQUFRLEdB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O0FBQUE7QUFBQSxlQUZKLGVBR0ksOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQU1JLDhEQUFDLGlGQUFEO0FBQUEsK0JBQ0ksOERBQUMsNEVBQUQ7QUFBQSxrQ0FDSSw4REFBQyx3RUFBRDtBQUFhLGdCQUFJLEVBQUcseUNBQXBCO0FBQUEsbUNBQ0ksOERBQUMsd0RBQUQ7QUFBYyxrQkFBSSxFQUFHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUksOERBQUMsd0VBQUQ7QUFBYSxnQkFBSSxFQUFHLHdFQUFwQjtBQUFBLG1DQUNJLDhEQUFDLHlEQUFEO0FBQWUsa0JBQUksRUFBRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURXO0FBQUEsQ0FBZjs7S0FBTUEsTTtBQXVHTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9tb3ZlaXQuZTUwMTAyZjNjYjlhY2E0ZmRlYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmNvbHVtbi1nYXA6IDRyZW07XHJcbnJvdy1nYXA6IDNyZW07XHJcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuZGlzcGxheTogZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxucGFkZGluZzogMnJlbTtcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzQ5NDg0ODtcclxuICB6LWluZGV4OiAyMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAyMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZGNlM2U3O1xyXG4gIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzouMnJlbVxyXG4gIFxyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW46IDIuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbUxpbmsgPSBzdHlsZWQuYWBcclxuY29sb3I6IGJsYWNrO1xyXG5mb250LXNpemU6IDEuNnJlbTtcclxucGFkZGluZzoxcmVtIDEuNXJlbTtcclxuYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG50cmFuc2l0aW9uOiAwLjVzO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjNTI4QUFFO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnTGlzdCA9IHN0eWxlZC51bGBcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbnBhZGRpbmc6IDJyZW07XHJcbmBcclxuZXhwb3J0IGNvbnN0IFRhZyA9IHN0eWxlZC5saWBcclxuY29sb3I6IGxpZ2h0Ymx1ZTtcclxuZm9udC1zaXplOiAxLjVyZW07XHJcbmAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uU3ViVGV4dCwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZX0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi4vLi4vbGF5b3V0L0xheW91dFN0eWxlc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHtTb2NpYWxDb250YWluZXIsIFNvY2lhbEljb25zQ29udGFpbmVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzXCI7XHJcbmltcG9ydCB7U29jaWFsSWNvbnN9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJTdHlsZXNcIjtcclxuaW1wb3J0IHtBaUZpbGxBbmRyb2lkLCBBaUZpbGxHaXRodWJ9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQge0ltZywgTGVmdFNlY3Rpb24sIFJpZ2h0U2VjdGlvbn0gZnJvbSBcIi4vcHJvamVjdF9zdHlsZXNcIjtcclxuaW1wb3J0IHtCbG9nQ2FyZH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXNcIjtcclxuXHJcbmNvbnN0IE1vdmVpdCA9ICgpID0+IChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+IE1vdmVJdCEgLSBGaXRuZXNzIFRyYWNrZXIgPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+U29mdHdhcmUgVXNlZDogQW5kcm9pZCBTdHVkaW8sIEdvb2dsZSBGaXJlYmFzZTwvU2VjdGlvblN1YlRleHQ+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uU3ViVGV4dD5MYW5ndWFnZXMgVXNlZDogSmF2YTwvU2VjdGlvblN1YlRleHQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIE1vdmVJdCEgaXMgeW91ciBkYWlseSBmaXRuZXNzIHRyYWNrZXIgYXBwLCBkZXNpZ25lZCB0byBpbnNwaXJlIGFuZCBlbXBvd2VyIHVzZXJzIHRvIG1haW50YWluIGEgaGVhbHRoeSBsaWZlc3R5bGUuXHJcbiAgICAgICAgICAgICAgICBPbmNlIGEgZGF5LCBNb3ZlSXQhIHNlbmRzIHlvdSBhIHJlbWluZGVyIHRvIGNyZWF0ZSBhbiBlbnRyeSwgZW5hYmxpbmcgeW91IHRvIHJlZmxlY3Qgb24geW91ciBkYXkuXHJcbiAgICAgICAgICAgICAgICBXaXRoaW4gZWFjaCBlbnRyeSwgeW91IGNhbiBjYXB0dXJlIHlvdXIgbW9vZCwgcmVjb3JkIG1lYWxzLCBsb2cgZGFpbHkgYWN0aXZpdGllcyBvciBleGVyY2lzZXMsXHJcbiAgICAgICAgICAgICAgICBhbmQgZW5oYW5jZSB5b3VyIG1lbW9yaWVzIHdpdGggbm90ZXMgb3IgaW1hZ2VzLiBCeSBmb3N0ZXJpbmcgYSBkYWlseSBoYWJpdCBvZiB0cmFja2luZyBtZWFscywgYWN0aXZpdGllcywgYW5kIGdvYWxzLFxyXG4gICAgICAgICAgICAgICAgTW92ZUl0ISBhc3Npc3RzIHlvdSBpbiBidWlsZGluZyBwYXR0ZXJucyB0aGF0IGxlYWQgdG8gYSBoZWFsdGhpZXIgbGlmZXN0eWxlXHJcbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPkJhY2tncm91bmQ8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICAgICAgICAgICAgTW92ZUl0ISBpcyBteSBmaXJzdCBzaWduaWZpY2FudCBBbmRyb2lkIHByb2plY3QgYW5kIG15IGRlYnV0IGFwcCBvbiB0aGUgR29vZ2xlIFBsYXkgU3RvcmUuXHJcbiAgICAgICAgICAgICAgICBJIGNyZWF0ZWQgaXQgYmVjYXVzZSBJIHdhbnRlZCBhbiBlYXNpZXIgd2F5IHRvIHRyYWNrIG15IGd5bSBwcm9ncmVzcyBhbmQgc3RheSBtb3RpdmF0ZWQgd2hlblxyXG4gICAgICAgICAgICAgICAgSSBzdGFydGVkIHdvcmtpbmcgb3V0LiBJbml0aWFsbHksIEkgd2FzIHVzaW5nIGEgTm90ZXMgYXBwIHRvIGpvdCBkb3duIGV2ZXJ5dGhpbmcgcmVsYXRlZCB0byBteSB3b3Jrb3V0cyxcclxuICAgICAgICAgICAgICAgIHRoZW4gSSB0aG91Z2h0LCBcIldoeSBub3QgbWFrZSBhbiBhcHAgdG8gc2ltcGxpZnkgdGhpcyBwcm9jZXNzP1wiXHJcbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPkZlYXR1cmVzPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgICAgICAgICAgICA8TGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvaW1hZ2VzL21vdmVpdF9pbWFnZXMvbW92ZWl0X2ltZy5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L0xlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBUaGUgc3RhbmRvdXQgZmVhdHVyZSBvZiBNb3ZlSXQhIGlzIGl0cyBjdXN0b21pemFibGUgZGFpbHkgcmVtaW5kZXIgc3lzdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgIEF0IHRoZSBjaG9zZW4gdGltZSBlYWNoIGRheSwgTW92ZUl0ISB3aWxsIG5vdGlmeSB5b3UgdG8gY3JlYXRlIGFuIGVudHJ5IHRvIHJlZmxlY3Qgb24geW91ciBkYWlseSBhY3Rpdml0aWVzIGFuZCBleHBlcmllbmNlcy5cclxuICAgICAgICAgICAgICAgICAgICBUaGlzIGZlYXR1cmUgaXMgZGVzaWduZWQgdG8gbW90aXZhdGUgeW91IHRvIGVzdGFibGlzaCBhbmQgbWFpbnRhaW4gYSBkYWlseSBqb3VybmFsaW5nIGhhYml0XHJcbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVJdCEgYWxzbyBhbGxvd3MgdXNlcnMgdG8gbG9nIG1lYWxzIGFuZCBhY3Rpdml0aWVzIGluIGVudHJpZXMsIGFpZGluZyBkaWV0YXJ5IGFuZCBmaXRuZXNzIG1vbml0b3JpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcnMgY2FuIG1hbmFnZSBtZWFsIGFuZCBhY3Rpdml0eSBkZXRhaWxzIGluIFNldHRpbmdzLCBpbmNsdWRpbmcgY2Fsb3JpZSBjb3VudHMgZm9yIG1lYWxzLCB3aGljaCB1cGRhdGUgYXV0b21hdGljYWxseSBkdXJpbmcgZW50cnkgY3JlYXRpb25cclxuICAgICAgICAgICAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9SaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPFNlY3Rpb24gcm93IG5vcGFkZGluZz5cclxuICAgICAgICAgICAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz1cIi9pbWFnZXMvbW92ZWl0X2ltYWdlcy9tb3ZlaXRfaW1nLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgIDwvTGVmdFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UmlnaHRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gdGhlIGNhbGVuZGFyIHZpZXcsIHlvdSBjYW4gdmlldyB5b3VyIG1vbnRobHkgcHJvZ3Jlc3MsIHRvIGdldCBhbiBpZGVhIG9uIGhvdyB5b3XigJlyZSBkb2luZyB3aXRoIGdvYWwgdHJhY2tpbmcgYW5kIGNvbnNpc3RlbmN5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGljayBvbiBhbnkgZGF0ZSB0byByZXZpZXcgZGF5LXNwZWNpZmljIGVudHJpZXMuIEV4cGxvcmUgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBsaWtlIHRoZSBzdHJlYWsgY291bnRlciBmb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmEgbW90aXZhdGlvbiBhbmQgYSBtb250aGx5IG1vb2QgcGllIGNoYXJ0IGZvciBhbiBvdmVydmlldyBvZiB5b3VyIG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CbG9nQ2FyZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIEEgZmVhdHVyZSBJJ20gcHJvdWQgb2YgaXMgdGhlIHBob3RvIGdhbGxlcnksIGFsbG93aW5nIHlvdSB0byBhZGQsIHZpZXcsIGFuZCBkb3dubG9hZCBwaG90b3MgYXQgdGhlaXIgb3JpZ2luYWwgcmVzb2x1dGlvbi5cclxuICAgICAgICAgICAgICAgICAgICBJdCBwcm92aWRlcyBhIGRlZGljYXRlZCBzcGFjZSBmb3Igc3RvcmluZyBneW0tc3BlY2lmaWMgb3Igd29ya291dC1yZWxhdGVkIHBob3RvcywgbGlrZSBwcm9ncmVzcyBwaWN0dXJlcywgc2VwYXJhdGUgZnJvbSB5b3VyIHBob25lJ3MgcGhvdG8gZ2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxSaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltZyBzcmM9XCIvaW1hZ2VzL21vdmVpdF9pbWFnZXMvbW92ZWl0X2ltZy5qcGdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L1JpZ2h0U2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICAgICAgICAgICAgPExlZnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxSaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgRW5qb3kgdGhlIGFwcCBpbiB5b3VyIHByZWZlcnJlZCB2aXN1YWwgc3R5bGUsIHdoZXRoZXIgaXQncyBhIGxpZ2h0IG9yIGRhcmsgaW50ZXJmYWNlIVxyXG4gICAgICAgICAgICAgICAgPC9SaWdodFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uRGl2aWRlci8+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIFNlZSB0aGUgR2l0SHViIFJlcG9zaXRvcnkgYW5kIEdvb2dsZSBQbGF5IFN0b3JlIHBhZ2UgaGVyZTpcclxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFNvY2lhbENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vTW92ZUl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZSA9IFwiOHJlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmID0gXCJodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmRhbmllbHZuZ3V5ZW4ubW92ZWl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxBbmRyb2lkIHNpemUgPSBcIjhyZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgIDwvU29jaWFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1NvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92ZWl0OyJdLCJzb3VyY2VSb290IjoiIn0=