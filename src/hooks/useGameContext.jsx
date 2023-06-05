
import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext' 
export default function useGameContext() {
  const gameContext = useContext(GameContext)

  if(!gameContext) throw new Error('DEV ERR: Game context not defined')
  
  return gameContext
}