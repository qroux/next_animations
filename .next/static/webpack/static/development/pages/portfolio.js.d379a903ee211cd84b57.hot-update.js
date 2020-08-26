webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/qr/code/code perso/next_animations/pages/portfolio.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar projectsJS = [{\n  title: \"Cursed Twitch\",\n  lang: \"React | Redux\",\n  logo: \"/images/logo/react-redux.png\",\n  link: \"https://react-stream-client.herokuapp.com/\",\n  src: \"/images/portfolio/js/cursed-twitch.png\"\n}, {\n  title: \"Kickstarter\",\n  lang: \"React | Web3\",\n  logo: \"/images/logo/eth-logo.png\",\n  link: \"https://kickstarter-copy.herokuapp.com/\",\n  src: \"/images/portfolio/js/kickstarter.png\"\n}, {\n  title: \"Cabinet\",\n  lang: \"Vue | Nuxt\",\n  logo: \"/images/logo/vue-logo.png\",\n  link: \"https://dr-roux-gilbert.chirurgiens-dentistes.fr/\",\n  src: \"/images/portfolio/js/nuxt-cabinet.png\"\n}];\nvar projectsRuby = [{\n  title: \"Notice-droit.fr\",\n  lang: \"Ruby\",\n  logo: \"/images/portfolio/ruby/ruby-logo.png\",\n  link: \"https://notice-droit.fr/\",\n  src: \"/images/portfolio/ruby/notice.png\"\n}, {\n  title: \"OpenData Paris\",\n  lang: \"Ruby\",\n  logo: \"/images/portfolio/ruby/ruby-logo.png\",\n  link: \"https://trustpair-test.herokuapp.com/\",\n  src: \"/images/portfolio/ruby/trust.png\"\n}, {\n  title: \"Cabinet\",\n  lang: \"Sinatra\",\n  logo: \"/images/portfolio/ruby/sinatra-logo.png\",\n  link: \"https://skello-sinatra.herokuapp.com/\",\n  src: \"/images/portfolio/ruby/skello.png\"\n}];\nvar easing = [0.6, -0.05, 0.01, 0.99];\nvar fadeInUp = {\n  initial: {\n    y: 60,\n    opacity: 0,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  },\n  animate: {\n    y: 0,\n    opacity: 1,\n    transition: {\n      duration: 0.6,\n      ease: easing\n    }\n  }\n};\nvar stagger = {\n  animate: {\n    transition: {\n      staggerChildren: 0.1\n    }\n  }\n};\n\nvar renderJs = function renderJs(projects) {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    variants: stagger,\n    className: \"project-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, projects.map(function (project) {\n    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      variants: fadeInUp,\n      whileHover: {\n        scale: 1.05\n      },\n      whileTap: {\n        scale: 0.95\n      },\n      className: \"card project flex-md-column\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].img, {\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      transition: {\n        delay: 0.2\n      },\n      key: project.title,\n      src: project.src,\n      width: \"100%\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }\n    }), __jsx(\"div\", {\n      className: \"project-info text-center border-top py-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      src: project.logo,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 13\n      }\n    }), __jsx(\"a\", {\n      href: project.link,\n      target: \"blank\",\n      className: \"text-dark\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faGithub\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }))));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    initial: \"initial\",\n    animate: \"animate\",\n    exit: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    animate: {\n      opacity: 1\n    },\n    initial: {\n      opacity: 0\n    },\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, \"PORTFOLIO\")), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }\n  }, \"Javascript\"), renderJs(projectsJS), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 7\n    }\n  }, \"Ruby\"), renderJs(projectsRuby)));\n}); // const easing = [0.6, -0.05, 0.01, 0.99];\n// const test = {\n//   show: { y: '-100vh' },\n//   animate: {\n//     y: -100,\n//     transition: {\n//       duration: 0.5,\n//       ease: easing,\n//     },\n//   },\n//   exit: { y: '-100vh' },\n// };\n// const stagger = {\n//   animate: {\n//     transition: {\n//       staggerChildren: 1,\n//     },\n//   },\n// };\n// export default () => {\n//   return (\n//     <motion.div\n//       initial={{ opacity: 0, x: '-10vh' }}\n//       animate={{ opacity: 1, x: 0 }}\n//       exit={{ opacity: 0 }}\n//     >\n//       <div className=\"container text-center\">\n//         <h1>PORTFOLIO</h1>\n//         <div className=\"projects-container\">\n//           {projects.map((project) => (\n//             <motion.div variants={test} key={project.title} className=\"project\">\n//               <h3>{project.title}</h3>\n//             </motion.div>\n//           ))}\n//         </div>\n//       </div>\n//     </motion.div>\n//   );\n// };\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8uanM/NzgwOSJdLCJuYW1lcyI6WyJwcm9qZWN0c0pTIiwidGl0bGUiLCJsYW5nIiwibG9nbyIsImxpbmsiLCJzcmMiLCJwcm9qZWN0c1J1YnkiLCJlYXNpbmciLCJmYWRlSW5VcCIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJhbmltYXRlIiwic3RhZ2dlciIsInN0YWdnZXJDaGlsZHJlbiIsInJlbmRlckpzIiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0Iiwic2NhbGUiLCJkZWxheSIsImZhR2l0aHViIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsTUFBSSxFQUFFLGVBRlI7QUFHRUMsTUFBSSxFQUFFLDhCQUhSO0FBSUVDLE1BQUksRUFBRSw0Q0FKUjtBQUtFQyxLQUFHLEVBQUU7QUFMUCxDQURpQixFQVFqQjtBQUNFSixPQUFLLEVBQUUsYUFEVDtBQUVFQyxNQUFJLEVBQUUsY0FGUjtBQUdFQyxNQUFJLEVBQUUsMkJBSFI7QUFJRUMsTUFBSSxFQUFFLHlDQUpSO0FBS0VDLEtBQUcsRUFBRTtBQUxQLENBUmlCLEVBZWpCO0FBQ0VKLE9BQUssRUFBRSxTQURUO0FBRUVDLE1BQUksRUFBRSxZQUZSO0FBR0VDLE1BQUksRUFBRSwyQkFIUjtBQUlFQyxNQUFJLEVBQUUsbURBSlI7QUFLRUMsS0FBRyxFQUFFO0FBTFAsQ0FmaUIsQ0FBbkI7QUF3QkEsSUFBTUMsWUFBWSxHQUFHLENBQ25CO0FBQ0VMLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxNQUFJLEVBQUUsc0NBSFI7QUFJRUMsTUFBSSxFQUFFLDBCQUpSO0FBS0VDLEtBQUcsRUFBRTtBQUxQLENBRG1CLEVBUW5CO0FBQ0VKLE9B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V0FBTyxFQUFDLFNBQXRDO0FBQWdELFFBQUksRUFBRTtBQUFFYixhQUFPLEVBQUU7QUFBWCxLQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUU7QUFBRUEsYUFBTyxFQUFFO0FBQVgsS0FEWDtBQUVFLFdBQU8sRUFBRTtBQUFFQSxhQUFPLEVBQUU7QUFBWCxLQUZYO0FBR0UsYUFBUyxFQUFDLE9BSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsQ0FERixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkYsRUFTR08sUUFBUSxDQUFDbEIsVUFBRCxDQVRYLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLEVBV0drQixRQUFRLENBQUNaLFlBQUQsQ0FYWCxDQURGLENBRGE7QUFBQSxDQUFmLEUsQ0FrQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvcG9ydGZvbGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFHaXRodWIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiO1xuXG5jb25zdCBwcm9qZWN0c0pTID0gW1xuICB7XG4gICAgdGl0bGU6IFwiQ3Vyc2VkIFR3aXRjaFwiLFxuICAgIGxhbmc6IFwiUmVhY3QgfCBSZWR1eFwiLFxuICAgIGxvZ286IFwiL2ltYWdlcy9sb2dvL3JlYWN0LXJlZHV4LnBuZ1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9yZWFjdC1zdHJlYW0tY2xpZW50Lmhlcm9rdWFwcC5jb20vXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL2pzL2N1cnNlZC10d2l0Y2gucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJLaWNrc3RhcnRlclwiLFxuICAgIGxhbmc6IFwiUmVhY3QgfCBXZWIzXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ28vZXRoLWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL2tpY2tzdGFydGVyLWNvcHkuaGVyb2t1YXBwLmNvbS9cIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vanMva2lja3N0YXJ0ZXIucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDYWJpbmV0XCIsXG4gICAgbGFuZzogXCJWdWUgfCBOdXh0XCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL2xvZ28vdnVlLWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL2RyLXJvdXgtZ2lsYmVydC5jaGlydXJnaWVucy1kZW50aXN0ZXMuZnIvXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL2pzL251eHQtY2FiaW5ldC5wbmdcIixcbiAgfSxcbl07XG5cbmNvbnN0IHByb2plY3RzUnVieSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIk5vdGljZS1kcm9pdC5mclwiLFxuICAgIGxhbmc6IFwiUnVieVwiLFxuICAgIGxvZ286IFwiL2ltYWdlcy9wb3J0Zm9saW8vcnVieS9ydWJ5LWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL25vdGljZS1kcm9pdC5mci9cIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vcnVieS9ub3RpY2UucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJPcGVuRGF0YSBQYXJpc1wiLFxuICAgIGxhbmc6IFwiUnVieVwiLFxuICAgIGxvZ286IFwiL2ltYWdlcy9wb3J0Zm9saW8vcnVieS9ydWJ5LWxvZ28ucG5nXCIsXG4gICAgbGluazogXCJodHRwczovL3RydXN0cGFpci10ZXN0Lmhlcm9rdWFwcC5jb20vXCIsXG4gICAgc3JjOiBcIi9pbWFnZXMvcG9ydGZvbGlvL3J1YnkvdHJ1c3QucG5nXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJDYWJpbmV0XCIsXG4gICAgbGFuZzogXCJTaW5hdHJhXCIsXG4gICAgbG9nbzogXCIvaW1hZ2VzL3BvcnRmb2xpby9ydWJ5L3NpbmF0cmEtbG9nby5wbmdcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vc2tlbGxvLXNpbmF0cmEuaGVyb2t1YXBwLmNvbS9cIixcbiAgICBzcmM6IFwiL2ltYWdlcy9wb3J0Zm9saW8vcnVieS9za2VsbG8ucG5nXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV07XG5cbmNvbnN0IGZhZGVJblVwID0ge1xuICBpbml0aWFsOiB7XG4gICAgeTogNjAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjYsIGVhc2U6IGVhc2luZyB9LFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICBlYXNlOiBlYXNpbmcsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IHN0YWdnZXIgPSB7XG4gIGFuaW1hdGU6IHtcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgcmVuZGVySnMgPSAocHJvamVjdHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17c3RhZ2dlcn0gY2xhc3NOYW1lPVwicHJvamVjdC1jb250YWluZXJcIj5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICB2YXJpYW50cz17ZmFkZUluVXB9XG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBwcm9qZWN0IGZsZXgtbWQtY29sdW1uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uaW1nXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICBzcmM9e3Byb2plY3Quc3JjfVxuICAgICAgICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWluZm8gdGV4dC1jZW50ZXIgYm9yZGVyLXRvcCBweS0yXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5sb2dvfSAvPlxuXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0Lmxpbmt9IHRhcmdldD1cImJsYW5rXCIgY2xhc3NOYW1lPVwidGV4dC1kYXJrXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IC8+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIHsvKiA8aDQgY2xhc3NOYW1lPVwidGV4dC1kYXJrIGZvbnQtd2VpZ2h0LWJvbGRcIj57cHJvamVjdC5sYW5nfTwvaDQ+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApKX1cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxtb3Rpb24uZGl2IGluaXRpYWw9XCJpbml0aWFsXCIgYW5pbWF0ZT1cImFuaW1hdGVcIiBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwidGl0bGVcIlxuICAgICAgPlxuICAgICAgICA8aDE+UE9SVEZPTElPPC9oMT5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxoMj5KYXZhc2NyaXB0PC9oMj5cbiAgICAgIHtyZW5kZXJKcyhwcm9qZWN0c0pTKX1cbiAgICAgIDxoMj5SdWJ5PC9oMj5cbiAgICAgIHtyZW5kZXJKcyhwcm9qZWN0c1J1YnkpfVxuICAgIDwvZGl2PlxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG4vLyBjb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV07XG5cbi8vIGNvbnN0IHRlc3QgPSB7XG4vLyAgIHNob3c6IHsgeTogJy0xMDB2aCcgfSxcbi8vICAgYW5pbWF0ZToge1xuLy8gICAgIHk6IC0xMDAsXG4vLyAgICAgdHJhbnNpdGlvbjoge1xuLy8gICAgICAgZHVyYXRpb246IDAuNSxcbi8vICAgICAgIGVhc2U6IGVhc2luZyxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICBleGl0OiB7IHk6ICctMTAwdmgnIH0sXG4vLyB9O1xuXG4vLyBjb25zdCBzdGFnZ2VyID0ge1xuLy8gICBhbmltYXRlOiB7XG4vLyAgICAgdHJhbnNpdGlvbjoge1xuLy8gICAgICAgc3RhZ2dlckNoaWxkcmVuOiAxLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPG1vdGlvbi5kaXZcbi8vICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogJy0xMHZoJyB9fVxuLy8gICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4vLyAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbi8vICAgICA+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuLy8gICAgICAgICA8aDE+UE9SVEZPTElPPC9oMT5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1jb250YWluZXJcIj5cbi8vICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4vLyAgICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17dGVzdH0ga2V5PXtwcm9qZWN0LnRpdGxlfSBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4vLyAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxuLy8gICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvbW90aW9uLmRpdj5cbi8vICAgKTtcbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ })

})