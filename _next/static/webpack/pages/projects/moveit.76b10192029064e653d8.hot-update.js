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

  // Smooth scroll function targeting specific sections
  var smoothScroll = function smoothScroll(targetElement) {
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }; // Determine if the current URL path is not the root path ("/")


  var isSubpage =  true && window.location.pathname !== '/'; // Add smooth scroll behavior to anchor links

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = link.getAttribute('href');

        if (!isSubpage) {
          // If on the root page, perform smooth scroll
          smoothScroll(targetId);
        } else {
          // If on a subpage, navigate to the root page with the section anchor in the URL
          window.location.href = "/".concat(targetId);
        }
      });
    });
  }, [isSubpage]); // Create React refs for sections

  var aboutSectionRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
  var projectsSectionRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
  var contactSectionRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
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
              lineNumber: 69,
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
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "#",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, _this);
};

_s(Header, "zWMBxNwN07hBEhxOJgM41+gx/KY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImlzU3VicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJhbmNob3JMaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwiaHJlZiIsImFib3V0U2VjdGlvblJlZiIsIlJlYWN0IiwicHJvamVjdHNTZWN0aW9uUmVmIiwiY29udGFjdFNlY3Rpb25SZWYiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7O0FBV0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLGFBQUQsRUFBbUI7QUFDcEMsUUFBSUEsYUFBSixFQUFtQjtBQUNmQSxtQkFBYSxDQUFDQyxjQUFkLENBQTZCO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUE3QjtBQUNIO0FBQ0osR0FKRCxDQUZpQixDQVFqQjs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWlDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTZCLEdBQWhGLENBVGlCLENBV2pCOztBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBcEI7QUFDQUYsZUFBVyxDQUFDRyxPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUMxQkEsVUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDbENBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU1DLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCLE1BQWxCLENBQWpCOztBQUVBLFlBQUksQ0FBQ2QsU0FBTCxFQUFnQjtBQUNaO0FBQ0FKLHNCQUFZLENBQUNpQixRQUFELENBQVo7QUFDSCxTQUhELE1BR087QUFDSDtBQUNBWixnQkFBTSxDQUFDQyxRQUFQLENBQWdCYSxJQUFoQixjQUEyQkYsUUFBM0I7QUFDSDtBQUNKLE9BWEQ7QUFZSCxLQWJEO0FBY0gsR0FoQlEsRUFnQk4sQ0FBQ2IsU0FBRCxDQWhCTSxDQUFULENBWmlCLENBOEJqQjs7QUFDQSxNQUFNZ0IsZUFBZSxHQUFHQyxtREFBQSxDQUFhLElBQWIsQ0FBeEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0QsbURBQUEsQ0FBYSxJQUFiLENBQTNCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdGLG1EQUFBLENBQWEsSUFBYixDQUExQjtBQUVBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQ7QUFBQSw4QkFDSSw4REFBQywrQ0FBRDtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUNJLGlCQUFLLEVBQUU7QUFDSEcscUJBQU8sRUFBRSxNQUROO0FBRUhDLHdCQUFVLEVBQUUsUUFGVDtBQUdIQyxtQkFBSyxFQUFFLE9BSEo7QUFJSEMsMEJBQVksRUFBRTtBQUpYLGFBRFg7QUFBQSxtQ0FRSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZUksOERBQUMsK0NBQUQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUEsaUNBQ0k7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBT0k7QUFBQSxpQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUEwQkksOERBQUMsK0NBQUQ7QUFBQSxnQ0FDSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyxrQ0FBbEI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUFjLGdCQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyw4Q0FBbEI7QUFBQSxpQ0FDSSw4REFBQywwREFBRDtBQUFnQixnQkFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1Q0gsQ0ExRUQ7O0dBQU01QixNOztLQUFBQSxNO0FBNEVOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL21vdmVpdC43NmIxMDE5MjAyOTA2NGU2NTNkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICAgIEFpRmlsbEdpdGh1YixcclxuICAgIEFpRmlsbExpbmtlZGluLFxyXG4gICAgQWlGaWxsTWFpbCxcclxuICAgIEFpRmlsbEJ1bGIsXHJcbiAgICBBaUZpbGxBbmRyb2lkLFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIERpdjEsXHJcbiAgICBEaXYyLFxyXG4gICAgRGl2MyxcclxuICAgIE5hdkxpbmssXHJcbiAgICBTb2NpYWxJY29ucyxcclxuICAgIFNwYW4sXHJcbiAgICBTdGlja3lIZWFkZXIsXHJcbn0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gICAgLy8gU21vb3RoIHNjcm9sbCBmdW5jdGlvbiB0YXJnZXRpbmcgc3BlY2lmaWMgc2VjdGlvbnNcclxuICAgIGNvbnN0IHNtb290aFNjcm9sbCA9ICh0YXJnZXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERldGVybWluZSBpZiB0aGUgY3VycmVudCBVUkwgcGF0aCBpcyBub3QgdGhlIHJvb3QgcGF0aCAoXCIvXCIpXHJcbiAgICBjb25zdCBpc1N1YnBhZ2UgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgIT09ICcvJztcclxuXHJcbiAgICAvLyBBZGQgc21vb3RoIHNjcm9sbCBiZWhhdmlvciB0byBhbmNob3IgbGlua3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG4gICAgICAgIGFuY2hvckxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1N1YnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbiB0aGUgcm9vdCBwYWdlLCBwZXJmb3JtIHNtb290aCBzY3JvbGxcclxuICAgICAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGwodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbiBhIHN1YnBhZ2UsIG5hdmlnYXRlIHRvIHRoZSByb290IHBhZ2Ugd2l0aCB0aGUgc2VjdGlvbiBhbmNob3IgaW4gdGhlIFVSTFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC8ke3RhcmdldElkfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2lzU3VicGFnZV0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBSZWFjdCByZWZzIGZvciBzZWN0aW9uc1xyXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgcHJvamVjdHNTZWN0aW9uUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb25SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U3RpY2t5SGVhZGVyPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPERpdjE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4+RGFuaWVsIFZhbiBOZ3V5ZW48L1NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjE+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mj5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UHJvamVjdHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9EaXYyPlxyXG4gICAgICAgICAgICAgICAgPERpdjM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RhbmllbC12LW5ndXllbi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbExpbmtlZGluIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NvY2lhbEljb25zPlxyXG4gICAgICAgICAgICAgICAgPC9EaXYzPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L1N0aWNreUhlYWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=