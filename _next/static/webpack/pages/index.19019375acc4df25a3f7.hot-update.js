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






var handleNavigation = function handleNavigation(e) {
  e.preventDefault();
  var href = e.currentTarget.getAttribute('href');

  if (href && href.startsWith('/#')) {
    // Extract section ID from href
    var sectionId = href.substring(2); // Scroll to the section

    smoothScroll(sectionId);
  } else if (href) {
    // Navigate to the corresponding page
    router.push(href);
  }
};

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
              lineNumber: 55,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#about",
            onClick: handleNavigation,
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
                  lineNumber: 64,
                  columnNumber: 37
                }, _this), " About"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#projects",
            onClick: handleNavigation,
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
                  lineNumber: 73,
                  columnNumber: 37
                }, _this), " Projects"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#contact",
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
                  lineNumber: 82,
                  columnNumber: 37
                }, _this), " Contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
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
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJoYW5kbGVOYXZpZ2F0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzdGFydHNXaXRoIiwic2VjdGlvbklkIiwic3Vic3RyaW5nIiwic21vb3RoU2Nyb2xsIiwicm91dGVyIiwicHVzaCIsIkhlYWRlciIsInVzZUVmZmVjdCIsInRhcmdldElkIiwidGFyZ2V0RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYW5jaG9yTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEdBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxhQUFGLENBQWdCQyxZQUFoQixDQUE2QixNQUE3QixDQUFiOztBQUVBLE1BQUlGLElBQUksSUFBSUEsSUFBSSxDQUFDRyxVQUFMLENBQWdCLElBQWhCLENBQVosRUFBbUM7QUFDL0I7QUFDQSxRQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssU0FBTCxDQUFlLENBQWYsQ0FBbEIsQ0FGK0IsQ0FHL0I7O0FBQ0FDLGdCQUFZLENBQUNGLFNBQUQsQ0FBWjtBQUNILEdBTEQsTUFLTyxJQUFJSixJQUFKLEVBQVU7QUFDYjtBQUNBTyxVQUFNLENBQUNDLElBQVAsQ0FBWVIsSUFBWjtB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QkFWSixlQW1CSTtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBQyxVQUFSO0FBQUEsbUNBQ0ksOERBQUMsa0RBQUQ7QUFBQSxxQ0FDSTtBQUFLLHFCQUFLLEVBQUU7QUFBRUoseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw0QkFBVSxFQUFFO0FBQS9CLGlCQUFaO0FBQUEsd0NBQ0ksOERBQUMsc0RBQUQ7QUFBWSxzQkFBSSxFQUFFLEVBQWxCO0FBQXNCLHVCQUFLLEVBQUU7QUFBRUcsK0JBQVcsRUFBRTtBQUFmO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSixlQTRDSSw4REFBQywrQ0FBRDtBQUFBLGdDQUNJLDhEQUFDLHNEQUFEO0FBQWEsY0FBSSxFQUFDLGtDQUFsQjtBQUFBLGlDQUNJLDhEQUFDLHdEQUFEO0FBQWMsZ0JBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLDhEQUFDLHNEQUFEO0FBQWEsY0FBSSxFQUFDLDhDQUFsQjtBQUFBLGlDQUNJLDhEQUFDLDBEQUFEO0FBQWdCLGdCQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlESCxDQTlFRDs7R0FBTWpCLE07O0tBQUFBLE07QUErRU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTkwMTkzNzVhY2M0ZGYyNWEzZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRodWIsIEFpRmlsbExpbmtlZGluLCBBaUZpbGxNYWlsLCBBaUZpbGxCdWxiLCBBaUZpbGxBbmRyb2lkIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIERpdjEsIERpdjIsIERpdjMsIE5hdkxpbmssIFNvY2lhbEljb25zLCBTcGFuLCBTdGlja3lIZWFkZXIgfSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XHJcblxyXG5jb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGhyZWYgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG4gICAgaWYgKGhyZWYgJiYgaHJlZi5zdGFydHNXaXRoKCcvIycpKSB7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBzZWN0aW9uIElEIGZyb20gaHJlZlxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9IGhyZWYuc3Vic3RyaW5nKDIpO1xyXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgc2VjdGlvblxyXG4gICAgICAgIHNtb290aFNjcm9sbChzZWN0aW9uSWQpO1xyXG4gICAgfSBlbHNlIGlmIChocmVmKSB7XHJcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gdGhlIGNvcnJlc3BvbmRpbmcgcGFnZVxyXG4gICAgICAgIHJvdXRlci5wdXNoKGhyZWYpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBTbW9vdGggc2Nyb2xsIGZ1bmN0aW9uXHJcbiAgICAgICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldElkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHNtb290aCBzY3JvbGwgYmVoYXZpb3IgdG8gYW5jaG9yIGxpbmtzXHJcbiAgICAgICAgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG4gICAgICAgIGFuY2hvckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgc21vb3RoU2Nyb2xsKHRhcmdldElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+RGFuaWVsIFZhbiBOZ3V5ZW48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjE+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvI2Fib3V0XCIgb25DbGljaz17aGFuZGxlTmF2aWdhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxCdWxiIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9qZWN0c1wiIG9uQ2xpY2s9e2hhbmRsZU5hdmlnYXRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxNYWlsIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvRGl2Mj5cclxuICAgICAgICAgICAgICAgIDxEaXYzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9kYW5pZWwtdi1uZ3V5ZW4vXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxMaW5rZWRpbiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgICAgICAgIDwvRGl2Mz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9TdGlja3lIZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=