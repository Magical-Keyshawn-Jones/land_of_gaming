

function winConditions(box, boxes, setWinner) {
    // const box = [1,2,3,4,5,6,7,8,9]
    
    // X
    if (box[0] === 'X' && box[1] === 'X' && box[2] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[3] === 'X' && box[4] === 'X' && box[5] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[6] === 'X' && box[7] === 'X' && box[8] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[0] === 'X' && box[3] === 'X' && box[6] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[1] === 'X' && box[4] === 'X' && box[7] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[2] === 'X' && box[5] === 'X' && box[8] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[0] === 'X' && box[4] === 'X' && box[8] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    } else if (box[2] === 'X' && box[4] === 'X' && box[6] === 'X') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('X')
    }

    // O
    else if (box[0] === 'O' && box[1] === 'O' && box[2] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[3] === 'O' && box[4] === 'O' && box[5] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[6] === 'O' && box[7] === 'O' && box[8] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[0] === 'O' && box[3] === 'O' && box[6] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[1] === 'O' && box[4] === 'O' && box[7] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[2] === 'O' && box[5] === 'O' && box[8] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[0] === 'O' && box[4] === 'O' && box[8] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    } else if (box[2] === 'O' && box[4] === 'O' && box[6] === 'O') {
        box.forEach((item, index) => boxes[index].classList.add('click'))
        setWinner('O')
    }

}

export {
    winConditions
}