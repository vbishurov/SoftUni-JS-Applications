define(function () {
	var appId = 'UY62RbPorQTeKofDpuvC6jQt8wL6tzK63IfvPlwL',
		restKey = 'fga13upXZffIW9QeJEgDopYbSenpXKwUMCZ6v75A';

	function Headers(appId, restKey) {
		this._appId = appId;
		this._restKey = restKey;
	}

	Headers.prototype.getHeaders = function (useSessionToken, extras) {
		var headers = {
			'X-Parse-Application-Id': this._appId,
			'X-Parse-REST-API-Key': this._restKey,
			'Content-Type': 'application/json'
		};

		if (typeof extras === 'object' && extras !== null) {
			$.each(extras, function (key, value) {
				headers[key] = value;
			})
		}

		if (sessionStorage['logged-in'] && useSessionToken) {
			headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
		}

		return headers;
	};

	return new Headers(appId, restKey);
});