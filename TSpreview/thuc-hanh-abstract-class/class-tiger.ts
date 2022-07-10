import {Animal} from "./abstract-class-animal";

export class Tiger extends Animal {
    makeSound(): string {
        return `Tiger: roarrrr!!!`;
    }
}