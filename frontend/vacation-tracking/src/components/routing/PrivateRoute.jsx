import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { StatusRequest } from '../../vacationTrackingProcess/components/statatusRequest/StatusRequest';
import { VacationRequest } from '../../vacationTrackingProcess/components/vacationRequest/VacationRequest';
// import { MainTemplate } from '../template/MainTemplate';

export const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/solicitud-vacaciones" element={<VacationRequest />} exact />
      <Route path="/estado-solicitudes-vacaciones" element={<StatusRequest />} exact />
      <Route path="/*" element={<Navigate to="/solicitud-vacaciones"/>}/>
    </Routes>
  )
}

export default PrivateRoute;
