var CORRECT_ANSWERS = ['question1answer1', 'question2answer4', 'question3answer3', 'question4answer2'],
    QUESTION_COUNT = 4,
    ANSWER_COUNT = 4,
    ANSWER_TIME_IN_SECONDS = 300,
    timer;

$(document).ready(function () {
    init();

    bindQuestionClick();

    $('#submit').on('click', function () {
        showScore();
    });

    $('#reset').on('click', function () {
        resetScore();
        $('#reset').hide();
        $('input[type=radio]').show().attr('checked', false);
        bindQuestionClick();
        $('#score').hide();
        startTimer();
    })
});

function init() {
    if (localStorage.timer) {
        startTimer();

        $.each(localStorage, function (key, value) {
            if (key.indexOf('question') > -1) {
                $('#' + value).attr('checked', true);
            }
        });
    } else {
        localStorage.clear();
    }
}

function startTimer() {
    if (!localStorage.timer) {
        localStorage.timer = ANSWER_TIME_IN_SECONDS;
    }

    $('h1:first-of-type').show();
    $('#submit').show();

    timer = setInterval(function () {
        localStorage.timer--;

        $('#timer').text(localStorage.timer);

        if (localStorage.timer <= 0) {
            showScore()
        }
    }, 1000)
}

function bindQuestionClick() {
    $('#questions li').on('click', 'input[type=radio]', function (event) {
        if (!localStorage.timer) {
            startTimer();
        }

        var questionClickedId = $(event.target).parent().attr('id');
        localStorage[questionClickedId] = $(event.target).attr('id');
    });
}

function stopTimer() {
    localStorage.removeItem('timer');
    clearInterval(timer);
}

function resetScore() {
    var i,
        j;

    for (i = 1; i <= QUESTION_COUNT; i++) {
        for (j = 1; j <= ANSWER_COUNT; j++) {
            $('#question' + i + 'answer' + j + 'label').css('background', 'white');
        }
    }
}

function showScore() {
    var counter = 0,
        $item,
        score = 0;

    stopTimer();
    $('#questions li').unbind();
    $('input[type=radio]').hide();
    $('h1:first-of-type').hide();
    $('#submit').hide();
    $('#reset').show();

    resetScore();

    $.each(localStorage, function (key, value) {
        if (key.indexOf('question') > -1) {
            $item = $('#' + value + 'label');
            if (value === CORRECT_ANSWERS[counter]) {
                $item.css('background', 'green');
                score += 25;
            } else {
                $item.css('background', 'red');
            }
        }

        counter += 1;
    });

    $('#score').text($('#score').text() + ' ' + score + ' points.').show();

    localStorage.clear();
}