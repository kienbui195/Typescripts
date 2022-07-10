import {Edible} from "./interface-Edible";

export abstract class Fruit implements Edible{
    abstract howToEat(): string ;

}