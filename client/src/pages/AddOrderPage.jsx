import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../redux/features/order/orderSlice'

export const AddOrderPage = () => {
    const [houseId, setHouse] = useState('')
    const [numGuests, setNOG] = useState('')
    const [services, setServices] = useState('')
    const [arrivalDate, setArrDate] = useState('')
    const [departureDate, setDepDate] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = () => {
        try {
            dispatch(createOrder({ houseId, numGuests, services, arrivalDate, departureDate }))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const returnHandler = () => {
        navigate('/');
    }

    return (
        <form
            className='w-1/4 max-h-60 mx-auto mt-20'
            onSubmit={(e) => e.preventDefault()}
        >
            <h1 className='text-lg text-center'>Бронирование</h1>
            <label className=' text-gray-400'>
                Выберите домик:
                <div className="relative w-full lg:max-w-sm">
                    <select onChange={(e) => setHouse(e.target.value)} className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700">
                        <option value="648615582cc09e2d19370a41">Опен-спейс</option>
                        <option value="648615702cc09e2d19370a43">Рустик</option>
                        <option value="6486171e2cc09e2d19370a45">Сансет</option>
                    </select>
                </div>
            </label>
            <label className=' text-gray-400'>
                Колличество гостей:
                <input
                    type='Number'
                    value={numGuests}
                    onChange={(e) => setNOG(e.target.value)}
                    placeholder='NumOfGuests'
                    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
                />
            </label>
            <label className=' text-gray-400'>
                Выберите дополнительные услуги:
                <input
                    type='text'
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    placeholder='Services'
                    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
                />
            </label>
            <label className=' text-gray-400'>
                Введите дату заезда:
                <input
                    type='Date'
                    value={arrivalDate}
                    onChange={(e) => setArrDate(e.target.value)}
                    placeholder='InDate'
                    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
                />
            </label>
            <label className=' text-gray-400'>
                Введите дату отъезда:
                <input
                    type='Date'
                    value={departureDate}
                    onChange={(e) => setDepDate(e.target.value)}
                    placeholder='OutDate'
                    className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
                />
            </label>

            <div className='flex gap-8 items-center justify-center mt-4'>
                <button
                    type='submit'
                    onClick={submitHandler}
                    className='flex justify-center items-center bg-gray-600 text-white rounded-sm py-2 px-4'
                >
                    Оформить заказ
                </button>

                <button
                    type='submit'
                    onClick={returnHandler}
                    className='flex justify-center items-center bg-gray-600 text-white rounded-sm py-2 px-4'
                >
                    Вернуться
                </button>
            </div>
        </form>
    )
}