"use strict";
exports.__esModule = true;
var compareto_circle_class_1 = require("./compareto-circle-class");
var circles = [];
circles[0] = new compareto_circle_class_1.ComparableCircle(10);
circles[1] = new compareto_circle_class_1.ComparableCircle(20);
circles[2] = new compareto_circle_class_1.ComparableCircle(30);
var result = circles[1].compareTo(circles[2]);
if (result === 1) {
    console.log("Hinh tron 1 lon hon hinh tron 2");
}
else if (result === -1) {
    console.log("Hinh tron 1 nho hon hinh tron 2");
}
else
    console.log("2 hinh tron co kich thuoc bang nhau");
