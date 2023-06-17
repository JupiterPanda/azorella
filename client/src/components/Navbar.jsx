import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { checkIsAuth, logout, checkIsAdmin } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import logo from '../img/icon.svg'

export const Navbar = () => {

  const isAuth = useSelector(checkIsAuth)
  const dispatch = useDispatch()
  const isAdmin = useSelector(checkIsAdmin)
  
  const activeStyles = {
    color: 'white',
  }

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('isadmin')
    window.localStorage.removeItem('token')
    toast('Вы вышли из системы')
  }

  return (
    <div className='flex py-0.75 justify-between items-center color-red bg-emerald-950'>
      <span className='flex items-center w-7 h-7 text-white rounded-sm ml-5'>
        <img src={logo} alt="Azorella Logo" />
        <div className='flex text-gray-400 rounded-sm ml-5'>Azorella</div>
      </span>

      <ul className='flex gap-8'>
        <li>
          <NavLink
            to={'/'}
            href='/'
            className='text-gray-400 hover:text-white'
            style={({ isActive }) => isActive ? activeStyles : undefined}
          >
            Главная
          </NavLink>
        </li>

        {isAuth && !isAdmin && (
          <li>
            <NavLink
              to={'/lk'}
              href='/'
              className='text-gray-400 hover:text-white'
              style={({ isActive }) => isActive ? activeStyles : undefined}
            >
              Личный кабинет
            </NavLink>
          </li>
        )}

        {isAdmin && (
          <li>
            <NavLink
              to={'/control'}
              href='/'
              className='text-gray-400 hover:text-white'
              style={({ isActive }) => isActive ? activeStyles : undefined}
            >
              Управление
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            to={'/404'}
            href='#'
            className='text-gray-400 hover:text-white'
            style={({ isActive }) => isActive ? activeStyles : undefined}
          >
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/404'}
            href='#'
            className='text-gray-400 hover:text-white'
            style={({ isActive }) => isActive ? activeStyles : undefined}
          >
            Домики
          </NavLink>
        </li>
      </ul>

      <div className='flex justify-center items-center bg-sky-300 text-gray-700 rounded-l-lg px-4 py-2'>
        {(isAuth || isAdmin) ? (
          <button onClick={logoutHandler}>Выйти</button>
        ) : (
          <Link to={'/login'}> Войти </Link>
        )}
      </div>
    </div>
  )
}