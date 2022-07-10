import {Circle} from "./Circle-class";
import {Rectangle} from "./Rectangle-class";
import {Square} from "./Square-class";

let shapes = [];

shapes[0] = new Circle('Circle',10);
shapes[1] = new Rectangle('Rectangle',30,20);
shapes[2] = new Square('Square', 20);
console.log(`Mang cac hinh: `);
console.log(shapes);
let randomNum = (): number => {
    return Math.floor(Math.random()*100)+1;
}

for (const item of shapes) {
    item.resizeable(randomNum());
}
console.log(`Mang cac hinh sau khi resize:`);
console.log(shapes)

