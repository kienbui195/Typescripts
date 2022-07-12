"use strict";
exports.__esModule = true;
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(numberofdaysforrnet, typeofroom, price, persons) {
        this._numberofdaysforrnet = numberofdaysforrnet;
        this._typeofroom = typeofroom;
        this._price = price;
        this._person = persons;
    }
    Hotel.prototype.getNumberOfDays = function () {
        return this._numberofdaysforrnet;
    };
    Hotel.prototype.setNumberOfDays = function (number) {
        this._numberofdaysforrnet = number;
    };
    Hotel.prototype.getTypeOfRoom = function () {
        return this._typeofroom;
    };
    Hotel.prototype.setTypeOfRoom = function (type) {
        this._typeofroom = type;
    };
    Hotel.prototype.getPrice = function () {
        return this._price;
    };
    Hotel.prototype.setPrice = function (value) {
        this._price = value;
    };
    Hotel.prototype.getCustomerInfo = function () {
        return this._person;
    };
    Hotel.prototype.setCustomerInfo = function (name, birthday, idno) {
        this._person.setName(name);
        this._person.setBirthday(birthday);
        this._person.setIdNo(idno);
    };
    Hotel.prototype.getIdOfCustomer = function () {
        return this._person.getIdNo();
    };
    Hotel.prototype.setNameOfCustomer = function (name) {
        this._person.setName(name);
    };
    Hotel.prototype.setBirthdayOfCustomer = function (day) {
        this._person.setBirthday(day);
    };
    Hotel.prototype.setIdOfCustomer = function (id) {
        this._person.setIdNo(id);
    };
    return Hotel;
}());
exports.Hotel = Hotel;
