"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.getFilled = function () {
        return this.filled;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.toString = function () {
        return "A Shape with color of ".concat(this.color, " and ").concat(this.isFilled() ? 'Filled' : 'not Filled');
    };
    return Shape;
}());
exports.Shape = Shape;
