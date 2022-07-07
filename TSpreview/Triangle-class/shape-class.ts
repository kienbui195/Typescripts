export class Shape {
    private name: string;
    private color: string;

    constructor(name: string,color: string) {
        this.name = name;
        this.color = color;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getColor(): string {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    showInfo(): string {
        return `this Shape has name: ${this.name} and color of it is ${this.color}`
    }
}