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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Daniel\\Documents\\GitHub\\PortfolioWebsite\\src\\components\\Header\\Header.js",
    _this = undefined,
    _s = $RefreshSig$();






var Header = function Header() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.StickyHeader, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.Div1, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "/#",
          style: {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.Span, {
            children: "Daniel Van Nguyen"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
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
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.Div2, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
            to: "/about",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
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
                  lineNumber: 45,
                  columnNumber: 37
                }, _this), " About"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#projects",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
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
                  lineNumber: 54,
                  columnNumber: 37
                }, _this), " Projects"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: "/#contact",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.NavLink, {
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
                  lineNumber: 63,
                  columnNumber: 37
                }, _this), " Contact"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.Div3, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://github.com/danielvnguyen",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          href: "https://www.linkedin.com/in/daniel-v-nguyen/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
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


/***/ }),

/***/ "./node_modules/@remix-run/router/dist/router.js":
/*!*******************************************************!*\
  !*** ./node_modules/@remix-run/router/dist/router.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* binding */ AbortedDeferredError; },
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "IDLE_BLOCKER": function() { return /* binding */ IDLE_BLOCKER; },
/* harmony export */   "IDLE_FETCHER": function() { return /* binding */ IDLE_FETCHER; },
/* harmony export */   "IDLE_NAVIGATION": function() { return /* binding */ IDLE_NAVIGATION; },
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": function() { return /* binding */ UNSAFE_DEFERRED_SYMBOL; },
/* harmony export */   "UNSAFE_DeferredData": function() { return /* binding */ DeferredData; },
/* harmony export */   "UNSAFE_ErrorResponseImpl": function() { return /* binding */ ErrorResponseImpl; },
/* harmony export */   "UNSAFE_convertRouteMatchToUiMatch": function() { return /* binding */ convertRouteMatchToUiMatch; },
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": function() { return /* binding */ convertRoutesToDataRoutes; },
/* harmony export */   "UNSAFE_getPathContributingMatches": function() { return /* binding */ getPathContributingMatches; },
/* harmony export */   "UNSAFE_invariant": function() { return /* binding */ invariant; },
/* harmony export */   "UNSAFE_warning": function() { return /* binding */ warning; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "createRouter": function() { return /* binding */ createRouter; },
/* harmony export */   "createStaticHandler": function() { return /* binding */ createStaticHandler; },
/* harmony export */   "defer": function() { return /* binding */ defer; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "getStaticContextFromError": function() { return /* binding */ getStaticContextFromError; },
/* harmony export */   "getToPathname": function() { return /* binding */ getToPathname; },
/* harmony export */   "isDeferredData": function() { return /* binding */ isDeferredData; },
/* harmony export */   "isRouteErrorResponse": function() { return /* binding */ isRouteErrorResponse; },
/* harmony export */   "joinPaths": function() { return /* binding */ joinPaths; },
/* harmony export */   "json": function() { return /* binding */ json; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "normalizePathname": function() { return /* binding */ normalizePathname; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; },
/* harmony export */   "redirect": function() { return /* binding */ redirect; },
/* harmony export */   "redirectDocument": function() { return /* binding */ redirectDocument; },
/* harmony export */   "resolvePath": function() { return /* binding */ resolvePath; },
/* harmony export */   "resolveTo": function() { return /* binding */ resolveTo; },
/* harmony export */   "stripBasename": function() { return /* binding */ stripBasename; }
/* harmony export */ });
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation
  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref,
    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
const immutableRouteKeys = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function isIndexRoute(route) {
  return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (manifest === void 0) {
    manifest = {};
  }
  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, mapRouteProperties(route), {
        id
      });
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
        id,
        children: undefined
      });
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
      }
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i],
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */
function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  // ensure `/` is added at the beginning if the path is absolute
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = p => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    // only apply the splat if it's the last segment
    if (isLastSegment && segment === "*") {
      const star = "*";
      // Apply the splat
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:(\w+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
      return stringify(param);
    }
    // Remove any optional markers from optional static segments
    return segment.replace(/\?$/g, "");
  })
  // Remove empty segments
  .filter(segment => !!segment);
  return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */
function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */
const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
    // Set up an AbortController + Promise we can race against to exit early
    // cancellation
    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();
    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));
    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }
    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key);
    // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject
    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, undefined, data), error => this.onSettle(promise, key, error));
    // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values
    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }
  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }
    this.pendingKeysSet.delete(key);
    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }
    // If the promise was resolved/rejected with undefined, we'll throw an error as you
    // should always resolve with a value or null
    if (error === undefined && data === undefined) {
      let undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
      Object.defineProperty(promise, "_error", {
        get: () => undefinedError
      });
      this.emit(false, key);
      return Promise.reject(undefinedError);
    }
    if (data === undefined) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }
    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }
  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }
  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }
  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }
  async resolveData(signal) {
    let aborted = false;
    if (!this.done) {
      let onAbort = () => this.cancel();
      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);
          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }
    return aborted;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */
class ErrorResponseImpl {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined,
  json: undefined,
  text: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const defaultMapRouteProperties = route => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
  const isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  const isServer = !isBrowser;
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let mapRouteProperties;
  if (init.mapRouteProperties) {
    mapRouteProperties = init.mapRouteProperties;
  } else if (init.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = init.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  // Routes keyed by ID
  let manifest = {};
  // Routes in tree format for matching
  let dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  // Config driven behavior flags
  let future = _extends({
    v7_normalizeFormMethod: false,
    v7_prependBasename: false
  }, init.future);
  // Cleanup function for history
  let unlistenHistory = null;
  // Externally-provided functions to call on all state changes
  let subscribers = new Set();
  // Externally-provided object to hold scroll restoration locations during routing
  let savedScrollPositions = null;
  // Externally-provided function to get scroll restoration keys
  let getScrollRestorationKey = null;
  // Externally-provided function to get current scroll position
  let getScrollPosition = null;
  // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialErrors = null;
  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }
  let initialized =
  // All initialMatches need to be loaded before we're ready.  If we have lazy
  // functions around still then we'll need to run them in initialize()
  !initialMatches.some(m => m.route.lazy) && (
  // And we have to either have no loaders or have been provided hydrationData
  !initialMatches.some(m => m.route.loader) || init.hydrationData != null);
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  };
  // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)
  let pendingAction = Action.Pop;
  // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?
  let pendingPreventScrollReset = false;
  // AbortController for the active navigation
  let pendingNavigationController;
  // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted
  let isUninterruptedRevalidation = false;
  // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidator()
  //  - X-Remix-Revalidate (from redirect)
  let isRevalidationRequired = false;
  // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission
  let cancelledDeferredRoutes = [];
  // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation
  let cancelledFetcherLoads = [];
  // AbortControllers for any in-flight fetchers
  let fetchControllers = new Map();
  // Track loads based on the order in which they started
  let incrementingLoadId = 0;
  // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation
  let pendingNavigationLoadId = -1;
  // Fetchers that triggered data reloads as a result of their actions
  let fetchReloadIds = new Map();
  // Fetchers that triggered redirect navigations
  let fetchRedirectIds = new Set();
  // Most recent href/match for fetcher.load calls for fetchers
  let fetchLoadMatches = new Map();
  // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.
  let activeDeferreds = new Map();
  // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change
  let blockerFunctions = new Map();
  // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state
  let ignoreNextHistoryUpdate = false;
  // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();
  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;
      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1);
        // Put the blocker into a blocked state
        updateBlocker(blockerKey, {
          state: "blocked",
          location,
          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            });
            // Re-do the same POP navigation we just blocked
            init.history.go(delta);
          },
          reset() {
            let blockers = new Map(state.blockers);
            blockers.set(blockerKey, IDLE_BLOCKER);
            updateState({
              blockers
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    });
    // Kick off initial data load if needed.  Use Pop to avoid modifying history
    // Note we don't do any handling of lazy here.  For SPA's it'll get handled
    // in the normal navigation flow.  For SSR it's expected that lazy modules are
    // resolved prior to router creation since we can't go into a fallbackElement
    // UI for SSR'd apps
    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  }
  // Clean up a router and it's side effects
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  // Subscribe to state updates for the router
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  // Update our state and notify the calling context of the change
  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  }
  // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState
  function completeNavigation(location, newState) {
    var _location$state, _location$state2;
    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    }
    // Always preserve any existing loaderData from re-used routes
    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
    // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = undefined;
    }
    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    }
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers
    }));
    // Reset stateful navigation vars
    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  }
  // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history
    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;
    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          });
          // Send the same navigation through
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({
            blockers
          });
        }
      });
      return;
    }
    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  }
  // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    });
    // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders
    if (state.navigation.state === "submitting") {
      return;
    }
    // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    }
    // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes
    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  }
  // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(routesToUse, location, basename);
    // Short circuit with a 404 on the root error boundary if we match nothing
    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(routesToUse);
      // Cancel all pending deferred on 404s since we don't keep any routes
      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    }
    // Short circuit if it's only a hash change and not a revalidation or
    // mutation submission.
    //
    // Ignore on initial page loads because since the initial load will always
    // be "same hash".  For example, on /page#hash and submit a <Form method="post">
    // which will default to a navigation to /page
    if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    }
    // Create a controller/Request for this navigation
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;
    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });
      if (actionOutput.shortCircuited) {
        return;
      }
      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      // Create a GET request for the loaders
      request = new Request(request.url, {
        signal: request.signal
      });
    }
    // Call loaders
    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, pendingActionData, pendingError);
    if (shortCircuited) {
      return;
    }
    // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation
    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  }
  // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  async function handleAction(request, location, submission, matches, opts) {
    if (opts === void 0) {
      opts = {};
    }
    interruptActiveLoads();
    // Put us in a submitting state
    let navigation = getSubmittingNavigation(location, submission);
    updateState({
      navigation
    });
    // Call our action and get the result
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename);
      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }
    if (isRedirectResult(result)) {
      let replace;
      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again
      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }
      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }
    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  }
  // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  async function handleLoaders(request, location, matches, overrideNavigation, submission, fetcherSubmission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError);
    // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op
    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId));
    pendingNavigationLoadId = ++incrementingLoadId;
    // Short circuit if we have no loaders to run
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers = markFetchRedirectsDone();
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}, updatedFetchers ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      return {
        shortCircuited: true
      };
    }
    // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)
    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }
    revalidatingFetchers.forEach(rf => {
      if (fetchControllers.has(rf.key)) {
        abortFetcher(rf.key);
      }
      if (rf.controller) {
        // Fetchers use an independent AbortController so that aborting a fetcher
        // (via deleteFetcher) does not abort the triggering navigation that
        // triggered the revalidation
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    // Proxy navigation abort through to revalidation fetchers
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(f => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    }
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    }
    // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    }
    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key));
    // If any loaders returned a redirect Response, start a new REPLACE navigation
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      await startRedirectNavigation(state, redirect.result, {
        replace
      });
      return {
        shortCircuited: true
      };
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Wire up subscribers to update loaderData as promises settle
    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return _extends({
      loaderData,
      errors
    }, shouldUpdateFetchers ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  // Trigger a fetcher load/submit for the given fetcher key
  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, routeId, opts == null ? void 0 : opts.relative);
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: normalizedPath
      }));
      return;
    }
    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
    if (error) {
      setFetcherError(key, routeId, error);
      return;
    }
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    }
    // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations
    fetchLoadMatches.set(key, {
      routeId,
      path
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  }
  // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    if (!match.route.action && !match.route.lazy) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    }
    // Put this fetcher into it's submitting state
    let existingFetcher = state.fetchers.get(key);
    let fetcher = getSubmittingFetcher(submission, existingFetcher);
    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the action for the fetcher
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, manifest, mapRouteProperties, basename);
    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our action started, so that
        // should take precedence over this redirect navigation.  We already
        // set isRevalidationRequired so all loaders for the new route should
        // fire unless opted out via shouldRevalidate
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        let loadingFetcher = getLoadingFetcher(submission);
        state.fetchers.set(key, loadingFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return startRedirectNavigation(state, actionResult, {
          fetcherSubmission: submission
        });
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }
    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }
    // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, {
      [match.route.id]: actionResult.data
    }, undefined // No need to send through errors since we short circuit above
    );
    // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data
    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
      state.fetchers.set(staleKey, revalidatingFetcher);
      if (fetchControllers.has(staleKey)) {
        abortFetcher(staleKey);
      }
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach(rf => abortFetcher(rf.key));
    abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);
    if (redirect) {
      if (redirect.idx >= matchesToLoad.length) {
        // If this redirect came from a fetcher make sure we mark it in
        // fetchRedirectIds so it doesn't get revalidated on the next set of
        // loader executions
        let fetcherKey = revalidatingFetchers[redirect.idx - matchesToLoad.length].key;
        fetchRedirectIds.add(fetcherKey);
      }
      return startRedirectNavigation(state, redirect.result);
    }
    // Process and commit output from loaders
    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    // Since we let revalidations complete even if the submitting fetcher was
    // deleted, only put it back to idle if it hasn't been deleted
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    let didAbortFetchLoads = abortStaleFetchLoads(loadId);
    // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  }
  // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key);
    // Put this fetcher into it's loading state
    let loadingFetcher = getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined);
    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
    // Call the loader for this fetcher route match
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, manifest, mapRouteProperties, basename);
    // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens
    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    }
    // We can delete this so long as we weren't aborted by our our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    // If the loader threw a redirect Response, start a new REPLACE navigation
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        // A new navigation was kicked off after our loader started, so that
        // should take precedence over this redirect navigation
        let doneFetcher = getDoneFetcher(undefined);
        state.fetchers.set(key, doneFetcher);
        updateState({
          fetchers: new Map(state.fetchers)
        });
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(state, result);
        return;
      }
    }
    // Process any non-redirect errors thrown
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key);
      // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?
      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }
    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
    // Put the fetcher back into an idle state
    let doneFetcher = getDoneFetcher(result.data);
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  async function startRedirectNavigation(state, redirect, _temp) {
    let {
      submission,
      fetcherSubmission,
      replace
    } = _temp === void 0 ? {} : _temp;
    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }
    let redirectLocation = createLocation(state.location, redirect.location, {
      _isRedirect: true
    });
    invariant(redirectLocation, "Expected a location on the redirect navigation");
    if (isBrowser) {
      let isDocumentReload = false;
      if (redirect.reloadDocument) {
        // Hard reload if the response contained X-Remix-Reload-Document
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(redirect.location)) {
        const url = init.history.createURL(redirect.location);
        isDocumentReload =
        // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin ||
        // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace) {
          routerWindow.location.replace(redirect.location);
        } else {
          routerWindow.location.assign(redirect.location);
        }
        return;
      }
    }
    // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled
    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push;
    // Use the incoming submission if provided, fallback on the active one in
    // state.navigation
    let {
      formMethod,
      formAction,
      formEncType
    } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, activeSubmission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // If we have a navigation submission, we will preserve it through the
      // redirect navigation
      let overrideNavigation = getLoadingNavigation(redirectLocation, submission);
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }
  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename)), ...fetchersToLoad.map(f => {
      if (f.matches && f.match && f.controller) {
        return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, f.controller.signal), f.match, f.matches, manifest, mapRouteProperties, basename);
      } else {
        let error = {
          type: ResultType.error,
          error: getInternalRouterError(404, {
            pathname: f.path
          })
        };
        return error;
      }
    })]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, loaderResults.map(() => request.signal), false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, fetchersToLoad.map(f => f.controller ? f.controller.signal : null), true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true;
    // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation
    cancelledDeferredRoutes.push(...cancelActiveDeferreds());
    // Abort in-flight fetcher loads
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    // Don't abort the controller if this is a deletion of a fetcher.submit()
    // in it's loading phase since - we don't want to abort the corresponding
    // revalidation and want them to complete and land
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  // Utility function to update blockers, ensuring valid state transitions
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({
      blockers
    });
  }
  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;
    if (blockerFunctions.size === 0) {
      return;
    }
    // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    }
    // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function
    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  }
  // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || null;
    // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey) {
      let key = getScrollRestorationKey(location, matches.map(m => convertRouteMatchToUiMatch(m, state.loaderData)));
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
  }
  router = {
    get basename() {
      return basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties;
  if (opts != null && opts.mapRouteProperties) {
    mapRouteProperties = opts.mapRouteProperties;
  } else if (opts != null && opts.detectErrorBoundary) {
    // If they are still using the deprecated version, wrap it with the new API
    let detectErrorBoundary = opts.detectErrorBoundary;
    mapRouteProperties = route => ({
      hasErrorBoundary: detectErrorBoundary(route)
    });
  } else {
    mapRouteProperties = defaultMapRouteProperties;
  }
  let dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */
  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    let result = await queryImpl(request, location, matches, requestContext);
    if (isResponse(result)) {
      return result;
    }
    // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location
    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */
  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    // SSR supports HEAD requests while SPA doesn't
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }
    let result = await queryImpl(request, location, matches, requestContext, match);
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : undefined;
    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    }
    // Pick off the right state value to return
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      var _result$activeDeferre;
      let data = Object.values(result.loaderData)[0];
      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }
      return data;
    }
    return undefined;
  }
  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }
      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error) {
          throw e.response;
        }
        return e.response;
      }
      // Redirects are always returned since they don't propagate to catch
      // boundaries
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, manifest, mapRouteProperties, basename, {
        isStaticRequest: true,
        isRouteRequest,
        requestContext
      });
      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted: " + request.method + " " + request.url);
      }
    }
    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }
    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: ResultType.error,
        error
      };
    }
    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }
    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      });
      // action status codes take precedence over loader status codes
      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    }
    // Create a GET request for the loaders
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }
  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null;
    // Short circuit if we have no loaders to run (queryRoute())
    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader || m.route.lazy);
    // Short circuit if we have no loaders to run (query())
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, manifest, mapRouteProperties, basename, {
      isStaticRequest: true,
      isRouteRequest,
      requestContext
    }))]);
    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted: " + request.method + " " + request.url);
    }
    // Process and commit output from loaders
    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds);
    // Add a null for any non-loader matches for proper revalidation on the client
    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */
function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });
  return newContext;
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId != null && relative !== "path") {
    // Grab matches up to the calling route so our route-relative logic is
    // relative to the correct source route.  When using relative:path,
    // fromRouteId is ignored since that is always relative to the current
    // location path
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  // Resolve the relative path
  let path = resolveTo(to ? to : ".", getPathContributingMatches(contextualMatches).map(m => m.pathnameBase), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
  // When `to` is not specified we inherit search/hash from the current
  // location, unlike when to="." and we just inherit the path.
  // See https://github.com/remix-run/remix/issues/927
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  // Add an ?index param for matched index routes if we don't already have one
  if ((to == null || to === "" || to === ".") && activeRouteMatch && activeRouteMatch.route.index && !hasNakedIndexQuery(path.search)) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname.  If
  // this is a root navigation, then just use the raw basename which allows
  // the basename to have full control over the presence of a trailing slash
  // on root actions
  if (prependBasename && basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
  // Return location verbatim on non-submission navigations
  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, {
      type: "invalid-body"
    })
  });
  // Create a Submission on non-GET navigations
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== undefined) {
    if (opts.formEncType === "text/plain") {
      // text only support POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ?
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
      Array.from(opts.body.entries()).reduce((acc, _ref3) => {
        let [name, value] = _ref3;
        return "" + acc + name + "=" + value + "\n";
      }, "") : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: undefined,
          json: undefined,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      // json only supports POST/PUT/PATCH/DELETE submissions
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: undefined,
            json,
            text: undefined
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(typeof FormData === "function", "FormData is not available in this environment");
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: undefined,
    text: undefined
  };
  if (isMutationMethod(submission.formMethod)) {
    return {
      path,
      submission
    };
  }
  // Flatten submission onto URLSearchParams for GET submissions
  let parsedPath = parsePath(path);
  // On GET navigation submissions we can drop the ?index param from the
  // resulting location since all loaders will run.  But fetcher GET submissions
  // only run a single loader so we need to preserve any incoming ?index params
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
}
// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;
  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionData, pendingError) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  // Pick navigation matches that are net-new or qualify for revalidation
  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.lazy) {
      // We haven't loaded this route yet so we don't know if it's got a loader!
      return true;
    }
    if (match.route.loader == null) {
      return false;
    }
    // Always call the loader on new route instances and pending defer cancellations
    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    }
    // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate:
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      isRevalidationRequired ||
      // Clicked the same link, resubmitted a GET form
      currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search ||
      // Search params affect all loaders
      currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  });
  // Pick fetcher.loads that need to be revalidated
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    // Don't revalidate if fetcher won't be present in the subsequent render
    if (!matches.some(m => m.route.id === f.routeId)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    // If the fetcher path no longer matches, push it in with null matches so
    // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
    // currently only a use-case for Remix HMR where the route tree can change
    // at runtime and remove a route previously loaded via a fetcher
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    // Revalidating fetchers are decoupled from the route matches since they
    // load from a static href.  They revalidate based on explicit revalidation
    // (submission, useRevalidator, or X-Remix-Revalidate)
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      // Never trigger a revalidation of an actively redirecting fetcher
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.includes(key)) {
      // Always revalidate if the fetcher was cancelled
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
      // If the fetcher hasn't ever completed loading yet, then this isn't a
      // revalidation, it would just be a brand new load if an explicit
      // revalidation is required
      shouldRevalidate = isRevalidationRequired;
    } else {
      // Otherwise fall back on any user-defined shouldRevalidate, defaulting
      // to explicit revalidations only
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate: isRevalidationRequired
      }));
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id;
  // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred
  let isMissingData = currentLoaderData[match.route.id] === undefined;
  // Always load if this is a net-new route or we don't yet have data
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */
async function loadLazyRouteModule(route, mapRouteProperties, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  // If the lazy route function was executed and removed by another parallel
  // call then we can return - first lazy() to finish wins because the return
  // value of lazy is expected to be static
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  // Update the route in place.  This should be safe because there's no way
  // we could yet be sitting on this route as we can't get there without
  // resolving lazy() first.
  //
  // This is different than the HMR "update" use-case where we may actively be
  // on the route being updated.  The main concern boils down to "does this
  // mutation affect any ongoing navigations or any current state.matches
  // values?".  If not, it should be safe to update in place.
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== undefined &&
    // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  // Mutate the route with the provided updates.  Do this first so we pass
  // the updated version to mapRouteProperties
  Object.assign(routeToUpdate, routeUpdates);
  // Mutate the `hasErrorBoundary` property on the route based on the route
  // updates and remove the `lazy` function so we don't resolve the lazy
  // route again.
  Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
    lazy: undefined
  }));
}
async function callLoaderOrAction(type, request, match, matches, manifest, mapRouteProperties, basename, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let resultType;
  let result;
  let onReject;
  let runHandler = handler => {
    // Setup a promise we can race against so that abort signals short circuit
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    return Promise.race([handler({
      request,
      params: match.params,
      context: opts.requestContext
    }), abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (match.route.lazy) {
      if (handler) {
        // Run statically defined handler in parallel with lazy()
        let handlerError;
        let values = await Promise.all([
        // If the handler throws, don't let it immediately bubble out,
        // since we need to let the lazy() execution finish so we know if this
        // route has a boundary that can handle the error
        runHandler(handler).catch(e => {
          handlerError = e;
        }), loadLazyRouteModule(match.route, mapRouteProperties, manifest)]);
        if (handlerError) {
          throw handlerError;
        }
        result = values[0];
      } else {
        // Load lazy route module, then run any returned handler
        await loadLazyRouteModule(match.route, mapRouteProperties, manifest);
        handler = match.route[type];
        if (handler) {
          // Handler still run even if we got interrupted to maintain consistency
          // with un-abortable behavior of handler execution on non-lazy or
          // previously-lazy-loaded routes
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          // lazy() route has no loader to run.  Short circuit here so we don't
          // hit the invariant below that errors on returning undefined.
          return {
            type: ResultType.data,
            data: undefined
          };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  if (isResponse(result)) {
    let status = result.status;
    // Process redirects
    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      // Support relative routing in internal redirects
      if (!ABSOLUTE_URL_REGEX.test(location)) {
        location = normalizeTo(new URL(request.url), matches.slice(0, matches.indexOf(match) + 1), basename, true, location);
      } else if (!opts.isStaticRequest) {
        // Strip off the protocol+origin for same-origin + same-basename absolute
        // redirects. If this is a static request, we can let it go back to the
        // browser as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
        let isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
          location = url.pathname + url.search + url.hash;
        }
      }
      // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account
      if (opts.isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }
      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: result.headers.get("X-Remix-Reload-Document") !== null
      };
    }
    // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown
    if (opts.isRouteRequest) {
      let queryRouteResponse = {
        type: resultType === ResultType.error ? ResultType.error : ResultType.data,
        response: result
      };
      throw queryRouteResponse;
    }
    let data;
    let contentType = result.headers.get("Content-Type");
    // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }
    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponseImpl(status, result.statusText, data),
        headers: result.headers
      };
    }
    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }
  if (isDeferredData(result)) {
    var _result$init, _result$init2;
    return {
      type: ResultType.deferred,
      deferredData: result,
      statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status,
      headers: ((_result$init2 = result.init) == null ? void 0 : _result$init2.headers) && new Headers(result.init.headers)
    };
  }
  return {
    type: ResultType.data,
    data: result
  };
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType
    } = submission;
    // Didn't think we needed this but it turns out unlike other methods, patch
    // won't be properly normalized to uppercase and results in a 405 error.
    // See: https://fetch.spec.whatwg.org/#concept-method
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({
        "Content-Type": formEncType
      });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  // Process loader results into state.loaderData/state.errors
  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error;
      // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed
      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }
      errors = errors || {};
      // Prefer higher error values if lower errors bubble to the same boundary
      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      }
      // Clear our any prior loaderData for the throwing route
      loaderData[id] = undefined;
      // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      }
      // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.
      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route
  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds);
  // Process results from our revalidating fetchers
  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match,
      controller
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index];
    // Process fetcher non-redirect errors
    if (controller && controller.signal.aborted) {
      // Nothing to do for aborted fetchers
      continue;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData,
    errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);
  for (let match of matches) {
    let id = match.route.id;
    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined && match.route.loader) {
      // Preserve existing keys not included in newLoaderData and where a loader
      // wasn't removed by HMR
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }
  return mergedLoaderData;
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}
function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];
    if (isRedirectResult(result)) {
      return {
        result,
        idx: i
      };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    // /page -> /page#hash
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    // /page#hash -> /page#hash
    return true;
  } else if (b.hash !== "") {
    // /page#hash -> /page#other
    return true;
  }
  // If the hash is removed the browser will re-perform a request to the server
  // /page#hash -> /page
  return false;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isDeferredData(value) {
  let deferred = value;
  return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || obj.type === ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toLowerCase());
}
async function resolveDeferredResults(currentMatches, matchesToLoad, results, signals, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    // If we don't have a match, then we can have a deferred result to do
    // anything with.  This is for revalidating fetchers where the route was
    // removed during HMR
    if (!match) {
      continue;
    }
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      let signal = signals[index];
      invariant(signal, "Expected an AbortSignal for revalidating fetcher deferred result");
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}
async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }
  let aborted = await result.deferredData.resolveData(signal);
  if (aborted) {
    return;
  }
  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }
  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  }
  // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let {
    formMethod,
    formAction,
    formEncType,
    text,
    formData,
    json
  } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json: undefined,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: undefined,
      text: undefined
    };
  } else if (json !== undefined) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: undefined,
      json,
      text: undefined
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      json: undefined,
      text: undefined,
      data
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : undefined
  };
  return fetcher;
}
function getDoneFetcher(data) {
  let fetcher = {
    state: "idle",
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined,
    data
  };
  return fetcher;
}
//#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ "./node_modules/react-router-dom/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/dist/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError; },
/* harmony export */   "Await": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Await; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.NavigationType; },
/* harmony export */   "Outlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Outlet; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Router; },
/* harmony export */   "RouterProvider": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.RouterProvider; },
/* harmony export */   "Routes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Routes; },
/* harmony export */   "UNSAFE_DataRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_DataRouterContext; },
/* harmony export */   "UNSAFE_DataRouterStateContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_DataRouterStateContext; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext; },
/* harmony export */   "UNSAFE_useRouteId": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_useRouteId; },
/* harmony export */   "createMemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryRouter; },
/* harmony export */   "createPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromChildren; },
/* harmony export */   "createRoutesFromElements": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createRoutesFromElements; },
/* harmony export */   "defer": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.defer; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
/* harmony export */   "isRouteErrorResponse": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse; },
/* harmony export */   "json": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.json; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.parsePath; },
/* harmony export */   "redirect": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirect; },
/* harmony export */   "redirectDocument": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument; },
/* harmony export */   "renderMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
/* harmony export */   "unstable_useBlocker": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.unstable_useBlocker; },
/* harmony export */   "useActionData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useActionData; },
/* harmony export */   "useAsyncError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useAsyncError; },
/* harmony export */   "useAsyncValue": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useAsyncValue; },
/* harmony export */   "useHref": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useHref; },
/* harmony export */   "useInRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useInRouterContext; },
/* harmony export */   "useLoaderData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLoaderData; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation; },
/* harmony export */   "useMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatch; },
/* harmony export */   "useMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useMatches; },
/* harmony export */   "useNavigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate; },
/* harmony export */   "useNavigation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigation; },
/* harmony export */   "useNavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useOutletContext; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useParams; },
/* harmony export */   "useResolvedPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath; },
/* harmony export */   "useRevalidator": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRevalidator; },
/* harmony export */   "useRouteError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRouteError; },
/* harmony export */   "useRouteLoaderData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRouteLoaderData; },
/* harmony export */   "useRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.useRoutes; },
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "Form": function() { return /* binding */ Form; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ScrollRestoration": function() { return /* binding */ ScrollRestoration; },
/* harmony export */   "UNSAFE_useScrollRestoration": function() { return /* binding */ useScrollRestoration; },
/* harmony export */   "createBrowserRouter": function() { return /* binding */ createBrowserRouter; },
/* harmony export */   "createHashRouter": function() { return /* binding */ createHashRouter; },
/* harmony export */   "createSearchParams": function() { return /* binding */ createSearchParams; },
/* harmony export */   "unstable_HistoryRouter": function() { return /* binding */ HistoryRouter; },
/* harmony export */   "unstable_usePrompt": function() { return /* binding */ usePrompt; },
/* harmony export */   "useBeforeUnload": function() { return /* binding */ useBeforeUnload; },
/* harmony export */   "useFetcher": function() { return /* binding */ useFetcher; },
/* harmony export */   "useFetchers": function() { return /* binding */ useFetchers; },
/* harmony export */   "useFormAction": function() { return /* binding */ useFormAction; },
/* harmony export */   "useLinkClickHandler": function() { return /* binding */ useLinkClickHandler; },
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; },
/* harmony export */   "useSubmit": function() { return /* binding */ useSubmit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    // Use `defaultSearchParams.forEach(...)` here instead of iterating of
    // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
    // web extensions. Relevant Bugzilla tickets:
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
// One-time check for submitter support
let _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(document.createElement("form"),
      // @ts-expect-error if FormData supports the submitter parameter, this will throw
      0);
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
const supportedFormEncTypes = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : 0;
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("action");
    action = attr ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    }
    // <button>/<input type="submit"> may override attributes of <form>
    // When grabbing the action from the element, it will have had the basename
    // prefixed to ensure non-JS scenarios work, so strip it since we'll
    // re-prefix in the router
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    // Build a FormData object populated from a form and submitter
    formData = new FormData(form, target);
    // If this browser doesn't support the `FormData(el, submitter)` format,
    // then tack on the submitter value at the end.  This is a lightweight
    // solution that is not 100% spec compliant.  For complete support in older
    // browsers, consider using the `formdata-submitter-polyfill` package
    if (!isFormDataSubmitterSupported()) {
      let {
        name,
        type,
        value
      } = target;
      if (type === "image") {
        let prefix = name ? name + "." : "";
        formData.append(prefix + "x", "0");
        formData.append(prefix + "y", "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  // Send body for <Form encType="text/plain" so we encode it into text
  if (formData && encType === "text/plain") {
    body = formData;
    formData = undefined;
  }
  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData,
    body
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
  _excluded3 = ["reloadDocument", "replace", "state", "method", "action", "onSubmit", "submit", "relative", "preventScrollReset"];
function createBrowserRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_mapRouteProperties
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_mapRouteProperties
  }).initialize();
}
function parseHydrationData() {
  var _window;
  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new _remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            // @ts-expect-error
            let error = new ErrorConstructor(val.message);
            // Wipe away the client-side stack trace.  Nothing to fill it in with
            // because we don't serialize SSR stack traces for security reasons
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
            // no-op - fall through and create a normal Error
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        // Wipe away the client-side stack trace.  Nothing to fill it in with
        // because we don't serialize SSR stack traces for security reasons
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    future,
    window
  } = _ref;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    future,
    window
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    future,
    history
  } = _ref3;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
if (true) {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset
    } = _ref4,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : 0;
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
if (true) {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      children
    } = _ref5,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});
if (true) {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  let submit = useSubmit();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
    submit: submit,
    ref: ref
  }));
});
if (true) {
  Form.displayName = "Form";
}
const FormImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref6, forwardedRef) => {
  let {
      reloadDocument,
      replace,
      state,
      method = defaultMethod,
      action,
      onSubmit,
      submit,
      relative,
      preventScrollReset
    } = _ref6,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });
  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      state,
      relative,
      preventScrollReset
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
if (true) {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */
function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}
if (true) {
  ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_DataRouterContext);
  !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_DataRouterStateContext);
  !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */
function useSearchParams(defaultInit) {
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() =>
  // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
function validateClientSideSubmission() {
  if (typeof document === "undefined") {
    throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
  }
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */
function useSubmit() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmit);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  let currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_useRouteId)();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    router.navigate(options.action || action, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType,
      replace: options.replace,
      state: options.state,
      fromRouteId: currentRouteId
    });
  }, [router, basename, currentRouteId]);
}
/**
 * Returns the implementation for fetcher.submit
 */
function useSubmitFetcher(fetcherKey, fetcherRouteId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitFetcher);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    validateClientSideSubmission();
    let {
      action,
      method,
      encType,
      formData,
      body
    } = getFormSubmissionInfo(target, basename);
    !(fetcherRouteId != null) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for useFetcher()") : 0 : void 0;
    router.fetch(fetcherKey, fetcherRouteId, options.action || action, {
      preventScrollReset: options.preventScrollReset,
      formData,
      body,
      formMethod: options.method || method,
      formEncType: options.encType || encType
    });
  }, [router, basename, fetcherKey, fetcherRouteId]);
}
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext);
  !routeContext ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : 0 : void 0;
  let [match] = routeContext.matches.slice(-1);
  // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath
  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useResolvedPath)(action ? action : ".", {
    relative
  }));
  // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params of the resolved URL. This is
  // the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  if (action == null) {
    // Safe to write to this directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    path.search = location.search;
    // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index
    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.joinPaths)([basename, path.pathname]);
  }
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
}
function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    let submit = useSubmitFetcher(fetcherKey, routeId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      submit: submit
    }));
  });
  if (true) {
    FetcherForm.displayName = "fetcher.Form";
  }
  return FetcherForm;
}
let fetcherId = 0;
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */
function useFetcher() {
  var _route$matches;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : 0 : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  let [fetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => String(++fetcherId));
  let [Form] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    !routeId ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.Form()") : 0 : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => href => {
    !router ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No router available for fetcher.load()") : 0 : void 0;
    !routeId ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : 0 : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitFetcher(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No router available to clean up from useFetcher()");
        return;
      }
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */
function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */
function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_NavigationContext);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useNavigation)();
  // Trigger manual scroll restoration while we're active
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  // Save positions on pagehide
  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches]));
  // Read in any saved scroll locations
  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
        // no-op, use default empty object
      }
    }, [storageKey]);
    // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches) => getKey( // Strip the basename to match useLocation()
      _extends({}, location, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(location.pathname, basename) || location.pathname
      }), matches) : getKey;
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKeyWithoutBasename);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      }
      // been here before, scroll to it
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      // try to scroll to the hash
      if (location.hash) {
        let el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      // Don't reset if this navigation opted out
      if (preventScrollReset === true) {
        return;
      }
      // otherwise go to the top on new locations
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */
function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */
function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        // This timeout is needed to avoid a weird "race" on POP navigations
        // between the `window.history` revert navigation and the result of
        // `window.confirm`
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
//#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/react-router/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router/dist/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action; },
/* harmony export */   "createPath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath; },
/* harmony export */   "defer": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
/* harmony export */   "isRouteErrorResponse": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse; },
/* harmony export */   "json": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath; },
/* harmony export */   "redirect": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect; },
/* harmony export */   "redirectDocument": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
/* harmony export */   "Await": function() { return /* binding */ Await; },
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* binding */ Navigate; },
/* harmony export */   "Outlet": function() { return /* binding */ Outlet; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "RouterProvider": function() { return /* binding */ RouterProvider; },
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "UNSAFE_DataRouterContext": function() { return /* binding */ DataRouterContext; },
/* harmony export */   "UNSAFE_DataRouterStateContext": function() { return /* binding */ DataRouterStateContext; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* binding */ LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* binding */ NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* binding */ RouteContext; },
/* harmony export */   "UNSAFE_mapRouteProperties": function() { return /* binding */ mapRouteProperties; },
/* harmony export */   "UNSAFE_useRouteId": function() { return /* binding */ useRouteId; },
/* harmony export */   "UNSAFE_useRoutesImpl": function() { return /* binding */ useRoutesImpl; },
/* harmony export */   "createMemoryRouter": function() { return /* binding */ createMemoryRouter; },
/* harmony export */   "createRoutesFromChildren": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "createRoutesFromElements": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "renderMatches": function() { return /* binding */ renderMatches; },
/* harmony export */   "unstable_useBlocker": function() { return /* binding */ useBlocker; },
/* harmony export */   "useActionData": function() { return /* binding */ useActionData; },
/* harmony export */   "useAsyncError": function() { return /* binding */ useAsyncError; },
/* harmony export */   "useAsyncValue": function() { return /* binding */ useAsyncValue; },
/* harmony export */   "useHref": function() { return /* binding */ useHref; },
/* harmony export */   "useInRouterContext": function() { return /* binding */ useInRouterContext; },
/* harmony export */   "useLoaderData": function() { return /* binding */ useLoaderData; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useMatch": function() { return /* binding */ useMatch; },
/* harmony export */   "useMatches": function() { return /* binding */ useMatches; },
/* harmony export */   "useNavigate": function() { return /* binding */ useNavigate; },
/* harmony export */   "useNavigation": function() { return /* binding */ useNavigation; },
/* harmony export */   "useNavigationType": function() { return /* binding */ useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* binding */ useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* binding */ useOutletContext; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useResolvedPath": function() { return /* binding */ useResolvedPath; },
/* harmony export */   "useRevalidator": function() { return /* binding */ useRevalidator; },
/* harmony export */   "useRouteError": function() { return /* binding */ useRouteError; },
/* harmony export */   "useRouteLoaderData": function() { return /* binding */ useRouteLoaderData; },
/* harmony export */   "useRoutes": function() { return /* binding */ useRoutes; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remix-run/router */ "./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterContext.displayName = "DataRouter";
}
const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  DataRouterStateContext.displayName = "DataRouterState";
}
const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  AwaitContext.displayName = "Await";
}

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level <Router> API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  NavigationContext.displayName = "Navigation";
}
const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  LocationContext.displayName = "Location";
}
const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
if (true) {
  RouteContext.displayName = "Route";
}
const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}

/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}

/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */
function useMatch(pattern) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, pathname), [pathname, pattern]);
}

/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}

/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}

/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */
function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (true) {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  if (true) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : 0;
  }
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  if (true) {
    console.error("Error handled by React Router default ErrorBoundary:", error);
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "ErrorBoundary"), " or", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " prop on your route."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0 : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    // Only data routers handle errors
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0 : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the ID for the nearest contextual route
 */
function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}

/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */
function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}

/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */
function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  }), [dataRouterContext.router.revalidate, state.revalidation]);
}

/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */
function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => matches.map(m => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [matches, loaderData]);
}

/**
 * Returns the loader data for the nearest ancestor Route loader
 */
function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}

/**
 * Returns the loaderData for the given routeId
 */
function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}

/**
 * Returns the action data for the nearest ancestor Route action
 */
function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "useActionData must be used inside a RouteContext") : 0 : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}

/**
 * Returns the error from the nearest ancestor <Await /> value
 */
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;

/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */
function useBlocker(shouldBlock) {
  let {
    router,
    basename
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(arg => {
    if (typeof shouldBlock !== "function") {
      return !!shouldBlock;
    }
    if (basename === "/") {
      return shouldBlock(arg);
    }

    // If they provided us a function and we've got an active basename, strip
    // it from the locations we expose to the user to match the behavior of
    // useLocation
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = arg;
    return shouldBlock({
      currentLocation: _extends({}, currentLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
      }),
      nextLocation: _extends({}, nextLocation, {
        pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
      }),
      historyAction
    });
  }, [basename, shouldBlock]);

  // This effect is in charge of blocker key assignment and deletion (which is
  // tightly coupled to the key)
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);

  // This effect handles assigning the blockerFunction.  This is to handle
  // unstable blocker function identities, and happens only after the prior
  // effect so we don't get an orphaned blockerFunction in the router with a
  // key of "".  Until then we just have the IDLE_BLOCKER.
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);

  // Prefer the blocker from `state` not `router.state` since DataRouterContext
  // is memoized so this ensures we update on blocker state updates
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : 0;
  }
}

/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router,
    future
  } = _ref;
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  let navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]);

  // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    location: state.location,
    navigationType: state.historyAction,
    navigator: navigator
  }, state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement))), null);
}
function DataRoutes(_ref2) {
  let {
    routes,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state);
}
/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex,
    future
  } = _ref3;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0 ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
   true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus = /*#__PURE__*/function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
  return AwaitRenderStatus;
}(AwaitRenderStatus || {});
const neverSettledPromise = new Promise(() => {});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }
  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;
    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }
    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }
    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }
    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }
    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    }

    // Throw to the suspense boundary
    throw promise;
  }
}

/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */
function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
    !(!element.props.index || !element.props.children) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0 : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * Renders the result of `matchRoutes()` into a React element.
 */
function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (true) {
      if (route.element) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: undefined
    });
  }
  if (route.ErrorBoundary) {
    if (true) {
      if (route.errorElement) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : 0;
      }
    }
    Object.assign(updates, {
      errorElement: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties
  }).initialize();
}


//# sourceMappingURL=index.js.map


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vcm91dGVyL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlRWZmZWN0Iiwic21vb3RoU2Nyb2xsIiwidGFyZ2V0SWQiLCJ0YXJnZXRFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJhbmNob3JMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJzdWJzdHJpbmciLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDakJDLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFjO0FBQy9CLFVBQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxRQUF4QixDQUF0Qjs7QUFDQSxVQUFJQyxhQUFKLEVBQW1CO0FBQ2ZBLHFCQUFhLENBQUNHLGNBQWQsQ0FBNkI7QUFBRUMsa0JBQVEsRUFBRTtBQUFaLFNBQTdCO0FBQ0g7QUFDSixLQUxELENBRlksQ0FTWjs7O0FBQ0EsUUFBTUMsV0FBVyxHQUFHSixRQUFRLENBQUNLLGdCQUFULENBQTBCLGNBQTFCLENBQXBCO0FBQ0FELGVBQVcsQ0FBQ0UsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDMUJBLFVBQUksQ0FBQ0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xDQSxTQUFDLENBQUNDLGNBQUY7QUFDQSxZQUFNWixRQUFRLEdBQUdTLElBQUksQ0FBQ0ksWUFBTCxDQUFrQixNQUFsQixFQUEwQkMsU0FBMUIsQ0FBb0MsQ0FBcEMsQ0FBakI7QUFDQWYsb0JBQVksQ0FBQ0MsUUFBRCxDQUFaO0FBQ0gsT0FKRDtBQUtILEtBTkQ7QUFPSCxHQWxCUSxFQWtCTixFQWxCTSxDQUFUO0FBb0JBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsMkJBQ0ksOERBQUMsb0RBQUQ7QUFBQSw4QkFDSSw4REFBQywrQ0FBRDtBQUFBLCtCQUNJO0FBQUcsY0FBSSxFQUFDLElBQVI7QUFBYSxlQUFLLEVBQUU7QUFDaEJlLG1CQUFPLEVBQUUsTUFETztBQUVoQkMsc0JBQVUsRUFBRSxRQUZJO0FBR2hCQyxpQkFBSyxFQUFFLE9BSFM7QUFJaEJDLHdCQUFZLEVBQUU7QUFKRSxXQUFwQjtBQUFBLGlDQU1JLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVdJLDhEQUFDLCtDQUFEO0FBQUEsZ0NBQ0k7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFNLGNBQUUsRUFBQyxRQUFUO0FBQUEsbUNBQ0ksOERBQUMsa0RBQUQ7QUFBQSxxQ0FDSTtBQUFLLHFCQUFLLEVBQUU7QUFBRUgseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw0QkFBVSxFQUFFO0FBQS9CLGlCQUFaO0FBQUEsd0NBQ0ksOERBQUMsc0RBQUQ7QUFBWSxzQkFBSSxFQUFFLEVBQWxCO0FBQXNCLHVCQUFLLEVBQUU7QUFBRUcsK0JBQVcsRUFBRTtBQUFmO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBVUk7QUFBQSxpQ0FDSTtBQUFHLGdCQUFJLEVBQUMsWUFBUjtBQUFBLG1DQUNJLDhEQUFDLGtEQUFEO0FBQUEscUNBQ0k7QUFBSyxxQkFBSyxFQUFFO0FBQUVKLHlCQUFPLEVBQUUsTUFBWDtBQUFtQkMsNEJBQVUsRUFBRTtBQUEvQixpQkFBWjtBQUFBLHdDQUNJLDhEQUFDLHlEQUFEO0FBQWUsc0JBQUksRUFBRSxFQUFyQjtBQUF5Qix1QkFBSyxFQUFFO0FBQUVHLCtCQUFXLEVBQUU7QUFBZjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWSixlQW1CSTtBQUFBLGlDQUNJO0FBQUcsZ0JBQUksRUFBQyxXQUFSO0FBQUEsbUNBQ0ksOERBQUMsa0RBQUQ7QUFBQSxxQ0FDSTtBQUFLLHFCQUFLLEVBQUU7QUFBRUoseUJBQU8sRUFBRSxNQUFYO0FBQW1CQyw0QkFBVSxFQUFFO0FBQS9CLGlCQUFaO0FBQUEsd0NBQ0ksOERBQUMsc0RBQUQ7QUFBWSxzQkFBSSxFQUFFLEVBQWxCO0FBQXNCLHVCQUFLLEVBQUU7QUFBRUcsK0JBQVcsRUFBRTtBQUFmO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQXdDSSw4REFBQywrQ0FBRDtBQUFBLGdDQUNJLDhEQUFDLHNEQUFEO0FBQWEsY0FBSSxFQUFDLGtDQUFsQjtBQUFBLGlDQUNJLDhEQUFDLHdEQUFEO0FBQWMsZ0JBQUksRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLDhEQUFDLHNEQUFEO0FBQWEsY0FBSSxFQUFDLDhDQUFsQjtBQUFBLGlDQUNJLDhEQUFDLDBEQUFEO0FBQWdCLGdCQUFJLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFESCxDQTFFRDs7R0FBTXRCLE07O0tBQUFBLE07QUEyRU4sK0RBQWVBLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdCQUF3QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsd0NBQXdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QyxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MseUNBQXlDO0FBQy9FO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssa0NBQWtDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxLQUFLO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU8sS0FBSztBQUNaO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxLQUFLO0FBQ1o7QUFDQSxPQUFPLEtBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssS0FBSztBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPLEtBQUs7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHdCQUF3QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5QkFBeUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlCQUF5QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLFNBQVMsS0FBSztBQUNkLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLLEtBQUs7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQLGdDQUFnQztBQUNoQztBQUNBLE9BQU8sS0FBSztBQUNaLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxnSUFBZ0k7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHlCQUF5QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3eEI7QUFDeHhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2OEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQzZRO0FBQ2doQjtBQUM1b0I7O0FBRWhMO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUMsR0FBRyxpRUFBYyw4SUFBOEksQ0FBTTtBQUM5TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0VBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnRUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrREFBWTtBQUNyQjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLEtBQUs7QUFDTCxhQUFhLHVFQUFvQjtBQUNqQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLG1FQUF5QjtBQUNqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsK0RBQVk7QUFDckI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0wsYUFBYSxvRUFBaUI7QUFDOUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3QixtRUFBeUI7QUFDakQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1RUFBd0I7QUFDcEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQix5Q0FBWTtBQUMvQjtBQUNBLHlCQUF5Qix1RUFBb0I7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOEJBQThCLDJDQUFjO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0EsR0FBRztBQUNILEVBQUUsa0RBQXFCO0FBQ3ZCLHNCQUFzQixnREFBbUIsQ0FBQyxnREFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsbUJBQW1CLHlDQUFZO0FBQy9CO0FBQ0EseUJBQXlCLG9FQUFpQjtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw4QkFBOEIsMkNBQWM7QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQiw4Q0FBaUI7QUFDbEM7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrREFBcUI7QUFDdkIsc0JBQXNCLGdEQUFtQixDQUFDLGdEQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEJBQThCLDJDQUFjO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0EsR0FBRztBQUNILEVBQUUsa0RBQXFCO0FBQ3ZCLHNCQUFzQixnREFBbUIsQ0FBQyxnREFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0IsQ0FBQyxrRUFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnRUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFFBQVEsS0FBcUMsR0FBRyxpRUFBYywrSUFBK0ksQ0FBTTtBQUNuTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscURBQU87QUFDcEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQW1CLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRCxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQWdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLDZEQUFlO0FBQzVCO0FBQ0EsR0FBRztBQUNILGlCQUFpQix5REFBVztBQUM1QixvQkFBb0IsNkNBQWdCLENBQUMsdUVBQTZCO0FBQ2xFO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCLENBQUMsa0VBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsZ0RBQW1CLGtCQUFrQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2Q0FBZ0I7QUFDMUM7QUFDQSxzQkFBc0IsZ0RBQW1CLHNCQUFzQjtBQUMvRDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQWdCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Q7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZDQUFnQixDQUFDLGtFQUF3QjtBQUNyRCxTQUFTLEtBQXFDLEdBQUcsbUVBQWdCLCtDQUErQyxDQUF1QjtBQUN2STtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFnQixDQUFDLHVFQUE2QjtBQUM1RCxXQUFXLEtBQXFDLEdBQUcsbUVBQWdCLCtDQUErQyxDQUF1QjtBQUN6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx3QkFBd0I7QUFDM0IsaUJBQWlCLHlEQUFXO0FBQzVCLGlCQUFpQix5REFBVztBQUM1QixhQUFhLDZEQUFlO0FBQzVCO0FBQ0EsR0FBRztBQUNILFNBQVMsOENBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHdEQUFVLGVBQWUsd0RBQVU7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQXFDLEdBQUcsaUVBQWMsZ2hCQUFnaEIsQ0FBTTtBQUM5a0IsK0JBQStCLHlDQUFZO0FBQzNDLDhCQUE4Qix5Q0FBWTtBQUMxQyxpQkFBaUIseURBQVc7QUFDNUIscUJBQXFCLDBDQUFhO0FBQ2xDO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSxpQkFBaUIseURBQVc7QUFDNUIsd0JBQXdCLDhDQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyxHQUFHLDZDQUFnQixDQUFDLGtFQUF3QjtBQUMvQyx1QkFBdUIsK0RBQWlCO0FBQ3hDLFNBQVMsOENBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0IsQ0FBQyxrRUFBd0I7QUFDL0MsU0FBUyw4Q0FBaUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0NBQWdDLEtBQXFDLEdBQUcsbUVBQWdCLG1EQUFtRCxDQUF1QjtBQUNsSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseUJBQXlCO0FBQzVCO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCLENBQUMsa0VBQXdCO0FBQy9DLHFCQUFxQiw2Q0FBZ0IsQ0FBQyw2REFBbUI7QUFDekQsa0JBQWtCLEtBQXFDLEdBQUcsbUVBQWdCLDhEQUE4RCxDQUF1QjtBQUMvSjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRSw2REFBZTtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw0REFBUztBQUNoRTtBQUNBLFNBQVMsd0RBQVU7QUFDbkI7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBZ0I7QUFDakQ7QUFDQSx3QkFBd0IsZ0RBQW1CLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsY0FBYyw2Q0FBZ0IsQ0FBQyw2REFBbUI7QUFDbEQsV0FBVyxLQUFxQyxHQUFHLG1FQUFnQiwyREFBMkQsQ0FBdUI7QUFDcko7QUFDQSx1QkFBdUIsS0FBcUMsR0FBRyxtRUFBZ0IsZ0ZBQWdGLENBQXVCO0FBQ3RMLHFCQUFxQiwyQ0FBYztBQUNuQyxlQUFlLDJDQUFjO0FBQzdCLGVBQWUsS0FBcUMsR0FBRyxtRUFBZ0IscURBQXFELENBQXVCO0FBQ25KO0FBQ0EsR0FBRztBQUNILGVBQWUsMkNBQWM7QUFDN0IsY0FBYyxLQUFxQyxHQUFHLG1FQUFnQixvREFBb0QsQ0FBdUI7QUFDakosZUFBZSxLQUFxQyxHQUFHLG1FQUFnQixxREFBcUQsQ0FBdUI7QUFDbko7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QiwwQ0FBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcseUJBQXlCO0FBQzVCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCLENBQUMsa0VBQXdCO0FBQy9DLGlCQUFpQix5REFBVztBQUM1QixnQkFBZ0Isd0RBQVU7QUFDMUIsbUJBQW1CLDJEQUFhO0FBQ2hDO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGNBQWMsOENBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGtCQUFrQixnRUFBYTtBQUMvQixPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxrREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxnQkFBZ0IsaUVBQW1CO0FBQ25DLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRWlYO0FBQ2pYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQytCO0FBQ3lSO0FBQzVGOztBQUU1TjtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsZ0RBQW1CO0FBQzFELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLDRDQUE0QyxnREFBbUI7QUFDL0QsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0Esa0NBQWtDLGdEQUFtQjtBQUNyRCxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLGdEQUFtQjtBQUMxRCxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQSxxQ0FBcUMsZ0RBQW1CO0FBQ3hELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLGtDQUFrQyxnREFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLHVDQUF1QyxnREFBbUI7QUFDMUQsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsd0JBQXdCO0FBQzNCLDBCQUEwQixLQUFxQyxHQUFHLG1FQUFnQjtBQUNsRjtBQUNBLDBFQUEwRSxDQUF1QjtBQUNqRztBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsNERBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZDQUFnQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQXFDLEdBQUcsbUVBQWdCO0FBQ2xGO0FBQ0EsOEVBQThFLENBQXVCO0FBQ3JHLFNBQVMsNkNBQWdCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2Q0FBZ0I7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFxQyxHQUFHLG1FQUFnQjtBQUNsRjtBQUNBLDJFQUEyRSxDQUF1QjtBQUNsRztBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsMENBQWEsT0FBTyw0REFBUztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFxQyxHQUFHLG1FQUFnQjtBQUNsRjtBQUNBLDhFQUE4RSxDQUF1QjtBQUNyRywwQkFBMEIsNkNBQWdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQ0FBMEMsb0ZBQWlDO0FBQzNFLGtCQUFrQix5Q0FBWTtBQUM5QjtBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQiw4Q0FBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQyxHQUFHLGlFQUFjLDZDQUE2QyxDQUFNOztBQUU3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNERBQVM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDREQUFTO0FBQ2xFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1DQUFtQyxnREFBbUI7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkNBQWdCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2Q0FBZ0I7QUFDL0I7QUFDQSx3QkFBd0IsZ0RBQW1CO0FBQzNDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyx5QkFBeUI7QUFDNUI7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQ0FBMEMsb0ZBQWlDO0FBQzNFLFNBQVMsMENBQWEsT0FBTyw0REFBUztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsS0FBcUMsR0FBRyxtRUFBZ0I7QUFDbEY7QUFDQSw0RUFBNEUsQ0FBdUI7QUFDbkc7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBLEdBQUcsR0FBRyw2Q0FBZ0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxxQ0FBcUMsU0FBUztBQUM5QywwQ0FBMEMsYUFBYTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsNERBQVM7QUFDdkUsc0tBQXNLLEtBQXFDLEdBQUcsbUVBQWdCLHdYQUF3WCxDQUF1QjtBQUM3bUI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQVc7QUFDM0I7QUFDQSxHQUFHO0FBQ0gsTUFBTSxJQUFxQztBQUMzQyxJQUFJLEtBQXFDLEdBQUcsaUVBQWMsa0lBQWtJLENBQU07QUFDbE0sSUFBSSxLQUFxQyxHQUFHLGlFQUFjLG9ZQUFvWSxDQUFNO0FBQ3BjO0FBQ0EsdUZBQXVGO0FBQ3ZGLDRCQUE0QjtBQUM1QixjQUFjLDREQUFTO0FBQ3ZCO0FBQ0E7QUFDQSxvRUFBb0UsNERBQVM7QUFDN0U7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdCQUF3Qix5REFBVTtBQUNsQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVFQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFxQztBQUMzQztBQUNBLDJCQUEyQixnREFBbUIsQ0FBQywyQ0FBYyxxQkFBcUIsZ0RBQW1CLHFFQUFxRSxnREFBbUIseUhBQXlILGdEQUFtQjtBQUN6VTtBQUNBLEtBQUssNkNBQTZDLGdEQUFtQjtBQUNyRTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixnREFBbUIsQ0FBQywyQ0FBYyxxQkFBcUIsZ0RBQW1CLDREQUE0RCxnREFBbUI7QUFDL0s7QUFDQTtBQUNBO0FBQ0EsR0FBRyxpQ0FBaUMsZ0RBQW1CO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0EseUNBQXlDLGdEQUFtQjtBQUM1RCxrQ0FBa0MsNENBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdEQUFtQjtBQUM5RDtBQUNBLEtBQUssZUFBZSxnREFBbUI7QUFDdkM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsNkNBQWdCOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBcUMsR0FBRyxtRUFBZ0IsdUdBQXVHLENBQXVCO0FBQy9NO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLElBQUk7QUFDbEM7QUFDQTtBQUNBLGdDQUFnQyxnREFBbUI7QUFDbkQsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvSEFBb0gsZ0RBQW1CO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHFCQUFxQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDBCQUEwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQWdCO0FBQzVCLFNBQVMsS0FBcUMsR0FBRyxtRUFBZ0IsK0NBQStDLENBQXVCO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQWdCO0FBQzlCLFdBQVcsS0FBcUMsR0FBRyxtRUFBZ0IsK0NBQStDLENBQXVCO0FBQ3pJO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQWdCO0FBQzlCLFdBQVcsS0FBcUMsR0FBRyxtRUFBZ0IsK0NBQStDLENBQXVCO0FBQ3pJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBcUMsR0FBRyxtRUFBZ0IsaUZBQWlGLENBQXVCO0FBQ3hMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBDQUFhO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLDBDQUFhLHdCQUF3QixvRkFBaUM7QUFDL0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFnQjtBQUM5QixXQUFXLEtBQXFDLEdBQUcsbUVBQWdCLDhEQUE4RCxDQUF1QjtBQUN4Six3RUFBd0U7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFnQjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBZ0I7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQWdCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG9DQUFvQywyQ0FBYztBQUNsRCx3QkFBd0IsOENBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDQUFrQztBQUNsQyxrQkFBa0IsZ0VBQWE7QUFDL0IsT0FBTztBQUNQLCtCQUErQjtBQUMvQixrQkFBa0IsZ0VBQWE7QUFDL0IsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUZBQXlGLDJEQUFZO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLHlDQUFZO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCLDhDQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDLEdBQUcsaUVBQWMsNkNBQTZDLENBQU07O0FBRTdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDLEdBQUcsaUVBQWMsbUJBQW1CLENBQU07QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0NBQUs7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBYztBQUM1QztBQUNBO0FBQ0EsR0FBRztBQUNILGlCQUFpQiw4Q0FBaUI7QUFDbEM7QUFDQSxHQUFHO0FBQ0gsRUFBRSxrREFBcUI7QUFDdkIsa0JBQWtCLDBDQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMEJBQTBCLDBDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFtQixDQUFDLDJDQUFjLHFCQUFxQixnREFBbUI7QUFDaEc7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0EsR0FBRyxlQUFlLGdEQUFtQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsbUNBQW1DLGdEQUFtQjtBQUN6RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIseUNBQVk7QUFDL0I7QUFDQSx5QkFBeUIsc0VBQW1CO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOEJBQThCLDJDQUFjO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0EsR0FBRztBQUNILEVBQUUsa0RBQXFCO0FBQ3ZCLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQkFBMEIsS0FBcUMsR0FBRyxtRUFBZ0I7QUFDbEY7QUFDQSwyRUFBMkUsQ0FBdUI7QUFDbEcsRUFBRSxLQUFxQyxHQUFHLGlFQUFjLEVBQUUsNkNBQWdCLGlRQUFpUSxDQUFNO0FBQ2pWO0FBQ0E7QUFDQSxHQUFHLEdBQUcsNkNBQWdCO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNERBQVMsS0FBSyxvRkFBaUM7QUFDNUQ7QUFDQSxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBcUMsR0FBRyxtRUFBZ0IsdUpBQXVKLENBQXVCO0FBQ3hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBVTtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQixLQUFxQyxHQUFHLG1FQUFnQix5SEFBeUgsQ0FBdUI7O0FBRW5PO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtQkFBbUIsNERBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLDBDQUFhO0FBQ3JDLDJCQUEyQixnRUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsS0FBcUMsR0FBRyxpRUFBYyx3T0FBd08sQ0FBTTtBQUN0UztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0EsR0FBRyxlQUFlLGdEQUFtQjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxzQkFBc0IsZ0RBQW1CO0FBQ3pDO0FBQ0E7QUFDQSxHQUFHLGVBQWUsZ0RBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0JBQXdCO0FBQ3pCLGdEQUFnRDtBQUNoRCxpQ0FBaUMsNENBQWU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsRUFBRTtBQUNqRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0Esd0VBQXdFLG1FQUFvQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0RBQW1CO0FBQzdDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdEQUFtQjtBQUM3QztBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQW1CLENBQUMsMkNBQWM7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQXNCO0FBQ3hCLHVCQUF1QixpREFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwyQ0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxLQUFxQyxHQUFHLG1FQUFnQixrTUFBa00sQ0FBdUI7QUFDalQseURBQXlELEtBQXFDLEdBQUcsbUVBQWdCLHNEQUFzRCxDQUF1QjtBQUM5TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBLFFBQVEsS0FBcUMsR0FBRyxpRUFBYyxrSEFBa0gsQ0FBTTtBQUN0TDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0RBQW1CO0FBQy9DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0EsUUFBUSxLQUFxQyxHQUFHLGlFQUFjLCtIQUErSCxDQUFNO0FBQ25NO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxnREFBbUI7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtEQUFZO0FBQ3JCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMLGFBQWEsc0VBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVnM0I7QUFDaDNCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFhYTliMTYwYTZmZmY3ZTgzOTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxMaW5rZWRpbiwgQWlGaWxsTWFpbCwgQWlGaWxsQnVsYiwgQWlGaWxsQW5kcm9pZCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXYxLCBEaXYyLCBEaXYzLCBOYXZMaW5rLCBTb2NpYWxJY29ucywgU3BhbiwgU3RpY2t5SGVhZGVyIH0gZnJvbSAnLi9IZWFkZXJTdHlsZXMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFNtb290aCBzY3JvbGwgZnVuY3Rpb25cclxuICAgICAgICBjb25zdCBzbW9vdGhTY3JvbGwgPSAodGFyZ2V0SWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBZGQgc21vb3RoIHNjcm9sbCBiZWhhdmlvciB0byBhbmNob3IgbGlua3NcclxuICAgICAgICBjb25zdCBhbmNob3JMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XHJcbiAgICAgICAgYW5jaG9yTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICBzbW9vdGhTY3JvbGwodGFyZ2V0SWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTdGlja3lIZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8RGl2MT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuPkRhbmllbCBWYW4gTmd1eWVuPC9TcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvRGl2MT5cclxuICAgICAgICAgICAgICAgIDxEaXYyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9hYm91dCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxCdWxiIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz4gQWJvdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9qZWN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQW5kcm9pZCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi8jY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTWFpbCBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19IC8+IENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjI+XHJcbiAgICAgICAgICAgICAgICA8RGl2Mz5cclxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsSWNvbnMgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYW5pZWx2bmd1eWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxHaXRodWIgc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZGFuaWVsLXYtbmd1eWVuL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8L0RpdjM+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3RpY2t5SGVhZGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCIvKipcbiAqIEByZW1peC1ydW4vcm91dGVyIHYxLjkuMFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBUeXBlcyBhbmQgQ29uc3RhbnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLyoqXG4gKiBBY3Rpb25zIHJlcHJlc2VudCB0aGUgdHlwZSBvZiBjaGFuZ2UgdG8gYSBsb2NhdGlvbiB2YWx1ZS5cbiAqL1xudmFyIEFjdGlvbjtcbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gIC8qKlxuICAgKiBBIFBPUCBpbmRpY2F0ZXMgYSBjaGFuZ2UgdG8gYW4gYXJiaXRyYXJ5IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrLCBzdWNoXG4gICAqIGFzIGEgYmFjayBvciBmb3J3YXJkIG5hdmlnYXRpb24uIEl0IGRvZXMgbm90IGRlc2NyaWJlIHRoZSBkaXJlY3Rpb24gb2YgdGhlXG4gICAqIG5hdmlnYXRpb24sIG9ubHkgdGhhdCB0aGUgY3VycmVudCBpbmRleCBjaGFuZ2VkLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIHRoZSBkZWZhdWx0IGFjdGlvbiBmb3IgbmV3bHkgY3JlYXRlZCBoaXN0b3J5IG9iamVjdHMuXG4gICAqL1xuICBBY3Rpb25bXCJQb3BcIl0gPSBcIlBPUFwiO1xuICAvKipcbiAgICogQSBQVVNIIGluZGljYXRlcyBhIG5ldyBlbnRyeSBiZWluZyBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaCBhcyB3aGVuXG4gICAqIGEgbGluayBpcyBjbGlja2VkIGFuZCBhIG5ldyBwYWdlIGxvYWRzLiBXaGVuIHRoaXMgaGFwcGVucywgYWxsIHN1YnNlcXVlbnRcbiAgICogZW50cmllcyBpbiB0aGUgc3RhY2sgYXJlIGxvc3QuXG4gICAqL1xuICBBY3Rpb25bXCJQdXNoXCJdID0gXCJQVVNIXCI7XG4gIC8qKlxuICAgKiBBIFJFUExBQ0UgaW5kaWNhdGVzIHRoZSBlbnRyeSBhdCB0aGUgY3VycmVudCBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFja1xuICAgKiBiZWluZyByZXBsYWNlZCBieSBhIG5ldyBvbmUuXG4gICAqL1xuICBBY3Rpb25bXCJSZXBsYWNlXCJdID0gXCJSRVBMQUNFXCI7XG59KShBY3Rpb24gfHwgKEFjdGlvbiA9IHt9KSk7XG5jb25zdCBQb3BTdGF0ZUV2ZW50VHlwZSA9IFwicG9wc3RhdGVcIjtcbi8qKlxuICogTWVtb3J5IGhpc3Rvcnkgc3RvcmVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIG1lbW9yeS4gSXQgaXMgZGVzaWduZWQgZm9yIHVzZVxuICogaW4gc3RhdGVmdWwgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzIGxpa2UgdGVzdHMgYW5kIFJlYWN0IE5hdGl2ZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgbGV0IHtcbiAgICBpbml0aWFsRW50cmllcyA9IFtcIi9cIl0sXG4gICAgaW5pdGlhbEluZGV4LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBlbnRyaWVzOyAvLyBEZWNsYXJlIHNvIHdlIGNhbiBhY2Nlc3MgZnJvbSBjcmVhdGVNZW1vcnlMb2NhdGlvblxuICBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKGVudHJ5LCB0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIgPyBudWxsIDogZW50cnkuc3RhdGUsIGluZGV4ID09PSAwID8gXCJkZWZhdWx0XCIgOiB1bmRlZmluZWQpKTtcbiAgbGV0IGluZGV4ID0gY2xhbXBJbmRleChpbml0aWFsSW5kZXggPT0gbnVsbCA/IGVudHJpZXMubGVuZ3RoIC0gMSA6IGluaXRpYWxJbmRleCk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICBmdW5jdGlvbiBjbGFtcEluZGV4KG4pIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgMCksIGVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKCkge1xuICAgIHJldHVybiBlbnRyaWVzW2luZGV4XTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUsIGtleSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgfVxuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGVudHJpZXMgPyBnZXRDdXJyZW50TG9jYXRpb24oKS5wYXRobmFtZSA6IFwiL1wiLCB0bywgc3RhdGUsIGtleSk7XG4gICAgd2FybmluZyhsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgPT09IFwiL1wiLCBcInJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBtZW1vcnkgaGlzdG9yeTogXCIgKyBKU09OLnN0cmluZ2lmeSh0bykpO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgfSxcbiAgICBjcmVhdGVIcmVmLFxuICAgIGNyZWF0ZVVSTCh0bykge1xuICAgICAgcmV0dXJuIG5ldyBVUkwoY3JlYXRlSHJlZih0byksIFwiaHR0cDovL2xvY2FsaG9zdFwiKTtcbiAgICB9LFxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICBsZXQgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiBwYXRoLnBhdGhuYW1lIHx8IFwiXCIsXG4gICAgICAgIHNlYXJjaDogcGF0aC5zZWFyY2ggfHwgXCJcIixcbiAgICAgICAgaGFzaDogcGF0aC5oYXNoIHx8IFwiXCJcbiAgICAgIH07XG4gICAgfSxcbiAgICBwdXNoKHRvLCBzdGF0ZSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgZW50cmllcy5sZW5ndGgsIG5leHRMb2NhdGlvbik7XG4gICAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVwbGFjZSh0bywgc3RhdGUpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBlbnRyaWVzW2luZGV4XSA9IG5leHRMb2NhdGlvbjtcbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBnbyhkZWx0YSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgICAgIGxldCBuZXh0SW5kZXggPSBjbGFtcEluZGV4KGluZGV4ICsgZGVsdGEpO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGVudHJpZXNbbmV4dEluZGV4XTtcbiAgICAgIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGxpc3Rlbihmbikge1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICByZXR1cm4gaGlzdG9yeTtcbn1cbi8qKlxuICogQnJvd3NlciBoaXN0b3J5IHN0b3JlcyB0aGUgbG9jYXRpb24gaW4gcmVndWxhciBVUkxzLiBUaGlzIGlzIHRoZSBzdGFuZGFyZCBmb3JcbiAqIG1vc3Qgd2ViIGFwcHMsIGJ1dCBpdCByZXF1aXJlcyBzb21lIGNvbmZpZ3VyYXRpb24gb24gdGhlIHNlcnZlciB0byBlbnN1cmUgeW91XG4gKiBzZXJ2ZSB0aGUgc2FtZSBhcHAgYXQgbXVsdGlwbGUgVVJMcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vaGlzdG9yeS90cmVlL21haW4vZG9jcy9hcGktcmVmZXJlbmNlLm1kI2NyZWF0ZWJyb3dzZXJoaXN0b3J5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VyTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKFwiXCIsIHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0sXG4gICAgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VySHJlZih3aW5kb3csIHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cbiAgcmV0dXJuIGdldFVybEJhc2VkSGlzdG9yeShjcmVhdGVCcm93c2VyTG9jYXRpb24sIGNyZWF0ZUJyb3dzZXJIcmVmLCBudWxsLCBvcHRpb25zKTtcbn1cbi8qKlxuICogSGFzaCBoaXN0b3J5IHN0b3JlcyB0aGUgbG9jYXRpb24gaW4gd2luZG93LmxvY2F0aW9uLmhhc2guIFRoaXMgbWFrZXMgaXQgaWRlYWxcbiAqIGZvciBzaXR1YXRpb25zIHdoZXJlIHlvdSBkb24ndCB3YW50IHRvIHNlbmQgdGhlIGxvY2F0aW9uIHRvIHRoZSBzZXJ2ZXIgZm9yXG4gKiBzb21lIHJlYXNvbiwgZWl0aGVyIGJlY2F1c2UgeW91IGRvIGNhbm5vdCBjb25maWd1cmUgaXQgb3IgdGhlIFVSTCBzcGFjZSBpc1xuICogcmVzZXJ2ZWQgZm9yIHNvbWV0aGluZyBlbHNlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9oaXN0b3J5L3RyZWUvbWFpbi9kb2NzL2FwaS1yZWZlcmVuY2UubWQjY3JlYXRlaGFzaGhpc3RvcnlcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgICBoYXNoID0gXCJcIlxuICAgIH0gPSBwYXJzZVBhdGgod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICAvLyBIYXNoIFVSTCBzaG91bGQgYWx3YXlzIGhhdmUgYSBsZWFkaW5nIC8ganVzdCBsaWtlIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgIC8vIGRvZXMsIHNvIGlmIGFuIGFwcCBlbmRzIHVwIGF0IGEgcm91dGUgbGlrZSAvI3NvbWV0aGluZyB0aGVuIHdlIGFkZCBhXG4gICAgLy8gbGVhZGluZyBzbGFzaCBzbyBhbGwgb2Ygb3VyIHBhdGgtbWF0Y2hpbmcgYmVoYXZlcyB0aGUgc2FtZSBhcyBpZiBpdCB3b3VsZFxuICAgIC8vIGluIGEgYnJvd3NlciByb3V0ZXIuICBUaGlzIGlzIHBhcnRpY3VsYXJseSBpbXBvcnRhbnQgd2hlbiB0aGVyZSBleGlzdHMgYVxuICAgIC8vIHJvb3Qgc3BsYXQgcm91dGUgKDxSb3V0ZSBwYXRoPVwiKlwiPikgc2luY2UgdGhhdCBtYXRjaGVzIGludGVybmFsbHkgYWdhaW5zdFxuICAgIC8vIFwiLypcIiBhbmQgd2UnZCBleHBlY3QgLyNzb21ldGhpbmcgdG8gNDA0IGluIGEgaGFzaCByb3V0ZXIgYXBwLlxuICAgIGlmICghcGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgJiYgIXBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIuXCIpKSB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiICsgcGF0aG5hbWU7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcIlwiLCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9LFxuICAgIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSGFzaEhyZWYod2luZG93LCB0bykge1xuICAgIGxldCBiYXNlID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpO1xuICAgIGxldCBocmVmID0gXCJcIjtcbiAgICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG4gICAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gaHJlZiArIFwiI1wiICsgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0bykpO1xuICB9XG4gIGZ1bmN0aW9uIHZhbGlkYXRlSGFzaExvY2F0aW9uKGxvY2F0aW9uLCB0bykge1xuICAgIHdhcm5pbmcobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goXCIgKyBKU09OLnN0cmluZ2lmeSh0bykgKyBcIilcIik7XG4gIH1cbiAgcmV0dXJuIGdldFVybEJhc2VkSGlzdG9yeShjcmVhdGVIYXNoTG9jYXRpb24sIGNyZWF0ZUhhc2hIcmVmLCB2YWxpZGF0ZUhhc2hMb2NhdGlvbiwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBpbnZhcmlhbnQodmFsdWUsIG1lc3NhZ2UpIHtcbiAgaWYgKHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuICAgIHRyeSB7XG4gICAgICAvLyBXZWxjb21lIHRvIGRlYnVnZ2luZyBoaXN0b3J5IVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2UsIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDgpO1xufVxuLyoqXG4gKiBGb3IgYnJvd3Nlci1iYXNlZCBoaXN0b3JpZXMsIHdlIGNvbWJpbmUgdGhlIHN0YXRlIGFuZCBrZXkgaW50byBhbiBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCkge1xuICByZXR1cm4ge1xuICAgIHVzcjogbG9jYXRpb24uc3RhdGUsXG4gICAga2V5OiBsb2NhdGlvbi5rZXksXG4gICAgaWR4OiBpbmRleFxuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgTG9jYXRpb24gb2JqZWN0IHdpdGggYSB1bmlxdWUga2V5IGZyb20gdGhlIGdpdmVuIFBhdGhcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oY3VycmVudCwgdG8sIHN0YXRlLCBrZXkpIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IG51bGw7XG4gIH1cbiAgbGV0IGxvY2F0aW9uID0gX2V4dGVuZHMoe1xuICAgIHBhdGhuYW1lOiB0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIiA/IGN1cnJlbnQgOiBjdXJyZW50LnBhdGhuYW1lLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBoYXNoOiBcIlwiXG4gIH0sIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bywge1xuICAgIHN0YXRlLFxuICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgY2xlYW5lZCB1cC4gIHB1c2gvcmVwbGFjZSBzaG91bGQgcHJvYmFibHkganVzdCB0YWtlXG4gICAgLy8gZnVsbCBMb2NhdGlvbnMgbm93IGFuZCBhdm9pZCB0aGUgbmVlZCB0byBydW4gdGhyb3VnaCB0aGlzIGZsb3cgYXQgYWxsXG4gICAgLy8gQnV0IHRoYXQncyBhIHByZXR0eSBiaWcgcmVmYWN0b3IgdG8gdGhlIGN1cnJlbnQgdGVzdCBzdWl0ZSBzbyBnb2luZyB0b1xuICAgIC8vIGtlZXAgYXMgaXMgZm9yIHRoZSB0aW1lIGJlaW5nIGFuZCBqdXN0IGxldCBhbnkgaW5jb21pbmcga2V5cyB0YWtlIHByZWNlZGVuY2VcbiAgICBrZXk6IHRvICYmIHRvLmtleSB8fCBrZXkgfHwgY3JlYXRlS2V5KClcbiAgfSk7XG4gIHJldHVybiBsb2NhdGlvbjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHN0cmluZyBVUkwgcGF0aCBmcm9tIHRoZSBnaXZlbiBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQYXRoKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IF9yZWY7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSBcIj9cIikgcGF0aG5hbWUgKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gXCI/XCIgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gXCIjXCIpIHBhdGhuYW1lICs9IGhhc2guY2hhckF0KDApID09PSBcIiNcIiA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4gIHJldHVybiBwYXRobmFtZTtcbn1cbi8qKlxuICogUGFyc2VzIGEgc3RyaW5nIFVSTCBwYXRoIGludG8gaXRzIHNlcGFyYXRlIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0ge307XG4gIGlmIChwYXRoKSB7XG4gICAgbGV0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZihcIiNcIik7XG4gICAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLmhhc2ggPSBwYXRoLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuICAgIGxldCBzZWFyY2hJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIik7XG4gICAgaWYgKHNlYXJjaEluZGV4ID49IDApIHtcbiAgICAgIHBhcnNlZFBhdGguc2VhcmNoID0gcGF0aC5zdWJzdHIoc2VhcmNoSW5kZXgpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHNlYXJjaEluZGV4KTtcbiAgICB9XG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhcnNlZFBhdGgucGF0aG5hbWUgPSBwYXRoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyc2VkUGF0aDtcbn1cbmZ1bmN0aW9uIGdldFVybEJhc2VkSGlzdG9yeShnZXRMb2NhdGlvbiwgY3JlYXRlSHJlZiwgdmFsaWRhdGVMb2NhdGlvbiwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGxldCB7XG4gICAgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsXG4gICAgdjVDb21wYXQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgbGV0IGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG4gIGxldCBpbmRleCA9IGdldEluZGV4KCk7XG4gIC8vIEluZGV4IHNob3VsZCBvbmx5IGJlIG51bGwgd2hlbiB3ZSBpbml0aWFsaXplLiBJZiBub3QsIGl0J3MgYmVjYXVzZSB0aGVcbiAgLy8gdXNlciBjYWxsZWQgaGlzdG9yeS5wdXNoU3RhdGUgb3IgaGlzdG9yeS5yZXBsYWNlU3RhdGUgZGlyZWN0bHksIGluIHdoaWNoXG4gIC8vIGNhc2Ugd2Ugc2hvdWxkIGxvZyBhIHdhcm5pbmcgYXMgaXQgd2lsbCByZXN1bHQgaW4gYnVncy5cbiAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICBpbmRleCA9IDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGdsb2JhbEhpc3Rvcnkuc3RhdGUsIHtcbiAgICAgIGlkeDogaW5kZXhcbiAgICB9KSwgXCJcIik7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0SW5kZXgoKSB7XG4gICAgbGV0IHN0YXRlID0gZ2xvYmFsSGlzdG9yeS5zdGF0ZSB8fCB7XG4gICAgICBpZHg6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiBzdGF0ZS5pZHg7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKCkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgbGV0IG5leHRJbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGRlbHRhID0gbmV4dEluZGV4ID09IG51bGwgPyBudWxsIDogbmV4dEluZGV4IC0gaW5kZXg7XG4gICAgaW5kZXggPSBuZXh0SW5kZXg7XG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gcHVzaCh0bywgc3RhdGUpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uLCB0bywgc3RhdGUpO1xuICAgIGlmICh2YWxpZGF0ZUxvY2F0aW9uKSB2YWxpZGF0ZUxvY2F0aW9uKGxvY2F0aW9uLCB0byk7XG4gICAgaW5kZXggPSBnZXRJbmRleCgpICsgMTtcbiAgICBsZXQgaGlzdG9yeVN0YXRlID0gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgLy8gdHJ5Li4uY2F0Y2ggYmVjYXVzZSBpT1MgbGltaXRzIHVzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHMgOi9cbiAgICB0cnkge1xuICAgICAgZ2xvYmFsSGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiLCB1cmwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJZiB0aGUgZXhjZXB0aW9uIGlzIGJlY2F1c2UgYHN0YXRlYCBjYW4ndCBiZSBzZXJpYWxpemVkLCBsZXQgdGhhdCB0aHJvd1xuICAgICAgLy8gb3V0d2FyZHMganVzdCBsaWtlIGEgcmVwbGFjZSBjYWxsIHdvdWxkIHNvIHRoZSBkZXYga25vd3MgdGhlIGNhdXNlXG4gICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9uYXYtaGlzdG9yeS1hcGlzLmh0bWwjc2hhcmVkLWhpc3RvcnktcHVzaC9yZXBsYWNlLXN0YXRlLXN0ZXBzXG4gICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zdHJ1Y3R1cmVkLWRhdGEuaHRtbCNzdHJ1Y3R1cmVkc2VyaWFsaXplaW50ZXJuYWxcbiAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiBlcnJvci5uYW1lID09PSBcIkRhdGFDbG9uZUVycm9yXCIpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBUaGV5IGFyZSBnb2luZyB0byBsb3NlIHN0YXRlIGhlcmUsIGJ1dCB0aGVyZSBpcyBubyByZWFsXG4gICAgICAvLyB3YXkgdG8gd2FybiB0aGVtIGFib3V0IGl0IHNpbmNlIHRoZSBwYWdlIHdpbGwgcmVmcmVzaC4uLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih1cmwpO1xuICAgIH1cbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiByZXBsYWNlKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGE6IDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVVUkwodG8pIHtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIGlzIFwibnVsbFwiICh0aGUgbGl0ZXJhbCBzdHJpbmcgdmFsdWUpIGluIEZpcmVmb3hcbiAgICAvLyB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMsIG5vdGFibHkgd2hlbiBzZXJ2aW5nIGZyb20gYSBsb2NhbCBIVE1MIGZpbGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODc4Mjk3XG4gICAgbGV0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSBcIm51bGxcIiA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgaHJlZiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gICAgaW52YXJpYW50KGJhc2UsIFwiTm8gd2luZG93LmxvY2F0aW9uLihvcmlnaW58aHJlZikgYXZhaWxhYmxlIHRvIGNyZWF0ZSBVUkwgZm9yIGhyZWY6IFwiICsgaHJlZik7XG4gICAgcmV0dXJuIG5ldyBVUkwoaHJlZiwgYmFzZSk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KTtcbiAgICB9LFxuICAgIGxpc3Rlbihmbikge1xuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgaGlzdG9yeSBvbmx5IGFjY2VwdHMgb25lIGFjdGl2ZSBsaXN0ZW5lclwiKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH0sXG4gICAgY3JlYXRlSHJlZih0bykge1xuICAgICAgcmV0dXJuIGNyZWF0ZUhyZWYod2luZG93LCB0byk7XG4gICAgfSxcbiAgICBjcmVhdGVVUkwsXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIC8vIEVuY29kZSBhIExvY2F0aW9uIHRoZSBzYW1lIHdheSB3aW5kb3cubG9jYXRpb24gd291bGRcbiAgICAgIGxldCB1cmwgPSBjcmVhdGVVUkwodG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaFxuICAgICAgfTtcbiAgICB9LFxuICAgIHB1c2gsXG4gICAgcmVwbGFjZSxcbiAgICBnbyhuKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuLy8jZW5kcmVnaW9uXG5cbnZhciBSZXN1bHRUeXBlO1xuKGZ1bmN0aW9uIChSZXN1bHRUeXBlKSB7XG4gIFJlc3VsdFR5cGVbXCJkYXRhXCJdID0gXCJkYXRhXCI7XG4gIFJlc3VsdFR5cGVbXCJkZWZlcnJlZFwiXSA9IFwiZGVmZXJyZWRcIjtcbiAgUmVzdWx0VHlwZVtcInJlZGlyZWN0XCJdID0gXCJyZWRpcmVjdFwiO1xuICBSZXN1bHRUeXBlW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG59KShSZXN1bHRUeXBlIHx8IChSZXN1bHRUeXBlID0ge30pKTtcbmNvbnN0IGltbXV0YWJsZVJvdXRlS2V5cyA9IG5ldyBTZXQoW1wibGF6eVwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJwYXRoXCIsIFwiaWRcIiwgXCJpbmRleFwiLCBcImNoaWxkcmVuXCJdKTtcbmZ1bmN0aW9uIGlzSW5kZXhSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuaW5kZXggPT09IHRydWU7XG59XG4vLyBXYWxrIHRoZSByb3V0ZSB0cmVlIGdlbmVyYXRpbmcgdW5pcXVlIElEcyB3aGVyZSBuZWNlc3NhcnksIHNvIHdlIGFyZSB3b3JraW5nXG4vLyBzb2xlbHkgd2l0aCBBZ25vc3RpY0RhdGFSb3V0ZU9iamVjdCdzIHdpdGhpbiB0aGUgUm91dGVyXG5mdW5jdGlvbiBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcywgbWFwUm91dGVQcm9wZXJ0aWVzLCBwYXJlbnRQYXRoLCBtYW5pZmVzdCkge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG4gIGlmIChtYW5pZmVzdCA9PT0gdm9pZCAwKSB7XG4gICAgbWFuaWZlc3QgPSB7fTtcbiAgfVxuICByZXR1cm4gcm91dGVzLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcbiAgICBsZXQgaWQgPSB0eXBlb2Ygcm91dGUuaWQgPT09IFwic3RyaW5nXCIgPyByb3V0ZS5pZCA6IHRyZWVQYXRoLmpvaW4oXCItXCIpO1xuICAgIGludmFyaWFudChyb3V0ZS5pbmRleCAhPT0gdHJ1ZSB8fCAhcm91dGUuY2hpbGRyZW4sIFwiQ2Fubm90IHNwZWNpZnkgY2hpbGRyZW4gb24gYW4gaW5kZXggcm91dGVcIik7XG4gICAgaW52YXJpYW50KCFtYW5pZmVzdFtpZF0sIFwiRm91bmQgYSByb3V0ZSBpZCBjb2xsaXNpb24gb24gaWQgXFxcIlwiICsgaWQgKyBcIlxcXCIuICBSb3V0ZSBcIiArIFwiaWQncyBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZSB3aXRoaW4gRGF0YSBSb3V0ZXIgdXNhZ2VzXCIpO1xuICAgIGlmIChpc0luZGV4Um91dGUocm91dGUpKSB7XG4gICAgICBsZXQgaW5kZXhSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwgbWFwUm91dGVQcm9wZXJ0aWVzKHJvdXRlKSwge1xuICAgICAgICBpZFxuICAgICAgfSk7XG4gICAgICBtYW5pZmVzdFtpZF0gPSBpbmRleFJvdXRlO1xuICAgICAgcmV0dXJuIGluZGV4Um91dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoT3JMYXlvdXRSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwgbWFwUm91dGVQcm9wZXJ0aWVzKHJvdXRlKSwge1xuICAgICAgICBpZCxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBtYW5pZmVzdFtpZF0gPSBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbikge1xuICAgICAgICBwYXRoT3JMYXlvdXRSb3V0ZS5jaGlsZHJlbiA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGUuY2hpbGRyZW4sIG1hcFJvdXRlUHJvcGVydGllcywgdHJlZVBhdGgsIG1hbmlmZXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXRoT3JMYXlvdXRSb3V0ZTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBNYXRjaGVzIHRoZSBnaXZlbiByb3V0ZXMgdG8gYSBsb2NhdGlvbiBhbmQgcmV0dXJucyB0aGUgbWF0Y2ggZGF0YS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL21hdGNoLXJvdXRlc1xuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cbiAgbGV0IGxvY2F0aW9uID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICBsZXQgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKGxvY2F0aW9uLnBhdGhuYW1lIHx8IFwiL1wiLCBiYXNlbmFtZSk7XG4gIGlmIChwYXRobmFtZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcbiAgZm9yIChsZXQgaSA9IDA7IG1hdGNoZXMgPT0gbnVsbCAmJiBpIDwgYnJhbmNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBtYXRjaGVzID0gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2hlc1tpXSxcbiAgICAvLyBJbmNvbWluZyBwYXRobmFtZXMgYXJlIGdlbmVyYWxseSBlbmNvZGVkIGZyb20gZWl0aGVyIHdpbmRvdy5sb2NhdGlvblxuICAgIC8vIG9yIGZyb20gcm91dGVyLm5hdmlnYXRlLCBidXQgd2Ugd2FudCB0byBtYXRjaCBhZ2FpbnN0IHRoZSB1bmVuY29kZWRcbiAgICAvLyBwYXRocyBpbiB0aGUgcm91dGUgZGVmaW5pdGlvbnMuICBNZW1vcnkgcm91dGVyIGxvY2F0aW9ucyB3b24ndCBiZVxuICAgIC8vIGVuY29kZWQgaGVyZSBidXQgdGhlcmUgYWxzbyBzaG91bGRuJ3QgYmUgYW55dGhpbmcgdG8gZGVjb2RlIHNvIHRoaXNcbiAgICAvLyBzaG91bGQgYmUgYSBzYWZlIG9wZXJhdGlvbi4gIFRoaXMgYXZvaWRzIG5lZWRpbmcgbWF0Y2hSb3V0ZXMgdG8gYmVcbiAgICAvLyBoaXN0b3J5LWF3YXJlLlxuICAgIHNhZmVseURlY29kZVVSSShwYXRobmFtZSkpO1xuICB9XG4gIHJldHVybiBtYXRjaGVzO1xufVxuZnVuY3Rpb24gY29udmVydFJvdXRlTWF0Y2hUb1VpTWF0Y2gobWF0Y2gsIGxvYWRlckRhdGEpIHtcbiAgbGV0IHtcbiAgICByb3V0ZSxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXNcbiAgfSA9IG1hdGNoO1xuICByZXR1cm4ge1xuICAgIGlkOiByb3V0ZS5pZCxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXMsXG4gICAgZGF0YTogbG9hZGVyRGF0YVtyb3V0ZS5pZF0sXG4gICAgaGFuZGxlOiByb3V0ZS5oYW5kbGVcbiAgfTtcbn1cbmZ1bmN0aW9uIGZsYXR0ZW5Sb3V0ZXMocm91dGVzLCBicmFuY2hlcywgcGFyZW50c01ldGEsIHBhcmVudFBhdGgpIHtcbiAgaWYgKGJyYW5jaGVzID09PSB2b2lkIDApIHtcbiAgICBicmFuY2hlcyA9IFtdO1xuICB9XG4gIGlmIChwYXJlbnRzTWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50c01ldGEgPSBbXTtcbiAgfVxuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFwiXCI7XG4gIH1cbiAgbGV0IGZsYXR0ZW5Sb3V0ZSA9IChyb3V0ZSwgaW5kZXgsIHJlbGF0aXZlUGF0aCkgPT4ge1xuICAgIGxldCBtZXRhID0ge1xuICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGggPT09IHVuZGVmaW5lZCA/IHJvdXRlLnBhdGggfHwgXCJcIiA6IHJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcbiAgICBpZiAobWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIGludmFyaWFudChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpLCBcIkFic29sdXRlIHJvdXRlIHBhdGggXFxcIlwiICsgbWV0YS5yZWxhdGl2ZVBhdGggKyBcIlxcXCIgbmVzdGVkIHVuZGVyIHBhdGggXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiIGlzIG5vdCB2YWxpZC4gQW4gYWJzb2x1dGUgY2hpbGQgcm91dGUgcGF0aCBcIikgKyBcIm11c3Qgc3RhcnQgd2l0aCB0aGUgY29tYmluZWQgcGF0aCBvZiBhbGwgaXRzIHBhcmVudCByb3V0ZXMuXCIpO1xuICAgICAgbWV0YS5yZWxhdGl2ZVBhdGggPSBtZXRhLnJlbGF0aXZlUGF0aC5zbGljZShwYXJlbnRQYXRoLmxlbmd0aCk7XG4gICAgfVxuICAgIGxldCBwYXRoID0gam9pblBhdGhzKFtwYXJlbnRQYXRoLCBtZXRhLnJlbGF0aXZlUGF0aF0pO1xuICAgIGxldCByb3V0ZXNNZXRhID0gcGFyZW50c01ldGEuY29uY2F0KG1ldGEpO1xuICAgIC8vIEFkZCB0aGUgY2hpbGRyZW4gYmVmb3JlIGFkZGluZyB0aGlzIHJvdXRlIHRvIHRoZSBhcnJheSwgc28gd2UgdHJhdmVyc2UgdGhlXG4gICAgLy8gcm91dGUgdHJlZSBkZXB0aC1maXJzdCBhbmQgY2hpbGQgcm91dGVzIGFwcGVhciBiZWZvcmUgdGhlaXIgcGFyZW50cyBpblxuICAgIC8vIHRoZSBcImZsYXR0ZW5lZFwiIHZlcnNpb24uXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFyaWFudChcbiAgICAgIC8vIE91ciB0eXBlcyBrbm93IGJldHRlciwgYnV0IHJ1bnRpbWUgSlMgbWF5IG5vdCFcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIHJvdXRlLmluZGV4ICE9PSB0cnVlLCBcIkluZGV4IHJvdXRlcyBtdXN0IG5vdCBoYXZlIGNoaWxkIHJvdXRlcy4gUGxlYXNlIHJlbW92ZSBcIiArIChcImFsbCBjaGlsZCByb3V0ZXMgZnJvbSByb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIuXCIpKTtcbiAgICAgIGZsYXR0ZW5Sb3V0ZXMocm91dGUuY2hpbGRyZW4sIGJyYW5jaGVzLCByb3V0ZXNNZXRhLCBwYXRoKTtcbiAgICB9XG4gICAgLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cbiAgICBpZiAocm91dGUucGF0aCA9PSBudWxsICYmICFyb3V0ZS5pbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfTtcbiAgcm91dGVzLmZvckVhY2goKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIHZhciBfcm91dGUkcGF0aDtcbiAgICAvLyBjb2Fyc2UtZ3JhaW4gY2hlY2sgZm9yIG9wdGlvbmFsIHBhcmFtc1xuICAgIGlmIChyb3V0ZS5wYXRoID09PSBcIlwiIHx8ICEoKF9yb3V0ZSRwYXRoID0gcm91dGUucGF0aCkgIT0gbnVsbCAmJiBfcm91dGUkcGF0aC5pbmNsdWRlcyhcIj9cIikpKSB7XG4gICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgZXhwbG9kZWQgb2YgZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocm91dGUucGF0aCkpIHtcbiAgICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCwgZXhwbG9kZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBicmFuY2hlcztcbn1cbi8qKlxuICogQ29tcHV0ZXMgYWxsIGNvbWJpbmF0aW9ucyBvZiBvcHRpb25hbCBwYXRoIHNlZ21lbnRzIGZvciBhIGdpdmVuIHBhdGgsXG4gKiBleGNsdWRpbmcgY29tYmluYXRpb25zIHRoYXQgYXJlIGFtYmlndW91cyBhbmQgb2YgbG93ZXIgcHJpb3JpdHkuXG4gKlxuICogRm9yIGV4YW1wbGUsIGAvb25lLzp0d28/L3RocmVlLzpmb3VyPy86Zml2ZT9gIGV4cGxvZGVzIHRvOlxuICogLSBgL29uZS90aHJlZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZWBcbiAqIC0gYC9vbmUvdGhyZWUvOmZvdXJgXG4gKiAtIGAvb25lL3RocmVlLzpmaXZlYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmb3VyYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmaXZlYFxuICogLSBgL29uZS90aHJlZS86Zm91ci86Zml2ZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zm91ci86Zml2ZWBcbiAqL1xuZnVuY3Rpb24gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocGF0aCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBsZXQgW2ZpcnN0LCAuLi5yZXN0XSA9IHNlZ21lbnRzO1xuICAvLyBPcHRpb25hbCBwYXRoIHNlZ21lbnRzIGFyZSBkZW5vdGVkIGJ5IGEgdHJhaWxpbmcgYD9gXG4gIGxldCBpc09wdGlvbmFsID0gZmlyc3QuZW5kc1dpdGgoXCI/XCIpO1xuICAvLyBDb21wdXRlIHRoZSBjb3JyZXNwb25kaW5nIHJlcXVpcmVkIHNlZ21lbnQ6IGBmb28/YCAtPiBgZm9vYFxuICBsZXQgcmVxdWlyZWQgPSBmaXJzdC5yZXBsYWNlKC9cXD8kLywgXCJcIik7XG4gIGlmIChyZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIEludGVwcmV0IGVtcHR5IHN0cmluZyBhcyBvbWl0dGluZyBhbiBvcHRpb25hbCBzZWdtZW50XG4gICAgLy8gYFtcIm9uZVwiLCBcIlwiLCBcInRocmVlXCJdYCBjb3JyZXNwb25kcyB0byBvbWl0dGluZyBgOnR3b2AgZnJvbSBgL29uZS86dHdvPy90aHJlZWAgLT4gYC9vbmUvdGhyZWVgXG4gICAgcmV0dXJuIGlzT3B0aW9uYWwgPyBbcmVxdWlyZWQsIFwiXCJdIDogW3JlcXVpcmVkXTtcbiAgfVxuICBsZXQgcmVzdEV4cGxvZGVkID0gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocmVzdC5qb2luKFwiL1wiKSk7XG4gIGxldCByZXN1bHQgPSBbXTtcbiAgLy8gQWxsIGNoaWxkIHBhdGhzIHdpdGggdGhlIHByZWZpeC4gIERvIHRoaXMgZm9yIGFsbCBjaGlsZHJlbiBiZWZvcmUgdGhlXG4gIC8vIG9wdGlvbmFsIHZlcnNpb24gZm9yIGFsbCBjaGlsZHJlbiwgc28gd2UgZ2V0IGNvbnNpc3RlbnQgb3JkZXJpbmcgd2hlcmUgdGhlXG4gIC8vIHBhcmVudCBvcHRpb25hbCBhc3BlY3QgaXMgcHJlZmVycmVkIGFzIHJlcXVpcmVkLiAgT3RoZXJ3aXNlLCB3ZSBjYW4gZ2V0XG4gIC8vIGNoaWxkIHNlY3Rpb25zIGludGVyc3BlcnNlZCB3aGVyZSBkZWVwZXIgb3B0aW9uYWwgc2VnbWVudHMgYXJlIGhpZ2hlciB0aGFuXG4gIC8vIHBhcmVudCBvcHRpb25hbCBzZWdtZW50cywgd2hlcmUgZm9yIGV4YW1wbGUsIC86dHdvIHdvdWxkIGV4cGxvZGUgX2VhcmxpZXJfXG4gIC8vIHRoZW4gLzpvbmUuICBCeSBhbHdheXMgaW5jbHVkaW5nIHRoZSBwYXJlbnQgYXMgcmVxdWlyZWQgX2ZvciBhbGwgY2hpbGRyZW5fXG4gIC8vIGZpcnN0LCB3ZSBhdm9pZCB0aGlzIGlzc3VlXG4gIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZC5tYXAoc3VicGF0aCA9PiBzdWJwYXRoID09PSBcIlwiID8gcmVxdWlyZWQgOiBbcmVxdWlyZWQsIHN1YnBhdGhdLmpvaW4oXCIvXCIpKSk7XG4gIC8vIFRoZW4sIGlmIHRoaXMgaXMgYW4gb3B0aW9uYWwgdmFsdWUsIGFkZCBhbGwgY2hpbGQgdmVyc2lvbnMgd2l0aG91dFxuICBpZiAoaXNPcHRpb25hbCkge1xuICAgIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZCk7XG4gIH1cbiAgLy8gZm9yIGFic29sdXRlIHBhdGhzLCBlbnN1cmUgYC9gIGluc3RlYWQgb2YgZW1wdHkgc2VnbWVudFxuICByZXR1cm4gcmVzdWx0Lm1hcChleHBsb2RlZCA9PiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpICYmIGV4cGxvZGVkID09PSBcIlwiID8gXCIvXCIgOiBleHBsb2RlZCk7XG59XG5mdW5jdGlvbiByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcykge1xuICBicmFuY2hlcy5zb3J0KChhLCBiKSA9PiBhLnNjb3JlICE9PSBiLnNjb3JlID8gYi5zY29yZSAtIGEuc2NvcmUgLy8gSGlnaGVyIHNjb3JlIGZpcnN0XG4gIDogY29tcGFyZUluZGV4ZXMoYS5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCksIGIucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpKSk7XG59XG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcbmNvbnN0IGlzU3BsYXQgPSBzID0+IHMgPT09IFwiKlwiO1xuZnVuY3Rpb24gY29tcHV0ZVNjb3JlKHBhdGgsIGluZGV4KSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBsZXQgaW5pdGlhbFNjb3JlID0gc2VnbWVudHMubGVuZ3RoO1xuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cbiAgaWYgKGluZGV4KSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IGluZGV4Um91dGVWYWx1ZTtcbiAgfVxuICByZXR1cm4gc2VnbWVudHMuZmlsdGVyKHMgPT4gIWlzU3BsYXQocykpLnJlZHVjZSgoc2NvcmUsIHNlZ21lbnQpID0+IHNjb3JlICsgKHBhcmFtUmUudGVzdChzZWdtZW50KSA/IGR5bmFtaWNTZWdtZW50VmFsdWUgOiBzZWdtZW50ID09PSBcIlwiID8gZW1wdHlTZWdtZW50VmFsdWUgOiBzdGF0aWNTZWdtZW50VmFsdWUpLCBpbml0aWFsU2NvcmUpO1xufVxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgP1xuICAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOlxuICAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuZnVuY3Rpb24gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2gsIHBhdGhuYW1lKSB7XG4gIGxldCB7XG4gICAgcm91dGVzTWV0YVxuICB9ID0gYnJhbmNoO1xuICBsZXQgbWF0Y2hlZFBhcmFtcyA9IHt9O1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVzTWV0YS5sZW5ndGg7ICsraSkge1xuICAgIGxldCBtZXRhID0gcm91dGVzTWV0YVtpXTtcbiAgICBsZXQgZW5kID0gaSA9PT0gcm91dGVzTWV0YS5sZW5ndGggLSAxO1xuICAgIGxldCByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWRQYXRobmFtZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKG1hdGNoZWRQYXRobmFtZS5sZW5ndGgpIHx8IFwiL1wiO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoUGF0aCh7XG4gICAgICBwYXRoOiBtZXRhLnJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IG1ldGEuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVuZFxuICAgIH0sIHJlbWFpbmluZ1BhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICBPYmplY3QuYXNzaWduKG1hdGNoZWRQYXJhbXMsIG1hdGNoLnBhcmFtcyk7XG4gICAgbGV0IHJvdXRlID0gbWV0YS5yb3V0ZTtcbiAgICBtYXRjaGVzLnB1c2goe1xuICAgICAgLy8gVE9ETzogQ2FuIHRoaXMgYXMgYmUgYXZvaWRlZD9cbiAgICAgIHBhcmFtczogbWF0Y2hlZFBhcmFtcyxcbiAgICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVdKSxcbiAgICAgIHBhdGhuYW1lQmFzZTogbm9ybWFsaXplUGF0aG5hbWUoam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lQmFzZV0pKSxcbiAgICAgIHJvdXRlXG4gICAgfSk7XG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIFJldHVybnMgYSBwYXRoIHdpdGggcGFyYW1zIGludGVycG9sYXRlZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2dlbmVyYXRlLXBhdGhcbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKG9yaWdpbmFsUGF0aCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG4gIGxldCBwYXRoID0gb3JpZ2luYWxQYXRoO1xuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikgJiYgcGF0aCAhPT0gXCIqXCIgJiYgIXBhdGguZW5kc1dpdGgoXCIvKlwiKSkge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKTtcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKTtcbiAgfVxuICAvLyBlbnN1cmUgYC9gIGlzIGFkZGVkIGF0IHRoZSBiZWdpbm5pbmcgaWYgdGhlIHBhdGggaXMgYWJzb2x1dGVcbiAgY29uc3QgcHJlZml4ID0gcGF0aC5zdGFydHNXaXRoKFwiL1wiKSA/IFwiL1wiIDogXCJcIjtcbiAgY29uc3Qgc3RyaW5naWZ5ID0gcCA9PiBwID09IG51bGwgPyBcIlwiIDogdHlwZW9mIHAgPT09IFwic3RyaW5nXCIgPyBwIDogU3RyaW5nKHApO1xuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoL1xcLysvKS5tYXAoKHNlZ21lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IGlzTGFzdFNlZ21lbnQgPSBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICAvLyBvbmx5IGFwcGx5IHRoZSBzcGxhdCBpZiBpdCdzIHRoZSBsYXN0IHNlZ21lbnRcbiAgICBpZiAoaXNMYXN0U2VnbWVudCAmJiBzZWdtZW50ID09PSBcIipcIikge1xuICAgICAgY29uc3Qgc3RhciA9IFwiKlwiO1xuICAgICAgLy8gQXBwbHkgdGhlIHNwbGF0XG4gICAgICByZXR1cm4gc3RyaW5naWZ5KHBhcmFtc1tzdGFyXSk7XG4gICAgfVxuICAgIGNvbnN0IGtleU1hdGNoID0gc2VnbWVudC5tYXRjaCgvXjooXFx3KykoXFw/PykkLyk7XG4gICAgaWYgKGtleU1hdGNoKSB7XG4gICAgICBjb25zdCBbLCBrZXksIG9wdGlvbmFsXSA9IGtleU1hdGNoO1xuICAgICAgbGV0IHBhcmFtID0gcGFyYW1zW2tleV07XG4gICAgICBpbnZhcmlhbnQob3B0aW9uYWwgPT09IFwiP1wiIHx8IHBhcmFtICE9IG51bGwsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpO1xuICAgICAgcmV0dXJuIHN0cmluZ2lmeShwYXJhbSk7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBhbnkgb3B0aW9uYWwgbWFya2VycyBmcm9tIG9wdGlvbmFsIHN0YXRpYyBzZWdtZW50c1xuICAgIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1xcPyQvZywgXCJcIik7XG4gIH0pXG4gIC8vIFJlbW92ZSBlbXB0eSBzZWdtZW50c1xuICAuZmlsdGVyKHNlZ21lbnQgPT4gISFzZWdtZW50KTtcbiAgcmV0dXJuIHByZWZpeCArIHNlZ21lbnRzLmpvaW4oXCIvXCIpO1xufVxuLyoqXG4gKiBQZXJmb3JtcyBwYXR0ZXJuIG1hdGNoaW5nIG9uIGEgVVJMIHBhdGhuYW1lIGFuZCByZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0XG4gKiB0aGUgbWF0Y2guXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9tYXRjaC1wYXRoXG4gKi9cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSkge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICBwYXR0ZXJuID0ge1xuICAgICAgcGF0aDogcGF0dGVybixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgZW5kOiB0cnVlXG4gICAgfTtcbiAgfVxuICBsZXQgW21hdGNoZXIsIHBhcmFtTmFtZXNdID0gY29tcGlsZVBhdGgocGF0dGVybi5wYXRoLCBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsIHBhdHRlcm4uZW5kKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gcGFyYW1OYW1lcy5yZWR1Y2UoKG1lbW8sIHBhcmFtTmFtZSwgaW5kZXgpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuICAgIG1lbW9bcGFyYW1OYW1lXSA9IHNhZmVseURlY29kZVVSSUNvbXBvbmVudChjYXB0dXJlR3JvdXBzW2luZGV4XSB8fCBcIlwiLCBwYXJhbU5hbWUpO1xuICAgIHJldHVybiBtZW1vO1xuICB9LCB7fSk7XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHBhdGhuYW1lOiBtYXRjaGVkUGF0aG5hbWUsXG4gICAgcGF0aG5hbWVCYXNlLFxuICAgIHBhdHRlcm5cbiAgfTtcbn1cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgsIGNhc2VTZW5zaXRpdmUsIGVuZCkge1xuICBpZiAoY2FzZVNlbnNpdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGlmIChlbmQgPT09IHZvaWQgMCkge1xuICAgIGVuZCA9IHRydWU7XG4gIH1cbiAgd2FybmluZyhwYXRoID09PSBcIipcIiB8fCAhcGF0aC5lbmRzV2l0aChcIipcIikgfHwgcGF0aC5lbmRzV2l0aChcIi8qXCIpLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gIGxldCBwYXJhbU5hbWVzID0gW107XG4gIGxldCByZWdleHBTb3VyY2UgPSBcIl5cIiArIHBhdGgucmVwbGFjZSgvXFwvKlxcKj8kLywgXCJcIikgLy8gSWdub3JlIHRyYWlsaW5nIC8gYW5kIC8qLCB3ZSdsbCBoYW5kbGUgaXQgYmVsb3dcbiAgLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpIC8vIE1ha2Ugc3VyZSBpdCBoYXMgYSBsZWFkaW5nIC9cbiAgLnJlcGxhY2UoL1tcXFxcLiorXiQ/e318KClbXFxdXS9nLCBcIlxcXFwkJlwiKSAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyc1xuICAucmVwbGFjZSgvXFwvOihcXHcrKS9nLCAoXywgcGFyYW1OYW1lKSA9PiB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIFwiLyhbXlxcXFwvXSspXCI7XG4gIH0pO1xuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2UgaWYgKGVuZCkge1xuICAgIC8vIFdoZW4gbWF0Y2hpbmcgdG8gdGhlIGVuZCwgaWdub3JlIHRyYWlsaW5nIHNsYXNoZXNcbiAgICByZWdleHBTb3VyY2UgKz0gXCJcXFxcLyokXCI7XG4gIH0gZWxzZSBpZiAocGF0aCAhPT0gXCJcIiAmJiBwYXRoICE9PSBcIi9cIikge1xuICAgIC8vIElmIG91ciBwYXRoIGlzIG5vbi1lbXB0eSBhbmQgY29udGFpbnMgYW55dGhpbmcgYmV5b25kIGFuIGluaXRpYWwgc2xhc2gsXG4gICAgLy8gdGhlbiB3ZSBoYXZlIF9zb21lXyBmb3JtIG9mIHBhdGggaW4gb3VyIHJlZ2V4LCBzbyB3ZSBzaG91bGQgZXhwZWN0IHRvXG4gICAgLy8gbWF0Y2ggb25seSBpZiB3ZSBmaW5kIHRoZSBlbmQgb2YgdGhpcyBwYXRoIHNlZ21lbnQuICBMb29rIGZvciBhbiBvcHRpb25hbFxuICAgIC8vIG5vbi1jYXB0dXJlZCB0cmFpbGluZyBzbGFzaCAodG8gbWF0Y2ggYSBwb3J0aW9uIG9mIHRoZSBVUkwpIG9yIHRoZSBlbmRcbiAgICAvLyBvZiB0aGUgcGF0aCAoaWYgd2UndmUgbWF0Y2hlZCB0byB0aGUgZW5kKS4gIFdlIHVzZWQgdG8gZG8gdGhpcyB3aXRoIGFcbiAgICAvLyB3b3JkIGJvdW5kYXJ5IGJ1dCB0aGF0IGdpdmVzIGZhbHNlIHBvc2l0aXZlcyBvbiByb3V0ZXMgbGlrZVxuICAgIC8vIC91c2VyLXByZWZlcmVuY2VzIHNpbmNlIGAtYCBjb3VudHMgYXMgYSB3b3JkIGJvdW5kYXJ5LlxuICAgIHJlZ2V4cFNvdXJjZSArPSBcIig/Oig/PVxcXFwvfCQpKVwiO1xuICB9IGVsc2UgO1xuICBsZXQgbWF0Y2hlciA9IG5ldyBSZWdFeHAocmVnZXhwU291cmNlLCBjYXNlU2Vuc2l0aXZlID8gdW5kZWZpbmVkIDogXCJpXCIpO1xuICByZXR1cm4gW21hdGNoZXIsIHBhcmFtTmFtZXNdO1xufVxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJUaGUgVVJMIHBhdGggXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgY291bGQgbm90IGJlIGRlY29kZWQgYmVjYXVzZSBpdCBpcyBpcyBhIFwiICsgXCJtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGEgYmFkIHBlcmNlbnQgXCIgKyAoXCJlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlRoZSB2YWx1ZSBmb3IgdGhlIFVSTCBwYXJhbSBcXFwiXCIgKyBwYXJhbU5hbWUgKyBcIlxcXCIgd2lsbCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlXCIgKyAoXCIgdGhlIHN0cmluZyBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBpcyBhIG1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseVwiKSArIChcIiBkdWUgdG8gYSBiYWQgcGVyY2VudCBlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG4gIGlmICghcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGJhc2VuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gV2Ugd2FudCB0byBsZWF2ZSB0cmFpbGluZyBzbGFzaCBiZWhhdmlvciBpbiB0aGUgdXNlcidzIGNvbnRyb2wsIHNvIGlmIHRoZXlcbiAgLy8gc3BlY2lmeSBhIGJhc2VuYW1lIHdpdGggYSB0cmFpbGluZyBzbGFzaCwgd2Ugc2hvdWxkIHN1cHBvcnQgaXRcbiAgbGV0IHN0YXJ0SW5kZXggPSBiYXNlbmFtZS5lbmRzV2l0aChcIi9cIikgPyBiYXNlbmFtZS5sZW5ndGggLSAxIDogYmFzZW5hbWUubGVuZ3RoO1xuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoc3RhcnRJbmRleCk7XG4gIGlmIChuZXh0Q2hhciAmJiBuZXh0Q2hhciAhPT0gXCIvXCIpIHtcbiAgICAvLyBwYXRobmFtZSBkb2VzIG5vdCBzdGFydCB3aXRoIGJhc2VuYW1lL1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBwYXRobmFtZS5zbGljZShzdGFydEluZGV4KSB8fCBcIi9cIjtcbn1cbi8qKlxuICogUmV0dXJucyBhIHJlc29sdmVkIHBhdGggb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBwYXRobmFtZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL3Jlc29sdmUtcGF0aFxuICovXG5mdW5jdGlvbiByZXNvbHZlUGF0aCh0bywgZnJvbVBhdGhuYW1lKSB7XG4gIGlmIChmcm9tUGF0aG5hbWUgPT09IHZvaWQgMCkge1xuICAgIGZyb21QYXRobmFtZSA9IFwiL1wiO1xuICB9XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IHRvUGF0aG5hbWUsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIlxuICB9ID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICBsZXQgcGF0aG5hbWUgPSB0b1BhdGhuYW1lID8gdG9QYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUgOiByZXNvbHZlUGF0aG5hbWUodG9QYXRobmFtZSwgZnJvbVBhdGhuYW1lKSA6IGZyb21QYXRobmFtZTtcbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2g6IG5vcm1hbGl6ZVNlYXJjaChzZWFyY2gpLFxuICAgIGhhc2g6IG5vcm1hbGl6ZUhhc2goaGFzaClcbiAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIGlmIChzZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgIC8vIEtlZXAgdGhlIHJvb3QgXCJcIiBzZWdtZW50IHNvIHRoZSBwYXRobmFtZSBzdGFydHMgYXQgL1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuZnVuY3Rpb24gZ2V0SW52YWxpZFBhdGhFcnJvcihjaGFyLCBmaWVsZCwgZGVzdCwgcGF0aCkge1xuICByZXR1cm4gXCJDYW5ub3QgaW5jbHVkZSBhICdcIiArIGNoYXIgKyBcIicgY2hhcmFjdGVyIGluIGEgbWFudWFsbHkgc3BlY2lmaWVkIFwiICsgKFwiYHRvLlwiICsgZmllbGQgKyBcImAgZmllbGQgW1wiICsgSlNPTi5zdHJpbmdpZnkocGF0aCkgKyBcIl0uICBQbGVhc2Ugc2VwYXJhdGUgaXQgb3V0IHRvIHRoZSBcIikgKyAoXCJgdG8uXCIgKyBkZXN0ICsgXCJgIGZpZWxkLiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgcHJvdmlkZSB0aGUgZnVsbCBwYXRoIGFzIFwiKSArIFwiYSBzdHJpbmcgaW4gPExpbmsgdG89XFxcIi4uLlxcXCI+IGFuZCB0aGUgcm91dGVyIHdpbGwgcGFyc2UgaXQgZm9yIHlvdS5cIjtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqXG4gKiBXaGVuIHByb2Nlc3NpbmcgcmVsYXRpdmUgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIGlnbm9yZSBhbmNlc3RvciByb3V0ZXMgdGhhdFxuICogZG8gbm90IGNvbnRyaWJ1dGUgdG8gdGhlIHBhdGgsIHN1Y2ggdGhhdCBpbmRleC9wYXRobGVzcyBsYXlvdXQgcm91dGVzIGRvbid0XG4gKiBpbnRlcmZlcmUuXG4gKlxuICogRm9yIGV4YW1wbGUsIHdoZW4gbW92aW5nIGEgcm91dGUgZWxlbWVudCBpbnRvIGFuIGluZGV4IHJvdXRlIGFuZC9vciBhXG4gKiBwYXRobGVzcyBsYXlvdXQgcm91dGUsIHJlbGF0aXZlIGxpbmsgYmVoYXZpb3IgY29udGFpbmVkIHdpdGhpbiBzaG91bGQgc3RheVxuICogdGhlIHNhbWUuICBCb3RoIG9mIHRoZSBmb2xsb3dpbmcgZXhhbXBsZXMgc2hvdWxkIGxpbmsgYmFjayB0byB0aGUgcm9vdDpcbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIiBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9PlxuICogICA8L1JvdXRlPlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gKiAgICAgPFJvdXRlIHBhdGg9XCJhY2NvdW50c1wiPlxuICogICAgICAgPFJvdXRlIGVsZW1lbnQ9ezxBY2NvdW50c0xheW91dCAvPn0+ICAgICAgIC8vIDwtLSBEb2VzIG5vdCBjb250cmlidXRlXG4gKiAgICAgICAgIDxSb3V0ZSBpbmRleCBlbGVtZW50PXs8TGluayB0bz1cIi4uXCJ9IC8+ICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgPC9Sb3V0ZVxuICogICAgIDwvUm91dGU+XG4gKiAgIDwvUm91dGU+XG4gKi9cbmZ1bmN0aW9uIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCwgaW5kZXgpID0+IGluZGV4ID09PSAwIHx8IG1hdGNoLnJvdXRlLnBhdGggJiYgbWF0Y2gucm91dGUucGF0aC5sZW5ndGggPiAwKTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVRvKHRvQXJnLCByb3V0ZVBhdGhuYW1lcywgbG9jYXRpb25QYXRobmFtZSwgaXNQYXRoUmVsYXRpdmUpIHtcbiAgaWYgKGlzUGF0aFJlbGF0aXZlID09PSB2b2lkIDApIHtcbiAgICBpc1BhdGhSZWxhdGl2ZSA9IGZhbHNlO1xuICB9XG4gIGxldCB0bztcbiAgaWYgKHR5cGVvZiB0b0FyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRvID0gcGFyc2VQYXRoKHRvQXJnKTtcbiAgfSBlbHNlIHtcbiAgICB0byA9IF9leHRlbmRzKHt9LCB0b0FyZyk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCI/XCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiP1wiLCBcInBhdGhuYW1lXCIsIFwic2VhcmNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInBhdGhuYW1lXCIsIFwiaGFzaFwiLCB0bykpO1xuICAgIGludmFyaWFudCghdG8uc2VhcmNoIHx8ICF0by5zZWFyY2guaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInNlYXJjaFwiLCBcImhhc2hcIiwgdG8pKTtcbiAgfVxuICBsZXQgaXNFbXB0eVBhdGggPSB0b0FyZyA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIjtcbiAgbGV0IHRvUGF0aG5hbWUgPSBpc0VtcHR5UGF0aCA/IFwiL1wiIDogdG8ucGF0aG5hbWU7XG4gIGxldCBmcm9tO1xuICAvLyBSb3V0aW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50IHBhdGhuYW1lIGlmIGV4cGxpY2l0bHkgcmVxdWVzdGVkLlxuICAvL1xuICAvLyBJZiBhIHBhdGhuYW1lIGlzIGV4cGxpY2l0bHkgcHJvdmlkZWQgaW4gYHRvYCwgaXQgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAvLyByb3V0ZSBjb250ZXh0LiBUaGlzIGlzIGV4cGxhaW5lZCBpbiBgTm90ZSBvbiBgPExpbmsgdG8+YCB2YWx1ZXNgIGluIG91clxuICAvLyBtaWdyYXRpb24gZ3VpZGUgZnJvbSB2NSBhcyBhIG1lYW5zIG9mIGRpc2FtYmlndWF0aW9uIGJldHdlZW4gYHRvYCB2YWx1ZXNcbiAgLy8gdGhhdCBiZWdpbiB3aXRoIGAvYCBhbmQgdGhvc2UgdGhhdCBkbyBub3QuIEhvd2V2ZXIsIHRoaXMgaXMgcHJvYmxlbWF0aWMgZm9yXG4gIC8vIGB0b2AgdmFsdWVzIHRoYXQgZG8gbm90IHByb3ZpZGUgYSBwYXRobmFtZS4gYHRvYCBjYW4gc2ltcGx5IGJlIGEgc2VhcmNoIG9yXG4gIC8vIGhhc2ggc3RyaW5nLCBpbiB3aGljaCBjYXNlIHdlIHNob3VsZCBhc3N1bWUgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyByZWxhdGl2ZVxuICAvLyB0byB0aGUgY3VycmVudCBsb2NhdGlvbidzIHBhdGhuYW1lIGFuZCAqbm90KiB0aGUgcm91dGUgcGF0aG5hbWUuXG4gIGlmIChpc1BhdGhSZWxhdGl2ZSB8fCB0b1BhdGhuYW1lID09IG51bGwpIHtcbiAgICBmcm9tID0gbG9jYXRpb25QYXRobmFtZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcm91dGVQYXRobmFtZUluZGV4ID0gcm91dGVQYXRobmFtZXMubGVuZ3RoIC0gMTtcbiAgICBpZiAodG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7XG4gICAgICAvLyBFYWNoIGxlYWRpbmcgLi4gc2VnbWVudCBtZWFucyBcImdvIHVwIG9uZSByb3V0ZVwiIGluc3RlYWQgb2YgXCJnbyB1cCBvbmVcbiAgICAgIC8vIFVSTCBzZWdtZW50XCIuICBUaGlzIGlzIGEga2V5IGRpZmZlcmVuY2UgZnJvbSBob3cgPGEgaHJlZj4gd29ya3MgYW5kIGFcbiAgICAgIC8vIG1ham9yIHJlYXNvbiB3ZSBjYWxsIHRoaXMgYSBcInRvXCIgdmFsdWUgaW5zdGVhZCBvZiBhIFwiaHJlZlwiLlxuICAgICAgd2hpbGUgKHRvU2VnbWVudHNbMF0gPT09IFwiLi5cIikge1xuICAgICAgICB0b1NlZ21lbnRzLnNoaWZ0KCk7XG4gICAgICAgIHJvdXRlUGF0aG5hbWVJbmRleCAtPSAxO1xuICAgICAgfVxuICAgICAgdG8ucGF0aG5hbWUgPSB0b1NlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgIH1cbiAgICAvLyBJZiB0aGVyZSBhcmUgbW9yZSBcIi4uXCIgc2VnbWVudHMgdGhhbiBwYXJlbnQgcm91dGVzLCByZXNvbHZlIHJlbGF0aXZlIHRvXG4gICAgLy8gdGhlIHJvb3QgLyBVUkwuXG4gICAgZnJvbSA9IHJvdXRlUGF0aG5hbWVJbmRleCA+PSAwID8gcm91dGVQYXRobmFtZXNbcm91dGVQYXRobmFtZUluZGV4XSA6IFwiL1wiO1xuICB9XG4gIGxldCBwYXRoID0gcmVzb2x2ZVBhdGgodG8sIGZyb20pO1xuICAvLyBFbnN1cmUgdGhlIHBhdGhuYW1lIGhhcyBhIHRyYWlsaW5nIHNsYXNoIGlmIHRoZSBvcmlnaW5hbCBcInRvXCIgaGFkIG9uZVxuICBsZXQgaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoID0gdG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgLy8gT3IgaWYgdGhpcyB3YXMgYSBsaW5rIHRvIHRoZSBjdXJyZW50IHBhdGggd2hpY2ggaGFzIGEgdHJhaWxpbmcgc2xhc2hcbiAgbGV0IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoID0gKGlzRW1wdHlQYXRoIHx8IHRvUGF0aG5hbWUgPT09IFwiLlwiKSAmJiBsb2NhdGlvblBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTtcbiAgaWYgKCFwYXRoLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAoaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoIHx8IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoKSkge1xuICAgIHBhdGgucGF0aG5hbWUgKz0gXCIvXCI7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGdldFRvUGF0aG5hbWUodG8pIHtcbiAgLy8gRW1wdHkgc3RyaW5ncyBzaG91bGQgYmUgdHJlYXRlZCB0aGUgc2FtZSBhcyAvIHBhdGhzXG4gIHJldHVybiB0byA9PT0gXCJcIiB8fCB0by5wYXRobmFtZSA9PT0gXCJcIiA/IFwiL1wiIDogdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKS5wYXRobmFtZSA6IHRvLnBhdGhuYW1lO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBqb2luUGF0aHMgPSBwYXRocyA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuY29uc3Qgbm9ybWFsaXplUGF0aG5hbWUgPSBwYXRobmFtZSA9PiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBub3JtYWxpemVTZWFyY2ggPSBzZWFyY2ggPT4gIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IHNlYXJjaC5zdGFydHNXaXRoKFwiP1wiKSA/IHNlYXJjaCA6IFwiP1wiICsgc2VhcmNoO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBub3JtYWxpemVIYXNoID0gaGFzaCA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbi8qKlxuICogVGhpcyBpcyBhIHNob3J0Y3V0IGZvciBjcmVhdGluZyBgYXBwbGljYXRpb24vanNvbmAgcmVzcG9uc2VzLiBDb252ZXJ0cyBgZGF0YWBcbiAqIHRvIEpTT04gYW5kIHNldHMgdGhlIGBDb250ZW50LVR5cGVgIGhlYWRlci5cbiAqL1xuY29uc3QganNvbiA9IGZ1bmN0aW9uIGpzb24oZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuICBpZiAoIWhlYWRlcnMuaGFzKFwiQ29udGVudC1UeXBlXCIpKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICB9XG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG5jbGFzcyBBYm9ydGVkRGVmZXJyZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5jbGFzcyBEZWZlcnJlZERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhLCByZXNwb25zZUluaXQpIHtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kZWZlcnJlZEtleXMgPSBbXTtcbiAgICBpbnZhcmlhbnQoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSwgXCJkZWZlcigpIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzXCIpO1xuICAgIC8vIFNldCB1cCBhbiBBYm9ydENvbnRyb2xsZXIgKyBQcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3QgdG8gZXhpdCBlYXJseVxuICAgIC8vIGNhbmNlbGxhdGlvblxuICAgIGxldCByZWplY3Q7XG4gICAgdGhpcy5hYm9ydFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcikgPT4gcmVqZWN0ID0gcik7XG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBvbkFib3J0ID0gKCkgPT4gcmVqZWN0KG5ldyBBYm9ydGVkRGVmZXJyZWRFcnJvcihcIkRlZmVycmVkIGRhdGEgYWJvcnRlZFwiKSk7XG4gICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsID0gKCkgPT4gdGhpcy5jb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgdGhpcy5jb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB0aGlzLnRyYWNrUHJvbWlzZShrZXksIHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIEFsbCBpbmNvbWluZyB2YWx1ZXMgd2VyZSByZXNvbHZlZFxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdCA9IHJlc3BvbnNlSW5pdDtcbiAgfVxuICB0cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5kZWZlcnJlZEtleXMucHVzaChrZXkpO1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQuYWRkKGtleSk7XG4gICAgLy8gV2Ugc3RvcmUgYSBsaXR0bGUgd3JhcHBlciBwcm9taXNlIHRoYXQgd2lsbCBiZSBleHRlbmRlZCB3aXRoXG4gICAgLy8gX2RhdGEvX2Vycm9yIHByb3BzIHVwb24gcmVzb2x2ZS9yZWplY3RcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmFjZShbdmFsdWUsIHRoaXMuYWJvcnRQcm9taXNlXSkudGhlbihkYXRhID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCB1bmRlZmluZWQsIGRhdGEpLCBlcnJvciA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IpKTtcbiAgICAvLyBSZWdpc3RlciByZWplY3Rpb24gbGlzdGVuZXJzIHRvIGF2b2lkIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0aW9ucyBvblxuICAgIC8vIGVycm9ycyBvciBhYm9ydGVkIGRlZmVycmVkIHZhbHVlc1xuICAgIHByb21pc2UuY2F0Y2goKCkgPT4ge30pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG4gIG9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IsIGRhdGEpIHtcbiAgICBpZiAodGhpcy5jb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkICYmIGVycm9yIGluc3RhbmNlb2YgQWJvcnRlZERlZmVycmVkRXJyb3IpIHtcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrZXkpO1xuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIE5vdGhpbmcgbGVmdCB0byBhYm9ydCFcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcHJvbWlzZSB3YXMgcmVzb2x2ZWQvcmVqZWN0ZWQgd2l0aCB1bmRlZmluZWQsIHdlJ2xsIHRocm93IGFuIGVycm9yIGFzIHlvdVxuICAgIC8vIHNob3VsZCBhbHdheXMgcmVzb2x2ZSB3aXRoIGEgdmFsdWUgb3IgbnVsbFxuICAgIGlmIChlcnJvciA9PT0gdW5kZWZpbmVkICYmIGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IHVuZGVmaW5lZEVycm9yID0gbmV3IEVycm9yKFwiRGVmZXJyZWQgZGF0YSBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXNvbHZlZC9yZWplY3RlZCB3aXRoIGB1bmRlZmluZWRgLCBcIiArIFwieW91IG11c3QgcmVzb2x2ZS9yZWplY3Qgd2l0aCBhIHZhbHVlIG9yIGBudWxsYC5cIik7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHVuZGVmaW5lZEVycm9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh1bmRlZmluZWRFcnJvcik7XG4gICAgfVxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG4gIGVtaXQoYWJvcnRlZCwgc2V0dGxlZEtleSkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoYWJvcnRlZCwgc2V0dGxlZEtleSkpO1xuICB9XG4gIHN1YnNjcmliZShmbikge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9XG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmZvckVhY2goKHYsIGspID0+IHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGspKTtcbiAgICB0aGlzLmVtaXQodHJ1ZSk7XG4gIH1cbiAgYXN5bmMgcmVzb2x2ZURhdGEoc2lnbmFsKSB7XG4gICAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZG9uZSkge1xuICAgICAgbGV0IG9uQWJvcnQgPSAoKSA9PiB0aGlzLmNhbmNlbCgpO1xuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIGFib3J0ZWQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgICAgICBpZiAoYWJvcnRlZCB8fCB0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYWJvcnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWJvcnRlZDtcbiAgfVxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nS2V5c1NldC5zaXplID09PSAwO1xuICB9XG4gIGdldCB1bndyYXBwZWREYXRhKCkge1xuICAgIGludmFyaWFudCh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kb25lLCBcIkNhbiBvbmx5IHVud3JhcCBkYXRhIG9uIGluaXRpYWxpemVkIGFuZCBzZXR0bGVkIGRlZmVycmVkc1wiKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5yZWR1Y2UoKGFjYywgX3JlZjIpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmMjtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG4gIH1cbiAgZ2V0IHBlbmRpbmdLZXlzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMucGVuZGluZ0tleXNTZXQpO1xuICB9XG59XG5mdW5jdGlvbiBpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuX3RyYWNrZWQgPT09IHRydWU7XG59XG5mdW5jdGlvbiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSkge1xuICBpZiAoIWlzVHJhY2tlZFByb21pc2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZS5fZXJyb3IpIHtcbiAgICB0aHJvdyB2YWx1ZS5fZXJyb3I7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLl9kYXRhO1xufVxuY29uc3QgZGVmZXIgPSBmdW5jdGlvbiBkZWZlcihkYXRhLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0ge307XG4gIH1cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8ge1xuICAgIHN0YXR1czogaW5pdFxuICB9IDogaW5pdDtcbiAgcmV0dXJuIG5ldyBEZWZlcnJlZERhdGEoZGF0YSwgcmVzcG9uc2VJbml0KTtcbn07XG4vKipcbiAqIEEgcmVkaXJlY3QgcmVzcG9uc2UuIFNldHMgdGhlIHN0YXR1cyBjb2RlIGFuZCB0aGUgYExvY2F0aW9uYCBoZWFkZXIuXG4gKiBEZWZhdWx0cyB0byBcIjMwMiBGb3VuZFwiLlxuICovXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IDMwMjtcbiAgfVxuICBsZXQgcmVzcG9uc2VJbml0ID0gaW5pdDtcbiAgaWYgKHR5cGVvZiByZXNwb25zZUluaXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXNwb25zZUluaXQgPSB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlSW5pdFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3BvbnNlSW5pdC5zdGF0dXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZUluaXQuc3RhdHVzID0gMzAyO1xuICB9XG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuICBoZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIHVybCk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgX2V4dGVuZHMoe30sIHJlc3BvbnNlSW5pdCwge1xuICAgIGhlYWRlcnNcbiAgfSkpO1xufTtcbi8qKlxuICogQSByZWRpcmVjdCByZXNwb25zZSB0aGF0IHdpbGwgZm9yY2UgYSBkb2N1bWVudCByZWxvYWQgdG8gdGhlIG5ldyBsb2NhdGlvbi5cbiAqIFNldHMgdGhlIHN0YXR1cyBjb2RlIGFuZCB0aGUgYExvY2F0aW9uYCBoZWFkZXIuXG4gKiBEZWZhdWx0cyB0byBcIjMwMiBGb3VuZFwiLlxuICovXG5jb25zdCByZWRpcmVjdERvY3VtZW50ID0gKHVybCwgaW5pdCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSByZWRpcmVjdCh1cmwsIGluaXQpO1xuICByZXNwb25zZS5oZWFkZXJzLnNldChcIlgtUmVtaXgtUmVsb2FkLURvY3VtZW50XCIsIFwidHJ1ZVwiKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbi8qKlxuICogQHByaXZhdGVcbiAqIFV0aWxpdHkgY2xhc3Mgd2UgdXNlIHRvIGhvbGQgYXV0by11bndyYXBwZWQgNHh4LzV4eCBSZXNwb25zZSBib2RpZXNcbiAqL1xuY2xhc3MgRXJyb3JSZXNwb25zZUltcGwge1xuICBjb25zdHJ1Y3RvcihzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGludGVybmFsKSB7XG4gICAgaWYgKGludGVybmFsID09PSB2b2lkIDApIHtcbiAgICAgIGludGVybmFsID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgfHwgXCJcIjtcbiAgICB0aGlzLmludGVybmFsID0gaW50ZXJuYWw7XG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgdGhpcy5lcnJvciA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlcnJvciBpcyBhbiBFcnJvclJlc3BvbnNlIGdlbmVyYXRlZCBmcm9tIGEgNHh4LzV4eFxuICogUmVzcG9uc2UgdGhyb3duIGZyb20gYW4gYWN0aW9uL2xvYWRlclxuICovXG5mdW5jdGlvbiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikge1xuICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBlcnJvci5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBlcnJvci5pbnRlcm5hbCA9PT0gXCJib29sZWFuXCIgJiYgXCJkYXRhXCIgaW4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzQXJyID0gW1wicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiZGVsZXRlXCJdO1xuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkTXV0YXRpb25NZXRob2RzQXJyKTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIgPSBbXCJnZXRcIiwgLi4udmFsaWRNdXRhdGlvbk1ldGhvZHNBcnJdO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kcyA9IG5ldyBTZXQodmFsaWRSZXF1ZXN0TWV0aG9kc0Fycik7XG5jb25zdCByZWRpcmVjdFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdKTtcbmNvbnN0IHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwNywgMzA4XSk7XG5jb25zdCBJRExFX05BVklHQVRJT04gPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgbG9jYXRpb246IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gIGpzb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9GRVRDSEVSID0ge1xuICBzdGF0ZTogXCJpZGxlXCIsXG4gIGRhdGE6IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gIGpzb246IHVuZGVmaW5lZCxcbiAgdGV4dDogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9CTE9DS0VSID0ge1xuICBzdGF0ZTogXCJ1bmJsb2NrZWRcIixcbiAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICByZXNldDogdW5kZWZpbmVkLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkXG59O1xuY29uc3QgQUJTT0xVVEVfVVJMX1JFR0VYID0gL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pO1xuY29uc3QgZGVmYXVsdE1hcFJvdXRlUHJvcGVydGllcyA9IHJvdXRlID0+ICh7XG4gIGhhc0Vycm9yQm91bmRhcnk6IEJvb2xlYW4ocm91dGUuaGFzRXJyb3JCb3VuZGFyeSlcbn0pO1xuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVJvdXRlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICogQ3JlYXRlIGEgcm91dGVyIGFuZCBsaXN0ZW4gdG8gaGlzdG9yeSBQT1AgbmF2aWdhdGlvbnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVyKGluaXQpIHtcbiAgY29uc3Qgcm91dGVyV2luZG93ID0gaW5pdC53aW5kb3cgPyBpbml0LndpbmRvdyA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiByb3V0ZXJXaW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHJvdXRlcldpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygcm91dGVyV2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG4gIGNvbnN0IGlzU2VydmVyID0gIWlzQnJvd3NlcjtcbiAgaW52YXJpYW50KGluaXQucm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlUm91dGVyXCIpO1xuICBsZXQgbWFwUm91dGVQcm9wZXJ0aWVzO1xuICBpZiAoaW5pdC5tYXBSb3V0ZVByb3BlcnRpZXMpIHtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSBpbml0Lm1hcFJvdXRlUHJvcGVydGllcztcbiAgfSBlbHNlIGlmIChpbml0LmRldGVjdEVycm9yQm91bmRhcnkpIHtcbiAgICAvLyBJZiB0aGV5IGFyZSBzdGlsbCB1c2luZyB0aGUgZGVwcmVjYXRlZCB2ZXJzaW9uLCB3cmFwIGl0IHdpdGggdGhlIG5ldyBBUElcbiAgICBsZXQgZGV0ZWN0RXJyb3JCb3VuZGFyeSA9IGluaXQuZGV0ZWN0RXJyb3JCb3VuZGFyeTtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSByb3V0ZSA9PiAoe1xuICAgICAgaGFzRXJyb3JCb3VuZGFyeTogZGV0ZWN0RXJyb3JCb3VuZGFyeShyb3V0ZSlcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXMgPSBkZWZhdWx0TWFwUm91dGVQcm9wZXJ0aWVzO1xuICB9XG4gIC8vIFJvdXRlcyBrZXllZCBieSBJRFxuICBsZXQgbWFuaWZlc3QgPSB7fTtcbiAgLy8gUm91dGVzIGluIHRyZWUgZm9ybWF0IGZvciBtYXRjaGluZ1xuICBsZXQgZGF0YVJvdXRlcyA9IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMoaW5pdC5yb3V0ZXMsIG1hcFJvdXRlUHJvcGVydGllcywgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIGxldCBpbkZsaWdodERhdGFSb3V0ZXM7XG4gIGxldCBiYXNlbmFtZSA9IGluaXQuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIC8vIENvbmZpZyBkcml2ZW4gYmVoYXZpb3IgZmxhZ3NcbiAgbGV0IGZ1dHVyZSA9IF9leHRlbmRzKHtcbiAgICB2N19ub3JtYWxpemVGb3JtTWV0aG9kOiBmYWxzZSxcbiAgICB2N19wcmVwZW5kQmFzZW5hbWU6IGZhbHNlXG4gIH0sIGluaXQuZnV0dXJlKTtcbiAgLy8gQ2xlYW51cCBmdW5jdGlvbiBmb3IgaGlzdG9yeVxuICBsZXQgdW5saXN0ZW5IaXN0b3J5ID0gbnVsbDtcbiAgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbnMgdG8gY2FsbCBvbiBhbGwgc3RhdGUgY2hhbmdlc1xuICBsZXQgc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gIC8vIEV4dGVybmFsbHktcHJvdmlkZWQgb2JqZWN0IHRvIGhvbGQgc2Nyb2xsIHJlc3RvcmF0aW9uIGxvY2F0aW9ucyBkdXJpbmcgcm91dGluZ1xuICBsZXQgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBudWxsO1xuICAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcmVzdG9yYXRpb24ga2V5c1xuICBsZXQgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsO1xuICAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICBsZXQgZ2V0U2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAvLyBPbmUtdGltZSBmbGFnIHRvIGNvbnRyb2wgdGhlIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbi4gIEJlY2F1c2VcbiAgLy8gd2UgZG9uJ3QgZ2V0IHRoZSBzYXZlZCBwb3NpdGlvbnMgZnJvbSA8U2Nyb2xsUmVzdG9yYXRpb24gLz4gdW50aWwgX2FmdGVyX1xuICAvLyB0aGUgaW5pdGlhbCByZW5kZXIsIHdlIG5lZWQgdG8gbWFudWFsbHkgdHJpZ2dlciBhIHNlcGFyYXRlIHVwZGF0ZVN0YXRlIHRvXG4gIC8vIHNlbmQgYWxvbmcgdGhlIHJlc3RvcmVTY3JvbGxQb3NpdGlvblxuICAvLyBTZXQgdG8gdHJ1ZSBpZiB3ZSBoYXZlIGBoeWRyYXRpb25EYXRhYCBzaW5jZSB3ZSBhc3N1bWUgd2Ugd2VyZSBTU1InZCBhbmQgdGhhdFxuICAvLyBTU1IgZGlkIHRoZSBpbml0aWFsIHNjcm9sbCByZXN0b3JhdGlvbi5cbiAgbGV0IGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsO1xuICBsZXQgaW5pdGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBpbml0Lmhpc3RvcnkubG9jYXRpb24sIGJhc2VuYW1lKTtcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSBudWxsO1xuICBpZiAoaW5pdGlhbE1hdGNoZXMgPT0gbnVsbCkge1xuICAgIC8vIElmIHdlIGRvIG5vdCBtYXRjaCBhIHVzZXItcHJvdmlkZWQtcm91dGUsIGZhbGwgYmFjayB0byB0aGUgcm9vdFxuICAgIC8vIHRvIGFsbG93IHRoZSBlcnJvciBib3VuZGFyeSB0byB0YWtlIG92ZXJcbiAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgcGF0aG5hbWU6IGluaXQuaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgcm91dGVcbiAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTtcbiAgICBpbml0aWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgaW5pdGlhbEVycm9ycyA9IHtcbiAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgfTtcbiAgfVxuICBsZXQgaW5pdGlhbGl6ZWQgPVxuICAvLyBBbGwgaW5pdGlhbE1hdGNoZXMgbmVlZCB0byBiZSBsb2FkZWQgYmVmb3JlIHdlJ3JlIHJlYWR5LiAgSWYgd2UgaGF2ZSBsYXp5XG4gIC8vIGZ1bmN0aW9ucyBhcm91bmQgc3RpbGwgdGhlbiB3ZSdsbCBuZWVkIHRvIHJ1biB0aGVtIGluIGluaXRpYWxpemUoKVxuICAhaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubGF6eSkgJiYgKFxuICAvLyBBbmQgd2UgaGF2ZSB0byBlaXRoZXIgaGF2ZSBubyBsb2FkZXJzIG9yIGhhdmUgYmVlbiBwcm92aWRlZCBoeWRyYXRpb25EYXRhXG4gICFpbml0aWFsTWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5sb2FkZXIpIHx8IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsKTtcbiAgbGV0IHJvdXRlcjtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGhpc3RvcnlBY3Rpb246IGluaXQuaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGluaXQuaGlzdG9yeS5sb2NhdGlvbixcbiAgICBtYXRjaGVzOiBpbml0aWFsTWF0Y2hlcyxcbiAgICBpbml0aWFsaXplZCxcbiAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgLy8gRG9uJ3QgcmVzdG9yZSBvbiBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgaWYgd2Ugd2VyZSBTU1InZFxuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGwgPyBmYWxzZSA6IG51bGwsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0OiBmYWxzZSxcbiAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgIGxvYWRlckRhdGE6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEubG9hZGVyRGF0YSB8fCB7fSxcbiAgICBhY3Rpb25EYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmFjdGlvbkRhdGEgfHwgbnVsbCxcbiAgICBlcnJvcnM6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEuZXJyb3JzIHx8IGluaXRpYWxFcnJvcnMsXG4gICAgZmV0Y2hlcnM6IG5ldyBNYXAoKSxcbiAgICBibG9ja2VyczogbmV3IE1hcCgpXG4gIH07XG4gIC8vIC0tIFN0YXRlZnVsIGludGVybmFsIHZhcmlhYmxlcyB0byBtYW5hZ2UgbmF2aWdhdGlvbnMgLS1cbiAgLy8gQ3VycmVudCBuYXZpZ2F0aW9uIGluIHByb2dyZXNzICh0byBiZSBjb21taXR0ZWQgaW4gY29tcGxldGVOYXZpZ2F0aW9uKVxuICBsZXQgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIC8vIFNob3VsZCB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHByZXZlbnQgdGhlIHNjcm9sbCByZXNldCBpZiBzY3JvbGwgY2Fubm90XG4gIC8vIGJlIHJlc3RvcmVkP1xuICBsZXQgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlO1xuICAvLyBBYm9ydENvbnRyb2xsZXIgZm9yIHRoZSBhY3RpdmUgbmF2aWdhdGlvblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyO1xuICAvLyBXZSB1c2UgdGhpcyB0byBhdm9pZCB0b3VjaGluZyBoaXN0b3J5IGluIGNvbXBsZXRlTmF2aWdhdGlvbiBpZiBhXG4gIC8vIHJldmFsaWRhdGlvbiBpcyBlbnRpcmVseSB1bmludGVycnVwdGVkXG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgLy8gVXNlIHRoaXMgaW50ZXJuYWwgZmxhZyB0byBmb3JjZSByZXZhbGlkYXRpb24gb2YgYWxsIGxvYWRlcnM6XG4gIC8vICAtIHN1Ym1pc3Npb25zIChjb21wbGV0ZWQgb3IgaW50ZXJydXB0ZWQpXG4gIC8vICAtIHVzZVJldmFsaWRhdG9yKClcbiAgLy8gIC0gWC1SZW1peC1SZXZhbGlkYXRlIChmcm9tIHJlZGlyZWN0KVxuICBsZXQgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIHJvdXRlcyB0aGF0IHJlcXVpcmUgcmV2YWxpZGF0aW9uIGR1ZVxuICAvLyB0byBhIGNhbmNlbGxlZCBkZWZlcnJlZCBvbiBhY3Rpb24gc3VibWlzc2lvblxuICBsZXQgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSBmZXRjaGVyIGxvYWRzIHRoYXQgd2VyZSBjYW5jZWxsZWQgYnkgYW5cbiAgLy8gYWN0aW9uIG5hdmlnYXRpb24gYW5kIHJlcXVpcmUgcmV2YWxpZGF0aW9uXG4gIGxldCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBbXTtcbiAgLy8gQWJvcnRDb250cm9sbGVycyBmb3IgYW55IGluLWZsaWdodCBmZXRjaGVyc1xuICBsZXQgZmV0Y2hDb250cm9sbGVycyA9IG5ldyBNYXAoKTtcbiAgLy8gVHJhY2sgbG9hZHMgYmFzZWQgb24gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgc3RhcnRlZFxuICBsZXQgaW5jcmVtZW50aW5nTG9hZElkID0gMDtcbiAgLy8gVHJhY2sgdGhlIG91dHN0YW5kaW5nIHBlbmRpbmcgbmF2aWdhdGlvbiBkYXRhIGxvYWQgdG8gYmUgY29tcGFyZWQgYWdhaW5zdFxuICAvLyB0aGUgZ2xvYmFsbHkgaW5jcmVtZW50aW5nIGxvYWQgd2hlbiBhIGZldGNoZXIgbG9hZCBsYW5kcyBhZnRlciBhIGNvbXBsZXRlZFxuICAvLyBuYXZpZ2F0aW9uXG4gIGxldCBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9IC0xO1xuICAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCBkYXRhIHJlbG9hZHMgYXMgYSByZXN1bHQgb2YgdGhlaXIgYWN0aW9uc1xuICBsZXQgZmV0Y2hSZWxvYWRJZHMgPSBuZXcgTWFwKCk7XG4gIC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIHJlZGlyZWN0IG5hdmlnYXRpb25zXG4gIGxldCBmZXRjaFJlZGlyZWN0SWRzID0gbmV3IFNldCgpO1xuICAvLyBNb3N0IHJlY2VudCBocmVmL21hdGNoIGZvciBmZXRjaGVyLmxvYWQgY2FsbHMgZm9yIGZldGNoZXJzXG4gIGxldCBmZXRjaExvYWRNYXRjaGVzID0gbmV3IE1hcCgpO1xuICAvLyBTdG9yZSBEZWZlcnJlZERhdGEgaW5zdGFuY2VzIGZvciBhY3RpdmUgcm91dGUgbWF0Y2hlcy4gIFdoZW4gYVxuICAvLyByb3V0ZSBsb2FkZXIgcmV0dXJucyBkZWZlcigpIHdlIHN0aWNrIG9uZSBpbiBoZXJlLiAgVGhlbiwgd2hlbiBhIG5lc3RlZFxuICAvLyBwcm9taXNlIHJlc29sdmVzIHdlIHVwZGF0ZSBsb2FkZXJEYXRhLiAgSWYgYSBuZXcgbmF2aWdhdGlvbiBzdGFydHMgd2VcbiAgLy8gY2FuY2VsIGFjdGl2ZSBkZWZlcnJlZHMgZm9yIGVsaW1pbmF0ZWQgcm91dGVzLlxuICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpO1xuICAvLyBTdG9yZSBibG9ja2VyIGZ1bmN0aW9ucyBpbiBhIHNlcGFyYXRlIE1hcCBvdXRzaWRlIG9mIHJvdXRlciBzdGF0ZSBzaW5jZVxuICAvLyB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSBVSSBzdGF0ZSBpZiB0aGV5IGNoYW5nZVxuICBsZXQgYmxvY2tlckZ1bmN0aW9ucyA9IG5ldyBNYXAoKTtcbiAgLy8gRmxhZyB0byBpZ25vcmUgdGhlIG5leHQgaGlzdG9yeSB1cGRhdGUsIHNvIHdlIGNhbiByZXZlcnQgdGhlIFVSTCBjaGFuZ2Ugb25cbiAgLy8gYSBQT1AgbmF2aWdhdGlvbiB0aGF0IHdhcyBibG9ja2VkIGJ5IHRoZSB1c2VyIHdpdGhvdXQgdG91Y2hpbmcgcm91dGVyIHN0YXRlXG4gIGxldCBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBJbml0aWFsaXplIHRoZSByb3V0ZXIsIGFsbCBzaWRlIGVmZmVjdHMgc2hvdWxkIGJlIGtpY2tlZCBvZmYgZnJvbSBoZXJlLlxuICAvLyBJbXBsZW1lbnRlZCBhcyBhIEZsdWVudCBBUEkgZm9yIGVhc2Ugb2Y6XG4gIC8vICAgbGV0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcihpbml0KS5pbml0aWFsaXplKCk7XG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgLy8gSWYgaGlzdG9yeSBpbmZvcm1zIHVzIG9mIGEgUE9QIG5hdmlnYXRpb24sIHN0YXJ0IHRoZSBuYXZpZ2F0aW9uIGJ1dCBkbyBub3QgdXBkYXRlXG4gICAgLy8gc3RhdGUuICBXZSdsbCB1cGRhdGUgb3VyIG93biBzdGF0ZSBvbmNlIHRoZSBuYXZpZ2F0aW9uIGNvbXBsZXRlc1xuICAgIHVubGlzdGVuSGlzdG9yeSA9IGluaXQuaGlzdG9yeS5saXN0ZW4oX3JlZiA9PiB7XG4gICAgICBsZXQge1xuICAgICAgICBhY3Rpb246IGhpc3RvcnlBY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBkZWx0YVxuICAgICAgfSA9IF9yZWY7XG4gICAgICAvLyBJZ25vcmUgdGhpcyBldmVudCBpZiBpdCB3YXMganVzdCB1cyByZXNldHRpbmcgdGhlIFVSTCBmcm9tIGFcbiAgICAgIC8vIGJsb2NrZWQgUE9QIG5hdmlnYXRpb25cbiAgICAgIGlmIChpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSkge1xuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB3YXJuaW5nKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLCBcIllvdSBhcmUgdHJ5aW5nIHRvIHVzZSBhIGJsb2NrZXIgb24gYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIFwiICsgXCJ0aGF0IHdhcyBub3QgY3JlYXRlZCBieSBAcmVtaXgtcnVuL3JvdXRlci4gVGhpcyB3aWxsIGZhaWwgc2lsZW50bHkgaW4gXCIgKyBcInByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIFwiICsgXCJ2aWEgYHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWAvYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCBpbnN0ZWFkIG9mIHVzaW5nIFwiICsgXCJyb3V0ZXIgbmF2aWdhdGlvbiBBUElzLiAgVGhpcyBjYW4gYWxzbyBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBcIiArIFwiY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiKTtcbiAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoYmxvY2tlcktleSAmJiBkZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIFVSTCB0byBtYXRjaCB0aGUgY3VycmVudCBVSSwgYnV0IGRvbid0IHVwZGF0ZSByb3V0ZXIgc3RhdGVcbiAgICAgICAgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSB0cnVlO1xuICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEgKiAtMSk7XG4gICAgICAgIC8vIFB1dCB0aGUgYmxvY2tlciBpbnRvIGEgYmxvY2tlZCBzdGF0ZVxuICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUmUtZG8gdGhlIHNhbWUgUE9QIG5hdmlnYXRpb24gd2UganVzdCBibG9ja2VkXG4gICAgICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICBsZXQgYmxvY2tlcnMgPSBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKTtcbiAgICAgICAgICAgIGJsb2NrZXJzLnNldChibG9ja2VyS2V5LCBJRExFX0JMT0NLRVIpO1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBibG9ja2Vyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbik7XG4gICAgfSk7XG4gICAgLy8gS2ljayBvZmYgaW5pdGlhbCBkYXRhIGxvYWQgaWYgbmVlZGVkLiAgVXNlIFBvcCB0byBhdm9pZCBtb2RpZnlpbmcgaGlzdG9yeVxuICAgIC8vIE5vdGUgd2UgZG9uJ3QgZG8gYW55IGhhbmRsaW5nIG9mIGxhenkgaGVyZS4gIEZvciBTUEEncyBpdCdsbCBnZXQgaGFuZGxlZFxuICAgIC8vIGluIHRoZSBub3JtYWwgbmF2aWdhdGlvbiBmbG93LiAgRm9yIFNTUiBpdCdzIGV4cGVjdGVkIHRoYXQgbGF6eSBtb2R1bGVzIGFyZVxuICAgIC8vIHJlc29sdmVkIHByaW9yIHRvIHJvdXRlciBjcmVhdGlvbiBzaW5jZSB3ZSBjYW4ndCBnbyBpbnRvIGEgZmFsbGJhY2tFbGVtZW50XG4gICAgLy8gVUkgZm9yIFNTUidkIGFwcHNcbiAgICBpZiAoIXN0YXRlLmluaXRpYWxpemVkKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oQWN0aW9uLlBvcCwgc3RhdGUubG9jYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVyO1xuICB9XG4gIC8vIENsZWFuIHVwIGEgcm91dGVyIGFuZCBpdCdzIHNpZGUgZWZmZWN0c1xuICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIGlmICh1bmxpc3Rlbkhpc3RvcnkpIHtcbiAgICAgIHVubGlzdGVuSGlzdG9yeSgpO1xuICAgIH1cbiAgICBzdWJzY3JpYmVycy5jbGVhcigpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUZldGNoZXIoa2V5KSk7XG4gICAgc3RhdGUuYmxvY2tlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVCbG9ja2VyKGtleSkpO1xuICB9XG4gIC8vIFN1YnNjcmliZSB0byBzdGF0ZSB1cGRhdGVzIGZvciB0aGUgcm91dGVyXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShmbikge1xuICAgIHN1YnNjcmliZXJzLmFkZChmbik7XG4gICAgcmV0dXJuICgpID0+IHN1YnNjcmliZXJzLmRlbGV0ZShmbik7XG4gIH1cbiAgLy8gVXBkYXRlIG91ciBzdGF0ZSBhbmQgbm90aWZ5IHRoZSBjYWxsaW5nIGNvbnRleHQgb2YgdGhlIGNoYW5nZVxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoc3RhdGUpKTtcbiAgfVxuICAvLyBDb21wbGV0ZSBhIG5hdmlnYXRpb24gcmV0dXJuaW5nIHRoZSBzdGF0ZS5uYXZpZ2F0aW9uIGJhY2sgdG8gdGhlIElETEVfTkFWSUdBVElPTlxuICAvLyBhbmQgc2V0dGluZyBzdGF0ZS5baGlzdG9yeUFjdGlvbi9sb2NhdGlvbi9tYXRjaGVzXSB0byB0aGUgbmV3IHJvdXRlLlxuICAvLyAtIExvY2F0aW9uIGlzIGEgcmVxdWlyZWQgcGFyYW1cbiAgLy8gLSBOYXZpZ2F0aW9uIHdpbGwgYWx3YXlzIGJlIHNldCB0byBJRExFX05BVklHQVRJT05cbiAgLy8gLSBDYW4gcGFzcyBhbnkgb3RoZXIgc3RhdGUgaW4gbmV3U3RhdGVcbiAgZnVuY3Rpb24gY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZSkge1xuICAgIHZhciBfbG9jYXRpb24kc3RhdGUsIF9sb2NhdGlvbiRzdGF0ZTI7XG4gICAgLy8gRGVkdWNlIGlmIHdlJ3JlIGluIGEgbG9hZGluZy9hY3Rpb25SZWxvYWQgc3RhdGU6XG4gICAgLy8gLSBXZSBoYXZlIGNvbW1pdHRlZCBhY3Rpb25EYXRhIGluIHRoZSBzdG9yZVxuICAgIC8vIC0gVGhlIGN1cnJlbnQgbmF2aWdhdGlvbiB3YXMgYSBtdXRhdGlvbiBzdWJtaXNzaW9uXG4gICAgLy8gLSBXZSdyZSBwYXN0IHRoZSBzdWJtaXR0aW5nIHN0YXRlIGFuZCBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlXG4gICAgLy8gLSBUaGUgbG9jYXRpb24gYmVpbmcgbG9hZGVkIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGEgcmVkaXJlY3RcbiAgICBsZXQgaXNBY3Rpb25SZWxvYWQgPSBzdGF0ZS5hY3Rpb25EYXRhICE9IG51bGwgJiYgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmIHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmICgoX2xvY2F0aW9uJHN0YXRlID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIGxldCBhY3Rpb25EYXRhO1xuICAgIGlmIChuZXdTdGF0ZS5hY3Rpb25EYXRhKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMobmV3U3RhdGUuYWN0aW9uRGF0YSkubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3Rpb25EYXRhID0gbmV3U3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEVtcHR5IGFjdGlvbkRhdGEgLT4gY2xlYXIgcHJpb3IgYWN0aW9uRGF0YSBkdWUgdG8gYW4gYWN0aW9uIGVycm9yXG4gICAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBY3Rpb25SZWxvYWQpIHtcbiAgICAgIC8vIEtlZXAgdGhlIGN1cnJlbnQgZGF0YSBpZiB3ZSdyZSB3cmFwcGluZyB1cCB0aGUgYWN0aW9uIHJlbG9hZFxuICAgICAgYWN0aW9uRGF0YSA9IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENsZWFyIGFjdGlvbkRhdGEgb24gYW55IG90aGVyIGNvbXBsZXRlZCBuYXZpZ2F0aW9uc1xuICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgfVxuICAgIC8vIEFsd2F5cyBwcmVzZXJ2ZSBhbnkgZXhpc3RpbmcgbG9hZGVyRGF0YSBmcm9tIHJlLXVzZWQgcm91dGVzXG4gICAgbGV0IGxvYWRlckRhdGEgPSBuZXdTdGF0ZS5sb2FkZXJEYXRhID8gbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLm1hdGNoZXMgfHwgW10sIG5ld1N0YXRlLmVycm9ycykgOiBzdGF0ZS5sb2FkZXJEYXRhO1xuICAgIC8vIE9uIGEgc3VjY2Vzc2Z1bCBuYXZpZ2F0aW9uIHdlIGNhbiBhc3N1bWUgd2UgZ290IHRocm91Z2ggYWxsIGJsb2NrZXJzXG4gICAgLy8gc28gd2UgY2FuIHN0YXJ0IGZyZXNoXG4gICAgbGV0IGJsb2NrZXJzID0gc3RhdGUuYmxvY2tlcnM7XG4gICAgaWYgKGJsb2NrZXJzLnNpemUgPiAwKSB7XG4gICAgICBibG9ja2VycyA9IG5ldyBNYXAoYmxvY2tlcnMpO1xuICAgICAgYmxvY2tlcnMuZm9yRWFjaCgoXywgaykgPT4gYmxvY2tlcnMuc2V0KGssIElETEVfQkxPQ0tFUikpO1xuICAgIH1cbiAgICAvLyBBbHdheXMgcmVzcGVjdCB0aGUgdXNlciBmbGFnLiAgT3RoZXJ3aXNlIGRvbid0IHJlc2V0IG9uIG11dGF0aW9uXG4gICAgLy8gc3VibWlzc2lvbiBuYXZpZ2F0aW9ucyB1bmxlc3MgdGhleSByZWRpcmVjdFxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIHx8IHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiAoKF9sb2NhdGlvbiRzdGF0ZTIgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZTIuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIGlmIChpbkZsaWdodERhdGFSb3V0ZXMpIHtcbiAgICAgIGRhdGFSb3V0ZXMgPSBpbkZsaWdodERhdGFSb3V0ZXM7XG4gICAgICBpbkZsaWdodERhdGFSb3V0ZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlBvcCkgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUHVzaCkge1xuICAgICAgaW5pdC5oaXN0b3J5LnB1c2gobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5SZXBsYWNlKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH1cbiAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7fSwgbmV3U3RhdGUsIHtcbiAgICAgIGFjdGlvbkRhdGEsXG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgaGlzdG9yeUFjdGlvbjogcGVuZGluZ0FjdGlvbixcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uOiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZS5tYXRjaGVzIHx8IHN0YXRlLm1hdGNoZXMpLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgYmxvY2tlcnNcbiAgICB9KSk7XG4gICAgLy8gUmVzZXQgc3RhdGVmdWwgbmF2aWdhdGlvbiB2YXJzXG4gICAgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IGZhbHNlO1xuICAgIGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IGZhbHNlO1xuICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcbiAgICBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcyA9IFtdO1xuICAgIGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IFtdO1xuICB9XG4gIC8vIFRyaWdnZXIgYSBuYXZpZ2F0aW9uIGV2ZW50LCB3aGljaCBjYW4gZWl0aGVyIGJlIGEgbnVtZXJpY2FsIFBPUCBvciBhIFBVU0hcbiAgLy8gcmVwbGFjZSB3aXRoIGFuIG9wdGlvbmFsIHN1Ym1pc3Npb25cbiAgYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGUodG8sIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpbml0Lmhpc3RvcnkuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbm9ybWFsaXplZFBhdGggPSBub3JtYWxpemVUbyhzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcywgYmFzZW5hbWUsIGZ1dHVyZS52N19wcmVwZW5kQmFzZW5hbWUsIHRvLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZyb21Sb3V0ZUlkLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnJlbGF0aXZlKTtcbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICBlcnJvclxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoZnV0dXJlLnY3X25vcm1hbGl6ZUZvcm1NZXRob2QsIGZhbHNlLCBub3JtYWxpemVkUGF0aCwgb3B0cyk7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcGF0aCwgb3B0cyAmJiBvcHRzLnN0YXRlKTtcbiAgICAvLyBXaGVuIHVzaW5nIG5hdmlnYXRlIGFzIGEgUFVTSC9SRVBMQUNFIHdlIGFyZW4ndCByZWFkaW5nIGFuIGFscmVhZHktZW5jb2RlZFxuICAgIC8vIFVSTCBmcm9tIHdpbmRvdy5sb2NhdGlvbiwgc28gd2UgbmVlZCB0byBlbmNvZGUgaXQgaGVyZSBzbyB0aGUgYmVoYXZpb3JcbiAgICAvLyByZW1haW5zIHRoZSBzYW1lIGFzIFBPUCBhbmQgbm9uLWRhdGEtcm91dGVyIHVzYWdlcy4gIG5ldyBVUkwoKSBkb2VzIGFsbFxuICAgIC8vIHRoZSBzYW1lIGVuY29kaW5nIHdlJ2QgZ2V0IGZyb20gYSBoaXN0b3J5LnB1c2hTdGF0ZS93aW5kb3cubG9jYXRpb24gcmVhZFxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHRvdWNoIGhpc3RvcnlcbiAgICBuZXh0TG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbmV4dExvY2F0aW9uLCBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24obmV4dExvY2F0aW9uKSk7XG4gICAgbGV0IHVzZXJSZXBsYWNlID0gb3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCA/IG9wdHMucmVwbGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgIGlmICh1c2VyUmVwbGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH0gZWxzZSBpZiAodXNlclJlcGxhY2UgPT09IGZhbHNlKSA7IGVsc2UgaWYgKHN1Ym1pc3Npb24gIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkgJiYgc3VibWlzc2lvbi5mb3JtQWN0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaCkge1xuICAgICAgLy8gQnkgZGVmYXVsdCBvbiBzdWJtaXNzaW9ucyB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3ZSBSRVBMQUNFIHNvIHRoYXRcbiAgICAgIC8vIHVzZXJzIGRvbid0IGhhdmUgdG8gZG91YmxlLWNsaWNrIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgdG8gdGhlIHByaW9yXG4gICAgICAvLyBsb2NhdGlvbi4gIElmIHRoZSB1c2VyIHJlZGlyZWN0cyB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBmcm9tIHRoZVxuICAgICAgLy8gYWN0aW9uL2xvYWRlciB0aGlzIHdpbGwgYmUgaWdub3JlZCBhbmQgdGhlIHJlZGlyZWN0IHdpbGwgYmUgYSBQVVNIXG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfVxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBvcHRzICYmIFwicHJldmVudFNjcm9sbFJlc2V0XCIgaW4gb3B0cyA/IG9wdHMucHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIDogdW5kZWZpbmVkO1xuICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KTtcbiAgICBpZiAoYmxvY2tlcktleSkge1xuICAgICAgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG4gICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuICAgICAgICBwcm9jZWVkKCkge1xuICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgc3RhdGU6IFwicHJvY2VlZGluZ1wiLFxuICAgICAgICAgICAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBTZW5kIHRoZSBzYW1lIG5hdmlnYXRpb24gdGhyb3VnaFxuICAgICAgICAgIG5hdmlnYXRlKHRvLCBvcHRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgbGV0IGJsb2NrZXJzID0gbmV3IE1hcChzdGF0ZS5ibG9ja2Vycyk7XG4gICAgICAgICAgYmxvY2tlcnMuc2V0KGJsb2NrZXJLZXksIElETEVfQkxPQ0tFUik7XG4gICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgYmxvY2tlcnNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbmV4dExvY2F0aW9uLCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgLy8gU2VuZCB0aHJvdWdoIHRoZSBmb3JtRGF0YSBzZXJpYWxpemF0aW9uIGVycm9yIGlmIHdlIGhhdmUgb25lIHNvIHdlIGNhblxuICAgICAgLy8gcmVuZGVyIGF0IHRoZSByaWdodCBlcnJvciBib3VuZGFyeSBhZnRlciB3ZSBtYXRjaCByb3V0ZXNcbiAgICAgIHBlbmRpbmdFcnJvcjogZXJyb3IsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICByZXBsYWNlOiBvcHRzICYmIG9wdHMucmVwbGFjZVxuICAgIH0pO1xuICB9XG4gIC8vIFJldmFsaWRhdGUgYWxsIGN1cnJlbnQgbG9hZGVycy4gIElmIGEgbmF2aWdhdGlvbiBpcyBpbiBwcm9ncmVzcyBvciBpZiB0aGlzXG4gIC8vIGlzIGludGVycnVwdGVkIGJ5IGEgbmF2aWdhdGlvbiwgYWxsb3cgdGhpcyB0byBcInN1Y2NlZWRcIiBieSBjYWxsaW5nIGFsbFxuICAvLyBsb2FkZXJzIGR1cmluZyB0aGUgbmV4dCBsb2FkZXIgcm91bmRcbiAgZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIHJldmFsaWRhdGlvbjogXCJsb2FkaW5nXCJcbiAgICB9KTtcbiAgICAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgc3VibWl0dGluZyBhbiBhY3Rpb24sIHdlIGRvbid0IG5lZWQgdG8gc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uLCB3ZSdsbCBqdXN0IGxldCB0aGUgZm9sbG93IHVwIGxvYWRlciBleGVjdXRpb24gY2FsbCBhbGwgbG9hZGVyc1xuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgaW4gYW4gaWRsZSBzdGF0ZSwgc3RhcnQgYSBuZXcgbmF2aWdhdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBhY3Rpb24vbG9jYXRpb24gYW5kIG1hcmsgaXQgYXMgdW5pbnRlcnJ1cHRlZCwgd2hpY2ggd2lsbCBza2lwIHRoZSBoaXN0b3J5XG4gICAgLy8gdXBkYXRlIGluIGNvbXBsZXRlTmF2aWdhdGlvblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLmxvY2F0aW9uLCB7XG4gICAgICAgIHN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE90aGVyd2lzZSwgaWYgd2UncmUgY3VycmVudGx5IGluIGEgbG9hZGluZyBzdGF0ZSwganVzdCBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24gdG8gdGhlIG5hdmlnYXRpb24ubG9jYXRpb24gYnV0IGRvIG5vdCB0cmlnZ2VyIGFuIHVuaW50ZXJydXB0ZWRcbiAgICAvLyByZXZhbGlkYXRpb24gc28gdGhhdCBoaXN0b3J5IGNvcnJlY3RseSB1cGRhdGVzIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgc3RhcnROYXZpZ2F0aW9uKHBlbmRpbmdBY3Rpb24gfHwgc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uXG4gICAgfSk7XG4gIH1cbiAgLy8gU3RhcnQgYSBuYXZpZ2F0aW9uIHRvIHRoZSBnaXZlbiBhY3Rpb24vbG9jYXRpb24uICBDYW4gb3B0aW9uYWxseSBwcm92aWRlIGFcbiAgLy8gb3ZlcnJpZGVOYXZpZ2F0aW9uIHdoaWNoIHdpbGwgb3ZlcnJpZGUgdGhlIG5vcm1hbExvYWQgaW4gdGhlIGNhc2Ugb2YgYSByZWRpcmVjdFxuICAvLyBuYXZpZ2F0aW9uXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbiwgb3B0cykge1xuICAgIC8vIEFib3J0IGFueSBpbi1wcm9ncmVzcyBuYXZpZ2F0aW9ucyBhbmQgc3RhcnQgYSBuZXcgb25lLiBVbnNldCBhbnkgb25nb2luZ1xuICAgIC8vIHVuaW50ZXJydXB0ZWQgcmV2YWxpZGF0aW9ucyB1bmxlc3MgdG9sZCBvdGhlcndpc2UsIHNpbmNlIHdlIHdhbnQgdGhpc1xuICAgIC8vIG5ldyBuYXZpZ2F0aW9uIHRvIHVwZGF0ZSBoaXN0b3J5IG5vcm1hbGx5XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgcGVuZGluZ0FjdGlvbiA9IGhpc3RvcnlBY3Rpb247XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gKG9wdHMgJiYgb3B0cy5zdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pID09PSB0cnVlO1xuICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGV2ZXJ5IHRpbWUgd2Ugc3RhcnQgYSBuZXcgbmF2aWdhdGlvbixcbiAgICAvLyBhbmQgdHJhY2sgd2hldGhlciB3ZSBzaG91bGQgcmVzZXQgc2Nyb2xsIG9uIGNvbXBsZXRpb25cbiAgICBzYXZlU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3B0cyAmJiBvcHRzLm92ZXJyaWRlTmF2aWdhdGlvbjtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBsb2NhdGlvbiwgYmFzZW5hbWUpO1xuICAgIC8vIFNob3J0IGNpcmN1aXQgd2l0aCBhIDQwNCBvbiB0aGUgcm9vdCBlcnJvciBib3VuZGFyeSBpZiB3ZSBtYXRjaCBub3RoaW5nXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMocm91dGVzVG9Vc2UpO1xuICAgICAgLy8gQ2FuY2VsIGFsbCBwZW5kaW5nIGRlZmVycmVkIG9uIDQwNHMgc2luY2Ugd2UgZG9uJ3Qga2VlcCBhbnkgcm91dGVzXG4gICAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU2hvcnQgY2lyY3VpdCBpZiBpdCdzIG9ubHkgYSBoYXNoIGNoYW5nZSBhbmQgbm90IGEgcmV2YWxpZGF0aW9uIG9yXG4gICAgLy8gbXV0YXRpb24gc3VibWlzc2lvbi5cbiAgICAvL1xuICAgIC8vIElnbm9yZSBvbiBpbml0aWFsIHBhZ2UgbG9hZHMgYmVjYXVzZSBzaW5jZSB0aGUgaW5pdGlhbCBsb2FkIHdpbGwgYWx3YXlzXG4gICAgLy8gYmUgXCJzYW1lIGhhc2hcIi4gIEZvciBleGFtcGxlLCBvbiAvcGFnZSNoYXNoIGFuZCBzdWJtaXQgYSA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgLy8gd2hpY2ggd2lsbCBkZWZhdWx0IHRvIGEgbmF2aWdhdGlvbiB0byAvcGFnZVxuICAgIGlmIChzdGF0ZS5pbml0aWFsaXplZCAmJiAhaXNSZXZhbGlkYXRpb25SZXF1aXJlZCAmJiBpc0hhc2hDaGFuZ2VPbmx5KHN0YXRlLmxvY2F0aW9uLCBsb2NhdGlvbikgJiYgIShvcHRzICYmIG9wdHMuc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKG9wdHMuc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkpIHtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgY29udHJvbGxlci9SZXF1ZXN0IGZvciB0aGlzIG5hdmlnYXRpb25cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IHJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGxvY2F0aW9uLCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuc2lnbmFsLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbik7XG4gICAgbGV0IHBlbmRpbmdBY3Rpb25EYXRhO1xuICAgIGxldCBwZW5kaW5nRXJyb3I7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5wZW5kaW5nRXJyb3IpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nRXJyb3IsIGl0IG1lYW5zIHRoZSB1c2VyIGF0dGVtcHRlZCBhIEdFVCBzdWJtaXNzaW9uXG4gICAgICAvLyB3aXRoIGJpbmFyeSBGb3JtRGF0YSBzbyBhc3NpZ24gaGVyZSBhbmQgc2tpcCB0byBoYW5kbGVMb2FkZXJzLiAgVGhhdFxuICAgICAgLy8gd2F5IHdlIGhhbmRsZSBjYWxsaW5nIGxvYWRlcnMgYWJvdmUgdGhlIGJvdW5kYXJ5IGV0Yy4gIEl0J3Mgbm90IHJlYWxseVxuICAgICAgLy8gZGlmZmVyZW50IGZyb20gYW4gYWN0aW9uRXJyb3IgaW4gdGhhdCBzZW5zZS5cbiAgICAgIHBlbmRpbmdFcnJvciA9IHtcbiAgICAgICAgW2ZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcykucm91dGUuaWRdOiBvcHRzLnBlbmRpbmdFcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICAvLyBDYWxsIGFjdGlvbiBpZiB3ZSByZWNlaXZlZCBhbiBhY3Rpb24gc3VibWlzc2lvblxuICAgICAgbGV0IGFjdGlvbk91dHB1dCA9IGF3YWl0IGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uLCBtYXRjaGVzLCB7XG4gICAgICAgIHJlcGxhY2U6IG9wdHMucmVwbGFjZVxuICAgICAgfSk7XG4gICAgICBpZiAoYWN0aW9uT3V0cHV0LnNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25EYXRhO1xuICAgICAgcGVuZGluZ0Vycm9yID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25FcnJvcjtcbiAgICAgIGxvYWRpbmdOYXZpZ2F0aW9uID0gZ2V0TG9hZGluZ05hdmlnYXRpb24obG9jYXRpb24sIG9wdHMuc3VibWlzc2lvbik7XG4gICAgICAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ2FsbCBsb2FkZXJzXG4gICAgbGV0IHtcbiAgICAgIHNob3J0Q2lyY3VpdGVkLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBhd2FpdCBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBsb2FkaW5nTmF2aWdhdGlvbiwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24sIG9wdHMgJiYgb3B0cy5mZXRjaGVyU3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLnJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpO1xuICAgIGlmIChzaG9ydENpcmN1aXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBDbGVhbiB1cCBub3cgdGhhdCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBjb21wbGV0ZWQuICBEb24ndCBjbGVhbiB1cCBpZlxuICAgIC8vIHdlIHNob3J0IGNpcmN1aXRlZCBiZWNhdXNlIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciB3aWxsIGhhdmUgYWxyZWFkeVxuICAgIC8vIGJlZW4gYXNzaWduZWQgdG8gYSBuZXcgY29udHJvbGxlciBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBfZXh0ZW5kcyh7XG4gICAgICBtYXRjaGVzXG4gICAgfSwgcGVuZGluZ0FjdGlvbkRhdGEgPyB7XG4gICAgICBhY3Rpb25EYXRhOiBwZW5kaW5nQWN0aW9uRGF0YVxuICAgIH0gOiB7fSwge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0pKTtcbiAgfVxuICAvLyBDYWxsIHRoZSBhY3Rpb24gbWF0Y2hlZCBieSB0aGUgbGVhZiByb3V0ZSBmb3IgdGhpcyBuYXZpZ2F0aW9uIGFuZCBoYW5kbGVcbiAgLy8gcmVkaXJlY3RzL2Vycm9yc1xuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBY3Rpb24ocmVxdWVzdCwgbG9jYXRpb24sIHN1Ym1pc3Npb24sIG1hdGNoZXMsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRzID0ge307XG4gICAgfVxuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7XG4gICAgLy8gUHV0IHVzIGluIGEgc3VibWl0dGluZyBzdGF0ZVxuICAgIGxldCBuYXZpZ2F0aW9uID0gZ2V0U3VibWl0dGluZ05hdmlnYXRpb24obG9jYXRpb24sIHN1Ym1pc3Npb24pO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdmlnYXRpb25cbiAgICB9KTtcbiAgICAvLyBDYWxsIG91ciBhY3Rpb24gYW5kIGdldCB0aGUgcmVzdWx0XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24gJiYgIWFjdGlvbk1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCByZXF1ZXN0LCBhY3Rpb25NYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcywgYmFzZW5hbWUpO1xuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgcmVwbGFjZTtcbiAgICAgIGlmIChvcHRzICYmIG9wdHMucmVwbGFjZSAhPSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2UgPSBvcHRzLnJlcGxhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBkaWRuJ3QgZXhwbGljaXR5IGluZGljYXRlIHJlcGxhY2UgYmVoYXZpb3IsIHJlcGxhY2UgaWZcbiAgICAgICAgLy8gd2UgcmVkaXJlY3RlZCB0byB0aGUgZXhhY3Qgc2FtZSBsb2NhdGlvbiB3ZSdyZSBjdXJyZW50bHkgYXQgdG8gYXZvaWRcbiAgICAgICAgLy8gZG91YmxlIGJhY2stYnV0dG9uc1xuICAgICAgICByZXBsYWNlID0gcmVzdWx0LmxvY2F0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgLy8gQnkgZGVmYXVsdCwgYWxsIHN1Ym1pc3Npb25zIGFyZSBSRVBMQUNFIG5hdmlnYXRpb25zLCBidXQgaWYgdGhlXG4gICAgICAvLyBhY3Rpb24gdGhyZXcgYW4gZXJyb3IgdGhhdCdsbCBiZSByZW5kZXJlZCBpbiBhbiBlcnJvckVsZW1lbnQsIHdlIGZhbGxcbiAgICAgIC8vIGJhY2sgdG8gUFVTSCBzbyB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdGhlIGJhY2sgYnV0dG9uIHRvIGdldCBiYWNrIHRvXG4gICAgICAvLyB0aGUgcHJlLXN1Ym1pc3Npb24gZm9ybSBsb2NhdGlvbiB0byB0cnkgYWdhaW5cbiAgICAgIGlmICgob3B0cyAmJiBvcHRzLnJlcGxhY2UpICE9PSB0cnVlKSB7XG4gICAgICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFNlbmQgYmFjayBhbiBlbXB0eSBvYmplY3Qgd2UgY2FuIHVzZSB0byBjbGVhciBvdXQgYW55IHByaW9yIGFjdGlvbkRhdGFcbiAgICAgICAgcGVuZGluZ0FjdGlvbkRhdGE6IHt9LFxuICAgICAgICBwZW5kaW5nQWN0aW9uRXJyb3I6IHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICAvLyBDYWxsIGFsbCBhcHBsaWNhYmxlIGxvYWRlcnMgZm9yIHRoZSBnaXZlbiBtYXRjaGVzLCBoYW5kbGluZyByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgZXRjLlxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBvdmVycmlkZU5hdmlnYXRpb24sIHN1Ym1pc3Npb24sIGZldGNoZXJTdWJtaXNzaW9uLCByZXBsYWNlLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKSB7XG4gICAgLy8gRmlndXJlIG91dCB0aGUgcmlnaHQgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIHVzZSBmb3IgZGF0YSBsb2FkaW5nXG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3ZlcnJpZGVOYXZpZ2F0aW9uIHx8IGdldExvYWRpbmdOYXZpZ2F0aW9uKGxvY2F0aW9uLCBzdWJtaXNzaW9uKTtcbiAgICAvLyBJZiB0aGlzIHdhcyBhIHJlZGlyZWN0IGZyb20gYW4gYWN0aW9uIHdlIGRvbid0IGhhdmUgYSBcInN1Ym1pc3Npb25cIiBidXRcbiAgICAvLyB3ZSBoYXZlIGl0IG9uIHRoZSBsb2FkaW5nIG5hdmlnYXRpb24gc28gdXNlIHRoYXQgaWYgYXZhaWxhYmxlXG4gICAgbGV0IGFjdGl2ZVN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uIHx8IGZldGNoZXJTdWJtaXNzaW9uIHx8IGdldFN1Ym1pc3Npb25Gcm9tTmF2aWdhdGlvbihsb2FkaW5nTmF2aWdhdGlvbik7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIGFjdGl2ZVN1Ym1pc3Npb24sIGxvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBmZXRjaExvYWRNYXRjaGVzLCBmZXRjaFJlZGlyZWN0SWRzLCByb3V0ZXNUb1VzZSwgYmFzZW5hbWUsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpO1xuICAgIC8vIENhbmNlbCBwZW5kaW5nIGRlZmVycmVkcyBmb3Igbm8tbG9uZ2VyLW1hdGNoZWQgcm91dGVzIG9yIHJvdXRlcyB3ZSdyZVxuICAgIC8vIGFib3V0IHRvIHJlbG9hZC4gIE5vdGUgdGhhdCBpZiB0aGlzIGlzIGFuIGFjdGlvbiByZWxvYWQgd2Ugd291bGQgaGF2ZVxuICAgIC8vIGFscmVhZHkgY2FuY2VsbGVkIGFsbCBwZW5kaW5nIGRlZmVycmVkcyBzbyB0aGlzIHdvdWxkIGJlIGEgbm8tb3BcbiAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMocm91dGVJZCA9PiAhKG1hdGNoZXMgJiYgbWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkpIHx8IG1hdGNoZXNUb0xvYWQgJiYgbWF0Y2hlc1RvTG9hZC5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID0gKytpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuXG4gICAgaWYgKG1hdGNoZXNUb0xvYWQubGVuZ3RoID09PSAwICYmIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgbGV0IHVwZGF0ZWRGZXRjaGVycyA9IG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgX2V4dGVuZHMoe1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgLy8gQ29tbWl0IHBlbmRpbmcgZXJyb3IgaWYgd2UncmUgc2hvcnQgY2lyY3VpdGluZ1xuICAgICAgICBlcnJvcnM6IHBlbmRpbmdFcnJvciB8fCBudWxsXG4gICAgICB9LCBwZW5kaW5nQWN0aW9uRGF0YSA/IHtcbiAgICAgICAgYWN0aW9uRGF0YTogcGVuZGluZ0FjdGlvbkRhdGFcbiAgICAgIH0gOiB7fSwgdXBkYXRlZEZldGNoZXJzID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIElmIHRoaXMgaXMgYW4gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb24sIHdlIHJlbWFpbiBpbiBvdXIgY3VycmVudCBpZGxlXG4gICAgLy8gc3RhdGUuICBJZiBub3QsIHdlIG5lZWQgdG8gc3dpdGNoIHRvIG91ciBsb2FkaW5nIHN0YXRlIGFuZCBsb2FkIGRhdGEsXG4gICAgLy8gcHJlc2VydmluZyBhbnkgbmV3IGFjdGlvbiBkYXRhIG9yIGV4aXN0aW5nIGFjdGlvbiBkYXRhIChpbiB0aGUgY2FzZSBvZlxuICAgIC8vIGEgcmV2YWxpZGF0aW9uIGludGVycnVwdGluZyBhbiBhY3Rpb25SZWxvYWQpXG4gICAgaWYgKCFpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChyZi5rZXkpO1xuICAgICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IGdldExvYWRpbmdGZXRjaGVyKHVuZGVmaW5lZCwgZmV0Y2hlciA/IGZldGNoZXIuZGF0YSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHN0YXRlLmZldGNoZXJzLnNldChyZi5rZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgYWN0aW9uRGF0YSA9IHBlbmRpbmdBY3Rpb25EYXRhIHx8IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgIG5hdmlnYXRpb246IGxvYWRpbmdOYXZpZ2F0aW9uXG4gICAgICB9LCBhY3Rpb25EYXRhID8gT2JqZWN0LmtleXMoYWN0aW9uRGF0YSkubGVuZ3RoID09PSAwID8ge1xuICAgICAgICBhY3Rpb25EYXRhOiBudWxsXG4gICAgICB9IDoge1xuICAgICAgICBhY3Rpb25EYXRhXG4gICAgICB9IDoge30sIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSA6IHt9KSk7XG4gICAgfVxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKHJmLmtleSkpIHtcbiAgICAgICAgYWJvcnRGZXRjaGVyKHJmLmtleSk7XG4gICAgICB9XG4gICAgICBpZiAocmYuY29udHJvbGxlcikge1xuICAgICAgICAvLyBGZXRjaGVycyB1c2UgYW4gaW5kZXBlbmRlbnQgQWJvcnRDb250cm9sbGVyIHNvIHRoYXQgYWJvcnRpbmcgYSBmZXRjaGVyXG4gICAgICAgIC8vICh2aWEgZGVsZXRlRmV0Y2hlcikgZG9lcyBub3QgYWJvcnQgdGhlIHRyaWdnZXJpbmcgbmF2aWdhdGlvbiB0aGF0XG4gICAgICAgIC8vIHRyaWdnZXJlZCB0aGUgcmV2YWxpZGF0aW9uXG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHJmLmtleSwgcmYuY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gUHJveHkgbmF2aWdhdGlvbiBhYm9ydCB0aHJvdWdoIHRvIHJldmFsaWRhdGlvbiBmZXRjaGVyc1xuICAgIGxldCBhYm9ydFBlbmRpbmdGZXRjaFJldmFsaWRhdGlvbnMgPSAoKSA9PiByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKGYgPT4gYWJvcnRGZXRjaGVyKGYua2V5KSk7XG4gICAgaWYgKHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcikge1xuICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zKTtcbiAgICB9XG4gICAgbGV0IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9ID0gYXdhaXQgY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKHN0YXRlLm1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXF1ZXN0KTtcbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIENsZWFuIHVwIF9hZnRlcl8gbG9hZGVycyBoYXZlIGNvbXBsZXRlZC4gIERvbid0IGNsZWFuIHVwIGlmIHdlIHNob3J0XG4gICAgLy8gY2lyY3VpdGVkIGJlY2F1c2UgZmV0Y2hDb250cm9sbGVycyB3b3VsZCBoYXZlIGJlZW4gYWJvcnRlZCBhbmRcbiAgICAvLyByZWFzc2lnbmVkIHRvIG5ldyBjb250cm9sbGVycyBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuICAgIGlmIChwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIpIHtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0UGVuZGluZ0ZldGNoUmV2YWxpZGF0aW9ucyk7XG4gICAgfVxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUocmYua2V5KSk7XG4gICAgLy8gSWYgYW55IGxvYWRlcnMgcmV0dXJuZWQgYSByZWRpcmVjdCBSZXNwb25zZSwgc3RhcnQgYSBuZXcgUkVQTEFDRSBuYXZpZ2F0aW9uXG4gICAgbGV0IHJlZGlyZWN0ID0gZmluZFJlZGlyZWN0KHJlc3VsdHMpO1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgaWYgKHJlZGlyZWN0LmlkeCA+PSBtYXRjaGVzVG9Mb2FkLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGlzIHJlZGlyZWN0IGNhbWUgZnJvbSBhIGZldGNoZXIgbWFrZSBzdXJlIHdlIG1hcmsgaXQgaW5cbiAgICAgICAgLy8gZmV0Y2hSZWRpcmVjdElkcyBzbyBpdCBkb2Vzbid0IGdldCByZXZhbGlkYXRlZCBvbiB0aGUgbmV4dCBzZXQgb2ZcbiAgICAgICAgLy8gbG9hZGVyIGV4ZWN1dGlvbnNcbiAgICAgICAgbGV0IGZldGNoZXJLZXkgPSByZXZhbGlkYXRpbmdGZXRjaGVyc1tyZWRpcmVjdC5pZHggLSBtYXRjaGVzVG9Mb2FkLmxlbmd0aF0ua2V5O1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChmZXRjaGVyS2V5KTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdC5yZXN1bHQsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcyk7XG4gICAgLy8gV2lyZSB1cCBzdWJzY3JpYmVycyB0byB1cGRhdGUgbG9hZGVyRGF0YSBhcyBwcm9taXNlcyBzZXR0bGVcbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGVmZXJyZWREYXRhLCByb3V0ZUlkKSA9PiB7XG4gICAgICBkZWZlcnJlZERhdGEuc3Vic2NyaWJlKGFib3J0ZWQgPT4ge1xuICAgICAgICAvLyBOb3RlOiBObyBuZWVkIHRvIHVwZGF0ZVN0YXRlIGhlcmUgc2luY2UgdGhlIFRyYWNrZWRQcm9taXNlIG9uXG4gICAgICAgIC8vIGxvYWRlckRhdGEgaXMgc3RhYmxlIGFjcm9zcyByZXNvbHZlL3JlamVjdFxuICAgICAgICAvLyBSZW1vdmUgdGhpcyBpbnN0YW5jZSBpZiB3ZSB3ZXJlIGFib3J0ZWQgb3IgaWYgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkXG4gICAgICAgIGlmIChhYm9ydGVkIHx8IGRlZmVycmVkRGF0YS5kb25lKSB7XG4gICAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGV0IHVwZGF0ZWRGZXRjaGVycyA9IG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKTtcbiAgICBsZXQgZGlkQWJvcnRGZXRjaExvYWRzID0gYWJvcnRTdGFsZUZldGNoTG9hZHMocGVuZGluZ05hdmlnYXRpb25Mb2FkSWQpO1xuICAgIGxldCBzaG91bGRVcGRhdGVGZXRjaGVycyA9IHVwZGF0ZWRGZXRjaGVycyB8fCBkaWRBYm9ydEZldGNoTG9hZHMgfHwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMDtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0sIHNob3VsZFVwZGF0ZUZldGNoZXJzID8ge1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSA6IHt9KTtcbiAgfVxuICBmdW5jdGlvbiBnZXRGZXRjaGVyKGtleSkge1xuICAgIHJldHVybiBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIH1cbiAgLy8gVHJpZ2dlciBhIGZldGNoZXIgbG9hZC9zdWJtaXQgZm9yIHRoZSBnaXZlbiBmZXRjaGVyIGtleVxuICBmdW5jdGlvbiBmZXRjaChrZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpIHtcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJvdXRlci5mZXRjaCgpIHdhcyBjYWxsZWQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLCBidXQgaXQgc2hvdWxkbid0IGJlLiBcIiArIFwiWW91IGFyZSBsaWtlbHkgY2FsbGluZyBhIHVzZUZldGNoZXIoKSBtZXRob2QgaW4gdGhlIGJvZHkgb2YgeW91ciBjb21wb25lbnQuIFwiICsgXCJUcnkgbW92aW5nIGl0IHRvIGEgdXNlRWZmZWN0IG9yIGEgY2FsbGJhY2suXCIpO1xuICAgIH1cbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG5vcm1hbGl6ZWRQYXRoID0gbm9ybWFsaXplVG8oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMsIGJhc2VuYW1lLCBmdXR1cmUudjdfcHJlcGVuZEJhc2VuYW1lLCBocmVmLCByb3V0ZUlkLCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnJlbGF0aXZlKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBub3JtYWxpemVkUGF0aCwgYmFzZW5hbWUpO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IG5vcm1hbGl6ZWRQYXRoXG4gICAgICB9KSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvbixcbiAgICAgIGVycm9yXG4gICAgfSA9IG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyhmdXR1cmUudjdfbm9ybWFsaXplRm9ybU1ldGhvZCwgdHJ1ZSwgbm9ybWFsaXplZFBhdGgsIG9wdHMpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBwYXRoKTtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gKG9wdHMgJiYgb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQpID09PSB0cnVlO1xuICAgIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gU3RvcmUgb2ZmIHRoZSBtYXRjaCBzbyB3ZSBjYW4gY2FsbCBpdCdzIHNob3VsZFJldmFsaWRhdGUgb24gc3Vic2VxdWVudFxuICAgIC8vIHJldmFsaWRhdGlvbnNcbiAgICBmZXRjaExvYWRNYXRjaGVzLnNldChrZXksIHtcbiAgICAgIHJvdXRlSWQsXG4gICAgICBwYXRoXG4gICAgfSk7XG4gICAgaGFuZGxlRmV0Y2hlckxvYWRlcihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgfVxuICAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBtYXRjaGVkIGZldGNoZXIuc3VibWl0KCksIGFuZCB0aGVuIGhhbmRsZSByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgYW5kIHJldmFsaWRhdGlvblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGlmICghbWF0Y2gucm91dGUuYWN0aW9uICYmICFtYXRjaC5yb3V0ZS5sYXp5KSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgsXG4gICAgICAgIHJvdXRlSWQ6IHJvdXRlSWRcbiAgICAgIH0pO1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBzdWJtaXR0aW5nIHN0YXRlXG4gICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIGxldCBmZXRjaGVyID0gZ2V0U3VibWl0dGluZ0ZldGNoZXIoc3VibWlzc2lvbiwgZXhpc3RpbmdGZXRjaGVyKTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBmZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgICAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBmZXRjaGVyXG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLCBzdWJtaXNzaW9uKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IG9yaWdpbmF0aW5nTG9hZElkID0gaW5jcmVtZW50aW5nTG9hZElkO1xuICAgIGxldCBhY3Rpb25SZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgZmV0Y2hSZXF1ZXN0LCBtYXRjaCwgcmVxdWVzdE1hdGNoZXMsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMsIGJhc2VuYW1lKTtcbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3Ugb3VyIG93biBmZXRjaGVyXG4gICAgICAvLyByZS1zdWJtaXQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KSA9PT0gYWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICBpZiAocGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPiBvcmlnaW5hdGluZ0xvYWRJZCkge1xuICAgICAgICAvLyBBIG5ldyBuYXZpZ2F0aW9uIHdhcyBraWNrZWQgb2ZmIGFmdGVyIG91ciBhY3Rpb24gc3RhcnRlZCwgc28gdGhhdFxuICAgICAgICAvLyBzaG91bGQgdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhpcyByZWRpcmVjdCBuYXZpZ2F0aW9uLiAgV2UgYWxyZWFkeVxuICAgICAgICAvLyBzZXQgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCBzbyBhbGwgbG9hZGVycyBmb3IgdGhlIG5ldyByb3V0ZSBzaG91bGRcbiAgICAgICAgLy8gZmlyZSB1bmxlc3Mgb3B0ZWQgb3V0IHZpYSBzaG91bGRSZXZhbGlkYXRlXG4gICAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKHVuZGVmaW5lZCk7XG4gICAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQoa2V5KTtcbiAgICAgICAgbGV0IGxvYWRpbmdGZXRjaGVyID0gZ2V0TG9hZGluZ0ZldGNoZXIoc3VibWlzc2lvbik7XG4gICAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCBhY3Rpb25SZXN1bHQsIHtcbiAgICAgICAgICBmZXRjaGVyU3VibWlzc2lvbjogc3VibWlzc2lvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cbiAgICBpZiAoaXNFcnJvclJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBhY3Rpb25SZXN1bHQuZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gU3RhcnQgdGhlIGRhdGEgbG9hZCBmb3IgY3VycmVudCBtYXRjaGVzLCBvciB0aGUgbmV4dCBsb2NhdGlvbiBpZiB3ZSdyZVxuICAgIC8vIGluIHRoZSBtaWRkbGUgb2YgYSBuYXZpZ2F0aW9uXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24gfHwgc3RhdGUubG9jYXRpb247XG4gICAgbGV0IHJldmFsaWRhdGlvblJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIG5leHRMb2NhdGlvbiwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgbGV0IHJvdXRlc1RvVXNlID0gaW5GbGlnaHREYXRhUm91dGVzIHx8IGRhdGFSb3V0ZXM7XG4gICAgbGV0IG1hdGNoZXMgPSBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIiA/IG1hdGNoUm91dGVzKHJvdXRlc1RvVXNlLCBzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCBiYXNlbmFtZSkgOiBzdGF0ZS5tYXRjaGVzO1xuICAgIGludmFyaWFudChtYXRjaGVzLCBcIkRpZG4ndCBmaW5kIGFueSBtYXRjaGVzIGFmdGVyIGZldGNoZXIgYWN0aW9uXCIpO1xuICAgIGxldCBsb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICBmZXRjaFJlbG9hZElkcy5zZXQoa2V5LCBsb2FkSWQpO1xuICAgIGxldCBsb2FkRmV0Y2hlciA9IGdldExvYWRpbmdGZXRjaGVyKHN1Ym1pc3Npb24sIGFjdGlvblJlc3VsdC5kYXRhKTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkRmV0Y2hlcik7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIHN1Ym1pc3Npb24sIG5leHRMb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgZmV0Y2hMb2FkTWF0Y2hlcywgZmV0Y2hSZWRpcmVjdElkcywgcm91dGVzVG9Vc2UsIGJhc2VuYW1lLCB7XG4gICAgICBbbWF0Y2gucm91dGUuaWRdOiBhY3Rpb25SZXN1bHQuZGF0YVxuICAgIH0sIHVuZGVmaW5lZCAvLyBObyBuZWVkIHRvIHNlbmQgdGhyb3VnaCBlcnJvcnMgc2luY2Ugd2Ugc2hvcnQgY2lyY3VpdCBhYm92ZVxuICAgICk7XG4gICAgLy8gUHV0IGFsbCByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgaW50byB0aGUgbG9hZGluZyBzdGF0ZSwgZXhjZXB0IGZvciB0aGVcbiAgICAvLyBjdXJyZW50IGZldGNoZXIgd2hpY2ggd2Ugd2FudCB0byBrZWVwIGluIGl0J3MgY3VycmVudCBsb2FkaW5nIHN0YXRlIHdoaWNoXG4gICAgLy8gY29udGFpbnMgaXQncyBhY3Rpb24gc3VibWlzc2lvbiBpbmZvICsgYWN0aW9uIGRhdGFcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5maWx0ZXIocmYgPT4gcmYua2V5ICE9PSBrZXkpLmZvckVhY2gocmYgPT4ge1xuICAgICAgbGV0IHN0YWxlS2V5ID0gcmYua2V5O1xuICAgICAgbGV0IGV4aXN0aW5nRmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChzdGFsZUtleSk7XG4gICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IGdldExvYWRpbmdGZXRjaGVyKHVuZGVmaW5lZCwgZXhpc3RpbmdGZXRjaGVyID8gZXhpc3RpbmdGZXRjaGVyLmRhdGEgOiB1bmRlZmluZWQpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHN0YWxlS2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhzdGFsZUtleSkpIHtcbiAgICAgICAgYWJvcnRGZXRjaGVyKHN0YWxlS2V5KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZi5jb250cm9sbGVyKSB7XG4gICAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHN0YWxlS2V5LCByZi5jb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgICBsZXQgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zID0gKCkgPT4gcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZm9yRWFjaChyZiA9PiBhYm9ydEZldGNoZXIocmYua2V5KSk7XG4gICAgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zKTtcbiAgICBsZXQge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUubWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJldmFsaWRhdGlvblJlcXVlc3QpO1xuICAgIGlmIChhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRQZW5kaW5nRmV0Y2hSZXZhbGlkYXRpb25zKTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gociA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyLmtleSkpO1xuICAgIGxldCByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChyZXN1bHRzKTtcbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIGlmIChyZWRpcmVjdC5pZHggPj0gbWF0Y2hlc1RvTG9hZC5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgdGhpcyByZWRpcmVjdCBjYW1lIGZyb20gYSBmZXRjaGVyIG1ha2Ugc3VyZSB3ZSBtYXJrIGl0IGluXG4gICAgICAgIC8vIGZldGNoUmVkaXJlY3RJZHMgc28gaXQgZG9lc24ndCBnZXQgcmV2YWxpZGF0ZWQgb24gdGhlIG5leHQgc2V0IG9mXG4gICAgICAgIC8vIGxvYWRlciBleGVjdXRpb25zXG4gICAgICAgIGxldCBmZXRjaGVyS2V5ID0gcmV2YWxpZGF0aW5nRmV0Y2hlcnNbcmVkaXJlY3QuaWR4IC0gbWF0Y2hlc1RvTG9hZC5sZW5ndGhdLmtleTtcbiAgICAgICAgZmV0Y2hSZWRpcmVjdElkcy5hZGQoZmV0Y2hlcktleSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LnJlc3VsdCk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIHN0YXRlLm1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHVuZGVmaW5lZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIC8vIFNpbmNlIHdlIGxldCByZXZhbGlkYXRpb25zIGNvbXBsZXRlIGV2ZW4gaWYgdGhlIHN1Ym1pdHRpbmcgZmV0Y2hlciB3YXNcbiAgICAvLyBkZWxldGVkLCBvbmx5IHB1dCBpdCBiYWNrIHRvIGlkbGUgaWYgaXQgaGFzbid0IGJlZW4gZGVsZXRlZFxuICAgIGlmIChzdGF0ZS5mZXRjaGVycy5oYXMoa2V5KSkge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0gZ2V0RG9uZUZldGNoZXIoYWN0aW9uUmVzdWx0LmRhdGEpO1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgICBsZXQgZGlkQWJvcnRGZXRjaExvYWRzID0gYWJvcnRTdGFsZUZldGNoTG9hZHMobG9hZElkKTtcbiAgICAvLyBJZiB3ZSBhcmUgY3VycmVudGx5IGluIGEgbmF2aWdhdGlvbiBsb2FkaW5nIHN0YXRlIGFuZCB0aGlzIGZldGNoZXIgaXNcbiAgICAvLyBtb3JlIHJlY2VudCB0aGFuIHRoZSBuYXZpZ2F0aW9uLCB3ZSB3YW50IHRoZSBuZXdlciBkYXRhIHNvIGFib3J0IHRoZVxuICAgIC8vIG5hdmlnYXRpb24gYW5kIGNvbXBsZXRlIGl0IHdpdGggdGhlIGZldGNoZXIgZGF0YVxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcImxvYWRpbmdcIiAmJiBsb2FkSWQgPiBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCkge1xuICAgICAgaW52YXJpYW50KHBlbmRpbmdBY3Rpb24sIFwiRXhwZWN0ZWQgcGVuZGluZyBhY3Rpb25cIik7XG4gICAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24oc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG90aGVyd2lzZSBqdXN0IHVwZGF0ZSB3aXRoIHRoZSBmZXRjaGVyIGRhdGEsIHByZXNlcnZpbmcgYW55IGV4aXN0aW5nXG4gICAgICAvLyBsb2FkZXJEYXRhIGZvciBsb2FkZXJzIHRoYXQgZGlkIG5vdCBuZWVkIHRvIHJlbG9hZC4gIFdlIGhhdmUgdG9cbiAgICAgIC8vIG1hbnVhbGx5IG1lcmdlIGhlcmUgc2luY2Ugd2UgYXJlbid0IGdvaW5nIHRocm91Z2ggY29tcGxldGVOYXZpZ2F0aW9uXG4gICAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgbG9hZGVyRGF0YTogbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIGxvYWRlckRhdGEsIG1hdGNoZXMsIGVycm9ycylcbiAgICAgIH0sIGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBDYWxsIHRoZSBtYXRjaGVkIGxvYWRlciBmb3IgZmV0Y2hlci5sb2FkKCksIGhhbmRsaW5nIHJlZGlyZWN0cywgZXJyb3JzLCBldGMuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoZXJMb2FkZXIoa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbikge1xuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcbiAgICAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBsb2FkaW5nIHN0YXRlXG4gICAgbGV0IGxvYWRpbmdGZXRjaGVyID0gZ2V0TG9hZGluZ0ZldGNoZXIoc3VibWlzc2lvbiwgZXhpc3RpbmdGZXRjaGVyID8gZXhpc3RpbmdGZXRjaGVyLmRhdGEgOiB1bmRlZmluZWQpO1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgICAvLyBDYWxsIHRoZSBsb2FkZXIgZm9yIHRoaXMgZmV0Y2hlciByb3V0ZSBtYXRjaFxuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCBvcmlnaW5hdGluZ0xvYWRJZCA9IGluY3JlbWVudGluZ0xvYWRJZDtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIGZldGNoUmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMsIGJhc2VuYW1lKTtcbiAgICAvLyBEZWZlcnJlZCBpc24ndCBzdXBwb3J0ZWQgZm9yIGZldGNoZXIgbG9hZHMsIGF3YWl0IGV2ZXJ5dGhpbmcgYW5kIHRyZWF0IGl0XG4gICAgLy8gYXMgYSBub3JtYWwgbG9hZC4gIHJlc29sdmVEZWZlcnJlZERhdGEgd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoaXNcbiAgICAvLyBmZXRjaGVyIGdldHMgYWJvcnRlZCwgc28gd2UganVzdCBsZWF2ZSByZXN1bHQgdW50b3VjaGVkIGFuZCBzaG9ydCBjaXJjdWl0XG4gICAgLy8gYmVsb3cgaWYgdGhhdCBoYXBwZW5zXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gKGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBmZXRjaFJlcXVlc3Quc2lnbmFsLCB0cnVlKSkgfHwgcmVzdWx0O1xuICAgIH1cbiAgICAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3VyIG91ciBvd24gZmV0Y2hlclxuICAgIC8vIHJlLWxvYWQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgbG9hZGVyIHRocmV3IGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGlmIChwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA+IG9yaWdpbmF0aW5nTG9hZElkKSB7XG4gICAgICAgIC8vIEEgbmV3IG5hdmlnYXRpb24gd2FzIGtpY2tlZCBvZmYgYWZ0ZXIgb3VyIGxvYWRlciBzdGFydGVkLCBzbyB0aGF0XG4gICAgICAgIC8vIHNob3VsZCB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGlzIHJlZGlyZWN0IG5hdmlnYXRpb25cbiAgICAgICAgbGV0IGRvbmVGZXRjaGVyID0gZ2V0RG9uZUZldGNoZXIodW5kZWZpbmVkKTtcbiAgICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuICAgICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQcm9jZXNzIGFueSBub24tcmVkaXJlY3QgZXJyb3JzIHRocm93blxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCByb3V0ZUlkKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgLy8gVE9ETzogSW4gcmVtaXgsIHRoaXMgd291bGQgcmVzZXQgdG8gSURMRV9OQVZJR0FUSU9OIGlmIGl0IHdhcyBhIGNhdGNoIC1cbiAgICAgIC8vIGRvIHdlIG5lZWQgdG8gYmVoYXZlIGFueSBkaWZmZXJlbnRseSB3aXRoIG91ciBub24tcmVkaXJlY3QgZXJyb3JzP1xuICAgICAgLy8gV2hhdCBpZiBpdCB3YXMgYSBub24tcmVkaXJlY3QgUmVzcG9uc2U/XG4gICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKSxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudCghaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7XG4gICAgLy8gUHV0IHRoZSBmZXRjaGVyIGJhY2sgaW50byBhbiBpZGxlIHN0YXRlXG4gICAgbGV0IGRvbmVGZXRjaGVyID0gZ2V0RG9uZUZldGNoZXIocmVzdWx0LmRhdGEpO1xuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBoYW5kbGUgcmVkaXJlY3RzIHJldHVybmVkIGZyb20gYW4gYWN0aW9uIG9yIGxvYWRlci5cbiAgICogTm9ybWFsbHksIGEgcmVkaXJlY3QgXCJyZXBsYWNlc1wiIHRoZSBuYXZpZ2F0aW9uIHRoYXQgdHJpZ2dlcmVkIGl0LiAgU28sIGZvclxuICAgKiBleGFtcGxlOlxuICAgKlxuICAgKiAgLSB1c2VyIGlzIG9uIC9hXG4gICAqICAtIHVzZXIgY2xpY2tzIGEgbGluayB0byAvYlxuICAgKiAgLSBsb2FkZXIgZm9yIC9iIHJlZGlyZWN0cyB0byAvY1xuICAgKlxuICAgKiBJbiBhIG5vbi1KUyBhcHAgdGhlIGJyb3dzZXIgd291bGQgdHJhY2sgdGhlIGluLWZsaWdodCBuYXZpZ2F0aW9uIHRvIC9iIGFuZFxuICAgKiB0aGVuIHJlcGxhY2UgaXQgd2l0aCAvYyB3aGVuIGl0IGVuY291bnRlcmVkIHRoZSByZWRpcmVjdCByZXNwb25zZS4gIEluXG4gICAqIHRoZSBlbmQgaXQgd291bGQgb25seSBldmVyIHVwZGF0ZSB0aGUgVVJMIGJhciB3aXRoIC9jLlxuICAgKlxuICAgKiBJbiBjbGllbnQtc2lkZSByb3V0aW5nIHVzaW5nIHB1c2hTdGF0ZS9yZXBsYWNlU3RhdGUsIHdlIGFpbSB0byBlbXVsYXRlXG4gICAqIHRoaXMgYmVoYXZpb3IgYW5kIHdlIGFsc28gZG8gbm90IHVwZGF0ZSBoaXN0b3J5IHVudGlsIHRoZSBlbmQgb2YgdGhlXG4gICAqIG5hdmlnYXRpb24gKGluY2x1ZGluZyBwcm9jZXNzZWQgcmVkaXJlY3RzKS4gIFRoaXMgbWVhbnMgdGhhdCB3ZSBuZXZlclxuICAgKiBhY3R1YWxseSB0b3VjaCBoaXN0b3J5IHVudGlsIHdlJ3ZlIHByb2Nlc3NlZCByZWRpcmVjdHMsIHNvIHdlIGp1c3QgdXNlXG4gICAqIHRoZSBoaXN0b3J5IGFjdGlvbiBmcm9tIHRoZSBvcmlnaW5hbCBuYXZpZ2F0aW9uIChQVVNIIG9yIFJFUExBQ0UpLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LCBfdGVtcCkge1xuICAgIGxldCB7XG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgZmV0Y2hlclN1Ym1pc3Npb24sXG4gICAgICByZXBsYWNlXG4gICAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICAgIGlmIChyZWRpcmVjdC5yZXZhbGlkYXRlKSB7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHJlZGlyZWN0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcmVkaXJlY3QubG9jYXRpb24sIHtcbiAgICAgIF9pc1JlZGlyZWN0OiB0cnVlXG4gICAgfSk7XG4gICAgaW52YXJpYW50KHJlZGlyZWN0TG9jYXRpb24sIFwiRXhwZWN0ZWQgYSBsb2NhdGlvbiBvbiB0aGUgcmVkaXJlY3QgbmF2aWdhdGlvblwiKTtcbiAgICBpZiAoaXNCcm93c2VyKSB7XG4gICAgICBsZXQgaXNEb2N1bWVudFJlbG9hZCA9IGZhbHNlO1xuICAgICAgaWYgKHJlZGlyZWN0LnJlbG9hZERvY3VtZW50KSB7XG4gICAgICAgIC8vIEhhcmQgcmVsb2FkIGlmIHRoZSByZXNwb25zZSBjb250YWluZWQgWC1SZW1peC1SZWxvYWQtRG9jdW1lbnRcbiAgICAgICAgaXNEb2N1bWVudFJlbG9hZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKEFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KHJlZGlyZWN0LmxvY2F0aW9uKSkge1xuICAgICAgICBjb25zdCB1cmwgPSBpbml0Lmhpc3RvcnkuY3JlYXRlVVJMKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgICAgaXNEb2N1bWVudFJlbG9hZCA9XG4gICAgICAgIC8vIEhhcmQgcmVsb2FkIGlmIGl0J3MgYW4gYWJzb2x1dGUgVVJMIHRvIGEgbmV3IG9yaWdpblxuICAgICAgICB1cmwub3JpZ2luICE9PSByb3V0ZXJXaW5kb3cubG9jYXRpb24ub3JpZ2luIHx8XG4gICAgICAgIC8vIEhhcmQgcmVsb2FkIGlmIGl0J3MgYW4gYWJzb2x1dGUgVVJMIHRoYXQgZG9lcyBub3QgbWF0Y2ggb3VyIGJhc2VuYW1lXG4gICAgICAgIHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgPT0gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RvY3VtZW50UmVsb2FkKSB7XG4gICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgcm91dGVyV2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdXRlcldpbmRvdy5sb2NhdGlvbi5hc3NpZ24ocmVkaXJlY3QubG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlcmUncyBubyBuZWVkIHRvIGFib3J0IG9uIHJlZGlyZWN0cywgc2luY2Ugd2UgZG9uJ3QgZGV0ZWN0IHRoZVxuICAgIC8vIHJlZGlyZWN0IHVudGlsIHRoZSBhY3Rpb24vbG9hZGVycyBoYXZlIHNldHRsZWRcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGxldCByZWRpcmVjdEhpc3RvcnlBY3Rpb24gPSByZXBsYWNlID09PSB0cnVlID8gQWN0aW9uLlJlcGxhY2UgOiBBY3Rpb24uUHVzaDtcbiAgICAvLyBVc2UgdGhlIGluY29taW5nIHN1Ym1pc3Npb24gaWYgcHJvdmlkZWQsIGZhbGxiYWNrIG9uIHRoZSBhY3RpdmUgb25lIGluXG4gICAgLy8gc3RhdGUubmF2aWdhdGlvblxuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlXG4gICAgfSA9IHN0YXRlLm5hdmlnYXRpb247XG4gICAgaWYgKCFzdWJtaXNzaW9uICYmICFmZXRjaGVyU3VibWlzc2lvbiAmJiBmb3JtTWV0aG9kICYmIGZvcm1BY3Rpb24gJiYgZm9ybUVuY1R5cGUpIHtcbiAgICAgIHN1Ym1pc3Npb24gPSBnZXRTdWJtaXNzaW9uRnJvbU5hdmlnYXRpb24oc3RhdGUubmF2aWdhdGlvbik7XG4gICAgfVxuICAgIC8vIElmIHRoaXMgd2FzIGEgMzA3LzMwOCBzdWJtaXNzaW9uIHdlIHdhbnQgdG8gcHJlc2VydmUgdGhlIEhUVFAgbWV0aG9kIGFuZFxuICAgIC8vIHJlLXN1Ym1pdCB0aGUgR0VUL1BPU1QvUFVUL1BBVENIL0RFTEVURSBhcyBhIHN1Ym1pc3Npb24gbmF2aWdhdGlvbiB0byB0aGVcbiAgICAvLyByZWRpcmVjdGVkIGxvY2F0aW9uXG4gICAgbGV0IGFjdGl2ZVN1Ym1pc3Npb24gPSBzdWJtaXNzaW9uIHx8IGZldGNoZXJTdWJtaXNzaW9uO1xuICAgIGlmIChyZWRpcmVjdFByZXNlcnZlTWV0aG9kU3RhdHVzQ29kZXMuaGFzKHJlZGlyZWN0LnN0YXR1cykgJiYgYWN0aXZlU3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKGFjdGl2ZVN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgc3VibWlzc2lvbjogX2V4dGVuZHMoe30sIGFjdGl2ZVN1Ym1pc3Npb24sIHtcbiAgICAgICAgICBmb3JtQWN0aW9uOiByZWRpcmVjdC5sb2NhdGlvblxuICAgICAgICB9KSxcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIG5hdmlnYXRpb24gc3VibWlzc2lvbiwgd2Ugd2lsbCBwcmVzZXJ2ZSBpdCB0aHJvdWdoIHRoZVxuICAgICAgLy8gcmVkaXJlY3QgbmF2aWdhdGlvblxuICAgICAgbGV0IG92ZXJyaWRlTmF2aWdhdGlvbiA9IGdldExvYWRpbmdOYXZpZ2F0aW9uKHJlZGlyZWN0TG9jYXRpb24sIHN1Ym1pc3Npb24pO1xuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb24sXG4gICAgICAgIC8vIFNlbmQgZmV0Y2hlciBzdWJtaXNzaW9ucyB0aHJvdWdoIGZvciBzaG91bGRSZXZhbGlkYXRlXG4gICAgICAgIGZldGNoZXJTdWJtaXNzaW9uLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGlzIGZsYWcgYWNyb3NzIHJlZGlyZWN0c1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBhc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoY3VycmVudE1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGZldGNoZXJzVG9Mb2FkLCByZXF1ZXN0KSB7XG4gICAgLy8gQ2FsbCBhbGwgbmF2aWdhdGlvbiBsb2FkZXJzIGFuZCByZXZhbGlkYXRpbmcgZmV0Y2hlciBsb2FkZXJzIGluIHBhcmFsbGVsLFxuICAgIC8vIHRoZW4gc2xpY2Ugb2ZmIHRoZSByZXN1bHRzIGludG8gc2VwYXJhdGUgYXJyYXlzIHNvIHdlIGNhbiBoYW5kbGUgdGhlbVxuICAgIC8vIGFjY29yZGluZ2x5XG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbLi4ubWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBtYW5pZmVzdCwgbWFwUm91dGVQcm9wZXJ0aWVzLCBiYXNlbmFtZSkpLCAuLi5mZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiB7XG4gICAgICBpZiAoZi5tYXRjaGVzICYmIGYubWF0Y2ggJiYgZi5jb250cm9sbGVyKSB7XG4gICAgICAgIHJldHVybiBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBmLnBhdGgsIGYuY29udHJvbGxlci5zaWduYWwpLCBmLm1hdGNoLCBmLm1hdGNoZXMsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMsIGJhc2VuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBlcnJvciA9IHtcbiAgICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICAgIGVycm9yOiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGYucGF0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgIH1cbiAgICB9KV0pO1xuICAgIGxldCBsb2FkZXJSZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBtYXRjaGVzVG9Mb2FkLmxlbmd0aCk7XG4gICAgbGV0IGZldGNoZXJSZXN1bHRzID0gcmVzdWx0cy5zbGljZShtYXRjaGVzVG9Mb2FkLmxlbmd0aCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3Jlc29sdmVEZWZlcnJlZFJlc3VsdHMoY3VycmVudE1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIGxvYWRlclJlc3VsdHMubWFwKCgpID0+IHJlcXVlc3Quc2lnbmFsKSwgZmFsc2UsIHN0YXRlLmxvYWRlckRhdGEpLCByZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBmZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiBmLm1hdGNoKSwgZmV0Y2hlclJlc3VsdHMsIGZldGNoZXJzVG9Mb2FkLm1hcChmID0+IGYuY29udHJvbGxlciA/IGYuY29udHJvbGxlci5zaWduYWwgOiBudWxsKSwgdHJ1ZSldKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gaW50ZXJydXB0QWN0aXZlTG9hZHMoKSB7XG4gICAgLy8gRXZlcnkgaW50ZXJydXB0aW9uIHRyaWdnZXJzIGEgcmV2YWxpZGF0aW9uXG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgLy8gQ2FuY2VsIHBlbmRpbmcgcm91dGUtbGV2ZWwgZGVmZXJyZWRzIGFuZCBtYXJrIGNhbmNlbGxlZCByb3V0ZXMgZm9yXG4gICAgLy8gcmV2YWxpZGF0aW9uXG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMucHVzaCguLi5jYW5jZWxBY3RpdmVEZWZlcnJlZHMoKSk7XG4gICAgLy8gQWJvcnQgaW4tZmxpZ2h0IGZldGNoZXIgbG9hZHNcbiAgICBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuaGFzKGtleSkpIHtcbiAgICAgICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLnB1c2goa2V5KTtcbiAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpIHtcbiAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgcm91dGVJZCk7XG4gICAgZGVsZXRlRmV0Y2hlcihrZXkpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IGVycm9yXG4gICAgICB9LFxuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGVsZXRlRmV0Y2hlcihrZXkpIHtcbiAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIC8vIERvbid0IGFib3J0IHRoZSBjb250cm9sbGVyIGlmIHRoaXMgaXMgYSBkZWxldGlvbiBvZiBhIGZldGNoZXIuc3VibWl0KClcbiAgICAvLyBpbiBpdCdzIGxvYWRpbmcgcGhhc2Ugc2luY2UgLSB3ZSBkb24ndCB3YW50IHRvIGFib3J0IHRoZSBjb3JyZXNwb25kaW5nXG4gICAgLy8gcmV2YWxpZGF0aW9uIGFuZCB3YW50IHRoZW0gdG8gY29tcGxldGUgYW5kIGxhbmRcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSAmJiAhKGZldGNoZXIgJiYgZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgZmV0Y2hSZWxvYWRJZHMuaGFzKGtleSkpKSB7XG4gICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICB9XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICB9XG4gIGZ1bmN0aW9uIGFib3J0RmV0Y2hlcihrZXkpIHtcbiAgICBsZXQgY29udHJvbGxlciA9IGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSk7XG4gICAgaW52YXJpYW50KGNvbnRyb2xsZXIsIFwiRXhwZWN0ZWQgZmV0Y2ggY29udHJvbGxlcjogXCIgKyBrZXkpO1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaGVyc0RvbmUoa2V5cykge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IGdldEZldGNoZXIoa2V5KTtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKGZldGNoZXIuZGF0YSk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1hcmtGZXRjaFJlZGlyZWN0c0RvbmUoKSB7XG4gICAgbGV0IGRvbmVLZXlzID0gW107XG4gICAgbGV0IHVwZGF0ZWRGZXRjaGVycyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgIGRvbmVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgdXBkYXRlZEZldGNoZXJzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFya0ZldGNoZXJzRG9uZShkb25lS2V5cyk7XG4gICAgcmV0dXJuIHVwZGF0ZWRGZXRjaGVycztcbiAgfVxuICBmdW5jdGlvbiBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhsYW5kZWRJZCkge1xuICAgIGxldCB5ZWV0ZWRLZXlzID0gW107XG4gICAgZm9yIChsZXQgW2tleSwgaWRdIG9mIGZldGNoUmVsb2FkSWRzKSB7XG4gICAgICBpZiAoaWQgPCBsYW5kZWRJZCkge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG4gICAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgICAgICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgIHllZXRlZEtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1hcmtGZXRjaGVyc0RvbmUoeWVldGVkS2V5cyk7XG4gICAgcmV0dXJuIHllZXRlZEtleXMubGVuZ3RoID4gMDtcbiAgfVxuICBmdW5jdGlvbiBnZXRCbG9ja2VyKGtleSwgZm4pIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjtcbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5nZXQoa2V5KSAhPT0gZm4pIHtcbiAgICAgIGJsb2NrZXJGdW5jdGlvbnMuc2V0KGtleSwgZm4pO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuICBmdW5jdGlvbiBkZWxldGVCbG9ja2VyKGtleSkge1xuICAgIHN0YXRlLmJsb2NrZXJzLmRlbGV0ZShrZXkpO1xuICAgIGJsb2NrZXJGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG4gIH1cbiAgLy8gVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgYmxvY2tlcnMsIGVuc3VyaW5nIHZhbGlkIHN0YXRlIHRyYW5zaXRpb25zXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXIoa2V5LCBuZXdCbG9ja2VyKSB7XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoa2V5KSB8fCBJRExFX0JMT0NLRVI7XG4gICAgLy8gUG9vciBtYW5zIHN0YXRlIG1hY2hpbmUgOilcbiAgICAvLyBodHRwczovL21lcm1haWQubGl2ZS9lZGl0I3Bha286ZU5xVmtjOU93ekFNeGw4bDhubmpBWXJFdERJT0hFQklnd3ZLSlRSZUd5M19sRHBJcU8yN2s2YXdNRzBYY3JMbG56ODdud2RvbkVTb2dLWFhCdUU3OXJxNzVYWk8zLXlIZHMwUkpWdXY3MFlyUGxVckNFZTJIZnJPUlMzcnVicVpmdWh0cGc1Qzl3azV0WjRWS2NSVXE4OHE5WjhSUzAtNDhjRTFpSEprTDB1Z2JIdUZMdXM5TDZzcFp5OG5YOU1QMkNOZG9tVmFwb3NxdTNmR2F5VDhUOC1qSlF3aGVwb19VdHBnQlFhREVVb20wNGRaaEFOMWFKQkRsVUtKQnhFMWNlQjJTbWowTWxuLUlCVzVBRlUyZHdVaWt0dF8yUWFxMmRCZmFLZEV1cDg1VVY3WWQtZEtqbG5rYWJsMlB2cjBEVGtUcmVNXG4gICAgaW52YXJpYW50KGJsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiLCBcIkludmFsaWQgYmxvY2tlciBzdGF0ZSB0cmFuc2l0aW9uOiBcIiArIGJsb2NrZXIuc3RhdGUgKyBcIiAtPiBcIiArIG5ld0Jsb2NrZXIuc3RhdGUpO1xuICAgIGxldCBibG9ja2VycyA9IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpO1xuICAgIGJsb2NrZXJzLnNldChrZXksIG5ld0Jsb2NrZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGJsb2NrZXJzXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9ID0gX3JlZjI7XG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBXZSBvbnkgc3VwcG9ydCBhIHNpbmdsZSBhY3RpdmUgYmxvY2tlciBhdCB0aGUgbW9tZW50IHNpbmNlIHdlIGRvbid0IGhhdmVcbiAgICAvLyBhbnkgY29tcGVsbGluZyB1c2UgY2FzZXMgZm9yIG11bHRpLWJsb2NrZXIgeWV0XG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA+IDEpIHtcbiAgICAgIHdhcm5pbmcoZmFsc2UsIFwiQSByb3V0ZXIgb25seSBzdXBwb3J0cyBvbmUgYmxvY2tlciBhdCBhIHRpbWVcIik7XG4gICAgfVxuICAgIGxldCBlbnRyaWVzID0gQXJyYXkuZnJvbShibG9ja2VyRnVuY3Rpb25zLmVudHJpZXMoKSk7XG4gICAgbGV0IFtibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb25dID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpO1xuICAgIGlmIChibG9ja2VyICYmIGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiKSB7XG4gICAgICAvLyBJZiB0aGUgYmxvY2tlciBpcyBjdXJyZW50bHkgcHJvY2VlZGluZywgd2UgZG9uJ3QgbmVlZCB0byByZS1jaGVja1xuICAgICAgLy8gaXQgYW5kIGNhbiBsZXQgdGhpcyBuYXZpZ2F0aW9uIGNvbnRpbnVlXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEF0IHRoaXMgcG9pbnQsIHdlIGtub3cgd2UncmUgdW5ibG9ja2VkL2Jsb2NrZWQgc28gd2UgbmVlZCB0byBjaGVjayB0aGVcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGJsb2NrZXIgZnVuY3Rpb25cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KSkge1xuICAgICAgcmV0dXJuIGJsb2NrZXJLZXk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhwcmVkaWNhdGUpIHtcbiAgICBsZXQgY2FuY2VsbGVkUm91dGVJZHMgPSBbXTtcbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGZkLCByb3V0ZUlkKSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZSB8fCBwcmVkaWNhdGUocm91dGVJZCkpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZlcnJlZCAtIGJ1dCBkbyBub3QgcmVtb3ZlIGZyb20gYWN0aXZlRGVmZXJyZWRzIGhlcmUgLVxuICAgICAgICAvLyB3ZSByZWx5IG9uIHRoZSBzdWJzY3JpYmVycyB0byBkbyB0aGF0IHNvIG91ciB0ZXN0cyBjYW4gYXNzZXJ0IHByb3BlclxuICAgICAgICAvLyBjbGVhbnVwIHZpYSBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHNcbiAgICAgICAgZGZkLmNhbmNlbCgpO1xuICAgICAgICBjYW5jZWxsZWRSb3V0ZUlkcy5wdXNoKHJvdXRlSWQpO1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjYW5jZWxsZWRSb3V0ZUlkcztcbiAgfVxuICAvLyBPcHQgaW4gdG8gY2FwdHVyaW5nIGFuZCByZXBvcnRpbmcgc2Nyb2xsIHBvc2l0aW9ucyBkdXJpbmcgbmF2aWdhdGlvbnMsXG4gIC8vIHVzZWQgYnkgdGhlIDxTY3JvbGxSZXN0b3JhdGlvbj4gY29tcG9uZW50XG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHBvc2l0aW9ucywgZ2V0UG9zaXRpb24sIGdldEtleSkge1xuICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gcG9zaXRpb25zO1xuICAgIGdldFNjcm9sbFBvc2l0aW9uID0gZ2V0UG9zaXRpb247XG4gICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBnZXRLZXkgfHwgbnVsbDtcbiAgICAvLyBQZXJmb3JtIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbiwgc2luY2Ugd2UgbWlzcyB0aGUgYm9hdCBvblxuICAgIC8vIHRoZSBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgYmVjYXVzZSB3ZSd2ZSBub3QgeWV0IHJlbmRlcmVkIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgLy8gYW5kIHRoZXJlZm9yZSBoYXZlIG5vIHNhdmVkU2Nyb2xsUG9zaXRpb25zIGF2YWlsYWJsZVxuICAgIGlmICghaW5pdGlhbFNjcm9sbFJlc3RvcmVkICYmIHN0YXRlLm5hdmlnYXRpb24gPT09IElETEVfTkFWSUdBVElPTikge1xuICAgICAgaW5pdGlhbFNjcm9sbFJlc3RvcmVkID0gdHJ1ZTtcbiAgICAgIGxldCB5ID0gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7XG4gICAgICBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IG51bGw7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBnZXRTY3JvbGxLZXkobG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkpIHtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgbWF0Y2hlcy5tYXAobSA9PiBjb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSkpO1xuICAgICAgcmV0dXJuIGtleSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgfVxuICAgIHJldHVybiBsb2NhdGlvbi5rZXk7XG4gIH1cbiAgZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zKSB7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsS2V5KGxvY2F0aW9uLCBtYXRjaGVzKTtcbiAgICAgIGxldCB5ID0gc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZnVuY3Rpb24gX2ludGVybmFsU2V0Um91dGVzKG5ld1JvdXRlcykge1xuICAgIG1hbmlmZXN0ID0ge307XG4gICAgaW5GbGlnaHREYXRhUm91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhuZXdSb3V0ZXMsIG1hcFJvdXRlUHJvcGVydGllcywgdW5kZWZpbmVkLCBtYW5pZmVzdCk7XG4gIH1cbiAgcm91dGVyID0ge1xuICAgIGdldCBiYXNlbmFtZSgpIHtcbiAgICAgIHJldHVybiBiYXNlbmFtZTtcbiAgICB9LFxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICByZXR1cm4gZGF0YVJvdXRlcztcbiAgICB9LFxuICAgIGluaXRpYWxpemUsXG4gICAgc3Vic2NyaWJlLFxuICAgIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uLFxuICAgIG5hdmlnYXRlLFxuICAgIGZldGNoLFxuICAgIHJldmFsaWRhdGUsXG4gICAgLy8gUGFzc3Rocm91Z2ggdG8gaGlzdG9yeS1hd2FyZSBjcmVhdGVIcmVmIHVzZWQgYnkgdXNlSHJlZiBzbyB3ZSBnZXQgcHJvcGVyXG4gICAgLy8gaGFzaC1hd2FyZSBVUkxzIGluIERPTSBwYXRoc1xuICAgIGNyZWF0ZUhyZWY6IHRvID0+IGluaXQuaGlzdG9yeS5jcmVhdGVIcmVmKHRvKSxcbiAgICBlbmNvZGVMb2NhdGlvbjogdG8gPT4gaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKHRvKSxcbiAgICBnZXRGZXRjaGVyLFxuICAgIGRlbGV0ZUZldGNoZXIsXG4gICAgZGlzcG9zZSxcbiAgICBnZXRCbG9ja2VyLFxuICAgIGRlbGV0ZUJsb2NrZXIsXG4gICAgX2ludGVybmFsRmV0Y2hDb250cm9sbGVyczogZmV0Y2hDb250cm9sbGVycyxcbiAgICBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcyxcbiAgICAvLyBUT0RPOiBSZW1vdmUgc2V0Um91dGVzLCBpdCdzIHRlbXBvcmFyeSB0byBhdm9pZCBkZWFsaW5nIHdpdGhcbiAgICAvLyB1cGRhdGluZyB0aGUgdHJlZSB3aGlsZSB2YWxpZGF0aW5nIHRoZSB1cGRhdGUgYWxnb3JpdGhtLlxuICAgIF9pbnRlcm5hbFNldFJvdXRlc1xuICB9O1xuICByZXR1cm4gcm91dGVyO1xufVxuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVN0YXRpY0hhbmRsZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jb25zdCBVTlNBRkVfREVGRVJSRURfU1lNQk9MID0gU3ltYm9sKFwiZGVmZXJyZWRcIik7XG5mdW5jdGlvbiBjcmVhdGVTdGF0aWNIYW5kbGVyKHJvdXRlcywgb3B0cykge1xuICBpbnZhcmlhbnQocm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlU3RhdGljSGFuZGxlclwiKTtcbiAgbGV0IG1hbmlmZXN0ID0ge307XG4gIGxldCBiYXNlbmFtZSA9IChvcHRzID8gb3B0cy5iYXNlbmFtZSA6IG51bGwpIHx8IFwiL1wiO1xuICBsZXQgbWFwUm91dGVQcm9wZXJ0aWVzO1xuICBpZiAob3B0cyAhPSBudWxsICYmIG9wdHMubWFwUm91dGVQcm9wZXJ0aWVzKSB7XG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzID0gb3B0cy5tYXBSb3V0ZVByb3BlcnRpZXM7XG4gIH0gZWxzZSBpZiAob3B0cyAhPSBudWxsICYmIG9wdHMuZGV0ZWN0RXJyb3JCb3VuZGFyeSkge1xuICAgIC8vIElmIHRoZXkgYXJlIHN0aWxsIHVzaW5nIHRoZSBkZXByZWNhdGVkIHZlcnNpb24sIHdyYXAgaXQgd2l0aCB0aGUgbmV3IEFQSVxuICAgIGxldCBkZXRlY3RFcnJvckJvdW5kYXJ5ID0gb3B0cy5kZXRlY3RFcnJvckJvdW5kYXJ5O1xuICAgIG1hcFJvdXRlUHJvcGVydGllcyA9IHJvdXRlID0+ICh7XG4gICAgICBoYXNFcnJvckJvdW5kYXJ5OiBkZXRlY3RFcnJvckJvdW5kYXJ5KHJvdXRlKVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1hcFJvdXRlUHJvcGVydGllcyA9IGRlZmF1bHRNYXBSb3V0ZVByb3BlcnRpZXM7XG4gIH1cbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcywgbWFwUm91dGVQcm9wZXJ0aWVzLCB1bmRlZmluZWQsIG1hbmlmZXN0KTtcbiAgLyoqXG4gICAqIFRoZSBxdWVyeSgpIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgZG9jdW1lbnQgcmVxdWVzdHMsIGluIHdoaWNoIHdlIHdhbnQgdG9cbiAgICogY2FsbCBhbiBvcHRpb25hbCBhY3Rpb24gYW5kIHBvdGVudGlhbGx5IG11bHRpcGxlIGxvYWRlcnMgZm9yIGFsbCBuZXN0ZWRcbiAgICogcm91dGVzLiAgSXQgcmV0dXJucyBhIFN0YXRpY0hhbmRsZXJDb250ZXh0IG9iamVjdCwgd2hpY2ggaXMgdmVyeSBzaW1pbGFyXG4gICAqIHRvIHRoZSByb3V0ZXIgc3RhdGUgKGxvY2F0aW9uLCBsb2FkZXJEYXRhLCBhY3Rpb25EYXRhLCBlcnJvcnMsIGV0Yy4pIGFuZFxuICAgKiBhbHNvIGFkZHMgU1NSLXNwZWNpZmljIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIHN0YXR1c0NvZGUgYW5kIGhlYWRlcnNcbiAgICogZnJvbSBhY3Rpb24vbG9hZGVycyBSZXNwb25zZXMuXG4gICAqXG4gICAqIEl0IF9zaG91bGRfIG5ldmVyIHRocm93IGFuZCBzaG91bGQgcmVwb3J0IGFsbCBlcnJvcnMgdGhyb3VnaCB0aGVcbiAgICogcmV0dXJuZWQgY29udGV4dC5lcnJvcnMgb2JqZWN0LCBwcm9wZXJseSBhc3NvY2lhdGluZyBlcnJvcnMgdG8gdGhlaXIgZXJyb3JcbiAgICogYm91bmRhcnkuICBBZGRpdGlvbmFsbHksIGl0IHRyYWNrcyBfZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB3aGljaCBjYW4gYmVcbiAgICogdXNlZCB0byBlbXVsYXRlIFJlYWN0IGVycm9yIGJvdW5kYXJpZXMgZHVyaW5nIFNTciBieSBwZXJmb3JtaW5nIGEgc2Vjb25kXG4gICAqIHBhc3Mgb25seSBkb3duIHRvIHRoZSBib3VuZGFyeUlkLlxuICAgKlxuICAgKiBUaGUgb25lIGV4Y2VwdGlvbiB3aGVyZSB3ZSBkbyBub3QgcmV0dXJuIGEgU3RhdGljSGFuZGxlckNvbnRleHQgaXMgd2hlbiBhXG4gICAqIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJldHVybmVkIG9yIHRocm93biBmcm9tIGFueSBhY3Rpb24vbG9hZGVyLiAgV2VcbiAgICogcHJvcGFnYXRlIHRoYXQgb3V0IGFuZCByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBzbyB0aGUgSFRUUCBzZXJ2ZXIgY2FuXG4gICAqIHJldHVybiBpdCBkaXJlY3RseS5cbiAgICovXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHJlcXVlc3QsIF90ZW1wMikge1xuICAgIGxldCB7XG4gICAgICByZXF1ZXN0Q29udGV4dFxuICAgIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBsZXQgbWV0aG9kID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpO1xuICAgIC8vIFNTUiBzdXBwb3J0cyBIRUFEIHJlcXVlc3RzIHdoaWxlIFNQQSBkb2Vzbid0XG4gICAgaWYgKCFpc1ZhbGlkTWV0aG9kKG1ldGhvZCkgJiYgbWV0aG9kICE9PSBcIkhFQURcIikge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcbiAgICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBXaGVuIHJldHVybmluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCwgd2UgcGF0Y2ggYmFjayBpbiB0aGUgbG9jYXRpb24gaGVyZVxuICAgIC8vIHNpbmNlIHdlIG5lZWQgaXQgZm9yIFJlYWN0IENvbnRleHQuICBCdXQgdGhpcyBoZWxwcyBrZWVwIG91ciBzdWJtaXQgYW5kXG4gICAgLy8gbG9hZFJvdXRlRGF0YSBvcGVyYXRpbmcgb24gYSBSZXF1ZXN0IGluc3RlYWQgb2YgYSBMb2NhdGlvblxuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGJhc2VuYW1lXG4gICAgfSwgcmVzdWx0KTtcbiAgfVxuICAvKipcbiAgICogVGhlIHF1ZXJ5Um91dGUoKSBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIHRhcmdldGVkIHJvdXRlIHJlcXVlc3RzLCBlaXRoZXJcbiAgICogZm9yIGZldGNoID9fZGF0YSByZXF1ZXN0cyBvciByZXNvdXJjZSByb3V0ZSByZXF1ZXN0cy4gIEluIHRoaXMgY2FzZSwgd2VcbiAgICogYXJlIG9ubHkgZXZlciBjYWxsaW5nIGEgc2luZ2xlIGFjdGlvbiBvciBsb2FkZXIsIGFuZCB3ZSBhcmUgcmV0dXJuaW5nIHRoZVxuICAgKiByZXR1cm5lZCB2YWx1ZSBkaXJlY3RseS4gIEluIG1vc3QgY2FzZXMsIHRoaXMgd2lsbCBiZSBhIFJlc3BvbnNlIHJldHVybmVkXG4gICAqIGZyb20gdGhlIGFjdGlvbi9sb2FkZXIsIGJ1dCBpdCBtYXkgYmUgYSBwcmltaXRpdmUgb3Igb3RoZXIgdmFsdWUgYXMgd2VsbCAtXG4gICAqIGFuZCBpbiBzdWNoIGNhc2VzIHRoZSBjYWxsaW5nIGNvbnRleHQgc2hvdWxkIGhhbmRsZSB0aGF0IGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBXZSBkbyByZXNwZWN0IHRoZSB0aHJvdy9yZXR1cm4gZGlmZmVyZW50aWF0aW9uLCBzbyBpZiBhbiBhY3Rpb24vbG9hZGVyXG4gICAqIHRocm93cywgdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHRocm93IHRoZSB2YWx1ZS4gIFRoaXMgaXMgaW1wb3J0YW50IHNvIHdlXG4gICAqIGNhbiBkbyBwcm9wZXIgYm91bmRhcnkgaWRlbnRpZmljYXRpb24gaW4gUmVtaXggd2hlcmUgYSB0aHJvd24gUmVzcG9uc2VcbiAgICogbXVzdCBnbyB0byB0aGUgQ2F0Y2ggQm91bmRhcnkgYnV0IGEgcmV0dXJuZWQgUmVzcG9uc2UgaXMgaGFwcHktcGF0aC5cbiAgICpcbiAgICogT25lIHRoaW5nIHRvIG5vdGUgaXMgdGhhdCBhbnkgUm91dGVyLWluaXRpYXRlZCBFcnJvcnMgdGhhdCBtYWtlIHNlbnNlXG4gICAqIHRvIGFzc29jaWF0ZSB3aXRoIGEgc3RhdHVzIGNvZGUgd2lsbCBiZSB0aHJvd24gYXMgYW4gRXJyb3JSZXNwb25zZVxuICAgKiBpbnN0YW5jZSB3aGljaCBpbmNsdWRlIHRoZSByYXcgRXJyb3IsIHN1Y2ggdGhhdCB0aGUgY2FsbGluZyBjb250ZXh0IGNhblxuICAgKiBzZXJpYWxpemUgdGhlIGVycm9yIGFzIHRoZXkgc2VlIGZpdCB3aGlsZSBpbmNsdWRpbmcgdGhlIHByb3BlciByZXNwb25zZVxuICAgKiBjb2RlLiAgRXhhbXBsZXMgaGVyZSBhcmUgNDA0IGFuZCA0MDUgZXJyb3JzIHRoYXQgb2NjdXIgcHJpb3IgdG8gcmVhY2hpbmdcbiAgICogYW55IHVzZXItZGVmaW5lZCBsb2FkZXJzLlxuICAgKi9cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnlSb3V0ZShyZXF1ZXN0LCBfdGVtcDMpIHtcbiAgICBsZXQge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHJlcXVlc3RDb250ZXh0XG4gICAgfSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDM7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7XG4gICAgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiSEVBRFwiICYmIG1ldGhvZCAhPT0gXCJPUFRJT05TXCIpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IG1hdGNoID0gcm91dGVJZCA/IG1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpIDogZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuICAgIGlmIChyb3V0ZUlkICYmICFtYXRjaCkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDMsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaCkge1xuICAgICAgLy8gVGhpcyBzaG91bGQgbmV2ZXIgaGl0IEkgZG9uJ3QgdGhpbms/XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgbWF0Y2gpO1xuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGxldCBlcnJvciA9IHJlc3VsdC5lcnJvcnMgPyBPYmplY3QudmFsdWVzKHJlc3VsdC5lcnJvcnMpWzBdIDogdW5kZWZpbmVkO1xuICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB3ZSBnb3QgYmFjayByZXN1bHQuZXJyb3JzLCB0aGF0IG1lYW5zIHRoZSBsb2FkZXIvYWN0aW9uIHRocmV3XG4gICAgICAvLyBfc29tZXRoaW5nXyB0aGF0IHdhc24ndCBhIFJlc3BvbnNlLCBidXQgaXQncyBub3QgZ3VhcmFudGVlZC9yZXF1aXJlZFxuICAgICAgLy8gdG8gYmUgYW4gYGluc3RhbmNlb2YgRXJyb3JgIGVpdGhlciwgc28gd2UgaGF2ZSB0byB1c2UgdGhyb3cgaGVyZSB0b1xuICAgICAgLy8gcHJlc2VydmUgdGhlIFwiZXJyb3JcIiBzdGF0ZSBvdXRzaWRlIG9mIHF1ZXJ5SW1wbC5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICAvLyBQaWNrIG9mZiB0aGUgcmlnaHQgc3RhdGUgdmFsdWUgdG8gcmV0dXJuXG4gICAgaWYgKHJlc3VsdC5hY3Rpb25EYXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQuYWN0aW9uRGF0YSlbMF07XG4gICAgfVxuICAgIGlmIChyZXN1bHQubG9hZGVyRGF0YSkge1xuICAgICAgdmFyIF9yZXN1bHQkYWN0aXZlRGVmZXJyZTtcbiAgICAgIGxldCBkYXRhID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQubG9hZGVyRGF0YSlbMF07XG4gICAgICBpZiAoKF9yZXN1bHQkYWN0aXZlRGVmZXJyZSA9IHJlc3VsdC5hY3RpdmVEZWZlcnJlZHMpICE9IG51bGwgJiYgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlW21hdGNoLnJvdXRlLmlkXSkge1xuICAgICAgICBkYXRhW1VOU0FGRV9ERUZFUlJFRF9TWU1CT0xdID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBhc3luYyBmdW5jdGlvbiBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKSB7XG4gICAgaW52YXJpYW50KHJlcXVlc3Quc2lnbmFsLCBcInF1ZXJ5KCkvcXVlcnlSb3V0ZSgpIHJlcXVlc3RzIG11c3QgY29udGFpbiBhbiBBYm9ydENvbnRyb2xsZXIgc2lnbmFsXCIpO1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNNdXRhdGlvbk1ldGhvZChyZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIHJvdXRlTWF0Y2ggfHwgZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCAhPSBudWxsKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKTtcbiAgICAgIHJldHVybiBpc1Jlc3BvbnNlKHJlc3VsdCkgPyByZXN1bHQgOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB0aHJldy9yZXR1cm5lZCBhIFJlc3BvbnNlIGluIGNhbGxMb2FkZXJPckFjdGlvbiwgd2UgdGhyb3dcbiAgICAgIC8vIGl0IHRvIGJhaWwgb3V0IGFuZCB0aGVuIHJldHVybiBvciB0aHJvdyBoZXJlIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVzZXJcbiAgICAgIC8vIHJldHVybmVkIG9yIHRocmV3XG4gICAgICBpZiAoaXNRdWVyeVJvdXRlUmVzcG9uc2UoZSkpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgICAgICAgIHRocm93IGUucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUucmVzcG9uc2U7XG4gICAgICB9XG4gICAgICAvLyBSZWRpcmVjdHMgYXJlIGFsd2F5cyByZXR1cm5lZCBzaW5jZSB0aGV5IGRvbid0IHByb3BhZ2F0ZSB0byBjYXRjaFxuICAgICAgLy8gYm91bmRhcmllc1xuICAgICAgaWYgKGlzUmVkaXJlY3RSZXNwb25zZShlKSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH1cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChyZXF1ZXN0LCBtYXRjaGVzLCBhY3Rpb25NYXRjaCwgcmVxdWVzdENvbnRleHQsIGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbiAmJiAhYWN0aW9uTWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgcmVxdWVzdCwgYWN0aW9uTWF0Y2gsIG1hdGNoZXMsIG1hbmlmZXN0LCBtYXBSb3V0ZVByb3BlcnRpZXMsIGJhc2VuYW1lLCB7XG4gICAgICAgIGlzU3RhdGljUmVxdWVzdDogdHJ1ZSxcbiAgICAgICAgaXNSb3V0ZVJlcXVlc3QsXG4gICAgICAgIHJlcXVlc3RDb250ZXh0XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWQ6IFwiICsgcmVxdWVzdC5tZXRob2QgKyBcIiBcIiArIHJlcXVlc3QudXJsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gVWhoaGggLSB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIHNob3VsZCBhbHdheXMgdGhyb3cgdGhlc2UgZnJvbVxuICAgICAgLy8gY2FsbExvYWRlck9yQWN0aW9uLCBidXQgdGhlIHR5cGUgbmFycm93aW5nIGhlcmUga2VlcHMgVFMgaGFwcHkgYW5kIHdlXG4gICAgICAvLyBjYW4gZ2V0IGJhY2sgb24gdGhlIFwidGhyb3cgYWxsIHJlZGlyZWN0IHJlc3BvbnNlc1wiIHRyYWluIGhlcmUgc2hvdWxkXG4gICAgICAvLyB0aGlzIGV2ZXIgaGFwcGVuIDovXG4gICAgICB0aHJvdyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBMb2NhdGlvbjogcmVzdWx0LmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgLy8gTm90ZTogVGhpcyBzaG91bGQgb25seSBiZSBub24tUmVzcG9uc2UgdmFsdWVzIGlmIHdlIGdldCBoZXJlLCBzaW5jZVxuICAgICAgLy8gaXNSb3V0ZVJlcXVlc3Qgc2hvdWxkIHRocm93IGFueSBSZXNwb25zZSByZWNlaXZlZCBpbiBjYWxsTG9hZGVyT3JBY3Rpb25cbiAgICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlczogW2FjdGlvbk1hdGNoXSxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZGF0YVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgIC8vIE5vdGU6IHN0YXR1c0NvZGUgKyBoZWFkZXJzIGFyZSB1bnVzZWQgaGVyZSBzaW5jZSBxdWVyeVJvdXRlIHdpbGxcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByYXcgUmVzcG9uc2Ugb3IgdmFsdWVcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCB1bmRlZmluZWQsIHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgIH0pO1xuICAgICAgLy8gYWN0aW9uIHN0YXR1cyBjb2RlcyB0YWtlIHByZWNlZGVuY2Ugb3ZlciBsb2FkZXIgc3RhdHVzIGNvZGVzXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgICAgc3RhdHVzQ29kZTogaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSA/IHJlc3VsdC5lcnJvci5zdGF0dXMgOiA1MDAsXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IF9leHRlbmRzKHt9LCByZXN1bHQuaGVhZGVycyA/IHtcbiAgICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVyc1xuICAgICAgICB9IDoge30pXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSBsb2FkZXJzXG4gICAgbGV0IGxvYWRlclJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3QucmVkaXJlY3QsXG4gICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgfSk7XG4gICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKGxvYWRlclJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHJlc3VsdC5zdGF0dXNDb2RlID8ge1xuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGVcbiAgICB9IDoge30sIHtcbiAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH0sXG4gICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9IDoge30pXG4gICAgfSk7XG4gIH1cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCwgcGVuZGluZ0FjdGlvbkVycm9yKSB7XG4gICAgbGV0IGlzUm91dGVSZXF1ZXN0ID0gcm91dGVNYXRjaCAhPSBudWxsO1xuICAgIC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnlSb3V0ZSgpKVxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCAmJiAhKHJvdXRlTWF0Y2ggIT0gbnVsbCAmJiByb3V0ZU1hdGNoLnJvdXRlLmxvYWRlcikgJiYgIShyb3V0ZU1hdGNoICE9IG51bGwgJiYgcm91dGVNYXRjaC5yb3V0ZS5sYXp5KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiByb3V0ZU1hdGNoID09IG51bGwgPyB2b2lkIDAgOiByb3V0ZU1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHJlcXVlc3RNYXRjaGVzID0gcm91dGVNYXRjaCA/IFtyb3V0ZU1hdGNoXSA6IGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIE9iamVjdC5rZXlzKHBlbmRpbmdBY3Rpb25FcnJvciB8fCB7fSlbMF0pO1xuICAgIGxldCBtYXRjaGVzVG9Mb2FkID0gcmVxdWVzdE1hdGNoZXMuZmlsdGVyKG0gPT4gbS5yb3V0ZS5sb2FkZXIgfHwgbS5yb3V0ZS5sYXp5KTtcbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5KCkpXG4gICAgaWYgKG1hdGNoZXNUb0xvYWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzLFxuICAgICAgICAvLyBBZGQgYSBudWxsIGZvciBhbGwgbWF0Y2hlZCByb3V0ZXMgZm9yIHByb3BlciByZXZhbGlkYXRpb24gb24gdGhlIGNsaWVudFxuICAgICAgICBsb2FkZXJEYXRhOiBtYXRjaGVzLnJlZHVjZSgoYWNjLCBtKSA9PiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICAgIFttLnJvdXRlLmlkXTogbnVsbFxuICAgICAgICB9KSwge30pLFxuICAgICAgICBlcnJvcnM6IHBlbmRpbmdBY3Rpb25FcnJvciB8fCBudWxsLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcywgYmFzZW5hbWUsIHtcbiAgICAgIGlzU3RhdGljUmVxdWVzdDogdHJ1ZSxcbiAgICAgIGlzUm91dGVSZXF1ZXN0LFxuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9KSldKTtcbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbGV0IG1ldGhvZCA9IGlzUm91dGVSZXF1ZXN0ID8gXCJxdWVyeVJvdXRlXCIgOiBcInF1ZXJ5XCI7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWQ6IFwiICsgcmVxdWVzdC5tZXRob2QgKyBcIiBcIiArIHJlcXVlc3QudXJsKTtcbiAgICB9XG4gICAgLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcbiAgICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpO1xuICAgIGxldCBjb250ZXh0ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nQWN0aW9uRXJyb3IsIGFjdGl2ZURlZmVycmVkcyk7XG4gICAgLy8gQWRkIGEgbnVsbCBmb3IgYW55IG5vbi1sb2FkZXIgbWF0Y2hlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG4gICAgbGV0IGV4ZWN1dGVkTG9hZGVycyA9IG5ldyBTZXQobWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gbWF0Y2gucm91dGUuaWQpKTtcbiAgICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgaWYgKCFleGVjdXRlZExvYWRlcnMuaGFzKG1hdGNoLnJvdXRlLmlkKSkge1xuICAgICAgICBjb250ZXh0LmxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBhY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcy5zaXplID4gMCA/IE9iamVjdC5mcm9tRW50cmllcyhhY3RpdmVEZWZlcnJlZHMuZW50cmllcygpKSA6IG51bGxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGFSb3V0ZXMsXG4gICAgcXVlcnksXG4gICAgcXVlcnlSb3V0ZVxuICB9O1xufVxuLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhlbHBlcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vKipcbiAqIEdpdmVuIGFuIGV4aXN0aW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0IGFuZCBhbiBlcnJvciB0aHJvd24gYXQgcmVuZGVyIHRpbWUsXG4gKiBwcm92aWRlIGFuIHVwZGF0ZWQgU3RhdGljSGFuZGxlckNvbnRleHQgc3VpdGFibGUgZm9yIGEgc2Vjb25kIFNTUiByZW5kZXJcbiAqL1xuZnVuY3Rpb24gZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcihyb3V0ZXMsIGNvbnRleHQsIGVycm9yKSB7XG4gIGxldCBuZXdDb250ZXh0ID0gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgZXJyb3JzOiB7XG4gICAgICBbY29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB8fCByb3V0ZXNbMF0uaWRdOiBlcnJvclxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdDb250ZXh0O1xufVxuZnVuY3Rpb24gaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSB7XG4gIHJldHVybiBvcHRzICE9IG51bGwgJiYgKFwiZm9ybURhdGFcIiBpbiBvcHRzICYmIG9wdHMuZm9ybURhdGEgIT0gbnVsbCB8fCBcImJvZHlcIiBpbiBvcHRzICYmIG9wdHMuYm9keSAhPT0gdW5kZWZpbmVkKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRvKGxvY2F0aW9uLCBtYXRjaGVzLCBiYXNlbmFtZSwgcHJlcGVuZEJhc2VuYW1lLCB0bywgZnJvbVJvdXRlSWQsIHJlbGF0aXZlKSB7XG4gIGxldCBjb250ZXh0dWFsTWF0Y2hlcztcbiAgbGV0IGFjdGl2ZVJvdXRlTWF0Y2g7XG4gIGlmIChmcm9tUm91dGVJZCAhPSBudWxsICYmIHJlbGF0aXZlICE9PSBcInBhdGhcIikge1xuICAgIC8vIEdyYWIgbWF0Y2hlcyB1cCB0byB0aGUgY2FsbGluZyByb3V0ZSBzbyBvdXIgcm91dGUtcmVsYXRpdmUgbG9naWMgaXNcbiAgICAvLyByZWxhdGl2ZSB0byB0aGUgY29ycmVjdCBzb3VyY2Ugcm91dGUuICBXaGVuIHVzaW5nIHJlbGF0aXZlOnBhdGgsXG4gICAgLy8gZnJvbVJvdXRlSWQgaXMgaWdub3JlZCBzaW5jZSB0aGF0IGlzIGFsd2F5cyByZWxhdGl2ZSB0byB0aGUgY3VycmVudFxuICAgIC8vIGxvY2F0aW9uIHBhdGhcbiAgICBjb250ZXh0dWFsTWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHR1YWxNYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgaWYgKG1hdGNoLnJvdXRlLmlkID09PSBmcm9tUm91dGVJZCkge1xuICAgICAgICBhY3RpdmVSb3V0ZU1hdGNoID0gbWF0Y2g7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb250ZXh0dWFsTWF0Y2hlcyA9IG1hdGNoZXM7XG4gICAgYWN0aXZlUm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgfVxuICAvLyBSZXNvbHZlIHRoZSByZWxhdGl2ZSBwYXRoXG4gIGxldCBwYXRoID0gcmVzb2x2ZVRvKHRvID8gdG8gOiBcIi5cIiwgZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMoY29udGV4dHVhbE1hdGNoZXMpLm1hcChtID0+IG0ucGF0aG5hbWVCYXNlKSwgc3RyaXBCYXNlbmFtZShsb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IGxvY2F0aW9uLnBhdGhuYW1lLCByZWxhdGl2ZSA9PT0gXCJwYXRoXCIpO1xuICAvLyBXaGVuIGB0b2AgaXMgbm90IHNwZWNpZmllZCB3ZSBpbmhlcml0IHNlYXJjaC9oYXNoIGZyb20gdGhlIGN1cnJlbnRcbiAgLy8gbG9jYXRpb24sIHVubGlrZSB3aGVuIHRvPVwiLlwiIGFuZCB3ZSBqdXN0IGluaGVyaXQgdGhlIHBhdGguXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4L2lzc3Vlcy85MjdcbiAgaWYgKHRvID09IG51bGwpIHtcbiAgICBwYXRoLnNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICBwYXRoLmhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICB9XG4gIC8vIEFkZCBhbiA/aW5kZXggcGFyYW0gZm9yIG1hdGNoZWQgaW5kZXggcm91dGVzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBvbmVcbiAgaWYgKCh0byA9PSBudWxsIHx8IHRvID09PSBcIlwiIHx8IHRvID09PSBcIi5cIikgJiYgYWN0aXZlUm91dGVNYXRjaCAmJiBhY3RpdmVSb3V0ZU1hdGNoLnJvdXRlLmluZGV4ICYmICFoYXNOYWtlZEluZGV4UXVlcnkocGF0aC5zZWFyY2gpKSB7XG4gICAgcGF0aC5zZWFyY2ggPSBwYXRoLnNlYXJjaCA/IHBhdGguc2VhcmNoLnJlcGxhY2UoL15cXD8vLCBcIj9pbmRleCZcIikgOiBcIj9pbmRleFwiO1xuICB9XG4gIC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUuICBJZlxuICAvLyB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzXG4gIC8vIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZSBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoXG4gIC8vIG9uIHJvb3QgYWN0aW9uc1xuICBpZiAocHJlcGVuZEJhc2VuYW1lICYmIGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG4gIHJldHVybiBjcmVhdGVQYXRoKHBhdGgpO1xufVxuLy8gTm9ybWFsaXplIG5hdmlnYXRpb24gb3B0aW9ucyBieSBjb252ZXJ0aW5nIGZvcm1NZXRob2Q9R0VUIGZvcm1EYXRhIG9iamVjdHMgdG9cbi8vIFVSTFNlYXJjaFBhcmFtcyBzbyB0aGV5IGJlaGF2ZSBpZGVudGljYWxseSB0byBsaW5rcyB3aXRoIHF1ZXJ5IHBhcmFtc1xuZnVuY3Rpb24gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKG5vcm1hbGl6ZUZvcm1NZXRob2QsIGlzRmV0Y2hlciwgcGF0aCwgb3B0cykge1xuICAvLyBSZXR1cm4gbG9jYXRpb24gdmVyYmF0aW0gb24gbm9uLXN1Ym1pc3Npb24gbmF2aWdhdGlvbnNcbiAgaWYgKCFvcHRzIHx8ICFpc1N1Ym1pc3Npb25OYXZpZ2F0aW9uKG9wdHMpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG4gIGlmIChvcHRzLmZvcm1NZXRob2QgJiYgIWlzVmFsaWRNZXRob2Qob3B0cy5mb3JtTWV0aG9kKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoLFxuICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogb3B0cy5mb3JtTWV0aG9kXG4gICAgICB9KVxuICAgIH07XG4gIH1cbiAgbGV0IGdldEludmFsaWRCb2R5RXJyb3IgPSAoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICB0eXBlOiBcImludmFsaWQtYm9keVwiXG4gICAgfSlcbiAgfSk7XG4gIC8vIENyZWF0ZSBhIFN1Ym1pc3Npb24gb24gbm9uLUdFVCBuYXZpZ2F0aW9uc1xuICBsZXQgcmF3Rm9ybU1ldGhvZCA9IG9wdHMuZm9ybU1ldGhvZCB8fCBcImdldFwiO1xuICBsZXQgZm9ybU1ldGhvZCA9IG5vcm1hbGl6ZUZvcm1NZXRob2QgPyByYXdGb3JtTWV0aG9kLnRvVXBwZXJDYXNlKCkgOiByYXdGb3JtTWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIGxldCBmb3JtQWN0aW9uID0gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCk7XG4gIGlmIChvcHRzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChvcHRzLmZvcm1FbmNUeXBlID09PSBcInRleHQvcGxhaW5cIikge1xuICAgICAgLy8gdGV4dCBvbmx5IHN1cHBvcnQgUE9TVC9QVVQvUEFUQ0gvREVMRVRFIHN1Ym1pc3Npb25zXG4gICAgICBpZiAoIWlzTXV0YXRpb25NZXRob2QoZm9ybU1ldGhvZCkpIHtcbiAgICAgICAgcmV0dXJuIGdldEludmFsaWRCb2R5RXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIGxldCB0ZXh0ID0gdHlwZW9mIG9wdHMuYm9keSA9PT0gXCJzdHJpbmdcIiA/IG9wdHMuYm9keSA6IG9wdHMuYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhIHx8IG9wdHMuYm9keSBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyA/XG4gICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNwbGFpbi10ZXh0LWZvcm0tZGF0YVxuICAgICAgQXJyYXkuZnJvbShvcHRzLmJvZHkuZW50cmllcygpKS5yZWR1Y2UoKGFjYywgX3JlZjMpID0+IHtcbiAgICAgICAgbGV0IFtuYW1lLCB2YWx1ZV0gPSBfcmVmMztcbiAgICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIFwiXFxuXCI7XG4gICAgICB9LCBcIlwiKSA6IFN0cmluZyhvcHRzLmJvZHkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3VibWlzc2lvbjoge1xuICAgICAgICAgIGZvcm1NZXRob2QsXG4gICAgICAgICAgZm9ybUFjdGlvbixcbiAgICAgICAgICBmb3JtRW5jVHlwZTogb3B0cy5mb3JtRW5jVHlwZSxcbiAgICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgICAgICB0ZXh0XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChvcHRzLmZvcm1FbmNUeXBlID09PSBcImFwcGxpY2F0aW9uL2pzb25cIikge1xuICAgICAgLy8ganNvbiBvbmx5IHN1cHBvcnRzIFBPU1QvUFVUL1BBVENIL0RFTEVURSBzdWJtaXNzaW9uc1xuICAgICAgaWYgKCFpc011dGF0aW9uTWV0aG9kKGZvcm1NZXRob2QpKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnZhbGlkQm9keUVycm9yKCk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICBsZXQganNvbiA9IHR5cGVvZiBvcHRzLmJvZHkgPT09IFwic3RyaW5nXCIgPyBKU09OLnBhcnNlKG9wdHMuYm9keSkgOiBvcHRzLmJvZHk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzdWJtaXNzaW9uOiB7XG4gICAgICAgICAgICBmb3JtTWV0aG9kLFxuICAgICAgICAgICAgZm9ybUFjdGlvbixcbiAgICAgICAgICAgIGZvcm1FbmNUeXBlOiBvcHRzLmZvcm1FbmNUeXBlLFxuICAgICAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGpzb24sXG4gICAgICAgICAgICB0ZXh0OiB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnZhbGlkQm9keUVycm9yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGludmFyaWFudCh0eXBlb2YgRm9ybURhdGEgPT09IFwiZnVuY3Rpb25cIiwgXCJGb3JtRGF0YSBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgZW52aXJvbm1lbnRcIik7XG4gIGxldCBzZWFyY2hQYXJhbXM7XG4gIGxldCBmb3JtRGF0YTtcbiAgaWYgKG9wdHMuZm9ybURhdGEpIHtcbiAgICBzZWFyY2hQYXJhbXMgPSBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhvcHRzLmZvcm1EYXRhKTtcbiAgICBmb3JtRGF0YSA9IG9wdHMuZm9ybURhdGE7XG4gIH0gZWxzZSBpZiAob3B0cy5ib2R5IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICBzZWFyY2hQYXJhbXMgPSBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhvcHRzLmJvZHkpO1xuICAgIGZvcm1EYXRhID0gb3B0cy5ib2R5O1xuICB9IGVsc2UgaWYgKG9wdHMuYm9keSBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcykge1xuICAgIHNlYXJjaFBhcmFtcyA9IG9wdHMuYm9keTtcbiAgICBmb3JtRGF0YSA9IGNvbnZlcnRTZWFyY2hQYXJhbXNUb0Zvcm1EYXRhKHNlYXJjaFBhcmFtcyk7XG4gIH0gZWxzZSBpZiAob3B0cy5ib2R5ID09IG51bGwpIHtcbiAgICBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhvcHRzLmJvZHkpO1xuICAgICAgZm9ybURhdGEgPSBjb252ZXJ0U2VhcmNoUGFyYW1zVG9Gb3JtRGF0YShzZWFyY2hQYXJhbXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBnZXRJbnZhbGlkQm9keUVycm9yKCk7XG4gICAgfVxuICB9XG4gIGxldCBzdWJtaXNzaW9uID0ge1xuICAgIGZvcm1NZXRob2QsXG4gICAgZm9ybUFjdGlvbixcbiAgICBmb3JtRW5jVHlwZTogb3B0cyAmJiBvcHRzLmZvcm1FbmNUeXBlIHx8IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgZm9ybURhdGEsXG4gICAganNvbjogdW5kZWZpbmVkLFxuICAgIHRleHQ6IHVuZGVmaW5lZFxuICB9O1xuICBpZiAoaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBzdWJtaXNzaW9uXG4gICAgfTtcbiAgfVxuICAvLyBGbGF0dGVuIHN1Ym1pc3Npb24gb250byBVUkxTZWFyY2hQYXJhbXMgZm9yIEdFVCBzdWJtaXNzaW9uc1xuICBsZXQgcGFyc2VkUGF0aCA9IHBhcnNlUGF0aChwYXRoKTtcbiAgLy8gT24gR0VUIG5hdmlnYXRpb24gc3VibWlzc2lvbnMgd2UgY2FuIGRyb3AgdGhlID9pbmRleCBwYXJhbSBmcm9tIHRoZVxuICAvLyByZXN1bHRpbmcgbG9jYXRpb24gc2luY2UgYWxsIGxvYWRlcnMgd2lsbCBydW4uICBCdXQgZmV0Y2hlciBHRVQgc3VibWlzc2lvbnNcbiAgLy8gb25seSBydW4gYSBzaW5nbGUgbG9hZGVyIHNvIHdlIG5lZWQgdG8gcHJlc2VydmUgYW55IGluY29taW5nID9pbmRleCBwYXJhbXNcbiAgaWYgKGlzRmV0Y2hlciAmJiBwYXJzZWRQYXRoLnNlYXJjaCAmJiBoYXNOYWtlZEluZGV4UXVlcnkocGFyc2VkUGF0aC5zZWFyY2gpKSB7XG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChcImluZGV4XCIsIFwiXCIpO1xuICB9XG4gIHBhcnNlZFBhdGguc2VhcmNoID0gXCI/XCIgKyBzZWFyY2hQYXJhbXM7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY3JlYXRlUGF0aChwYXJzZWRQYXRoKSxcbiAgICBzdWJtaXNzaW9uXG4gIH07XG59XG4vLyBGaWx0ZXIgb3V0IGFsbCByb3V0ZXMgYmVsb3cgYW55IGNhdWdodCBlcnJvciBhcyB0aGV5IGFyZW4ndCBnb2luZyB0b1xuLy8gcmVuZGVyIHNvIHdlIGRvbid0IG5lZWQgdG8gbG9hZCB0aGVtXG5mdW5jdGlvbiBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKSB7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBtYXRjaGVzO1xuICBpZiAoYm91bmRhcnlJZCkge1xuICAgIGxldCBpbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gYm91bmRhcnlJZCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIGJvdW5kYXJ5TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRhcnlNYXRjaGVzO1xufVxuZnVuY3Rpb24gZ2V0TWF0Y2hlc1RvTG9hZChoaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIGZldGNoTG9hZE1hdGNoZXMsIGZldGNoUmVkaXJlY3RJZHMsIHJvdXRlc1RvVXNlLCBiYXNlbmFtZSwgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvcikge1xuICBsZXQgYWN0aW9uUmVzdWx0ID0gcGVuZGluZ0Vycm9yID8gT2JqZWN0LnZhbHVlcyhwZW5kaW5nRXJyb3IpWzBdIDogcGVuZGluZ0FjdGlvbkRhdGEgPyBPYmplY3QudmFsdWVzKHBlbmRpbmdBY3Rpb25EYXRhKVswXSA6IHVuZGVmaW5lZDtcbiAgbGV0IGN1cnJlbnRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdGF0ZS5sb2NhdGlvbik7XG4gIGxldCBuZXh0VXJsID0gaGlzdG9yeS5jcmVhdGVVUkwobG9jYXRpb24pO1xuICAvLyBQaWNrIG5hdmlnYXRpb24gbWF0Y2hlcyB0aGF0IGFyZSBuZXQtbmV3IG9yIHF1YWxpZnkgZm9yIHJldmFsaWRhdGlvblxuICBsZXQgYm91bmRhcnlJZCA9IHBlbmRpbmdFcnJvciA/IE9iamVjdC5rZXlzKHBlbmRpbmdFcnJvcilbMF0gOiB1bmRlZmluZWQ7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKTtcbiAgbGV0IG5hdmlnYXRpb25NYXRjaGVzID0gYm91bmRhcnlNYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgaWYgKG1hdGNoLnJvdXRlLmxhenkpIHtcbiAgICAgIC8vIFdlIGhhdmVuJ3QgbG9hZGVkIHRoaXMgcm91dGUgeWV0IHNvIHdlIGRvbid0IGtub3cgaWYgaXQncyBnb3QgYSBsb2FkZXIhXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG1hdGNoLnJvdXRlLmxvYWRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEFsd2F5cyBjYWxsIHRoZSBsb2FkZXIgb24gbmV3IHJvdXRlIGluc3RhbmNlcyBhbmQgcGVuZGluZyBkZWZlciBjYW5jZWxsYXRpb25zXG4gICAgaWYgKGlzTmV3TG9hZGVyKHN0YXRlLmxvYWRlckRhdGEsIHN0YXRlLm1hdGNoZXNbaW5kZXhdLCBtYXRjaCkgfHwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMuc29tZShpZCA9PiBpZCA9PT0gbWF0Y2gucm91dGUuaWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igd2hlbiB3ZSByZXZhbGlkYXRlLiAgSWYgdGhlIHJvdXRlXG4gICAgLy8gcHJvdmlkZXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24sIHRoZW4gd2UgZ2l2ZSB0aGVtIGZ1bGwgY29udHJvbCBidXRcbiAgICAvLyBwcm92aWRlIHRoaXMgdmFsdWUgc28gdGhleSBjYW4gbGV2ZXJhZ2UgaXQgaWYgbmVlZGVkIGFmdGVyIHRoZXkgY2hlY2tcbiAgICAvLyB0aGVpciBvd24gc3BlY2lmaWMgdXNlIGNhc2VzXG4gICAgbGV0IGN1cnJlbnRSb3V0ZU1hdGNoID0gc3RhdGUubWF0Y2hlc1tpbmRleF07XG4gICAgbGV0IG5leHRSb3V0ZU1hdGNoID0gbWF0Y2g7XG4gICAgcmV0dXJuIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgIGN1cnJlbnRVcmwsXG4gICAgICBjdXJyZW50UGFyYW1zOiBjdXJyZW50Um91dGVNYXRjaC5wYXJhbXMsXG4gICAgICBuZXh0VXJsLFxuICAgICAgbmV4dFBhcmFtczogbmV4dFJvdXRlTWF0Y2gucGFyYW1zXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgYWN0aW9uUmVzdWx0LFxuICAgICAgZGVmYXVsdFNob3VsZFJldmFsaWRhdGU6XG4gICAgICAvLyBGb3JjZWQgcmV2YWxpZGF0aW9uIGR1ZSB0byBzdWJtaXNzaW9uLCB1c2VSZXZhbGlkYXRvciwgb3IgWC1SZW1peC1SZXZhbGlkYXRlXG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHx8XG4gICAgICAvLyBDbGlja2VkIHRoZSBzYW1lIGxpbmssIHJlc3VibWl0dGVkIGEgR0VUIGZvcm1cbiAgICAgIGN1cnJlbnRVcmwucGF0aG5hbWUgKyBjdXJyZW50VXJsLnNlYXJjaCA9PT0gbmV4dFVybC5wYXRobmFtZSArIG5leHRVcmwuc2VhcmNoIHx8XG4gICAgICAvLyBTZWFyY2ggcGFyYW1zIGFmZmVjdCBhbGwgbG9hZGVyc1xuICAgICAgY3VycmVudFVybC5zZWFyY2ggIT09IG5leHRVcmwuc2VhcmNoIHx8IGlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50Um91dGVNYXRjaCwgbmV4dFJvdXRlTWF0Y2gpXG4gICAgfSkpO1xuICB9KTtcbiAgLy8gUGljayBmZXRjaGVyLmxvYWRzIHRoYXQgbmVlZCB0byBiZSByZXZhbGlkYXRlZFxuICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgPSBbXTtcbiAgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChmLCBrZXkpID0+IHtcbiAgICAvLyBEb24ndCByZXZhbGlkYXRlIGlmIGZldGNoZXIgd29uJ3QgYmUgcHJlc2VudCBpbiB0aGUgc3Vic2VxdWVudCByZW5kZXJcbiAgICBpZiAoIW1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IGYucm91dGVJZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGZldGNoZXJNYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzVG9Vc2UsIGYucGF0aCwgYmFzZW5hbWUpO1xuICAgIC8vIElmIHRoZSBmZXRjaGVyIHBhdGggbm8gbG9uZ2VyIG1hdGNoZXMsIHB1c2ggaXQgaW4gd2l0aCBudWxsIG1hdGNoZXMgc29cbiAgICAvLyB3ZSBjYW4gdHJpZ2dlciBhIDQwNCBpbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEuICBOb3RlIHRoaXMgaXNcbiAgICAvLyBjdXJyZW50bHkgb25seSBhIHVzZS1jYXNlIGZvciBSZW1peCBITVIgd2hlcmUgdGhlIHJvdXRlIHRyZWUgY2FuIGNoYW5nZVxuICAgIC8vIGF0IHJ1bnRpbWUgYW5kIHJlbW92ZSBhIHJvdXRlIHByZXZpb3VzbHkgbG9hZGVkIHZpYSBhIGZldGNoZXJcbiAgICBpZiAoIWZldGNoZXJNYXRjaGVzKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICByb3V0ZUlkOiBmLnJvdXRlSWQsXG4gICAgICAgIHBhdGg6IGYucGF0aCxcbiAgICAgICAgbWF0Y2hlczogbnVsbCxcbiAgICAgICAgbWF0Y2g6IG51bGwsXG4gICAgICAgIGNvbnRyb2xsZXI6IG51bGxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZXZhbGlkYXRpbmcgZmV0Y2hlcnMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSByb3V0ZSBtYXRjaGVzIHNpbmNlIHRoZXlcbiAgICAvLyBsb2FkIGZyb20gYSBzdGF0aWMgaHJlZi4gIFRoZXkgcmV2YWxpZGF0ZSBiYXNlZCBvbiBleHBsaWNpdCByZXZhbGlkYXRpb25cbiAgICAvLyAoc3VibWlzc2lvbiwgdXNlUmV2YWxpZGF0b3IsIG9yIFgtUmVtaXgtUmV2YWxpZGF0ZSlcbiAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgIGxldCBmZXRjaGVyTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChmZXRjaGVyTWF0Y2hlcywgZi5wYXRoKTtcbiAgICBsZXQgc2hvdWxkUmV2YWxpZGF0ZSA9IGZhbHNlO1xuICAgIGlmIChmZXRjaFJlZGlyZWN0SWRzLmhhcyhrZXkpKSB7XG4gICAgICAvLyBOZXZlciB0cmlnZ2VyIGEgcmV2YWxpZGF0aW9uIG9mIGFuIGFjdGl2ZWx5IHJlZGlyZWN0aW5nIGZldGNoZXJcbiAgICAgIHNob3VsZFJldmFsaWRhdGUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAvLyBBbHdheXMgcmV2YWxpZGF0ZSBpZiB0aGUgZmV0Y2hlciB3YXMgY2FuY2VsbGVkXG4gICAgICBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGZldGNoZXIgJiYgZmV0Y2hlci5zdGF0ZSAhPT0gXCJpZGxlXCIgJiYgZmV0Y2hlci5kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIElmIHRoZSBmZXRjaGVyIGhhc24ndCBldmVyIGNvbXBsZXRlZCBsb2FkaW5nIHlldCwgdGhlbiB0aGlzIGlzbid0IGFcbiAgICAgIC8vIHJldmFsaWRhdGlvbiwgaXQgd291bGQganVzdCBiZSBhIGJyYW5kIG5ldyBsb2FkIGlmIGFuIGV4cGxpY2l0XG4gICAgICAvLyByZXZhbGlkYXRpb24gaXMgcmVxdWlyZWRcbiAgICAgIHNob3VsZFJldmFsaWRhdGUgPSBpc1JldmFsaWRhdGlvblJlcXVpcmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UgZmFsbCBiYWNrIG9uIGFueSB1c2VyLWRlZmluZWQgc2hvdWxkUmV2YWxpZGF0ZSwgZGVmYXVsdGluZ1xuICAgICAgLy8gdG8gZXhwbGljaXQgcmV2YWxpZGF0aW9ucyBvbmx5XG4gICAgICBzaG91bGRSZXZhbGlkYXRlID0gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihmZXRjaGVyTWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgICAgY3VycmVudFVybCxcbiAgICAgICAgY3VycmVudFBhcmFtczogc3RhdGUubWF0Y2hlc1tzdGF0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtcyxcbiAgICAgICAgbmV4dFVybCxcbiAgICAgICAgbmV4dFBhcmFtczogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtc1xuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBpc1JldmFsaWRhdGlvblJlcXVpcmVkXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChzaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICByb3V0ZUlkOiBmLnJvdXRlSWQsXG4gICAgICAgIHBhdGg6IGYucGF0aCxcbiAgICAgICAgbWF0Y2hlczogZmV0Y2hlck1hdGNoZXMsXG4gICAgICAgIG1hdGNoOiBmZXRjaGVyTWF0Y2gsXG4gICAgICAgIGNvbnRyb2xsZXI6IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtuYXZpZ2F0aW9uTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdO1xufVxuZnVuY3Rpb24gaXNOZXdMb2FkZXIoY3VycmVudExvYWRlckRhdGEsIGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGlzTmV3ID1cbiAgLy8gW2FdIC0+IFthLCBiXVxuICAhY3VycmVudE1hdGNoIHx8XG4gIC8vIFthLCBiXSAtPiBbYSwgY11cbiAgbWF0Y2gucm91dGUuaWQgIT09IGN1cnJlbnRNYXRjaC5yb3V0ZS5pZDtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBkYXRhIGZvciBhIHJlLXVzZWQgcm91dGUsIHBvdGVudGlhbGx5XG4gIC8vIGZyb20gYSBwcmlvciBlcnJvciBvciBmcm9tIGEgY2FuY2VsbGVkIHBlbmRpbmcgZGVmZXJyZWRcbiAgbGV0IGlzTWlzc2luZ0RhdGEgPSBjdXJyZW50TG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0gPT09IHVuZGVmaW5lZDtcbiAgLy8gQWx3YXlzIGxvYWQgaWYgdGhpcyBpcyBhIG5ldC1uZXcgcm91dGUgb3Igd2UgZG9uJ3QgeWV0IGhhdmUgZGF0YVxuICByZXR1cm4gaXNOZXcgfHwgaXNNaXNzaW5nRGF0YTtcbn1cbmZ1bmN0aW9uIGlzTmV3Um91dGVJbnN0YW5jZShjdXJyZW50TWF0Y2gsIG1hdGNoKSB7XG4gIGxldCBjdXJyZW50UGF0aCA9IGN1cnJlbnRNYXRjaC5yb3V0ZS5wYXRoO1xuICByZXR1cm4gKFxuICAgIC8vIHBhcmFtIGNoYW5nZSBmb3IgdGhpcyBtYXRjaCwgL3VzZXJzLzEyMyAtPiAvdXNlcnMvNDU2XG4gICAgY3VycmVudE1hdGNoLnBhdGhuYW1lICE9PSBtYXRjaC5wYXRobmFtZSB8fFxuICAgIC8vIHNwbGF0IHBhcmFtIGNoYW5nZWQsIHdoaWNoIGlzIG5vdCBwcmVzZW50IGluIG1hdGNoLnBhdGhcbiAgICAvLyBlLmcuIC9maWxlcy9pbWFnZXMvYXZhdGFyLmpwZyAtPiBmaWxlcy9maW5hbmNlcy54bHNcbiAgICBjdXJyZW50UGF0aCAhPSBudWxsICYmIGN1cnJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBjdXJyZW50TWF0Y2gucGFyYW1zW1wiKlwiXSAhPT0gbWF0Y2gucGFyYW1zW1wiKlwiXVxuICApO1xufVxuZnVuY3Rpb24gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihsb2FkZXJNYXRjaCwgYXJnKSB7XG4gIGlmIChsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgbGV0IHJvdXRlQ2hvaWNlID0gbG9hZGVyTWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZShhcmcpO1xuICAgIGlmICh0eXBlb2Ygcm91dGVDaG9pY2UgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gcm91dGVDaG9pY2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmcuZGVmYXVsdFNob3VsZFJldmFsaWRhdGU7XG59XG4vKipcbiAqIEV4ZWN1dGUgcm91dGUubGF6eSgpIG1ldGhvZHMgdG8gbGF6aWx5IGxvYWQgcm91dGUgbW9kdWxlcyAobG9hZGVyLCBhY3Rpb24sXG4gKiBzaG91bGRSZXZhbGlkYXRlKSBhbmQgdXBkYXRlIHRoZSByb3V0ZU1hbmlmZXN0IGluIHBsYWNlIHdoaWNoIHNoYXJlcyBvYmplY3RzXG4gKiB3aXRoIGRhdGFSb3V0ZXMgc28gdGhvc2UgZ2V0IHVwZGF0ZWQgYXMgd2VsbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZExhenlSb3V0ZU1vZHVsZShyb3V0ZSwgbWFwUm91dGVQcm9wZXJ0aWVzLCBtYW5pZmVzdCkge1xuICBpZiAoIXJvdXRlLmxhenkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGxhenlSb3V0ZSA9IGF3YWl0IHJvdXRlLmxhenkoKTtcbiAgLy8gSWYgdGhlIGxhenkgcm91dGUgZnVuY3Rpb24gd2FzIGV4ZWN1dGVkIGFuZCByZW1vdmVkIGJ5IGFub3RoZXIgcGFyYWxsZWxcbiAgLy8gY2FsbCB0aGVuIHdlIGNhbiByZXR1cm4gLSBmaXJzdCBsYXp5KCkgdG8gZmluaXNoIHdpbnMgYmVjYXVzZSB0aGUgcmV0dXJuXG4gIC8vIHZhbHVlIG9mIGxhenkgaXMgZXhwZWN0ZWQgdG8gYmUgc3RhdGljXG4gIGlmICghcm91dGUubGF6eSkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgcm91dGVUb1VwZGF0ZSA9IG1hbmlmZXN0W3JvdXRlLmlkXTtcbiAgaW52YXJpYW50KHJvdXRlVG9VcGRhdGUsIFwiTm8gcm91dGUgZm91bmQgaW4gbWFuaWZlc3RcIik7XG4gIC8vIFVwZGF0ZSB0aGUgcm91dGUgaW4gcGxhY2UuICBUaGlzIHNob3VsZCBiZSBzYWZlIGJlY2F1c2UgdGhlcmUncyBubyB3YXlcbiAgLy8gd2UgY291bGQgeWV0IGJlIHNpdHRpbmcgb24gdGhpcyByb3V0ZSBhcyB3ZSBjYW4ndCBnZXQgdGhlcmUgd2l0aG91dFxuICAvLyByZXNvbHZpbmcgbGF6eSgpIGZpcnN0LlxuICAvL1xuICAvLyBUaGlzIGlzIGRpZmZlcmVudCB0aGFuIHRoZSBITVIgXCJ1cGRhdGVcIiB1c2UtY2FzZSB3aGVyZSB3ZSBtYXkgYWN0aXZlbHkgYmVcbiAgLy8gb24gdGhlIHJvdXRlIGJlaW5nIHVwZGF0ZWQuICBUaGUgbWFpbiBjb25jZXJuIGJvaWxzIGRvd24gdG8gXCJkb2VzIHRoaXNcbiAgLy8gbXV0YXRpb24gYWZmZWN0IGFueSBvbmdvaW5nIG5hdmlnYXRpb25zIG9yIGFueSBjdXJyZW50IHN0YXRlLm1hdGNoZXNcbiAgLy8gdmFsdWVzP1wiLiAgSWYgbm90LCBpdCBzaG91bGQgYmUgc2FmZSB0byB1cGRhdGUgaW4gcGxhY2UuXG4gIGxldCByb3V0ZVVwZGF0ZXMgPSB7fTtcbiAgZm9yIChsZXQgbGF6eVJvdXRlUHJvcGVydHkgaW4gbGF6eVJvdXRlKSB7XG4gICAgbGV0IHN0YXRpY1JvdXRlVmFsdWUgPSByb3V0ZVRvVXBkYXRlW2xhenlSb3V0ZVByb3BlcnR5XTtcbiAgICBsZXQgaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkID0gc3RhdGljUm91dGVWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBpc24ndCBzdGF0aWMgc2luY2UgaXQgc2hvdWxkIGFsd2F5cyBiZSB1cGRhdGVkIGJhc2VkXG4gICAgLy8gb24gdGhlIHJvdXRlIHVwZGF0ZXNcbiAgICBsYXp5Um91dGVQcm9wZXJ0eSAhPT0gXCJoYXNFcnJvckJvdW5kYXJ5XCI7XG4gICAgd2FybmluZyghaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkLCBcIlJvdXRlIFxcXCJcIiArIHJvdXRlVG9VcGRhdGUuaWQgKyBcIlxcXCIgaGFzIGEgc3RhdGljIHByb3BlcnR5IFxcXCJcIiArIGxhenlSb3V0ZVByb3BlcnR5ICsgXCJcXFwiIFwiICsgXCJkZWZpbmVkIGJ1dCBpdHMgbGF6eSBmdW5jdGlvbiBpcyBhbHNvIHJldHVybmluZyBhIHZhbHVlIGZvciB0aGlzIHByb3BlcnR5LiBcIiArIChcIlRoZSBsYXp5IHJvdXRlIHByb3BlcnR5IFxcXCJcIiArIGxhenlSb3V0ZVByb3BlcnR5ICsgXCJcXFwiIHdpbGwgYmUgaWdub3JlZC5cIikpO1xuICAgIGlmICghaXNQcm9wZXJ0eVN0YXRpY2FsbHlEZWZpbmVkICYmICFpbW11dGFibGVSb3V0ZUtleXMuaGFzKGxhenlSb3V0ZVByb3BlcnR5KSkge1xuICAgICAgcm91dGVVcGRhdGVzW2xhenlSb3V0ZVByb3BlcnR5XSA9IGxhenlSb3V0ZVtsYXp5Um91dGVQcm9wZXJ0eV07XG4gICAgfVxuICB9XG4gIC8vIE11dGF0ZSB0aGUgcm91dGUgd2l0aCB0aGUgcHJvdmlkZWQgdXBkYXRlcy4gIERvIHRoaXMgZmlyc3Qgc28gd2UgcGFzc1xuICAvLyB0aGUgdXBkYXRlZCB2ZXJzaW9uIHRvIG1hcFJvdXRlUHJvcGVydGllc1xuICBPYmplY3QuYXNzaWduKHJvdXRlVG9VcGRhdGUsIHJvdXRlVXBkYXRlcyk7XG4gIC8vIE11dGF0ZSB0aGUgYGhhc0Vycm9yQm91bmRhcnlgIHByb3BlcnR5IG9uIHRoZSByb3V0ZSBiYXNlZCBvbiB0aGUgcm91dGVcbiAgLy8gdXBkYXRlcyBhbmQgcmVtb3ZlIHRoZSBgbGF6eWAgZnVuY3Rpb24gc28gd2UgZG9uJ3QgcmVzb2x2ZSB0aGUgbGF6eVxuICAvLyByb3V0ZSBhZ2Fpbi5cbiAgT2JqZWN0LmFzc2lnbihyb3V0ZVRvVXBkYXRlLCBfZXh0ZW5kcyh7fSwgbWFwUm91dGVQcm9wZXJ0aWVzKHJvdXRlVG9VcGRhdGUpLCB7XG4gICAgbGF6eTogdW5kZWZpbmVkXG4gIH0pKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNhbGxMb2FkZXJPckFjdGlvbih0eXBlLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgbWFuaWZlc3QsIG1hcFJvdXRlUHJvcGVydGllcywgYmFzZW5hbWUsIG9wdHMpIHtcbiAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgIG9wdHMgPSB7fTtcbiAgfVxuICBsZXQgcmVzdWx0VHlwZTtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IG9uUmVqZWN0O1xuICBsZXQgcnVuSGFuZGxlciA9IGhhbmRsZXIgPT4ge1xuICAgIC8vIFNldHVwIGEgcHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHNvIHRoYXQgYWJvcnQgc2lnbmFscyBzaG9ydCBjaXJjdWl0XG4gICAgbGV0IHJlamVjdDtcbiAgICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuICAgIG9uUmVqZWN0ID0gKCkgPT4gcmVqZWN0KCk7XG4gICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uUmVqZWN0KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yYWNlKFtoYW5kbGVyKHtcbiAgICAgIHJlcXVlc3QsXG4gICAgICBwYXJhbXM6IG1hdGNoLnBhcmFtcyxcbiAgICAgIGNvbnRleHQ6IG9wdHMucmVxdWVzdENvbnRleHRcbiAgICB9KSwgYWJvcnRQcm9taXNlXSk7XG4gIH07XG4gIHRyeSB7XG4gICAgbGV0IGhhbmRsZXIgPSBtYXRjaC5yb3V0ZVt0eXBlXTtcbiAgICBpZiAobWF0Y2gucm91dGUubGF6eSkge1xuICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgLy8gUnVuIHN0YXRpY2FsbHkgZGVmaW5lZCBoYW5kbGVyIGluIHBhcmFsbGVsIHdpdGggbGF6eSgpXG4gICAgICAgIGxldCBoYW5kbGVyRXJyb3I7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIC8vIElmIHRoZSBoYW5kbGVyIHRocm93cywgZG9uJ3QgbGV0IGl0IGltbWVkaWF0ZWx5IGJ1YmJsZSBvdXQsXG4gICAgICAgIC8vIHNpbmNlIHdlIG5lZWQgdG8gbGV0IHRoZSBsYXp5KCkgZXhlY3V0aW9uIGZpbmlzaCBzbyB3ZSBrbm93IGlmIHRoaXNcbiAgICAgICAgLy8gcm91dGUgaGFzIGEgYm91bmRhcnkgdGhhdCBjYW4gaGFuZGxlIHRoZSBlcnJvclxuICAgICAgICBydW5IYW5kbGVyKGhhbmRsZXIpLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIGhhbmRsZXJFcnJvciA9IGU7XG4gICAgICAgIH0pLCBsb2FkTGF6eVJvdXRlTW9kdWxlKG1hdGNoLnJvdXRlLCBtYXBSb3V0ZVByb3BlcnRpZXMsIG1hbmlmZXN0KV0pO1xuICAgICAgICBpZiAoaGFuZGxlckVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgaGFuZGxlckVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IHZhbHVlc1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvYWQgbGF6eSByb3V0ZSBtb2R1bGUsIHRoZW4gcnVuIGFueSByZXR1cm5lZCBoYW5kbGVyXG4gICAgICAgIGF3YWl0IGxvYWRMYXp5Um91dGVNb2R1bGUobWF0Y2gucm91dGUsIG1hcFJvdXRlUHJvcGVydGllcywgbWFuaWZlc3QpO1xuICAgICAgICBoYW5kbGVyID0gbWF0Y2gucm91dGVbdHlwZV07XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgLy8gSGFuZGxlciBzdGlsbCBydW4gZXZlbiBpZiB3ZSBnb3QgaW50ZXJydXB0ZWQgdG8gbWFpbnRhaW4gY29uc2lzdGVuY3lcbiAgICAgICAgICAvLyB3aXRoIHVuLWFib3J0YWJsZSBiZWhhdmlvciBvZiBoYW5kbGVyIGV4ZWN1dGlvbiBvbiBub24tbGF6eSBvclxuICAgICAgICAgIC8vIHByZXZpb3VzbHktbGF6eS1sb2FkZWQgcm91dGVzXG4gICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcnVuSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICAgIGxldCBwYXRobmFtZSA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHJvdXRlSWQ6IG1hdGNoLnJvdXRlLmlkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbGF6eSgpIHJvdXRlIGhhcyBubyBsb2FkZXIgdG8gcnVuLiAgU2hvcnQgY2lyY3VpdCBoZXJlIHNvIHdlIGRvbid0XG4gICAgICAgICAgLy8gaGl0IHRoZSBpbnZhcmlhbnQgYmVsb3cgdGhhdCBlcnJvcnMgb24gcmV0dXJuaW5nIHVuZGVmaW5lZC5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgIGxldCBwYXRobmFtZSA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2g7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHJ1bkhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGludmFyaWFudChyZXN1bHQgIT09IHVuZGVmaW5lZCwgXCJZb3UgZGVmaW5lZCBcIiArICh0eXBlID09PSBcImFjdGlvblwiID8gXCJhbiBhY3Rpb25cIiA6IFwiYSBsb2FkZXJcIikgKyBcIiBmb3Igcm91dGUgXCIgKyAoXCJcXFwiXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXFxcIiBidXQgZGlkbid0IHJldHVybiBhbnl0aGluZyBmcm9tIHlvdXIgYFwiICsgdHlwZSArIFwiYCBcIikgKyBcImZ1bmN0aW9uLiBQbGVhc2UgcmV0dXJuIGEgdmFsdWUgb3IgYG51bGxgLlwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlc3VsdFR5cGUgPSBSZXN1bHRUeXBlLmVycm9yO1xuICAgIHJlc3VsdCA9IGU7XG4gIH0gZmluYWxseSB7XG4gICAgaWYgKG9uUmVqZWN0KSB7XG4gICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICAgIH1cbiAgfVxuICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gICAgLy8gUHJvY2VzcyByZWRpcmVjdHNcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNDb2Rlcy5oYXMoc3RhdHVzKSkge1xuICAgICAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gICAgICBpbnZhcmlhbnQobG9jYXRpb24sIFwiUmVkaXJlY3RzIHJldHVybmVkL3Rocm93biBmcm9tIGxvYWRlcnMvYWN0aW9ucyBtdXN0IGhhdmUgYSBMb2NhdGlvbiBoZWFkZXJcIik7XG4gICAgICAvLyBTdXBwb3J0IHJlbGF0aXZlIHJvdXRpbmcgaW4gaW50ZXJuYWwgcmVkaXJlY3RzXG4gICAgICBpZiAoIUFCU09MVVRFX1VSTF9SRUdFWC50ZXN0KGxvY2F0aW9uKSkge1xuICAgICAgICBsb2NhdGlvbiA9IG5vcm1hbGl6ZVRvKG5ldyBVUkwocmVxdWVzdC51cmwpLCBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxKSwgYmFzZW5hbWUsIHRydWUsIGxvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wdHMuaXNTdGF0aWNSZXF1ZXN0KSB7XG4gICAgICAgIC8vIFN0cmlwIG9mZiB0aGUgcHJvdG9jb2wrb3JpZ2luIGZvciBzYW1lLW9yaWdpbiArIHNhbWUtYmFzZW5hbWUgYWJzb2x1dGVcbiAgICAgICAgLy8gcmVkaXJlY3RzLiBJZiB0aGlzIGlzIGEgc3RhdGljIHJlcXVlc3QsIHdlIGNhbiBsZXQgaXQgZ28gYmFjayB0byB0aGVcbiAgICAgICAgLy8gYnJvd3NlciBhcy1pc1xuICAgICAgICBsZXQgY3VycmVudFVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgbG9jYXRpb24pIDogbmV3IFVSTChsb2NhdGlvbik7XG4gICAgICAgIGxldCBpc1NhbWVCYXNlbmFtZSA9IHN0cmlwQmFzZW5hbWUodXJsLnBhdGhuYW1lLCBiYXNlbmFtZSkgIT0gbnVsbDtcbiAgICAgICAgaWYgKHVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIGlzU2FtZUJhc2VuYW1lKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoICsgdXJsLmhhc2g7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIERvbid0IHByb2Nlc3MgcmVkaXJlY3RzIGluIHRoZSByb3V0ZXIgZHVyaW5nIHN0YXRpYyByZXF1ZXN0cyByZXF1ZXN0cy5cbiAgICAgIC8vIEluc3RlYWQsIHRocm93IHRoZSBSZXNwb25zZSBhbmQgbGV0IHRoZSBzZXJ2ZXIgaGFuZGxlIGl0IHdpdGggYW4gSFRUUFxuICAgICAgLy8gcmVkaXJlY3QuICBXZSBhbHNvIHVwZGF0ZSB0aGUgTG9jYXRpb24gaGVhZGVyIGluIHBsYWNlIGluIHRoaXMgZmxvdyBzb1xuICAgICAgLy8gYmFzZW5hbWUgYW5kIHJlbGF0aXZlIHJvdXRpbmcgaXMgdGFrZW4gaW50byBhY2NvdW50XG4gICAgICBpZiAob3B0cy5pc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgcmVzdWx0LmhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgbG9jYXRpb24pO1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLnJlZGlyZWN0LFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICByZXZhbGlkYXRlOiByZXN1bHQuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVJldmFsaWRhdGVcIikgIT09IG51bGwsXG4gICAgICAgIHJlbG9hZERvY3VtZW50OiByZXN1bHQuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVJlbG9hZC1Eb2N1bWVudFwiKSAhPT0gbnVsbFxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gRm9yIFNTUiBzaW5nbGUtcm91dGUgcmVxdWVzdHMsIHdlIHdhbnQgdG8gaGFuZCBSZXNwb25zZXMgYmFjayBkaXJlY3RseVxuICAgIC8vIHdpdGhvdXQgdW53cmFwcGluZy4gIFdlIGRvIHRoaXMgd2l0aCB0aGUgUXVlcnlSb3V0ZVJlc3BvbnNlIHdyYXBwZXJcbiAgICAvLyBpbnRlcmZhY2Ugc28gd2UgY2FuIGtub3cgd2hldGhlciBpdCB3YXMgcmV0dXJuZWQgb3IgdGhyb3duXG4gICAgaWYgKG9wdHMuaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIGxldCBxdWVyeVJvdXRlUmVzcG9uc2UgPSB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IgPyBSZXN1bHRUeXBlLmVycm9yIDogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICByZXNwb25zZTogcmVzdWx0XG4gICAgICB9O1xuICAgICAgdGhyb3cgcXVlcnlSb3V0ZVJlc3BvbnNlO1xuICAgIH1cbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGVudFR5cGUgPSByZXN1bHQuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XG4gICAgLy8gQ2hlY2sgYmV0d2VlbiB3b3JkIGJvdW5kYXJpZXMgaW5zdGVhZCBvZiBzdGFydHNXaXRoKCkgZHVlIHRvIHRoZSBsYXN0XG4gICAgLy8gcGFyYWdyYXBoIG9mIGh0dHBzOi8vaHR0cHdnLm9yZy9zcGVjcy9yZmM5MTEwLmh0bWwjZmllbGQuY29udGVudC10eXBlXG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIC9cXGJhcHBsaWNhdGlvblxcL2pzb25cXGIvLnRlc3QoY29udGVudFR5cGUpKSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3VsdC50ZXh0KCk7XG4gICAgfVxuICAgIGlmIChyZXN1bHRUeXBlID09PSBSZXN1bHRUeXBlLmVycm9yKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiByZXN1bHRUeXBlLFxuICAgICAgICBlcnJvcjogbmV3IEVycm9yUmVzcG9uc2VJbXBsKHN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQsIGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgIGRhdGEsXG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzLFxuICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICB9O1xuICB9XG4gIGlmIChyZXN1bHRUeXBlID09PSBSZXN1bHRUeXBlLmVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHJlc3VsdFR5cGUsXG4gICAgICBlcnJvcjogcmVzdWx0XG4gICAgfTtcbiAgfVxuICBpZiAoaXNEZWZlcnJlZERhdGEocmVzdWx0KSkge1xuICAgIHZhciBfcmVzdWx0JGluaXQsIF9yZXN1bHQkaW5pdDI7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGVmZXJyZWQsXG4gICAgICBkZWZlcnJlZERhdGE6IHJlc3VsdCxcbiAgICAgIHN0YXR1c0NvZGU6IChfcmVzdWx0JGluaXQgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdC5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiAoKF9yZXN1bHQkaW5pdDIgPSByZXN1bHQuaW5pdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZXN1bHQkaW5pdDIuaGVhZGVycykgJiYgbmV3IEhlYWRlcnMocmVzdWx0LmluaXQuaGVhZGVycylcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgIGRhdGE6IHJlc3VsdFxuICB9O1xufVxuLy8gVXRpbGl0eSBtZXRob2QgZm9yIGNyZWF0aW5nIHRoZSBSZXF1ZXN0IGluc3RhbmNlcyBmb3IgbG9hZGVycy9hY3Rpb25zIGR1cmluZ1xuLy8gY2xpZW50LXNpZGUgbmF2aWdhdGlvbnMgYW5kIGZldGNoZXMuICBEdXJpbmcgU1NSIHdlIHdpbGwgYWx3YXlzIGhhdmUgYVxuLy8gUmVxdWVzdCBpbnN0YW5jZSBmcm9tIHRoZSBzdGF0aWMgaGFuZGxlciAocXVlcnkvcXVlcnlSb3V0ZSlcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGhpc3RvcnksIGxvY2F0aW9uLCBzaWduYWwsIHN1Ym1pc3Npb24pIHtcbiAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0cmlwSGFzaEZyb21QYXRoKGxvY2F0aW9uKSkudG9TdHJpbmcoKTtcbiAgbGV0IGluaXQgPSB7XG4gICAgc2lnbmFsXG4gIH07XG4gIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGVcbiAgICB9ID0gc3VibWlzc2lvbjtcbiAgICAvLyBEaWRuJ3QgdGhpbmsgd2UgbmVlZGVkIHRoaXMgYnV0IGl0IHR1cm5zIG91dCB1bmxpa2Ugb3RoZXIgbWV0aG9kcywgcGF0Y2hcbiAgICAvLyB3b24ndCBiZSBwcm9wZXJseSBub3JtYWxpemVkIHRvIHVwcGVyY2FzZSBhbmQgcmVzdWx0cyBpbiBhIDQwNSBlcnJvci5cbiAgICAvLyBTZWU6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LW1ldGhvZFxuICAgIGluaXQubWV0aG9kID0gZm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIGlmIChmb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi9qc29uXCIpIHtcbiAgICAgIGluaXQuaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogZm9ybUVuY1R5cGVcbiAgICAgIH0pO1xuICAgICAgaW5pdC5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoc3VibWlzc2lvbi5qc29uKTtcbiAgICB9IGVsc2UgaWYgKGZvcm1FbmNUeXBlID09PSBcInRleHQvcGxhaW5cIikge1xuICAgICAgLy8gQ29udGVudC1UeXBlIGlzIGluZmVycmVkIChodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3QpXG4gICAgICBpbml0LmJvZHkgPSBzdWJtaXNzaW9uLnRleHQ7XG4gICAgfSBlbHNlIGlmIChmb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiAmJiBzdWJtaXNzaW9uLmZvcm1EYXRhKSB7XG4gICAgICAvLyBDb250ZW50LVR5cGUgaXMgaW5mZXJyZWQgKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdClcbiAgICAgIGluaXQuYm9keSA9IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKHN1Ym1pc3Npb24uZm9ybURhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250ZW50LVR5cGUgaXMgaW5mZXJyZWQgKGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNkb20tcmVxdWVzdClcbiAgICAgIGluaXQuYm9keSA9IHN1Ym1pc3Npb24uZm9ybURhdGE7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIGluaXQpO1xufVxuZnVuY3Rpb24gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMoZm9ybURhdGEpIHtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2NvbnZlcnRpbmctYW4tZW50cnktbGlzdC10by1hLWxpc3Qtb2YtbmFtZS12YWx1ZS1wYWlyc1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6IHZhbHVlLm5hbWUpO1xuICB9XG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBjb252ZXJ0U2VhcmNoUGFyYW1zVG9Gb3JtRGF0YShzZWFyY2hQYXJhbXMpIHtcbiAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBzZWFyY2hQYXJhbXMuZW50cmllcygpKSB7XG4gICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBmb3JtRGF0YTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCBhY3RpdmVEZWZlcnJlZHMpIHtcbiAgLy8gRmlsbCBpbiBsb2FkZXJEYXRhL2Vycm9ycyBmcm9tIG91ciBsb2FkZXJzXG4gIGxldCBsb2FkZXJEYXRhID0ge307XG4gIGxldCBlcnJvcnMgPSBudWxsO1xuICBsZXQgc3RhdHVzQ29kZTtcbiAgbGV0IGZvdW5kRXJyb3IgPSBmYWxzZTtcbiAgbGV0IGxvYWRlckhlYWRlcnMgPSB7fTtcbiAgLy8gUHJvY2VzcyBsb2FkZXIgcmVzdWx0cyBpbnRvIHN0YXRlLmxvYWRlckRhdGEvc3RhdGUuZXJyb3JzXG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGxldCBpZCA9IG1hdGNoZXNUb0xvYWRbaW5kZXhdLnJvdXRlLmlkO1xuICAgIGludmFyaWFudCghaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpLCBcIkNhbm5vdCBoYW5kbGUgcmVkaXJlY3QgcmVzdWx0cyBpbiBwcm9jZXNzTG9hZGVyRGF0YVwiKTtcbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBMb29rIHVwd2FyZHMgZnJvbSB0aGUgbWF0Y2hlZCByb3V0ZSBmb3IgdGhlIGNsb3Nlc3QgYW5jZXN0b3JcbiAgICAgIC8vIGVycm9yIGJvdW5kYXJ5LCBkZWZhdWx0aW5nIHRvIHRoZSByb290IG1hdGNoXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgaWQpO1xuICAgICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9yO1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmcgYWN0aW9uIGVycm9yLCB3ZSByZXBvcnQgaXQgYXQgdGhlIGhpZ2hlc3Qtcm91dGVcbiAgICAgIC8vIHRoYXQgdGhyb3dzIGEgbG9hZGVyIGVycm9yLCBhbmQgdGhlbiBjbGVhciBpdCBvdXQgdG8gaW5kaWNhdGUgdGhhdFxuICAgICAgLy8gaXQgd2FzIGNvbnN1bWVkXG4gICAgICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgICAgIGVycm9yID0gT2JqZWN0LnZhbHVlcyhwZW5kaW5nRXJyb3IpWzBdO1xuICAgICAgICBwZW5kaW5nRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBlcnJvcnMgPSBlcnJvcnMgfHwge307XG4gICAgICAvLyBQcmVmZXIgaGlnaGVyIGVycm9yIHZhbHVlcyBpZiBsb3dlciBlcnJvcnMgYnViYmxlIHRvIHRoZSBzYW1lIGJvdW5kYXJ5XG4gICAgICBpZiAoZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID09IG51bGwpIHtcbiAgICAgICAgZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID0gZXJyb3I7XG4gICAgICB9XG4gICAgICAvLyBDbGVhciBvdXIgYW55IHByaW9yIGxvYWRlckRhdGEgZm9yIHRoZSB0aHJvd2luZyByb3V0ZVxuICAgICAgbG9hZGVyRGF0YVtpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAvLyBPbmNlIHdlIGZpbmQgb3VyIGZpcnN0IChoaWdoZXN0KSBlcnJvciwgd2Ugc2V0IHRoZSBzdGF0dXMgY29kZSBhbmRcbiAgICAgIC8vIHByZXZlbnQgZGVlcGVyIHN0YXR1cyBjb2RlcyBmcm9tIG92ZXJyaWRpbmdcbiAgICAgIGlmICghZm91bmRFcnJvcikge1xuICAgICAgICBmb3VuZEVycm9yID0gdHJ1ZTtcbiAgICAgICAgc3RhdHVzQ29kZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLnNldChpZCwgcmVzdWx0LmRlZmVycmVkRGF0YSk7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGVyRGF0YVtpZF0gPSByZXN1bHQuZGF0YTtcbiAgICAgIH1cbiAgICAgIC8vIEVycm9yIHN0YXR1cyBjb2RlcyBhbHdheXMgb3ZlcnJpZGUgc3VjY2VzcyBzdGF0dXMgY29kZXMsIGJ1dCBpZiBhbGxcbiAgICAgIC8vIGxvYWRlcnMgYXJlIHN1Y2Nlc3NmdWwgd2UgdGFrZSB0aGUgZGVlcGVzdCBzdGF0dXMgY29kZS5cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSAhPSBudWxsICYmIHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDAgJiYgIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3VsdC5zdGF0dXNDb2RlO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy8gSWYgd2UgZGlkbid0IGNvbnN1bWUgdGhlIHBlbmRpbmcgYWN0aW9uIGVycm9yIChpLmUuLCBhbGwgbG9hZGVyc1xuICAvLyByZXNvbHZlZCksIHRoZW4gY29uc3VtZSBpdCBoZXJlLiAgQWxzbyBjbGVhciBvdXQgYW55IGxvYWRlckRhdGEgZm9yIHRoZVxuICAvLyB0aHJvd2luZyByb3V0ZVxuICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgZXJyb3JzID0gcGVuZGluZ0Vycm9yO1xuICAgIGxvYWRlckRhdGFbT2JqZWN0LmtleXMocGVuZGluZ0Vycm9yKVswXV0gPSB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9ycyxcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIHx8IDIwMCxcbiAgICBsb2FkZXJIZWFkZXJzXG4gIH07XG59XG5mdW5jdGlvbiBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcykge1xuICBsZXQge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH0gPSBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgYWN0aXZlRGVmZXJyZWRzKTtcbiAgLy8gUHJvY2VzcyByZXN1bHRzIGZyb20gb3VyIHJldmFsaWRhdGluZyBmZXRjaGVyc1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IHtcbiAgICAgIGtleSxcbiAgICAgIG1hdGNoLFxuICAgICAgY29udHJvbGxlclxuICAgIH0gPSByZXZhbGlkYXRpbmdGZXRjaGVyc1tpbmRleF07XG4gICAgaW52YXJpYW50KGZldGNoZXJSZXN1bHRzICE9PSB1bmRlZmluZWQgJiYgZmV0Y2hlclJlc3VsdHNbaW5kZXhdICE9PSB1bmRlZmluZWQsIFwiRGlkIG5vdCBmaW5kIGNvcnJlc3BvbmRpbmcgZmV0Y2hlciByZXN1bHRcIik7XG4gICAgbGV0IHJlc3VsdCA9IGZldGNoZXJSZXN1bHRzW2luZGV4XTtcbiAgICAvLyBQcm9jZXNzIGZldGNoZXIgbm9uLXJlZGlyZWN0IGVycm9yc1xuICAgIGlmIChjb250cm9sbGVyICYmIGNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIC8vIE5vdGhpbmcgdG8gZG8gZm9yIGFib3J0ZWQgZmV0Y2hlcnNcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgbWF0Y2ggPT0gbnVsbCA/IHZvaWQgMCA6IG1hdGNoLnJvdXRlLmlkKTtcbiAgICAgIGlmICghKGVycm9ycyAmJiBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0pKSB7XG4gICAgICAgIGVycm9ycyA9IF9leHRlbmRzKHt9LCBlcnJvcnMsIHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIHJlZGlyZWN0cyBzaG91bGQgZ2V0IHByb2Nlc3NlZCBhYm92ZSwgYnV0IHdlXG4gICAgICAvLyBrZWVwIHRoaXMgdG8gdHlwZSBuYXJyb3cgdG8gYSBzdWNjZXNzIHJlc3VsdCBpbiB0aGUgZWxzZVxuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIHJldmFsaWRhdGlvbiByZWRpcmVjdFwiKTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGdldCBoZXJlLCBkZWZlcnJlZCBkYXRhIHNob3VsZCBiZSBhd2FpdGVkIGZvciBmZXRjaGVyc1xuICAgICAgLy8gaW4gcmVzb2x2ZURlZmVycmVkUmVzdWx0c1xuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IGdldERvbmVGZXRjaGVyKHJlc3VsdC5kYXRhKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VMb2FkZXJEYXRhKGxvYWRlckRhdGEsIG5ld0xvYWRlckRhdGEsIG1hdGNoZXMsIGVycm9ycykge1xuICBsZXQgbWVyZ2VkTG9hZGVyRGF0YSA9IF9leHRlbmRzKHt9LCBuZXdMb2FkZXJEYXRhKTtcbiAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgIGxldCBpZCA9IG1hdGNoLnJvdXRlLmlkO1xuICAgIGlmIChuZXdMb2FkZXJEYXRhLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgaWYgKG5ld0xvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkTG9hZGVyRGF0YVtpZF0gPSBuZXdMb2FkZXJEYXRhW2lkXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQgJiYgbWF0Y2gucm91dGUubG9hZGVyKSB7XG4gICAgICAvLyBQcmVzZXJ2ZSBleGlzdGluZyBrZXlzIG5vdCBpbmNsdWRlZCBpbiBuZXdMb2FkZXJEYXRhIGFuZCB3aGVyZSBhIGxvYWRlclxuICAgICAgLy8gd2Fzbid0IHJlbW92ZWQgYnkgSE1SXG4gICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IGxvYWRlckRhdGFbaWRdO1xuICAgIH1cbiAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIC8vIERvbid0IGtlZXAgYW55IGxvYWRlciBkYXRhIGJlbG93IHRoZSBib3VuZGFyeVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtZXJnZWRMb2FkZXJEYXRhO1xufVxuLy8gRmluZCB0aGUgbmVhcmVzdCBlcnJvciBib3VuZGFyeSwgbG9va2luZyB1cHdhcmRzIGZyb20gdGhlIGxlYWYgcm91dGUgKG9yIHRoZVxuLy8gcm91dGUgc3BlY2lmaWVkIGJ5IHJvdXRlSWQpIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvciBlcnJvciBib3VuZGFyeSxcbi8vIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcbmZ1bmN0aW9uIGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgcm91dGVJZCkge1xuICBsZXQgZWxpZ2libGVNYXRjaGVzID0gcm91dGVJZCA/IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSArIDEpIDogWy4uLm1hdGNoZXNdO1xuICByZXR1cm4gZWxpZ2libGVNYXRjaGVzLnJldmVyc2UoKS5maW5kKG0gPT4gbS5yb3V0ZS5oYXNFcnJvckJvdW5kYXJ5ID09PSB0cnVlKSB8fCBtYXRjaGVzWzBdO1xufVxuZnVuY3Rpb24gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXMpIHtcbiAgLy8gUHJlZmVyIGEgcm9vdCBsYXlvdXQgcm91dGUgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIHNoaW0gaW4gYSByb3V0ZSBvYmplY3RcbiAgbGV0IHJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLmluZGV4IHx8ICFyLnBhdGggfHwgci5wYXRoID09PSBcIi9cIikgfHwge1xuICAgIGlkOiBcIl9fc2hpbS1lcnJvci1yb3V0ZV9fXCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBbe1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcGF0aG5hbWVCYXNlOiBcIlwiLFxuICAgICAgcm91dGVcbiAgICB9XSxcbiAgICByb3V0ZVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcihzdGF0dXMsIF90ZW1wNCkge1xuICBsZXQge1xuICAgIHBhdGhuYW1lLFxuICAgIHJvdXRlSWQsXG4gICAgbWV0aG9kLFxuICAgIHR5cGVcbiAgfSA9IF90ZW1wNCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDQ7XG4gIGxldCBzdGF0dXNUZXh0ID0gXCJVbmtub3duIFNlcnZlciBFcnJvclwiO1xuICBsZXQgZXJyb3JNZXNzYWdlID0gXCJVbmtub3duIEByZW1peC1ydW4vcm91dGVyIGVycm9yXCI7XG4gIGlmIChzdGF0dXMgPT09IDQwMCkge1xuICAgIHN0YXR1c1RleHQgPSBcIkJhZCBSZXF1ZXN0XCI7XG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhIGBsb2FkZXJgIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRlZmVyLWFjdGlvblwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImRlZmVyKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBhY3Rpb25zXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImludmFsaWQtYm9keVwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIlVuYWJsZSB0byBlbmNvZGUgc3VibWlzc2lvbiBib2R5XCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiRm9yYmlkZGVuXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiIGRvZXMgbm90IG1hdGNoIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTm90IEZvdW5kXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJObyByb3V0ZSBtYXRjaGVzIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA1KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCI7XG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QudG9VcHBlckNhc2UoKSArIFwiIHJlcXVlc3QgdG8gXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCIgYnV0IFwiICsgKFwiZGlkIG5vdCBwcm92aWRlIGFuIGBhY3Rpb25gIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmIChtZXRob2QpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiSW52YWxpZCByZXF1ZXN0IG1ldGhvZCBcXFwiXCIgKyBtZXRob2QudG9VcHBlckNhc2UoKSArIFwiXFxcIlwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmV3IEVycm9yUmVzcG9uc2VJbXBsKHN0YXR1cyB8fCA1MDAsIHN0YXR1c1RleHQsIG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpLCB0cnVlKTtcbn1cbi8vIEZpbmQgYW55IHJldHVybmVkIHJlZGlyZWN0IGVycm9ycywgc3RhcnRpbmcgZnJvbSB0aGUgbG93ZXN0IG1hdGNoXG5mdW5jdGlvbiBmaW5kUmVkaXJlY3QocmVzdWx0cykge1xuICBmb3IgKGxldCBpID0gcmVzdWx0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2ldO1xuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJlc3VsdCxcbiAgICAgICAgaWR4OiBpXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHBhdGgpIDogcGF0aDtcbiAgcmV0dXJuIGNyZWF0ZVBhdGgoX2V4dGVuZHMoe30sIHBhcnNlZFBhdGgsIHtcbiAgICBoYXNoOiBcIlwiXG4gIH0pKTtcbn1cbmZ1bmN0aW9uIGlzSGFzaENoYW5nZU9ubHkoYSwgYikge1xuICBpZiAoYS5wYXRobmFtZSAhPT0gYi5wYXRobmFtZSB8fCBhLnNlYXJjaCAhPT0gYi5zZWFyY2gpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGEuaGFzaCA9PT0gXCJcIikge1xuICAgIC8vIC9wYWdlIC0+IC9wYWdlI2hhc2hcbiAgICByZXR1cm4gYi5oYXNoICE9PSBcIlwiO1xuICB9IGVsc2UgaWYgKGEuaGFzaCA9PT0gYi5oYXNoKSB7XG4gICAgLy8gL3BhZ2UjaGFzaCAtPiAvcGFnZSNoYXNoXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoYi5oYXNoICE9PSBcIlwiKSB7XG4gICAgLy8gL3BhZ2UjaGFzaCAtPiAvcGFnZSNvdGhlclxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElmIHRoZSBoYXNoIGlzIHJlbW92ZWQgdGhlIGJyb3dzZXIgd2lsbCByZS1wZXJmb3JtIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyXG4gIC8vIC9wYWdlI2hhc2ggLT4gL3BhZ2VcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmRlZmVycmVkO1xufVxuZnVuY3Rpb24gaXNFcnJvclJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmVycm9yO1xufVxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0LnR5cGUpID09PSBSZXN1bHRUeXBlLnJlZGlyZWN0O1xufVxuZnVuY3Rpb24gaXNEZWZlcnJlZERhdGEodmFsdWUpIHtcbiAgbGV0IGRlZmVycmVkID0gdmFsdWU7XG4gIHJldHVybiBkZWZlcnJlZCAmJiB0eXBlb2YgZGVmZXJyZWQgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLmRhdGEgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGRlZmVycmVkLnN1YnNjcmliZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBkZWZlcnJlZC5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgZGVmZXJyZWQucmVzb2x2ZURhdGEgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzUmVzcG9uc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnN0YXR1cyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzVGV4dCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUuaGVhZGVycyA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUuYm9keSAhPT0gXCJ1bmRlZmluZWRcIjtcbn1cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXNwb25zZShyZXN1bHQpIHtcbiAgaWYgKCFpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICByZXR1cm4gc3RhdHVzID49IDMwMCAmJiBzdGF0dXMgPD0gMzk5ICYmIGxvY2F0aW9uICE9IG51bGw7XG59XG5mdW5jdGlvbiBpc1F1ZXJ5Um91dGVSZXNwb25zZShvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBpc1Jlc3BvbnNlKG9iai5yZXNwb25zZSkgJiYgKG9iai50eXBlID09PSBSZXN1bHRUeXBlLmRhdGEgfHwgb2JqLnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpO1xufVxuZnVuY3Rpb24gaXNWYWxpZE1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkUmVxdWVzdE1ldGhvZHMuaGFzKG1ldGhvZC50b0xvd2VyQ2FzZSgpKTtcbn1cbmZ1bmN0aW9uIGlzTXV0YXRpb25NZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZE11dGF0aW9uTWV0aG9kcy5oYXMobWV0aG9kLnRvTG93ZXJDYXNlKCkpO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgc2lnbmFscywgaXNGZXRjaGVyLCBjdXJyZW50TG9hZGVyRGF0YSkge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1tpbmRleF07XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hlc1RvTG9hZFtpbmRleF07XG4gICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIG1hdGNoLCB0aGVuIHdlIGNhbiBoYXZlIGEgZGVmZXJyZWQgcmVzdWx0IHRvIGRvXG4gICAgLy8gYW55dGhpbmcgd2l0aC4gIFRoaXMgaXMgZm9yIHJldmFsaWRhdGluZyBmZXRjaGVycyB3aGVyZSB0aGUgcm91dGUgd2FzXG4gICAgLy8gcmVtb3ZlZCBkdXJpbmcgSE1SXG4gICAgaWYgKCFtYXRjaCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBjdXJyZW50TWF0Y2ggPSBjdXJyZW50TWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gbWF0Y2gucm91dGUuaWQpO1xuICAgIGxldCBpc1JldmFsaWRhdGluZ0xvYWRlciA9IGN1cnJlbnRNYXRjaCAhPSBudWxsICYmICFpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkgJiYgKGN1cnJlbnRMb2FkZXJEYXRhICYmIGN1cnJlbnRMb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSkgIT09IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpICYmIChpc0ZldGNoZXIgfHwgaXNSZXZhbGlkYXRpbmdMb2FkZXIpKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBkbyBub3QgaGF2ZSB0byB0b3VjaCBhY3RpdmVEZWZlcnJlZHMgaGVyZSBzaW5jZSB3ZSByYWNlIHRoZW1cbiAgICAgIC8vIGFnYWluc3QgdGhlIHNpZ25hbCBpbiByZXNvbHZlRGVmZXJyZWREYXRhIGFuZCB0aGV5J2xsIGdldCBhYm9ydGVkXG4gICAgICAvLyB0aGVyZSBpZiBuZWVkZWRcbiAgICAgIGxldCBzaWduYWwgPSBzaWduYWxzW2luZGV4XTtcbiAgICAgIGludmFyaWFudChzaWduYWwsIFwiRXhwZWN0ZWQgYW4gQWJvcnRTaWduYWwgZm9yIHJldmFsaWRhdGluZyBmZXRjaGVyIGRlZmVycmVkIHJlc3VsdFwiKTtcbiAgICAgIGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIGlzRmV0Y2hlcikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSByZXN1bHQgfHwgcmVzdWx0c1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIHNpZ25hbCwgdW53cmFwKSB7XG4gIGlmICh1bndyYXAgPT09IHZvaWQgMCkge1xuICAgIHVud3JhcCA9IGZhbHNlO1xuICB9XG4gIGxldCBhYm9ydGVkID0gYXdhaXQgcmVzdWx0LmRlZmVycmVkRGF0YS5yZXNvbHZlRGF0YShzaWduYWwpO1xuICBpZiAoYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodW53cmFwKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS51bndyYXBwZWREYXRhXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIEhhbmRsZSBhbnkgVHJhY2tlZFByb21pc2UuX2Vycm9yIHZhbHVlcyBlbmNvdW50ZXJlZCB3aGlsZSB1bndyYXBwaW5nXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZVxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhXG4gIH07XG59XG5mdW5jdGlvbiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoKSB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkuZ2V0QWxsKFwiaW5kZXhcIikuc29tZSh2ID0+IHYgPT09IFwiXCIpO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pIHtcbiAgbGV0IHNlYXJjaCA9IHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbikuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoO1xuICBpZiAobWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLmluZGV4ICYmIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2ggfHwgXCJcIikpIHtcbiAgICAvLyBSZXR1cm4gdGhlIGxlYWYgaW5kZXggcm91dGUgd2hlbiBpbmRleCBpcyBwcmVzZW50XG4gICAgcmV0dXJuIG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgfVxuICAvLyBPdGhlcndpc2UgZ3JhYiB0aGUgZGVlcGVzdCBcInBhdGggY29udHJpYnV0aW5nXCIgbWF0Y2ggKGlnbm9yaW5nIGluZGV4IGFuZFxuICAvLyBwYXRobGVzcyBsYXlvdXQgcm91dGVzKVxuICBsZXQgcGF0aE1hdGNoZXMgPSBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKTtcbiAgcmV0dXJuIHBhdGhNYXRjaGVzW3BhdGhNYXRjaGVzLmxlbmd0aCAtIDFdO1xufVxuZnVuY3Rpb24gZ2V0U3VibWlzc2lvbkZyb21OYXZpZ2F0aW9uKG5hdmlnYXRpb24pIHtcbiAgbGV0IHtcbiAgICBmb3JtTWV0aG9kLFxuICAgIGZvcm1BY3Rpb24sXG4gICAgZm9ybUVuY1R5cGUsXG4gICAgdGV4dCxcbiAgICBmb3JtRGF0YSxcbiAgICBqc29uXG4gIH0gPSBuYXZpZ2F0aW9uO1xuICBpZiAoIWZvcm1NZXRob2QgfHwgIWZvcm1BY3Rpb24gfHwgIWZvcm1FbmNUeXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0XG4gICAgfTtcbiAgfSBlbHNlIGlmIChmb3JtRGF0YSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgIH07XG4gIH0gZWxzZSBpZiAoanNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAganNvbixcbiAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIGdldExvYWRpbmdOYXZpZ2F0aW9uKGxvY2F0aW9uLCBzdWJtaXNzaW9uKSB7XG4gIGlmIChzdWJtaXNzaW9uKSB7XG4gICAgbGV0IG5hdmlnYXRpb24gPSB7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb246IHN1Ym1pc3Npb24uZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlOiBzdWJtaXNzaW9uLmZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGE6IHN1Ym1pc3Npb24uZm9ybURhdGEsXG4gICAgICBqc29uOiBzdWJtaXNzaW9uLmpzb24sXG4gICAgICB0ZXh0OiBzdWJtaXNzaW9uLnRleHRcbiAgICB9O1xuICAgIHJldHVybiBuYXZpZ2F0aW9uO1xuICB9IGVsc2Uge1xuICAgIGxldCBuYXZpZ2F0aW9uID0ge1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFN1Ym1pdHRpbmdOYXZpZ2F0aW9uKGxvY2F0aW9uLCBzdWJtaXNzaW9uKSB7XG4gIGxldCBuYXZpZ2F0aW9uID0ge1xuICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIixcbiAgICBsb2NhdGlvbixcbiAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbi5mb3JtQWN0aW9uLFxuICAgIGZvcm1FbmNUeXBlOiBzdWJtaXNzaW9uLmZvcm1FbmNUeXBlLFxuICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uLmZvcm1EYXRhLFxuICAgIGpzb246IHN1Ym1pc3Npb24uanNvbixcbiAgICB0ZXh0OiBzdWJtaXNzaW9uLnRleHRcbiAgfTtcbiAgcmV0dXJuIG5hdmlnYXRpb247XG59XG5mdW5jdGlvbiBnZXRMb2FkaW5nRmV0Y2hlcihzdWJtaXNzaW9uLCBkYXRhKSB7XG4gIGlmIChzdWJtaXNzaW9uKSB7XG4gICAgbGV0IGZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBmb3JtTWV0aG9kOiBzdWJtaXNzaW9uLmZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24sXG4gICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbi5mb3JtRW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhOiBzdWJtaXNzaW9uLmZvcm1EYXRhLFxuICAgICAganNvbjogc3VibWlzc2lvbi5qc29uLFxuICAgICAgdGV4dDogc3VibWlzc2lvbi50ZXh0LFxuICAgICAgZGF0YVxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoZXI7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGZldGNoZXIgPSB7XG4gICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgIHRleHQ6IHVuZGVmaW5lZCxcbiAgICAgIGRhdGFcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaGVyO1xuICB9XG59XG5mdW5jdGlvbiBnZXRTdWJtaXR0aW5nRmV0Y2hlcihzdWJtaXNzaW9uLCBleGlzdGluZ0ZldGNoZXIpIHtcbiAgbGV0IGZldGNoZXIgPSB7XG4gICAgc3RhdGU6IFwic3VibWl0dGluZ1wiLFxuICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24sXG4gICAgZm9ybUVuY1R5cGU6IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUsXG4gICAgZm9ybURhdGE6IHN1Ym1pc3Npb24uZm9ybURhdGEsXG4gICAganNvbjogc3VibWlzc2lvbi5qc29uLFxuICAgIHRleHQ6IHN1Ym1pc3Npb24udGV4dCxcbiAgICBkYXRhOiBleGlzdGluZ0ZldGNoZXIgPyBleGlzdGluZ0ZldGNoZXIuZGF0YSA6IHVuZGVmaW5lZFxuICB9O1xuICByZXR1cm4gZmV0Y2hlcjtcbn1cbmZ1bmN0aW9uIGdldERvbmVGZXRjaGVyKGRhdGEpIHtcbiAgbGV0IGZldGNoZXIgPSB7XG4gICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgZGF0YVxuICB9O1xuICByZXR1cm4gZmV0Y2hlcjtcbn1cbi8vI2VuZHJlZ2lvblxuXG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQWN0aW9uLCBJRExFX0JMT0NLRVIsIElETEVfRkVUQ0hFUiwgSURMRV9OQVZJR0FUSU9OLCBVTlNBRkVfREVGRVJSRURfU1lNQk9MLCBEZWZlcnJlZERhdGEgYXMgVU5TQUZFX0RlZmVycmVkRGF0YSwgRXJyb3JSZXNwb25zZUltcGwgYXMgVU5TQUZFX0Vycm9yUmVzcG9uc2VJbXBsLCBjb252ZXJ0Um91dGVNYXRjaFRvVWlNYXRjaCBhcyBVTlNBRkVfY29udmVydFJvdXRlTWF0Y2hUb1VpTWF0Y2gsIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMgYXMgVU5TQUZFX2NvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMsIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzIGFzIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgaW52YXJpYW50IGFzIFVOU0FGRV9pbnZhcmlhbnQsIHdhcm5pbmcgYXMgVU5TQUZFX3dhcm5pbmcsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgY3JlYXRlUGF0aCwgY3JlYXRlUm91dGVyLCBjcmVhdGVTdGF0aWNIYW5kbGVyLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBnZXRTdGF0aWNDb250ZXh0RnJvbUVycm9yLCBnZXRUb1BhdGhuYW1lLCBpc0RlZmVycmVkRGF0YSwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGpvaW5QYXRocywganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgbm9ybWFsaXplUGF0aG5hbWUsIHBhcnNlUGF0aCwgcmVkaXJlY3QsIHJlZGlyZWN0RG9jdW1lbnQsIHJlc29sdmVQYXRoLCByZXNvbHZlVG8sIHN0cmlwQmFzZW5hbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIERPTSB2Ni4xNi4wXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXMsIFJvdXRlciwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCB1c2VIcmVmLCB1c2VSZXNvbHZlZFBhdGgsIHVzZUxvY2F0aW9uLCBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgdXNlTmF2aWdhdGUsIGNyZWF0ZVBhdGgsIFVOU0FGRV91c2VSb3V0ZUlkLCBVTlNBRkVfUm91dGVDb250ZXh0LCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0aW9uLCB1bnN0YWJsZV91c2VCbG9ja2VyLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBOYXZpZ2F0aW9uVHlwZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIFVOU0FGRV91c2VSb3V0ZUlkLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVkaXJlY3REb2N1bWVudCwgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBzdHJpcEJhc2VuYW1lLCBVTlNBRkVfd2FybmluZywgY3JlYXRlUm91dGVyLCBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIFVOU0FGRV9FcnJvclJlc3BvbnNlSW1wbCwgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzIH0gZnJvbSAnQHJlbWl4LXJ1bi9yb3V0ZXInO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmNvbnN0IGRlZmF1bHRNZXRob2QgPSBcImdldFwiO1xuY29uc3QgZGVmYXVsdEVuY1R5cGUgPSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiO1xuZnVuY3Rpb24gaXNIdG1sRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIHR5cGVvZiBvYmplY3QudGFnTmFtZSA9PT0gXCJzdHJpbmdcIjtcbn1cbmZ1bmN0aW9uIGlzQnV0dG9uRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImJ1dHRvblwiO1xufVxuZnVuY3Rpb24gaXNGb3JtRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIGlzSHRtbEVsZW1lbnQob2JqZWN0KSAmJiBvYmplY3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImZvcm1cIjtcbn1cbmZ1bmN0aW9uIGlzSW5wdXRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIjtcbn1cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59XG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoXG4gIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJlxuICAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVNlYXJjaFBhcmFtcyhpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0gXCJcIjtcbiAgfVxuICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh0eXBlb2YgaW5pdCA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KGluaXQpIHx8IGluaXQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgPyBpbml0IDogT2JqZWN0LmtleXMoaW5pdCkucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBpbml0W2tleV07XG4gICAgcmV0dXJuIG1lbW8uY29uY2F0KEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKHYgPT4gW2tleSwgdl0pIDogW1trZXksIHZhbHVlXV0pO1xuICB9LCBbXSkpO1xufVxuZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zRm9yTG9jYXRpb24obG9jYXRpb25TZWFyY2gsIGRlZmF1bHRTZWFyY2hQYXJhbXMpIHtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyhsb2NhdGlvblNlYXJjaCk7XG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgLy8gVXNlIGBkZWZhdWx0U2VhcmNoUGFyYW1zLmZvckVhY2goLi4uKWAgaGVyZSBpbnN0ZWFkIG9mIGl0ZXJhdGluZyBvZlxuICAgIC8vIGBkZWZhdWx0U2VhcmNoUGFyYW1zLmtleXMoKWAgdG8gd29yay1hcm91bmQgYSBidWcgaW4gRmlyZWZveCByZWxhdGVkIHRvXG4gICAgLy8gd2ViIGV4dGVuc2lvbnMuIFJlbGV2YW50IEJ1Z3ppbGxhIHRpY2tldHM6XG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQxNDYwMlxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwMjM5ODRcbiAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmZvckVhY2goKF8sIGtleSkgPT4ge1xuICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKGtleSkpIHtcbiAgICAgICAgZGVmYXVsdFNlYXJjaFBhcmFtcy5nZXRBbGwoa2V5KS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuLy8gT25lLXRpbWUgY2hlY2sgZm9yIHN1Ym1pdHRlciBzdXBwb3J0XG5sZXQgX2Zvcm1EYXRhU3VwcG9ydHNTdWJtaXR0ZXIgPSBudWxsO1xuZnVuY3Rpb24gaXNGb3JtRGF0YVN1Ym1pdHRlclN1cHBvcnRlZCgpIHtcbiAgaWYgKF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBGb3JtRGF0YShkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKSxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgaWYgRm9ybURhdGEgc3VwcG9ydHMgdGhlIHN1Ym1pdHRlciBwYXJhbWV0ZXIsIHRoaXMgd2lsbCB0aHJvd1xuICAgICAgMCk7XG4gICAgICBfZm9ybURhdGFTdXBwb3J0c1N1Ym1pdHRlciA9IGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIF9mb3JtRGF0YVN1cHBvcnRzU3VibWl0dGVyO1xufVxuY29uc3Qgc3VwcG9ydGVkRm9ybUVuY1R5cGVzID0gbmV3IFNldChbXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiwgXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsIFwidGV4dC9wbGFpblwiXSk7XG5mdW5jdGlvbiBnZXRGb3JtRW5jVHlwZShlbmNUeXBlKSB7XG4gIGlmIChlbmNUeXBlICE9IG51bGwgJiYgIXN1cHBvcnRlZEZvcm1FbmNUeXBlcy5oYXMoZW5jVHlwZSkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJcXFwiXCIgKyBlbmNUeXBlICsgXCJcXFwiIGlzIG5vdCBhIHZhbGlkIGBlbmNUeXBlYCBmb3IgYDxGb3JtPmAvYDxmZXRjaGVyLkZvcm0+YCBcIiArIChcImFuZCB3aWxsIGRlZmF1bHQgdG8gXFxcIlwiICsgZGVmYXVsdEVuY1R5cGUgKyBcIlxcXCJcIikpIDogdm9pZCAwO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBlbmNUeXBlO1xufVxuZnVuY3Rpb24gZ2V0Rm9ybVN1Ym1pc3Npb25JbmZvKHRhcmdldCwgYmFzZW5hbWUpIHtcbiAgbGV0IG1ldGhvZDtcbiAgbGV0IGFjdGlvbjtcbiAgbGV0IGVuY1R5cGU7XG4gIGxldCBmb3JtRGF0YTtcbiAgbGV0IGJvZHk7XG4gIGlmIChpc0Zvcm1FbGVtZW50KHRhcmdldCkpIHtcbiAgICAvLyBXaGVuIGdyYWJiaW5nIHRoZSBhY3Rpb24gZnJvbSB0aGUgZWxlbWVudCwgaXQgd2lsbCBoYXZlIGhhZCB0aGUgYmFzZW5hbWVcbiAgICAvLyBwcmVmaXhlZCB0byBlbnN1cmUgbm9uLUpTIHNjZW5hcmlvcyB3b3JrLCBzbyBzdHJpcCBpdCBzaW5jZSB3ZSdsbFxuICAgIC8vIHJlLXByZWZpeCBpbiB0aGUgcm91dGVyXG4gICAgbGV0IGF0dHIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpO1xuICAgIGFjdGlvbiA9IGF0dHIgPyBzdHJpcEJhc2VuYW1lKGF0dHIsIGJhc2VuYW1lKSA6IG51bGw7XG4gICAgbWV0aG9kID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGVuY1R5cGUgPSBnZXRGb3JtRW5jVHlwZSh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZW5jdHlwZVwiKSkgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGFyZ2V0KTtcbiAgfSBlbHNlIGlmIChpc0J1dHRvbkVsZW1lbnQodGFyZ2V0KSB8fCBpc0lucHV0RWxlbWVudCh0YXJnZXQpICYmICh0YXJnZXQudHlwZSA9PT0gXCJzdWJtaXRcIiB8fCB0YXJnZXQudHlwZSA9PT0gXCJpbWFnZVwiKSkge1xuICAgIGxldCBmb3JtID0gdGFyZ2V0LmZvcm07XG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH1cbiAgICAvLyA8YnV0dG9uPi88aW5wdXQgdHlwZT1cInN1Ym1pdFwiPiBtYXkgb3ZlcnJpZGUgYXR0cmlidXRlcyBvZiA8Zm9ybT5cbiAgICAvLyBXaGVuIGdyYWJiaW5nIHRoZSBhY3Rpb24gZnJvbSB0aGUgZWxlbWVudCwgaXQgd2lsbCBoYXZlIGhhZCB0aGUgYmFzZW5hbWVcbiAgICAvLyBwcmVmaXhlZCB0byBlbnN1cmUgbm9uLUpTIHNjZW5hcmlvcyB3b3JrLCBzbyBzdHJpcCBpdCBzaW5jZSB3ZSdsbFxuICAgIC8vIHJlLXByZWZpeCBpbiB0aGUgcm91dGVyXG4gICAgbGV0IGF0dHIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9ybWFjdGlvblwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcbiAgICBhY3Rpb24gPSBhdHRyID8gc3RyaXBCYXNlbmFtZShhdHRyLCBiYXNlbmFtZSkgOiBudWxsO1xuICAgIG1ldGhvZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgZW5jVHlwZSA9IGdldEZvcm1FbmNUeXBlKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtZW5jdHlwZVwiKSkgfHwgZ2V0Rm9ybUVuY1R5cGUoZm9ybS5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpKSB8fCBkZWZhdWx0RW5jVHlwZTtcbiAgICAvLyBCdWlsZCBhIEZvcm1EYXRhIG9iamVjdCBwb3B1bGF0ZWQgZnJvbSBhIGZvcm0gYW5kIHN1Ym1pdHRlclxuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0sIHRhcmdldCk7XG4gICAgLy8gSWYgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgYEZvcm1EYXRhKGVsLCBzdWJtaXR0ZXIpYCBmb3JtYXQsXG4gICAgLy8gdGhlbiB0YWNrIG9uIHRoZSBzdWJtaXR0ZXIgdmFsdWUgYXQgdGhlIGVuZC4gIFRoaXMgaXMgYSBsaWdodHdlaWdodFxuICAgIC8vIHNvbHV0aW9uIHRoYXQgaXMgbm90IDEwMCUgc3BlYyBjb21wbGlhbnQuICBGb3IgY29tcGxldGUgc3VwcG9ydCBpbiBvbGRlclxuICAgIC8vIGJyb3dzZXJzLCBjb25zaWRlciB1c2luZyB0aGUgYGZvcm1kYXRhLXN1Ym1pdHRlci1wb2x5ZmlsbGAgcGFja2FnZVxuICAgIGlmICghaXNGb3JtRGF0YVN1Ym1pdHRlclN1cHBvcnRlZCgpKSB7XG4gICAgICBsZXQge1xuICAgICAgICBuYW1lLFxuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSA9IHRhcmdldDtcbiAgICAgIGlmICh0eXBlID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgbGV0IHByZWZpeCA9IG5hbWUgPyBuYW1lICsgXCIuXCIgOiBcIlwiO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJlZml4ICsgXCJ4XCIsIFwiMFwiKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByZWZpeCArIFwieVwiLCBcIjBcIik7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNIdG1sRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBlbGVtZW50IHRoYXQgaXMgbm90IDxmb3JtPiwgPGJ1dHRvbj4sIG9yIFwiICsgXCI8aW5wdXQgdHlwZT1cXFwic3VibWl0fGltYWdlXFxcIj5cIik7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBudWxsO1xuICAgIGVuY1R5cGUgPSBkZWZhdWx0RW5jVHlwZTtcbiAgICBib2R5ID0gdGFyZ2V0O1xuICB9XG4gIC8vIFNlbmQgYm9keSBmb3IgPEZvcm0gZW5jVHlwZT1cInRleHQvcGxhaW5cIiBzbyB3ZSBlbmNvZGUgaXQgaW50byB0ZXh0XG4gIGlmIChmb3JtRGF0YSAmJiBlbmNUeXBlID09PSBcInRleHQvcGxhaW5cIikge1xuICAgIGJvZHkgPSBmb3JtRGF0YTtcbiAgICBmb3JtRGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGFjdGlvbixcbiAgICBtZXRob2Q6IG1ldGhvZC50b0xvd2VyQ2FzZSgpLFxuICAgIGVuY1R5cGUsXG4gICAgZm9ybURhdGEsXG4gICAgYm9keVxuICB9O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsYXRpdmVcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdLFxuICBfZXhjbHVkZWQyID0gW1wiYXJpYS1jdXJyZW50XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImVuZFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJjaGlsZHJlblwiXSxcbiAgX2V4Y2x1ZGVkMyA9IFtcInJlbG9hZERvY3VtZW50XCIsIFwicmVwbGFjZVwiLCBcInN0YXRlXCIsIFwibWV0aG9kXCIsIFwiYWN0aW9uXCIsIFwib25TdWJtaXRcIiwgXCJzdWJtaXRcIiwgXCJyZWxhdGl2ZVwiLCBcInByZXZlbnRTY3JvbGxSZXNldFwiXTtcbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGZ1dHVyZTogX2V4dGVuZHMoe30sIG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuZnV0dXJlLCB7XG4gICAgICB2N19wcmVwZW5kQmFzZW5hbWU6IHRydWVcbiAgICB9KSxcbiAgICBoaXN0b3J5OiBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3c6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMud2luZG93XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogKG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaHlkcmF0aW9uRGF0YSkgfHwgcGFyc2VIeWRyYXRpb25EYXRhKCksXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllczogVU5TQUZFX21hcFJvdXRlUHJvcGVydGllc1xuICB9KS5pbml0aWFsaXplKCk7XG59XG5mdW5jdGlvbiBjcmVhdGVIYXNoUm91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IF9leHRlbmRzKHt9LCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSwge1xuICAgICAgdjdfcHJlcGVuZEJhc2VuYW1lOiB0cnVlXG4gICAgfSksXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXM6IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXNcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufVxuZnVuY3Rpb24gcGFyc2VIeWRyYXRpb25EYXRhKCkge1xuICB2YXIgX3dpbmRvdztcbiAgbGV0IHN0YXRlID0gKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcbiAgaWYgKHN0YXRlICYmIHN0YXRlLmVycm9ycykge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICBlcnJvcnM6IGRlc2VyaWFsaXplRXJyb3JzKHN0YXRlLmVycm9ycylcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9ycyhlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xuICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGVycm9ycyk7XG4gIGxldCBzZXJpYWxpemVkID0ge307XG4gIGZvciAobGV0IFtrZXksIHZhbF0gb2YgZW50cmllcykge1xuICAgIC8vIEhleSB5b3UhICBJZiB5b3UgY2hhbmdlIHRoaXMsIHBsZWFzZSBjaGFuZ2UgdGhlIGNvcnJlc3BvbmRpbmcgbG9naWMgaW5cbiAgICAvLyBzZXJpYWxpemVFcnJvcnMgaW4gcmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXIudHN4IDopXG4gICAgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIlJvdXRlRXJyb3JSZXNwb25zZVwiKSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBuZXcgVU5TQUZFX0Vycm9yUmVzcG9uc2VJbXBsKHZhbC5zdGF0dXMsIHZhbC5zdGF0dXNUZXh0LCB2YWwuZGF0YSwgdmFsLmludGVybmFsID09PSB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIkVycm9yXCIpIHtcbiAgICAgIC8vIEF0dGVtcHQgdG8gcmVjb25zdHJ1Y3QgdGhlIHJpZ2h0IHR5cGUgb2YgRXJyb3IgKGkuZS4sIFJlZmVyZW5jZUVycm9yKVxuICAgICAgaWYgKHZhbC5fX3N1YlR5cGUpIHtcbiAgICAgICAgbGV0IEVycm9yQ29uc3RydWN0b3IgPSB3aW5kb3dbdmFsLl9fc3ViVHlwZV07XG4gICAgICAgIGlmICh0eXBlb2YgRXJyb3JDb25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvckNvbnN0cnVjdG9yKHZhbC5tZXNzYWdlKTtcbiAgICAgICAgICAgIC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAgICAgICAgZXJyb3Iuc3RhY2sgPSBcIlwiO1xuICAgICAgICAgICAgc2VyaWFsaXplZFtrZXldID0gZXJyb3I7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gbm8tb3AgLSBmYWxsIHRocm91Z2ggYW5kIGNyZWF0ZSBhIG5vcm1hbCBFcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlcmlhbGl6ZWRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcih2YWwubWVzc2FnZSk7XG4gICAgICAgIC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHNlcmlhbGl6ZSBTU1Igc3RhY2sgdHJhY2VzIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAgIGVycm9yLnN0YWNrID0gXCJcIjtcbiAgICAgICAgc2VyaWFsaXplZFtrZXldID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG4vLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gQ29tcG9uZW50c1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8qKlxuICBXZWJwYWNrICsgUmVhY3QgMTcgZmFpbHMgdG8gY29tcGlsZSBvbiBhbnkgb2YgdGhlIGZvbGxvd2luZyBiZWNhdXNlIHdlYnBhY2tcbiAgY29tcGxhaW5zIHRoYXQgYHN0YXJ0VHJhbnNpdGlvbmAgZG9lc24ndCBleGlzdCBpbiBgUmVhY3RgOlxuICAqIGltcG9ydCB7IHN0YXJ0VHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdFwiXG4gICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBmcm9tIFwicmVhY3RcIjtcbiAgICBcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0ID8gUmVhY3Quc3RhcnRUcmFuc2l0aW9uKCgpID0+IHNldFN0YXRlKCkpIDogc2V0U3RhdGUoKVxuICAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gZnJvbSBcInJlYWN0XCI7XG4gICAgXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCA/IFJlYWN0W1wic3RhcnRUcmFuc2l0aW9uXCJdKCgpID0+IHNldFN0YXRlKCkpIDogc2V0U3RhdGUoKVxuXG4gIE1vdmluZyBpdCB0byBhIGNvbnN0YW50IHN1Y2ggYXMgdGhlIGZvbGxvd2luZyBzb2x2ZXMgdGhlIFdlYnBhY2svUmVhY3QgMTcgaXNzdWU6XG4gICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBmcm9tIFwicmVhY3RcIjtcbiAgICBjb25zdCBTVEFSVF9UUkFOU0lUSU9OID0gXCJzdGFydFRyYW5zaXRpb25cIjtcbiAgICBTVEFSVF9UUkFOU0lUSU9OIGluIFJlYWN0ID8gUmVhY3RbU1RBUlRfVFJBTlNJVElPTl0oKCkgPT4gc2V0U3RhdGUoKSkgOiBzZXRTdGF0ZSgpXG5cbiAgSG93ZXZlciwgdGhhdCBpbnRyb2R1Y2VzIHdlYnBhY2svdGVyc2VyIG1pbmlmaWNhdGlvbiBpc3N1ZXMgaW4gcHJvZHVjdGlvbiBidWlsZHNcbiAgaW4gUmVhY3QgMTggd2hlcmUgbWluaWZpY2F0aW9uL29iZnVzY2F0aW9uIGVuZHMgdXAgcmVtb3ZpbmcgdGhlIGNhbGwgb2ZcbiAgUmVhY3Quc3RhcnRUcmFuc2l0aW9uIGVudGlyZWx5IGZyb20gdGhlIGZpcnN0IGhhbGYgb2YgdGhlIHRlcm5hcnkuICBHcmFiYmluZ1xuICB0aGlzIGV4cG9ydGVkIHJlZmVyZW5jZSBvbmNlIHVwIGZyb250IHJlc29sdmVzIHRoYXQgaXNzdWUuXG5cbiAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVhY3Qtcm91dGVyL2lzc3Vlcy8xMDU3OVxuKi9cbmNvbnN0IFNUQVJUX1RSQU5TSVRJT04gPSBcInN0YXJ0VHJhbnNpdGlvblwiO1xuY29uc3Qgc3RhcnRUcmFuc2l0aW9uSW1wbCA9IFJlYWN0W1NUQVJUX1RSQU5TSVRJT05dO1xuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5mdW5jdGlvbiBCcm93c2VyUm91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBmdXR1cmUsXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVCcm93c2VySGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIGxldCB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uXG4gIH0gPSBmdXR1cmUgfHwge307XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5ld1N0YXRlID0+IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb24gJiYgc3RhcnRUcmFuc2l0aW9uSW1wbCA/IHN0YXJ0VHJhbnNpdGlvbkltcGwoKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSkgOiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpO1xuICB9LCBbc2V0U3RhdGVJbXBsLCB2N19zdGFydFRyYW5zaXRpb25dKTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnksIHNldFN0YXRlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuZnVuY3Rpb24gSGFzaFJvdXRlcihfcmVmMikge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGZ1dHVyZSxcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIGxldCB7XG4gICAgdjdfc3RhcnRUcmFuc2l0aW9uXG4gIH0gPSBmdXR1cmUgfHwge307XG4gIGxldCBzZXRTdGF0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKG5ld1N0YXRlID0+IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb24gJiYgc3RhcnRUcmFuc2l0aW9uSW1wbCA/IHN0YXJ0VHJhbnNpdGlvbkltcGwoKCkgPT4gc2V0U3RhdGVJbXBsKG5ld1N0YXRlKSkgOiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpO1xuICB9LCBbc2V0U3RhdGVJbXBsLCB2N19zdGFydFRyYW5zaXRpb25dKTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnksIHNldFN0YXRlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIHRoYXQgYWNjZXB0cyBhIHByZS1pbnN0YW50aWF0ZWQgaGlzdG9yeSBvYmplY3QuIEl0J3MgaW1wb3J0YW50XG4gKiB0byBub3RlIHRoYXQgdXNpbmcgeW91ciBvd24gaGlzdG9yeSBvYmplY3QgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkIGFuZCBtYXkgYWRkXG4gKiB0d28gdmVyc2lvbnMgb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0byB5b3VyIGJ1bmRsZXMgdW5sZXNzIHlvdSB1c2UgdGhlIHNhbWVcbiAqIHZlcnNpb24gb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0aGF0IFJlYWN0IFJvdXRlciB1c2VzIGludGVybmFsbHkuXG4gKi9cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBmdXR1cmUsXG4gICAgaGlzdG9yeVxuICB9ID0gX3JlZjM7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgbGV0IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb25cbiAgfSA9IGZ1dHVyZSB8fCB7fTtcbiAgbGV0IHNldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2sobmV3U3RhdGUgPT4ge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvbiAmJiBzdGFydFRyYW5zaXRpb25JbXBsID8gc3RhcnRUcmFuc2l0aW9uSW1wbCgoKSA9PiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpKSA6IHNldFN0YXRlSW1wbChuZXdTdGF0ZSk7XG4gIH0sIFtzZXRTdGF0ZUltcGwsIHY3X3N0YXJ0VHJhbnNpdGlvbl0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeSwgc2V0U3RhdGVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBIaXN0b3J5Um91dGVyLmRpc3BsYXlOYW1lID0gXCJ1bnN0YWJsZV9IaXN0b3J5Um91dGVyXCI7XG59XG5jb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgQUJTT0xVVEVfVVJMX1JFR0VYID0gL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pO1xuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNCwgcmVmKSB7XG4gIGxldCB7XG4gICAgICBvbkNsaWNrLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICByZWxvYWREb2N1bWVudCxcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIHRhcmdldCxcbiAgICAgIHRvLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSA9IF9yZWY0LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICAvLyBSZW5kZXJlZCBpbnRvIDxhIGhyZWY+IGZvciBhYnNvbHV0ZSBVUkxzXG4gIGxldCBhYnNvbHV0ZUhyZWY7XG4gIGxldCBpc0V4dGVybmFsID0gZmFsc2U7XG4gIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QodG8pKSB7XG4gICAgLy8gUmVuZGVyIHRoZSBhYnNvbHV0ZSBocmVmIHNlcnZlci0gYW5kIGNsaWVudC1zaWRlXG4gICAgYWJzb2x1dGVIcmVmID0gdG87XG4gICAgLy8gT25seSBjaGVjayBmb3IgZXh0ZXJuYWwgb3JpZ2lucyBjbGllbnQtc2lkZVxuICAgIGlmIChpc0Jyb3dzZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGxldCB0YXJnZXRVcmwgPSB0by5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyB0bykgOiBuZXcgVVJMKHRvKTtcbiAgICAgICAgbGV0IHBhdGggPSBzdHJpcEJhc2VuYW1lKHRhcmdldFVybC5wYXRobmFtZSwgYmFzZW5hbWUpO1xuICAgICAgICBpZiAodGFyZ2V0VXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4gJiYgcGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gU3RyaXAgdGhlIHByb3RvY29sL29yaWdpbi9iYXNlbmFtZSBmb3Igc2FtZS1vcmlnaW4gYWJzb2x1dGUgVVJMc1xuICAgICAgICAgIHRvID0gcGF0aCArIHRhcmdldFVybC5zZWFyY2ggKyB0YXJnZXRVcmwuaGFzaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBXZSBjYW4ndCBkbyBleHRlcm5hbCBVUkwgZGV0ZWN0aW9uIHdpdGhvdXQgYSB2YWxpZCBVUkxcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoZmFsc2UsIFwiPExpbmsgdG89XFxcIlwiICsgdG8gKyBcIlxcXCI+IGNvbnRhaW5zIGFuIGludmFsaWQgVVJMIHdoaWNoIHdpbGwgcHJvYmFibHkgYnJlYWsgXCIgKyBcIndoZW4gY2xpY2tlZCAtIHBsZWFzZSB1cGRhdGUgdG8gYSB2YWxpZCBVUkwgcGF0aC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFJlbmRlcmVkIGludG8gPGEgaHJlZj4gZm9yIHJlbGF0aXZlIFVSTHNcbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0pO1xuICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGludGVybmFsT25DbGljayhldmVudCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogYWJzb2x1dGVIcmVmIHx8IGhyZWYsXG4gICAgICBvbkNsaWNrOiBpc0V4dGVybmFsIHx8IHJlbG9hZERvY3VtZW50ID8gb25DbGljayA6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExpbmsuZGlzcGxheU5hbWUgPSBcIkxpbmtcIjtcbn1cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFByb3AgPSBcInBhZ2VcIixcbiAgICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgICBlbmQgPSBmYWxzZSxcbiAgICAgIHN0eWxlOiBzdHlsZVByb3AsXG4gICAgICB0byxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IF9yZWY1LFxuICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgX2V4Y2x1ZGVkMik7XG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcbiAgICBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIG5leHRMb2NhdGlvblBhdGhuYW1lID0gbmV4dExvY2F0aW9uUGF0aG5hbWUgPyBuZXh0TG9jYXRpb25QYXRobmFtZS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbiAgICB0b1BhdGhuYW1lID0gdG9QYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIGxldCBpc0FjdGl2ZSA9IGxvY2F0aW9uUGF0aG5hbWUgPT09IHRvUGF0aG5hbWUgfHwgIWVuZCAmJiBsb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIjtcbiAgbGV0IGlzUGVuZGluZyA9IG5leHRMb2NhdGlvblBhdGhuYW1lICE9IG51bGwgJiYgKG5leHRMb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBuZXh0TG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIik7XG4gIGxldCBhcmlhQ3VycmVudCA9IGlzQWN0aXZlID8gYXJpYUN1cnJlbnRQcm9wIDogdW5kZWZpbmVkO1xuICBsZXQgY2xhc3NOYW1lO1xuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc1BlbmRpbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGwsIGlzUGVuZGluZyA/IFwicGVuZGluZ1wiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGxldCBzdHlsZSA9IHR5cGVvZiBzdHlsZVByb3AgPT09IFwiZnVuY3Rpb25cIiA/IHN0eWxlUHJvcCh7XG4gICAgaXNBY3RpdmUsXG4gICAgaXNQZW5kaW5nXG4gIH0pIDogc3R5bGVQcm9wO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGluaywgX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudCxcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICByZWY6IHJlZixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgdG86IHRvXG4gIH0pLCB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmdcbiAgfSkgOiBjaGlsZHJlbik7XG59KTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufVxuLyoqXG4gKiBBIGBAcmVtaXgtcnVuL3JvdXRlcmAtYXdhcmUgYDxmb3JtPmAuIEl0IGJlaGF2ZXMgbGlrZSBhIG5vcm1hbCBmb3JtIGV4Y2VwdFxuICogdGhhdCB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2VydmVyIGlzIHdpdGggYGZldGNoYCBpbnN0ZWFkIG9mIG5ldyBkb2N1bWVudFxuICogcmVxdWVzdHMsIGFsbG93aW5nIGNvbXBvbmVudHMgdG8gYWRkIG5pY2VyIFVYIHRvIHRoZSBwYWdlIGFzIHRoZSBmb3JtIGlzXG4gKiBzdWJtaXR0ZWQgYW5kIHJldHVybnMgd2l0aCBkYXRhLlxuICovXG5jb25zdCBGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgbGV0IHN1Ym1pdCA9IHVzZVN1Ym1pdCgpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHN1Ym1pdDogc3VibWl0LFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBGb3JtLmRpc3BsYXlOYW1lID0gXCJGb3JtXCI7XG59XG5jb25zdCBGb3JtSW1wbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfcmVmNiwgZm9yd2FyZGVkUmVmKSA9PiB7XG4gIGxldCB7XG4gICAgICByZWxvYWREb2N1bWVudCxcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QsXG4gICAgICBhY3Rpb24sXG4gICAgICBvblN1Ym1pdCxcbiAgICAgIHN1Ym1pdCxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSA9IF9yZWY2LFxuICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIF9leGNsdWRlZDMpO1xuICBsZXQgZm9ybU1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSBcImdldFwiID8gXCJnZXRcIiA6IFwicG9zdFwiO1xuICBsZXQgZm9ybUFjdGlvbiA9IHVzZUZvcm1BY3Rpb24oYWN0aW9uLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIG1ldGhvZDogc3VibWl0TWV0aG9kLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHN0YXRlLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgbWV0aG9kOiBmb3JtTWV0aG9kLFxuICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICBvblN1Ym1pdDogcmVsb2FkRG9jdW1lbnQgPyBvblN1Ym1pdCA6IHN1Ym1pdEhhbmRsZXJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBGb3JtSW1wbC5kaXNwbGF5TmFtZSA9IFwiRm9ybUltcGxcIjtcbn1cbi8qKlxuICogVGhpcyBjb21wb25lbnQgd2lsbCBlbXVsYXRlIHRoZSBicm93c2VyJ3Mgc2Nyb2xsIHJlc3RvcmF0aW9uIG9uIGxvY2F0aW9uXG4gKiBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmNykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfcmVmNztcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oe1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2Nyb2xsUmVzdG9yYXRpb24uZGlzcGxheU5hbWUgPSBcIlNjcm9sbFJlc3RvcmF0aW9uXCI7XG59XG4vLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSG9va3Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG52YXIgRGF0YVJvdXRlckhvb2s7XG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU2Nyb2xsUmVzdG9yYXRpb25cIl0gPSBcInVzZVNjcm9sbFJlc3RvcmF0aW9uXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU3VibWl0XCJdID0gXCJ1c2VTdWJtaXRcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VTdWJtaXRGZXRjaGVyXCJdID0gXCJ1c2VTdWJtaXRGZXRjaGVyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlRmV0Y2hlclwiXSA9IFwidXNlRmV0Y2hlclwiO1xufSkoRGF0YVJvdXRlckhvb2sgfHwgKERhdGFSb3V0ZXJIb29rID0ge30pKTtcbnZhciBEYXRhUm91dGVyU3RhdGVIb29rO1xuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5mdW5jdGlvbiBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSB7XG4gIHJldHVybiBob29rTmFtZSArIFwiIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBkYXRhIHJvdXRlci4gIFNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9yb3V0ZXJzL3BpY2tpbmctYS1yb3V0ZXIuXCI7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUoaG9va05hbWUpIHtcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG4vKipcbiAqIEhhbmRsZXMgdGhlIGNsaWNrIGJlaGF2aW9yIGZvciByb3V0ZXIgYDxMaW5rPmAgY29tcG9uZW50cy4gVGhpcyBpcyB1c2VmdWwgaWZcbiAqIHlvdSBuZWVkIHRvIGNyZWF0ZSBjdXN0b20gYDxMaW5rPmAgY29tcG9uZW50cyB3aXRoIHRoZSBzYW1lIGNsaWNrIGJlaGF2aW9yIHdlXG4gKiB1c2UgaW4gb3VyIGV4cG9ydGVkIGA8TGluaz5gLlxuICovXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZSxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmIChzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gSWYgdGhlIFVSTCBoYXNuJ3QgY2hhbmdlZCwgYSByZWd1bGFyIDxhPiB3aWxsIGRvIGEgcmVwbGFjZSBpbnN0ZWFkIG9mXG4gICAgICAvLyBhIHB1c2gsIHNvIGRvIHRoZSBzYW1lIGhlcmUgdW5sZXNzIHRoZSByZXBsYWNlIHByb3AgaXMgZXhwbGljaXRseSBzZXRcbiAgICAgIGxldCByZXBsYWNlID0gcmVwbGFjZVByb3AgIT09IHVuZGVmaW5lZCA/IHJlcGxhY2VQcm9wIDogY3JlYXRlUGF0aChsb2NhdGlvbikgPT09IGNyZWF0ZVBhdGgocGF0aCk7XG4gICAgICBuYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgICByZWxhdGl2ZVxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbbG9jYXRpb24sIG5hdmlnYXRlLCBwYXRoLCByZXBsYWNlUHJvcCwgc3RhdGUsIHRhcmdldCwgdG8sIHByZXZlbnRTY3JvbGxSZXNldCwgcmVsYXRpdmVdKTtcbn1cbi8qKlxuICogQSBjb252ZW5pZW50IHdyYXBwZXIgZm9yIHJlYWRpbmcgYW5kIHdyaXRpbmcgc2VhcmNoIHBhcmFtZXRlcnMgdmlhIHRoZVxuICogVVJMU2VhcmNoUGFyYW1zIGludGVyZmFjZS5cbiAqL1xuZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsIFwiWW91IGNhbm5vdCB1c2UgdGhlIGB1c2VTZWFyY2hQYXJhbXNgIGhvb2sgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgXCIgKyBcInN1cHBvcnQgdGhlIFVSTFNlYXJjaFBhcmFtcyBBUEkuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgSW50ZXJuZXQgXCIgKyBcIkV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIFwiICsgXCJodHRwczovL2dpdGh1Yi5jb20vdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXNcXG5cXG5cIiArIFwiSWYgeW91J3JlIHVuc3VyZSBob3cgdG8gbG9hZCBwb2x5ZmlsbHMsIHdlIHJlY29tbWVuZCB5b3UgY2hlY2sgb3V0IFwiICsgXCJodHRwczovL3BvbHlmaWxsLmlvL3YzLyB3aGljaCBwcm92aWRlcyBzb21lIHJlY29tbWVuZGF0aW9ucyBhYm91dCBob3cgXCIgKyBcInRvIGxvYWQgcG9seWZpbGxzIG9ubHkgZm9yIHVzZXJzIHRoYXQgbmVlZCB0aGVtLCBpbnN0ZWFkIG9mIGZvciBldmVyeSBcIiArIFwidXNlci5cIikgOiB2b2lkIDA7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGNyZWF0ZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkpO1xuICBsZXQgaGFzU2V0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT5cbiAgLy8gT25seSBtZXJnZSBpbiB0aGUgZGVmYXVsdHMgaWYgd2UgaGF2ZW4ndCB5ZXQgY2FsbGVkIHNldFNlYXJjaFBhcmFtcy5cbiAgLy8gT25jZSB3ZSBjYWxsIHRoYXQgd2Ugd2FudCB0aG9zZSB0byB0YWtlIHByZWNlZGVuY2UsIG90aGVyd2lzZSB5b3UgY2FuJ3RcbiAgLy8gcmVtb3ZlIGEgcGFyYW0gd2l0aCBzZXRTZWFyY2hQYXJhbXMoe30pIGlmIGl0IGhhcyBhbiBpbml0aWFsIHZhbHVlXG4gIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uLnNlYXJjaCwgaGFzU2V0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQgPyBudWxsIDogZGVmYXVsdFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50KSwgW2xvY2F0aW9uLnNlYXJjaF0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgc2V0U2VhcmNoUGFyYW1zID0gUmVhY3QudXNlQ2FsbGJhY2soKG5leHRJbml0LCBuYXZpZ2F0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBuZXdTZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXModHlwZW9mIG5leHRJbml0ID09PSBcImZ1bmN0aW9uXCIgPyBuZXh0SW5pdChzZWFyY2hQYXJhbXMpIDogbmV4dEluaXQpO1xuICAgIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBuYXZpZ2F0ZShcIj9cIiArIG5ld1NlYXJjaFBhcmFtcywgbmF2aWdhdGVPcHRpb25zKTtcbiAgfSwgW25hdmlnYXRlLCBzZWFyY2hQYXJhbXNdKTtcbiAgcmV0dXJuIFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc107XG59XG5mdW5jdGlvbiB2YWxpZGF0ZUNsaWVudFNpZGVTdWJtaXNzaW9uKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBjYWxsaW5nIHN1Ym1pdCBkdXJpbmcgdGhlIHNlcnZlciByZW5kZXIuIFwiICsgXCJUcnkgY2FsbGluZyBzdWJtaXQgd2l0aGluIGEgYHVzZUVmZmVjdGAgb3IgY2FsbGJhY2sgaW5zdGVhZC5cIik7XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gcHJvZ3JhbW1hdGljYWxseSBzdWJtaXQgYSBmb3JtIChvclxuICogc29tZSBhcmJpdHJhcnkgZGF0YSkgdG8gdGhlIHNlcnZlci5cbiAqL1xuZnVuY3Rpb24gdXNlU3VibWl0KCkge1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU3VibWl0KTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgY3VycmVudFJvdXRlSWQgPSBVTlNBRkVfdXNlUm91dGVJZCgpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdmFsaWRhdGVDbGllbnRTaWRlU3VibWlzc2lvbigpO1xuICAgIGxldCB7XG4gICAgICBhY3Rpb24sXG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBib2R5XG4gICAgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGJhc2VuYW1lKTtcbiAgICByb3V0ZXIubmF2aWdhdGUob3B0aW9ucy5hY3Rpb24gfHwgYWN0aW9uLCB7XG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdGlvbnMucHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgZm9ybURhdGEsXG4gICAgICBib2R5LFxuICAgICAgZm9ybU1ldGhvZDogb3B0aW9ucy5tZXRob2QgfHwgbWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGU6IG9wdGlvbnMuZW5jVHlwZSB8fCBlbmNUeXBlLFxuICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlLFxuICAgICAgc3RhdGU6IG9wdGlvbnMuc3RhdGUsXG4gICAgICBmcm9tUm91dGVJZDogY3VycmVudFJvdXRlSWRcbiAgICB9KTtcbiAgfSwgW3JvdXRlciwgYmFzZW5hbWUsIGN1cnJlbnRSb3V0ZUlkXSk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGltcGxlbWVudGF0aW9uIGZvciBmZXRjaGVyLnN1Ym1pdFxuICovXG5mdW5jdGlvbiB1c2VTdWJtaXRGZXRjaGVyKGZldGNoZXJLZXksIGZldGNoZXJSb3V0ZUlkKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTdWJtaXRGZXRjaGVyKTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdmFsaWRhdGVDbGllbnRTaWRlU3VibWlzc2lvbigpO1xuICAgIGxldCB7XG4gICAgICBhY3Rpb24sXG4gICAgICBtZXRob2QsXG4gICAgICBlbmNUeXBlLFxuICAgICAgZm9ybURhdGEsXG4gICAgICBib2R5XG4gICAgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGJhc2VuYW1lKTtcbiAgICAhKGZldGNoZXJSb3V0ZUlkICE9IG51bGwpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgdXNlRmV0Y2hlcigpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIGZldGNoZXJSb3V0ZUlkLCBvcHRpb25zLmFjdGlvbiB8fCBhY3Rpb24sIHtcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0aW9ucy5wcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGJvZHksXG4gICAgICBmb3JtTWV0aG9kOiBvcHRpb25zLm1ldGhvZCB8fCBtZXRob2QsXG4gICAgICBmb3JtRW5jVHlwZTogb3B0aW9ucy5lbmNUeXBlIHx8IGVuY1R5cGVcbiAgICB9KTtcbiAgfSwgW3JvdXRlciwgYmFzZW5hbWUsIGZldGNoZXJLZXksIGZldGNoZXJSb3V0ZUlkXSk7XG59XG4vLyB2NzogRXZlbnR1YWxseSB3ZSBzaG91bGQgZGVwcmVjYXRlIHRoaXMgZW50aXJlbHkgaW4gZmF2b3Igb2YgdXNpbmcgdGhlXG4vLyByb3V0ZXIgbWV0aG9kIGRpcmVjdGx5P1xuZnVuY3Rpb24gdXNlRm9ybUFjdGlvbihhY3Rpb24sIF90ZW1wMikge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCByb3V0ZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9Sb3V0ZUNvbnRleHQpO1xuICAhcm91dGVDb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJ1c2VGb3JtQWN0aW9uIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IFttYXRjaF0gPSByb3V0ZUNvbnRleHQubWF0Y2hlcy5zbGljZSgtMSk7XG4gIC8vIFNoYWxsb3cgY2xvbmUgcGF0aCBzbyB3ZSBjYW4gbW9kaWZ5IGl0IGJlbG93LCBvdGhlcndpc2Ugd2UgbW9kaWZ5IHRoZVxuICAvLyBvYmplY3QgcmVmZXJlbmNlZCBieSB1c2VNZW1vIGluc2lkZSB1c2VSZXNvbHZlZFBhdGhcbiAgbGV0IHBhdGggPSBfZXh0ZW5kcyh7fSwgdXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7XG4gICAgcmVsYXRpdmVcbiAgfSkpO1xuICAvLyBQcmV2aW91c2x5IHdlIHNldCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gXCIuXCIuIFRoZSBwcm9ibGVtIHdpdGggdGhpcyBpcyB0aGF0XG4gIC8vIGB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpYCBleGNsdWRlcyBzZWFyY2ggcGFyYW1zIG9mIHRoZSByZXNvbHZlZCBVUkwuIFRoaXMgaXNcbiAgLy8gdGhlIGludGVuZGVkIGJlaGF2aW9yIG9mIHdoZW4gXCIuXCIgaXMgc3BlY2lmaWNhbGx5IHByb3ZpZGVkIGFzXG4gIC8vIHRoZSBmb3JtIGFjdGlvbiwgYnV0IGluY29uc2lzdGVudCB3LyBicm93c2VycyB3aGVuIHRoZSBhY3Rpb24gaXMgb21pdHRlZC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9yZW1peC9pc3N1ZXMvOTI3XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGlmIChhY3Rpb24gPT0gbnVsbCkge1xuICAgIC8vIFNhZmUgdG8gd3JpdGUgdG8gdGhpcyBkaXJlY3RseSBoZXJlIHNpbmNlIGlmIGFjdGlvbiB3YXMgdW5kZWZpbmVkLCB3ZVxuICAgIC8vIHdvdWxkIGhhdmUgY2FsbGVkIHVzZVJlc29sdmVkUGF0aChcIi5cIikgd2hpY2ggd2lsbCBuZXZlciBpbmNsdWRlIGEgc2VhcmNoXG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgLy8gV2hlbiBncmFiYmluZyBzZWFyY2ggcGFyYW1zIGZyb20gdGhlIFVSTCwgcmVtb3ZlIHRoZSBhdXRvbWF0aWNhbGx5XG4gICAgLy8gaW5zZXJ0ZWQgP2luZGV4IHBhcmFtIHNvIHdlIG1hdGNoIHRoZSB1c2VSZXNvbHZlZFBhdGggc2VhcmNoIGJlaGF2aW9yXG4gICAgLy8gd2hpY2ggd291bGQgbm90IGluY2x1ZGUgP2luZGV4XG4gICAgaWYgKG1hdGNoLnJvdXRlLmluZGV4KSB7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXRoLnNlYXJjaCk7XG4gICAgICBwYXJhbXMuZGVsZXRlKFwiaW5kZXhcIik7XG4gICAgICBwYXRoLnNlYXJjaCA9IHBhcmFtcy50b1N0cmluZygpID8gXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgfVxuICB9XG4gIGlmICgoIWFjdGlvbiB8fCBhY3Rpb24gPT09IFwiLlwiKSAmJiBtYXRjaC5yb3V0ZS5pbmRleCkge1xuICAgIHBhdGguc2VhcmNoID0gcGF0aC5zZWFyY2ggPyBwYXRoLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgXCI/aW5kZXgmXCIpIDogXCI/aW5kZXhcIjtcbiAgfVxuICAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gIC8vIHRvIGNyZWF0aW5nIHRoZSBmb3JtIGFjdGlvbi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2VcbiAgLy8gdGhlIHJhdyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlXG4gIC8vIHByZXNlbmNlIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBhY3Rpb25zXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlUGF0aChwYXRoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBsZXQgc3VibWl0ID0gdXNlU3VibWl0RmV0Y2hlcihmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBzdWJtaXQ6IHN1Ym1pdFxuICAgIH0pKTtcbiAgfSk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBGZXRjaGVyRm9ybS5kaXNwbGF5TmFtZSA9IFwiZmV0Y2hlci5Gb3JtXCI7XG4gIH1cbiAgcmV0dXJuIEZldGNoZXJGb3JtO1xufVxubGV0IGZldGNoZXJJZCA9IDA7XG4vLyBUT0RPOiAodjcpIENoYW5nZSB0aGUgdXNlRmV0Y2hlciBnZW5lcmljIGRlZmF1bHQgZnJvbSBgYW55YCB0byBgdW5rbm93bmBcbi8qKlxuICogSW50ZXJhY3RzIHdpdGggcm91dGUgbG9hZGVycyBhbmQgYWN0aW9ucyB3aXRob3V0IGNhdXNpbmcgYSBuYXZpZ2F0aW9uLiBHcmVhdFxuICogZm9yIGFueSBpbnRlcmFjdGlvbiB0aGF0IHN0YXlzIG9uIHRoZSBzYW1lIHBhZ2UuXG4gKi9cbmZ1bmN0aW9uIHVzZUZldGNoZXIoKSB7XG4gIHZhciBfcm91dGUkbWF0Y2hlcztcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUZldGNoZXIpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9Sb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUZldGNoZXIgbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJvdXRlQ29udGV4dFwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgcm91dGVJZCA9IChfcm91dGUkbWF0Y2hlcyA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3V0ZSRtYXRjaGVzLnJvdXRlLmlkO1xuICAhKHJvdXRlSWQgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUZldGNoZXIgY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFxcXCJpZFxcXCJcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IFtmZXRjaGVyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IFN0cmluZygrK2ZldGNoZXJJZCkpO1xuICBsZXQgW0Zvcm1dID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgICFyb3V0ZUlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5Gb3JtKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gY3JlYXRlRmV0Y2hlckZvcm0oZmV0Y2hlcktleSwgcm91dGVJZCk7XG4gIH0pO1xuICBsZXQgW2xvYWRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gaHJlZiA9PiB7XG4gICAgIXJvdXRlciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVyIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhcm91dGVJZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIGZldGNoZXIubG9hZCgpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYpO1xuICB9KTtcbiAgbGV0IHN1Ym1pdCA9IHVzZVN1Ym1pdEZldGNoZXIoZmV0Y2hlcktleSwgcm91dGVJZCk7XG4gIGxldCBmZXRjaGVyID0gcm91dGVyLmdldEZldGNoZXIoZmV0Y2hlcktleSk7XG4gIGxldCBmZXRjaGVyV2l0aENvbXBvbmVudHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IF9leHRlbmRzKHtcbiAgICBGb3JtLFxuICAgIHN1Ym1pdCxcbiAgICBsb2FkXG4gIH0sIGZldGNoZXIpLCBbZmV0Y2hlciwgRm9ybSwgc3VibWl0LCBsb2FkXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSXMgdGhpcyBidXN0ZWQgd2hlbiB0aGUgUmVhY3QgdGVhbSBnZXRzIHJlYWwgd2VpcmQgYW5kIGNhbGxzIGVmZmVjdHNcbiAgICAvLyB0d2ljZSBvbiBtb3VudD8gIFdlIHJlYWxseSBqdXN0IG5lZWQgdG8gZ2FyYmFnZSBjb2xsZWN0IGhlcmUgd2hlbiB0aGlzXG4gICAgLy8gZmV0Y2hlciBpcyBubyBsb25nZXIgYXJvdW5kLlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJvdXRlcikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyByb3V0ZXIgYXZhaWxhYmxlIHRvIGNsZWFuIHVwIGZyb20gdXNlRmV0Y2hlcigpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByb3V0ZXIuZGVsZXRlRmV0Y2hlcihmZXRjaGVyS2V5KTtcbiAgICB9O1xuICB9LCBbcm91dGVyLCBmZXRjaGVyS2V5XSk7XG4gIHJldHVybiBmZXRjaGVyV2l0aENvbXBvbmVudHM7XG59XG4vKipcbiAqIFByb3ZpZGVzIGFsbCBmZXRjaGVycyBjdXJyZW50bHkgb24gdGhlIHBhZ2UuIFVzZWZ1bCBmb3IgbGF5b3V0cyBhbmQgcGFyZW50XG4gKiByb3V0ZXMgdGhhdCBuZWVkIHRvIHByb3ZpZGUgcGVuZGluZy9vcHRpbWlzdGljIFVJIHJlZ2FyZGluZyB0aGUgZmV0Y2guXG4gKi9cbmZ1bmN0aW9uIHVzZUZldGNoZXJzKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VGZXRjaGVycyk7XG4gIHJldHVybiBbLi4uc3RhdGUuZmV0Y2hlcnMudmFsdWVzKCldO1xufVxuY29uc3QgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZID0gXCJyZWFjdC1yb3V0ZXItc2Nyb2xsLXBvc2l0aW9uc1wiO1xubGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0ge307XG4vKipcbiAqIFdoZW4gcmVuZGVyZWQgaW5zaWRlIGEgUm91dGVyUHJvdmlkZXIsIHdpbGwgcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25zIG9uIG5hdmlnYXRpb25zXG4gKi9cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wMykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0aW9uKCk7XG4gIC8vIFRyaWdnZXIgbWFudWFsIHNjcm9sbCByZXN0b3JhdGlvbiB3aGlsZSB3ZSdyZSBhY3RpdmVcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pO1xuICAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuICB1c2VQYWdlSGlkZShSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG5hdmlnYXRpb24uc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICBsZXQga2V5ID0gKGdldEtleSA/IGdldEtleShsb2NhdGlvbiwgbWF0Y2hlcykgOiBudWxsKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gd2luZG93LnNjcm9sbFk7XG4gICAgfVxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkU2Nyb2xsUG9zaXRpb25zKSk7XG4gICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIjtcbiAgfSwgW3N0b3JhZ2VLZXksIGdldEtleSwgbmF2aWdhdGlvbi5zdGF0ZSwgbG9jYXRpb24sIG1hdGNoZXNdKSk7XG4gIC8vIFJlYWQgaW4gYW55IHNhdmVkIHNjcm9sbCBsb2NhdGlvbnNcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkpO1xuICAgICAgICBpZiAoc2Vzc2lvblBvc2l0aW9ucykge1xuICAgICAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gSlNPTi5wYXJzZShzZXNzaW9uUG9zaXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBuby1vcCwgdXNlIGRlZmF1bHQgZW1wdHkgb2JqZWN0XG4gICAgICB9XG4gICAgfSwgW3N0b3JhZ2VLZXldKTtcbiAgICAvLyBFbmFibGUgc2Nyb2xsIHJlc3RvcmF0aW9uIGluIHRoZSByb3V0ZXJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGdldEtleVdpdGhvdXRCYXNlbmFtZSA9IGdldEtleSAmJiBiYXNlbmFtZSAhPT0gXCIvXCIgPyAobG9jYXRpb24sIG1hdGNoZXMpID0+IGdldEtleSggLy8gU3RyaXAgdGhlIGJhc2VuYW1lIHRvIG1hdGNoIHVzZUxvY2F0aW9uKClcbiAgICAgIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgICAgICBwYXRobmFtZTogc3RyaXBCYXNlbmFtZShsb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KSwgbWF0Y2hlcykgOiBnZXRLZXk7XG4gICAgICBsZXQgZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uID0gcm91dGVyID09IG51bGwgPyB2b2lkIDAgOiByb3V0ZXIuZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24oc2F2ZWRTY3JvbGxQb3NpdGlvbnMsICgpID0+IHdpbmRvdy5zY3JvbGxZLCBnZXRLZXlXaXRob3V0QmFzZW5hbWUpO1xuICAgICAgcmV0dXJuICgpID0+IGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbiAmJiBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24oKTtcbiAgICB9LCBbcm91dGVyLCBiYXNlbmFtZSwgZ2V0S2V5XSk7XG4gICAgLy8gUmVzdG9yZSBzY3JvbGxpbmcgd2hlbiBzdGF0ZS5yZXN0b3JlU2Nyb2xsUG9zaXRpb24gY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBFeHBsaWNpdCBmYWxzZSBtZWFucyBkb24ndCBkbyBhbnl0aGluZyAodXNlZCBmb3Igc3VibWlzc2lvbnMpXG4gICAgICBpZiAocmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBiZWVuIGhlcmUgYmVmb3JlLCBzY3JvbGwgdG8gaXRcbiAgICAgIGlmICh0eXBlb2YgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyB0cnkgdG8gc2Nyb2xsIHRvIHRoZSBoYXNoXG4gICAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWNvZGVVUklDb21wb25lbnQobG9jYXRpb24uaGFzaC5zbGljZSgxKSkpO1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRG9uJ3QgcmVzZXQgaWYgdGhpcyBuYXZpZ2F0aW9uIG9wdGVkIG91dFxuICAgICAgaWYgKHByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBvdGhlcndpc2UgZ28gdG8gdGhlIHRvcCBvbiBuZXcgbG9jYXRpb25zXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSwgW2xvY2F0aW9uLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24sIHByZXZlbnRTY3JvbGxSZXNldF0pO1xuICB9XG59XG4vKipcbiAqIFNldHVwIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgb24gdGhlIHdpbmRvdydzIGBiZWZvcmV1bmxvYWRgIGV2ZW50LiBUaGlzIGlzXG4gKiB1c2VmdWwgZm9yIHNhdmluZyBzb21lIGRhdGEgdG8gYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIGp1c3QgYmVmb3JlIHRoZSBwYWdlXG4gKiByZWZyZXNoZXMuXG4gKlxuICogTm90ZTogVGhlIGBjYWxsYmFja2AgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gY3JlYXRlZCB3aXRoXG4gKiBgUmVhY3QudXNlQ2FsbGJhY2soKWAuXG4gKi9cbmZ1bmN0aW9uIHVzZUJlZm9yZVVubG9hZChjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogU2V0dXAgYSBjYWxsYmFjayB0byBiZSBmaXJlZCBvbiB0aGUgd2luZG93J3MgYHBhZ2VoaWRlYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLiAgVGhpcyBldmVudCBpcyBiZXR0ZXIgc3VwcG9ydGVkIHRoYW4gYmVmb3JldW5sb2FkIGFjcm9zcyBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBUaGUgYGNhbGxiYWNrYCBhcmd1bWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbiBjcmVhdGVkIHdpdGhcbiAqIGBSZWFjdC51c2VDYWxsYmFjaygpYC5cbiAqL1xuZnVuY3Rpb24gdXNlUGFnZUhpZGUoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IHtcbiAgICBjYXB0dXJlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvcHRzID0gY2FwdHVyZSAhPSBudWxsID8ge1xuICAgICAgY2FwdHVyZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH07XG4gIH0sIFtjYWxsYmFjaywgY2FwdHVyZV0pO1xufVxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCB1c2VCbG9ja2VyIHRvIHNob3cgYSB3aW5kb3cuY29uZmlybSBwcm9tcHQgdG8gdXNlcnMgaW5zdGVhZFxuICogb2YgYnVpbGRpbmcgYSBjdXN0b20gVUkgd2l0aCB1c2VCbG9ja2VyLlxuICpcbiAqIFdhcm5pbmc6IFRoaXMgaGFzICphIGxvdCBvZiByb3VnaCBlZGdlcyogYW5kIGJlaGF2ZXMgdmVyeSBkaWZmZXJlbnRseSAoYW5kXG4gKiB2ZXJ5IGluY29ycmVjdGx5IGluIHNvbWUgY2FzZXMpIGFjcm9zcyBicm93c2VycyBpZiB1c2VyIGNsaWNrIGFkZGl0aW9uXG4gKiBiYWNrL2ZvcndhcmQgbmF2aWdhdGlvbnMgd2hpbGUgdGhlIGNvbmZpcm0gaXMgb3Blbi4gIFVzZSBhdCB5b3VyIG93biByaXNrLlxuICovXG5mdW5jdGlvbiB1c2VQcm9tcHQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICB3aGVuLFxuICAgIG1lc3NhZ2VcbiAgfSA9IF9yZWY4O1xuICBsZXQgYmxvY2tlciA9IHVuc3RhYmxlX3VzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiKSB7XG4gICAgICBsZXQgcHJvY2VlZCA9IHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpO1xuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgLy8gVGhpcyB0aW1lb3V0IGlzIG5lZWRlZCB0byBhdm9pZCBhIHdlaXJkIFwicmFjZVwiIG9uIFBPUCBuYXZpZ2F0aW9uc1xuICAgICAgICAvLyBiZXR3ZWVuIHRoZSBgd2luZG93Lmhpc3RvcnlgIHJldmVydCBuYXZpZ2F0aW9uIGFuZCB0aGUgcmVzdWx0IG9mXG4gICAgICAgIC8vIGB3aW5kb3cuY29uZmlybWBcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgIXdoZW4pIHtcbiAgICAgIGJsb2NrZXIucmVzZXQoKTtcbiAgICB9XG4gIH0sIFtibG9ja2VyLCB3aGVuXSk7XG59XG4vLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjE2LjBcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzLCBtYXRjaFBhdGgsIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgVU5TQUZFX3dhcm5pbmcsIHJlc29sdmVUbywgcGFyc2VQYXRoLCBtYXRjaFJvdXRlcywgQWN0aW9uLCBVTlNBRkVfY29udmVydFJvdXRlTWF0Y2hUb1VpTWF0Y2gsIHN0cmlwQmFzZW5hbWUsIElETEVfQkxPQ0tFUiwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGNyZWF0ZU1lbW9yeUhpc3RvcnksIEFib3J0ZWREZWZlcnJlZEVycm9yLCBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAcmVtaXgtcnVuL3JvdXRlcic7XG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQWN0aW9uIGFzIE5hdmlnYXRpb25UeXBlLCBjcmVhdGVQYXRoLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVkaXJlY3REb2N1bWVudCwgcmVzb2x2ZVBhdGggfSBmcm9tICdAcmVtaXgtcnVuL3JvdXRlcic7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vLyBDcmVhdGUgcmVhY3Qtc3BlY2lmaWMgdHlwZXMgZnJvbSB0aGUgYWdub3N0aWMgdHlwZXMgaW4gQHJlbWl4LXJ1bi9yb3V0ZXIgdG9cbi8vIGV4cG9ydCBmcm9tIHJlYWN0LXJvdXRlclxuY29uc3QgRGF0YVJvdXRlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJcIjtcbn1cbmNvbnN0IERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlclN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclN0YXRlXCI7XG59XG5jb25zdCBBd2FpdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQXdhaXRDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJBd2FpdFwiO1xufVxuXG4vKipcbiAqIEEgTmF2aWdhdG9yIGlzIGEgXCJsb2NhdGlvbiBjaGFuZ2VyXCI7IGl0J3MgaG93IHlvdSBnZXQgdG8gZGlmZmVyZW50IGxvY2F0aW9ucy5cbiAqXG4gKiBFdmVyeSBoaXN0b3J5IGluc3RhbmNlIGNvbmZvcm1zIHRvIHRoZSBOYXZpZ2F0b3IgaW50ZXJmYWNlLCBidXQgdGhlXG4gKiBkaXN0aW5jdGlvbiBpcyB1c2VmdWwgcHJpbWFyaWx5IHdoZW4gaXQgY29tZXMgdG8gdGhlIGxvdy1sZXZlbCA8Um91dGVyPiBBUElcbiAqIHdoZXJlIGJvdGggdGhlIGxvY2F0aW9uIGFuZCBhIG5hdmlnYXRvciBtdXN0IGJlIHByb3ZpZGVkIHNlcGFyYXRlbHkgaW4gb3JkZXJcbiAqIHRvIGF2b2lkIFwidGVhcmluZ1wiIHRoYXQgbWF5IG9jY3VyIGluIGEgc3VzcGVuc2UtZW5hYmxlZCBhcHAgaWYgdGhlIGFjdGlvblxuICogYW5kL29yIGxvY2F0aW9uIHdlcmUgdG8gYmUgcmVhZCBkaXJlY3RseSBmcm9tIHRoZSBoaXN0b3J5IGluc3RhbmNlLlxuICovXG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdmlnYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJOYXZpZ2F0aW9uXCI7XG59XG5jb25zdCBMb2NhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuY29uc3QgUm91dGVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvdXRsZXQ6IG51bGwsXG4gIG1hdGNoZXM6IFtdLFxuICBpc0RhdGFSb3V0ZTogZmFsc2Vcbn0pO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIlJvdXRlXCI7XG59XG5jb25zdCBSb3V0ZUVycm9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUVycm9yQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVFcnJvclwiO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bGwgaHJlZiBmb3IgdGhlIGdpdmVuIFwidG9cIiB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgZm9yIGJ1aWxkaW5nXG4gKiBjdXN0b20gbGlua3MgdGhhdCBhcmUgYWxzbyBhY2Nlc3NpYmxlIGFuZCBwcmVzZXJ2ZSByaWdodC1jbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1ocmVmXG4gKi9cbmZ1bmN0aW9uIHVzZUhyZWYodG8sIF90ZW1wKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgaGFzaCxcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hcbiAgfSA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTtcblxuICAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gIC8vIHRvIGNyZWF0aW5nIHRoZSBocmVmLiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZSB0aGUgcmF3XG4gIC8vIGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2VcbiAgLy8gb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuICByZXR1cm4gbmF2aWdhdG9yLmNyZWF0ZUhyZWYoe1xuICAgIHBhdGhuYW1lOiBqb2luZWRQYXRobmFtZSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaFxuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaW4tcm91dGVyLWNvbnRleHRcbiAqL1xuZnVuY3Rpb24gdXNlSW5Sb3V0ZXJDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpICE9IG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbG9jYXRpb25cbiAqL1xuZnVuY3Rpb24gdXNlTG9jYXRpb24oKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGlvbi10eXBlXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBQYXRoTWF0Y2ggb2JqZWN0IGlmIHRoZSBnaXZlbiBwYXR0ZXJuIG1hdGNoZXMgdGhlIGN1cnJlbnQgVVJMLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgXCJhY3RpdmVcIiBzdGF0ZSwgZS5nLlxuICogPE5hdkxpbms+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW1hdGNoXG4gKi9cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VNYXRjaCgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuXG4vKipcbiAqIFRoZSBpbnRlcmZhY2UgZm9yIHRoZSBuYXZpZ2F0ZSgpIGZ1bmN0aW9uIHJldHVybmVkIGZyb20gdXNlTmF2aWdhdGUoKS5cbiAqL1xuXG5jb25zdCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcgPSBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIjtcblxuLy8gTXV0ZSB3YXJuaW5ncyBmb3IgY2FsbHMgdG8gdXNlTmF2aWdhdGUgaW4gU1NSIGVudmlyb25tZW50c1xuZnVuY3Rpb24gdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChjYikge1xuICBsZXQgaXNTdGF0aWMgPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWM7XG4gIGlmICghaXNTdGF0aWMpIHtcbiAgICAvLyBXZSBzaG91bGQgYmUgYWJsZSB0byBnZXQgcmlkIG9mIHRoaXMgb25jZSByZWFjdCAxOC4zIGlzIHJlbGVhc2VkXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yNjM5NVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdChjYik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gIGxldCB7XG4gICAgaXNEYXRhUm91dGVcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgLy8gQ29uZGl0aW9uYWwgdXNhZ2UgaXMgT0sgaGVyZSBiZWNhdXNlIHRoZSB1c2FnZSBvZiBhIGRhdGEgcm91dGVyIGlzIHN0YXRpY1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgcmV0dXJuIGlzRGF0YVJvdXRlID8gdXNlTmF2aWdhdGVTdGFibGUoKSA6IHVzZU5hdmlnYXRlVW5zdGFibGUoKTtcbn1cbmZ1bmN0aW9uIHVzZU5hdmlnYXRlVW5zdGFibGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcpIDogdm9pZCAwO1xuXG4gICAgLy8gU2hvcnQgY2lyY3VpdCBoZXJlIHNpbmNlIGlmIHRoaXMgaGFwcGVucyBvbiBmaXJzdCByZW5kZXIgdGhlIG5hdmlnYXRlXG4gICAgLy8gaXMgdXNlbGVzcyBiZWNhdXNlIHdlIGhhdmVuJ3Qgd2lyZWQgdXAgb3VyIGhpc3RvcnkgbGlzdGVuZXIgeWV0XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIG5hdmlnYXRvci5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwYXRoID0gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIG9wdGlvbnMucmVsYXRpdmUgPT09IFwicGF0aFwiKTtcblxuICAgIC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgICAvLyB0byBoYW5kaW5nIG9mZiB0byBoaXN0b3J5IChidXQgb25seSBpZiB3ZSdyZSBub3QgaW4gYSBkYXRhIHJvdXRlcixcbiAgICAvLyBvdGhlcndpc2UgaXQnbGwgcHJlcGVuZCB0aGUgYmFzZW5hbWUgaW5zaWRlIG9mIHRoZSByb3V0ZXIpLlxuICAgIC8vIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4gd2UgbmF2aWdhdGUgdG8gdGhlIHJhdyBiYXNlbmFtZVxuICAgIC8vIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2Ugb2YgYVxuICAgIC8vIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgbGlua3NcbiAgICBpZiAoZGF0YVJvdXRlckNvbnRleHQgPT0gbnVsbCAmJiBiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICAgIH1cbiAgICAoISFvcHRpb25zLnJlcGxhY2UgPyBuYXZpZ2F0b3IucmVwbGFjZSA6IG5hdmlnYXRvci5wdXNoKShwYXRoLCBvcHRpb25zLnN0YXRlLCBvcHRpb25zKTtcbiAgfSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZSwgZGF0YVJvdXRlckNvbnRleHRdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnRleHQgKGlmIHByb3ZpZGVkKSBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1vdXRsZXQtY29udGV4dFxuICovXG5mdW5jdGlvbiB1c2VPdXRsZXRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChPdXRsZXRDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS4gVXNlZCBpbnRlcm5hbGx5IGJ5IDxPdXRsZXQ+IHRvIHJlbmRlciBjaGlsZCByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuICBpZiAob3V0bGV0KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE91dGxldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgfSwgb3V0bGV0KTtcbiAgfVxuICByZXR1cm4gb3V0bGV0O1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBvZiB0aGUgZHluYW1pYyBwYXJhbXMgZnJvbSB0aGUgY3VycmVudFxuICogVVJMIHRoYXQgd2VyZSBtYXRjaGVkIGJ5IHRoZSByb3V0ZSBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXBhcmFtc1xuICovXG5mdW5jdGlvbiB1c2VQYXJhbXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgcmV0dXJuIHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xufVxuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYXRobmFtZSBvZiB0aGUgZ2l2ZW4gYHRvYCB2YWx1ZSBhZ2FpbnN0IHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXJlc29sdmVkLXBhdGhcbiAqL1xuZnVuY3Rpb24gdXNlUmVzb2x2ZWRQYXRoKHRvLCBfdGVtcDIpIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKSwgW3RvLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlXSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBvZiB0aGUgcm91dGUgdGhhdCBtYXRjaGVkIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBwcmVwYXJlZFxuICogd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0IHRvIHJlbmRlciB0aGUgcmVtYWluZGVyIG9mIHRoZSByb3V0ZSB0cmVlLiBSb3V0ZVxuICogZWxlbWVudHMgaW4gdGhlIHRyZWUgbXVzdCByZW5kZXIgYW4gPE91dGxldD4gdG8gcmVuZGVyIHRoZWlyIGNoaWxkIHJvdXRlJ3NcbiAqIGVsZW1lbnQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utcm91dGVzXG4gKi9cbmZ1bmN0aW9uIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnKSB7XG4gIHJldHVybiB1c2VSb3V0ZXNJbXBsKHJvdXRlcywgbG9jYXRpb25BcmcpO1xufVxuXG4vLyBJbnRlcm5hbCBpbXBsZW1lbnRhdGlvbiB3aXRoIGFjY2VwdCBvcHRpb25hbCBwYXJhbSBmb3IgUm91dGVyUHJvdmlkZXIgdXNhZ2VcbmZ1bmN0aW9uIHVzZVJvdXRlc0ltcGwocm91dGVzLCBsb2NhdGlvbkFyZywgZGF0YVJvdXRlclN0YXRlKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlUm91dGVzKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBZb3Ugd29uJ3QgZ2V0IGEgd2FybmluZyBhYm91dCAyIGRpZmZlcmVudCA8Um91dGVzPiB1bmRlciBhIDxSb3V0ZT5cbiAgICAvLyB3aXRob3V0IGEgdHJhaWxpbmcgKiwgYnV0IHRoaXMgaXMgYSBiZXN0LWVmZm9ydCB3YXJuaW5nIGFueXdheSBzaW5jZSB3ZVxuICAgIC8vIGNhbm5vdCBldmVuIGdpdmUgdGhlIHdhcm5pbmcgdW5sZXNzIHRoZXkgbGFuZCBhdCB0aGUgcGFyZW50IHJvdXRlLlxuICAgIC8vXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvL1xuICAgIC8vIDxSb3V0ZXM+XG4gICAgLy8gICB7LyogVGhpcyByb3V0ZSBwYXRoIE1VU1QgZW5kIHdpdGggLyogYmVjYXVzZSBvdGhlcndpc2VcbiAgICAvLyAgICAgICBpdCB3aWxsIG5ldmVyIG1hdGNoIC9ibG9nL3Bvc3QvMTIzICovfVxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2cvZmVlZFwiIGVsZW1lbnQ9ezxCbG9nRmVlZCAvPn0gLz5cbiAgICAvLyA8L1JvdXRlcz5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Um91dGVzPlxuICAgIC8vICAgICAgIDxSb3V0ZSBwYXRoPVwicG9zdC86aWRcIiBlbGVtZW50PXs8UG9zdCAvPn0gLz5cbiAgICAvLyAgICAgPC9Sb3V0ZXM+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBsZXQgcGFyZW50UGF0aCA9IHBhcmVudFJvdXRlICYmIHBhcmVudFJvdXRlLnBhdGggfHwgXCJcIjtcbiAgICB3YXJuaW5nT25jZShwYXJlbnRQYXRobmFtZSwgIXBhcmVudFJvdXRlIHx8IHBhcmVudFBhdGguZW5kc1dpdGgoXCIqXCIpLCBcIllvdSByZW5kZXJlZCBkZXNjZW5kYW50IDxSb3V0ZXM+IChvciBjYWxsZWQgYHVzZVJvdXRlcygpYCkgYXQgXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRobmFtZSArIFwiXFxcIiAodW5kZXIgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4pIGJ1dCB0aGUgXCIpICsgXCJwYXJlbnQgcm91dGUgcGF0aCBoYXMgbm8gdHJhaWxpbmcgXFxcIipcXFwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBcIiArIFwiZGVlcGVyLCB0aGUgcGFyZW50IHdvbid0IG1hdGNoIGFueW1vcmUgYW5kIHRoZXJlZm9yZSB0aGUgY2hpbGQgXCIgKyBcInJvdXRlcyB3aWxsIG5ldmVyIHJlbmRlci5cXG5cXG5cIiArIChcIlBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPiB0byA8Um91dGUgXCIpICsgKFwicGF0aD1cXFwiXCIgKyAocGFyZW50UGF0aCA9PT0gXCIvXCIgPyBcIipcIiA6IHBhcmVudFBhdGggKyBcIi8qXCIpICsgXCJcXFwiPi5cIikpO1xuICB9XG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuICBpZiAobG9jYXRpb25BcmcpIHtcbiAgICB2YXIgX3BhcnNlZExvY2F0aW9uQXJnJHBhO1xuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICAhKHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgfHwgKChfcGFyc2VkTG9jYXRpb25BcmckcGEgPSBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wYXJzZWRMb2NhdGlvbkFyZyRwYS5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSkpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBgPFJvdXRlcyBsb2NhdGlvbj5gIG9yIGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilgLCBcIiArIFwidGhlIGxvY2F0aW9uIHBhdGhuYW1lIG11c3QgYmVnaW4gd2l0aCB0aGUgcG9ydGlvbiBvZiB0aGUgVVJMIHBhdGhuYW1lIHRoYXQgd2FzIFwiICsgKFwibWF0Y2hlZCBieSBhbGwgcGFyZW50IHJvdXRlcy4gVGhlIGN1cnJlbnQgcGF0aG5hbWUgYmFzZSBpcyBcXFwiXCIgKyBwYXJlbnRQYXRobmFtZUJhc2UgKyBcIlxcXCIgXCIpICsgKFwiYnV0IHBhdGhuYW1lIFxcXCJcIiArIHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lICsgXCJcXFwiIHdhcyBnaXZlbiBpbiB0aGUgYGxvY2F0aW9uYCBwcm9wLlwiKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsb2NhdGlvbiA9IHBhcnNlZExvY2F0aW9uQXJnO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uID0gbG9jYXRpb25Gcm9tQ29udGV4dDtcbiAgfVxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcocGFyZW50Um91dGUgfHwgbWF0Y2hlcyAhPSBudWxsLCBcIk5vIHJvdXRlcyBtYXRjaGVkIGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLkNvbXBvbmVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIgKyBcImRvZXMgbm90IGhhdmUgYW4gZWxlbWVudCBvciBDb21wb25lbnQuIFRoaXMgbWVhbnMgaXQgd2lsbCByZW5kZXIgYW4gPE91dGxldCAvPiB3aXRoIGEgXCIgKyBcIm51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyAmJiBtYXRjaGVzLm1hcChtYXRjaCA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zLCBtYXRjaC5wYXJhbXMpLFxuICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSxcbiAgICAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLFxuICAgIC8vIFJlLWVuY29kZSBwYXRobmFtZXMgdGhhdCB3ZXJlIGRlY29kZWQgaW5zaWRlIG1hdGNoUm91dGVzXG4gICAgbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKG1hdGNoLnBhdGhuYW1lQmFzZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZUJhc2VdKVxuICB9KSksIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZSk7XG5cbiAgLy8gV2hlbiBhIHVzZXIgcGFzc2VzIGluIGEgYGxvY2F0aW9uQXJnYCwgdGhlIGFzc29jaWF0ZWQgcm91dGVzIG5lZWQgdG9cbiAgLy8gYmUgd3JhcHBlZCBpbiBhIG5ldyBgTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyYCBpbiBvcmRlciBmb3IgYHVzZUxvY2F0aW9uYFxuICAvLyB0byB1c2UgdGhlIHNjb3BlZCBsb2NhdGlvbiBpbnN0ZWFkIG9mIHRoZSBnbG9iYWwgbG9jYXRpb24uXG4gIGlmIChsb2NhdGlvbkFyZyAmJiByZW5kZXJlZE1hdGNoZXMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBsb2NhdGlvbjogX2V4dGVuZHMoe1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgICAgaGFzaDogXCJcIixcbiAgICAgICAgICBzdGF0ZTogbnVsbCxcbiAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiXG4gICAgICAgIH0sIGxvY2F0aW9uKSxcbiAgICAgICAgbmF2aWdhdGlvblR5cGU6IEFjdGlvbi5Qb3BcbiAgICAgIH1cbiAgICB9LCByZW5kZXJlZE1hdGNoZXMpO1xuICB9XG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXM7XG59XG5mdW5jdGlvbiBEZWZhdWx0RXJyb3JDb21wb25lbnQoKSB7XG4gIGxldCBlcnJvciA9IHVzZVJvdXRlRXJyb3IoKTtcbiAgbGV0IG1lc3NhZ2UgPSBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikgPyBlcnJvci5zdGF0dXMgKyBcIiBcIiArIGVycm9yLnN0YXR1c1RleHQgOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IEpTT04uc3RyaW5naWZ5KGVycm9yKTtcbiAgbGV0IHN0YWNrID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLnN0YWNrIDogbnVsbDtcbiAgbGV0IGxpZ2h0Z3JleSA9IFwicmdiYSgyMDAsMjAwLDIwMCwgMC41KVwiO1xuICBsZXQgcHJlU3R5bGVzID0ge1xuICAgIHBhZGRpbmc6IFwiMC41cmVtXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGNvZGVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIycHggNHB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBsaWdodGdyZXlcbiAgfTtcbiAgbGV0IGRldkluZm8gPSBudWxsO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGhhbmRsZWQgYnkgUmVhY3QgUm91dGVyIGRlZmF1bHQgRXJyb3JCb3VuZGFyeTpcIiwgZXJyb3IpO1xuICAgIGRldkluZm8gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1RDgzRFxcdURDQkYgSGV5IGRldmVsb3BlciBcXHVEODNEXFx1REM0QlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzIGJ5IHByb3ZpZGluZyB5b3VyIG93biBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCJFcnJvckJvdW5kYXJ5XCIpLCBcIiBvclwiLCBcIiBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCJlcnJvckVsZW1lbnRcIiksIFwiIHByb3Agb24geW91ciByb3V0ZS5cIikpO1xuICB9XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCBudWxsLCBcIlVuZXhwZWN0ZWQgQXBwbGljYXRpb24gRXJyb3IhXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiXG4gICAgfVxuICB9LCBtZXNzYWdlKSwgc3RhY2sgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInByZVwiLCB7XG4gICAgc3R5bGU6IHByZVN0eWxlc1xuICB9LCBzdGFjaykgOiBudWxsLCBkZXZJbmZvKTtcbn1cbmNvbnN0IGRlZmF1bHRFcnJvckVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEZWZhdWx0RXJyb3JDb21wb25lbnQsIG51bGwpO1xuY2xhc3MgUmVuZGVyRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24sXG4gICAgICByZXZhbGlkYXRpb246IHByb3BzLnJldmFsaWRhdGlvbixcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvclxuICAgIH07XG4gIH1cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgLy8gV2hlbiB3ZSBnZXQgaW50byBhbiBlcnJvciBzdGF0ZSwgdGhlIHVzZXIgd2lsbCBsaWtlbHkgY2xpY2sgXCJiYWNrXCIgdG8gdGhlXG4gICAgLy8gcHJldmlvdXMgcGFnZSB0aGF0IGRpZG4ndCBoYXZlIGFuIGVycm9yLiBCZWNhdXNlIHRoaXMgd3JhcHMgdGhlIGVudGlyZVxuICAgIC8vIGFwcGxpY2F0aW9uLCB0aGF0IHdpbGwgaGF2ZSBubyBlZmZlY3QtLXRoZSBlcnJvciBwYWdlIGNvbnRpbnVlcyB0byBkaXNwbGF5LlxuICAgIC8vIFRoaXMgZ2l2ZXMgdXMgYSBtZWNoYW5pc20gdG8gcmVjb3ZlciBmcm9tIHRoZSBlcnJvciB3aGVuIHRoZSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgIC8vXG4gICAgLy8gV2hldGhlciB3ZSdyZSBpbiBhbiBlcnJvciBzdGF0ZSBvciBub3QsIHdlIHVwZGF0ZSB0aGUgbG9jYXRpb24gaW4gc3RhdGVcbiAgICAvLyBzbyB0aGF0IHdoZW4gd2UgYXJlIGluIGFuIGVycm9yIHN0YXRlLCBpdCBnZXRzIHJlc2V0IHdoZW4gYSBuZXcgbG9jYXRpb25cbiAgICAvLyBjb21lcyBpbiBhbmQgdGhlIHVzZXIgcmVjb3ZlcnMgZnJvbSB0aGUgZXJyb3IuXG4gICAgaWYgKHN0YXRlLmxvY2F0aW9uICE9PSBwcm9wcy5sb2NhdGlvbiB8fCBzdGF0ZS5yZXZhbGlkYXRpb24gIT09IFwiaWRsZVwiICYmIHByb3BzLnJldmFsaWRhdGlvbiA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBwcm9wcy5lcnJvcixcbiAgICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uLFxuICAgICAgICByZXZhbGlkYXRpb246IHByb3BzLnJldmFsaWRhdGlvblxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSdyZSBub3QgY2hhbmdpbmcgbG9jYXRpb25zLCBwcmVzZXJ2ZSB0aGUgbG9jYXRpb24gYnV0IHN0aWxsIHN1cmZhY2VcbiAgICAvLyBhbnkgbmV3IGVycm9ycyB0aGF0IG1heSBjb21lIHRocm91Z2guIFdlIHJldGFpbiB0aGUgZXhpc3RpbmcgZXJyb3IsIHdlIGRvXG4gICAgLy8gdGhpcyBiZWNhdXNlIHRoZSBlcnJvciBwcm92aWRlZCBmcm9tIHRoZSBhcHAgc3RhdGUgbWF5IGJlIGNsZWFyZWQgd2l0aG91dFxuICAgIC8vIHRoZSBsb2NhdGlvbiBjaGFuZ2luZy5cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IHByb3BzLmVycm9yIHx8IHN0YXRlLmVycm9yLFxuICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0aW9uOiBwcm9wcy5yZXZhbGlkYXRpb24gfHwgc3RhdGUucmV2YWxpZGF0aW9uXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlJlYWN0IFJvdXRlciBjYXVnaHQgdGhlIGZvbGxvd2luZyBlcnJvciBkdXJpbmcgcmVuZGVyXCIsIGVycm9yLCBlcnJvckluZm8pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMucm91dGVDb250ZXh0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVFcnJvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgfSkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuZnVuY3Rpb24gUmVuZGVyZWRSb3V0ZShfcmVmKSB7XG4gIGxldCB7XG4gICAgcm91dGVDb250ZXh0LFxuICAgIG1hdGNoLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcblxuICAvLyBUcmFjayBob3cgZGVlcCB3ZSBnb3QgaW4gb3VyIHJlbmRlciBwYXNzIHRvIGVtdWxhdGUgU1NSIGNvbXBvbmVudERpZENhdGNoXG4gIC8vIGluIGEgRGF0YVN0YXRpY1JvdXRlclxuICBpZiAoZGF0YVJvdXRlckNvbnRleHQgJiYgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpY0NvbnRleHQgJiYgKG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5KSkge1xuICAgIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpY0NvbnRleHQuX2RlZXBlc3RSZW5kZXJlZEJvdW5kYXJ5SWQgPSBtYXRjaC5yb3V0ZS5pZDtcbiAgfVxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJvdXRlQ29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGUpIHtcbiAgdmFyIF9kYXRhUm91dGVyU3RhdGUyO1xuICBpZiAocGFyZW50TWF0Y2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50TWF0Y2hlcyA9IFtdO1xuICB9XG4gIGlmIChkYXRhUm91dGVyU3RhdGUgPT09IHZvaWQgMCkge1xuICAgIGRhdGFSb3V0ZXJTdGF0ZSA9IG51bGw7XG4gIH1cbiAgaWYgKG1hdGNoZXMgPT0gbnVsbCkge1xuICAgIHZhciBfZGF0YVJvdXRlclN0YXRlO1xuICAgIGlmICgoX2RhdGFSb3V0ZXJTdGF0ZSA9IGRhdGFSb3V0ZXJTdGF0ZSkgIT0gbnVsbCAmJiBfZGF0YVJvdXRlclN0YXRlLmVycm9ycykge1xuICAgICAgLy8gRG9uJ3QgYmFpbCBpZiB3ZSBoYXZlIGRhdGEgcm91dGVyIGVycm9ycyBzbyB3ZSBjYW4gcmVuZGVyIHRoZW0gaW4gdGhlXG4gICAgICAvLyBib3VuZGFyeS4gIFVzZSB0aGUgcHJlLW1hdGNoZWQgKG9yIHNoaW1tZWQpIG1hdGNoZXNcbiAgICAgIG1hdGNoZXMgPSBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBtYXRjaGVzO1xuXG4gIC8vIElmIHdlIGhhdmUgZGF0YSBlcnJvcnMsIHRyaW0gbWF0Y2hlcyB0byB0aGUgaGlnaGVzdCBlcnJvciBib3VuZGFyeVxuICBsZXQgZXJyb3JzID0gKF9kYXRhUm91dGVyU3RhdGUyID0gZGF0YVJvdXRlclN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2RhdGFSb3V0ZXJTdGF0ZTIuZXJyb3JzO1xuICBpZiAoZXJyb3JzICE9IG51bGwpIHtcbiAgICBsZXQgZXJyb3JJbmRleCA9IHJlbmRlcmVkTWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkICYmIChlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttLnJvdXRlLmlkXSkpO1xuICAgICEoZXJyb3JJbmRleCA+PSAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQ291bGQgbm90IGZpbmQgYSBtYXRjaGluZyByb3V0ZSBmb3IgZXJyb3JzIG9uIHJvdXRlIElEczogXCIgKyBPYmplY3Qua2V5cyhlcnJvcnMpLmpvaW4oXCIsXCIpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJlbmRlcmVkTWF0Y2hlcyA9IHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBNYXRoLm1pbihyZW5kZXJlZE1hdGNoZXMubGVuZ3RoLCBlcnJvckluZGV4ICsgMSkpO1xuICB9XG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgbGV0IGVycm9yID0gbWF0Y2gucm91dGUuaWQgPyBlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttYXRjaC5yb3V0ZS5pZF0gOiBudWxsO1xuICAgIC8vIE9ubHkgZGF0YSByb3V0ZXJzIGhhbmRsZSBlcnJvcnNcbiAgICBsZXQgZXJyb3JFbGVtZW50ID0gbnVsbDtcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICBlcnJvckVsZW1lbnQgPSBtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgZGVmYXVsdEVycm9yRWxlbWVudDtcbiAgICB9XG4gICAgbGV0IG1hdGNoZXMgPSBwYXJlbnRNYXRjaGVzLmNvbmNhdChyZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgaW5kZXggKyAxKSk7XG4gICAgbGV0IGdldENoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgbGV0IGNoaWxkcmVuO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5Db21wb25lbnQpIHtcbiAgICAgICAgLy8gTm90ZTogVGhpcyBpcyBhIGRlLW9wdGltaXplZCBwYXRoIHNpbmNlIFJlYWN0IHdvbid0IHJlLXVzZSB0aGVcbiAgICAgICAgLy8gUmVhY3RFbGVtZW50IHNpbmNlIGl0J3MgaWRlbnRpdHkgY2hhbmdlcyB3aXRoIGVhY2ggbmV3XG4gICAgICAgIC8vIFJlYWN0LmNyZWF0ZUVsZW1lbnQgY2FsbC4gIFdlIGtlZXAgdGhpcyBzbyBmb2xrcyBjYW4gdXNlXG4gICAgICAgIC8vIGA8Um91dGUgQ29tcG9uZW50PXsuLi59PmAgaW4gYDxSb3V0ZXM+YCBidXQgZ2VuZXJhbGx5IGBDb21wb25lbnRgXG4gICAgICAgIC8vIHVzYWdlIGlzIG9ubHkgYWR2aXNlZCBpbiBgUm91dGVyUHJvdmlkZXJgIHdoZW4gd2UgY2FuIGNvbnZlcnQgaXQgdG9cbiAgICAgICAgLy8gYGVsZW1lbnRgIGFoZWFkIG9mIHRpbWUuXG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobWF0Y2gucm91dGUuQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZWxlbWVudCkge1xuICAgICAgICBjaGlsZHJlbiA9IG1hdGNoLnJvdXRlLmVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbiA9IG91dGxldDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJlZFJvdXRlLCB7XG4gICAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgICAgb3V0bGV0LFxuICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgaXNEYXRhUm91dGU6IGRhdGFSb3V0ZXJTdGF0ZSAhPSBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBPbmx5IHdyYXAgaW4gYW4gZXJyb3IgYm91bmRhcnkgd2l0aGluIGRhdGEgcm91dGVyIHVzYWdlcyB3aGVuIHdlIGhhdmUgYW5cbiAgICAvLyBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCBvbiB0aGlzIHJvdXRlLiAgT3RoZXJ3aXNlIGxldCBpdCBidWJibGUgdXAgdG9cbiAgICAvLyBhbiBhbmNlc3RvciBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudFxuICAgIHJldHVybiBkYXRhUm91dGVyU3RhdGUgJiYgKG1hdGNoLnJvdXRlLkVycm9yQm91bmRhcnkgfHwgbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IGluZGV4ID09PSAwKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlckVycm9yQm91bmRhcnksIHtcbiAgICAgIGxvY2F0aW9uOiBkYXRhUm91dGVyU3RhdGUubG9jYXRpb24sXG4gICAgICByZXZhbGlkYXRpb246IGRhdGFSb3V0ZXJTdGF0ZS5yZXZhbGlkYXRpb24sXG4gICAgICBjb21wb25lbnQ6IGVycm9yRWxlbWVudCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbigpLFxuICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgIG91dGxldDogbnVsbCxcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgaXNEYXRhUm91dGU6IHRydWVcbiAgICAgIH1cbiAgICB9KSA6IGdldENoaWxkcmVuKCk7XG4gIH0sIG51bGwpO1xufVxudmFyIERhdGFSb3V0ZXJIb29rID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZUJsb2NrZXJcIl0gPSBcInVzZUJsb2NrZXJcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VSZXZhbGlkYXRvclwiXSA9IFwidXNlUmV2YWxpZGF0b3JcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VOYXZpZ2F0ZVN0YWJsZVwiXSA9IFwidXNlTmF2aWdhdGVcIjtcbiAgcmV0dXJuIERhdGFSb3V0ZXJIb29rO1xufShEYXRhUm91dGVySG9vayB8fCB7fSk7XG52YXIgRGF0YVJvdXRlclN0YXRlSG9vayA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoRGF0YVJvdXRlclN0YXRlSG9vaykge1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTG9hZGVyRGF0YVwiXSA9IFwidXNlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQWN0aW9uRGF0YVwiXSA9IFwidXNlQWN0aW9uRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVFcnJvclwiXSA9IFwidXNlUm91dGVFcnJvclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTmF2aWdhdGlvblwiXSA9IFwidXNlTmF2aWdhdGlvblwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVMb2FkZXJEYXRhXCJdID0gXCJ1c2VSb3V0ZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU1hdGNoZXNcIl0gPSBcInVzZU1hdGNoZXNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTmF2aWdhdGVTdGFibGVcIl0gPSBcInVzZU5hdmlnYXRlXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUlkXCJdID0gXCJ1c2VSb3V0ZUlkXCI7XG4gIHJldHVybiBEYXRhUm91dGVyU3RhdGVIb29rO1xufShEYXRhUm91dGVyU3RhdGVIb29rIHx8IHt9KTtcbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJDb250ZXh0KGhvb2tOYW1lKSB7XG4gIGxldCBjdHggPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlclN0YXRlKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gICFzdGF0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHJvdXRlO1xufVxuXG4vLyBJbnRlcm5hbCB2ZXJzaW9uIHdpdGggaG9va05hbWUtYXdhcmUgZGVidWdnaW5nXG5mdW5jdGlvbiB1c2VDdXJyZW50Um91dGVJZChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpO1xuICBsZXQgdGhpc1JvdXRlID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAhdGhpc1JvdXRlLnJvdXRlLmlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgaG9va05hbWUgKyBcIiBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdGhpc1JvdXRlLnJvdXRlLmlkO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIElEIGZvciB0aGUgbmVhcmVzdCBjb250ZXh0dWFsIHJvdXRlXG4gKi9cbmZ1bmN0aW9uIHVzZVJvdXRlSWQoKSB7XG4gIHJldHVybiB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlSWQpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiwgZGVmYXVsdGluZyB0byBhbiBcImlkbGVcIiBuYXZpZ2F0aW9uIHdoZW5cbiAqIG5vIG5hdmlnYXRpb24gaXMgaW4gcHJvZ3Jlc3NcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTmF2aWdhdGlvbik7XG4gIHJldHVybiBzdGF0ZS5uYXZpZ2F0aW9uO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSByZXZhbGlkYXRlIGZ1bmN0aW9uIGZvciBtYW51YWxseSB0cmlnZ2VyaW5nIHJldmFsaWRhdGlvbiwgYXMgd2VsbFxuICogYXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYW55IG1hbnVhbCByZXZhbGlkYXRpb25zXG4gKi9cbmZ1bmN0aW9uIHVzZVJldmFsaWRhdG9yKCkge1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByZXZhbGlkYXRlOiBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucmV2YWxpZGF0ZSxcbiAgICBzdGF0ZTogc3RhdGUucmV2YWxpZGF0aW9uXG4gIH0pLCBbZGF0YVJvdXRlckNvbnRleHQucm91dGVyLnJldmFsaWRhdGUsIHN0YXRlLnJldmFsaWRhdGlvbl0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGl2ZSByb3V0ZSBtYXRjaGVzLCB1c2VmdWwgZm9yIGFjY2Vzc2luZyBsb2FkZXJEYXRhIGZvclxuICogcGFyZW50L2NoaWxkIHJvdXRlcyBvciB0aGUgcm91dGUgXCJoYW5kbGVcIiBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB1c2VNYXRjaGVzKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXMsXG4gICAgbG9hZGVyRGF0YVxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTWF0Y2hlcyk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoZXMubWFwKG0gPT4gVU5TQUZFX2NvbnZlcnRSb3V0ZU1hdGNoVG9VaU1hdGNoKG0sIGxvYWRlckRhdGEpKSwgW21hdGNoZXMsIGxvYWRlckRhdGFdKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXIgZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgbG9hZGVyXG4gKi9cbmZ1bmN0aW9uIHVzZUxvYWRlckRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG4gIGlmIChzdGF0ZS5lcnJvcnMgJiYgc3RhdGUuZXJyb3JzW3JvdXRlSWRdICE9IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiWW91IGNhbm5vdCBgdXNlTG9hZGVyRGF0YWAgaW4gYW4gZXJyb3JFbGVtZW50IChyb3V0ZUlkOiBcIiArIHJvdXRlSWQgKyBcIilcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXJEYXRhIGZvciB0aGUgZ2l2ZW4gcm91dGVJZFxuICovXG5mdW5jdGlvbiB1c2VSb3V0ZUxvYWRlckRhdGEocm91dGVJZCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUxvYWRlckRhdGEpO1xuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhY3Rpb24gZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgYWN0aW9uXG4gKi9cbmZ1bmN0aW9uIHVzZUFjdGlvbkRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUFjdGlvbkRhdGEpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwidXNlQWN0aW9uRGF0YSBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKChzdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogc3RhdGUuYWN0aW9uRGF0YSkgfHwge30pWzBdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgZXJyb3IsIHdoaWNoIGNvdWxkIGJlIGEgbG9hZGVyL2FjdGlvblxuICogZXJyb3Igb3IgYSByZW5kZXIgZXJyb3IuICBUaGlzIGlzIGludGVuZGVkIHRvIGJlIGNhbGxlZCBmcm9tIHlvdXJcbiAqIEVycm9yQm91bmRhcnkvZXJyb3JFbGVtZW50IHRvIGRpc3BsYXkgYSBwcm9wZXIgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVFcnJvcigpIHtcbiAgdmFyIF9zdGF0ZSRlcnJvcnM7XG4gIGxldCBlcnJvciA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVFcnJvckNvbnRleHQpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUVycm9yKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpO1xuXG4gIC8vIElmIHRoaXMgd2FzIGEgcmVuZGVyIGVycm9yLCB3ZSBwdXQgaXQgaW4gYSBSb3V0ZUVycm9yIGNvbnRleHQgaW5zaWRlXG4gIC8vIG9mIFJlbmRlckVycm9yQm91bmRhcnlcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlIGxvb2sgZm9yIGVycm9ycyBmcm9tIG91ciBkYXRhIHJvdXRlciBzdGF0ZVxuICByZXR1cm4gKF9zdGF0ZSRlcnJvcnMgPSBzdGF0ZS5lcnJvcnMpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZXJyb3JzW3JvdXRlSWRdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGhhcHB5LXBhdGggZGF0YSBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIDxBd2FpdCAvPiB2YWx1ZVxuICovXG5mdW5jdGlvbiB1c2VBc3luY1ZhbHVlKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2RhdGE7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZXJyb3IgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciA8QXdhaXQgLz4gdmFsdWVcbiAqL1xuZnVuY3Rpb24gdXNlQXN5bmNFcnJvcigpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9lcnJvcjtcbn1cbmxldCBibG9ja2VySWQgPSAwO1xuXG4vKipcbiAqIEFsbG93IHRoZSBhcHBsaWNhdGlvbiB0byBibG9jayBuYXZpZ2F0aW9ucyB3aXRoaW4gdGhlIFNQQSBhbmQgcHJlc2VudCB0aGVcbiAqIHVzZXIgYSBjb25maXJtYXRpb24gZGlhbG9nIHRvIGNvbmZpcm0gdGhlIG5hdmlnYXRpb24uICBNb3N0bHkgdXNlZCB0byBhdm9pZFxuICogdXNpbmcgaGFsZi1maWxsZWQgZm9ybSBkYXRhLiAgVGhpcyBkb2VzIG5vdCBoYW5kbGUgaGFyZC1yZWxvYWRzIG9yXG4gKiBjcm9zcy1vcmlnaW4gbmF2aWdhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHVzZUJsb2NrZXIoc2hvdWxkQmxvY2spIHtcbiAgbGV0IHtcbiAgICByb3V0ZXIsXG4gICAgYmFzZW5hbWVcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IFtibG9ja2VyS2V5LCBzZXRCbG9ja2VyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soYXJnID0+IHtcbiAgICBpZiAodHlwZW9mIHNob3VsZEJsb2NrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiAhIXNob3VsZEJsb2NrO1xuICAgIH1cbiAgICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSB7XG4gICAgICByZXR1cm4gc2hvdWxkQmxvY2soYXJnKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGV5IHByb3ZpZGVkIHVzIGEgZnVuY3Rpb24gYW5kIHdlJ3ZlIGdvdCBhbiBhY3RpdmUgYmFzZW5hbWUsIHN0cmlwXG4gICAgLy8gaXQgZnJvbSB0aGUgbG9jYXRpb25zIHdlIGV4cG9zZSB0byB0aGUgdXNlciB0byBtYXRjaCB0aGUgYmVoYXZpb3Igb2ZcbiAgICAvLyB1c2VMb2NhdGlvblxuICAgIGxldCB7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSA9IGFyZztcbiAgICByZXR1cm4gc2hvdWxkQmxvY2soe1xuICAgICAgY3VycmVudExvY2F0aW9uOiBfZXh0ZW5kcyh7fSwgY3VycmVudExvY2F0aW9uLCB7XG4gICAgICAgIHBhdGhuYW1lOiBzdHJpcEJhc2VuYW1lKGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZSwgYmFzZW5hbWUpIHx8IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSksXG4gICAgICBuZXh0TG9jYXRpb246IF9leHRlbmRzKHt9LCBuZXh0TG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHN0cmlwQmFzZW5hbWUobmV4dExvY2F0aW9uLnBhdGhuYW1lLCBiYXNlbmFtZSkgfHwgbmV4dExvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KSxcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KTtcbiAgfSwgW2Jhc2VuYW1lLCBzaG91bGRCbG9ja10pO1xuXG4gIC8vIFRoaXMgZWZmZWN0IGlzIGluIGNoYXJnZSBvZiBibG9ja2VyIGtleSBhc3NpZ25tZW50IGFuZCBkZWxldGlvbiAod2hpY2ggaXNcbiAgLy8gdGlnaHRseSBjb3VwbGVkIHRvIHRoZSBrZXkpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGtleSA9IFN0cmluZygrK2Jsb2NrZXJJZCk7XG4gICAgc2V0QmxvY2tlcktleShrZXkpO1xuICAgIHJldHVybiAoKSA9PiByb3V0ZXIuZGVsZXRlQmxvY2tlcihrZXkpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgLy8gVGhpcyBlZmZlY3QgaGFuZGxlcyBhc3NpZ25pbmcgdGhlIGJsb2NrZXJGdW5jdGlvbi4gIFRoaXMgaXMgdG8gaGFuZGxlXG4gIC8vIHVuc3RhYmxlIGJsb2NrZXIgZnVuY3Rpb24gaWRlbnRpdGllcywgYW5kIGhhcHBlbnMgb25seSBhZnRlciB0aGUgcHJpb3JcbiAgLy8gZWZmZWN0IHNvIHdlIGRvbid0IGdldCBhbiBvcnBoYW5lZCBibG9ja2VyRnVuY3Rpb24gaW4gdGhlIHJvdXRlciB3aXRoIGFcbiAgLy8ga2V5IG9mIFwiXCIuICBVbnRpbCB0aGVuIHdlIGp1c3QgaGF2ZSB0aGUgSURMRV9CTE9DS0VSLlxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyS2V5ICE9PSBcIlwiKSB7XG4gICAgICByb3V0ZXIuZ2V0QmxvY2tlcihibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb24pO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSk7XG5cbiAgLy8gUHJlZmVyIHRoZSBibG9ja2VyIGZyb20gYHN0YXRlYCBub3QgYHJvdXRlci5zdGF0ZWAgc2luY2UgRGF0YVJvdXRlckNvbnRleHRcbiAgLy8gaXMgbWVtb2l6ZWQgc28gdGhpcyBlbnN1cmVzIHdlIHVwZGF0ZSBvbiBibG9ja2VyIHN0YXRlIHVwZGF0ZXNcbiAgcmV0dXJuIGJsb2NrZXJLZXkgJiYgc3RhdGUuYmxvY2tlcnMuaGFzKGJsb2NrZXJLZXkpID8gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpIDogSURMRV9CTE9DS0VSO1xufVxuXG4vKipcbiAqIFN0YWJsZSB2ZXJzaW9uIG9mIHVzZU5hdmlnYXRlIHRoYXQgaXMgdXNlZCB3aGVuIHdlIGFyZSBpbiB0aGUgY29udGV4dCBvZlxuICogYSBSb3V0ZXJQcm92aWRlci5cbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGVTdGFibGUoKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VOYXZpZ2F0ZVN0YWJsZSk7XG4gIGxldCBpZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTmF2aWdhdGVTdGFibGUpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhhY3RpdmVSZWYuY3VycmVudCwgbmF2aWdhdGVFZmZlY3RXYXJuaW5nKSA6IHZvaWQgMDtcblxuICAgIC8vIFNob3J0IGNpcmN1aXQgaGVyZSBzaW5jZSBpZiB0aGlzIGhhcHBlbnMgb24gZmlyc3QgcmVuZGVyIHRoZSBuYXZpZ2F0ZVxuICAgIC8vIGlzIHVzZWxlc3MgYmVjYXVzZSB3ZSBoYXZlbid0IHdpcmVkIHVwIG91ciByb3V0ZXIgc3Vic2NyaWJlciB5ZXRcbiAgICBpZiAoIWFjdGl2ZVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKHRvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKHRvLCBfZXh0ZW5kcyh7XG4gICAgICAgIGZyb21Sb3V0ZUlkOiBpZFxuICAgICAgfSwgb3B0aW9ucykpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgaWRdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgYWxyZWFkeVdhcm5lZCA9IHt9O1xuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gIFdlYnBhY2sgKyBSZWFjdCAxNyBmYWlscyB0byBjb21waWxlIG9uIGFueSBvZiB0aGUgZm9sbG93aW5nIGJlY2F1c2Ugd2VicGFja1xuICBjb21wbGFpbnMgdGhhdCBgc3RhcnRUcmFuc2l0aW9uYCBkb2Vzbid0IGV4aXN0IGluIGBSZWFjdGA6XG4gICogaW1wb3J0IHsgc3RhcnRUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0XCJcbiAgKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIGZyb20gXCJyZWFjdFwiO1xuICAgIFwic3RhcnRUcmFuc2l0aW9uXCIgaW4gUmVhY3QgPyBSZWFjdC5zdGFydFRyYW5zaXRpb24oKCkgPT4gc2V0U3RhdGUoKSkgOiBzZXRTdGF0ZSgpXG4gICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBmcm9tIFwicmVhY3RcIjtcbiAgICBcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0ID8gUmVhY3RbXCJzdGFydFRyYW5zaXRpb25cIl0oKCkgPT4gc2V0U3RhdGUoKSkgOiBzZXRTdGF0ZSgpXG5cbiAgTW92aW5nIGl0IHRvIGEgY29uc3RhbnQgc3VjaCBhcyB0aGUgZm9sbG93aW5nIHNvbHZlcyB0aGUgV2VicGFjay9SZWFjdCAxNyBpc3N1ZTpcbiAgKiBpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIGZyb20gXCJyZWFjdFwiO1xuICAgIGNvbnN0IFNUQVJUX1RSQU5TSVRJT04gPSBcInN0YXJ0VHJhbnNpdGlvblwiO1xuICAgIFNUQVJUX1RSQU5TSVRJT04gaW4gUmVhY3QgPyBSZWFjdFtTVEFSVF9UUkFOU0lUSU9OXSgoKSA9PiBzZXRTdGF0ZSgpKSA6IHNldFN0YXRlKClcblxuICBIb3dldmVyLCB0aGF0IGludHJvZHVjZXMgd2VicGFjay90ZXJzZXIgbWluaWZpY2F0aW9uIGlzc3VlcyBpbiBwcm9kdWN0aW9uIGJ1aWxkc1xuICBpbiBSZWFjdCAxOCB3aGVyZSBtaW5pZmljYXRpb24vb2JmdXNjYXRpb24gZW5kcyB1cCByZW1vdmluZyB0aGUgY2FsbCBvZlxuICBSZWFjdC5zdGFydFRyYW5zaXRpb24gZW50aXJlbHkgZnJvbSB0aGUgZmlyc3QgaGFsZiBvZiB0aGUgdGVybmFyeS4gIEdyYWJiaW5nXG4gIHRoaXMgZXhwb3J0ZWQgcmVmZXJlbmNlIG9uY2UgdXAgZnJvbnQgcmVzb2x2ZXMgdGhhdCBpc3N1ZS5cblxuICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9yZWFjdC1yb3V0ZXIvaXNzdWVzLzEwNTc5XG4qL1xuY29uc3QgU1RBUlRfVFJBTlNJVElPTiA9IFwic3RhcnRUcmFuc2l0aW9uXCI7XG5jb25zdCBzdGFydFRyYW5zaXRpb25JbXBsID0gUmVhY3RbU1RBUlRfVFJBTlNJVElPTl07XG5cbi8qKlxuICogR2l2ZW4gYSBSZW1peCBSb3V0ZXIgaW5zdGFuY2UsIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgVUlcbiAqL1xuZnVuY3Rpb24gUm91dGVyUHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGZhbGxiYWNrRWxlbWVudCxcbiAgICByb3V0ZXIsXG4gICAgZnV0dXJlXG4gIH0gPSBfcmVmO1xuICAvLyBOZWVkIHRvIHVzZSBhIGxheW91dCBlZmZlY3QgaGVyZSBzbyB3ZSBhcmUgc3Vic2NyaWJlZCBlYXJseSBlbm91Z2ggdG9cbiAgLy8gcGljayB1cCBvbiBhbnkgcmVuZGVyLWRyaXZlbiByZWRpcmVjdHMvbmF2aWdhdGlvbnMgKHVzZUVmZmVjdC88TmF2aWdhdGU+KVxuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZUltcGxdID0gUmVhY3QudXNlU3RhdGUocm91dGVyLnN0YXRlKTtcbiAgbGV0IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb25cbiAgfSA9IGZ1dHVyZSB8fCB7fTtcbiAgbGV0IHNldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2sobmV3U3RhdGUgPT4ge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvbiAmJiBzdGFydFRyYW5zaXRpb25JbXBsID8gc3RhcnRUcmFuc2l0aW9uSW1wbCgoKSA9PiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpKSA6IHNldFN0YXRlSW1wbChuZXdTdGF0ZSk7XG4gIH0sIFtzZXRTdGF0ZUltcGwsIHY3X3N0YXJ0VHJhbnNpdGlvbl0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gcm91dGVyLnN1YnNjcmliZShzZXRTdGF0ZSksIFtyb3V0ZXIsIHNldFN0YXRlXSk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlSHJlZjogcm91dGVyLmNyZWF0ZUhyZWYsXG4gICAgICBlbmNvZGVMb2NhdGlvbjogcm91dGVyLmVuY29kZUxvY2F0aW9uLFxuICAgICAgZ286IG4gPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZSwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KSxcbiAgICAgIHJlcGxhY2U6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSlcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG4gIGxldCBiYXNlbmFtZSA9IHJvdXRlci5iYXNlbmFtZSB8fCBcIi9cIjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiAoe1xuICAgIHJvdXRlcixcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBmYWxzZSxcbiAgICBiYXNlbmFtZVxuICB9KSwgW3JvdXRlciwgbmF2aWdhdG9yLCBiYXNlbmFtZV0pO1xuXG4gIC8vIFRoZSBmcmFnbWVudCBhbmQge251bGx9IGhlcmUgYXJlIGltcG9ydGFudCEgIFdlIG5lZWQgdGhlbSB0byBrZWVwIFJlYWN0IDE4J3NcbiAgLy8gdXNlSWQgaGFwcHkgd2hlbiB3ZSBhcmUgc2VydmVyLXJlbmRlcmluZyBzaW5jZSB3ZSBtYXkgaGF2ZSBhIDxzY3JpcHQ+IGhlcmVcbiAgLy8gY29udGFpbmluZyB0aGUgaHlkcmF0ZWQgc2VydmVyLXNpZGUgc3RhdGljQ29udGV4dCAoZnJvbSBTdGF0aWNSb3V0ZXJQcm92aWRlcikuXG4gIC8vIHVzZUlkIHJlbGllcyBvbiB0aGUgY29tcG9uZW50IHRyZWUgc3RydWN0dXJlIHRvIGdlbmVyYXRlIGRldGVybWluaXN0aWMgaWQnc1xuICAvLyBzbyB3ZSBuZWVkIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIG9uIHRoZSBjbGllbnQgZXZlbiB0aG91Z2hcbiAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgPHNjcmlwdD4gdGFnXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogZGF0YVJvdXRlckNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdGF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5oaXN0b3J5QWN0aW9uLFxuICAgIG5hdmlnYXRvcjogbmF2aWdhdG9yXG4gIH0sIHN0YXRlLmluaXRpYWxpemVkID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlcywge1xuICAgIHJvdXRlczogcm91dGVyLnJvdXRlcyxcbiAgICBzdGF0ZTogc3RhdGVcbiAgfSkgOiBmYWxsYmFja0VsZW1lbnQpKSksIG51bGwpO1xufVxuZnVuY3Rpb24gRGF0YVJvdXRlcyhfcmVmMikge1xuICBsZXQge1xuICAgIHJvdXRlcyxcbiAgICBzdGF0ZVxuICB9ID0gX3JlZjI7XG4gIHJldHVybiB1c2VSb3V0ZXNJbXBsKHJvdXRlcywgdW5kZWZpbmVkLCBzdGF0ZSk7XG59XG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvbWVtb3J5LXJvdXRlclxuICovXG5mdW5jdGlvbiBNZW1vcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXgsXG4gICAgZnV0dXJlXG4gIH0gPSBfcmVmMztcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleCxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlSW1wbF0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgbGV0IHtcbiAgICB2N19zdGFydFRyYW5zaXRpb25cbiAgfSA9IGZ1dHVyZSB8fCB7fTtcbiAgbGV0IHNldFN0YXRlID0gUmVhY3QudXNlQ2FsbGJhY2sobmV3U3RhdGUgPT4ge1xuICAgIHY3X3N0YXJ0VHJhbnNpdGlvbiAmJiBzdGFydFRyYW5zaXRpb25JbXBsID8gc3RhcnRUcmFuc2l0aW9uSW1wbCgoKSA9PiBzZXRTdGF0ZUltcGwobmV3U3RhdGUpKSA6IHNldFN0YXRlSW1wbChuZXdTdGF0ZSk7XG4gIH0sIFtzZXRTdGF0ZUltcGwsIHY3X3N0YXJ0VHJhbnNpdGlvbl0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeSwgc2V0U3RhdGVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIE5vdGU6IFRoaXMgQVBJIGlzIG1vc3RseSB1c2VmdWwgaW4gUmVhY3QuQ29tcG9uZW50IHN1YmNsYXNzZXMgdGhhdCBhcmUgbm90XG4gKiBhYmxlIHRvIHVzZSBob29rcy4gSW4gZnVuY3Rpb25hbCBjb21wb25lbnRzLCB3ZSByZWNvbW1lbmQgeW91IHVzZSB0aGVcbiAqIGB1c2VOYXZpZ2F0ZWAgaG9vayBpbnN0ZWFkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9uYXZpZ2F0ZVxuICovXG5mdW5jdGlvbiBOYXZpZ2F0ZShfcmVmNCkge1xuICBsZXQge1xuICAgIHRvLFxuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF9yZWY0O1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZlxuICAvLyB0aGUgcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcIjxOYXZpZ2F0ZT4gbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoIVJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpLnN0YXRpYywgXCI8TmF2aWdhdGU+IG11c3Qgbm90IGJlIHVzZWQgb24gdGhlIGluaXRpYWwgcmVuZGVyIGluIGEgPFN0YXRpY1JvdXRlcj4uIFwiICsgXCJUaGlzIGlzIGEgbm8tb3AsIGJ1dCB5b3Ugc2hvdWxkIG1vZGlmeSB5b3VyIGNvZGUgc28gdGhlIDxOYXZpZ2F0ZT4gaXMgXCIgKyBcIm9ubHkgZXZlciByZW5kZXJlZCBpbiByZXNwb25zZSB0byBzb21lIHVzZXIgaW50ZXJhY3Rpb24gb3Igc3RhdGUgY2hhbmdlLlwiKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgLy8gUmVzb2x2ZSB0aGUgcGF0aCBvdXRzaWRlIG9mIHRoZSBlZmZlY3Qgc28gdGhhdCB3aGVuIGVmZmVjdHMgcnVuIHR3aWNlIGluXG4gIC8vIFN0cmljdE1vZGUgdGhleSBuYXZpZ2F0ZSB0byB0aGUgc2FtZSBwbGFjZVxuICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZSA9PT0gXCJwYXRoXCIpO1xuICBsZXQganNvblBhdGggPSBKU09OLnN0cmluZ2lmeShwYXRoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IG5hdmlnYXRlKEpTT04ucGFyc2UoanNvblBhdGgpLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICByZWxhdGl2ZVxuICB9KSwgW25hdmlnYXRlLCBqc29uUGF0aCwgcmVsYXRpdmUsIHJlcGxhY2UsIHN0YXRlXSk7XG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiQSA8Um91dGU+IGlzIG9ubHkgZXZlciB0byBiZSB1c2VkIGFzIHRoZSBjaGlsZCBvZiA8Um91dGVzPiBlbGVtZW50LCBcIiArIFwibmV2ZXIgcmVuZGVyZWQgZGlyZWN0bHkuIFBsZWFzZSB3cmFwIHlvdXIgPFJvdXRlPiBpbiBhIDxSb3V0ZXM+LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDtcbn1cbi8qKlxuICogUHJvdmlkZXMgbG9jYXRpb24gY29udGV4dCBmb3IgdGhlIHJlc3Qgb2YgdGhlIGFwcC5cbiAqXG4gKiBOb3RlOiBZb3UgdXN1YWxseSB3b24ndCByZW5kZXIgYSA8Um91dGVyPiBkaXJlY3RseS4gSW5zdGVhZCwgeW91J2xsIHJlbmRlciBhXG4gKiByb3V0ZXIgdGhhdCBpcyBtb3JlIHNwZWNpZmljIHRvIHlvdXIgZW52aXJvbm1lbnQgc3VjaCBhcyBhIDxCcm93c2VyUm91dGVyPlxuICogaW4gd2ViIGJyb3dzZXJzIG9yIGEgPFN0YXRpY1JvdXRlcj4gZm9yIHNlcnZlciByZW5kZXJpbmcuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9yb3V0ZXItY29tcG9uZW50cy9yb3V0ZXJcbiAqL1xuZnVuY3Rpb24gUm91dGVyKF9yZWY1KSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lUHJvcCA9IFwiL1wiLFxuICAgIGNoaWxkcmVuID0gbnVsbCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb25Qcm9wLFxuICAgIG5hdmlnYXRpb25UeXBlID0gQWN0aW9uLlBvcCxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wID0gZmFsc2VcbiAgfSA9IF9yZWY1O1xuICAhIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJZb3UgY2Fubm90IHJlbmRlciBhIDxSb3V0ZXI+IGluc2lkZSBhbm90aGVyIDxSb3V0ZXI+LlwiICsgXCIgWW91IHNob3VsZCBuZXZlciBoYXZlIG1vcmUgdGhhbiBvbmUgaW4geW91ciBhcHAuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG5cbiAgLy8gUHJlc2VydmUgdHJhaWxpbmcgc2xhc2hlcyBvbiBiYXNlbmFtZSwgc28gd2UgY2FuIGxldCB0aGUgdXNlciBjb250cm9sXG4gIC8vIHRoZSBlbmZvcmNlbWVudCBvZiB0cmFpbGluZyBzbGFzaGVzIHRocm91Z2hvdXQgdGhlIGFwcFxuICBsZXQgYmFzZW5hbWUgPSBiYXNlbmFtZVByb3AucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG4gIGxldCBuYXZpZ2F0aW9uQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wXG4gIH0pLCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgc3RhdGljUHJvcF0pO1xuICBpZiAodHlwZW9mIGxvY2F0aW9uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvY2F0aW9uUHJvcCA9IHBhcnNlUGF0aChsb2NhdGlvblByb3ApO1xuICB9XG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiLFxuICAgIHN0YXRlID0gbnVsbCxcbiAgICBrZXkgPSBcImRlZmF1bHRcIlxuICB9ID0gbG9jYXRpb25Qcm9wO1xuICBsZXQgbG9jYXRpb25Db250ZXh0ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG4gICAgaWYgKHRyYWlsaW5nUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAga2V5XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXksIG5hdmlnYXRpb25UeXBlXSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGxvY2F0aW9uQ29udGV4dCAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcbiAgaWYgKGxvY2F0aW9uQ29udGV4dCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmlnYXRpb25Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB2YWx1ZTogbG9jYXRpb25Db250ZXh0XG4gIH0pKTtcbn1cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL3JvdXRlc1xuICovXG5mdW5jdGlvbiBSb3V0ZXMoX3JlZjYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBsb2NhdGlvblxuICB9ID0gX3JlZjY7XG4gIHJldHVybiB1c2VSb3V0ZXMoY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKSwgbG9jYXRpb24pO1xufVxuLyoqXG4gKiBDb21wb25lbnQgdG8gdXNlIGZvciByZW5kZXJpbmcgbGF6aWx5IGxvYWRlZCBkYXRhIGZyb20gcmV0dXJuaW5nIGRlZmVyKClcbiAqIGluIGEgbG9hZGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEF3YWl0KF9yZWY3KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3JFbGVtZW50LFxuICAgIHJlc29sdmVcbiAgfSA9IF9yZWY3O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRFcnJvckJvdW5kYXJ5LCB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBlcnJvckVsZW1lbnQ6IGVycm9yRWxlbWVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNvbHZlQXdhaXQsIG51bGwsIGNoaWxkcmVuKSk7XG59XG52YXIgQXdhaXRSZW5kZXJTdGF0dXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKEF3YWl0UmVuZGVyU3RhdHVzKSB7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wicGVuZGluZ1wiXSA9IDBdID0gXCJwZW5kaW5nXCI7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wic3VjY2Vzc1wiXSA9IDFdID0gXCJzdWNjZXNzXCI7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wiZXJyb3JcIl0gPSAyXSA9IFwiZXJyb3JcIjtcbiAgcmV0dXJuIEF3YWl0UmVuZGVyU3RhdHVzO1xufShBd2FpdFJlbmRlclN0YXR1cyB8fCB7fSk7XG5jb25zdCBuZXZlclNldHRsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuY2xhc3MgQXdhaXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yXG4gICAgfTtcbiAgfVxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIjxBd2FpdD4gY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3JFbGVtZW50LFxuICAgICAgcmVzb2x2ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICBsZXQgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICBpZiAoIShyZXNvbHZlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIC8vIERpZG4ndCBnZXQgYSBwcm9taXNlIC0gcHJvdmlkZSBhcyBhIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnN1Y2Nlc3M7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVzb2x2ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICAvLyBDYXVnaHQgYSByZW5kZXIgZXJyb3IsIHByb3ZpZGUgaXQgYXMgYSByZWplY3RlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcjtcbiAgICAgIGxldCByZW5kZXJFcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoKS5jYXRjaCgoKSA9PiB7fSk7IC8vIEF2b2lkIHVuaGFuZGxlZCByZWplY3Rpb24gd2FybmluZ3NcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVuZGVyRXJyb3JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzb2x2ZS5fdHJhY2tlZCkge1xuICAgICAgLy8gQWxyZWFkeSB0cmFja2VkIHByb21pc2UgLSBjaGVjayBjb250ZW50c1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICBzdGF0dXMgPSBwcm9taXNlLl9lcnJvciAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgOiBwcm9taXNlLl9kYXRhICE9PSB1bmRlZmluZWQgPyBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzIDogQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmF3ICh1bnRyYWNrZWQpIHByb21pc2UgLSB0cmFjayBpdFxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSByZXNvbHZlLnRoZW4oZGF0YSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgICAgfSksIGVycm9yID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgcHJvbWlzZS5fZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgLy8gRnJlZXplIHRoZSBVSSBieSB0aHJvd2luZyBhIG5ldmVyIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHRocm93IG5ldmVyU2V0dGxlZFByb21pc2U7XG4gICAgfVxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yICYmICFlcnJvckVsZW1lbnQpIHtcbiAgICAgIC8vIE5vIGVycm9yRWxlbWVudCwgdGhyb3cgdG8gdGhlIG5lYXJlc3Qgcm91dGUtbGV2ZWwgZXJyb3IgYm91bmRhcnlcbiAgICAgIHRocm93IHByb21pc2UuX2Vycm9yO1xuICAgIH1cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcikge1xuICAgICAgLy8gUmVuZGVyIHZpYSBvdXIgZXJyb3JFbGVtZW50XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9taXNlLFxuICAgICAgICBjaGlsZHJlbjogZXJyb3JFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgLy8gUmVuZGVyIGNoaWxkcmVuIHdpdGggcmVzb2x2ZWQgdmFsdWVcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVGhyb3cgdG8gdGhlIHN1c3BlbnNlIGJvdW5kYXJ5XG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBJbmRpcmVjdGlvbiB0byBsZXZlcmFnZSB1c2VBc3luY1ZhbHVlIGZvciBhIHJlbmRlci1wcm9wIEFQSSBvbiA8QXdhaXQ+XG4gKi9cbmZ1bmN0aW9uIFJlc29sdmVBd2FpdChfcmVmOCkge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmODtcbiAgbGV0IGRhdGEgPSB1c2VBc3luY1ZhbHVlKCk7XG4gIGxldCB0b1JlbmRlciA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oZGF0YSkgOiBjaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0b1JlbmRlcik7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFVUSUxTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlcyBhIHJvdXRlIGNvbmZpZyBmcm9tIGEgUmVhY3QgXCJjaGlsZHJlblwiIG9iamVjdCwgd2hpY2ggaXMgdXN1YWxseVxuICogZWl0aGVyIGEgYDxSb3V0ZT5gIGVsZW1lbnQgb3IgYW4gYXJyYXkgb2YgdGhlbS4gVXNlZCBpbnRlcm5hbGx5IGJ5XG4gKiBgPFJvdXRlcz5gIHRvIGNyZWF0ZSBhIHJvdXRlIGNvbmZpZyBmcm9tIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2NyZWF0ZS1yb3V0ZXMtZnJvbS1jaGlsZHJlblxuICovXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudFBhdGgpIHtcbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBbXTtcbiAgfVxuICBsZXQgcm91dGVzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSWdub3JlIG5vbi1lbGVtZW50cy4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIG1vcmUgZWFzaWx5IGlubGluZVxuICAgICAgLy8gY29uZGl0aW9uYWxzIGluIHRoZWlyIHJvdXRlIGNvbmZpZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcbiAgICBpZiAoZWxlbWVudC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgICAgLy8gVHJhbnNwYXJlbnRseSBzdXBwb3J0IFJlYWN0LkZyYWdtZW50IGFuZCBpdHMgY2hpbGRyZW4uXG4gICAgICByb3V0ZXMucHVzaC5hcHBseShyb3V0ZXMsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuLCB0cmVlUGF0aCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJbXCIgKyAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVsZW1lbnQudHlwZSA6IGVsZW1lbnQudHlwZS5uYW1lKSArIFwiXSBpcyBub3QgYSA8Um91dGU+IGNvbXBvbmVudC4gQWxsIGNvbXBvbmVudCBjaGlsZHJlbiBvZiA8Um91dGVzPiBtdXN0IGJlIGEgPFJvdXRlPiBvciA8UmVhY3QuRnJhZ21lbnQ+XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISghZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkFuIGluZGV4IHJvdXRlIGNhbm5vdCBoYXZlIGNoaWxkIHJvdXRlcy5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIENvbXBvbmVudDogZWxlbWVudC5wcm9wcy5Db21wb25lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgZXJyb3JFbGVtZW50OiBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCxcbiAgICAgIEVycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSxcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSAhPSBudWxsIHx8IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50ICE9IG51bGwsXG4gICAgICBzaG91bGRSZXZhbGlkYXRlOiBlbGVtZW50LnByb3BzLnNob3VsZFJldmFsaWRhdGUsXG4gICAgICBoYW5kbGU6IGVsZW1lbnQucHJvcHMuaGFuZGxlLFxuICAgICAgbGF6eTogZWxlbWVudC5wcm9wcy5sYXp5XG4gICAgfTtcbiAgICBpZiAoZWxlbWVudC5wcm9wcy5jaGlsZHJlbikge1xuICAgICAgcm91dGUuY2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpO1xuICAgIH1cbiAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG4gIH0pO1xuICByZXR1cm4gcm91dGVzO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIHJlc3VsdCBvZiBgbWF0Y2hSb3V0ZXMoKWAgaW50byBhIFJlYWN0IGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIHJlbmRlck1hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyk7XG59XG5cbmZ1bmN0aW9uIG1hcFJvdXRlUHJvcGVydGllcyhyb3V0ZSkge1xuICBsZXQgdXBkYXRlcyA9IHtcbiAgICAvLyBOb3RlOiB0aGlzIGNoZWNrIGFsc28gb2NjdXJzIGluIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiBzbyB1cGRhdGVcbiAgICAvLyB0aGVyZSBpZiB5b3UgY2hhbmdlIHRoaXMgLS0gcGxlYXNlIGFuZCB0aGFuayB5b3UhXG4gICAgaGFzRXJyb3JCb3VuZGFyeTogcm91dGUuRXJyb3JCb3VuZGFyeSAhPSBudWxsIHx8IHJvdXRlLmVycm9yRWxlbWVudCAhPSBudWxsXG4gIH07XG4gIGlmIChyb3V0ZS5Db21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAocm91dGUuZWxlbWVudCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYENvbXBvbmVudGAgYW5kIGBlbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBDb21wb25lbnRgIHdpbGwgYmUgdXNlZC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlcywge1xuICAgICAgZWxlbWVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQocm91dGUuQ29tcG9uZW50KSxcbiAgICAgIENvbXBvbmVudDogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH1cbiAgaWYgKHJvdXRlLkVycm9yQm91bmRhcnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAocm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBcIllvdSBzaG91bGQgbm90IGluY2x1ZGUgYm90aCBgRXJyb3JCb3VuZGFyeWAgYW5kIGBlcnJvckVsZW1lbnRgIG9uIHlvdXIgcm91dGUgLSBcIiArIFwiYEVycm9yQm91bmRhcnlgIHdpbGwgYmUgdXNlZC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlcywge1xuICAgICAgZXJyb3JFbGVtZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5FcnJvckJvdW5kYXJ5KSxcbiAgICAgIEVycm9yQm91bmRhcnk6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG4gIHJldHVybiB1cGRhdGVzO1xufVxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5Um91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IF9leHRlbmRzKHt9LCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSwge1xuICAgICAgdjdfcHJlcGVuZEJhc2VuYW1lOiB0cnVlXG4gICAgfSksXG4gICAgaGlzdG9yeTogY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllczogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsSW5kZXhcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEsXG4gICAgcm91dGVzLFxuICAgIG1hcFJvdXRlUHJvcGVydGllc1xuICB9KS5pbml0aWFsaXplKCk7XG59XG5cbmV4cG9ydCB7IEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclByb3ZpZGVyLCBSb3V0ZXMsIERhdGFSb3V0ZXJDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCwgRGF0YVJvdXRlclN0YXRlQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgTG9jYXRpb25Db250ZXh0IGFzIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Db250ZXh0IGFzIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIG1hcFJvdXRlUHJvcGVydGllcyBhcyBVTlNBRkVfbWFwUm91dGVQcm9wZXJ0aWVzLCB1c2VSb3V0ZUlkIGFzIFVOU0FGRV91c2VSb3V0ZUlkLCB1c2VSb3V0ZXNJbXBsIGFzIFVOU0FGRV91c2VSb3V0ZXNJbXBsLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQmxvY2tlciBhcyB1bnN0YWJsZV91c2VCbG9ja2VyLCB1c2VBY3Rpb25EYXRhLCB1c2VBc3luY0Vycm9yLCB1c2VBc3luY1ZhbHVlLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb24sIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSZXZhbGlkYXRvciwgdXNlUm91dGVFcnJvciwgdXNlUm91dGVMb2FkZXJEYXRhLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==