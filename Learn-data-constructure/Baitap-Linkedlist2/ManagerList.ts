import {Month, StaffSalary} from "./StaffSalary";

export class ManagerList<T> {
    head: StaffSalary<T> | null;
    tail: StaffSalary<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(month: Month, money: number) {
        let node = new StaffSalary(month, money);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(month: Month, money: number) {
        if (!this.head) {
            this.insertFirst(month, money);
        } else {
            let node = new StaffSalary(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    showInfo(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return listData;
    }

    totalSalary(): number {
        let total: number = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            total += currentNode.getMoney();
            currentNode = currentNode.next;
        }
        return total;
    }

    findMonthHighestSalary(): number {
        let currentNode = this.head;
        let max = currentNode.getMoney();

        while (currentNode !== null) {
            if (currentNode.getMoney() > max) {
                max = currentNode.getMoney();
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        let flag = 0;
        while (currentNode !== null) {
            if (currentNode.getMoney() === max) {
                flag = currentNode.getMonth();
            }
            currentNode = currentNode.next;
        }
        return flag;
    }


}