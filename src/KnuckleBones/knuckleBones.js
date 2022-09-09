import './knuckleBonesStyles.css'
import { useState, useEffect } from 'react';

/*Notes
    Player Two- Maybe make a random name generator or the user customize their opponent's name
    Create a custom hook that 
    -takes in the number you want to change,
    -a function you want to change it to
    -Points: Points are given based on the dice
        -If a column has 3 5s then each 5 is worth 15(5x3) and the total would be 45
        -If a column has 2 5s, each is worth 10(5x2) for a total of 20

    Current Goal: fix opponent changing user dice to a large # when matching
*/

export default function KnuckleBones (props) {
    const {
        one, two, three, four, five, six
    } = props 
    
    // initial values for state
    // ***These numbers *have to* be above 9 because of boxMatch(can be optimized)
    const initialNumbers = [19, 20, 21, 22, 23, 24, 25, 26, 27]
    const initialRandomNumbers = [10,11,12,13,14,15,16,17,18]

    const [user, setUser] = useState(initialNumbers)
    const [userNumbers, setUserNumbers] = useState(initialNumbers)
    const [userHelper, setUserHelper] = useState(initialNumbers)

    const [opponent, setOpponent] = useState(initialNumbers)
    const [opponentNumbers, setOpponentNumbers] = useState(initialRandomNumbers)
    const [opponentHelper, setOpponentHelper] = useState(initialNumbers)

    // Decides what dice will be used
    const [diceSelector, setDiceSelector] = useState(diceCalculator())
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)

    // random is used to stop rerender loop for boxMatcher()
    const [random, setRandom] = useState()
    const [turn, setTurn] = useState(1)

// Checks if All columns are full or empty
function finishedGame (player) {

    const userTruth = user.filter(item => item === Number(item))
    const opponentTruth = opponent.filter(item => item === Number(item))

    if(player === 'user') {
        if (!userTruth.length) {
            console.log('User Wins!')
            setScore1(0)
            setScore2(0)
            setUser(initialNumbers)
            setUserNumbers(initialNumbers)

            setOpponent(initialNumbers)
            setOpponentNumbers(initialRandomNumbers)
            setTurn(1)
        } else {
            return false
        }
    } else if (player === 'opponent') {
        if (!opponentTruth.length) {
            console.log('Opponent Wins!')
            setScore1(0)
            setScore2(0)
            setUser(initialNumbers)
            setUserNumbers(initialNumbers)

            setOpponent(initialNumbers)
            setOpponentNumbers(initialRandomNumbers)
            setTurn(1)
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
    if (turn === 2) {
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
    
    // setUser(list)
    setUserHelper(list) 
    setUserNumbers(numberList)
    setTurn(2)
    setDiceSelector(diceCalculator())
    setRandom(Math.random() * 5)
}

// Stuff for AI opponent
if (turn === 2) {
    
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
    setTurn(1)
    setDiceSelector(diceCalculator())
    setRandom(Math.random() * 5)
}

// Checks if box matches
function boxMatcher() {
    //     1,2,3,
    //     4,5,6,
    //     7,8,9

    // const boxes = list ? list : opponent

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

    // User boxes
    const userB1 = userHelper.filter((number, index) => {
        return index === 0 || index === 3 || index === 6 
    })
    const userB2 = userHelper.filter((number, index) => {
        return index === 1 || index === 4 || index === 7
    })
    const userB3 = userHelper.filter((number, index) => {
        return index === 2 || index === 5 || index === 8
    })
    const userBoxes = [userB1, userB2, userB3]

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

    // Opponent column matches
    let cMatch1 = []
    let cMatch2 = []
    let cMatch3 = []

    // OpponentLoop finds 2 or more of the same number
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if (x === 0) {
                if (opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number === opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch1 = numberHolder
                    } 
                }
            } else if (x === 1) {
                if (opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number ===opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch2 = numberHolder
                    } 
                }
            } else if (x === 2) {
                if (opponentColumns[x].includes(opponentColumns[x][y])) {
                    const numberHolder = opponentColumns[x].filter(number => number === opponentColumns[x][y])
                    if (numberHolder.length >= 2) {
                        cMatch3 = numberHolder
                    } 
                }
            }
        }
    }

    // Opponent/ adding and setting opponent score
    let opponentScore = 0
    cMatch1 = cMatch1.map(number => {return number * cMatch1.length})
    cMatch1.forEach(number => opponentScore += number)

    cMatch2 = cMatch2.map(number => {return number * cMatch2.length})
    cMatch2.forEach(number => opponentScore += number)
    
    cMatch3 = cMatch3.map(number => {return number * cMatch3.length})
    cMatch3.forEach(number => opponentScore += number)
    setScore2(opponentScore)
    
    if (turn === 1) {
        // Storing new user Div boxes
        const userResults = []

        // Updates Div Box for user
        for (let x = 0; x <= 2; x++) {
            for (let y = 0; y <= 2; y++) {
                if (userColumns[x].includes(opponentColumns[x][y])) {
                    const index = userColumns[x].indexOf(opponentColumns[x][y])

                    userColumns[x][index] = Math.floor(Math.random() * 100000)
                    userBoxes[x][index] = Math.floor(Math.random() * 100000)
                    x = 0
                }
            }
        }
        
        // Turn into a for loop
        userResults.push(userB1[0])
        userResults.push(userB2[0])
        userResults.push(userB3[0])

        userResults.push(userB1[1])
        userResults.push(userB2[1])
        userResults.push(userB3[1])
        
        userResults.push(userB1[2])
        userResults.push(userB2[2])
        userResults.push(userB3[2])

        setUser(userResults)
    }

    // Put this inside an object for simplicity
    //  User columns matches
    let uMatch1 = []
    let uMatch2 = []
    let uMatch3 = []
    // let normalNumbers = 0
    let otherNumbers = 0
    let userScore = 0
    
    // UserLoop finds 2 or more of the same number
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            
            const numberHolder = userColumns[x].filter(number => number === userColumns[x][y])
            const trueNumbers = userColumns[x].filter(number => number >= 1 && number <=6)
            const bestNumbers = userColumns[x].filter(number => number >= 1 && number <= 6 && number !== numberHolder[0])

            if (x === 0) {
                if (userColumns[x].includes(userColumns[x][y])) {

                    if (numberHolder.length <= 1) {
                        otherNumbers = trueNumbers
                    } 
                    else if (numberHolder.length === 2) {
                        uMatch1 = numberHolder
                        otherNumbers = bestNumbers

                    } else if (numberHolder.length === 3) {
                        uMatch1 = numberHolder
                        otherNumbers = [0]
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

    // User/ adding and setting user Score
    uMatch1 = uMatch1.map(number => {return number * uMatch1.length})
    uMatch1.forEach(number => userScore += number)

    uMatch2 = uMatch2.map(number => {return number * uMatch2.length})
    uMatch2.forEach(number => userScore += number)
    
    uMatch3 = uMatch3.map(number => {return number * uMatch3.length})
    uMatch3.forEach(number => userScore += number)
    otherNumbers.forEach(number => userScore += number)

    setScore1(userScore)
}

//  On any change checks if the game is done and any matching boxes
useEffect(() => {
    boxMatcher()
    //eslint-disable-next-line
}, [random])

useEffect(() => {
    finishedGame('user')
    finishedGame('opponent')
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
                            {turn === 1 ? diceSelector.box : box(1,1)}
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
                            {turn === 1 ? box(1,1) : diceSelector.box}
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