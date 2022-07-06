var Staffs = /** @class */ (function () {
    function Staffs(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staffs.prototype.getName = function () {
        return this.name;
    };
    Staffs.prototype.setName = function (name) {
        this.name = name;
    };
    Staffs.prototype.getEmail = function () {
        return this.email;
    };
    Staffs.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staffs.prototype.getAge = function () {
        return this.age;
    };
    Staffs.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staffs;
}());
var staff = new Staffs('Staff1', 'staff@gmail.com', 20);
console.log(staff.getName());
staff.setName('Staff2');
console.log(staff.getName());
