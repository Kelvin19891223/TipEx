const path = require('path');

module.exports = {
  root: true,
  extends: ['vinta/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'off',
    'import/extensions': 'off',
    'react/prefer-stateless-function': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'dot-notation': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'promise/catch-or-return': 'off',
    'promise/always-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'promise/no-nesting': 'off',
    'import/order': 'off',
    'react/jsx-wrap-multilines': 'off',
    '@typescript-eslint/camelcase': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-shadow': 'off',
    'no-unneeded-ternary': 'off',
    'prefer-const': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-plusplus': 'off',
    'no-empty': 'off',
    'no-case-declarations': 'off',
    'react/no-array-index-key': 'off',
    'vars-on-top': 'off',
    'array-callback-return': 'off',
    'react/jsx-sort-props': 'off',
    'default-param-last': 'off',
    'babel/camelcase': 'off',
    'no-unused-vars': 'off',
    'import/named': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/destructuring-assignment': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-sort-default-props': 'off',
    'sonarjs/no-all-duplicated-branches': 'off',
    'func-names': 'off',
    'babel/no-unused-expressions': 'off',
    'consistent-return': 'off',
    'radix': 'off',
    'react/no-unescaped-entities': 'off',
    'unicorn/import-index': 'off',
    'import/no-useless-path-segments': 'off'
  },
  env: {
    es6: true,
    browser: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, '/webpack.local.config.js'),
        'config-index': 1
      }
    },
    react: {
        "version": "detect"
    },
  },
  "no-script-url": "off",
  "eslint no-undef": "off"
}
