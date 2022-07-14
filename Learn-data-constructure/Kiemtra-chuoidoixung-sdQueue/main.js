"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var str = 'abddba';
var arr = str.split('');
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
var count = arr.length;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    stack.push(item);
    queue.enqueue(item);
}
while (count > 0) {
    if (stack.pop() === queue.dequeue()) {
        count--;
    }
    else
        break;
}
if (count === 0) {
    console.log("Chuoi nhap la chuoi doi xung");
}
else
    console.log("Chuoi nhap khong phai chuoi doi xung");
