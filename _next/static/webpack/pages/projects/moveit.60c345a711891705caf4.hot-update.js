self["webpackHotUpdate_N_E"]("pages/projects/moveit",{

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\components\\Header\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();






var Header = function Header() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // Smooth scroll function
    var smoothScroll = function smoothScroll(targetId) {
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }; // Add smooth scroll behavior to anchor links


    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = link.getAttribute('href').substring(1);
        smoothScroll(targetId);
      });
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.StickyHeader, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/",
          style: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Span, {
            children: "Daniel Van Nguyen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#about",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillBulb, {
                  size: 20,
                  style: {
                    marginRight: '8px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 37
                }, _this), " About"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#projects",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillAndroid, {
                  size: 20,
                  style: {
                    marginRight: '8px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 37
                }, _this), " Projects"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#contact",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillMail, {
                  size: 20,
                  style: {
                    marginRight: '8px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 37
                }, _this), " Contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(Header, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXRJZCIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImFuY2hvckxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsInN1YnN0cmluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakJDLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFVBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxRQUF4QixDQUF0Qjs7QUFDQSxVQUFJQyxhQUFKLEVBQW1CO0FBQ2ZBLHFCQUFhLENBQUNHLGNBQWQsQ0FBNkI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTdCO0FBQ0g7QUFDSixLQUxELENBRlksQ0FTWjs7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNLLGdCQUFULENBQTBCLGNBQTFCLENBQXBCO0FBQ0FELGVBQVcsQ0FBQ0UsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUJBLFVBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDQSxTQUFDLENBQUND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QUFJLEVBQUMsOENBQWxCO0FBQUEsaUNBQ0ksOERBQUMsMERBQUQ7QUFBZ0IsZ0JBQUksRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdURILENBNUVEOztHQUFNdEIsTTs7S0FBQUEsTTtBQTZFTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9qZWN0cy9tb3ZlaXQuNjBjMzQ1YTcxMTg5MTcwNWNhZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbExpbmtlZGluLCBBaUZpbGxNYWlsLCBBaUZpbGxCdWxiLCBBaUZpbGxBbmRyb2lkIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zLCBTcGFuLCBTdGlja3lIZWFkZXIgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFNtb290aCBzY3JvbGwgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBzbW9vdGhTY3JvbGwgPSAodGFyZ2V0SWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBZGQgc21vb3RoIHNjcm9sbCBiZWhhdmlvciB0byBhbmNob3IgbGlua3NcclxuICAgICAgICBjb25zdCBhbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcbiAgICAgICAgYW5jaG9yTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGwodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8RGl2MT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5EYW5pZWwgVmFuIE5ndXllbjwvU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjE+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxCdWxiIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTWFpbCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjI+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGFuaWVsLXYtbmd1eWVuL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjM+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3RpY2t5SGVhZGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9