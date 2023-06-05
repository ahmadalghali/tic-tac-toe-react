import React, { createContext, useState } from 'react'

export const SQUARES_INITIAL_STATE = [
  { id: 1, value: null},
  { id: 2, value: null},
  { id: 3, value: null},
  { id: 4, value: null},
  { id: 5, value: null},
  { id: 6, value: null},
  { id: 7, value: null},
  { id: 8, value: null},
  { id: 9, value: null},
]

export const GAME_STATUS = Object.freeze({
  NEXT_PLAYER_X: "Next player: X",
  NEXT_PLAYER_O: "Next player: O",
  WINNER_X: "Winner: X",
  WINNER_O: "Winner: O",
  TIE: "Tie"
})

export const PLAYERS = Object.freeze({
  X: "X",
  O: "O"
})

export const CURRENT_PLAYER_INITIAL_STATE = PLAYERS.X

const GAME_CONTEXT_INITIAL_STATE = {
  squares: SQUARES_INITIAL_STATE,
  currentPlayer: CURRENT_PLAYER_INITIAL_STATE,
  status: GAME_STATUS.NEXT_PLAYER_X
}

export const GameContext = createContext(GAME_CONTEXT_INITIAL_STATE)

export function GameProvider({ children }) {

  const [squares, setSquares] = useState(SQUARES_INITIAL_STATE)
  const [status, setStatus] = useState(GAME_STATUS.NEXT_PLAYER_X)
  const [currentPlayer, setCurrentPlayer] = useState(CURRENT_PLAYER_INITIAL_STATE)

  return (
    <GameContext.Provider value={{ squares, setSquares, status, setStatus, currentPlayer, setCurrentPlayer }}>
      {children}
    </GameContext.Provider>
  )
}
