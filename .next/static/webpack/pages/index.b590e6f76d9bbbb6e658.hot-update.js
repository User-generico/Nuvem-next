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
                setTipos;
                response.data;

              case 5:
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCloud"], {
        onClick: function onClick() {
          return router.push('/');
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), tipos && tipos.map(function (item) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
          href: item.id,
          children: [item.Tipo_de_nuvem, ";"]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGlwb3MiLCJzZXRUaXBvcyIsInVzZUVmZmVjdCIsIkZlY3RjaERhdGEiLCJhcGlUaXBvIiwiaW5kZXgiLCJyZXNwb25zZSIsImRhdGEiLCJwdXNoIiwibWFwIiwiaXRlbSIsImlkIiwiVGlwb19kZV9udXZlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURnQixrQkFFVUMsc0RBQVEsQ0FBYyxFQUFkLENBRmxCO0FBQUEsTUFFVEMsS0FGUztBQUFBLE1BRUZDLFFBRkU7O0FBSWhCQyx5REFBUyxDQUFFLFlBQU07QUFDYixRQUFNQyxVQUFVO0FBQUEsNFJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUUMsaURBQU8sQ0FBQ0MsS0FBUixFQURSOztBQUFBO0FBQ1RDLHdCQURTO0FBRWZMLHdCQUFRO0FBQUVLLHdCQUFRLENBQUNDLElBQVY7O0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFJQUEsY0FBVTtBQUNiLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDSSxxRUFBQyxpREFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFLFdBQWhCO0FBQUEsOEJBQ0kscUVBQUMsc0RBQUQ7QUFBUyxlQUFPLEVBQUs7QUFBQSxpQkFBTU4sTUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtSLEtBQUssSUFBSUEsS0FBSyxDQUFDUyxHQUFOLENBQVcsVUFBQ0MsSUFBRDtBQUFBLDRCQUNqQixxRUFBQyxvREFBRDtBQUFxQixjQUFJLEVBQUVBLElBQUksQ0FBQ0MsRUFBaEM7QUFBQSxxQkFDS0QsSUFBSSxDQUFDRSxhQURWO0FBQUEsV0FBWUYsSUFBSSxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQVgsQ0FGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFZSCxDQXZCRDs7R0FBTWYsTTtVQUNhRSxxRDs7O0tBRGJGLE07QUF5QlNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1OTBlNmY3NmQ5YmJiYjZlNjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7QnNDbG91ZH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBpVGlwbyB9IGZyb20gXCIuLi8uLi9hcGkvZGF0YVwiO1xyXG5pbXBvcnQgeyBJbnRlclRpcG8gfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0ludGVyZmFjZXMvVGlwby5JbnRlcmZhY2VcIjtcclxuaW1wb3J0ICBMaW5rIGZyb20gXCIuLi8uLi9zdHlsZXMvTGlua1wiO1xyXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXBvcywgc2V0VGlwb3NdID0gdXNlU3RhdGU8SW50ZXJUaXBvW10+KFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRmVjdGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlUaXBvLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNldFRpcG9zOyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRmVjdGNoRGF0YSgpO1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPEJzQ2xvdWQgb25DbGljayA9IHsgKCkgPT4gcm91dGVyLnB1c2goJy8nKX0gLz5cclxuICAgICAgICAgICAgICAgIHt0aXBvcyAmJiB0aXBvcy5tYXAgKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5ID17aXRlbS5pZH0gaHJlZj17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLlRpcG9fZGVfbnV2ZW19O1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==