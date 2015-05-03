define([], function () {
	function UserController() {
	}

	UserController.prototype.setSessionStorage = function (sessionToken, fullName, username) {
		sessionStorage['logged-in'] = sessionToken;
		sessionStorage['fullName'] = fullName;
		sessionStorage['username'] = username;
	};

	UserController.prototype.clearSessionStorage = function () {
		sessionStorage.removeItem('fullName');
		sessionStorage.removeItem('username');
		sessionStorage.removeItem('logged-in');
	};

	return new UserController();
});