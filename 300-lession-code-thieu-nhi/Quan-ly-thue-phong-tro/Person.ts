export class Person {
    private _name: string;
    private _birthday: string;
    private _idno: number

    constructor(name: string, birthday: string, idno: number) {
        this._name = name;
        this._birthday = birthday;
        this._idno = idno;
    }

    getName(): string {
        return this._name;
    }
    setName(name: string) {
        this._name = name;
    }
    getBirthday(): string {
        return this._birthday;
    }
    setBirthday(birthday: string) {
        this._birthday = birthday;
    }
    getIdNo(): number {
        return this._idno;
    }
    setIdNo(idno: number) {
        this._idno = idno;
    }
    showInfo(): string {
        return `${this.getName()} sinh ngay ${this.getBirthday()} co So CMND: ${this.getIdNo()}`;
    }

}