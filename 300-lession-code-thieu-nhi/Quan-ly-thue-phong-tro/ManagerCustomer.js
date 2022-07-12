"use strict";
exports.__esModule = true;
exports.Manager = void 0;
var Hotel_1 = require("./Hotel");
var Person_1 = require("./Person");
var Manager = /** @class */ (function () {
    function Manager() {
        this.list = [];
    }
    Manager.prototype.findIndexOfCustomer = function (id) {
        var flag = -1;
        this.list.forEach(function (value, index) {
            if (id === value.getIdOfCustomer()) {
                flag = index;
            }
        });
        return flag;
    };
    Manager.prototype.deleteInfo = function (id) {
        var index = this.findIndexOfCustomer(id);
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    };
    Manager.prototype.showAllInfo = function () {
        console.log(this.list);
    };
    Manager.prototype.addInfoCustomer = function (user) {
        this.list.push(user);
    };
    return Manager;
}());
exports.Manager = Manager;
var person = new Person_1.Person('Tung', '10/06', 12345);
var user = new Hotel_1.Hotel(20, 'hang sang', 1200, person);
var managerlist = new Manager();
managerlist.addInfoCustomer(user);
managerlist.showAllInfo();
