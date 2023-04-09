import { configureStore, createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";


// initial state here
const signModal : object = {
    show : false,
}

const user : object = {
    id : "",
}

const posi : object = {
    clicked : false,
    at : ""
}


// slices here
const openSign = createSlice({
    name : "signUp",
    initialState : signModal,
    reducers : {
        showS : (initialState, e)=>{
            return {...initialState, show:e.payload}
        }
    }
})

const id = createSlice({
    name : "userId",
    initialState : user,
    reducers : {
        saveId : (initializeConnect, e)=>{
            return {...initializeConnect, id : e.payload}
        }
    }
})

const scrollAt = createSlice({
    name : "scrollAt",
    initialState : posi,
    reducers : {
        goAt: (initialState, e)=>{
            return {...initialState, clicked:e.payload.clicked, at:e.payload.at}
        }
    }
})


// action here
export const {showS} = openSign.actions;
export const {saveId} = id.actions;
export const {goAt} = scrollAt.actions;



// store configuration
export const store = configureStore({
    reducer : {
        sign : openSign.reducer,
        id : id.reducer,
        scrollAt : scrollAt.reducer,
    }
})


export default {}