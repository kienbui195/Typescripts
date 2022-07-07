export enum Role {
    Director,
    Vicedirector,
    Secretary,
    Manager,
    Staff
}

export class Employee {
    protected lastname: string;
    firstname: string;
    protected birthday: Date;
    protected address: string;
    role: Role;

    constructor(lastname: string,
    firstname: string,
    birthday: Date,
    address: string,
    role: Role) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.address = address;
        this.role = role;
    }

    setRole(role) {
        this.role = role;
    }

    setFirstName(firstname) {
        this.firstname = firstname;
    }

    setLastName(lastname) {
        this.lastname = lastname;
    }

    setBirthday(birthday) {
        this.birthday = birthday;
    }

    setAddress(address) {
        this.address = address;
    }

    getLastName(): string {
        return this.lastname;
    }

    getFirstName(): string {
        return this.firstname;
    }

    showRole() {
        if (this.role === 0) {
            return 'is Director';
        } else if (this.role === 1) {
            return 'is Vicedirector';
        } else if (this.role === 2) {
            return  'is Secretary';
        } else if (this.role === 3) {
            return  'is Manager';
        } else return 'is Staff';
    }

    showInfo() {
        console.log(`${this.firstname} ${this.lastname} - ${this.birthday} - ${this.address} - ${this.showRole()}`);
    }
}