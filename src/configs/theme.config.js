import { MODE_DARK, MODE_LIGHT, NAV_MODE_LIGHT, THEME_ENUM } from 'constants/theme.constant'

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */

export const themeConfig = {

    themeColor: MODE_LIGHT,
    direction: THEME_ENUM.DIR_LTR,
    mode: THEME_ENUM.MODE_DARK,
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: false,
    panelExpand: false,
    controlSize: 'md',
    navMode: THEME_ENUM.MODE_LIGHT,
    layout: {
        type: THEME_ENUM.LAYOUT_TYPE_MODERN,
        sideNavCollapse: false,
    },

}
