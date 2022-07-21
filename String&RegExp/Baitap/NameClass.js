"use strict";
exports.__esModule = true;
exports.NameOfClass = void 0;
var NameOfClass = /** @class */ (function () {
    function NameOfClass() {
        this.name = /^[CPA][0-9]{4,4}[GHIKLM]$/;
    }
    NameOfClass.prototype.validate = function (regex) {
        return this.name.test(regex);
    };
    return NameOfClass;
}());
exports.NameOfClass = NameOfClass;
