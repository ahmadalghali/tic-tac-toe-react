import React , { useState, useEffect } from 'react'
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

    determineResult()
    switchToNextPlayer()
  }

  const determineResult = () => {

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
    
    // if (WINNING_COMBINATIONS.some(combination => {
    //   // combination.every(cell => cell === )
    //   // if()
    // }))

    // setStatus(GAME_STATUS.TIE)
  }

  return (
     <div className="board">
        {squares.map(square => (
          <div key={square.id} className="square" onClick={() => handleSquareClicked(square)}>{square.value}</div>
        ))} 
    </div>
  )
}