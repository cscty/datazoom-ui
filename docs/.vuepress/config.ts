import { defaultTheme } from "vuepress";
import navbar from "./config/navbar";
import sidebar from "./config/sidebar";
import { defineUserConfig } from "vuepress";
import plugin from "./plugin";
export default defineUserConfig({
    lang: "zh-CN",
    title: "dingzhen-ui",
    description: "dingzhen-ui is a pure component library",
    head: [["link", { rel: "icon", href: "/logo.jpg" }]],
    base: "/dingzhen-ui/",
    theme: defaultTheme({
        // 默认主题配置
        navbar,
        sidebar,
    }),
    plugins: [plugin],
});
