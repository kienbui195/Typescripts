import {PrintFizzBuzz} from "./PrintFizzBuzz";

describe('FizzBuzz',() => {
    test('Check so nguyen la Fizz hay Buzz', () => {
        let check = new PrintFizzBuzz();
        let n: number = 3;
        let result = 'Fizz';

        expect(check.printFizzBuzz(n)).toMatch(result);
    });
    test('Check so nguyen la Fizz hay Buzz', () => {
        let check = new PrintFizzBuzz();
        let n: number = 5;
        let result = 'Buzz';

        expect(check.printFizzBuzz(n)).toMatch(result);
    });
    test('Check so nguyen la Fizz hay Buzz', () => {
        let check = new PrintFizzBuzz();
        let n: number = 15;
        let result = 'FizzBuzz';

        expect(check.printFizzBuzz(n)).toMatch(result);
    })
})