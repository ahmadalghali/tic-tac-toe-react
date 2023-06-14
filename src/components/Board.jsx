import { useEffect } from 'react'
import useGameContext from '../hooks/useGameContext'
import { PLAYERS, GAME_STATUS } from '../context/GameContext'

export default function Board() {

  const { squares, setSquares, currentPlayer, setCurrentPlayer, status, setStatus } = useGameContext()

  const switchToNextPlayer = () => {
    if (currentPlayer === PLAYERS.X) {
      setCurrentPlayer(PLAYERS.O)
    } else {
      setCurrentPlayer(PLAYERS.X)
    }
  }

  const handleSquareClicked = (clickedSquare) => {
    const boardIsPlayable = status == GAME_STATUS.NEXT_PLAYER_X || status == GAME_STATUS.NEXT_PLAYER_O
    if(!boardIsPlayable) return
    
    const selectedSquare = squares.find(square => square.id === clickedSquare.id)

    const squareIsTaken = selectedSquare.value != null
    if (squareIsTaken) return

    const updatedSquares = [...squares].map(square => square.id === clickedSquare.id ? {...square, value: currentPlayer} : square)
    setSquares(updatedSquares)

    switchToNextPlayer()
  }

  useEffect(() => {
    determineResult()
  }, [squares])

  const hasWinningMove = (player) =>  {

    const HORIZONTAL_WINNING_COMBOS = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const VERTICAL_WINNING_COMBOS = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
    const DIAGONAL_WINNING_COMBOS = [
      [1, 5, 9],
      [3, 5, 7]
    ]

    const WINNING_COMBINATIONS = [
      ...HORIZONTAL_WINNING_COMBOS,
      ...VERTICAL_WINNING_COMBOS,
      ...DIAGONAL_WINNING_COMBOS
    ]

    return WINNING_COMBINATIONS.some(winningCombination => {
      // For every winningCombo ( [1, 2, 3] ) check if each cell has a value of X or O inside them == win
      // winningCombination.at(0)[0] // [1, 2, 3]
      return winningCombination.every(cell => {
        let square = squares.find(square => square.id === cell)
        return square.value == player
      })
    })

  }


  const determineResult = () => {

    const X_hasWinningCombo = hasWinningMove(PLAYERS.X)

    const O_hasWinningCombo = hasWinningMove(PLAYERS.O)

    if (X_hasWinningCombo) {
      setStatus(GAME_STATUS.WINNER_X)
    }  
    
    if (O_hasWinningCombo) {
      setStatus(GAME_STATUS.WINNER_O)
    } 

    const boardIsFull = squares.every(square => square.value != null)
    if (boardIsFull) {
      setStatus(GAME_STATUS.TIE)
    }

  }

  return (
    <div className="board">
          {squares.map(square => (
            <div key={square.id} className="square" onClick={() => handleSquareClicked(square)}>{square.value}</div>
          ))} 
    </div>
  )
}