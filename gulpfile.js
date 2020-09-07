const gulp = require('gulp');
const svgSymbols = require('gulp-svg-symbols'); // https://github.com/Hiswe/gulp-svg-symbols
const svgmin = require('gulp-svgmin');

function build() {
  return gulp
    .src('./svg/**/*.svg')
    .pipe(
      svgmin({
        plugins: [
          {
            removeAttrs: {
              attrs: ['fill', 'fill-rule'],
            },
          },
        ],
      })
    )
    .pipe(
      svgSymbols({
        svgAttrs: {
          class: 'svg-icon',
          'aria-hidden': `true`,
          style: `display: none`,
        },
        slug: (name) => name,
        templates: [`default-svg`, `default-demo`],
      })
    )
    .pipe(gulp.dest('dist/'));
}

gulp.task('default', gulp.series(build));
