import Square from "./Square";
import GameService from "../services/Game.service";
import { useState } from "react";

function Board() {

    const [gameBoard, setGameBoard] = useState(GameService.initialeState);
    const [countIteration, setCountIteration] = useState(0);

    function play(index: number) {
        setGameBoard(GameService.move(index, gameBoard.squares, gameBoard.nextPlayer));
        setCountIteration(countIteration + 1);
    }

    function restart() {
        setGameBoard(GameService.restartGame);
        setCountIteration(0);
    }

    return(
        <div className="w-5/12 h-4/5 mt-16 flex flex-col items-center justify-center border bg-white shadow-md rounded-lg">
            <div>
                {
                    gameBoard.winner 
                    
                    && 
                    
                    <p className="my-3">The winner is :
                        <span className="text-green-700 pl-2">{gameBoard.winner}</span>
                    </p>
                }
                {
                    (gameBoard.winner === null && countIteration === 9 )
                    
                    && 
                    
                    <p className="my-3">No winner between
                        <span className="text-green-700 pl-2 pr-2"> X</span> and <span className="text-green-700 pl-2"> O</span>
                    </p>
                }
                {
                    (gameBoard.winner === null && countIteration < 9 )
                    
                    && 
                    
                    <p className="my-3">The Game is
                        <span className="text-green-700"> in progress</span>
                    </p>
                }
            </div>
            <div className="bg-green-700 h-3/4 w-3/4 flex flex-wrap">
            {
                gameBoard.squares.map(
                    (square, index) => <Square key={index} OnChange={play} square={square} id={index} winner={gameBoard.winner
                    }/>
                )
            }
            </div>
            {
                // When the game is over with a winner
                gameBoard.winner && <button onClick={restart} className="w-1/4 mt-4 p-4 bg-green-500">Restart</button>
            }
            {
                // When the game is over without winner
                (gameBoard.winner === null && countIteration === 9 ) && <button onClick={restart} className="w-1/4 mt-4 p-4 bg-green-500">Restart</button>
            }
        </div>
    );
}

export default Board;