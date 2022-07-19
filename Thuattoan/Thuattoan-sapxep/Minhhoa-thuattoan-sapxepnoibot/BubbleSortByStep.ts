export class BubbleSortByStep {
    static numbers: number[] = [8,3,6,1,4,10,2,50];

    public static bubbleSortByStep(list: number[]): void {
        let needNextPass: boolean = true;
        for (let j = 1; j < list.length && needNextPass; j++) {
            needNextPass = false;
            for (let i = 0; i < list.length - j; i++) {
                if (list[i] > list[i+1]) {
                    console.log(`Swap ${list[i]} with ${list[i+1]}`);
                    let temp = list[i];
                    list[i] = list[i+1];
                    list[i+1] = temp;

                    needNextPass = true;
                }
            }
            if (needNextPass == false) {
                console.log(`Array may be sorted and next pass not needed`);
                break;
            }
            console.log(`List after the ${j}  sort: `);
            for (let k = 0; k < list.length;k++) {
                console.log(list[j] + '\t');
            }
            console.log();
        }
    }
}