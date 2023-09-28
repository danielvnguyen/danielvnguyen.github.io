self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "CustomLink": function() { return /* binding */ CustomLink; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;border-radius:20px;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:flex;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;align-items:flex-start;column-gap:4rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;}"], function (props) {
  return props.theme.breakpoints.md;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:20px;box-shadow:10px 10px 20px black;text-align:center;width:100%;background:#494848;z-index:20;"]);
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;color:white;padding:.5rem 0;font-weight:bold;font-size:", ";"], function (props) {
  return props.title ? '3rem' : '2rem';
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:white;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 20px;color:#ffffff;line-height:24px;text-align:center;@media ", "{padding:.2rem}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var CustomLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__CustomLink",
  componentId: "l76idc-9"
})(["color:black;font-size:1.6rem;padding:1rem 1.5rem;background:lightblue;border-radius:15px;transition:0.5s;font-weight:bold;&:hover{background:#528AAE;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;justify-content:space-around;padding:2rem;"]);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:lightblue;font-size:1.5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwic20iLCJVdGlsaXR5TGlzdCIsIkN1c3RvbUxpbmsiLCJUYWdMaXN0IiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxtRkFBVDtBQVFBLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsaU9BUWpCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVJpQixDQUFuQjtBQWNBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsc0hBQWQ7QUFTQSxJQUFNTyxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdEQUFsQjtBQU1BLElBQU1RLFdBQVcsR0FBR1Isb0VBQUg7QUFBQTtBQUFBO0FBQUEscUZBS1QsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ08sS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbEM7QUFBQSxDQUxTLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RUFBUjtBQVFBLElBQU1XLEtBQUssR0FBR1gscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0lBQVg7QUFXQSxJQUFNWSxRQUFRLEdBQUdaLG1FQUFIO0FBQUE7QUFBQTtBQUFBLDhHQU1WLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QlMsRUFBbkM7QUFBQSxDQU5VLENBQWQ7QUFZQSxJQUFNQyxXQUFXLEdBQUdkLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGlHQUFqQjtBQVFBLElBQU1lLFVBQVUsR0FBR2YsbUVBQUg7QUFBQTtBQUFBO0FBQUEsOEpBQWhCO0FBYUEsSUFBTWdCLE9BQU8sR0FBR2hCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFiO0FBS0EsSUFBTWlCLEdBQUcsR0FBR2pCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHlDQUFUIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjViNTMxNTAxNzcwNzc2ZGQwYTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5ncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcbnBhZGRpbmc6IDNyZW07XHJcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5jb2x1bW4tZ2FwOiA0cmVtO1xyXG5yb3ctZ2FwOiAzcmVtO1xyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbnBhZGRpbmc6IDJyZW07XHJcbn1cclxuYFxyXG5leHBvcnQgY29uc3QgQmxvZ0NhcmQgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM0OTQ4NDg7XHJcbiAgei1pbmRleDogMjA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEludHJvID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6ICNkY2UzZTc7XHJcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRJbmZvID0gc3R5bGVkLnBgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOi4ycmVtXHJcbiAgXHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMi41cmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tTGluayA9IHN0eWxlZC5hYFxyXG5jb2xvcjogYmxhY2s7XHJcbmZvbnQtc2l6ZTogMS42cmVtO1xyXG5wYWRkaW5nOjFyZW0gMS41cmVtO1xyXG5iYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbmJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbnRyYW5zaXRpb246IDAuNXM7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG4mOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICM1MjhBQUU7XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxucGFkZGluZzogMnJlbTtcclxuYFxyXG5leHBvcnQgY29uc3QgVGFnID0gc3R5bGVkLmxpYFxyXG5jb2xvcjogbGlnaHRibHVlO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxuYCJdLCJzb3VyY2VSb290IjoiIn0=