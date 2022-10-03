module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'google',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    ignorePatterns: [
        '/dist/**/*',
    ],
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    rules: {
        '@typescript-eslint/no-inferrable-types': 0,
        'quotes': ['error', 'single'],
        'no-control-regex': 0,
        'indent': ['error', 2, {'SwitchCase': 1}],
        'operator-linebreak': 0,
        'no-invalid-this': 'off',
        'max-len': [1, 80, 2, {
            'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
            'ignoreTemplateLiterals': true,
            'ignoreUrls': true,
            'ignoreStrings': true,
        }],
        'max-lines': [1, 120],
    },
};