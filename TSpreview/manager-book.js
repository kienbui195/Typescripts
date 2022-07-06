var Book = /** @class */ (function () {
    function Book(title, author, alreadyRead) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
    return Book;
}());
var book1 = new Book('toan1', 'kim dong', false);
var book2 = new Book('trang ti', 'khong biet', true);
var booklist = [];
booklist.push(book1, book2);
for (var i = 0; i < booklist.length; i++) {
    if (booklist[i].alreadyRead) {
        console.log("Book: ".concat(booklist[i].title, " of author: ").concat(booklist[i].author, " is alreadyRead"));
    }
    else
        console.log("Book: ".concat(booklist[i].title, " of author: ").concat(booklist[i].author, " is still need to Read"));
}
