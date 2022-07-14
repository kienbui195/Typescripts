"use strict";
exports.__esModule = true;
exports.ManagerList = void 0;
var StaffSalary_1 = require("./StaffSalary");
var ManagerList = /** @class */ (function () {
    function ManagerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ManagerList.prototype.insertFirst = function (month, money) {
        var node = new StaffSalary_1.StaffSalary(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    ManagerList.prototype.insertLast = function (month, money) {
        if (!this.head) {
            this.insertFirst(month, money);
        }
        else {
            var node = new StaffSalary_1.StaffSalary(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    ManagerList.prototype.showInfo = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return listData;
    };
    ManagerList.prototype.totalSalary = function () {
        var total = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            total += currentNode.getMoney();
            currentNode = currentNode.next;
        }
        return total;
    };
    ManagerList.prototype.findMonthHighestSalary = function () {
        var currentNode = this.head;
        var max = currentNode.getMoney();
        while (currentNode !== null) {
            if (currentNode.getMoney() > max) {
                max = currentNode.getMoney();
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        var flag = 0;
        while (currentNode !== null) {
            if (currentNode.getMoney() === max) {
                flag = currentNode.getMonth();
            }
            currentNode = currentNode.next;
        }
        return flag;
    };
    return ManagerList;
}());
exports.ManagerList = ManagerList;
