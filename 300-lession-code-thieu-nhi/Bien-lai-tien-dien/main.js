"use strict";
exports.__esModule = true;
var Readline = require("readline-sync");
var List_manager_1 = require("./List-manager");
var User_1 = require("./User");
var Bill_1 = require("./Bill");
var listmanager = new List_manager_1.Manager();
var menu = function () {
    console.log('-------------Menu-------------');
    console.log('Bạn muốn làm gi?');
    console.log('1. Thêm thông tin user');
    console.log('2. Xóa thông tin user');
    console.log('3. Hiển thị danh sách thông tin user');
    console.log('4. Hiển thị bill tiền điện');
    console.log('0. Thoát');
    console.log('-------------------------------');
};
var displayAllList = function () {
    listmanager.showAllListUser();
};
var addUser = function () {
    var name = Readline.question('Nhập tên User: ');
    var numberofhouse = +Readline.question('Nhập số nhà User: ');
    var idofwatch = +Readline.question('Nhập mã số đồng hồ User: ');
    return new User_1.User(name, numberofhouse, idofwatch);
};
var addBill = function () {
    var oldindex = +Readline.question('Nhap chi so cu: ');
    var newindex = +Readline.question('Nhap chi so moi: ');
    return new Bill_1.Bill(addUser(), oldindex, newindex);
};
var addInfoUser = function () {
    listmanager.addInfo(addBill());
};
var deleteInfoUser = function () {
    var idofuser = +Readline.question('Nhap cmnd cua User: ');
    listmanager.deleteInfo(idofuser);
};
var showBillOfUser = function () {
    var idofuser = +Readline.question('Nhap cmnd cua User: ');
    listmanager.billOfUser(idofuser);
};
var check;
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
} while (check != 0);
