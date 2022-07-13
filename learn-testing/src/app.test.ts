import {AbsoluteNumberCalculator} from "./app";

describe('Tim gia tri tuyet doi',() => {
    test('findAbsolute',() => {
        let number = 0;
        let result = 0;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(result);
    });
    test('findAbsolute',() => {
        let number = 1;
        let result = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(result);
    });
    test('findAbsolute',() => {
        let number = -1;
        let result = 1;

        expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(result);
    });
});