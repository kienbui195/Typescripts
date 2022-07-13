import {NextDayCalculator} from "./app";

describe('Tinh ngay tiep theo',() => {
    test('CalculateNextDay',() => {
        let days = new NextDayCalculator();

        expect(days.showNextDay(new Date(2020,1,1))).toStrictEqual(new Date(2020,1,2));
    });
});