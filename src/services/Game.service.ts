export interface Game {
    squares: String[];
    nextPlayer: String;
    winner: String | null;
}

abstract class GameService {

    static initialeState: Game = {
        squares: Array(9).fill(''),
        nextPlayer: 'X',
        winner: null
    }

    static restartGame(): Game{
        return {
            squares: Array(9).fill(''),
            nextPlayer: 'X',
            winner: null
        }
    }
    
    static getNextPlayer(player: String): String {
        if(player === 'X'){
            return 'O';
        }
        return 'X';
    }

    static move(index: number, squares: String[], player: String): Game{

        if (!squares[index]) {
            squares.splice(index, 1, player);
        }
        
        return {
            squares: squares,
            nextPlayer: GameService.getNextPlayer(player),
            winner: GameService.calculateWinner(squares)
        };
    }
    
    static calculateWinner(squares: String[]): String | null {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let index = 0; index < lines.length; index++) {
            const [first, second, third] = lines[index];

            if (squares[first] && (squares[first] === squares[second]) && (squares[first] === squares[third])) {
                console.log(squares[first]);
                return squares[first];
            }
        }

        return null;
    }

}

export default GameService;