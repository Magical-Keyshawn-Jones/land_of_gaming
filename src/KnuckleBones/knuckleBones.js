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
    
    // initial values for state
    const initialNumbers = [1,2,3,4,5,6,7,8,9]
    const initialRandomNumbers = [7,8,9,10,11,12,13,14,15]

    const [user, setUser] = useState(initialNumbers)
    const [userNumbers, setUserNumbers] = useState(initialNumbers)

    const [opponent, setOpponent] = useState(initialNumbers)
    const [opponentNumbers, setOpponentNumbers] = useState(initialRandomNumbers)

    const [diceSelector, setDiceSelector] = useState(diceCalculator())
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const [turn, setTurn] = useState(true)

// Checks if All columns are full or empty
function finishedGame () {

    const userTruth = user.filter(item => item === Number(item))
    const opponentTruth = opponent.filter(item => item === Number(item))

    if(turn === true) {
        if (!userTruth.length) {
            console.log('User Wins!')
            setScore1(0)
            setScore2(0)
            setUser(initialNumbers)
            setUserNumbers(initialRandomNumbers)

            setOpponent(initialNumbers)
            setOpponentNumbers(initialRandomNumbers)
            return true
        } else {
            return false
        }
    } else {
        if (!opponentTruth.length) {
            console.log('Opponent Wins!')
            setScore1(0)
            setScore2(0)
            setUser(initialNumbers)
            setUserNumbers(initialNumbers)

            setOpponent(initialNumbers)
            setOpponentNumbers(initialNumbers)
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

    // Storing userBoxes
    const list = []
    user.forEach(number => list.push(number))
    
    // Storing userNumbers
    const numberList = []
    userNumbers.forEach(number => numberList.push(number))

    list[index] = diceSelector.box
    numberList[index] = diceSelector.currentNumber
    
    setUser(list) 
    setUserNumbers(numberList)
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

// Stuff for AI opponent
if (turn === false) {
    
    // Storing opponentBoxes
    const list = []
    opponent.forEach(numbers => list.push(numbers))

    // Storing opponentNumbers
    const numberList = []
    opponentNumbers.forEach(number => numberList.push(number))
    
    // Variable with only numbers from the list
    const goodNumbers = list.filter(number => number === Number(number))
    // Randomly Selecting a number from the goodNumbers
    const randomNumber = Math.floor(Math.random() * goodNumbers.length)
    // Storing random index
    const index =list.indexOf(goodNumbers[randomNumber])

    list[index] = diceSelector.box
    numberList[index] = diceSelector.currentNumber
    setOpponent(list)
    setOpponentNumbers(numberList)
    setTurn(!turn)
    setDiceSelector(diceCalculator())
}

// Checks if box matches
function boxMatcher() {
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

    let cMatch1 = []
    let cMatch2 = []
    let cMatch3 = []

    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 0; y++) {
            if (x === 0) {
                if(opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number === opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch1 = numberHolder
                    }
                }
            } else if (x === 1) {
                if(opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number === opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch2 = numberHolder
                    }
                }
            } else if (x === 2) {
                if(opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number === opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch3 = numberHolder
                    }
                }
            }
        }
    }

    let opponentScore = 0
    cMatch1.forEach(number => opponentScore += number)
    cMatch2.forEach(number => opponentScore += number)
    cMatch3.forEach(number => opponentScore += number)
    setScore2(opponentScore)

    let uMatch1 = []
    let uMatch2 = []
    let uMatch3 = []

    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if (x === 0) {
                if (userColumns[x].includes(userColumns[x][y])) {
                    const numberHolder = userColumns[x].filter(number => number === userColumns[x][y])
                    if (numberHolder.length >= 2) {
                        uMatch1 = numberHolder
                    } 
                }
            } else if (x === 1) {
                if (userColumns[x].includes(userColumns[x][y])) {
                    const numberHolder = userColumns[x].filter(number => number === userColumns[x][y])
                    if (numberHolder.length >= 2) {
                        uMatch2 = numberHolder
                    } 
                }
            } else if (x === 2) {
                if (userColumns[x].includes(userColumns[x][y])) {
                    const numberHolder = userColumns[x].filter(number => number === userColumns[x][y])
                    if (numberHolder.length >= 2) {
                        uMatch3 = numberHolder
                    } 
                }
            }
        }
    }

    let userScore = 0
    uMatch1.forEach(number => userScore += number)
    uMatch2.forEach(number => userScore += number)
    uMatch3.forEach(number => userScore += number)
    setScore1(userScore)
 }

useEffect(() => {
    finishedGame(user, 'user')
    boxMatcher()
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
                            {score1}
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
                            {score2}
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}