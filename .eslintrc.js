module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    // eslint支持vue3
    parser: "vue-eslint-parser",
    parserOptions: {
        // eslint支持typescript
        parser: "@typescript-eslint/parser",
    },
    // 添加
    plugins: ["vue", "@typescript-eslint", "prettier"],
    rules: {
        /**
         * "off" 或 0 - 关闭规则
         * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
         * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
         */

        // 关闭对所有未定义变量的警告提示
        "no-undef": process.env.NODE_ENV === "production" ? "warn" : "off",
        // 对于requires引入 关闭
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": ["off"],
        "no-console": "off", // console.log()语法报错 关闭
        "@typescript-eslint/no-inferrable-types": "off", // 关闭类型推断
        indent: "off",
    },
};
