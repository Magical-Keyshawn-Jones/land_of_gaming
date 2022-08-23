import './knuckleBonesStyles.css'
import { useState } from 'react'

// Notes
// Player Two- Maybe make a random name generator or the user customize their opponent's name

export default function KnuckleBones () {

    // Initial Board Game Values for User & Opponent
    const player1 = [
        1,2,3,
        4,5,6,
        7,8,9
    ]

    const player2 = [
        1,2,3,
        4,5,6,
        7,8,9
    ]

    const [user, setUser] = useState(player1)
    const [opponent, setOpponent] = useState(player2)

    return (
        <main className='knuckleBones' >
            <h1 className='title' >Welcome to KnuckleBones</h1>

            <div className='body' >
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

                <section className='gameContainer' >
                    <div className='playerOne' >
                        <h1>Player One</h1>
                    </div>

                    <div className='game' >
                        <h1>Insert Game here!</h1>
                    </div>

                    <div className='playerTwo' >
                        <h1>Player Two</h1>
                    </div>
                </section>
            </div>

        </main>
    )
}