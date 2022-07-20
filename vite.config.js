import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import TMPlugin from 'vite-plugin-tm-userscript';

const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "~": path.resolve(__dirname, "node_modules"),
        },
    },
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue"],
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(pathSrc, "plugins", "auto-imports.d.ts"),
            exclude: ["**/dist/**"],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dirs: [path.resolve(pathSrc)],
            dts: path.resolve(pathSrc, "plugins", "components.d.ts"),
        }),
        TMPlugin({
            entry: 'src/main.js',
            externalGlobals: {
                vue: 'Vue',
                'element-plus': 'ElementPlus',
                'cheerio': 'cheerio'
            }
        })
    ],
});
