define(['requester'], function (requester) {
	function UserModel() {
	}

	UserModel.prototype.get = function () {
		return requester.get('users/me', true);
	};

	UserModel.prototype.login = function (username, password) {
		return requester.get('login?username=' + username + '&password=' + password);
	};

	UserModel.prototype.register = function (username, password, name, about, gender, picture) {
		var user = {
			username: username,
			password: password,
			name: name,
			about: about,
			gender: gender,
			picture: picture
		};

		return requester.post('users', user);
	};

	UserModel.prototype.edit = function (id, username, password, name, about, gender, picture) {
		var user = {
			username: username,
			password: password,
			name: name,
			about: about,
			gender: gender,
			picture: picture
		};

		return requester.put('users/' + id, user);
	};

	return new UserModel()
});