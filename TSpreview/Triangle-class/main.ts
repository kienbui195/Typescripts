import {Shape} from "./shape-class"
import {Triangle} from "./triangle-class";

let shape: Shape = new Shape('Vong cung','red');
let triangle: Triangle = new Triangle('Tam giac','blue', 5,10,15);
console.log(shape.showInfo());
console.log(`Chu vi hinh tam giac da cho: ${triangle.getPerimeter()}`)