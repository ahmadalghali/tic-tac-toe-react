import React from 'react'
import { SQUARES_INITIAL_STATE, CURRENT_PLAYER_INITIAL_STATE, GAME_STATUS } from '../context/GameContext'
import useGameContext from '../hooks/useGameContext'

export default function ResetButton(){

  const { setSquares, setCurrentPlayer, setStatus } = useGameContext();

  const resetGame = () => {
    setSquares(SQUARES_INITIAL_STATE)
    setCurrentPlayer(CURRENT_PLAYER_INITIAL_STATE)
    setStatus(GAME_STATUS.NEXT_PLAYER_X)
  }

  return (
    <button className="reset" style={{ marginTop: '2rem' }} onClick={resetGame}>Reset</button>
  )
}