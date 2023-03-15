import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [
 
   {    key: 'dashMenu',
        path: '/home',
        title: 'Dashboard',
        translateKey: 'dashMenu',
        icon: 'dashboard',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu:[]

},

{


        key: 'groupMenu',
        path: '/projects',
        title: 'Projects',
        translateKey: 'nav.collapseMenu.projectMenu',
        icon: 'projects',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseMenu',
                path: '/dashboard',
                title: 'Dashboard',
                translateKey: 'nav.collapseMenu.dashMenu',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseMenu',
                path: '/collapse-menu-item-view-2',
                title: 'Project List',
                translateKey: 'nav.collapseMenu.projMenu',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
             {
                key: 'collapseMenu.item3',
                path: '/collapse-menu-item-view-3',
                title: 'Screen Board',
                translateKey: 'nav.collapseMenu.item3',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
    {
        key: 'crmMenu',
        path: '/crm',
        title: 'CRM',
        translateKey: 'crm',
        icon: 'app-icon',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
            {
                key: 'groupMenu.single',
                path: '/crm/dashboard',
                title: 'Dashboard',
                translateKey: 'dashboard',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'groupMenu.collapse',
                path: '',
                title: 'Group collapse menu',
                translateKey: 'nav.groupMenu.collapse.collapse',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu.collapse.item1',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Menu item 1',
                        translateKey: 'nav.groupMenu.collapse.item1',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.item2',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Menu item 2',
                        translateKey: 'nav.groupMenu.collapse.item2',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                ],
            },
        ],
    },
]

export default navigationConfig
