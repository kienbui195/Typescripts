"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (list) {
        var needNextPass = true;
        for (var j = 1; j < list.length && needNextPass; j++) {
            needNextPass = false;
            for (var i = 0; i < list.length - j; i++) {
                if (list[i] > list[i + 1]) {
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
        }
    };
    BubbleSort.list = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;
