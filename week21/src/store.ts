interface Game{
    id:string;
    whitePlayerName:string;
    blackPlayerName:string;
    moves:string[];
}
export class GameManager{
    games:Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }

    addMove(gameId:string,move:string){
        console.log(`Adding move ${move} to game ${gameId}`);
        const game = this.games.find(g=>g.id === gameId);
        if(game){
            game.moves.push(move);
        }
    }
    static getInstance(): GameManager {
        if (!GameManager.instance) {
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }
    addGame(game: Game) {
        this.games.push({
            id: game.id,
            whitePlayerName: game.whitePlayerName,
            blackPlayerName: game.blackPlayerName,
            moves: []
        });
    }

    log() {
        console.log(this.games);
    }
}

export const gameManager = GameManager.getInstance();

