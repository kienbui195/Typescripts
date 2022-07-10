import {Tiger} from "./class-tiger";
import {Chicken} from "./class-chicken";
import {Apple} from "./class-apple";
import {Orange} from "./class-orange";

let animals = [];

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((value, index) => {
    console.log(value.makeSound());
    if (value instanceof Chicken) {
        console.log(value.howToEat());
    }
})

console.log(`---Fruit---`);
let fruits = [];
fruits[0] = new Apple();
fruits[1] = new Orange();
for (const item of fruits) {
    console.log(item.howToEat());
}