
export class NextDayCalculator {
    constructor() {
    }

    showNextDay(day: Date): Date {
       day.setDate(day.getDate()+1);
       return day;
    }
}
