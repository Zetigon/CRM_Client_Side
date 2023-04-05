import React from 'react'
import authRoute from './authRoute'

export const publicRoutes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'Dashboard',
        path: '/home',
        component: React.lazy(() => import('views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'Accounts',
        path: '/people/accounts',
        component: React.lazy(() => import('views/People/Accounts/accounts')),
        authority: [],
    },

        {
        key: 'Accounts',
        path: '/people/accounts/add_account',
        component: React.lazy(() => import('views/People/Accounts/addAccount')),
        authority: [],
    },
    {
        key: 'Contacts',
        path: '/people/contacts',
        component: React.lazy(() => import('views/People/Contacts/contacts')),
        authority: [],
    },
    {
        key: 'Notes',
        path: '/people/notes',
        component: React.lazy(() => import('views/People/Notes/notes')),
        authority: [],
    },
    {
        key: 'Tasks',
        path: '/people/tasks',
        component: React.lazy(() =>
            import('views/People/Tasks/tasks')
        ),
        authority: [],
    },
    {
        key: 'Document',
        path: '/people/documents',
        component: React.lazy(() =>
            import('views/People/Documents/documents')
        ),
        authority: [],
    },
       {
        key: 'Crm',
        path: '/crm/dashboard',
        component: React.lazy(() =>
            import('views/Crm/dashboard/crmDashboard')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: React.lazy(() =>
            import('views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
