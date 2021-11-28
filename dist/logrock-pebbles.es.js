var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import styled, { css } from "styled-components";
import require$$0 from "react";
import { up } from "styled-breakpoints";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  k !== void 0 && (e = "" + k);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const NavBarWrapper = styled.div`
  ${({
  theme
}) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.spacings.xs};
    padding-bottom: ${theme.spacings.xs};

    background-color: ${theme.navbar.background};
  `}
`;
const NavBarContent = styled.div`
  ${({
  theme
}) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.breakpoints.widescreen};
    padding-right: ${theme.spacings.md};
    padding-left: ${theme.spacings.md};
  `}
`;
const NavBar = ({
  children
}) => {
  return /* @__PURE__ */ jsx(NavBarWrapper, {
    children: /* @__PURE__ */ jsx(NavBarContent, {
      children
    })
  });
};
NavBar.Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
NavBar.Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;
NavBar.NavigationItem = styled.div`
  ${({
  theme,
  active
}) => css`
    a {
      display: flex;
      flex-flow: row nowrap;
      padding: ${theme.spacings.md};

      border-bottom-width: ${theme.spacings.xxs};
      border-bottom-style: solid;
      border-bottom-color: ${active ? theme.navbar.navigation.item.active.border : theme.navbar.navigation.item.regular.border};

      color: ${active ? theme.navbar.navigation.item.active.color : theme.navbar.navigation.item.regular.color};
      text-decoration: none;
    }
    &:hover {
      border-color: ${theme.navbar.navigation.item.hover.border};

      background-color: ${theme.navbar.navigation.item.hover.background};
    }

    &:active {
      border-color: ${theme.navbar.navigation.item.active.border};

      background-color: ${theme.navbar.navigation.item.active.background};
    }
  `}
`;
const Header1 = styled.h1`
  ${({
  theme,
  inverted
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return css`
    color: ${(_c = (_b = (_a = theme == null ? void 0 : theme.typography) == null ? void 0 : _a.header1) == null ? void 0 : _b[inverted ? "inverted" : "regular"]) == null ? void 0 : _c.color};
    font-size: ${(_f = (_e = (_d = theme == null ? void 0 : theme.typography) == null ? void 0 : _d.header1) == null ? void 0 : _e[inverted ? "inverted" : "regular"]) == null ? void 0 : _f.fontSize};
    font-weight: ${(_i = (_h = (_g = theme == null ? void 0 : theme.typography) == null ? void 0 : _g.header1) == null ? void 0 : _h[inverted ? "inverted" : "regular"]) == null ? void 0 : _i.fontWeight};
    text-decoration: ${(_l = (_k = (_j = theme == null ? void 0 : theme.typography) == null ? void 0 : _j.header1) == null ? void 0 : _k[inverted ? "inverted" : "regular"]) == null ? void 0 : _l.textDecoration};
  `;
}}
`;
const linkcss = css`
  ${({
  theme,
  inverted
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return css`
    color: ${(_c = (_b = (_a = theme == null ? void 0 : theme.typography) == null ? void 0 : _a.link) == null ? void 0 : _b[inverted ? "inverted" : "regular"]) == null ? void 0 : _c.color};
    font-size: ${(_f = (_e = (_d = theme == null ? void 0 : theme.typography) == null ? void 0 : _d.link) == null ? void 0 : _e[inverted ? "inverted" : "regular"]) == null ? void 0 : _f.fontSize};
    font-weight: ${(_i = (_h = (_g = theme == null ? void 0 : theme.typography) == null ? void 0 : _g.link) == null ? void 0 : _h[inverted ? "inverted" : "regular"]) == null ? void 0 : _i.fontWeight};
    text-decoration: ${(_l = (_k = (_j = theme == null ? void 0 : theme.typography) == null ? void 0 : _j.link) == null ? void 0 : _k[inverted ? "inverted" : "regular"]) == null ? void 0 : _l.textDecoration};
  `;
}}
`;
const Link = (_a) => {
  var _b = _a, {
    component
  } = _b, props = __objRest(_b, [
    "component"
  ]);
  if (component) {
    const Component2 = styled(component)`
      ${linkcss}
    `;
    return /* @__PURE__ */ jsx(Component2, __spreadValues({}, props));
  }
  const Component = styled.a`
    ${linkcss}
  `;
  return /* @__PURE__ */ jsx(Component, __spreadValues({}, props));
};
const Paragraph = styled.p`
  ${({
  theme,
  inverted
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return css`
    flex-flow: row;

    color: ${(_c = (_b = (_a = theme == null ? void 0 : theme.typography) == null ? void 0 : _a.paragraph) == null ? void 0 : _b[inverted ? "inverted" : "regular"]) == null ? void 0 : _c.color};
    font-size: ${(_f = (_e = (_d = theme == null ? void 0 : theme.typography) == null ? void 0 : _d.paragraph) == null ? void 0 : _e[inverted ? "inverted" : "regular"]) == null ? void 0 : _f.fontSize};
    font-weight: ${(_i = (_h = (_g = theme == null ? void 0 : theme.typography) == null ? void 0 : _g.paragraph) == null ? void 0 : _h[inverted ? "inverted" : "regular"]) == null ? void 0 : _i.fontWeight};
    text-decoration: ${(_l = (_k = (_j = theme == null ? void 0 : theme.typography) == null ? void 0 : _j.paragraph) == null ? void 0 : _k[inverted ? "inverted" : "regular"]) == null ? void 0 : _l.textDecoration};
  `;
}}
`;
const Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  ${({
  theme
}) => css`
    ${up("mobile")} {
      max-width: ${theme.breakpoints.mobile};
    }
    ${up("tablet")} {
      max-width: ${theme.breakpoints.tablet};
    }
    ${up("desktop")} {
      max-width: ${theme.breakpoints.desktop};
    }
    ${up("widescreen")} {
      max-width: ${theme.breakpoints.widescreen};
    }
    ${up("fullhd")} {
      max-width: ${theme.breakpoints.fullhd};
    }
  `}
`;
const Container = ({
  children
}) => {
  return /* @__PURE__ */ jsx(Section, {
    children
  });
};
export { Container, Header1, Link, NavBar, Paragraph };
