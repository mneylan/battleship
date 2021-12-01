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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  padding: 20px;\n}\n\nstrong {\n  font-weight: bold;\n}\n\nh1 {\n  font-size: 30px;\n  color: salmon;\n}\n\n.board-container {\n  display: flex;\n  height: 650px;\n  justify-content: center;\n  gap: 10px;\n}\n\n.board1, .board2 {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  flex-basis: 50%;\n}\n\n.board1 > *, .board2 > * {\n  border: solid 1px black;\n  background-color: lightgrey;\n}\n\n.winner {\n  font-size: 30px;\n  font-weight: 600;\n}", "",{"version":3,"sources":["webpack://./src/main.sass"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;AACF;;AACA;EACE,aAAA;AAEF;;AAAA;EACE,iBAAA;AAGF;;AAAA;EACE,eAAA;EACA,aAAA;AAGF;;AADA;EACE,aAAA;EACA,aAAA;EAEA,uBAAA;EACA,SAAA;AAGF;;AAEA;EACE,aAAA;EACA,sCAAA;EACA,mCAAA;EAEA,eAAA;AAAF;;AAEA;EACE,uBAAA;EACA,2BAAA;AACF;;AACA;EACE,eAAA;EACA,gBAAA;AAEF","sourcesContent":["* \n  margin: 0\n  padding: 0\n  border: 0\n  box-sizing: border-box\n\nbody\n  padding: 20px\n\nstrong \n  font-weight: bold\n\n\nh1 \n  font-size: 30px\n  color: salmon\n\n.board-container\n  display: flex\n  height: 650px\n  \n  justify-content: center\n  gap: 10px\n  \n  \n\n\n.board1, .board2\n  display: grid\n  grid-template-columns: repeat(10, 1fr)\n  grid-template-rows: repeat(10, 1fr)\n  \n  flex-basis: 50%\n    \n.board1 > *, .board2 > *\n  border: solid 1px black\n  background-color: lightgrey\n\n.winner \n  font-size: 30px\n  font-weight: 600\n  "],"sourceRoot":""}]);
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
  board2.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
  board1.forEach(item => {
    item.style.backgroundColor = "lightgrey"
  })
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
  let btn = document.createElement(btn)
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



let tests = {}

let gameBoard = () => {
  let ships = []
  let missedShots = []

  let placeShip = (length, coordinates) => {
    let ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__.createShip)(length, coordinates )
    ships.push(ship)
  }

  let placeAllShips = () => {
    let lengths = [2, 3, 3, 4, 5 ]
    let coordinates = [
      [[1, 1], [1, 2]],
      [[2, 1], [2, 2], [2, 3]],
      [[3, 1], [3, 2], [3, 3]],
      [[4, 1], [4, 2], [4, 3], [4, 4]],
      [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]
    
    ]

    for (let i = 0; i < lengths.length; i ++) {
      let ship = placeShip(lengths[i], coordinates[i])
    }
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
      return true
    }
  }

  let placeComputerPatrolBoat = (array) => {
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
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
          valid = true
        }
      }
    }
  
    if (direction > 0) {
      valid = false
      firstCoordinate = generateFirstCoordinate()
  
      secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        valid = checkValid(availableCoordinates, secondCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true) {
          valid = true
        }
      }
    }
    placeShip(2, [firstCoordinate, secondCoordinate])
    
    
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString())

    return availableCoordinates
      
  } 

  let placeComputerSub = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true ) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true ) {
          valid = true
        }
        
      }
    }
    placeShip(3, [firstCoordinate, secondCoordinate, thirdCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString())

    
    return availableCoordinates
    
  }
  
  let placeComputerBattleship = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
        checkValid(availableCoordinates, fourthCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
        checkValid(availableCoordinates, fourthCoordinate)
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true) {
          valid = true
        }
        
      }
    }
    placeShip(4, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString())

    console.log(availableCoordinates.length)
    return availableCoordinates
  }

  let placeComputerCarrier = (array) => {
    let direction = Math.floor(Math.random() * 2)
    
    let availableCoordinates = array

    let valid = false

    let firstCoordinate = generateFirstCoordinate()

    let secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]

    let thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]

    let fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]

    let fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]

    if (direction < 1) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0], firstCoordinate[1] + 1]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0], secondCoordinate[1] + 1]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0], thirdCoordinate[1] + 1]
        checkValid(availableCoordinates, fourthCoordinate)
        fifthCoordinate = [fourthCoordinate[0], fourthCoordinate[1] + 1]
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true && checkValid(availableCoordinates, fifthCoordinate) == true) {
          valid = true
        }
        
      }
    }

    if (direction > 0) {
  
      while (!valid) {
        firstCoordinate = generateFirstCoordinate()
        checkValid(availableCoordinates, firstCoordinate)
        secondCoordinate = [firstCoordinate[0] + 1, firstCoordinate[1]]
        checkValid(availableCoordinates, secondCoordinate)
        thirdCoordinate = [secondCoordinate[0] + 1, secondCoordinate[1]]
        checkValid(availableCoordinates, thirdCoordinate)
        fourthCoordinate = [thirdCoordinate[0] + 1, thirdCoordinate[1]]
        checkValid(availableCoordinates, fourthCoordinate)
        fifthCoordinate = [fourthCoordinate[0] + 1, fourthCoordinate[1]]
        
        if (checkValid(availableCoordinates, firstCoordinate) == true && checkValid(availableCoordinates, secondCoordinate) == true && checkValid(availableCoordinates, thirdCoordinate) == true && checkValid(availableCoordinates, fourthCoordinate) == true && checkValid(availableCoordinates, fifthCoordinate) == true) {
          valid = true
        }
        
      }
    }
    placeShip(5, [firstCoordinate, secondCoordinate, thirdCoordinate, fourthCoordinate, fifthCoordinate])
    
    availableCoordinates = availableCoordinates.filter(item => item != firstCoordinate.toString() && item != secondCoordinate.toString() && item != thirdCoordinate.toString() && item != fourthCoordinate.toString() && item != fifthCoordinate.toString())

    console.log(availableCoordinates.length)
    return availableCoordinates
  }

  let checkValid = (availableCoordinatesArr, coordinate) => {
    
    if (!availableCoordinatesArr.toString().includes(coordinate.toString())) {
      return false
    } else if (coordinate[0] < 1 || coordinate[0] > 10 || coordinate[1] < 1 || coordinate[1] > 10) {
      return false
    } else return true
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
  
  return {placeShip, placeAllShips, receiveAttack, ships, missedShots, checkSunk, placeComputerPatrolBoat, placeComputerSub, placeComputerBattleship, placeComputerCarrier, checkValid, generateAllCoordinates, generateFirstCoordinate}
}

let newGame = gameBoard()
newGame.placeShip(3, [[1, 1], [1, 2], [1, 3]])
newGame.receiveAttack([1, 1])
newGame.receiveAttack([1, 2])
newGame.receiveAttack([1, 3])

newGame.checkSunk()

// newGame.checkSunk()

tests.gameBoard = gameBoard






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "progressGame": () => (/* binding */ progressGame)
/* harmony export */ });
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.sass */ "./src/main.sass");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");








const playerOne = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
const playerTwo = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
const playerTest = (0,_player_js__WEBPACK_IMPORTED_MODULE_3__.createPlayer)()
const playerOneBoard = playerOne.board
const playerTwoBoard = playerTwo.board
const playerTestBoard = playerTest.board



;(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.makeGameBoard)("board1", "player1")
;(0,_dom_js__WEBPACK_IMPORTED_MODULE_4__.makeGameBoard)("board2", "player2")
playerOne.populateShotsAvailable()
playerTwo.populateShotsAvailable()

playerOneBoard.placeAllShips()
playerTwoBoard.placeAllShips()

let compShipOne = playerTestBoard.placeComputerPatrolBoat(playerTestBoard.generateAllCoordinates())
let compShipTwo = playerTestBoard.placeComputerSub(compShipOne)
let compShipThree = playerTestBoard.placeComputerSub(compShipTwo)
let compShipFour = playerTestBoard.placeComputerBattleship(compShipThree)
let compShipFive = playerTestBoard.placeComputerCarrier(compShipFour)



console.log(playerTestBoard.ships)

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



// let game = () => {
//   let eitherSunk = () => {
//     if (playerTwoBoard.checkSunk("Player 1") == true ||playerOneBoard.checkSunk("Player 2") == true) {
//       return true
//     } else {
//       return false
//     }
//   }
//   newGamePlayer1()
//   while (eitherSunk == false) {
//     eitherSunk()
//     progressGame()

//   }
  
// }

// let newGamePlayer2 = () => {
//   let gridItems = document.querySelectorAll('.board1 > *')

//   gridItems.forEach(item => { 
//     item.addEventListener('click', gamePlayer2, {once: true})
//   })

// }

game()

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


    let attack = [parseInt(coordinate[0]), parseInt(coordinate[coordinate.length - 1])]


    return attack
    
  }


  return {board, shotsAvailable, populateShotsAvailable, computerAttack, humanAttack}
}

tests.createPlayer = createPlayer



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21haW4uc2FzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tYWluLnNhc3M/MjdmZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogc2FsbW9uO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDY1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2FyZDEsIC5ib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxufVxcblxcbi5ib2FyZDEgPiAqLCAuYm9hcmQyID4gKiB7XFxuICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLndpbm5lciB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFFQSx1QkFBQTtFQUNBLFNBQUE7QUFHRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtBQUFGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiBcXG4gIG1hcmdpbjogMFxcbiAgcGFkZGluZzogMFxcbiAgYm9yZGVyOiAwXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuYm9keVxcbiAgcGFkZGluZzogMjBweFxcblxcbnN0cm9uZyBcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxuXFxuXFxuaDEgXFxuICBmb250LXNpemU6IDMwcHhcXG4gIGNvbG9yOiBzYWxtb25cXG5cXG4uYm9hcmQtY29udGFpbmVyXFxuICBkaXNwbGF5OiBmbGV4XFxuICBoZWlnaHQ6IDY1MHB4XFxuICBcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuICBnYXA6IDEwcHhcXG4gIFxcbiAgXFxuXFxuXFxuLmJvYXJkMSwgLmJvYXJkMlxcbiAgZGlzcGxheTogZ3JpZFxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcilcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpXFxuICBcXG4gIGZsZXgtYmFzaXM6IDUwJVxcbiAgICBcXG4uYm9hcmQxID4gKiwgLmJvYXJkMiA+ICpcXG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXlcXG5cXG4ud2lubmVyIFxcbiAgZm9udC1zaXplOiAzMHB4XFxuICBmb250LXdlaWdodDogNjAwXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXIuanMnXG5pbXBvcnQgeyBwcm9ncmVzc0dhbWUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG5leHBvcnQgbGV0IG1ha2VHYW1lQm9hcmQgPSAoYm9hcmQsIHBsYXllcikgPT4ge1xuICBcbiAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmR9YClcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtwbGF5ZXJ9LSR7aX0tJHtqfWAsIGAke2l9LSR7an1gKVxuICAgICAgZGl2LnNldEF0dHJpYnV0ZShgZGF0YS1pZGAsIGAke2l9LSR7an1gKVxuICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgbGV0IHJlbmRlckhpdHMgPSAocGxheWVyLCBvYmopID0+IHtcbiAgbGV0IGFyciA9IG9iai5zaGlwc1xuXG4gICAgYXJyLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICBzaGlwLmhpdFBvc2l0aW9uLmZvckVhY2gocG9zaXRpb24gPT4ge1xuICAgICAgICBsZXQgZWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtJHtwbGF5ZXJ9LSR7cG9zaXRpb25bMF19LSR7cG9zaXRpb25bMV19XWApXG5cbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgIH0pXG4gICAgfSlcbiAgICBcbiAgXG59XG5cbmV4cG9ydCBsZXQgcmVuZGVyTWlzc2VzID0gKHBsYXllciwgb2JqKSA9PiB7XG4gIGxldCBhcnIgPSBvYmoubWlzc2VkU2hvdHNcblxuICAgIGFyci5mb3JFYWNoKG1pc3MgPT4ge1xuICAgICAgbGV0IGVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLSR7cGxheWVyfS0ke21pc3NbMF19LSR7bWlzc1sxXX1dYClcblxuICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIlxuICAgIH0pXG59XG5cbmV4cG9ydCBsZXQgYXR0YWNrRXZlbnRMaXN0ZW5lciA9IChwbGF5ZXIsIG9iaikgPT4ge1xuICBsZXQgYm9hcmRDb29yZGluYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmJvYXJkJHtwbGF5ZXJ9ID4gKmApXG5cbiAgYm9hcmRDb29yZGluYXRlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9iai5odW1hbkF0dGFjaywge29uY2U6IHRydWV9KVxuICB9KVxufVxuXG5leHBvcnQgbGV0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gIGxldCBib2FyZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQyID4gKicpXG4gIGxldCBib2FyZDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQxID4gKicpXG4gIGJvYXJkMi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyZXlcIlxuICB9KVxuICBib2FyZDEuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmV5XCJcbiAgfSlcbn1cblxuZXhwb3J0IGxldCBzaG93V2lubmVyID0gKG90aGVyUGxheWVyKSA9PiB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keVxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZGl2LmNsYXNzTGlzdCA9IFwid2lubmVyXCJcbiAgZGl2LnRleHRDb250ZW50ID0gYCR7b3RoZXJQbGF5ZXJ9IGlzIHRoZSB3aW5uZXIhYFxuICBib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZXhwb3J0IGxldCByZW1vdmVHYW1lTGlzdGVuZXIgPSAoKSA9PiB7XG4gIGxldCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQyID4gKicpXG5cbiAgZ3JpZEl0ZW1zLmZvckVhY2goaXRlbSA9PiBcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvZ3Jlc3NHYW1lKSlcbn1cblxuZXhwb3J0IGxldCBuZXdHYW1lQnV0dG9uID0gKCkgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYnRuKVxufSIsImltcG9ydCB7IGNyZWF0ZVNoaXAgfSBmcm9tIFwiLi9zaGlwXCJcbmltcG9ydCB7IGNsZWFyQm9hcmQsIHNob3dXaW5uZXIsIHJlbW92ZUdhbWVMaXN0ZW5lciB9IGZyb20gXCIuL2RvbVwiXG5cbmV4cG9ydCBsZXQgdGVzdHMgPSB7fVxuXG5leHBvcnQgbGV0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgbGV0IHNoaXBzID0gW11cbiAgbGV0IG1pc3NlZFNob3RzID0gW11cblxuICBsZXQgcGxhY2VTaGlwID0gKGxlbmd0aCwgY29vcmRpbmF0ZXMpID0+IHtcbiAgICBsZXQgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoLCBjb29yZGluYXRlcyApXG4gICAgc2hpcHMucHVzaChzaGlwKVxuICB9XG5cbiAgbGV0IHBsYWNlQWxsU2hpcHMgPSAoKSA9PiB7XG4gICAgbGV0IGxlbmd0aHMgPSBbMiwgMywgMywgNCwgNSBdXG4gICAgbGV0IGNvb3JkaW5hdGVzID0gW1xuICAgICAgW1sxLCAxXSwgWzEsIDJdXSxcbiAgICAgIFtbMiwgMV0sIFsyLCAyXSwgWzIsIDNdXSxcbiAgICAgIFtbMywgMV0sIFszLCAyXSwgWzMsIDNdXSxcbiAgICAgIFtbNCwgMV0sIFs0LCAyXSwgWzQsIDNdLCBbNCwgNF1dLFxuICAgICAgW1s1LCAxXSwgWzUsIDJdLCBbNSwgM10sIFs1LCA0XSwgWzUsIDVdXVxuICAgIFxuICAgIF1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3Rocy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIGxldCBzaGlwID0gcGxhY2VTaGlwKGxlbmd0aHNbaV0sIGNvb3JkaW5hdGVzW2ldKVxuICAgIH1cbiAgfVxuXG4gIGxldCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHNoaXAgPSBzaGlwc1tpXVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChzaGlwLmJvYXJkUG9zaXRpb25zW2pdLnRvU3RyaW5nKCkgPT0gY29vcmRpbmF0ZXMudG9TdHJpbmcoKSkge1xuICAgICAgICAgIHNoaXAuaGl0KGNvb3JkaW5hdGVzKVxuICAgICAgICAgIFxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG1pc3NlZFNob3RzLnB1c2goY29vcmRpbmF0ZXMpIFxuICAgIFxuICB9XG5cbiAgbGV0IGNoZWNrU3VuayA9IChvdGhlclBsYXllcikgPT4ge1xuICAgIGxldCBuZXdzaGlwcyA9IFsuLi5zaGlwc11cbiAgICBcbiAgICBsZXQgYWxsU3VuayA9IG5ld3NoaXBzLmZpbHRlcihzaGlwID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgaWYgKGFsbFN1bmsubGVuZ3RoID09IDUpIHsgXG4gICAgICBjb25zb2xlLmxvZyhgQWxsIHNoaXBzIGFyZSBzdW5rLCAke290aGVyUGxheWVyfSB3aW5zIWApXG4gICAgICBcbiAgICAgIHNob3dXaW5uZXIob3RoZXJQbGF5ZXIpXG4gICAgICByZW1vdmVHYW1lTGlzdGVuZXIoKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICBsZXQgcGxhY2VDb21wdXRlclBhdHJvbEJvYXQgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBcbiAgICBsZXQgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBhcnJheVxuICBcbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuICAgIGxldCBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gIFxuICAgICAgbGV0IHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICAgIGlmIChkaXJlY3Rpb24gPCAxKSB7XG4gIFxuICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgICB2YWxpZCA9IGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICAgIFxuICAgICAgICBpZiAoY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpID09IHRydWUpIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHZhbGlkID0gZmFsc2VcbiAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbiAgXG4gICAgICBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSArIDEsIGZpcnN0Q29vcmRpbmF0ZVsxXV1cbiAgXG4gICAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICAgIGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcbiAgICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0gKyAxLCBmaXJzdENvb3JkaW5hdGVbMV1dXG4gICAgICAgIHZhbGlkID0gY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSlcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2hpcCgyLCBbZmlyc3RDb29yZGluYXRlLCBzZWNvbmRDb29yZGluYXRlXSlcbiAgICBcbiAgICBcbiAgICBcbiAgICBhdmFpbGFibGVDb29yZGluYXRlcyA9IGF2YWlsYWJsZUNvb3JkaW5hdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gZmlyc3RDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSBzZWNvbmRDb29yZGluYXRlLnRvU3RyaW5nKCkpXG5cbiAgICByZXR1cm4gYXZhaWxhYmxlQ29vcmRpbmF0ZXNcbiAgICAgIFxuICB9IFxuXG4gIGxldCBwbGFjZUNvbXB1dGVyU3ViID0gKGFycmF5KSA9PiB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXG4gICAgXG4gICAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXJyYXlcblxuICAgIGxldCB2YWxpZCA9IGZhbHNlXG5cbiAgICBsZXQgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuXG4gICAgbGV0IHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuXG4gICAgbGV0IHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cblxuICAgIGlmIChkaXJlY3Rpb24gPCAxKSB7XG4gIFxuICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgICAgICAgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKVxuICAgICAgICBcbiAgICAgICAgaWYgKGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSkgPT0gdHJ1ZSApIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICBcbiAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4gICAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdICsgMSwgZmlyc3RDb29yZGluYXRlWzFdXVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSArIDEsIHNlY29uZENvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgc2Vjb25kQ29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCB0aGlyZENvb3JkaW5hdGUpID09IHRydWUgKSB7XG4gICAgICAgICAgdmFsaWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2hpcCgzLCBbZmlyc3RDb29yZGluYXRlLCBzZWNvbmRDb29yZGluYXRlLCB0aGlyZENvb3JkaW5hdGVdKVxuICAgIFxuICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBmaXJzdENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHNlY29uZENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHRoaXJkQ29vcmRpbmF0ZS50b1N0cmluZygpKVxuXG4gICAgXG4gICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gICAgXG4gIH1cbiAgXG4gIGxldCBwbGFjZUNvbXB1dGVyQmF0dGxlc2hpcCA9IChhcnJheSkgPT4ge1xuICAgIGxldCBkaXJlY3Rpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKVxuICAgIFxuICAgIGxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IGFycmF5XG5cbiAgICBsZXQgdmFsaWQgPSBmYWxzZVxuXG4gICAgbGV0IGZpcnN0Q29vcmRpbmF0ZSA9IGdlbmVyYXRlRmlyc3RDb29yZGluYXRlKClcblxuICAgIGxldCBzZWNvbmRDb29yZGluYXRlID0gW2ZpcnN0Q29vcmRpbmF0ZVswXSwgZmlyc3RDb29yZGluYXRlWzFdICsgMV1cblxuICAgIGxldCB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSwgc2Vjb25kQ29vcmRpbmF0ZVsxXSArIDFdXG5cbiAgICBsZXQgZm91cnRoQ29vcmRpbmF0ZSA9IFt0aGlyZENvb3JkaW5hdGVbMF0sIHRoaXJkQ29vcmRpbmF0ZVsxXSArIDFdXG5cbiAgICBpZiAoZGlyZWN0aW9uIDwgMSkge1xuICBcbiAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4gICAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdLCBmaXJzdENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSwgc2Vjb25kQ29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgICAgZm91cnRoQ29vcmRpbmF0ZSA9IFt0aGlyZENvb3JkaW5hdGVbMF0sIHRoaXJkQ29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gICAgICAgIFxuICAgICAgICBpZiAoY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpID09IHRydWUpIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID4gMCkge1xuICBcbiAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgZmlyc3RDb29yZGluYXRlID0gZ2VuZXJhdGVGaXJzdENvb3JkaW5hdGUoKVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmaXJzdENvb3JkaW5hdGUpXG4gICAgICAgIHNlY29uZENvb3JkaW5hdGUgPSBbZmlyc3RDb29yZGluYXRlWzBdICsgMSwgZmlyc3RDb29yZGluYXRlWzFdXVxuICAgICAgICBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKVxuICAgICAgICB0aGlyZENvb3JkaW5hdGUgPSBbc2Vjb25kQ29vcmRpbmF0ZVswXSArIDEsIHNlY29uZENvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSlcbiAgICAgICAgZm91cnRoQ29vcmRpbmF0ZSA9IFt0aGlyZENvb3JkaW5hdGVbMF0gKyAxLCB0aGlyZENvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpXG4gICAgICAgIFxuICAgICAgICBpZiAoY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZmlyc3RDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpID09IHRydWUgJiYgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZvdXJ0aENvb3JkaW5hdGUpID09IHRydWUpIHtcbiAgICAgICAgICB2YWxpZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VTaGlwKDQsIFtmaXJzdENvb3JkaW5hdGUsIHNlY29uZENvb3JkaW5hdGUsIHRoaXJkQ29vcmRpbmF0ZSwgZm91cnRoQ29vcmRpbmF0ZV0pXG4gICAgXG4gICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBhdmFpbGFibGVDb29yZGluYXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9IGZpcnN0Q29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gc2Vjb25kQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gdGhpcmRDb29yZGluYXRlLnRvU3RyaW5nKCkgJiYgaXRlbSAhPSBmb3VydGhDb29yZGluYXRlLnRvU3RyaW5nKCkpXG5cbiAgICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gIH1cblxuICBsZXQgcGxhY2VDb21wdXRlckNhcnJpZXIgPSAoYXJyYXkpID0+IHtcbiAgICBsZXQgZGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMilcbiAgICBcbiAgICBsZXQgYXZhaWxhYmxlQ29vcmRpbmF0ZXMgPSBhcnJheVxuXG4gICAgbGV0IHZhbGlkID0gZmFsc2VcblxuICAgIGxldCBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG5cbiAgICBsZXQgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG5cbiAgICBsZXQgdGhpcmRDb29yZGluYXRlID0gW3NlY29uZENvb3JkaW5hdGVbMF0sIHNlY29uZENvb3JkaW5hdGVbMV0gKyAxXVxuXG4gICAgbGV0IGZvdXJ0aENvb3JkaW5hdGUgPSBbdGhpcmRDb29yZGluYXRlWzBdLCB0aGlyZENvb3JkaW5hdGVbMV0gKyAxXVxuXG4gICAgbGV0IGZpZnRoQ29vcmRpbmF0ZSA9IFtmb3VydGhDb29yZGluYXRlWzBdLCBmb3VydGhDb29yZGluYXRlWzFdICsgMV1cblxuICAgIGlmIChkaXJlY3Rpb24gPCAxKSB7XG4gIFxuICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0sIGZpcnN0Q29vcmRpbmF0ZVsxXSArIDFdXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdLCBzZWNvbmRDb29yZGluYXRlWzFdICsgMV1cbiAgICAgICAgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKVxuICAgICAgICBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSwgdGhpcmRDb29yZGluYXRlWzFdICsgMV1cbiAgICAgICAgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSlcbiAgICAgICAgZmlmdGhDb29yZGluYXRlID0gW2ZvdXJ0aENvb3JkaW5hdGVbMF0sIGZvdXJ0aENvb3JkaW5hdGVbMV0gKyAxXVxuICAgICAgICBcbiAgICAgICAgaWYgKGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmb3VydGhDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpZnRoQ29vcmRpbmF0ZSkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gIFxuICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICBmaXJzdENvb3JkaW5hdGUgPSBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSgpXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSlcbiAgICAgICAgc2Vjb25kQ29vcmRpbmF0ZSA9IFtmaXJzdENvb3JkaW5hdGVbMF0gKyAxLCBmaXJzdENvb3JkaW5hdGVbMV1dXG4gICAgICAgIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHNlY29uZENvb3JkaW5hdGUpXG4gICAgICAgIHRoaXJkQ29vcmRpbmF0ZSA9IFtzZWNvbmRDb29yZGluYXRlWzBdICsgMSwgc2Vjb25kQ29vcmRpbmF0ZVsxXV1cbiAgICAgICAgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgdGhpcmRDb29yZGluYXRlKVxuICAgICAgICBmb3VydGhDb29yZGluYXRlID0gW3RoaXJkQ29vcmRpbmF0ZVswXSArIDEsIHRoaXJkQ29vcmRpbmF0ZVsxXV1cbiAgICAgICAgY2hlY2tWYWxpZChhdmFpbGFibGVDb29yZGluYXRlcywgZm91cnRoQ29vcmRpbmF0ZSlcbiAgICAgICAgZmlmdGhDb29yZGluYXRlID0gW2ZvdXJ0aENvb3JkaW5hdGVbMF0gKyAxLCBmb3VydGhDb29yZGluYXRlWzFdXVxuICAgICAgICBcbiAgICAgICAgaWYgKGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpcnN0Q29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBzZWNvbmRDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIHRoaXJkQ29vcmRpbmF0ZSkgPT0gdHJ1ZSAmJiBjaGVja1ZhbGlkKGF2YWlsYWJsZUNvb3JkaW5hdGVzLCBmb3VydGhDb29yZGluYXRlKSA9PSB0cnVlICYmIGNoZWNrVmFsaWQoYXZhaWxhYmxlQ29vcmRpbmF0ZXMsIGZpZnRoQ29vcmRpbmF0ZSkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHZhbGlkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICBwbGFjZVNoaXAoNSwgW2ZpcnN0Q29vcmRpbmF0ZSwgc2Vjb25kQ29vcmRpbmF0ZSwgdGhpcmRDb29yZGluYXRlLCBmb3VydGhDb29yZGluYXRlLCBmaWZ0aENvb3JkaW5hdGVdKVxuICAgIFxuICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gYXZhaWxhYmxlQ29vcmRpbmF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBmaXJzdENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHNlY29uZENvb3JkaW5hdGUudG9TdHJpbmcoKSAmJiBpdGVtICE9IHRoaXJkQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gZm91cnRoQ29vcmRpbmF0ZS50b1N0cmluZygpICYmIGl0ZW0gIT0gZmlmdGhDb29yZGluYXRlLnRvU3RyaW5nKCkpXG5cbiAgICBjb25zb2xlLmxvZyhhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpXG4gICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzXG4gIH1cblxuICBsZXQgY2hlY2tWYWxpZCA9IChhdmFpbGFibGVDb29yZGluYXRlc0FyciwgY29vcmRpbmF0ZSkgPT4ge1xuICAgIFxuICAgIGlmICghYXZhaWxhYmxlQ29vcmRpbmF0ZXNBcnIudG9TdHJpbmcoKS5pbmNsdWRlcyhjb29yZGluYXRlLnRvU3RyaW5nKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKGNvb3JkaW5hdGVbMF0gPCAxIHx8IGNvb3JkaW5hdGVbMF0gPiAxMCB8fCBjb29yZGluYXRlWzFdIDwgMSB8fCBjb29yZGluYXRlWzFdID4gMTApIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSByZXR1cm4gdHJ1ZVxuICB9XG4gIFxuICBsZXQgZ2VuZXJhdGVBbGxDb29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBsZXQgYXJyYXkgPSBbXVxuICBcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDExOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICBhcnJheS5wdXNoKFtpLCBqXSlcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGFycmF5XG4gIH1cbiAgXG4gIGxldCBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZSA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgZmlyc3ROdW1iZXIgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSlcbiAgICBsZXQgc2Vjb25kTnVtYmVyID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwKSArIDEpXG4gIFxuICAgIHJldHVybiBbZmlyc3ROdW1iZXIsIHNlY29uZE51bWJlcl1cbiAgfVxuICBcbiAgcmV0dXJuIHtwbGFjZVNoaXAsIHBsYWNlQWxsU2hpcHMsIHJlY2VpdmVBdHRhY2ssIHNoaXBzLCBtaXNzZWRTaG90cywgY2hlY2tTdW5rLCBwbGFjZUNvbXB1dGVyUGF0cm9sQm9hdCwgcGxhY2VDb21wdXRlclN1YiwgcGxhY2VDb21wdXRlckJhdHRsZXNoaXAsIHBsYWNlQ29tcHV0ZXJDYXJyaWVyLCBjaGVja1ZhbGlkLCBnZW5lcmF0ZUFsbENvb3JkaW5hdGVzLCBnZW5lcmF0ZUZpcnN0Q29vcmRpbmF0ZX1cbn1cblxubGV0IG5ld0dhbWUgPSBnYW1lQm9hcmQoKVxubmV3R2FtZS5wbGFjZVNoaXAoMywgW1sxLCAxXSwgWzEsIDJdLCBbMSwgM11dKVxubmV3R2FtZS5yZWNlaXZlQXR0YWNrKFsxLCAxXSlcbm5ld0dhbWUucmVjZWl2ZUF0dGFjayhbMSwgMl0pXG5uZXdHYW1lLnJlY2VpdmVBdHRhY2soWzEsIDNdKVxuXG5uZXdHYW1lLmNoZWNrU3VuaygpXG5cbi8vIG5ld0dhbWUuY2hlY2tTdW5rKClcblxudGVzdHMuZ2FtZUJvYXJkID0gZ2FtZUJvYXJkXG5cblxuXG5cbiIsImltcG9ydCAnLi9tYWluLnNhc3MnXG5pbXBvcnQgJy4vc2hpcC5qcydcbmltcG9ydCAnLi9nYW1lYm9hcmQuanMnXG5pbXBvcnQgeyBjcmVhdGVQbGF5ZXIgfSBmcm9tICcuL3BsYXllci5qcydcbmltcG9ydCB7IG1ha2VHYW1lQm9hcmQsIHJlbmRlckhpdHMsIHJlbmRlck1pc3NlcywgYXR0YWNrRXZlbnRMaXN0ZW5lciwgY2xlYXJCb2FyZCB9IGZyb20gJy4vZG9tLmpzJ1xuXG5cblxuY29uc3QgcGxheWVyT25lID0gY3JlYXRlUGxheWVyKClcbmNvbnN0IHBsYXllclR3byA9IGNyZWF0ZVBsYXllcigpXG5jb25zdCBwbGF5ZXJUZXN0ID0gY3JlYXRlUGxheWVyKClcbmNvbnN0IHBsYXllck9uZUJvYXJkID0gcGxheWVyT25lLmJvYXJkXG5jb25zdCBwbGF5ZXJUd29Cb2FyZCA9IHBsYXllclR3by5ib2FyZFxuY29uc3QgcGxheWVyVGVzdEJvYXJkID0gcGxheWVyVGVzdC5ib2FyZFxuXG5cblxubWFrZUdhbWVCb2FyZChcImJvYXJkMVwiLCBcInBsYXllcjFcIilcbm1ha2VHYW1lQm9hcmQoXCJib2FyZDJcIiwgXCJwbGF5ZXIyXCIpXG5wbGF5ZXJPbmUucG9wdWxhdGVTaG90c0F2YWlsYWJsZSgpXG5wbGF5ZXJUd28ucG9wdWxhdGVTaG90c0F2YWlsYWJsZSgpXG5cbnBsYXllck9uZUJvYXJkLnBsYWNlQWxsU2hpcHMoKVxucGxheWVyVHdvQm9hcmQucGxhY2VBbGxTaGlwcygpXG5cbmxldCBjb21wU2hpcE9uZSA9IHBsYXllclRlc3RCb2FyZC5wbGFjZUNvbXB1dGVyUGF0cm9sQm9hdChwbGF5ZXJUZXN0Qm9hcmQuZ2VuZXJhdGVBbGxDb29yZGluYXRlcygpKVxubGV0IGNvbXBTaGlwVHdvID0gcGxheWVyVGVzdEJvYXJkLnBsYWNlQ29tcHV0ZXJTdWIoY29tcFNoaXBPbmUpXG5sZXQgY29tcFNoaXBUaHJlZSA9IHBsYXllclRlc3RCb2FyZC5wbGFjZUNvbXB1dGVyU3ViKGNvbXBTaGlwVHdvKVxubGV0IGNvbXBTaGlwRm91ciA9IHBsYXllclRlc3RCb2FyZC5wbGFjZUNvbXB1dGVyQmF0dGxlc2hpcChjb21wU2hpcFRocmVlKVxubGV0IGNvbXBTaGlwRml2ZSA9IHBsYXllclRlc3RCb2FyZC5wbGFjZUNvbXB1dGVyQ2Fycmllcihjb21wU2hpcEZvdXIpXG5cblxuXG5jb25zb2xlLmxvZyhwbGF5ZXJUZXN0Qm9hcmQuc2hpcHMpXG5cbmxldCBnYW1lID0gKCkgPT4ge1xuICBuZXdHYW1lUGxheWVyMSgpXG4gICAgXG59XG5cbmxldCBodW1hblBsYXllckF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XG4gIGxldCBhdHRhY2tQMSA9IHBsYXllck9uZS5odW1hbkF0dGFjayhjb29yZGluYXRlKVxuICBsZXQgcmVjZWl2ZVAyID0gcGxheWVyVHdvQm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tQMSlcbiAgbGV0IHJlbmRlclAxSGl0cyA9IHJlbmRlckhpdHMoXCJwbGF5ZXIyXCIsIHBsYXllclR3b0JvYXJkKVxuICBsZXQgcmVuZGVyUDFNaXNzZXMgPSByZW5kZXJNaXNzZXMoXCJwbGF5ZXIyXCIsIHBsYXllclR3b0JvYXJkKVxuICBsZXQgc3Vua1AyID0gcGxheWVyVHdvQm9hcmQuY2hlY2tTdW5rKFwiUGxheWVyIDFcIilcbiAgICBpZiAoc3Vua1AyID09IHRydWUpIHtcbiAgICAgIFxuICAgIHJldHVyblxuICB9XG5cbn1cblxubGV0IGNvbXB1dGVyUGxheWVyQXR0YWNrID0gKCkgPT4ge1xuICBsZXQgYXR0YWNrUDIgPSBwbGF5ZXJUd28uY29tcHV0ZXJBdHRhY2soKVxuICAgIGxldCByZWNlaXZlUDEgPSBwbGF5ZXJPbmVCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1AyKVxuICAgIGxldCByZW5kZXJQMkhpdHMgPSByZW5kZXJIaXRzKFwicGxheWVyMVwiLCBwbGF5ZXJPbmVCb2FyZClcbiAgICBsZXQgcmVuZGVyUDJNaXNzZXMgPSByZW5kZXJNaXNzZXMoXCJwbGF5ZXIxXCIsIHBsYXllck9uZUJvYXJkKVxuICAgIGxldCBzdW5rUDEgPSBwbGF5ZXJPbmVCb2FyZC5jaGVja1N1bmsoXCJQbGF5ZXIgMlwiKVxuICAgIGlmIChzdW5rUDEgPT0gdHJ1ZSkge1xuICAgICAgXG4gICAgcmV0dXJuXG4gIH1cbn1cblxuXG5sZXQgbmV3R2FtZVBsYXllcjEgPSAoKSA9PiB7XG4gIGxldCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQyID4gKicpXG5cbiAgZ3JpZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7IFxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9ncmVzc0dhbWUsIHtvbmNlOiB0cnVlfSlcbiAgfSlcblxufVxuXG5leHBvcnQgbGV0IHByb2dyZXNzR2FtZSA9IChpdGVtKSA9PiB7XG4gIFxuICBodW1hblBsYXllckF0dGFjayhpdGVtKVxuICBjb21wdXRlclBsYXllckF0dGFjaygpXG59XG5cblxuXG4vLyBsZXQgZ2FtZSA9ICgpID0+IHtcbi8vICAgbGV0IGVpdGhlclN1bmsgPSAoKSA9PiB7XG4vLyAgICAgaWYgKHBsYXllclR3b0JvYXJkLmNoZWNrU3VuayhcIlBsYXllciAxXCIpID09IHRydWUgfHxwbGF5ZXJPbmVCb2FyZC5jaGVja1N1bmsoXCJQbGF5ZXIgMlwiKSA9PSB0cnVlKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZVxuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICByZXR1cm4gZmFsc2Vcbi8vICAgICB9XG4vLyAgIH1cbi8vICAgbmV3R2FtZVBsYXllcjEoKVxuLy8gICB3aGlsZSAoZWl0aGVyU3VuayA9PSBmYWxzZSkge1xuLy8gICAgIGVpdGhlclN1bmsoKVxuLy8gICAgIHByb2dyZXNzR2FtZSgpXG5cbi8vICAgfVxuICBcbi8vIH1cblxuLy8gbGV0IG5ld0dhbWVQbGF5ZXIyID0gKCkgPT4ge1xuLy8gICBsZXQgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkMSA+IConKVxuXG4vLyAgIGdyaWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4geyBcbi8vICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2FtZVBsYXllcjIsIHtvbmNlOiB0cnVlfSlcbi8vICAgfSlcblxuLy8gfVxuXG5nYW1lKClcblxuLy9Db21wdXRlciBwaWNraW5nIGNvb3JkaW5hdGVzXG4vLyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTApICsgMSk7IiwiaW1wb3J0IHsgZ2FtZUJvYXJkIH0gZnJvbSAnLi9nYW1lYm9hcmQuanMnXG5cbmV4cG9ydCBsZXQgdGVzdHMgPSB7fVxuXG5leHBvcnQgbGV0IGNyZWF0ZVBsYXllciA9ICgpID0+IHtcbiAgbGV0IGJvYXJkID0gZ2FtZUJvYXJkKClcbiAgXG4gIGxldCBzaG90c0F2YWlsYWJsZSA9IFtdXG5cbiAgbGV0IHBvcHVsYXRlU2hvdHNBdmFpbGFibGUgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgc2hvdHNBdmFpbGFibGUucHVzaChbaSwgal0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IGNvbXB1dGVyQXR0YWNrID0gKCkgPT4geyBcblxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogc2hvdHNBdmFpbGFibGUubGVuZ3RoKSlcbiAgICBsZXQgcmFuZG9tQXR0YWNrID0gc2hvdHNBdmFpbGFibGVbcmFuZG9tXVxuICAgIFxuICAgIHNob3RzQXZhaWxhYmxlID0gc2hvdHNBdmFpbGFibGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSByYW5kb21BdHRhY2spXG5cbiAgICBcblxuICAgIHJldHVybiByYW5kb21BdHRhY2tcbiAgICBcbiAgfVxuXG4gIGxldCBodW1hbkF0dGFjayA9IChpdGVtKSA9PiB7XG4gICAgXG4gICAgbGV0IGNvb3JkaW5hdGUgPSBpdGVtLnRhcmdldC5kYXRhc2V0LmlkXG5cblxuICAgIGxldCBhdHRhY2sgPSBbcGFyc2VJbnQoY29vcmRpbmF0ZVswXSksIHBhcnNlSW50KGNvb3JkaW5hdGVbY29vcmRpbmF0ZS5sZW5ndGggLSAxXSldXG5cblxuICAgIHJldHVybiBhdHRhY2tcbiAgICBcbiAgfVxuXG5cbiAgcmV0dXJuIHtib2FyZCwgc2hvdHNBdmFpbGFibGUsIHBvcHVsYXRlU2hvdHNBdmFpbGFibGUsIGNvbXB1dGVyQXR0YWNrLCBodW1hbkF0dGFja31cbn1cblxudGVzdHMuY3JlYXRlUGxheWVyID0gY3JlYXRlUGxheWVyXG5cbiIsIlxuXG5cbmV4cG9ydCBsZXQgdGVzdHMgPSB7fVxuXG5leHBvcnQgbGV0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoLCBib2FyZFBvc2l0aW9ucyA9IFtdLCBoaXRQb3NpdGlvbiA9IFtdLCBzdW5rID0gZmFsc2UpID0+IHtcblxuICBsZXQgaGl0ID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgaGl0UG9zaXRpb24ucHVzaChwb3NpdGlvbilcblxuICAgIC8vIGlmIChoaXRQb3NpdGlvbi5sZW5ndGggPT0gbGVuZ3RoKSB7IFxuICAgIC8vICAgc3VuayA9IHRydWVcbiAgICAvLyAgIGNvbnNvbGUubG9nKCd3ZSBzdW5rJylcbiAgICAvLyB9XG4gICAgXG4gIH1cblxuICBsZXQgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRQb3NpdGlvbi5sZW5ndGggPT0gbGVuZ3RoIFxuICB9XG5cbiAgcmV0dXJuIHtsZW5ndGgsIGJvYXJkUG9zaXRpb25zLCBoaXRQb3NpdGlvbiwgc3VuaywgaGl0LCBpc1N1bmt9XG59XG5cbi8vIGxldCBmaXZlU2hpcHMgPSAoKSA9PiB7XG4vLyAgIGxldCBudW1iZXJzID0gWzIsIDMsIDMsIDQsIDVdXG4vLyAgIGZvciAoaSA9IDA7IGkgPCA1OyBpKyspIHtcbi8vICAgICBsZXQgc2hpcCA9IGNyZWF0ZVNoaXAobnVtYmVyc1tpXSlcbi8vICAgICBzaGlwcy5wdXNoKHNoaXApXG4vLyAgIH1cbi8vIH1cblxuXG5cbnRlc3RzLmNyZWF0ZVNoaXAgPSBjcmVhdGVTaGlwXG5cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=