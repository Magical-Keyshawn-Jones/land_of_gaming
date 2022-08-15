import './knuckleBonesStyles.css'

// Notes
// Player Two- Maybe make a random name generator or 
export default function KnuckleBones () {

    class Game {
        constructor(set) {
            this.title = set.title 
        }

        shoutOut () {
            console.log(this.title)
        }
    }
    
    const dahBaby = new Game({
        title: 'DahBaby'
    })

    const VideoGame = (set) => {
        return (
            <div>
                <h1>{set.title}</h1>
            </div>
        )
    }

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
                        {VideoGame(dahBaby)}
                    </div>
                </section>
            </div>

        </main>
    )
}