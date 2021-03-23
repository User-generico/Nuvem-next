webpackHotUpdate_N_E("pages/index",{

/***/ "./src/componets/Header/index.tsx":
/*!****************************************!*\
  !*** ./src/componets/Header/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/data */ "./src/api/data/index.ts");
/* harmony import */ var _styles_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Link */ "./src/styles/Link.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/componets/Header/styles.ts");




var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\componets\\Header\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Header = function Header() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      tipos = _useState[0],
      setTipos = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var FectchData = /*#__PURE__*/function () {
      var _ref = Object(C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response;
        return C_Users_ochea_Documents_LAW_nome_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _api_data__WEBPACK_IMPORTED_MODULE_6__["apiTipo"].index();

              case 2:
                response = _context.sent;
                setTipos(response.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function FectchData() {
        return _ref.apply(this, arguments);
      };
    }();

    FectchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCloud"], {
        onClick: function onClick() {
          return router.push('/');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, _this), tipos && tipos.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: "/".concat(item.id),
          children: item.Tipo_de_nuvem
        }, item.id, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Dropdown"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Botaodrop"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Tipos de Nuvens"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_8__["Dropdowncontent"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: "/cirrus",
          children: "Cirrus"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, _this);
};

_s(Header, "vpMBzR01j0+rbmfyUDT8oRlOybk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGlwb3MiLCJzZXRUaXBvcyIsInVzZUVmZmVjdCIsIkZlY3RjaERhdGEiLCJhcGlUaXBvIiwiaW5kZXgiLCJyZXNwb25zZSIsImRhdGEiLCJwdXNoIiwibWFwIiwiaXRlbSIsImlkIiwiVGlwb19kZV9udXZlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURnQixrQkFFVUMsc0RBQVEsQ0FBYyxFQUFkLENBRmxCO0FBQUEsTUFFVEMsS0FGUztBQUFBLE1BRUZDLFFBRkU7O0FBSWhCQyx5REFBUyxDQUFFLFlBQU07QUFDYixRQUFNQyxVQUFVO0FBQUEsNFJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUUMsaURBQU8sQ0FBQ0MsS0FBUixFQURSOztBQUFBO0FBQ1RDLHdCQURTO0FBRWZMLHdCQUFRLENBQUNLLFFBQVEsQ0FBQ0MsSUFBVixDQUFSOztBQUZlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZKLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBSUFBLGNBQVU7QUFDYixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0Esc0JBQ0kscUVBQUMsaURBQUQ7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRSxXQUFoQjtBQUFBLDhCQUNRLHFFQUFDLHNEQUFEO0FBQVMsZUFBTyxFQUFLO0FBQUEsaUJBQU1OLE1BQU0sQ0FBQ1csSUFBUCxDQUFZLEdBQVosQ0FBTjtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUixFQUVTUixLQUFLLElBQUdBLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw0QkFDZixxRUFBQyxvREFBRDtBQUFvQixjQUFJLGFBQU1BLElBQUksQ0FBQ0MsRUFBWCxDQUF4QjtBQUFBLG9CQUNLRCxJQUFJLENBQUNFO0FBRFYsV0FBV0YsSUFBSSxDQUFDQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURlO0FBQUEsT0FBVixDQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0kscUVBQUMsaURBQUQ7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHFFQUFDLHVEQUFEO0FBQUEsK0JBQ0kscUVBQUMsb0RBQUQ7QUFBTSxjQUFJLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzQkgsQ0FqQ0Q7O0dBQU1mLE07VUFDYUUscUQ7OztLQURiRixNO0FBcUNTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ODQ2ODdkNDQxM2UzYjQ5NzVlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JzQ2xvdWR9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaVRpcG8gfSBmcm9tIFwiLi4vLi4vYXBpL2RhdGFcIjtcclxuaW1wb3J0IHsgSW50ZXJUaXBvIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9JbnRlcmZhY2VzL1RpcG8uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCAgTGluayBmcm9tIFwiLi4vLi4vc3R5bGVzL0xpbmtcIjtcclxuaW1wb3J0IHtDb250YWluZXIsIEJvdGFvZHJvcCwgRHJvcGRvd24sIERyb3Bkb3duY29udGVudH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXBvcywgc2V0VGlwb3NdID0gdXNlU3RhdGU8SW50ZXJUaXBvW10+KFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRmVjdGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlUaXBvLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNldFRpcG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGZWN0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJzQ2xvdWQgb25DbGljayA9IHsgKCkgPT4gcm91dGVyLnB1c2goJy8nKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7dGlwb3MgJiZ0aXBvcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtpdGVtLmlkfSBocmVmPXtgLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLlRpcG9fZGVfbnV2ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgPEJvdGFvZHJvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5UaXBvcyBkZSBOdXZlbnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQm90YW9kcm9wPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duY29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NpcnJ1c2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaXJydXNcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duY29udGVudD5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9