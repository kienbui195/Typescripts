var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    return Circle;
}());
var distance = function (circle1, circle2, d) {
    var distance = Math.pow(d, 2) + Math.pow(circle1.radius - circle2.radius, 2);
    return Math.pow(distance, 0.5);
};
var circle1 = new Circle(9);
var circle2 = new Circle(6);
console.log(distance(circle1, circle2, 24));
