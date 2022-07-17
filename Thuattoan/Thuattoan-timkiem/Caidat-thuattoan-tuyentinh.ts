let arr = [1,2,5,6,7,10];

let findItemMiss = (arr: number[]): number[] => {
    let newarr: number[] = [];
    let i: number = 1;
    while (i<=10) {
        if (arr.indexOf(i) === -1) {
            newarr.push(i);
        }
        i++;
    }
    return newarr;
}

console.log(findItemMiss(arr));