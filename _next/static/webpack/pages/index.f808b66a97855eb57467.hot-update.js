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
      lineNumber: 11,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About_About__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJmcHNMaW1pdCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkhvdmVyIiwiZW5hYmxlIiwibW9kZSIsInJlc2l6ZSIsIm1vZGVzIiwiYnViYmxlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzaXplIiwicHVzaCIsInF1YW50aXR5IiwicmVwdWxzZSIsInBhcnRpY2xlcyIsImNvbG9yIiwidmFsdWUiLCJjb2xsaXNpb25zIiwibW92ZSIsImRpcmVjdGlvbiIsIm91dE1vZGUiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwibGlua3MiLCJ3aWR0aCIsIm51bWJlciIsImRlbnNpdHkiLCJ2YWx1ZV9hcmVhIiwic2hhcGUiLCJ0eXBlIiwiZGV0ZWN0UmV0aW5hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakIsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDSSw4REFBQywwREFBRDtBQUNJLFFBQUUsRUFBQyxhQURQO0FBRUksYUFBTyxFQUFFO0FBQ0xDLGdCQUFRLEVBQUUsRUFETDtBQUVMQyxxQkFBYSxFQUFFO0FBQ1hDLGdCQUFNLEVBQUU7QUFDSkMsbUJBQU8sRUFBRTtBQUNMQyxvQkFBTSxFQUFFLElBREg7QUFFTEMsa0JBQUksRUFBRTtBQUZELGFBREw7QUFLSkMsa0JBQU0sRUFBRTtBQUxKLFdBREc7QUFRWEMsZUFBSyxFQUFFO0FBQ0hDLGtCQUFNLEVBQUU7QUFDSkMsc0JBQVEsRUFBRSxHQUROO0FBRUpDLHNCQUFRLEVBQUUsQ0FGTjtBQUdKQyxxQkFBTyxFQUFFLEdBSEw7QUFJSkMsa0JBQUksRUFBRTtBQUpGLGFBREw7QUFPSEMsZ0JBQUksRUFBRTtBQUNGQyxzQkFBUSxFQUFFO0FBRFIsYUFQSDtBQVVIQyxtQkFBTyxFQUFFO0FBQ0xOLHNCQUFRLEVBQUUsR0FETDtBQUVMQyxzQkFBUSxFQUFFO0FBRkw7QUFWTjtBQVJJLFNBRlY7QUEwQkxNLGlCQUFTLEVBQUU7QUFDUEMsZUFBSyxFQUFFO0FBQ0hDLGlCQUFLLEVBQUU7QUFESixXQURBO0FBSVBDLG9CQUFVLEVBQUU7QUFDUmYsa0JBQU0sRUFBRTtBQURBLFdBSkw7QUFPUGdCLGNBQUksRUFBRTtBQUNGQyxxQkFBUyxFQUFFLE1BRFQ7QUFFRmpCLGtCQUFNLEVBQUUsSUFGTjtBQUdGa0IsbUJBQU8sRUFBRSxRQUhQO0FBSUZDLGtCQUFNLEVBQUUsS0FKTjtBQUtGQyxpQkFBSyxFQUFFLENBTEw7QUFNRkMsb0JBQVEsRUFBRTtBQU5SLFdBUEM7QUFlUEMsZUFBSyxFQUFFO0FBQ0hULGlCQUFLLEVBQUUsU0FESjtBQUVIUixvQkFBUSxFQUFFLEdBRlA7QUFHSEwsa0JBQU0sRUFBRSxJQUhMO0FBSUhPLG1CQUFPLEVBQUUsSUFKTjtBQUtIZ0IsaUJBQUssRUFBRTtBQUxKLFdBZkE7QUFzQlBDLGdCQUFNLEVBQUU7QUFDSkMsbUJBQU8sRUFBRTtBQUNMekIsb0JBQU0sRUFBRSxJQURIO0FBRUwwQix3QkFBVSxFQUFFO0FBRlAsYUFETDtBQUtKWixpQkFBSyxFQUFFO0FBTEgsV0F0QkQ7QUE2QlBQLGlCQUFPLEVBQUU7QUFDTE8saUJBQUssRUFBRTtBQURGLFdBN0JGO0FBZ0NQYSxlQUFLLEVBQUU7QUFDSEMsZ0JBQUksRUFBRTtBQURILFdBaENBO0FBbUNQcEIsY0FBSSxFQUFFO0FBQ0ZXLGtCQUFNLEVBQUUsSUFETjtBQUVGTCxpQkFBSyxFQUFFO0FBRkw7QUFuQ0MsU0ExQk47QUFrRUxlLG9CQUFZLEVBQUU7QUFsRVQ7QUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUF1RUUsOERBQUMsNkRBQUQ7QUFBQSw2QkFDRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZFRixlQTBFSSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUVKLGVBMkVFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErRUQsQ0FoRkQ7O0tBQU1sQyxJO0FBa0ZOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY4MDhiNjZhOTc4NTVlYjU3NDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcclxuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXQvQWJvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9sYXlvdXQvTGF5b3V0JztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtdHNwYXJ0aWNsZXNcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFBhcnRpY2xlc1xyXG4gICAgICAgICAgICBpZD1cInRzcGFydGljbGVzXCJcclxuICAgICAgICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgZnBzTGltaXQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzaXplOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiA0MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcHVsc2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiAxNTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC40LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiIzUyOEFBRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0TW9kZTogXCJib3VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZG9tOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM1MjhBQUVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkZXRlY3RSZXRpbmE6IHRydWUsXHJcbiAgICAgICAgICAgIH19Lz5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgPEhlcm8vPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPEFib3V0Lz5cclxuICAgICAgPFByb2plY3RzLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9