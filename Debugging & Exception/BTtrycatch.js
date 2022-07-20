function calculator(number1, number2, operator) {
    try {
        var result = void 0;
        if (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
            throw new RangeError('operator must be +,-,*,/');
        }
        else {
            if (operator == '+') {
                result = number1 + number2;
            }
            else if (operator == '-') {
                result = number1 - number2;
            }
            else if (operator == '*') {
                result = number1 * number2;
            }
            else if (operator == '/') {
                result = number1 / number2;
            }
            return result;
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
console.log(calculator(1, 2, '0'));
