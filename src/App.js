import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import HomePage from './pages/HomePage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auths/Login';
import SignUp from './pages/auths/SignUp';
import UserRoutes from './components/UserRoutes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayOut />}>

          <Route index element={<HomePage />} />

          <Route element={<UserRoutes />}>
            <Route path='user/login' element={<Login />} />

            <Route path='user/SignUp' element={<SignUp />} />

          </Route>












        </Route>

      </Routes>
      <ToastContainer autoClose={1000} position='top-right' />
    </>
  )
}

export default App
