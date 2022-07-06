enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

class Employee {
    name: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phonenumber?: string;
    constructor(name: string,gender: Gender, birthday: Date,email: string, phonenumber: string) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phonenumber = phonenumber;
    }

    displayEmployee() {
        console.log(`Ten: ${this.name}, Gioi tinh: ${this.gender}, Ngay sinh: ${this.birthday}, email: ${this.email}, phonenumber: ${this.phonenumber}`);
    }
}

class employeeList {
    employees: Employee[] = [];
    constructor() {
    }

    addEmployee(employee : Employee) {
        this.employees.push(employee);
    }

    deleteEmployee(num:number) {
        this.employees.forEach((value, index) => {
            if (num === index) {
                this.employees.splice(index,1);
            }
        });
    }

    showList(): Employee[] {
        return  this.employees;
    }
}

let nv1 = new Employee('Nguyen Van A',Gender.male, new Date('2000-07-12'),'A@gmail.com','0123456');
let nv2 = new Employee('Nguyen Van B',Gender.female, new Date('1995-01-26'),'B@gmail.com','0123434346');
let nv3 = new Employee('Nguyen Van C',Gender.other, new Date('1999-12-12'),'C@gmail.com','0123456234234');
console.log(nv1.displayEmployee);
let list = new employeeList();
list.addEmployee(nv1);
list.addEmployee(nv2);
list.addEmployee(nv3);
console.log(list.showList());
list.deleteEmployee(2);
console.log(list.showList());


