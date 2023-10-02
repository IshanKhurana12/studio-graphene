import { useState } from 'react'

import './App.css'
import TopNav from './TopNav'
import Head from './Head'
import Nav from './Nav'
import Fresh from './Fresh'
import Mobiletop from './Mobiletop'
import Mobilenav from './Mobilenav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div id='mrindia'>
     <TopNav />
     <Head />
     <Nav />
    </div>
    <div id='mobile'>
      <Mobiletop />
      <Mobilenav />
    </div>
    </>
  )
}

export default App
