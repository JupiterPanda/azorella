import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const initialState = {
    fullName: null,
    token: null,
    isLoading: false,
    status: null,
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({email, password, fullName, phoneNumber}) => {
        try {
            const { data } = await axios.post('/user/register', {email, password, fullName, phoneNumber})
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)
 
export const loginUser = createAsyncThunk('auth/loginUser', async ({email, password}) => {
        try {
            const { data } = await axios.post('/user/login', {email, password})
            if (data._id === "64862ef5fea926d6b7c7737d") {
                window.localStorage.setItem('isadmin', 1)
            }
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    },
)

export const getMe = createAsyncThunk('auth/me', async () => {
    try {
        const { data } = await axios.get('/user/me')
        if (data._id === "64862ef5fea926d6b7c7737d") {
            window.localStorage.setItem('isadmin', 1)
        }
        window.localStorage.setItem('token', data.token)
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
            window.localStorage.removeItem('isadmin')
            window.localStorage.removeItem('token')
        },
    },
    extraReducers: {
        // Register user
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.email = action.payload.email
            state.token = action.payload.token
        },
        [registerUser.rejectWithValue]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },
        // Login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.email = action.payload.email
            state.token = action.payload.token
        },
        [loginUser.rejectWithValue]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },
        // // Проверка авторизации
        [getMe.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [getMe.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = null
            state.email = action.payload?.email
            state.token = action.payload?.token
        },
        [getMe.rejectWithValue]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        },
    },
})

export const checkIsAdmin = () => Boolean(window.localStorage.getItem('isadmin'))
export const checkIsAuth = (state) => Boolean(window.localStorage.getItem('token'))

export const { logout } = authSlice.actions
export default authSlice.reducer