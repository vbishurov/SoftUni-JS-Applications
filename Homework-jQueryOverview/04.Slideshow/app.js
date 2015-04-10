$(document).ready(function () {
	var isClickedNext = false,
		isClickedPrevious = false,
		slideshow;
	startSlideshow();

	$('body').on('click', '#nextArrow', function () {
		if (!isClickedNext) {
			var $currentSlide = $('.current'),
				$nextSlide = $currentSlide.next('div');

			if ($nextSlide.length === 0) {
				$nextSlide = $('#slide1');
			}

			clearInterval(slideshow);
			switchPhoto($currentSlide, $nextSlide);

			setTimeout(function () {
				isClickedNext = false;
			}, 1200)
		}

		isClickedNext = true;
		$('#resume').show();
	});

	$('body').on('click', '#previousArrow', function () {
		if (!isClickedPrevious) {
			var $currentSlide = $('.current'),
				$previousSlide = $currentSlide.prev('div');

			if ($previousSlide.length === 0) {
				$previousSlide = $('#slide3');
			}

			clearInterval(slideshow);
			switchPhoto($currentSlide, $previousSlide);

			setTimeout(function () {
				isClickedPrevious = false;
			}, 1200)
		}

		isClickedPrevious = true;
		$('#resume').show();
	});

	$('body').on('click', '#resume', function () {
		$(this).hide();
		startSlideshow();

		var $currentSlide = $('.current'),
			$nextSlide = $currentSlide.next('div');

		if ($nextSlide.length === 0) {
			$nextSlide = $('#slide1');
		}

		switchPhoto($currentSlide, $nextSlide);
	});

	function switchPhoto(firstSlide, secondSlide) {
		firstSlide.removeClass('current').addClass('previous');
		secondSlide.css('opacity', 0.0).addClass('current').animate({opacity: 1.0}, 1000, function () {
			firstSlide.removeClass('previous');
		});
	}

	function startSlideshow() {
		slideshow = setInterval(function () {
			var $currentSlide = $('.current'),
				$nextSlide = $currentSlide.next('div');

			if ($nextSlide.length === 0) {
				$nextSlide = $('#slide1');
			}

			switchPhoto($currentSlide, $nextSlide);
		}, 5000)
	}
});