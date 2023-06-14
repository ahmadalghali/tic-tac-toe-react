import './static/style/main.css';
import TicTacToeGame from './TicTacToeGame'
import { GameProvider } from './context/GameContext'

export default function App() {

    return (
      <GameProvider>
        <TicTacToeGame />
      </GameProvider>
    )
}