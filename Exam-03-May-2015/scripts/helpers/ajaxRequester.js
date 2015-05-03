define(['headers', 'q'], function (headers, Q) {
		function Requester(baseUrl) {
			this._baseUrl = baseUrl;
		}

		Requester.prototype.get = function (serviceUrl, useSessionToken, extraHeaders) {
			return makeRequest('GET', headers.getHeaders(useSessionToken, extraHeaders), this._baseUrl + serviceUrl);
		};

		Requester.prototype.post = function (serviceUrl, data, useSessionToken, extraHeaders) {
			return makeRequest('POST', headers.getHeaders(useSessionToken, extraHeaders), this._baseUrl + serviceUrl, data);
		};

		Requester.prototype.put = function (serviceUrl, data, useSessionToken, extraHeaders) {
			return makeRequest('PUT', headers.getHeaders(useSessionToken, extraHeaders), this._baseUrl + serviceUrl, data);
		};

		Requester.prototype.remove = function (serviceUrl, useSessionToken, extraHeaders) {
			return makeRequest('DELETE', headers.getHeaders(useSessionToken, extraHeaders), this._baseUrl + serviceUrl);
		};

		function makeRequest(method, headers, url, data) {
			var deferred = Q.defer();

			$.ajax({
				method: method,
				headers: headers,
				url: url,
				data: JSON.stringify(data),
				success: function (data) {
					deferred.resolve(data);
				},
				error: function (err) {
					deferred.reject(err);
				}
			});

			return deferred.promise;
		}

		return new Requester('https://api.parse.com/1/');
	}
);