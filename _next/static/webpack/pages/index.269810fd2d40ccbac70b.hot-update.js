self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderWrapper": function() { return /* binding */ HeaderWrapper; },
/* harmony export */   "StickyHeader": function() { return /* binding */ StickyHeader; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Span": function() { return /* binding */ Span; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "HeaderStyles__HeaderWrapper",
  componentId: "sc-9w0vkp-0"
})(["width:100%;padding:2rem 0 40px;box-sizing:content-box;background:#18191A;"]);
var StickyHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.header.withConfig({
  displayName: "HeaderStyles__StickyHeader",
  componentId: "sc-9w0vkp-1"
})(["position:sticky;top:0;z-index:1000;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Container",
  componentId: "sc-9w0vkp-2"
})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:1fr;grid-column-gap:2rem;padding:1rem;padding-top:2rem;opacity:90%;@media ", "{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,60px);grid-column-gap:0.5rem;grid-row-gap:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Span = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.span.withConfig({
  displayName: "HeaderStyles__Span",
  componentId: "sc-9w0vkp-3"
})(["font-size:2rem;padding-left:1rem;"]);
var Div1 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div1",
  componentId: "sc-9w0vkp-4"
})(["grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:row;align-content:center;@media ", "{grid-area:1 / 1 / 2 / 3;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div2 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div2",
  componentId: "sc-9w0vkp-5"
})(["grid-area:1 / 2 / 2 / 4;display:flex;justify-content:space-around;@media ", "{grid-area:2 / 2 / 3 / 5;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var Div3 = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "HeaderStyles__Div3",
  componentId: "sc-9w0vkp-6"
})(["grid-area:1 / 5 / 2 / 6;display:flex;align-items:center;@media ", "{align-items:center;grid-area:1 / 4 / 2 / 6;}"], function (props) {
  return props.theme.breakpoints.sm;
}); // Navigation Links

var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__NavLink",
  componentId: "sc-9w0vkp-7"
})(["font-size:2rem;line-height:32px;color:rgba(255,255,255,0.75);transition:0.4s ease;&:hover{color:#fff;opacity:1;cursor:pointer;}@media ", "{padding:0.5rem;}"], function (props) {
  return props.theme.breakpoints.sm;
}); /// DropDown Contact

var ContactDropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "HeaderStyles__ContactDropDown",
  componentId: "sc-9w0vkp-8"
})(["border:none;display:flex;position:relative;background:none;font-size:1.7rem;line-height:32px;color:rgba(255,255,255,0.75);cursor:pointer;transition:0.3s ease;&:focus{outline:none;}&:hover{color:#fff;}@media ", "{padding:0.4rem 0;}@media ", "{padding:0;}"], function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.md;
});
var NavProductsIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown).withConfig({
  displayName: "HeaderStyles__NavProductsIcon",
  componentId: "sc-9w0vkp-9"
})(["margin-left:8px;display:flex;align-self:center;transition:0.3s ease;opacity:", ";transform:", ";&:hover{opacity:1;}@media ", "{margin:2px 0 0 2px;width:15px;}"], function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '1' : '.75';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 'scaleY(-1)' : 'scaleY(1)';
}, function (props) {
  return props.theme.breakpoints.sm;
}); // Social Icons 

var SocialIcons = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "HeaderStyles__SocialIcons",
  componentId: "sc-9w0vkp-10"
})(["transition:0.3s ease;color:white;border-radius:50px;padding:8px;&:hover{background-color:#528AAE;transform:scale(1);cursor:pointer;}"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlcy5qcyJdLCJuYW1lcyI6WyJIZWFkZXJXcmFwcGVyIiwic3R5bGVkIiwiU3RpY2t5SGVhZGVyIiwiQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJTcGFuIiwiRGl2MSIsIkRpdjIiLCJEaXYzIiwiTmF2TGluayIsIkNvbnRhY3REcm9wRG93biIsIm1kIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBR0MseUVBQUg7QUFBQTtBQUFBO0FBQUEsaUZBQW5CO0FBT0EsSUFBTUMsWUFBWSxHQUFHRCx3RUFBSDtBQUFBO0FBQUE7QUFBQSwyQ0FBbEI7QUFNQSxJQUFNRSxTQUFTLEdBQUdGLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJSQVNYLFVBQUNHLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVRXLENBQWY7QUFrQkEsSUFBTUMsSUFBSSxHQUFHUCxzRUFBSDtBQUFBO0FBQUE7QUFBQSx5Q0FBVjtBQUtBLElBQU1RLElBQUksR0FBR1IscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkhBS04sVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTE0sQ0FBVjtBQVNBLElBQU1HLElBQUksR0FBR1QscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0hBSU4sVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBSk0sQ0FBVjtBQVFBLElBQU1JLElBQUksR0FBR1YscUVBQUg7QUFBQTtBQUFBO0FBQUEseUhBSU4sVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBSk0sQ0FBVixDLENBVVA7O0FBQ08sSUFBTUssT0FBTyxHQUFHWCxtRUFBSDtBQUFBO0FBQUE7QUFBQSxvS0FVVCxVQUFDRyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FWUyxDQUFiLEMsQ0FlUDs7QUFDTyxJQUFNTSxlQUFlLEdBQUdaLHdFQUFIO0FBQUE7QUFBQTtBQUFBLHNRQW1CakIsVUFBQ0csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBbkJpQixFQXNCakIsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCUSxFQUFuQztBQUFBLENBdEJpQixDQUFyQjtBQTJCQSxJQUFNQyxlQUFlLEdBQUdkLDBEQUFNLENBQUNlLDhEQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsdUtBS2Y7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQkEsTUFBTSxHQUFHLEdBQUgsR0FBUyxLQUFoQztBQUFBLENBTGUsRUFNYjtBQUFBLE1BQUdBLE1BQUgsU0FBR0EsTUFBSDtBQUFBLFNBQWlCQSxNQUFNLEdBQUcsWUFBSCxHQUFrQixXQUF6QztBQUFBLENBTmEsRUFZakIsVUFBQ2IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWmlCLENBQXJCLEMsQ0FtQlA7O0FBRU8sSUFBTVcsV0FBVyxHQUFHakIsbUVBQUg7QUFBQTtBQUFBO0FBQUEsNElBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI2OTgxMGZkMmQ0MGNjYmFjNzBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJb0lvc0Fycm93RHJvcGRvd24gfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAycmVtIDAgNDBweDtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kOiAjMTgxOTFBO1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU3RpY2t5SGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIG9wYWNpdHk6IDkwJTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYW4gPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IERpdjEgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYyID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MyA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDIgLyA2O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA2O1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIE5hdmlnYXRpb24gTGlua3NcclxuZXhwb3J0IGNvbnN0IE5hdkxpbmsgPSBzdHlsZWQuYWBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8vIERyb3BEb3duIENvbnRhY3RcclxuZXhwb3J0IGNvbnN0IENvbnRhY3REcm9wRG93biA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcblxyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZQcm9kdWN0c0ljb24gPSBzdHlsZWQoSW9Jb3NBcnJvd0Ryb3Bkb3duKWBcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBvcGFjaXR5OiAkeyh7IGlzT3BlbiB9KSA9PiAoaXNPcGVuID8gJzEnIDogJy43NScpfTtcclxuICB0cmFuc2Zvcm06ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnc2NhbGVZKC0xKScgOiAnc2NhbGVZKDEpJyl9O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW46IDJweCAwIDAgMnB4O1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcbi8vIFNvY2lhbCBJY29ucyBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxJY29ucyA9IHN0eWxlZC5hYFxyXG50cmFuc2l0aW9uOiAwLjNzIGVhc2U7XHJcbmNvbG9yOiB3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyOEFBRTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==