import {Circle} from "./circle-class";

export class Cylinder extends Circle {
    private depth: number;

    constructor(color: string, radius: number, depth: number) {
        super(color, radius);
        this.depth = depth;
    }

    getDepth(): number {
        return this.depth;
    }
    setDepth(depth) {
        this.depth = depth;
    }
    volume(): number {
        return super.getArea()*this.depth;
    }
}