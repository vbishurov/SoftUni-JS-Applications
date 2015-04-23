define(['q', 'headers'], function (Q, headers) {
    function Requester(baseUrl) {
        this._baseUrl = baseUrl;
        this._headers = headers.getHeaders();
    }

    Requester.prototype.get = function (serviceUrl) {
        return makeRequest('GET', this._headers, this._baseUrl + serviceUrl)
    };

    Requester.prototype.post = function (serviceUrl, data) {
        return makeRequest('POST', this._headers, this._baseUrl + serviceUrl, data)
    };

    Requester.prototype.update = function (serviceUrl, data) {
        return makeRequest('PUT', this._headers, this._baseUrl + serviceUrl, data)
    };

    Requester.prototype.delete = function (serviceUrl) {
        return makeRequest('DELETE', this._headers, this._baseUrl + serviceUrl)
    };

    function makeRequest(method, headers, url, data) {
        var deffer = Q.defer();

        $.ajax({
            method: method,
            headers: headers,
            url: url,
            data: JSON.stringify(data),
            success: function (data) {
                deffer.resolve(data);
            },
            error: function (error) {
                deffer.reject(error);
            }
        });

        return deffer.promise;
    }

    return new Requester('https://api.parse.com/1/');
});