import { AccountRegex } from "./AccountRegex";

let accountregex = new AccountRegex
let validAcc: string[] = ['123abc_','_abc123','______','123456','abcdefg'];
let invalidAcc: string[] = ['.@','12345','1234_','abcde '];

for (const item of validAcc) {
    let isvalid: boolean = accountregex.validate(item); 
    console.log(`Acc is ${item} is valid ${isvalid} `);
}

for (const item of invalidAcc) {
    let isvalid: boolean = accountregex.validate(item); 
    console.log(`Acc is ${item} is valid ${isvalid} `);
}