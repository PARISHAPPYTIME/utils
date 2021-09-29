import { Nullable } from '#/global'
import { defineStore } from 'pinia'

interface UserInfo {
    name: string
}

interface UserState {
    userInfo: Nullable<UserInfo>
    token?: string
    roleList: any[]
}

export const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({
        userInfo: null,
        token: undefined,
        roleList: [],
    }),
    getters: {
        getUserInfo(): UserInfo {
            return this.userInfo || { name: '游客' }
        },
        getToken(): string {
            return this.token || ''
        },
    },
    actions: {
        setToken(tok: string | undefined) {
            this.token = tok
        },
    },
})
