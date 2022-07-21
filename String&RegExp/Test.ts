import { EmailRegex } from "./EmailRegex";

let emailRegex = new EmailRegex();
let validEmail: string[] = ['a@gmail.com', 'ab@yahoo.com','abc@hotmail.com'];
let invalidEmail: string[] = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];

for (const item of validEmail) {
    let isvalid: boolean = emailRegex.validate(item);
    console.log(`Email is ${item} is valid: ${isvalid}`);
}

for (const item of invalidEmail) {
    let isvalid: boolean = emailRegex.validate(item);
    console.log(`Email is ${item} is valid: ${isvalid}`);
}