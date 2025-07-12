import {createSlice} from '@reduxjs/toolkit';

interface User {
    username: string;
    jwt: string;
}

const initialState: User = {
    username: '',
    jwt: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {
            state.username = action.payload.username;
            state.jwt = action.payload.jwt;
        },
        logout: (state) => {
            localStorage.removeItem('jwt');
            localStorage.removeItem('username');

            state.username = '';
            state.jwt = '';
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
