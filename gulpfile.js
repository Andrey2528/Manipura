const gulp = require('gulp');
const requireDir = require('require-dir');

//tasks
const tasks_style = requireDir('./projectSettings/style');
const tasks_js = requireDir('./projectSettings/js');
const tasks_html = requireDir('./projectSettings/html');
const tasks_bs = requireDir('./projectSettings/browser-sync');
const tasks_watch = requireDir('./projectSettings');

//const proxy_url = process.env.BROWSERSYNC_PROXY_URL || 'http://projecturl';

exports.style = tasks_style.style;
exports.libs_style = tasks_style.libs_style;
exports.build__js = tasks_js.build__js;
exports.libs__js = tasks_js.libs__js;
exports.dev__js = tasks_js.dev__js;
exports.html = tasks_html.html;
exports.bs__html = tasks_bs.bs__html;
exports.watch = tasks_watch.watch;

exports.default = gulp.parallel(
	exports.libs_style,
	exports.style,
	exports.libs__js,
	exports.dev__js,
	exports.html,
	exports.bs__html,
	exports.watch
)
