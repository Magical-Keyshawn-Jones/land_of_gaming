import './knuckleBonesStyles.css'

/*Notes
    Player Two- Maybe make a random name generator or the user customize their opponent's name
    Create a custom hook that 
    -takes in the number you want to change,
    -a function you want to change it to
*/

export default function KnuckleBones (props) {
    const {
        one, two, three, four, five, six, useDiceNumber
    } = props
    
    const [user, setUser] = useDiceNumber()
    const [opponent, setOpponent] = useDiceNumber()

    // Box function
    function box (index) {

        if (index !== Number(index)) {
            const customBox = (
                <div className='box' key={index}>
                    {index}
                </div>
            )

            return customBox
        } else {
            const box = (
                <div className='box' key={index}>
                    {six()}
                </div>
            )

            return box
        }

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
                        <h1>Player One</h1>
                    </div>

                    <div className='game' >
                        <div className='playerTwoBox' >
                            <section>
                                {opponent.map(item => {
                                    return box(item)
                                })}
                            </section>
                        </div>

                        <div className='playerOneBox' >
                           <section>
                            {user.map(item => {
                                return box(item)
                            })}
                           </section>
                        </div>
                    </div>

                    <div className='playerTwo' >
                        <h1>Player Two</h1>
                    </div>
                </section>
            </div>

        </main>
    )
}