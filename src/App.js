import './App.css';
import { connect } from 'react-redux';

// KnuckleBones Imports
import { 
  one, two, three, four, five, six, Players
} from './KnuckleBones/knuckleBonesLogic';

// Applications Imports
import { KnuckleBones, HomePage } from './Storage/appExports'
import { Link, Routes, Route } from 'react-router-dom'

// Games I want to make
// TicTacTo,
// Fortune Things (You shake it and it gives an answer)  
// This could be optimized(honestly, look better) by not sending everything through the Parent and instead send to directly to the child I'm sending it to

function App() {

  return (
    <main>
      <header className='navBar'>
        <h1>Games</h1>
        <nav>
          <Link to='/' className='link homeButton' > Home </Link>
          <Link to='/KnuckleBones' className='link' > KnuckleBones </Link>
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
        Players={Players}
        />} />
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