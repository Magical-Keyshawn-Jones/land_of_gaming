import './knuckleBonesStyles.css'
import { useState } from 'react';

/*Notes
    Player Two- Maybe make a random name generator or the user customize their opponent's name
    Create a custom hook that 
    -takes in the number you want to change,
    -a function you want to change it to
*/

export default function KnuckleBones (props) {
    const {
        one, two, three, four, five, six, Players
    } = props
    
    const [user, setUser] = useState([1,2,3,4,5,6,7,8,9])
    const [opponent, setOpponent] = useState([1,2,3,4,5,6,7,8,9])
    const [diceSelector, setDiceSelector] = useState(diceCalculator())
    const score1 = new Players('user1', 0)
    const score2 = new Players('opponent2', 0)
    const [turn, setTurn] = useState(true)

// Checks if All columns are full or empty
function finishedGame (player, name) {

    const truth = player.filter(item => item === Number(item))

    if(name === 'user') {
        if (!truth.length) {
            console.log('User Wins!')
            score1.resetScore()
            score2.resetScore()
            setUser([1,2,3,4,5,6,7,8,9])
            setOpponent([1,2,3,4,5,6,7,8,9])
            return true
        } else {
            return false
        }
    } else {
        if (!truth.length) {
            console.log('Opponent Wins!')
            score1.resetScore()
            score2.resetScore()
            setUser([1,2,3,4,5,6,7,8,9])
            setOpponent([1,2,3,4,5,6,7,8,9])
            return true
        } else {
            return false
        }
    }
    
}

// box1 = user board
function box1 (item, index) { 

    if (item !== Number(item)) {
        const customBox = (
            <div className='box' key={index}>
                {item}
            </div>
        )
    
        return customBox
    
    } else {
        const box = (
            <div className='box' key={index} onClick={() => {userSelector(index)}} >
                {''}
            </div>
        )
    
        return box
    }
}

// box2 = opponent board
function box2 (item, index) { 

    if (item !== Number(item)) {
        const customBox = (
            <div className='box' key={index}>
                {item}
            </div>
        )
    
        return customBox
    
    } else {
        const box = (
            <div className='box' key={index} >
                {''}
            </div>
        )
    
        return box
    }
}

// Dice Calculator- determines what dice each the player can play
function diceCalculator() {
     const number = Math.floor(Math.random() * 6)
     switch(number) {
         case 0:
             return box(one(), number)
         case 1: 
            return box(two(), number)
        case 2: 
            return box(three(), number)
         case 3: 
             return box(four(), number)
         case 4: 
             return box(five(), number)
         case 5: 
            return box(six(), number)
         default:
             console.log('nothing happened') 
    }
}

// for Dice Selector
function box (item, index) { 

    if (item !== Number(item)) {
        const customBox = (
            <div className='box' key={index}>
                {item}
            </div>
        )
    
        return customBox
    
    } else {
        const box = (
            <div className='box' key={index}>
                {''}
            </div>
        )
    
        return box
    }
}


// click Handlers
function userSelector(index) {
    if (turn === false) {
        return
    }

    const list = []
    user.forEach(number => list.push(number))

    list[index] = diceSelector
    setUser(list)
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

if (turn === false) {
    const numbers = Math.floor(Math.random() * 9)

    const list = []
    opponent.forEach(numbers => list.push(numbers))

    list[numbers] = diceSelector
    setOpponent(list)
    finishedGame(user, 'user')
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

    return (
        <main className='knuckleBones' >
            <h1 className='title' >Welcome to KnuckleBones</h1>

            <div className='body' >

                {/* Rules */}
                <section className='rules' >
                    <h1>Rules</h1>
                    <ul>
                        <h1>Matching</h1>
                        <li>When dice of the same number are placed in the column, multiple their value</li>

                        <h1>Destroy Opponent</h1>
                        <li>Destroy your opponents dice by matching yours to theirs</li>

                        <h1>Winner</h1>
                        <li>Game ends immediately when the first person to fill all their columns with dice</li>
                        <li>Score is calculated by adding all your dice together</li>
                    </ul>
                </section>

                <div className='lineBorder' ></div>

                {/* Board Game */}
                <section className='gameContainer' >
                    <div className='playerOne' >
                        <div className='playerOneScore'>
                            <p>Points</p>
                            {score1.score}
                        </div>
                        <div className='playerOneDiceNumber'>
                            {turn === true ? diceSelector : box(1,1)}
                        </div>
                        <div className='playerOneName'>
                            <h1>Doorknob</h1>
                        </div>
                    </div> 

                    <div className='game' >
                        <div className='playerTwoBox' >
                            <section>
                                {opponent.map((item, index) => {
                                    return box2(item, index)
                                })}
                            </section>
                        </div>

                        <div className='playerOneBox' >
                           <section>
                            {user.map((item, index) => {
                                return box1(item, index)
                            })}
                           </section>
                        </div>
                    </div>

                    <div className='playerTwo' >
                        <div className='playerTwoName'>
                            <p>Player Two name</p>
                        </div>
                        <div className='playerTwoDiceNumber'>
                            {turn === true ? box(1,1) : diceSelector}
                        </div>
                        <div className='playerTwoScore'>
                            <p>Points</p>
                            {score2.score}
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}