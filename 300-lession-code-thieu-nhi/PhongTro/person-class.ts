export class Person {
    name: string;
    birthday: Date;
    id: string;

    constructor(name, birthday,id) {
        this.name = name;
        this.birthday = birthday;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBirthday(): Date {
        return  this.birthday;
    }
    setBirthday(day) {
        this.birthday = day;
    }
    getID(): string {
        return  this.id;
    }
    setID(id) {
        this.id = id;
    }
    showInfo(): string {
        return `Ten: ${this.name}, sinh: ${this.birthday} co so CMND: ${this.id}`;
    }
}