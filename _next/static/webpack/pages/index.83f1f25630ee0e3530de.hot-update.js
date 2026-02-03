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
  image: '/images/moveit_images/apptrackr_img.PNG',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicGVyc29uYWxQcm9qZWN0cyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsImlkIiwicGVyc29uYWxQcm9qZWN0c1R3byIsImFjYWRlbWljUHJvamVjdHMiLCJhY2FkZW1pY1Byb2plY3RzVHdvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VDLFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFXLEVBQUUsOE5BSGY7QUFJRUMsT0FBSyxFQUFFLHNDQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLENBTFI7QUFNRUMsT0FBSyxFQUFFLGlCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBRDhCLEVBVTlCO0FBQ0VOLFdBQVMsRUFBRSxXQURiO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLGFBQVcsRUFBRSwyTkFIZjtBQUlFQyxPQUFLLEVBQUUseUNBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLGNBQVAsRUFBdUIsdUJBQXZCLEVBQWdELFFBQWhELENBTFI7QUFNRUMsT0FBSyxFQUFFLDRDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLENBQXpCO0FBcUJBLElBQU1DLG1CQUFtQixHQUFHLENBQ2pDO0FBQ0VQLFdBQVMsRUFBRSxXQURiO0FBRUVDLE9BQUssRUFBRSxXQUZUO0FBR0VDLGFBQVcsRUFBRSw2SEFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSw0Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURpQyxFQVVqQztBQUNFTixXQUFTLEVBQUUsWUFEYjtBQUVFQyxPQUFLLEVBQUUsYUFGVDtBQUdFQyxhQUFXLEVBQUUsb0lBSGY7QUFJRUMsT0FBSyxFQUFFLDRCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLEdBQUQsRUFBTSxLQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLDZDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVmlDLENBQTVCO0FBcUJBLElBQU1FLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VSLFdBQVMsRUFBRSxZQURiO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLGFBQVcsRUFBRSwwUEFIZjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSx5REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQUQ4QixFQVU5QjtBQUNFTixXQUFTLEVBQUUsVUFEYjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxhQUFXLEVBQUUsa1JBSGY7QUFJRUMsT0FBSyxFQUFFLDBCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLENBTFI7QUFNRUMsT0FBSyxFQUFFLHdDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLEVBbUI5QjtBQUNFTixXQUFTLEVBQUUsb0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNCQUZUO0FBR0VDLGFBQVcsRUFBRSwwTEFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSxxREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5COEIsQ0FBekI7QUE4QkEsSUFBTUcsbUJBQW1CLEdBQUcsQ0FDakM7QUFDRVQsV0FBUyxFQUFFLG9CQURiO0FBRUVDLE9BQUssRUFBRSx5REFGVDtBQUdFQyxhQUFXLEVBQUMsZ09BSGQ7QUFJRUMsT0FBSyxFQUFFLG9DQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxrQkFBWCxDQUxSO0FBTUVDLE9BQUssRUFBRSxvRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURpQyxFQVVqQztBQUNFTixXQUFTLEVBQUUsZ0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNDQUZUO0FBR0VDLGFBQVcsRUFBQyx3UUFIZDtBQUlFQyxPQUFLLEVBQUUsZ0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLGtCQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLHNFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVmlDLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzZjFmMjU2MzBlZTBlMzUzMGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGVyc29uYWxQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdtb3ZlaXQnLFxyXG4gICAgdGl0bGU6ICdNb3ZlSXQhIC0gRml0bmVzcyBUcmFja2VyJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1vdmVJdCEgaXMgeW91ciBkYWlseSBmaXRuZXNzIHRyYWNrZXIgYXBwLCBkZXNpZ25lZCB0byBpbnNwaXJlIGFuZCBlbXBvd2VyIHVzZXJzIHRvIG1haW50YWluIGEgaGVhbHRoeSBsaWZlc3R5bGUgYnkgYWxsb3dpbmcgdGhlbSB0byBjcmVhdGUgZGFpbHkgZW50cmllcywgc2F2ZSBjdXN0b20gbWVhbHMgYW5kIGFjdGl2aXRpZXMsIGFuZCB0cmFjayB0aGVpciBwcm9ncmVzcyBlYXNpbHlcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnRmlyZWJhc2UnLCAnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdwcm9qZWN0cy9tb3ZlaXQnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdhcHB0cmFja3InLFxyXG4gICAgdGl0bGU6ICdBcHBUcmFja3InLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQXBwVHJhY2tyIGlzIGEgbG9jYWwgQVNQLk5FVCBDb3JlIE1WQyBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHlvdSB0cmFjayBqb2IgYXBwbGljYXRpb25zLCBpbmNsdWRpbmcgY29tcGFueSwgcG9zaXRpb24sIHN0YXR1cywgbm90ZXMsIGFuZCBqb2IgcG9zdGluZyBsaW5rcy4gRGF0YSBpcyBzdG9yZWQgbG9jYWxseSB1c2luZyBTUUxpdGUgYW5kIEVudGl0eSBGcmFtZXdvcmsgQ29yZVwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL21vdmVpdF9pbWFnZXMvYXBwdHJhY2tyX2ltZy5QTkcnLFxyXG4gICAgdGFnczogWydDIycsICdBU1AuTkVUIENvcmUnLCAnRW50aXR5IEZyYW1ld29yayBDb3JlJywgJ1NRTGl0ZSddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9BcHBUcmFja3InLFxyXG4gICAgaWQ6IDEsXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlcnNvbmFsUHJvamVjdHNUd28gPSBbXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnc2tldGNoYXBwJyxcclxuICAgIHRpdGxlOiAnU2tldGNoQXBwJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2tldGNoaW5nL2RyYXdpbmcgQW5kcm9pZCBhcHAuIENvbXBsZXRlIHdpdGggYW5pbWF0aW9ucywgc291bmQgZWZmZWN0cywgYW5kIG1hbnkgZmVhdHVyZXMgd2l0aGluIGFuIGVhc3ktdG8tdXNlIGludGVyZmFjZVwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NrZXRjaGFwcF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9Ta2V0Y2hBcHAnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdsZXR0ZXJydXNoJyxcclxuICAgIHRpdGxlOiAnTGV0dGVyIFJ1c2gnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSB0ZXh0IHVzZXIgaW50ZXJmYWNlIGdhbWUgYWJvdXQgcXVpY2tseSB0eXBpbmcgdmFsaWQgd29yZHMgd2l0aGluIGEgY2VydGFpbiB0aW1lIGxpbWl0LCBkZXZlbG9wZWQgd2l0aCBpbnNwaXJhdGlvbiBmcm9tIFdvcmQgQm9tYlwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2xldHRlcnJ1c2hfaW1nLmpwZycsXHJcbiAgICB0YWdzOiBbJ0MnLCAnQysrJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL0xldHRlclJ1c2gnLFxyXG4gICAgaWQ6IDEsXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjYWRlbWljUHJvamVjdHMgPSBbXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnc2Z1Z29iYmxlcycsXHJcbiAgICB0aXRsZTogJ1NGVSBHb2JibGVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIEFuZHJvaWQgZ2FtZSBidWlsdCB3aXRoIHR3byBvdGhlcnMgYXMgYSBzdWJtaXNzaW9uIGZvciBTRlUgQ1NTUyBGYWxsIEhhY2tzIDIwMjEgSGFja2F0aG9uLCB3aGljaCBwbGFjZWQgMm5kIGFuZCB3b24gJDMwMC4gRGV2ZWxvcGVkIHdpdGggaW5zcGlyYXRpb24gZnJvbSBHb2JibGV0IEdvYmJsZXJzLCBTRlUgR29iYmxlcyBpcyBhIHZlcnNpb24gb2YgdGljLXRhYy10b2UgY29udGFpbmluZyBkaWZmZXJlbnQgc2l6ZWQgcGllY2VzXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvc2Z1Z29iYmxlc19pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9TRlUtQ1MtRmFsbC1IYWNrcy0yMDIxJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnZHVja2h1bnQnLFxyXG4gICAgdGl0bGU6ICdEdWNrIEh1bnQnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQW4gQW5kcm9pZCBhcHAgY3JlYXRlZCBmb3IgU3lzdGVtSGFja3MgMjAyMiBIYWNrYXRob24gd2l0aCBpbnNwaXJhdGlvbiBmcm9tIFRyYW5zaXQuIEl0IHVzZXMgS290bGluIGFuZCBHb29nbGUgTWFwcyBBUElzIHRvIGxpc3QgbmVhcmJ5IGJvZGllcyBvZiB3YXRlci4gRWFjaCBsb2NhdGlvbiBoYXMgYSAnZHVjaycgYnV0dG9uIHRvIHRyYWNrIHlvdXIgZHVjayBzaWdodGluZ3MsIGFuZCB5b3UgY2FuIGdlbmVyYXRlIGEgcm91dGUgZnJvbSB5b3VyIGN1cnJlbnQgcG9zaXRpb25cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9kdWNraHVudF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnS290bGluJywgJ0dvb2dsZSBBUElzJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvZHVjay1odW50JyxcclxuICAgIGlkOiAxLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAncHJhY3RpY2FscGFyZW50YXBwJyxcclxuICAgIHRpdGxlOiAnUHJhY3RpY2FsIFBhcmVudCBBcHAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBzY2hvb2wgcHJvamVjdCBtYWRlIGluIGNvb3BlcmF0aW9uIHdpdGggMyBvdGhlcnMuIERlc2lnbmVkIHRvIGFzc2lzdCBwYXJlbnRzIHdpdGggdGhlaXIgY2hpbGRyZW4gaW4gbWFueSB3YXlzLiBJbmNsdWRlcyBhIHRpbWVvdXQgdGltZXIsIGNvaW4gZmxpcCwgdGFzayBtYW5hZ2VyLCBhbmQgb3RoZXIgYWN0aXZpdGllc1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BhcmVudGFwcF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9QcmFjdGljYWxQYXJlbnRBcHAnLFxyXG4gICAgaWQ6IDIsXHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjYWRlbWljUHJvamVjdHNUd28gPSBbXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAncmVhbHRpbWVjbGFzc2lmaWVyJyxcclxuICAgIHRpdGxlOiAnSGVscCBmb3IgSGVscGxlc3NuZXNzOiBSZWFsLVRpbWUgRW1vdGlvbiBDbGFzc2lmaWNhdGlvbicsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkRldmVsb3BlZCBhIHJlYWwtdGltZSBlbW90aW9uIHJlY29nbml0aW9uIHN5c3RlbSB0aGF0IGNsYXNzaWZpZXMgbGV2ZWxzIG9mIGhlbHBsZXNzbmVzcyBmcm9tIHNob3J0IHZpZGVvIGNsaXBzIHVzaW5nIGRlZXAgbGVhcm5pbmcuIEJ1aWx0IGEgY3VzdG9tIGRhdGFzZXQgb2YgYW5ub3RhdGVkIGh1bWFuIGV4cHJlc3Npb25zLCBhbmQgZXZhbHVhdGVkIHRocmVlIHR5cGVzIG9mIG1vZGVsc1wiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3JlYWx0aW1lY2xhc3NpZmllcl9pbWcucG5nJyxcclxuICAgIHRhZ3M6IFsnUHl0aG9uJywgJ01hY2hpbmUgTGVhcm5pbmcnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vUmVhbC1UaW1lLUhlbHBsZXNzbmVzcy1DbGFzc2lmaWVyJyxcclxuICAgIGlkOiAwLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcHJvamVjdElkOiAnd2VhdGhlcm1vbml0b3InLFxyXG4gICAgdGl0bGU6ICdCZWFnbGVZLUFJIFdlYXRoZXIgTW9uaXRvcmluZyBTeXN0ZW0nLFxyXG4gICAgZGVzY3JpcHRpb246XCJCdWlsdCBhIHJlYWwtdGltZSBlbWJlZGRlZCBzeXN0ZW0gb24gdGhlIEJlYWdsZVktQUkgdG8gbW9uaXRvciBhbmQgZGlzcGxheSBsb2NhbCB3ZWF0aGVyIGNvbmRpdGlvbnMuIERldmVsb3BlZCB0aGUgc3lzdGVtIGluIEMgb24gYSBEZWJpYW4gTGludXggVk0sIGludGVncmF0aW5nIGhhcmR3YXJlIGNvbXBvbmVudHMgc3VjaCBhcyBhIHRlbXBlcmF0dXJlIHNlbnNvciwgTmVvUGl4ZWwgTEVEIHN0cmlwLCBMQ0Qgc2NyZWVuLCBhbmQgcm90YXJ5IGVuY29kZXIuXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvd2VhdGhlcm1vbml0b3JfaW1nLlBORycsXHJcbiAgICB0YWdzOiBbJ0MnLCAnRW1iZWRkZWQgU3lzdGVtcyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9CZWFnbGVZQUktV2VhdGhlci1Nb25pdG9yaW5nLVN5c3RlbScsXHJcbiAgICBpZDogMSxcclxuICB9XHJcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==