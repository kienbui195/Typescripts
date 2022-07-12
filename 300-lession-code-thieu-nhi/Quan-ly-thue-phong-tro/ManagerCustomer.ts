import {Hotel} from "./Hotel"
import {Person} from "./Person";

export class Manager {
    protected list: Hotel[] = [];

    constructor() {
    }

    findIndexOfCustomer(id: number): number {
        let flag = -1;
        this.list.forEach((value, index) => {
            if (id === value.getIdOfCustomer()) {
                flag = index;
            }
        })
        return flag;
    }
    deleteInfo(id: number) {
        let index = this.findIndexOfCustomer(id)
        if (index !== -1) {
            this.list.splice(index, 1);
        }
    }
    showAllInfo() {
        console.log(this.list);
    }
    addInfoCustomer(user: Hotel) {
        this.list.push(user);
    }
}

let person = new Person('Tung','10/06', 12345)
let user = new Hotel(20, 'hang sang', 1200, person)
let managerlist = new Manager();
managerlist.addInfoCustomer(user)
managerlist.showAllInfo()