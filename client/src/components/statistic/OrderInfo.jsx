// import { Link } from 'react-router-dom'
import './forms.css';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const OrderInfo = ({ order }) => {
    if (!order) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Загрузка...
            </div>
        )
    }

    return (
        <section className='order'>
            <div className="order_content">

                <form
                    className='w-1/4 max-h-60 mx-auto mt-20'
                >
                    <h1 className='text-lg text-center'>Номер заказа: {order._id}</h1>

                    <label className=' text-gray-400'>
                        Номер домика:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {order.houseId}
                        </div>
                    </label>

                    <label className=' text-gray-400'>
                        Колличество гостей:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {order.numGuests}
                        </div>
                    </label>

                    <label className=' text-gray-400'>
                        Дополнительные услуги:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {order.services}
                        </div>
                    </label>

                    <label className=' text-gray-400'>
                        Дата заезда:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {order.arrivalDate}
                        </div>                </label>
                    <label className=' text-gray-400'>
                        Дата отъезда:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {order.departureDate}
                        </div>
                    </label>

                </form>
            </div>

        </section>);
}

export default OrderInfo;


