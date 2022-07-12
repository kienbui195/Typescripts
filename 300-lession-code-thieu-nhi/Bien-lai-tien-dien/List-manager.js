"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Manager = /** @class */ (function () {
    function Manager() {
        this.list = [];
    }
    Manager.prototype.findIndexOfNumberWatch = function (id) {
        var flag = -1;
        this.list.forEach(function (value, index) {
            if (id === value.getIdOfWatch()) {
                flag = index;
            }
        });
        return flag;
    };
    Manager.prototype.addInfo = function (bill) {
        this.list.push(bill);
    };
    Manager.prototype.deleteInfo = function (id) {
        if (this.findIndexOfNumberWatch(id) !== -1) {
            this.list.splice(this.findIndexOfNumberWatch(id), 1);
        }
        else
            throw new Error('Not Found');
    };
    Manager.prototype.showAllListUser = function () {
        console.log(this.list);
    };
    Manager.prototype.billOfUser = function (id) {
        if (this.findIndexOfNumberWatch(id) !== -1) {
            console.log("Tien dien phai tra: ".concat(this.list[this.findIndexOfNumberWatch(id)].getTotalMoney()));
        }
    };
    return Manager;
}());
exports.Manager = Manager;
