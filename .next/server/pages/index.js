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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Pe"], {}, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZGF0YS90aXBvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvRm9vdGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZXRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9MaW5rLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWxvdHRpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGlwb0RhdGEiLCJpbmRleCIsImFwaSIsImdldCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIlBlIiwicm91dGVyIiwidXNlUm91dGVyIiwidGlwb3MiLCJzZXRUaXBvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmVjdGNoRGF0YSIsInJlc3BvbnNlIiwiYXBpVGlwbyIsImRhdGEiLCJGb28iLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXIiLCJDb250YWluZXIiLCJEcm9wZG93biIsImRlZmF1bHRPcHRpb25zIiwibG9vcCIsImF1dG9wbGF5IiwiYW5pbWF0aW9uRGF0YSIsImxvYWRpbmdMb3R0aWUiLCJyZW5kZXJlclNldHRpbmdzIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIkxvYWRpbmciLCJIb21lIiwiSXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2V0VGltZW91dCIsIk1laW8iLCJzZWN0aW9uIiwic2l6ZVZhcmlhdGlvbnMiLCJkZWZhdWx0IiwiY3NzIiwiY29sb3JWYXJpYWF0aW9ucyIsIkxpbmsiLCJhIiwicHJvcHMiLCJzaXplIiwiYmdDb2xvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7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QkE7QUFzQmVKLG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDNUNBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBhcGlUaXBvIH0gZnJvbSBcIi4vdGlwb1wiOyIsImltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2luZGV4XCI7XHJcbmltcG9ydCB7SW50ZXJUaXBvfSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0ludGVyZmFjZXMvVGlwby5JbnRlcmZhY2VcIjtcclxuY2xhc3MgVGlwb0RhdGEge1xyXG4gICAgaW5kZXgoKXtcclxuICAgICAgICByZXR1cm4gYXBpLmdldDxJbnRlclRpcG9bXT4oXCJUaXBvRGVOdXZlbVwiKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgVGlwb0RhdGEoKTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCJodHRwczovL251dmVtbS5oZXJva3VhcHAuY29tXCJcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBpVGlwbyB9IGZyb20gXCIuLi8uLi9hcGkvZGF0YVwiO1xyXG5pbXBvcnQgeyBJbnRlclRpcG8gfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0ludGVyZmFjZXMvVGlwby5JbnRlcmZhY2VcIjtcclxuaW1wb3J0ICBMaW5rIGZyb20gXCIuLi8uLi9zdHlsZXMvTGlua1wiO1xyXG5pbXBvcnQge0Zvb30gZnJvbSBcIi4uL0Zvb3Rlci9zdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBlID0gKCkgPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0aXBvcywgc2V0VGlwb3NdID0gdXNlU3RhdGU8SW50ZXJUaXBvW10+KFtdKTtcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgRmVjdGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlUaXBvLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHNldFRpcG9zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBGZWN0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvbz5cclxuICAgICAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZcIiBocmVmPVwiZ2FsZXJpYWRhc251dmVuc1wiPkdhbGVyaWEgZGFzIE51dmVuczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZlwiIGhyZWY9XCJyZWdpc3RyYXJudXZlbnNcIj5SZWdpc3RyYXIgTnV2ZW5zPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmXCIgaHJlZj1cInJlZ2lzdHJhcmxvZ2FyXCI+UmVnaXN0cmFyL0xvZ2FyPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZW1iZWQgY2xhc3NOYW1lID0gXCJtdXNpY2FcIiBzcmM9XCJpbWcvQ2lyY2xlIG9mIExpZmUubXAzXCI+PC9lbWJlZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9mb290ZXI+ICBcclxuICAgICAgICA8L0Zvbz5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBlOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vID0gc3R5bGVkLmRpdiBgXHJcbiAgICBmb290ZXIge1xyXG4gICAgd2lkdGg6IDE5MDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMxMDU0QkE7XHJcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0cHg7XHJcbiAgICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODMwNjc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyN3B4IDI3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLm11c2ljYSB7XHJcbiAgICB2aXNpYmlsaXR5OmhpZGRlblxyXG59XHJcbmAiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgYXBpVGlwbyB9IGZyb20gXCIuLi8uLi9hcGkvZGF0YVwiO1xyXG5pbXBvcnQgeyBJbnRlclRpcG8gfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0ludGVyZmFjZXMvVGlwby5JbnRlcmZhY2VcIjtcclxuaW1wb3J0ICBMaW5rIGZyb20gXCIuLi8uLi9zdHlsZXMvTGlua1wiO1xyXG5pbXBvcnQge0NvbnRhaW5lciwgRHJvcGRvd259IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdGlwb3MsIHNldFRpcG9zXSA9IHVzZVN0YXRlPEludGVyVGlwb1tdPihbXSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IEZlY3RjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpVGlwby5pbmRleCgpO1xyXG4gICAgICAgICAgICBzZXRUaXBvcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRmVjdGNoRGF0YSgpO1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYyA9XCJpbWcvbG9nby5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImRyb3BidG5cIj5USVBPUyBERSBOVVZFTlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2lycnVzXCI+Q0lSUlVTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNpcnJ1c2N1bXVsdXNcIj5DSVJSVVMgQ1VNVUxVUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJub2NcIj5OT0NUSUxVQ0VOVEVTPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm9uZGFcIj5PTkRVTEHDh8OVRVMgREUgS0VMVklOLUhFTE1IT0xUWjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+SE9NRTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwiY29tb1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkNPTU8gTkFTQ0VNIEFTIE5VVkVOUzwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2IGBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTA1NEJBO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuIFxyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSAgc3R5bGVkLmRpdiBgXHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQjMwNjc7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllcjtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcxRTQxO1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjdweCAyN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMEIzMDY3O31cclxuICBcclxuICAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICBcclxuICAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIzMDY3O1xyXG4gICAgfVxyXG4gXHJcbiBcclxuICAgIC5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MzA2NztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuYCIsIiAgXHJcbmltcG9ydCBMb3R0aWUgZnJvbSBcInJlYWN0LWxvdHRpZVwiO1xyXG5pbXBvcnQgbG9hZGluZ0xvdHRpZSBmcm9tIFwiLi4vLi4vbG90dGllcy8xNzQ4Ny1jbG91ZC1ibG9iLWljb24uanNvblwiO1xyXG5cclxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhbmltYXRpb25EYXRhOiBsb2FkaW5nTG90dGllLFxyXG4gIHJlbmRlcmVyU2V0dGluZ3M6IHtcclxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86IFwieE1pZFlNaWQgc2xpY2VcIixcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgTG9hZGluZzogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxMb3R0aWUgb3B0aW9ucz17ZGVmYXVsdE9wdGlvbnN9IGhlaWdodD17NDAwfSB3aWR0aD17NDAwfSAvPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nIH0gZnJvbSBcIi4vTG9hZGluZ1wiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBlfSBmcm9tIFwiLi9Gb290ZXJcIjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SGVhZGVyLCBMb2FkaW5nLCBQZX0gZnJvbSBcIi4uL2NvbXBvbmV0c1wiO1xyXG5pbXBvcnQge01laW99IGZyb20gXCIuLi9zdHlsZXMvSW5kZXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbSXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfSw0MDAwKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7SXNMb2FkaW5nID8gKDxMb2FkaW5nIC8+KTogXHJcbiAgICAgICAgICAgICg8PjxIZWFkZXIgLz4gXHJcbiAgICAgICAgICAgIDxNZWlvPlxyXG4gICAgICAgICAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cInJvd1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48cD5hYWE8L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJ0aXRsZVwiPk5VVkVOUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC0zXCI+PHA+PC9wPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48cD48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJzdWItdGl0bGVcIj5ERVNDVUJSQSBUSVBPUyBERSBOVVZFTlMgRSBPIFFVRSBFTEFTIFNJR05JRklDQU08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj48cD48L3A+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvYm9keT4gXHJcbiAgICAgICAgICAgIDwvTWVpbz5cclxuICAgICAgICAgICAgPFBlIC8+XHJcbiAgICAgICAgICAgIDwvPil9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuLi9zdHlsZXMvTGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1laW8gPSBzdHlsZWQuc2VjdGlvbiBgXHJcbiAgICAudGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3ViLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgZ3JpZC1hcmVhOiBzdWI7XHJcbiAgICB9XHJcbmAiLCJpbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtMaW5rUHJvcHN9IGZyb20gXCIuL0ludGVyZmFjZXMvTGluay5pbnRlcmZhY2VcIlxyXG5cclxuY29uc3Qgc2l6ZVZhcmlhdGlvbnMgPSB7XHJcbiAgICBkZWZhdWx0OiBjc3NgXHJcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBgXHJcbn1cclxuXHJcbmNvbnN0IGNvbG9yVmFyaWFhdGlvbnMgPSB7XHJcbiAgICBkZWZhdWx0OiBjc3NgXHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgICAgICAgJi1ob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1ob3Zlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIGBcclxufVxyXG5cclxuY29uc3QgTGluayA9IHN0eWxlZC5hPExpbmtQcm9wcz5gXHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTAgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTAgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xMCBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1jb2xvcjogY29sb3IgMC4xMCBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjEwIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4taG92ZXIpO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAkeyhwcm9wcykgPT4gc2l6ZVZhcmlhdGlvbnNbcHJvcHMuc2l6ZSB8fCBcImRlZmF1bHRcIl19XHJcbiAgICAkeyhwcm9wcykgPT4gc2l6ZVZhcmlhdGlvbnNbcHJvcHMuYmdDb2xvciB8fCBcImRlZmF1bHRcIl19XHJcblxyXG4gICAgJjpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=