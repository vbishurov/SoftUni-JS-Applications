requirejs.config({
    baseUrl: 'scripts',
    paths: {
        app: 'app',
        headers: 'models/headers',
        requester: 'models/ajaxRequester',
        jquery: 'libs/jquery.min',
        sammy: 'libs/sammy.min',
        q: 'libs/q.min',
        handlebars: 'libs/handlebars.min'
    }
});

requirejs(['jquery', 'sammy', 'q', 'handlebars'], function ($, Sammy, Q, Handlebars) {
    Sammy('#wrapper', function () {
        this.get('#/', function () {
            $('#header').text('Hello world');
        })
    }).run('#/');
});