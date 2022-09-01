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
        one, two, three, four, five, six, Players
    } = props
    
    // initial Numbers/String Array
    const initialNumbers = [1,2,3,4,5,6,7,8,9]
    const initialString = ['','','','','','','','','']

    const [user, setUser] = useState(initialNumbers)
    const userNumbers = [1,2,3,4,5,6,7,8,9]
    // const [userNumbers, setUserNumbers] = useState(initialNumbers)
    // const [userNumbers, setUserNumbers] = useState(['','','','','','','','',''])

    const [opponent, setOpponent] = useState(initialNumbers)
    const opponentNumbers = [1,2,3,4,5,6,7,8,9]
    // const [opponentNumbers, setOpponentNumbers] = useState(initialNumbers)
    // const [opponentNumbers, setOpponentNumbers] = useState(['','','','','','','','',''])

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
            setUser(initialNumbers)
            // setUserNumbers(initialNumbers)

            setOpponent(initialNumbers)
            // setOpponentNumbers(initialNumbers)
            return true
        } else {
            return false
        }
    } else {
        if (!truth.length) {
            console.log('Opponent Wins!')
            score1.resetScore()
            score2.resetScore()
            setUser(initialNumbers)
            // setUserNumbers(initialNumbers)

            setOpponent(initialNumbers)
            // setOpponentNumbers(initialNumbers)
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
            return {
                 box: box(one(), number),
                 currentNumber: number + 1
            }
         case 1: 
            return {
                box: box(two(), number),
                currentNumber: number + 1
            }
        case 2: 
            return {
                box: box(three(), number),
                currentNumber: number + 1
            }
         case 3: 
             return {
                box: box(four(), number),
                currentNumber: number + 1
            }
         case 4: 
             return {
                box: box(five(), number),
                currentNumber: number + 1
            }
         case 5: 
            return {
                box: box(six(), number),
                currentNumber: number + 1
            }
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


// User Click Handler
function userSelector(index) {
    if (turn === false) {
        return
    }

    const list = []
    user.forEach(number => list.push(number))

    list[index] = diceSelector.box
    userNumbers[index] = diceSelector.currentNumber
    // boxMatcher()
    setUser(list) 
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

// Stuff for AI
if (turn === false) {
    
    // Sending state to closed scope variable
    const list = []
    opponent.forEach(numbers => list.push(numbers))
    
    // Variable with only numbers from the list
    const goodNumbers = list.filter(number => number === Number(number))
    // Randomly Selecting a number from the goodNumbers
    const randomNumber = Math.floor(Math.random() * goodNumbers.length)
    // Storing random index
    const index =list.indexOf(goodNumbers[randomNumber])
    // Storing CurrentNumber
    const diceNumber = diceSelector.currentNumber

    // Storing Index 
    // const diceIndex = columnSelector(diceNumber)

    list[index] = diceSelector.box
    opponentNumbers[index] = diceNumber
    setOpponent(list)
    boxMatcher(diceNumber)
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

// console.log(opponentNumbers)
// Checks if box matches
 function boxMatcher (currentNumber) {
    //     1,2,3,
    //     4,5,6,
    //     7,8,9

    // User Columns
    const userC1 = userNumbers.filter((number, index) => {
        return index === 0 || index === 3 || index === 6 
    })
    const userC2 = userNumbers.filter((number, index) => {
        return index === 1 || index === 4 || index === 7
    })
    const userC3 = userNumbers.filter((number, index) => {
        return index === 2 || index === 5 || index === 8
    })
    const userColumns = [userC1, userC2, userC3]

    console.log(userColumns)
    
    // Opponent Columns
    const opponentC1 = opponentNumbers.filter((number, index) => {
        return index === 0 || index === 3 || index === 6
    })
    const opponentC2 = opponentNumbers.filter((number, index) => {
        return index === 1 || index === 4 || index === 7
    })
    const opponentC3 = opponentNumbers.filter((number, index) => {
        return index === 2 || index === 5 || index === 8
    })
    const opponentColumns = [opponentC1, opponentC2, opponentC3]

    console.log(opponentColumns)

    const matchingNumbers = opponentColumns[0].filter(number => number === Number(number))

    if (matchingNumbers.length === 0) {
           return 
    } else {
        console.log(matchingNumbers)
    }

 }

function columnSelector (number) {
    //     1,2,3,
    //     4,5,6,
    //     7,8,9

    switch (number) {
        case 1:
            return 0
        case 4:
            return 0
        case 7:
            return 0
        case 2:
            return 1
        case 5:
            return 1
        case 8:
            return 1
        case 3:
            return 2
        case 6:
            return 2
        case 9:
            return 2
        default:
            return 'nothing happened'
    }
}

useEffect(() => {
    finishedGame(user, 'user')
})

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
                            {turn === true ? diceSelector.box : box(1,1)}
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
                            {turn === true ? box(1,1) : diceSelector.box}
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