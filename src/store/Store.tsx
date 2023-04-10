import { configureStore, createSlice } from "@reduxjs/toolkit";
import { initializeConnect } from "react-redux/es/components/connect";


// initial state here
const signModal : object = {
    show : false,
    top : 0,
    left : 0,
}

const user : object = {
    id : "",
}

const posi : object = {
    clicked : false,
    at : ""
}

const dash : object = {
    at : "exer"
}


// slices here
const openSign = createSlice({
    name : "signUp",
    initialState : signModal,
    reducers : {
        showS : (initialState, e)=>{
            return {...initialState, show:e.payload.show, top:e.payload.top, left:e.payload.left}
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

const dashAt = createSlice({
    name : "dashboard",
    initialState : dash,
    reducers : {
        save : (initialState, e)=>{
            return {...initialState, at:e.payload}
        }
    }
})


// action here
export const {showS} = openSign.actions;
export const {saveId} = id.actions;
export const {goAt} = scrollAt.actions;
export const {save} = dashAt.actions;



// store configuration
export const store = configureStore({
    reducer : {
        sign : openSign.reducer,
        id : id.reducer,
        scrollAt : scrollAt.reducer,
        dashAt : dashAt.reducer,
    }
})


export default {}