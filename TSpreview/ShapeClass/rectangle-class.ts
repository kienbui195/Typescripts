import {Shape}   from "./shape-class"

export class Rectangle extends Shape {
    protected width: number = 1.0;
    protected length: number = 1.0;

    constructor(color: string,filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getLength(): number {
        return this.length = length;
    }
    setLength(length) {
        this.length = length;
    }
    getArea(): number {
        return this.width*this.length;
    }
    getPerimeter(): number {
        return 2*(this.length+this.width);
    }
    toString(): string {
        return `A Rectangle with the width=${this.width} and length=${this.length}, which is subclass of ${super.toString()}`
    }
}