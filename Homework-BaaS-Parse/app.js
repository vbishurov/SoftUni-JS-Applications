$(document).ready(function () {
	$.ajax({
		method: "GET",
		headers: {
			"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
			"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl"
		},
		url: "https://api.parse.com/1/classes/Country",
		success: function (result) {
			var $list = $('<ul>');
			result['results'].forEach(function (item) {
				$list.append($('<li>').text(item.name));
			});

			$('h1').first().after($list);
		}
	});

	$('#editCountry').on('click', function () {
		var countryId = getObjByName('Country', $('#countryName').val());
		editItem('Country', countryId, {
			name: $('#newCountryName').val()
		}, $('#editCountry').after($('<div>')).next());
	});

	$('#queryTown').on('click', function () {
		$.ajax({
			method: "GET",
			headers: {
				"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
				"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl"
			},
			url: "https://api.parse.com/1/classes/Town",
			data: 'include=country',
			success: function (result) {
				var $list = $('<ul>');
				result['results'].forEach(function (item) {
					if (item.country.name === $('#countryQuery').val()) {
						$list.append($('<li>').text(item.name));
					}
				});

				$('#queryTown').after($('<h1>').text($('#countryQuery').val())).next().after($list);
			}
		});
	});

	$('#editTown').on('click', function () {
		var townId = getObjByName('Town', $('#townToEdit').val()),
			countryId = getObjByName('Country', $('#newCountry').val());

		if (!countryId) {
			createItem('Country', {name: $('#newCountry').val()});
			countryId = getObjByName('Country', $('#newCountry').val());
		}

		editItem('Town', townId, {
			name: $('#newName').val(),
			country: {
				"__type": "Pointer",
				"className": "Country",
				"objectId": countryId
			}
		}, $('#editTown').after($('<div>')).next())

	});

	$('#deleteTown').on('click', function () {
		var townId = getObjByName('Town', $('#townToDelete').val());
		$.ajax({
			method: "DELETE",
			headers: {
				"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
				"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl"
			},
			url: "https://api.parse.com/1/classes/Town/" + townId,
			success: function () {
				$('#deleteTown').after($('<div>')).next().text('Town deleted successfully')
			},
			error: function () {
				$('#deleteTown').after($('<div>')).next().text('There was an error deleting town ')
			}
		});
	});

	$('#addTown').on('click', function () {
		var countryId = getObjByName('Country', $('#townCountry').val());
		if (!countryId) {
			createItem('Country', {name: $('#townCountry').val()}, $('#addTown').after($('<div>')).next());
			countryId = getObjByName('Country', $('#townCountry').val());
		}

		createItem('Town', {
			name: $('#townToAdd').val(),
			country: {
				"__type": "Pointer",
				"className": "Country",
				"objectId": countryId
			}
		}, $('#addTown').after($('<div>')).next())
	});
});

function getObjByName(className, name) {
	var id;
	$.ajax({
		method: "GET",
		headers: {
			"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
			"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl"
		},
		url: "https://api.parse.com/1/classes/" + className,
		async: false,
		success: function (result) {
			result['results'].forEach(function (item) {
				if (item.name === name) {
					id = item.objectId;
				}
			});
		}
	});

	return id;
}

function editItem(className, id, data, messageDiv) {
	$.ajax({
		method: "PUT",
		headers: {
			"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
			"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl",
			"Content-Type": "application/json"
		},
		url: "https://api.parse.com/1/classes/" + className + "/" + id,
		async: false,
		data: JSON.stringify(data),
		success: function () {
			$(messageDiv).text(className + ' edited successfully')
		},
		error: function () {
			$(messageDiv).text('There was an error editing ' + className)
		}
	})
}

function createItem(className, data, messageDiv) {
	$.ajax({
		method: "POST",
		headers: {
			"X-Parse-Application-Id": "RrbLPrD9JrPBZqhLx4A2tjtsPD1RpmllVZdZmz1V",
			"X-Parse-REST-API-Key": "N6aYg9iy6NL8kt2fABq1Vb43gtzTrvDQIfgvsGfl"
		},
		url: "https://api.parse.com/1/classes/" + className,
		async: false,
		data: JSON.stringify(data),
		success: function () {
			$(messageDiv).text(className + ' created successfully')
		},
		error: function () {
			$(messageDiv).text('There was an error creating ' + className)
		}
	});
}