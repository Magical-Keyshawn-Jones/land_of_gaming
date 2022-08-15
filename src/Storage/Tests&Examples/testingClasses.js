
class Game {
    constructor(set) {
        this.title = set.title 
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

console.log(VideoGame(dahBaby))