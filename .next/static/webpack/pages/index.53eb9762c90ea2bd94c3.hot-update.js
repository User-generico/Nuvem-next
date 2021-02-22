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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCloud"], {
      onClick: function onClick() {
        return router.push('/');
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), tipos && tipos.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
        href: item.id,
        children: [item.Tipo_de_nuvem, ";"]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGlwb3MiLCJzZXRUaXBvcyIsInVzZUVmZmVjdCIsIkZlY3RjaERhdGEiLCJhcGlUaXBvIiwiaW5kZXgiLCJyZXNwb25zZSIsImRhdGEiLCJwdXNoIiwibWFwIiwiaXRlbSIsImlkIiwiVGlwb19kZV9udXZlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUFBOztBQUNoQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURnQixrQkFFVUMsc0RBQVEsQ0FBYyxFQUFkLENBRmxCO0FBQUEsTUFFVEMsS0FGUztBQUFBLE1BRUZDLFFBRkU7O0FBSWhCQyx5REFBUyxDQUFFLFlBQU07QUFDYixRQUFNQyxVQUFVO0FBQUEsNFJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDUUMsaURBQU8sQ0FBQ0MsS0FBUixFQURSOztBQUFBO0FBQ1RDLHdCQURTO0FBRWZMLHdCQUFRO0FBQUVLLHdCQUFRLENBQUNDLElBQVY7O0FBRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVkosVUFBVTtBQUFBO0FBQUE7QUFBQSxPQUFoQjs7QUFJQUEsY0FBVTtBQUNiLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFPQSxzQkFDSTtBQUFLLGFBQVMsRUFBRSxXQUFoQjtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQVMsYUFBTyxFQUFLO0FBQUEsZUFBTU4sTUFBTSxDQUFDVyxJQUFQLENBQVksR0FBWixDQUFOO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtSLEtBQUssSUFBSUEsS0FBSyxDQUFDUyxHQUFOLENBQVcsVUFBQ0MsSUFBRDtBQUFBLDBCQUNqQixxRUFBQyxvREFBRDtBQUFxQixZQUFJLEVBQUVBLElBQUksQ0FBQ0MsRUFBaEM7QUFBQSxtQkFDS0QsSUFBSSxDQUFDRSxhQURWO0FBQUEsU0FBWUYsSUFBSSxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGlCO0FBQUEsS0FBWCxDQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0FyQkQ7O0dBQU1mLE07VUFDYUUscUQ7OztLQURiRixNO0FBdUJTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41M2ViOTc2MmM5MGVhMmJkOTRjMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0JzQ2xvdWR9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaVRpcG8gfSBmcm9tIFwiLi4vLi4vYXBpL2RhdGFcIjtcclxuaW1wb3J0IHsgSW50ZXJUaXBvIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9JbnRlcmZhY2VzL1RpcG8uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCAgTGluayBmcm9tIFwiLi4vLi4vc3R5bGVzL0xpbmtcIjtcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3RpcG9zLCBzZXRUaXBvc10gPSB1c2VTdGF0ZTxJbnRlclRpcG9bXT4oW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBGZWN0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVRpcG8uaW5kZXgoKTtcclxuICAgICAgICAgICAgc2V0VGlwb3M7KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGZWN0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxCc0Nsb3VkIG9uQ2xpY2sgPSB7ICgpID0+IHJvdXRlci5wdXNoKCcvJyl9IC8+XHJcbiAgICAgICAgICAgIHt0aXBvcyAmJiB0aXBvcy5tYXAgKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBrZXkgPXtpdGVtLmlkfSBocmVmPXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5UaXBvX2RlX251dmVtfTtcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSl9IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9