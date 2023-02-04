import { defaultTheme } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";

import path from "path";
export default {
    title: "dingzheng-ui",
    description: "dingzheng-ui is a pure component library",
    base:"dingzheng-ui",
    theme: defaultTheme({
        // 默认主题配置
        navbar,
        sidebar,
    }),
    plugins: [
        // 将./components文件夹的组件注册为全局组件
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
        }),
    ],
};
