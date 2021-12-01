/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 30px;\n  color: salmon;\n}\n\n.board-container {\n  display: flex;\n  height: 650px;\n  justify-content: center;\n  gap: 10px;\n}\n\n.board1, .board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  flex-basis: 50%;\n}\n\n.board1 > *, .board2 > * {\n  border: solid 1px black;\n  background-color: lightgrey;\n}\n\n.winner {\n  font-size: 30px;\n  font-weight: 600;\n}\n\n.btn-newgame {\n  height: 50px;\n  width: 75px;\n  border: solid 1px black;\n  display: inline;\n  margin-top: 10px;\n  padding: 5px;\n  font-size: 50px;\n}", "",{"version":3,"sources":["webpack://./src/main.sass"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,iBAAA;AAGF;;AAAA;EACE,eAAA;EACA,aAAA;AAGF;;AADA;EACE,aAAA;EACA,aAAA;EAEA,uBAAA;EACA,SAAA;AAGF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EAEA,eAAA;AAAF;;AAEA;EACE,uBAAA;EACA,2BAAA;AACF;;AACA;EACE,eAAA;EACA,gBAAA;AAEF;;AAAA;EACE,YAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;AAGF","sourcesContent":["* \n  margin: 0\n  padding: 0\n  border: 0\n  box-sizing: border-box\n\nbody\n  padding: 20px\n\nstrong \n  font-weight: bold\n\n\nh1 \n  font-size: 30px\n  color: salmon\n\n.board-container\n  display: flex\n  height: 650px\n  \n  justify-content: center\n  gap: 10px\n  \n  \n\n\n.board1, .board2\n  display: grid\n  grid-template-columns: repeat(10, 1fr)\n  grid-template-rows: repeat(10, 1fr)\n  \n  flex-basis: 50%\n    \n.board1 > *, .board2 > *\n  border: solid 1px black\n  background-color: lightgrey\n\n.winner \n  font-size: 30px\n  font-weight: 600\n\n.btn-newgame \n  height: 50px\n  width: 75px\n  border: solid 1px black\n  display: inline\n  margin-top: 10px\n  padding: 5px\n  font-size: 50px"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cpuShipPlacement.js":
/*!*********************************!*\
  !*** ./src/cpuShipPlacement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeComputerPatrolBoat": () => (/* binding */ placeComputerPatrolBoat),
/* harmony export */   "placeComputerSub": () => (/* binding */ placeComputerSub),
/* harmony export */   "placeComputerBattleship": () => (/* binding */ placeComputerBattleship),
/* harmony export */   "placeComputerCarrier": () => (/* binding */ placeComputerCarrier),
/* harmony export */   "generateAllCoordinates": () => (/* binding */ generateAllCoordinates)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


let placeComputerPatrolBoat = (array, obj) => {
  
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array
  
  let valid = false
  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  
  
  if (direction < 1) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid = checkValid(availableCoordinates, secondCoordinate)
      
      if (checkValid(availableCoordinates, secondCoordinate) == true) {
        valid = true
        
      }
    }
  }

  if (direction > 0) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid = checkValid(availableCoordinates, secondCoordinate)
      
      if (checkValid(availableCoordinates, secondCoordinate) == true) {
        valid = true
        
      }
    }
  }
  obj.placeShip(2, [firstCoordinate, secondCoordinate])
  
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())
  
  console.log(availableCoordinates)
  return availableCoordinates
    
} 

let placeComputerSub = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array
  console.log(availableCoordinates)
  
  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], firstCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  

  if (direction < 1) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true) {
        valid = true
        
      }
    }
  }

  if (direction > 0) {

    while (!valid) {
     
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)

      if (valid1 == true && valid2 == true && valid3 == true) {
        valid = true
        
      }
    }
  }
  

  obj.placeShip(3, [firstCoordinate, secondCoordinate, thirdCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString())

  console.log(availableCoordinates)
  return availableCoordinates
  
 }

let placeComputerBattleship = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array

  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
  let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  let valid4 = checkValid(availableCoordinates, fourthCoordinate)

  if (direction < 1) {

    while (!valid) {
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true) {
        valid = true
      }
      
    }
  }

  if (direction > 0) {

    while (!valid) {
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true) {
        valid = true
      }
      
    }
  }
  obj.placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

  console.log(availableCoordinates)
  return availableCoordinates
}

let placeComputerCarrier = (array, obj) => {
  let direction = Math.floor(Math.random() * 2)
  
  let availableCoordinates = array

  let valid = false

  let firstCoordinate = generateFirstCoordinate()
  let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
  let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
  let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
  let fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
  let valid1 = checkValid(availableCoordinates, firstCoordinate)
  let valid2 = checkValid(availableCoordinates, secondCoordinate)
  let valid3 = checkValid(availableCoordinates, thirdCoordinate)
  let valid4 = checkValid(availableCoordinates, fourthCoordinate)
  let valid5 = checkValid(availableCoordinates, fifthCoordinate)
  

  if (direction < 1) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
      valid5 = checkValid(availableCoordinates, fifthCoordinate)
      
      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true && valid5 == true) {
        valid = true
      }
    }
  }
  if (direction > 0) {

    while (!valid) {
      
      firstCoordinate = generateFirstCoordinate()
      valid1 = checkValid(availableCoordinates, firstCoordinate)
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
      valid2 = checkValid(availableCoordinates, secondCoordinate)
      thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
      valid3 = checkValid(availableCoordinates, thirdCoordinate)
      fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
      valid4 = checkValid(availableCoordinates, fourthCoordinate)
      fifthCoordinate = [fourthCoordinate[0] + 1, fourthCoordinate[1]]
      valid5 = checkValid(availableCoordinates, fifthCoordinate)

      if (valid1 == true && valid2 == true && valid3 == true && valid4 == true && valid5 == true) {
        valid = true
      }
    }
  }

  obj.placeShip(5, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate, fifthCoordinate])
  
  availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString() && item != fifthCoordinate.toString())
  
  console.log(availableCoordinates)
  return availableCoordinates
}


let checkValid = (availableCoordinatesArr, coordinate) => {
  
  if (!itemInArray(availableCoordinatesArr, coordinate) == true) {
    return false
  }
   else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
    return false
  } else return true
}

let itemInArray = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    
    if (array[i][0] == item[0] && array[i][1] == item[1]) {
        return true;  
    }
}
return false; 
}

let generateAllCoordinates = () => {
  let array = []

  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      array.push([i, j])
    }
  }
  
  return array
}

let generateFirstCoordinate = () => {
  
  let firstNumber = Math.floor((Math.random() * 10) + 1)
  let secondNumber = Math.floor((Math.random() * 10) + 1)

  return [firstNumber, secondNumber]
}

// let checkValid = (availableCoordinatesArr, coordinate) => {
  
//   if (!availableCoordinatesArr.toString().includes(coordinate.toString())) {
//     return false
//   } else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
//     return false
//   } else return true
// }

// export let placeComputerPatrolBoat = function(array, obj) {
  
//   let direction = Math.floor(Math.random() * 2)
  
//   let availableCoordinates = array

//   let valid = false
//   let firstCoordinate = generateFirstCoordinate()

//     let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//   if (direction < 1) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//       valid = checkValid(availableCoordinates, secondCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
//         valid = true
//       }
//     }
//   }

//   if (direction > 0) {
//     valid = false
//     firstCoordinate = generateFirstCoordinate()

//     secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
//       valid = checkValid(availableCoordinates, secondCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
//         valid = true
//       }
//     }
//   }
//   obj.placeShip(2, [firstCoordinate, secondCoordinate])
  
  
  
//   availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())
  
//   console.log(availableCoordinates)
//   return availableCoordinates
    
// } 


// export let placeComputerBattleship = (array, obj) => {
//   let direction = Math.floor(Math.random() * 2)
  
//   let availableCoordinates = array

//   let valid = false

//   let firstCoordinate = generateFirstCoordinate()

//   let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

//   let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

//   let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]


//   if (direction < 1) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       checkValid(availableCoordinates, firstCoordinate)
//       secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
//       checkValid(availableCoordinates, secondCoordinate)
//       thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
//       checkValid(availableCoordinates, thirdCoordinate)
//       fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
//       checkValid(availableCoordinates, fourthCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
//         valid = true
//       }
      
//     }
//   }

//   if (direction > 0) {

//     while (!valid) {
//       firstCoordinate = generateFirstCoordinate()
//       checkValid(availableCoordinates, firstCoordinate)
//       secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
//       checkValid(availableCoordinates, secondCoordinate)
//       thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
//       checkValid(availableCoordinates, thirdCoordinate)
//       fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
//       checkValid(availableCoordinates, fourthCoordinate)
      
//       if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
//         valid = true
//       }
      
//     }
//   }
//   obj.placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
  
//   availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

  
//   return availableCoordinates
// }

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeGameBoard": () => (/* binding */ makeGameBoard),
/* harmony export */   "renderHits": () => (/* binding */ renderHits),
/* harmony export */   "renderMisses": () => (/* binding */ renderMisses),
/* harmony export */   "attackEventListener": () => (/* binding */ attackEventListener),
/* harmony export */   "clearBoard": () => (/* binding */ clearBoard),
/* harmony export */   "showWinner": () => (/* binding */ showWinner),
/* harmony export */   "removeGameListener": () => (/* binding */ removeGameListener),
/* harmony export */   "newGameButton": () => (/* binding */ newGameButton)
/* harmony export */ });
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



let makeGameBoard = (board, player) => {
  
  let boardContainer = document.querySelector(`.${board}`)
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let div = document.createElement('div')
      div.setAttribute(`data-${player}-${i}-${j}`, `${i}-${j}`)
      div.setAttribute(`data-id`, `${i}-${j}`)
      boardContainer.appendChild(div)
    }
  }
}

let renderHits = (player, obj) => {
  let arr = obj.ships

    arr.forEach(ship => {
      ship.hitPosition.forEach(position => {
        let ele = document.querySelector(`[data-${player}-${position[0]}-${position[1]}]`)

        ele.style.backgroundColor = "red"
      })
    })
    
  
}

let renderMisses = (player, obj) => {
  let arr = obj.missedShots
    
    arr.forEach(miss => {
      
      let ele = document.querySelector(`[data-${player}-${miss[0]}-${miss[1]}]`)
      
      ele.style.backgroundColor = "white"
    })
}

let attackEventListener = (player, obj) => {
  let boardCoordinate = document.querySelectorAll(`.board${player} > *`)

  boardCoordinate.forEach(item => {
    item.addEventListener('click', obj.humanAttack, {once: true})
  })
}

let clearBoard = () => {
  let board2 = document.querySelectorAll('.board2 > *')
  let board1 = document.querySelectorAll('.board1 > *')
  let winner = document.querySelector('.winner')
  let newGameBtn = document.querySelector('.btn-newgame')
  board2.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
  board1.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
  winner.remove()
  newGameBtn.remove()
}

let showWinner = (otherPlayer) => {
  let body = document.body
  let div = document.createElement('div')
  div.classList = "winner"
  div.textContent = `${otherPlayer} is the winner!`
  body.appendChild(div)
}

let removeGameListener = () => {
  let gridItems = document.querySelectorAll('.board2 > *')

  gridItems.forEach(item => 
    item.removeEventListener('click', _index_js__WEBPACK_IMPORTED_MODULE_1__.progressGame))
}

let newGameButton = () => {
  let body = document.body
  let btn = document.createElement('btn')
  btn.classList = "btn-newgame"
  btn.textContent = "New Game"
  body.appendChild(btn)
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tests": () => (/* binding */ tests),
/* harmony export */   "gameBoard": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cpuShipPlacement.js */ "./src/cpuShipPlacement.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ "./src/index.js");





let tests = {}

let gameBoard = () => {
  let ships = []
  let missedShots = []

  let placeShip = (length, coordinates) => {
    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(length, coordinates )
    ships.push(ship)
  }

  let placeAllComputerShips = function() {
    
    let patrol = (0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerPatrolBoat)((0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.generateAllCoordinates)(), this)
    
    let sub1 = (0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerSub)(patrol, this)
    let sub2 = (0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerSub)(sub1, this)
    let battleship = (0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerBattleship)(sub2, this)
    let carrier = (0,_cpuShipPlacement_js__WEBPACK_IMPORTED_MODULE_2__.placeComputerCarrier)(battleship, this)
    
  }

  let receiveAttack = (coordinates) => {
    
    for (let i = 0; i < ships.length; i++) {
      let ship = ships[i]
      for (let j = 0; j < ship.length; j++) {
        if (ship.boardPositions[j].toString() == coordinates.toString()) {
          ship.hit(coordinates)
          
          return
        }
      }
    }
    missedShots.push(coordinates) 
    
  }

  let checkSunk = (otherPlayer) => {
    let newships = [...ships]
    
    let allSunk = newships.filter(ship => ship.isSunk())
    if (allSunk.length == 5) { 
      console.log(`All ships are sunk, ${otherPlayer} wins!`)
      
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.showWinner)(otherPlayer)
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeGameListener)()
      ;(0,_dom__WEBPACK_IMPORTED_MODULE_1__.newGameButton)()
      ;(0,_index_js__WEBPACK_IMPORTED_MODULE_3__.newGame)()
      return true
    }
  }

  
  return {placeShip, placeAllComputerShips, receiveAttack, ships, missedShots, checkSunk}
}

// let newGame = gameBoard()
// newGame.placeShip(3, [[1, 1], [1, 2], [1, 3]])
// newGame.receiveAttack([1, 1])
// newGame.receiveAttack([1, 2])
// newGame.receiveAttack([1, 3])

// newGame.checkSunk()

// newGame.checkSunk()

tests.gameBoard = gameBoard



// let placeAllShips = () => {
  //   let lengths = [2, 3, 3, 4, 5 ]
  //   let coordinates = [
  //     [[1, 1], [1, 2]],
  //     [[2, 1], [2, 2], [2, 3]],
  //     [[3, 1], [3, 2], [3, 3]],
  //     [[4, 1], [4, 2], [4, 3], [4, 4]],
  //     [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]
    
  //   ]

  //   for (let i = 0; i < lengths.length; i ++) {
  //     let ship = placeShip(lengths[i], coordinates[i])
  //   }
  // }


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progressGame": () => (/* binding */ progressGame),
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.sass */ "./src/main.sass");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");








let playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
let playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()

let playerOneBoard = playerOne.board
let playerTwoBoard = playerTwo.board




;(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.makeGameBoard)("board1", "player1")
;(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.makeGameBoard)("board2", "player2")
playerOne.populateShotsAvailable()
playerTwo.populateShotsAvailable()

// playerOneBoard.placeAllShips()
// playerTwoBoard.placeAllShips()

// let compShipOne = playerTestBoard.placeComputerPatrolBoat(playerTestBoard.generateAllCoordinates())
// let compShipTwo = playerTestBoard.placeComputerSub(compShipOne)
// let compShipThree = playerTestBoard.placeComputerSub(compShipTwo)
// let compShipFour = playerTestBoard.placeComputerBattleship(compShipThree)
// let compShipFive = playerTestBoard.placeComputerCarrier(compShipFour)

playerOneBoard.placeAllComputerShips()
playerTwoBoard.placeAllComputerShips()
// console.log(playerOneBoard.ships)




let game = () => {
  newGamePlayer1()
    
}

let humanPlayerAttack = (coordinate) => {
  let attackP1 = playerOne.humanAttack(coordinate)
  
  let receiveP2 = playerTwoBoard.receiveAttack(attackP1)
  let renderP1Hits = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderHits)("player2", playerTwoBoard)
  let renderP1Misses = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderMisses)("player2", playerTwoBoard)
  let sunkP2 = playerTwoBoard.checkSunk("Player 1")
    if (sunkP2 == true) {
      
    return
  }

}

let computerPlayerAttack = () => {
  let attackP2 = playerTwo.computerAttack()
    let receiveP1 = playerOneBoard.receiveAttack(attackP2)
    let renderP2Hits = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderHits)("player1", playerOneBoard)
    let renderP2Misses = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderMisses)("player1", playerOneBoard)
    let sunkP1 = playerOneBoard.checkSunk("Player 2")
    if (sunkP1 == true) {
      
    return
  }
}


let newGamePlayer1 = () => {
  let gridItems = document.querySelectorAll('.board2 > *')

  gridItems.forEach(item => { 
    item.addEventListener('click', progressGame, {once: true})
  })

}

let progressGame = (item) => {
  
  humanPlayerAttack(item)
  computerPlayerAttack()
}

let compVsComp = () => {
  for (let i = 0; i < 100; i++){
    let attackP1 = playerOne.computerAttack()
  
    let receiveP2 = playerTwoBoard.receiveAttack(attackP1)
    let renderP1Hits = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderHits)("player2", playerTwoBoard)
    let renderP1Misses = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderMisses)("player2", playerTwoBoard)
    let sunkP2 = playerTwoBoard.checkSunk("Player 1")
      if (sunkP2 == true) {
        
      return
    }
  
  let attackP2 = playerTwo.computerAttack()
  
  let receiveP1 = playerOneBoard.receiveAttack(attackP2)
  let renderP2Hits = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderHits)("player1", playerOneBoard)
  let renderP2Misses = (0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.renderMisses)("player1", playerOneBoard)
  let sunkP1 = playerOneBoard.checkSunk("Player 2")
    if (sunkP1 == true) {
      
    return
  }
  }
}

let newGame = () => {
  let btn = document.querySelector('.btn-newgame')

  btn.addEventListener('click', () => {
    ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.clearBoard)()
    playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
    playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
    playerOneBoard = playerOne.board
    playerTwoBoard = playerTwo.board
    playerOne.populateShotsAvailable()
    playerTwo.populateShotsAvailable()

    playerOneBoard.placeAllComputerShips()
    playerTwoBoard.placeAllComputerShips()
    
    compVsComp()
  })
}

// compVsComp()


//Computer picking coordinates
// Math.floor((Math.random() * 10) + 1);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tests": () => (/* binding */ tests),
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");


let tests = {}

let createPlayer = () => {
  let board = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard)()
  
  let shotsAvailable = []

  let populateShotsAvailable = () => {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        shotsAvailable.push([i, j])
      }
    }
  }

  let computerAttack = () => { 

    let random = Math.floor((Math.random() * shotsAvailable.length))
    let randomAttack = shotsAvailable[random]
    
    shotsAvailable = shotsAvailable.filter(item => item != randomAttack)

    

    return randomAttack
    
  }

  let humanAttack = (item) => {
    
    let coordinate = item.target.dataset.id
    

    let attack = [10, 10]

    if (coordinate[0] + coordinate[1] == 10 && coordinate[3] + coordinate[4] == 10) {
      attack = [10, 10]
    }

    else if (coordinate[0] + coordinate[1] == 10) {
       attack = [parseInt(coordinate[0] + coordinate[1]), parseInt(coordinate[coordinate.length - 1])]
    
    } else if  (coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1] == 10) {
       attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1])]
    } else {
    
     attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]
    }
    
    return attack
    
  }


  return {board, shotsAvailable, populateShotsAvailable, computerAttack, humanAttack}
}

tests.createPlayer = createPlayer


// let humanAttack = (item) => {
    
//   let coordinate = item.target.dataset.id
//   console.log(coordinate)

//   let attack = [10, 10]

//   let attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]
  
//   if (coordinate[0] + coordinate[1] == 10 && coordinate[3] + coordinate[4] == 10) {
//     attack = [10, 10]
//   }

//   if (coordinate[0] + coordinate[1] == 10) {
//      attack = [parseInt(coordinate[0] + coordinate[1]), parseInt(coordinate[coordinate.length - 1])]
  
//   }

//   if (coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1] == 10) {
//     attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 2] + coordinate[coordinate.length - 1])]
//   }
  
  
//   return attack
  
// }

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tests": () => (/* binding */ tests),
/* harmony export */   "createShip": () => (/* binding */ createShip)
/* harmony export */ });



let tests = {}

let createShip = (length, boardPositions = [], hitPosition = [], sunk = false) => {

  let hit = (position) => {
    hitPosition.push(position)

    // if (hitPosition.length == length) { 
    //   sunk = true
    //   console.log('we sunk')
    // }
    
  }

  let isSunk = () => {
    return hitPosition.length == length 
  }

  return {length, boardPositions, hitPosition, sunk, hit, isSunk}
}

// let fiveShips = () => {
//   let numbers = [2, 3, 3, 4, 5]
//   for (i = 0; i < 5; i++) {
//     let ship = createShip(numbers[i])
//     ships.push(ship)
//   }
// }



tests.createShip = createShip








/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLGNBQWMsMkJBQTJCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxZQUFZLHNCQUFzQixHQUFHLFFBQVEsb0JBQW9CLGtCQUFrQixHQUFHLHNCQUFzQixrQkFBa0Isa0JBQWtCLDRCQUE0QixjQUFjLEdBQUcsc0JBQXNCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLG9CQUFvQixHQUFHLDhCQUE4Qiw0QkFBNEIsZ0NBQWdDLEdBQUcsYUFBYSxvQkFBb0IscUJBQXFCLEdBQUcsa0JBQWtCLGlCQUFpQixnQkFBZ0IsNEJBQTRCLG9CQUFvQixxQkFBcUIsaUJBQWlCLG9CQUFvQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsaXZCQUFpdkI7QUFDbDlEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBMkk7QUFDM0k7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywySEFBTzs7OztBQUlxRjtBQUM3RyxPQUFPLGlFQUFlLDJIQUFPLElBQUksa0lBQWMsR0FBRyxrSUFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7O0FBRS9CO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuWjBDO0FBQ0Q7O0FBRWxDO0FBQ1A7QUFDQSxrREFBa0QsTUFBTTtBQUN4RCxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLCtCQUErQixPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtBQUM3RCxxQ0FBcUMsRUFBRSxHQUFHLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esa0RBQWtELE9BQU8sR0FBRyxZQUFZLEdBQUcsWUFBWTs7QUFFdkY7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU8sR0FBRyxRQUFRLEdBQUcsUUFBUTtBQUM3RTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1AsMkRBQTJELFFBQVE7O0FBRW5FO0FBQ0EscURBQXFELFdBQVc7QUFDaEUsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGFBQWE7QUFDcEM7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0Esc0NBQXNDLG1EQUFZO0FBQ2xEOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZtQztBQUM4QztBQUN1RTtBQUNwSDs7QUFFN0I7O0FBRUE7QUFDUDtBQUNBOztBQUVBO0FBQ0EsZUFBZSxpREFBVTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNkVBQXVCLENBQUMsNEVBQXNCO0FBQy9EO0FBQ0EsZUFBZSxzRUFBZ0I7QUFDL0IsZUFBZSxzRUFBZ0I7QUFDL0IscUJBQXFCLDZFQUF1QjtBQUM1QyxrQkFBa0IsMEVBQW9CO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsYUFBYTtBQUN0RDtBQUNBLE1BQU0saURBQVU7QUFDaEIsTUFBTSx5REFBa0I7QUFDeEIsTUFBTSxvREFBYTtBQUNuQixNQUFNLG1EQUFPO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZvQjtBQUNGO0FBQ0s7QUFDbUI7QUFDeUQ7Ozs7QUFJbkcsZ0JBQWdCLHdEQUFZO0FBQzVCLGdCQUFnQix3REFBWTs7QUFFNUI7QUFDQTs7Ozs7QUFLQSx1REFBYTtBQUNiLHVEQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFVO0FBQy9CLHVCQUF1QixxREFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtREFBVTtBQUNqQyx5QkFBeUIscURBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELFdBQVc7QUFDN0QsR0FBRzs7QUFFSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFVO0FBQ2pDLHlCQUF5QixxREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQVU7QUFDL0IsdUJBQXVCLHFEQUFZO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJLG9EQUFVO0FBQ2QsZ0JBQWdCLHdEQUFZO0FBQzVCLGdCQUFnQix3REFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJMEM7O0FBRW5DOztBQUVBO0FBQ1AsY0FBYyx3REFBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFVBQVU7QUFDVjs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk87O0FBRUE7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5zYXNzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uc2Fzcz8yN2ZkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcHVTaGlwUGxhY2VtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogc2FsbW9uO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2FyZDEsIC5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxufVxcblxcbi5ib2FyZDEgPiAqLCAuYm9hcmQyID4gKiB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLndpbm5lciB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnRuLW5ld2dhbWUge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDc1cHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUVBLHVCQUFBO0VBQ0EsU0FBQTtBQUdGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0FBQUY7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUdGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiogXFxuICBtYXJnaW46IDBcXG4gIHBhZGRpbmc6IDBcXG4gIGJvcmRlcjogMFxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveFxcblxcbmJvZHlcXG4gIHBhZGRpbmc6IDIwcHhcXG5cXG5zdHJvbmcgXFxuICBmb250LXdlaWdodDogYm9sZFxcblxcblxcbmgxIFxcbiAgZm9udC1zaXplOiAzMHB4XFxuICBjb2xvcjogc2FsbW9uXFxuXFxuLmJvYXJkLWNvbnRhaW5lclxcbiAgZGlzcGxheTogZmxleFxcbiAgaGVpZ2h0OiA2NTBweFxcbiAgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcbiAgZ2FwOiAxMHB4XFxuICBcXG4gIFxcblxcblxcbi5ib2FyZDEsIC5ib2FyZDJcXG4gIGRpc3BsYXk6IGdyaWRcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKVxcbiAgXFxuICBmbGV4LWJhc2lzOiA1MCVcXG4gICAgXFxuLmJvYXJkMSA+ICosIC5ib2FyZDIgPiAqXFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFja1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5XFxuXFxuLndpbm5lciBcXG4gIGZvbnQtc2l6ZTogMzBweFxcbiAgZm9udC13ZWlnaHQ6IDYwMFxcblxcbi5idG4tbmV3Z2FtZSBcXG4gIGhlaWdodDogNTBweFxcbiAgd2lkdGg6IDc1cHhcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrXFxuICBkaXNwbGF5OiBpbmxpbmVcXG4gIG1hcmdpbi10b3A6IDEwcHhcXG4gIHBhZGRpbmc6IDVweFxcbiAgZm9udC1zaXplOiA1MHB4XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdhbWVCb2FyZH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCJcblxuZXhwb3J0IGxldCBwbGFjZUNvbXB1dGVyUGF0cm9sQm9hdCA9IChhcnJheSwgb2JqKSA9PiB7XG4gIFxuICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgXG4gIGxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IGFycmF5XG4gIFxuICBsZXQgdmFsaWQgPSBmYWxzZVxuICBsZXQgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICBsZXQgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG4gIFxuICBcbiAgaWYgKGRpcmVjdGlvbiA8IDEpIHtcblxuICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgIFxuICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICB2YWxpZCA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICBcbiAgICAgIGlmIChjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKSA9PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID4gMCkge1xuXG4gICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgXG4gICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSArIDEsIGZpcnN0Q29vcmRpbmF0ZVsxXV1cbiAgICAgIHZhbGlkID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgIFxuICAgICAgaWYgKGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpID09IHRydWUpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvYmoucGxhY2VTaGlwKDIsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGVdKVxuICBcbiAgXG4gIGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBmaXJzdENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHNlY29uZENvb3JkaW5hdGUudG9TdHJpbmcoKSlcbiAgXG4gIGNvbnNvbGUubG9nKGF2YWlsYWJsZUNvb3JkaW5hdGVzKVxuICByZXR1cm4gYXZhaWxhYmxlQ29vcmRpbmF0ZXNcbiAgICBcbn0gXG5cbmV4cG9ydCBsZXQgcGxhY2VDb21wdXRlclN1YiA9IChhcnJheSwgb2JqKSA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICBcbiAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXJyYXlcbiAgY29uc29sZS5sb2coYXZhaWxhYmxlQ29vcmRpbmF0ZXMpXG4gIFxuICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gIGxldCBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cbiAgbGV0IHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICBsZXQgdmFsaWQxID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKVxuICBsZXQgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgbGV0IHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgXG5cbiAgaWYgKGRpcmVjdGlvbiA8IDEpIHtcblxuICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgIFxuICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgdmFsaWQxID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKVxuICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICB2YWxpZDIgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgdGhpcmRDb29yZGluYXRlID0gW3NlY29uZENvb3JkaW5hdGVbMF0sIHNlY29uZENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgdmFsaWQzID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKVxuICAgICAgXG4gICAgICBpZiAodmFsaWQxID09IHRydWUgJiYgdmFsaWQyID09IHRydWUgJiYgdmFsaWQzID09IHRydWUpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPiAwKSB7XG5cbiAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgIFxuICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgdmFsaWQxID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKVxuICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0gKyAxLCBmaXJzdENvb3JkaW5hdGVbMV1dXG4gICAgICB2YWxpZDIgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgdGhpcmRDb29yZGluYXRlID0gW3NlY29uZENvb3JkaW5hdGVbMF0gKyAxLCBzZWNvbmRDb29yZGluYXRlWzFdXVxuICAgICAgdmFsaWQzID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKVxuXG4gICAgICBpZiAodmFsaWQxID09IHRydWUgJiYgdmFsaWQyID09IHRydWUgJiYgdmFsaWQzID09IHRydWUpIHtcbiAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcblxuICBvYmoucGxhY2VTaGlwKDMsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGUsIHRoaXJkQ29vcmRpbmF0ZV0pXG4gIFxuICBhdmFpbGFibGVDb29yZGluYXRlcyA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZmlyc3RDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSBzZWNvbmRDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSB0aGlyZENvb3JkaW5hdGUudG9TdHJpbmcoKSlcblxuICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb29yZGluYXRlcylcbiAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gIFxuIH1cblxuZXhwb3J0IGxldCBwbGFjZUNvbXB1dGVyQmF0dGxlc2hpcCA9IChhcnJheSwgb2JqKSA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICBcbiAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXJyYXlcblxuICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gIGxldCBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cbiAgbGV0IHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgbGV0IGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdLCB0aGlyZENvb3JkaW5hdGVbMV0gKyAxXVxuICBsZXQgdmFsaWQxID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKVxuICBsZXQgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgbGV0IHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgbGV0IHZhbGlkNCA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG5cbiAgaWYgKGRpcmVjdGlvbiA8IDEpIHtcblxuICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbiAgICAgIHZhbGlkMSA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgICAgIHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgIGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdLCB0aGlyZENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgdmFsaWQ0ID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSlcbiAgICAgIFxuICAgICAgaWYgKHZhbGlkMSA9PSB0cnVlICYmIHZhbGlkMiA9PSB0cnVlICYmIHZhbGlkMyA9PSB0cnVlICYmIHZhbGlkNCA9PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA+IDApIHtcblxuICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbiAgICAgIHZhbGlkMSA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdICsgMSwgZmlyc3RDb29yZGluYXRlWzFdXVxuICAgICAgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdICsgMSwgc2Vjb25kQ29vcmRpbmF0ZVsxXV1cbiAgICAgIHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgIGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdICsgMSwgdGhpcmRDb29yZGluYXRlWzFdXVxuICAgICAgdmFsaWQ0ID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSlcbiAgICAgIFxuICAgICAgaWYgKHZhbGlkMSA9PSB0cnVlICYmIHZhbGlkMiA9PSB0cnVlICYmIHZhbGlkMyA9PSB0cnVlICYmIHZhbGlkNCA9PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG4gIG9iai5wbGFjZVNoaXAoNCwgW2ZpcnN0Q29vcmRpbmF0ZSwgc2Vjb25kQ29vcmRpbmF0ZSwgdGhpcmRDb29yZGluYXRlLCBmb3VydGhDb29yZGluYXRlXSlcbiAgXG4gIGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBmaXJzdENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHNlY29uZENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHRoaXJkQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gZm91cnRoQ29vcmRpbmF0ZS50b1N0cmluZygpKVxuXG4gIGNvbnNvbGUubG9nKGF2YWlsYWJsZUNvb3JkaW5hdGVzKVxuICByZXR1cm4gYXZhaWxhYmxlQ29vcmRpbmF0ZXNcbn1cblxuZXhwb3J0IGxldCBwbGFjZUNvbXB1dGVyQ2FycmllciA9IChhcnJheSwgb2JqKSA9PiB7XG4gIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICBcbiAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXJyYXlcblxuICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gIGxldCBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cbiAgbGV0IHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgbGV0IGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdLCB0aGlyZENvb3JkaW5hdGVbMV0gKyAxXVxuICBsZXQgZmlmdGhDb29yZGluYXRlID0gW2ZvdXJ0aENvb3JkaW5hdGVbMF0sIGZvdXJ0aENvb3JkaW5hdGVbMV0gKyAxXVxuICBsZXQgdmFsaWQxID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKVxuICBsZXQgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgbGV0IHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgbGV0IHZhbGlkNCA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gIGxldCB2YWxpZDUgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaWZ0aENvb3JkaW5hdGUpXG4gIFxuXG4gIGlmIChkaXJlY3Rpb24gPCAxKSB7XG5cbiAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICBcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbiAgICAgIHZhbGlkMSA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgdmFsaWQyID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgICAgIHZhbGlkMyA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgIGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdLCB0aGlyZENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgdmFsaWQ0ID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSlcbiAgICAgIGZpZnRoQ29vcmRpbmF0ZSA9IFtmb3VydGhDb29yZGluYXRlWzBdLCBmb3VydGhDb29yZGluYXRlWzFdICsgMV1cbiAgICAgIHZhbGlkNSA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpZnRoQ29vcmRpbmF0ZSlcbiAgICAgIFxuICAgICAgaWYgKHZhbGlkMSA9PSB0cnVlICYmIHZhbGlkMiA9PSB0cnVlICYmIHZhbGlkMyA9PSB0cnVlICYmIHZhbGlkNCA9PSB0cnVlICYmIHZhbGlkNSA9PSB0cnVlKSB7XG4gICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGlyZWN0aW9uID4gMCkge1xuXG4gICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgXG4gICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICB2YWxpZDEgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4gICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSArIDEsIGZpcnN0Q29vcmRpbmF0ZVsxXV1cbiAgICAgIHZhbGlkMiA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSArIDEsIHNlY29uZENvb3JkaW5hdGVbMV1dXG4gICAgICB2YWxpZDMgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpXG4gICAgICBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSArIDEsIHRoaXJkQ29vcmRpbmF0ZVsxXV1cbiAgICAgIHZhbGlkNCA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gICAgICBmaWZ0aENvb3JkaW5hdGUgPSBbZm91cnRoQ29vcmRpbmF0ZVswXSArIDEsIGZvdXJ0aENvb3JkaW5hdGVbMV1dXG4gICAgICB2YWxpZDUgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaWZ0aENvb3JkaW5hdGUpXG5cbiAgICAgIGlmICh2YWxpZDEgPT0gdHJ1ZSAmJiB2YWxpZDIgPT0gdHJ1ZSAmJiB2YWxpZDMgPT0gdHJ1ZSAmJiB2YWxpZDQgPT0gdHJ1ZSAmJiB2YWxpZDUgPT0gdHJ1ZSkge1xuICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvYmoucGxhY2VTaGlwKDUsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGUsIHRoaXJkQ29vcmRpbmF0ZSwgZm91cnRoQ29vcmRpbmF0ZSwgZmlmdGhDb29yZGluYXRlXSlcbiAgXG4gIGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBmaXJzdENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHNlY29uZENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHRoaXJkQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gZm91cnRoQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gZmlmdGhDb29yZGluYXRlLnRvU3RyaW5nKCkpXG4gIFxuICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb29yZGluYXRlcylcbiAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG59XG5cblxubGV0IGNoZWNrVmFsaWQgPSAoYXZhaWxhYmxlQ29vcmRpbmF0ZXNBcnIsIGNvb3JkaW5hdGUpID0+IHtcbiAgXG4gIGlmICghaXRlbUluQXJyYXkoYXZhaWxhYmxlQ29vcmRpbmF0ZXNBcnIsIGNvb3JkaW5hdGUpID09IHRydWUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICAgZWxzZSBpZiAoY29vcmRpbmF0ZVswXSA8IDEgfHwgY29vcmRpbmF0ZVswXSA+IDEwIHx8IGNvb3JkaW5hdGVbMV0gPCAxIHx8IGNvb3JkaW5hdGVbMV0gPiAxMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9IGVsc2UgcmV0dXJuIHRydWVcbn1cblxubGV0IGl0ZW1JbkFycmF5ID0gKGFycmF5LCBpdGVtKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBpZiAoYXJyYXlbaV1bMF0gPT0gaXRlbVswXSAmJiBhcnJheVtpXVsxXSA9PSBpdGVtWzFdKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgfVxufVxucmV0dXJuIGZhbHNlOyBcbn1cblxuZXhwb3J0IGxldCBnZW5lcmF0ZUFsbENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICBsZXQgYXJyYXkgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgYXJyYXkucHVzaChbaSwgal0pXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gYXJyYXlcbn1cblxubGV0IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlID0gKCkgPT4ge1xuICBcbiAgbGV0IGZpcnN0TnVtYmVyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpXG4gIGxldCBzZWNvbmROdW1iZXIgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSlcblxuICByZXR1cm4gW2ZpcnN0TnVtYmVyLCBzZWNvbmROdW1iZXJdXG59XG5cbi8vIGxldCBjaGVja1ZhbGlkID0gKGF2YWlsYWJsZUNvb3JkaW5hdGVzQXJyLCBjb29yZGluYXRlKSA9PiB7XG4gIFxuLy8gICBpZiAoIWF2YWlsYWJsZUNvb3JkaW5hdGVzQXJyLnRvU3RyaW5nKCkuaW5jbHVkZXMoY29vcmRpbmF0ZS50b1N0cmluZygpKSkge1xuLy8gICAgIHJldHVybiBmYWxzZVxuLy8gICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVbMF0gPCAxIHx8IGNvb3JkaW5hdGVbMF0gPiAxMCB8fCBjb29yZGluYXRlWzFdIDwgMSB8fCBjb29yZGluYXRlWzFdID4gMTApIHtcbi8vICAgICByZXR1cm4gZmFsc2Vcbi8vICAgfSBlbHNlIHJldHVybiB0cnVlXG4vLyB9XG5cbi8vIGV4cG9ydCBsZXQgcGxhY2VDb21wdXRlclBhdHJvbEJvYXQgPSBmdW5jdGlvbihhcnJheSwgb2JqKSB7XG4gIFxuLy8gICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgXG4vLyAgIGxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IGFycmF5XG5cbi8vICAgbGV0IHZhbGlkID0gZmFsc2Vcbi8vICAgbGV0IGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcblxuLy8gICAgIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cbi8vICAgaWYgKGRpcmVjdGlvbiA8IDEpIHtcblxuLy8gICAgIHdoaWxlICghdmFsaWQpIHtcbi8vICAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbi8vICAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuLy8gICAgICAgdmFsaWQgPSBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgXG4vLyAgICAgICBpZiAoY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpID09IHRydWUpIHtcbi8vICAgICAgICAgdmFsaWQgPSB0cnVlXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG5cbi8vICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbi8vICAgICB2YWxpZCA9IGZhbHNlXG4vLyAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuXG4vLyAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0gKyAxLCBmaXJzdENvb3JkaW5hdGVbMV1dXG5cbi8vICAgICB3aGlsZSAoIXZhbGlkKSB7XG4vLyAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4vLyAgICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSArIDEsIGZpcnN0Q29vcmRpbmF0ZVsxXV1cbi8vICAgICAgIHZhbGlkID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgIFxuLy8gICAgICAgaWYgKGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKSA9PSB0cnVlKSB7XG4vLyAgICAgICAgIHZhbGlkID0gdHJ1ZVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBvYmoucGxhY2VTaGlwKDIsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGVdKVxuICBcbiAgXG4gIFxuLy8gICBhdmFpbGFibGVDb29yZGluYXRlcyA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZmlyc3RDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSBzZWNvbmRDb29yZGluYXRlLnRvU3RyaW5nKCkpXG4gIFxuLy8gICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb29yZGluYXRlcylcbi8vICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gICAgXG4vLyB9IFxuXG5cbi8vIGV4cG9ydCBsZXQgcGxhY2VDb21wdXRlckJhdHRsZXNoaXAgPSAoYXJyYXksIG9iaikgPT4ge1xuLy8gICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgXG4vLyAgIGxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IGFycmF5XG5cbi8vICAgbGV0IHZhbGlkID0gZmFsc2VcblxuLy8gICBsZXQgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuXG4vLyAgIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cblxuLy8gICBsZXQgdGhpcmRDb29yZGluYXRlID0gW3NlY29uZENvb3JkaW5hdGVbMF0sIHNlY29uZENvb3JkaW5hdGVbMV0gKyAxXVxuXG4vLyAgIGxldCBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSwgdGhpcmRDb29yZGluYXRlWzFdICsgMV1cblxuXG4vLyAgIGlmIChkaXJlY3Rpb24gPCAxKSB7XG5cbi8vICAgICB3aGlsZSAoIXZhbGlkKSB7XG4vLyAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4vLyAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4vLyAgICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cbi8vICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4vLyAgICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSwgc2Vjb25kQ29vcmRpbmF0ZVsxXSArIDFdXG4vLyAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpXG4vLyAgICAgICBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSwgdGhpcmRDb29yZGluYXRlWzFdICsgMV1cbi8vICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gICAgICBcbi8vICAgICAgIGlmIChjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSkgPT0gdHJ1ZSkge1xuLy8gICAgICAgICB2YWxpZCA9IHRydWVcbi8vICAgICAgIH1cbiAgICAgIFxuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG5cbi8vICAgICB3aGlsZSAoIXZhbGlkKSB7XG4vLyAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4vLyAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4vLyAgICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSArIDEsIGZpcnN0Q29vcmRpbmF0ZVsxXV1cbi8vICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4vLyAgICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSArIDEsIHNlY29uZENvb3JkaW5hdGVbMV1dXG4vLyAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpXG4vLyAgICAgICBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSArIDEsIHRoaXJkQ29vcmRpbmF0ZVsxXV1cbi8vICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gICAgICBcbi8vICAgICAgIGlmIChjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSkgPT0gdHJ1ZSkge1xuLy8gICAgICAgICB2YWxpZCA9IHRydWVcbi8vICAgICAgIH1cbiAgICAgIFxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBvYmoucGxhY2VTaGlwKDQsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGUsIHRoaXJkQ29vcmRpbmF0ZSwgZm91cnRoQ29vcmRpbmF0ZV0pXG4gIFxuLy8gICBhdmFpbGFibGVDb29yZGluYXRlcyA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZmlyc3RDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSBzZWNvbmRDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSB0aGlyZENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IGZvdXJ0aENvb3JkaW5hdGUudG9TdHJpbmcoKSlcblxuICBcbi8vICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4vLyB9IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnXG5pbXBvcnQgeyBwcm9ncmVzc0dhbWUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IG1ha2VHYW1lQm9hcmQgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuICBcbiAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmR9YClcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtwbGF5ZXJ9LSR7aX0tJHtqfWAsIGAke2l9LSR7an1gKVxuICAgICAgZGl2LnNldEF0dHJpYnV0ZShgZGF0YS1pZGAsIGAke2l9LSR7an1gKVxuICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IHJlbmRlckhpdHMgPSAocGxheWVyLCBvYmopID0+IHtcbiAgbGV0IGFyciA9IG9iai5zaGlwc1xuXG4gICAgYXJyLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBzaGlwLmhpdFBvc2l0aW9uLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICBsZXQgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtJHtwbGF5ZXJ9LSR7cG9zaXRpb25bMF19LSR7cG9zaXRpb25bMV19XWApXG5cbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgICBcbiAgXG59XG5cbmV4cG9ydCBsZXQgcmVuZGVyTWlzc2VzID0gKHBsYXllciwgb2JqKSA9PiB7XG4gIGxldCBhcnIgPSBvYmoubWlzc2VkU2hvdHNcbiAgICBcbiAgICBhcnIuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgIFxuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLSR7cGxheWVyfS0ke21pc3NbMF19LSR7bWlzc1sxXX1dYClcbiAgICAgIFxuICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuICAgIH0pXG59XG5cbmV4cG9ydCBsZXQgYXR0YWNrRXZlbnRMaXN0ZW5lciA9IChwbGF5ZXIsIG9iaikgPT4ge1xuICBsZXQgYm9hcmRDb29yZGluYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJvYXJkJHtwbGF5ZXJ9ID4gKmApXG5cbiAgYm9hcmRDb29yZGluYXRlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9iai5odW1hbkF0dGFjaywge29uY2U6IHRydWV9KVxuICB9KVxufVxuXG5leHBvcnQgbGV0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQyID4gKicpXG4gIGxldCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQxID4gKicpXG4gIGxldCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJylcbiAgbGV0IG5ld0dhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5ld2dhbWUnKVxuICBib2FyZDIuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmV5XCJcbiAgfSlcbiAgYm9hcmQxLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiXG4gIH0pXG4gIHdpbm5lci5yZW1vdmUoKVxuICBuZXdHYW1lQnRuLnJlbW92ZSgpXG59XG5cbmV4cG9ydCBsZXQgc2hvd1dpbm5lciA9IChvdGhlclBsYXllcikgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRpdi5jbGFzc0xpc3QgPSBcIndpbm5lclwiXG4gIGRpdi50ZXh0Q29udGVudCA9IGAke290aGVyUGxheWVyfSBpcyB0aGUgd2lubmVyIWBcbiAgYm9keS5hcHBlbmRDaGlsZChkaXYpXG59XG5cbmV4cG9ydCBsZXQgcmVtb3ZlR2FtZUxpc3RlbmVyID0gKCkgPT4ge1xuICBsZXQgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkMiA+IConKVxuXG4gIGdyaWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gXG4gICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2dyZXNzR2FtZSkpXG59XG5cbmV4cG9ydCBsZXQgbmV3R2FtZUJ1dHRvbiA9ICgpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKVxuICBidG4uY2xhc3NMaXN0ID0gXCJidG4tbmV3Z2FtZVwiXG4gIGJ0bi50ZXh0Q29udGVudCA9IFwiTmV3IEdhbWVcIlxuICBib2R5LmFwcGVuZENoaWxkKGJ0bilcbn0iLCJpbXBvcnQgeyBjcmVhdGVTaGlwIH0gZnJvbSBcIi4vc2hpcFwiXG5pbXBvcnQgeyBjbGVhckJvYXJkLCBzaG93V2lubmVyLCByZW1vdmVHYW1lTGlzdGVuZXIsIG5ld0dhbWVCdXR0b24gfSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IHsgcGxhY2VDb21wdXRlclBhdHJvbEJvYXQsIHBsYWNlQ29tcHV0ZXJTdWIsIHBsYWNlQ29tcHV0ZXJCYXR0bGVzaGlwLCBwbGFjZUNvbXB1dGVyQ2FycmllciwgZ2VuZXJhdGVBbGxDb29yZGluYXRlcyB9IGZyb20gXCIuL2NwdVNoaXBQbGFjZW1lbnQuanNcIlxuaW1wb3J0IHsgbmV3R2FtZSB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuZXhwb3J0IGxldCB0ZXN0cyA9IHt9XG5cbmV4cG9ydCBsZXQgZ2FtZUJvYXJkID0gKCkgPT4ge1xuICBsZXQgc2hpcHMgPSBbXVxuICBsZXQgbWlzc2VkU2hvdHMgPSBbXVxuXG4gIGxldCBwbGFjZVNoaXAgPSAobGVuZ3RoLCBjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCBzaGlwID0gY3JlYXRlU2hpcChsZW5ndGgsIGNvb3JkaW5hdGVzIClcbiAgICBzaGlwcy5wdXNoKHNoaXApXG4gIH1cblxuICBsZXQgcGxhY2VBbGxDb21wdXRlclNoaXBzID0gZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgbGV0IHBhdHJvbCA9IHBsYWNlQ29tcHV0ZXJQYXRyb2xCb2F0KGdlbmVyYXRlQWxsQ29vcmRpbmF0ZXMoKSwgdGhpcylcbiAgICBcbiAgICBsZXQgc3ViMSA9IHBsYWNlQ29tcHV0ZXJTdWIocGF0cm9sLCB0aGlzKVxuICAgIGxldCBzdWIyID0gcGxhY2VDb21wdXRlclN1YihzdWIxLCB0aGlzKVxuICAgIGxldCBiYXR0bGVzaGlwID0gcGxhY2VDb21wdXRlckJhdHRsZXNoaXAoc3ViMiwgdGhpcylcbiAgICBsZXQgY2FycmllciA9IHBsYWNlQ29tcHV0ZXJDYXJyaWVyKGJhdHRsZXNoaXAsIHRoaXMpXG4gICAgXG4gIH1cblxuICBsZXQgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBzaGlwID0gc2hpcHNbaV1cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoc2hpcC5ib2FyZFBvc2l0aW9uc1tqXS50b1N0cmluZygpID09IGNvb3JkaW5hdGVzLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICBzaGlwLmhpdChjb29yZGluYXRlcylcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBtaXNzZWRTaG90cy5wdXNoKGNvb3JkaW5hdGVzKSBcbiAgICBcbiAgfVxuXG4gIGxldCBjaGVja1N1bmsgPSAob3RoZXJQbGF5ZXIpID0+IHtcbiAgICBsZXQgbmV3c2hpcHMgPSBbLi4uc2hpcHNdXG4gICAgXG4gICAgbGV0IGFsbFN1bmsgPSBuZXdzaGlwcy5maWx0ZXIoc2hpcCA9PiBzaGlwLmlzU3VuaygpKVxuICAgIGlmIChhbGxTdW5rLmxlbmd0aCA9PSA1KSB7IFxuICAgICAgY29uc29sZS5sb2coYEFsbCBzaGlwcyBhcmUgc3VuaywgJHtvdGhlclBsYXllcn0gd2lucyFgKVxuICAgICAgXG4gICAgICBzaG93V2lubmVyKG90aGVyUGxheWVyKVxuICAgICAgcmVtb3ZlR2FtZUxpc3RlbmVyKClcbiAgICAgIG5ld0dhbWVCdXR0b24oKVxuICAgICAgbmV3R2FtZSgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIFxuICByZXR1cm4ge3BsYWNlU2hpcCwgcGxhY2VBbGxDb21wdXRlclNoaXBzLCByZWNlaXZlQXR0YWNrLCBzaGlwcywgbWlzc2VkU2hvdHMsIGNoZWNrU3Vua31cbn1cblxuLy8gbGV0IG5ld0dhbWUgPSBnYW1lQm9hcmQoKVxuLy8gbmV3R2FtZS5wbGFjZVNoaXAoMywgW1sxLCAxXSwgWzEsIDJdLCBbMSwgM11dKVxuLy8gbmV3R2FtZS5yZWNlaXZlQXR0YWNrKFsxLCAxXSlcbi8vIG5ld0dhbWUucmVjZWl2ZUF0dGFjayhbMSwgMl0pXG4vLyBuZXdHYW1lLnJlY2VpdmVBdHRhY2soWzEsIDNdKVxuXG4vLyBuZXdHYW1lLmNoZWNrU3VuaygpXG5cbi8vIG5ld0dhbWUuY2hlY2tTdW5rKClcblxudGVzdHMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkXG5cblxuXG4vLyBsZXQgcGxhY2VBbGxTaGlwcyA9ICgpID0+IHtcbiAgLy8gICBsZXQgbGVuZ3RocyA9IFsyLCAzLCAzLCA0LCA1IF1cbiAgLy8gICBsZXQgY29vcmRpbmF0ZXMgPSBbXG4gIC8vICAgICBbWzEsIDFdLCBbMSwgMl1dLFxuICAvLyAgICAgW1syLCAxXSwgWzIsIDJdLCBbMiwgM11dLFxuICAvLyAgICAgW1szLCAxXSwgWzMsIDJdLCBbMywgM11dLFxuICAvLyAgICAgW1s0LCAxXSwgWzQsIDJdLCBbNCwgM10sIFs0LCA0XV0sXG4gIC8vICAgICBbWzUsIDFdLCBbNSwgMl0sIFs1LCAzXSwgWzUsIDRdLCBbNSwgNV1dXG4gICAgXG4gIC8vICAgXVxuXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhzLmxlbmd0aDsgaSArKykge1xuICAvLyAgICAgbGV0IHNoaXAgPSBwbGFjZVNoaXAobGVuZ3Roc1tpXSwgY29vcmRpbmF0ZXNbaV0pXG4gIC8vICAgfVxuICAvLyB9XG4iLCJpbXBvcnQgJy4vbWFpbi5zYXNzJ1xuaW1wb3J0ICcuL3NoaXAuanMnXG5pbXBvcnQgJy4vZ2FtZWJvYXJkLmpzJ1xuaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnXG5pbXBvcnQgeyBtYWtlR2FtZUJvYXJkLCByZW5kZXJIaXRzLCByZW5kZXJNaXNzZXMsIGF0dGFja0V2ZW50TGlzdGVuZXIsIGNsZWFyQm9hcmQgfSBmcm9tICcuL2RvbS5qcydcblxuXG5cbmxldCBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoKVxubGV0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpXG5cbmxldCBwbGF5ZXJPbmVCb2FyZCA9IHBsYXllck9uZS5ib2FyZFxubGV0IHBsYXllclR3b0JvYXJkID0gcGxheWVyVHdvLmJvYXJkXG5cblxuXG5cbm1ha2VHYW1lQm9hcmQoXCJib2FyZDFcIiwgXCJwbGF5ZXIxXCIpXG5tYWtlR2FtZUJvYXJkKFwiYm9hcmQyXCIsIFwicGxheWVyMlwiKVxucGxheWVyT25lLnBvcHVsYXRlU2hvdHNBdmFpbGFibGUoKVxucGxheWVyVHdvLnBvcHVsYXRlU2hvdHNBdmFpbGFibGUoKVxuXG4vLyBwbGF5ZXJPbmVCb2FyZC5wbGFjZUFsbFNoaXBzKClcbi8vIHBsYXllclR3b0JvYXJkLnBsYWNlQWxsU2hpcHMoKVxuXG4vLyBsZXQgY29tcFNoaXBPbmUgPSBwbGF5ZXJUZXN0Qm9hcmQucGxhY2VDb21wdXRlclBhdHJvbEJvYXQocGxheWVyVGVzdEJvYXJkLmdlbmVyYXRlQWxsQ29vcmRpbmF0ZXMoKSlcbi8vIGxldCBjb21wU2hpcFR3byA9IHBsYXllclRlc3RCb2FyZC5wbGFjZUNvbXB1dGVyU3ViKGNvbXBTaGlwT25lKVxuLy8gbGV0IGNvbXBTaGlwVGhyZWUgPSBwbGF5ZXJUZXN0Qm9hcmQucGxhY2VDb21wdXRlclN1Yihjb21wU2hpcFR3bylcbi8vIGxldCBjb21wU2hpcEZvdXIgPSBwbGF5ZXJUZXN0Qm9hcmQucGxhY2VDb21wdXRlckJhdHRsZXNoaXAoY29tcFNoaXBUaHJlZSlcbi8vIGxldCBjb21wU2hpcEZpdmUgPSBwbGF5ZXJUZXN0Qm9hcmQucGxhY2VDb21wdXRlckNhcnJpZXIoY29tcFNoaXBGb3VyKVxuXG5wbGF5ZXJPbmVCb2FyZC5wbGFjZUFsbENvbXB1dGVyU2hpcHMoKVxucGxheWVyVHdvQm9hcmQucGxhY2VBbGxDb21wdXRlclNoaXBzKClcbi8vIGNvbnNvbGUubG9nKHBsYXllck9uZUJvYXJkLnNoaXBzKVxuXG5cblxuXG5sZXQgZ2FtZSA9ICgpID0+IHtcbiAgbmV3R2FtZVBsYXllcjEoKVxuICAgIFxufVxuXG5sZXQgaHVtYW5QbGF5ZXJBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xuICBsZXQgYXR0YWNrUDEgPSBwbGF5ZXJPbmUuaHVtYW5BdHRhY2soY29vcmRpbmF0ZSlcbiAgXG4gIGxldCByZWNlaXZlUDIgPSBwbGF5ZXJUd29Cb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1AxKVxuICBsZXQgcmVuZGVyUDFIaXRzID0gcmVuZGVySGl0cyhcInBsYXllcjJcIiwgcGxheWVyVHdvQm9hcmQpXG4gIGxldCByZW5kZXJQMU1pc3NlcyA9IHJlbmRlck1pc3NlcyhcInBsYXllcjJcIiwgcGxheWVyVHdvQm9hcmQpXG4gIGxldCBzdW5rUDIgPSBwbGF5ZXJUd29Cb2FyZC5jaGVja1N1bmsoXCJQbGF5ZXIgMVwiKVxuICAgIGlmIChzdW5rUDIgPT0gdHJ1ZSkge1xuICAgICAgXG4gICAgcmV0dXJuXG4gIH1cblxufVxuXG5sZXQgY29tcHV0ZXJQbGF5ZXJBdHRhY2sgPSAoKSA9PiB7XG4gIGxldCBhdHRhY2tQMiA9IHBsYXllclR3by5jb21wdXRlckF0dGFjaygpXG4gICAgbGV0IHJlY2VpdmVQMSA9IHBsYXllck9uZUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrUDIpXG4gICAgbGV0IHJlbmRlclAySGl0cyA9IHJlbmRlckhpdHMoXCJwbGF5ZXIxXCIsIHBsYXllck9uZUJvYXJkKVxuICAgIGxldCByZW5kZXJQMk1pc3NlcyA9IHJlbmRlck1pc3NlcyhcInBsYXllcjFcIiwgcGxheWVyT25lQm9hcmQpXG4gICAgbGV0IHN1bmtQMSA9IHBsYXllck9uZUJvYXJkLmNoZWNrU3VuayhcIlBsYXllciAyXCIpXG4gICAgaWYgKHN1bmtQMSA9PSB0cnVlKSB7XG4gICAgICBcbiAgICByZXR1cm5cbiAgfVxufVxuXG5cbmxldCBuZXdHYW1lUGxheWVyMSA9ICgpID0+IHtcbiAgbGV0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZDIgPiAqJylcblxuICBncmlkSXRlbXMuZm9yRWFjaChpdGVtID0+IHsgXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2dyZXNzR2FtZSwge29uY2U6IHRydWV9KVxuICB9KVxuXG59XG5cbmV4cG9ydCBsZXQgcHJvZ3Jlc3NHYW1lID0gKGl0ZW0pID0+IHtcbiAgXG4gIGh1bWFuUGxheWVyQXR0YWNrKGl0ZW0pXG4gIGNvbXB1dGVyUGxheWVyQXR0YWNrKClcbn1cblxubGV0IGNvbXBWc0NvbXAgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspe1xuICAgIGxldCBhdHRhY2tQMSA9IHBsYXllck9uZS5jb21wdXRlckF0dGFjaygpXG4gIFxuICAgIGxldCByZWNlaXZlUDIgPSBwbGF5ZXJUd29Cb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1AxKVxuICAgIGxldCByZW5kZXJQMUhpdHMgPSByZW5kZXJIaXRzKFwicGxheWVyMlwiLCBwbGF5ZXJUd29Cb2FyZClcbiAgICBsZXQgcmVuZGVyUDFNaXNzZXMgPSByZW5kZXJNaXNzZXMoXCJwbGF5ZXIyXCIsIHBsYXllclR3b0JvYXJkKVxuICAgIGxldCBzdW5rUDIgPSBwbGF5ZXJUd29Cb2FyZC5jaGVja1N1bmsoXCJQbGF5ZXIgMVwiKVxuICAgICAgaWYgKHN1bmtQMiA9PSB0cnVlKSB7XG4gICAgICAgIFxuICAgICAgcmV0dXJuXG4gICAgfVxuICBcbiAgbGV0IGF0dGFja1AyID0gcGxheWVyVHdvLmNvbXB1dGVyQXR0YWNrKClcbiAgXG4gIGxldCByZWNlaXZlUDEgPSBwbGF5ZXJPbmVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1AyKVxuICBsZXQgcmVuZGVyUDJIaXRzID0gcmVuZGVySGl0cyhcInBsYXllcjFcIiwgcGxheWVyT25lQm9hcmQpXG4gIGxldCByZW5kZXJQMk1pc3NlcyA9IHJlbmRlck1pc3NlcyhcInBsYXllcjFcIiwgcGxheWVyT25lQm9hcmQpXG4gIGxldCBzdW5rUDEgPSBwbGF5ZXJPbmVCb2FyZC5jaGVja1N1bmsoXCJQbGF5ZXIgMlwiKVxuICAgIGlmIChzdW5rUDEgPT0gdHJ1ZSkge1xuICAgICAgXG4gICAgcmV0dXJuXG4gIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW5ld2dhbWUnKVxuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckJvYXJkKClcbiAgICBwbGF5ZXJPbmUgPSBjcmVhdGVQbGF5ZXIoKVxuICAgIHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpXG4gICAgcGxheWVyT25lQm9hcmQgPSBwbGF5ZXJPbmUuYm9hcmRcbiAgICBwbGF5ZXJUd29Cb2FyZCA9IHBsYXllclR3by5ib2FyZFxuICAgIHBsYXllck9uZS5wb3B1bGF0ZVNob3RzQXZhaWxhYmxlKClcbiAgICBwbGF5ZXJUd28ucG9wdWxhdGVTaG90c0F2YWlsYWJsZSgpXG5cbiAgICBwbGF5ZXJPbmVCb2FyZC5wbGFjZUFsbENvbXB1dGVyU2hpcHMoKVxuICAgIHBsYXllclR3b0JvYXJkLnBsYWNlQWxsQ29tcHV0ZXJTaGlwcygpXG4gICAgXG4gICAgY29tcFZzQ29tcCgpXG4gIH0pXG59XG5cbi8vIGNvbXBWc0NvbXAoKVxuXG5cbi8vQ29tcHV0ZXIgcGlja2luZyBjb29yZGluYXRlc1xuLy8gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpOyIsImltcG9ydCB7IGdhbWVCb2FyZCB9IGZyb20gJy4vZ2FtZWJvYXJkLmpzJ1xuXG5leHBvcnQgbGV0IHRlc3RzID0ge31cblxuZXhwb3J0IGxldCBjcmVhdGVQbGF5ZXIgPSAoKSA9PiB7XG4gIGxldCBib2FyZCA9IGdhbWVCb2FyZCgpXG4gIFxuICBsZXQgc2hvdHNBdmFpbGFibGUgPSBbXVxuXG4gIGxldCBwb3B1bGF0ZVNob3RzQXZhaWxhYmxlID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgIHNob3RzQXZhaWxhYmxlLnB1c2goW2ksIGpdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBjb21wdXRlckF0dGFjayA9ICgpID0+IHsgXG5cbiAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIHNob3RzQXZhaWxhYmxlLmxlbmd0aCkpXG4gICAgbGV0IHJhbmRvbUF0dGFjayA9IHNob3RzQXZhaWxhYmxlW3JhbmRvbV1cbiAgICBcbiAgICBzaG90c0F2YWlsYWJsZSA9IHNob3RzQXZhaWxhYmxlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gcmFuZG9tQXR0YWNrKVxuXG4gICAgXG5cbiAgICByZXR1cm4gcmFuZG9tQXR0YWNrXG4gICAgXG4gIH1cblxuICBsZXQgaHVtYW5BdHRhY2sgPSAoaXRlbSkgPT4ge1xuICAgIFxuICAgIGxldCBjb29yZGluYXRlID0gaXRlbS50YXJnZXQuZGF0YXNldC5pZFxuICAgIFxuXG4gICAgbGV0IGF0dGFjayA9IFsxMCwgMTBdXG5cbiAgICBpZiAoY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMV0gPT0gMTAgJiYgY29vcmRpbmF0ZVszXSArIGNvb3JkaW5hdGVbNF0gPT0gMTApIHtcbiAgICAgIGF0dGFjayA9IFsxMCwgMTBdXG4gICAgfVxuXG4gICAgZWxzZSBpZiAoY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMV0gPT0gMTApIHtcbiAgICAgICBhdHRhY2sgPSBbcGFyc2VJbnQoY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMV0pLCBwYXJzZUludChjb29yZGluYXRlW2Nvb3JkaW5hdGUubGVuZ3RoIC0gMV0pXVxuICAgIFxuICAgIH0gZWxzZSBpZiAgKGNvb3JkaW5hdGVbY29vcmRpbmF0ZS5sZW5ndGggLSAyXSArIGNvb3JkaW5hdGVbY29vcmRpbmF0ZS5sZW5ndGggLSAxXSA9PSAxMCkge1xuICAgICAgIGF0dGFjayA9IFtwYXJzZUludChjb29yZGluYXRlWzBdKSwgcGFyc2VJbnQoY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDJdICsgY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDFdKV1cbiAgICB9IGVsc2Uge1xuICAgIFxuICAgICBhdHRhY2sgPSBbcGFyc2VJbnQoY29vcmRpbmF0ZVswXSksIHBhcnNlSW50KGNvb3JkaW5hdGVbY29vcmRpbmF0ZS5sZW5ndGggLSAxXSldXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhdHRhY2tcbiAgICBcbiAgfVxuXG5cbiAgcmV0dXJuIHtib2FyZCwgc2hvdHNBdmFpbGFibGUsIHBvcHVsYXRlU2hvdHNBdmFpbGFibGUsIGNvbXB1dGVyQXR0YWNrLCBodW1hbkF0dGFja31cbn1cblxudGVzdHMuY3JlYXRlUGxheWVyID0gY3JlYXRlUGxheWVyXG5cblxuLy8gbGV0IGh1bWFuQXR0YWNrID0gKGl0ZW0pID0+IHtcbiAgICBcbi8vICAgbGV0IGNvb3JkaW5hdGUgPSBpdGVtLnRhcmdldC5kYXRhc2V0LmlkXG4vLyAgIGNvbnNvbGUubG9nKGNvb3JkaW5hdGUpXG5cbi8vICAgbGV0IGF0dGFjayA9IFsxMCwgMTBdXG5cbi8vICAgbGV0IGF0dGFjayA9IFtwYXJzZUludChjb29yZGluYXRlWzBdKSwgcGFyc2VJbnQoY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDFdKV1cbiAgXG4vLyAgIGlmIChjb29yZGluYXRlWzBdICsgY29vcmRpbmF0ZVsxXSA9PSAxMCAmJiBjb29yZGluYXRlWzNdICsgY29vcmRpbmF0ZVs0XSA9PSAxMCkge1xuLy8gICAgIGF0dGFjayA9IFsxMCwgMTBdXG4vLyAgIH1cblxuLy8gICBpZiAoY29vcmRpbmF0ZVswXSArIGNvb3JkaW5hdGVbMV0gPT0gMTApIHtcbi8vICAgICAgYXR0YWNrID0gW3BhcnNlSW50KGNvb3JkaW5hdGVbMF0gKyBjb29yZGluYXRlWzFdKSwgcGFyc2VJbnQoY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDFdKV1cbiAgXG4vLyAgIH1cblxuLy8gICBpZiAoY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDJdICsgY29vcmRpbmF0ZVtjb29yZGluYXRlLmxlbmd0aCAtIDFdID09IDEwKSB7XG4vLyAgICAgYXR0YWNrID0gW3BhcnNlSW50KGNvb3JkaW5hdGVbMF0pLCBwYXJzZUludChjb29yZGluYXRlW2Nvb3JkaW5hdGUubGVuZ3RoIC0gMl0gKyBjb29yZGluYXRlW2Nvb3JkaW5hdGUubGVuZ3RoIC0gMV0pXVxuLy8gICB9XG4gIFxuICBcbi8vICAgcmV0dXJuIGF0dGFja1xuICBcbi8vIH0iLCJcblxuXG5leHBvcnQgbGV0IHRlc3RzID0ge31cblxuZXhwb3J0IGxldCBjcmVhdGVTaGlwID0gKGxlbmd0aCwgYm9hcmRQb3NpdGlvbnMgPSBbXSwgaGl0UG9zaXRpb24gPSBbXSwgc3VuayA9IGZhbHNlKSA9PiB7XG5cbiAgbGV0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGhpdFBvc2l0aW9uLnB1c2gocG9zaXRpb24pXG5cbiAgICAvLyBpZiAoaGl0UG9zaXRpb24ubGVuZ3RoID09IGxlbmd0aCkgeyBcbiAgICAvLyAgIHN1bmsgPSB0cnVlXG4gICAgLy8gICBjb25zb2xlLmxvZygnd2Ugc3VuaycpXG4gICAgLy8gfVxuICAgIFxuICB9XG5cbiAgbGV0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0UG9zaXRpb24ubGVuZ3RoID09IGxlbmd0aCBcbiAgfVxuXG4gIHJldHVybiB7bGVuZ3RoLCBib2FyZFBvc2l0aW9ucywgaGl0UG9zaXRpb24sIHN1bmssIGhpdCwgaXNTdW5rfVxufVxuXG4vLyBsZXQgZml2ZVNoaXBzID0gKCkgPT4ge1xuLy8gICBsZXQgbnVtYmVycyA9IFsyLCAzLCAzLCA0LCA1XVxuLy8gICBmb3IgKGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4vLyAgICAgbGV0IHNoaXAgPSBjcmVhdGVTaGlwKG51bWJlcnNbaV0pXG4vLyAgICAgc2hpcHMucHVzaChzaGlwKVxuLy8gICB9XG4vLyB9XG5cblxuXG50ZXN0cy5jcmVhdGVTaGlwID0gY3JlYXRlU2hpcFxuXG5cblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9