import {ComparableCircle} from "./compareto-circle-class";

let circles = [];

circles[0] = new ComparableCircle(10);
circles[1] = new ComparableCircle(20);
circles[2] = new ComparableCircle(30);

let result = circles[1].compareTo(circles[2]);
if (result === 1) {
    console.log(`Hinh tron 1 lon hon hinh tron 2`);
} else if (result === -1) {
    console.log(`Hinh tron 1 nho hon hinh tron 2`);
} else console.log(`2 hinh tron co kich thuoc bang nhau`);