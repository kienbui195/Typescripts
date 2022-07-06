var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullname, gender, birthday, email, phonenumber) {
        this.gender = Gender.other;
        this.fullname = fullname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phonenumber = phonenumber;
    }
    return Employee;
}());
var employeelist = [];
employeelist.push(new Employee('A', Gender.male, new Date('1995-09-20'), 'A@gmail.com', '0123'));
employeelist.push(new Employee('B', Gender.female, new Date('1999-09-20'), 'B@gmail.com', '0143'));
employeelist.push(new Employee('A', Gender.other, new Date('1990-10-20'), 'A@gmail.com', '0120'));
var showInfo = function (employee) {
    console.log(employee);
};
employeelist.forEach(showInfo);
