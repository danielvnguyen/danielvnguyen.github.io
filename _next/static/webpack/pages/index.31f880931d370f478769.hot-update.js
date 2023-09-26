self["webpackHotUpdate_N_E"]("pages/index",{

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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\pages\\index.js",
    _this = undefined;







var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Particles, {
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
            value: "#ffffff"
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
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.15,
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
            type: "circle"
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
      lineNumber: 10,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_About__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkhvdmVyIiwiZW5hYmxlIiwibW9kZSIsInJlc2l6ZSIsIm1vZGVzIiwiYnViYmxlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzaXplIiwicHVzaCIsInF1YW50aXR5IiwicmVwdWxzZSIsInBhcnRpY2xlcyIsImNvbG9yIiwidmFsdWUiLCJjb2xsaXNpb25zIiwibW92ZSIsImRpcmVjdGlvbiIsIm91dE1vZGUiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwibGlua3MiLCJ3aWR0aCIsIm51bWJlciIsImRlbnNpdHkiLCJ2YWx1ZV9hcmVhIiwic2hhcGUiLCJ0eXBlIiwiZGV0ZWN0UmV0aW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixzQkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNJLDhEQUFDLFNBQUQ7QUFDSSxRQUFFLEVBQUMsYUFEUDtBQUVJLGFBQU8sRUFBRTtBQUNMQyxnQkFBUSxFQUFFLEVBREw7QUFFTEMscUJBQWEsRUFBRTtBQUNYQyxnQkFBTSxFQUFFO0FBQ0pDLG1CQUFPLEVBQUU7QUFDTEMsb0JBQU0sRUFBRSxJQURIO0FBRUxDLGtCQUFJLEVBQUU7QUFGRCxhQURMO0FBS0pDLGtCQUFNLEVBQUU7QUFMSixXQURHO0FBUVhDLGVBQUssRUFBRTtBQUNIQyxrQkFBTSxFQUFFO0FBQ0pDLHNCQUFRLEVBQUUsR0FETjtBQUVKQyxzQkFBUSxFQUFFLENBRk47QUFHSkMscUJBQU8sRUFBRSxHQUhMO0FBSUpDLGtCQUFJLEVBQUU7QUFKRixhQURMO0FBT0hDLGdCQUFJLEVBQUU7QUFDRkMsc0JBQVEsRUFBRTtBQURSLGFBUEg7QUFVSEMsbUJBQU8sRUFBRTtBQUNMTixzQkFBUSxFQUFFLEdBREw7QUFFTEMsc0JBQVEsRUFBRTtBQUZMO0FBVk47QUFSSSxTQUZWO0FBMEJMTSxpQkFBUyxFQUFFO0FBQ1BDLGVBQUssRUFBRTtBQUNIQyxpQkFBSyxFQUFFO0FBREosV0FEQTtBQUlQQyxvQkFBVSxFQUFFO0FBQ1JmLGtCQUFNLEVBQUU7QUFEQSxXQUpMO0FBT1BnQixjQUFJLEVBQUU7QUFDRkMscUJBQVMsRUFBRSxNQURUO0FBRUZqQixrQkFBTSxFQUFFLElBRk47QUFHRmtCLG1CQUFPLEVBQUUsUUFIUDtBQUlGQyxrQkFBTSxFQUFFLEtBSk47QUFLRkMsaUJBQUssRUFBRSxDQUxMO0FBTUZDLG9CQUFRLEVBQUU7QUFOUixXQVBDO0FBZVBDLGVBQUssRUFBRTtBQUNIVCxpQkFBSyxFQUFFLFNBREo7QUFFSFIsb0JBQVEsRUFBRSxHQUZQO0FBR0hMLGtCQUFNLEVBQUUsSUFITDtBQUlITyxtQkFBTyxFQUFFLElBSk47QUFLSGdCLGlCQUFLLEVBQUU7QUFMSixXQWZBO0FBc0JQQyxnQkFBTSxFQUFFO0FBQ0pDLG1CQUFPLEVBQUU7QUFDTHpCLG9CQUFNLEVBQUUsSUFESDtBQUVMMEIsd0JBQVUsRUFBRTtBQUZQLGFBREw7QUFLSlosaUJBQUssRUFBRTtBQUxILFdBdEJEO0FBNkJQUCxpQkFBTyxFQUFFO0FBQ0xPLGlCQUFLLEVBQUU7QUFERixXQTdCRjtBQWdDUGEsZUFBSyxFQUFFO0FBQ0hDLGdCQUFJLEVBQUU7QUFESCxXQWhDQTtBQW1DUHBCLGNBQUksRUFBRTtBQUNGVyxrQkFBTSxFQUFFLElBRE47QUFFRkwsaUJBQUssRUFBRTtBQUZMO0FBbkNDLFNBMUJOO0FBa0VMZSxvQkFBWSxFQUFFO0FBbEVUO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBdUVFLDhEQUFDLDZEQUFEO0FBQUEsNkJBQ0UsOERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2RUYsZUEwRUksOERBQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFFSixlQTJFRSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0VELENBaEZEOztLQUFNbEMsSTtBQWtGTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMWY4ODA5MzFkMzcwZjQ3ODc2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvL0hlcm8nO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cyc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0L0Fib3V0JztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vbGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxQYXJ0aWNsZXNcclxuICAgICAgICAgICAgaWQ9XCJ0c3BhcnRpY2xlc1wiXHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgIGZwc0xpbWl0OiA2MCxcclxuICAgICAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ib3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1YmJsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogNDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1c2g6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiA0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dE1vZGU6IFwiYm91bmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0ZWN0UmV0aW5hOiB0cnVlLFxyXG4gICAgICAgICAgICB9fS8+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxIZXJvLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxBYm91dC8+XHJcbiAgICAgIDxQcm9qZWN0cy8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==