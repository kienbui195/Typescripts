"use strict";
exports.__esModule = true;
exports.StudentScore = void 0;
var StudentScore = /** @class */ (function () {
    function StudentScore(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    StudentScore.prototype.getInfo = function () {
        return {
            name: this.name,
            score: this.score
        };
    };
    StudentScore.prototype.getScore = function () {
        return this.score;
    };
    StudentScore.prototype.getName = function () {
        return this.name;
    };
    return StudentScore;
}());
exports.StudentScore = StudentScore;
