class Books {
    id: string;
    name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getID(): string {
        return this.id;
    }
}

class BookManager {
    books: Books[] = [];
    constructor() {
    }

    add(book: Books): void {
        this.books.push(book);
    }

    getList(): Books[] {
        return this.books;
    }

    delete(id: string): void {
        let indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete,1);
        } else {
            throw  new Error('delete error');
        }
    }

    findBook(id: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.id === id) {
                i = index;
            }
        })
        return i;
    }

    update(id:  string, name: string): void {
        let indexBookUpdate = this.findBook(id)
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        } else {
            throw new Error('update error');
        }
    }
}

let book1 = new Books('1','Lap trinh Java');
let book2 = new Books('2','Lap trinh Javascript');
let book3 = new Books('3','Lap trinh PHP');

let bookManager = new BookManager();
bookManager.add(book1);
bookManager.add(book2);
bookManager.add(book3);
bookManager.update('2','lap trinh C');
console.log(bookManager.getList());
