"use strict";
exports.__esModule = true;
var Quece_1 = require("./Quece");
var queue = new Quece_1.Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
