export class User {
    constructor(protected name: string, protected numberofhouse: number, protected idofwatch: number) {
        this.name = name;
        this.numberofhouse = numberofhouse;
        this.idofwatch = idofwatch;
    }

    getNameOfUser(): string {
        return this.name;
    }
    getNumberOfHouse(): number {
        return  this.numberofhouse;
    }
    getIdOfWatch(): number {
        return  this.idofwatch;
    }
    getAllInfo(): object {
        return {
            Fullnam: this.getNameOfUser(),
            Numberofhouse: this.getNumberOfHouse(),
            IdOFWatch: this.getIdOfWatch()
        }
    }
}