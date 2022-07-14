"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var str = 'abddba';
var arr = str.split('');
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
var count = arr.length;
function addElementsToStackAndQueue(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        stack.push(item);
        queue.enqueue(item);
    }
}
function checkDoiXung() {
    while (count > 0) {
        if (stack.pop() === queue.dequeue()) {
            count--;
        }
        else
            break;
    }
}
var checkChuoiDoiXung = function (arr) {
    addElementsToStackAndQueue(arr);
    checkDoiXung();
    if (count === 0) {
        return "Chuoi nhap la chuoi doi xung";
    }
    else
        return "Chuoi nhap khong phai chuoi doi xung";
};
console.log(checkChuoiDoiXung(arr));
