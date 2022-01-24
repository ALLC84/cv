module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'eslint:recommended'],
  plugins: ['simple-import-sort', 'import'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
  },
  rules: {
    // "prettier/prettier": ["error"],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'config', // for axios
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['error'] }]
        : 'off',
    'comma-dangle': [0],
    'default-case': 0,
    'linebreak-style': 0,
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'error',
    camelcase: 'error',
    complexity: ['error', { max: 9 }],
    'max-lines': ['error', 350],
    'max-nested-callbacks': ['error', 3],
    'new-cap': ['error', { capIsNew: true }],
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': [1, 'as-needed'],
    'consistent-return': 0,
    'no-underscore-dangle': ['error', { allow: ['_retry'] }],
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-self-closing': [
      'error',
      { html: { normal: 'any', void: 'always' } },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    // Incluidas por Alejandro
    'class-methods-use-this': 'off',
    'vue/comment-directive': 0,
    'vue/valid-v-slot': [
      'warn',
      {
        allowModifiers: true,
      },
    ],
    'object-shorthand': 'error',
    'prefer-destructuring': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'key-spacing': ['error'],
  },
};
