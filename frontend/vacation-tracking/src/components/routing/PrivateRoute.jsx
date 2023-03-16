import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { StatusRequest } from '../../vacationTrackingProcess/statusRequest/StatusRequest';
import { VacationRequest } from '../../vacationTrackingProcess/vacationRequest/VacationRequest';
import { VacationRequestList } from '../../vacationTrackingProcess/vacationRequestList/VacationRequestList';
import { UserContext } from '../contextManager/UserContext';

export const PrivateRoute = () => {

  const {statusLogin} = useContext(UserContext);
  const {role} = statusLogin;

  const redirectRoles = () => {
    if(role.name === 'ROLE_USER'){
      return (
        <>
          <Route path="/*" element={<Navigate to="/solicitud-vacaciones"/>}/>
          <Route path="/solicitud-vacaciones" element={<VacationRequest />} exact />
          <Route path="/estado-solicitudes-vacaciones" element={<StatusRequest />} exact />
        </>
      )
    } else if(role.name === 'ROLE_ADMIN'){
      return (
        <>
          <Route path="/*" element={<Navigate to="/revision-solicitudes-vacaciones"/>}/>
          <Route path="/revision-solicitudes-vacaciones" element={<VacationRequestList />} exact />
        </>
      )
    }
  }

  return (
    <Routes>
      { redirectRoles()}
    </Routes>
  )
}

export default PrivateRoute;