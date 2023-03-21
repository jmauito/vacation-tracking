import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { StatusRequest } from '../../vacationTrackingProcess/statusRequest/StatusRequest';
import { VacationRequest } from '../../vacationTrackingProcess/vacationRequest/VacationRequest';
import { VacationRequestList } from '../../vacationTrackingProcess/vacationRequestList/VacationRequestList';
import { UserContext } from '../contextManager/UserContext';

export const PrivateRoute = () => {

  const {statusLogin} = useContext(UserContext);
  const {role} = statusLogin;

  return (
    <Routes>
    { (role.name === 'ROLE_USER' || role.name === 'ROLE_ADMIN') &&
       (
        <>
          <Route path="/*" element={<Navigate to="/solicitud-vacaciones"/>}/>
          <Route path="/solicitud-vacaciones" element={<VacationRequest />} exact />
          <Route path="/estado-solicitudes-vacaciones" element={<StatusRequest />} exact />
        </>
      )}
    {(role.name === 'ROLE_ADMIN') &&
       (
        <>
          <Route path="/*" element={<Navigate to="/revision-solicitudes-vacaciones"/>}/>
          <Route path="/revision-solicitudes-vacaciones" element={<VacationRequestList />} exact />
        </>
      )}
    </Routes>
  )
}

export default PrivateRoute;