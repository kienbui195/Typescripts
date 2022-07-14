import {ManagerList} from "./ManagerList";
import {Month} from "./StaffSalary";

let list = new ManagerList();
list.insertFirst(Month.Bon, 3000);
list.insertLast(Month.Hai, 5000);
list.insertLast(Month.Ba, 8000);
list.insertLast(Month.Chin, 9000);
list.insertLast(Month.Muoi, 3500);

console.log(list.showInfo());
console.log(`Tong luong: ${list.totalSalary()}`);
console.log(`THang luong cao nhat: ${list.findMonthHighestSalary()}`);