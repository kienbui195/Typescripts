import {Person} from "./person-class";

export class Room {
    day: number;
    kindOf: string;
    price: number;
    persons: Person[];

    constructor(day,kindOf, price, persons) {
        this.day = day;
        this.kindOf = kindOf;
        this.price = price;
        this.persons = persons;
    }

    getDay(): string {
        return this.day;
    }
    setDay(day) {
        this.day = day;
    }
    setKindOf(kindof) {
        this.kindOf = kindof;
    }
    getPrice(): number {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    showInfo() {
        this.persons.getInfo();
    }


}