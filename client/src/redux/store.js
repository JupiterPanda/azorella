import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import orderSlice from './features/order/orderSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        order: orderSlice,
    },
})