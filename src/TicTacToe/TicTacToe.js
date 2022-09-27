import './TicTacToe.css'
import Zenitsu from '../Images/TicTacToe/ZenitsuSleeping.gif'
import { useState } from 'react'

/* 
    Key: ttt= TicTacToe
    Goals: 
        1. Choose X or O
        2.Decide who plays first
        3.Take turns playing
        4.Decide the winner
        5.Keep Score of Player1 & Player2
*/

function TicTacToe () {
    // Initial TTTBox
    const tttBox = ['', '', '', '', '', '', '', '', '']
    const [box, setBox] = useState(tttBox)
    
    const [player1, setPlayer1] = useState()
    const [player2, setPlayer2] = useState()
    const [winner, setWinner] = useState()
    const [turn, setTurn] = useState('O')

    const topPage = document.getElementsByClassName('tttXO')
    const bottomPage = document.getElementsByClassName('tttGameArea')
    
    function tttFactory(item, index) {
        return (
            <div className='tttBoxes' key={index}>
                <h2>
                    {item}
                </h2>
            </div>
        )
    }

    function xo (item) {
        if (item === 'X') {
            setPlayer1(item)
            setPlayer2('O')
            topPage[0].classList.toggle('noDisplay')
            bottomPage[0].classList.toggle('noDisplay')
        } else if (item === 'O') {
            console.log(item)
            setPlayer1(item)
            setPlayer2('X')
            topPage[0].classList.toggle('noDisplay')
            bottomPage[0].classList.toggle('noDisplay')
        }
    }

    return (
        <main className='tttBody'>
            <main>
            
            <div className='tttConstruction'>
                <h1>Under Construction at the Moment</h1>
                <div>
                    <img src={Zenitsu} alt='construction sign'/>
                </div>
            </div>

            <section className='tttXO'>
                <div>
                    <h1>Play as X or O?</h1>
                    <div>
                        <button onClick={()=>{xo('X')}}>X</button>
                        <button onClick={()=>{xo('O')}}>O</button>
                    </div>
                </div>
            </section>

            <section className='tttGameArea noDisplay'>
                <div className='tttTitle'>
                    <h1>Tic Tac Toe</h1>
                    <div>
                        <p>{!player1 ? 'Player 1 is ?' : `Player 1 is ${player1}`}</p>
                        <p>{!player2 ? 'Player 2 is ?' : `Player 2 is ${player2}`}</p>
                    </div>
                </div>
                <div className='ttt'>
                    {box.map((item, index) => {
                        return tttFactory(item, index)
                    })}
                </div>
                <div className='tttWinner'>
                    <p>{!winner ? '' : `${winner} Wins!`}</p>
                </div>
            </section>
            </main>
        </main>
    )
}

export default TicTacToe