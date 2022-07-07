import {Circle} from "./circle-class";
import {Cylinder} from "./cylinder-class";

let circle: Circle = new Circle('red',5);
let cylinder:Cylinder = new Cylinder('blue',5,10);

console.log(`Dien tich hinh tron: ${circle.getArea()} m2`);
console.log(`Chu vi hinh tron: ${circle.getPerimeter()} m`);
console.log(`The tich khoi tru: ${cylinder.volume()} m3`);