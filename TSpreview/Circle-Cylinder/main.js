"use strict";
exports.__esModule = true;
var circle_class_1 = require("./circle-class");
var cylinder_class_1 = require("./cylinder-class");
var circle = new circle_class_1.Circle('red', 5);
var cylinder = new cylinder_class_1.Cylinder('blue', 5, 10);
console.log("Dien tich hinh tron: ".concat(circle.getArea(), " m2"));
console.log("Chu vi hinh tron: ".concat(circle.getPerimeter(), " m"));
console.log("The tich khoi tru: ".concat(cylinder.volume(), " m3"));
