var _OrderIcon;
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import { AuthenticationContext } from "../AppProvider/AppProvider.js";
import { useLocaleText } from "../shared/locales/LocaleContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 *
 * Demos:
 *
 * - [Account](https://mui.com/toolpad/core/react-account/)
 *
 * API:
 *
 * - [SignOutButton API](https://mui.com/toolpad/core/api/sign-out-button)
 */
function OrdersButton() {
  const authentication = React.useContext(AuthenticationContext);
  const localeText = useLocaleText();
  return /*#__PURE__*/_jsx(Button, {
    disabled: !authentication,
    variant: "outlined",
    size: "small",

    onClick: authentication?.signOut,
    sx: {
      textTransform: 'capitalize',
      fontWeight: 'normal',
      filter: 'opacity(0.9)',
      transition: 'filter 0.2s ease-in',
      '&:hover': {
        filter: 'opacity(1)'
      }
    },
    startIcon: _OrderIcon || (_OrderIcon = /*#__PURE__*/_jsx(ViewListOutlinedIcon, {})),
    
    children: localeText.ordersLabel
  });
}
process.env.NODE_ENV !== "production" ? OrdersButton.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: PropTypes.node
} : void 0;
export { OrdersButton };