export class Shape {
    private color: string;
    private filled: boolean;

    constructor(color: string,filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    getColor(): string {
        return this.color;
    }
    getFilled(): boolean {
        return this.filled;
    }
    setColor(color: string) {
        this.color = color;
    }
    setFilled(filled: boolean) {
        this.filled = filled;
    }
    isFilled():boolean {
        return this.filled;
    }
    toString(): string {
        return `A Shape with color of ${this.color} and ${this.isFilled()?'Filled':'not Filled'}`;
    }
}