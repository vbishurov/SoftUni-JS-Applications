define(['requester'], function (requester) {
	function UserModel() {
	}

	UserModel.prototype.register = function (username, password, fullName) {
		return requester.post('users', {username: username, password: password, fullName: fullName});
	};

	UserModel.prototype.login = function (username, password) {
		return requester.get('login?username=' + username + '&password=' + password);
	};

	UserModel.prototype.logout = function () {
		return requester.post('logout', {}, true);
	};

	UserModel.prototype.get = function () {
		return requester.get('users/me', true);
	};

	UserModel.prototype.edit = function (objectId, username, password, fullName) {
		return requester.put('users/' + objectId, {username: username, password: password, fullName: fullName}, true);
	};

	return new UserModel();
});