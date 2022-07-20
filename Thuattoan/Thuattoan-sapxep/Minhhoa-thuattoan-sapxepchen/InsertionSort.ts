export class InsertionSort {
    static list: number[] = [10,5,2,8,3,4,5,67,6,4,5,4,-1,35,-34,4];

    public static insertionSort(arr: number[], n) {
        let key, j, i: number = null;
        n = arr.length;
            for (i = 1; i < n; i++) {
                key = arr[i];
                j = i - 1;
                while (j >= 0 && arr[j] > key)
                {
                    arr[j + 1] = arr[j];
                    j = j - 1;
                }
                arr[j + 1] = key;
            }

        for (let k = 0; k < n; k++)
            document.write(arr[k] + " ");
        document.write(" ");
    }
}