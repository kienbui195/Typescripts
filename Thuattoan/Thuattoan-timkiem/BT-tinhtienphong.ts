let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

let matrixElementsSum = (arr: number[][]): number => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i < 2) {
                if (arr[i][j] == 0) {
                    arr[i+1][j] = 0;
                }
            }
            sum += arr[i][j];
        }
    }
    return sum;
}

console.log(`Tong tien cac phong ngoai tru phong free + phong ngay duoi phong free la: ${matrixElementsSum(matrix)}`);