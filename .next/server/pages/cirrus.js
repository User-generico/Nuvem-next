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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/cirrus.tsx");
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

/***/ "./src/pages/cirrus.tsx":
/*!******************************!*\
  !*** ./src/pages/cirrus.tsx ***!
  \******************************/
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
/* harmony import */ var _styles_cirrus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/cirrus */ "./src/styles/cirrus.ts");


var _jsxFileName = "C:\\Users\\ochea\\Documents\\LAW\\nome\\src\\pages\\cirrus.tsx";



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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_cirrus__WEBPACK_IMPORTED_MODULE_3__["Meio"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("body", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-12",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 55
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 60
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 65
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 70
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 75
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 80
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 85
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 90
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 95
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 100
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 105
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 110
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 115
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 120
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 125
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "subsubtitlel col-12",
              children: "Fibratus:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "s\xE3o parecidas com fibras; t\xEAm a apar\xEAncia de estarem se desfiando. S\xE3o Cirrus que v\xEAm de longe, e j\xE1 est\xE3o em est\xE1gio de dissipa\xE7\xE3o, e indicam bom tempo. Formam emaranhados, \xE0s vezes espalhando-se por todo o c\xE9u, sem aumentar em quantidade, sem formar camada cont\xEDnua e n\xE3o apresenta concentra\xE7\xE3o em dire\xE7\xE3o espec\xEDfica. Abaixo, fotos e v\xEDdeo de Cirrus fibratus."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/fibra.svg",
                width: "98%",
                height: "auto",
                alt: "fibratus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "subsubtitler col-12",
              children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 69
              }, this), "Intortus:"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-4",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "img/intortus.svg",
                width: "100%",
                height: "auto",
                alt: "intortus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\xE9 uma varia\xE7\xE3o de Cirrus fibratus. Apresentam formato enrolado, desordenado, torto, emaranhado."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_componets__WEBPACK_IMPORTED_MODULE_2__["Pe"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

/***/ }),

/***/ "./src/styles/cirrus.ts":
/*!******************************!*\
  !*** ./src/styles/cirrus.ts ***!
  \******************************/
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

    .subti {
        background-color:   #071E41;
        text-align: center;
        font-size: 40px;
        color: white;
        padding-right: 0px;
        margin: 10px -8px 10px -14px ;
    }

    .subsubtitlel {
        font-weight: bold;
        font-size: 30px;
        text-align: left;
    }

    .subsubtitler {
        font-weight: bold;
        font-size: 30px;
        text-align: right;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvZGF0YS90aXBvL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvRm9vdGVyL3N0eWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZXRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9IZWFkZXIvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25ldHMvTG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmV0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2lycnVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NpcnJ1cy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb3R0aWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlRpcG9EYXRhIiwiaW5kZXgiLCJhcGkiLCJnZXQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJQZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRpcG9zIiwic2V0VGlwb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZlY3RjaERhdGEiLCJyZXNwb25zZSIsImFwaVRpcG8iLCJkYXRhIiwiRm9vIiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiRHJvcGRvd24iLCJkZWZhdWx0T3B0aW9ucyIsImxvb3AiLCJhdXRvcGxheSIsImFuaW1hdGlvbkRhdGEiLCJsb2FkaW5nTG90dGllIiwicmVuZGVyZXJTZXR0aW5ncyIsInByZXNlcnZlQXNwZWN0UmF0aW8iLCJMb2FkaW5nIiwiSG9tZSIsIklzTG9hZGluZyIsInN0SXNMb2FkaW5nIiwic2V0VGltZW91dCIsIk1laW8iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsUUFBTixDQUFlO0FBQ1hDLE9BQUssR0FBRTtBQUNILFdBQU9DLDhDQUFHLENBQUNDLEdBQUosQ0FBcUIs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Q0o7QUFBQTtBQUZKLG1CQURKO0FBMENILEM7Ozs7Ozs7Ozs7OztBQ3ZERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUcsSUFBSSxHQUFHakIsd0RBQU0sQ0FBQ0MsR0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbkNPLEM7Ozs7Ozs7Ozs7O0FDRlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvY2lycnVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvY2lycnVzLnRzeFwiKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXBpVGlwbyB9IGZyb20gXCIuL3RpcG9cIjsiLCJpbXBvcnQgYXBpIGZyb20gXCIuLi8uLi9pbmRleFwiO1xyXG5pbXBvcnQge0ludGVyVGlwb30gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbnRlcmZhY2VzL1RpcG8uSW50ZXJmYWNlXCI7XHJcbmNsYXNzIFRpcG9EYXRhIHtcclxuICAgIGluZGV4KCl7XHJcbiAgICAgICAgcmV0dXJuIGFwaS5nZXQ8SW50ZXJUaXBvW10+KFwiVGlwb0RlTnV2ZW1cIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpcG9EYXRhKCk7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiaHR0cHM6Ly9udXZlbW0uaGVyb2t1YXBwLmNvbVwiXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcGk7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaVRpcG8gfSBmcm9tIFwiLi4vLi4vYXBpL2RhdGFcIjtcclxuaW1wb3J0IHsgSW50ZXJUaXBvIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9JbnRlcmZhY2VzL1RpcG8uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCAgTGluayBmcm9tIFwiLi4vLi4vc3R5bGVzL0xpbmtcIjtcclxuaW1wb3J0IHtGb299IGZyb20gXCIuLi9Gb290ZXIvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBQZSA9ICgpID0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdGlwb3MsIHNldFRpcG9zXSA9IHVzZVN0YXRlPEludGVyVGlwb1tdPihbXSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IEZlY3RjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpVGlwby5pbmRleCgpO1xyXG4gICAgICAgICAgICBzZXRUaXBvcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRmVjdGNoRGF0YSgpO1xyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb28+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmXCIgaHJlZj1cImdhbGVyaWFkYXNudXZlbnNcIj5HYWxlcmlhIGRhcyBOdXZlbnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZcIiBocmVmPVwicmVnaXN0cmFybnV2ZW5zXCI+UmVnaXN0cmFyIE51dmVuczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZlwiIGhyZWY9XCJyZWdpc3RyYXJsb2dhclwiPlJlZ2lzdHJhci9Mb2dhcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGVtYmVkIGNsYXNzTmFtZSA9IFwibXVzaWNhXCIgc3JjPVwiaW1nL0NpcmNsZSBvZiBMaWZlLm1wM1wiPjwvZW1iZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPiAgXHJcbiAgICAgICAgPC9Gb28+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQZTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvbyA9IHN0eWxlZC5kaXYgYFxyXG4gICAgZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTA1NEJBO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICBcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xyXG4gICAgIFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMDY3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjdweCAyN3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5tdXNpY2Ege1xyXG4gICAgdmlzaWJpbGl0eTpoaWRkZW5cclxufVxyXG5gIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGFwaVRpcG8gfSBmcm9tIFwiLi4vLi4vYXBpL2RhdGFcIjtcclxuaW1wb3J0IHsgSW50ZXJUaXBvIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy9JbnRlcmZhY2VzL1RpcG8uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCAgTGluayBmcm9tIFwiLi4vLi4vc3R5bGVzL0xpbmtcIjtcclxuaW1wb3J0IHtDb250YWluZXIsIERyb3Bkb3dufSBmcm9tIFwiLi9zdHlsZXNcIjtcclxuXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3RpcG9zLCBzZXRUaXBvc10gPSB1c2VTdGF0ZTxJbnRlclRpcG9bXT4oW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QgKCgpID0+IHtcclxuICAgICAgICBjb25zdCBGZWN0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVRpcG8uaW5kZXgoKTtcclxuICAgICAgICAgICAgc2V0VGlwb3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEZlY3RjaERhdGEoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPVwiaW1nL2xvZ28uc3ZnXCIvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJkcm9wYnRuXCI+VElQT1MgREUgTlVWRU5TPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNpcnJ1c1wiPkNJUlJVUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaXJydXNjdW11bHVzXCI+Q0lSUlVTIENVTVVMVVM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibm9jXCI+Tk9DVElMVUNFTlRFUzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJvbmRhXCI+T05EVUxBw4fDlUVTIERFIEtFTFZJTi1IRUxNSE9MVFo8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkhPTUU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cImNvbW9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5DT01PIE5BU0NFTSBBUyBOVVZFTlM8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdiBgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTkwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzEwNTRCQTtcclxuICAgIGJveC1zaGFkb3c6IDBweCA3cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiBcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IERyb3Bkb3duID0gIHN0eWxlZC5kaXYgYFxyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEIzMDY3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXI7XHJcbiAgICBwYWRkaW5nOiAyN3B4IDI3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3MUU0MTtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDI3cHggMjdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzBCMzA2Nzt9XHJcbiAgXHJcbiAgICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBCMzA2NztcclxuICAgIH1cclxuIFxyXG4gXHJcbiAgICAuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODMwNjc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyN3B4IDI3cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDRweCAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbmAiLCIgIFxyXG5pbXBvcnQgTG90dGllIGZyb20gXCJyZWFjdC1sb3R0aWVcIjtcclxuaW1wb3J0IGxvYWRpbmdMb3R0aWUgZnJvbSBcIi4uLy4uL2xvdHRpZXMvMTc0ODctY2xvdWQtYmxvYi1pY29uLmpzb25cIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYW5pbWF0aW9uRGF0YTogbG9hZGluZ0xvdHRpZSxcclxuICByZW5kZXJlclNldHRpbmdzOiB7XHJcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiBcInhNaWRZTWlkIHNsaWNlXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IExvYWRpbmc6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIHJldHVybiA8TG90dGllIG9wdGlvbnM9e2RlZmF1bHRPcHRpb25zfSBoZWlnaHQ9ezQwMH0gd2lkdGg9ezQwMH0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZyB9IGZyb20gXCIuL0xvYWRpbmdcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQZX0gZnJvbSBcIi4vRm9vdGVyXCI7IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hlYWRlciwgTG9hZGluZywgUGUgfSBmcm9tIFwiLi4vY29tcG9uZXRzXCI7XHJcbmltcG9ydCBHbG9iYWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL0dsb2JhbFN0eWxlXCI7XHJcbmltcG9ydCB7TWVpb30gZnJvbSBcIi4uL3N0eWxlcy9jaXJydXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbSXNMb2FkaW5nLCBzdElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgc3RJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH0sNDAwMCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge0lzTG9hZGluZyA/ICg8TG9hZGluZyAvPik6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgICAgIDxNZWlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLTEyXCI+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PGJyLz48YnIvPjxici8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwic3Vic3VidGl0bGVsIGNvbC0xMlwiPkZpYnJhdHVzOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5zw6NvIHBhcmVjaWRhcyBjb20gZmlicmFzOyB0w6ptIGEgYXBhcsOqbmNpYSBkZSBlc3RhcmVtIHNlIGRlc2ZpYW5kby4gU8OjbyBDaXJydXMgcXVlIHbDqm0gZGUgbG9uZ2UsIGUgasOhIGVzdMOjbyBlbSBlc3TDoWdpbyBkZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzc2lwYcOnw6NvLCBlIGluZGljYW0gYm9tIHRlbXBvLiBGb3JtYW0gZW1hcmFuaGFkb3MsIMOgcyB2ZXplcyBlc3BhbGhhbmRvLXNlIHBvciB0b2RvIG8gY8OpdSwgc2VtIGF1bWVudGFyIGVtIHF1YW50aWRhZGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW0gZm9ybWFyIGNhbWFkYSBjb250w61udWEgZSBuw6NvIGFwcmVzZW50YSBjb25jZW50cmHDp8OjbyBlbSBkaXJlw6fDo28gZXNwZWPDrWZpY2EuIEFiYWl4bywgZm90b3MgZSB2w61kZW8gZGUgQ2lycnVzIGZpYnJhdHVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvZmlicmEuc3ZnXCIgd2lkdGg9XCI5OCVcIiBoZWlnaHQ9XCJhdXRvXCIgYWx0PVwiZmlicmF0dXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJzdWJzdWJ0aXRsZXIgY29sLTEyXCI+IDxicj48L2JyPkludG9ydHVzOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9pbnRvcnR1cy5zdmdcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCJhdXRvXCIgYWx0PVwiaW50b3J0dXNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb2wtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPsOpIHVtYSB2YXJpYcOnw6NvIGRlIENpcnJ1cyBmaWJyYXR1cy4gQXByZXNlbnRhbSBmb3JtYXRvIGVucm9sYWRvLCBkZXNvcmRlbmFkbywgdG9ydG8sIGVtYXJhbmhhZG8uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYm9keT5cclxuICAgICAgICAgICAgICAgIDwvTWVpbz5cclxuICAgICAgICAgICAgICAgIDxQZSAvPlxyXG4gICAgICAgICAgICA8Lz4pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTWVpbyA9IHN0eWxlZC5kaXYgYFxyXG4gICAgaW1nIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wdHgge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNlY3Rpb24sIGFzaWRle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICAjMDcxRTQxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggLThweCAxMHB4IC0xNHB4IDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Vic3VidGl0bGVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuc3Vic3VidGl0bGVyIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbmAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb3R0aWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=