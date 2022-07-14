import { ManagerList } from "./ManagerList";
import { StudentScore } from "./StudentScore";



let list = new ManagerList();
list.insertFirst('Tung', 10);
list.insertLast('Thu',4);
list.insertLast('Kien',8);
console.log(list.showList());
console.log(`Tong sinh vien truot mon: ${list.totalStudentFail()}`);
console.log(`Danh sach sinh vien diem cao nhat: ${list.listStudentMaxScore()}`);
list.findByName('Kien');



