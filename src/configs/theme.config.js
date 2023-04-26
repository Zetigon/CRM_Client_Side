import { MODE_DARK, MODE_LIGHT, NAV_MODE_LIGHT, THEME_ENUM } from 'constants/theme.constant'

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */

export const themeConfig = {

    themeColor: MODE_LIGHT,
    direction: THEME_ENUM.DIR_LTR,
    mode: MODE_LIGHT,
    locale: 'en',
    primaryColorLevel: 600,
    cardBordered: false,
    panelExpand: false,
    controlSize: 'lg',
    navMode: NAV_MODE_LIGHT,
    layout: {
        type: 'modern',
        sideNavCollapse: false,
    },

}
