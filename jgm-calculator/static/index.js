/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/Buff.js":
/*!************************!*\
  !*** ./src/js/Buff.js ***!
  \************************/
/*! exports provided: Buff, Buffs, BuffRange, BuffSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buff", function() { return Buff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buffs", function() { return Buffs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuffRange", function() { return BuffRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuffSource", function() { return BuffSource; });
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/js/Building.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Buff = function Buff(range, target, buff) {
  _classCallCheck(this, Buff);

  this.range = range;
  this.target = target;
  this.buff = buff;
};

var BuffRange = {
  Global: "所有建筑",
  Online: "在线",
  Offline: "离线",
  Supply: "供货",
  Residence: "住宅建筑",
  Business: "商业建筑",
  Industrial: "工业建筑",
  Targets: "特定建筑物"
};
var BuffSource = {
  Building: "建筑加成",
  Policy: "政策加成",
  Photo: "游记加成",
  Quest: "任务加成"
};

var Buffs =
/*#__PURE__*/
function () {
  function Buffs() {
    _classCallCheck(this, Buffs);

    this.Building = []; //建筑加成

    this.Policy = []; //政策加成

    this.Photo = []; //游记加成

    this.Quest = []; //任务加成
  }

  _createClass(Buffs, [{
    key: "add",
    value: function add(source, buff) {
      var b = new Buff(buff.range, buff.target, buff.buff / 100);

      switch (source) {
        case BuffSource.Policy:
          this.Policy.push(b);
          break;

        case BuffSource.Photo:
          this.Photo.push(b);
          break;

        case BuffSource.Quest:
          this.Quest.push(b);
          break;
      }
    }
  }, {
    key: "addQuest",
    value: function addQuest(target) {
      var b = new Buff(BuffRange.Targets, target.BuildingName, target.quest / 100);
      this.Quest.push(b);
    }
  }, {
    key: "addBuilding",
    value: function addBuilding(building) {
      var _this = this;

      building.buffs.forEach(function (buff) {
        _this.Building.push(new Buff(buff.range, buff.target, building.getBuffValue(buff)));
      });
    }
  }, {
    key: "Calculation",
    value: function Calculation(source, building) {
      var result = {};
      result[BuffRange.Online] = 1;
      result[BuffRange.Offline] = 1;
      var buffs;

      switch (source) {
        case BuffSource.Building:
          buffs = this.Building;
          break;

        case BuffSource.Policy:
          buffs = this.Policy;
          break;

        case BuffSource.Photo:
          buffs = this.Photo;
          break;

        case BuffSource.Quest:
          buffs = this.Quest;
          break;

        default:
          return result;
      }

      buffs.forEach(function (buff) {
        switch (buff.range) {
          case BuffRange.Global:
            result[BuffRange.Online] += buff.buff;
            result[BuffRange.Offline] += buff.buff;
            break;

          case BuffRange.Online:
            result[BuffRange.Online] += buff.buff;
            break;

          case BuffRange.Offline:
            result[BuffRange.Offline] += buff.buff;
            break;

          case BuffRange.Business:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Residence:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Industrial:
            if (building.BuildingType === _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

            break;

          case BuffRange.Targets:
            if (buff.target === building.BuildingName) {
              result[BuffRange.Online] += buff.buff;
              result[BuffRange.Offline] += buff.buff;
            }

        }
      });
      return result;
    }
  }, {
    key: "supplyBuff",
    get: function get() {
      var b = 0;
      [this.Building, this.Policy, this.Photo, this.Quest].forEach(function (buffs) {
        buffs.forEach(function (buff) {
          if (buff.range === BuffRange.Supply) {
            b += buff.buff;
          }
        });
      });
      return b;
    }
  }]);

  return Buffs;
}();



/***/ }),

/***/ "./src/js/Building.js":
/*!****************************!*\
  !*** ./src/js/Building.js ***!
  \****************************/
/*! exports provided: Building, BuildingRarity, BuildingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingRarity", function() { return BuildingRarity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingType", function() { return BuildingType; });
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buff */ "./src/js/Buff.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Building =
/*#__PURE__*/
function () {
  function Building(name, rarity, type, baseMoney) {
    _classCallCheck(this, Building);

    this.star = 0;
    this.quest = 0;
    this.buffs = []; //建筑加成

    this.BuildingName = name;
    this.rarity = rarity;
    this.BuildingType = type;
    this.baseMoney = baseMoney;
  }

  _createClass(Building, [{
    key: "calculation",
    value: function calculation(buffs) {
      var _this = this;

      var addition = {};
      var money = this.money;
      addition[_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffRange"].Online] = money;
      addition[_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffRange"].Offline] = money / 2;
      [_Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Building, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Policy, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Photo, _Buff__WEBPACK_IMPORTED_MODULE_0__["BuffSource"].Quest].forEach(function (source) {
        var buff = buffs.Calculation(source, _this);
        Object.keys(buff).forEach(function (range) {
          addition[range] *= buff[range];
        });
      });
      return addition;
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      return buff.buff * this.star;
    }
  }, {
    key: "money",
    get: function get() {
      return this.baseMoney * this.multiple; //这里需要按等级计算，这是基础金钱收益
    }
  }, {
    key: "multiple",
    get: function get() {
      switch (this.star) {
        case 1:
          return 1;

        case 2:
          return 2;

        case 3:
          return 6;

        case 4:
          return 24;

        case 5:
          return 120;

        default:
          return 1;
      }
    }
  }]);

  return Building;
}();

var BuildingRarity = {
  Common: "普通",
  Rare: "稀有",
  Legendary: "史诗"
};
var BuildingType = {
  Residence: "住宅",
  Business: "商业",
  Industrial: "工业"
};


/***/ }),

/***/ "./src/js/Builds/BookCity.js":
/*!***********************************!*\
  !*** ./src/js/Builds/BookCity.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _School__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./School */ "./src/js/Builds/School.js");
/* harmony import */ var _PaperMill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaperMill */ "./src/js/Builds/PaperMill.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BookCity =
/*#__PURE__*/
function (_Building) {
  _inherits(BookCity, _Building);

  function BookCity() {
    _classCallCheck(this, BookCity);

    return _possibleConstructorReturn(this, _getPrototypeOf(BookCity).call(this, "图书城", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(BookCity, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_3__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_3__["BuffRange"].Targets, new _School__WEBPACK_IMPORTED_MODULE_1__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_3__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_3__["BuffRange"].Targets, new _PaperMill__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return BookCity;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (BookCity);

/***/ }),

/***/ "./src/js/Builds/Bungalow.js":
/*!***********************************!*\
  !*** ./src/js/Builds/Bungalow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Bungalow =
/*#__PURE__*/
function (_Building) {
  _inherits(Bungalow, _Building);

  function Bungalow() {
    _classCallCheck(this, Bungalow);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bungalow).call(this, "平房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.1));
  }

  _createClass(Bungalow, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, 0.2));
    }
  }]);

  return Bungalow;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Bungalow);

/***/ }),

/***/ "./src/js/Builds/BusinessCenter.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/BusinessCenter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _GardenHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GardenHouse */ "./src/js/Builds/GardenHouse.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var BusinessCenter =
/*#__PURE__*/
function (_Building) {
  _inherits(BusinessCenter, _Building);

  function BusinessCenter() {
    _classCallCheck(this, BusinessCenter);

    return _possibleConstructorReturn(this, _getPrototypeOf(BusinessCenter).call(this, "商贸中心", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.022));
  }

  _createClass(BusinessCenter, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _GardenHouse__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return BusinessCenter;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (BusinessCenter);

/***/ }),

/***/ "./src/js/Builds/Chalet.js":
/*!*********************************!*\
  !*** ./src/js/Builds/Chalet.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _WoodFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WoodFactory */ "./src/js/Builds/WoodFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Chalet =
/*#__PURE__*/
function (_Building) {
  _inherits(Chalet, _Building);

  function Chalet() {
    _classCallCheck(this, Chalet);

    return _possibleConstructorReturn(this, _getPrototypeOf(Chalet).call(this, "木屋", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(Chalet, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _WoodFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return Chalet;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Chalet);

/***/ }),

/***/ "./src/js/Builds/ChineseSmallBuilding.js":
/*!***********************************************!*\
  !*** ./src/js/Builds/ChineseSmallBuilding.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ChineseSmallBuilding =
/*#__PURE__*/
function (_Building) {
  _inherits(ChineseSmallBuilding, _Building);

  function ChineseSmallBuilding() {
    _classCallCheck(this, ChineseSmallBuilding);

    return _possibleConstructorReturn(this, _getPrototypeOf(ChineseSmallBuilding).call(this, "中式小楼", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.4));
  }

  _createClass(ChineseSmallBuilding, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Residence, 0.15));
    }
  }]);

  return ChineseSmallBuilding;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ChineseSmallBuilding);

/***/ }),

/***/ "./src/js/Builds/ClothingStore.js":
/*!****************************************!*\
  !*** ./src/js/Builds/ClothingStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _TextileMill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextileMill */ "./src/js/Builds/TextileMill.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ClothingStore =
/*#__PURE__*/
function (_Building) {
  _inherits(ClothingStore, _Building);

  function ClothingStore() {
    _classCallCheck(this, ClothingStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClothingStore).call(this, "服装店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(ClothingStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _TextileMill__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return ClothingStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ClothingStore);

/***/ }),

/***/ "./src/js/Builds/ConvenienceStore.js":
/*!*******************************************!*\
  !*** ./src/js/Builds/ConvenienceStore.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _Residential__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Residential */ "./src/js/Builds/Residential.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ConvenienceStore =
/*#__PURE__*/
function (_Building) {
  _inherits(ConvenienceStore, _Building);

  function ConvenienceStore() {
    _classCallCheck(this, ConvenienceStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConvenienceStore).call(this, "便利店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(ConvenienceStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _Residential__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return ConvenienceStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (ConvenienceStore);

/***/ }),

/***/ "./src/js/Builds/FolkFood.js":
/*!***********************************!*\
  !*** ./src/js/Builds/FolkFood.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SkyVilla__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SkyVilla */ "./src/js/Builds/SkyVilla.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FolkFood =
/*#__PURE__*/
function (_Building) {
  _inherits(FolkFood, _Building);

  function FolkFood() {
    _classCallCheck(this, FolkFood);

    return _possibleConstructorReturn(this, _getPrototypeOf(FolkFood).call(this, "民食斋", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.52));
  }

  _createClass(FolkFood, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SkyVilla__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
    }
  }]);

  return FolkFood;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (FolkFood);

/***/ }),

/***/ "./src/js/Builds/FoodFactory.js":
/*!**************************************!*\
  !*** ./src/js/Builds/FoodFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FoodFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(FoodFactory, _Building);

  function FoodFactory() {
    _classCallCheck(this, FoodFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(FoodFactory).call(this, "食品厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(FoodFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return FoodFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (FoodFactory);

/***/ }),

/***/ "./src/js/Builds/GardenHouse.js":
/*!**************************************!*\
  !*** ./src/js/Builds/GardenHouse.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BusinessCenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BusinessCenter */ "./src/js/Builds/BusinessCenter.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GardenHouse =
/*#__PURE__*/
function (_Building) {
  _inherits(GardenHouse, _Building);

  function GardenHouse() {
    _classCallCheck(this, GardenHouse);

    return _possibleConstructorReturn(this, _getPrototypeOf(GardenHouse).call(this, "花园洋房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.022));
  }

  _createClass(GardenHouse, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BusinessCenter__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return GardenHouse;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (GardenHouse);

/***/ }),

/***/ "./src/js/Builds/GasStation.js":
/*!*************************************!*\
  !*** ./src/js/Builds/GasStation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PeoplesOil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PeoplesOil */ "./src/js/Builds/PeoplesOil.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var GasStation =
/*#__PURE__*/
function (_Building) {
  _inherits(GasStation, _Building);

  function GasStation() {
    _classCallCheck(this, GasStation);

    return _possibleConstructorReturn(this, _getPrototypeOf(GasStation).call(this, "加油站", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.204));
  }

  _createClass(GasStation, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PeoplesOil__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 0.5));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
    }
  }]);

  return GasStation;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (GasStation);

/***/ }),

/***/ "./src/js/Builds/HardwareStore.js":
/*!****************************************!*\
  !*** ./src/js/Builds/HardwareStore.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PartsFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartsFactory */ "./src/js/Builds/PartsFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HardwareStore =
/*#__PURE__*/
function (_Building) {
  _inherits(HardwareStore, _Building);

  function HardwareStore() {
    _classCallCheck(this, HardwareStore);

    return _possibleConstructorReturn(this, _getPrototypeOf(HardwareStore).call(this, "五金店", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(HardwareStore, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PartsFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return HardwareStore;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (HardwareStore);

/***/ }),

/***/ "./src/js/Builds/MediaVoice.js":
/*!*************************************!*\
  !*** ./src/js/Builds/MediaVoice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MediaVoice =
/*#__PURE__*/
function (_Building) {
  _inherits(MediaVoice, _Building);

  function MediaVoice() {
    _classCallCheck(this, MediaVoice);

    return _possibleConstructorReturn(this, _getPrototypeOf(MediaVoice).call(this, "媒体之声", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1.615));
  }

  _createClass(MediaVoice, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, 0.05));
    }
  }]);

  return MediaVoice;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (MediaVoice);

/***/ }),

/***/ "./src/js/Builds/PaperMill.js":
/*!************************************!*\
  !*** ./src/js/Builds/PaperMill.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BookCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCity */ "./src/js/Builds/BookCity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PaperMill =
/*#__PURE__*/
function (_Building) {
  _inherits(PaperMill, _Building);

  function PaperMill() {
    _classCallCheck(this, PaperMill);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaperMill).call(this, "造纸厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PaperMill, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BookCity__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return PaperMill;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PaperMill);

/***/ }),

/***/ "./src/js/Builds/PartsFactory.js":
/*!***************************************!*\
  !*** ./src/js/Builds/PartsFactory.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _HardwareStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HardwareStore */ "./src/js/Builds/HardwareStore.js");
/* harmony import */ var _TencentMachinery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TencentMachinery */ "./src/js/Builds/TencentMachinery.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var PartsFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(PartsFactory, _Building);

  function PartsFactory() {
    _classCallCheck(this, PartsFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartsFactory).call(this, "零件厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PartsFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _HardwareStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _TencentMachinery__WEBPACK_IMPORTED_MODULE_3__["default"]().BuildingName, 0.5));
    }
  }]);

  return PartsFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PartsFactory);

/***/ }),

/***/ "./src/js/Builds/PeoplesOil.js":
/*!*************************************!*\
  !*** ./src/js/Builds/PeoplesOil.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _GasStation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GasStation */ "./src/js/Builds/GasStation.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var PeoplesOil =
/*#__PURE__*/
function (_Building) {
  _inherits(PeoplesOil, _Building);

  function PeoplesOil() {
    _classCallCheck(this, PeoplesOil);

    return _possibleConstructorReturn(this, _getPrototypeOf(PeoplesOil).call(this, "人民石油", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(PeoplesOil, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _GasStation__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
    }
  }]);

  return PeoplesOil;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PeoplesOil);

/***/ }),

/***/ "./src/js/Builds/PowerPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/PowerPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PowerPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(PowerPlant, _Building);

  function PowerPlant() {
    _classCallCheck(this, PowerPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(PowerPlant).call(this, "电厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.18));
  }

  _createClass(PowerPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.3)); //电厂buff比较特殊，是0.2/0.5/0.8/1.1/1.4
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      return _get(_getPrototypeOf(PowerPlant.prototype), "getBuffValue", this).call(this, buff) - 0.1;
    }
  }]);

  return PowerPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (PowerPlant);

/***/ }),

/***/ "./src/js/Builds/Residential.js":
/*!**************************************!*\
  !*** ./src/js/Builds/Residential.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _ConvenienceStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConvenienceStore */ "./src/js/Builds/ConvenienceStore.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Residential =
/*#__PURE__*/
function (_Building) {
  _inherits(Residential, _Building);

  function Residential() {
    _classCallCheck(this, Residential);

    return _possibleConstructorReturn(this, _getPrototypeOf(Residential).call(this, "居民楼", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(Residential, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _ConvenienceStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return Residential;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (Residential);

/***/ }),

/***/ "./src/js/Builds/RevivalMansion.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/RevivalMansion.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RevivalMansion =
/*#__PURE__*/
function (_Building) {
  _inherits(RevivalMansion, _Building);

  function RevivalMansion() {
    _classCallCheck(this, RevivalMansion);

    return _possibleConstructorReturn(this, _getPrototypeOf(RevivalMansion).call(this, "复兴公馆", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.672));
  }

  _createClass(RevivalMansion, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 0.1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.1));
    }
  }]);

  return RevivalMansion;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (RevivalMansion);

/***/ }),

/***/ "./src/js/Builds/School.js":
/*!*********************************!*\
  !*** ./src/js/Builds/School.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _BookCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCity */ "./src/js/Builds/BookCity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var School =
/*#__PURE__*/
function (_Building) {
  _inherits(School, _Building);

  function School() {
    _classCallCheck(this, School);

    return _possibleConstructorReturn(this, _getPrototypeOf(School).call(this, "学校", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(School, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _BookCity__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return School;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (School);

/***/ }),

/***/ "./src/js/Builds/SkyVilla.js":
/*!***********************************!*\
  !*** ./src/js/Builds/SkyVilla.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _FolkFood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolkFood */ "./src/js/Builds/FolkFood.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SkyVilla =
/*#__PURE__*/
function (_Building) {
  _inherits(SkyVilla, _Building);

  function SkyVilla() {
    _classCallCheck(this, SkyVilla);

    return _possibleConstructorReturn(this, _getPrototypeOf(SkyVilla).call(this, "空中别墅", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.52));
  }

  _createClass(SkyVilla, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _FolkFood__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
    }
  }]);

  return SkyVilla;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SkyVilla);

/***/ }),

/***/ "./src/js/Builds/SmallApartment.js":
/*!*****************************************!*\
  !*** ./src/js/Builds/SmallApartment.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var SmallApartment =
/*#__PURE__*/
function (_Building) {
  _inherits(SmallApartment, _Building);

  function SmallApartment() {
    _classCallCheck(this, SmallApartment);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallApartment).call(this, "小型公寓", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.18));
  }

  _createClass(SmallApartment, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Supply, 0.15));
    }
  }, {
    key: "getBuffValue",
    value: function getBuffValue(buff) {
      //TODO:这里的公式可能有错误
      return _get(_getPrototypeOf(SmallApartment.prototype), "getBuffValue", this).call(this, buff) - 0.05;
    }
  }]);

  return SmallApartment;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SmallApartment);

/***/ }),

/***/ "./src/js/Builds/SteelPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/SteelPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteelStructureHouse */ "./src/js/Builds/SteelStructureHouse.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SteelPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(SteelPlant, _Building);

  function SteelPlant() {
    _classCallCheck(this, SteelPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(SteelPlant).call(this, "钢铁厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(SteelPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, 0.15));
    }
  }]);

  return SteelPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SteelPlant);

/***/ }),

/***/ "./src/js/Builds/SteelStructureHouse.js":
/*!**********************************************!*\
  !*** ./src/js/Builds/SteelStructureHouse.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _SteelPlant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SteelPlant */ "./src/js/Builds/SteelPlant.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SteelStructureHouse =
/*#__PURE__*/
function (_Building) {
  _inherits(SteelStructureHouse, _Building);

  function SteelStructureHouse() {
    _classCallCheck(this, SteelStructureHouse);

    return _possibleConstructorReturn(this, _getPrototypeOf(SteelStructureHouse).call(this, "钢结构房", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1));
  }

  _createClass(SteelStructureHouse, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _SteelPlant__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return SteelStructureHouse;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (SteelStructureHouse);

/***/ }),

/***/ "./src/js/Builds/TalentApartment.js":
/*!******************************************!*\
  !*** ./src/js/Builds/TalentApartment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TalentApartment =
/*#__PURE__*/
function (_Building) {
  _inherits(TalentApartment, _Building);

  function TalentApartment() {
    _classCallCheck(this, TalentApartment);

    return _possibleConstructorReturn(this, _getPrototypeOf(TalentApartment).call(this, "人才公寓", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence, 1.4));
  }

  _createClass(TalentApartment, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Online, 0.2));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Industrial, 0.15));
    }
  }]);

  return TalentApartment;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TalentApartment);

/***/ }),

/***/ "./src/js/Builds/TencentMachinery.js":
/*!*******************************************!*\
  !*** ./src/js/Builds/TencentMachinery.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _PartsFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PartsFactory */ "./src/js/Builds/PartsFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TencentMachinery =
/*#__PURE__*/
function (_Building) {
  _inherits(TencentMachinery, _Building);

  function TencentMachinery() {
    _classCallCheck(this, TencentMachinery);

    return _possibleConstructorReturn(this, _getPrototypeOf(TencentMachinery).call(this, "企鹅机械", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Legendary, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.33));
  }

  _createClass(TencentMachinery, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _PartsFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Global, 0.1));
    }
  }]);

  return TencentMachinery;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TencentMachinery);

/***/ }),

/***/ "./src/js/Builds/TextileMill.js":
/*!**************************************!*\
  !*** ./src/js/Builds/TextileMill.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _ClothingStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClothingStore */ "./src/js/Builds/ClothingStore.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TextileMill =
/*#__PURE__*/
function (_Building) {
  _inherits(TextileMill, _Building);

  function TextileMill() {
    _classCallCheck(this, TextileMill);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextileMill).call(this, "纺织厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Rare, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(TextileMill, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _ClothingStore__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Business, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Business, 0.15));
    }
  }]);

  return TextileMill;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (TextileMill);

/***/ }),

/***/ "./src/js/Builds/VegetableMarket.js":
/*!******************************************!*\
  !*** ./src/js/Builds/VegetableMarket.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _FoodFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FoodFactory */ "./src/js/Builds/FoodFactory.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var VegetableMarket =
/*#__PURE__*/
function (_Building) {
  _inherits(VegetableMarket, _Building);

  function VegetableMarket() {
    _classCallCheck(this, VegetableMarket);

    return _possibleConstructorReturn(this, _getPrototypeOf(VegetableMarket).call(this, "菜市场", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business, 1));
  }

  _createClass(VegetableMarket, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _FoodFactory__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return VegetableMarket;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (VegetableMarket);

/***/ }),

/***/ "./src/js/Builds/WaterPlant.js":
/*!*************************************!*\
  !*** ./src/js/Builds/WaterPlant.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WaterPlant =
/*#__PURE__*/
function (_Building) {
  _inherits(WaterPlant, _Building);

  function WaterPlant() {
    _classCallCheck(this, WaterPlant);

    return _possibleConstructorReturn(this, _getPrototypeOf(WaterPlant).call(this, "水厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1.26));
  }

  _createClass(WaterPlant, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, _Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Offline, 1));
    }
  }]);

  return WaterPlant;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (WaterPlant);

/***/ }),

/***/ "./src/js/Builds/WoodFactory.js":
/*!**************************************!*\
  !*** ./src/js/Builds/WoodFactory.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Building */ "./src/js/Building.js");
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Buff */ "./src/js/Buff.js");
/* harmony import */ var _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WoodFactory =
/*#__PURE__*/
function (_Building) {
  _inherits(WoodFactory, _Building);

  function WoodFactory() {
    _classCallCheck(this, WoodFactory);

    return _possibleConstructorReturn(this, _getPrototypeOf(WoodFactory).call(this, "木材厂", _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"].Common, _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial, 1));
  }

  _createClass(WoodFactory, [{
    key: "initBuffs",
    value: function initBuffs() {
      this.buffs.push(new _Buff__WEBPACK_IMPORTED_MODULE_1__["Buff"](_Buff__WEBPACK_IMPORTED_MODULE_1__["BuffRange"].Targets, new _VegetableMarket__WEBPACK_IMPORTED_MODULE_2__["default"]().BuildingName, 1));
    }
  }]);

  return WoodFactory;
}(_Building__WEBPACK_IMPORTED_MODULE_0__["Building"]);

/* harmony default export */ __webpack_exports__["default"] = (WoodFactory);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Building */ "./src/js/Building.js");
/* harmony import */ var _Builds_Chalet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Builds/Chalet */ "./src/js/Builds/Chalet.js");
/* harmony import */ var _Builds_SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Builds/SteelStructureHouse */ "./src/js/Builds/SteelStructureHouse.js");
/* harmony import */ var _Builds_Bungalow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Builds/Bungalow */ "./src/js/Builds/Bungalow.js");
/* harmony import */ var _Builds_SmallApartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Builds/SmallApartment */ "./src/js/Builds/SmallApartment.js");
/* harmony import */ var _Builds_Residential__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Builds/Residential */ "./src/js/Builds/Residential.js");
/* harmony import */ var _Builds_TalentApartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Builds/TalentApartment */ "./src/js/Builds/TalentApartment.js");
/* harmony import */ var _Builds_GardenHouse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Builds/GardenHouse */ "./src/js/Builds/GardenHouse.js");
/* harmony import */ var _Builds_ChineseSmallBuilding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Builds/ChineseSmallBuilding */ "./src/js/Builds/ChineseSmallBuilding.js");
/* harmony import */ var _Builds_SkyVilla__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Builds/SkyVilla */ "./src/js/Builds/SkyVilla.js");
/* harmony import */ var _Builds_RevivalMansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Builds/RevivalMansion */ "./src/js/Builds/RevivalMansion.js");
/* harmony import */ var _Builds_ConvenienceStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Builds/ConvenienceStore */ "./src/js/Builds/ConvenienceStore.js");
/* harmony import */ var _Builds_School__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Builds/School */ "./src/js/Builds/School.js");
/* harmony import */ var _Builds_ClothingStore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Builds/ClothingStore */ "./src/js/Builds/ClothingStore.js");
/* harmony import */ var _Builds_HardwareStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Builds/HardwareStore */ "./src/js/Builds/HardwareStore.js");
/* harmony import */ var _Builds_VegetableMarket__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Builds/VegetableMarket */ "./src/js/Builds/VegetableMarket.js");
/* harmony import */ var _Builds_BookCity__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Builds/BookCity */ "./src/js/Builds/BookCity.js");
/* harmony import */ var _Builds_BusinessCenter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Builds/BusinessCenter */ "./src/js/Builds/BusinessCenter.js");
/* harmony import */ var _Builds_GasStation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Builds/GasStation */ "./src/js/Builds/GasStation.js");
/* harmony import */ var _Builds_FolkFood__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Builds/FolkFood */ "./src/js/Builds/FolkFood.js");
/* harmony import */ var _Builds_MediaVoice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Builds/MediaVoice */ "./src/js/Builds/MediaVoice.js");
/* harmony import */ var _Builds_WoodFactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Builds/WoodFactory */ "./src/js/Builds/WoodFactory.js");
/* harmony import */ var _Builds_PaperMill__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Builds/PaperMill */ "./src/js/Builds/PaperMill.js");
/* harmony import */ var _Builds_WaterPlant__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Builds/WaterPlant */ "./src/js/Builds/WaterPlant.js");
/* harmony import */ var _Builds_PowerPlant__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Builds/PowerPlant */ "./src/js/Builds/PowerPlant.js");
/* harmony import */ var _Builds_FoodFactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Builds/FoodFactory */ "./src/js/Builds/FoodFactory.js");
/* harmony import */ var _Builds_SteelPlant__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Builds/SteelPlant */ "./src/js/Builds/SteelPlant.js");
/* harmony import */ var _Builds_TextileMill__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Builds/TextileMill */ "./src/js/Builds/TextileMill.js");
/* harmony import */ var _Builds_PartsFactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Builds/PartsFactory */ "./src/js/Builds/PartsFactory.js");
/* harmony import */ var _Builds_TencentMachinery__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Builds/TencentMachinery */ "./src/js/Builds/TencentMachinery.js");
/* harmony import */ var _Builds_PeoplesOil__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Builds/PeoplesOil */ "./src/js/Builds/PeoplesOil.js");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _Buff__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Buff */ "./src/js/Buff.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


































var storage_key = "lintx-jgm-calculator-config";
var worker = undefined;
var app = new Vue({
  el: "#app",
  data: function data() {
    var config = null;
    var storage = localStorage.getItem(storage_key);

    if (storage !== null) {
      try {
        config = JSON.parse(storage);
      } catch (e) {}
    }

    var data = {
      rarity: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingRarity"],
      buildings: [{
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Residence,
        list: [new _Builds_Chalet__WEBPACK_IMPORTED_MODULE_1__["default"](), new _Builds_SteelStructureHouse__WEBPACK_IMPORTED_MODULE_2__["default"](), new _Builds_Bungalow__WEBPACK_IMPORTED_MODULE_3__["default"](), new _Builds_SmallApartment__WEBPACK_IMPORTED_MODULE_4__["default"](), new _Builds_Residential__WEBPACK_IMPORTED_MODULE_5__["default"](), new _Builds_TalentApartment__WEBPACK_IMPORTED_MODULE_6__["default"](), new _Builds_GardenHouse__WEBPACK_IMPORTED_MODULE_7__["default"](), new _Builds_ChineseSmallBuilding__WEBPACK_IMPORTED_MODULE_8__["default"](), new _Builds_SkyVilla__WEBPACK_IMPORTED_MODULE_9__["default"](), new _Builds_RevivalMansion__WEBPACK_IMPORTED_MODULE_10__["default"]()]
      }, {
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Business,
        list: [new _Builds_ConvenienceStore__WEBPACK_IMPORTED_MODULE_11__["default"](), new _Builds_School__WEBPACK_IMPORTED_MODULE_12__["default"](), new _Builds_ClothingStore__WEBPACK_IMPORTED_MODULE_13__["default"](), new _Builds_HardwareStore__WEBPACK_IMPORTED_MODULE_14__["default"](), new _Builds_VegetableMarket__WEBPACK_IMPORTED_MODULE_15__["default"](), new _Builds_BookCity__WEBPACK_IMPORTED_MODULE_16__["default"](), new _Builds_BusinessCenter__WEBPACK_IMPORTED_MODULE_17__["default"](), new _Builds_GasStation__WEBPACK_IMPORTED_MODULE_18__["default"](), new _Builds_FolkFood__WEBPACK_IMPORTED_MODULE_19__["default"](), new _Builds_MediaVoice__WEBPACK_IMPORTED_MODULE_20__["default"]()]
      }, {
        type: _Building__WEBPACK_IMPORTED_MODULE_0__["BuildingType"].Industrial,
        list: [new _Builds_WoodFactory__WEBPACK_IMPORTED_MODULE_21__["default"](), new _Builds_PaperMill__WEBPACK_IMPORTED_MODULE_22__["default"](), new _Builds_WaterPlant__WEBPACK_IMPORTED_MODULE_23__["default"](), new _Builds_PowerPlant__WEBPACK_IMPORTED_MODULE_24__["default"](), new _Builds_FoodFactory__WEBPACK_IMPORTED_MODULE_25__["default"](), new _Builds_SteelPlant__WEBPACK_IMPORTED_MODULE_26__["default"](), new _Builds_TextileMill__WEBPACK_IMPORTED_MODULE_27__["default"](), new _Builds_PartsFactory__WEBPACK_IMPORTED_MODULE_28__["default"](), new _Builds_TencentMachinery__WEBPACK_IMPORTED_MODULE_29__["default"](), new _Builds_PeoplesOil__WEBPACK_IMPORTED_MODULE_30__["default"]()]
      }],
      buffs: [],
      programs: {
        onlineMoney: {},
        supplyMoney: {},
        supplyRarity: {},
        offlineMoney: {}
      },
      progress: 0,
      calculationing: false
    };
    Object.keys(_Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"]).forEach(function (key) {
      var source = _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"][key];

      if (source === _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffSource"].Building) {
        return;
      }

      var buff = {
        type: source,
        list: []
      };
      Object.keys(_Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"]).forEach(function (rkey) {
        var range = _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"][rkey];

        if (range === _Buff__WEBPACK_IMPORTED_MODULE_32__["BuffRange"].Targets) {
          return;
        }

        buff.list.push(new _Buff__WEBPACK_IMPORTED_MODULE_32__["Buff"](range, range, 0));
      });
      data.buffs.push(buff);
    });
    data.buildings.forEach(function (building) {
      building.list.forEach(function (item) {
        item.initBuffs();
      });
    });

    if (config !== null && _typeof(config) === "object") {
      if (config.hasOwnProperty("building")) {
        var building = config.building;

        try {
          building.forEach(function (item) {
            data.buildings.forEach(function (dbs) {
              dbs.list.forEach(function (db) {
                if (db.BuildingName === item.building) {
                  db.star = item.star;
                  db.quest = item.quest;
                }
              });
            });
          });
        } catch (e) {}
      }

      if (config.hasOwnProperty("buff")) {
        var buffs = config.buff;

        try {
          buffs.forEach(function (buffc) {
            buffc.list.forEach(function (b) {
              data.buffs.forEach(function (dbuffc) {
                if (dbuffc.type === buffc.type) {
                  dbuffc.list.forEach(function (db) {
                    if (db.range === b.range) {
                      db.buff = b.buff;
                    }
                  });
                }
              });
            });
          });
        } catch (e) {}
      }
    }

    return data;
  },
  methods: {
    calculation: function calculation() {
      this.calculationing = true; //拿出已有的建筑

      var list = [];
      this.buildings.forEach(function (cls) {
        var building = {
          type: cls.type,
          list: []
        };
        cls.list.forEach(function (item) {
          if (Number(item.star) > 0) {
            building.list.push({
              star: Number(item.star),
              quest: item.quest,
              name: item.BuildingName
            });
          }
        });
        list.push(building);
      });

      if (typeof Worker !== "undefined") {
        worker = new Worker("static/worker.js");

        var _self = this;

        worker.onmessage = function (e) {
          var data = e.data;

          if (data === "done") {
            _self.calculationing = false;
            worker.terminate();
            worker = undefined;
          } else {
            var mode = data.mode;

            if (mode === "result") {
              _self.programs = data.result;
            } else if (mode === "progress") {
              _self.progress = data.progress;
            }
          }
        };

        worker.postMessage({
          list: list,
          buff: this.buffs
        });
      } else {//抱歉! Web Worker 不支持
      }
    },
    save: function save() {
      var config = {
        building: [],
        buff: []
      };
      this.buildings.forEach(function (cls) {
        cls.list.forEach(function (item) {
          if (Number(item.star) > 0) {
            config.building.push({
              building: item.BuildingName,
              star: Number(item.star),
              quest: item.quest
            });
          }
        });
      });
      this.buffs.forEach(function (source) {
        var b = {
          type: source.type,
          list: []
        };
        source.list.forEach(function (buff) {
          b.list.push({
            range: buff.range,
            buff: buff.buff
          });
        });
        config.buff.push(b);
      });
      localStorage.setItem(storage_key, JSON.stringify(config));
    },
    clear: function clear() {
      localStorage.removeItem(storage_key);
      Object.assign(this.$data, this.$options.data());
    },
    stop: function stop() {
      try {
        worker.terminate();
        worker = undefined;
        this.calculationing = false;
      } catch (e) {}
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map