import './App.css';
import { connect } from 'react-redux';
import { 
  one, two, three, four, five, six
} from './KnuckleBones/knuckleBonesLogic';

// Applications Imports
import { 
  HomePage, KnuckleBones, TicTacToe, Hangman,
  GamingForum
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

function App(props) {
  
  return (
    <main className='appBody'>
      <header className='navBar'>
        <h1>Games</h1>
        <nav>
          <Link to='/GamingForum/login' className='link' > Gaming Forum </Link>
          <Link to='/' className='link' > Portfolio </Link>
          <Link to='/KnuckleBones' className='link' > KnuckleBones </Link>
          <Link to='/TicTacToe' className='link' > TicTacToe </Link>
          <Link to='/Hangman' className='link' > Hangman </Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>} />
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
        <Route path='/GamingForum/*' element={<GamingForum/>} />
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