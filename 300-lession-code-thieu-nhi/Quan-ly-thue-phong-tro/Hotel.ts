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
    getInfoCustomer(): object {
        return {
            name: this._person.getName(),
            birthday: this._person.getBirthday(),
            ID: this._person.getIdNo()
        }
    }
    setInfoCustomer(name: string, birthday: string, id: number) {
        this._person.setName(name);
        this._person.setBirthday(birthday);
        this._person.setIdNo(id);
    }
    showInfoCustomer(): object {
        return {
            NumberOfDays : this.getNumberOfDays(),
            TypeOfRoom: this.getTypeOfRoom(),
            Price: this.getPrice(),
            Customer: this.getInfoCustomer()
        }
    }
}