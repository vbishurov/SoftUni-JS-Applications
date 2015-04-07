var timer = setInterval(function () {
    if (!localStorage.timer) {
        localStorage.timer = 60;
    } else {
        localStorage.timer--;
    }

    if (localStorage.timer <= 0) {
        clearInterval(timer);
        localStorage.removeItem('timer');
    }

    $('#timer').text(localStorage.timer);
}, 1000);

$('#questions').find('li').on('click', 'input[type=radio]', function (event) {
    var questionClickedId = $(event.target).parent().attr('id'),
        answerClickedId = $(event.target).attr('id');
    localStorage[questionClickedId] = JSON.stringify({userAnswer: answerClickedId});
    console.log(localStorage);
});