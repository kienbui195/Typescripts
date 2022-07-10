import {Rectangle} from "./Rectangle-class";

export class Square extends Rectangle {
    constructor(name: string,width:number) {
        super(name, width, width);
    }

    resizeable(size: number) {
        super.resizeable(size);
    }
}