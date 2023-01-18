"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_saas_pages_settings_role_NewRole_jsx"],{

/***/ "./resources/js/saas/pages/settings/role/NewRole.jsx":
/*!***********************************************************!*\
  !*** ./resources/js/saas/pages/settings/role/NewRole.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewRole)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Context */ "./resources/js/Context.jsx");
/* harmony import */ var _components_BtnSaving__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/BtnSaving */ "./resources/js/saas/components/BtnSaving.jsx");
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







function NewRole(props) {
  var _this = this;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isRefreshingData = _React$useState2[0],
    setRefreshingData = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    isSavingData = _React$useState4[0],
    setSavingData = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    IsAllSelected = _React$useState6[0],
    setAllSelected = _React$useState6[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    menus = _React$useState8[0],
    setMenus = _React$useState8[1];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    page = _React$useState10[0],
    setPage = _React$useState10[1];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
      found: false,
      name: "",
      name_l: ""
    }),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    data = _React$useState12[0],
    setData = _React$useState12[1];
  var handleGetStartUpData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var api;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setRefreshingData(true);
              api = (0,_Context__WEBPACK_IMPORTED_MODULE_2__.SecureApiUrl)("get-menus");
              if (params.roleId) {
                api += "?id=".concat(params.roleId);
              }
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get(api, {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_2__.Header)()
              }).then(function (response) {
                var info = response.data;
                if (info.deny) {
                  navigate(-1);
                  setTimeout(function () {
                    props.onAccessDeny(info.deny);
                  }, 100);
                  return false;
                }
                setAllSelected(info.total_menu == info.total_selected_menu ? true : false);
                setMenus(info.menus);
                setPage(info.page);
                setData(_objectSpread(_objectSpread({}, data), {}, {
                  found: info.record.name ? true : false,
                  name: info.record.name ? info.record.name : "",
                  name_l: info.record.name_l ? info.record.name_l : ""
                }));
                setRefreshingData(false);
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 5:
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
  var handleCheck = function handleCheck(e) {
    var checked = e.target.checked;
    var value = e.target.value;
    var info = [];
    if (value === 'all') {
      if (Object.keys(menus).length > 0) {
        menus.map(function (menu) {
          var childs = [];
          if (Object.keys(menu.childs).length > 0) {
            menu.childs.map(function (child) {
              childs.push({
                id: child.id,
                is_checked: checked,
                name: child.name,
                name_l: child.name_l,
                note: child.note,
                note_l: child.note_l
              });
            });
          }
          info.push({
            id: menu.id,
            childs: childs,
            is_checked: checked,
            name: menu.name,
            name_l: menu.name_l
          });
        });
        setMenus(info);
      }
      setAllSelected(checked);
      return true;
    } else {
      var menuLength = 0;
      var checkedLength = 0;
      if (Object.keys(menus).length > 0) {
        menus.map(function (menu) {
          menuLength++;
          var childs = [];
          if (Object.keys(menu.childs).length > 0) {
            menu.childs.map(function (child) {
              menuLength++;
              childs.push({
                id: child.id,
                is_checked: value === child.id.toString() ? checked : child.is_checked,
                name: child.name,
                name_l: child.name_l,
                note: child.note,
                note_l: child.note_l
              });
              if (value === child.id.toString() || child.is_checked) {
                checkedLength++;
              }
            });
          }
          info.push({
            id: menu.id,
            childs: childs,
            is_checked: value === menu.id.toString() ? checked ? true : false : menu.is_checked,
            name: menu.name,
            name_l: menu.name_l
          });
          if (value === menu.id.toString() || menu.is_checked) {
            checkedLength++;
          }
        });
        setMenus(info);
      }
      setAllSelected(menuLength == checkedLength ? true : false);
      return true;
    }
  };
  var handleSavingInfo = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var form;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setSavingData(true);
              form = new FormData();
              form.append('id', params.roleId ? params.roleId : 0);
              form.append('name', data.name);
              form.append('name_l', data.name_l);
              if (Object.keys(menus).length > 0) {
                menus.map(function (menu) {
                  if (menu.is_checked) {
                    form.append("permissions[]", parseInt(menu.id));
                  }
                  if (Object.keys(menu.childs).length > 0) {
                    menu.childs.map(function (child) {
                      if (child.is_checked) {
                        form.append("permissions[]", parseInt(child.id));
                      }
                    });
                  }
                });
              }
              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post((0,_Context__WEBPACK_IMPORTED_MODULE_2__.SecureApiUrl)("save-role"), form, {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_2__.Header)()
              }).then(function (response) {
                setSavingData(false);
                var info = response.data;
                if (info.errors) {
                  info.errors.map(function (error) {
                    return (0,_Context__WEBPACK_IMPORTED_MODULE_2__.ShowToast)({
                      type: 'error',
                      msg: error
                    });
                  });
                } else if (info.success) {
                  (0,_Context__WEBPACK_IMPORTED_MODULE_2__.ShowToast)({
                    type: 'success',
                    msg: info.success
                  });
                  if (params.roleId) {
                    window.history.pushState({}, undefined, (0,_Context__WEBPACK_IMPORTED_MODULE_2__.SecureUrl)("user-settings/roles"));
                  } else {
                    handleGetStartUpData();
                  }
                }
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return function handleSavingInfo() {
      return _ref2.apply(this, arguments);
    };
  }();
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    handleGetStartUpData();
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Header, {
    className: "outline-primary"
  }, page.card_title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    className: "btn btn-warning btn-sm float-end",
    to: (0,_Context__WEBPACK_IMPORTED_MODULE_2__.SecureUrl)("user-settings/roles")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("i", {
    className: "uil uil-arrow-left"
  }), " ", page.btn_back)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    controlId: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, page.lbl_name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Control, {
    defaultValue: data.name,
    onKeyPress: function onKeyPress(e) {
      e.which === 13 ? handleSavingInfo() : "";
    },
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        name: e.target.value
      }));
    }
  }))), props.translate == 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    controlId: "name_l"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, page.lbl_name_l), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Control, {
    defaultValue: data.name_l,
    onKeyPress: function onKeyPress(e) {
      e.which === 13 ? handleSavingInfo() : "";
    },
    onChange: function onChange(e) {
      setData(_objectSpread(_objectSpread({}, data), {}, {
        name: e.target.value
      }));
    }
  }))) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Group, {
    className: "mt-3",
    controlId: "menus"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Label, null, page.lbl_permission, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "text-danger"
  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Check, {
    type: "checkbox",
    label: "All",
    value: "all",
    checked: IsAllSelected,
    onChange: handleCheck.bind(this)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], null, isRefreshingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], null))) : Object.keys(menus).length > 0 ? menus.map(function (menu, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sm: true,
      md: 4,
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
      style: {
        listStyle: "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Check, {
      type: "checkbox",
      value: menu.id,
      checked: menu.is_checked,
      label: props.lang == 'en' ? menu.name + " (".concat(menu.id, ")") : menu.name_l ? menu.name_l + " (".concat(menu.id, ")") : menu.name + " (".concat(menu.id, ")"),
      onChange: handleCheck.bind(_this)
    }), Object.keys(menu.childs).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
      style: {
        listStyle: "none"
      }
    }, menu.childs.map(function (child, ci) {
      var label = props.lang == 'en' ? child.name + " (".concat(child.id, ")") : child.name_l ? child.name_l + " (".concat(child.id, ")") : child.name + " (".concat(child.id, ")");
      if (child.note || child.note_l) {
        label += props.lang == 'en' ? child.note : child.note_l ? " " + child.note_l : " " + child.note;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
        key: ci
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["default"].Check, {
        type: "checkbox",
        value: child.id,
        checked: child.is_checked,
        label: label,
        onChange: handleCheck.bind(_this)
      }));
    })) : "")));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h4", {
    className: "text-danger"
  }, "No Data Found")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["default"].Footer, null, isRefreshingData ? "" : !isSavingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: data.found ? "secondary" : "primary",
    onClick: handleSavingInfo.bind(this),
    className: "float-end"
  }, " ", page.btn_save) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_BtnSaving__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: data.found ? "secondary" : "primary",
    text: page.btn_saving
  }))))));
}

/***/ })

}]);