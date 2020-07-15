webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/next_animations/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar easing = [0.6, -0.05, 0.01, 0.99];\nvar subTitles = {\n  initial: {\n    x: -100\n  },\n  animate: {\n    x: 0,\n    transition: {\n      duration: 0.5,\n      ease: easing\n    }\n  },\n  exit: {\n    x: -100\n  }\n};\nvar stagger = {\n  animate: {\n    transition: {\n      staggerChildren: 1\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    initial: {\n      opacity: 0\n    },\n    animate: {\n      opacity: 1\n    },\n    exit: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: stagger,\n    className: \"container d-flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"stripe\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"text-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Quentin Roux - \", __jsx(\"s\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 28\n    }\n  }, \"Juriste\"), \" \", __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 43\n    }\n  }, \" D\\xE9veloppeur\")), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: subTitles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(\"h5\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, \"Pourquoi\"))), __jsx(\"h5\", {\n    className: \"pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"Juriste de formation, je suis finalement tomb\\xE9 dans la programmation en cherchant \\xE0 coder des smartcontracts sur blockchain ethereum.\"), __jsx(\"h5\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, \"Comment\")), __jsx(\"h5\", {\n    className: \"pb-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"Apr\\xE8s une p\\xE9riode de d\\xE9couverte en autodidacte, j'ai fini par suivre une formation de d\\xE9veloppeur Fullstack au Wagon Marseille (batch #212).\"), __jsx(\"h5\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, \"Maintenant\")), __jsx(\"h5\", {\n    className: \"pb-4 font-weight-bold\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \"Je d\\xE9veloppe en langage Javascript et Ruby ( Backend/Frontend ).\"), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/portfolio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }\n  }, \"portfolio\"))))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImVhc2luZyIsInN1YlRpdGxlcyIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleGl0Iiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUFFQyxLQUFDLEVBQUUsQ0FBQztBQUFOLEdBRE87QUFFaEJDLFNBQU8sRUFBRTtBQUNQRCxLQUFDLEVBQUUsQ0FESTtBQUVQRSxjQUFVLEVBQUU7QUFDVkMsY0FBUSxFQUFFLEdBREE7QUFFVkMsVUFBSSxFQUFFUDtBQUZJO0FBRkwsR0FGTztBQVNoQlEsTUFBSSxFQUFFO0FBQUVMLEtBQUMsRUFBRSxDQUFDO0FBQU47QUFUVSxDQUFsQjtBQVlBLElBQU1NLE9BQU8sR0FBRztBQUNkTCxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQ1ZLLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBREssQ0FBaEI7QUFRZSwyRUFBTTtBQUNuQixTQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FGWDtBQUdFLFFBQUksRUFBRTtBQUFFQSxhQUFPLEVBQUU7QUFBWCxLQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRUYsT0FBdEI7QUFBK0IsYUFBUyxFQUFDLGtCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGpCLE9BQ2dDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGhDLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFLRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRVIsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsQ0FMRixFQVdFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtSkFYRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FoQkYsRUFtQkU7QUFBSSxhQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQW5CRixFQXlCRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBekJGLEVBNEJFO0FBQUksYUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBNUJGLEVBZ0NFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBaENGLENBTEYsQ0FMRixDQURGO0FBb0RELENBckREIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGVhc2luZyA9IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XTtcblxuY29uc3Qgc3ViVGl0bGVzID0ge1xuICBpbml0aWFsOiB7IHg6IC0xMDAgfSxcbiAgYW5pbWF0ZToge1xuICAgIHg6IDAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuNSxcbiAgICAgIGVhc2U6IGVhc2luZyxcbiAgICB9LFxuICB9LFxuICBleGl0OiB7IHg6IC0xMDAgfSxcbn07XG5cbmNvbnN0IHN0YWdnZXIgPSB7XG4gIGFuaW1hdGU6IHtcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDEsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfSBjbGFzc05hbWU9XCJjb250YWluZXIgZC1mbGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2ltYWdlcy9wb3J0cmFpdC0yLmpwZ1wiIGNsYXNzTmFtZT1cInByZXMtcGhvdG9cIiAvPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0cmlwZVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIFF1ZW50aW4gUm91eCAtIDxzPkp1cmlzdGU8L3M+IDxzdHJvbmc+IETDqXZlbG9wcGV1cjwvc3Ryb25nPlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N1YlRpdGxlc30+XG4gICAgICAgICAgICA8aDU+XG4gICAgICAgICAgICAgIDxzdHJvbmc+UG91cnF1b2k8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBiLTRcIj5cbiAgICAgICAgICAgIEp1cmlzdGUgZGUgZm9ybWF0aW9uLCBqZSBzdWlzIGZpbmFsZW1lbnQgdG9tYsOpIGRhbnMgbGEgcHJvZ3JhbW1hdGlvblxuICAgICAgICAgICAgZW4gY2hlcmNoYW50IMOgIGNvZGVyIGRlcyBzbWFydGNvbnRyYWN0cyBzdXIgYmxvY2tjaGFpbiBldGhlcmV1bS5cbiAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHN0cm9uZz5Db21tZW50PC9zdHJvbmc+XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItNFwiPlxuICAgICAgICAgICAgQXByw6hzIHVuZSBww6lyaW9kZSBkZSBkw6ljb3V2ZXJ0ZSBlbiBhdXRvZGlkYWN0ZSwgaidhaSBmaW5pIHBhciBzdWl2cmVcbiAgICAgICAgICAgIHVuZSBmb3JtYXRpb24gZGUgZMOpdmVsb3BwZXVyIEZ1bGxzdGFjayBhdSBXYWdvbiBNYXJzZWlsbGUgKGJhdGNoXG4gICAgICAgICAgICAjMjEyKS5cbiAgICAgICAgICA8L2g1PlxuXG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHN0cm9uZz5NYWludGVuYW50PC9zdHJvbmc+XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItNCBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICBKZSBkw6l2ZWxvcHBlIGVuIGxhbmdhZ2UgSmF2YXNjcmlwdCBldCBSdWJ5ICggQmFja2VuZC9Gcm9udGVuZCApLlxuICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+XG4gICAgICAgICAgICAgIDxhPnBvcnRmb2xpbzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})