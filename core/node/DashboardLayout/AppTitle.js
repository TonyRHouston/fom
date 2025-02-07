"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppTitle = AppTitle;
var React = _interopRequireWildcard(require("react"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _material = require("@mui/material");
var _Link = require("../shared/Link");
var _ToolpadLogo2 = require("./ToolpadLogo");
var _branding = require("../shared/branding");
var _jsxRuntime = require("react/jsx-runtime");
var _ToolpadLogo;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const LogoContainer = (0, _material.styled)('div')({
  position: 'relative',
  height: 40,
  '& img': {
    maxHeight: 40
  }
});
/**
 * @ignore - internal component.
 */
function AppTitle(props) {
  const theme = (0, _material.useTheme)();
  const defaultTitle = (0, _branding.useApplicationTitle)();
  const title = props?.branding?.title ?? defaultTitle;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.Link, {
    href: props?.branding?.homeUrl ?? '/',
    style: {
      textDecoration: 'none'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
      direction: "row",
      alignItems: "center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LogoContainer, {
        children: props?.branding?.logo ?? (_ToolpadLogo || (_ToolpadLogo = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToolpadLogo2.ToolpadLogo, {
          size: 40
        })))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h6",
        sx: {
          color: (theme.vars ?? theme).palette.primary.main,
          fontWeight: '700',
          ml: 1,
          whiteSpace: 'nowrap'
        },
        children: title
      })]
    })
  });
}