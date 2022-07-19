export class BubbleSort {
    static list: number[] = [2,3,2,5,6,1,-2,3,14,12];

    public static bubbleSort(list: number[]): void {
        let needNextPass: boolean = true;

        for (let j = 1; j < list.length && needNextPass; j++) {
            needNextPass = false;
            for (let i = 0; i < list .length - j; i++) {
                if (list[i] > list[i+1]) {
                    let temp: number = list[i];
                    list[i] = list[i+1];
                    list[i+1] = temp;

                    needNextPass = true;
                }
            }
        }
    }
}