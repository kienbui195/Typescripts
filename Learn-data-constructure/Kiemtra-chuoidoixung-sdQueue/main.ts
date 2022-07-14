import {Stack} from "./Stack";
import {Queue} from "./Queue";

let str: string = 'abddba';
let arr = str.split('');
let stack = new Stack();
let queue = new Queue();
let count = arr.length;

for (const item of arr) {
    stack.push(item);
    queue.enqueue(item);
}

while (count > 0) {
    if (stack.pop() === queue.dequeue()) {
        count--;
    } else break;
}
if (count === 0) {
    console.log(`Chuoi nhap la chuoi doi xung`);
} else console.log(`Chuoi nhap khong phai chuoi doi xung`);






