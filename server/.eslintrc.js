module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./"
    },
    plugins: [
        "@typescript-eslint"
    ],
    ignorePatterns: [".eslintrc.js", "./build"],
    rules: {
    }
};
