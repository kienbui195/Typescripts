import {Shape} from "./shape-class";

export  class Triangle extends Shape {
    protected side1: number;
    protected side2: number;
    protected side3: number;

    constructor(name: string,color: string,side1:number,side2:number,side3:number) {
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getSide1(): number {
        return this.side1;
    }
    setSide1(side1) {
        this.side1 = side1;
    }
    getSide2(): number {
        return this.side2;
    }
    setSide2(side2:number) {
        this.side2 = side2;
    }
    getSide3(): number {
        return this.side3;
    }
    setSide3(side3: number) {
        this.side3 = side3;
    }
    getPerimeter(): number {
        return this.side3+this.side2+this.side1;
    }
    getArea(): number {
        return Math.pow(this.getPerimeter()*((this.getPerimeter()-this.side1)*(this.getPerimeter()-this.side2)*(this.getPerimeter()-this.side3)),0.5);
    }
}