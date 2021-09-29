import type { App } from 'vue'
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import { basicRouter } from '@/router/modules/basic'
import { useUserStore } from '@/store/modules/user'

const routes: RouteRecordRaw[] = [...basicRouter]

const router = createRouter({
    routes,
    history: createWebHashHistory('/'),
})

export function createPermissionGuard(router: Router) {
    const userStore = useUserStore()
    const token = userStore.token
    router.beforeEach(async (to, from, next) => {
        // if (to.path === '/login') {
        next()
        // }
        // if (token) {
        //     next()
        // } else {
        //     next({
        //         path: '/commonList',
        //         replace: true,
        //     })
        // }
    })

    router.afterEach(() => {})
}

export const setupRouter = (app: App) => {
    app.use(router)
    // 添加路由守卫
    createPermissionGuard(router)
}

export default router
