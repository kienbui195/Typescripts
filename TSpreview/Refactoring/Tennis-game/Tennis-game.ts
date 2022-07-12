class TennisGame {
    public static getScore(playerName: string, playerScore: number): string {
        let score: string = '';
        switch (playerScore) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            case 3:
                score = "Forty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
        return score;
    }

    public static isAdvantage(player1Score: number, player2Score: number): number {
        if (player1Score >= 4 || player2Score >= 4) {
            let minusResult = player1Score - player2Score;
            if (minusResult == 1) return 1;
            else if (minusResult == -1) return -1;
            return 0;
        }
    }

    public static isWin(player1Score:number, player2Score:number):number {
            if (player1Score >= 4 || player2Score >= 4) {
                let minusResult = player1Score - player2Score;
                if (minusResult >= 2) return 1;
                else return -1;
            }
            return 0;
    }
}


let score1 = TennisGame.getScore('Tung', 6);
let score2 = TennisGame.getScore('Thu', 8);
if(TennisGame.isAdvantage(6,8) === 1) {
    console.log(`Player1 is Advantage`);
} else if (TennisGame.isAdvantage(6,8) === -1) {
    console.log(`Player2 is Advantage`);
} else console.log(`Deuce All`);
if(TennisGame.isWin(6,8) === 1) {
    console.log(`Player1 is Advantage`);
} else if (TennisGame.isWin(6,8) === -1) {
    console.log(`Player2 is Advantage`);
} else console.log(`Deuce All`);


