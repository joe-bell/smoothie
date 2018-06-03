module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true
  }
}
