define(function () {
    function Headers(appId, restKey) {
        this._appId = appId;
        this._restKey = restKey;
    }

    Headers.prototype.getHeaders = function (extras) {
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

        if (sessionStorage['logged-in']) {
            headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
        }

        return headers;
    };

    return {
        load: function (appId, restKey) {
            return new Headers(appId, restKey);
        }
    }
});