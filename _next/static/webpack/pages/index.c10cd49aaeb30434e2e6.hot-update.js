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
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tsparticles */ "./node_modules/react-tsparticles/index.js");
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\pages\\index.js",
    _this = undefined;








var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_tsparticles__WEBPACK_IMPORTED_MODULE_6___default()), {
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
            opacity: 0.25,
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
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_About__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkhvdmVyIiwiZW5hYmxlIiwibW9kZSIsInJlc2l6ZSIsIm1vZGVzIiwiYnViYmxlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzaXplIiwicHVzaCIsInF1YW50aXR5IiwicmVwdWxzZSIsInBhcnRpY2xlcyIsImNvbG9yIiwidmFsdWUiLCJjb2xsaXNpb25zIiwibW92ZSIsImRpcmVjdGlvbiIsIm91dE1vZGUiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwibGlua3MiLCJ3aWR0aCIsIm51bWJlciIsImRlbnNpdHkiLCJ2YWx1ZV9hcmVhIiwiZGV0ZWN0UmV0aW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUNJLFFBQUUsRUFBQyxhQURQO0FBRUksYUFBTyxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsRUFETDtBQUVMQyxxQkFBYSxFQUFFO0FBQ1hDLGdCQUFNLEVBQUU7QUFDSkMsbUJBQU8sRUFBRTtBQUNMQyxvQkFBTSxFQUFFLElBREg7QUFFTEMsa0JBQUksRUFBRTtBQUZELGFBREw7QUFLSkMsa0JBQU0sRUFBRTtBQUxKLFdBREc7QUFRWEMsZUFBSyxFQUFFO0FBQ0hDLGtCQUFNLEVBQUU7QUFDSkMsc0JBQVEsRUFBRSxHQUROO0FBRUpDLHNCQUFRLEVBQUUsQ0FGTjtBQUdKQyxxQkFBTyxFQUFFLEdBSEw7QUFJSkMsa0JBQUksRUFBRTtBQUpGLGFBREw7QUFPSEMsZ0JBQUksRUFBRTtBQUNGQyxzQkFBUSxFQUFFO0FBRFIsYUFQSDtBQVVIQyxtQkFBTyxFQUFFO0FBQ0xOLHNCQUFRLEVBQUUsR0FETDtBQUVMQyxzQkFBUSxFQUFFO0FBRkw7QUFWTjtBQVJJLFNBRlY7QUEwQkxNLGlCQUFTLEVBQUU7QUFDUEMsZUFBSyxFQUFFO0FBQ0hDLGlCQUFLLEVBQUU7QUFESixXQURBO0FBSVBDLG9CQUFVLEVBQUU7QUFDUmYsa0JBQU0sRUFBRTtBQURBLFdBSkw7QUFPUGdCLGNBQUksRUFBRTtBQUNGQyxxQkFBUyxFQUFFLE1BRFQ7QUFFRmpCLGtCQUFNLEVBQUUsSUFGTjtBQUdGa0IsbUJBQU8sRUFBRSxRQUhQO0FBSUZDLGtCQUFNLEVBQUUsS0FKTjtBQUtGQyxpQkFBSyxFQUFFLENBTEw7QUFNRkMsb0JBQVEsRUFBRTtBQU5SLFdBUEM7QUFlUEMsZUFBSyxFQUFFO0FBQ0hULGlCQUFLLEVBQUUsU0FESjtBQUVIUixvQkFBUSxFQUFFLEdBRlA7QUFHSEwsa0JBQU0sRUFBRSxJQUhMO0FBSUhPLG1CQUFPLEVBQUUsSUFKTjtBQUtIZ0IsaUJBQUssRUFBRTtBQUxKLFdBZkE7QUFzQlBDLGdCQUFNLEVBQUU7QUFDSkMsbUJBQU8sRUFBRTtBQUNMekIsb0JBQU0sRUFBRSxJQURIO0FBRUwwQix3QkFBVSxFQUFFO0FBRlAsYUFETDtBQUtKWixpQkFBSyxFQUFFO0FBTEgsV0F0QkQ7QUE2QlBQLGlCQUFPLEVBQUU7QUFDTE8saUJBQUssRUFBRTtBQURGLFdBN0JGO0FBZ0NQTixjQUFJLEVBQUU7QUFDRlcsa0JBQU0sRUFBRSxJQUROO0FBRUZMLGlCQUFLLEVBQUU7QUFGTDtBQWhDQyxTQTFCTjtBQStETGEsb0JBQVksRUFBRTtBQS9EVDtBQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQW9FRSw4REFBQyw2REFBRDtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcEVGLGVBdUVJLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2RUosZUF3RUUsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRFRCxDQTdFRDs7S0FBTWhDLEk7QUErRU4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzEwY2Q0OWFhZWIzMDQzNGUyZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby9IZXJvJztcclxuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMnO1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BYm91dC9BYm91dCc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgICA8UGFydGljbGVzXHJcbiAgICAgICAgICAgIGlkPVwidHNwYXJ0aWNsZXNcIlxyXG4gICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICBmcHNMaW1pdDogNjAsXHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwicmVwdWxzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdXNoOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFudGl0eTogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwdWxzZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIjNTI4QUFFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRNb2RlOiBcImJvdW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzUyOEFBRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb206IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0ZWN0UmV0aW5hOiB0cnVlLFxyXG4gICAgICAgICAgICB9fS8+XHJcbiAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgIDxIZXJvLz5cclxuICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxBYm91dC8+XHJcbiAgICAgIDxQcm9qZWN0cy8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==