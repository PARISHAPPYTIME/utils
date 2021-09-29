import type { App } from 'vue'

import { permissionDirective } from './permission'
import { localhostDirective } from './localhost'

export const setupDirective = (app: App): void => {
    app.directive('permission', permissionDirective)
    app.directive('localhost', localhostDirective)
}