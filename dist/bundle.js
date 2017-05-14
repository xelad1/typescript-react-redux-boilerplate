webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const NAME = 'numberpad'
/* harmony export (immutable) */ __webpack_exports__["NAME"] = NAME;

const ADD_NUMBER = 'ADD_NUMBER'
/* harmony export (immutable) */ __webpack_exports__["ADD_NUMBER"] = ADD_NUMBER;

const DELETE_NUMBER = 'WHEEEEE'
/* harmony export (immutable) */ __webpack_exports__["DELETE_NUMBER"] = DELETE_NUMBER;

const ADD_NUMBER_ROW = 'ADD_NUMBER_ROW'
/* harmony export (immutable) */ __webpack_exports__["ADD_NUMBER_ROW"] = ADD_NUMBER_ROW;

const ADD = 'ADD'
/* harmony export (immutable) */ __webpack_exports__["ADD"] = ADD;

const SUBTRACT = 'SUBTRACT'
/* harmony export (immutable) */ __webpack_exports__["SUBTRACT"] = SUBTRACT;

const MULTIPLY = 'MULTIPLY'
/* harmony export (immutable) */ __webpack_exports__["MULTIPLY"] = MULTIPLY;

const DIVIDE = 'DIVIDE'
/* harmony export (immutable) */ __webpack_exports__["DIVIDE"] = DIVIDE;

const NEGATIVEPOSITIVE = 'NEGATIVEPOSITIVE'
/* harmony export (immutable) */ __webpack_exports__["NEGATIVEPOSITIVE"] = NEGATIVEPOSITIVE;

const CLEAR = 'CLEAR'
/* harmony export (immutable) */ __webpack_exports__["CLEAR"] = CLEAR;

const EQUALS = 'EQUALS'
/* harmony export (immutable) */ __webpack_exports__["EQUALS"] = EQUALS;

const PERCENT = 'PERCENT'
/* harmony export (immutable) */ __webpack_exports__["PERCENT"] = PERCENT;



/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var redux_1 = __webpack_require__(19);
var react_redux_1 = __webpack_require__(29);
var Calculator_1 = __webpack_require__(207);
var CalculatorDisplay_1 = __webpack_require__(208);
var CalculatorActions = __webpack_require__(248);
var App = function (_a) {
    var todos = _a.todos, actions = _a.actions, display = _a.display;
    return (React.createElement("div", null,
        React.createElement(CalculatorDisplay_1.default, { display: display }),
        React.createElement(Calculator_1.default, { actions: actions })));
};
var mapStateToProps = function (state) { return ({
    todos: state.todos,
    display: state.numberpad
}); };
var mapDispatchToProps = function (dispatch) { return ({
    actions: redux_1.bindActionCreators(CalculatorActions, dispatch)
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);


/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "App.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__numberpad__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__numberpad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__numberpad__);



const rootReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  numberpad: __WEBPACK_IMPORTED_MODULE_1__numberpad___default.a
})

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var Calculator = (function (_super) {
    __extends(Calculator, _super);
    function Calculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calculator.prototype.render = function () {
        var _this = this;
        console.log('this.props', this.props);
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.clear('AC'); } },
                    React.createElement("div", null, "AC")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.negativepositive('+/-'); } },
                    React.createElement("div", null, "+/-")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.percent('%'); } },
                    React.createElement("div", null, "%")),
                React.createElement("button", { className: "buttonRight", onClick: function () { _this.props.actions.divide('/'); } },
                    React.createElement("div", null, "/"))),
            React.createElement("div", null,
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(7); } },
                    React.createElement("div", null, "7")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(8); } },
                    React.createElement("div", null, "8")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(9); } },
                    React.createElement("div", null, "9")),
                React.createElement("button", { className: "buttonRight", onClick: function () { _this.props.actions.multiply('X'); } },
                    React.createElement("div", null, "x"))),
            React.createElement("div", null,
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(4); } },
                    React.createElement("div", null, "4")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(5); } },
                    React.createElement("div", null, "5")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(6); } },
                    React.createElement("div", null, "6")),
                React.createElement("button", { className: "buttonRight", onClick: function () { _this.props.actions.subtract('-'); } },
                    React.createElement("div", null, "-"))),
            React.createElement("div", null,
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(1); } },
                    React.createElement("div", null, "1")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(2); } },
                    React.createElement("div", null, "2")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber(3); } },
                    React.createElement("div", null, "3")),
                React.createElement("button", { className: "buttonRight", onClick: function () { _this.props.actions.add('+'); } },
                    React.createElement("div", null, "+"))),
            React.createElement("div", null,
                React.createElement("button", { className: "zero", onClick: function () { _this.props.actions.addNumber(0); } },
                    React.createElement("div", null, "0")),
                React.createElement("button", { className: "button", onClick: function () { _this.props.actions.addNumber('.'); } },
                    React.createElement("div", null, ".")),
                React.createElement("button", { className: "equals", onClick: function () { _this.props.actions.equals('='); } },
                    React.createElement("div", null, "=")))));
    };
    return Calculator;
}(React.Component));
exports.default = Calculator;


/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Calculator.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
console.log('this', this);
var CalculatorDisplay = (function (_super) {
    __extends(CalculatorDisplay, _super);
    function CalculatorDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalculatorDisplay.prototype.render = function () {
        return (React.createElement("div", { className: "display" },
            React.createElement("div", { className: "displayText" })));
    };
    return CalculatorDisplay;
}(React.Component));
exports.default = CalculatorDisplay;


/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "CalculatorDisplay.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(7);
var react_dom_1 = __webpack_require__(37);
var redux_1 = __webpack_require__(19);
var react_redux_1 = __webpack_require__(29);
var App_1 = __webpack_require__(105);
var reducers_1 = __webpack_require__(107);
var store = redux_1.createStore(reducers_1.default);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_1.default, null)), document.getElementById('root'));


/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ActionTypes_1 = __webpack_require__(104);
var initialState = {
    displayString: '0',
    total: 0,
    entries: [],
    decimal: false,
};
function counter(state, action) {
    if (state === void 0) { state = initialState; }
    if (action === void 0) { action = { type: ' ' }; }
    switch (action.type) {
        case ActionTypes_1.ADD:
            console.log('action inside of ADD reducer', action);
            var tempArrayAdd = state.entries;
            var tempAddDisplay = state.displayString;
            tempArrayAdd.push(tempAddDisplay);
            tempArrayAdd.push('+');
            return __assign({}, state, { entries: tempArrayAdd });
        case ActionTypes_1.SUBTRACT:
            var tempArraySubtract = state.entries;
            var tempSubtractDisplay = state.displayString;
            tempArraySubtract.push(tempSubtractDisplay);
            tempArraySubtract.push('-');
            return __assign({}, state, { entries: tempArraySubtract });
        case ActionTypes_1.MULTIPLY:
            var tempArrayMultiply = state.entries;
            var tempMultiplyDisplay = state.displayString;
            tempArrayMultiply.push(tempMultiplyDisplay);
            tempArrayMultiply.push('*');
            return __assign({}, state, { entries: tempArrayMultiply });
        case ActionTypes_1.DIVIDE:
            var tempArrayDivide = state.entries;
            var tempDivideDisplay = state.displayString;
            tempArrayDivide.push(tempDivideDisplay);
            tempArrayDivide.push('/');
            return __assign({}, state, { entries: tempArrayDivide });
        case ActionTypes_1.EQUALS:
            var tempArrayEquals = state.entries;
            tempArrayEquals.push(state.displayString);
            var nt = Number(tempArrayEquals[0]);
            for (var i = 0; i < tempArrayEquals.length; i++) {
                var next = Number(tempArrayEquals[i + 1]);
                if (tempArrayEquals[i] === '+') {
                    nt += next;
                }
                else if (tempArrayEquals[i] === '-') {
                    nt -= next;
                }
                else if (tempArrayEquals[i] === '*') {
                    nt *= next;
                }
                else if (tempArrayEquals[i] === '/') {
                    nt /= next;
                }
                i++;
            }
            return __assign({}, state, { displayString: nt + "", total: nt, entries: tempArrayEquals });
        case ActionTypes_1.NEGATIVEPOSITIVE:
            return __assign({}, state);
        case ActionTypes_1.CLEAR:
            return __assign({}, state, { displayString: '0', total: 0, entries: [], decimal: false });
        default:
            return state;
    }
}
exports.default = counter;


/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/alexanderdajani/Documents/GitRepos/redux/examples/todomvc/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "numberpad.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["addNumber"] = addNumber;
/* harmony export (immutable) */ __webpack_exports__["deleteNumber"] = deleteNumber;
/* harmony export (immutable) */ __webpack_exports__["addNumberRow"] = addNumberRow;
/* harmony export (immutable) */ __webpack_exports__["add"] = add;
/* harmony export (immutable) */ __webpack_exports__["subtract"] = subtract;
/* harmony export (immutable) */ __webpack_exports__["multiply"] = multiply;
/* harmony export (immutable) */ __webpack_exports__["divide"] = divide;
/* harmony export (immutable) */ __webpack_exports__["negativepositive"] = negativepositive;
/* harmony export (immutable) */ __webpack_exports__["clear"] = clear;
/* harmony export (immutable) */ __webpack_exports__["equals"] = equals;
/* harmony export (immutable) */ __webpack_exports__["percent"] = percent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__ = __webpack_require__(104);


function addNumber(val) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["ADD_NUMBER"], val }
}

function deleteNumber(num) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["DELETE_NUMBER"], num }
}

function addNumberRow(index) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["ADD_NUMBER_ROW"], index }
}

function add(symbol) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["ADD"], symbol }
}

function subtract(symbol) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["SUBTRACT"], symbol }
}

function multiply(symbol) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["MULTIPLY"], symbol }
}

function divide(symbol) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["DIVIDE"], symbol }
}

function negativepositive(index) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["NEGATIVEPOSITIVE"], index }
}

function clear(index) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["CLEAR"], index }
}

function equals(index) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["EQUALS"], index }
}

function percent(index) {
  return { type: __WEBPACK_IMPORTED_MODULE_0__constants_ActionTypes__["PERCENT"], index }
}


/***/ })

},[209]);
//# sourceMappingURL=bundle.js.map