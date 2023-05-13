module.exports = {
  // processors: [['@mapbox/stylelint-processor-arbitrary-tags', { fileFilterRegex: [/\.vue$/] }]], // для линта во vue файлах
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss', // configure for SCSS
    'stylelint-config-recommended-vue', // add overrides for .Vue files
    // 'stylelint-config-recess-order', // use the recess order for properties
    'stylelint-config-css-modules', // configure for CSS Modules methodology
    'stylelint-config-prettier' // turn off any rules that conflict with Prettier
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['if', 'else']
      }
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'comment-empty-line-before': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else']
      }
    ],
    'declaration-no-important': null,
    'no-descending-specificity': null,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    indentation: [
      2,
      {
        baseIndentLevel: 1
      }
    ],
    'number-leading-zero': null,
    'color-hex-case': null
  }
}

// Run Stylelint on all the SCSS || CSS files in your project:
// npx stylelint "**/*.scss" || npx stylelint "**/*.css"

