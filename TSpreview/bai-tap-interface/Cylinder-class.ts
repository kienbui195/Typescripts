import {Circle} from "./Circle-class";

export class Cylinder extends Circle {
    height: number;

    constructor(name: string, radius: number, height: number) {
        super(name, radius);
        this.height = height;
    }

    getArea(): number {
        return 2*super.getArea()+super.getPerimeter()*this.height;
    }
    getVolume(): number {
        return super.getArea()*this.height;
    }
}