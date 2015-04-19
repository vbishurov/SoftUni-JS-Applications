$(document).ready(function () {
    var students = [{"gender": "Male", "firstName": "Joe", "lastName": "Riley", "age": 22, "country": "Russia"},
        {"gender": "Female", "firstName": "Lois", "lastName": "Morgan", "age": 41, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Roy", "lastName": "Wood", "age": 33, "country": "Russia"},
        {"gender": "Female", "firstName": "Diana", "lastName": "Freeman", "age": 40, "country": "Argentina"},
        {"gender": "Female", "firstName": "Bonnie", "lastName": "Hunter", "age": 23, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Joe", "lastName": "Young", "age": 16, "country": "Bulgaria"},
        {"gender": "Female", "firstName": "Kathryn", "lastName": "Murray", "age": 22, "country": "Indonesia"},
        {"gender": "Male", "firstName": "Dennis", "lastName": "Woods", "age": 37, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Billy", "lastName": "Patterson", "age": 24, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Willie", "lastName": "Gray", "age": 42, "country": "China"},
        {"gender": "Male", "firstName": "Justin", "lastName": "Lawson", "age": 38, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Ryan", "lastName": "Foster", "age": 24, "country": "Indonesia"},
        {"gender": "Male", "firstName": "Eugene", "lastName": "Morris", "age": 37, "country": "Bulgaria"},
        {"gender": "Male", "firstName": "Eugene", "lastName": "Rivera", "age": 45, "country": "Philippines"},
        {"gender": "Female", "firstName": "Kathleen", "lastName": "Hunter", "age": 28, "country": "Bulgaria"}];

    var ageRestricted = _.filter(students, function (student) {
            return student.age >= 18 && student.age <= 24;
        }),
        alphabetically = _.filter(students, function (student) {
            return student.firstName.localeCompare(student.lastName) < 0;
        }),
        countryRestricted = _.where(students, {'country': 'Bulgaria'}).map(function (person) {
            return {name: person.firstName + ' ' + person.lastName};
        }),
        last = _.slice(students, -5),
        task5 = _.slice(_.filter(students, function (student) {
            return student.country !== 'Bulgaria' && student.gender === 'Male';
        }), 0, 3);

    $.each(ageRestricted, function (key, value) {
        var gender = $('<div>').text('Gender: ' + value.gender),
            name = $('<h3>').text(value.firstName + ' ' + value.lastName),
            age = $('<div>').text('Age: ' + value.age),
            country = $('<div>').text('Country: ' + value.country);

        $('<li>').append(name).append(gender).append(age).append(country).appendTo($('#task1'));
    });

    $.each(alphabetically, function (key, value) {
        var gender = $('<div>').text('Gender: ' + value.gender),
            name = $('<h3>').text(value.firstName + ' ' + value.lastName),
            age = $('<div>').text('Age: ' + value.age),
            country = $('<div>').text('Country: ' + value.country);

        $('<li>').append(name).append(gender).append(age).append(country).appendTo($('#task2'));
    });

    $.each(countryRestricted, function (key, value) {
        $('<li>').text(value.name).appendTo($('#task3'));
    });

    $.each(last, function (key, value) {
        var gender = $('<div>').text('Gender: ' + value.gender),
            name = $('<h3>').text(value.firstName + ' ' + value.lastName),
            age = $('<div>').text('Age: ' + value.age),
            country = $('<div>').text('Country: ' + value.country);

        $('<li>').append(name).append(gender).append(age).append(country).appendTo($('#task4'));
    });

    $.each(task5, function (key, value) {
        var gender = $('<div>').text('Gender: ' + value.gender),
            name = $('<h3>').text(value.firstName + ' ' + value.lastName),
            age = $('<div>').text('Age: ' + value.age),
            country = $('<div>').text('Country: ' + value.country);

        $('<li>').append(name).append(gender).append(age).append(country).appendTo($('#task5'));
    });
});