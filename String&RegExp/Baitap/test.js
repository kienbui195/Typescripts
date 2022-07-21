"use strict";
exports.__esModule = true;
var NameClass_1 = require("./NameClass");
var nameOfClass = new NameClass_1.NameOfClass();
var isvalid1 = nameOfClass.validate('C0318G');
var isvalid2 = nameOfClass.validate('M0318G');
console.log("NameOfClass is ".concat('C0318G', " is valid ").concat(isvalid1));
console.log("NameOfClass is ".concat('M0318G', " is valid ").concat(isvalid2));
