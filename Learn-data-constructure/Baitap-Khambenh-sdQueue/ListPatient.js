"use strict";
exports.__esModule = true;
exports.ListPatient = void 0;
var ListPatient = /** @class */ (function () {
    function ListPatient() {
        this.data = [];
    }
    ListPatient.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var min = this.data[0];
        var minIndex = -1;
        this.data.forEach(function (item, index) {
            if (item[0] < min[0]) {
                min = item;
                minIndex = index;
            }
        });
        this.data.splice(minIndex, 1);
        return min[1];
    };
    ListPatient.prototype.enqueue = function (item, priority) {
        this.data.push([priority, item]);
    };
    ListPatient.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    ListPatient.prototype.size = function () {
        return this.data.length;
    };
    return ListPatient;
}());
exports.ListPatient = ListPatient;
