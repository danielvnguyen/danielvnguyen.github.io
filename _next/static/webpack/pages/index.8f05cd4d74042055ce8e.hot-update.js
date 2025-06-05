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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicGVyc29uYWxQcm9qZWN0cyIsInByb2plY3RJZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJ2aXNpdCIsImlkIiwiYWNhZGVtaWNQcm9qZWN0cyIsImFjYWRlbWljUHJvamVjdHNUd28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxnQkFBZ0IsR0FBRyxDQUM5QjtBQUNFQyxXQUFTLEVBQUUsUUFEYjtBQUVFQyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsYUFBVyxFQUFFLDhOQUhmO0FBSUVDLE9BQUssRUFBRSxzQ0FKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxVQUFELEVBQWEsTUFBYixDQUxSO0FBTUVDLE9BQUssRUFBRSxpQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQUQ4QixFQVU5QjtBQUNFTixXQUFTLEVBQUUsV0FEYjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxhQUFXLEVBQUUsNkhBSGY7QUFJRUMsT0FBSyxFQUFFLDJCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE1BQUQsQ0FMUjtBQU1FQyxPQUFLLEVBQUUsNENBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FWOEIsRUFtQjlCO0FBQ0VOLFdBQVMsRUFBRSxZQURiO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLGFBQVcsRUFBRSxvSUFIZjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLEtBQU4sQ0FMUjtBQU1FQyxPQUFLLEVBQUUsNkNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQjhCLENBQXpCO0FBOEJBLElBQU1DLGdCQUFnQixHQUFHLENBQzlCO0FBQ0VQLFdBQVMsRUFBRSxZQURiO0FBRUVDLE9BQUssRUFBRSxhQUZUO0FBR0VDLGFBQVcsRUFBRSwwUEFIZjtBQUlFQyxPQUFLLEVBQUUsNEJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSx5REFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQUQ4QixFQVU5QjtBQUNFTixXQUFTLEVBQUUsVUFEYjtBQUVFQyxPQUFLLEVBQUUsV0FGVDtBQUdFQyxhQUFXLEVBQUUsa1JBSGY7QUFJRUMsT0FBSyxFQUFFLDBCQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxhQUFYLENBTFI7QUFNRUMsT0FBSyxFQUFFLHdDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVjhCLEVBbUI5QjtBQUNFTixXQUFTLEVBQUUsb0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNCQUZUO0FBR0VDLGFBQVcsRUFBRSwwTEFIZjtBQUlFQyxPQUFLLEVBQUUsMkJBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxDQUxSO0FBTUVDLE9BQUssRUFBRSxxREFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5COEIsQ0FBekI7QUE4QkEsSUFBTUUsbUJBQW1CLEdBQUcsQ0FDakM7QUFDRVIsV0FBUyxFQUFFLG9CQURiO0FBRUVDLE9BQUssRUFBRSx5REFGVDtBQUdFQyxhQUFXLEVBQUMsZ09BSGQ7QUFJRUMsT0FBSyxFQUFFLG9DQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxrQkFBWCxDQUxSO0FBTUVDLE9BQUssRUFBRSxvRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURpQyxFQVVqQztBQUNFTixXQUFTLEVBQUUsZ0JBRGI7QUFFRUMsT0FBSyxFQUFFLHNDQUZUO0FBR0VDLGFBQVcsRUFBQyx3UUFIZDtBQUlFQyxPQUFLLEVBQUUsZ0NBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsR0FBRCxFQUFNLGtCQUFOLENBTFI7QUFNRUMsT0FBSyxFQUFFLHNFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVmlDLENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmMDVjZDRkNzQwNDIwNTVjZThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGVyc29uYWxQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdtb3ZlaXQnLFxyXG4gICAgdGl0bGU6ICdNb3ZlSXQhIC0gRml0bmVzcyBUcmFja2VyJyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIk1vdmVJdCEgaXMgeW91ciBkYWlseSBmaXRuZXNzIHRyYWNrZXIgYXBwLCBkZXNpZ25lZCB0byBpbnNwaXJlIGFuZCBlbXBvd2VyIHVzZXJzIHRvIG1haW50YWluIGEgaGVhbHRoeSBsaWZlc3R5bGUgYnkgYWxsb3dpbmcgdGhlbSB0byBjcmVhdGUgZGFpbHkgZW50cmllcywgc2F2ZSBjdXN0b20gbWVhbHMgYW5kIGFjdGl2aXRpZXMsIGFuZCB0cmFjayB0aGVpciBwcm9ncmVzcyBlYXNpbHlcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9tb3ZlaXRfaW1hZ2VzL21vdmVpdF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnRmlyZWJhc2UnLCAnSmF2YSddLFxyXG4gICAgdmlzaXQ6ICdwcm9qZWN0cy9tb3ZlaXQnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdza2V0Y2hhcHAnLFxyXG4gICAgdGl0bGU6ICdTa2V0Y2hBcHAnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQSBza2V0Y2hpbmcvZHJhd2luZyBBbmRyb2lkIGFwcC4gQ29tcGxldGUgd2l0aCBhbmltYXRpb25zLCBzb3VuZCBlZmZlY3RzLCBhbmQgbWFueSBmZWF0dXJlcyB3aXRoaW4gYW4gZWFzeS10by11c2UgaW50ZXJmYWNlXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvc2tldGNoYXBwX2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydKYXZhJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL1NrZXRjaEFwcCcsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHByb2plY3RJZDogJ2xldHRlcnJ1c2gnLFxyXG4gICAgdGl0bGU6ICdMZXR0ZXIgUnVzaCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHRleHQgdXNlciBpbnRlcmZhY2UgZ2FtZSBhYm91dCBxdWlja2x5IHR5cGluZyB2YWxpZCB3b3JkcyB3aXRoaW4gYSBjZXJ0YWluIHRpbWUgbGltaXQsIGRldmVsb3BlZCB3aXRoIGluc3BpcmF0aW9uIGZyb20gV29yZCBCb21iXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvbGV0dGVycnVzaF9pbWcuanBnJyxcclxuICAgIHRhZ3M6IFsnQycsICdDKysnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2RhbmllbHZuZ3V5ZW4vTGV0dGVyUnVzaCcsXHJcbiAgICBpZDogMixcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWNhZGVtaWNQcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdzZnVnb2JibGVzJyxcclxuICAgIHRpdGxlOiAnU0ZVIEdvYmJsZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQW4gQW5kcm9pZCBnYW1lIGJ1aWx0IHdpdGggdHdvIG90aGVycyBhcyBhIHN1Ym1pc3Npb24gZm9yIFNGVSBDU1NTIEZhbGwgSGFja3MgMjAyMSBIYWNrYXRob24sIHdoaWNoIHBsYWNlZCAybmQgYW5kIHdvbiAkMzAwLiBEZXZlbG9wZWQgd2l0aCBpbnNwaXJhdGlvbiBmcm9tIEdvYmJsZXQgR29iYmxlcnMsIFNGVSBHb2JibGVzIGlzIGEgdmVyc2lvbiBvZiB0aWMtdGFjLXRvZSBjb250YWluaW5nIGRpZmZlcmVudCBzaXplZCBwaWVjZXNcIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy9zZnVnb2JibGVzX2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydKYXZhJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL1NGVS1DUy1GYWxsLUhhY2tzLTIwMjEnLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdkdWNraHVudCcsXHJcbiAgICB0aXRsZTogJ0R1Y2sgSHVudCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBbiBBbmRyb2lkIGFwcCBjcmVhdGVkIGZvciBTeXN0ZW1IYWNrcyAyMDIyIEhhY2thdGhvbiB3aXRoIGluc3BpcmF0aW9uIGZyb20gVHJhbnNpdC4gSXQgdXNlcyBLb3RsaW4gYW5kIEdvb2dsZSBNYXBzIEFQSXMgdG8gbGlzdCBuZWFyYnkgYm9kaWVzIG9mIHdhdGVyLiBFYWNoIGxvY2F0aW9uIGhhcyBhICdkdWNrJyBidXR0b24gdG8gdHJhY2sgeW91ciBkdWNrIHNpZ2h0aW5ncywgYW5kIHlvdSBjYW4gZ2VuZXJhdGUgYSByb3V0ZSBmcm9tIHlvdXIgY3VycmVudCBwb3NpdGlvblwiLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2R1Y2todW50X2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydLb3RsaW4nLCAnR29vZ2xlIEFQSXMnXSxcclxuICAgIHZpc2l0OiAnaHR0cHM6Ly9kZXZwb3N0LmNvbS9zb2Z0d2FyZS9kdWNrLWh1bnQnLFxyXG4gICAgaWQ6IDEsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdwcmFjdGljYWxwYXJlbnRhcHAnLFxyXG4gICAgdGl0bGU6ICdQcmFjdGljYWwgUGFyZW50IEFwcCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNjaG9vbCBwcm9qZWN0IG1hZGUgaW4gY29vcGVyYXRpb24gd2l0aCAzIG90aGVycy4gRGVzaWduZWQgdG8gYXNzaXN0IHBhcmVudHMgd2l0aCB0aGVpciBjaGlsZHJlbiBpbiBtYW55IHdheXMuIEluY2x1ZGVzIGEgdGltZW91dCB0aW1lciwgY29pbiBmbGlwLCB0YXNrIG1hbmFnZXIsIGFuZCBvdGhlciBhY3Rpdml0aWVzXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcGFyZW50YXBwX2ltZy5qcGcnLFxyXG4gICAgdGFnczogWydKYXZhJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL1ByYWN0aWNhbFBhcmVudEFwcCcsXHJcbiAgICBpZDogMixcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYWNhZGVtaWNQcm9qZWN0c1R3byA9IFtcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICdyZWFsdGltZWNsYXNzaWZpZXInLFxyXG4gICAgdGl0bGU6ICdIZWxwIGZvciBIZWxwbGVzc25lc3M6IFJlYWwtVGltZSBFbW90aW9uIENsYXNzaWZpY2F0aW9uJyxcclxuICAgIGRlc2NyaXB0aW9uOlwiRGV2ZWxvcGVkIGEgcmVhbC10aW1lIGVtb3Rpb24gcmVjb2duaXRpb24gc3lzdGVtIHRoYXQgY2xhc3NpZmllcyBsZXZlbHMgb2YgaGVscGxlc3NuZXNzIGZyb20gc2hvcnQgdmlkZW8gY2xpcHMgdXNpbmcgZGVlcCBsZWFybmluZy4gQnVpbHQgYSBjdXN0b20gZGF0YXNldCBvZiBhbm5vdGF0ZWQgaHVtYW4gZXhwcmVzc2lvbnMsIGFuZCBldmFsdWF0ZWQgdGhyZWUgdHlwZXMgb2YgbW9kZWxzXCIsXHJcbiAgICBpbWFnZTogJy9pbWFnZXMvcmVhbHRpbWVjbGFzc2lmaWVyX2ltZy5wbmcnLFxyXG4gICAgdGFnczogWydQeXRob24nLCAnTWFjaGluZSBMZWFybmluZyddLFxyXG4gICAgdmlzaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vZGFuaWVsdm5ndXllbi9SZWFsLVRpbWUtSGVscGxlc3NuZXNzLUNsYXNzaWZpZXInLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwcm9qZWN0SWQ6ICd3ZWF0aGVybW9uaXRvcicsXHJcbiAgICB0aXRsZTogJ0JlYWdsZVktQUkgV2VhdGhlciBNb25pdG9yaW5nIFN5c3RlbScsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkJ1aWx0IGEgcmVhbC10aW1lIGVtYmVkZGVkIHN5c3RlbSBvbiB0aGUgQmVhZ2xlWS1BSSB0byBtb25pdG9yIGFuZCBkaXNwbGF5IGxvY2FsIHdlYXRoZXIgY29uZGl0aW9ucy4gRGV2ZWxvcGVkIHRoZSBzeXN0ZW0gaW4gQyBvbiBhIERlYmlhbiBMaW51eCBWTSwgaW50ZWdyYXRpbmcgaGFyZHdhcmUgY29tcG9uZW50cyBzdWNoIGFzIGEgdGVtcGVyYXR1cmUgc2Vuc29yLCBOZW9QaXhlbCBMRUQgc3RyaXAsIExDRCBzY3JlZW4sIGFuZCByb3RhcnkgZW5jb2Rlci5cIixcclxuICAgIGltYWdlOiAnL2ltYWdlcy93ZWF0aGVybW9uaXRvcl9pbWcuUE5HJyxcclxuICAgIHRhZ3M6IFsnQycsICdFbWJlZGRlZCBTeXN0ZW1zJ10sXHJcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuL0JlYWdsZVlBSS1XZWF0aGVyLU1vbml0b3JpbmctU3lzdGVtJyxcclxuICAgIGlkOiAxLFxyXG4gIH1cclxuXTsiXSwic291cmNlUm9vdCI6IiJ9