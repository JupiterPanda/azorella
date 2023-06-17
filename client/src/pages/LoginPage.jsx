import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, checkIsAuth } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const handleSubmit = async () => {
    try {
      const data = await dispatch(loginUser({ email, password }))
      if (!data.payload){
        return(alert('Ошибка аунтификации'))
      }
      if (data.payload._id === "64862ef5fea926d6b7c7737d"){
        window.localStorage.setItem('isadmin', 1)
      }
      if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token)
      }
      else alert('Ошибка аунтификации')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='w-1/4 max-h-60 mx-auto mt-20'
    >
      <h1 className='text-lg text-center'>Авторизация</h1>
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

      <div className='flex gap-8 justify-center mt-4'>
        <button
          type='submit'
          onClick={handleSubmit}
          className='flex justify-center items-center bg-gray-600 text-white rounded-sm py-2 px-4'
        >
          Войти
        </button>
        <Link
          to='/register'
          className='flex justify-center items-center text-black'
        >
          Нет аккаунта ?
        </Link>
      </div>
    </form>

  )
}
