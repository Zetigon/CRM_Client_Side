import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from 'constants/navigation.constant'

const navigationConfig = [
  
   
  
    {
        key: 'appsMenu',
        path: '/',
        title: 'APPS',
        translateKey: 'apps',
        icon: 'app-icon',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
          
            {
                key: 'groupMenu.peopleMenu',
                path: '/people',
                title: 'People',
                translateKey: 'nav.groupMenu.collapse.peopleMenu',
                icon: 'peopleIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.account',
                path: '/people/accounts',
                title: 'Accounts',
                translateKey: 'account',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                    {
                        key: 'groupMenu.collapse.contacts',
                        path: '/people/contacts',
                        title: 'Contacts',
                        translateKey: 'nav.groupMenu.collapse.contacts',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.notes',
                        path: '/people/notes',
                        title: 'Notes',
                        translateKey: 'nav.groupMenu.collapse.notes',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },


                     {
                        key: 'groupMenu.collapse.tasks',
                        path: '/people/tasks',
                        title: 'Tasks',
                        translateKey: 'nav.groupMenu.collapse.tasks',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },

                    
                     {
                        key: 'groupMenu.collapse.document',
                        path: '/people/documents',
                        title: 'Documents',
                        translateKey: 'nav.groupMenu.collapse.document',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    
                ],
            },
        ],
    },
          
    {
                key: 'groupMenu.peopleMenu',
                path: '/people/payments',
                title: 'Payments',
                translateKey: 'nav.groupMenu.collapse.peopleMenu',
                icon: 'paymentIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.account',
                path: '/people/accounts',
                title: 'View Payments',
                translateKey: 'account',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                    {
                        key: 'groupMenu.collapse.contactMenu',
                        path: '/people/contacts/',
                        title: 'Plans',
                        translateKey: 'nav.groupMenu.collapse.contactMenu',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.payments',
                        path: '/virtual_terminal/',
                        title: 'Virtual Terminal',
                        translateKey: 'nav.groupMenu.collapse.payments',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    
                ],
    },

    {


                key: 'groupMenu.peopleMenu',
                path: '/marketing',
                title: 'Marketing',
                translateKey: 'nav.groupMenu.collapse.peopleMenu',
                icon: 'marketingIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.segments',
                path: '/marketing/segments',
                title: 'Segments',
                translateKey: 'nav.segments',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },


                {
                key: 'groupMenu.collapse.contactMenu',
                path: '/email_segments/campaigns/',
                title: 'Email Campaigns',
                translateKey: 'nav.groupMenu.collapse.contactMenu',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                
                    
            ],


    },

    {

        
                key: 'groupMenu.peopleMenu',
                path: '/reports/',
                title: 'Report',
                translateKey: 'nav.groupMenu.collapse.peopleMenu',
                icon: 'reportIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.reportMenu',
                path: '/reports/report_view',
                title: 'View Reports',
                translateKey: 'nav.reportMenu',
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
                key: 'groupMenu.marketing',
                path: '/crm',
                title: 'CRM',
                translateKey: 'nav.groupMenu.collapse.marketing',
                icon: 'userCrm',
                type: NAV_ITEM_TYPE_COLLAPSE,
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
                        key: 'groupMenu.collapse.people',
                        path: '/group-collapse-menu-item-view-1',
                        title: 'People',
                        translateKey: 'nav.groupMenu.collapse.people',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.payments',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Payments',
                        translateKey: 'nav.groupMenu.collapse.payments',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    
                    
                    {
                        key: 'groupMenu.collapse.marketingMenu',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Marketing',
                        translateKey: 'nav.groupMenu.collapse.marketingMenu',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },

                    {
                        key: 'groupMenu.collapse.reportMenu',
                        path: '/group-collapse-menu-item-view-2',
                        title: 'Report',
                        translateKey: 'nav.groupMenu.collapse.reportMenu',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },


                    
                ],
            },
        ],
    },
       
    {
                key: 'groupMenu.marketing',
                path: '/knowledge_base/',
                title: 'Knowledge Base',
                translateKey: 'nav.groupMenu.collapse.marketing',
                icon: 'knowledge',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.helpCenter',
                path: '/projects/dashboard',
                title: 'Step-by-Step Guide',
                translateKey: 'helpCenter',
                icon:'',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                


                {
                key: 'groupMenu.collapse.tutMenu',
                path: '/projects/project-listed',
                title: 'Tutorial Video',
                translateKey: 'nav.groupMenu.collapse.tutMenu',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
              
                    
                ],
    },
    
    {
        key: 'appsMenu',
        path: '/crm',
        title: 'ACCOUNT',
        translateKey: 'account',
        icon: 'app-icon',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
          
            {
                key: 'groupMenu.settings',
                path: '/settings',
                title: 'Account',
                translateKey: 'nav.groupMenu.collapse.settings',
                icon: 'userProfileIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.orgMenu',
                path: '/settings/organization_settings',
                title: 'Settings',
                translateKey: 'orgMenu',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                    {
                        key: 'groupMenu.collapse.team',
                        path: '/settings/team_settings/',
                        title: 'Activity Log',
                        translateKey: 'nav.groupMenu.collapse.team',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
         

                    
                    
                ],
            },
        ],
    },

    {
        key: 'appsMenu',
        path: '/crm',
        title: 'Settings',
        translateKey: 'settings',
        icon: 'app-icon',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [],
        subMenu: [
          
            {
                key: 'groupMenu.settings',
                path: '/settings',
                title: 'Settings',
                translateKey: 'nav.groupMenu.collapse.settings',
                icon: 'settingIcon',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [],
                subMenu: [


                {
                key: 'groupMenu.orgMenu',
                path: '/settings/organization_settings',
                title: 'Organization',
                translateKey: 'orgMenu',
                icon: 'dashboard',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
                },
                    {
                        key: 'groupMenu.collapse.team',
                        path: '/settings/team_settings/',
                        title: 'Team',
                        translateKey: 'nav.groupMenu.collapse.team',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },
                    {
                        key: 'groupMenu.collapse.user',
                        path: '/settings/user_settings/',
                        title: 'User',
                        translateKey: 'nav.groupMenu.collapse.user',
                        icon: '',
                        type: NAV_ITEM_TYPE_ITEM,
                        authority: [],
                        subMenu: [],
                    },

                        {
                        key: 'groupMenu.collapse.dataMenu',
                        path: '/settings/data_settings/',
                        title: 'Data',
                        translateKey: 'nav.groupMenu.collapse.dataMenu',
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
