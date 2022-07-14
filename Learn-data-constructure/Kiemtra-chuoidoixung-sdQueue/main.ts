import {Stack} from "./Stack";
import {Queue} from "./Queue";

let str: string = 'abddba';
let arr = str.split('');
let stack = new Stack();
let queue = new Queue();
let count = arr.length;

function addElementsToStackAndQueue(arr) {
    for (const item of arr) {
        stack.push(item);
        queue.enqueue(item);
    }
}

function checkDoiXung() {
    while (count > 0) {
        if (stack.pop() === queue.dequeue()) {
            count--;
        } else break;
    }
}

let checkChuoiDoiXung = (arr): string => {
    addElementsToStackAndQueue(arr);
    checkDoiXung();
    if (count === 0) {
        return `Chuoi nhap la chuoi doi xung`;
    } else return `Chuoi nhap khong phai chuoi doi xung`;
}

console.log(checkChuoiDoiXung(arr));







