"use strict";
exports.__esModule = true;
exports.BubbleSortByStep = void 0;
var BubbleSortByStep = /** @class */ (function () {
    function BubbleSortByStep() {
    }
    BubbleSortByStep.bubbleSortByStep = function (list) {
        var needNextPass = true;
        for (var j = 1; j < list.length && needNextPass; j++) {
            needNextPass = false;
            for (var i = 0; i < list.length - j; i++) {
                if (list[i] > list[i + 1]) {
                    console.log("Swap ".concat(list[i], " with ").concat(list[i + 1]));
                    var temp = list[i];
                    list[i] = list[i + 1];
                    list[i + 1] = temp;
                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
            console.log("List after the ".concat(j, "  sort: "));
            for (var k = 0; k < list.length; k++) {
                console.log(list[j] + '\t');
            }
            console.log();
        }
    };
    BubbleSortByStep.numbers = [8, 3, 6, 1, 4, 10, 2, 50];
    return BubbleSortByStep;
}());
exports.BubbleSortByStep = BubbleSortByStep;
