/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@unocss',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': 'off', //неиспользуемая переменная
    'vue/require-default-prop': 'off', //требовать для props дефолтных значений, кроме Boolean значений
    // 'vue/no-v-html': 'off', //предупреждения о возможной уязвимости посредством XSS атаки
    'max-len': ['off', { code: 120 }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ],
    }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'EVENTS',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'CONTENT'
      ],
      alphabetical: false,
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 1 },
      multiline: { max: 1 },
    }],
    'vue/html-indent': ['warn', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: false,
      ignores: [],
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'any',
        component: 'any',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always'
    }],
    'vue/html-closing-bracket-spacing': ['warn', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always'
    }],
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/no-irregular-whitespace': ['error', {
      skipStrings: true,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false,
      skipHTMLAttributeValues: false,
      skipHTMLTextContents: false,
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-dupe-keys': ['error', {
      groups: [],
    }],
    'no-plusplus': 'off', // запрещает унарные операторы ++ и --
    'vue/no-unused-vars': 'warn',
    semi: ['warn', 'never'], // точка с запятой в конце строки
    quotes: ['warn', 'single'], // одинарные кавычки
    indent: ['warn', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
      MemberExpression: 1,
      CallExpression: { arguments: 1 },
      ArrayExpression: 1,
      ObjectExpression: 1
    }],
    // висячие запятые
    'comma-dangle': ['warn', {
      arrays: 'never',
      objects: 'only-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    // пробелы в массивах, кроме...
    'array-bracket-spacing': ['warn', 'never', {
      singleValue: false,
      arraysInArrays: false,
      objectsInArrays: false
    }],
    // пробелы в объектах, кроме...
    'object-curly-spacing': ['warn', 'always', {
      objectsInObjects: false,
      arraysInObjects: false
    }],
    'arrow-spacing': 'warn', // пробелы в () =>
    'arrow-parens': ['warn', 'always'], // скобки в стрелочной функции ['as-needed']
    'linebreak-style': ['warn', 'unix'], //стиль разрыва строки linebreak-style: ["error", "unix || windows"]
  },
}
