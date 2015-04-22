var app = app || {};

app.requester = (function () {
    function Requester(baseUrl) {
        this._baseUrl = baseUrl;
    }

    Requester.prototype.get = function (serviceUrl) {
        var headers = getHeaders();
        var url = this._baseUrl + serviceUrl;

        return makeRequest('GET', headers, url);
    };

    Requester.prototype.put = function (serviceUrl, data) {
        var headers = getHeaders();
        var url = this._baseUrl + serviceUrl;

        return makeRequest('PUT', headers, url, data);
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

    function getHeaders() {
        var headers = {
            'X-Parse-Application-Id': 'PmplVF6yp9Ld2dwtGj6SP81KC0QllIdmjpHSNmMF',
            'X-Parse-REST-API-Key': 'LgCTWy8UG5yh4rRYd76ahAVrJmdjdlBSmCOaFcvY',
            'Content-Type': 'application/json'
        };

        if (sessionStorage['logged-in']) {
            headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
        }

        return headers;
    }

    return {
        load: function (baseUrl) {
            return new Requester(baseUrl);
        }
    }
}());