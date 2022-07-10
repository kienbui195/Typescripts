import {Square} from "./Square";
import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";

let shapes = [];

shapes[0] = new Circle('Circle',10);
shapes[1] = new Square('Square',20);
shapes[2] = new Rectangle('Rectanglr',30,20);
console.log(shapes)

for (const item of shapes) {
    console.log('Dien tich: ')
    console.log(item.getArea());
    if (item instanceof Square) {
        console.log(item.howToColor());
    }
}