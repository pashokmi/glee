const { src, dest, watch, parallel, series} = require('gulp');

const scss          = require('gulp-sass');
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const uglify        = require('gulp-uglify');
const imagemin      = require('gulp-imagemin');
const del           = require('del');
const browserSync   = require('browser-sync').create();
const fileinclude   = require('gulp-file-include');

function browsersync() {
  browserSync.init({
    server:{
      baseDir:'app'
    },
    notify: false
  })
}





function images(){
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
  ]))
  .pipe(dest('dist/images'))
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}


function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/mixitup/dist/mixitup.js',
    'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    'app/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function build(){
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js',
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function cleanDist(){
  return del ('dist')
}

const html = () => {
  return src(['app/*.html', '!app/html/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
      }),
    )
    .pipe(dest('app'))
    .pipe(browserSync.stream());
};

function watching() {
  watch(['app/scss/**/*.scss'],styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change',browserSync.reload);
}


exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.html = html;


exports.build = series(cleanDist, images, build);
exports.default = parallel(styles, scripts, html, browsersync, watching);