"use client";

var _MenuOpenIcon, _MenuIcon, _Toolbar;
import * as React from "react";
import PropTypes from "prop-types";
import { styled, useTheme } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import Card from "@mui/material/Card";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Copyright from "../../components/Copyright";
import ModeSwitch from "../../components/ModeSwitch";
import {
  BrandingContext,
  NavigationContext,
  WindowContext,
} from "../shared/context.js";
import { Account } from "../Account/index.js";
import { DashboardSidebarSubNavigation } from "./DashboardSidebarSubNavigation.js";
import { ToolbarActions } from "./ToolbarActions.js";
import { AppTitle } from "./AppTitle.js";
import {
  getDrawerSxTransitionMixin,
  getDrawerWidthTransitionMixin,
} from "./utils.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import zIndex from "@mui/material/styles/zIndex.js";
const AppBar = styled(MuiAppBar)(({ theme }) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
}));
/**
 *
 * Demos:
 *
 * - [Dashboard Layout](https://mui.com/toolpad/core/react-dashboard-layout/)
 *
 * API:
 *
 * - [DashboardLayout API](https://mui.com/toolpad/core/api/dashboard-layout)
 */
function DashboardLayout(props) {
  const {
    children,
    branding: brandingProp,
    navigation: navigationProp,
    disableCollapsibleSidebar = false,
    defaultSidebarCollapsed = false,
    hideNavigation = false,
    sidebarExpandedWidth = 320,
    slots,
    slotProps,
    sx,
  } = props;
  const theme = useTheme();
  const brandingContext = React.useContext(BrandingContext);
  const navigationContext = React.useContext(NavigationContext);
  const appWindowContext = React.useContext(WindowContext);
  const branding = {
    ...brandingContext,
    ...brandingProp,
  };
  const navigation = navigationProp ?? navigationContext;
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] =
    React.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] =
    React.useState(false);
  const isOverSmViewport = useMediaQuery(
    theme.breakpoints.up("sm"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    }
  );
  const isOverMdViewport = useMediaQuery(
    theme.breakpoints.up("md"),
    appWindowContext && {
      matchMedia: appWindowContext.matchMedia,
    }
  );
  const isNavigationExpanded =
    isOverMdViewport ? isDesktopNavigationExpanded : isMobileNavigationExpanded;
  const setIsNavigationExpanded = React.useCallback(
    (newExpanded) => {
      if (isOverMdViewport) {
        setIsDesktopNavigationExpanded(newExpanded);
      } else {
        setIsMobileNavigationExpanded(newExpanded);
      }
    },
    [isOverMdViewport]
  );

  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] =
    React.useState(isNavigationExpanded);
  React.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyExpanded(false);
    return () => {};
  }, [isNavigationExpanded, theme]);
  const selectedItemIdRef = React.useRef("");
  const handleSetNavigationExpanded = React.useCallback(
    (newExpanded) => () => {
      setIsNavigationExpanded(newExpanded);
    },
    [setIsNavigationExpanded]
  );
  const toggleNavigationExpanded = React.useCallback(() => {
    setIsNavigationExpanded(!isNavigationExpanded);
  }, [isNavigationExpanded, setIsNavigationExpanded]);

  const handleNavigationLinkClick = React.useCallback(() => {
    selectedItemIdRef.current = "";
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);

  // If useEffect was used, the reset would also happen on the client render after SSR which we don't need
  React.useMemo(() => {
    if (navigation) {
      selectedItemIdRef.current = "";
    }
  }, [navigation]);
  const isDesktopMini =
    !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini =
    !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const getMenuIcon = React.useCallback(() => {
    return /*#__PURE__*/ _jsx(IconButton, {
      onClick: toggleNavigationExpanded,
      children: _MenuIcon || (_MenuIcon = /*#__PURE__*/ _jsx(MenuIcon, {})),
    });
  }, [toggleNavigationExpanded]);
  const hasDrawerTransitions =
    isOverSmViewport && (!disableCollapsibleSidebar || isOverMdViewport);
  const ToolbarActionsSlot = slots?.toolbarActions ?? ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? Account;
  const SidebarFooterSlot = slots?.sidebarFooter ?? Account;
  const getDrawerContent = React.useCallback(
    (isMini, viewport) =>
      /*#__PURE__*/ _jsxs(React.Fragment, {
        children: [
          /*#__PURE__*/ _jsx(Box, {
            width: "100%",
            height: "1%",
            sx: {
              pt: 8,
            },
          }),
          /*#__PURE__*/ _jsxs(Box, {
            component: "nav",
            sx: {
              mr:2,
              height: "80%",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "auto",
            },
            children: [
              /*#__PURE__*/ _jsx(DashboardSidebarSubNavigation, {
                subNavigation: navigation,
                onLinkClick: handleNavigationLinkClick,
                isMini: isMini,
                isFullyExpanded: isNavigationFullyExpanded,
                hasDrawerTransitions: hasDrawerTransitions,
                selectedItemId: selectedItemIdRef.current,
              }),
            ],
          }),
        ],
      }),
    [
      SidebarFooterSlot,
      handleNavigationLinkClick,
      hasDrawerTransitions,
      isNavigationFullyExpanded,
      navigation,
      slotProps?.sidebarFooter,
    ]
  );

  const getDrawerSharedSx = React.useCallback(
    (isMini, isTemporary) => {
      const drawerWidth = isMini ? 70 : sidebarExpandedWidth;
      return {
        displayPrint: "none",
        width: drawerWidth,
        flexShrink: 0,
        ...getDrawerWidthTransitionMixin(isNavigationExpanded),
        ...(isTemporary ?
          {
            position: "absolute",
          }
        : {}),
        [`& .MuiDrawer-paper`]: {
          position: "absolute",
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundImage: "none",
        },
      };
    },
    [isNavigationExpanded, sidebarExpandedWidth]
  );

  const layoutRef = React.useRef(null);
  return /*#__PURE__*/ _jsxs(Box, {
    ref: layoutRef,
    sx: {
      position: "relative",
      display: "flex",
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
      ...sx,
    },
    children: [
      /*#__PURE__*/ _jsx(AppBar, {
        color: "inherit",
        position: "absolute",
        sx: {
          displayPrint: "none",
        },
        children: [
          /*#__PURE__*/ _jsx(Box, {
            position: "fixed",
            left: "2px",
            bottom: "-1px",
            children: /*#__PURE__*/ _jsx(SidebarFooterSlot, {
              ...slotProps?.sidebarFooter,
            }),
            disabled: true,
            zIndex: theme.zIndex.drawer + 2,
          }),

          /*#__PURE__*/ _jsx(Box, {
            position: "fixed",
            left: "12px",
            top: "10px",
            children: [
              getMenuIcon(), 
              getMenuIcon()
            ],
            zIndex: theme.zIndex.drawer + 2,
          }),

          /*#__PURE__*/ _jsx(Box, {
            position: "fixed",
            left: "270px",
            bottom: "4px",
            children: ModeSwitch(isNavigationExpanded),
            zIndex: theme.zIndex.drawer + 2,
          }),
        ],
      }),

      /*#__PURE__*/ _jsxs(React.Fragment, {
        children: [
          /*#__PURE__*/ _jsx(Drawer, {
            container: layoutRef.current,
            variant: "temporary",
            open: isMobileNavigationExpanded,
            onClose: handleSetNavigationExpanded(false),
            ModalProps: {
              keepMounted: true, // Better open performance on mobile.
            },
            sx: {
              display: {
                xs: "block",
                sm: disableCollapsibleSidebar ? "block" : "none",
                md: "none",
              },
              ...getDrawerSharedSx(false, true),
            },
            children: [
              getDrawerContent(false, "phone"),
              logoLoad(theme.zIndex.drawer + 2, isNavigationExpanded),
            ],
          }),

          /*#__PURE__*/ _jsx(Drawer, {
            variant: "permanent",
            sx: {
              display: {
                xs: "none",
                sm: disableCollapsibleSidebar ? "none" : "block",
                md: "none",
              },
              ...getDrawerSharedSx(isMobileMini, false),
            },
            children: [getDrawerContent(isMobileMini, "tablet"), fill()],
          }),

          /*#__PURE__*/ _jsx(Drawer, {
            variant: "permanent",
            sx: {
              display: {
                xs: "none",
                md: "block",
              },
              ...getDrawerSharedSx(isDesktopMini, false),
            },
            children: [
              getDrawerContent(isDesktopMini, "desktop"),
              logoLoad(theme.zIndex.drawer + 2, isNavigationExpanded),
            ],
          }),
        ],
      }),

      /*#__PURE__*/ _jsx(Box, {


        sx: {
          overflowWrap: "break-word",
          p: 1,
          m:2,
          display: "flex",
     
          flex: 1,
          overflow: "auto",
          sx: {
            position: "relative",
            display: "flex",
            overflow: "hidden",
            height: "100vh",
            width: "100vw",
            ...sx,
          },
        },
        children: [         /*#__PURE__*/ _jsx(Box, {
          component: "main",

          sx: {
            overflowWrap: "break-word",
            p: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            overflow: "auto",
          },
          children: [children, <Copyright />],
        })],
      }),
 
    
    ],
  });
}

function logoLoad(zI, show) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{ p: 0.5, height: "75", width: "75", zIndex: zI }}>
      <img
        src="https://github.com/TonyRHouston/Webpage/blob/main/darkLogo.png?raw=true"
        alt="FoM"
        style={{
          zIndex: 1000,
          flex: 1,
          width: "100%",
          height: "100%",
          opacity: show ? 1 : 0,
        }}
      />
    </Box>
  );
}
function fill() {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
  
      sx={{ bottom:0, p: 0.5, height: "55px", width: "0"}}>
      <input

        style={{
          zIndex: 1000,
          flex: 1,
          width: "100%",
          height: "100%",
          opacity:0
        }}
      />
    </Box>
  );
}
process.env.NODE_ENV !== "production" ?
  (DashboardLayout.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Branding options for the dashboard.
     * @default null
     */
    branding: PropTypes.shape({
      homeUrl: PropTypes.string,
      logo: PropTypes.node,
      title: PropTypes.string,
    }),
    /**
     * The content of the dashboard.
     */
    children: PropTypes.node,
    /**
     * Whether the sidebar should start collapsed in desktop size screens.
     * @default false
     */
    defaultSidebarCollapsed: PropTypes.bool,
    /**
     * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
     * @default false
     */
    disableCollapsibleSidebar: PropTypes.bool,
    /**
     * Whether the navigation bar and menu icon should be hidden
     * @default false
     */
    hideNavigation: PropTypes.bool,
    /**
     * Navigation definition for the dashboard.
     * @default []
     */
    navigation: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.shape({
          action: PropTypes.node,
          children: PropTypes.arrayOf(
            PropTypes.oneOfType([
              PropTypes.object,
              PropTypes.shape({
                kind: PropTypes.oneOf(["header"]).isRequired,
                title: PropTypes.string.isRequired,
              }),
              PropTypes.shape({
                kind: PropTypes.oneOf(["divider"]).isRequired,
              }),
            ]).isRequired
          ),
          icon: PropTypes.node,
          kind: PropTypes.oneOf(["page"]),
          pattern: PropTypes.string,
          segment: PropTypes.string,
          title: PropTypes.string,
        }),
        PropTypes.shape({
          kind: PropTypes.oneOf(["header"]).isRequired,
          title: PropTypes.string.isRequired,
        }),
        PropTypes.shape({
          kind: PropTypes.oneOf(["divider"]).isRequired,
        }),
      ]).isRequired
    ),
    /**
     * Width of the sidebar when expanded.
     * @default 320
     */
    sidebarExpandedWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    /**
     * The props used for each slot inside.
     * @default {}
     */
    slotProps: PropTypes.shape({
      appTitle: PropTypes.shape({
        branding: PropTypes.shape({
          homeUrl: PropTypes.string,
          logo: PropTypes.node,
          title: PropTypes.string,
        }),
      }),
      sidebarFooter: PropTypes.shape({
        mini: PropTypes.bool.isRequired,
      }),
      toolbarAccount: PropTypes.shape({
        localeText: PropTypes.shape({
          iconButtonAriaLabel: PropTypes.string,
          signInLabel: PropTypes.string,
          signOutLabel: PropTypes.string,
        }),
        slotProps: PropTypes.shape({
          popover: PropTypes.object,
          popoverContent: PropTypes.object,
          preview: PropTypes.object,
          signInButton: PropTypes.object,
          signOutButton: PropTypes.object,
        }),
        slots: PropTypes.shape({
          popover: PropTypes.elementType,
          popoverContent: PropTypes.elementType,
          preview: PropTypes.elementType,
          signInButton: PropTypes.elementType,
          signOutButton: PropTypes.elementType,
        }),
      }),
      toolbarActions: PropTypes.object,
    }),
    /**
     * The components used for each slot inside.
     * @default {}
     */
    slots: PropTypes.shape({
      appTitle: PropTypes.elementType,
      sidebarFooter: PropTypes.elementType,
      toolbarAccount: PropTypes.elementType,
      toolbarActions: PropTypes.elementType,
    }),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  })
: void 0;

export { DashboardLayout };
