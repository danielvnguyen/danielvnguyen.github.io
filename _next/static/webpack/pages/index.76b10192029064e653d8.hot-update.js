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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzbW9vdGhTY3JvbGwiLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImlzU3VicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1c2VFZmZlY3QiLCJhbmNob3JMaW5rcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwiaHJlZiIsImFib3V0U2VjdGlvblJlZiIsIlJlYWN0IiwicHJvamVjdHNTZWN0aW9uUmVmIiwiY29udGFjdFNlY3Rpb25SZWYiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7O0FBV0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUNqQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLGFBQUQsRUFBbUI7QUFDcEMsUUFBSUEsYUFBSixFQUFtQjtBQUNmQSxtQkFBYSxDQUFDQyxjQUFkLENBQTZCO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQUE3QjtBQUNIO0FBQ0osR0FKRCxDQUZpQixDQVFqQjs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWlDQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTZCLEdBQWhGLENBVGlCLENBV2pCOztBQUNBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBcEI7QUFDQUYsZUFBVyxDQUFDRyxPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUMxQkEsVUFBSSxDQUFDQyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixVQUFDQyxDQUFELEVBQU87QUFDbENBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNBLFlBQU1DLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCLE1BQWxCLENBQWpCOztBQUVBLFlBQUksQ0FBQ2QsU0FBTCxFQUFnQjtBQUNaO0FBQ0FKLHNCQUFZLENBQUNpQixRQUFELENBQVo7QUFDSCxTQUhELE1BR087QUFDSDtBQUNBWixnQkFBTSxDQUFDQyxRQUFQLENBQWdCYSxJQUFoQixjQUEyQkYsUUFBM0I7QUFDSDtBQUNKLE9BWEQ7QUFZSCxLQWJEO0FBY0gsR0FoQlEsRUFnQk4sQ0FBQ2IsU0FBRCxDQWhCTSxDQUFULENBWmlCLENBOEJqQjs7QUFDQSxNQUFNZ0IsZUFBZSxHQUFHQyxtREFBQSxDQUFhLElBQWIsQ0FBeEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0QsbURBQUEsQ0FBYSxJQUFiLENBQTNCO0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUdGLG1EQUFBLENBQWEsSUFBYixDQUExQjtBQUVBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQ7QUFBQSw4QkFDSSw4REFBQywrQ0FBRDtBQUFBLCtCQUNJLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDSTtBQUNJLGlCQUFLLEVBQUU7QUFDSEcscUJBQU8sRUFBRSxNQUROO0FBRUhDLHdCQUFVLEVBQUUsUUFGVDtBQUdIQyxtQkFBSyxFQUFFLE9BSEo7QUFJSEMsMEJBQVksRUFBRTtBQUpYLGFBRFg7QUFBQSxtQ0FRSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBZUksOERBQUMsK0NBQUQ7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUEsaUNBQ0k7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBT0k7QUFBQSxpQ0FDSTtBQUFHLGdCQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkosZUEwQkksOERBQUMsK0NBQUQ7QUFBQSxnQ0FDSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyxrQ0FBbEI7QUFBQSxpQ0FDSSw4REFBQyx3REFBRDtBQUFjLGdCQUFJLEVBQUM7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFJSSw4REFBQyxzREFBRDtBQUFhLGNBQUksRUFBQyw4Q0FBbEI7QUFBQSxpQ0FDSSw4REFBQywwREFBRDtBQUFnQixnQkFBSSxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1Q0gsQ0ExRUQ7O0dBQU01QixNOztLQUFBQSxNO0FBNEVOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc2YjEwMTkyMDI5MDY0ZTY1M2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gICAgQWlGaWxsR2l0aHViLFxyXG4gICAgQWlGaWxsTGlua2VkaW4sXHJcbiAgICBBaUZpbGxNYWlsLFxyXG4gICAgQWlGaWxsQnVsYixcclxuICAgIEFpRmlsbEFuZHJvaWQsXHJcbn0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgRGl2MSxcclxuICAgIERpdjIsXHJcbiAgICBEaXYzLFxyXG4gICAgTmF2TGluayxcclxuICAgIFNvY2lhbEljb25zLFxyXG4gICAgU3BhbixcclxuICAgIFN0aWNreUhlYWRlcixcclxufSBmcm9tICcuL0hlYWRlclN0eWxlcyc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBTbW9vdGggc2Nyb2xsIGZ1bmN0aW9uIHRhcmdldGluZyBzcGVjaWZpYyBzZWN0aW9uc1xyXG4gICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gKHRhcmdldEVsZW1lbnQpID0+IHtcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IFVSTCBwYXRoIGlzIG5vdCB0aGUgcm9vdCBwYXRoIChcIi9cIilcclxuICAgIGNvbnN0IGlzU3VicGFnZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSAhPT0gJy8nO1xyXG5cclxuICAgIC8vIEFkZCBzbW9vdGggc2Nyb2xsIGJlaGF2aW9yIHRvIGFuY2hvciBsaW5rc1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBhbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcbiAgICAgICAgYW5jaG9yTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3VicGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uIHRoZSByb290IHBhZ2UsIHBlcmZvcm0gc21vb3RoIHNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICAgIHNtb290aFNjcm9sbCh0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uIGEgc3VicGFnZSwgbmF2aWdhdGUgdG8gdGhlIHJvb3QgcGFnZSB3aXRoIHRoZSBzZWN0aW9uIGFuY2hvciBpbiB0aGUgVVJMXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgLyR7dGFyZ2V0SWR9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaXNTdWJwYWdlXSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIFJlYWN0IHJlZnMgZm9yIHNlY3Rpb25zXHJcbiAgICBjb25zdCBhYm91dFNlY3Rpb25SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBwcm9qZWN0c1NlY3Rpb25SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBjb250YWN0U2VjdGlvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8RGl2MT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bhbj5EYW5pZWwgVmFuIE5ndXllbjwvU3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvRGl2MT5cclxuICAgICAgICAgICAgICAgIDxEaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Qcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjI+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGFuaWVsLXYtbmd1eWVuL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjM+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3RpY2t5SGVhZGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==