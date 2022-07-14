export enum Month {
    Mot = 1,
    Hai,
    Ba,
    Bon,
    Nam,
    Sau,
    Bay,
    Tam,
    Chin,
    Muoi,
    Muoimot,
    Muoihai
}
export class StaffSalary<T> {
    month: Month;
    money: number;
    next: StaffSalary<T> | null = null;

    constructor(month: Month, money: number) {
        this.month = month;
        this.money = money;
    }

    getInfo(): object {
        return {
            month: this.month,
            money: this.money
        }
    }

    getMoney(): number {
        return this.money;
    }

    getMonth(): number {
        return this.month;
    }
}