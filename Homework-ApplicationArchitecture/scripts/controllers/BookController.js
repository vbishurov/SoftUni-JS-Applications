define(['handlebars', 'jquery', 'requester', 'bookModel', 'q'], function (Handlebars, $, requester, Book, Q) {
    function BookController() {
    }

    BookController.prototype.listBooks = function (selector) {
        requester.get('classes/Book')
            .then(function (data) {
                $.get('views/list.html', function (html) {
                    $(selector).html(Handlebars.compile(html)(data));
                })
            }, function (err) {
                console.error(err)
            });
    };

    BookController.prototype.bookDetails = function (bookId, selector, routeContext) {
        requester.get('classes/Book/' + bookId)
            .then(function (data) {
                $.get('views/details.html', function (html) {
                    $(selector).html(Handlebars.compile(html)(data));
                    $(selector)
                        .unbind('click')
                        .on('click', '#edit', function () {
                            var book = new Book($('#title').val(), $('#author').val(), $('#isbn').val());
                            editBook(bookId, book)
                                .then(function () {
                                    routeContext.redirect('#!/')
                                });
                        })
                        .on('click', '#delete', function () {
                            deleteBook(bookId)
                                .then(function () {
                                    routeContext.redirect('#!/')
                                });
                        })
                })
            }, function (err) {
                console.error(err);
            });
    };

    BookController.prototype.createBook = function (selector, routeContext) {
        $.get('views/add.html', function (html) {
            $(selector).html(html);
            $(selector)
                .unbind('click')
                .on('click', '#add', function () {
                    var book = new Book($('#title').val(), $('#author').val(), $('#isbn').val());
                    createBook(book)
                        .then(function () {
                            routeContext.redirect('#!/')
                        });
                });
        });
    };

    function editBook(bookId, book) {
        return requester.update('classes/Book/' + bookId, book.serialize());
    }

    function deleteBook(bookId) {
        return requester.delete('classes/Book/' + bookId);
    }

    function createBook(book) {
        return requester.post('classes/Book', book.serialize());
    }

    return new BookController();
});