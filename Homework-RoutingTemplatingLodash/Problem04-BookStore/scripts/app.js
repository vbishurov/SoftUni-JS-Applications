var books = [{"book": "The Grapes of Wrath", "author": "John Steinbeck", "price": "34,24", "language": "French"},
    {"book": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": "39,26", "language": "English"},
    {"book": "Nineteen Eighty-Four", "author": "George Orwell", "price": "15,39", "language": "English"},
    {"book": "Ulysses", "author": "James Joyce", "price": "23,26", "language": "German"},
    {"book": "Lolita", "author": "Vladimir Nabokov", "price": "14,19", "language": "German"},
    {"book": "Catch-22", "author": "Joseph Heller", "price": "47,89", "language": "German"},
    {"book": "The Catcher in the Rye", "author": "J. D. Salinger", "price": "25,16", "language": "English"},
    {"book": "Beloved", "author": "Toni Morrison", "price": "48,61", "language": "French"},
    {"book": "Of Mice and Men", "author": "John Steinbeck", "price": "29,81", "language": "Bulgarian"},
    {"book": "Animal Farm", "author": "George Orwell", "price": "38,42", "language": "English"},
    {"book": "Finnegans Wake", "author": "James Joyce", "price": "29,59", "language": "English"},
    {"book": "The Grapes of Wrath", "author": "John Steinbeck", "price": "42,94", "language": "English"}];

var groupedByAuthor = _.groupBy(books, 'author'),
    averagePrices = _.map(groupedByAuthor, function (author) {
        var total = 0,
            books = 0,
            authorName;
        $.each(author, function (key, value) {
            total += Number(value.price.replace(',', '.'));
            books++;
            authorName = value.author;
        });

        return authorName + ' average book price: ' + Math.floor(total / books);
    }),
    task3 = _.groupBy(_.filter(books, function (book) {
        return (book.language === 'English' || book.language === 'German') && Number(book.price.replace(',', '.')) <= 30
    }), 'author');

$.each(groupedByAuthor, function (key, value) {
    var $listItem = $('<li>'),
        author = $('<h3>').text(key);
    $listItem.append(author);

    $.each(value, function (key, value) {
        $listItem.append($('<div>').html('<strong>Book:</strong> ' + value.book + ', <strong>Price:</strong> ' + value.price));
    });

    $listItem.appendTo($('#task1'))
});

$.each(averagePrices, function (key, value) {
    $('<li>').text(value).appendTo($('#task2'));
});

$.each(task3, function (key, value) {
    var $listItem = $('<li>'),
        author = $('<h3>').text(key);
    $listItem.append(author);

    $.each(value, function (key, value) {
        $listItem.append($('<div>').html('<strong>Book:</strong> ' + value.book + ', <strong>Price:</strong> ' + value.price));
    });

    $listItem.appendTo($('#task3'))
});