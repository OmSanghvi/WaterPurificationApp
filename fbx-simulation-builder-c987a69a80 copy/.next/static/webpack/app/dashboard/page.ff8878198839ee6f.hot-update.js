"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.js":
/*!***********************************!*\
  !*** ./src/app/dashboard/page.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nchart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Title, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend);\nfunction Dashboard() {\n    const data = {\n        labels: [\n            \"January\",\n            \"February\",\n            \"March\",\n            \"April\",\n            \"May\",\n            \"June\",\n            \"July\"\n        ],\n        datasets: [\n            {\n                label: \"Plastic Cleaned Monthly\",\n                data: [\n                    35,\n                    29,\n                    40,\n                    41,\n                    26,\n                    25,\n                    0\n                ],\n                fill: false,\n                backgroundColor: \"rgba(75,192,192,1)\",\n                borderColor: \"rgba(75,192,192,1)\"\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fade-in\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Microplastic Levels Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/shruti/Downloads/fbx-simulation-builder-c987a69a80/src/app/dashboard/page.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/shruti/Downloads/fbx-simulation-builder-c987a69a80/src/app/dashboard/page.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shruti/Downloads/fbx-simulation-builder-c987a69a80/src/app/dashboard/page.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFdUM7QUFDb0Y7QUFHM0hFLDJDQUFPQSxDQUFDUSxRQUFRLENBQ1pQLG1EQUFhQSxFQUNiQyxpREFBV0EsRUFDWEMsa0RBQVlBLEVBQ1pDLGlEQUFXQSxFQUNYQywyQ0FBS0EsRUFDTEMsNkNBQU9BLEVBQ1BDLDRDQUFNQTtBQUdLLFNBQVNFO0lBQ3BCLE1BQU1DLE9BQU87UUFDVEMsUUFBUTtZQUFDO1lBQVc7WUFBWTtZQUFTO1lBQVM7WUFBTztZQUFRO1NBQU87UUFDeEVDLFVBQVU7WUFDTjtnQkFDSUMsT0FBTztnQkFDUEgsTUFBTTtvQkFBQztvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtvQkFBSTtpQkFBRTtnQkFDakNJLE1BQU07Z0JBQ05DLGlCQUFpQjtnQkFDakJDLGFBQWE7WUFDakI7U0FDSDtJQUNMO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVk7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDckIsaURBQUlBO2dCQUFDWSxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR3hCO0tBcEJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS5qcz9kMmI4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgUG9pbnRFbGVtZW50LCBMaW5lRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCB9IGZyb20gJ2NoYXJ0LmpzJztcblxuXG5DaGFydEpTLnJlZ2lzdGVyKFxuICAgIENhdGVnb3J5U2NhbGUsXG4gICAgTGluZWFyU2NhbGUsXG4gICAgUG9pbnRFbGVtZW50LFxuICAgIExpbmVFbGVtZW50LFxuICAgIFRpdGxlLFxuICAgIFRvb2x0aXAsXG4gICAgTGVnZW5kXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUGxhc3RpYyBDbGVhbmVkIE1vbnRobHknLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszNSwgMjksIDQwLCA0MSwgMjYsIDI1LCAwXSxcbiAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc1LDE5MiwxOTIsMSknLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwxOTIsMTkyLDEpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmYWRlLWluXCI+XG4gICAgICAgICAgICA8aDI+TWljcm9wbGFzdGljIExldmVscyBEYXNoYm9hcmQ8L2gyPlxuICAgICAgICAgICAgPExpbmUgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5lIiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJMZWdlbmQiLCJyZWdpc3RlciIsIkRhc2hib2FyZCIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.js\n"));

/***/ })

});