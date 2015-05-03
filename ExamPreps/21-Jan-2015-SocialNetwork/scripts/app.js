requirejs.config({
	baseUrl: 'scripts',
	paths: {
		app: 'app',
		jquery: 'libs/jquery.min',
		sammy: 'libs/sammy.min',
		q: 'libs/q.min',
		noty: 'libs/jquery.noty.packaged.min',
		handlebars: 'libs/handlebars.min',
		headers: 'helpers/headers',
		requester: 'helpers/ajaxRequester',
		router: 'router',
		userModel: 'models/userModel',
		userController: 'controllers/userController',
		notifications: 'helpers/notifications'
	}
});

requirejs(['jquery', 'router'], function ($, router) {
});