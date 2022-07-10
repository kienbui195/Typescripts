"use strict";
exports.__esModule = true;
var class_tiger_1 = require("./class-tiger");
var class_chicken_1 = require("./class-chicken");
var class_apple_1 = require("./class-apple");
var class_orange_1 = require("./class-orange");
var animals = [];
animals[0] = new class_tiger_1.Tiger();
animals[1] = new class_chicken_1.Chicken();
animals.forEach(function (value, index) {
    console.log(value.makeSound());
    if (value instanceof class_chicken_1.Chicken) {
        console.log(value.howToEat());
    }
});
console.log("---Fruit---");
var fruits = [];
fruits[0] = new class_apple_1.Apple();
fruits[1] = new class_orange_1.Orange();
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var item = fruits_1[_i];
    console.log(item.howToEat());
}
