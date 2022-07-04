class Circle {
    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return Math.PI*Math.exp(this.radius);
    }

    getPerimeter() {
        return 2*this.radius*Math.PI;
    }
}

class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

class Rectangle {
    constructor(color, filled, width, height) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width*this.height;
    }

    getPerimeter() {
        return 2*(this.width+this.height);
    }
}

class Square {
    constructor(color, filled, side = 1.0) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let shape1 = new Shape('red',false);
let circle1 = new Circle('indigo', 3.5, false);
let rectangle1 = new Rectangle('orange',true, 2.5,3.8 );
let square1 = new Square('yellow',true )

console.log(shape1);
console.log(circle1);
console.log(rectangle1);
console.log(square1);