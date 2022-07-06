enum Gender {
    male,
    female,
    other
}

class Employee {
    fullname: string;
    gender: Gender = Gender.other;
    birthday: Date;
    email: string;
    phonenumber?: string;
    constructor(fullname: string, gender: Gender, birthday: Date, email: string, phonenumber: string) {
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phonenumber = phonenumber;
    }
}

let employeelist: Employee[] = [];
employeelist.push(new Employee('A',Gender.male,new Date('1995-09-20'),'A@gmail.com','0123'));
employeelist.push(new Employee('B',Gender.female,new Date('1999-09-20'),'B@gmail.com','0143'));
employeelist.push(new Employee('A',Gender.other,new Date('1990-10-20'),'A@gmail.com','0120'));

let showInfo = (employee : Employee) => {
    console.log(employee);
}

employeelist.forEach(showInfo);

