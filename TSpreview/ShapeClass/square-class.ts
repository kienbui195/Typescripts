import {Rectangle} from "./rectangle-class";

export class Square extends Rectangle {
    constructor(color: string, filled: boolean,side: number) {
        super(color, filled, side, side);
    }

    getSide(): number {
        return this.getWidth();
    }
    setSide(side:number) {
        this.setWidth(side);
        this.setLength(side);
    }
    toString(): string {
        return `A Square with side=${super.getWidth()}, which is a subclass of ${super.toString()}`;
    }
}