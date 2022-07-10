import {Fruit} from "./abstract-class-fruit";

export class Orange extends Fruit {
    howToEat(): string {
        return "Orange could be juiced";
    }
}