class Product {
    protected name: string;
    protected price: number;
    constructor(name: string,price: number) {
        this.name = name;
        this.price = price;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getPrice(): number {
        return this.price;
    }

    set setPrice(price) {
        this.price = price;
    }
}

class ProductManager {
    private products = []
    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product) {
        this.products.push(product);
    }
}

let laptop = new Product('Laptop', 20000);
let iphone = new Product('Iphone', 10000);
let productsmanager = new ProductManager();
productsmanager.add = laptop;
productsmanager.add = iphone;
console.log(productsmanager.getAll);