self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Particles.js":
/*!*************************************!*\
  !*** ./src/components/Particles.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\components\\Particles.js",
    _this = undefined;

var Particles = function Particles() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Particles, {
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
    lineNumber: 2,
    columnNumber: 5
  }, _this);
};

_c = Particles;
/* harmony default export */ __webpack_exports__["default"] = (Particles);

var _c;

$RefreshReg$(_c, "Particles");

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_About_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About/About */ "./src/components/About/About.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _components_Particles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Particles */ "./src/components/Particles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\pages\\index.js",
    _this = undefined;








var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Particles__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_About__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFydGljbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFydGljbGVzIiwiZnBzTGltaXQiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25Ib3ZlciIsImVuYWJsZSIsIm1vZGUiLCJyZXNpemUiLCJtb2RlcyIsImJ1YmJsZSIsImRpc3RhbmNlIiwiZHVyYXRpb24iLCJvcGFjaXR5Iiwic2l6ZSIsInB1c2giLCJxdWFudGl0eSIsInJlcHVsc2UiLCJwYXJ0aWNsZXMiLCJjb2xvciIsInZhbHVlIiwiY29sbGlzaW9ucyIsIm1vdmUiLCJkaXJlY3Rpb24iLCJvdXRNb2RlIiwicmFuZG9tIiwic3BlZWQiLCJzdHJhaWdodCIsImxpbmtzIiwid2lkdGgiLCJudW1iZXIiLCJkZW5zaXR5IiwidmFsdWVfYXJlYSIsInNoYXBlIiwidHlwZSIsImRldGVjdFJldGluYSIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsc0JBQ2QsOERBQUMsU0FBRDtBQUNJLE1BQUUsRUFBQyxhQURQO0FBRUksV0FBTyxFQUFFO0FBQ0xDLGNBQVEsRUFBRSxFQURMO0FBRUxDLG1CQUFhLEVBQUU7QUFDWEMsY0FBTSxFQUFFO0FBQ0pDLGlCQUFPLEVBQUU7QUFDTEMsa0JBQU0sRUFBRSxJQURIO0FBRUxDLGdCQUFJLEVBQUU7QUFGRCxXQURMO0FBS0pDLGdCQUFNLEVBQUU7QUFMSixTQURHO0FBUVhDLGFBQUssRUFBRTtBQUNIQyxnQkFBTSxFQUFFO0FBQ0pDLG9CQUFRLEVBQUUsR0FETjtBQUVKQyxvQkFBUSxFQUFFLENBRk47QUFHSkMsbUJBQU8sRUFBRSxHQUhMO0FBSUpDLGdCQUFJLEVBQUU7QUFKRixXQURMO0FBT0hDLGNBQUksRUFBRTtBQUNGQyxvQkFBUSxFQUFFO0FBRFIsV0FQSDtBQVVIQyxpQkFBTyxFQUFFO0FBQ0xOLG9CQUFRLEVBQUUsR0FETDtBQUVMQyxvQkFBUSxFQUFFO0FBRkw7QUFWTjtBQVJJLE9BRlY7QUEwQkxNLGVBQVMsRUFBRTtBQUNQQyxhQUFLLEVBQUU7QUFDSEMsZUFBSyxFQUFFO0FBREosU0FEQTtBQUlQQyxrQkFBVSxFQUFFO0FBQ1JmLGdCQUFNLEVBQUU7QUFEQSxTQUpMO0FBT1BnQixZQUFJLEVBQUU7QUFDRkMsbUJBQVMsRUFBRSxNQURUO0FBRUZqQixnQkFBTSxFQUFFLElBRk47QUFHRmtCLGlCQUFPLEVBQUUsUUFIUDtBQUlGQyxnQkFBTSxFQUFFLEtBSk47QUFLRkMsZUFBSyxFQUFFLENBTEw7QUFNRkMsa0JBQVEsRUFBRTtBQU5SLFNBUEM7QUFlUEMsYUFBSyxFQUFFO0FBQ0hULGVBQUssRUFBRSxTQURKO0FBRUhSLGtCQUFRLEVBQUUsR0FGUDtBQUdITCxnQkFBTSxFQUFFLElBSEw7QUFJSE8saUJBQU8sRUFBRSxHQUpOO0FBS0hnQixlQUFLLEVBQUU7QUFMSixTQWZBO0FBc0JQQyxjQUFNLEVBQUU7QUFDSkMsaUJBQU8sRUFBRTtBQUNMekIsa0JBQU0sRUFBRSxJQURIO0FBRUwwQixzQkFBVSxFQUFFO0FBRlAsV0FETDtBQUtKWixlQUFLLEVBQUU7QUFMSCxTQXRCRDtBQTZCUFAsZUFBTyxFQUFFO0FBQ0xPLGVBQUssRUFBRTtBQURGLFNBN0JGO0FBZ0NQYSxhQUFLLEVBQUU7QUFDSEMsY0FBSSxFQUFFO0FBREgsU0FoQ0E7QUFtQ1BwQixZQUFJLEVBQUU7QUFDRlcsZ0JBQU0sRUFBRSxJQUROO0FBRUZMLGVBQUssRUFBRTtBQUZMO0FBbkNDLE9BMUJOO0FBa0VMZSxrQkFBWSxFQUFFO0FBbEVUO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURjO0FBQUEsQ0FBbEI7O0tBQU1sQyxTO0FBeUVOLCtEQUFlQSxTQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFRSw4REFBQyw2REFBRDtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFLSSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFNRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQVhEOztLQUFNQSxJO0FBYU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2VhZjBkMGQ5MTc2ZWU3NDkzNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFBhcnRpY2xlcyA9ICgpID0+IChcclxuICAgIDxQYXJ0aWNsZXNcclxuICAgICAgICBpZD1cInRzcGFydGljbGVzXCJcclxuICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgIGZwc0xpbWl0OiA2MCxcclxuICAgICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ib3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwicmVwdWxzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnViYmxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogNCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIiM1MjhBQUVcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvdXRNb2RlOiBcImJvdW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpbmtzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUyOEFBRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGV0ZWN0UmV0aW5hOiB0cnVlLFxyXG4gICAgICAgIH19Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcnRpY2xlczsiLCJpbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJ0aWNsZXNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFBhcnRpY2xlcy8+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxIZXJvLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxBYm91dC8+XHJcbiAgICAgIDxQcm9qZWN0cy8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==