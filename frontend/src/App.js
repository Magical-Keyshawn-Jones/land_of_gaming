import './App.css';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { 
  one, two, three, four, five, six
} from './KnuckleBones/knuckleBonesLogic';

// Applications Imports
import { 
  HomePage, KnuckleBones, TicTacToe, Hangman
} from './Storage/appExports'
import { Link, Routes, Route } from 'react-router-dom'


// Make navBar look professional
// Add fun anime gifs and pictures everywhere, decorate the website
// KnuckleBones Imports
/*Games I want to make
  HangMan
  Remake TicTacToe with UnbeatAble AI
  Guess the Number/User 
  Rock Paper Scissors
  password generator
  Fortune Things (You shake it and it gives an answer)  
  This could be optimized(honestly, look better) by not sending everything through the Parent and instead send to directly to the child I'm sending it to
*/

// const express = require('express')

// const server = express()

// server.use(express.json())

// server.use('/', (req, res) => {
//     console.log('You did it!')
//     res.json({message: 'Welcome to Land of Gaming!'})
// })

function App() {
  // Storing API data 
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('/welcome') 
    .then(res => {
      setData(res.data)
      // console.log(res.data.message)
    })
    .catch(err => {
      console.log('Error!', err)
    })
  },[])

  return (
    <main className='appBody'>
      <header className='navBar'>
        <h1>{data.Message}</h1>
        <nav>
          <Link to='/' className='link homeButton' > Portfolio </Link>
          <Link to='/KnuckleBones' className='link' > KnuckleBones </Link>
          <Link to='/TicTacToe' className='link' > TicTacToe </Link>
          <Link to='/Hangman' className='link' > Hangman </Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage test={data.message} />} />
        <Route path='/KnuckleBones' element={<KnuckleBones
        one={one}
        two={two}
        three={three}
        four={four}
        five={five}
        six={six}
        />} />
        <Route path='/TicTacToe' element={<TicTacToe/>} />
        <Route path='/Hangman' element={<Hangman/>} />
      </Routes>
    </main>
  );
}

// Redux Storage Container 
function GrabbingStorage(state) {
  return {
    kbUserBoxes: state.kbUserBoxes
  }
}

// Connecting storage to the App
export default connect(GrabbingStorage)(App)