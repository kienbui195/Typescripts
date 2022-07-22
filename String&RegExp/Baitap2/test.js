"use strict";
exports.__esModule = true;
var TelephoneNumber_1 = require("./TelephoneNumber");
var telenum = new TelephoneNumber_1.TeleNumber();
var isvalid = telenum.validate('(84)-(0978489648)');
var isvalid2 = telenum.validate('(a8)-(22222222)');
console.log("Number is ".concat('(84)-(0978489648)', " is valid ").concat(isvalid));
console.log("Number is ".concat('(a8)-(22222222)', " is valid ").concat(isvalid2));
