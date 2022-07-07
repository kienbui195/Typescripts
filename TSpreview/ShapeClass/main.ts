import {Shape} from "./shape-class";
import {Circle} from "./circle-class";
import {Rectangle} from "./rectangle-class";
import {Square} from "./square-class";

let shape:Shape = new Shape('red', true);
console.log(shape);
console.log(shape.toString());

let circle:Circle = new Circle('black',true,3.0);
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());

let rectangle:Rectangle = new Rectangle('yellow',false,10,20);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

let square:Square = new Square('brown',true, 5);
console.log(square);
console.log(square.getArea());
console.log(square.getPerimeter());
console.log(square.toString());