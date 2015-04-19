$(document).ready(function () {
    function greet(name) {
        if (name) {
            $('#content').html($('<h2>').text('Welcome ' + name + '!'));
        } else {
            $('#content').html($('<h2>').text('Welcome!'));
        }
    }

    Sammy('#content', function () {
        this.get('#/', function () {
            greet();
        });
        this.get('#/:name', function () {
            greet(this.params['name']);
        });
    }).run('#/');
});