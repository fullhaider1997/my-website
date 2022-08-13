self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "workDateSection": function() { return /* binding */ workDateSection; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,1) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "72px" : "56px";
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:30px;line-height:40px;font-weight:400;padding-bottom:1.6rem;color:rgba(255,255,255,1);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:300px;height:10px;margin:20px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? "linear-gradient(270deg, #F46737 -90%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:500;font-size:18px;line-height:32px;color:rgba(255,255,255);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var workDateSection = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__workDateSection",
  componentId: "sc-6qzy6y-5"
})(["max-width:800px;font-weight:500;float:right;font-size:18px;line-height:32px;color:rgba(255,255,255,1);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-6"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-7"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-8"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-9"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? "24px" : "16px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? "16px" : "8px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? "0" : "8px";
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-10"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? "32px" : "24px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? "16px" : "24px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? "32px" : "16px";
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJ3b3JrRGF0ZVNlY3Rpb24iLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsT0FBTyxHQUFHQyx5RUFBSDtBQUFBO0FBQUE7QUFBQSw2U0FDUCxVQUFDQyxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxJQUFOLEdBQWEsTUFBYixHQUFzQixNQUFsQztBQUFBLENBRE8sRUFFQSxVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRSxHQUFOLEdBQVksS0FBWixHQUFvQixRQUFoQztBQUFBLENBRkEsRUFHUCxVQUFDRixLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRyxTQUFOLEdBQWtCLEdBQWxCLEdBQXdCLGFBQXBDO0FBQUEsQ0FITyxFQVdULFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVhTLEVBZ0JULFVBQUNOLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkUsRUFBbkM7QUFBQSxDQWhCUyxFQWlCTCxVQUFDUCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFD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QVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBSmEsRUFLVjtBQUFBLE1BQUdtQixHQUFILFVBQUdBLEdBQUg7QUFBQSxTQUFjQSxHQUFHLEdBQUcsTUFBSCxHQUFZLE1BQTdCO0FBQUEsQ0FMVSxFQVFiLFVBQUN6QixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSSxLQUFOLENBQVlDLFdBQVosQ0FBd0JFLEVBQW5DO0FBQUEsQ0FSYSxFQVNWO0FBQUEsTUFBR2dCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQWpDO0FBQUEsQ0FUVSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYzZlZjg4NDZhYmU5YmQ5ZTE2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIil9O1xuICBmbGV4LWRpcmVjdGlvbjogJHsocHJvcHMpID0+IChwcm9wcy5yb3cgPyBcInJvd1wiIDogXCJjb2x1bW5cIil9O1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm5vcGFkZGluZyA/IFwiMFwiIDogXCIzMnB4IDQ4cHggMFwiKX07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHggMDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCIpfTtcblxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25UaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjY1cHhcIiA6IFwiNTZweFwiKX07XG4gIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjcycHhcIiA6IFwiNTZweFwiKX07XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMTIxLjU3ZGVnLFxuICAgICNmZmZmZmYgMTguNzclLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjAuMTUlXG4gICk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNThweCAwIDE2cHhcIiA6IFwiMFwiKX07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xuICAgIGxpbmUtaGVpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjU2cHhcIiA6IFwiNDhweFwiKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjQwcHggMCAxMnB4XCIgOiBcIjBcIil9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMjhweFwiIDogXCIzMnB4XCIpfTtcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIzMnB4XCIgOiBcIjQwcHhcIil9O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjE2cHggMCA4cHhcIiA6IFwiMFwiKX07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1ib3R0b206IDEuNnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25EaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuY29sb3JBbHRcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IC05MCUsICM5NDVERDYgMTAwJSlcIlxuICAgICAgOiBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSlcIn07XG5cbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIil9O1xuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1KTtcblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XG4gICAgbWF4LXdpZHRoOiA2NzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgd29ya0RhdGVTZWN0aW9uID0gc3R5bGVkLnBgXG4gIG1heC13aWR0aDogODAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1heC13aWR0aDogNjcycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMwZjE2MjQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlMGU0ZWI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxuICAgICAgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIxNTBweFwiIDogXCIyNjJweFwiKX07XG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI2NHB4XCIpfTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjI0cHhcIil9O1xuICBmb250LXdlaWdodDogNjAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0gPyBcIjBcIiA6IFwiMCAwIDgwcHhcIil9O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT5cbiAgICBhbHRcbiAgICAgID8gXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmY2MjJlIDAlLCAjQjEzM0ZGIDEwMCUpXCJcbiAgICAgIDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBEQkQ4IDAlLCAjQjEzM0ZGIDEwMCUpXCJ9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/IFwiLjVcIiA6IFwiMVwiKX07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIHdpZHRoOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIxNTBweFwiIDogXCIxODRweFwiKX07XG4gICAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCI1MnB4XCIgOiBcIjQ4cHhcIil9O1xuICAgIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcbiAgICBtYXJnaW4tYm90dG9tOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIwXCIgOiBcIjY0cHhcIil9O1xuICB9XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMFwiIDogXCIzMnB4XCIpfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XG4gICAgYWx0XG4gICAgICA/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXG4gICAgICA6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiAoZGlzYWJsZWQgPyBcIi41XCIgOiBcIjFcIil9O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIyNHB4XCIpfTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PlxuICAgIGRpc2FibGVkXG4gICAgICA/IFwiaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpXCJcbiAgICAgIDogXCJub25lXCJ9O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAmOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLFxuICAgICAgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwZGJkOCAwJSwgI2IxMzNmZiAxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSxcbiAgICAgIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMTZweFwiKX07XG4gIH1cblxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMjRweFwiIDogXCIxNnB4XCIpfTtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTJkNDU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyBcIjE2cHhcIiA6IFwiOHB4XCIpfTtcbiAgfVxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIwXCIgOiBcIjhweFwiKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiAobGFyZ2UgPyBcIjMycHhcIiA6IFwiMjRweFwiKX07XG5cbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gKG5hdiA/IFwiMTZweFwiIDogXCIyNHB4XCIpfTtcbiAgfVxuXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjE2cHhcIil9O1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==