import {Shape} from "./Shape-class";
import {Resizeable} from "./Interface-resizeable";

export class Circle extends Shape implements Resizeable{
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
    resizeable(size: number) {
        this.radius = this.radius + this.radius*size*0.01;
    }
}