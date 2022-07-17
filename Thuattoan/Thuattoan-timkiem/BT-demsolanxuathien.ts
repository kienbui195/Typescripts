let countTimesOfValue = (numbers: number[], value: number): number => {
    let count: number = 0;
    for (const item of numbers) {
        if (value === item) {
            count++;
        }
    }
    return count;
}

let arr = [1,1,2,3,42,34,1,3,1,5];
console.log(`So lan xuat hien ptu 1 trong mang arr la: ${countTimesOfValue(arr,1)}`);
