$('#submit').on('click', function () {
    var queryClass = $('#class').val();
    var color = $('#color').val();
    $('.' + queryClass).css('background-color', color);
});