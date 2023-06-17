import React from 'react'
import OrderInfo from '../components/statistic/OrderInfo';
import UserInfo from '../components/statistic/UserInfo';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../redux/features/order/orderSlice'

export const ControlPage = () => {

  const dispatch = useDispatch()
  const { orders } = dispatch(getAllOrders())
  const isOrdersLoading = orders.status === 'loading';
  console.log(orders)
  useEffect(() => {
    dispatch(getAllOrders())
  }, [dispatch])

  return (
    <div className='flex space-x-20'>

        {orders?.map((order, idx) => (
          <OrderInfo key={idx} order={order} />
        )
        )}

        {/* Если срабатывает кнопка пользователи */}
        {/* <UserInfo /> */}


    </div>
  )
};