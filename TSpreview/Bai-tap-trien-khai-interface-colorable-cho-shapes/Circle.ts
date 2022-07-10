import {Shape} from "./Shape";

export class Circle extends Shape {
    radius: number;

    constructor(name: string,radius: number) {
        super(name);
        this.radius= radius;
    }

    getArea(): number {
        return Math.pow(this.radius,2)*Math.PI;
    }
    getPerimeter(): number {
        return 2*this.radius*Math.PI;
    }
}