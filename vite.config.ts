import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
// import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(),
        VueJsx(),
        // styleImport({
        //     libs: [
        //         {
        //             libraryName: 'ant-design-vue',
        //             esModule: true,
        //             resolveStyle: (name) => {
        //                 return `ant-design-vue/es/${name}/style/css`
        //             },
        //         },
        //     ],
        // }),
    ],
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: pathResolve('src') + '/',
            },
        ],
    },
})
