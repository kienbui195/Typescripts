import {Calc} from "./sum";

describe('Check phep cong hai so',() => {
    test ('add two number', () => {
        const number1 = 1;
        const number2 = 2;

        const result = 3;

        expect(Calc.add(number1,number2)).toEqual(result);
    });
});