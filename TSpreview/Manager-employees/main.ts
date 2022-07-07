import {EmployeeManager} from "./EmployeeManager";
import {Role, Employee} from "./Employee"

let staff1 = new Employee('Bui','Ken',new Date('2000-07-12'),'Hanoi',Role.Director);
let staff2 = new Employee('Phet','Tung',new Date('2001-06-10'),'Thanhhoa',Role.Staff);
let staff3 = new Employee('Luu','Thu',new Date('2001-09-12'),'namdinh',Role.Manager);
let list = new EmployeeManager();

list.addEmployee(staff1);
list.addEmployee(staff2);
list.addEmployee(staff3);
list.showAllList();
list.updateEmployeeInfo(1,'Bao','Tran', new Date('1999-12-12'),'Namdinh', Role.Secretary);
list.showAllList();
