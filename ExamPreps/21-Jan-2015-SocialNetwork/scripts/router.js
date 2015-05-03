define(['sammy', 'handlebars'], function (Sammy, Handlebars) {
	var $content = $('#main');

	Sammy('#main', function () {
		this.get('#/', function () {
			$.get('views/guest-home.html', function (html) {
				$content.html(html);
			})
		});

		this.get('#/register', function () {
			var _this = this;
			$.get('views/register.html', function (html) {
				$content.html(html);
				$('#upload-file-button').on('click', function (event) {
					$('#picture').trigger('click');
				});

				$('#picture').on('change', function (event) {
					var file = this.files[0];
					if (file.type.indexOf('image') < 0 || file.size > 128000) {
						return false;
					}


				})
			})
		});

		this.get('#/login', function () {
			$.get('views/login.html', function (html) {
				$content.html(html);
			})
		});
	}).run('#/');
});