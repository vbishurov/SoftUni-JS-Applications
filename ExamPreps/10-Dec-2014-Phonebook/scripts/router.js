define(['sammy', 'handlebars', 'userModel', 'userController', 'phoneModel','notifications'],
	function (Sammy, Handlebars, userModel, UserController, phoneModel,notifications) {
		return Sammy('#wrapper', function () {
			this.before(function () {
				var _this = this;
				if (sessionStorage['logged-in']) {
					$('#menu').show();

					$('#logout').unbind('click').on('click', function (event) {
						userModel.logout().then(function () {
							UserController.clearSessionStorage();
							_this.redirect('#/login')
						});

						event.preventDefault();
					});

				} else {
					$('#menu').hide();
				}
			});

			this.get('#/', function () {
				if (sessionStorage['logged-in']) {
					$.get('views/home.html', function (html) {
						$('#wrapper').html(Handlebars.compile(html)(sessionStorage));
					})
				} else {
					$.get('views/welcome.html', function (html) {
						$('#wrapper').html(html);
					})
				}
			});

			this.get('#/register', function () {
				var _this = this;
				$.get('views/register.html', function (html) {
					$('#wrapper').html(html);

					$('#register').unbind('click').on('click', function (event) {
						var username = $('#username').val(),
							password = $('#password').val(),
							fullName = $('#fullName').val();

						userModel.register(username, password, fullName)
							.then(function (data) {
								UserController.setSessionStorage(data['sessionToken'], fullName, username);
								_this.redirect('#/');
								notifications.showSuccess('Registered successfully');
							}, function (err) {
								notifications.showError('There was an error while registering');
							});

						event.preventDefault();
					})
				})
			});

			this.get('#/login', function () {
				var _this = this;
				$.get('views/login.html', function (html) {
					$('#wrapper').html(html);

					$('#login').unbind('click').on('click', function (event) {
						var username = $('#username').val(),
							password = $('#password').val();
						userModel.login(username, password)
							.then(function (data) {
								UserController.setSessionStorage(data['sessionToken'], data['fullName'], username);
								_this.redirect('#/')
							});

						event.preventDefault();
					})
				})
			});

			this.get('#/edit-profile', function () {
				var _this = this;
				$.get('views/edit-user.html', function (html) {
					$('#wrapper').html(Handlebars.compile(html)(sessionStorage));

					$('#edit').unbind('click').on('click', function (event) {
						var username = $('#username').val(),
							password = $('#password').val(),
							fullName = $('#fullName').val();

						if (!password) {
							return;
						}

						userModel.get().then(function (data) {
							userModel.edit(data['objectId'], username, password, fullName)
								.then(function () {
									UserController.clearSessionStorage();
									_this.redirect('#/login')
								});
						});

						event.preventDefault();
					});
				});
			});

			this.get('#/phonebook', function () {
				phoneModel.getAllPhones().then(function (data) {
					$.get('views/phonebook.html', function (html) {
						$('#wrapper').html(Handlebars.compile(html)(data));
					})
				});
			});

			this.get('#/add-phone', function () {
				var _this = this;
				$.get('views/add-phone.html', function (html) {
					$('#wrapper').html(html);

					$('#add').unbind('click').on('click', function (event) {
						userModel.get().then(function (data) {
							var person = $('#personName').val(),
								number = $('#phoneNumber').val();
							phoneModel.addPhone(data['objectId'], person, number)
								.then(function () {
									_this.redirect('#/phonebook');
								});
						});

						event.preventDefault();
					})
				})
			});

			this.get('#/delete-phone/:objectId', function () {
				var _this = this,
					id = this.params['objectId'];
				phoneModel.getPhone(id).then(function (data) {
					$.get('views/delete-phone.html', function (html) {
						$('#wrapper').html(Handlebars.compile(html)(data));

						$('#delete').unbind('click').on('click', function (event) {
							phoneModel.deletePhone(id).then(function () {
								_this.redirect('#/phonebook');
							});

							event.preventDefault();
						});
					});
				});
			});

			this.get('#/edit-phone/:objectId', function () {
				var _this = this,
					id = this.params['objectId'];
				phoneModel.getPhone(id).then(function (data) {
					$.get('views/edit-phone.html', function (html) {
						$('#wrapper').html(Handlebars.compile(html)(data));

						$('#edit').unbind('click').on('click', function (event) {
							userModel.get().then(function (data) {
								var personName = $('#personName').val(),
									number = $('#phoneNumber').val(),
									ownerId = data['objectId'];
								phoneModel.editPhone(id, personName, number, ownerId).then(function () {
									_this.redirect('#/phonebook');
								});
							});

							event.preventDefault();
						})
					})
				})
			});
		}).run('#/')
	});