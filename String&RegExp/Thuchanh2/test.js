"use strict";
exports.__esModule = true;
var AccountRegex_1 = require("./AccountRegex");
var accountregex = new AccountRegex_1.AccountRegex;
var validAcc = ['123abc_', '_abc123', '______', '123456', 'abcdefg'];
var invalidAcc = ['.@', '12345', '1234_', 'abcde '];
for (var _i = 0, validAcc_1 = validAcc; _i < validAcc_1.length; _i++) {
    var item = validAcc_1[_i];
    var isvalid = accountregex.validate(item);
    console.log("Acc is ".concat(item, " is valid ").concat(isvalid, " "));
}
for (var _a = 0, invalidAcc_1 = invalidAcc; _a < invalidAcc_1.length; _a++) {
    var item = invalidAcc_1[_a];
    var isvalid = accountregex.validate(item);
    console.log("Acc is ".concat(item, " is valid ").concat(isvalid, " "));
}
