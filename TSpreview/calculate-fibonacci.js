var displayFibonacci = function (num) {
    if (num <= 1)
        return num;
    return displayFibonacci(num - 1) + displayFibonacci(num - 2);
};
console.log(displayFibonacci(5));
var n = 10;
var sum = 0;
var arrFibonacci = [];
for (var i = 0; i < n; i++) {
    arrFibonacci.push(displayFibonacci(i));
    console.log(arrFibonacci);
}
arrFibonacci.forEach(function (item) {
    sum += item;
});
console.log(sum);
