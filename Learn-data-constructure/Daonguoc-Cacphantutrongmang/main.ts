import {Stack} from "./Stack";

let stack = new Stack();
let str = 'Nghin Nam Van Vo';
let arr = str.split(' ');
let temp: any = undefined ;
let newarr = [];

for (const item of arr) {
    stack.push(item);
}

for (const item of arr) {
    temp = stack.pop();
    newarr.push(temp);
}

console.log(newarr);