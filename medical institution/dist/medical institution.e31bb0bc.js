// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pregled.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pregled =
/*#__PURE__*/
function () {
  function Pregled(datumIVreme, pacijent, doktor) {
    _classCallCheck(this, Pregled);

    //abstract
    if (this.contructor === Pregled) {
      throw new Error("Ne sme se instancirati klasa Pregled");
    } //private fields


    var _datumIVreme = datumIVreme;
    var _pacijent = pacijent;
    var _doktor = doktor;

    this.setDatumIVreme = function (datum) {
      _datumIVreme = datum;
    };

    this.getDatumIVreme = function () {
      return _datumIVreme;
    };

    this.setPacijent = function (pacijent) {
      _pacijent = pacijent;
    };

    this.getPacijent = function () {
      return _pacijent;
    };

    this.setDoktor = function (doktor) {
      _doktor = doktor;
    };

    this.getDoktor = function () {
      return _doktor;
    };
  }

  _createClass(Pregled, [{
    key: "izvrsi",
    value: function izvrsi() {
      console.log("");
    }
  }]);

  return Pregled;
}();

var _default = Pregled;
exports.default = _default;
},{}],"dateFormatter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function format(date) {
  return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
}

var _default = format;
exports.default = _default;
},{}],"logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateFormatter = _interopRequireDefault(require("./dateFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function logg(message) {
  console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] " + message);
}

var _default = logg;
exports.default = _default;
},{"./dateFormatter":"dateFormatter.js"}],"pregledPritisak.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pregled = _interopRequireDefault(require("./pregled"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PregledPritisak =
/*#__PURE__*/
function (_Pregled) {
  _inherits(PregledPritisak, _Pregled);

  function PregledPritisak(datum, pacijent, doktor) {
    var _this;

    _classCallCheck(this, PregledPritisak);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PregledPritisak).call(this, datum, pacijent, doktor)); //private fields

    var _gVrednost = null;
    var _dVrednost = null;
    var _puls = null; //getters and setters

    _this.setGVrednost = function (gVrednost) {
      _gVrednost = gVrednost;
    };

    _this.getGVrednost = function () {
      return _gVrednost;
    };

    _this.setDVrednost = function (dVrednost) {
      _dVrednost = dVrednost;
    };

    _this.getDVrednost = function () {
      return _dVrednost;
    };

    _this.setPuls = function (puls) {
      _puls = puls;
    };

    _this.getPuls = function () {
      return _puls;
    };

    return _this;
  }

  _createClass(PregledPritisak, [{
    key: "izvrsi",
    value: function izvrsi() {
      this.setDVrednost(Math.random() * 100);
      this.setGVrednost(Math.random() * 100);
      this.setPuls(Math.random() * 100);
      (0, _logger.default)("Pacijent " + this.getPacijent().getIme() + " obavlja laboratorijski pregled za merenje krvnog pritiska. Donja vrednost:" + this.getDVrednost() + " gornja vrednost: " + this.getGVrednost() + " puls: " + this.getPuls());
    }
  }]);

  return PregledPritisak;
}(_pregled.default);

var _default = PregledPritisak;
exports.default = _default;
},{"./pregled":"pregled.js","./logger":"logger.js"}],"PregledSecer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pregled = _interopRequireDefault(require("./pregled"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PregledSecer =
/*#__PURE__*/
function (_Pregled) {
  _inherits(PregledSecer, _Pregled);

  function PregledSecer(datum, pacijent, doktor) {
    var _this;

    _classCallCheck(this, PregledSecer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PregledSecer).call(this, datum, pacijent, doktor)); //private fields

    var _vrednost = null;
    var _vremePoslednjegObroka = null; //getters and setters

    _this.setVrednost = function (vrednost) {
      _vrednost = vrednost;
    };

    _this.getVrednost = function () {
      return _vrednost;
    };

    _this.setVremePoslednjegObroka = function (vremePoslednjegObroka) {
      _vremePoslednjegObroka = vremePoslednjegObroka;
    };

    _this.getVremePoslednjegObroka = function () {
      return _vremePoslednjegObroka;
    };

    return _this;
  }

  _createClass(PregledSecer, [{
    key: "izvrsi",
    value: function izvrsi() {
      this.setVrednost(Math.random() * 100);
      this.setVremePoslednjegObroka(new Date());
      (0, _logger.default)("Pacijent " + this.getIme() + " obavlja laboratorijski pregled za merenje nivoa secera u krvi. vrednost:" + pregled.getVrednost() + " poslednji obrok: " + format(pregled.getVremePoslednjegObroka()));
    }
  }]);

  return PregledSecer;
}(_pregled.default);

var _default = PregledSecer;
exports.default = _default;
},{"./pregled":"pregled.js","./logger":"logger.js"}],"pregledHolesterol.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pregled = _interopRequireDefault(require("./pregled"));

var _logger = _interopRequireDefault(require("./logger"));

var _dateFormatter = _interopRequireDefault(require("./dateFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PregledHolesterol =
/*#__PURE__*/
function (_Pregled) {
  _inherits(PregledHolesterol, _Pregled);

  function PregledHolesterol(datum, pacijent, doktor) {
    var _this;

    _classCallCheck(this, PregledHolesterol);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PregledHolesterol).call(this, datum, pacijent, doktor)); //private fields

    var _vrednost = null;
    var _vremePoslednjegObroka = null; //getters and setters

    _this.setVrednost = function (vrednost) {
      _vrednost = vrednost;
    };

    _this.getVrednost = function () {
      return _vrednost;
    };

    _this.setVremePoslednjegObroka = function (vremePoslednjegObroka) {
      _vremePoslednjegObroka = vremePoslednjegObroka;
    };

    _this.getVremePoslednjegObroka = function () {
      return _vremePoslednjegObroka;
    };

    return _this;
  }

  _createClass(PregledHolesterol, [{
    key: "izvrsi",
    value: function izvrsi() {
      this.setVrednost(Math.random() * 100);
      this.setVremePoslednjegObroka(new Date());
      (0, _logger.default)("Pacijent " + this.getPacijent().getIme() + " obavlja laboratorijski pregled za merenje holesterola. vrednost:" + this.getVrednost() + " poslednji obrok: " + (0, _dateFormatter.default)(this.getVremePoslednjegObroka()));
    }
  }]);

  return PregledHolesterol;
}(_pregled.default);

var _default = PregledHolesterol;
exports.default = _default;
},{"./pregled":"pregled.js","./logger":"logger.js","./dateFormatter":"dateFormatter.js"}],"pacijent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pregledPritisak = _interopRequireDefault(require("./pregledPritisak"));

var _PregledSecer = _interopRequireDefault(require("./PregledSecer"));

var _pregledHolesterol = _interopRequireDefault(require("./pregledHolesterol"));

var _dateFormatter = _interopRequireDefault(require("./dateFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pacijent =
/*#__PURE__*/
function () {
  function Pacijent(ime, prezime, jmbg, brojKartona) {
    _classCallCheck(this, Pacijent);

    //private fields
    var _ime = ime;
    var _prezime = prezime;
    var _jmbg = jmbg;
    var _brojKartona = brojKartona;
    var _doktor = null; //getters setters

    this.setIme = function (ime) {
      _ime = ime;
    };

    this.getIme = function () {
      return _ime;
    };

    this.setPrezime = function (prezime) {
      _prezime = prezime;
    };

    this.getPrezime = function () {
      return _prezime;
    };

    this.setJmbg = function (jmbg) {
      _jbmg = jmbg;
    };

    this.getJmbg = function () {
      return _jmbg;
    };

    this.setBrojKartona = function (brojKartona) {
      _brojKartona = brojKartona;
    };

    this.getBrojKartona = function () {
      return _brojKartona;
    };

    this.setDoktor = function (doktor) {
      _doktor = doktor;
    };

    this.getDoktor = function () {
      return _doktor;
    };

    console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Kreiran pacijent " + _ime);
  }

  _createClass(Pacijent, [{
    key: "izaberiDoktora",
    value: function izaberiDoktora(doktor) {
      console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Pacijent " + this.getIme() + " bira doktora " + doktor.getIme() + " za svog izabranog lekara.");
      this.setDoktor(doktor);
      doktor.addPacijent(this);
    }
  }, {
    key: "izvrsiPregled",
    value: function izvrsiPregled(pregled) {
      pregled.izvrsi();
    }
  }]);

  return Pacijent;
}();

var _default = Pacijent;
exports.default = _default;
},{"./pregledPritisak":"pregledPritisak.js","./PregledSecer":"PregledSecer.js","./pregledHolesterol":"pregledHolesterol.js","./dateFormatter":"dateFormatter.js"}],"doktor.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pregledPritisak = _interopRequireDefault(require("./pregledPritisak"));

var _pregledHolesterol = _interopRequireDefault(require("./pregledHolesterol"));

var _PregledSecer = _interopRequireDefault(require("./PregledSecer"));

var _dateFormatter = _interopRequireDefault(require("./dateFormatter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Doktor =
/*#__PURE__*/
function () {
  function Doktor(ime, prezime, specijalnost) {
    _classCallCheck(this, Doktor);

    //private fields
    var _ime = ime;
    var _prezime = prezime;
    var _specijalnost = specijalnost;
    var _pacijenti = []; //getters setters

    this.setIme = function (ime) {
      _ime = ime;
    };

    this.getIme = function () {
      return _ime;
    };

    this.setPrezime = function (prezime) {
      _prezime = prezime;
    };

    this.getPrezime = function () {
      return _prezime;
    };

    this.setSpecijalnost = function (specijalnost) {
      _specijalnost = specijalnost;
    };

    this.getSpecijalnost = function () {
      return _specijalnost;
    };

    this.setPacijenti = function (pacijenti) {
      _pacijenti = pacijenti;
    };

    this.getPacijenti = function () {
      return _pacijenti;
    };

    console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Kreiran doktor " + _ime);
  }

  _createClass(Doktor, [{
    key: "zakaziPregled",
    value: function zakaziPregled(pacijent, tipPregleda, datum) {
      switch (tipPregleda) {
        case "PregledPritisak":
          console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Doktor " + this.getIme() + " zakazuje pregled za merenje krvnog pritiska za pacijenta " + pacijent.getIme());
          return new _pregledPritisak.default(datum, pacijent, this);

        case "PregledSecer":
          console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Doktor " + this.getIme() + " zakazuje pregled za merenje secera u krvi za pacijenta " + pacijent.getIme());
          return new _PregledSecer.default(datum, pacijent, this);

        case "PregledHolesterol":
          console.log("[ " + (0, _dateFormatter.default)(new Date()) + " ] Doktor " + this.getIme() + " zakazuje pregled za merenje holesterola u krvi za pacijenta " + pacijent.getIme());
          return new _pregledHolesterol.default(datum, pacijent, this);
      }
    }
  }, {
    key: "addPacijent",
    value: function addPacijent(pacijent) {
      var pacijenti = this.getPacijenti();
      pacijenti.push(pacijent);
      this.setPacijenti(pacijenti);
    }
  }]);

  return Doktor;
}();

var _default = Doktor;
exports.default = _default;
},{"./pregledPritisak":"pregledPritisak.js","./pregledHolesterol":"pregledHolesterol.js","./PregledSecer":"PregledSecer.js","./dateFormatter":"dateFormatter.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _pacijent = _interopRequireDefault(require("./pacijent"));

var _doktor = _interopRequireDefault(require("./doktor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pacijent = new _pacijent.default("Dragan", "Milankovic", 1231241251, 1);
console.log(pacijent);
var doktor = new _doktor.default("Milan", "Draganovic", "specijalnost");
pacijent.izaberiDoktora(doktor);
var pregledSecer = doktor.zakaziPregled(pacijent, "PregledHolesterol");
var pregledPritisak = doktor.zakaziPregled(pacijent, "PregledPritisak");
pacijent.izvrsiPregled(pregledSecer);
pacijent.izvrsiPregled(pregledPritisak);
},{"./pacijent":"pacijent.js","./doktor":"doktor.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49471" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/medical%20institution.e31bb0bc.js.map