module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    moduleFileExtensions: ["vue", "js", "ts"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "vue-jest", // vue 文件用 vue-jest 转换
        "^.+\\.ts$": "ts-jest", // ts 文件用 ts-jest 转换
    },
    // 定义类型别名
    moduleNameMapper: {
        "^@packages(.*)$": "<rootDir>/packages$1",
    },
    // 测试匹配文件
    testRegex: ["tests/"],
};
