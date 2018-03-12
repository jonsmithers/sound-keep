var gulp   = require('gulp');
var deploy = require('gulp-deploy-git');
 
gulp.task('deploy', function() {
  return gulp.src(['./**/*', "!./gulpfile.js"], {read: false})
    .pipe(deploy({
      repository: 'https://github.com/jonsmithers/sound-keep.git',
      remoteBranch: 'gh-pages'
    }));
});
