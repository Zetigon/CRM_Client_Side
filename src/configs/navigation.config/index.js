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
                translateKey: 'nav.collapseMenu.Dashboard',
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
                title: 'Scrum Board',
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
                title: 'CRM DASHBOARD',
                translateKey: 'dashboard',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'groupMenu',
                path: '',
                title: 'CRM LINKS',
                translateKey: 'nav.groupMenu.crmMenu',
                icon: 'groupCollapseMenu',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [
                    {
                        key: 'groupMenu',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'Customer',
                        translateKey: 'nav.groupMenu.customer',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Calendar',
                        translateKey: 'nav.groupMenu.Calendar',
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
