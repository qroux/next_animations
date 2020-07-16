webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/nr/code/qroux/next_animations/pages/portfolio.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar projectsJS = [{\n  title: 'Cursed Twitch',\n  lang: 'React + Redux',\n  logo: '/images/logo/react-redux.png',\n  link: 'https://react-stream-client.herokuapp.com/',\n  src: '/images/portfolio/js/cursed-twitch.png'\n}, {\n  title: 'Kickstarter',\n  lang: 'React + Web3',\n  logo: '/images/logo/eth-logo.png',\n  link: 'https://kickstarter-copy.herokuapp.com/',\n  src: '/images/portfolio/js/kickstarter.png'\n}, {\n  title: 'Cabinet',\n  lang: 'Vue + Nuxt',\n  logo: '/images/logo/nuxt-logo.png',\n  link: 'https://dr-roux-gilbert.chirurgiens-dentistes.fr/',\n  src: '/images/portfolio/js/nuxt-cabinet.png'\n}];\nvar projectsRuby = [{\n  title: 'Cursed Twitch',\n  lang: 'React + Redux',\n  logo: 'ruby-logo.png',\n  link: 'https://react-stream-client.herokuapp.com/',\n  src: '/images/portfolio/js/cursed-twitch.png'\n}, {\n  title: 'Kickstarter',\n  lang: 'React + Web3',\n  logo: 'ruby-logo.png',\n  link: 'https://kickstarter-copy.herokuapp.com/',\n  src: '/images/portfolio/js/kickstarter.png'\n}, {\n  title: 'Cabinet',\n  lang: 'Vue + Nuxt',\n  logo: 'ruby-logo.png',\n  link: 'https://dr-roux-gilbert.chirurgiens-dentistes.fr/',\n  src: '/images/portfolio/js/nuxt-cabinet.png'\n}];\nvar easing = [0.6, -0.05, 0.01, 0.99];\nvar fadeInUp = {\n  initial: {\n    y: 60,\n    opacity: 0,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  }\n};\nvar stagger = {\n  animate: {\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\n\nvar renderJs = function renderJs(projects) {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: stagger,\n    className: \"project-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, projects.map(function (project) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      variants: fadeInUp,\n      whileHover: {\n        scale: 1.05\n      },\n      whileTap: {\n        scale: 0.95\n      },\n      className: \"card project\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].img, {\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        delay: 0.2\n      },\n      key: project.title,\n      src: project.src,\n      width: 250,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }\n    }), __jsx(\"div\", {\n      className: \"project-info text-center border-top\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: project.logo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 13\n      }\n    }), __jsx(\"h4\", {\n      className: \"text-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 13\n      }\n    }, project.title)));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    initial: \"initial\",\n    animate: \"animate\",\n    exit: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"container \",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    animate: {\n      opacity: 1\n    },\n    initial: {\n      opacity: 0\n    },\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, \"PORTFOLIO\")), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }\n  }, \"Javascript\"), renderJs(projectsJS), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, \"Ruby\"), renderJs(projectsRuby)));\n}); // const easing = [0.6, -0.05, 0.01, 0.99];\n// const test = {\n//   show: { y: '-100vh' },\n//   animate: {\n//     y: -100,\n//     transition: {\n//       duration: 0.5,\n//       ease: easing,\n//     },\n//   },\n//   exit: { y: '-100vh' },\n// };\n// const stagger = {\n//   animate: {\n//     transition: {\n//       staggerChildren: 1,\n//     },\n//   },\n// };\n// export default () => {\n//   return (\n//     <motion.div\n//       initial={{ opacity: 0, x: '-10vh' }}\n//       animate={{ opacity: 1, x: 0 }}\n//       exit={{ opacity: 0 }}\n//     >\n//       <div className=\"container text-center\">\n//         <h1>PORTFOLIO</h1>\n//         <div className=\"projects-container\">\n//           {projects.map((project) => (\n//             <motion.div variants={test} key={project.title} className=\"project\">\n//               <h3>{project.title}</h3>\n//             </motion.div>\n//           ))}\n//         </div>\n//       </div>\n//     </motion.div>\n//   );\n// };\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanM/NzgwOSJdLCJuYW1lcyI6WyJwcm9qZWN0c0pTIiwidGl0bGUiLCJsYW5nIiwibG9nbyIsImxpbmsiLCJzcmMiLCJwcm9qZWN0c1J1YnkiLCJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhbmltYXRlIiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsInJlbmRlckpzIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0Iiwic2NhbGUiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLE9BQUssRUFBRSxlQURUO0FBRUVDLE1BQUksRUFBRSxlQUZSO0FBR0VDLE1BQUksRUFBRSw4QkFIUjtBQUlFQyxNQUFJLEVBQUUsNENBSlI7QUFLRUMsS0FBRyxFQUFFO0FBTFAsQ0FEaUIsRUFRakI7QUFDRUosT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxFQUFFLGNBRlI7QUFHRUMsTUFBSSxFQUFFLDJCQUhSO0FBSUVDLE1BQUksRUFBRSx5Q0FKUjtBQUtFQyxLQUFHLEVBQUU7QUFMUCxDQVJpQixFQWVqQjtBQUNFSixPQUFLLEVBQUUsU0FEVDtBQUVFQyxNQUFJLEVBQUUsWUFGUjtBQUdFQyxNQUFJLEVBQUUsNEJBSFI7QUFJRUMsTUFBSSxFQUFFLG1EQUpSO0FBS0VDLEtBQUcsRUFBRTtBQUxQLENBZmlCLENBQW5CO0FBd0JBLElBQU1DLFlBQVksR0FBRyxDQUNuQjtBQUNFTCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFQyxNQUFJLEVBQUUsZUFIUjtBQUlFQyxNQUFJLEVBQUUsNENBSlI7QUFLRUMsS0FBRyxFQUFFO0FBTFAsQ0FEbUIsRUFRbkI7QUFDRUosT0FBSyxFQUFFLGFBRFQ7QUFFRUMsTUFBSSxF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O0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0UsV0FBTyxFQUFFO0FBQUVBLGFBQU8sRUFBRTtBQUFYLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FGWDtBQUdFLGFBQVMsRUFBQyxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGLEVBU0dPLFFBQVEsQ0FBQ2xCLFVBQUQsQ0FUWCxFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixFQVdHa0IsUUFBUSxDQUFDWixZQUFELENBWFgsQ0FERixDQURhO0FBQUEsQ0FBZixFLENBa0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL3BvcnRmb2xpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcHJvamVjdHNKUyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQ3Vyc2VkIFR3aXRjaCcsXG4gICAgbGFuZzogJ1JlYWN0ICsgUmVkdXgnLFxuICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vcmVhY3QtcmVkdXgucG5nJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9yZWFjdC1zdHJlYW0tY2xpZW50Lmhlcm9rdWFwcC5jb20vJyxcbiAgICBzcmM6ICcvaW1hZ2VzL3BvcnRmb2xpby9qcy9jdXJzZWQtdHdpdGNoLnBuZycsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tpY2tzdGFydGVyJyxcbiAgICBsYW5nOiAnUmVhY3QgKyBXZWIzJyxcbiAgICBsb2dvOiAnL2ltYWdlcy9sb2dvL2V0aC1sb2dvLnBuZycsXG4gICAgbGluazogJ2h0dHBzOi8va2lja3N0YXJ0ZXItY29weS5oZXJva3VhcHAuY29tLycsXG4gICAgc3JjOiAnL2ltYWdlcy9wb3J0Zm9saW8vanMva2lja3N0YXJ0ZXIucG5nJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQ2FiaW5ldCcsXG4gICAgbGFuZzogJ1Z1ZSArIE51eHQnLFxuICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vbnV4dC1sb2dvLnBuZycsXG4gICAgbGluazogJ2h0dHBzOi8vZHItcm91eC1naWxiZXJ0LmNoaXJ1cmdpZW5zLWRlbnRpc3Rlcy5mci8nLFxuICAgIHNyYzogJy9pbWFnZXMvcG9ydGZvbGlvL2pzL251eHQtY2FiaW5ldC5wbmcnLFxuICB9LFxuXTtcblxuY29uc3QgcHJvamVjdHNSdWJ5ID0gW1xuICB7XG4gICAgdGl0bGU6ICdDdXJzZWQgVHdpdGNoJyxcbiAgICBsYW5nOiAnUmVhY3QgKyBSZWR1eCcsXG4gICAgbG9nbzogJ3J1YnktbG9nby5wbmcnLFxuICAgIGxpbms6ICdodHRwczovL3JlYWN0LXN0cmVhbS1jbGllbnQuaGVyb2t1YXBwLmNvbS8nLFxuICAgIHNyYzogJy9pbWFnZXMvcG9ydGZvbGlvL2pzL2N1cnNlZC10d2l0Y2gucG5nJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnS2lja3N0YXJ0ZXInLFxuICAgIGxhbmc6ICdSZWFjdCArIFdlYjMnLFxuICAgIGxvZ286ICdydWJ5LWxvZ28ucG5nJyxcbiAgICBsaW5rOiAnaHR0cHM6Ly9raWNrc3RhcnRlci1jb3B5Lmhlcm9rdWFwcC5jb20vJyxcbiAgICBzcmM6ICcvaW1hZ2VzL3BvcnRmb2xpby9qcy9raWNrc3RhcnRlci5wbmcnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDYWJpbmV0JyxcbiAgICBsYW5nOiAnVnVlICsgTnV4dCcsXG4gICAgbG9nbzogJ3J1YnktbG9nby5wbmcnLFxuICAgIGxpbms6ICdodHRwczovL2RyLXJvdXgtZ2lsYmVydC5jaGlydXJnaWVucy1kZW50aXN0ZXMuZnIvJyxcbiAgICBzcmM6ICcvaW1hZ2VzL3BvcnRmb2xpby9qcy9udXh0LWNhYmluZXQucG5nJyxcbiAgfSxcbl07XG5cbmNvbnN0IGVhc2luZyA9IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XTtcblxuY29uc3QgZmFkZUluVXAgPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiA2MCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNiwgZWFzZTogZWFzaW5nIH0sXG4gIH0sXG4gIGFuaW1hdGU6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgIGVhc2U6IGVhc2luZyxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3Qgc3RhZ2dlciA9IHtcbiAgYW5pbWF0ZToge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCByZW5kZXJKcyA9IChwcm9qZWN0cykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfSBjbGFzc05hbWU9XCJwcm9qZWN0LWNvbnRhaW5lclwiPlxuICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cbiAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIHByb2plY3RcIlxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICAgIGtleT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIHNyYz17cHJvamVjdC5zcmN9XG4gICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8gdGV4dC1jZW50ZXIgYm9yZGVyLXRvcFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QubG9nb30gLz5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj57cHJvamVjdC50aXRsZX08L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApKX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT1cImFuaW1hdGVcIiBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRpdGxlXCJcbiAgICAgID5cbiAgICAgICAgPGgxPlBPUlRGT0xJTzwvaDE+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8aDI+SmF2YXNjcmlwdDwvaDI+XG4gICAgICB7cmVuZGVySnMocHJvamVjdHNKUyl9XG4gICAgICA8aDI+UnVieTwvaDI+XG4gICAgICB7cmVuZGVySnMocHJvamVjdHNSdWJ5KX1cbiAgICA8L2Rpdj5cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuLy8gY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldO1xuXG4vLyBjb25zdCB0ZXN0ID0ge1xuLy8gICBzaG93OiB7IHk6ICctMTAwdmgnIH0sXG4vLyAgIGFuaW1hdGU6IHtcbi8vICAgICB5OiAtMTAwLFxuLy8gICAgIHRyYW5zaXRpb246IHtcbi8vICAgICAgIGR1cmF0aW9uOiAwLjUsXG4vLyAgICAgICBlYXNlOiBlYXNpbmcsXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vICAgZXhpdDogeyB5OiAnLTEwMHZoJyB9LFxuLy8gfTtcblxuLy8gY29uc3Qgc3RhZ2dlciA9IHtcbi8vICAgYW5pbWF0ZToge1xuLy8gICAgIHRyYW5zaXRpb246IHtcbi8vICAgICAgIHN0YWdnZXJDaGlsZHJlbjogMSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxtb3Rpb24uZGl2XG4vLyAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6ICctMTB2aCcgfX1cbi8vICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuLy8gICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4vLyAgICAgPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgPGgxPlBPUlRGT0xJTzwvaDE+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4vLyAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuLy8gICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e3Rlc3R9IGtleT17cHJvamVjdC50aXRsZX0gY2xhc3NOYW1lPVwicHJvamVjdFwiPlxuLy8gICAgICAgICAgICAgICA8aDM+e3Byb2plY3QudGl0bGV9PC9oMz5cbi8vICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L21vdGlvbi5kaXY+XG4vLyAgICk7XG4vLyB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ })

})