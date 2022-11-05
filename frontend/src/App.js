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

  const {
    links
  } = props

  function currentPage(number,e) {

    for (let x = 0; x < links.length; x++) {
      if (x === number) {
        links[x].classList.add('whiteLink')
      } else {
        links[x].classList.remove('whiteLink')
      }
    }
  }

  return (
    <main className='appBody'>
      <header className='navBar'>
        <h1>Games</h1>
        <nav>
          <Link to='/GamingForum/login' className='link' onClick={()=>{currentPage(0)}} > Gaming Forum </Link>
          <Link to='/' className='link whiteLink' onClick={()=>{currentPage(1)}} > Portfolio </Link>
          <Link to='/KnuckleBones' className='link' onClick={()=>{currentPage(2)}} > KnuckleBones </Link>
          <Link to='/TicTacToe' className='link' onClick={()=>{currentPage(3)}} > TicTacToe </Link>
          <Link to='/Hangman' className='link' onClick={()=>{currentPage(4)}} > Hangman </Link>
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
    links: state.navTabs,
  }
}

// Connecting storage to the App
export default connect(GrabbingStorage)(App)