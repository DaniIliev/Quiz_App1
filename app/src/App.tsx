import {Routes, Route} from 'react-router-dom'
import GamePlay from './components/pages/GamePlay'

function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/game-play" element={<GamePlay/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
