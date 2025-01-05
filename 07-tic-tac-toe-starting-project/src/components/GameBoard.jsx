import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handleSelectSquare(rowIdx, colIdx) {
  //   setGameBoard((prevGameBoard) => {
  //     // 잘못된 업데이트 방식
  //     // prevGameBoard[rowIdx][colIdx] = 'X';
  //     // return prevGameBoard
  //
  //     const updatedBoard = [...prevGameBoard.map(r => [...r])];;
  //     updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
  //     return updatedBoard;
  //   })
  //
  //   onSelectSquare();
  // }


  return (
      <ol id="game-board">
        {gameBoard.map((row, rowIdx) =>
            <li key={rowIdx}>
              <ol>
                {row.map((playerSymbol, colIdx) =>
                    <li key={colIdx}>
                      <button onClick={() => onSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
                    </li>
                )}
              </ol>
            </li>
        )}
      </ol>
  )
}