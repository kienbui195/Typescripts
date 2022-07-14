import { StudentScore } from "./StudentScore";

export class ManagerList<T> {
    head: StudentScore<T> | null;
    tail: StudentScore<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size  = 0;
    }

    insertFirst(name: string, score: number) {
        let studentscore = new StudentScore(name, score);
        studentscore.next = this.head;
        this.head = studentscore;

        if (!this.tail) {
            this.tail = studentscore;
        }
        this.size++;
    }

    insertLast(name: string, score: number) {
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let studentscore = new StudentScore(name, score);
            this.tail.next = studentscore;
            this.tail = studentscore;
            this.size++;
        }
    }

    showList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.getInfo());
            currentNode = currentNode.next;
        }
        return listData;
    }

    totalStudentFail(): number {
        let count: number = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.getScore() <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    }

    listStudentMaxScore(): T[] {
        let newlist = [];
        let currentNode = this.head;
        let max: number = currentNode.getScore();

        while (currentNode !== null) {
            if (currentNode.getScore() > max) {
                max = currentNode.getScore();
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.getScore() === max) {
                newlist.push(currentNode.getName());
            }
            currentNode = currentNode.next;
        }
        return newlist;
    }

    findByName(name: string) {
        let newlist = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.getName() === name) {
                newlist.push(currentNode.getInfo());
            }
            currentNode = currentNode.next;
        }
        console.log(newlist);
    }
}

