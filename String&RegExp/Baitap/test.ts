import { NameOfClass } from "./NameClass";

let nameOfClass = new NameOfClass()
let isvalid1: boolean = nameOfClass.validate('C0318G');
let isvalid2: boolean = nameOfClass.validate('M0318G');

console.log(`NameOfClass is ${'C0318G'} is valid ${isvalid1}`);
console.log(`NameOfClass is ${'M0318G'} is valid ${isvalid2}`);
