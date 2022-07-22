export class TeleNumber {
    private number: RegExp = /^\([0-9]{2,2}\)-\([0]{1,1}[0-9]{9,9}\)$/

    public validate (regex: string): boolean {
        return this.number.test(regex);
    }
}