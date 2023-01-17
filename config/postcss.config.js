const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './node_modules/@hyas/seo/layouts/**/*.html',
        './node_modules/@hyas/images/layouts/**/*.html',
        './node_modules/@hyas/bolt/layouts/**/*.html',
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h1',
        'h2',
        'h3',
        'img-fluid',
        'input',
        'type',
        'checkbox',
        'dt',
        'dd',
        ...whitelister([
          './node_modules/@hyas/core/assets/scss/app.scss',
        ]),
      ],
    }),
  ],
}
