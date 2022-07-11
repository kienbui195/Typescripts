var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getVolume = function (radius, height) {
        var baseArea = this.getBaseArea(radius);
        var perimeter = this.getPerimeter(radius);
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    Cylinder.getPerimeter = function (radius) {
        var perimeter = 2 * Math.PI * radius;
        return perimeter;
    };
    Cylinder.getBaseArea = function (radius) {
        var baseArea = Math.PI * radius * radius;
        return baseArea;
    };
    return Cylinder;
}());
var result = Cylinder.getVolume(5, 10);
console.log(result);
