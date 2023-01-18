"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_saas_pages_profile_Profile_jsx"],{

/***/ "./node_modules/@restart/ui/esm/Nav.js":
/*!*********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Nav.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const EVENT_KEY_ATTR = (0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataAttr)('event-key');
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  const forceUpdate = (0,_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const needsRefocusRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  let getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey; // TODO: do we need to duplicate these?

    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  const listNode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const getNextActiveTab = offset => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = (0,dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_0__["default"])(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector('[aria-selected=true]');
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };

  const handleKeyDown = event => {
    onKeyDown == null ? void 0 : onKeyDown(event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveTab(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveTab(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[(0,_DataKey__WEBPACK_IMPORTED_MODULE_5__.dataProp)('EventKey')] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, listNode);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: handleSelect,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role: role
      }))
    })
  });
});
Nav.displayName = 'Nav';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"]
}));

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NavItem.js":
/*!*************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NavItem.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useNavItem": () => (/* binding */ useNavItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavContext */ "./node_modules/@restart/ui/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Button */ "./node_modules/@restart/ui/esm/Button.js");
/* harmony import */ var _DataKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataKey */ "./node_modules/@restart/ui/esm/DataKey.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["as", "active", "eventKey"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const navContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_NavContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  let isActive = active;
  const props = {
    role
  };

  if (navContext) {
    if (!role && navContext.role === 'tablist') props.role = 'tab';
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null); // @ts-ignore

    props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('event-key')] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    /**
     * Simplified scenario for `mountOnEnter`.
     *
     * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
     * once, it would also complicate the code quite a bit, for very little gain.
     * The following implementation is probably good enough.
     *
     * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
     */

    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props['aria-controls'] = contextControlledId;
  }

  if (props.role === 'tab') {
    props['aria-selected'] = isActive;

    if (!isActive) {
      props.tabIndex = -1;
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }
  }

  props.onClick = (0,_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e);

    if (key == null) {
      return;
    }

    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
  let {
    as: Component = _Button__WEBPACK_IMPORTED_MODULE_7__["default"],
    active,
    eventKey
  } = _ref,
      options = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [props, meta] = useNavItem(Object.assign({
    key: (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(eventKey, options.href),
    active
  }, options)); // @ts-ignore

  props[(0,_DataKey__WEBPACK_IMPORTED_MODULE_6__.dataAttr)('active')] = meta.isActive;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, Object.assign({}, options, props, {
    ref: ref
  }));
});
NavItem.displayName = 'NavItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/NoopTransition.js":
/*!********************************************************!*\
  !*** ./node_modules/@restart/ui/esm/NoopTransition.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NoopTransition({
  children,
  in: inProp,
  mountOnEnter,
  unmountOnExit
}) {
  const hasEnteredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(inProp);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (inProp) hasEnteredRef.current = true;
  }, [inProp]);
  if (inProp) return children; // not in
  //
  // if (!mountOnEnter && !unmountOnExit) {
  //   return children;
  // }

  if (unmountOnExit) {
    return null;
  }

  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }

  return children;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoopTransition);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabContext.js":
/*!****************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabContext.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TabContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContext);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/TabPanel.js":
/*!**************************************************!*\
  !*** ./node_modules/@restart/ui/esm/TabPanel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "useTabPanel": () => (/* binding */ useTabPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _NoopTransition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NoopTransition */ "./node_modules/@restart/ui/esm/NoopTransition.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"],
      _excluded2 = ["activeKey", "getControlledId", "getControllerId"],
      _excluded3 = ["as"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = 'tabpanel',
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_TabContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  if (!context) return [Object.assign({}, props, {
    role
  }), {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];

  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context,
        rest = _objectWithoutPropertiesLoose(context, _excluded2);

  const key = (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    'aria-labelledby': getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? (0,_SelectableContext__WEBPACK_IMPORTED_MODULE_3__.makeEventKey)(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
const TabPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
(_ref2, ref) => {
  let {
    as: Component = 'div'
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded3);

  const [tabPanelProps, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = _NoopTransition__WEBPACK_IMPORTED_MODULE_4__["default"]
  }] = useTabPanel(props); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_TabContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
      value: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, Object.assign({}, tabPanelProps, {
          ref: ref,
          hidden: !isActive,
          "aria-hidden": !isActive
        }))
      })
    })
  });
});
TabPanel.displayName = 'TabPanel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);

/***/ }),

/***/ "./node_modules/@restart/ui/esm/Tabs.js":
/*!**********************************************!*\
  !*** ./node_modules/@restart/ui/esm/Tabs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ssr */ "./node_modules/@react-aria/ssr/dist/module.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TabPanel */ "./node_modules/@restart/ui/esm/TabPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const Tabs = props => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_1__.useUncontrolledProp)(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = (0,_ssr__WEBPACK_IMPORTED_MODULE_3__.useSSRSafeId)(userId);
  const generateChildId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: key => generateChildId(key, 'tabpane'),
    getControllerId: key => generateChildId(key, 'tab')
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TabContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: tabContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SelectableContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
      value: onSelect || null,
      children: children
    })
  });
};

Tabs.Panel = _TabPanel__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "./resources/js/saas/pages/profile/Profile.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/saas/pages/profile/Profile.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Context */ "./resources/js/Context.jsx");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Spinner */ "./resources/js/saas/components/Spinner.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AuthenticationSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_saas_pages_profile_AuthenticationSettings_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./AuthenticationSettings */ "./resources/js/saas/pages/profile/AuthenticationSettings.jsx"));
});
var Browsers = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_saas_pages_profile_Browsers_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./Browsers */ "./resources/js/saas/pages/profile/Browsers.jsx"));
});
var PasswordSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_saas_pages_profile_PasswordSettings_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./PasswordSettings */ "./resources/js/saas/pages/profile/PasswordSettings.jsx"));
});
var ProfileSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_saas_pages_profile_ProfileSettings_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./ProfileSettings */ "./resources/js/saas/pages/profile/ProfileSettings.jsx"));
});
function Profile(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    page = _React$useState2[0],
    setPage = _React$useState2[1];
  var handleGetStartUpData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().get((0,_Context__WEBPACK_IMPORTED_MODULE_2__.SecureApiUrl)("user/startup-data"), {
                headers: (0,_Context__WEBPACK_IMPORTED_MODULE_2__.Header)()
              }).then(function (response) {
                var info = response.data;
                setPage(info.page);
              })["catch"](function (error) {
                if (error.request && error.request.status == 401) {
                  location.reload();
                }
              });
            case 2:
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
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {
    handleGetStartUpData();
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Container, {
    id: "profile",
    defaultActiveKey: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 4,
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "pills",
    className: "flex-column border border-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    eventKey: "profile"
  }, page.tab_title_1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    eventKey: "password"
  }, page.tab_title_2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    eventKey: "authentication"
  }, page.tab_title_3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["default"].Link, {
    eventKey: "browser"
  }, page.tab_title_4)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 8,
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Pane, {
    eventKey: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ProfileSettings, {
    userInfo: props.userInfo,
    onSave: props.onSave,
    page: page
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Pane, {
    eventKey: "password"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(PasswordSettings, {
    page: page
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Pane, {
    eventKey: "authentication"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AuthenticationSettings, {
    page: page
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["default"].Pane, {
    eventKey: "browser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Browsers, {
    page: page
  })))))));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/css.js":
/*!*********************************************!*\
  !*** ./node_modules/dom-helpers/esm/css.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getComputedStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getComputedStyle */ "./node_modules/dom-helpers/esm/getComputedStyle.js");
/* harmony import */ var _hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hyphenateStyle */ "./node_modules/dom-helpers/esm/hyphenateStyle.js");
/* harmony import */ var _isTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isTransform */ "./node_modules/dom-helpers/esm/isTransform.js");




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property)) || (0,_getComputedStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getPropertyValue((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty((0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key));
    } else if ((0,_isTransform__WEBPACK_IMPORTED_MODULE_2__["default"])(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0,_hyphenateStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/getComputedStyle.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/getComputedStyle.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/dom-helpers/esm/ownerWindow.js");

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return (0,_ownerWindow__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, psuedoElement);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenate.js":
/*!***************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenate.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hyphenate)
/* harmony export */ });
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hyphenateStyle.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hyphenateStyle.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hyphenateStyleName)
/* harmony export */ });
/* harmony import */ var _hyphenate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hyphenate */ "./node_modules/dom-helpers/esm/hyphenate.js");
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return (0,_hyphenate__WEBPACK_IMPORTED_MODULE_0__["default"])(string).replace(msPattern, '-ms-');
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/isTransform.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/isTransform.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTransform)
/* harmony export */ });
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/ownerWindow.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/ownerWindow.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/dom-helpers/esm/ownerDocument.js");

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc && doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/transitionEnd.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/transitionEnd.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEnd)
/* harmony export */ });
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listen */ "./node_modules/dom-helpers/esm/listen.js");
/* harmony import */ var _triggerEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triggerEvent */ "./node_modules/dom-helpers/esm/triggerEvent.js");




function parseDuration(node) {
  var str = (0,_css__WEBPACK_IMPORTED_MODULE_0__["default"])(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) (0,_triggerEvent__WEBPACK_IMPORTED_MODULE_2__["default"])(element, 'transitionend', true);
  }, duration + padding);
  var remove = (0,_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = (0,_listen__WEBPACK_IMPORTED_MODULE_1__["default"])(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/triggerEvent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-helpers/esm/triggerEvent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ triggerEvent)
/* harmony export */ });
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/***/ ((module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Fade.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Fade.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _transitionEndListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitionEndListener */ "./node_modules/react-bootstrap/esm/transitionEndListener.js");
/* harmony import */ var _triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triggerBrowserReflow */ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js");
/* harmony import */ var _TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionWrapper */ "./node_modules/react-bootstrap/esm/TransitionWrapper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
const fadeStyles = {
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERING]: 'show',
  [react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__.ENTERED]: 'show'
};
const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  className,
  children,
  transitionClasses = {},
  ...props
}, ref) => {
  const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((node, isAppearing) => {
    (0,_triggerBrowserReflow__WEBPACK_IMPORTED_MODULE_4__["default"])(node);
    props.onEnter == null ? void 0 : props.onEnter(node, isAppearing);
  }, [props]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TransitionWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: ref,
    addEndListener: _transitionEndListener__WEBPACK_IMPORTED_MODULE_6__["default"],
    ...props,
    onEnter: handleEnter,
    childRef: children.ref,
    children: (status, innerProps) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(children, { ...innerProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('fade', className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Nav.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/lib/esm/index.js");
/* harmony import */ var _restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/ui/Nav */ "./node_modules/@restart/ui/esm/Nav.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/esm/NavbarContext.js");
/* harmony import */ var _CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CardHeaderContext */ "./node_modules/react-bootstrap/esm/CardHeaderContext.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/esm/NavLink.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












const defaultProps = {
  justify: false,
  fill: false
};
const Nav = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((uncontrolledProps, ref) => {
  const {
    as = 'div',
    bsPrefix: initialBsPrefix,
    variant,
    fill,
    justify,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = (0,uncontrollable__WEBPACK_IMPORTED_MODULE_3__.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  });
  const bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(initialBsPrefix, 'nav');
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_NavbarContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const cardHeaderContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_CardHeaderContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_restart_ui_Nav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Nav, {
  Item: _NavItem__WEBPACK_IMPORTED_MODULE_9__["default"],
  Link: _NavLink__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('nav-item'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavLink.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @restart/ui/Anchor */ "./node_modules/@restart/ui/esm/Anchor.js");
/* harmony import */ var _restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/ui/NavItem */ "./node_modules/@restart/ui/esm/NavItem.js");
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @restart/ui/SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const defaultProps = {
  disabled: false
};
const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  as: Component = _restart_ui_Anchor__WEBPACK_IMPORTED_MODULE_3__["default"],
  active,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'nav-link');
  const [navItemProps, meta] = (0,_restart_ui_NavItem__WEBPACK_IMPORTED_MODULE_5__.useNavItem)({
    key: (0,_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_6__.makeEventKey)(eventKey, props.href),
    active,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...props,
    ...navItemProps,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, props.disabled && 'disabled', meta.isActive && 'active')
  });
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Tab.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Tab.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/esm/TabContainer.js");
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/esm/TabContent.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/esm/TabPane.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)]),

  /**
   * Content for the tab title.
   */
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),

  /**
   * The disabled state of the tab.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),

  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),

  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};

const Tab = () => {
  throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly'); // Needed otherwise docs error out.

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {});
};

Tab.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Tab, {
  Container: _TabContainer__WEBPACK_IMPORTED_MODULE_3__["default"],
  Content: _TabContent__WEBPACK_IMPORTED_MODULE_4__["default"],
  Pane: _TabPane__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/TabContainer.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TabContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _restart_ui_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @restart/ui/Tabs */ "./node_modules/@restart/ui/esm/Tabs.js");
/* harmony import */ var _getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTabTransitionComponent */ "./node_modules/react-bootstrap/esm/getTabTransitionComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





const TabContainer = ({
  transition,
  ...props
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_restart_ui_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], { ...props,
  transition: (0,_getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_3__["default"])(transition)
});

TabContainer.displayName = 'TabContainer';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContainer);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/TabContent.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TabContent.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('tab-content'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/TabPane.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TabPane.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @restart/ui/SelectableContext */ "./node_modules/@restart/ui/esm/SelectableContext.js");
/* harmony import */ var _restart_ui_TabContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @restart/ui/TabContext */ "./node_modules/@restart/ui/esm/TabContext.js");
/* harmony import */ var _restart_ui_TabPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/ui/TabPanel */ "./node_modules/@restart/ui/esm/TabPanel.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var _getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTabTransitionComponent */ "./node_modules/react-bootstrap/esm/getTabTransitionComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









const TabPane = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = 'div',
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = _Fade__WEBPACK_IMPORTED_MODULE_3__["default"]
  }] = (0,_restart_ui_TabPanel__WEBPACK_IMPORTED_MODULE_4__.useTabPanel)({ ...props,
    transition: (0,_getTabTransitionComponent__WEBPACK_IMPORTED_MODULE_5__["default"])(transition)
  });
  const prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.useBootstrapPrefix)(bsPrefix, 'tab-pane'); // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_restart_ui_TabContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_restart_ui_SelectableContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
      value: null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Transition, {
        in: isActive,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, { ...rest,
          ref: ref,
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, prefix, isActive && 'active')
        })
      })
    })
  });
});
TabPane.displayName = 'TabPane';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPane);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/TransitionWrapper.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TransitionWrapper.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _safeFindDOMNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safeFindDOMNode */ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// Normalizes Transition callbacks when nodeRef is used.
const TransitionWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const mergedRef = (0,_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_1__["default"])(nodeRef, childRef);

  const attachRef = r => {
    mergedRef((0,_safeFindDOMNode__WEBPACK_IMPORTED_MODULE_3__["default"])(r));
  };

  const normalize = callback => param => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  /* eslint-disable react-hooks/exhaustive-deps */


  const handleEnter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEnter), [onEnter]);
  const handleEntering = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEntering), [onEntering]);
  const handleEntered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onEntered), [onEntered]);
  const handleExit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExit), [onExit]);
  const handleExiting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExiting), [onExiting]);
  const handleExited = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(onExited), [onExited]);
  const handleAddEndListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(normalize(addEndListener), [addEndListener]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef: nodeRef,
    children: typeof children === 'function' ? (status, innerProps) => children(status, { ...innerProps,
      ref: attachRef
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(children, {
      ref: attachRef
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionWrapper);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/getTabTransitionComponent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/getTabTransitionComponent.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTabTransitionComponent)
/* harmony export */ });
/* harmony import */ var _restart_ui_NoopTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @restart/ui/NoopTransition */ "./node_modules/@restart/ui/esm/NoopTransition.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");


function getTabTransitionComponent(transition) {
  if (typeof transition === 'boolean') {
    return transition ? _Fade__WEBPACK_IMPORTED_MODULE_0__["default"] : _restart_ui_NoopTransition__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  return transition;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/safeFindDOMNode.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/safeFindDOMNode.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ safeFindDOMNode)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom__WEBPACK_IMPORTED_MODULE_0__.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/transitionEndListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/transitionEndListener.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transitionEndListener)
/* harmony export */ });
/* harmony import */ var dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom-helpers/css */ "./node_modules/dom-helpers/esm/css.js");
/* harmony import */ var dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-helpers/transitionEnd */ "./node_modules/dom-helpers/esm/transitionEnd.js");



function parseDuration(node, property) {
  const str = (0,dom_helpers_css__WEBPACK_IMPORTED_MODULE_0__["default"])(node, property) || '';
  const mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  const duration = parseDuration(element, 'transitionDuration');
  const delay = parseDuration(element, 'transitionDelay');
  const remove = (0,dom_helpers_transitionEnd__WEBPACK_IMPORTED_MODULE_1__["default"])(element, e => {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/triggerBrowserReflow.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/triggerBrowserReflow.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ triggerBrowserReflow)
/* harmony export */ });
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENTERED": () => (/* binding */ ENTERED),
/* harmony export */   "ENTERING": () => (/* binding */ ENTERING),
/* harmony export */   "EXITED": () => (/* binding */ EXITED),
/* harmony export */   "EXITING": () => (/* binding */ EXITING),
/* harmony export */   "UNMOUNTED": () => (/* binding */ UNMOUNTED),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_reflow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/reflow */ "./node_modules/react-transition-group/esm/utils/reflow.js");









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,_utils_reflow__WEBPACK_IMPORTED_MODULE_4__.forceReflow)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3__.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_7___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_7___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNamesShape": () => (/* binding */ classNamesShape),
/* harmony export */   "timeoutsShape": () => (/* binding */ timeoutsShape)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/reflow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/reflow.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceReflow": () => (/* binding */ forceReflow)
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ })

}]);