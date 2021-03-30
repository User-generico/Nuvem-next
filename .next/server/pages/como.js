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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/como.tsx");
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

/***/ "./src/componets/Footer/index.tsx":
/*!****************************************!*\
  !*** ./src/componets/Footer/index.tsx ***!
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
/* harmony import */ var _Footer_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Footer/styles */ "./src/componets/Footer/styles.ts");

var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\componets\\Footer\\index.tsx";





const Pe = () => {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer_styles__WEBPACK_IMPORTED_MODULE_4__["Foo"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "f",
            href: "galeriadasnuvens",
            children: "Galeria das Nuvens"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "f",
            href: "registrarnuvens",
            children: "Registrar Nuvens"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "f",
            href: "registrarlogar",
            children: "Registrar/Logar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("embed", {
            className: "musica",
            src: "img/Circle of Life.mp3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pe);

/***/ }),

/***/ "./src/componets/Footer/styles.ts":
/*!****************************************!*\
  !*** ./src/componets/Footer/styles.ts ***!
  \****************************************/
/*! exports provided: Foo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Foo", function() { return Foo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Foo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    footer {
    width: 1900px;
    background: #1054BA;
    box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
     
    margin-bottom: -10px;
    margin-left: -14px;
     
    color: white;
}

.f {
    background-color: #083067;
    text-align: center;
    padding: 27px 27px;
    color: white;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer
}

.musica {
    visibility:hidden
}
`;

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
            href: "/",
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
/*! exports provided: Header, Loading, Pe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/componets/Header/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading */ "./src/componets/Loading/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _Loading__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/componets/Footer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pe", function() { return _Footer__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/lotties/17487-cloud-blob-icon.json":
/*!************************************************!*\
  !*** ./src/lotties/17487-cloud-blob-icon.json ***!
  \************************************************/
/*! exports provided: v, meta, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.5.7\",\"meta\":{\"g\":\"LottieFiles AE 0.1.20\",\"a\":\"\",\"k\":\"\",\"d\":\"\",\"tc\":\"\"},\"fr\":29.9700012207031,\"ip\":0,\"op\":150.000006109625,\"w\":800,\"h\":800,\"nm\":\"blob cloud\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"cloud\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[381,212,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[56,56,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,44.7],[55,0],[117.8,16.3],[45.3,-8.2],[9.8,-55.8],[0.2,-2.1],[3.5,-1.7],[8.7,-32.3],[4.4,-1],[14.3,-10],[0,-31.6],[-68.6,0]],\"o\":[[0,0],[54.9,0],[0,-44.7],[0,-99.9],[-30.4,-37.8],[-53.8,9.8],[-0.4,2.1],[-0.6,4.1],[-32.4,16.1],[-3.2,-1.5],[-17,3.9],[-25.3,17.9],[0,55.9],[0,0]],\"v\":[[108.2,206.3],[276.7,206.3],[373,121.4],[276.7,40.5],[67.1,-160.1],[-64.2,-198.1],[-172.8,-95.4],[-173.7,-89.1],[-200.6,-75.2],[-248.9,0.6],[-281.7,3.7],[-329.4,24.1],[-373,101.3],[-252.7,206.3]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.999908088235,0.99996547325,0.999948419309,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":16,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[381,209.7],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Group 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":4,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":43,\"s\":[0]},{\"t\":51.0000020772726,\"s\":[0]}],\"ix\":1},\"e\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":4,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":43,\"s\":[90]},{\"t\":51.0000020772726,\"s\":[100]}],\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":4.00000016292334,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"blob line 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":25,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":25,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"blob line 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":-25,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":-0.368,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-80.851,53.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[75.023,-49.608],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-141.063,5.953],[38.992,123.061],[168.478,31.953],[34.992,-152.25]],\"c\":true}]},{\"t\":149.632506094657,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":25,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":3,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[-360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"blob 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":50,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-11.078,-132.477],[-75.465,41.182],[15.381,101.523],[114.867,-10.273]],\"o\":[[11.078,132.477],[68,-37.108],[-15.381,-101.523],[-114.867,10.273]],\"v\":[[-193.063,37.953],[76.992,173.061],[182.479,-38.047],[-29.008,-180.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-11.078,-132.477],[-75.465,41.182],[15.381,101.523],[114.867,-10.273]],\"o\":[[11.078,132.477],[68,-37.108],[-15.381,-101.523],[-114.867,10.273]],\"v\":[[-193.063,37.953],[76.992,173.061],[182.479,-38.047],[-29.008,-180.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.002752787225,0.529215255438,0.701960784314,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[720]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"blob 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":0,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-84.851,45.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[79.279,-42.476],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-127.063,-6.047],[54.992,151.061],[152.478,31.953],[-1.008,-172.25]],\"c\":true}]},{\"t\":150.000006109625,\"s\":[{\"i\":[[-1.078,-86.476],[-75.465,41.182],[13.381,71.523],[84.867,3.727]],\"o\":[[0.979,78.53],[68,-37.108],[-13.381,-71.523],[-84.867,-3.727]],\"v\":[[-181.063,-12.047],[74.992,189.061],[156.479,-8.047],[-15.008,-168.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.964705642999,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[-360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"blob 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":75,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[400,400,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[194,194,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":-0.368,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"t\":75,\"s\":[{\"i\":[[-14.796,-95.43],[-80.851,53.462],[-18.338,80.571],[77.53,23.431]],\"o\":[[19.823,127.848],[75.023,-49.608],[18.219,-80.048],[-76.852,-23.227]],\"v\":[[-141.063,5.953],[38.992,123.061],[168.478,31.953],[34.992,-152.25]],\"c\":true}]},{\"t\":149.632506094657,\"s\":[{\"i\":[[-5.945,-104],[-75.465,41.182],[-15.486,58],[72.839,11.506]],\"o\":[[5.945,104],[68,-37.108],[15.486,-58],[-100,-15.797]],\"v\":[[-169.063,25.953],[60.992,177.061],[170.479,35.953],[52.992,-160.25]],\"c\":true}]}],\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0,0.494117467544,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"bm\":0,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[2.141,0.523],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":150.000006109625,\"s\":[360]}],\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":150.000006109625,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./src/pages/como.tsx":
/*!****************************!*\
  !*** ./src/pages/como.tsx ***!
  \****************************/
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
/* harmony import */ var _styles_como__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/como */ "./src/styles/como.ts");


var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\pages\\como.tsx";



function Home() {
  const {
    0: IsLoading,
    1: stIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      stIsLoading(false);
    }, 4000);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: IsLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Loading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 27
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Header"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_como__WEBPACK_IMPORTED_MODULE_3__["Meio"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ptx",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-2",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/ter.svg",
                width: "90%",
                height: "auto",
                alt: "termometro"
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
              className: "texto col-10",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Nuvens s\xE3o conjuntos de pequenas part\xEDculas de gelo, got\xEDculas de \xE1gua ou de ambos ao mesmo tempo (mistas), que se encontram em suspens\xE3o na atmosfera, ap\xF3s terem se condensado em virtude de fen\xF4menos atmosf\xE9ricos. As nuvens apresentam diversas formas, que variam dependendo da natureza, dimens\xF5es, n\xFAmero e distribui\xE7\xE3o das part\xEDculas que a constituem e das correntes de ventos atmosf\xE9ricos. A forma e a cor da nuvem depende da intensidade e da cor da luz que a nuvem recebe, das posi\xE7\xF5es relativas ocupadas pelo observador e da fonte de luz (Sol, Lua, raios) que a nuvem reflete."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 59
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("aside", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: " texto col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Ap\xF3s formadas, as nuvens s\xE3o transportadas pelo vento, tanto no sentido ascendente (para cima) quanto descendente (para baixo). Quando a nuvem \xE9 for\xE7ada a se elevar, ocorre um resfriamento, e as got\xEDculas de \xE1gua podem ser total ou parcialmente congeladas. Quando os ventos for\xE7am a nuvem para baixo, ela se dissipa pela evapora\xE7\xE3o das got\xEDculas de \xE1gua. A constitui\xE7\xE3o da nuvem depende, ent\xE3o, de sua temperatura e altitude.."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 56
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "texto col-9",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "Quando toda ou uma grande parte de uma nuvem sofre uma transforma\xE7\xE3o interna completa, assim passando de um tipo para outro, \xE9 denominado a ela o termo mutatus. \xC9 o caso, por exemplo, da transforma\xE7\xE3o de Stratus em Stratocumulomutatus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 58
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/press.svg",
                width: "100%",
                height: "auto",
                alt: "panela de press\xE3o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Pe"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/como.ts":
/*!****************************!*\
  !*** ./src/styles/como.ts ***!
  \****************************/
/*! exports provided: Meio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meio", function() { return Meio; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Meio = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    img {
    margin: 0px;
    padding: 4px;
    }

    .ptx {
        margin-top: 150px;
    }

    section, aside{
        font-size: 20px;
        text-align: justify;
    }
`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZGF0YS90aXBvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvRm9vdGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZXRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY29tby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21vLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGlwb0RhdGEiLCJpbmRleCIsImFwaSIsImdldCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIlBlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGlwb3MiLCJzZXRUaXBvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmVjdGNoRGF0YSIsInJlc3BvbnNlIiwiYXBpVGlwbyIsImRhdGEiLCJGb28iLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJDb250YWluZXIiLCJEcm9wZG93biIsImRlZmF1bHRPcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwiYW5pbWF0aW9uRGF0YSIsImxvYWRpbmdMb3R0aWUiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIkxvYWRpbmciLCJIb21lIiwiSXNMb2FkaW5nIiwic3RJc0xvYWRpbmciLCJzZXRUaW1lb3V0IiwiTWVpbyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxRQUFOLENBQWU7QUFDWEMsT0FBSyxHQUFFO0FBQ0gsV0FBT0MsOENBQUcsQ0FBQ0MsR0FBSixDQUFxQixhQUFy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QUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBZ0NJLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQ0o7QUFBQTtBQUZKLG1CQURKO0FBdUNILEM7Ozs7Ozs7Ozs7OztBQ3BERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUcsSUFBSSxHQUFHakIsd0RBQU0sQ0FBQ0MsR0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE8sQzs7Ozs7Ozs7Ozs7QUNGUCxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9jb21vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvY29tby50c3hcIik7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGFwaVRpcG8gfSBmcm9tIFwiLi90aXBvXCI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtJbnRlclRpcG99IGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW50ZXJmYWNlcy9UaXBvLkludGVyZmFjZVwiO1xyXG5jbGFzcyBUaXBvRGF0YSB7XHJcbiAgICBpbmRleCgpe1xyXG4gICAgICAgIHJldHVybiBhcGkuZ2V0PEludGVyVGlwb1tdPihcIlRpcG9EZU51dmVtXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBUaXBvRGF0YSgpOyIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHBzOi8vbnV2ZW1tLmhlcm9rdWFwcC5jb21cIlxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGlUaXBvIH0gZnJvbSBcIi4uLy4uL2FwaS9kYXRhXCI7XHJcbmltcG9ydCB7IEludGVyVGlwbyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvSW50ZXJmYWNlcy9UaXBvLkludGVyZmFjZVwiO1xyXG5pbXBvcnQgIExpbmsgZnJvbSBcIi4uLy4uL3N0eWxlcy9MaW5rXCI7XHJcbmltcG9ydCB7Rm9vfSBmcm9tIFwiLi4vRm9vdGVyL3N0eWxlc1wiO1xyXG5cclxuY29uc3QgUGUgPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3RpcG9zLCBzZXRUaXBvc10gPSB1c2VTdGF0ZTxJbnRlclRpcG9bXT4oW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBGZWN0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVRpcG8uaW5kZXgoKTtcclxuICAgICAgICAgICAgc2V0VGlwb3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEZlY3RjaERhdGEoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9vPlxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZlwiIGhyZWY9XCJnYWxlcmlhZGFzbnV2ZW5zXCI+R2FsZXJpYSBkYXMgTnV2ZW5zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmXCIgaHJlZj1cInJlZ2lzdHJhcm51dmVuc1wiPlJlZ2lzdHJhciBOdXZlbnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZcIiBocmVmPVwicmVnaXN0cmFybG9nYXJcIj5SZWdpc3RyYXIvTG9nYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxlbWJlZCBjbGFzc05hbWUgPSBcIm11c2ljYVwiIHNyYz1cImltZy9DaXJjbGUgb2YgTGlmZS5tcDNcIj48L2VtYmVkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj4gIFxyXG4gICAgICAgIDwvRm9vPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUGU7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb28gPSBzdHlsZWQuZGl2IGBcclxuICAgIGZvb3RlciB7XHJcbiAgICB3aWR0aDogMTkwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzEwNTRCQTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcclxuICAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzA2NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4ubXVzaWNhIHtcclxuICAgIHZpc2liaWxpdHk6aGlkZGVuXHJcbn1cclxuYCIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGlUaXBvIH0gZnJvbSBcIi4uLy4uL2FwaS9kYXRhXCI7XHJcbmltcG9ydCB7IEludGVyVGlwbyB9IGZyb20gXCIuLi8uLi9zdHlsZXMvSW50ZXJmYWNlcy9UaXBvLkludGVyZmFjZVwiO1xyXG5pbXBvcnQgIExpbmsgZnJvbSBcIi4uLy4uL3N0eWxlcy9MaW5rXCI7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBEcm9wZG93bn0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXBvcywgc2V0VGlwb3NdID0gdXNlU3RhdGU8SW50ZXJUaXBvW10+KFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRmVjdGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlUaXBvLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNldFRpcG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGZWN0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjID1cImltZy9sb2dvLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiPlRJUE9TIERFIE5VVkVOUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaXJydXNcIj5DSVJSVVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2lycnVzY3VtdWx1c1wiPkNJUlJVUyBDVU1VTFVTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm5vY1wiPk5PQ1RJTFVDRU5URVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwib25kYVwiPk9ORFVMQcOHw5VFUyBERSBLRUxWSU4tSEVMTUhPTFRaPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5IT01FPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJjb21vXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q09NTyBOQVNDRU0gQVMgTlVWRU5TPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXYgYFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDE5MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMDU0QkE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gXHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wZG93biA9ICBzdHlsZWQuZGl2IGBcclxuICAgIC5kcm9wZG93biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMzA2NztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyO1xyXG4gICAgcGFkZGluZzogMjdweCAyN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzFFNDE7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyN3B4IDI3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMwQjMwNjc7fVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjMwNjc7XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gICAgLmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMDY3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjdweCAyN3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5gIiwiICBcclxuaW1wb3J0IExvdHRpZSBmcm9tIFwicmVhY3QtbG90dGllXCI7XHJcbmltcG9ydCBsb2FkaW5nTG90dGllIGZyb20gXCIuLi8uLi9sb3R0aWVzLzE3NDg3LWNsb3VkLWJsb2ItaWNvbi5qc29uXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICBsb29wOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGFuaW1hdGlvbkRhdGE6IGxvYWRpbmdMb3R0aWUsXHJcbiAgcmVuZGVyZXJTZXR0aW5nczoge1xyXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogXCJ4TWlkWU1pZCBzbGljZVwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBMb2FkaW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICByZXR1cm4gPExvdHRpZSBvcHRpb25zPXtkZWZhdWx0T3B0aW9uc30gaGVpZ2h0PXs0MDB9IHdpZHRoPXs0MDB9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZzsiLCJleHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmcgfSBmcm9tIFwiLi9Mb2FkaW5nXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGV9IGZyb20gXCIuL0Zvb3RlclwiOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIZWFkZXIsIExvYWRpbmcsIFBlIH0gZnJvbSBcIi4uL2NvbXBvbmV0c1wiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZVwiO1xyXG5pbXBvcnQge01laW99IGZyb20gXCIuLi9zdHlsZXMvY29tb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtJc0xvYWRpbmcsIHN0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBzdElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSw0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7SXNMb2FkaW5nID8gKDxMb2FkaW5nIC8+KTogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPE1laW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB0eFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1nL3Rlci5zdmdcIiB3aWR0aD1cIjkwJVwiIGhlaWdodD1cImF1dG9cIiBhbHQ9XCJ0ZXJtb21ldHJvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRvIGNvbC0xMFwiPjxwPk51dmVucyBzw6NvIGNvbmp1bnRvcyBkZSBwZXF1ZW5hcyBwYXJ0w61jdWxhcyBkZSBnZWxvLCBnb3TDrWN1bGFzIGRlIMOhZ3VhIG91IGRlIGFtYm9zIGFvIG1lc21vIHRlbXBvIChtaXN0YXMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWUgc2UgZW5jb250cmFtIGVtIHN1c3BlbnPDo28gbmEgYXRtb3NmZXJhLCBhcMOzcyB0ZXJlbSBzZSBjb25kZW5zYWRvIGVtIHZpcnR1ZGUgZGUgZmVuw7RtZW5vcyBhdG1vc2bDqXJpY29zLiBBcyBudXZlbnMgYXByZXNlbnRhbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZlcnNhcyBmb3JtYXMsIHF1ZSB2YXJpYW0gZGVwZW5kZW5kbyBkYSBuYXR1cmV6YSwgZGltZW5zw7VlcywgbsO6bWVybyBlIGRpc3RyaWJ1acOnw6NvIGRhcyBwYXJ0w61jdWxhcyBxdWUgYSBjb25zdGl0dWVtIGUgZGFzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcnJlbnRlcyBkZSB2ZW50b3MgYXRtb3Nmw6lyaWNvcy4gQSBmb3JtYSBlIGEgY29yIGRhIG51dmVtIGRlcGVuZGUgZGEgaW50ZW5zaWRhZGUgZSBkYSBjb3IgZGEgbHV6IHF1ZSBhIG51dmVtIHJlY2ViZSwgZGFzIHBvc2nDp8O1ZXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmFzIG9jdXBhZGFzIHBlbG8gb2JzZXJ2YWRvciBlIGRhIGZvbnRlIGRlIGx1eiAoU29sLCBMdWEsIHJhaW9zKSBxdWUgYSBudXZlbSByZWZsZXRlLjwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dG8gY29sLTEyXCI+PHA+QXDDs3MgZm9ybWFkYXMsIGFzIG51dmVucyBzw6NvIHRyYW5zcG9ydGFkYXMgcGVsbyB2ZW50bywgdGFudG8gbm8gc2VudGlkbyBhc2NlbmRlbnRlIChwYXJhIGNpbWEpIHF1YW50byBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NlbmRlbnRlIChwYXJhIGJhaXhvKS4gUXVhbmRvIGEgbnV2ZW0gw6kgZm9yw6dhZGEgYSBzZSBlbGV2YXIsIG9jb3JyZSB1bSByZXNmcmlhbWVudG8sIGUgYXMgZ290w61jdWxhcyBkZSDDoWd1YSBwb2RlbSBzZXIgdG90YWwgb3UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJjaWFsbWVudGUgY29uZ2VsYWRhcy4gUXVhbmRvIG9zIHZlbnRvcyBmb3LDp2FtIGEgbnV2ZW0gcGFyYSBiYWl4bywgZWxhIHNlIGRpc3NpcGEgcGVsYSBldmFwb3Jhw6fDo28gZGFzIGdvdMOtY3VsYXMgZGUgw6FndWEuIEEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdGl0dWnDp8OjbyBkYSBudXZlbSBkZXBlbmRlLCBlbnTDo28sIGRlIHN1YSB0ZW1wZXJhdHVyYSBlIGFsdGl0dWRlLi48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dG8gY29sLTlcIj48cD5RdWFuZG8gdG9kYSBvdSB1bWEgZ3JhbmRlIHBhcnRlIGRlIHVtYSBudXZlbSBzb2ZyZSB1bWEgdHJhbnNmb3JtYcOnw6NvIGludGVybmEgY29tcGxldGEsIGFzc2ltIHBhc3NhbmRvIGRlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVtIHRpcG8gcGFyYSBvdXRybywgw6kgZGVub21pbmFkbyBhIGVsYSBvIHRlcm1vIG11dGF0dXMuIMOJIG8gY2FzbywgcG9yIGV4ZW1wbG8sIGRhIHRyYW5zZm9ybWHDp8OjbyBkZSBTdHJhdHVzIGVtIFN0cmF0b2N1bXVsb211dGF0dXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9wcmVzcy5zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgYWx0PVwicGFuZWxhIGRlIHByZXNzw6NvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L01laW8+XHJcbiAgICAgICAgICAgICAgICA8UGUgLz5cclxuICAgICAgICAgICAgPC8+KX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1laW8gPSBzdHlsZWQuZGl2IGBcclxuICAgIGltZyB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAucHR4IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzZWN0aW9uLCBhc2lkZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuYCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWxvdHRpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==