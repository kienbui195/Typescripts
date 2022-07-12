import {Bill} from "./Bill"

export class Manager {
    protected list: Bill[] = [];

    constructor() {
    }

    findIndexOfNumberWatch(id: number): number {
        let flag = -1;
        this.list.forEach((value, index) => {
            if (id === value.getIdOfWatch()) {
                flag = index;
            }
        })
        return flag;
    }
    addInfo(bill: Bill) {
            this.list.push(bill);
    }
    deleteInfo(id: number) {
        if (this.findIndexOfNumberWatch(id) !== -1) {
            this.list.splice(this.findIndexOfNumberWatch(id),1);
        } else throw new Error('Not Found');
    }
    showAllListUser() {
        console.log(this.list);
    }
    billOfUser(id: number) {
        if (this.findIndexOfNumberWatch(id) !== -1) {
            console.log(`Tien dien phai tra: ${this.list[this.findIndexOfNumberWatch(id)].getTotalMoney()}`);
        }
    }
}