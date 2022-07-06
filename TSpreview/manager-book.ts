class Book {
    title: string;
    author: string;
    alreadyRead: boolean;
    constructor(title: string, author: string, alreadyRead: boolean) {
        this.title = title;
        this.author = author;
        this.alreadyRead = alreadyRead;
    }
}


let book1 = new Book('toan1','kim dong', false);
let book2 = new Book('trang ti','khong biet', true);
let booklist: Book[] = [];
booklist.push(book1,book2);

for (let i = 0; i < booklist.length; i++) {
    if (booklist[i].alreadyRead) {
        console.log(`Book: ${booklist[i].title} of author: ${booklist[i].author} is alreadyRead`);
    } else console.log(`Book: ${booklist[i].title} of author: ${booklist[i].author} is still need to Read`)
}