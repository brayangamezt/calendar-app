import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status: 'checking', // 'authenticated', 'not-authenticated'
        user:{},
        errorMessage:undefined,
    },
    reducers:{
        onChecking: (state) =>{
            state.status = 'cheking';
            state.user = {};
            state.errorMessage = undefined
        },
        onLogin: ( state, { payload } )=>{
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined
        },
        onLogout: (state, action) =>{
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = action.payload;
        },
        clearErrorMessage: ( state, action )=>{
            state.errorMessage = undefined
        }
    }
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions;