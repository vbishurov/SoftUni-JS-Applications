define(['sammy', 'requester', 'bookController'], function (Sammy, requester, BookController) {
    return Sammy('#wrapper', function () {
        this.get('#!/', function () {
            BookController.listBooks('#wrapper');
        });

        this.get('#!/book/:objectId', function () {
            var bookId = this.params['objectId'];

            BookController.bookDetails(bookId, '#wrapper', this);
        });

        this.get('#!/create', function () {
            BookController.createBook('#wrapper', this)
        })
    }).run('#!/');
});