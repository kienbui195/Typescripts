class StopWatch {
    constructor() {
        this.startTime;
        this.endTime;
        this.time;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    creatStartTime() {
        this.startTime = new Date();
    }

    start() {
        return this.startTime = new Date();
    }

    stop() {
       return  this.endTime = new Date();
    }

    getElapsedTime() {
        return  this.getEndTime() - this.getStartTime();

}
}


function mathTimeSelectionSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length ; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

}
let stopwatch = new StopWatch();
let arr= new Array(1000)
stopwatch.start()
mathTimeSelectionSort()
stopwatch.stop()
console.log(stopwatch.getElapsedTime())

