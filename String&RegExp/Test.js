"use strict";
exports.__esModule = true;
var EmailRegex_1 = require("./EmailRegex");
var emailRegex = new EmailRegex_1.EmailRegex();
var validEmail = ['a@gmail.com', 'ab@yahoo.com', 'abc@hotmail.com'];
var invalidEmail = ["@gmail.com", "ab@gmail.", "@#abc@gmail.com"];
for (var _i = 0, validEmail_1 = validEmail; _i < validEmail_1.length; _i++) {
    var item = validEmail_1[_i];
    var isvalid = emailRegex.validate(item);
    console.log("Email is ".concat(item, " is valid: ").concat(isvalid));
}
for (var _a = 0, invalidEmail_1 = invalidEmail; _a < invalidEmail_1.length; _a++) {
    var item = invalidEmail_1[_a];
    var isvalid = emailRegex.validate(item);
    console.log("Email is ".concat(item, " is valid: ").concat(isvalid));
}
