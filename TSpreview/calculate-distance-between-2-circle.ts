class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
}

let distance = (circle1, circle2, d: number): number => {
    let distance = Math.pow(d,2)+Math.pow(circle1.radius - circle2.radius,2 );
    return Math.pow(distance,0.5);
}

let circle1 = new Circle(9);
let circle2 = new Circle(6);
console.log(distance(circle1,circle2,24));