"use strict";
exports.__esModule = true;
exports.StaffSalary = exports.Month = void 0;
var Month;
(function (Month) {
    Month[Month["Mot"] = 1] = "Mot";
    Month[Month["Hai"] = 2] = "Hai";
    Month[Month["Ba"] = 3] = "Ba";
    Month[Month["Bon"] = 4] = "Bon";
    Month[Month["Nam"] = 5] = "Nam";
    Month[Month["Sau"] = 6] = "Sau";
    Month[Month["Bay"] = 7] = "Bay";
    Month[Month["Tam"] = 8] = "Tam";
    Month[Month["Chin"] = 9] = "Chin";
    Month[Month["Muoi"] = 10] = "Muoi";
    Month[Month["Muoimot"] = 11] = "Muoimot";
    Month[Month["Muoihai"] = 12] = "Muoihai";
})(Month = exports.Month || (exports.Month = {}));
var StaffSalary = /** @class */ (function () {
    function StaffSalary(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    StaffSalary.prototype.getInfo = function () {
        return {
            month: this.month,
            money: this.money
        };
    };
    StaffSalary.prototype.getMoney = function () {
        return this.money;
    };
    StaffSalary.prototype.getMonth = function () {
        return this.month;
    };
    return StaffSalary;
}());
exports.StaffSalary = StaffSalary;
