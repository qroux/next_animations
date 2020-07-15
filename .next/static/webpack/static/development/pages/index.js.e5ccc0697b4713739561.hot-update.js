webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/next_animations/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar easing = [0.6, -0.05, 0.01, 0.99];\nvar subTitles = {\n  initial: {\n    x: -100\n  },\n  animate: {\n    x: 0,\n    transition: {\n      duration: 0.5,\n      ease: easing\n    }\n  },\n  exit: {\n    x: -100\n  }\n};\nvar stagger = {\n  animate: {\n    transition: {\n      staggerChildren: 1\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1\n    },\n    exit: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: stagger,\n    className: \"container d-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"stripe\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"text-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Quentin Roux - \", __jsx(\"s\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 28\n    }\n  }, \"Juriste\"), \" \", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 43\n    }\n  }, \" D\\xE9veloppeur\")), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: subTitles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, \"Pourquoi\"))), __jsx(\"h5\", {\n    className: \"pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"Juriste de formation, je suis finalement tomb\\xE9 dans la programmation en cherchant \\xE0 coder des smartcontracts sur blockchain ethereum.\"), __jsx(\"h5\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Comment\")), __jsx(\"h5\", {\n    className: \"pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Apr\\xE8s une p\\xE9riode de d\\xE9couverte en autodidacte, j'ai fini par suivre une formation de d\\xE9veloppeur Fullstack au Wagon Marseille (batch #212).\"), __jsx(\"h5\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Maintenant\")), __jsx(\"h5\", {\n    className: \"pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \"Je d\\xE9veloppe en langage Javascript et Ruby ( Backend/Frontend ).\"), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/portfolio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, \"portfolio\"))))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImVhc2luZyIsInN1YlRpdGxlcyIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleGl0Iiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUFFQyxLQUFDLEVBQUUsQ0FBQztBQUFOLEdBRE87QUFFaEJDLFNBQU8sRUFBRTtBQUNQRCxLQUFDLEVBQUUsQ0FESTtBQUVQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFUDtBQUZJO0FBRkwsR0FGTztBQVNoQlEsTUFBSSxFQUFFO0FBQUVMLEtBQUMsRUFBRSxDQUFDO0FBQU47QUFUVSxDQUFsQjtBQVlBLElBQU1NLE9BQU8sR0FBRztBQUNkTCxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQ1ZLLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBREssQ0FBaEI7QUFRZSwyRUFBTTtBQUNuQixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FGWDtBQUdFLFFBQUksRUFBRTtBQUFFQSxhQUFPLEVBQUU7QUFBWCxLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRUYsT0FBdEI7QUFBK0IsYUFBUyxFQUFDLGtCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGpCLE9BQ2dDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGhDLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRVIsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsQ0FMRixFQVdFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFYRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FoQkYsRUFtQkU7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQW5CRixFQXlCRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBekJGLEVBNEJFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRUE1QkYsRUFnQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsQ0FoQ0YsQ0FMRixDQUxGLENBREY7QUFvREQsQ0FyREQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldO1xuXG5jb25zdCBzdWJUaXRsZXMgPSB7XG4gIGluaXRpYWw6IHsgeDogLTEwMCB9LFxuICBhbmltYXRlOiB7XG4gICAgeDogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZWFzZTogZWFzaW5nLFxuICAgIH0sXG4gIH0sXG4gIGV4aXQ6IHsgeDogLTEwMCB9LFxufTtcblxuY29uc3Qgc3RhZ2dlciA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N0YWdnZXJ9IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIvaW1hZ2VzL3BvcnRyYWl0LTIuanBnXCIgY2xhc3NOYW1lPVwicHJlcy1waG90b1wiIC8+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RyaXBlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgUXVlbnRpbiBSb3V4IC0gPHM+SnVyaXN0ZTwvcz4gPHN0cm9uZz4gRMOpdmVsb3BwZXVyPC9zdHJvbmc+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17c3ViVGl0bGVzfT5cbiAgICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgICAgPHN0cm9uZz5Qb3VycXVvaTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItNFwiPlxuICAgICAgICAgICAgSnVyaXN0ZSBkZSBmb3JtYXRpb24sIGplIHN1aXMgZmluYWxlbWVudCB0b21iw6kgZGFucyBsYSBwcm9ncmFtbWF0aW9uXG4gICAgICAgICAgICBlbiBjaGVyY2hhbnQgw6AgY29kZXIgZGVzIHNtYXJ0Y29udHJhY3RzIHN1ciBibG9ja2NoYWluIGV0aGVyZXVtLlxuICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8c3Ryb25nPkNvbW1lbnQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgICAgICBBcHLDqHMgdW5lIHDDqXJpb2RlIGRlIGTDqWNvdXZlcnRlIGVuIGF1dG9kaWRhY3RlLCBqJ2FpIGZpbmkgcGFyIHN1aXZyZVxuICAgICAgICAgICAgdW5lIGZvcm1hdGlvbiBkZSBkw6l2ZWxvcHBldXIgRnVsbHN0YWNrIGF1IFdhZ29uIE1hcnNlaWxsZSAoYmF0Y2hcbiAgICAgICAgICAgICMyMTIpLlxuICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8c3Ryb25nPk1haW50ZW5hbnQ8L3N0cm9uZz5cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYi00XCI+XG4gICAgICAgICAgICBKZSBkw6l2ZWxvcHBlIGVuIGxhbmdhZ2UgSmF2YXNjcmlwdCBldCBSdWJ5ICggQmFja2VuZC9Gcm9udGVuZCApLlxuICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgIDxhPnBvcnRmb2xpbzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})