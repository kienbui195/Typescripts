"use strict";
exports.__esModule = true;
exports.Employee = exports.Role = void 0;
var Role;
(function (Role) {
    Role[Role["Director"] = 0] = "Director";
    Role[Role["Vicedirector"] = 1] = "Vicedirector";
    Role[Role["Secretary"] = 2] = "Secretary";
    Role[Role["Manager"] = 3] = "Manager";
    Role[Role["Staff"] = 4] = "Staff";
})(Role = exports.Role || (exports.Role = {}));
var Employee = /** @class */ (function () {
    function Employee(lastname, firstname, birthday, address, role) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }
    Employee.prototype.setRole = function (role) {
        this.role = role;
    };
    Employee.prototype.setFirstName = function (firstname) {
        this.firstname = firstname;
    };
    Employee.prototype.setLastName = function (lastname) {
        this.lastname = lastname;
    };
    Employee.prototype.setBirthday = function (birthday) {
        this.birthday = birthday;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.getLastName = function () {
        return this.lastname;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstname;
    };
    Employee.prototype.showRole = function () {
        if (this.role === 0) {
            return 'is Director';
        }
        else if (this.role === 1) {
            return 'is Vicedirector';
        }
        else if (this.role === 2) {
            return 'is Secretary';
        }
        else if (this.role === 3) {
            return 'is Manager';
        }
        else
            return 'is Staff';
    };
    Employee.prototype.showInfo = function () {
        console.log("".concat(this.firstname, " ").concat(this.lastname, " - ").concat(this.birthday, " - ").concat(this.address, " - ").concat(this.showRole()));
    };
    return Employee;
}());
exports.Employee = Employee;
