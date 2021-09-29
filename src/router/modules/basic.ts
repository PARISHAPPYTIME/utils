import { RouteRecordRaw } from 'vue-router'
import BaseLayout from '@/layout/index.vue'

export const basicRouter: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/home',
        component: BaseLayout,
        children: [
            {
                path: 'home',
                component: () => import('@/views/home.vue'),
            },
            {
                path: 'file',
                component: () => import('@/views/file.vue'),
            },
            {
                path: 'about',
                component: () => import('@/views/about.vue'),
            },
            {
                path: 'table',
                component: () => import('@/views/table.vue'),
            },
            {
                path: 'commonList',
                component: () => import('@/views/common/commonList/index.vue'),
            },
        ],
    },
]
