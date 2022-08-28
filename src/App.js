import './App.css';

// KnuckleBones Imports
import { 
  one, two, three, four, five, six, useDiceNumber 
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
        useDiceNumber={useDiceNumber}
        />} />
      </Routes>

    </main>
  );
}

export default App;