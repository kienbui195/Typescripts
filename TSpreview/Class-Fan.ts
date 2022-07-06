class Fan {
    speed: number;
    slow: number;
    medium: number;
    fast: number;
    on: boolean;
    radius: number;
    color: string;
    constructor() {
        this.speed = this.slow;
        this.slow = 1;
        this.medium = 2;
        this.fast = 3;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
    }

    getSpeed() {
        return this.speed;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getOn() {
        return this.on;
    }

    setOn(on) {
        this.on = on;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        return this.color = color;
    }

    getInfoToString() {
        if (this.on) {
            return console.log(`Toc do: ${this.speed}, Mau sac: ${this.color}, Ban kinh quat: ${this.radius}. fan is on`);
        } else return console.log(`Mau sac: ${this.color}, Ban kinh quat: ${this.radius}. fan is off`);
    }
}

let fan1 = new Fan();
fan1.setSpeed(fan1.fast);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
fan1.getInfoToString();

let fan2 = new Fan();
fan2.setSpeed(fan2.medium);
fan2.setRadius(5);
fan2.setColor('yellow');
fan2.setOn(false);
fan2.getInfoToString();
