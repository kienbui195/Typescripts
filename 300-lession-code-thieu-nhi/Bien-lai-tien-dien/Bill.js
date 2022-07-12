"use strict";
exports.__esModule = true;
exports.Bill = void 0;
var Bill = /** @class */ (function () {
    function Bill(infouser, olđindex, newindex) {
        this.infouser = infouser;
        this.olđindex = olđindex;
        this.newindex = newindex;
        this.infouser = infouser;
        this.olđindex = olđindex;
        this.newindex = newindex;
        this.totalmoney = (this.newindex - this.olđindex) * 750;
    }
    Bill.prototype.getTotalMoney = function () {
        return this.totalmoney;
    };
    Bill.prototype.getIdOfWatch = function () {
        return this.infouser.getIdOfWatch();
    };
    Bill.prototype.getInfoUser = function () {
        return {
            User: this.infouser,
            OldIndex: this.olđindex,
            NewIndex: this.newindex,
            MoneyMushPay: this.totalmoney
        };
    };
    return Bill;
}());
exports.Bill = Bill;
