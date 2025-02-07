import * as React from 'react';
import { SxProps } from '@mui/material';
import { type AccountProps } from '../Account';
import { AppTitleProps } from './AppTitle';
import type { Branding, Navigation } from '../AppProvider';
export interface SidebarFooterProps {
    mini: boolean;
}
export interface DashboardLayoutSlotProps {
    appTitle?: AppTitleProps;
    toolbarActions?: {};
    toolbarAccount?: AccountProps;
    sidebarFooter?: SidebarFooterProps;
}
export interface DashboardLayoutSlots {
    /**
     * The component used for the app title section in the layout header.
     * @default Link
     */
    appTitle?: React.ElementType;
    /**
     * The toolbar actions component used in the layout header.
     * @default ToolbarActions
     */
    toolbarActions?: React.JSXElementConstructor<{}>;
    /**
     * The toolbar account component used in the layout header.
     * @default Account
     */
    toolbarAccount?: React.JSXElementConstructor<AccountProps>;
    /**
     * Optional footer component used in the layout sidebar.
     * @default null
     */
    sidebarFooter?: React.JSXElementConstructor<SidebarFooterProps>;
}
export interface DashboardLayoutProps {
    /**
     * The content of the dashboard.
     */
    children: React.ReactNode;
    /**
     * Branding options for the dashboard.
     * @default null
     */
    branding?: Branding | null;
    /**
     * Navigation definition for the dashboard.
     * @default []
     */
    navigation?: Navigation;
    /**
     * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
     * @default false
     */
    disableCollapsibleSidebar?: boolean;
    /**
     * Whether the sidebar should start collapsed in desktop size screens.
     * @default false
     */
    defaultSidebarCollapsed?: boolean;
    /**
     * Whether the navigation bar and menu icon should be hidden
     * @default false
     */
    hideNavigation?: boolean;
    /**
     * Width of the sidebar when expanded.
     * @default 320
     */
    sidebarExpandedWidth?: number | string;
    /**
     * The components used for each slot inside.
     * @default {}
     */
    slots?: DashboardLayoutSlots;
    /**
     * The props used for each slot inside.
     * @default {}
     */
    slotProps?: DashboardLayoutSlotProps;
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps;
}
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
declare function DashboardLayout(props: DashboardLayoutProps): React.JSX.Element;
declare namespace DashboardLayout {
    var propTypes: any;
}
export { DashboardLayout };
