$(document).ready(function () {
    var requester = app.requester.load('https://api.parse.com/1/');

    function voteButtonClicked(event) {
        var questionId = $(this).attr('data-id'),
            selectedAnswer = $(this).parent().find(':checked').val();

        requester.get('classes/Question/' + questionId)
            .then(function (question) {
                var updatedQuestion =
                {
                    'questionText': question.questionText,
                    answers: {}
                };

                $.each(question.answers, function (key, value) {
                    if (key === selectedAnswer) {
                        value += 1;
                    }

                    updatedQuestion.answers[key] = value;
                });

                requester.put('classes/Question/' + questionId, updatedQuestion);
            });
    }

    Sammy('#view', function () {
        this.get('#/', function () {
            requester.get('classes/Question')
                .then(function (question) {
                    $.get('templates/questions.html', function (html) {
                        var rendered = Handlebars.compile(html)(question);
                        $('#view')
                            .html($(rendered).show())
                            .on('click', '#voteButton', voteButtonClicked);
                    })
                })
        });

        this.get('#/:objectId', function () {
            requester.get('classes/Question/' + this.params['objectId'])
                .then(function (question) {
                    $.get('templates/results.html', function (html) {
                        var rendered = Handlebars.compile(html)(question);
                        $('#view')
                            .html($(rendered).show());
                    })
                });
        })
    }).run('#/');
});