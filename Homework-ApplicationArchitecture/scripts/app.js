requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        router: 'helpers/router',
        requester: 'helpers/ajaxRequester',
        jquery: 'libs/jquery.min',
        sammy: 'libs/sammy.min',
        q: 'libs/q.min',
        handlebars: 'libs/handlebars.min',
        headers: 'helpers/headers',
        bookModel: 'models/bookModel',
        bookController: 'controllers/BookController'
    }
});

requirejs(['jquery', 'router'], function ($, router) {

});