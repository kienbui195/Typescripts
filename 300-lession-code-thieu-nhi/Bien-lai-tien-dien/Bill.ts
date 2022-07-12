import {User} from "./User";

export class Bill {
    protected totalmoney: number;
    constructor(protected infouser: User, protected olđindex: number, protected newindex: number) {
        this.infouser = infouser;
        this.olđindex = olđindex;
        this.newindex = newindex;
        this.totalmoney = (this.newindex - this.olđindex)*750;
    }
    getTotalMoney(): number {
        return this.totalmoney;
    }
    getIdOfWatch(): number {
        return this.infouser.getIdOfWatch();
    }
    getInfoUser(): object {
        return {
            User: this.infouser,
            OldIndex: this.olđindex,
            NewIndex: this.newindex,
            MoneyMushPay: this.totalmoney
        }
    }
}