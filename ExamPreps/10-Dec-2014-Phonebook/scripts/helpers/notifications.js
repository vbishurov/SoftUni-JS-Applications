define(['noty'], function (noty) {
	function Notifications() {
	}

	Notifications.prototype.showSuccess = function (msg) {
		noty({
				text: msg,
				type: 'success',
				layout: 'top',
				timeout: 1000
			}
		);
	};

	Notifications.prototype.showError = function (msg) {
		noty({
				text: msg,
				type: 'error',
				layout: 'top',
				timeout: 5000
			}
		);
	};

	return new Notifications();
});