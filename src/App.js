import './App.css';
import './KnuckleBones/knuckleBonesStyles.css'

import { KnuckleBones, HomePage } from './Storage/appExports'
import { Link, Routes, Route } from 'react-router-dom'

// Games I want to make
// TicTacTo,
// Fortune Things (You shake it and it gives an answer) 
function App() {
  return (
    <main>

      <header className='navBar'>
        <h1>Games</h1>
        <nav>
          <Link to='/' className='link homeButton' >Home</Link>
          <Link to='/KnuckleBones' className='link' >KnuckleBones</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/KnuckleBones' element={<KnuckleBones/>} />
      </Routes>

    </main>
  );
}

export default App;