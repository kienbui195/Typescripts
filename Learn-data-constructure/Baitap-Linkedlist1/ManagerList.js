"use strict";
exports.__esModule = true;
exports.ManagerList = void 0;
var StudentScore_1 = require("./StudentScore");
var ManagerList = /** @class */ (function () {
    function ManagerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ManagerList.prototype.insertFirst = function (name, score) {
        var studentscore = new StudentScore_1.StudentScore(name, score);
        studentscore.next = this.head;
        this.head = studentscore;
        if (!this.tail) {
            this.tail = studentscore;
        }
        this.size++;
    };
    ManagerList.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var studentscore = new StudentScore_1.StudentScore(name, score);
            this.tail.next = studentscore;
            this.tail = studentscore;
            this.size++;
        }
    };
    ManagerList.prototype.showList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return listData;
    };
    ManagerList.prototype.totalStudentFail = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    };
    ManagerList.prototype.listStudentMaxScore = function () {
        var newlist = [];
        var currentNode = this.head;
        var max = currentNode.getScore();
        while (currentNode !== null) {
            if (currentNode.getScore() > max) {
                max = currentNode.getScore();
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() === max) {
                newlist.push(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
        return newlist;
    };
    ManagerList.prototype.findByName = function (name) {
        var newlist = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getName() === name) {
                newlist.push(currentNode.getInfo());
            }
            currentNode = currentNode.next;
        }
        console.log(newlist);
    };
    return ManagerList;
}());
exports.ManagerList = ManagerList;
