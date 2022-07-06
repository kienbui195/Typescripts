let arr: number[] = [0,2,3,5,7,8,9,10];
let newarr: number[] = [];
let i: number = 0;

while (i <= 10) {
    if (arr.indexOf(i) === -1) {
        newarr.push(i);
    }
    i++;
}
console.log(`Cac phan tu khong ton tai trong mang: ${newarr}`)
