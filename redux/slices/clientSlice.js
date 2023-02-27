import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clientAuthenticated: {},
    isAdmin: false,
    clientList: [],

}

export const clientSlice = createSlice({
    name: 'clientReducer',
    initialState,
    reducers: {
        getAllClients: (state, payload) => {
        
            state.clientList = payload;
        },
        setAuthClient: (state, payload) => {
            
            state.clientAuthenticated = payload;
            if (client.id === 1) state.isAdmin = true;
            else state.isAdmin = false;
        },
      
    },
});

// Action creators are generated for each case reducer function
export const { getAllClients, setAuthClient } = clientSlice.actions

export default clientSlice.reducer