import {Shape} from "./shape-class"

export class Circle extends Shape {
    protected radius: number = 1.0;

    constructor(color: string,filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }
    setRadius(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return Math.pow(this.radius,2)*Math.PI;
    }
    getPerimeter(): number {
        return this.radius*2*Math.PI;
    }
    toString(): string {
        return `A Circle with radius of ${this.radius}, which is a subclass of ${super.toString()}`;
    }
}