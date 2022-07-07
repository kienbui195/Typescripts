"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.list = [];
    }
    EmployeeManager.prototype.addEmployee = function (employee) {
        this.list.push(employee);
    };
    EmployeeManager.prototype.showAllList = function () {
        console.log(this.list);
    };
    EmployeeManager.prototype.showEmployeeInfo = function (index) {
        console.log(this.list[index].showInfo());
    };
    EmployeeManager.prototype.deleteEmployeeInfo = function (index) {
        this.list.splice(index, 1);
    };
    EmployeeManager.prototype.updateEmployeeInfo = function (index, newfirstname, newlastname, newbirthday, newaddress, newrole) {
        this.list[index].setFirstName(newfirstname);
        this.list[index].setLastName(newlastname);
        this.list[index].setAddress(newaddress);
        this.list[index].setBirthday(newbirthday);
        this.list[index].setRole(newrole);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
