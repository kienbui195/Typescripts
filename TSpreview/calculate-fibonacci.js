var displayFibonacci = function (num) {
    if (num <= 1)
        return num;
    return displayFibonacci(num - 1) + displayFibonacci(num - 2);
};
console.log(displayFibonacci(5));
var n = 5;
var sum = 0;
var arrFibonacci = [];
for (var i = 0; i < n; i++) {
    arrFibonacci.push(displayFibonacci(i));
    console.log(arrFibonacci);
}
for (var _i = 0, arrFibonacci_1 = arrFibonacci; _i < arrFibonacci_1.length; _i++) {
    var item = arrFibonacci_1[_i];
    sum += item;
}
console.log(sum);
