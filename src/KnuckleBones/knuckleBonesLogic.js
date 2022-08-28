import { useState } from 'react'
/*
    Notes

    1) Checks if all columns are full for either team
    2) dice roll function- determines what number is on the dice
    3) check Columns function- checks if a column is empty
        If column is empty only look at the ones that are not empty
        
        if there is a matching number insert number 
        -into that column 
        -multiply the value by 1,2, or 3
        -change the box to a pale yellow
        -then add points

        if opponent has the same number
        -place it in that column
        -destroy matching numbers on the opposite team
        -then deduct points

        else place randomly
    3) checks if all columns are full for either team 
        Announce winner, looser, or draw

    *Points: store points inside of classes
    *Grid: for now put inside of state. Try to implement it into classes
    
    + I should try to use classes for this
    + A dice function - on click changes the box to a dice number
*/

// Dice Numbers
function one () {
    const one = (
        <div className='one'></div>
    )

    return one
}

function two () {
    const two = (
        <div className='dice'>
            <div className='two'></div>
            <div className='two'></div>
        </div>
    )

    return two
}

function three () {
    const three = (
        <div className='dice' id='gap3'>
            <div className='three'></div>
            <div className='three'></div>
            <div className='three'></div>
        </div>
    )

    return three
}
function four () {
    const four = (
        <div className='dice'>
            <div className='four'></div>
            <div className='four'></div>
            <div className='four'></div>
            <div className='four'></div>
        </div>
    )

    return four
}
function five () {
    const five = (
        <div className='dice'>
            <div className='five'></div>
            <div className='five'></div>
            <div className='five'></div>
            <div className='five'></div>
            <div className='five'></div>
        </div>
    )

    return five
}
function six () {
    const six = (
        <div className='dice' id='gap6'>
            <div className='six'></div>
            <div className='six'></div>
            <div className='six'></div>
            <div className='six'></div>
            <div className='six'></div>
            <div className='six'></div>
        </div>
    )

    return six
}

// Custom hook for changing box numbers
function useDiceNumber (index, numberFunction) {
    const [user, setUser] = useState([
        1,2,3,
        4,5,6,
        7,8,9
     ])

     function changeNumber (index, numberFunction) {
        user[index] = numberFunction
     }

     return [user, changeNumber]
    }

export {
    one,
    two,
    three,
    four,
    five,
    six,
    useDiceNumber
}