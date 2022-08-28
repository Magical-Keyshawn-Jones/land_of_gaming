/* 
    Classes: 
    -constructors are arguments
    -supers steal parent constructors
    -children inherit all methods
*/
class Players {
    constructor(player) {
        this.player = player 
    }

    name () {
        console.log(this.player)
    }
}

const dahBaby = new Players('dahBaby')

class User extends Players {
    constructor(player, score) {
        super(player)
        this.score = score
    }
}

const doorknob = new User('doorknob', 10)
console.log(doorknob)
console.log(dahBaby)
dahBaby.name()
doorknob.name()