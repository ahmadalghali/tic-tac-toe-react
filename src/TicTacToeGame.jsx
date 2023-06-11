import React from 'react';
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import ResetButton from './components/ResetButton'

export default function TicTacToeGame() {

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <GameStatus />
      <Board  />
      <ResetButton />
    </>
  )
}