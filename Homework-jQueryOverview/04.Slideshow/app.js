function switchPhoto(firstSlide, secondSlide) {
    firstSlide.removeClass('current').addClass('previous');
    secondSlide.css('opacity', 0.0).addClass('current').animate({opacity: 1.0}, 1000, function () {
        firstSlide.removeClass('previous');
    });
}

$(document).ready(function () {
    setInterval(function () {
        var $currentSlide = $('.current');
        var $nextSlide = $currentSlide.next('div');
        if ($nextSlide.length === 0) {
            $nextSlide = $('#slide1');
        }

        switchPhoto($currentSlide, $nextSlide);
    }, 5000)
});

$('body').on('click', '#nextArrow', function () {
    var $currentSlide = $('.current');
    var $nextSlide = $currentSlide.next('div');
    if ($nextSlide.length === 0) {
        $nextSlide = $('#slide1');
    }

    switchPhoto($currentSlide, $nextSlide);
});
