import {Animal} from "./abstract-class-animal";
import {Edible} from "./interface-Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return `Chicken: cluck-cluck!!!`;
    }
    howToEat(): string {
        return `Could be fried `;
    }
}

