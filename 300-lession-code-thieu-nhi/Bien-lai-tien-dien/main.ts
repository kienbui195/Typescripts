import *as Readline from 'readline-sync';
import {Manager} from "./List-manager";
import {User} from "./User";
import {Bill} from "./Bill";

let listmanager = new Manager();

let menu = (): void => {
    console.log('-------------Menu-------------');
    console.log('Bạn muốn làm gi?');
    console.log('1. Thêm thông tin user');
    console.log('2. Xóa thông tin user');
    console.log('3. Hiển thị danh sách thông tin user');
    console.log('4. Hiển thị bill tiền điện');
    console.log('0. Thoát');
    console.log('-------------------------------')
}

let displayAllList = () => {
    listmanager.showAllListUser();
}
let addUser = (): User => {
    let name: string = Readline.question('Nhập tên User: ');
    let numberofhouse = +Readline.question('Nhập số nhà User: ');
    let idofwatch = +Readline.question('Nhập mã số đồng hồ User: ');

    return new User (name, numberofhouse, idofwatch);
}
let addBill = (): Bill => {
    let oldindex = +Readline.question('Nhap chi so cu: ');
    let newindex = +Readline.question('Nhap chi so moi: ');

    return new Bill(addUser(), oldindex, newindex);
}
let addInfoUser = () => {
    listmanager.addInfo(addBill());
}
let deleteInfoUser = () => {
    let idofuser = +Readline.question('Nhap cmnd cua User: ');
    listmanager.deleteInfo(idofuser);
}
let showBillOfUser = () => {
    let idofuser = +Readline.question('Nhap cmnd cua User: ');
    listmanager.billOfUser(idofuser);
}
let check;
do {
    menu();
    check = +Readline.question('Nhap lua chon: ');
    switch (check) {
        case 1:
            addInfoUser();
            break;
        case 2:
            deleteInfoUser();
            break;
        case 3:
            displayAllList();
            break;
        case 4:
            showBillOfUser();
            break;
        case 0:
            break;
        default:
            console.log('Nhập lại ');
            break;
    }
}
while (check != 0);