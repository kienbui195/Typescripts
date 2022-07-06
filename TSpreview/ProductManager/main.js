class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
}
class ProductManager {
    constructor() {
        this.products = [];
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
