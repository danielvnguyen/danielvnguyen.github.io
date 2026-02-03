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
/* harmony export */   "personalProjectsTwo": function() { return /* binding */ personalProjectsTwo; },
/* harmony export */   "academicProjects": function() { return /* binding */ academicProjects; },
/* harmony export */   "academicProjectsTwo": function() { return /* binding */ academicProjectsTwo; }
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
  projectId: 'apptrackr',
  title: 'AppTrackr',
  description: "AppTrackr is a local ASP.NET Core MVC application that helps you track job applications, including company, position, status, notes, and job posting links. Data is stored locally using SQLite and Entity Framework Core",
  image: '/images/apptrackr_img.PNG',
  tags: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQLite'],
  visit: 'https://github.com/danielvnguyen/AppTrackr',
  id: 1
}];
var personalProjectsTwo = [{
  projectId: 'sketchapp',
  title: 'SketchApp',
  description: "A sketching/drawing Android app. Complete with animations, sound effects, and many features within an easy-to-use interface",
  image: '/images/sketchapp_img.jpg',
  tags: ['Java'],
  visit: 'https://github.com/danielvnguyen/SketchApp',
  id: 0
}, {
  projectId: 'letterrush',
  title: 'Letter Rush',
  description: "A text user interface game about quickly typing valid words within a certain time limit, developed with inspiration from Word Bomb",
  image: '/images/letterrush_img.jpg',
  tags: ['C', 'C++'],
  visit: 'https://github.com/danielvnguyen/LetterRush',
  id: 1
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
}];
var academicProjectsTwo = [{
  projectId: 'realtimeclassifier',
  title: 'Help for Helplessness: Real-Time Emotion Classification',
  description: "Developed a real-time emotion recognition system that classifies levels of helplessness from short video clips using deep learning. Built a custom dataset of annotated human expressions, and evaluated three types of models",
  image: '/images/realtimeclassifier_img.png',
  tags: ['Python', 'Machine Learning'],
  visit: 'https://github.com/danielvnguyen/Real-Time-Helplessness-Classifier',
  id: 0
}, {
  projectId: 'weathermonitor',
  title: 'BeagleY-AI Weather Monitoring System',
  description: "Built a real-time embedded system on the BeagleY-AI to monitor and display local weather conditions. Developed the system in C on a Debian Linux VM, integrating hardware components such as a temperature sensor, NeoPixel LED strip, LCD screen, and rotary encoder.",
  image: '/images/weathermonitor_img.PNG',
  tags: ['C', 'Embedded Systems'],
  visit: 'https://github.com/danielvnguyen/BeagleYAI-Weather-Monitoring-System',
  id: 1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicGVyc29uYWxQcm9qZWN0cyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsImlkIiwicGVyc29uYWxQcm9qZWN0c1R3byIsImFjYWRlbWljUHJvamVjdHMiLCJhY2FkZW1pY1Byb2plY3RzVHdvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFXLEVBQUUsOE5BSGY7QUFJRUMsT0FBSyxFQUFFLHNDQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBTFI7QUFNRUMsT0FBSyxFQUFFLGlCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRDhCLEVBVTlCO0FBQ0VOLFdBQVMsRUFBRSxXQURiO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLGFBQVcsRUFBRSwyTkFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLGNBQVAsRUFBdUIsdUJBQXZCLEVBQWdELFFBQWhELENBTFI7QUFNRUMsT0FBSyxFQUFFLDRDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLENBQXpCO0FBcUJBLElBQU1DLG1CQUFtQixHQUFHLENBQ2pDO0FBQ0VQLFdBQVMsRUFBRSxXQURiO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLGFBQVcsRUFBRSw2SEFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSw0Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURpQyxFQVVqQztBQUNFTixXQUFTLEVBQUUsWUFEYjtBQUVFQyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxhQUFXLEVBQUUsb0lBSGY7QUFJRUMsT0FBSyxFQUFFLDRCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLDZDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVmlDLENBQTVCO0FBcUJBLElBQU1FLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VSLFdBQVMsRUFBRSxZQURiO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLGFBQVcsRUFBRSwwUEFIZjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSx5REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQUQ4QixFQVU5QjtBQUNFTixXQUFTLEVBQUUsVUFEYjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxhQUFXLEVBQUUsa1JBSGY7QUFJRUMsT0FBSyxFQUFFLDBCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLENBTFI7QUFNRUMsT0FBSyxFQUFFLHdDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLEVBbUI5QjtBQUNFTixXQUFTLEVBQUUsb0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNCQUZUO0FBR0VDLGFBQVcsRUFBRSwwTEFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSxxREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5COEIsQ0FBekI7QUE4QkEsSUFBTUcsbUJBQW1CLEdBQUcsQ0FDakM7QUFDRVQsV0FBUyxFQUFFLG9CQURiO0FBRUVDLE9BQUssRUFBRSx5REFGVDtBQUdFQyxhQUFXLEVBQUMsZ09BSGQ7QUFJRUMsT0FBSyxFQUFFLG9DQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxrQkFBWCxDQUxSO0FBTUVDLE9BQUssRUFBRSxvRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURpQyxFQVVqQztBQUNFTixXQUFTLEVBQUUsZ0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNDQUZUO0FBR0VDLGFBQVcsRUFBQyx3UUFIZDtBQUlFQyxPQUFLLEVBQUUsZ0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLGtCQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLHNFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVmlDLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3NmM3MGJlMWQ4ZThiNzQ3YjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGVyc29uYWxQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdtb3ZlaXQnLFxyXG4gICAgdGl0bGU6ICdNb3ZlSXQhIC0gRml0bmVzcyBUcmFja2VyJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1vdmVJdCEgaXMgeW91ciBkYWlseSBmaXRuZXNzIHRyYWNrZXIgYXBwLCBkZXNpZ25lZCB0byBpbnNwaXJlIGFuZCBlbXBvd2VyIHVzZXJzIHRvIG1haW50YWluIGEgaGVhbHRoeSBsaWZlc3R5bGUgYnkgYWxsb3dpbmcgdGhlbSB0byBjcmVhdGUgZGFpbHkgZW50cmllcywgc2F2ZSBjdXN0b20gbWVhbHMgYW5kIGFjdGl2aXRpZXMsIGFuZCB0cmFjayB0aGVpciBwcm9ncmVzcyBlYXNpbHlcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnRmlyZWJhc2UnLCAnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdwcm9qZWN0cy9tb3ZlaXQnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdhcHB0cmFja3InLFxyXG4gICAgdGl0bGU6ICdBcHBUcmFja3InLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwVHJhY2tyIGlzIGEgbG9jYWwgQVNQLk5FVCBDb3JlIE1WQyBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHlvdSB0cmFjayBqb2IgYXBwbGljYXRpb25zLCBpbmNsdWRpbmcgY29tcGFueSwgcG9zaXRpb24sIHN0YXR1cywgbm90ZXMsIGFuZCBqb2IgcG9zdGluZyBsaW5rcy4gRGF0YSBpcyBzdG9yZWQgbG9jYWxseSB1c2luZyBTUUxpdGUgYW5kIEVudGl0eSBGcmFtZXdvcmsgQ29yZVwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2FwcHRyYWNrcl9pbWcuUE5HJyxcclxuICAgIHRhZ3M6IFsnQyMnLCAnQVNQLk5FVCBDb3JlJywgJ0VudGl0eSBGcmFtZXdvcmsgQ29yZScsICdTUUxpdGUnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vQXBwVHJhY2tyJyxcclxuICAgIGlkOiAxLFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXJzb25hbFByb2plY3RzVHdvID0gW1xyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3NrZXRjaGFwcCcsXHJcbiAgICB0aXRsZTogJ1NrZXRjaEFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNrZXRjaGluZy9kcmF3aW5nIEFuZHJvaWQgYXBwLiBDb21wbGV0ZSB3aXRoIGFuaW1hdGlvbnMsIHNvdW5kIGVmZmVjdHMsIGFuZCBtYW55IGZlYXR1cmVzIHdpdGhpbiBhbiBlYXN5LXRvLXVzZSBpbnRlcmZhY2VcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9za2V0Y2hhcHBfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vU2tldGNoQXBwJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnbGV0dGVycnVzaCcsXHJcbiAgICB0aXRsZTogJ0xldHRlciBSdXNoJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgdGV4dCB1c2VyIGludGVyZmFjZSBnYW1lIGFib3V0IHF1aWNrbHkgdHlwaW5nIHZhbGlkIHdvcmRzIHdpdGhpbiBhIGNlcnRhaW4gdGltZSBsaW1pdCwgZGV2ZWxvcGVkIHdpdGggaW5zcGlyYXRpb24gZnJvbSBXb3JkIEJvbWJcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9sZXR0ZXJydXNoX2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydDJywgJ0MrKyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9MZXR0ZXJSdXNoJyxcclxuICAgIGlkOiAxLFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2FkZW1pY1Byb2plY3RzID0gW1xyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3NmdWdvYmJsZXMnLFxyXG4gICAgdGl0bGU6ICdTRlUgR29iYmxlcycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBBbmRyb2lkIGdhbWUgYnVpbHQgd2l0aCB0d28gb3RoZXJzIGFzIGEgc3VibWlzc2lvbiBmb3IgU0ZVIENTU1MgRmFsbCBIYWNrcyAyMDIxIEhhY2thdGhvbiwgd2hpY2ggcGxhY2VkIDJuZCBhbmQgd29uICQzMDAuIERldmVsb3BlZCB3aXRoIGluc3BpcmF0aW9uIGZyb20gR29iYmxldCBHb2JibGVycywgU0ZVIEdvYmJsZXMgaXMgYSB2ZXJzaW9uIG9mIHRpYy10YWMtdG9lIGNvbnRhaW5pbmcgZGlmZmVyZW50IHNpemVkIHBpZWNlc1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NmdWdvYmJsZXNfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vU0ZVLUNTLUZhbGwtSGFja3MtMjAyMScsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ2R1Y2todW50JyxcclxuICAgIHRpdGxlOiAnRHVjayBIdW50JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIEFuZHJvaWQgYXBwIGNyZWF0ZWQgZm9yIFN5c3RlbUhhY2tzIDIwMjIgSGFja2F0aG9uIHdpdGggaW5zcGlyYXRpb24gZnJvbSBUcmFuc2l0LiBJdCB1c2VzIEtvdGxpbiBhbmQgR29vZ2xlIE1hcHMgQVBJcyB0byBsaXN0IG5lYXJieSBib2RpZXMgb2Ygd2F0ZXIuIEVhY2ggbG9jYXRpb24gaGFzIGEgJ2R1Y2snIGJ1dHRvbiB0byB0cmFjayB5b3VyIGR1Y2sgc2lnaHRpbmdzLCBhbmQgeW91IGNhbiBnZW5lcmF0ZSBhIHJvdXRlIGZyb20geW91ciBjdXJyZW50IHBvc2l0aW9uXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvZHVja2h1bnRfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0tvdGxpbicsICdHb29nbGUgQVBJcyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL2R1Y2staHVudCcsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3ByYWN0aWNhbHBhcmVudGFwcCcsXHJcbiAgICB0aXRsZTogJ1ByYWN0aWNhbCBQYXJlbnQgQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2Nob29sIHByb2plY3QgbWFkZSBpbiBjb29wZXJhdGlvbiB3aXRoIDMgb3RoZXJzLiBEZXNpZ25lZCB0byBhc3Npc3QgcGFyZW50cyB3aXRoIHRoZWlyIGNoaWxkcmVuIGluIG1hbnkgd2F5cy4gSW5jbHVkZXMgYSB0aW1lb3V0IHRpbWVyLCBjb2luIGZsaXAsIHRhc2sgbWFuYWdlciwgYW5kIG90aGVyIGFjdGl2aXRpZXNcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9wYXJlbnRhcHBfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0phdmEnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vUHJhY3RpY2FsUGFyZW50QXBwJyxcclxuICAgIGlkOiAyLFxyXG4gIH1cclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhY2FkZW1pY1Byb2plY3RzVHdvID0gW1xyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3JlYWx0aW1lY2xhc3NpZmllcicsXHJcbiAgICB0aXRsZTogJ0hlbHAgZm9yIEhlbHBsZXNzbmVzczogUmVhbC1UaW1lIEVtb3Rpb24gQ2xhc3NpZmljYXRpb24nLFxyXG4gICAgZGVzY3JpcHRpb246XCJEZXZlbG9wZWQgYSByZWFsLXRpbWUgZW1vdGlvbiByZWNvZ25pdGlvbiBzeXN0ZW0gdGhhdCBjbGFzc2lmaWVzIGxldmVscyBvZiBoZWxwbGVzc25lc3MgZnJvbSBzaG9ydCB2aWRlbyBjbGlwcyB1c2luZyBkZWVwIGxlYXJuaW5nLiBCdWlsdCBhIGN1c3RvbSBkYXRhc2V0IG9mIGFubm90YXRlZCBodW1hbiBleHByZXNzaW9ucywgYW5kIGV2YWx1YXRlZCB0aHJlZSB0eXBlcyBvZiBtb2RlbHNcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9yZWFsdGltZWNsYXNzaWZpZXJfaW1nLnBuZycsXHJcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdNYWNoaW5lIExlYXJuaW5nJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL1JlYWwtVGltZS1IZWxwbGVzc25lc3MtQ2xhc3NpZmllcicsXHJcbiAgICBpZDogMCxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ3dlYXRoZXJtb25pdG9yJyxcclxuICAgIHRpdGxlOiAnQmVhZ2xlWS1BSSBXZWF0aGVyIE1vbml0b3JpbmcgU3lzdGVtJyxcclxuICAgIGRlc2NyaXB0aW9uOlwiQnVpbHQgYSByZWFsLXRpbWUgZW1iZWRkZWQgc3lzdGVtIG9uIHRoZSBCZWFnbGVZLUFJIHRvIG1vbml0b3IgYW5kIGRpc3BsYXkgbG9jYWwgd2VhdGhlciBjb25kaXRpb25zLiBEZXZlbG9wZWQgdGhlIHN5c3RlbSBpbiBDIG9uIGEgRGViaWFuIExpbnV4IFZNLCBpbnRlZ3JhdGluZyBoYXJkd2FyZSBjb21wb25lbnRzIHN1Y2ggYXMgYSB0ZW1wZXJhdHVyZSBzZW5zb3IsIE5lb1BpeGVsIExFRCBzdHJpcCwgTENEIHNjcmVlbiwgYW5kIHJvdGFyeSBlbmNvZGVyLlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3dlYXRoZXJtb25pdG9yX2ltZy5QTkcnLFxyXG4gICAgdGFnczogWydDJywgJ0VtYmVkZGVkIFN5c3RlbXMnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vQmVhZ2xlWUFJLVdlYXRoZXItTW9uaXRvcmluZy1TeXN0ZW0nLFxyXG4gICAgaWQ6IDEsXHJcbiAgfVxyXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=