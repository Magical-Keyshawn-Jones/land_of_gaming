import { createSlice } from "@reduxjs/toolkit";

// KnuckleBones
// This file is not actively being used
// kbUser = KnuckleBones User boxes
const kbUserBoxes = createSlice({
    name: 'kbUserBoxes',
    initialState: [1,2,3,4,5,6,7,8,9],

    reducers: {
        setBox (state, action) {
            switch(action.payload){
                case 0:
                    return state
                case 1:
                    return state
                default:
                    return 'nothing happened'
            }
        }
    }
})

// App.js
const links = document.getElementsByClassName('link')
const navTabs = createSlice({
    name: 'navTabs',
    initialState: links,

    // Reducers set the Slice
    reducers: {
        grabTabs (state, action) {
            state = links.length()
            return state
        },

        testingResults (state, action) {
            state = 'I love people'
            return state
        }
    }
})

export const { setBox } = kbUserBoxes.actions
export const { grabTabs, testingResults } = navTabs.actions
export {
    kbUserBoxes,
    navTabs,
}