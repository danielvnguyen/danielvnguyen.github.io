self["webpackHotUpdate_N_E"]("pages/index",{

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
    }; // Navigation handler


    var handleNavigation = function handleNavigation(e) {
      e.preventDefault();
      var href = e.currentTarget.getAttribute('href');

      if (href && href.startsWith('/#')) {
        // Extract section ID from href
        var sectionId = href.substring(2); // Scroll to the section

        smoothScroll(sectionId);
      } else if (href) {
        // Navigate to the corresponding page
        window.location.href = href;
      }
    }; // Add smooth scroll behavior to anchor links


    var anchorLinks = document.querySelectorAll('a[href^="/#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', handleNavigation);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.StickyHeader, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
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
              lineNumber: 52,
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
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
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
                  lineNumber: 61,
                  columnNumber: 37
                }, _this), " About"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
                  lineNumber: 70,
                  columnNumber: 37
                }, _this), " Projects"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
                  lineNumber: 79,
                  columnNumber: 37
                }, _this), " Contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, _this)
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
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXRJZCIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhhbmRsZU5hdmlnYXRpb24iLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInN0YXJ0c1dpdGgiLCJzZWN0aW9uSWQiLCJzdWJzdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFuY2hvckxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakJDLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFVBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxRQUF4QixDQUF0Qjs7QUFDQSxVQUFJQyxhQUFKLEVBQW1CO0FBQ2ZBLHFCQUFhLENBQUNHLGNBQWQsQ0FBNkI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTdCO0FBQ0g7QUFDSixLQUxELENBRlksQ0FTWjs7O0FBQ0EsUUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLElB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c0JBQUksRUFBRSxFQUFsQjtBQUFzQix1QkFBSyxFQUFFO0FBQUVHLCtCQUFXLEVBQUU7QUFBZjtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUE0Q0ksOERBQUMsK0NBQUQ7QUFBQSxnQ0FDSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyxrQ0FBbEI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUFjLGdCQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyw4Q0FBbEI7QUFBQSxpQ0FDSSw4REFBQywwREFBRDtBQUFnQixnQkFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5REgsQ0ExRkQ7O0dBQU03QixNOztLQUFBQSxNO0FBMkZOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEwOGIyMWQ0ZWExZjFmZTQxM2RhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsTWFpbCwgQWlGaWxsQnVsYiwgQWlGaWxsQW5kcm9pZCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXYxLCBEaXYyLCBEaXYzLCBOYXZMaW5rLCBTb2NpYWxJY29ucywgU3BhbiwgU3RpY2t5SGVhZGVyIH0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBTbW9vdGggc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldElkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gTmF2aWdhdGlvbiBoYW5kbGVyXHJcbiAgICAgICAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChocmVmICYmIGhyZWYuc3RhcnRzV2l0aCgnLyMnKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBzZWN0aW9uIElEIGZyb20gaHJlZlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbklkID0gaHJlZi5zdWJzdHJpbmcoMik7XHJcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIHNlY3Rpb25cclxuICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbChzZWN0aW9uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhyZWYpIHtcclxuICAgICAgICAgICAgICAgIC8vIE5hdmlnYXRlIHRvIHRoZSBjb3JyZXNwb25kaW5nIHBhZ2VcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEFkZCBzbW9vdGggc2Nyb2xsIGJlaGF2aW9yIHRvIGFuY2hvciBsaW5rc1xyXG4gICAgICAgIGNvbnN0IGFuY2hvckxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIi8jXCJdJyk7XHJcbiAgICAgICAgYW5jaG9yTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTmF2aWdhdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+RGFuaWVsIFZhbiBOZ3V5ZW48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjE+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxCdWxiIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTWFpbCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjI+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGFuaWVsLXYtbmd1eWVuL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjM+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3RpY2t5SGVhZGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9