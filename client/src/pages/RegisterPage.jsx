import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import { checkIsAuth } from '../redux/features/auth/authSlice'

export const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
      if (status) {
          toast(status)
      }
      if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ email, password, fullName, phoneNumber }))
      setEmail('')
      setPassword('')
      setFullName('')
      setPhoneNumber('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='w-1/4 max-h-60 mx-auto mt-20'
    >
      <h1 className='text-lg text-center'>Регистрация</h1>
      <label className=' text-gray-400'>
        Почта:
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
        />
      </label>

      <label className='text-gray-400'>
        Пароль:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
        />
      </label>

      <label className='text-gray-400'>
        Полное имя:
        <input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder='fullName'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
        />
      </label>

      <label className='text-gray-400'>
        Номер телефона:
        <input
          type='text'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder='phoneNumber'
          className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 outline-none placeholder:text-gray-700'
        />
      </label>

      <div className='flex gap-8 justify-center mt-4'>
        <button
          type='submit'
          onClick={handleSubmit}
          className='flex justify-center items-center bg-gray-600 text-white rounded-sm py-2 px-4'
        >
          Подтвердить
        </button>
        <Link
          to='/login'
          className='flex justify-center items-center'
        >
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>

  )
}
