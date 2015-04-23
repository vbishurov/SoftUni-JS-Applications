define(['jquery'], function ($) {
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

        if (sessionStorage['logged-in']) {
            headers['X-Parse-Session-Token'] = sessionStorage['logged-in'];
        }

        if (typeof extras === 'obkect' && extras !== null) {
            $.each(extras, function (key, value) {
                headers[key] = value;
            });
        }

        return headers;
    };

    return new Headers('RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V', 'N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl');
});