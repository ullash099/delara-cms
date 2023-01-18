"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_saas_pages_settings_user_Users_jsx"],{

/***/ "./resources/js/saas/pages/settings/user/Users.jsx":
/*!*********************************************************!*\
  !*** ./resources/js/saas/pages/settings/user/Users.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/InputGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/DropdownButton.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Dropdown.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Context */ "./resources/js/Context.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Spinner */ "./resources/js/saas/components/Spinner.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var NewUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_saas_pages_settings_user_NewUser_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./NewUser */ "./resources/js/saas/pages/settings/user/NewUser.jsx"));
});
function Users(props) {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isrefreshingList = _React$useState2[0],
    setRefreshingList = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    src = _React$useState4[0],
    setSrc = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    page = _React$useState6[0],
    setPage = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
      infos: {},
      paginations: {},
      prev_page_url: null,
      last_page_url: null,
      from: 0,
      to: 0,
      total: 0
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    datatable = _React$useState8[0],
    setDatatable = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    roles = _React$useState10[0],
    setRoles = _React$useState10[1];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
      id: 0,
      name: "",
      email: "",
      role: "",
      password: "",
      password_confirmation: ""
    }),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    data = _React$useState12[0],
    setData = _React$useState12[1];
  var handleGetStartUpData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setRefreshingList(true);
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_Context__WEBPACK_IMPORTED_MODULE_3__.SecureApiUrl)("get-users"), {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
              }).then(function (response) {
                var info = response.data;
                if (info.deny) {
                  navigate(-1);
                  setTimeout(function () {
                    props.onAccessDeny(info.deny);
                  }, 100);
                  return false;
                }
                var rls = [];
                if (Object.keys(info.roles).length > 0) {
                  Object.values(info.roles).map(function (option) {
                    rls.push({
                      value: option.id,
                      label: props.lang == 'en' ? option.name : option.name_l ? option.name_l : option.name
                    });
                  });
                  setRoles(rls);
                } else {
                  setRoles([]);
                }
                setDatatable(_objectSpread(_objectSpread({}, datatable), {}, {
                  infos: info.datatable.data,
                  paginations: info.datatable.links,
                  prev_page_url: info.datatable.prev_page_url,
                  last_page_url: info.datatable.last_page_url,
                  from: info.datatable.from,
                  to: info.datatable.to,
                  total: info.datatable.total
                }));
                setPage(info.page);
                setRefreshingList(false);
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function handleGetStartUpData() {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSearchTable = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var srcKey;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              srcKey = e.target.value;
              setSrc(srcKey);
              setRefreshingList(true);
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_Context__WEBPACK_IMPORTED_MODULE_3__.SecureApiUrl)("get-users?src=" + srcKey), {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
              }).then(function (response) {
                var info = response.data;
                setDatatable(_objectSpread(_objectSpread({}, datatable), {}, {
                  infos: info.datatable.data,
                  paginations: info.datatable.links,
                  prev_page_url: info.datatable.prev_page_url,
                  last_page_url: info.datatable.last_page_url,
                  from: info.datatable.from,
                  to: info.datatable.to,
                  total: info.datatable.total
                }));
                setRefreshingList(false);
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function handleSearchTable(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaginations = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (src) {
                url = "".concat(url, "&src=").concat(src);
              }
              setRefreshingList(true);
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
              }).then(function (response) {
                var info = response.data;
                var datatable = info.datatable;
                setDatatable(_objectSpread(_objectSpread({}, datatable), {}, {
                  infos: info.datatable.data,
                  paginations: info.datatable.links,
                  prev_page_url: info.datatable.prev_page_url,
                  last_page_url: info.datatable.last_page_url,
                  from: info.datatable.from,
                  to: info.datatable.to,
                  total: info.datatable.total
                }));
                setRefreshingList(false);
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function handlePaginations(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  /* Mmanually Confirm Email */
  var handleManuallyConfirmEmail = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: page.swal_title,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: page.swal_yes,
                cancelButtonText: page.swal_no
              }).then( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(res) {
                  var form;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!res.isConfirmed) {
                            _context4.next = 5;
                            break;
                          }
                          form = new FormData();
                          form.append('id', id);
                          _context4.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_Context__WEBPACK_IMPORTED_MODULE_3__.SecureApiUrl)("manually-confirm-user-email"), form, {
                            headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
                          }).then(function (response) {
                            var info = response.data;
                            if (info.errors) {
                              info.errors.map(function (error) {
                                return (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                  type: 'error',
                                  msg: error
                                });
                              });
                            } else if (info.success) {
                              handleGetStartUpData();
                              (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                type: 'success',
                                msg: info.success
                              });
                            }
                          })["catch"](function (error) {
                            if (error.request && error.request.status == 401) {
                              location.reload();
                            }
                          });
                        case 5:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref5.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return function handleManuallyConfirmEmail(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  /* block user */
  var handleBlock = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: page.swal_title,
                text: page.swal_unblock_text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: page.swal_block_yes,
                cancelButtonText: page.swal_no
              }).then( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(res) {
                  var form;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          if (!res.isConfirmed) {
                            _context6.next = 5;
                            break;
                          }
                          form = new FormData();
                          form.append('id', id);
                          _context6.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_Context__WEBPACK_IMPORTED_MODULE_3__.SecureApiUrl)("block-user"), form, {
                            headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
                          }).then(function (response) {
                            var info = response.data;
                            if (info.errors) {
                              info.errors.map(function (error) {
                                return (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                  type: 'error',
                                  msg: error
                                });
                              });
                            } else if (info.success) {
                              handleGetStartUpData();
                              (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                type: 'success',
                                msg: info.success
                              });
                            }
                          })["catch"](function (error) {
                            if (error.request && error.request.status == 401) {
                              location.reload();
                            }
                          });
                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));
                return function (_x6) {
                  return _ref7.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return function handleBlock(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();

  /* unblock user */
  var handleUnblock = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: page.swal_title,
                text: page.swal_block_text,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: page.swal_unblock_yes,
                cancelButtonText: page.swal_no
              }).then( /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(res) {
                  var form;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          if (!res.isConfirmed) {
                            _context8.next = 5;
                            break;
                          }
                          form = new FormData();
                          form.append('id', id);
                          _context8.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_Context__WEBPACK_IMPORTED_MODULE_3__.SecureApiUrl)("unblock-user"), form, {
                            headers: (0,_Context__WEBPACK_IMPORTED_MODULE_3__.Header)()
                          }).then(function (response) {
                            var info = response.data;
                            if (info.errors) {
                              info.errors.map(function (error) {
                                return (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                  type: 'error',
                                  msg: error
                                });
                              });
                            } else if (info.success) {
                              handleGetStartUpData();
                              (0,_Context__WEBPACK_IMPORTED_MODULE_3__.ShowToast)({
                                type: 'success',
                                msg: info.success
                              });
                            }
                          })["catch"](function (error) {
                            if (error.request && error.request.status == 401) {
                              location.reload();
                            }
                          });
                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));
                return function (_x8) {
                  return _ref9.apply(this, arguments);
                };
              }());
            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return function handleUnblock(_x7) {
      return _ref8.apply(this, arguments);
    };
  }();

  /* create user modal */
  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    show = _React$useState14[0],
    setShow = _React$useState14[1];
  var handleShow = function handleShow() {
    return setShow(true);
  };
  var handleClose = function handleClose() {
    return setShow(false);
  };
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    handleGetStartUpData();
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
    className: "outline-primary"
  }, page.card_title, page.can_save ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "float-end",
    size: "sm",
    onClick: handleShow.bind(this)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "uil uil-plus-circle"
  }), " ", page.btn_add_new) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "app-search dropdown d-none d-lg-block mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"], {
    placeholder: "Search...",
    onChange: handleSearchTable.bind(this)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "mdi mdi-magnify search-icon"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    striped: true,
    responsive: true,
    bordered: true,
    size: "sm",
    className: "border-success mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, page.theads && Object.keys(page.theads).length > 0 ? Object.values(page.theads).map(function (thead, th) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("th", {
      key: th,
      style: thead.style,
      className: thead["class"] ? thead["class"] : ''
    }, thead.txt);
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tbody", null, isrefreshingList ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
    colSpan: page.theads && Object.keys(page.theads).length,
    className: "text-center py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null))) : Object.keys(datatable.infos).length > 0 ? Object.values(datatable.infos).map(function (info, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, info.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, info.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "d-block m-0 p-0"
    }, info.email_verified_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], null, page.badge_email_verified) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      bg: "warning"
    }, page.badge_email_not_verified)), info.block == 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], null, page.badge_active) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__["default"], {
      bg: "danger"
    }, page.badge_blocked)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", null, !page.can_save && !page.can_block ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: page.btn_action,
      className: "btn-sm float-end"
    }, !info.email_verified_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
      eventKey: "2",
      onClick: function onClick() {
        return handleManuallyConfirmEmail(info.id);
      }
    }, page.btn_manually_confirm_email) : "", !page.can_save || info.block == 1 ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
      eventKey: "2",
      onClick: function onClick() {
        setData(_objectSpread(_objectSpread({}, data), {}, {
          id: info.id,
          name: info.name,
          email: info.email,
          role: info.role_id
        }));
        handleShow();
      }
    }, page.btn_edit), !page.can_block ? "" : info.block == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
      eventKey: "2",
      onClick: function onClick() {
        return handleUnblock(info.id);
      }
    }, page.btn_unblock) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["default"].Item, {
      eventKey: "2",
      onClick: function onClick() {
        return handleBlock(info.id);
      }
    }, page.btn_block))));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("td", {
    colSpan: page.theads && Object.keys(page.theads).length,
    className: "text-center py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h3", null, "No Data Found")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "paging_simple_numbers float-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "pagination pagination-rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "pagination pagination-rounded"
  }, Object.keys(datatable.paginations).length > 0 ? datatable.paginations.map(function (paginate, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      key: i,
      className: paginate.label == "&laquo; Previous" ? datatable.prev_page_url ? "paginate_button page-item previous" : "paginate_button page-item previous disabled" : paginate.label == "Next &raquo;" ? paginate.url ? "paginate_button page-item next" : "paginate_button page-item next disabled" : paginate.active ? "paginate_button page-item active" : "paginate_button page-item"
    }, paginate.label == "&laquo; Previous" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
      to: "#",
      className: "page-link",
      onClick: function onClick(e) {
        e.preventDefault();
        handlePaginations(paginate.url);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "mdi mdi-chevron-left"
    })) : paginate.label == "Next &raquo;" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
      to: "#",
      className: "page-link",
      onClick: function onClick(e) {
        e.preventDefault();
        handlePaginations(paginate.url);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
      className: "mdi mdi-chevron-right"
    })) : paginate.label == "..." ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
      to: "#",
      className: "page-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      }
    }, paginate.label) : !paginate.active ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
      to: "#",
      className: "page-link",
      onClick: function onClick(e) {
        e.preventDefault();
        handlePaginations(paginate.url);
      }
    }, paginate.label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
      to: "#",
      className: "page-link",
      onClick: function onClick(e) {
        return e.preventDefault();
      }
    }, paginate.label));
  }) : ""))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(NewUser, {
    show: show,
    onHide: handleClose.bind(this),
    onSave: handleGetStartUpData.bind(this),
    page: page,
    roles: roles,
    info: data
  }));
}

/***/ })

}]);