self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "personalProjects": function() { return /* binding */ personalProjects; },
/* harmony export */   "academicProjects": function() { return /* binding */ academicProjects; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var personalProjects = [{
  projectId: 'moveit',
  title: 'MoveIt! - Fitness Tracker',
  description: "MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle by allowing them to create daily entries, save custom meals and activities, and track their progress easily",
  image: '/images/moveit_images/moveit_img.jpg',
  tags: ['Firebase', 'Java'],
  visit: 'projects/moveit',
  id: 0
}, {
  projectId: 'sketchapp',
  title: 'SketchApp',
  description: "A sketching/drawing Android app. Complete with animations, sound effects, and many features within an easy-to-use interface",
  image: '/images/sketchapp_img.jpg',
  tags: ['Java'],
  visit: 'https://github.com/danielvnguyen/SketchApp',
  id: 1
}, {
  projectId: 'letterrush',
  title: 'Letter Rush',
  description: "A text user interface game about quickly typing valid words within a certain time limit, developed with inspiration from Word Bomb",
  image: '/images/letterrush_img.jpg',
  tags: ['C', 'C++'],
  visit: 'https://github.com/danielvnguyen/LetterRush',
  id: 2
}];
var academicProjects = [{
  projectId: 'sfugobbles',
  title: 'SFU Gobbles',
  description: "An Android game built with two others as a submission for SFU CSSS Fall Hacks 2021 Hackathon, which placed 2nd and won $300. Developed with inspiration from Gobblet Gobblers, SFU Gobbles is a version of tic-tac-toe containing different sized pieces",
  image: '/images/sfugobbles_img.jpg',
  tags: ['Java'],
  visit: 'https://github.com/danielvnguyen/SFU-CS-Fall-Hacks-2021',
  id: 0
}, {
  projectId: 'duckhunt',
  title: 'Duck Hunt',
  description: "An Android app created for SystemHacks 2022 Hackathon with inspiration from Transit. It uses Kotlin and Google Maps APIs to list nearby bodies of water. Each location has a 'duck' button to track your duck sightings, and you can generate a route from your current position",
  image: '/images/duckhunt_img.jpg',
  tags: ['Kotlin', 'Google APIs'],
  visit: 'https://devpost.com/software/duck-hunt',
  id: 1
}, {
  projectId: 'practicalparentapp',
  title: 'Practical Parent App',
  description: "A school project made in cooperation with 3 others. Designed to assist parents with their children in many ways. Includes a timeout timer, coin flip, task manager, and other activities",
  image: '/images/parentapp_img.jpg',
  tags: ['Java'],
  visit: 'https://github.com/danielvnguyen/PracticalParentApp',
  id: 2
}, {
  projectId: 'realtimeclassifier',
  title: 'Help for Helplessness: Real-Time Emotion Classification',
  description: "Developed a real-time emotion recognition system that classifies levels of helplessness from short video clips using deep learning. Built a custom dataset of annotated human expressions, and evaluated three types of models",
  image: '/images/realtimeclassifier_img.png',
  tags: ['Python', 'Machine Learning'],
  visit: 'https://github.com/danielvnguyen/PracticalParentApp',
  id: 3
}, {
  projectId: 'weathermonitor',
  title: 'BeagleY-AI Weather Monitoring System',
  description: "Built a real-time embedded system on the BeagleY-AI to monitor and display local weather conditions. Developed the system in C on a Debian Linux VM, integrating hardware components such as a temperature sensor, NeoPixel LED strip, LCD screen, and rotary encoder.",
  image: '/images/weathermonitor_img.png',
  tags: ['C', 'Embedded Systems'],
  visit: 'https://github.com/danielvnguyen/PracticalParentApp',
  id: 4
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicGVyc29uYWxQcm9qZWN0cyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsImlkIiwiYWNhZGVtaWNQcm9qZWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsZ0JBQWdCLEdBQUcsQ0FDOUI7QUFDRUMsV0FBUyxFQUFFLFFBRGI7QUFFRUMsT0FBSyxFQUFFLDJCQUZUO0FBR0VDLGFBQVcsRUFBRSw4TkFIZjtBQUlFQyxPQUFLLEVBQUUsc0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsQ0FMUjtBQU1FQyxPQUFLLEVBQUUsaUJBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEOEIsRUFVOUI7QUFDRU4sV0FBUyxFQUFFLFdBRGI7QUFFRUMsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsYUFBVyxFQUFFLDZIQUhmO0FBSUVDLE9BQUssRUFBRSwyQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxNQUFELENBTFI7QUFNRUMsT0FBSyxFQUFFLDRDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLEVBbUI5QjtBQUNFTixXQUFTLEVBQUUsWUFEYjtBQUVFQyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxhQUFXLEVBQUUsb0lBSGY7QUFJRUMsT0FBSyxFQUFFLDRCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLDZDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBbkI4QixDQUF6QjtBQThCQSxJQUFNQyxnQkFBZ0IsR0FBRyxDQUM5QjtBQUNFUCxXQUFTLEVBQUUsWUFEYjtBQUVFQyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxhQUFXLEVBQUUsMFBBSGY7QUFJRUMsT0FBSyxFQUFFLDRCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE1BQUQsQ0FMUjtBQU1FQyxPQUFLLEVBQUUseURBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEOEIsRUFVOUI7QUFDRU4sV0FBUyxFQUFFLFVBRGI7QUFFRUMsT0FBSyxFQUFFLFdBRlQ7QUFHRUMsYUFBVyxFQUFFLGtSQUhmO0FBSUVDLE9BQUssRUFBRSwwQkFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsYUFBWCxDQUxSO0FBTUVDLE9BQUssRUFBRSx3Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQVY4QixFQW1COUI7QUFDRU4sV0FBUyxFQUFFLG9CQURiO0FBRUVDLE9BQUssRUFBRSxzQkFGVDtBQUdFQyxhQUFXLEVBQUUsMExBSGY7QUFJRUMsT0FBSyxFQUFFLDJCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE1BQUQsQ0FMUjtBQU1FQyxPQUFLLEVBQUUscURBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQjhCLEVBNEI5QjtBQUNFTixXQUFTLEVBQUUsb0JBRGI7QUFFRUMsT0FBSyxFQUFFLHlEQUZUO0FBR0VDLGFBQVcsRUFBQyxnT0FIZDtBQUlFQyxPQUFLLEVBQUUsb0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsUUFBRCxFQUFXLGtCQUFYLENBTFI7QUFNRUMsT0FBSyxFQUFFLHFEQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUI4QixFQXFDOUI7QUFDRU4sV0FBUyxFQUFFLGdCQURiO0FBRUVDLE9BQUssRUFBRSxzQ0FGVDtBQUdFQyxhQUFXLEVBQUMsd1FBSGQ7QUFJRUMsT0FBSyxFQUFFLGdDQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxrQkFBTixDQUxSO0FBTUVDLE9BQUssRUFBRSxxREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDOEIsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQwMDNkNWYzNGQ0ZTA2YzczODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwZXJzb25hbFByb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ21vdmVpdCcsXHJcbiAgICB0aXRsZTogJ01vdmVJdCEgLSBGaXRuZXNzIFRyYWNrZXInLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTW92ZUl0ISBpcyB5b3VyIGRhaWx5IGZpdG5lc3MgdHJhY2tlciBhcHAsIGRlc2lnbmVkIHRvIGluc3BpcmUgYW5kIGVtcG93ZXIgdXNlcnMgdG8gbWFpbnRhaW4gYSBoZWFsdGh5IGxpZmVzdHlsZSBieSBhbGxvd2luZyB0aGVtIHRvIGNyZWF0ZSBkYWlseSBlbnRyaWVzLCBzYXZlIGN1c3RvbSBtZWFscyBhbmQgYWN0aXZpdGllcywgYW5kIHRyYWNrIHRoZWlyIHByb2dyZXNzIGVhc2lseVwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21vdmVpdF9pbWFnZXMvbW92ZWl0X2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydGaXJlYmFzZScsICdKYXZhJ10sXHJcbiAgICB2aXNpdDogJ3Byb2plY3RzL21vdmVpdCcsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3NrZXRjaGFwcCcsXHJcbiAgICB0aXRsZTogJ1NrZXRjaEFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNrZXRjaGluZy9kcmF3aW5nIEFuZHJvaWQgYXBwLiBDb21wbGV0ZSB3aXRoIGFuaW1hdGlvbnMsIHNvdW5kIGVmZmVjdHMsIGFuZCBtYW55IGZlYXR1cmVzIHdpdGhpbiBhbiBlYXN5LXRvLXVzZSBpbnRlcmZhY2VcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9za2V0Y2hhcHBfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vU2tldGNoQXBwJyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnbGV0dGVycnVzaCcsXHJcbiAgICB0aXRsZTogJ0xldHRlciBSdXNoJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgdGV4dCB1c2VyIGludGVyZmFjZSBnYW1lIGFib3V0IHF1aWNrbHkgdHlwaW5nIHZhbGlkIHdvcmRzIHdpdGhpbiBhIGNlcnRhaW4gdGltZSBsaW1pdCwgZGV2ZWxvcGVkIHdpdGggaW5zcGlyYXRpb24gZnJvbSBXb3JkIEJvbWJcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9sZXR0ZXJydXNoX2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydDJywgJ0MrKyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9MZXR0ZXJSdXNoJyxcclxuICAgIGlkOiAyLFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2FkZW1pY1Byb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3NmdWdvYmJsZXMnLFxyXG4gICAgdGl0bGU6ICdTRlUgR29iYmxlcycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBBbmRyb2lkIGdhbWUgYnVpbHQgd2l0aCB0d28gb3RoZXJzIGFzIGEgc3VibWlzc2lvbiBmb3IgU0ZVIENTU1MgRmFsbCBIYWNrcyAyMDIxIEhhY2thdGhvbiwgd2hpY2ggcGxhY2VkIDJuZCBhbmQgd29uICQzMDAuIERldmVsb3BlZCB3aXRoIGluc3BpcmF0aW9uIGZyb20gR29iYmxldCBHb2JibGVycywgU0ZVIEdvYmJsZXMgaXMgYSB2ZXJzaW9uIG9mIHRpYy10YWMtdG9lIGNvbnRhaW5pbmcgZGlmZmVyZW50IHNpemVkIHBpZWNlc1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NmdWdvYmJsZXNfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vU0ZVLUNTLUZhbGwtSGFja3MtMjAyMScsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ2R1Y2todW50JyxcclxuICAgIHRpdGxlOiAnRHVjayBIdW50JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIEFuZHJvaWQgYXBwIGNyZWF0ZWQgZm9yIFN5c3RlbUhhY2tzIDIwMjIgSGFja2F0aG9uIHdpdGggaW5zcGlyYXRpb24gZnJvbSBUcmFuc2l0LiBJdCB1c2VzIEtvdGxpbiBhbmQgR29vZ2xlIE1hcHMgQVBJcyB0byBsaXN0IG5lYXJieSBib2RpZXMgb2Ygd2F0ZXIuIEVhY2ggbG9jYXRpb24gaGFzIGEgJ2R1Y2snIGJ1dHRvbiB0byB0cmFjayB5b3VyIGR1Y2sgc2lnaHRpbmdzLCBhbmQgeW91IGNhbiBnZW5lcmF0ZSBhIHJvdXRlIGZyb20geW91ciBjdXJyZW50IHBvc2l0aW9uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZHVja2h1bnRfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0tvdGxpbicsICdHb29nbGUgQVBJcyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL2R1Y2staHVudCcsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3ByYWN0aWNhbHBhcmVudGFwcCcsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBQYXJlbnQgQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2Nob29sIHByb2plY3QgbWFkZSBpbiBjb29wZXJhdGlvbiB3aXRoIDMgb3RoZXJzLiBEZXNpZ25lZCB0byBhc3Npc3QgcGFyZW50cyB3aXRoIHRoZWlyIGNoaWxkcmVuIGluIG1hbnkgd2F5cy4gSW5jbHVkZXMgYSB0aW1lb3V0IHRpbWVyLCBjb2luIGZsaXAsIHRhc2sgbWFuYWdlciwgYW5kIG90aGVyIGFjdGl2aXRpZXNcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9wYXJlbnRhcHBfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vUHJhY3RpY2FsUGFyZW50QXBwJyxcclxuICAgIGlkOiAyLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAncmVhbHRpbWVjbGFzc2lmaWVyJyxcclxuICAgIHRpdGxlOiAnSGVscCBmb3IgSGVscGxlc3NuZXNzOiBSZWFsLVRpbWUgRW1vdGlvbiBDbGFzc2lmaWNhdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkRldmVsb3BlZCBhIHJlYWwtdGltZSBlbW90aW9uIHJlY29nbml0aW9uIHN5c3RlbSB0aGF0IGNsYXNzaWZpZXMgbGV2ZWxzIG9mIGhlbHBsZXNzbmVzcyBmcm9tIHNob3J0IHZpZGVvIGNsaXBzIHVzaW5nIGRlZXAgbGVhcm5pbmcuIEJ1aWx0IGEgY3VzdG9tIGRhdGFzZXQgb2YgYW5ub3RhdGVkIGh1bWFuIGV4cHJlc3Npb25zLCBhbmQgZXZhbHVhdGVkIHRocmVlIHR5cGVzIG9mIG1vZGVsc1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlYWx0aW1lY2xhc3NpZmllcl9pbWcucG5nJyxcclxuICAgIHRhZ3M6IFsnUHl0aG9uJywgJ01hY2hpbmUgTGVhcm5pbmcnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vUHJhY3RpY2FsUGFyZW50QXBwJyxcclxuICAgIGlkOiAzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnd2VhdGhlcm1vbml0b3InLFxyXG4gICAgdGl0bGU6ICdCZWFnbGVZLUFJIFdlYXRoZXIgTW9uaXRvcmluZyBTeXN0ZW0nLFxyXG4gICAgZGVzY3JpcHRpb246XCJCdWlsdCBhIHJlYWwtdGltZSBlbWJlZGRlZCBzeXN0ZW0gb24gdGhlIEJlYWdsZVktQUkgdG8gbW9uaXRvciBhbmQgZGlzcGxheSBsb2NhbCB3ZWF0aGVyIGNvbmRpdGlvbnMuIERldmVsb3BlZCB0aGUgc3lzdGVtIGluIEMgb24gYSBEZWJpYW4gTGludXggVk0sIGludGVncmF0aW5nIGhhcmR3YXJlIGNvbXBvbmVudHMgc3VjaCBhcyBhIHRlbXBlcmF0dXJlIHNlbnNvciwgTmVvUGl4ZWwgTEVEIHN0cmlwLCBMQ0Qgc2NyZWVuLCBhbmQgcm90YXJ5IGVuY29kZXIuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvd2VhdGhlcm1vbml0b3JfaW1nLnBuZycsXHJcbiAgICB0YWdzOiBbJ0MnLCAnRW1iZWRkZWQgU3lzdGVtcyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9QcmFjdGljYWxQYXJlbnRBcHAnLFxyXG4gICAgaWQ6IDQsXHJcbiAgfVxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=