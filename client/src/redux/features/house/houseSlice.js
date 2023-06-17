// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from '../../../axios'

// const initialState = {
//     orders: [],
//     loading: false,
// }

// export const createOrder = createAsyncThunk( 'order/createOrder', async (params) => {
//         try {
//             const { data } = await axios.post('/order', params)
//             return data
//         } catch (error) {
//             console.log(error)
//         }
//     },
// )

// export const getAllOrders = createAsyncThunk('order/getAllOrders', async () => {
//     try {
//         const { data } = await axios.get('/order')
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// })

// export const removeOrder = createAsyncThunk('order/removeOrder', async (id) => {
//     try {
//         const { data } = await axios.delete(`/order/${id}`, id)
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// })

// export const updateOrder = createAsyncThunk('order/updateOrder', async (updatedOrder) => {
//         try {
//             const { data } = await axios.put(
//                 `/order/${updatedOrder.id}`,
//                 updatedOrder,
//             )
//             return data
//         } catch (error) {
//             console.log(error)
//         }
//     },
// )

// export const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {},
//     extraReducers: {
//         // Создание заказа
//         [createOrder.pending]: (state) => {
//             state.loading = true
//         },
//         [createOrder.fulfilled]: (state, action) => {
//             state.loading = false
//             state.orders.push(action.payload)
//         },
//         [createOrder.rejected]: (state) => {
//             state.loading = false
//         },
//         // Получаение всех заказов
//         [getAllOrders.pending]: (state) => {
//             state.loading = true
//         },
//         [getAllOrders.fulfilled]: (state, action) => {
//             state.loading = false
//             state.orders = action.payload.orders
//         },
//         [getAllOrders.rejected]: (state) => {
//             state.loading = false
//         },
//         // Удаление заказа
//         [removeOrder.pending]: (state) => {
//             state.loading = true
//         },
//         [removeOrder.fulfilled]: (state, action) => {
//             state.loading = false
//             state.orders = state.orders.filter(
//                 (order) => order._id !== action.payload._id,
//             )
//         },
//         [removeOrder.rejected]: (state) => {
//             state.loading = false
//         },
//         // Обновление поста
//         [updateOrder.pending]: (state) => {
//             state.loading = true
//         },
//         [updateOrder.fulfilled]: (state, action) => {
//             state.loading = false
//             const index = state.orders.findIndex(
//                 (order) => order._id === action.payload._id,
//             )
//             state.orders[index] = action.payload
//         },
//         [updateOrder.rejected]: (state) => {
//             state.loading = false
//         },
//     },
// })

// export default orderSlice.reducer