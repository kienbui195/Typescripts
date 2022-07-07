"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cylinder = void 0;
var circle_class_1 = require("./circle-class");
var Cylinder = /** @class */ (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(color, radius, depth) {
        var _this = _super.call(this, color, radius) || this;
        _this.depth = depth;
        return _this;
    }
    Cylinder.prototype.getDepth = function () {
        return this.depth;
    };
    Cylinder.prototype.setDepth = function (depth) {
        this.depth = depth;
    };
    Cylinder.prototype.volume = function () {
        return _super.prototype.getArea.call(this) * this.depth;
    };
    return Cylinder;
}(circle_class_1.Circle));
exports.Cylinder = Cylinder;
