var arr = [{"manufacturer": "BMW", "model": "E92 320i", "year": 2011, "price": 50000, "class": "Family"},
    {"manufacturer": "Porsche", "model": "Panamera", "year": 2012, "price": 100000, "class": "Sport"},
    {"manufacturer": "Peugeot", "model": "305", "year": 1978, "price": 1000, "class": "Family"}];

function generateTable(arr) {
    var $carsTable = $('<table>'),
        $headerRow = $('<tr>'),
        $tableHeader = $('<thead>').append($headerRow),
        $tableBody = $('<tbody>'),
        uniqueKeys = [];

    $.each(arr, function (_, car) {
        var $row = $('<tr>');
        $.each(car, function (key, value) {
            if (car.hasOwnProperty(key) && uniqueKeys.indexOf(key) < 0) {
                $('<th>').text(key).appendTo($headerRow);
                uniqueKeys.push(key);
            }

            $row.append($('<td>').text(value));
            $row.appendTo($tableBody);
        })
    });

    $carsTable.append($tableHeader);
    $carsTable.append($tableBody);
    $(document.body).append($carsTable);
}

$(document).ready(function () {
    generateTable(arr);
});