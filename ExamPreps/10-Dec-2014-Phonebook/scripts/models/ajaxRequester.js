var app = app || {};

app.requester = (function () {
    function Requester(baseUrl) {
        this._baseUrl = baseUrl;
    }

    function makeRequest(method, headers, url, data) {
        var deferred = Q.defer;

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

    return {
        load: function(baseUrl) {
            return new Requester(baseUrl);
        }
    }
}());