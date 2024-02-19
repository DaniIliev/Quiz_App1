import { useState } from 'react'
import MoneyList from './components/shared/MoneyList'
import Timer from './components/shared/Timer'
import Quiz from './components/shared/Quiz'

function App() {

  return (
    <>
    <div className="app">
        <div className="main">
          <div className="top">
            <Timer />
          </div>
            {/* <div>Question and answer</div> */}
            <Quiz /> 
        </div>
        <div className="pyramide">
          <MoneyList />
        </div>
    </div>
    </>
  )
}

export default App
