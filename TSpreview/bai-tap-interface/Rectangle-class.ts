import {Shape} from "./Shape-class";
import {Resizeable} from "./Interface-resizeable";

export class Rectangle extends Shape implements Resizeable{
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
    resizeable(size: number) {
        this.width = this.width + this.width*size*0.01;
        this.height = this.height + this.height*size*0.01;
    }
}