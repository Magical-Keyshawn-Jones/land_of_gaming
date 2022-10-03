import './TicTacToe.css'
import Zenitsu from '../Images/TicTacToe/ZenitsuSleeping.gif'
import { winConditions } from './TicTacToeLogic'
import { useState, useEffect } from 'react'

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
    
    const [player1, setPlayer1] = useState('x')
    const [player2, setPlayer2] = useState('o')
    const [computer, setComputer] = useState(false)
    const [winner, setWinner] = useState()
    const [turn, setTurn] = useState()
    const [playerTurn, setPlayerTurn] = useState(true)

    const xoSelector = document.getElementsByClassName('tttXO')
    const chooseOpponent = document.getElementsByClassName('tttChoose')
    const bottomPage = document.getElementsByClassName('tttGameArea')
    const boxes = document.getElementsByClassName('tttBoxes')

    
    function restart() {
        setBox(tttBox)
        setPlayer1()
        setPlayer2()
        setWinner()
        xoSelector[0].classList.toggle('noDisplay')
        bottomPage[0].classList.toggle('noDisplay')
        box.forEach((item, index) => boxes[index].classList.remove('noClick'))
    }
    function boxSelector(index) {
        const boxes = []
        box.forEach(item => boxes.push(item))

        if (computer === true) {
            boxes[index] = player1
            setBox(boxes)
            setTurn(player2)
        } else if (computer === false) {
            if (playerTurn === true) {
                boxes[index] = player1
                setBox(boxes)
                setPlayerTurn(false)
            } else if (playerTurn === false) {
                boxes[index] = player2
                setBox(boxes)
                setPlayerTurn(true)
            }
        }
    }

    function tttFactory(item, number) {
        return (
            <div onClick={() => {boxSelector(number)}} className='tttBoxes' key={number}>
                <h2> {item} </h2>
            </div>
        )
    }
    
    function xo (item) {
        if (item === 'X') {
            setPlayer1(item)
            setPlayer2('O')
            xoSelector[0].classList.toggle('noDisplay')
            chooseOpponent[0].classList.toggle('noDisplay')
        } else if (item === 'O') {
            setPlayer1(item)
            setPlayer2('X')
            xoSelector[0].classList.toggle('noDisplay')
            chooseOpponent[0].classList.toggle('noDisplay')
        }
    }

    function choosingOpponent(answer) {
        setComputer(answer)
        chooseOpponent[0].classList.toggle('noDisplay')
        bottomPage[0].classList.toggle('noDisplay')
    }

    // // Ai Opponent
    if (computer === true) {
        if (turn === player2) {
            const boxes = []
            box.forEach(item => boxes.push(item))
    
            const newBoxes = boxes.filter(item => item !== player1)
            const rNumber = Math.floor(Math.random() * newBoxes.length)
            
            const index = boxes.indexOf(newBoxes[rNumber])
            boxes[index] = player2
            setBox(boxes)
            setTurn(player1)
        }
    }
    
    useEffect(()=>{
        winConditions(box, boxes, setWinner)
    })

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
            <section className='tttChoose noDisplay'>
                <div>
                    <h1>Choose your Opponent</h1>
                    <div>
                        <button onClick={()=>{choosingOpponent(false)}}>Player</button>
                        <button onClick={()=>{choosingOpponent(true)}}>Computer</button>
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
                    {!winner ? <p className='turn display'>{playerTurn === true ? `${player1} Turn` : `${player2} Turn`}</p> : ''}
                    <p>{!winner ? '' : `${winner} Wins!`}</p>
                    {!winner ? '' : <button onClick={()=>{restart()}}>Restart</button>}
                </div>
            </section>
            </main>
        </main>
    )
}

export default TicTacToe