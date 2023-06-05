import React, { useState } from 'react';
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import ResetButton from './components/ResetButton'
import useGameContext from './hooks/useGameContext'

export default function TicTacToeGame() {

  return (
    <>
      <p>Tic Tac Toe</p>
      <GameStatus />
      <Board  />
      <ResetButton />
    </>
  )
}