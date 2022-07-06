var Books = /** @class */ (function () {
    function Books(id, name) {
        this.id = id;
        this.name = name;
    }
    Books.prototype.getName = function () {
        return this.name;
    };
    Books.prototype.setName = function (name) {
        this.name = name;
    };
    Books.prototype.getID = function () {
        return this.id;
    };
    return Books;
}());
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype["delete"] = function (id) {
        var indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManager.prototype.findBook = function (id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.id === id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype.update = function (id, name) {
        var indexBookUpdate = this.findBook(id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    return BookManager;
}());
var book1 = new Books('1', 'Lap trinh Java');
var book2 = new Books('2', 'Lap trinh Javascript');
var book3 = new Books('3', 'Lap trinh PHP');
var bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('2', 'lap trinh C');
console.log(bookManager.getList());
