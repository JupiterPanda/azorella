// import { Link } from 'react-router-dom'
import './forms.css';
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UserInfo = ({ user }) => {
    if (!user) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Загрузка...
            </div>
        )
    }
    return (
        <section className='userinfo'>
            <div className="userinfo_content">

                <form
                    className='w-1/4 max-h-60 mx-auto mt-20'
                >
                    <h1 className='text-lg text-center'>Пользователь: {user.id} </h1>

                    <label className=' text-gray-400'>
                        ФИО:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {user.fullName}
                        </div>
                    </label>

                    <label className=' text-gray-400'>
                        email:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {user.email}
                        </div>
                    </label>

                    <label className=' text-gray-400'>
                        Номер телефона:
                        <div className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'>
                            {user.phoneNumber}
                        </div>                    
                    </label>

                </form>

            </div>

        </section>);
}

export default UserInfo;
