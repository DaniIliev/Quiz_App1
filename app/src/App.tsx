import {Routes, Route} from 'react-router-dom'
import GamePlay from './components/pages/GamePlay'
import Catalog from './components/pages/Catalog'
import React from 'react'

function App() {

  return (
    <>
    <div className="app">
      <Routes>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/game-play" element={<GamePlay/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
