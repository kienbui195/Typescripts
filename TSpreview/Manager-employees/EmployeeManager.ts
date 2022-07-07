import {Role, Employee} from "./Employee";
export class EmployeeManager {
    list: Employee[] = [];
    constructor() {
    }

    addEmployee(employee: Employee) {
        this.list.push(employee);
    }

    showAllList() {
        console.log(this.list);
    }

    showEmployeeInfo(index:number) {
        console.log(this.list[index].showInfo());
    }

    deleteEmployeeInfo(index:number) {
        this.list.splice(index,1);
    }

    updateEmployeeInfo(index:number, newfirstname: string, newlastname: string, newbirthday: Date, newaddress: string, newrole: Role) {
        this.list[index].setFirstName(newfirstname);
        this.list[index].setLastName(newlastname);
        this.list[index].setAddress(newaddress);
        this.list[index].setBirthday(newbirthday);
        this.list[index].setRole(newrole);
    }

}