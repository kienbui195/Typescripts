import {Person} from "./Person";

export class Hotel {
    private _numberofdaysforrnet: number;
    private _typeofroom: string;
    private _price: number;
    private _person: Person;

    constructor(numberofdaysforrnet: number, typeofroom : string, price: number, persons: Person) {
        this._numberofdaysforrnet = numberofdaysforrnet;
        this._typeofroom = typeofroom;
        this._price = price;
        this._person = persons;
    }

    getNumberOfDays(): number {
        return this._numberofdaysforrnet;
    }
    setNumberOfDays(number: number) {
        this._numberofdaysforrnet = number;
    }
    getTypeOfRoom(): string {
        return this._typeofroom;
    }
    setTypeOfRoom(type: string) {
        this._typeofroom = type;
    }
    getPrice(): number {
        return this._price;
    }
    setPrice(value) {
        this._price = value;
    }
    getCustomerInfo(): any {
        return this._person;
    }
    setCustomerInfo(name: string,birthday: string, idno: number) {
        this._person.setName(name);
        this._person.setBirthday(birthday);
        this._person.setIdNo(idno);
    }
    getIdOfCustomer(): number {
        return this._person.getIdNo();
    }
    setNameOfCustomer(name: string) {
        this._person.setName(name);
    }
    setBirthdayOfCustomer(day: string) {
        this._person.setBirthday(day);
    }
    setIdOfCustomer(id: number) {
        this._person.setIdNo(id);
    }
}