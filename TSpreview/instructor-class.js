class Instructor {
    constructor({name, role = 'assitant'} = {}) {
        this.name = name;
        this.role = role;
    }

    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }

    static helloWorld() {
        console.log('hi there');
    }

    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

let juniorInstructor  = new Instructor({'name': 'Brian'});
let seniorInstructor = new Instructor({'name': 'Alice', 'role': 'classroom'});
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);