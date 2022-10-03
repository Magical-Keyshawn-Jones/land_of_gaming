import './hangmanStyles.css'
import Zenitsu from '../Images/TicTacToe/ZenitsuSleeping.gif'


/* 
    Key: hm = hangman

    Goal: 
        1. Choose Opponent - Player or Computer
        2. Guess a letter
            A. If letter is wrong, then add it to the list of letters used
            B. If letter is correct, then reveal it in the word
        3.  You get 7 chances
        4. Guess the Word you win! Lose all chances, then you loose
*/

function Hangman () {
    return (
        <main className='hangmanBody'>
            <main>

                <div className='hmConstruction'>
                    <h1>Under Construction at the Moment</h1>
                    <div>
                        <img src={Zenitsu} alt='Construction Sign' />
                    </div>
                </div>

                <section className='hmRules'>
                    <h1> Rules </h1>
                    <ul>
                        <li> Guess a letter </li>
                        <li> You get 7 chances to guess the word </li>
                        <li> Guess the word within 7 tries and you win!</li>
                    </ul>
                </section>
            </main>
        </main>
    )
}

export default Hangman