"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, birthday, idno) {
        this._name = name;
        this._birthday = birthday;
        this._idno = idno;
    }
    Person.prototype.getName = function () {
        return this._name;
    };
    Person.prototype.setName = function (name) {
        this._name = name;
    };
    Person.prototype.getBirthday = function () {
        return this._birthday;
    };
    Person.prototype.setBirthday = function (birthday) {
        this._birthday = birthday;
    };
    Person.prototype.getIdNo = function () {
        return this._idno;
    };
    Person.prototype.setIdNo = function (idno) {
        this._idno = idno;
    };
    Person.prototype.showInfo = function () {
        return "".concat(this.getName(), " sinh ngay ").concat(this.getBirthday(), " co So CMND: ").concat(this.getIdNo());
    };
    return Person;
}());
exports.Person = Person;
