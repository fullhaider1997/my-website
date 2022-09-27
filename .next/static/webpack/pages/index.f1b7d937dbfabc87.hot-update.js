"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\fullh\\\\Desktop\\\\portfolio_website-main\\\\portfolio_website-main\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node.scrollTo({\n      left: left,\n      behavior: \"smooth\"\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener(\"resize\", handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    id: \"Experience\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      children: \"Work experience\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \"Full Stack Engineer\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n      style: {\n        marginButtom: \"0px\"\n      },\n      children: \"ONTHECARD | May 2021 to April August\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"1. Developed user insight web application aimed to aid the marketing team to understand the impact of their marketing strategies and client base. I developed the application using MERN stack.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"2. Contributed to the development of frontend and backend of ONTEHCARD web application using React and Node.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"3. Implemented authentication and authorization mechanism using JWT to provide a good balance between security and peformance.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \" \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      style: {\n        marginButtom: \"0px\"\n      },\n      children: [\" \", \"Programming Instructor\", \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n      style: {\n        marginButtom: \"70px\"\n      },\n      children: \"Exceed Robotics | Mar 2019 to Sept 2020\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"ul\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"1. Instructed more than 30 teen students over 1 year in programming technologies such as JavaScript, Python, C++, Java etc.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"2. Contributed to the development of a new computer vision course in terms of improving presentation slides, projects, and curriculum.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionSubText, {\n          children: \"3. Instructed over 20 students in computer vision course using Python and Cloud vision API.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {\n      colorAlt: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFEO01BQWEsS0FBSyxFQUFFO1FBQUVBLFlBQVksRUFBRTtNQUFoQixDQUFwQjtNQUFBLFdBQ0csR0FESCw0QkFFeUIsR0FGekI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBNUJGLGVBaUNFLDhEQUFDLG9FQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FqQ0YsZUFrQ0UsOERBQUMsb0VBQUQ7TUFBZ0IsS0FBSyxFQUFFO1FBQUVBLFlBQVksRUFBRTtNQUFoQixDQUF2QjtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQWxDRixlQXNDRSw4REFBQyxpRUFBRDtNQUFBLHVCQUNFO1FBQUEsd0JBQ0UsOERBQUMsb0VBQUQ7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQU1FLDhEQUFDLG9FQUFEO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBTkYsZUFXRSw4REFBQyxvRUFBRDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVhGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F0Q0YsZUF5REUsOERBQUMsb0VBQUQ7TUFBZ0IsUUFBUTtJQUF4QjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBekRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBNkRELENBdkdEOztHQUFNeEI7O0tBQUFBO0FBeUdOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBDYXJvdXNlbEJ1dHRvbixcbiAgQ2Fyb3VzZWxCdXR0b25Eb3QsXG4gIENhcm91c2VsQnV0dG9ucyxcbiAgQ2Fyb3VzZWxDb250YWluZXIsXG4gIENhcm91c2VsSXRlbSxcbiAgQ2Fyb3VzZWxJdGVtSW1nLFxuICBDYXJvdXNlbEl0ZW1UZXh0LFxuICBDYXJvdXNlbEl0ZW1UaXRsZSxcbiAgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxufSBmcm9tIFwiLi9UaW1lTGluZVN0eWxlc1wiO1xuaW1wb3J0IHtcbiAgU2VjdGlvbixcbiAgU2VjdGlvbkRpdmlkZXIsXG4gIFNlY3Rpb25UZXh0LFxuICB3b3JrRGF0ZVNlY3Rpb24sXG4gIFNlY3Rpb25TdWJUZXh0LFxuICBTZWN0aW9uVGl0bGUsXG59IGZyb20gXCIuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50c1wiO1xuaW1wb3J0IHsgVGltZUxpbmVEYXRhIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXG4gICAgICAgIGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpXG4gICAgICApO1xuXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKFxuICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC9cbiAgICAgICAgICAoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcbiAgICAgICAgICBUaW1lTGluZURhdGEubGVuZ3RoXG4gICAgICApO1xuXG4gICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgc2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBpZD1cIkV4cGVyaWVuY2VcIj5cbiAgICAgIDxTZWN0aW9uVGl0bGU+V29yayBleHBlcmllbmNlPC9TZWN0aW9uVGl0bGU+XG5cbiAgICAgIDxTZWN0aW9uVGV4dD5GdWxsIFN0YWNrIEVuZ2luZWVyPC9TZWN0aW9uVGV4dD5cblxuICAgICAgPFNlY3Rpb25TdWJUZXh0IHN0eWxlPXt7IG1hcmdpbkJ1dHRvbTogXCIwcHhcIiB9fT5cbiAgICAgICAgT05USEVDQVJEIHwgTWF5IDIwMjEgdG8gQXByaWwgQXVndXN0XG4gICAgICA8L1NlY3Rpb25TdWJUZXh0PlxuXG4gICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+XG4gICAgICAgICAgICAxLiBEZXZlbG9wZWQgdXNlciBpbnNpZ2h0IHdlYiBhcHBsaWNhdGlvbiBhaW1lZCB0byBhaWQgdGhlIG1hcmtldGluZ1xuICAgICAgICAgICAgdGVhbSB0byB1bmRlcnN0YW5kIHRoZSBpbXBhY3Qgb2YgdGhlaXIgbWFya2V0aW5nIHN0cmF0ZWdpZXMgYW5kXG4gICAgICAgICAgICBjbGllbnQgYmFzZS4gSSBkZXZlbG9wZWQgdGhlIGFwcGxpY2F0aW9uIHVzaW5nIE1FUk4gc3RhY2suXG4gICAgICAgICAgPC9TZWN0aW9uU3ViVGV4dD5cbiAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+XG4gICAgICAgICAgICAyLiBDb250cmlidXRlZCB0byB0aGUgZGV2ZWxvcG1lbnQgb2YgZnJvbnRlbmQgYW5kIGJhY2tlbmQgb2ZcbiAgICAgICAgICAgIE9OVEVIQ0FSRCB3ZWIgYXBwbGljYXRpb24gdXNpbmcgUmVhY3QgYW5kIE5vZGUuXG4gICAgICAgICAgPC9TZWN0aW9uU3ViVGV4dD5cbiAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+XG4gICAgICAgICAgICAzLiBJbXBsZW1lbnRlZCBhdXRoZW50aWNhdGlvbiBhbmQgYXV0aG9yaXphdGlvbiBtZWNoYW5pc20gdXNpbmcgSldUXG4gICAgICAgICAgICB0byBwcm92aWRlIGEgZ29vZCBiYWxhbmNlIGJldHdlZW4gc2VjdXJpdHkgYW5kIHBlZm9ybWFuY2UuXG4gICAgICAgICAgPC9TZWN0aW9uU3ViVGV4dD5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvU2VjdGlvblRleHQ+XG5cbiAgICAgIDxTZWN0aW9uVGV4dD4gPC9TZWN0aW9uVGV4dD5cbiAgICAgIDxTZWN0aW9uVGV4dCBzdHlsZT17eyBtYXJnaW5CdXR0b206IFwiMHB4XCIgfX0+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgUHJvZ3JhbW1pbmcgSW5zdHJ1Y3RvcntcIiBcIn1cbiAgICAgIDwvU2VjdGlvblRleHQ+XG5cbiAgICAgIDxTZWN0aW9uU3ViVGV4dD48L1NlY3Rpb25TdWJUZXh0PlxuICAgICAgPFNlY3Rpb25TdWJUZXh0IHN0eWxlPXt7IG1hcmdpbkJ1dHRvbTogXCI3MHB4XCIgfX0+XG4gICAgICAgIEV4Y2VlZCBSb2JvdGljcyB8IE1hciAyMDE5IHRvIFNlcHQgMjAyMFxuICAgICAgPC9TZWN0aW9uU3ViVGV4dD5cblxuICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPFNlY3Rpb25TdWJUZXh0PlxuICAgICAgICAgICAgMS4gSW5zdHJ1Y3RlZCBtb3JlIHRoYW4gMzAgdGVlbiBzdHVkZW50cyBvdmVyIDEgeWVhciBpbiBwcm9ncmFtbWluZ1xuICAgICAgICAgICAgdGVjaG5vbG9naWVzIHN1Y2ggYXMgSmF2YVNjcmlwdCwgUHl0aG9uLCBDKyssIEphdmEgZXRjLlxuICAgICAgICAgIDwvU2VjdGlvblN1YlRleHQ+XG5cbiAgICAgICAgICA8U2VjdGlvblN1YlRleHQ+XG4gICAgICAgICAgICAyLiBDb250cmlidXRlZCB0byB0aGUgZGV2ZWxvcG1lbnQgb2YgYSBuZXcgY29tcHV0ZXIgdmlzaW9uIGNvdXJzZSBpblxuICAgICAgICAgICAgdGVybXMgb2YgaW1wcm92aW5nIHByZXNlbnRhdGlvbiBzbGlkZXMsIHByb2plY3RzLCBhbmQgY3VycmljdWx1bS5cbiAgICAgICAgICA8L1NlY3Rpb25TdWJUZXh0PlxuXG4gICAgICAgICAgPFNlY3Rpb25TdWJUZXh0PlxuICAgICAgICAgICAgMy4gSW5zdHJ1Y3RlZCBvdmVyIDIwIHN0dWRlbnRzIGluIGNvbXB1dGVyIHZpc2lvbiBjb3Vyc2UgdXNpbmdcbiAgICAgICAgICAgIFB5dGhvbiBhbmQgQ2xvdWQgdmlzaW9uIEFQSS5cbiAgICAgICAgICA8L1NlY3Rpb25TdWJUZXh0PlxuICAgICAgICA8L3VsPlxuICAgICAgPC9TZWN0aW9uVGV4dD5cblxuICAgICAgPFNlY3Rpb25EaXZpZGVyIGNvbG9yQWx0IC8+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIlNlY3Rpb24iLCJTZWN0aW9uRGl2aWRlciIsIlNlY3Rpb25UZXh0Iiwid29ya0RhdGVTZWN0aW9uIiwiU2VjdGlvblN1YlRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcmdpbkJ1dHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});