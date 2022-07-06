var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
    Gender["other"] = "other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phonenumber) {
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phonenumber = phonenumber;
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Ten: ".concat(this.name, ", Gioi tinh: ").concat(this.gender, ", Ngay sinh: ").concat(this.birthday, ", email: ").concat(this.email, ", phonenumber: ").concat(this.phonenumber));
    };
    return Employee;
}());
var employeeList = /** @class */ (function () {
    function employeeList() {
        this.employees = [];
    }
    employeeList.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    employeeList.prototype.deleteEmployee = function (num) {
        var _this = this;
        this.employees.forEach(function (value, index) {
            if (num === index) {
                _this.employees.splice(index, 1);
            }
        });
    };
    employeeList.prototype.showList = function () {
        return this.employees;
    };
    return employeeList;
}());
var nv1 = new Employee('Nguyen Van A', Gender.male, new Date('2000-07-12'), 'A@gmail.com', '0123456');
var nv2 = new Employee('Nguyen Van B', Gender.female, new Date('1995-01-26'), 'B@gmail.com', '0123434346');
var nv3 = new Employee('Nguyen Van C', Gender.other, new Date('1999-12-12'), 'C@gmail.com', '0123456234234');
console.log(nv1.displayEmployee());
var list = new employeeList();
list.addEmployee(nv1);
list.addEmployee(nv2);
list.addEmployee(nv3);
console.log(list.showList());
list.deleteEmployee(2);
console.log(list.showList());
