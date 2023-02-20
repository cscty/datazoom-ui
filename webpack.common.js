const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
    cache: {
        type: "filesystem",
        allowCollectingMemory: true,
    },
    output: {
        filename: "[name].js",
        // 必须是绝对路径
        path: path.resolve(__dirname, "dist"),
        clean: true,
        library: "dzUI",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ["vue-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                use: [
                    "thread-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    // {
                    //     loader: "ts-loader",
                    //     options: { appendTsSuffixTo: [/\.vue$/] },
                    // },
                ],
            },
            {
                test: /\.css$/,
                // 逆序执行
                use: ["vue-style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.less$/,
                use: ["vue-style-loader", "css-loader", "postcss-loader", "less-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                // 看情况输出文件到打包目录或者将文件data64嵌入到打包文件中
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 图片小于maxSize(单位为B),即转为base64位
                        maxSize: 50 * 1024,
                    },
                },
                generator: {
                    filename: "images/[contenthash][ext]",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
                // 自定义输出文件名
                generator: {
                    filename: "fonts/[contenthash][ext]",
                },
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    //
    resolve: {
        // 没写文件后缀优先匹配的后缀
        extensions: [".ts", ".js", ".vue", ".test.ts"],
        // 目录别名
        alias: {
            "@": path.resolve(__dirname, "examples"),
            "@packages": path.resolve(__dirname, "packages"),
        },
    },
};
