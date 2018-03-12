var gulp   = require('gulp');
var deploy = require('gulp-deploy-git');
 
gulp.task('deploy', function() {
  return gulp.src('./**/*')
    .pipe(deploy({
      repository: 'https://github.com/zhevron/gulp-deploy-git.git',
      remoteBranch: 'gh-pages'
    }));
});
