webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/next_animations/pages/portfolio.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar projects = [{\n  title: 'projet1',\n  url: 'https://picsum.photos/200/300'\n}, {\n  title: 'projet2',\n  url: 'https://picsum.photos/200/300'\n}, {\n  title: 'projet3',\n  url: 'https://picsum.photos/200/300'\n}];\nvar easing = [0.6, -0.05, 0.01, 0.99];\nvar fadeInUp = {\n  initial: {\n    y: 60,\n    opacity: 0,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  }\n};\nvar stagger = {\n  animate: {\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    initial: \"initial\",\n    animate: \"animate\",\n    exit: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"container center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    animate: {\n      opacity: 1\n    },\n    initial: {\n      opacity: 0\n    },\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"PORTFOLIO\")), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: stagger,\n    className: \"project-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, projects.map(function (project) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      variants: fadeInUp,\n      whileHover: {\n        scale: 1.05\n      },\n      whileTap: {\n        scale: 0.95\n      },\n      className: \"card\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].img, {\n      initial: {\n        x: 60,\n        opacity: 0\n      },\n      animate: {\n        x: 0,\n        opacity: 1\n      },\n      transition: {\n        delay: 0.2\n      },\n      key: project.title,\n      src: project.title,\n      width: 250,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 13\n      }\n    }), __jsx(\"div\", {\n      className: \"project-info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }\n    }, __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 15\n      }\n    }, project.title), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 15\n      }\n    }, project.title)));\n  }))));\n}); // const easing = [0.6, -0.05, 0.01, 0.99];\n// const test = {\n//   show: { y: '-100vh' },\n//   animate: {\n//     y: -100,\n//     transition: {\n//       duration: 0.5,\n//       ease: easing,\n//     },\n//   },\n//   exit: { y: '-100vh' },\n// };\n// const stagger = {\n//   animate: {\n//     transition: {\n//       staggerChildren: 1,\n//     },\n//   },\n// };\n// export default () => {\n//   return (\n//     <motion.div\n//       initial={{ opacity: 0, x: '-10vh' }}\n//       animate={{ opacity: 1, x: 0 }}\n//       exit={{ opacity: 0 }}\n//     >\n//       <div className=\"container text-center\">\n//         <h1>PORTFOLIO</h1>\n//         <div className=\"projects-container\">\n//           {projects.map((project) => (\n//             <motion.div variants={test} key={project.title} className=\"project\">\n//               <h3>{project.title}</h3>\n//             </motion.div>\n//           ))}\n//         </div>\n//       </div>\n//     </motion.div>\n//   );\n// };\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanM/NzgwOSJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwidXJsIiwiZWFzaW5nIiwiZmFkZUluVXAiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiYW5pbWF0ZSIsInN0YWdnZXIiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJtYXAiLCJwcm9qZWN0Iiwic2NhbGUiLCJ4IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRyxDQUNmO0FBQ0VDLE9BQUssRUFBRSxTQURUO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBRGUsRUFLZjtBQUNFRCxPQUFLLEVBQUUsU0FEVDtBQUVFQyxLQUFHLEVBQUU7QUFGUCxDQUxlLEVBU2Y7QUFDRUQsT0FBSyxFQUFFLFNBRFQ7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FUZSxDQUFqQjtBQWVBLElBQU1DLE1BQU0sR0FBRyxDQUFDLEdBQUQsRUFBTSxDQUFDLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsU0FBTyxFQUFFO0FBQ1BDLEtBQUMsRUFBRSxFQURJO0FBRVBDLFdBQU8sRUFBRSxDQUZGO0FBR1BDLGNBQVUsRUFBRTtBQUFFQyxjQUFRLEVBQUUsR0FBWjtBQUFpQkMsVUFBSSxFQUFFUDtBQUF2QjtBQUhMLEdBRE07QUFNZlEsU0FBTyxFQUFFO0FBQ1BMLEtBQUMsRUFBRSxDQURJO0FBRVBDLFdBQU8sRUFBRSxDQUZGO0FBR1BDLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUUsR0FEQTtBQUVWQyxVQUFJLEVBQUVQO0FBRkk7QUFITDtBQU5NLENBQWpCO0FBZ0JBLElBQU1TLE9BQU8sR0FBRztBQUNkRCxTQUFPLEVBQUU7QUFDUEgsY0FBVSxFQUFFO0FBQ1ZLLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBREssQ0FBaEI7QUFRZTtBQUFBLFNBQ2IsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxXQUFPLEVBQUMsU0FBcEI7QUFBOEIsV0FBTyxFQUFDLFNBQXRDO0FBQWdELFFBQUksRUFBRTtBQUFFTixhQUFPLEVBQUU7QUFBWCxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FGWDtBQUdFLGFBQVMsRUFBQyxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLENBREYsRUFRRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFlBQVEsRUFBRUssT0FBdEI7QUFBK0IsYUFBUyxFQUFDLG1CQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSxXQUNaLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsY0FBUSxFQUFFWCxRQURaO0FBRUUsZ0JBQVUsRUFBRTtBQUFFWSxhQUFLLEVBQUU7QUFBVCxPQUZkO0FBR0UsY0FBUSxFQUFFO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSFo7QUFJRSxlQUFTLEVBQUMsTUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUUsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxhQUFPLEVBQUU7QUFBRUMsU0FBQyxFQUFFLEVBQUw7QUFBU1YsZUFBTyxFQUFFO0FBQWxCLE9BRFg7QUFFRSxhQUFPLEVBQUU7QUFBRVUsU0FBQyxFQUFFLENBQUw7QUFBUVYsZUFBTyxFQUFFO0FBQWpCLE9BRlg7QUFHRSxnQkFBVSxFQUFFO0FBQUVXLGFBQUssRUFBRTtBQUFULE9BSGQ7QUFJRSxTQUFHLEVBQUVILE9BQU8sQ0FBQ2QsS0FKZjtBQUtFLFNBQUcsRUFBRWMsT0FBTyxDQUFDZCxLQUxmO0FBTUUsV0FBSyxFQUFFLEdBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBY0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLYyxPQUFPLENBQUNkLEtBQWIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT2MsT0FBTyxDQUFDZCxLQUFmLENBRkYsQ0FkRixDQURZO0FBQUEsR0FBYixDQURILENBUkYsQ0FERixDQURhO0FBQUEsQ0FBZixFLENBcUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL3BvcnRmb2xpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ3Byb2pldDEnLFxuICAgIHVybDogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAncHJvamV0MicsXG4gICAgdXJsOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdwcm9qZXQzJyxcbiAgICB1cmw6ICdodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXG4gIH0sXG5dO1xuXG5jb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV07XG5cbmNvbnN0IGZhZGVJblVwID0ge1xuICBpbml0aWFsOiB7XG4gICAgeTogNjAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjYsIGVhc2U6IGVhc2luZyB9LFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBlYXNpbmcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHN0YWdnZXIgPSB7XG4gIGFuaW1hdGU6IHtcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaW5pdGlhbFwiIGFuaW1hdGU9XCJhbmltYXRlXCIgZXhpdD17eyBvcGFjaXR5OiAwIH19PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNlbnRlclwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICA+XG4gICAgICAgIDxoMT5QT1JURk9MSU88L2gxPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3N0YWdnZXJ9IGNsYXNzTmFtZT1cInByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogNjAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgIHNyYz17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgd2lkdGg9ezI1MH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgICA8aDQ+e3Byb2plY3QudGl0bGV9PC9oND5cbiAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuLy8gY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldO1xuXG4vLyBjb25zdCB0ZXN0ID0ge1xuLy8gICBzaG93OiB7IHk6ICctMTAwdmgnIH0sXG4vLyAgIGFuaW1hdGU6IHtcbi8vICAgICB5OiAtMTAwLFxuLy8gICAgIHRyYW5zaXRpb246IHtcbi8vICAgICAgIGR1cmF0aW9uOiAwLjUsXG4vLyAgICAgICBlYXNlOiBlYXNpbmcsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgZXhpdDogeyB5OiAnLTEwMHZoJyB9LFxuLy8gfTtcblxuLy8gY29uc3Qgc3RhZ2dlciA9IHtcbi8vICAgYW5pbWF0ZToge1xuLy8gICAgIHRyYW5zaXRpb246IHtcbi8vICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxtb3Rpb24uZGl2XG4vLyAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6ICctMTB2aCcgfX1cbi8vICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuLy8gICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4vLyAgICAgPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgPGgxPlBPUlRGT0xJTzwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuLy8gICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3Rlc3R9IGtleT17cHJvamVjdC50aXRsZX0gY2xhc3NOYW1lPVwicHJvamVjdFwiPlxuLy8gICAgICAgICAgICAgICA8aDM+e3Byb2plY3QudGl0bGV9PC9oMz5cbi8vICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L21vdGlvbi5kaXY+XG4vLyAgICk7XG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ })

})