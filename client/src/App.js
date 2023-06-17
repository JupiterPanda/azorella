import { Layout } from './components/Layout.jsx'
import { Routes, Route } from 'react-router-dom'
import { MainPage, RegisterPage, LoginPage, KabinetPage, ErrorPage, AddOrderPage, ControlPage } from './pages/pages.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMe } from './redux/features/auth/authSlice.js'

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='lk' element={<KabinetPage />} />
        <Route path='order' element={<AddOrderPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='control' element={<ControlPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </Layout>
  )
}

export default App