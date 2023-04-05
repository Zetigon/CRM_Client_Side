import { MODE_DARK, MODE_LIGHT, NAV_MODE_LIGHT, THEME_ENUM } from 'constants/theme.constant'

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */

export const themeConfig = {

    themeColor: "light",
    direction: THEME_ENUM.DIR_LTR,
    mode: "light",
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: false,
    panelExpand: false,
    controlSize: 'lg',
    navMode: "light",
    layout: {
        type: 'modern',
        sideNavCollapse: false,
    },

}
