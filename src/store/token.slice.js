import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const tokenSlice = createSlice({
		name: 'token',
    initialState:'0',
    reducers: {
        
    setToken: (state, action) => action.payload 

    }
})

export const { setToken  } = tokenSlice.actions;

export default tokenSlice.reducer;