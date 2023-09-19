import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ''
}

//-----------Create Slice take 3 inputs----name of slice(any value),initial state and reducer-----------

export const blogAppSlice = createSlice({
    name:'blogAppSlice',
    initialState,
    reducers:{
        setUsername:(state, action)=>{
            return{
                ...state,
                username: action.payload
            }
        }
    }
})
//-------Export actions to use it in component-------------
export const {setUsername} = blogAppSlice.actions

//-----------------Export reducer-------------------------------------
export default blogAppSlice.reducer