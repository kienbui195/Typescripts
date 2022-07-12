"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, numberofhouse, idofwatch) {
        this.name = name;
        this.numberofhouse = numberofhouse;
        this.idofwatch = idofwatch;
        this.name = name;
        this.numberofhouse = numberofhouse;
        this.idofwatch = idofwatch;
    }
    User.prototype.getNameOfUser = function () {
        return this.name;
    };
    User.prototype.getNumberOfHouse = function () {
        return this.numberofhouse;
    };
    User.prototype.getIdOfWatch = function () {
        return this.idofwatch;
    };
    User.prototype.getAllInfo = function () {
        return {
            Fullnam: this.getNameOfUser(),
            Numberofhouse: this.getNumberOfHouse(),
            IdOFWatch: this.getIdOfWatch()
        };
    };
    return User;
}());
exports.User = User;
