var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = this.slow;
        this.slow = 1;
        this.medium = 2;
        this.fast = 3;
        this.on = false;
        this.radius = 5;
        this.color = 'blue';
    }
    Fan.prototype.getSpeed = function () {
        return this.speed;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.getOn = function () {
        return this.on;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.getRadius = function () {
        return this.radius;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.getColor = function () {
        return this.color;
    };
    Fan.prototype.setColor = function (color) {
        return this.color = color;
    };
    Fan.prototype.getInfoToString = function () {
        if (this.on) {
            return console.log("Toc do: ".concat(this.speed, ", Mau sac: ").concat(this.color, ", Ban kinh quat: ").concat(this.radius, ". fan is on"));
        }
        else
            return console.log("Mau sac: ".concat(this.color, ", Ban kinh quat: ").concat(this.radius, ". fan is off"));
    };
    return Fan;
}());
var fan1 = new Fan();
fan1.setSpeed(fan1.fast);
fan1.setRadius(10);
fan1.setColor('yellow');
fan1.setOn(true);
fan1.getInfoToString();
var fan2 = new Fan();
fan2.setSpeed(fan2.medium);
fan2.setRadius(5);
fan2.setColor('yellow');
fan2.setOn(false);
fan2.getInfoToString();
