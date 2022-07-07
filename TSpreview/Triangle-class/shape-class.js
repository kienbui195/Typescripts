"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.getName = function () {
        return this.name;
    };
    Shape.prototype.setName = function (name) {
        this.name = name;
    };
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.showInfo = function () {
        return "this Shape has name: ".concat(this.name, " and color of it is ").concat(this.color);
    };
    return Shape;
}());
exports.Shape = Shape;
