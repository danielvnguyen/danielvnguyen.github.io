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
          href: "/#",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Span, {
            children: "Daniel Van Nguyen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
                  lineNumber: 40,
                  columnNumber: 37
                }, _this), " About"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
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
                  lineNumber: 49,
                  columnNumber: 37
                }, _this), " Projects"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
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
                  lineNumber: 58,
                  columnNumber: 37
                }, _this), " Contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXRJZCIsInRhcmdldEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImFuY2hvckxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsInN1YnN0cmluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ2pCQyxrREFBUyxDQUFDLFlBQU07QUFDWjtBQUNBLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFFBQUQsRUFBYztBQUMvQixVQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsUUFBeEIsQ0FBdEI7O0FBQ0EsVUFBSUMsYUFBSixFQUFtQjtBQUNmQSxxQkFBYSxDQUFDRyxjQUFkLENBQTZCO0FBQUVDLGtCQUFRLEVBQUU7QUFBWixTQUE3QjtBQUNIO0FBQ0osS0FMRCxDQUZZLENBU1o7OztBQUNBLFFBQU1DLFdBQVcsR0FBR0osUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixjQUExQixDQUFwQjtBQUNBRCxlQUFXLENBQUNFLE9BQVosQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzFCQSxVQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQUNDLENBQUQsRUFBTztBQUNsQ0EsU0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBTVosUUFBUSxH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QTtBQUFBLGVBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdESCxDQXJFRDs7R0FBTXBCLE07O0tBQUFBLE07QUFzRU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvbW92ZWl0LmM2MjUwNmU5OWY5YzVhMDY2YWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsTWFpbCwgQWlGaWxsQnVsYiwgQWlGaWxsQW5kcm9pZCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXYxLCBEaXYyLCBEaXYzLCBOYXZMaW5rLCBTb2NpYWxJY29ucywgU3BhbiwgU3RpY2t5SGVhZGVyIH0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBTbW9vdGggc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldElkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHNtb290aCBzY3JvbGwgYmVoYXZpb3IgdG8gYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG4gICAgICAgIGFuY2hvckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgc21vb3RoU2Nyb2xsKHRhcmdldElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuPkRhbmllbCBWYW4gTmd1eWVuPC9TcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvRGl2MT5cclxuICAgICAgICAgICAgICAgIDxEaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbEJ1bGIgc2l6ZT17MjB9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fSAvPiBBYm91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxBbmRyb2lkIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gUHJvamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxNYWlsIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvRGl2Mj5cclxuICAgICAgICAgICAgICAgIDxEaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYW5pZWwtdi1uZ3V5ZW4vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgIDwvRGl2Mz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9TdGlja3lIZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=