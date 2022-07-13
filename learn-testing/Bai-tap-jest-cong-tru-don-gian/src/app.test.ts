import {BasicCalculate} from "./app";

describe('Cac ham tinh toan co ban',() => {
    test('Cac phep tinh',() => {
        let number1 = 1;
        let number2 = 2;
        expect(BasicCalculate.add(number1,number2)).toEqual(3);
    });
    test('Cac phep tinh',() => {
        let number1 = 1;
        let number2 = 2;
        expect(BasicCalculate.subtract(number1,number2)).toEqual(-1);
    });
    test('Cac phep tinh',() => {
        let number1 = 1;
        let number2 = 2;
        expect(BasicCalculate.multiple(number1,number2)).toEqual(2);
    });
    test('Cac phep tinh',() => {
        let number1 = 1;
        let number2 = 2;
        expect(BasicCalculate.divide(number1,number2)).toEqual(0.5);
    });
});




