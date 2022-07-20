function insertionSort(array: number[]): number[] {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let current = array[i];
        let j = i-1;
        while ((j > -1) && (current < array[j])) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array;
}

let arr = [-1,3,5,3,6,3,7,8,9,45,3,2,-5]
console.log(insertionSort(arr))