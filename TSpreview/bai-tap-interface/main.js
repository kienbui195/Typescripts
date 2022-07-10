"use strict";
exports.__esModule = true;
var Circle_class_1 = require("./Circle-class");
var Rectangle_class_1 = require("./Rectangle-class");
var Square_class_1 = require("./Square-class");
var shapes = [];
shapes[0] = new Circle_class_1.Circle('Circle', 10);
shapes[1] = new Rectangle_class_1.Rectangle('Rectangle', 30, 20);
shapes[2] = new Square_class_1.Square('Square', 20);
console.log("Mang cac hinh: ");
console.log(shapes);
var randomNum = function () {
    return Math.floor(Math.random() * 100) + 1;
};
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var item = shapes_1[_i];
    item.resizeable(randomNum());
}
console.log("Mang cac hinh sau khi resize:");
console.log(shapes);
