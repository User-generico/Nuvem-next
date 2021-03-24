module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/data/index.ts":
/*!*******************************!*\
  !*** ./src/api/data/index.ts ***!
  \*******************************/
/*! exports provided: apiTipo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tipo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tipo */ "./src/api/data/tipo/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apiTipo", function() { return _tipo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/api/data/tipo/index.ts":
/*!************************************!*\
  !*** ./src/api/data/tipo/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../index */ "./src/api/index.ts");


class TipoData {
  index() {
    return _index__WEBPACK_IMPORTED_MODULE_0__["default"].get("TipoDeNuvem");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new TipoData());

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://nuvemm.herokuapp.com"
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/componets/Header/index.tsx":
/*!****************************************!*\
  !*** ./src/componets/Header/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/data */ "./src/api/data/index.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/componets/Header/styles.ts");

var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\componets\\Header\\index.tsx";





const Header = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: tipos,
    1: setTipos
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const FectchData = async () => {
      const response = await _api_data__WEBPACK_IMPORTED_MODULE_3__["apiTipo"].index();
      setTipos(response.data);
    };

    FectchData();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "img/logo.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "dropdown",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "dropbtn",
          children: "TIPOS DE NUVENS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "dropdown-content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "cirrus",
            children: "CIRRUS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "cirruscumulus",
            children: "CIRRUS CUMULUS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "noc",
            children: "NOCTILUCENTES"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "onda",
            children: "ONDULA\xC7\xD5ES DE KELVIN-HELMHOLTZ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "index",
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "como",
          className: "button",
          children: "COMO NASCEM AS NUVENS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 26
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/componets/Header/styles.ts":
/*!****************************************!*\
  !*** ./src/componets/Header/styles.ts ***!
  \****************************************/
/*! exports provided: Container, Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    position: fixed;
    width: 1900px;
    background: #1054BA;
    box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
 
    margin-top: -10px;
    margin-left: -10px;
 
    color: white;

    display: inline-flex;
    float: left;
`;
const Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    .dropdown {
    position: relative;
    display: inline-block;
    }

    .dropbtn {
    background-color: #0B3067;
    color: white;
    font-family: 'Courier New', Courier;
    padding: 27px 27px;
    border: none;
    cursor: pointer;
    }
  
    .dropdown-content {
    display: none;
    position: absolute;
    background-color: #071E41;
    float: center;
    }
  
    .dropdown-content a {
    color: white;
    padding: 27px 27px;
    border: none;
    text-decoration: none;
    display: block;
    }
  
    .dropdown-content a:hover {background-color: #0B3067;}
  
    .dropdown:hover .dropdown-content {
    display: block;
    }
  
    .dropdown:hover .dropbtn {
    background-color: #0B3067;
    }
 
 
    .button {
    background-color: #083067;
    text-align: center;
    padding: 27px 27px;
    color: white;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    }
`;

/***/ }),

/***/ "./src/componets/Loading/index.tsx":
/*!*****************************************!*\
  !*** ./src/componets/Loading/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lotties_17487_cloud_blob_icon_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lotties/17487-cloud-blob-icon.json */ "./src/lotties/17487-cloud-blob-icon.json");
var _lotties_17487_cloud_blob_icon_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../lotties/17487-cloud-blob-icon.json */ "./src/lotties/17487-cloud-blob-icon.json", 1);

var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\componets\\Loading\\index.tsx";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: _lotties_17487_cloud_blob_icon_json__WEBPACK_IMPORTED_MODULE_2__,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Loading = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: defaultOptions,
    height: 400,
    width: 400
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/componets/index.ts":
/*!********************************!*\
  !*** ./src/componets/index.ts ***!
  \********************************/
/*! exports provided: Header, Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/componets/Header/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./src/componets/Loading/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/lotties/17487-cloud-blob-icon.json":
/*!************************************************!*\
  !*** ./src/lotties/17487-cloud-blob-icon.json ***!
  \************************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.20\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":150.000006109625,\"w\":800,\"h\":800,\"nm\":\"blob cloud\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"cloud\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[381,212,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[56,56,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,44.7],[55,0],[117.8,16.3],[45.3,-8.2],[9.8,-55.8],[0.2,-2.1],[3.5,-1.7],[8.7,-32.3],[4.4,-1],[14.3,-10],[0,-31.6],[-68.6,0]],\"o\":[[0,0],[54.9,0],[0,-44.7],[0,-99.9],[-30.4,-37.8],[-53.8,9.8],[-0.4,2.1],[-0.6,4.1],[-32.4,16.1],[-3.2,-1.5],[-17,3.9],[-25.3,17.9],[0,55.9],[0,0]],\"v\":[[108.2,206.3],[276.7,206.3],[373,121.4],[276.7,40.5],[67.1,-160.1],[-64.2,-198.1],[-172.8,-95.4],[-173.7,-89.1],[-200.6,-75.2],[-248.9,0.6],[-281.7,3.7],[-329.4,24.1],[-373,101.3],[-252.7,206.3]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.999908088235,0.99996547325,0.999948419309,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":16,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[381,209.7],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":4,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":43,\"s\":[0]},{\"t\":51.0000020772726,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":4,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":43,\"s\":[90]},{\"t\":51.0000020772726,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":4.00000016292334,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"blob line 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":25,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":25,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"blob line 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":-25,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":-0.368,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-80.851,53.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[75.023,-49.608],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-141.063,5.953],[38.992,123.061],[168.478,31.953],[34.992,-152.25]],\"c\":true}]},{\"t\":149.632506094657,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":25,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":3,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[-360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"blob 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":50,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-11.078,-132.477],[-75.465,41.182],[15.381,101.523],[114.867,-10.273]],\"o\":[[11.078,132.477],[68,-37.108],[-15.381,-101.523],[-114.867,10.273]],\"v\":[[-193.063,37.953],[76.992,173.061],[182.479,-38.047],[-29.008,-180.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-11.078,-132.477],[-75.465,41.182],[15.381,101.523],[114.867,-10.273]],\"o\":[[11.078,132.477],[68,-37.108],[-15.381,-101.523],[-114.867,10.273]],\"v\":[[-193.063,37.953],[76.992,173.061],[182.479,-38.047],[-29.008,-180.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.002752787225,0.529215255438,0.701960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[720]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"blob 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.964705642999,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[-360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"blob 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":-0.368,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-80.851,53.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[75.023,-49.608],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-141.063,5.953],[38.992,123.061],[168.478,31.953],[34.992,-152.25]],\"c\":true}]},{\"t\":149.632506094657,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.494117467544,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _componets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componets */ "./src/componets/index.ts");
/* harmony import */ var _styles_Index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Index */ "./src/styles/Index.ts");


var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\pages\\index.tsx";



function Home() {
  const {
    0: IsLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: IsLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Loading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 27
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Header"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 16
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Index__WEBPACK_IMPORTED_MODULE_3__["Meio"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  children: "aaa"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "title",
                  children: "NUVENS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 54
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "sub-title",
                  children: "DESCUBRA TIPOS DE NUVENS E O QUE ELAS SIGNIFICAM"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 52
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Footer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/Index.ts":
/*!*****************************!*\
  !*** ./src/styles/Index.ts ***!
  \*****************************/
/*! exports provided: Link, Meio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meio", function() { return Meio; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Link */ "./src/styles/Link.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _styles_Link__WEBPACK_IMPORTED_MODULE_1__["default"]; });



const Meio = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section`
    .title {
    color: white;
    font-size: 100px;
    text-align: center;
    }

    .sub-title {
    color: white;
    font-size: 30px;
    border: 8px solid white;
    padding: 50px;
    border-radius: 5%;
    grid-area: sub;
    }
`;

/***/ }),

/***/ "./src/styles/Link.ts":
/*!****************************!*\
  !*** ./src/styles/Link.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const sizeVariations = {
  default: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
        height: 35px;
        width: 150px;
        font-size: 16px;
    `
};
const colorVariaations = {
  default: styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
        background: var(--main-background);
        color: var(--main);
        &-hover{
            background: var(--main-hover);
        }

    `
};
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
    transition: background-color 0.10 ease;
    transition: color 0.10 ease-in-out, background-color 0.10 ease-in-out;
    border-color: color 0.10 ease-in-out, box-shadow 0.10 ease-in-out;
    
    padding: 5px;
    font-weight: 700;

    display: flex;
    align-items: center;
    color: var(--main-hover);

    cursor: pointer;

    ${props => sizeVariations[props.size || "default"]}
    ${props => sizeVariations[props.bgColor || "default"]}

    &:focus{
        outline: none;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZGF0YS90aXBvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvSGVhZGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZXRzL0xvYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvTGluay50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb3R0aWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlRpcG9EYXRhIiwiaW5kZXgiLCJhcGkiLCJnZXQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0aXBvcyIsInNldFRpcG9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGZWN0Y2hEYXRhIiwicmVzcG9uc2UiLCJhcGlUaXBvIiwiZGF0YSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkRyb3Bkb3duIiwiZGVmYXVsdE9wdGlvbnMiLCJsb29wIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EYXRhIiwibG9hZGluZ0xvdHRpZSIsInJlbmRlcmVyU2V0dGluZ3MiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiTG9hZGluZyIsIkhvbWUiLCJJc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXRUaW1lb3V0IiwiTWVpbyIsInNlY3Rpb24iLCJzaXplVmFyaWF0aW9ucyIsImRlZmF1bHQiLCJjc3MiLCJjb2xvclZhcmlhYXRpb25zIiwiTGluayIsImEiLCJwcm9wcyIsInNpemUiLCJiZ0NvbG9yIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOztBQUVBLE1BQU1BLFFBQU4sQ0FBZTtBQUNYQyxPQUFLLEdBQUU7QUFDSCxX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LHdEQUFNLENBQUNnQixPQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPLEM7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBR0EsTUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxTQUFPLEVBQUVDLHFEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBTHVCLENBQXZCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUc7QUFDckJGLFNBQU8sRUFBRUMscURBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSeUIsQ0FBekI7QUFXQSxNQUFNRSxJQUFJLEdBQUdyQix3REFBTSxDQUFDc0IsQ0FBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU9DLEtBQUQsSUFBV04sY0FBYyxDQUFDTSxLQUFLLENBQUNDLElBQU4sSUFBYyxTQUFmLENBQTBCO0FBQ3pELE1BQU9ELEtBQUQsSUFBV04sY0FBYyxDQUFDTSxLQUFLLENBQUNFLE9BQU4sSUFBaUIsU0FBbEIsQ0FBNkI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBCQTtBQXNCZUosbUVBQWYsRTs7Ozs7Ozs7Ozs7QUM1Q0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwaVRpcG8gfSBmcm9tIFwiLi90aXBvXCI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtJbnRlclRpcG99IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW50ZXJmYWNlcy9UaXBvLkludGVyZmFjZVwiO1xyXG5jbGFzcyBUaXBvRGF0YSB7XHJcbiAgICBpbmRleCgpe1xyXG4gICAgICAgIHJldHVybiBhcGkuZ2V0PEludGVyVGlwb1tdPihcIlRpcG9EZU51dmVtXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUaXBvRGF0YSgpOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHBzOi8vbnV2ZW1tLmhlcm9rdWFwcC5jb21cIlxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGlUaXBvIH0gZnJvbSBcIi4uLy4uL2FwaS9kYXRhXCI7XHJcbmltcG9ydCB7IEludGVyVGlwbyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvSW50ZXJmYWNlcy9UaXBvLkludGVyZmFjZVwiO1xyXG5pbXBvcnQgIExpbmsgZnJvbSBcIi4uLy4uL3N0eWxlcy9MaW5rXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXBvcywgc2V0VGlwb3NdID0gdXNlU3RhdGU8SW50ZXJUaXBvW10+KFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRmVjdGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlUaXBvLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNldFRpcG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGZWN0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID1cImltZy9sb2dvLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPlRJUE9TIERFIE5VVkVOUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaXJydXNcIj5DSVJSVVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2lycnVzY3VtdWx1c1wiPkNJUlJVUyBDVU1VTFVTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm5vY1wiPk5PQ1RJTFVDRU5URVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwib25kYVwiPk9ORFVMQcOHw5VFUyBERSBLRUxWSU4tSEVMTUhPTFRaPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4XCI+SE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwiY29tb1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkNPTU8gTkFTQ0VNIEFTIE5VVkVOUzwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTA1NEJBO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuIFxyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSAgc3R5bGVkLmRpdiBgXHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjMwNjc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllcjtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcxRTQxO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjdweCAyN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMEIzMDY3O31cclxuICBcclxuICAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIzMDY3O1xyXG4gICAgfVxyXG4gXHJcbiBcclxuICAgIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzA2NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuYCIsIiAgXHJcbmltcG9ydCBMb3R0aWUgZnJvbSBcInJlYWN0LWxvdHRpZVwiO1xyXG5pbXBvcnQgbG9hZGluZ0xvdHRpZSBmcm9tIFwiLi4vLi4vbG90dGllcy8xNzQ4Ny1jbG91ZC1ibG9iLWljb24uanNvblwiO1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhbmltYXRpb25EYXRhOiBsb2FkaW5nTG90dGllLFxyXG4gIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTG9hZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxMb3R0aWUgb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9IGhlaWdodD17NDAwfSB3aWR0aD17NDAwfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSBcIi4vTG9hZGluZ1wiOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtQZSwgSGVhZGVyLCBMb2FkaW5nfSBmcm9tIFwiLi4vY29tcG9uZXRzXCI7XHJcbmltcG9ydCB7TWVpb30gZnJvbSBcIi4uL3N0eWxlcy9JbmRleFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtJc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9LDQwMDApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtJc0xvYWRpbmcgPyAoPExvYWRpbmcgLz4pOiBcclxuICAgICAgICAgICAgKDw+PEhlYWRlciAvPiBcclxuICAgICAgICAgICAgPE1laW8+XHJcbiAgICAgICAgICAgICAgICA8Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwicm93XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPjxwPmFhYTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInRpdGxlXCI+TlVWRU5TPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLTNcIj48cD48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPjxwPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInN1Yi10aXRsZVwiPkRFU0NVQlJBIFRJUE9TIERFIE5VVkVOUyBFIE8gUVVFIEVMQVMgU0lHTklGSUNBTTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPjxwPjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PiBcclxuICAgICAgICAgICAgPC9NZWlvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuLi9zdHlsZXMvTGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1laW8gPSBzdHlsZWQuc2VjdGlvbiBgXHJcbiAgICAudGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgZ3JpZC1hcmVhOiBzdWI7XHJcbiAgICB9XHJcbmAiLCJpbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtMaW5rUHJvcHN9IGZyb20gXCIuL0ludGVyZmFjZXMvTGluay5pbnRlcmZhY2VcIlxyXG5cclxuY29uc3Qgc2l6ZVZhcmlhdGlvbnMgPSB7XHJcbiAgICBkZWZhdWx0OiBjc3NgXHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBgXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9yVmFyaWFhdGlvbnMgPSB7XHJcbiAgICBkZWZhdWx0OiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgICAgICAgJi1ob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1ob3Zlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGBcclxufVxyXG5cclxuY29uc3QgTGluayA9IHN0eWxlZC5hPExpbmtQcm9wcz5gXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTAgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTAgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xMCBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1jb2xvcjogY29sb3IgMC4xMCBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjEwIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4taG92ZXIpO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAkeyhwcm9wcykgPT4gc2l6ZVZhcmlhdGlvbnNbcHJvcHMuc2l6ZSB8fCBcImRlZmF1bHRcIl19XHJcbiAgICAkeyhwcm9wcykgPT4gc2l6ZVZhcmlhdGlvbnNbcHJvcHMuYmdDb2xvciB8fCBcImRlZmF1bHRcIl19XHJcblxyXG4gICAgJjpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=