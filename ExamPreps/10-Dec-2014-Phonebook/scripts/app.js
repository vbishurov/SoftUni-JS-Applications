requirejs.config({
	baseUrl: 'scripts',
	paths: {
		app: 'app',
		headers: 'helpers/headers',
		requester: 'helpers/ajaxRequester',
		jquery: 'libs/jquery.min',
		sammy: 'libs/sammy.min',
		q: 'libs/q.min',
		noty: 'libs/jquery.noty.packaged.min',
		handlebars: 'libs/handlebars.min',
		userModel: 'models/userModel',
		userController: 'controllers/userController',
		router: 'router',
		phoneModel: 'models/phoneModel',
		notifications: 'helpers/notifications'
	}
});

requirejs(['jquery', 'router'], function ($, router) {
});