import {Rectangle} from "./Rectangle";
import {Colorable} from "./Interface-colorable";

export class Square extends Rectangle implements Colorable{
    constructor(name: string,width:number) {
        super(name, width, width);
    }

    howToColor(): string {
        return `Color all for side`
    }
}