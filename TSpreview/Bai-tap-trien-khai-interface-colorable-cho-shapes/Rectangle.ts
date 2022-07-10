import {Shape} from "./Shape";

export class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height : number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.height*this.width;
    }
    getPerimeter(): number {
        return 2*(this.width+this.height);
    }
}