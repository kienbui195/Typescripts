let displayFibonacci = (num: number): number => {
    if (num <= 1) return num;

    return displayFibonacci(num - 1) + displayFibonacci(num - 2);
}

console.log(displayFibonacci(5));
let n: number = 10;
let sum: number = 0;
let arrFibonacci: number[] = [];
for (let i = 0; i < n; i++) {
    arrFibonacci.push(displayFibonacci(i));
    console.log(arrFibonacci);
}

arrFibonacci.forEach((item) => {
    sum += item;
})

console.log(sum)
