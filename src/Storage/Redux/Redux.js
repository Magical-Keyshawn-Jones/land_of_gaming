import { createSlice } from "@reduxjs/toolkit";
import { one, two } from "../../KnuckleBones/knuckleBonesLogic";

// KnuckleBones

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

export const { setBox } = kbUserBoxes.actions
export {
    kbUserBoxes
}