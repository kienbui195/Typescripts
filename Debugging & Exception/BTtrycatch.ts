function calculator(number1: number, number2: number, operator: string) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    if (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
        throw new RangeError('Error Operator must be +,-,*,/');
    }
    return result;
}


    try {
        calculator(1,2,'%');
    }
    catch(e){
        if (e instanceof  RangeError) {
            console.log(e.message)
        }
    }
