import {useState} from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
      // 잘못된 업데이트 방식
      // prevGameBoard[rowIdx][colIdx] = 'X';
      // return prevGameBoard

      const updatedBoard = [...prevGameBoard.map(r => [...r])];;
      updatedBoard[rowIdx][colIdx] = 'X';
      return updatedBoard;
    })
  }


  return (
      <ol id="game-board">
        {gameBoard.map((row, rowIdx) =>
            <li key={rowIdx}>
              <ol>
                {row.map((playerSymbol, colIdx) =>
                    <li key={colIdx}>
                      <button onClick={() => handleSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button>
                    </li>
                )}
              </ol>
            </li>
        )}
      </ol>
  )
}