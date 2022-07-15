import {ListPatient} from "./ListPatient";

let list =  new ListPatient();
list.enqueue('Smith', 5);
list.enqueue('Jones', 4);
list.enqueue('Fehrenbach', 6);
list.enqueue('Brown', 1);
list.enqueue('Ingram', 1);

console.log(`Danh sach benh nhan: ${list.data}`);
console.log(`Ten benh nhan duoc kham dau: ${list.dequeue()}`);
console.log(`Danh sach benh nhan con lai: ${list.data}`);
console.log(`Ten benh nhan duoc kham tiep: ${list.dequeue()}`);
console.log(`Danh sach benh nhan con lai: ${list.data}`);


