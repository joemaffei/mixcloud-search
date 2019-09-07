module.exports = {
    parser: 'babel-eslint',
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'prettier/prettier': ['error'],
    },
};
