import { defaultTheme } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import path from "path";
export default {
    title: "dingzheng-ui",
    description: "dingzheng-ui is a pure component library",
    base:"dingzheng-ui",
    theme: defaultTheme({
        // 默认主题配置
        navbar: [
            {
                text: "首页",
                link: "/",
            },
            {
                text: "指南",
                link: "/componentDocs/install.md",
            },
            {
                text: "github",
                link: "https://github.com/cscty/dingzhen-ui",
            },
        ],
        sidebar: [
            {
                text: "快速上手",
                children: [
                    {
                        text: "安装使用",
                        link: "/componentDocs/install",
                    },
                ],
            },
            {
                text: "按钮组件",
                link: "/componentDocs/button.md",
            },
        ],
        locales: {
            "/": {
                selectLanguageName: "English",
            },
            "/zh/": {
                selectLanguageName: "简体中文",
            },
        },
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
        }),
    ],
};
