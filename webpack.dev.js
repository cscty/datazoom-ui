const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// 加载eslint，相当于eslint-loader
const ESLintPlugin = require("eslint-webpack-plugin");
// 加载stylelint,相当于stylelint-loader
const StyleLintPlugin = require("stylelint-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    return merge(common, {
        mode: "development",
        entry: {
            // 对象形式，key代表打包入口后的[name]
            index: "./examples/index.ts",
        },
        plugins: [
            new ESLintPlugin({ extensions: ["ts", "js", "vue"] }),
            new StyleLintPlugin({ files: ["**/*.{vue,html,css,less}"] }),
            new HtmlWebpackPlugin({
                title: "组件示例",
                template: "./examples/index.html",
            }),
        ],
        devServer: {
            hot: true,
        },
        devtool: "inline-source-map",
    });
};
