export class NameOfClass {
    private name: RegExp = /^[CPA][0-9]{4,4}[GHIKLM]$/

    public validate(regex: string): boolean {
        return this.name.test(regex)
    }
}