const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// 将css代表抽离成一个css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = () => {
    return merge(common, {
        mode: "production",
        devtool: "source-map",
        entry: {
            // 对象形式，key代表打包入口后的[name]
            index: "./packages/index.ts",
        },
        output: {
            // 开发环境不能带./
            publicPath: "./",
        },
        module: {
            rules: [
                // {
                //     test: /\.css$/,
                //     use: [MiniCssExtractPlugin.loader, "css-loader"],
                // },
                // {
                //     test: /\.less$/,
                //     use: [
                //         MiniCssExtractPlugin.loader,
                //         "css-loader",
                //         "less-loader",
                //     ],
                // },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
        ],
        // 做优化
        optimization: {
            // runtimeChunk: "single",
            // // 代码分离：可以获得更小的chunk文件
            // splitChunks: {
            //     cacheGroups: {
            //         vendor: {
            //             test: /[\\/]node_modules[\\/]/,
            //             name: "vendors",
            //             chunks: "all",
            //         },
            //     },
            // },
            // 压缩css文件
            minimizer: [new CssMinimizerPlugin()],
        },
    });
};
