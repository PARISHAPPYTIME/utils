import axios, { AxiosError, AxiosInstance, AxiosPromise } from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 7000
})

axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    return config
})

axiosInstance.interceptors.response.use((response: AxiosResponse): AxiosPromise => {
    return response.data
})

export function server<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
        axiosInstance
            .request<any, AxiosResponse<T>>(config)
            .then((res: AxiosResponse<T>) => {
                resolve(res as unknown as Promise<T>)
            })
            .catch((e: Error | AxiosError) => {
                reject(e)
            })
    })
}

export default axiosInstance
