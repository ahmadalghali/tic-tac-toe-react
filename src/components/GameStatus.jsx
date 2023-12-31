import { useEffect } from 'react'
import useGameContext from '../hooks/useGameContext'
import { PLAYERS, GAME_STATUS } from '../context/GameContext'

export default function GameStatus() {

  const { status, setStatus, currentPlayer } = useGameContext()

  useEffect(() => {
    if(!currentPlayer) return
    if (currentPlayer === PLAYERS.X) {
      setStatus(GAME_STATUS.NEXT_PLAYER_X)
    } else {
      setStatus(GAME_STATUS.NEXT_PLAYER_O)
    }

  }, [currentPlayer])

  return (
    <div className="status">{status}</div>
  )
}