"use strict";
exports.__esModule = true;
exports.TeleNumber = void 0;
var TeleNumber = /** @class */ (function () {
    function TeleNumber() {
        this.number = /^[0-9]{2,2}-[0]{1,1}[0-9]{9,9}$/;
    }
    TeleNumber.prototype.validate = function (regex) {
        return this.number.test(regex);
    };
    return TeleNumber;
}());
exports.TeleNumber = TeleNumber;
