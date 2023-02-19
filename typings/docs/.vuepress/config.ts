import { defaultTheme } from "vuepress";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
import { defineUserConfig } from "vuepress";
import plugin from "./plugin";
export default defineUserConfig({
    lang: "zh-CN",
    title: "datazoom-ui",
    description: "datazoom-ui is a pure component library",
    base: "/datazoom-ui/",
    head: [["link", { rel: "icon", href: "/datazoom-ui/favicon.ico" }]],
    theme: defaultTheme({
        // 默认主题配置
        navbar,
        sidebar,
    }),
    plugins: [plugin],
});
