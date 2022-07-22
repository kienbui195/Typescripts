import { TeleNumber } from "./TelephoneNumber";

let telenum = new TeleNumber()
let isvalid: boolean = telenum.validate('(84)-(0978489648)');
let isvalid2: boolean = telenum.validate('(a8)-(22222222)');

console.log(`Number is ${'(84)-(0978489648)'} is valid ${isvalid}`);
console.log(`Number is ${'(a8)-(22222222)'} is valid ${isvalid2}`);



