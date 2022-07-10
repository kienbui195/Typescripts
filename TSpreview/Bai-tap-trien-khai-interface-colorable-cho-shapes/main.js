"use strict";
exports.__esModule = true;
var Square_1 = require("./Square");
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var shapes = [];
shapes[0] = new Circle_1.Circle('Circle', 10);
shapes[1] = new Square_1.Square('Square', 20);
shapes[2] = new Rectangle_1.Rectangle('Rectanglr', 30, 20);
console.log(shapes);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var item = shapes_1[_i];
    console.log('Dien tich: ');
    console.log(item.getArea());
    if (item instanceof Square_1.Square) {
        console.log(item.howToColor());
    }
}
