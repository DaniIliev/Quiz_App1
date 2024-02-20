import { useState } from 'react'
import MoneyList from './components/shared/MoneyList'
import Timer from './components/shared/Timer'
import Quiz from './components/shared/Quiz'

function App() {
const data = [
  {
    id:1,
    question: 'Kolko e 1+1',
    answers:[
      {
        text: '4',
        correct: false,
      },
      {
        text: '3',
        correct: false,
      },
      {
        text: '2',
        correct: true,
      },
      {
        text: '5',
        correct: false,
      }
    ]
  },
  {
    id:1,
    question: 'Kolko e Daniel',
    answers:[
      {
        text: 'pluvec',
        correct: true,
      },
      {
        text: 'glupak',
        correct: false,
      },
      {
        text: 'voleibolist',
        correct: true,
      },
      {
        text: 'Damyan',
        correct: false,
      }
    ]
  },
  {
    id:1,
    question: 'Kolko e gosho',
    answers:[
      {
        text: 'gosho',
        correct: true,
      },
      {
        text: 'glupak',
        correct: false,
      },
      {
        text: 'voleibolist',
        correct: true,
      },
      {
        text: 'Damyan',
        correct: false,
      }
    ]
  }
]
  return (
    <>
    <div className="app">
        <div className="main">
          <div className="top">
            <Timer />
          </div>
            <div className="bottom">
              <Quiz /> 
            </div>
        </div>
        <div className="pyramide">
          <MoneyList />
        </div>
    </div>
    </>
  )
}

export default App
