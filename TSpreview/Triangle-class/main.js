"use strict";
exports.__esModule = true;
var shape_class_1 = require("./shape-class");
var triangle_class_1 = require("./triangle-class");
var shape = new shape_class_1.Shape('Vong cung', 'red');
var triangle = new triangle_class_1.Triangle('Tam giac', 'blue', 5, 10, 15);
console.log(shape.showInfo());
console.log("Chu vi hinh tam giac da cho: ".concat(triangle.getPerimeter()));
