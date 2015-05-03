requirejs.config({
	baseUrl: 'scripts',
	paths: {
		app: 'app',
		jquery: 'libs/jquery.min',
		headers: 'helpers/headers',
		requester: 'helpers/ajaxRequester',
		sammy: 'libs/sammy.min',
		q: 'libs/q.min',
		noty: 'libs/jquery.noty.packaged.min',
		handlebars: 'libs/handlebars.min',
		router: 'router',
		notifications: 'helpers/notifications'
	}
});

requirejs(['jquery', 'router'], function ($, router) {
});