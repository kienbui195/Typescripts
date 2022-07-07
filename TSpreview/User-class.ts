enum Role {
    admin,
    user
}

class User {
    protected name: string;
    protected  email: string;
    role: Role;
    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    setRole(role) {
        this.role = role;
    }

    isAdmin() {
        if (this.role === 1) {
            console.log('admin');
        } else console.log('not admin');
    }

    showInfo() {
        console.log('Ten: ' + this.name + ',' + 'Email: ' + this.email + ',' + 'Vi tri: ' + this.role);
    }
}

let user1 = new User('Nguyen Van A','A@gmail.com',Role.admin);
let user2 = new User('Nguyen Van B','B@gmail.com',Role.user);
let user3 = new User('Nguyen Van C','C@gmail.com',Role.user);

user3.setName('Nguyen Van D');
user3.isAdmin();
user1.showInfo();