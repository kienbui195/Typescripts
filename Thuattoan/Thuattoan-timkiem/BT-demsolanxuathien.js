var countTimesOfValue = function (numbers, value) {
    var count = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var item = numbers_1[_i];
        if (value === item) {
            count++;
        }
    }
    return count;
};
var arr = [1, 1, 2, 3, 42, 34, 1, 3, 1, 5];
console.log("So lan xuat hien ptu 1 trong mang arr la: ".concat(countTimesOfValue(arr, 1)));
