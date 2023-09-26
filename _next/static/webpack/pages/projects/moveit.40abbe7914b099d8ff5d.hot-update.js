self["webpackHotUpdate_N_E"]("pages/projects/moveit",{

/***/ "./src/components/Particles.js":
/*!*************************************!*\
  !*** ./src/components/Particles.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tsparticles */ "./node_modules/react-tsparticles/index.js");
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\components\\Particles.js",
    _this = undefined;



var BGParticles = function BGParticles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default()), {
    id: "tsparticles",
    options: {
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.5,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 150,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: "#528AAE"
        },
        collisions: {
          enable: true
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false
        },
        links: {
          color: "#528AAE",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: ""
        },
        size: {
          random: true,
          value: 5
        }
      },
      detectRetina: true
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = BGParticles;
/* harmony default export */ __webpack_exports__["default"] = (BGParticles);

var _c;

$RefreshReg$(_c, "BGParticles");

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
/* harmony import */ var _components_Hero_HeroStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Hero/HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* harmony import */ var _components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Footer/FooterStyles */ "./src/components/Footer/FooterStyles.js");
/* harmony import */ var _components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _components_Particles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Particles */ "./src/components/Particles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\pages\\projects\\moveit.js",
    _this = undefined;











var Moveit = function Moveit() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_LayoutStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Particles__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
        children: " MoveIt! - Fitness Tracker "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_HeroStyles__WEBPACK_IMPORTED_MODULE_5__.Img, {
        src: "/images/moveit_images/moveit_img.jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {
        children: "Software Used: Android Studio, Google Firebase"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {
        children: "Languages Used: Java"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle. Once a day, MoveIt! sends you a reminder to create an entry, enabling you to reflect on your day. Within each entry, you can capture your mood, record meals, log daily activities or exercises, and enhance your memories with notes or images. By fostering a daily habit of tracking meals, activities, and goals, MoveIt! assists you in building patterns that lead to a healthier lifestyle."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: "See the GitHub Repository and Google Play Store page here:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_6__.SocialIconsContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_FooterStyles__WEBPACK_IMPORTED_MODULE_6__.SocialContainer, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_7__.SocialIcons, {
            href: "https://github.com/danielvnguyen/MoveIt",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillGithub, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_7__.SocialIcons, {
            href: "https://play.google.com/store/apps/details?id=com.danielvnguyen.moveit",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillAndroid, {
              size: "8rem"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFydGljbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvamVjdHMvbW92ZWl0LmpzIl0sIm5hbWVzIjpbIkJHUGFydGljbGVzIiwiZnBzTGltaXQiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25Ib3ZlciIsImVuYWJsZSIsIm1vZGUiLCJyZXNpemUiLCJtb2RlcyIsImJ1YmJsZSIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJvcGFjaXR5Iiwic2l6ZSIsInB1c2giLCJxdWFudGl0eSIsInJlcHVsc2UiLCJwYXJ0aWNsZXMiLCJjb2xvciIsInZhbHVlIiwiY29sbGlzaW9ucyIsIm1vdmUiLCJkaXJlY3Rpb24iLCJvdXRNb2RlIiwicmFuZG9tIiwic3BlZWQiLCJzdHJhaWdodCIsImxpbmtzIiwid2lkdGgiLCJudW1iZXIiLCJkZW5zaXR5IiwidmFsdWVfYXJlYSIsInNoYXBlIiwidHlwZSIsImRldGVjdFJldGluYSIsIk1vdmVpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLHNCQUNoQiw4REFBQywwREFBRDtBQUNJLE1BQUUsRUFBQyxhQURQO0FBRUksV0FBTyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxFQURMO0FBRUxDLG1CQUFhLEVBQUU7QUFDWEMsY0FBTSxFQUFFO0FBQ0pDLGlCQUFPLEVBQUU7QUFDTEMsa0JBQU0sRUFBRSxJQURIO0FBRUxDLGdCQUFJLEVBQUU7QUFGRCxXQURMO0FBS0pDLGdCQUFNLEVBQUU7QUFMSixTQURHO0FBUVhDLGFBQUssRUFBRTtBQUNIQyxnQkFBTSxFQUFFO0FBQ0pDLG9CQUFRLEVBQUUsR0FETjtBQUVKQyxvQkFBUSxFQUFFLENBRk47QUFHSkMsbUJBQU8sRUFBRSxHQUhMO0FBSUpDLGdCQUFJLEVBQUU7QUFKRixXQURMO0FBT0hDLGNBQUksRUFB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QUFhLGdCQUFJLEVBQUcsd0VBQXBCO0FBQUEsbUNBQ0ksOERBQUMseURBQUQ7QUFBZSxrQkFBSSxFQUFHO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVztBQUFBLENBQWY7O0tBQU1BLE07QUErQk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvbW92ZWl0LjQwYWJiZTc5MTRiMDk5ZDhmZjVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiO1xyXG5cclxuY29uc3QgQkdQYXJ0aWNsZXMgPSAoKSA9PiAoXHJcbiAgICA8UGFydGljbGVzXHJcbiAgICAgICAgaWQ9XCJ0c3BhcnRpY2xlc1wiXHJcbiAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICBmcHNMaW1pdDogNjAsXHJcbiAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uSG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHB1c2g6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjNTI4QUFFXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0TW9kZTogXCJib3VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MjhBQUVcIixcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogNSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRldGVjdFJldGluYTogdHJ1ZSxcclxuICAgICAgICB9fS8+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCR1BhcnRpY2xlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1NlY3Rpb24sIFNlY3Rpb25TdWJUZXh0LCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuLi8uLi9sYXlvdXQvTGF5b3V0U3R5bGVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQge0ltZ30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVyby9IZXJvU3R5bGVzXCI7XHJcbmltcG9ydCB7U29jaWFsQ29udGFpbmVyLCBTb2NpYWxJY29uc0NvbnRhaW5lcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclN0eWxlc1wiO1xyXG5pbXBvcnQge1NvY2lhbEljb25zfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzXCI7XHJcbmltcG9ydCB7QWlGaWxsQW5kcm9pZCwgQWlGaWxsR2l0aHVifSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXJ0aWNsZXNcIjtcclxuXHJcbmNvbnN0IE1vdmVpdCA9ICgpID0+IChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFBhcnRpY2xlcy8+XHJcbiAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGU+IE1vdmVJdCEgLSBGaXRuZXNzIFRyYWNrZXIgPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgIDxJbWcgc3JjPVwiL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnXCIvPlxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+U29mdHdhcmUgVXNlZDogQW5kcm9pZCBTdHVkaW8sIEdvb2dsZSBGaXJlYmFzZTwvU2VjdGlvblN1YlRleHQ+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uU3ViVGV4dD5MYW5ndWFnZXMgVXNlZDogSmF2YTwvU2VjdGlvblN1YlRleHQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5Nb3ZlSXQhIGlzIHlvdXIgZGFpbHkgZml0bmVzcyB0cmFja2VyIGFwcCwgZGVzaWduZWQgdG8gaW5zcGlyZSBhbmQgZW1wb3dlciB1c2VycyB0byBtYWludGFpbiBhIGhlYWx0aHkgbGlmZXN0eWxlLiBPbmNlIGEgZGF5LCBNb3ZlSXQhIHNlbmRzIHlvdSBhIHJlbWluZGVyIHRvIGNyZWF0ZSBhbiBlbnRyeSwgZW5hYmxpbmcgeW91IHRvIHJlZmxlY3Qgb24geW91ciBkYXkuIFdpdGhpbiBlYWNoIGVudHJ5LCB5b3UgY2FuIGNhcHR1cmUgeW91ciBtb29kLCByZWNvcmQgbWVhbHMsIGxvZyBkYWlseSBhY3Rpdml0aWVzIG9yIGV4ZXJjaXNlcywgYW5kIGVuaGFuY2UgeW91ciBtZW1vcmllcyB3aXRoIG5vdGVzIG9yIGltYWdlcy4gQnkgZm9zdGVyaW5nIGEgZGFpbHkgaGFiaXQgb2YgdHJhY2tpbmcgbWVhbHMsIGFjdGl2aXRpZXMsIGFuZCBnb2FscywgTW92ZUl0ISBhc3Npc3RzIHlvdSBpbiBidWlsZGluZyBwYXR0ZXJucyB0aGF0IGxlYWQgdG8gYSBoZWFsdGhpZXIgbGlmZXN0eWxlLjwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgICAgICBTZWUgdGhlIEdpdEh1YiBSZXBvc2l0b3J5IGFuZCBHb29nbGUgUGxheSBTdG9yZSBwYWdlIGhlcmU6XHJcbiAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgIDxTb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL01vdmVJdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemUgPSBcIjhyZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZiA9IFwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5kYW5pZWx2bmd1eWVuLm1vdmVpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplID0gXCI4cmVtXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L1NvY2lhbENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmVpdDsiXSwic291cmNlUm9vdCI6IiJ9