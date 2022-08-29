import './knuckleBonesStyles.css'
import { useState, useEffect } from 'react';

/*Notes
    Player Two- Maybe make a random name generator or the user customize their opponent's name
    Create a custom hook that 
    -takes in the number you want to change,
    -a function you want to change it to
*/

export default function KnuckleBones (props) {
    const {
        one, two, three, four, five, six, 
        useDiceNumber, Players, kbUserBoxes
    } = props

    // Dice Calculator- determines what each player can play
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
    
    // ***setUser*** takes in (index, numberFunction) - it does not change user directly. ***setReset*** changes user
    const [user, setUser, setReset1] = useDiceNumber()
    const [userBoxes, setUserBoxes] = useState(user)
    const [diceSelector, setDiceSelector] = useState(diceCalculator())
    const [opponent, setOpponent, setReset2] = useDiceNumber()
    const score1 = new Players('user1', 0)
    const score2 = new Players('opponent2', 0)

// Checks if All columns are full or empty
function finishedGame (player) {

    const truth = player.filter(item => item !== Number(item))

    if (!truth.length) {
        score1.resetScore()
        score2.resetScore()
        setReset1([1,2,3,4,5,6,7,8,9])
        setReset2([1,2,3,4,5,6,7,8,9])
        return true
    } else {
        return false
    }
    
}

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
            <div className='box' key={index} onClick={() => {selector(index)}} >
                {''}
            </div>
        )
    
        return box
    }
}


// click Handler 
function selector(index) {
    // const list = [1,2,3,4,5,6,7,8,9]
    const list = []
    user.forEach(number => list.push(number))

    list[index] = diceSelector
    setReset1(list)
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
                            {diceSelector}
                        </div>
                        <div className='playerOneName'>
                            <h1>Doorknob</h1>
                        </div>
                    </div> 

                    <div className='game' >
                        <div className='playerTwoBox' >
                            <section>
                                {opponent.map((item, index) => {
                                    return box(item, index)
                                })}
                            </section>
                        </div>

                        <div className='playerOneBox' >
                           <section>
                            {user.map((item, index) => {
                                return box(item, index)
                            })}
                           </section>
                        </div>
                    </div>

                    <div className='playerTwo' >
                        <div className='playerTwoName'>
                            <p>Player Two name</p>
                        </div>
                        <div className='playerTwoDiceNumber'>
                            {box('', 1)}
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