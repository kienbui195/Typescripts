"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var str = 'Nghin Nam Van Vo';
var arr = str.split(' ');
var temp = undefined;
var newarr = [];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    stack.push(item);
}
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var item = arr_2[_a];
    temp = stack.pop();
    newarr.push(temp);
}
console.log(newarr);
