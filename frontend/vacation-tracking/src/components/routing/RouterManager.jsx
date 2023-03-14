import React, { useContext } from 'react'
import {  Route, Routes } from 'react-router-dom'
import { UserContext } from '../contextManager/UserContext'
import PrivateRoute from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const RouterManager = () => {

  const {statusLogin} = useContext(UserContext);
  const {status} = statusLogin;

  return (
    <Routes>
        {
          (status === 'authenticated')
          ? <Route path="/*" element={<PrivateRoute />}  />
          : <Route path='/*' element={<PublicRoute />}/>
        }
    </Routes>
  )
}