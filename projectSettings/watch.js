const {
    watch,
    parallel,
    series
} = require('gulp');

module.exports = function watching() {
    watch('src/**/*.html', parallel('html'));
	watch('src/**/*.scss', parallel('style'));
	watch('src/**/*.js', parallel('dev__js'));
	watch('src/**/*.json', parallel('html'));
}