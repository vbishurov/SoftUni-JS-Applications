define(function () {
    function Book(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }

    Book.prototype.serialize = function () {
        return {
            author: this._author,
            title: this._title,
            isbn: this._isbn
        }
    };

    return Book;
});