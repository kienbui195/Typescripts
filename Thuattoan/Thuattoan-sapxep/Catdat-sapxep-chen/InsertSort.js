function insertionSort(inputArr) {
    var n = inputArr.length;
    for (var i = 1; i < n; i++) {
        // Choosing the first element in our unsorted subarray
        var current = inputArr[i];
        // The last element of our sorted subarray
        var j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
var arr = [-1, 3, 5, 3, 6, 3, 7, 8, 9, 45, 3, 2, -5];
console.log(insertionSort(arr));
