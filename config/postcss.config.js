const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
    plugins: [
        autoprefixer(),
        purgecss({
            content: ['./hugo_stats.json'],
            extractors: [
                {
                    extractor: (content) => {
                        const els = JSON.parse(content).htmlElements;
                        return els.tags.concat(els.classes, els.ids);
                    },
                    extensions: ['json']
                }
            ],
            dynamicAttributes: ['aria-expanded', 'id', 'size', 'type'],
            safelist: ['active', 'disabled', 'hidden', 'show', 'img-fluid', 'blur-up', 'lazyloaded', 'input', 'type', 'checkbox', 'dt', 'dd', ...whitelister(['./assets/scss/**/*.scss', './node_modules/@thulite/bolt-core/assets/scss/**/*.scss'])]
        })
    ]
};
