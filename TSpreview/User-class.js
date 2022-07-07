var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            console.log('admin');
        }
        else
            console.log('not admin');
    };
    User.prototype.showInfo = function () {
        console.log('Ten: ' + this.name + ',' + 'Email: ' + this.email + ',' + 'Vi tri: ' + this.role);
    };
    return User;
}());
var user1 = new User('Nguyen Van A', 'A@gmail.com', Role.admin);
var user2 = new User('Nguyen Van B', 'B@gmail.com', Role.user);
var user3 = new User('Nguyen Van C', 'C@gmail.com', Role.user);
user3.setName('Nguyen Van D');
user3.isAdmin();
user1.showInfo();
